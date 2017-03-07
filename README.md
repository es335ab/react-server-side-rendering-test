## 開発環境

### Node.js

```
$ node -v
v7.7.1
```

### Packages

- express
- react
- react-router
- redux

## 使い方

### Setup

- install : `yarn`

### Run the application

- build server javascript : `npm run build`
- build client javascript : `npm run webpack:server`
- start express server : `npm start`

## 作ってみるもの

ネットショップの商品一覧と商品詳細の2ページ。

- ルーティング：`items`, `items/:id`
- 要件：URL直たたきでランディングした時はサーバーサイドでhtmlを返す
- 要件：サイト内遷移した時はSPA
- 要件：商品詳細のページ下部には、自身の商品が属するカテゴリーの商品リストが存在する
- 要件：ブラウザバックがきちんとブラウザっぽく動く
- 要件：商品に関するいいねボタンがあり、いいねボタンの状態ははSPA中は永続化できる（クライアントでreduxのstoreに永続化する
- 要件：webサーバーでスマホとPCを判定して使用するコンポーネントを出し分ける
- 要件：userという概念を作ってID登録と認証できる -> 認証していないクライアントは認証画面へ飛ばす