/**
 * 見込み客別 案内ページのデータ。
 * ステータス・金額の更新はこのファイルを編集して push するだけで反映される。
 *
 * stage: 1=ご案内 2=お申込み 3=補助金書類のご準備 4=補助金申請 5=交付決定 6=導入開始
 * amounts.confirmed: false の間はページ上で「標準例」と表示される
 */

export const STAGES = [
  "ご案内",
  "お申込み",
  "補助金書類のご準備",
  "補助金申請",
  "交付決定",
  "導入開始",
] as const;

export interface ClientAmounts {
  /** 御社→システムクラウド 支払額（万円・税込） */
  purchase: number;
  /** リエゾン→御社 入金額（万円） */
  barter: number;
  /** 補助金入金額（万円） */
  subsidy: number;
  /** 手残り（万円・税込） */
  net: number;
  /** 個社確定済みか（false = 標準例として表示） */
  confirmed: boolean;
}

export interface ClientPage {
  slug: string;
  name: string;
  stage: number;
  /** 個社向けの補足メッセージ（ユーザーが順次記入） */
  statusNote?: string;
  /** 対象申請ラウンド */
  round: "7月" | "8月" | "9月" | "調整中";
  amounts: ClientAmounts;
  /**
   * オプション特典: RKBラジオ「ビールとクワダテ」スポンサー特典。
   * 設定した顧客のページにのみ表示される。from/to は「2026年8月」形式。
   */
  radioSponsor?: { from: string; to: string };
  /** 補助金書類の提出先（クライアント専用のGoogleドライブ共有フォルダURL）。未設定なら「担当よりご案内」表示 */
  docsFolder?: string;
  updated: string;
}

/** 7月申請・バーター発注前提の標準キャッシュフロー例 */
export const DEFAULT_AMOUNTS: ClientAmounts = {
  purchase: 572,
  barter: 335,
  subsidy: 346,
  net: 110,
  confirmed: false,
};

export const CLIENTS: ClientPage[] = [
  { slug: "levechy-x7k2", name: "株式会社LEVECHY", stage: 1, round: "7月", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "leriro-q9m4", name: "LERIRO", stage: 1, round: "調整中", amounts: { purchase: 520, barter: 344, subsidy: 315.1, net: 139.1, confirmed: true }, updated: "2026-07-14" },
  { slug: "metadoctors-t3w8", name: "株式会社Metadoctors", stage: 1, round: "7月", amounts: { purchase: 370, barter: 220, subsidy: 224.2, net: 74.2, confirmed: true }, updated: "2026-07-14" },
  { slug: "let-p5r7", name: "レット株式会社", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "infront-j2d6", name: "株式会社INFRONT", stage: 1, round: "調整中", amounts: { purchase: 990, barter: 710, subsidy: 450, net: 170, confirmed: true }, updated: "2026-07-14" },
  { slug: "liaisonlink-v8n3", name: "リエゾン・リンク", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "inzaghi-c4b9", name: "インザーギ", stage: 1, round: "調整中", amounts: { purchase: 572, barter: 260, subsidy: 346.6, net: 34.6, confirmed: true }, updated: "2026-07-14" },
  { slug: "globalconnection-h6f1", name: "GlobalConnection", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "tireworld-y3g5", name: "タイヤワールド館ベスト", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "blago-w7s2", name: "BLAGO", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "wanget-m9k6", name: "Wanget", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "hackshub-r2t4", name: "ハックスハブ", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "selpromote-d8q3", name: "セルプロモート", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "tricepied-f5z7", name: "株式会社トライスパイド", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "fiss-n4x8", name: "FISS", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "napoli-b6v2", name: "ナポリ", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
  { slug: "neolead-g3j9", name: "Neolead", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, updated: "2026-07-09" },
];

export const FORM_URL = "https://forms.gle/WxzwHpvWzkyZ4gcV9";
