import type { Metadata } from "next";
import { SUBSIDY_DOCS_URL } from "@/data/clients";

export const metadata: Metadata = {
  title: "補助金申請 事前準備ガイド | CMS",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    num: "1",
    title: "gBizIDプライムの取得",
    urgent: true,
    body: "補助金の申請にはgBizIDプライムアカウントが必要です。取得に2〜3週間かかる場合があるため、このページをご覧になった当日のお手続きをお願いします。法人番号でご取得ください。",
    url: "https://gbiz-id.go.jp/",
    urlLabel: "gBizID（デジタル庁）",
    time: "取得まで2〜3週間 — 最優先",
  },
  {
    num: "2",
    title: "SECURITY ACTION の宣言",
    urgent: false,
    body: "IPA（情報処理推進機構）の「SECURITY ACTION」で「★一つ星」または「★★二つ星」いずれかの宣言を行い、発行される自己宣言ID（11桁）を控えてください。※2026年4月開始の新管理システムで取得した「5」から始まるIDが必要です（第2次公募以降）。",
    url: "https://sme-security.ipa.go.jp/",
    urlLabel: "SECURITY ACTION 管理システム",
    time: "即日〜数日",
  },
  {
    num: "3",
    title: "IT戦略ナビwith（デジwith）の診断",
    urgent: false,
    body: "中小機構のポータル「デジwith」で経営課題を診断し、IT戦略マップをPDF出力します（申請時に添付）。登録はgBizIDプライムのメールアドレスで行うため、STEP1の完了後に実施してください。弊社担当がオンラインで画面をご一緒しながら進めることも可能です。",
    url: "https://digiwith.smrj.go.jp/",
    urlLabel: "デジwith（中小機構）",
    time: "約1時間（弊社同席可）",
  },
  {
    num: "4",
    title: "SMS認証用の携帯電話番号のご準備",
    urgent: false,
    body: "申請時にSMS認証が必要です。貴社の役員または従業員の方が管理する携帯電話番号をご準備ください（IP電話・固定電話は不可）。",
    url: null,
    urlLabel: null,
    time: "—",
  },
];

const DOCS = [
  { name: "履歴事項全部証明書（法務局）", note: "申請締切日の3か月以内に取得・全ページ。「現在事項証明書」は不可" },
  { name: "納税証明書（税務署）", note: "「その1（納税額等証明用）」または「その2（所得金額用）」/ 税目は法人税 / 直近分。納税額0円でも取得できます" },
  { name: "貸借対照表・損益計算書", note: "直近の決算期（前期決算）のもの" },
  { name: "勘定科目内訳明細書のうち「役員報酬手当等及び人件費の内訳書」のページ", note: "このページ1枚のみで結構です（一式は不要）" },
];

export default function PrepPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="text-lg font-bold tracking-tight text-blue-400">
            CMS
            <span className="ml-2 text-xs font-normal text-slate-400">
              Context Management System
            </span>
          </div>
          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            事前準備ガイド
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-8">
        <section className="py-12 sm:py-16">
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl">
            補助金申請の事前準備
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-lg text-transparent sm:text-xl">
              最初にお願いする4つのステップ
            </span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            デジタル化・AI導入補助金2026は制度上、申請作業を貴社の役員または従業員の方に行っていただく必要があります（代理申請不可）。
            そのぶん、書類の読み取り・入力の下書き・手続きのナビゲートはすべて弊社（株式会社リエゾン）が伴走します。
            貴社にお願いするのは、以下の4ステップと書類のご提出、最終確認だけです。
          </p>
        </section>

        <ol className="space-y-5">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className={
                "rounded-2xl border p-6 sm:p-7 " +
                (s.urgent
                  ? "border-amber-500/50 bg-amber-500/10"
                  : "border-slate-800 bg-slate-800/40")
              }
            >
              <div className="flex items-start gap-4">
                <span
                  className={
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold " +
                    (s.urgent ? "bg-amber-500 text-slate-900" : "bg-blue-600 text-white")
                  }
                >
                  {s.num}
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
                    {s.title}
                    {s.urgent && (
                      <span className="ml-2 rounded bg-amber-500 px-2 py-0.5 align-middle text-xs font-bold text-slate-900">
                        今日着手
                      </span>
                    )}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
                  <p className="mt-3 text-xs text-slate-400">所要目安: {s.time}</p>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
                    >
                      {s.urlLabel} →
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">
            あわせてご提出いただく書類（4点）
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            以下の書類を鮮明なスキャンPDFでご提出ください。内容の読み取り・申請書類への転記は弊社で行います。
          </p>
          <ul className="mt-5 space-y-3">
            {DOCS.map((d) => (
              <li key={d.name} className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-sm font-semibold text-slate-200">{d.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{d.note}</p>
              </li>
            ))}
          </ul>
          <a
            href={SUBSIDY_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            必要情報・書類の提出フォーム →
          </a>
        </section>

        <section className="mt-8 text-xs leading-relaxed text-slate-500">
          <p>
            ※ 過去にIT導入補助金（2022〜2025）で交付決定を受けたことがある場合は、申請できる枠が変わるため必ず事前にお知らせください（わからない場合はその旨で結構です）。
          </p>
          <p className="mt-2">ご不明点は担当（株式会社リエゾン 金）までお気軽にどうぞ。</p>
        </section>
      </div>

      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© 株式会社リエゾン</p>
      </footer>
    </main>
  );
}
