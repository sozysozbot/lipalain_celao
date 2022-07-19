# lipalain_celao


## 使い方

main.css, boxes.css, lipalain_celao.js の 3 ファイルを配置して、それと同じフォルダに HTML ファイルを置いて

```
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="boxes.css">
<script src="lipalain_celao.js"></script>
```

と冒頭に書いたら、

```
<div id="sentence1"></div>
<script>
	sentence1.append(sentence(
		nominative(noun(def("miss", "名詞", "私たち"))),
		def("lersse", "動詞", "学ぶ"),
		accusative(noun(def("lineparine", "名詞", "リパライン語"))),
	));
</script>
```

( `sentence1.append` のところは本当は `document.getElementById("sentence1").append` の方が適正ですが、短縮記法でも一応動きます）

とすることで表示されます。
