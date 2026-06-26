import Link from "next/link";

const FORM_URL = "https://forms.gle/WxzwHpvWzkyZ4gcV9";
const TW_LP_URL = "https://ryeoungkim.github.io/tw-lp/";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <Header />
      <Hero />
      <Pain />
      <Solution />
      <Features />
      <Pricing />
      <CashFlow />
      <ZeroOutOfPocket />
      <FAQ />
      <Trust />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-blue-400">
          CMS
          <span className="ml-2 text-xs font-normal text-slate-400">
            Context Management System
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#solution" className="hover:text-slate-50">
            CMSとは
          </a>
          <a href="#features" className="hover:text-slate-50">
            機能
          </a>
          <a href="#pricing" className="hover:text-slate-50">
            価格
          </a>
          <a href="#faq" className="hover:text-slate-50">
            FAQ
          </a>
        </nav>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          お申込み
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.20),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          IT導入補助金 約2/3 対象パッケージ
        </div>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.18] tracking-tight sm:text-5xl lg:text-6xl">
          事業のコンテキストを、
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            AIに渡す。
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          経営者の頭の中をデジタル化する <strong className="text-slate-100">CMS</strong>。
          <br className="hidden sm:inline" />
          IT導入補助金で約2/3補助。実質負担を抑えて、AI活用の土台を一気に整える。
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            お申込みはこちら
          </a>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 text-center text-base font-semibold text-slate-100 transition-colors duration-200 hover:bg-slate-700"
          >
            30分の無料相談を申し込む
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          フォーム内で「相談希望」も選択できます。
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pain                                                                */
/* ------------------------------------------------------------------ */
function Pain() {
  const items = [
    {
      title: "データがバラバラ",
      body:
        "事業データが Google Drive、Slack、Notion、Gmail に散らばっていて、AIに渡せる状態じゃない。",
    },
    {
      title: "毎回ゼロから説明",
      body:
        "ChatGPTやClaudeを使っても、自社固有の文脈を毎回説明するのに疲れる。",
    },
    {
      title: "どこから始める？",
      body:
        "「AIを使いたい」と思っても、何から始めればいいか分からない。",
    },
  ];
  return (
    <section className="border-t border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            経営者のリアル
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI活用、こんなところで止まっていませんか？
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="mb-3 text-2xl">⚠️</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solution                                                            */
/* ------------------------------------------------------------------ */
function Solution() {
  const components = [
    {
      label: "01",
      title: "コンテキストエンジン",
      body:
        "Obsidian + Notion + Drive の三層構造で、社内のあらゆるデータを統合。AIが即座に参照できる状態に整える。",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      label: "02",
      title: "AI実行レイヤー",
      body:
        "Claude / GPT / 自社モデルを切替可能。「うちの場合は…」を毎回説明する必要がなく、文脈付きで即実行。",
      accent: "from-cyan-400 to-emerald-400",
    },
    {
      label: "03",
      title: "業務オペレーション統合",
      body:
        "RakuCoreOffice AI（クラウドERP）を商流として組み込み、AIを日々の業務全体に貫通させる。",
      accent: "from-emerald-400 to-blue-400",
    },
  ];
  return (
    <section id="solution" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            ソリューション
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            CMS は、3つのレイヤーで <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              経営の文脈を AI に渡す
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            事業のあらゆる文脈（顧客・案件・売上・ナレッジ）を一元管理し、
            AIが即座に参照できる状態にする仕組みです。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {components.map((c) => (
            <div
              key={c.label}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.accent}`}
              />
              <div className="mb-4 font-mono text-sm text-slate-500">
                {c.label}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-100">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */
function Features() {
  const features = [
    {
      icon: "🗂",
      title: "顧客・案件・ナレッジの統合管理",
      body:
        "散在する事業データを一箇所に集約。検索性と再利用性を一気に引き上げる。",
    },
    {
      icon: "🤖",
      title: "業務サマリの自動化",
      body:
        "週次レポート、打ち合わせ前リサーチ、商談メモの整理を AI が代行。",
    },
    {
      icon: "✅",
      title: "タスク管理（CMSオプション）",
      body: (
        <>
          スクショ・音声・テキストを投げ込むだけで AI が整理。
          <a
            href={TW_LP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-400 underline-offset-2 hover:underline"
          >
            Task Workflow →
          </a>
        </>
      ),
    },
    {
      icon: "💡",
      title: "「うちの場合は…」が不要に",
      body:
        "自社固有の文脈を毎回説明する必要なし。AIが御社の文脈で動き続ける。",
    },
  ];
  return (
    <section id="features" className="border-t border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            機能ハイライト
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            日々の業務に、すぐ効く。
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */
function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            価格・補助金スキーム
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            実質負担 <span className="text-emerald-400">約 225万円</span> で
            <br />
            AI活用の土台一式を導入。
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* 価格テーブル */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 bg-gradient-to-r from-blue-600/20 to-emerald-500/10 px-6 py-5">
              <div className="text-sm text-slate-300">販売価格（税抜）</div>
              <div className="mt-1 text-4xl font-bold tracking-tight">
                520<span className="ml-1 text-2xl">万円</span>
              </div>
            </div>
            <dl className="divide-y divide-slate-800 text-sm">
              <Row
                label="IT導入補助金（補助率 約2/3）"
                value="− 約 346.67 万円"
                accent="text-emerald-400"
              />
              <Row
                label="実質負担（パターンA / 通常購入）"
                value="約 225.4 万円"
                accent="text-amber-300 font-bold text-base"
              />
              <Row
                label="補助金申請サポート（必須・成功報酬）"
                value="10 万円"
              />
              <Row
                label="3年経過後の継続利用"
                value="月額 5,000 円/件"
              />
            </dl>
          </div>

          {/* 持ち出し0プラン */}
          <div className="rounded-2xl border border-emerald-700/40 bg-gradient-to-br from-emerald-500/10 to-blue-600/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-700/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              選択可能
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-100">
              持ち出し0円プラン
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              弊社が御社のサービスを買い取る「バーター方式」で、
              実質持ち出し0円での導入も可能です。
            </p>
            <p className="text-xs text-slate-400">
              ※ 具体的に何を買い取るかは個別ヒアリングにて。
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-colors duration-200 hover:bg-emerald-500/20"
            >
              個別相談を申し込む →
            </a>
          </div>
        </div>

        <p className="mt-8 rounded-lg border border-slate-800 bg-slate-900/40 p-4 text-xs leading-relaxed text-slate-400">
          ※ 商流上、RakuCoreOffice AI（システムクラウド株式会社提供）のパッケージとして販売されます。
          IT導入補助金の対象とするため、本パッケージで弊社CMSが提供されます。
        </p>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <dt className="text-slate-300">{label}</dt>
      <dd className={`tabular-nums ${accent ?? "text-slate-100"}`}>{value}</dd>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cash flow (Pattern A) — CSS/HTML 自作                                */
/* ------------------------------------------------------------------ */
function CashFlow() {
  const nodes = [
    { icon: "🏛", name: "国", note: "" },
    { icon: "🏢", name: "クライアント", note: "実質負担 225.4万" },
    { icon: "☁️", name: "システムクラウド", note: "" },
    { icon: "💼", name: "リエゾン", note: "" },
  ];
  const arrows = [
    { amount: "346.67万", label: "IT補助金" },
    { amount: "572万", label: "RakuCore発注" },
    { amount: "504.8万", label: "CMSマージン" },
  ];
  return (
    <section className="border-t border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            キャッシュフロー（パターンA：通常購入）
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            お金の流れは、シンプルに3ステップ。
          </h2>
        </div>

        {/* デスクトップ: 横一列 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
            {nodes.map((n, i) => (
              <FlowNode key={n.name} {...n} highlight={n.name === "クライアント"} index={i} />
            ))}
            {/* arrows are interleaved manually */}
          </div>
          {/* arrows overlay via second grid */}
          <div className="-mt-[120px] grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
            <div />
            <FlowArrow {...arrows[0]} />
            <div />
            <FlowArrow {...arrows[1]} />
            <div />
            <FlowArrow {...arrows[2]} />
            <div />
          </div>
        </div>

        {/* モバイル: 縦並び */}
        <div className="space-y-3 lg:hidden">
          {nodes.map((n, i) => (
            <div key={n.name}>
              <FlowNode {...n} highlight={n.name === "クライアント"} index={i} />
              {i < arrows.length && (
                <div className="flex justify-center py-2">
                  <FlowArrow {...arrows[i]} vertical />
                </div>
              )}
            </div>
          ))}
        </div>

        <ol className="mt-12 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="mr-2 font-mono text-blue-400">①</span>
            国がクライアントへ <strong className="text-emerald-400">346.67万円</strong> の補助金を支給
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="mr-2 font-mono text-blue-400">②</span>
            クライアントがシステムクラウドへ <strong>572万円</strong> を支払い
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="mr-2 font-mono text-blue-400">③</span>
            システムクラウドからリエゾンへ CMSマージンが送金
          </li>
        </ol>

        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
          <div className="text-sm text-amber-200">クライアント実質負担</div>
          <div className="mt-1 text-3xl font-bold text-amber-300">
            約 225.4 万円
          </div>
          <p className="mt-2 text-sm text-slate-300">
            これで、AI活用の土台一式が手に入ります。
          </p>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  icon,
  name,
  note,
  highlight,
  index,
}: {
  icon: string;
  name: string;
  note: string;
  highlight?: boolean;
  index: number;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 text-center ${
        highlight
          ? "border-amber-500/40 bg-amber-500/5"
          : "border-slate-700 bg-slate-800/60"
      }`}
      data-flow-index={index}
    >
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 text-sm font-semibold text-slate-100">{name}</div>
      {note && (
        <div className="mt-1 text-xs text-amber-300">{note}</div>
      )}
    </div>
  );
}

function FlowArrow({
  amount,
  label,
  vertical,
}: {
  amount: string;
  label: string;
  vertical?: boolean;
}) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-xs font-semibold text-emerald-300">{amount}</div>
        <div className="text-[10px] text-slate-400">{label}</div>
        <div className="mt-1 text-emerald-400">▼</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center px-2">
      <div className="text-xs font-semibold text-emerald-300">{amount}</div>
      <div className="text-[10px] text-slate-400">{label}</div>
      <div className="mt-1 flex w-full items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400" />
        <div className="text-emerald-400">▶</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Zero-out-of-pocket (Pattern B summary)                              */
/* ------------------------------------------------------------------ */
function ZeroOutOfPocket() {
  return (
    <section className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
              発展形：持ち出し0円プラン
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              弊社が御社のサービスを買い取り、
              <br className="hidden sm:inline" />
              <span className="text-emerald-400">補助金と相殺</span>。
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              通常パターンの実質負担 225.4万円を、弊社が御社サービスを買い取ることで
              <strong className="text-slate-100">実質0円</strong>に。
              具体的に何を買い取るかは案件ごとに違うため、個別ヒアリングで設計します。
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
            >
              個別相談を申し込む →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 text-sm font-semibold text-slate-300">
              純額サマリ（パターンB）
            </div>
            <dl className="divide-y divide-slate-800 text-sm">
              <SumRow label="クライアント" value="±0 円" highlight />
              <SumRow label="システムクラウド" value="+ 67.2 万" />
              <SumRow label="リエゾン" value="+ 279.4 万" />
              <SumRow label="国（補助金）" value="− 346.67 万" />
            </dl>
            <p className="mt-4 text-xs text-slate-500">
              ※ 数値は税抜・代表ケース。詳細は個別ヒアリングで確定。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SumRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <dt className="text-slate-300">{label}</dt>
      <dd
        className={`tabular-nums ${
          highlight ? "text-lg font-bold text-emerald-400" : "text-slate-100"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
function FAQ() {
  const items = [
    {
      q: "補助金は本当に取れますか？",
      a: "システムクラウド株式会社経由で過去多数の採択実績があります。申請サポート（必須・成功報酬10万円）に含めて伴走します。",
    },
    {
      q: "自社のデータを預けるのは不安です。",
      a: "データオーナーシップは常に御社にあります。Obsidian / Notion / Drive はそれぞれ御社アカウントで運用し、弊社は設計・実装のみを支援します。",
    },
    {
      q: "既存の Notion / Drive を捨てる必要は？",
      a: "ありません。CMS は既存資産を活かす統合設計です。捨てるのではなく、AIが横断的に参照できる状態に整えます。",
    },
    {
      q: "導入期間はどれくらいですか？",
      a: "補助金申請も含めて、通常2〜3ヶ月。御社のデータ量と複雑度によって変動します。",
    },
    {
      q: "RakuCoreOffice AI とは何ですか？",
      a: "システムクラウド株式会社が提供するクラウドERPパッケージです。本CMSはこのパッケージの一部として販売されており、IT導入補助金の対象となります。",
    },
  ];
  return (
    <section id="faq" className="border-t border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            よくあるご質問
          </h2>
        </div>
        <div className="space-y-3">
          {items.map((it) => (
            <details
              key={it.q}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 open:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-slate-100">
                {it.q}
                <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust                                                               */
/* ------------------------------------------------------------------ */
function Trust() {
  return (
    <section className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
              信頼性
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              データは御社のもの。
              <br />
              設計から運用まで伴走します。
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                データオーナーシップは御社100%
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                既存の Notion / Drive / Slack をそのまま活用
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                補助金申請から導入まで一気通貫サポート
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                導入後の運用も月額5,000円/件で継続支援
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 text-sm font-semibold text-slate-300">
              導入実績
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              既存コンサル先での導入事例を順次公開予定です。
              許諾範囲でロゴ・事例を掲載いたします。
            </p>
            <p className="mt-4 text-xs text-slate-500">
              現時点で具体事例の開示をご希望の場合は、お申込みフォームよりお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.20),_transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-8 sm:py-28">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          AI活用の土台、
          <br className="sm:hidden" />
          まずはお申込みから。
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300">
          IT導入補助金で実質負担を抑え、CMSを導入。
          <br className="hidden sm:inline" />
          フォーム送信後、担当より個別にご連絡いたします。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-700 sm:w-auto"
          >
            お申込みフォームへ →
          </a>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-6 py-4 text-base font-semibold text-slate-100 transition-colors duration-200 hover:bg-slate-700 sm:w-auto"
          >
            30分の無料相談を申し込む
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="font-semibold text-slate-200">
            CMS — Context Management System
          </div>
          <div className="mt-1 text-xs">
            提供：株式会社リエゾン ／ 商流：RakuCoreOffice AI（システムクラウド株式会社）
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href={TW_LP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            Task Workflow ↗
          </a>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            お申込み ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
