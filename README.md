# lipalain_celao

## 実例
https://alarta-fua-fyrdeneriso-lineparine.github.io/lipalain_celao/lineparine'd_celao_zu_letix_pustiej.html

![](https://raw.githubusercontent.com/alarta-fua-fyrdeneriso-lineparine/lipalain_celao/master/klirma_fon_pustiej.png)

こういうのを

```html
<h3>selene mi tydiest krantjlvil fua akrantio jynut.</h3>

<div id="sentence13"></div>

<script>
	sentence13.append(sentence_with_auxiliary(
		def("selene", "助動詞", "〜したい"),
		sentence(
			nominative(noun(def("mi", "名詞", "私"))),
			def("tydiest", "mol型動詞", "行く"),
			dative(noun(def("krantjlvil", "名詞", "図書館"))),
			preposition("fua", "〜のために",
				derived_noun("-o", "〜すること",
					sentence(
						def("akranti", "動詞", "読む"),
						accusative(noun(def("jynut", "名詞", "本")))
					)
				)
			)
		)
	));
</script>

<h3>yrtilera, selene vydyli'd xibacken junaflavil io co klie mi'd dystise'l fua knloano?</h3>

<div id="sentence14"></div>

<script>
	sentence14.append(sentence_with_auxiliary(
		interjection(def("yrtilera", "間投詞", "ところで")),
		def("selene", "助動詞", "〜したい"),
		sentence(
			postposition(noun_phrase(
				genitive(def("vydyli'd", "-'d (〜の)", "明日の")),
				noun_phrase(
					adj_attributive(def("xibacken", "形容詞", "後半の")),
					def("junaflavil", "名詞", "日中")
				)
			), "io", "〜に・で"),
			nominative(noun(def("co", "名詞", "あなた"))),
			def("klie", "動詞", "来る"),
			allative(
				noun_phrase(
					genitive(def("mi'd", "-'d (〜の)", "私の")),
					def("dystis", "名詞", "家")
				),
				def("-'l", "格接辞", "〜へ")
			),
			preposition("fua", "〜のために",
				derived_noun("-o", "〜すること",
					sentence(
						def("knloan", "動詞", "食べる")
					)
				)
			)
		)
	));
</script>
```

ぐらいのコード量で書くためのやつです


## 使い方（日本語の対訳を書きたいとき）

main.css, boxes.css, lipalain_celao.js の 3 ファイルを配置して、それと同じフォルダに HTML ファイルを置いて

```html
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="boxes.css">
<script src="lipalain_celao.js"></script>
```

と冒頭に書いたら、

```html
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

## 使い方（日本語の対訳を出すためのコードを流用して、リパライン語表記版を作りたいとき）

具体例：
https://alarta-fua-fyrdeneriso-lineparine.github.io/lipalain_celao/lineparine'd_celao.html

```html
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="boxes.css">

<style>
	.translation { display: none; }
	.case_annotation { display: none; }
</style>

<script>
REPLACE_ANNOTATION = {
	"名詞": "ftlexest",
	"動詞": "ftona",
	"文": "krandiurg",
	"前置詞": "kraftanix",
	"副詞": "ftonaol",
	"-'d (～の)": "-'d",
	"-'d (〜の)": "-'d",
	"形容詞": "kraftan",
	"補語": "jurlt",
	"es型動詞": `"es" xale ftona`,
	" (疑問詞)": " (hmakrant)",
	"接続詞": "kranti'a",
	"動詞派生接辞": "jujolel",
	"助動詞": "kraftona",
	"mol型動詞": `"mol" xale ftona`,
	"助動詞を含む文": "krandiurg zu laxn kraftona",
	"間投詞": "krackrafi'a",
	"後置詞": "kafnisfamsk",
	"格接辞": "sansa'd klapals",
	"elx含有接続詞": `kranti'a zu laxn "elx"`,
	"修飾制御類": `"elx"`,
	"助動詞が打ち消された文": "krandiurg zu dirjas kraftona",
	"文頭動詞命令": "lkurfanggeng shrlovel"
}
</script>

<script src="lipalain_celao.js"></script>
```

などとしてやることで、


```html
<div id="sentence1"></div>
<script>
	sentence1.append(sentence(
		nominative(noun(def("miss", "名詞", "私たち"))),
		def("lersse", "動詞", "学ぶ"),
		accusative(noun(def("lineparine", "名詞", "リパライン語"))),
	));
</script>
```

と日本語で書いても、対訳が無視され、文法用語もリパライン語にすり替わる。
