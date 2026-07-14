import type { Metadata } from "next";
import {
  PrepHeader,
  PrepFooter,
  StepCard,
  DocsSection,
  SubmitSection,
  type StepSpec,
  type DocSpec,
} from "@/components/prep";

export const metadata: Metadata = {
  title: "補助金申請 事前準備ガイド | CMS",
  robots: { index: false, follow: false },
};

const STEPS: StepSpec[] = [
  {
    num: "1",
    title: "gBizIDプライムの取得（オンライン申請）",
    urgent: true,
    body: "補助金の申請にはgBizIDプライムアカウントが必要です。STEP2・STEP3もこのアカウントが前提になるため、すべての起点です。オンライン申請なら最短即日で発行されます。このページをご覧になった当日のお手続きをお願いします。",
    url: "https://gbiz-id.go.jp/",
    urlLabel: "gBizID（デジタル庁）",
    time: "最短即日 — 最優先",
    items: [
      "代表者ご本人のマイナンバーカード",
      "署名用電子証明書の暗証番号（英数字6〜16桁。カード受取時に設定したもの）",
      "スマートフォン",
    ],
    procedure: [
      "gBizIDサイトで「gBizIDプライム作成」→ オンライン申請を選択",
      "画面の案内に沿って入力し、スマホでマイナンバーカードを読み取り → 最短即日発行",
      "発行後、ログイン用のスマホアプリ（gBizIDアプリ）の認証設定まで済ませておく",
    ],
    pitfalls: [
      "アカウントは代表者ご本人名義の「プライム」が必要です（gBizIDメンバーや従業員名義では申請できません）",
      "署名用電子証明書の暗証番号を忘れている場合、市区町村窓口での再設定が必要になり日数を要します → 早めの確認を",
    ],
  },
  {
    num: "2",
    title: "SECURITY ACTION の宣言（★一つ星）",
    urgent: false,
    body: "IPA（情報処理推進機構）の「SECURITY ACTION管理システム」にgBizIDでログインし、「★一つ星」（情報セキュリティ5か条に取り組む宣言）を行います。宣言すると自己宣言ID（「5」から始まる11桁）がその場で即時発行されます。",
    url: "https://sme-security.ipa.go.jp/",
    urlLabel: "SECURITY ACTION 管理システム",
    time: "STEP1完了後、約15分（ID即時発行）",
    procedure: [
      "SECURITY ACTION管理システムにgBizIDでログイン",
      "「★一つ星」を宣言",
      "発行された自己宣言ID（5から始まる11桁）を控えて弊社に共有",
    ],
    pitfalls: [
      "2026年3月以前の旧システムで取得した「4」から始まるIDは、第2次公募（2026年5月12日）以降は使えません → 新システムでの取り直しが必要です",
      "補助金申請に使うgBizIDと同じアカウントで宣言してください（別アカウントで宣言すると紐づきません）",
    ],
  },
  {
    num: "3",
    title: "IT戦略ナビwith（デジwith）で2つのマップを作成",
    urgent: false,
    body: "中小機構のポータル「デジwith」で経営課題を診断し、「同業他社比較マップ」と「IT戦略マップ」の2つをPDF出力します（いずれも申請時に添付）。アンケート形式で手軽ですが、事業内容の整理を兼ねて弊社担当がオンラインで画面をご一緒しながら進めるのがおすすめです。",
    url: "https://digiwith.smrj.go.jp/it-map/",
    urlLabel: "IT戦略ナビwith（中小機構）",
    time: "STEP1完了後、10〜15分（弊社同席可）",
    procedure: [
      "デジwithで会員登録（gBizIDプライムに登録したメールアドレスで登録）",
      "会員登録後、下のボタンから「IT戦略ナビwith」のページを開き、ページ中ほどの「同業他社比較マップ・IT戦略マップを作成する」ボタンへ進む",
      "基本情報（業種・所在地・従業員数など）を選択 → 経営課題を1つ → 関連する業務上の問題点を1〜2個 → 解決策を選択",
      "完成した「同業他社比較マップ」「IT戦略マップ」をそれぞれPDFでダウンロード → 2つとも弊社に共有",
    ],
    pitfalls: [
      "別タブで同時に診断を行わないでください（必ず1つずつ順番に）。ブラウザの「戻る」ボタンの使用も控えてください",
      "gBizIDプライムの入力欄は「任意」表示ですが、補助金申請に使う場合は入力必須です（未入力だと申請に使えません）",
      "結果画面のスクリーンショットではなく、必ずPDFファイルをダウンロードして保存してください（申請時に添付します）",
    ],
  },
];

const BONUS_STEPS: StepSpec[] = [
  {
    num: "4",
    title: "成長加速マッチングサービスへの登録（加点項目）",
    urgent: false,
    body: "中小企業庁の「成長加速マッチングサービス」に登録すると、補助金審査の加点になります。gBizIDプライムでログインして会員登録し、挑戦課題を登録して「掲載中」の状態にしてください。",
    url: "https://mirasapo-connect.go.jp/",
    urlLabel: "成長加速マッチングサービス",
    time: "STEP1完了後、15分程度",
    procedure: [
      "gBizIDプライムでログインし、会員登録",
      "挑戦課題を登録 → ステータスが「掲載中」になったことを確認",
      "「掲載中」の画面のスクリーンショットを弊社に共有",
    ],
    pitfalls: [
      "交付申請の締切日時点で「掲載中」になっている必要があります（登録しただけ・審査中では加点になりません）",
    ],
  },
  {
    num: "5",
    title: "省力化ナビの実施（加点項目）",
    urgent: false,
    body: "中小機構の「省力化ナビ」で生産性向上の解決策を確認すると、補助金審査の加点になります。診断の際に、補助金申請に使うgBizIDプライムを入力してください。",
    url: "https://labour-saving.smrj.go.jp/",
    urlLabel: "省力化ナビ（中小機構）",
    time: "STEP1完了後、10分程度",
    procedure: [
      "省力化ナビで手続きを進める（gBizIDプライムを入力）",
      "解決策（After）画面まで進み、スクリーンショットを保存",
      "スクリーンショットを弊社に共有",
    ],
    pitfalls: [
      "補助金申請に使うgBizIDプライムを入力しないと加点に紐づきません",
    ],
  },
];

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

export default function PrepPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <PrepHeader badge="事前準備ガイド" />

      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-8">
        <section className="py-12 sm:py-16">
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl">
            補助金申請の事前準備
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-lg text-transparent sm:text-xl">
              最初にお願いする3つのステップと必要書類
            </span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            デジタル化・AI導入補助金2026は制度上、代理申請ができないため、申請作業は貴社の役員または従業員の方に行っていただく必要があります。
            そのぶん、書類の読み取り・申請情報の下書き・手続きのナビゲートはすべて弊社（株式会社リエゾン）が伴走します。
            貴社にお願いするのは、<strong className="text-slate-100">以下の3ステップ・書類のご提出・最終確認</strong>だけです。
          </p>
          <p className="mt-4 text-sm text-slate-400">
            個人事業主のお客様は{" "}
            <a href="../prep-solo/" className="font-semibold text-blue-300 underline hover:text-blue-200">
              個人事業主向けのご案内
            </a>{" "}
            をご覧ください。
          </p>
        </section>

        <h2 className="mb-4 text-lg font-semibold text-slate-100">STEP 1〜3: アカウント等のご準備</h2>
        <ol className="space-y-5">
          {STEPS.map((s) => (
            <StepCard key={s.num} s={s} />
          ))}
        </ol>

        <h2 className="mb-2 mt-10 text-lg font-semibold text-slate-100">
          STEP 4〜5: 加点項目（任意・おすすめ）
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          必須ではありませんが、実施すると補助金審査の加点になります。いずれもSTEP1のgBizIDがあれば短時間で完了します。
        </p>
        <ol className="space-y-5">
          {BONUS_STEPS.map((s) => (
            <StepCard key={s.num} s={s} />
          ))}
        </ol>

        <DocsSection
          title="ご提出いただく書類（4点）"
          intro="いずれもプリンター等で鮮明にスキャンしたPDFでご提出ください。要件を満たさない書類は事務局の審査で差し戻しになるため、取得時に以下のチェックポイントをご確認ください。読み取り・転記・数値の算出はすべて弊社で行います。"
          docs={CORP_DOCS}
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

        <SubmitSection />

        <section className="mt-8 text-xs leading-relaxed text-slate-500">
          <p>
            ※ 過去にIT導入補助金（2022〜2025）で交付決定を受けたことがある場合は、申請できる枠が変わるため必ず事前にお知らせください（わからない場合はその旨で結構です。弊社で確認します）。
          </p>
          <p className="mt-2">ご不明点は担当（株式会社リエゾン 金）までお気軽にどうぞ。</p>
        </section>
      </div>

      <PrepFooter />
    </main>
  );
}
