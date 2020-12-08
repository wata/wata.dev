---
title: Netlify CMSでHugoを使って好きなテンプレートに変更
date: 2020-12-08T05:49:54.380Z
description: 微妙にテーマダウンロード以外にやらなきゃいけないこと
---
1. テーマを `site/themes` 下にダウンロード
1. `site/themes/etch/exampleSite/` を `site/` 下にコピー
1. `site/static/admin/config.yml` を編集
    - そのままだとCMS画面で投稿一覧を読み込んでくれない

https://www.netlifycms.org/docs/start-with-a-template/

`folder` で `site/content/posts` のパスを指定。
