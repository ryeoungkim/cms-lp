import Link from "next/link";

const FORM_URL = "https://forms.gle/WxzwHpvWzkyZ4gcV9";
const TW_LP_URL = "https://ryeoungkim.github.io/tw-lp/";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <Header />
      <Hero />
      <Question />
      <Vision />
      <Solution />
      <Features />
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
          <a href="#question" className="hover:text-slate-50">
            課題
          </a>
          <a href="#solution" className="hover:text-slate-50">
            CMSとは
          </a>
          <a href="#features" className="hover:text-slate-50">
            機能
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
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-[1.18] tracking-tight sm:text-5xl lg:text-6xl">
              事業のコンテキストを、
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                AIに渡す。
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              会社の概要から事業の状況まで、そのすべてを
              <br className="hidden sm:inline" />
              AIが理解できる形に整える——
              <strong className="text-slate-100">
                コンテキストマネジメントシステム（CMS）
              </strong>
              。
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
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const sources = [
    { icon: "📁", label: "Drive", tone: "text-blue-300" },
    { icon: "💬", label: "Slack", tone: "text-purple-300" },
    { icon: "📝", label: "Notion", tone: "text-slate-200" },
    { icon: "✉", label: "Gmail", tone: "text-red-300" },
  ];
  return (
    <div className="relative">
      {/* デスクトップ: 横並び 3 カラム */}
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[auto_auto_1fr_auto_auto]">
        {/* Sources */}
        <div className="space-y-2">
          {sources.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs shadow-sm shadow-slate-950/60"
            >
              <span className={`text-base ${s.tone}`}>{s.icon}</span>
              <span className="font-medium text-slate-200">{s.label}</span>
            </div>
          ))}
        </div>
        {/* Fan-in arrow */}
        <FanInArrow />
        {/* CMS box */}
        <div className="relative rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-600/30 via-cyan-500/10 to-emerald-500/20 px-5 py-8 text-center shadow-xl shadow-blue-900/40">
          <div className="text-[10px] font-mono tracking-[0.2em] text-blue-300">
            CONTEXT
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-slate-50">
            CMS
          </div>
          <div className="mt-1 text-[10px] text-slate-400">統合・整流</div>
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-blue-500/10 blur-xl" />
        </div>
        {/* Arrow */}
        <div className="flex items-center text-emerald-400">
          <span className="mr-1 h-px w-6 bg-gradient-to-r from-emerald-400/20 to-emerald-400" />
          ▶
        </div>
        {/* AI */}
        <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-blue-600/10 px-4 py-6 text-center shadow-lg shadow-emerald-900/30">
          <div className="text-2xl">🤝</div>
          <div className="mt-1 text-sm font-bold text-slate-50">AI</div>
          <div className="text-[10px] text-emerald-300">パートナー</div>
        </div>
      </div>

      {/* モバイル: 縦並び */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          {sources.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs"
            >
              <span className={`text-base ${s.tone}`}>{s.icon}</span>
              <span className="font-medium text-slate-200">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="my-3 flex justify-center text-emerald-400">▼</div>
        <div className="rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-600/30 to-emerald-500/20 px-5 py-6 text-center">
          <div className="text-[10px] font-mono tracking-[0.2em] text-blue-300">
            CONTEXT
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight">CMS</div>
          <div className="mt-1 text-[10px] text-slate-400">統合・整流</div>
        </div>
        <div className="my-3 flex justify-center text-emerald-400">▼</div>
        <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-blue-600/10 px-4 py-5 text-center">
          <div className="text-2xl">🤝</div>
          <div className="mt-1 text-sm font-bold">AI パートナー</div>
        </div>
      </div>
    </div>
  );
}

function FanInArrow() {
  return (
    <svg
      width="52"
      height="180"
      viewBox="0 0 52 180"
      className="text-emerald-400"
      aria-hidden
    >
      <defs>
        <linearGradient id="fanGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* 4 sources on left at y = 20, 60, 100, 140 converging to (52, 90) */}
      <path
        d="M0,20 C25,20 25,90 52,90"
        stroke="url(#fanGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0,60 C25,60 25,90 52,90"
        stroke="url(#fanGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0,100 C25,100 25,90 52,90"
        stroke="url(#fanGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0,140 C25,140 25,90 52,90"
        stroke="url(#fanGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Arrow head */}
      <polygon points="52,90 44,86 44,94" fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Question — 問題提起                                                  */
/* ------------------------------------------------------------------ */
function Question() {
  return (
    <section id="question" className="border-t border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-8 sm:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
          問いかけ
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          AIを、単純にチャットだけで
          <br className="hidden sm:inline" />
          終わらせていませんか？
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p>
            便利ではあるけれど、
            <strong className="text-slate-100">
              「うちの状況を全部知った上で動いてくれる」
            </strong>
            わけではない。
          </p>
          <p>
            事業データは Drive、Slack、Notion、Gmail に散らばり、
            都度「うちの場合は…」と説明するのは経営者自身。
          </p>
          <p className="text-slate-100">
            結局、AIは <strong>&quot;賢い検索窓&quot;</strong>{" "}
            止まり——になっていないでしょうか。
          </p>
        </div>
        <ChatMock />
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="mx-auto mt-14 max-w-xl">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/50">
        {/* Window bar */}
        <div className="mb-4 flex items-center gap-1.5 border-b border-slate-800 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[11px] text-slate-500">
            汎用AIチャット
          </span>
        </div>
        {/* User bubble */}
        <div className="flex justify-end">
          <div className="flex max-w-[85%] items-start gap-2">
            <div className="rounded-2xl rounded-tr-sm border border-blue-500/30 bg-blue-500/15 px-4 py-2.5 text-sm text-slate-100">
              先週の A社商談、どこまで進んだ？
            </div>
            <div className="text-xl">🧑</div>
          </div>
        </div>
        {/* AI bubble */}
        <div className="mt-4 flex">
          <div className="flex max-w-[85%] items-start gap-2">
            <div className="text-xl">🤖</div>
            <div className="rounded-2xl rounded-tl-sm border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-slate-300">
              申し訳ありません、社内の商談情報にはアクセスできません。
              一般的な商談管理のコツをご紹介しましょうか？
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs font-medium tracking-wide text-slate-500">
        — 文脈のないAIは、ここで止まる。
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vision                                                              */
/* ------------------------------------------------------------------ */
function Vision() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.16),_transparent_65%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-8 sm:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
          目指す姿
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          AIを、
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            事業のパートナーに。
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          AIが会社と事業のすべての状況を理解し、
          <br className="hidden sm:inline" />
          パートナーとして自律的にタスクをこなしていく。
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">
          そうした姿を、一緒に目指しませんか。
        </p>
        <p className="mt-10 inline-block rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm text-slate-300">
          CMSは、その第一歩です。
        </p>
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
        "AIを個別タスクだけでなく、業務プロセス全体に組み込み、パートナーとして動かす。",
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
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
function FAQ() {
  const items = [
    {
      q: "「AIパートナー」とは、具体的に何ができるのですか？",
      a: "御社の顧客・案件・売上・ナレッジをすべて理解した上で、レポート作成、事前リサーチ、下書き作成、意思決定サポートまでを担います。単なるチャット応答ではなく、業務プロセスの一部として自律的に動きます。",
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
      a: "通常2〜3ヶ月です。御社のデータ量と複雑度によって変動します。",
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
                設計から導入・運用まで一気通貫サポート
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                導入後の運用・改善も継続的に伴走
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
          AIを、事業のパートナーへ。
          <br className="sm:hidden" />
          まずはお申込みから。
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300">
          御社の状況を理解したAIを、事業のパートナーに。
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
          <div className="mt-1 text-xs">提供：株式会社リエゾン</div>
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
