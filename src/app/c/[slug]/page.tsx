import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CLIENTS,
  STAGES,
  FORM_URL,
  type ClientPage,
} from "@/data/clients";

export function generateStaticParams() {
  return CLIENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = CLIENTS.find((c) => c.slug === slug);
  return {
    title: client ? `${client.name}様向けご案内 | CMS` : "ご案内 | CMS",
    robots: { index: false, follow: false },
  };
}

export default async function ClientGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = CLIENTS.find((c) => c.slug === slug);
  if (!client) notFound();

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <Header client={client} />
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-8">
        <Hero client={client} />
        <Status client={client} />
        <Schedule client={client} />
        <CashFlow client={client} />
        <RadioSponsor client={client} />
        <Documents client={client} />
        <Apply />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

function Header({ client }: { client: ClientPage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-8">
        <div className="text-lg font-bold tracking-tight text-blue-400">
          CMS
          <span className="ml-2 text-xs font-normal text-slate-400">
            Context Management System
          </span>
        </div>
        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
          {client.name}様 専用ページ
        </span>
      </div>
    </header>
  );
}

function Hero({ client }: { client: ClientPage }) {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <div className="relative">
        <p className="text-sm text-slate-400">{client.name}様</p>
        <h1 className="mt-2 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
          RakuCoreOffice AI + CMS
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            IT導入補助金 活用導入のご案内
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          中小企業向けAIクラウドERP「RakuCoreOffice AI」と、弊社のAIコンテキスト管理サービス（CMS）のパッケージ導入について、
          {client.name}
          様向けの進行状況・スケジュール・お金の流れをこのページでご案内します。内容は随時更新されます。
        </p>
        <p className="mt-3 text-xs text-slate-500">最終更新: {client.updated}</p>
      </div>
    </section>
  );
}

function Status({ client }: { client: ClientPage }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-100">現在のステータス</h2>
      <ol className="mt-6 grid gap-3 sm:grid-cols-6 sm:gap-2">
        {STAGES.map((label, i) => {
          const step = i + 1;
          const done = step < client.stage;
          const current = step === client.stage;
          return (
            <li key={label} className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center">
              <span
                className={
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold " +
                  (done
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                    : current
                      ? "bg-blue-600 text-white"
                      : "border border-slate-700 text-slate-500")
                }
              >
                {done ? "✓" : step}
              </span>
              <span
                className={
                  "text-xs " +
                  (current ? "font-semibold text-blue-300" : done ? "text-emerald-300" : "text-slate-500")
                }
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
      {client.statusNote && (
        <p className="mt-6 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-sm leading-relaxed text-slate-200">
          {client.statusNote}
        </p>
      )}
    </section>
  );
}

const ROUNDS = [
  {
    key: "3次",
    deadline: "2026年7月21日（火）17:00",
    decision: "2026年9月2日（水）（予定）",
    payout: "2026年10月中旬",
    closed: true,
    cash: { barter: "7月中旬", deadline: "7月21日", decision: "9月2日", payout: "10月中旬" },
  },
  {
    key: "4次",
    deadline: "2026年8月25日（火）17:00",
    decision: "2026年10月7日（水）（予定）",
    payout: "2026年11月中旬",
    target: true,
    cash: { barter: "8月中旬", deadline: "8月25日", decision: "10月7日", payout: "11月中旬" },
  },
  { key: "5次", deadline: "公表待ち", decision: "—", payout: "—" },
  { key: "6次", deadline: "公表待ち", decision: "—", payout: "—" },
] as const;

/** クライアントの対象ラウンド（日程確定分）。未設定・公表待ちなら受付中ラウンドにフォールバック */
function clientRound(client: ClientPage) {
  return (
    ROUNDS.find((r) => r.key === client.round && "cash" in r) ??
    ROUNDS.find((r) => "target" in r && r.target)!
  );
}

function Schedule({ client }: { client: ClientPage }) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-100">申請スケジュール</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        補助金（デジタル化・AI導入補助金2026）は申請ラウンド（締切）ごとに受け付けられます。
        現在受付中のラウンドは
        <strong className="text-slate-100">4次締切（2026年8月25日 17:00）</strong>
        で、このラウンドでの申請を標準にご案内しています。
      </p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-xs text-slate-400">
              <th className="py-2 pr-4 font-medium">ラウンド</th>
              <th className="py-2 pr-4 font-medium">申請締切</th>
              <th className="py-2 pr-4 font-medium">交付決定</th>
              <th className="py-2 font-medium">補助金入金（目安）</th>
            </tr>
          </thead>
          <tbody className="text-slate-200">
            {ROUNDS.map((r, i) => {
              const mine = client.round === r.key;
              const target = "target" in r && r.target;
              const closed = "closed" in r && r.closed;
              return (
                <tr
                  key={r.key}
                  className={
                    (i < ROUNDS.length - 1 ? "border-b border-slate-800 " : "") +
                    (mine ? "bg-blue-500/10" : "")
                  }
                >
                  <td className="py-3 pr-4 whitespace-nowrap">
                    {r.key}締切
                    {mine && (
                      <span className="ml-2 rounded bg-blue-600 px-2 py-0.5 text-xs text-white">
                        御社対象{closed && "・申請済み"}
                      </span>
                    )}
                    {closed && !mine && (
                      <span className="ml-2 rounded bg-slate-700 px-2 py-0.5 text-xs text-slate-400">受付終了</span>
                    )}
                    {target && !mine && (
                      <span className="ml-2 rounded bg-emerald-600/80 px-2 py-0.5 text-xs text-white">受付中</span>
                    )}
                  </td>
                  <td className={"py-3 pr-4 " + (target || mine ? "font-semibold" : "text-slate-400")}>{r.deadline}</td>
                  <td className={"py-3 pr-4 " + (target || mine ? "" : "text-slate-400")}>{r.decision}</td>
                  <td className={"py-3 " + (target || mine ? "" : "text-slate-400")}>{r.payout}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        ※ 5次以降の締切日は事務局の公表（随時更新）があり次第ご案内します。
        ※ 補助金入金は交付決定から約6週間後が目安です。
      </p>
    </section>
  );
}

function CashFlow({ client }: { client: ClientPage }) {
  const a = client.amounts;
  const r = clientRound(client);
  const c = r.cash;
  const steps = [
    { when: `${c.barter}`, what: "双方でバーター発注（前提）", amount: null as string | null, dir: null as string | null },
    { when: `${c.deadline}`, what: `補助金申請 締切（${r.key}）`, amount: null, dir: null },
    { when: `${c.decision}`, what: "交付決定（予定）", amount: null, dir: null },
    { when: `${c.decision}`, what: "御社 → システムクラウド（パートナー）へのお支払い", amount: `${a.purchase}万円（税込）`, dir: "out" },
    { when: `${c.decision}`, what: "リエゾン → 御社へのお支払い", amount: `${a.barter}万円`, dir: "in" },
    { when: `${c.payout}`, what: "補助金の入金", amount: `${a.subsidy}万円`, dir: "in" },
  ];
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-100">
          お金の流れ（{r.key}締切〔{c.deadline}〕で申請の場合）
        </h2>
        {!a.confirmed && (
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
            標準例 — 御社の確定金額は個別にご案内します
          </span>
        )}
      </div>
      <ol className="mt-6 space-y-0">
        {steps.map((s, i) => (
          <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[7px] top-5 h-full w-px bg-slate-700" aria-hidden />
            )}
            <span
              className={
                "relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 " +
                (s.dir === "in"
                  ? "border-emerald-400 bg-emerald-500/30"
                  : s.dir === "out"
                    ? "border-rose-400 bg-rose-500/30"
                    : "border-blue-400 bg-blue-500/30")
              }
              aria-hidden
            />
            <div className="min-w-0">
              <p className="text-xs text-slate-400">{s.when}</p>
              <p className="mt-0.5 text-sm text-slate-200">{s.what}</p>
              {s.amount && (
                <p
                  className={
                    "mt-0.5 text-base font-semibold " +
                    (s.dir === "in" ? "text-emerald-300" : "text-rose-300")
                  }
                >
                  {s.dir === "in" ? "+" : "−"}
                  {s.amount}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
        <p className="text-sm text-slate-300">御社の手残り</p>
        <p className="mt-1 text-2xl font-bold text-emerald-300">
          +{a.net}万円<span className="ml-1 text-sm font-normal">（税込）</span>
        </p>
        {client.netNote && (
          <p className="mt-2 text-sm text-slate-300">※ {client.netNote}</p>
        )}
      </div>
      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-sm font-semibold text-slate-200">賃上げ要件について</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          賃上げ要件は申請枠・過去の採択歴により異なります。インボイス枠の初回申請は賃上げ不要です。
          通常枠150万円以上は年平均+3%（過去採択者は+3.5%）の賃上げ計画が必須で、
          未達の場合は補助金返還の可能性があります（免除条件あり）。
          御社がどの枠・条件に該当するかは担当より個別にご案内します。
        </p>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        ※ 他のラウンドで申請される場合は、上記の各時期がラウンドに応じて前後します。
        ※ 金額・時期は補助金の交付決定内容等により変動する場合があります。
      </p>
    </section>
  );
}

function RadioSponsor({ client }: { client: ClientPage }) {
  if (!client.radioSponsor) return null;
  const { from, to } = client.radioSponsor;
  return (
    <section className="mt-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
        オプション特典
      </p>
      <h2 className="mt-2 text-lg font-semibold text-slate-100">
        RKBラジオ「ビールとクワダテ」スポンサー特典
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        本パッケージのオプションとして、RKBラジオで放送中の番組「ビールとクワダテ」のスポンサー特典が付帯します。
      </p>
      <p className="mt-4 inline-block rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
        特典期間: {from} 〜 {to}
      </p>
      <p className="mt-4 text-xs text-slate-500">
        ※ 特典の詳細内容は担当よりご案内します。
      </p>
    </section>
  );
}

function Documents({ client }: { client: ClientPage }) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-100">補助金申請に必要な情報・書類</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        補助金申請にはいくつかの書類のご提出が必要です。まず事前準備ガイドをご覧のうえ、書類は貴社専用のGoogleドライブ共有フォルダへアップロードしてください。
        締切ラウンドに間に合わせるため、お早めのご準備をお願いします。
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="../../prep/"
          className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          事前準備ガイド（最初にお読みください） →
        </a>
        {client.docsFolder && (
          <a
            href={client.docsFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-blue-500/50 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
          >
            貴社専用の書類提出フォルダ →
          </a>
        )}
      </div>
      {!client.docsFolder && (
        <p className="mt-4 text-xs text-slate-500">
          ※ 書類提出用の専用フォルダは担当よりご案内します。
        </p>
      )}
    </section>
  );
}

function Apply() {
  return (
    <section className="mt-8 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-emerald-600/10 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-100">お申込み</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        導入をご決定いただけましたら、以下の申込フォームからお手続きください。
      </p>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        RakuCoreOffice AI 申込フォーム →
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-8 text-sm leading-relaxed text-slate-400">
      <p>
        ご不明点は担当（株式会社リエゾン 金）までお気軽にご連絡ください。このページは進捗にあわせて随時更新します。
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
      <p>© 株式会社リエゾン — 本ページは宛先企業様専用のご案内です。URLの第三者への共有はご遠慮ください。</p>
    </footer>
  );
}
