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
  /** お金の流れの「御社の手残り」の下に表示する補足（バーターに含まれる内容など。正本: Drive「2026CMS販売各社料金検討」C列） */
  netNote?: string;
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
  { slug: "levechy-x7k2", name: "株式会社LEVECHY", stage: 1, round: "7月", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1kDCH0VilsQ2ou52VNKnVoWJzUS-p4wHM", updated: "2026-07-14" },
  { slug: "leriro-q9m4", name: "LERIRO", stage: 1, round: "調整中", amounts: { purchase: 572, barter: 356, subsidy: 346.6, net: 130.6, confirmed: true }, docsFolder: "https://drive.google.com/drive/folders/1pigQTG_asylMupXPED47AOLbv_Em_sd4", updated: "2026-07-15" },
  { slug: "metadoctors-t3w8", name: "株式会社Metadoctors", stage: 1, round: "7月", amounts: { purchase: 370, barter: 154, subsidy: 224.2, net: 8.2, confirmed: true }, netNote: "ポッドキャスト音声制作費6ヶ月分込（66万円分 ※税込）", docsFolder: "https://drive.google.com/drive/folders/1H_YJMLTVbWCGhL9CECny_SxPeyFQWac3", updated: "2026-07-15" },
  { slug: "let-p5r7", name: "レット株式会社", stage: 1, round: "調整中", amounts: { purchase: 572, barter: 230, subsidy: 346.6, net: 4.6, confirmed: true }, docsFolder: "https://drive.google.com/drive/folders/1qesMV_IUitSl-SjaAzhL1Y55Gso8rE3h", updated: "2026-07-15" },
  { slug: "infront-j2d6", name: "株式会社INFRONT", stage: 1, round: "調整中", amounts: { purchase: 990, barter: 710, subsidy: 450, net: 170, confirmed: true }, docsFolder: "https://drive.google.com/drive/folders/1F0xEz7xp_4mJkluBICwgF_2VvLeyIhAh", updated: "2026-07-14" },
  { slug: "liaisonlink-v8n3", name: "リエゾン・リンク", stage: 1, round: "調整中", amounts: { purchase: 550, barter: 300, subsidy: 250, net: 0, confirmed: true }, netNote: "コンサルティング費用2026年6月〜2027年11月分込", docsFolder: "https://drive.google.com/drive/folders/1BFbMXUCHdUfUyYLnYyIuoeaNEjjKu8B-", updated: "2026-07-15" },
  { slug: "inzaghi-c4b9", name: "インザーギ", stage: 1, round: "調整中", amounts: { purchase: 572, barter: 256, subsidy: 346.6, net: 30.6, confirmed: true }, netNote: "クワダテ広告費2026年4月〜2027年3月分込", docsFolder: "https://drive.google.com/drive/folders/1zAvYKVWJGbhQaLvcREVcA1w7Dzp0Oelf", updated: "2026-07-15" },
  { slug: "globalconnection-h6f1", name: "GlobalConnection", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1NFEJ4cHvyLXkegPX2GyfepAaesmgP_s6", updated: "2026-07-14" },
  { slug: "tireworld-y3g5", name: "タイヤワールド館ベスト", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1aa0yFiM55vk04NUfSgmbdNf2BE4XVFVj", updated: "2026-07-14" },
  { slug: "blago-w7s2", name: "BLAGO", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/19S1GAdt0jD0dHRLfsRK3PMV3qLw4dhX4", updated: "2026-07-14" },
  { slug: "wanget-m9k6", name: "Wanget", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1iZ6MD7KlQybjjZAfbEGeOd-dcfQU7p5V", updated: "2026-07-14" },
  { slug: "hackshub-r2t4", name: "ハックスハブ", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1svPVQOhZUMUkFcu9892sRdPqRnr_S_kL", updated: "2026-07-14" },
  { slug: "selpromote-d8q3", name: "セルプロモート", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1xfnmnwR0dzpch0Um98co8Ld0W1PleuV_", updated: "2026-07-14" },
  { slug: "tricepied-f5z7", name: "株式会社トライスパイド", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1OjTqIWL--WVhiX4AVQFd_uk5IUg55KSA", updated: "2026-07-14" },
  { slug: "fiss-n4x8", name: "FISS", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1OeFYchsQkRv4JEjjcD1lPThOvjbxVRXT", updated: "2026-07-14" },
  { slug: "napoli-b6v2", name: "ナポリ", stage: 1, round: "調整中", amounts: { purchase: 990, barter: 710, subsidy: 450, net: 170, confirmed: true }, docsFolder: "https://drive.google.com/drive/folders/10i5LD8J06_CVVLw3QoGlRiD3xfXn_2bc", updated: "2026-07-16" },
  { slug: "neolead-g3j9", name: "Neolead", stage: 1, round: "調整中", amounts: { ...DEFAULT_AMOUNTS }, docsFolder: "https://drive.google.com/drive/folders/1n2GHTpnv_2qkxJoVvqFnuap1Yjpr9BG2", updated: "2026-07-14" },
];

export const FORM_URL = "https://forms.gle/WxzwHpvWzkyZ4gcV9";
