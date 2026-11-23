import { n as createSingletonShorthands, r as guessEmbeddedLanguages, t as createBundledHighlighter } from "./@shikijs/core+[...].mjs";
import { t as dist_exports } from "./shikijs__engine-oniguruma.mjs";
import { t as createJavaScriptRegexEngine } from "./@shikijs/engine-javascript+[...].mjs";
//#region node_modules/shiki/dist/rolldown-runtime-782esTHO.mjs
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
//#endregion
//#region node_modules/shiki/dist/langs-bundle-full-CSdmXkDy.mjs
var bundledLanguagesInfo = [
	{
		"id": "abap",
		"name": "ABAP",
		"import": (() => import("./_18.mjs"))
	},
	{
		"id": "actionscript-3",
		"name": "ActionScript",
		"aliases": ["actionscript", "as3"],
		"import": (() => import("./_19.mjs"))
	},
	{
		"id": "ada",
		"name": "Ada",
		"import": (() => import("./_20.mjs"))
	},
	{
		"id": "ahk",
		"name": "AutoHotkey",
		"aliases": ["ahk1"],
		"import": (() => import("./_21.mjs"))
	},
	{
		"id": "ahk2",
		"name": "AutoHotkey2",
		"import": (() => import("./_22.mjs"))
	},
	{
		"id": "angular-html",
		"name": "Angular HTML",
		"import": (() => import("./_26.mjs"))
	},
	{
		"id": "angular-ts",
		"name": "Angular TypeScript",
		"import": (() => import("./_28.mjs"))
	},
	{
		"id": "apache",
		"name": "Apache Conf",
		"import": (() => import("./_29.mjs"))
	},
	{
		"id": "apex",
		"name": "Apex",
		"import": (() => import("./_30.mjs"))
	},
	{
		"id": "apl",
		"name": "APL",
		"import": (() => import("./_34.mjs"))
	},
	{
		"id": "applescript",
		"name": "AppleScript",
		"import": (() => import("./_35.mjs"))
	},
	{
		"id": "ara",
		"name": "Ara",
		"import": (() => import("./_36.mjs"))
	},
	{
		"id": "asciidoc",
		"name": "AsciiDoc",
		"aliases": ["adoc"],
		"import": (() => import("./_37.mjs"))
	},
	{
		"id": "asm",
		"name": "Assembly",
		"import": (() => import("./_38.mjs"))
	},
	{
		"id": "astro",
		"name": "Astro",
		"import": (() => import("./_42.mjs"))
	},
	{
		"id": "awk",
		"name": "AWK",
		"import": (() => import("./_43.mjs"))
	},
	{
		"id": "ballerina",
		"name": "Ballerina",
		"import": (() => import("./_44.mjs"))
	},
	{
		"id": "bat",
		"name": "Batch File",
		"aliases": ["batch", "cmd"],
		"import": (() => import("./_45.mjs"))
	},
	{
		"id": "beancount",
		"name": "Beancount",
		"import": (() => import("./_46.mjs"))
	},
	{
		"id": "berry",
		"name": "Berry",
		"aliases": ["be"],
		"import": (() => import("./_47.mjs"))
	},
	{
		"id": "bibtex",
		"name": "BibTeX",
		"import": (() => import("./_48.mjs"))
	},
	{
		"id": "bicep",
		"name": "Bicep",
		"import": (() => import("./_49.mjs"))
	},
	{
		"id": "bird2",
		"name": "BIRD2 Configuration",
		"aliases": ["bird"],
		"import": (() => import("./_50.mjs"))
	},
	{
		"id": "blade",
		"name": "Blade",
		"import": (() => import("./_53.mjs"))
	},
	{
		"id": "bsl",
		"name": "1C (Enterprise)",
		"aliases": ["1c"],
		"import": (() => import("./_55.mjs"))
	},
	{
		"id": "c",
		"name": "C",
		"import": (() => import("./_56.mjs"))
	},
	{
		"id": "c3",
		"name": "C3",
		"import": (() => import("./_57.mjs"))
	},
	{
		"id": "cadence",
		"name": "Cadence",
		"aliases": ["cdc"],
		"import": (() => import("./_58.mjs"))
	},
	{
		"id": "cairo",
		"name": "Cairo",
		"import": (() => import("./_60.mjs"))
	},
	{
		"id": "chapel",
		"name": "Chapel",
		"aliases": ["chpl"],
		"import": (() => import("./_61.mjs"))
	},
	{
		"id": "clarity",
		"name": "Clarity",
		"import": (() => import("./_62.mjs"))
	},
	{
		"id": "clojure",
		"name": "Clojure",
		"aliases": ["clj"],
		"import": (() => import("./_63.mjs"))
	},
	{
		"id": "cmake",
		"name": "CMake",
		"import": (() => import("./_64.mjs"))
	},
	{
		"id": "cobol",
		"name": "COBOL",
		"import": (() => import("./_65.mjs"))
	},
	{
		"id": "codeowners",
		"name": "CODEOWNERS",
		"import": (() => import("./_66.mjs"))
	},
	{
		"id": "codeql",
		"name": "CodeQL",
		"aliases": ["ql"],
		"import": (() => import("./_67.mjs"))
	},
	{
		"id": "coffee",
		"name": "CoffeeScript",
		"aliases": ["coffeescript"],
		"import": (() => import("./_68.mjs"))
	},
	{
		"id": "common-lisp",
		"name": "Common Lisp",
		"aliases": ["lisp"],
		"import": (() => import("./_69.mjs"))
	},
	{
		"id": "coq",
		"name": "Rocq",
		"import": (() => import("./_70.mjs"))
	},
	{
		"id": "cpp",
		"name": "C++",
		"aliases": ["c++"],
		"import": (() => import("./_73.mjs"))
	},
	{
		"id": "crystal",
		"name": "Crystal",
		"import": (() => import("./_75.mjs"))
	},
	{
		"id": "csharp",
		"name": "C#",
		"aliases": ["c#", "cs"],
		"import": (() => import("./_76.mjs"))
	},
	{
		"id": "css",
		"name": "CSS",
		"import": (() => import("./_24.mjs"))
	},
	{
		"id": "csv",
		"name": "CSV",
		"import": (() => import("./_77.mjs"))
	},
	{
		"id": "cue",
		"name": "CUE",
		"import": (() => import("./_78.mjs"))
	},
	{
		"id": "cypher",
		"name": "Cypher",
		"aliases": ["cql"],
		"import": (() => import("./_79.mjs"))
	},
	{
		"id": "d",
		"name": "D",
		"import": (() => import("./_80.mjs"))
	},
	{
		"id": "dart",
		"name": "Dart",
		"import": (() => import("./_81.mjs"))
	},
	{
		"id": "dax",
		"name": "DAX",
		"import": (() => import("./_82.mjs"))
	},
	{
		"id": "desktop",
		"name": "Desktop",
		"import": (() => import("./_83.mjs"))
	},
	{
		"id": "diff",
		"name": "Diff",
		"import": (() => import("./_84.mjs"))
	},
	{
		"id": "docker",
		"name": "Dockerfile",
		"aliases": ["dockerfile"],
		"import": (() => import("./_85.mjs"))
	},
	{
		"id": "dotenv",
		"name": "dotEnv",
		"import": (() => import("./_86.mjs"))
	},
	{
		"id": "dream-maker",
		"name": "Dream Maker",
		"import": (() => import("./_87.mjs"))
	},
	{
		"id": "edge",
		"name": "Edge",
		"import": (() => import("./_88.mjs"))
	},
	{
		"id": "elixir",
		"name": "Elixir",
		"import": (() => import("./_89.mjs"))
	},
	{
		"id": "elm",
		"name": "Elm",
		"import": (() => import("./_90.mjs"))
	},
	{
		"id": "emacs-lisp",
		"name": "Emacs Lisp",
		"aliases": ["elisp"],
		"import": (() => import("./_91.mjs"))
	},
	{
		"id": "erb",
		"name": "ERB",
		"import": (() => import("./_98.mjs"))
	},
	{
		"id": "erlang",
		"name": "Erlang",
		"aliases": ["erl"],
		"import": (() => import("./_100.mjs"))
	},
	{
		"id": "fennel",
		"name": "Fennel",
		"import": (() => import("./_101.mjs"))
	},
	{
		"id": "fish",
		"name": "Fish",
		"import": (() => import("./_102.mjs"))
	},
	{
		"id": "fluent",
		"name": "Fluent",
		"aliases": ["ftl"],
		"import": (() => import("./_103.mjs"))
	},
	{
		"id": "fortran-fixed-form",
		"name": "Fortran (Fixed Form)",
		"aliases": [
			"f",
			"for",
			"f77"
		],
		"import": (() => import("./_105.mjs"))
	},
	{
		"id": "fortran-free-form",
		"name": "Fortran (Free Form)",
		"aliases": [
			"f90",
			"f95",
			"f03",
			"f08",
			"f18"
		],
		"import": (() => import("./_104.mjs"))
	},
	{
		"id": "fsharp",
		"name": "F#",
		"aliases": ["f#", "fs"],
		"import": (() => import("./_106.mjs"))
	},
	{
		"id": "gdresource",
		"name": "GDResource",
		"aliases": ["tscn", "tres"],
		"import": (() => import("./_109.mjs"))
	},
	{
		"id": "gdscript",
		"name": "GDScript",
		"aliases": ["gd"],
		"import": (() => import("./_108.mjs"))
	},
	{
		"id": "gdshader",
		"name": "GDShader",
		"import": (() => import("./_107.mjs"))
	},
	{
		"id": "genie",
		"name": "Genie",
		"import": (() => import("./_110.mjs"))
	},
	{
		"id": "gherkin",
		"name": "Gherkin",
		"import": (() => import("./_111.mjs"))
	},
	{
		"id": "git-commit",
		"name": "Git Commit Message",
		"import": (() => import("./_112.mjs"))
	},
	{
		"id": "git-rebase",
		"name": "Git Rebase Message",
		"import": (() => import("./_113.mjs"))
	},
	{
		"id": "gleam",
		"name": "Gleam",
		"import": (() => import("./_114.mjs"))
	},
	{
		"id": "glimmer-js",
		"name": "Glimmer JS",
		"aliases": ["gjs"],
		"import": (() => import("./_115.mjs"))
	},
	{
		"id": "glimmer-ts",
		"name": "Glimmer TS",
		"aliases": ["gts"],
		"import": (() => import("./_116.mjs"))
	},
	{
		"id": "glsl",
		"name": "GLSL",
		"import": (() => import("./_72.mjs"))
	},
	{
		"id": "gn",
		"name": "GN",
		"import": (() => import("./_117.mjs"))
	},
	{
		"id": "gnuplot",
		"name": "Gnuplot",
		"import": (() => import("./_118.mjs"))
	},
	{
		"id": "go",
		"name": "Go",
		"import": (() => import("./_119.mjs"))
	},
	{
		"id": "graphql",
		"name": "GraphQL",
		"aliases": ["gql"],
		"import": (() => import("./_94.mjs"))
	},
	{
		"id": "groovy",
		"name": "Groovy",
		"import": (() => import("./_120.mjs"))
	},
	{
		"id": "hack",
		"name": "Hack",
		"import": (() => import("./_121.mjs"))
	},
	{
		"id": "haml",
		"name": "Ruby Haml",
		"import": (() => import("./_92.mjs"))
	},
	{
		"id": "handlebars",
		"name": "Handlebars",
		"aliases": ["hbs"],
		"import": (() => import("./_122.mjs"))
	},
	{
		"id": "haskell",
		"name": "Haskell",
		"aliases": ["hs"],
		"import": (() => import("./_123.mjs"))
	},
	{
		"id": "haxe",
		"name": "Haxe",
		"import": (() => import("./_124.mjs"))
	},
	{
		"id": "hcl",
		"name": "HashiCorp HCL",
		"import": (() => import("./_125.mjs"))
	},
	{
		"id": "hjson",
		"name": "Hjson",
		"import": (() => import("./_126.mjs"))
	},
	{
		"id": "hlsl",
		"name": "HLSL",
		"import": (() => import("./_127.mjs"))
	},
	{
		"id": "html",
		"name": "HTML",
		"import": (() => import("./_25.mjs"))
	},
	{
		"id": "html-derivative",
		"name": "HTML (Derivative)",
		"import": (() => import("./_51.mjs"))
	},
	{
		"id": "http",
		"name": "HTTP",
		"import": (() => import("./_128.mjs"))
	},
	{
		"id": "hurl",
		"name": "Hurl",
		"import": (() => import("./_129.mjs"))
	},
	{
		"id": "hxml",
		"name": "HXML",
		"import": (() => import("./_130.mjs"))
	},
	{
		"id": "hy",
		"name": "Hy",
		"import": (() => import("./_131.mjs"))
	},
	{
		"id": "imba",
		"name": "Imba",
		"import": (() => import("./_132.mjs"))
	},
	{
		"id": "ini",
		"name": "INI",
		"aliases": ["properties"],
		"import": (() => import("./_133.mjs"))
	},
	{
		"id": "java",
		"name": "Java",
		"import": (() => import("./_31.mjs"))
	},
	{
		"id": "javascript",
		"name": "JavaScript",
		"aliases": [
			"js",
			"cjs",
			"mjs"
		],
		"import": (() => import("./_23.mjs"))
	},
	{
		"id": "jinja",
		"name": "Jinja",
		"import": (() => import("./_134.mjs"))
	},
	{
		"id": "jison",
		"name": "Jison",
		"import": (() => import("./_135.mjs"))
	},
	{
		"id": "json",
		"name": "JSON",
		"import": (() => import("./_33.mjs"))
	},
	{
		"id": "json5",
		"name": "JSON5",
		"import": (() => import("./_136.mjs"))
	},
	{
		"id": "jsonc",
		"name": "JSON with Comments",
		"import": (() => import("./_137.mjs"))
	},
	{
		"id": "jsonl",
		"name": "JSON Lines",
		"import": (() => import("./_138.mjs"))
	},
	{
		"id": "jsonnet",
		"name": "Jsonnet",
		"import": (() => import("./_139.mjs"))
	},
	{
		"id": "jssm",
		"name": "JSSM",
		"aliases": ["fsl"],
		"import": (() => import("./_140.mjs"))
	},
	{
		"id": "jsx",
		"name": "JSX",
		"import": (() => import("./_93.mjs"))
	},
	{
		"id": "julia",
		"name": "Julia",
		"aliases": ["jl"],
		"import": (() => import("./_142.mjs"))
	},
	{
		"id": "just",
		"name": "Just",
		"aliases": ["justfile"],
		"import": (() => import("./_144.mjs"))
	},
	{
		"id": "kdl",
		"name": "KDL",
		"import": (() => import("./_145.mjs"))
	},
	{
		"id": "kotlin",
		"name": "Kotlin",
		"aliases": ["kt", "kts"],
		"import": (() => import("./_146.mjs"))
	},
	{
		"id": "kusto",
		"name": "Kusto",
		"aliases": ["kql"],
		"import": (() => import("./_147.mjs"))
	},
	{
		"id": "latex",
		"name": "LaTeX",
		"import": (() => import("./_149.mjs"))
	},
	{
		"id": "lean",
		"name": "Lean 4",
		"aliases": ["lean4"],
		"import": (() => import("./_150.mjs"))
	},
	{
		"id": "less",
		"name": "Less",
		"import": (() => import("./_151.mjs"))
	},
	{
		"id": "liquid",
		"name": "Liquid",
		"import": (() => import("./_152.mjs"))
	},
	{
		"id": "llvm",
		"name": "LLVM IR",
		"import": (() => import("./_153.mjs"))
	},
	{
		"id": "log",
		"name": "Log file",
		"import": (() => import("./_154.mjs"))
	},
	{
		"id": "logo",
		"name": "Logo",
		"import": (() => import("./_155.mjs"))
	},
	{
		"id": "lua",
		"name": "Lua",
		"import": (() => import("./_95.mjs"))
	},
	{
		"id": "luau",
		"name": "Luau",
		"import": (() => import("./_156.mjs"))
	},
	{
		"id": "make",
		"name": "Makefile",
		"aliases": ["makefile"],
		"import": (() => import("./_157.mjs"))
	},
	{
		"id": "markdown",
		"name": "Markdown",
		"aliases": ["md"],
		"import": (() => import("./_99.mjs"))
	},
	{
		"id": "marko",
		"name": "Marko",
		"import": (() => import("./_158.mjs"))
	},
	{
		"id": "matlab",
		"name": "MATLAB",
		"import": (() => import("./_159.mjs"))
	},
	{
		"id": "mdc",
		"name": "MDC",
		"import": (() => import("./_160.mjs"))
	},
	{
		"id": "mdx",
		"name": "MDX",
		"import": (() => import("./_161.mjs"))
	},
	{
		"id": "mermaid",
		"name": "Mermaid",
		"aliases": ["mmd"],
		"import": (() => import("./_162.mjs"))
	},
	{
		"id": "mipsasm",
		"name": "MIPS Assembly",
		"aliases": ["mips"],
		"import": (() => import("./_163.mjs"))
	},
	{
		"id": "mojo",
		"name": "Mojo",
		"import": (() => import("./_164.mjs"))
	},
	{
		"id": "moonbit",
		"name": "MoonBit",
		"aliases": ["mbt", "mbti"],
		"import": (() => import("./_165.mjs"))
	},
	{
		"id": "move",
		"name": "Move",
		"import": (() => import("./_166.mjs"))
	},
	{
		"id": "narrat",
		"name": "Narrat Language",
		"aliases": ["nar"],
		"import": (() => import("./_167.mjs"))
	},
	{
		"id": "nextflow",
		"name": "Nextflow",
		"aliases": ["nf"],
		"import": (() => import("./_169.mjs"))
	},
	{
		"id": "nextflow-groovy",
		"name": "Nextflow Groovy",
		"import": (() => import("./_168.mjs"))
	},
	{
		"id": "nginx",
		"name": "Nginx",
		"import": (() => import("./_170.mjs"))
	},
	{
		"id": "nim",
		"name": "Nim",
		"import": (() => import("./_171.mjs"))
	},
	{
		"id": "nix",
		"name": "Nix",
		"import": (() => import("./_172.mjs"))
	},
	{
		"id": "nsis",
		"name": "NSIS",
		"import": (() => import("./_173.mjs"))
	},
	{
		"id": "nushell",
		"name": "nushell",
		"aliases": ["nu"],
		"import": (() => import("./_174.mjs"))
	},
	{
		"id": "objective-c",
		"name": "Objective-C",
		"aliases": ["objc"],
		"import": (() => import("./_175.mjs"))
	},
	{
		"id": "objective-cpp",
		"name": "Objective-C++",
		"import": (() => import("./_176.mjs"))
	},
	{
		"id": "ocaml",
		"name": "OCaml",
		"import": (() => import("./_177.mjs"))
	},
	{
		"id": "odin",
		"name": "Odin",
		"import": (() => import("./_178.mjs"))
	},
	{
		"id": "openscad",
		"name": "OpenSCAD",
		"aliases": ["scad"],
		"import": (() => import("./_179.mjs"))
	},
	{
		"id": "org",
		"name": "Org Markup",
		"import": (() => import("./_187.mjs"))
	},
	{
		"id": "pascal",
		"name": "Pascal",
		"import": (() => import("./_188.mjs"))
	},
	{
		"id": "perl",
		"name": "Perl",
		"import": (() => import("./_143.mjs"))
	},
	{
		"id": "php",
		"name": "PHP",
		"import": (() => import("./_180.mjs"))
	},
	{
		"id": "pkl",
		"name": "Pkl",
		"import": (() => import("./_189.mjs"))
	},
	{
		"id": "plsql",
		"name": "PL/SQL",
		"import": (() => import("./_190.mjs"))
	},
	{
		"id": "po",
		"name": "Gettext PO",
		"aliases": ["pot", "potx"],
		"import": (() => import("./_191.mjs"))
	},
	{
		"id": "polar",
		"name": "Polar",
		"import": (() => import("./_192.mjs"))
	},
	{
		"id": "postcss",
		"name": "PostCSS",
		"import": (() => import("./_40.mjs"))
	},
	{
		"id": "powerquery",
		"name": "PowerQuery",
		"import": (() => import("./_193.mjs"))
	},
	{
		"id": "powershell",
		"name": "PowerShell",
		"aliases": [
			"ps",
			"ps1",
			"pwsh"
		],
		"import": (() => import("./_194.mjs"))
	},
	{
		"id": "prisma",
		"name": "Prisma",
		"import": (() => import("./_195.mjs"))
	},
	{
		"id": "prolog",
		"name": "Prolog",
		"import": (() => import("./_196.mjs"))
	},
	{
		"id": "proto",
		"name": "Protocol Buffer 3",
		"aliases": ["protobuf"],
		"import": (() => import("./_197.mjs"))
	},
	{
		"id": "pug",
		"name": "Pug",
		"aliases": ["jade"],
		"import": (() => import("./_198.mjs"))
	},
	{
		"id": "puppet",
		"name": "Puppet",
		"import": (() => import("./_199.mjs"))
	},
	{
		"id": "purescript",
		"name": "PureScript",
		"import": (() => import("./_200.mjs"))
	},
	{
		"id": "python",
		"name": "Python",
		"aliases": ["py"],
		"import": (() => import("./_59.mjs"))
	},
	{
		"id": "qml",
		"name": "QML",
		"import": (() => import("./_201.mjs"))
	},
	{
		"id": "qmldir",
		"name": "QML Directory",
		"import": (() => import("./_202.mjs"))
	},
	{
		"id": "qss",
		"name": "Qt Style Sheets",
		"import": (() => import("./_203.mjs"))
	},
	{
		"id": "r",
		"name": "R",
		"import": (() => import("./_141.mjs"))
	},
	{
		"id": "racket",
		"name": "Racket",
		"import": (() => import("./_204.mjs"))
	},
	{
		"id": "raku",
		"name": "Raku",
		"aliases": ["perl6"],
		"import": (() => import("./_182.mjs"))
	},
	{
		"id": "razor",
		"name": "ASP.NET Razor",
		"import": (() => import("./_205.mjs"))
	},
	{
		"id": "rbs",
		"name": "RBS",
		"aliases": ["ruby-signature"],
		"import": (() => import("./_206.mjs"))
	},
	{
		"id": "reg",
		"name": "Windows Registry Script",
		"import": (() => import("./_207.mjs"))
	},
	{
		"id": "regexp",
		"name": "RegExp",
		"aliases": ["regex"],
		"import": (() => import("./_71.mjs"))
	},
	{
		"id": "rel",
		"name": "Rel",
		"import": (() => import("./_208.mjs"))
	},
	{
		"id": "riscv",
		"name": "RISC-V",
		"import": (() => import("./_209.mjs"))
	},
	{
		"id": "ron",
		"name": "RON",
		"import": (() => import("./_210.mjs"))
	},
	{
		"id": "rosmsg",
		"name": "ROS Interface",
		"import": (() => import("./_211.mjs"))
	},
	{
		"id": "rst",
		"name": "reStructuredText",
		"import": (() => import("./_212.mjs"))
	},
	{
		"id": "ruby",
		"name": "Ruby",
		"aliases": ["rb"],
		"import": (() => import("./_97.mjs"))
	},
	{
		"id": "rust",
		"name": "Rust",
		"aliases": ["rs"],
		"import": (() => import("./_183.mjs"))
	},
	{
		"id": "sas",
		"name": "SAS",
		"import": (() => import("./_213.mjs"))
	},
	{
		"id": "sass",
		"name": "Sass",
		"import": (() => import("./_214.mjs"))
	},
	{
		"id": "scala",
		"name": "Scala",
		"import": (() => import("./_184.mjs"))
	},
	{
		"id": "scheme",
		"name": "Scheme",
		"import": (() => import("./_215.mjs"))
	},
	{
		"id": "scss",
		"name": "SCSS",
		"import": (() => import("./_27.mjs"))
	},
	{
		"id": "sdbl",
		"name": "1C (Query)",
		"aliases": ["1c-query"],
		"import": (() => import("./_54.mjs"))
	},
	{
		"id": "shaderlab",
		"name": "ShaderLab",
		"aliases": ["shader"],
		"import": (() => import("./_216.mjs"))
	},
	{
		"id": "shellscript",
		"name": "Shell",
		"aliases": [
			"bash",
			"sh",
			"shell",
			"zsh"
		],
		"import": (() => import("./_74.mjs"))
	},
	{
		"id": "shellsession",
		"name": "Shell Session",
		"aliases": ["console"],
		"import": (() => import("./_217.mjs"))
	},
	{
		"id": "smalltalk",
		"name": "GNU Smalltalk",
		"import": (() => import("./_218.mjs"))
	},
	{
		"id": "smithy",
		"name": "Smithy",
		"import": (() => import("./_219.mjs"))
	},
	{
		"id": "solidity",
		"name": "Solidity",
		"import": (() => import("./_220.mjs"))
	},
	{
		"id": "soy",
		"name": "Closure Templates",
		"aliases": ["closure-templates"],
		"import": (() => import("./_221.mjs"))
	},
	{
		"id": "sparql",
		"name": "SPARQL",
		"import": (() => import("./_223.mjs"))
	},
	{
		"id": "splunk",
		"name": "Splunk Query Language",
		"aliases": ["spl"],
		"import": (() => import("./_224.mjs"))
	},
	{
		"id": "sql",
		"name": "SQL",
		"import": (() => import("./_52.mjs"))
	},
	{
		"id": "ssh-config",
		"name": "SSH Config",
		"import": (() => import("./_225.mjs"))
	},
	{
		"id": "stata",
		"name": "Stata",
		"import": (() => import("./_226.mjs"))
	},
	{
		"id": "stylus",
		"name": "Stylus",
		"aliases": ["styl"],
		"import": (() => import("./_227.mjs"))
	},
	{
		"id": "surrealql",
		"name": "SurrealQL",
		"aliases": ["surql"],
		"import": (() => import("./_228.mjs"))
	},
	{
		"id": "svelte",
		"name": "Svelte",
		"import": (() => import("./_229.mjs"))
	},
	{
		"id": "swift",
		"name": "Swift",
		"import": (() => import("./_230.mjs"))
	},
	{
		"id": "system-verilog",
		"name": "SystemVerilog",
		"import": (() => import("./_231.mjs"))
	},
	{
		"id": "systemd",
		"name": "Systemd Units",
		"import": (() => import("./_232.mjs"))
	},
	{
		"id": "talonscript",
		"name": "TalonScript",
		"aliases": ["talon"],
		"import": (() => import("./_233.mjs"))
	},
	{
		"id": "tasl",
		"name": "Tasl",
		"import": (() => import("./_234.mjs"))
	},
	{
		"id": "tcl",
		"name": "Tcl",
		"import": (() => import("./_235.mjs"))
	},
	{
		"id": "templ",
		"name": "Templ",
		"import": (() => import("./_236.mjs"))
	},
	{
		"id": "terraform",
		"name": "Terraform",
		"aliases": ["tf", "tfvars"],
		"import": (() => import("./_237.mjs"))
	},
	{
		"id": "tex",
		"name": "TeX",
		"import": (() => import("./_148.mjs"))
	},
	{
		"id": "toml",
		"name": "TOML",
		"import": (() => import("./_238.mjs"))
	},
	{
		"id": "ts-tags",
		"name": "TypeScript with Tags",
		"aliases": ["lit"],
		"import": (() => import("./_239.mjs"))
	},
	{
		"id": "tsv",
		"name": "TSV",
		"import": (() => import("./_240.mjs"))
	},
	{
		"id": "tsx",
		"name": "TSX",
		"import": (() => import("./_41.mjs"))
	},
	{
		"id": "turtle",
		"name": "Turtle",
		"import": (() => import("./_222.mjs"))
	},
	{
		"id": "twig",
		"name": "Twig",
		"import": (() => import("./_241.mjs"))
	},
	{
		"id": "typescript",
		"name": "TypeScript",
		"aliases": [
			"ts",
			"cts",
			"mts"
		],
		"import": (() => import("./_39.mjs"))
	},
	{
		"id": "typespec",
		"name": "TypeSpec",
		"aliases": ["tsp"],
		"import": (() => import("./_242.mjs"))
	},
	{
		"id": "typst",
		"name": "Typst",
		"aliases": ["typ"],
		"import": (() => import("./_244.mjs"))
	},
	{
		"id": "v",
		"name": "V",
		"import": (() => import("./_245.mjs"))
	},
	{
		"id": "vala",
		"name": "Vala",
		"import": (() => import("./_246.mjs"))
	},
	{
		"id": "vb",
		"name": "Visual Basic",
		"import": (() => import("./_181.mjs"))
	},
	{
		"id": "verilog",
		"name": "Verilog",
		"import": (() => import("./_243.mjs"))
	},
	{
		"id": "vhdl",
		"name": "VHDL",
		"import": (() => import("./_247.mjs"))
	},
	{
		"id": "viml",
		"name": "Vim Script",
		"aliases": ["vim", "vimscript"],
		"import": (() => import("./_248.mjs"))
	},
	{
		"id": "vue",
		"name": "Vue",
		"import": (() => import("./_251.mjs"))
	},
	{
		"id": "vue-html",
		"name": "Vue HTML",
		"import": (() => import("./_249.mjs"))
	},
	{
		"id": "vue-vine",
		"name": "Vue Vine",
		"import": (() => import("./_250.mjs"))
	},
	{
		"id": "vyper",
		"name": "Vyper",
		"aliases": ["vy"],
		"import": (() => import("./_252.mjs"))
	},
	{
		"id": "wasm",
		"name": "WebAssembly",
		"import": (() => import("./_253.mjs"))
	},
	{
		"id": "wenyan",
		"name": "Wenyan",
		"aliases": ["文言"],
		"import": (() => import("./_254.mjs"))
	},
	{
		"id": "wgsl",
		"name": "WGSL",
		"import": (() => import("./_255.mjs"))
	},
	{
		"id": "wikitext",
		"name": "Wikitext",
		"aliases": ["mediawiki", "wiki"],
		"import": (() => import("./_256.mjs"))
	},
	{
		"id": "wit",
		"name": "WebAssembly Interface Types",
		"import": (() => import("./_257.mjs"))
	},
	{
		"id": "wolfram",
		"name": "Wolfram",
		"aliases": ["wl"],
		"import": (() => import("./_258.mjs"))
	},
	{
		"id": "xml",
		"name": "XML",
		"import": (() => import("./_32.mjs"))
	},
	{
		"id": "xsl",
		"name": "XSL",
		"import": (() => import("./_186.mjs"))
	},
	{
		"id": "yaml",
		"name": "YAML",
		"aliases": ["yml"],
		"import": (() => import("./_96.mjs"))
	},
	{
		"id": "zenscript",
		"name": "ZenScript",
		"import": (() => import("./_259.mjs"))
	},
	{
		"id": "zig",
		"name": "Zig",
		"import": (() => import("./_185.mjs"))
	}
];
var bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
var bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
var bundledLanguages = {
	...bundledLanguagesBase,
	...bundledLanguagesAlias
};
var bundledThemes = Object.fromEntries([
	{
		"id": "andromeeda",
		"displayName": "Andromeeda",
		"type": "dark",
		"import": (() => import("./_260.mjs"))
	},
	{
		"id": "aurora-x",
		"displayName": "Aurora X",
		"type": "dark",
		"import": (() => import("./_261.mjs"))
	},
	{
		"id": "ayu-dark",
		"displayName": "Ayu Dark",
		"type": "dark",
		"import": (() => import("./_262.mjs"))
	},
	{
		"id": "ayu-light",
		"displayName": "Ayu Light",
		"type": "light",
		"import": (() => import("./_263.mjs"))
	},
	{
		"id": "ayu-mirage",
		"displayName": "Ayu Mirage",
		"type": "dark",
		"import": (() => import("./_264.mjs"))
	},
	{
		"id": "catppuccin-frappe",
		"displayName": "Catppuccin Frappé",
		"type": "dark",
		"import": (() => import("./_265.mjs"))
	},
	{
		"id": "catppuccin-latte",
		"displayName": "Catppuccin Latte",
		"type": "light",
		"import": (() => import("./_266.mjs"))
	},
	{
		"id": "catppuccin-macchiato",
		"displayName": "Catppuccin Macchiato",
		"type": "dark",
		"import": (() => import("./_267.mjs"))
	},
	{
		"id": "catppuccin-mocha",
		"displayName": "Catppuccin Mocha",
		"type": "dark",
		"import": (() => import("./_268.mjs"))
	},
	{
		"id": "dark-plus",
		"displayName": "Dark Plus",
		"type": "dark",
		"import": (() => import("./_269.mjs"))
	},
	{
		"id": "dracula",
		"displayName": "Dracula Theme",
		"type": "dark",
		"import": (() => import("./_271.mjs"))
	},
	{
		"id": "dracula-soft",
		"displayName": "Dracula Theme Soft",
		"type": "dark",
		"import": (() => import("./_270.mjs"))
	},
	{
		"id": "everforest-dark",
		"displayName": "Everforest Dark",
		"type": "dark",
		"import": (() => import("./_272.mjs"))
	},
	{
		"id": "everforest-light",
		"displayName": "Everforest Light",
		"type": "light",
		"import": (() => import("./_273.mjs"))
	},
	{
		"id": "github-dark",
		"displayName": "GitHub Dark",
		"type": "dark",
		"import": (() => import("./_277.mjs"))
	},
	{
		"id": "github-dark-default",
		"displayName": "GitHub Dark Default",
		"type": "dark",
		"import": (() => import("./_274.mjs"))
	},
	{
		"id": "github-dark-dimmed",
		"displayName": "GitHub Dark Dimmed",
		"type": "dark",
		"import": (() => import("./_275.mjs"))
	},
	{
		"id": "github-dark-high-contrast",
		"displayName": "GitHub Dark High Contrast",
		"type": "dark",
		"import": (() => import("./_276.mjs"))
	},
	{
		"id": "github-light",
		"displayName": "GitHub Light",
		"type": "light",
		"import": (() => import("./_280.mjs"))
	},
	{
		"id": "github-light-default",
		"displayName": "GitHub Light Default",
		"type": "light",
		"import": (() => import("./_278.mjs"))
	},
	{
		"id": "github-light-high-contrast",
		"displayName": "GitHub Light High Contrast",
		"type": "light",
		"import": (() => import("./_279.mjs"))
	},
	{
		"id": "gruvbox-dark-hard",
		"displayName": "Gruvbox Dark Hard",
		"type": "dark",
		"import": (() => import("./_281.mjs"))
	},
	{
		"id": "gruvbox-dark-medium",
		"displayName": "Gruvbox Dark Medium",
		"type": "dark",
		"import": (() => import("./_282.mjs"))
	},
	{
		"id": "gruvbox-dark-soft",
		"displayName": "Gruvbox Dark Soft",
		"type": "dark",
		"import": (() => import("./_283.mjs"))
	},
	{
		"id": "gruvbox-light-hard",
		"displayName": "Gruvbox Light Hard",
		"type": "light",
		"import": (() => import("./_284.mjs"))
	},
	{
		"id": "gruvbox-light-medium",
		"displayName": "Gruvbox Light Medium",
		"type": "light",
		"import": (() => import("./_285.mjs"))
	},
	{
		"id": "gruvbox-light-soft",
		"displayName": "Gruvbox Light Soft",
		"type": "light",
		"import": (() => import("./_286.mjs"))
	},
	{
		"id": "horizon",
		"displayName": "Horizon",
		"type": "dark",
		"import": (() => import("./_288.mjs"))
	},
	{
		"id": "horizon-bright",
		"displayName": "Horizon Bright",
		"type": "light",
		"import": (() => import("./_287.mjs"))
	},
	{
		"id": "houston",
		"displayName": "Houston",
		"type": "dark",
		"import": (() => import("./_289.mjs"))
	},
	{
		"id": "kanagawa-dragon",
		"displayName": "Kanagawa Dragon",
		"type": "dark",
		"import": (() => import("./_290.mjs"))
	},
	{
		"id": "kanagawa-lotus",
		"displayName": "Kanagawa Lotus",
		"type": "light",
		"import": (() => import("./_291.mjs"))
	},
	{
		"id": "kanagawa-wave",
		"displayName": "Kanagawa Wave",
		"type": "dark",
		"import": (() => import("./_292.mjs"))
	},
	{
		"id": "laserwave",
		"displayName": "LaserWave",
		"type": "dark",
		"import": (() => import("./_293.mjs"))
	},
	{
		"id": "light-plus",
		"displayName": "Light Plus",
		"type": "light",
		"import": (() => import("./_294.mjs"))
	},
	{
		"id": "material-theme",
		"displayName": "Material Theme",
		"type": "dark",
		"import": (() => import("./_299.mjs"))
	},
	{
		"id": "material-theme-darker",
		"displayName": "Material Theme Darker",
		"type": "dark",
		"import": (() => import("./_295.mjs"))
	},
	{
		"id": "material-theme-lighter",
		"displayName": "Material Theme Lighter",
		"type": "light",
		"import": (() => import("./_296.mjs"))
	},
	{
		"id": "material-theme-ocean",
		"displayName": "Material Theme Ocean",
		"type": "dark",
		"import": (() => import("./_297.mjs"))
	},
	{
		"id": "material-theme-palenight",
		"displayName": "Material Theme Palenight",
		"type": "dark",
		"import": (() => import("./_298.mjs"))
	},
	{
		"id": "min-dark",
		"displayName": "Min Dark",
		"type": "dark",
		"import": (() => import("./_300.mjs"))
	},
	{
		"id": "min-light",
		"displayName": "Min Light",
		"type": "light",
		"import": (() => import("./_301.mjs"))
	},
	{
		"id": "monokai",
		"displayName": "Monokai",
		"type": "dark",
		"import": (() => import("./_302.mjs"))
	},
	{
		"id": "night-owl",
		"displayName": "Night Owl",
		"type": "dark",
		"import": (() => import("./_304.mjs"))
	},
	{
		"id": "night-owl-light",
		"displayName": "Night Owl Light",
		"type": "light",
		"import": (() => import("./_303.mjs"))
	},
	{
		"id": "nord",
		"displayName": "Nord",
		"type": "dark",
		"import": (() => import("./_305.mjs"))
	},
	{
		"id": "one-dark-pro",
		"displayName": "One Dark Pro",
		"type": "dark",
		"import": (() => import("./_306.mjs"))
	},
	{
		"id": "one-light",
		"displayName": "One Light",
		"type": "light",
		"import": (() => import("./_307.mjs"))
	},
	{
		"id": "plastic",
		"displayName": "Plastic",
		"type": "dark",
		"import": (() => import("./_308.mjs"))
	},
	{
		"id": "poimandres",
		"displayName": "Poimandres",
		"type": "dark",
		"import": (() => import("./_309.mjs"))
	},
	{
		"id": "red",
		"displayName": "Red",
		"type": "dark",
		"import": (() => import("./_310.mjs"))
	},
	{
		"id": "rose-pine",
		"displayName": "Rosé Pine",
		"type": "dark",
		"import": (() => import("./_313.mjs"))
	},
	{
		"id": "rose-pine-dawn",
		"displayName": "Rosé Pine Dawn",
		"type": "light",
		"import": (() => import("./_311.mjs"))
	},
	{
		"id": "rose-pine-moon",
		"displayName": "Rosé Pine Moon",
		"type": "dark",
		"import": (() => import("./_312.mjs"))
	},
	{
		"id": "slack-dark",
		"displayName": "Slack Dark",
		"type": "dark",
		"import": (() => import("./_314.mjs"))
	},
	{
		"id": "slack-ochin",
		"displayName": "Slack Ochin",
		"type": "light",
		"import": (() => import("./_315.mjs"))
	},
	{
		"id": "snazzy-light",
		"displayName": "Snazzy Light",
		"type": "light",
		"import": (() => import("./_316.mjs"))
	},
	{
		"id": "solarized-dark",
		"displayName": "Solarized Dark",
		"type": "dark",
		"import": (() => import("./_317.mjs"))
	},
	{
		"id": "solarized-light",
		"displayName": "Solarized Light",
		"type": "light",
		"import": (() => import("./_318.mjs"))
	},
	{
		"id": "synthwave-84",
		"displayName": "Synthwave '84",
		"type": "dark",
		"import": (() => import("./_319.mjs"))
	},
	{
		"id": "tokyo-night",
		"displayName": "Tokyo Night",
		"type": "dark",
		"import": (() => import("./_320.mjs"))
	},
	{
		"id": "vesper",
		"displayName": "Vesper",
		"type": "dark",
		"import": (() => import("./_321.mjs"))
	},
	{
		"id": "vitesse-black",
		"displayName": "Vitesse Black",
		"type": "dark",
		"import": (() => import("./_322.mjs"))
	},
	{
		"id": "vitesse-dark",
		"displayName": "Vitesse Dark",
		"type": "dark",
		"import": (() => import("./_323.mjs"))
	},
	{
		"id": "vitesse-light",
		"displayName": "Vitesse Light",
		"type": "light",
		"import": (() => import("./_324.mjs"))
	}
].map((i) => [i.id, i.import]));
//#endregion
//#region node_modules/shiki/dist/engine-oniguruma-XLVxwJtN.mjs
var engine_oniguruma_exports = /* @__PURE__ */ __exportAll({});
__reExport(engine_oniguruma_exports, dist_exports);
//#endregion
//#region node_modules/shiki/dist/bundle-full.mjs
/**
* Initiate a highlighter instance and load the specified languages and themes.
* Later it can be used synchronously to highlight code.
*
* Importing this function will bundle all languages and themes.
* @see https://shiki.style/guide/bundles#shiki-bundle-full
*
* For granular control over the bundle, check:
* @see https://shiki.style/guide/bundles#fine-grained-bundle
*/
var createHighlighter = /* @__PURE__ */ createBundledHighlighter({
	langs: bundledLanguages,
	themes: bundledThemes,
	engine: () => (0, engine_oniguruma_exports.createOnigurumaEngine)(import("./_365.mjs"))
});
var { codeToHtml, codeToHast, codeToTokens, codeToTokensBase, codeToTokensWithThemes, getSingletonHighlighter, getLastGrammarState } = /* @__PURE__ */ createSingletonShorthands(createHighlighter, { guessEmbeddedLanguages });
//#endregion
//#region node_modules/@streamdown/code/dist/index.js
var O = createJavaScriptRegexEngine({ forgiving: true });
var b = Object.fromEntries(bundledLanguagesInfo.flatMap((n) => {
	var e;
	return ((e = n.aliases) != null ? e : []).map((t) => [t, n.id]);
}));
var T = new Set(Object.keys(bundledLanguages));
var C = (n) => {
	let t = n.trim().toLowerCase();
	return b[t] || (T.has(t), t);
};
var L = /* @__PURE__ */ new Map();
var P = 3e5;
var M = 5e3;
var _ = 64;
var o = /* @__PURE__ */ new Map();
var B = 0;
var $ = (n, e) => {
	let t = e.tokens.length + Math.ceil(n.length / _);
	for (let g of e.tokens) t += g.length;
	return t;
};
var I = (n) => {
	let e = o.get(n);
	return e && (o.delete(n), o.set(n, e)), e == null ? void 0 : e.result;
};
var R = (n) => {
	let e = o.get(n);
	e && (o.delete(n), B -= e.cost);
};
var G = (n, e) => {
	R(n);
	let t = $(n, e);
	for (o.set(n, {
		cost: t,
		result: e
	}), B += t; (B > P || o.size > M) && o.size > 1;) R(o.keys().next().value);
};
var S = /* @__PURE__ */ new Map();
var z = 4;
var N = (n, e) => {
	let t = S.get(n);
	if (!t) return;
	let g = t.findIndex((r) => e.startsWith(r.prefix));
	return g === -1 ? void 0 : t.splice(g, 1)[0];
};
var H = (n, e) => {
	let t = S.get(n);
	t || (t = [], S.set(n, t)), t.unshift(e), t.length > z && t.pop();
};
var x = (n, e) => {
	if (e !== 0) for (let t of n) for (let g of t) g.offset += e;
};
var j = (n, e, t, g, r) => {
	let s = N(t, e), l = s ? s.prefix : "", u = s ? s.rows : [], a = s == null ? void 0 : s.grammarState, i = e.lastIndexOf(`
`) + 1;
	if (i > l.length) {
		let c = n.codeToTokens(e.slice(l.length, i), {
			lang: g,
			themes: r,
			grammarState: a
		}), h = c.tokens;
		h.pop(), x(h, l.length), u = u.concat(h), a = c.grammarState, l = e.slice(0, i), H(t, {
			grammarState: a,
			prefix: l,
			rows: u
		});
	} else s && H(t, s);
	let d = n.codeToTokens(e.slice(i), {
		lang: g,
		themes: r,
		grammarState: a
	});
	return x(d.tokens, i), {
		...d,
		tokens: u.concat(d.tokens)
	};
};
var f = (n) => {
	var e;
	return typeof n == "string" ? n : (e = n.name) != null ? e : "custom";
};
var w = (n, e) => `${n}-${f(e[0])}-${f(e[1])}`;
var X = (n, e, t) => `${e}:${t[0]}:${t[1]}
${n}`;
var D = (n, e) => {
	let t = w(n, e);
	if (L.has(t)) return L.get(t);
	let g = createHighlighter({
		themes: e,
		langs: [n],
		engine: O
	});
	return L.set(t, g), g;
};
function U(n = {}) {
	var t;
	let e = (t = n.themes) != null ? t : ["github-light", "github-dark"];
	return {
		name: "shiki",
		type: "code-highlighter",
		supportsLanguage(g) {
			let r = C(g);
			return T.has(r);
		},
		getSupportedLanguages() {
			return Array.from(T);
		},
		getThemes() {
			return e;
		},
		highlight({ code: g, language: r, themes: s, isIncomplete: l = false }, u) {
			let a = C(r), i = [f(s[0]), f(s[1])], d = T.has(a) ? a : "text", c = X(g, d, i);
			return I(c) || (D(d, s).then((m) => {
				let k = m.getLoadedLanguages().includes(a) ? a : "text", p = I(c);
				p || (p = j(m, g, `${w(d, s)}:${k}`, k, {
					light: i[0],
					dark: i[1]
				}), l || G(c, p)), u?.(p);
			}).catch((m) => {
				console.error("[Streamdown Code] Failed to highlight code:", m);
			}), null);
		}
	};
}
var W = U();
//#endregion
export { W as t };
