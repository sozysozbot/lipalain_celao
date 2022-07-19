function _(w) {
	if (typeof REPLACE_ANNOTATION !== "undefined" && REPLACE_ANNOTATION[w]) {
		return REPLACE_ANNOTATION[w];
	} else {
		return w;
	}
}
function def(word, part_of_speech, translation) {
	const b = document.createElement("b");
	const a = document.createElement("a");
	a.appendChild(document.createTextNode(word));
	b.appendChild(a);

	const transl = document.createElement("span");
	transl.classList.add("translation");
	transl.append("\u00a0" + translation + "\u00a0");

	const div = document.createElement("div");
	div.classList.add("box", "box-def");
	div.append(
		"\u00a0", b, "\u00a0", document.createElement("br"),
		"\u00a0", _(part_of_speech), "\u00a0", document.createElement("br"),
		transl
	);
	// div.innerHTML = `&nbsp;<b><a>${word}</a></b>&nbsp;<br>&nbsp;${pos}&nbsp;<br><span class="translation">${translation}</span>`
	return div;
}

function noun(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-noun");
	div.append(node, document.createElement("br"));
	return div;
}

function genitive(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-genitive");
	div.append(node, document.createElement("br"));
	return div;
}

function interjection(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-interjection");
	div.append(node, document.createElement("br"));
	return div;
}

function adj_attributive(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-adj-attributive");
	div.append(node, document.createElement("br"));
	return div;
}

function adverb(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-adverb");
	div.append(node, document.createElement("br"));
	return div;
}

function noun_phrase(...nodes) {
	const div = document.createElement("div");
	div.classList.add("box", "box-noun");
	div.append(
		...nodes, document.createElement("br"),
		"\u00a0", _("名詞"), "\u00a0"
	);
	return div;
}

function case_annotation(cas) {
	const case_annotation = document.createElement("span");
	case_annotation.classList.add("case_annotation");
	case_annotation.append(_(cas));
	return case_annotation
}

function nominative(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-nominative");
	div.append(node, document.createElement("br"), "\u00a0", "-'s", case_annotation(" (～が)"), "\u00a0");
	return div;
}

function accusative(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-accusative");
	div.append(node, document.createElement("br"), "\u00a0", "-'i", case_annotation(" (～を)"), "\u00a0");
	return div;
}

function dative(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-dative");
	div.append(node, document.createElement("br"), "\u00a0", "-'c", case_annotation(" (～に)"), "\u00a0");
	return div;
}

function allative(...nodes) {
	const div = document.createElement("div");
	div.classList.add("box", "box-allative");
	div.append(...nodes, document.createElement("br"), "\u00a0", "-'l", case_annotation(" (～へ)"), "\u00a0");
	return div;
}

function accusative_q(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-accusative");
	div.append(node, document.createElement("br"), "\u00a0", "-'i", case_annotation(" (～を)"), _(" (疑問詞)"), "\u00a0");
	return div;
}

function preposition(word, translation, node) {
	const outer = document.createElement("div");
	outer.classList.add("box", "box-preposition");

	const inner = document.createElement("div");
	inner.classList.add("box", "box-not-shown");
	inner.appendChild(def(word, _("前置詞"), translation));
	inner.appendChild(node);

	outer.append(
		inner, document.createElement("br"),
		"\u00a0", `${word} - `, case_annotation(`(${translation})`), "\u00a0"
	);
	return outer;
}

function postposition(node, word, translation) {
	const outer = document.createElement("div");
	outer.classList.add("box", "box-postposition");

	const inner = document.createElement("div");
	inner.classList.add("box", "box-not-shown");
	inner.appendChild(node);
	inner.appendChild(def(word, _("後置詞"), translation));

	outer.append(
		inner, document.createElement("br"),
		"\u00a0", `- ${word}`, case_annotation(` (${translation})`), "\u00a0"
	);
	return outer;
}

function sentence(...nodes) {
	const div = document.createElement("div");
	div.classList.add("box", "box-sentence");
	div.append(...nodes, document.createElement("br"), "\u00a0", _("文"), "\u00a0");
	return div;
}

function complement(node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-complement");
	div.append(node, document.createElement("br"), "\u00a0", _("補語"), "\u00a0");
	return div;
}

function derived_noun(suffix, translation, sentence_node) {
	const div = document.createElement("div");
	div.classList.add("box", "box-noun");
	div.append(
		def(suffix, _("動詞派生接辞"), translation), document.createElement("br"),
		sentence_node, document.createElement("br"),
		"\u00a0", _("名詞"), "\u00a0"
	);
	return div;
}

function sentence_with_auxiliary(...nodes) {
	const div = document.createElement("div");
	div.classList.add("box", "box-sentence-with-auxiliary");
	div.append(...nodes, document.createElement("br"), "\u00a0", _("助動詞を含む文"), "\u00a0");
	return div;
}

function sentence_with_cancelled_auxiliary(...nodes) {
	const div = document.createElement("div");
	div.classList.add("box", "box-sentence-with-cancelled-auxiliary");
	div.append(...nodes, document.createElement("br"), "\u00a0", _("助動詞が打ち消された文"), "\u00a0");
	return div;
}

function imperative() {
	const div = document.createElement("div");
	div.classList.add("box", "box-nominative");
	div.append("\u00a0", _("文頭動詞命令"), case_annotation(" (～せよ)"), "\u00a0");
	return div;
}
