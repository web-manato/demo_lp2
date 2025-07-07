# LPデモページ

## 概要

このプロジェクトは、ランディングページ（LP）のデモです。レスポンシブデザインに対応し、モダンな UI/UX を提供します。

## 特徴

-   **レスポンシブデザイン**: PC・タブレット・スマートフォンに対応
-   **モダンなアニメーション**: JavaScript によるスムーズなアニメーション
-   **セマンティック HTML**: アクセシビリティに配慮したマークアップ
-   **SASS/SCSS**: 効率的な CSS 管理（@use 構文使用）
-   **軽量構成**: 静的ファイルのみで動作

## 技術スタック

### フロントエンド

-   **HTML5**: セマンティックなマークアップ
-   **CSS3/SASS**: モダンなスタイリング（@use 構文使用）
-   **JavaScript (ES6+)**: インタラクティブ機能

## プロジェクト構造

```
demo_lp2/
├── index.html                # メインページ
├── css/                      # コンパイル済みCSS
│   ├── styles.css            # メインCSS
│   ├── styles.css.map        # ソースマップ
│   ├── styles.min.css        # 圧縮版CSS
│   └── styles.min.css.map    # 圧縮版ソースマップ
├── sass/                     # SASS/SCSSファイル
│   ├── styles.scss           # メインSASSファイル（@use構文）
│   ├── _variable.scss        # 変数定義
│   ├── _mixin.scss           # ミックスイン
│   ├── _header.scss          # ヘッダー関連スタイル
│   ├── _footer.scss          # フッター関連スタイル
│   ├── _common.scss          # 共通スタイル
│   ├── _index.scss           # メインページスタイル
│   ├── _slider.scss          # スライダー用スタイル
│   ├── _error.scss           # エラーページスタイル
│   └── reset.css             # リセットCSS
├── js/                       # JavaScriptファイル
│   ├── main.js               # メインJSファイル
│   ├── hamburger.js          # ハンバーガーメニュー
│   ├── fadeIn.js             # フェードインアニメーション
│   ├── accordion.js          # アコーディオン
│   ├── kv_an.js              # キービジュアルアニメーション
│   ├── sec_an.js             # セクションアニメーション
│   └── splide.js             # スライダー
├── img/                      # 画像ファイル（最適化済み）
│   └── ...                   # 各種PC/SP画像・ロゴ等
```

## セクション構成

1. **ヘッダー**: ナビゲーションメニュー（ハンバーガーメニュー対応）
2. **キービジュアル**: メインビジュアルとキャッチコピー
3. **サービス紹介**: サービスや特徴の説明
4. **選ばれる理由**: 強みやメリットの紹介
5. **セキュリティ**: 安心・安全のアピール
6. **お客様の声**: 利用者の声やレビュー
7. **お問い合わせ**: コンタクトフォーム（※本リポジトリにはPHP等のバックエンドは含まれていません）
8. **フッター**: サイト情報・SNSリンク

## セットアップ

### 前提条件

-   Web サーバー（Apache/Nginx など）
-   Node.js（SASS コンパイル用）

### インストール手順

1. リポジトリをクローン

```bash
git clone [repository-url]
cd demo_lp2
```

2. 依存関係のインストール（SASS コンパイル用）

```bash
npm install -g sass
```

3. SASS ファイルのコンパイル

```bash
sass sass/styles.scss css/styles.css --style compressed
```

4. Web サーバーでプロジェクトを公開

### 開発用コマンド

SASS ファイルの監視（自動コンパイル）:

```bash
sass --watch sass:css
```

## カスタマイズ

### 画像の変更

-   `img/` フォルダ内の画像ファイルを置き換え
-   ファイル名は既存の命名規則に従ってください

### 色やフォントの変更

-   `sass/_variable.scss` で変数を編集
-   `sass/_mixin.scss` で共通スタイルを編集

### コンテンツの変更

-   `index.html` の各セクション内のテキストを編集
-   画像の alt 属性も適切に更新してください

## ブラウザ対応

-   Chrome (最新版)
-   Firefox (最新版)
-   Safari (最新版)
-   Edge (最新版)

## ライセンス

このプロジェクトはデモ用です。商用利用の際は適切なライセンスを確認してください。

## 作者

まなと

## 更新履歴

詳細な更新履歴は[CHANGELOG.md](./CHANGELOG.md)をご確認ください。