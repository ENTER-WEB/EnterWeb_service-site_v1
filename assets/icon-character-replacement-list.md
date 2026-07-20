# V/ENTER WEB アイコン・キャラクター素材差し替えリスト

作成日: 2026-07-20

この一覧は、現在の実装で使っているアイコン・キャラクター画像と、本実装時に差し替えが必要な素材を整理したものです。
「差し替えが必要」は、本来は複数種類の正式素材が必要だが、現時点では1つの仮画像または共通画像で置き換えているものを指します。

## 参照中の画像ファイル

| 現在のファイル名 | 実寸 | ファイルサイズ | 主な用途 | PC表示 | SP表示 | 差し替え要否 |
|---|---:|---:|---|---|---|---|
| `assets/characters/enta-hero-thumbsup.png` | 1254 x 1254px | 228,784 bytes | FV、課題カード、左右比較、freedom猫、最終CTA、footerのキャラクター共通画像 | 用途別に 75px / 118px / 174px / 410px など | 用途別に非表示または 150px 前後 | 必要 |
| `assets/icons/problem-placeholder.png` | 50 x 50px | 540 bytes | `ew-problem-cards__grid` と `ew-solution__cards` の仮アイコン | 50 x 50px | 50 x 50px想定 | 必要 |
| `assets/icons/freedom-placeholder.png` | 75 x 75px | 697 bytes | `ew-freedom__steps` の仮アイコン | 75 x 75px | 75 x 75px想定 | 必要 |
| `assets/brand/favicon.png` | 1254 x 1254px | 1,080,381 bytes | favicon / ブラウザタブ用 | ブラウザ依存 | ブラウザ依存 | 必要に応じて最適化 |
| `assets/social/line-brand-icon.png` | 1001 x 1000px | 22,239 bytes | footer LINEアイコン | 46 x 46px、内部画像は最小20px | 40 x 40px | 不要 |
| `assets/social/instagram-glyph-gradient.svg` | viewBox 2499.85 x 2499.85 | 10,896,171 bytes | footer Instagramアイコン | 46 x 46px、内部画像は最小20px | 40 x 40px | 最適化推奨 |
| `assets/social/x-logo.svg` | viewBox 1200 x 1227 | 430 bytes | footer Xアイコン | 46 x 46px、内部画像は最小20px、Xのみpaddingあり | 40 x 40px、Xのみpaddingあり | 不要 |

## キャラクター素材: 本実装で必要な個別ファイル

現在は `assets/characters/enta-hero-thumbsup.png` を複数箇所に流用しています。正式実装では、用途ごとに別ファイルへ分ける必要があります。

| 推奨ファイル名 | 現在の代替ファイル | 用途 | 使用箇所 / class | PC表示 | SP表示 | 必要な構図・状態 | PC/SP別素材 |
|---|---|---|---|---|---|---|---|
| `assets/characters/enta-hero.webp` | `enta-hero-thumbsup.png` | FV左キャラクター | `.ew-hero__character.ew-enta` | 約410px幅、左右反転あり | レイアウトにより調整、現状はSPで小さめ | 親しみやすい立ち姿。キャッチコピーに被らない左配置前提 | 必要ならSP専用あり |
| `assets/characters/enta-problem-guide.webp` | `enta-hero-thumbsup.png` | FV直下の課題カード横キャラクター | `.ew-problem-cards__enta` | セクション右上付近、装飾用途 | SPは非表示 | 指差し・案内ポーズ | PCのみで可 |
| `assets/characters/enta-worried.webp` | `enta-hero-thumbsup.png` | 左右比較「今のままでは」側 | `.ew-worries__enta--worried` | 174px幅、beforeパネル中央 | 150px幅想定 | 困っている / 不安 / 腕組みなど | PC/SP共通可 |
| `assets/characters/enta-happy.webp` | `enta-hero-thumbsup.png` | 左右比較「変わる未来」側 | `.ew-worries__enta--happy` | 174px幅、afterパネル中央 | 150px幅想定 | 前向き / 解決後 / 指差しなど | PC/SP共通可 |
| `assets/characters/enta-freedom-mini.webp` | `enta-hero-thumbsup.png` | freedomステップ内の小型キャラクター | `.ew-freedom-cat` | 75 x 75px | 75 x 75px想定 | 小さくても認識できる正面ポーズ | PC/SP共通可 |
| `assets/characters/enta-final-cta.webp` | `enta-hero-thumbsup.png` | 最終CTA左キャラクター | `.ew-final-cta__enta` | 128px幅 | SPはCTAレイアウトに合わせ調整 | CTAで手を上げる / 相談誘導 | 必要ならSP専用あり |
| `assets/characters/enta-footer.webp` | `enta-hero-thumbsup.png` | footer右下キャラクター | `.ew-footer__character` | 118px幅 | 現状SP非表示 | footer用の小型立ち姿 | PCのみで可 |

## アイコン素材: 本実装で必要な個別ファイル

現在は、複数の異なる意味を持つアイコンを `problem-placeholder.png` または `freedom-placeholder.png` で共通表示しています。本実装では以下のファイルへ分けてください。

### 課題カード用アイコン

現在の共通仮画像: `assets/icons/problem-placeholder.png`、表示サイズ: 50 x 50px。

| 推奨ファイル名 | 現在のclass | 用途 | PC表示 | SP表示 | 必要な絵柄 | 差し替え要否 |
|---|---|---|---|---|---|---|
| `assets/icons/problem-strength.webp` | `.ew-problem-icon--question` | 自社の強みが伝わっていない | 50 x 50px | 50 x 50px | 疑問符 / 課題整理 | 必要 |
| `assets/icons/problem-website.webp` | `.ew-problem-icon--image` | ホームページが古い・見づらい | 50 x 50px | 50 x 50px | 画像 / Webページ / 設定 | 必要 |
| `assets/icons/problem-recruit.webp` | `.ew-problem-icon--people` | 採用してもミスマッチが起こる | 50 x 50px | 50 x 50px | 人物2名 / 採用 | 必要 |
| `assets/icons/problem-reservation.webp` | `.ew-problem-icon--calendar` | 予約や問い合わせが増えない | 50 x 50px | 50 x 50px | カレンダー / 予約 | 必要 |
| `assets/icons/problem-sns-line.webp` | `.ew-problem-icon--chat` | SNSやLINEを活用できていない | 50 x 50px | 50 x 50px | 吹き出し / SNS / LINE | 必要 |
| `assets/icons/problem-operation.webp` | `.ew-problem-icon--device` | 更新や改善を後回しにしてしまう | 50 x 50px | 50 x 50px | PC + スマホ / 更新 | 必要 |

### 解決方法カード用アイコン

現在の共通仮画像: `assets/icons/problem-placeholder.png`、表示サイズ: 50 x 50px。

| 推奨ファイル名 | 現在のclass | 用途 | PC表示 | SP表示 | 必要な絵柄 | 差し替え要否 |
|---|---|---|---|---|---|---|
| `assets/icons/solution-organize.webp` | `.ew-reason-icon--checklist` | 強みを整理する | 50 x 50px | 50 x 50px | チェックリスト | 必要 |
| `assets/icons/solution-design.webp` | `.ew-reason-icon--monitor` | 伝わる設計にする | 50 x 50px | 50 x 50px | モニター / 設計 | 必要 |
| `assets/icons/solution-lead.webp` | `.ew-reason-icon--person` | 導線を最適化する | 50 x 50px | 50 x 50px | 人物 / 導線 | 必要 |
| `assets/icons/solution-growth.webp` | `.ew-reason-icon--growth` | 公開後も育てる | 50 x 50px | 50 x 50px | 右肩上がりグラフ | 必要 |
| `assets/icons/solution-partner.webp` | `.ew-reason-icon--enta` | 伴走して支える | 50 x 50px | 50 x 50px | エン太くん小アイコンまたは伴走アイコン | 必要 |
| `assets/icons/solution-maintenance.webp` | `.ew-reason-icon--shield` | 安心の保守・運用 | 50 x 50px | 50 x 50px | 盾 / チェック | 必要 |

### freedomステップ用アイコン

現在の共通仮画像: `assets/icons/freedom-placeholder.png`、表示サイズ: 75 x 75px。

| 推奨ファイル名 | 現在のclass | 用途 | PC表示 | SP表示 | 必要な絵柄 | 差し替え要否 |
|---|---|---|---|---|---|---|
| `assets/icons/freedom-search.webp` | `.ew-freedom-icon--search` | 探される状態をつくる | 75 x 75px | 75 x 75px | 検索 / 虫眼鏡 | 必要 |
| `assets/icons/freedom-message.webp` | `.ew-freedom-icon--message` | 問い合わせにつなげる | 75 x 75px | 75 x 75px | メッセージ / 相談 | 必要 |
| `assets/icons/freedom-crown.webp` | `.ew-freedom-icon--crown` | 価値で選ばれる | 75 x 75px | 75 x 75px | 王冠 / 選ばれる | 必要 |
| `assets/icons/freedom-growth.webp` | `.ew-freedom-icon--growth` | 成果を育てる | 75 x 75px | 75 x 75px | 成長グラフ | 必要 |
| `assets/characters/enta-freedom-mini.webp` | `.ew-freedom-cat` | 伴走支援の象徴 | 75 x 75px | 75 x 75px | エン太くん小型画像 | 必要 |

## チーム・実績・モックアップ画像

| 現在のファイル名 | 実寸 | 用途 | PC表示 | SP表示 | 差し替え要否 |
|---|---:|---|---|---|---|
| `assets/mockups/hero-devices-latest.png` | 1536 x 1024px | FV右側 PC/スマホモックアップ | `.ew-hero__devices` 690px幅 | SPはレイアウトにより縮小 | 正式素材なら不要、現状画像の権利確認は必要 |
| `assets/members/team-strip-generated.png` | 1983 x 793px | チームカード5名分の顔写真スプライト | 各カード内 150 x 150px切り出し、カードは300 x 300px | 横スクロール想定 | 必要。正式写真は人物ごとに分割推奨 |
| `assets/works/dining-bar-generated.png` | 1536 x 1024px | 成果事例の飲食店写真 | 右側写真エリアに大きく表示 | SPはカード幅に合わせる | 正式実績写真が必要 |
| `assets/works/manufacturing-generated.png` | 1672 x 941px | 予備の実績画像 | 現状CSS参照あり | SPは未確定 | 実績確定後に必要 |
| `assets/backgrounds/hero-background-reference.png` | 1586 x 992px | FV背景参考画像 | 背景として使用 | SP背景は別調整推奨 | 必要に応じてPC/SP分割 |
| `assets/sections/worries-comparison-reference.png` | 1721 x 914px | 左右比較セクションの参照画像 | 実装参照用 | 実装参照用 | 本番表示素材ではないため不要 |

## 画像ファイル化または正式アイコン化を検討するCSS描画アイコン

以下は現在、画像ファイルではなくCSSの疑似要素で描画されています。デザイン完全再現を優先する場合は、正式アイコン画像として切り出すか、既存SVG/PNG素材へ差し替える対象です。

| 現在のclass | 用途 | 現状 | PC/SP | 推奨ファイル名 |
|---|---|---|---|---|
| `.ew-hero__support-icons span` | FV黒丸バッジ内の3アイコン | テキスト/丸UI | PCのみ表示、SP非表示 | `assets/icons/hero-support-recruit.webp` など3種 |
| `.ew-team-support__icon--search` | チームカード: 事業戦略・ヒアリング | CSS描画 | PC/SP共通 | `assets/icons/team-strategy.webp` |
| `.ew-team-support__icon--screen` | チームカード: Web設計・構成設計 | CSS描画 | PC/SP共通 | `assets/icons/team-planning.webp` |
| `.ew-team-support__icon--pen` | チームカード: デザイン・制作 | CSS描画 | PC/SP共通 | `assets/icons/team-design.webp` |
| `.ew-team-support__icon--growth` | チームカード: 公開後の改善・運用 | CSS描画 | PC/SP共通 | `assets/icons/team-growth.webp` |
| `.ew-team-support__icon--ai` | チームカード: AI運用・保守支援 | CSS描画 | PC/SP共通 | `assets/icons/team-ai.webp` |
| `.ew-final-cta__icon--gift` | 最終CTA: 無料相談 | CSS描画 | PC/SP共通 | `assets/icons/cta-gift.webp` |
| `.ew-final-cta__icon--download` | 最終CTA: 資料ダウンロード | CSS描画 | PC/SP共通 | `assets/icons/cta-download.webp` |
| `.ew-footer__map span` | footer Google Mapピン | CSS描画 | PC/SP共通 | `assets/icons/map-pin.webp` |
| `.ew-footer__contact span` | footer お問い合わせ封筒 | CSS描画 | PC/SP共通 | `assets/icons/mail.webp` |

## 本実装時に再確認が必要な情報

1. エン太くんの正式ポーズ数
   - FV用
   - 課題カード横用
   - 困っているポーズ
   - 解決後ポーズ
   - freedom小型用
   - CTA用
   - footer用

2. アイコンの正式スタイル
   - オレンジ線画PNG/WebPにするか
   - 既存SVGアイコンを使用できるか
   - PC/SPで同一画像か、SP用に線幅を太くした画像を用意するか

3. 推奨納品形式
   - キャラクター: 透過WebPまたは透過PNG
   - アイコン: WebP/PNG、必要なら正式SVG
   - 写真: WebP/JPEG
   - favicon: 32px/180px/192px/512pxの派生を用意推奨

4. SP専用素材の要否
   - FVキャラクターはSPで被りやすいため、SP専用の小さめ・正面寄り素材があると調整しやすい
   - FV背景はPC/SPで構図が変わるため、SP専用背景があると再現度が上がる
   - footerキャラクターは現状SP非表示。SPでも表示する場合は小型素材が必要

## 優先差し替え順

1. `problem-placeholder.png` を課題カード6種と解決方法6種へ分割
2. `freedom-placeholder.png` をfreedomステップ4種へ分割
3. `enta-hero-thumbsup.png` を用途別キャラクター7種へ分割
4. `team-strip-generated.png` を正式メンバー写真へ差し替え
5. `instagram-glyph-gradient.svg` を軽量版へ最適化
6. favicon派生サイズを追加
