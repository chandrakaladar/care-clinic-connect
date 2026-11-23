//#region node_modules/remend/dist/index.js
var zn = Object.defineProperty;
var Yn = Object.defineProperties;
var Qn = Object.getOwnPropertyDescriptors;
var nn = Object.getOwnPropertySymbols;
var Zn = Object.prototype.hasOwnProperty;
var jn = Object.prototype.propertyIsEnumerable;
var en = (n, e, t) => e in n ? zn(n, e, {
	enumerable: true,
	configurable: true,
	writable: true,
	value: t
}) : n[e] = t;
var E = (n, e) => {
	for (var t in e || (e = {})) Zn.call(e, t) && en(n, t, e[t]);
	if (nn) for (var t of nn(e)) jn.call(e, t) && en(n, t, e[t]);
	return n;
};
var M = (n, e) => Yn(n, Qn(e));
var f = {
	PROSE: 0,
	FENCE_MARKER: 1,
	FENCE_INFO: 2,
	FENCE_BODY: 3,
	CODE_SPAN: 4,
	CODE_SPAN_OPEN: 5
};
var Vn = /^(`{3,}|~{3,})(.*)$/;
var Jn = (n) => n !== void 0 && n >= "0" && n <= "9";
var ne = (n, e) => {
	let t = e;
	if (n[t] === "-" || n[t] === "*" || n[t] === "+") t += 1;
	else {
		for (; Jn(n[t]) && t - e < 9;) t += 1;
		if (t === e || n[t] !== "." && n[t] !== ")") return -1;
		t += 1;
	}
	return n[t] === " " ? t + 1 : -1;
};
var H = (n, e, t) => {
	let r = 0, i = e, o = false, s = e;
	for (;;) {
		for (; s < t && n[s] === " ";) s += 1;
		if (n[s] === ">") {
			r += 1, s += n[s + 1] === " " ? 2 : 1, i = s, o = false;
			continue;
		}
		let l = s < t ? ne(n, s) : -1;
		if (l === -1) return {
			contentStart: s,
			listIndent: o ? s - i : 0,
			quoteDepth: r
		};
		s = l, o = true;
	}
};
var ee = (n, e, t, r) => {
	let i = e;
	for (let o = 0; o < r; o += 1) {
		for (; i < t && n[i] === " ";) i += 1;
		if (n[i] !== ">") return -1;
		i += 1, n[i] === " " && (i += 1);
	}
	return i;
};
var te = (n, e, t, r, i) => {
	let o = e + r;
	n.fill(f.FENCE_MARKER, o, o + i), n.fill(f.FENCE_INFO, o + i, Math.min(t + 1, n.length));
};
var re = (n, e, t, r) => {
	let i = e;
	for (; i < t && n[i] === " ";) i += 1;
	let o = 0;
	for (; i < t && n[i] === r.char;) i += 1, o += 1;
	if (o < r.length) return false;
	for (; i < t;) {
		if (n[i] !== " " && n[i] !== "	" && n[i] !== "\r") return false;
		i += 1;
	}
	return true;
};
var ie = (n, e, t, r) => {
	let i = r > t && n[r - 1] === "\r" ? r - 1 : r, o = H(n, t, i), s = n.slice(o.contentStart, i).match(Vn);
	if (!s) return null;
	let [, l, a] = s, c = l[0];
	return c === "`" && a.includes("`") ? null : (te(e, t, r, o.contentStart - t, l.length), {
		char: c,
		length: l.length,
		listIndent: o.listIndent,
		quoteDepth: o.quoteDepth
	});
};
var oe = (n, e, t, r) => {
	let i = ee(n, e, t, r.quoteDepth);
	if (i === -1 || r.listIndent === 0) return i;
	let o = i;
	for (; o < t && n[o] === " ";) o += 1;
	return o === t || n[o] === "\r" && o + 1 === t || o - i >= r.listIndent ? i : -1;
};
var se = (n, e) => {
	let t = n.length, r = null, i = 0;
	for (; i < t;) {
		let o = n.indexOf(`
`, i);
		o === -1 && (o = t);
		let s = r ? oe(n, i, o, r) : -1;
		r && s === -1 && (r = null), r ? re(n, s, o, r) ? (e.fill(f.FENCE_MARKER, i, o), r = null) : e.fill(f.FENCE_BODY, i, Math.min(o + 1, t)) : r = ie(n, e, i, o), i = o + 1;
	}
	return r;
};
var tn = (n, e) => {
	let t = e + 1;
	for (; t < n.length && n[t] === "`";) t += 1;
	return t;
};
var le = (n, e) => {
	let t = e + 1;
	for (; t < n.length && (n[t] === " " || n[t] === "	" || n[t] === "\r");) t += 1;
	return t < n.length && n[t] === `
`;
};
var ae = (n, e, t) => {
	let r = t;
	for (;;) {
		let i = n.indexOf("`", r);
		if (i === -1) return -1;
		let o = i > r && e[i - 1] === f.PROSE && C(n, i);
		if (e[i] === f.PROSE && !o) return i;
		r = i + 1;
	}
};
var ce = (n, e) => {
	let t = n.length, r = -1, i = 0, o = 0;
	for (; o < t;) {
		if (r < 0) {
			if (o = ae(n, e, o), o === -1) break;
			let l = tn(n, o);
			r = o, i = l - o, o = l;
			continue;
		}
		if (e[o] !== f.PROSE) {
			e.fill(f.CODE_SPAN_OPEN, r, o), r = -1, o += 1;
			continue;
		}
		if (n[o] === `
` && le(n, o)) {
			r = -1, o += 1;
			continue;
		}
		if (n[o] !== "`") {
			o += 1;
			continue;
		}
		let s = tn(n, o);
		s - o === i && (e.fill(f.CODE_SPAN, r, s), r = -1), o = s;
	}
	return r >= 0 ? (e.fill(f.CODE_SPAN_OPEN, r, t), {
		start: r,
		runLength: i
	}) : null;
};
var ue = (n) => {
	let e = new Uint8Array(n.length);
	return {
		text: n,
		regions: e,
		openFence: se(n, e),
		openSpan: ce(n, e),
		mathMask: null,
		mathMaskWithoutDollar: null,
		linkUrlMask: null,
		htmlTagMask: null
	};
};
var X = null;
var x = null;
var h = (n) => {
	if (x !== null && n === X) return x;
	let e = ue(n);
	return X = n, x = e, e;
};
var rn = () => {
	X = null, x = null;
};
var on = (n, e) => e >= n.regions.length ? n.openFence !== null || n.openSpan !== null : e < 0 ? false : n.regions[e] !== f.PROSE;
var A = (n, e) => {
	if (e >= n.regions.length) return n.openFence !== null;
	if (e < 0) return false;
	let t = n.regions[e];
	return t === f.FENCE_MARKER || t === f.FENCE_INFO || t === f.FENCE_BODY;
};
var w = (n, e) => n.regions[e] === f.CODE_SPAN;
var C = (n, e) => {
	let t = 0;
	for (let r = e - 1; r >= 0 && n[r] === "\\"; r -= 1) t += 1;
	return t % 2 === 1;
};
var sn = (n, e) => {
	let t = h(n), r = e + e, i = 0;
	for (let o = n.indexOf(r); o !== -1; o = n.indexOf(r, o)) t.regions[o] === f.PROSE && true ? (i += 1, o += 2) : o += 1;
	return i;
};
var z = /* @__PURE__ */ new Uint8Array(0);
var de = (n) => n === "inlineLatex" || n === "blockLatex";
var fe = (n, e) => e === "[" && n === "none" ? "blockLatex" : e === "]" && n === "blockLatex" ? "none" : e === "(" && n === "none" ? "inlineLatex" : e === ")" && n === "inlineLatex" ? "none" : null;
var me = (n, e) => e ? n === "blockDollar" ? "none" : "blockDollar" : n === "blockDollar" ? n : n === "inlineDollar" ? "none" : "inlineDollar";
var he = (n) => n.includes("$") || n.includes("\\(") || n.includes("\\[");
var ge = (n, e, t, r) => {
	let i = n[e + 1];
	if (n[e] === "\\") {
		if (i === "$") return {
			context: t,
			length: 2
		};
		let o = fe(t, i);
		return o === null ? null : {
			context: o,
			length: 2
		};
	}
	if (n[e] === "$" && !de(t)) {
		let o = i === "$";
		return o || r ? {
			context: me(t, o),
			length: o ? 2 : 1
		} : null;
	}
	return null;
};
var pe = (n, e) => {
	let { text: t, regions: r } = n, i = t.length, o = new Uint8Array(i), s = "none", l = 0;
	for (; l < i;) {
		o[l] = s === "none" ? 0 : 1;
		let a = r[l] === f.PROSE ? ge(t, l, s, e) : null;
		if (a === null) {
			l += 1;
			continue;
		}
		s = a.context, a.length === 2 && (o[l + 1] = s === "none" ? 0 : 1), l += a.length;
	}
	return o;
};
var P = (n, e, t = true) => {
	if (e < 0 || e >= n.text.length) return false;
	let r = t ? "mathMask" : "mathMaskWithoutDollar", i = n[r];
	return i === null && (i = he(n.text) ? pe(n, t) : z, n[r] = i), i[e] === 1;
};
var be = (n, e, t, r) => {
	let { text: i, regions: o } = n, s = new Uint8Array(t - e), l = 0;
	for (let c = t - 1; c >= e; c -= 1) i[c] === ")" && o[c] === f.PROSE && (l = 1), s[c - e] = l;
	let a = false;
	for (let c = e; c < t; c += 1) a && s[c - e] === 1 && (r[c] = 1), o[c] === f.PROSE && (i[c] === ")" ? a = false : i[c] === "(" && (a = c > 0 && i[c - 1] === "]"));
};
var ke = (n) => {
	let { text: e } = n, t = e.length, r = new Uint8Array(t), i = 0;
	for (; i < t;) {
		let o = e.indexOf(`
`, i);
		o === -1 && (o = t), be(n, i, o, r), i = o + 1;
	}
	return r;
};
var $ = (n, e) => e < 0 || e >= n.text.length ? false : (n.linkUrlMask === null && (n.linkUrlMask = n.text.includes("](") ? ke(n) : z), n.linkUrlMask[e] === 1);
var Ee = (n) => {
	let { text: e, regions: t } = n, r = e.length, i = new Uint8Array(r), o = false;
	for (let s = 0; s < r; s += 1) {
		if (e[s] === `
`) {
			o = false;
			continue;
		}
		if (i[s] = o ? 1 : 0, t[s] === f.PROSE) {
			if (e[s] === ">") o = false;
			else if (e[s] === "<") {
				let l = e[s + 1];
				o = l !== void 0 && (l >= "a" && l <= "z" || l >= "A" && l <= "Z" || l === "/");
			}
		}
	}
	return i;
};
var U = (n, e) => e < 0 || e >= n.text.length ? false : (n.htmlTagMask === null && (n.htmlTagMask = n.text.includes("<") ? Ee(n) : z), n.htmlTagMask[e] === 1);
var S = (n, e) => on(h(n), e);
var Me = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm;
var ln = (n) => !n || typeof n != "string" || !n.includes(">") ? n : n.replace(Me, (e, t, r, i) => S(n, i) ? e : `${t}\\>${r}`);
var an = /^#{1,6}(?:[ \t]|$)/;
var cn = /^(?:(?:\*[ \t]*){3,}|(?:-[ \t]*){3,}|(?:_[ \t]*){3,})$/;
var Ce = /^(?:=+|-+)[ \t]*$/;
var Se = /^(?:[*+-]|\d{1,9}[.)])$/;
var Re = /^-{1,2}\u200B$/;
var un = (n) => n.listIndent > 0 || n.quoteDepth > 0 ? "contained" : "top";
var Ie = (n, e, t, r) => Se.test(n) && (e === "none" || e === "contained" && t.quoteDepth === 0 && t.contentStart === r);
var T = (n) => {
	let { text: e } = n, t = 0, r = 0, i = false, o = "none";
	for (let s = 0; s <= e.length;) {
		let l = e.indexOf(`
`, s);
		l === -1 && (l = e.length);
		let a = l + 1, c = H(e, s, l), u = e.slice(c.contentStart, l).trim();
		if (l === e.length && u === "") break;
		u === "" || A(n, c.contentStart) || cn.test(e.slice(s, l).trim()) || cn.test(u) || Ce.test(u) && !i || l < e.length && Ie(u, o, c, s) ? (t = a, i = false, o = "none") : i || c.listIndent > 0 || c.quoteDepth > r || Re.test(u) || an.test(u) || u.startsWith("|") ? (t = c.contentStart, i = an.test(u) || u.startsWith("|"), o = i ? "none" : un(c)) : o === "none" && (o = un(c)), r = c.quoteDepth, s = a;
	}
	return Math.min(t, e.length);
};
var W = /^[\s_~*`]*$/;
var Oe = /\s/;
var y = (n) => Oe.test(n);
var fn = (n, e) => {
	let t = h(n), r = 1;
	for (let i = e - 1; i >= 0; i -= 1) if (!w(t, i)) {
		if (n[i] === "]") r += 1;
		else if (n[i] === "[" && (r -= 1, r === 0)) return i;
	}
	return -1;
};
var K = (n, e) => {
	let t = h(n), r = 1;
	for (let i = e + 1; i < n.length; i += 1) if (!w(t, i)) {
		if (n[i] === "[") r += 1;
		else if (n[i] === "]" && (r -= 1, r === 0)) return i;
	}
	return -1;
};
var Y = (n, e) => P(h(n), e);
var gn = [
	"*",
	"_",
	"~"
];
var pn = (n, e) => {
	if (e <= 0) return "";
	let t = n.charCodeAt(e - 1);
	return t >= 56320 && t <= 57343 && e >= 2 ? n.slice(e - 2, e) : n[e - 1];
};
var bn = (n, e) => {
	var t;
	return e < n.length ? String.fromCodePoint((t = n.codePointAt(e)) != null ? t : 0) : "";
};
var B = (n) => n === "" || y(n);
var Le = /[\p{P}\p{S}]/u;
var D = (n) => n !== "" && Le.test(n);
var kn = (n) => {
	let { marker: e, nextChar: t, prevChar: r } = n, i = (a) => e !== "~" && gn.includes(a), o = i(t) || !(B(t) || D(t) && !B(r) && !D(r)), s = i(r) || !(B(r) || D(r) && !B(t) && !D(t));
	if (e === "_") {
		n.canClose = s && (!o || D(t)), n.canOpen = o && (!s || D(r));
		return;
	}
	let l = e === "~" && n.length > 2;
	n.canClose = s && !l, n.canOpen = o && !l;
};
var En = (n, e, t, r, i, o) => {
	let s = {
		canClose: false,
		canOpen: false,
		closesPartially: false,
		count: t,
		index: e,
		length: t,
		marker: n,
		nextChar: i,
		pairsClosed: 0,
		pairsOpened: 0,
		prevChar: r,
		scope: o
	};
	return kn(s), s;
};
var Te = (n, e) => {
	let { text: t } = n, r = t.length;
	for (; r > 0 && P(n, r - 1, e);) r -= 1;
	return r < t.length && t[r - 1] === "$" && t[r] !== "$" ? r : t.length;
};
var Mn = (n, e, t, r) => (n.regions[e] === f.PROSE || n.regions[e] === f.CODE_SPAN_OPEN) && !(e < t && P(n, e, r)) && !$(n, e) && !U(n, e);
var ye = (n, e, t, r) => {
	let { text: i } = n, o = [], s = [], l = -1;
	for (let a = e; a < i.length; a += 1) {
		let c = i[a];
		if (c !== "[" && c !== "]" || C(i, a) || !Mn(n, a, t, r)) continue;
		if (c === "[") {
			s.push(a);
			continue;
		}
		let u = s.pop();
		u !== void 0 && u > l && i[a + 1] === "(" && $(n, a + 2) && (o.push({
			end: a,
			start: u
		}), (i[u - 1] !== "!" || C(i, u - 1)) && (l = u));
	}
	return o;
};
var _e = (n, e, t, r) => {
	var o, s;
	for (; t.at < n.length && n[t.at].start < e;) r.push(n[t.at]), t.at += 1;
	let i = r.length;
	for (; i > 0 && r[i - 1].end <= e;) i -= 1;
	if (i < r.length) {
		let l = 0;
		for (let a = 0; a < i; a += 1) r[a].end > e && (r[l] = r[a], l += 1);
		r.length = l;
	}
	return (s = (o = r.at(-1)) == null ? void 0 : o.start) != null ? s : -1;
};
var Cn = (n, e, t) => {
	let { text: r } = n, i = [], o = Te(n, t), s = ye(n, e, o, t).sort((u, d) => u.start - d.start || d.end - u.end), l = { at: 0 }, a = [], c = (u, d) => r[u] === d && Mn(n, u, o, t);
	for (let u = e; u < r.length; u += 1) {
		let d = r[u];
		if (!(gn.includes(d) && c(u, d))) continue;
		let g = u + 1;
		for (; g < r.length && c(g, d);) g += 1;
		let b = C(r, u), O = b ? u + 1 : u;
		g > O && i.push(En(d, O, g - O, b ? d : pn(r, u), bn(r, g), _e(s, O, l, a))), u = g - 1;
	}
	return i;
};
var Ne = (n, e) => (e.canOpen || n.canClose) && (n.count + e.count) % 3 === 0 && !(n.count % 3 === 0 && e.count % 3 === 0);
var we = (n, e) => n.marker !== e.marker ? false : e.marker === "~" ? n.count === e.count : !Ne(n, e);
var He = 14;
var $e = (n) => n.marker === "~" ? 12 + n.count - 1 : (n.marker === "_" ? 6 : 0) + (n.canOpen ? 3 : 0) + n.count % 3;
var Q = (n) => Array.from({ length: He }, () => n);
var Be = (n) => n === "~" ? [12, 14] : n === "_" ? [6, 12] : [0, 6];
var Fe = (n, e, t) => {
	let [r, i] = Be(e.marker);
	for (let o = r; o < i; o += 1) n[o] > t && (n[o] = t);
};
var Sn = (n, e) => {
	for (let t = 0; t < n.length; t += 1) n[t] > e && (n[t] = e);
};
var xe = (n, e, t, r, i) => {
	for (; r.count > 0;) {
		let o = $e(r), s = n.length - 1, l = Math.max(e, t[o]);
		for (; s >= l && !we(n[s], r);) s -= 1;
		if (s < l) {
			t[o] = n.length;
			return;
		}
		let a = n[s], c = 1;
		r.marker === "~" ? c = r.count : a.count >= 2 && r.count >= 2 && (c = 2), a.count -= c, r.count -= c, a.pairsOpened += 1, r.pairsClosed += 1, r.closesPartially = a.count > 0, i.push({
			closer: r,
			opener: a,
			used: c
		}), a.count > 0 ? (Fe(t, a, s), n.length = s + 1) : n.length = s, Sn(t, n.length);
	}
};
var Ue = (n, e, t) => {
	var s, l, a, c;
	let r = [], i = [], o = [Q(0)];
	for (let u of n) {
		if (!e(u)) {
			for (let d = 0; d < u.pairsClosed; d += 1) r.length = (s = i.pop()) != null ? s : 0, o.pop(), Sn((l = o.at(-1)) != null ? l : [], r.length);
			for (let d = 0; d < u.pairsOpened; d += 1) i.push(r.length), o.push(Q(r.length));
			continue;
		}
		u.canClose && xe(r, (a = i.at(-1)) != null ? a : 0, (c = o.at(-1)) != null ? c : Q(0), u, t), u.canOpen && u.count > 0 && r.push(u);
	}
	return r;
};
var G = (n) => n.marker === "~";
var mn = (n) => n.marker !== "~";
var We = (n) => {
	let e = n.find((t) => !G(t) || t.length <= 2);
	return e && G(e) ? [G, mn] : [mn, G];
};
var Rn = (n) => {
	let e = /* @__PURE__ */ new Map();
	for (let o of n) {
		let s = e.get(o.scope);
		s ? s.push(o) : e.set(o.scope, [o]);
	}
	let t = [], r = We(n), i = [];
	for (let [o, s] of e) {
		let l = r.flatMap((a) => Ue(s, a, t));
		o === -1 && (i = l);
	}
	return {
		literal: n.reduce((o, s) => o + s.count, 0),
		open: i.sort((o, s) => s.index - o.index),
		pairs: t,
		runs: n
	};
};
var v = (n, e) => {
	let t = h(n);
	return Rn(Cn(t, T(t), e));
};
var In = (n, e, t) => {
	let r = h(n), i = T(r);
	return {
		inlineMath: t,
		insertAt: e,
		runs: Cn(r, i, t),
		slow: i > e || e > 0 && (U(r, e - 1) || P(r, e - 1, t) || A(r, e - 1)),
		text: n
	};
};
var Ke = (n, e) => n.text.slice(0, n.insertAt) + e + n.text.slice(n.insertAt);
var q = (n, e) => {
	if (n.slow) return v(Ke(n, e), n.inlineMath);
	let { insertAt: t, text: r } = n, i = n.runs.map((c) => M(E({}, c), {
		closesPartially: false,
		count: c.length,
		pairsClosed: 0,
		pairsOpened: 0
	})), o = bn(r, t), s = (c) => c < e.length ? e[c] : o, l = 0, a = i.at(-1);
	if (a && a.scope === -1 && a.index + a.length === t) {
		for (; e[l] === a.marker;) l += 1;
		a.length += l, a.count = a.length, a.nextChar = s(l), kn(a);
	}
	for (; l < e.length;) {
		let c = l + 1;
		for (; e[c] === e[l];) c += 1;
		i.push(En(e[l], t + l, c - l, l === 0 ? pn(r, t) : e[l - 1], s(c), -1)), l = c;
	}
	return Rn(i);
};
var hn = (n) => n.opener.marker === "~" ? "~" : n.opener.marker + n.used;
var Ge = (n) => {
	var i, o;
	let e = [...n].sort((s, l) => s.opener.index - l.opener.index || l.closer.index - s.closer.index), t = /* @__PURE__ */ new Map(), r = [];
	for (let s of e) {
		for (; ((o = (i = r.at(-1)) == null ? void 0 : i.closer.index) != null ? o : Number.POSITIVE_INFINITY) < s.closer.index;) r.pop();
		let l = r.at(-1);
		t.set(s, l && l.opener.index === s.opener.index ? t.get(l) : l), ((l == null ? void 0 : l.opener.index) !== s.opener.index || l.closer !== s.closer) && r.push(s);
	}
	return t;
};
var ve = (n) => D(n.opener.prevChar) && !B(n.opener.nextChar) && !D(n.opener.nextChar);
var qe = (n, e) => {
	let t = (i) => i.closer.index + i.closer.length > e, r = Ge(n.pairs);
	return n.pairs.some((i) => {
		let o = r.get(i);
		return o !== void 0 && hn(o) === hn(i) && (t(i) || t(o) && !ve(i));
	});
};
var Xe = /[^\s*_~]/;
var ze = (n) => {
	let e = n.text.lastIndexOf(`
`, n.insertAt - 1) + 1, { contentStart: t } = H(n.text, e, n.insertAt);
	return !Xe.test(n.text.slice(t, n.insertAt));
};
var On = (n, e, t, r, i) => {
	if (ze(t)) return;
	let o = q(t, r);
	if (o.literal > e - r.length) return;
	let s = new Map(n.runs.map((a) => [a.index, a.count]));
	return o.runs.every((a) => {
		var c;
		return i.has(a.index) || a.index + a.length > t.insertAt ? a.count === 0 : a.count === ((c = s.get(a.index)) != null ? c : 0);
	}) && !qe(o, t.insertAt) ? o.literal : void 0;
};
var _ = (n) => {
	let e = h(n);
	if (e.openFence) return n;
	let t = e.openSpan;
	if (!t || t.start < T(e)) return n;
	let r = n.length;
	for (; r > 0 && y(n[r - 1]);) r -= 1;
	let i = n.slice(t.start + t.runLength, r);
	if (!i || W.test(i)) return n;
	let o = 0, s = r - 1;
	for (; s >= 0 && n[s] === "`";) o += 1, s -= 1;
	if (o >= t.runLength) return n;
	let l = r - o, a = n.lastIndexOf(`
`, l - 1) + 1, u = o > 0 && t.runLength >= 3 && n.slice(a, l).trim() === "" ? ` ${"`".repeat(t.runLength)}` : "`".repeat(t.runLength - o);
	return n.slice(0, r) + u + n.slice(r);
};
var Ye = (n) => n.marker === "~" ? "strikethrough" : n.count >= 3 ? "boldItalic" : n.count === 2 && n.marker === "*" ? "bold" : "italic";
var Qe = (n) => {
	let e = n.length;
	for (; e > 0 && y(n[e - 1]);) e -= 1;
	return n[e - 1] === "\\" && !C(n, e - 1) ? e - 1 : e;
};
var Ze = (n, e, t) => t === "" ? n : n.slice(0, e) + t + n.slice(e);
var An = (n, e, t) => {
	let r = e - 1;
	for (; r >= 0 && W.test(n[r]);) r -= 1;
	let i = /* @__PURE__ */ new Map();
	for (let s = 1; s < t.runs.length; s += 1) i.set(t.runs[s].index, t.runs[s - 1]);
	let o = /* @__PURE__ */ new Map();
	for (let s of t.pairs) o.has(s.closer.index) || o.set(s.closer.index, s.opener);
	return {
		firstClosedBy: o,
		lastContent: r,
		previousRun: i
	};
};
var je = /^[A-Za-z0-9]$/;
var Ve = /^[\p{L}\p{N}]/u;
var Z = (n) => je.test(n);
var Je = (n, e, t) => {
	var o, s;
	if (!(e.marker === "*" && Z((o = n[e.index - 1]) != null ? o : "") && Ve.test(n.slice(e.index + e.length, e.index + e.length + 2)))) return false;
	let r = t.previousRun.get(e.index);
	if (!((r == null ? void 0 : r.marker) === "*" && [...n.slice(r.index + r.length, e.index)].every(Z))) return true;
	let i = t.firstClosedBy.get(r.index);
	return i !== void 0 && Z((s = n[i.index - 1]) != null ? s : "");
};
var nt = /^[,;]/;
var et = (n, e) => {
	var t, r;
	return y((t = n[e.index - 1]) != null ? t : " ") && nt.test((r = n[e.index + e.length]) != null ? r : "");
};
var tt = (n, e) => n[e.index - 1] === e.marker && C(n, e.index - 1);
var Pn = /\S/g;
var rt = (n, e) => {
	let t = n.indexOf(`
`, e.index + e.length);
	return t === -1 ? false : (Pn.lastIndex = t, Pn.test(n));
};
var it = (n, e, t) => e.index + e.length > t.lastContent || e.marker === "~" && e.count === 1 || e.marker === "_" && e.length >= 4 || Je(n, e, t) || et(n, e) || tt(n, e);
var ot = 4;
var Tn = 16;
var st = 25e4;
var yn = (n, e) => (n.remaining -= e.base.runs.length + 1, n.remaining >= 0);
var lt = (n, e, t, r, i) => {
	let o = new Set(r), s;
	for (let l of i) {
		if (!yn(e, n)) return;
		let a = On(n.match, n.literal, n.base, t.closers + l, o);
		a !== void 0 && (!s || a < s.literal) && (s = {
			closers: t.closers + l,
			literal: a,
			targets: r
		});
	}
	return s;
};
var at = (n, e) => {
	let [t] = n, r = t.marker.repeat(t.count - e), i = true;
	for (let o of n.slice(1)) r += o.marker.repeat(o.count), i && (i = o.marker === t.marker);
	if (!(r.length > Tn)) return i ? Array.from({ length: r.length + e + 2 }, (o, s) => t.marker.repeat(s + 1)) : Array.from({ length: e + 1 }, (o, s) => t.marker.repeat(s) + r);
};
var ct = (n) => {
	var r;
	let e = /* @__PURE__ */ new Map();
	for (let i of n) {
		let o = i.marker + i.count;
		e.set(o, [...(r = e.get(o)) != null ? r : [], i]);
	}
	if (e.size > 1 && e.size < n.length) return;
	let t = /* @__PURE__ */ new Set();
	for (let i of e.values()) {
		if (i.length > 1 && (i[0].count === 1 || i[0].marker === "~")) return;
		i.length % 2 === 1 && t.add(i.reduce((o, s) => s.index > o.index ? s : o));
	}
	return n.filter((i) => t.has(i));
};
var Dn = (n, e, t, r) => {
	var O;
	let { flags: i, gates: o, text: s, trailing: l } = n, a = [];
	for (let m of t) if (!(m.length > Tn || !i[Ye(m)]) && !it(s, m, o) && (a.push(m), a.length > ot)) return e;
	let c = (O = ct(a)) == null ? void 0 : O.filter((m) => !rt(s, m));
	if (c === void 0) return e;
	let u = (m, p) => {
		let [R] = p, k = [...m.targets, ...p.map((Xn) => Xn.index)], J = at(p, m.closers === "" && (l == null ? void 0 : l.marker) === R.marker ? Math.min(l.count, R.count - 1) : 0);
		if (!J) return false;
		let F = lt(n, r, m, k, J);
		if (!(F === void 0 && r.remaining < 0)) return F && Object.assign(m, F), F !== void 0;
	}, d = (m) => {
		let p = M(E({}, e), { targets: [...e.targets] });
		for (let R = 0; R < m.length; R += 1) {
			if (R < m.length - 1) {
				let k = u(p, m.slice(R));
				if (k === void 0) return;
				if (k) break;
			}
			if (u(p, [m[R]]) === void 0) return;
		}
		return p;
	}, g = [[]];
	for (let m of c) g.push(...g.map((p) => [...p, m]));
	g.reverse();
	let b = e;
	for (let m of g) if (m.length > 0) {
		let p = d(m);
		if (!p) return;
		p.literal < b.literal && (b = p);
	}
	return b;
};
var Ln = (n, e, t, r = []) => {
	let i = Dn(n, {
		closers: "",
		literal: n.literal,
		targets: r
	}, e, t);
	for (; i && i.closers !== "";) {
		if (!yn(t, n)) return;
		let o = q(n.base, i.closers).open.filter((l) => l.index < n.insertAt), s = Dn(n, i, o, t);
		if (!s || s.closers === i.closers) {
			i = s;
			break;
		}
		i = s;
	}
	return i;
};
var j = (n, e) => {
	let t = Qe(n), r = v(n, e.inlineMath), i = r.runs.at(-1), o = i && i.index + i.length === t ? i : void 0, s = {
		base: In(n, t, e.inlineMath),
		flags: e,
		gates: An(n, t, r),
		insertAt: t,
		literal: r.literal,
		match: r,
		text: n,
		trailing: o
	}, l = { remaining: st }, a = Ln(s, r.open, l);
	if (o && o.count < o.length) {
		let c = v(n.slice(0, o.index), e.inlineMath), u = M(E({}, o), { count: o.length }), d = o.count > 0 || o.closesPartially, g = M(E({}, c), { runs: [...c.runs, u] }), b = Ln(M(E({}, s), {
			gates: An(n, t, g),
			literal: c.literal + u.count,
			match: g,
			trailing: u
		}), c.open, l, d ? [] : [o.index]);
		if (!b) return n;
		let O = new Set(b.targets), m = q(s.base, b.closers), p = new Map(r.runs.map((k) => [k.index, k.count])), R = m.runs.every((k) => k.index >= o.index || O.has(k.index) || k.count === p.get(k.index));
		a && b.literal < a.literal && R && (a = b);
	}
	return a ? Ze(n, t, a.closers) : n;
};
var _n = (n, e) => {
	if (!(e.inlineCode && h(n).openSpan)) return j(n, e);
	let t = _(n);
	if (t !== n) {
		let i = j(t, e);
		return i === t ? n : i;
	}
	let r = j(n, e);
	return _(r) === r ? r : n;
};
var ut = /<[a-zA-Z/][^>]*$/;
var dt = /[a-zA-Z/]/;
var ft = (n) => n.includes("$") || n.includes("\\(") || n.includes("\\[");
var mt = (n, e) => {
	let t = n[e + 1];
	return t !== void 0 && dt.test(t);
};
var Nn = (n) => {
	let e = n.match(ut);
	if (!e || e.index === void 0) return n;
	let t = ft(n);
	for (let r = e.index; r < n.length; r += 1) if (!(n[r] !== "<" || !mt(n, r)) && !S(n, r) && !(t && Y(n, r))) return n.substring(0, r).trimEnd();
	return n;
};
var ht = (n) => sn(n, "$");
var gt = (n) => {
	let e = h(n), t = 0;
	for (let r = 0; r < n.length; r += 1) {
		if (n[r] === "\\") {
			r += 1;
			continue;
		}
		e.regions[r] === f.PROSE && n[r] === "$" && (r + 1 < n.length && n[r + 1] === "$" ? r += 1 : t += 1);
	}
	return t;
};
var pt = (n) => {
	if (n.endsWith("$") && !n.endsWith("$$")) return `${n}$`;
	let e = n.indexOf("$$");
	return e !== -1 && n.indexOf(`
`, e) !== -1 && !n.endsWith(`
`) ? `${n}
$$` : `${n}$$`;
};
var wn = (n) => ht(n) % 2 === 0 ? n : pt(n);
var Hn = (n) => gt(n) % 2 === 1 ? `${n}$` : n;
var N = "streamdown:incomplete-image";
var bt = (n, e, t, r) => {
	if (n.substring(e + 2).includes(")")) return null;
	let o = fn(n, e);
	if (o < r || S(n, o)) return null;
	let s = o > 0 && n[o - 1] === "!", l = s ? o - 1 : o, a = n.substring(0, l), c = n.substring(o + 1, e);
	return s ? `${a}![${c}](${N})` : t === "text-only" ? `${a}${c}` : `${a}[${c}](streamdown:incomplete-link)`;
};
var $n = (n, e, t) => {
	for (let r = t; r < e; r++) if (n[r] === "[" && !S(n, r)) {
		if (r > 0 && n[r - 1] === "!") continue;
		let i = K(n, r);
		if (i === -1) return r;
		if (i + 1 < n.length && n[i + 1] === "(") {
			let o = n.indexOf(")", i + 2);
			o !== -1 && (r = o);
		}
	}
	return e;
};
var kt = (n, e, t, r) => {
	let i = e > 0 && n[e - 1] === "!", o = i ? e - 1 : e;
	if (!n.substring(e + 1).includes("]")) {
		let a = n.substring(0, o);
		if (i) return `${a}![${n.substring(e + 1)}](${N})`;
		if (t === "text-only") {
			let c = $n(n, e, r);
			return n.substring(0, c) + n.substring(c + 1);
		}
		return `${n}](streamdown:incomplete-link)`;
	}
	if (K(n, e) === -1) {
		let a = n.substring(0, o);
		if (i) return `${a}![${n.substring(e + 1)}](${N})`;
		if (t === "text-only") {
			let c = $n(n, e, r);
			return n.substring(0, c) + n.substring(c + 1);
		}
		return `${n}](streamdown:incomplete-link)`;
	}
	return null;
};
var Et = (n, e) => {
	let t = K(n, e);
	return t !== -1 && n[t + 1] === "(" && n.indexOf(")", t + 2) !== -1;
};
var Mt = (n, e) => {
	let t = h(n), r = T(t), i = n.lastIndexOf("](");
	if (i >= r && !S(n, i)) {
		let s = bt(n, i, e, r);
		if (s !== null) return s;
	}
	let o = false;
	for (let s = n.lastIndexOf("["); s >= r; s = s === 0 ? -1 : n.lastIndexOf("[", s - 1)) {
		let l = !(s > 0 && n[s - 1] === "!" || A(t, s) || w(t, s));
		if (l && o) continue;
		let a = l && Et(n, s);
		if (o || (o = a), !(a || S(n, s))) {
			let c = kt(n, s, e, r);
			if (c !== null) return c;
		}
	}
	return n;
};
var Ct = 32;
var Bn = (n, e) => {
	let t = n;
	for (let r = 0; r < Ct; r += 1) {
		let i = Mt(t, e);
		if (i.length >= t.length) return i;
		t = i;
	}
	return t;
};
var St = (n) => n.endsWith("](streamdown:incomplete-link)") || n.endsWith(`](streamdown:incomplete-image)`);
var V = (n, e = "protocol", t = false) => {
	let r = Bn(n, e);
	if (r !== n || !t || St(n)) return r;
	let i = h(n).openSpan;
	if (!i || n.lastIndexOf("[", i.start) === -1) return n;
	let o = n.trimEnd(), s = _(o);
	if (s === o) return n;
	let l = Bn(s, e);
	return l === s ? n : l + n.slice(o.length);
};
var Rt = /^-{1,2}$/;
var It = /^[\s]*-{1,2}[\s]+$/;
var Ot = /^={1,2}$/;
var At = /^[\s]*={1,2}[\s]+$/;
var Fn = /^ {0,3}(?:[-+*]|(\d{1,9})[.)])(?: +|\t)/;
var xn = /^ {0,3}>/;
var Pt = /^[ \t]*/;
var Dt = (n) => {
	var t, r;
	let e = 0;
	for (let i of (r = (t = Pt.exec(n)) == null ? void 0 : t[0]) != null ? r : "") e += i === "	" ? 4 - e % 4 : 1;
	return e;
};
var Lt = (n) => {
	for (let e = n.length - 1; e >= 0; e--) {
		let t = n[e], r = Fn.exec(t);
		if ((r == null ? void 0 : r[1]) === void 0) return t.trim().length === 0 || !!r || xn.test(t);
		if (r[1] === "1") return true;
	}
	return true;
};
var Tt = (n, e, t) => {
	let r = Fn.exec(n);
	return r ? r[1] !== void 0 && !Lt(t) ? false : Dt(e) < r[0].length : xn.test(n);
};
var Un = (n) => {
	if (!n || typeof n != "string") return n;
	let e = n.lastIndexOf(`
`);
	if (e === -1) return n;
	let t = n.substring(e + 1), r = n.substring(0, e), i = t.trim();
	if (Rt.test(i) && !t.match(It)) {
		let o = r.split(`
`), s = o.at(-1);
		if (s && s.trim().length > 0 && !Tt(s, t, o)) return `${n}\u200B`;
	}
	if (Ot.test(i) && !t.match(At)) {
		let s = r.split(`
`).at(-1);
		if (s && s.trim().length > 0) return `${n}\u200B`;
	}
	return n;
};
var yt = String.raw`([\p{L}\p{N}_])~(?!~)(?=[\p{L}\p{N}_])`;
var _t = String.raw`<[a-z][\w-]*\s[^<>\n]*>`;
var Wn = String.raw`[^\s"'<>\x60()\[\]]`;
var Kn = String.raw`(?:${Wn}|\(${Wn}*\))*`;
var Nt = String.raw`(?:^|[^a-z])https?:\/\/${Kn}`;
var wt = String.raw`(?:^|[\t\n\r (*_\[\]~])www\.${Kn}`;
var Ht = new RegExp(`(${_t}|${Nt}|${wt})|${yt}`, "giu");
var Gn = (n) => !n || typeof n != "string" || !n.includes("~") ? n : n.replace(Ht, (e, t, r, i) => {
	if (t) return e;
	return S(n, i + r.length) ? e : `${r}\\~`;
});
var L = (n) => n !== false;
var vn = (n) => n === true;
var I = {
	SINGLE_TILDE: 0,
	COMPARISON_OPERATORS: 5,
	HTML_TAGS: 10,
	SETEXT_HEADINGS: 15,
	LINKS: 20,
	EMPHASIS: 30,
	INLINE_CODE: 50,
	KATEX: 70,
	INLINE_KATEX: 75,
	DEFAULT: 100
};
var $t = [
	{
		handler: {
			name: "singleTilde",
			handle: Gn,
			priority: I.SINGLE_TILDE
		},
		optionKey: "singleTilde"
	},
	{
		handler: {
			name: "comparisonOperators",
			handle: ln,
			priority: I.COMPARISON_OPERATORS
		},
		optionKey: "comparisonOperators"
	},
	{
		handler: {
			name: "htmlTags",
			handle: Nn,
			priority: I.HTML_TAGS
		},
		optionKey: "htmlTags"
	},
	{
		handler: {
			name: "setextHeadings",
			handle: Un,
			priority: I.SETEXT_HEADINGS
		},
		optionKey: "setextHeadings"
	},
	{
		handler: {
			name: "links",
			handle: V,
			priority: I.LINKS
		},
		optionKey: "links",
		earlyReturn: (n) => n.endsWith("](streamdown:incomplete-link)") || n.endsWith(`](streamdown:incomplete-image)`)
	},
	{
		handler: {
			name: "emphasis",
			handle: (n) => n,
			priority: I.EMPHASIS
		},
		optionKey: "italic"
	},
	{
		handler: {
			name: "inlineCode",
			handle: _,
			priority: I.INLINE_CODE
		},
		optionKey: "inlineCode"
	},
	{
		handler: {
			name: "katex",
			handle: wn,
			priority: I.KATEX
		},
		optionKey: "katex"
	},
	{
		handler: {
			name: "inlineKatex",
			handle: Hn,
			priority: I.INLINE_KATEX
		},
		optionKey: "inlineKatex"
	}
];
var Bt = (n) => {
	var r;
	let e = (r = n == null ? void 0 : n.linkMode) != null ? r : "protocol", t = {
		bold: L(n == null ? void 0 : n.bold),
		boldItalic: L(n == null ? void 0 : n.boldItalic),
		inlineCode: L(n == null ? void 0 : n.inlineCode),
		inlineMath: vn(n == null ? void 0 : n.inlineKatex),
		italic: L(n == null ? void 0 : n.italic),
		strikethrough: L(n == null ? void 0 : n.strikethrough)
	};
	return $t.filter(({ handler: i, optionKey: o }) => i.name === "links" ? L(n == null ? void 0 : n.links) || L(n == null ? void 0 : n.images) : i.name === "emphasis" ? t.bold || t.boldItalic || t.italic || t.strikethrough : i.name === "inlineKatex" ? vn(n == null ? void 0 : n.inlineKatex) : L(n == null ? void 0 : n[o])).map(({ handler: i, earlyReturn: o }) => i.name === "links" ? {
		handler: M(E({}, i), { handle: (s) => V(s, e, t.inlineCode) }),
		earlyReturn: e === "protocol" ? o : void 0
	} : i.name === "emphasis" ? {
		handler: M(E({}, i), { handle: (s) => _n(s, t) }),
		earlyReturn: o
	} : {
		handler: i,
		earlyReturn: o
	});
};
var Ft = (n) => {
	let e = n.length - 1;
	if (n[e] !== "\\" || C(n, e)) return false;
	let t = h(n);
	return t.regions[e] === f.PROSE && !P(t, e);
};
var xt = (n, e) => {
	var l;
	if (!n || typeof n != "string") return n;
	let t = n.endsWith(" ") && !n.endsWith("  ") ? n.slice(0, -1) : n, r = Bt(e), i = ((l = e == null ? void 0 : e.handlers) != null ? l : []).map((a) => {
		var c;
		return {
			handler: M(E({}, a), { priority: (c = a.priority) != null ? c : I.DEFAULT }),
			earlyReturn: void 0
		};
	}), o = [...r, ...i].sort((a, c) => {
		var u, d;
		return ((u = a.handler.priority) != null ? u : 0) - ((d = c.handler.priority) != null ? d : 0);
	}), s = (a) => {
		let c = a;
		for (let { handler: u, earlyReturn: d } of o) if (c = u.handle(c), d != null && d(c)) return c;
		return c.endsWith(" ") && !c.endsWith("  ") ? c.slice(0, -1) : c;
	};
	try {
		if (!Ft(t)) return s(t);
		let a = `${t}\\`, c = s(a);
		return c === a ? t : c;
	} finally {
		rn();
	}
};
var Fr = xt;
//#endregion
export { N as n, Fr as t };
