import type { Metadata } from "next";
import { SUBSIDY_DOCS_URL } from "@/data/clients";

export const metadata: Metadata = {
  title: "補助金申請 事前準備ガイド | CMS",
  robots: { index: false, follow: false },
};

interface StepSpec {
  num: string;
  title: string;
  urgent: boolean;
  body: string;
  url: string | null;
  urlLabel: string | null;
  time: string;
  items?: string[];
  procedure?: string[];
  pitfalls?: string[];
}

const STEPS: StepSpec[] = [
  {
    num: "1",
    title: "gBizIDプライムの取得",
    urgent: true,
    body: "補助金の申請にはgBizIDプライムアカウントが必要です。STEP2・STEP3もこのアカウントが前提になるため、すべての起点です。申請方法は2通りあり、代表者のマイナンバーカードがあればオンラインで最短即日、書類郵送の場合は審査に最大1か月かかります。このページをご覧になった当日のお手続きをお願いします。",
    url: "https://gbiz-id.go.jp/",
    urlLabel: "gBizID（デジタル庁）",
    time: "オンライン: 最短即日 ／ 書類郵送: 最大1か月 — 最優先",
    items: [
      "【オンライン申請（推奨）】代表者ご本人のマイナンバーカード ＋ 署名用電子証明書の暗証番号（英数字6〜16桁。カード受取時に設定したもの）＋ スマートフォン",
      "【書類郵送申請】印刷した申請書 ＋ 法人の印鑑証明書（法務局発行・3か月以内）＋ 会社実印（登録印）での押印",
      "共通: 法人番号（13桁）、代表者の生年月日等の基本情報、SMSを受信できる携帯電話番号、メールアドレス",
    ],
    procedure: [
      "gBizIDサイトで「gBizIDプライム作成」→ オンライン申請 or 書類申請を選択",
      "オンライン: 画面の案内に沿って入力し、スマホでマイナンバーカードを読み取り → 最短即日発行",
      "書類: 申請書を印刷・会社実印を押印し、印鑑証明書を同封して事務センターへ郵送 → 審査（最大1か月）",
      "発行後: ログイン用のスマホアプリ（gBizIDアプリ）の認証設定まで済ませておく",
    ],
    pitfalls: [
      "書類申請の差し戻し3大理由:「角印など登録印以外を押した」「印鑑証明書が発行3か月超」「法人番号の記入ミス」。印影のかすれ・二重押しも不備になります",
      "アカウントは代表者ご本人名義の「プライム」が必要です（gBizIDメンバーや従業員名義では申請できません）",
      "個人事業主の場合は法人番号ではなく個人として取得します",
      "署名用電子証明書の暗証番号を忘れている場合、市区町村窓口での再設定が必要になり日数を要します → 早めの確認を",
      "締切が近い場合はマイナンバーカードによるオンライン申請の一択です",
    ],
  },
  {
    num: "2",
    title: "SECURITY ACTION の宣言",
    urgent: false,
    body: "IPA（情報処理推進機構）の「SECURITY ACTION」で「★一つ星」または「★★二つ星」いずれかの宣言を行います。2026年4月からは新しい「SECURITY ACTION管理システム」に移行しており、gBizIDでログインして宣言する仕組みです（＝STEP1の完了が前提）。宣言後、自己宣言ID（「5」から始まる11桁）はその場で即時発行されます。",
    url: "https://sme-security.ipa.go.jp/",
    urlLabel: "SECURITY ACTION 管理システム",
    time: "STEP1完了後、約15分（ID即時発行）",
    items: [
      "gBizIDアカウント（STEP1で取得したもの。補助金申請に使うアカウントと同一であること）",
      "★一つ星: IPA「情報セキュリティ5か条」に取り組む宣言（最短・おすすめ）",
      "★★二つ星: 「5分でできる！情報セキュリティ自社診断」（25項目）の実施 ＋ 情報セキュリティ基本方針の策定・公開",
    ],
    procedure: [
      "SECURITY ACTION管理システムにgBizIDでログイン",
      "「★一つ星」または「★★二つ星」を選んで宣言（補助金の要件はどちらでも可。急ぎなら一つ星）",
      "発行された自己宣言ID（5から始まる11桁）を控えて弊社に共有",
    ],
    pitfalls: [
      "2026年3月以前の旧システムで取得した「4」から始まるIDは、第2次公募（2026年5月12日）以降は使えません → 新システムでの取り直しが必要です",
      "補助金申請に使うgBizIDと同じアカウントで宣言してください（別アカウントで宣言すると紐づきません）",
    ],
  },
  {
    num: "3",
    title: "IT戦略ナビwith（デジwith）の診断",
    urgent: false,
    body: "中小機構のポータル「デジwith」で経営課題を診断し、「IT戦略マップ」をPDF出力します（申請時に添付）。アンケート形式で5〜10分程度と手軽ですが、事業内容の整理を兼ねて弊社担当がオンラインで画面をご一緒しながら進めるのがおすすめです。",
    url: "https://digiwith.smrj.go.jp/",
    urlLabel: "デジwith（中小機構）",
    time: "STEP1完了後、5〜10分（弊社同席可）",
    items: [
      "デジwithの会員登録（gBizIDプライムに登録したメールアドレスで登録）",
      "基本情報: 業種・所在地・従業員数・事業所数・資本金・売上高（選択式）",
    ],
    procedure: [
      "デジwithで会員登録 →「IT戦略ナビwith」を開く",
      "基本情報（業種・所在地・従業員数など）を選択",
      "「IT戦略マップ」を選択 → 経営課題を1つ → 関連する業務上の問題点を1〜2個 → 解決策を選択",
      "完成した IT戦略マップをPDFでダウンロード → 弊社に共有",
    ],
    pitfalls: [
      "gBizIDプライムの入力欄は「任意」表示ですが、補助金申請に使う場合は入力必須です（未入力だと申請に使えません）",
      "登録メールアドレスはgBizIDプライムと同一にしてください",
      "結果画面のスクリーンショットではなく、必ずPDFファイルをダウンロードして保存してください（申請時に添付します）",
    ],
  },
  {
    num: "4",
    title: "SMS認証用の携帯電話番号のご準備",
    urgent: false,
    body: "申請時にSMS認証が必要です。貴社の役員または従業員の方が管理する携帯電話番号をご準備ください（iPad・IP電話・固定電話は不可）。gBizIDに登録する番号と、交付申請の提出時に使用する番号の2つを使う場面があります。",
    url: null,
    urlLabel: null,
    time: "—",
  },
];

interface DocSpec {
  name: string;
  where: string;
  checks: string[];
  ng: string[];
}

const CORP_DOCS: DocSpec[] = [
  {
    name: "① 履歴事項全部証明書",
    where: "法務局で取得",
    checks: [
      "申請締切日の3か月以内に取得したもの（発行日を必ずご確認ください）",
      "書類名が「履歴事項全部証明書」であること",
      "法務局が発行したものであること",
      "複数ページある場合は全ページを提出",
      "プリンター等で鮮明にスキャンしたPDF",
    ],
    ng: [
      "「現在事項証明書」「代表者事項証明書」は認められません",
      "商号・本店所在地・代表者名は申請書類と一字一句一致させるため、正確な読み取りが必要です（読み取りは弊社で行います）",
    ],
  },
  {
    name: "② 納税証明書",
    where: "税務署で取得",
    checks: [
      "「その1（納税額等証明用）」または「その2（所得金額用）」であること",
      "税目が「法人税」であること",
      "申請時点で取得できる直近分であること",
      "発行元が「税務署」であること",
      "納税額が0円の場合でも、0円の納税証明書が取得できます",
    ],
    ng: [
      "「その3」「その4」、納税の領収書は認められません",
      "消費税や法人事業税の証明書は認められません",
      "都道府県税事務所・市区町村発行のものは認められません",
    ],
  },
  {
    name: "③ 貸借対照表（B/S）・損益計算書（P/L）",
    where: "直近の決算書類から",
    checks: [
      "直近の決算期（前期決算）のものであること",
      "損益計算書と、販売費及び一般管理費の内訳が分かるものをご用意ください",
      "複数ページある場合は全ページを提出",
      "鮮明にスキャンしたPDF",
    ],
    ng: [
      "申請書類に記入する売上・粗利・営業利益等の数値はこの書類と完全に一致している必要があります（不整合は差し戻しの原因。転記は弊社で行います）",
    ],
  },
  {
    name: "④ 勘定科目内訳明細書のうち「役員報酬手当等及び人件費の内訳書」のページ",
    where: "直近の決算書類（申告書一式の中）から",
    checks: [
      "このページ1枚のみで結構です（内訳明細書の一式は不要）",
      "従業員の給与手当・賞与手当の総額が記載されているページです",
    ],
    ng: [
      "給与支給総額の算出では役員報酬・退職金・法定福利費・福利厚生費は含めないルールのため、正確な区分が重要です（算出は弊社で行います）",
    ],
  },
];

const SOLO_DOCS: DocSpec[] = [
  {
    name: "① 本人確認書類（いずれか1つ）",
    where: "運転免許証 または 住民票",
    checks: [
      "運転免許証: 有効期限内のもの。裏面も提出",
      "住民票: 申請締切日の3か月以内に取得、マイナンバーの記載「無し」のもの",
    ],
    ng: [
      "マイナンバーや本籍、保険証番号などの機微情報が記載されている場合は黒塗り・マスキングしてください",
    ],
  },
  {
    name: "② 納税証明書",
    where: "税務署で取得",
    checks: [
      "「その1（納税額等証明用）」または「その2（所得金額用）」",
      "税目が「所得税」であること",
      "直近分・税務署発行",
    ],
    ng: ["消費税や事業税は認められません", "都道府県税事務所・市区町村発行は不可"],
  },
  {
    name: "③ 所得税確定申告書 控（令和7年分）",
    where: "お手元の控え",
    checks: [
      "「所得税の確定申告書 控」で令和7年分であること（やむを得ない事情がある場合は令和6年分も可）",
      "税務署の受領印がある、または e-Tax の受信通知・メール詳細をあわせて提出",
    ],
    ng: [
      "税理士事務所や税理士の印は受領確認として認められません",
      "受領確認ができない場合は「納税証明書その2」とセットで提出することで代用可能です",
    ],
  },
  {
    name: "④ 青色申告決算書 または 収支内訳書（白色の場合）",
    where: "直近分",
    checks: [
      "売上（収入）金額・差引金額・減価償却費が記載されたもの",
      "従業員を雇用している場合は賃金台帳（従業員分）もご用意ください",
    ],
    ng: [],
  },
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
              最初にお願いする4つのステップと必要書類
            </span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            デジタル化・AI導入補助金2026は制度上、代理申請ができないため、申請作業は貴社の役員または従業員の方に行っていただく必要があります。
            そのぶん、書類の読み取り・申請情報の下書き・手続きのナビゲートはすべて弊社（株式会社リエゾン）が伴走します。
            貴社にお願いするのは、<strong className="text-slate-100">以下の4ステップ・書類のご提出・最終確認</strong>だけです。
          </p>
        </section>

        <h2 className="mb-4 text-lg font-semibold text-slate-100">STEP 1〜4: アカウント等のご準備</h2>
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
                  <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                    {s.title}
                    {s.urgent && (
                      <span className="ml-2 rounded bg-amber-500 px-2 py-0.5 align-middle text-xs font-bold text-slate-900">
                        今日着手
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
                  <p className="mt-3 text-xs text-slate-400">所要目安: {s.time}</p>

                  {s.items && (
                    <div className="mt-4 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                      <p className="text-xs font-semibold text-slate-200">ご用意いただくもの</p>
                      <ul className="mt-2 space-y-1.5">
                        {s.items.map((it) => (
                          <li key={it} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                            <span className="mt-0.5 shrink-0 text-blue-400">・</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.procedure && (
                    <div className="mt-3 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                      <p className="text-xs font-semibold text-slate-200">手順</p>
                      <ol className="mt-2 space-y-1.5">
                        {s.procedure.map((p, i) => (
                          <li key={p} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                            <span className="shrink-0 font-semibold text-emerald-400">{i + 1}.</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {s.pitfalls && (
                    <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                      <p className="text-xs font-semibold text-amber-300">つまずきやすいポイント</p>
                      <ul className="mt-2 space-y-1.5">
                        {s.pitfalls.map((p) => (
                          <li key={p} className="flex gap-2 text-xs leading-relaxed text-amber-200/90">
                            <span className="mt-0.5 shrink-0">!</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
                    >
                      {s.urlLabel} →
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <DocsSection
          title="ご提出いただく書類（法人のお客様）"
          intro="いずれもプリンター等で鮮明にスキャンしたPDFでご提出ください。要件を満たさない書類は事務局の審査で差し戻しになるため、取得時に以下のチェックポイントをご確認ください。読み取り・転記・数値の算出はすべて弊社で行います。"
          docs={CORP_DOCS}
        />

        <DocsSection
          title="ご提出いただく書類（個人事業主のお客様）"
          intro="個人事業主として申請される場合は、以下の書類をご用意ください。"
          docs={SOLO_DOCS}
        />

        <section className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">ここから先は弊社が行います</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
            <li>・ご提出書類の内容チェック（差し戻し要件に該当しないか）</li>
            <li>・申請書類への転記の下書き（法人情報・財務数値・給与支給総額の算出など）</li>
            <li>・事業内容・事業の強みなど記述項目のドラフト作成（貴社に最終確認いただきます）</li>
            <li>・申請ポータルでの提出時のオンライン同席ナビゲート</li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            ※ 申請内容への同意・宣誓の選択と提出操作は、制度上ご本人に行っていただきます。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-emerald-600/10 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">書類のご提出</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            書類がそろいましたら、以下のフォームからご提出ください。締切ラウンドに間に合わせるため、そろった分から順次のご提出でも構いません。
          </p>
          <a
            href={SUBSIDY_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            必要情報・書類の提出フォーム →
          </a>
        </section>

        <section className="mt-8 text-xs leading-relaxed text-slate-500">
          <p>
            ※ 過去にIT導入補助金（2022〜2025）で交付決定を受けたことがある場合は、申請できる枠が変わるため必ず事前にお知らせください（わからない場合はその旨で結構です。弊社で確認します）。
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

function DocsSection({
  title,
  intro,
  docs,
}: {
  title: string;
  intro: string;
  docs: DocSpec[];
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{intro}</p>
      <div className="mt-5 space-y-5">
        {docs.map((d) => (
          <div key={d.name} className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
            <h3 className="text-sm font-semibold text-slate-100 sm:text-base">{d.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{d.where}</p>
            <ul className="mt-4 space-y-1.5">
              {d.checks.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            {d.ng.length > 0 && (
              <ul className="mt-3 space-y-1.5 border-t border-slate-700/60 pt-3">
                {d.ng.map((n) => (
                  <li key={n} className="flex gap-2 text-xs leading-relaxed text-amber-300/90">
                    <span className="mt-0.5 shrink-0">!</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
