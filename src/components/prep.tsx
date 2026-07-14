export interface StepSpec {
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

export interface DocSpec {
  name: string;
  where: string;
  checks: string[];
  ng: string[];
}

export function PrepHeader({ badge }: { badge: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-8">
        <div className="text-lg font-bold tracking-tight text-blue-400">
          CMS
          <span className="ml-2 text-xs font-normal text-slate-400">
            Context Management System
          </span>
        </div>
        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
          {badge}
        </span>
      </div>
    </header>
  );
}

export function StepCard({ s }: { s: StepSpec }) {
  return (
    <li
      className={
        "list-none rounded-2xl border p-6 sm:p-7 " +
        (s.urgent ? "border-amber-500/50 bg-amber-500/10" : "border-slate-800 bg-slate-800/40")
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
  );
}

export function DocsSection({
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

export function SubmitSection({ folderUrl }: { folderUrl?: string }) {
  return (
    <section className="mt-8 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-emerald-600/10 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-100">書類のご提出</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        書類は、貴社専用のGoogleドライブ共有フォルダへアップロードしてください。締切ラウンドに間に合わせるため、そろった分から順次のご提出でも構いません。
      </p>
      {folderUrl ? (
        <a
          href={folderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          貴社専用の提出フォルダを開く →
        </a>
      ) : (
        <p className="mt-4 rounded-lg border border-slate-700 bg-slate-900/50 p-4 text-sm text-slate-300">
          専用フォルダのURLは担当（株式会社リエゾン 金）よりご案内します。
        </p>
      )}
    </section>
  );
}

export function PrepFooter() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
      <p>© 株式会社リエゾン</p>
    </footer>
  );
}
