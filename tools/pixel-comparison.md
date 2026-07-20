# Pixel Comparison Guide

Phaseごとに、実装対象セクションだけを比較する。

## PC

- viewport: 1440px
- browser: Google Chrome最新版
- browser zoom: 100%
- OS表示倍率: 100%
- devicePixelRatio: 1基準
- font: 正式フォント確定後に固定
- animation: 停止状態
- scrollbar: 有無を統一
- design comp: `C:\Users\Owner\Downloads\ChatGPT Image 2026年7月13日 17_49_13.png`
- design comp size: 941 x 1672px
- comparison width: 1440pxへ拡大換算

## Mobile

- viewport: 390px
- browser zoom: 100%
- devicePixelRatio: 1基準
- mobile design comp: 未提供

## Procedure

1. ローカル表示をChromeで開く。
2. 対象viewportに固定する。
3. フォント読み込み完了後にスクリーンショットを取得する。
4. デザイン画像と実装画像を同じ横幅にする。
5. セクション開始位置を合わせる。
6. 50%透過で重ねる。
7. 差分箇所を記録する。
8. CSSを調整し、再撮影する。
9. 残差を報告する。

## Report Items

- セクション上端
- セクション下端
- コンテンツ幅
- 左右余白
- 上下余白
- 見出し位置
- 文字のベースライン
- 改行位置
- キャラクター位置
- モックアップ位置
- ボタンサイズ
- ボタン内の文字位置
- 画像比率
- 角丸
- 枠線
- シャドウ
- 背景装飾
- セクション間の接続
