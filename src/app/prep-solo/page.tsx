import type { Metadata } from "next";
import {
  PrepHeader,
  PrepFooter,
  DocsSection,
  SubmitSection,
  type DocSpec,
} from "@/components/prep";

export const metadata: Metadata = {
  title: "補助金申請 事前準備ガイド（個人事業主） | CMS",
  robots: { index: false, follow: false },
};

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

export default function PrepSoloPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <PrepHeader badge="事前準備ガイド（個人事業主）" />

      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-8">
        <section className="py-12 sm:py-16">
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl">
            補助金申請の事前準備
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-lg text-transparent sm:text-xl">
              個人事業主のお客様向け
            </span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            アカウント等の準備（STEP1〜3）は{" "}
            <a href="../prep/" className="font-semibold text-blue-300 underline hover:text-blue-200">
              事前準備ガイド
            </a>{" "}
            と共通です。ただし <strong className="text-slate-100">gBizIDプライムは法人番号ではなく「個人事業主」として取得</strong>してください。
            このページでは、個人事業主のお客様にご提出いただく書類をご案内します。
          </p>
        </section>

        <DocsSection
          title="ご提出いただく書類（4点）"
          intro="いずれもプリンター等で鮮明にスキャンしたPDFでご提出ください。要件を満たさない書類は事務局の審査で差し戻しになるため、取得時に以下のチェックポイントをご確認ください。読み取り・転記はすべて弊社で行います。"
          docs={SOLO_DOCS}
        />

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
