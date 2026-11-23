import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, n as DefaultChatTransport, r as require_jsx_runtime, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as ic } from "../_libs/streamdown+[...].mjs";
import { n as cn, t as Button } from "./button--6q1ISSg.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { A as CalendarDays, E as Clock, R as ArrowUpRight, T as CornerDownLeft, V as ArrowDown, _ as Mail, d as Send, g as MapPin, k as CircleCheck, l as Square, m as MessageCircle, n as X, o as Trash2, p as Phone, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as trackWhatsAppClick, r as trackAppointmentSubmit } from "./analytics-CNY1eqex.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as useStickToBottomContext, t as StickToBottom } from "../_libs/use-stick-to-bottom.mjs";
import { t as v } from "../_libs/@streamdown/cjk+[...].mjs";
import { t as W } from "../_libs/shiki+streamdown__code.mjs";
import { t as h } from "../_libs/@streamdown/math+[...].mjs";
import { t as f } from "../_libs/@streamdown/mermaid+[...].mjs";
import { t as nanoid } from "../_libs/nanoid.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-E_vVDNhF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var RESULT = "lovable-preview-auth:result";
function readBrokerReply(data, requestId) {
	if (typeof data !== "object" || data === null) return null;
	if (!("type" in data) || data.type !== RESULT) return null;
	if (!("requestId" in data) || data.requestId !== requestId) return null;
	return {
		ok: "ok" in data && Boolean(data.ok),
		value: "value" in data && typeof data.value === "string" ? data.value : null
	};
}
/**
* On a Lovable preview surface, broker the auth session to the editor over
* postMessage so the project's preview surfaces share one login; else localStorage.
*/
function brokeredPreviewStorage() {
	if (typeof window === "undefined") return void 0;
	const host = location.hostname;
	const projectId = [
		"lovableproject.com",
		"lovableproject-dev.com",
		"lovable.app",
		"gpt-eng.com",
		"gptengineer.run"
	].some((z) => host === z || host.endsWith("." + z)) ? (/* @__PURE__ */ new RegExp("^(?:id-preview(?:-[a-z0-9]+)?|project)--([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:-dev)?(?=\\.|$)", "i")).exec(host)?.[1] ?? (/* @__PURE__ */ new RegExp("^live--([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:-thr_[a-z0-9]+)?(?=\\.|$)", "i")).exec(host)?.[1] ?? (/* @__PURE__ */ new RegExp("^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?=[.-])", "i")).exec(host)?.[1] : void 0;
	const parentWindow = window.parent;
	if (!projectId || !(parentWindow !== null && parentWindow !== window)) return localStorage;
	const dev = host.endsWith(".lovableproject-dev.com") || host.endsWith(".gpt-eng.com");
	const EDITOR = dev ? /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$|^http:\/\/localhost:3000$/ : /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$/;
	const ancestor = location.ancestorOrigins?.[0] ?? (document.referrer ? new URL(document.referrer).origin : "");
	const editorOrigins = ancestor && EDITOR.test(ancestor) ? [ancestor] : dev ? ["https://lovable.dev", "http://localhost:3000"] : ["https://lovable.dev"];
	const TIMEOUT = 2e3;
	const newId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
	const request = (type, key, value) => new Promise((resolve) => {
		const requestId = newId();
		let done = false;
		const finish = (reply) => {
			if (done) return;
			done = true;
			clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			resolve(reply);
		};
		const onMessage = (e) => {
			if (!editorOrigins.includes(e.origin)) return;
			const reply = readBrokerReply(e.data, requestId);
			if (reply) finish(reply);
		};
		window.addEventListener("message", onMessage);
		const timer = setTimeout(() => {
			finish(null);
		}, TIMEOUT);
		const msg = {
			type,
			requestId,
			projectId,
			key
		};
		if (value !== void 0) msg.value = value;
		for (const origin of editorOrigins) window.parent.postMessage(msg, origin);
	});
	let firstGet = true;
	const RETRY_DELAY = 250;
	const readLocal = (key) => {
		try {
			return localStorage.getItem(key);
		} catch {
			return;
		}
	};
	return {
		getItem: async (key) => {
			const local = readLocal(key);
			let res = await request("lovable-preview-auth:get", key, local ?? void 0);
			if (!res && firstGet) {
				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
				res = await request("lovable-preview-auth:get", key, local ?? void 0);
			}
			firstGet = false;
			if (res?.ok && res.value !== null) {
				if (res.value === "") {
					if (local !== void 0 && readLocal(key) === local) localStorage.removeItem(key);
					return null;
				}
				if (local === null && readLocal(key) === null) try {
					localStorage.setItem(key, res.value);
				} catch {}
				return res.value;
			}
			return localStorage.getItem(key);
		},
		setItem: (key, value) => {
			localStorage.setItem(key, value);
			return request("lovable-preview-auth:set", key, value).then((res) => {
				if (res?.ok && res.value !== null && localStorage.getItem(key) === value) if (res.value === "") localStorage.removeItem(key);
				else localStorage.setItem(key, res.value);
			});
		},
		removeItem: (key) => {
			const local = readLocal(key);
			localStorage.removeItem(key);
			return request("lovable-preview-auth:remove", key, local ?? void 0).then(() => {});
		}
	};
}
var supabase = createClient("https://tvufheemrewhumokljlg.supabase.co", "sb_publishable_QGX4ls8PhozdXou1AF8nkA_T07qFDD7", { auth: {
	storage: brokeredPreviewStorage(),
	persistSession: true,
	autoRefreshToken: true
} });
var Conversation = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickToBottom, {
	className: cn("relative flex-1 overflow-y-hidden", className),
	initial: "smooth",
	resize: "smooth",
	role: "log",
	...props
});
var ConversationContent = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickToBottom.Content, {
	className: cn("flex flex-col gap-8 p-4", className),
	...props
});
var ConversationScrollButton = ({ className, ...props }) => {
	const { isAtBottom, scrollToBottom } = useStickToBottomContext();
	const handleScrollToBottom = (0, import_react.useCallback)(() => {
		scrollToBottom();
	}, [scrollToBottom]);
	return !isAtBottom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		className: cn("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full dark:bg-background dark:hover:bg-muted", className),
		onClick: handleScrollToBottom,
		size: "icon",
		type: "button",
		variant: "outline",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
	});
};
var Message = ({ className, from, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("group flex w-full max-w-[95%] flex-col gap-2", from === "user" ? "is-user ml-auto justify-end" : "is-assistant", className),
	...props
});
var MessageContent = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("is-user:dark flex w-fit min-w-0 max-w-full flex-col gap-2 overflow-hidden text-sm", "group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-secondary-foreground", "group-[.is-assistant]:text-foreground", className),
	...props,
	children
});
(0, import_react.createContext)(null);
var streamdownPlugins = {
	cjk: v,
	code: W,
	math: h,
	mermaid: f
};
var MessageResponse = (0, import_react.memo)(({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ic, {
	className: cn("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className),
	plugins: streamdownPlugins,
	...props
}), (prevProps, nextProps) => prevProps.children === nextProps.children && nextProps.isAnimating === prevProps.isAnimating);
MessageResponse.displayName = "MessageResponse";
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn("group/input-group border-input dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-md border outline-hidden transition-[color,box-shadow]", "h-9 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-1", "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", className),
		...props
	});
}
var inputGroupAddonVariants = cva("text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
		"inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
		"block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
		"block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type,
		"data-size": size,
		variant,
		className: cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupTextarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
		"data-slot": "input-group-control",
		className: cn("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className),
		...props
	});
}
function Spinner({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		role: "status",
		"aria-label": "Loading",
		className: cn("size-4 animate-spin", className),
		...props
	});
}
var convertBlobUrlToDataUrl = async (url) => {
	try {
		const blob = await (await fetch(url)).blob();
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = () => resolve(null);
			reader.readAsDataURL(blob);
		});
	} catch {
		return null;
	}
};
var PromptInputController = (0, import_react.createContext)(null);
var ProviderAttachmentsContext = (0, import_react.createContext)(null);
var useOptionalPromptInputController = () => (0, import_react.useContext)(PromptInputController);
var useOptionalProviderAttachments = () => (0, import_react.useContext)(ProviderAttachmentsContext);
var LocalAttachmentsContext = (0, import_react.createContext)(null);
var usePromptInputAttachments = () => {
	const provider = useOptionalProviderAttachments();
	const context = (0, import_react.useContext)(LocalAttachmentsContext) ?? provider;
	if (!context) throw new Error("usePromptInputAttachments must be used within a PromptInput or PromptInputProvider");
	return context;
};
var LocalReferencedSourcesContext = (0, import_react.createContext)(null);
var PromptInput = ({ className, accept, multiple, globalDrop, syncHiddenInput, maxFiles, maxFileSize, onError, onSubmit, children, ...props }) => {
	const controller = useOptionalPromptInputController();
	const usingProvider = !!controller;
	const inputRef = (0, import_react.useRef)(null);
	const formRef = (0, import_react.useRef)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const files = usingProvider ? controller.attachments.files : items;
	const [referencedSources, setReferencedSources] = (0, import_react.useState)([]);
	const filesRef = (0, import_react.useRef)(files);
	(0, import_react.useEffect)(() => {
		filesRef.current = files;
	}, [files]);
	const openFileDialogLocal = (0, import_react.useCallback)(() => {
		inputRef.current?.click();
	}, []);
	const matchesAccept = (0, import_react.useCallback)((f) => {
		if (!accept || accept.trim() === "") return true;
		return accept.split(",").map((s) => s.trim()).filter(Boolean).some((pattern) => {
			if (pattern.endsWith("/*")) {
				const prefix = pattern.slice(0, -1);
				return f.type.startsWith(prefix);
			}
			return f.type === pattern;
		});
	}, [accept]);
	const addLocal = (0, import_react.useCallback)((fileList) => {
		const incoming = [...fileList];
		const accepted = incoming.filter((f) => matchesAccept(f));
		if (incoming.length && accepted.length === 0) {
			onError?.({
				code: "accept",
				message: "No files match the accepted types."
			});
			return;
		}
		const withinSize = (f) => maxFileSize ? f.size <= maxFileSize : true;
		const sized = accepted.filter(withinSize);
		if (accepted.length > 0 && sized.length === 0) {
			onError?.({
				code: "max_file_size",
				message: "All files exceed the maximum size."
			});
			return;
		}
		setItems((prev) => {
			const capacity = typeof maxFiles === "number" ? Math.max(0, maxFiles - prev.length) : void 0;
			const capped = typeof capacity === "number" ? sized.slice(0, capacity) : sized;
			if (typeof capacity === "number" && sized.length > capacity) onError?.({
				code: "max_files",
				message: "Too many files. Some were not added."
			});
			const next = [];
			for (const file of capped) next.push({
				filename: file.name,
				id: nanoid(),
				mediaType: file.type,
				type: "file",
				url: URL.createObjectURL(file)
			});
			return [...prev, ...next];
		});
	}, [
		matchesAccept,
		maxFiles,
		maxFileSize,
		onError
	]);
	const removeLocal = (0, import_react.useCallback)((id) => setItems((prev) => {
		const found = prev.find((file) => file.id === id);
		if (found?.url) URL.revokeObjectURL(found.url);
		return prev.filter((file) => file.id !== id);
	}), []);
	const addWithProviderValidation = (0, import_react.useCallback)((fileList) => {
		const incoming = [...fileList];
		const accepted = incoming.filter((f) => matchesAccept(f));
		if (incoming.length && accepted.length === 0) {
			onError?.({
				code: "accept",
				message: "No files match the accepted types."
			});
			return;
		}
		const withinSize = (f) => maxFileSize ? f.size <= maxFileSize : true;
		const sized = accepted.filter(withinSize);
		if (accepted.length > 0 && sized.length === 0) {
			onError?.({
				code: "max_file_size",
				message: "All files exceed the maximum size."
			});
			return;
		}
		const currentCount = files.length;
		const capacity = typeof maxFiles === "number" ? Math.max(0, maxFiles - currentCount) : void 0;
		const capped = typeof capacity === "number" ? sized.slice(0, capacity) : sized;
		if (typeof capacity === "number" && sized.length > capacity) onError?.({
			code: "max_files",
			message: "Too many files. Some were not added."
		});
		if (capped.length > 0) controller?.attachments.add(capped);
	}, [
		matchesAccept,
		maxFileSize,
		maxFiles,
		onError,
		files.length,
		controller
	]);
	const clearAttachments = (0, import_react.useCallback)(() => usingProvider ? controller?.attachments.clear() : setItems((prev) => {
		for (const file of prev) if (file.url) URL.revokeObjectURL(file.url);
		return [];
	}), [usingProvider, controller]);
	const clearReferencedSources = (0, import_react.useCallback)(() => setReferencedSources([]), []);
	const add = usingProvider ? addWithProviderValidation : addLocal;
	const remove = usingProvider ? controller.attachments.remove : removeLocal;
	const openFileDialog = usingProvider ? controller.attachments.openFileDialog : openFileDialogLocal;
	const clear = (0, import_react.useCallback)(() => {
		clearAttachments();
		clearReferencedSources();
	}, [clearAttachments, clearReferencedSources]);
	(0, import_react.useEffect)(() => {
		if (!usingProvider) return;
		controller.__registerFileInput(inputRef, () => inputRef.current?.click());
	}, [usingProvider, controller]);
	(0, import_react.useEffect)(() => {
		if (syncHiddenInput && inputRef.current && files.length === 0) inputRef.current.value = "";
	}, [files, syncHiddenInput]);
	(0, import_react.useEffect)(() => {
		const form = formRef.current;
		if (!form) return;
		if (globalDrop) return;
		const onDragOver = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
		};
		const onDrop = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
			if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) add(e.dataTransfer.files);
		};
		form.addEventListener("dragover", onDragOver);
		form.addEventListener("drop", onDrop);
		return () => {
			form.removeEventListener("dragover", onDragOver);
			form.removeEventListener("drop", onDrop);
		};
	}, [add, globalDrop]);
	(0, import_react.useEffect)(() => {
		if (!globalDrop) return;
		const onDragOver = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
		};
		const onDrop = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
			if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) add(e.dataTransfer.files);
		};
		document.addEventListener("dragover", onDragOver);
		document.addEventListener("drop", onDrop);
		return () => {
			document.removeEventListener("dragover", onDragOver);
			document.removeEventListener("drop", onDrop);
		};
	}, [add, globalDrop]);
	(0, import_react.useEffect)(() => () => {
		if (!usingProvider) {
			for (const f of filesRef.current) if (f.url) URL.revokeObjectURL(f.url);
		}
	}, [usingProvider]);
	const handleChange = (0, import_react.useCallback)((event) => {
		if (event.currentTarget.files) add(event.currentTarget.files);
		event.currentTarget.value = "";
	}, [add]);
	const attachmentsCtx = (0, import_react.useMemo)(() => ({
		add,
		clear: clearAttachments,
		fileInputRef: inputRef,
		files: files.map((item) => ({
			...item,
			id: item.id
		})),
		openFileDialog,
		remove
	}), [
		files,
		add,
		remove,
		clearAttachments,
		openFileDialog
	]);
	const refsCtx = (0, import_react.useMemo)(() => ({
		add: (incoming) => {
			const array = Array.isArray(incoming) ? incoming : [incoming];
			setReferencedSources((prev) => [...prev, ...array.map((s) => ({
				...s,
				id: nanoid()
			}))]);
		},
		clear: clearReferencedSources,
		remove: (id) => {
			setReferencedSources((prev) => prev.filter((s) => s.id !== id));
		},
		sources: referencedSources
	}), [referencedSources, clearReferencedSources]);
	const handleSubmit = (0, import_react.useCallback)(async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const text = usingProvider ? controller.textInput.value : (() => {
			return new FormData(form).get("message") || "";
		})();
		if (!usingProvider) form.reset();
		try {
			const result = onSubmit({
				files: await Promise.all(files.map(async ({ id: _id, ...item }) => {
					if (item.url?.startsWith("blob:")) {
						const dataUrl = await convertBlobUrlToDataUrl(item.url);
						return {
							...item,
							url: dataUrl ?? item.url
						};
					}
					return item;
				})),
				text
			}, event);
			if (result instanceof Promise) try {
				await result;
				clear();
				if (usingProvider) controller.textInput.clear();
			} catch {}
			else {
				clear();
				if (usingProvider) controller.textInput.clear();
			}
		} catch {}
	}, [
		usingProvider,
		controller,
		files,
		onSubmit,
		clear
	]);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		accept,
		"aria-label": "Upload files",
		className: "hidden",
		multiple,
		onChange: handleChange,
		ref: inputRef,
		title: "Upload files",
		type: "file"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		className: cn("w-full", className),
		onSubmit: handleSubmit,
		ref: formRef,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup, {
			className: "overflow-hidden",
			children
		})
	})] });
	const withReferencedSources = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalReferencedSourcesContext.Provider, {
		value: refsCtx,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalAttachmentsContext.Provider, {
		value: attachmentsCtx,
		children: withReferencedSources
	});
};
var PromptInputTextarea = ({ onChange, onKeyDown, className, placeholder = "What would you like to know?", ...props }) => {
	const controller = useOptionalPromptInputController();
	const attachments = usePromptInputAttachments();
	const [isComposing, setIsComposing] = (0, import_react.useState)(false);
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		onKeyDown?.(e);
		if (e.defaultPrevented) return;
		if (e.key === "Enter") {
			if (isComposing || e.nativeEvent.isComposing) return;
			if (e.shiftKey) return;
			e.preventDefault();
			const { form } = e.currentTarget;
			if ((form?.querySelector("button[type=\"submit\"]"))?.disabled) return;
			form?.requestSubmit();
		}
		if (e.key === "Backspace" && e.currentTarget.value === "" && attachments.files.length > 0) {
			e.preventDefault();
			const lastAttachment = attachments.files.at(-1);
			if (lastAttachment) attachments.remove(lastAttachment.id);
		}
	}, [
		onKeyDown,
		isComposing,
		attachments
	]);
	const handlePaste = (0, import_react.useCallback)((event) => {
		const items = event.clipboardData?.items;
		if (!items) return;
		const files = [];
		for (const item of items) if (item.kind === "file") {
			const file = item.getAsFile();
			if (file) files.push(file);
		}
		if (files.length > 0) {
			event.preventDefault();
			attachments.add(files);
		}
	}, [attachments]);
	const handleCompositionEnd = (0, import_react.useCallback)(() => setIsComposing(false), []);
	const handleCompositionStart = (0, import_react.useCallback)(() => setIsComposing(true), []);
	const controlledProps = controller ? {
		onChange: (e) => {
			controller.textInput.setInput(e.currentTarget.value);
			onChange?.(e);
		},
		value: controller.textInput.value
	} : { onChange };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupTextarea, {
		className: cn("field-sizing-content max-h-48 min-h-16", className),
		name: "message",
		onCompositionEnd: handleCompositionEnd,
		onCompositionStart: handleCompositionStart,
		onKeyDown: handleKeyDown,
		onPaste: handlePaste,
		placeholder,
		...props,
		...controlledProps
	});
};
var PromptInputFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
	align: "block-end",
	className: cn("justify-between gap-1", className),
	...props
});
var PromptInputSubmit = ({ className, variant = "default", size = "icon-sm", status, onStop, onClick, children, ...props }) => {
	const isGenerating = status === "submitted" || status === "streaming";
	let Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "size-4" });
	if (status === "submitted") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {});
	else if (status === "streaming") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" });
	else if (status === "error") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" });
	const handleClick = (0, import_react.useCallback)((e) => {
		if (isGenerating && onStop) {
			e.preventDefault();
			onStop();
			return;
		}
		onClick?.(e);
	}, [
		isGenerating,
		onStop,
		onClick
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
		"aria-label": isGenerating ? "Stop" : "Submit",
		className: cn(className),
		onClick: handleClick,
		size,
		type: isGenerating && onStop ? "button" : "submit",
		variant,
		...props,
		children: children ?? Icon
	});
};
var CHAT_STORAGE_KEY = "wecare-appointment-chat-v1";
function readChat() {
	try {
		const value = JSON.parse(localStorage.getItem("wecare-appointment-chat-v1") || "[]");
		if (!Array.isArray(value)) return [];
		return value.filter((m) => typeof m?.id === "string" && ["user", "assistant"].includes(m.role) && Array.isArray(m.parts) && m.parts.every((p) => p.type === "text" && typeof p.text === "string"));
	} catch {
		return [];
	}
}
function appointmentWhatsAppUrl(messages) {
	const details = messages.filter((m) => m.role === "user").map((m) => m.parts.filter((p) => p.type === "text").map((p) => p.text).join(" ")).join("\n");
	return `https://wa.me/917330833964?text=${encodeURIComponent(`Hello We Care Physiotherapy Clinic, I would like to request an appointment.\n\n${details}\n\nPlease confirm a suitable time.`)}`;
}
function AppointmentAssistant() {
	const [initialMessages] = (0, import_react.useState)(readChat);
	const [input, setInput] = (0, import_react.useState)("");
	const [storageError, setStorageError] = (0, import_react.useState)(false);
	const textarea = (0, import_react.useRef)(null);
	const transport = (0, import_react.useMemo)(() => new DefaultChatTransport({
		api: `https://tvufheemrewhumokljlg.supabase.co/functions/v1/appointment-assistant`,
		headers: { apikey: "sb_publishable_QGX4ls8PhozdXou1AF8nkA_T07qFDD7" },
		fetch: async (url, init) => {
			const response = await fetch(url, init);
			if (!response.ok) {
				const body = await response.json().catch(() => ({}));
				throw new Error(body.message || "The assistant is unavailable. Please contact the clinic.");
			}
			return response;
		}
	}), []);
	const { messages, sendMessage, status, stop, error, clearError, setMessages } = useChat({
		id: "wecare-appointment",
		messages: initialMessages,
		transport
	});
	const busy = status === "submitted" || status === "streaming";
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
			setStorageError(false);
		} catch {
			setStorageError(true);
		}
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (!busy) textarea.current?.focus();
	}, [busy]);
	function send(text) {
		if (!text.trim() || busy) return;
		clearError();
		setInput("");
		sendMessage({ text: text.trim() });
		textarea.current?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Clinic appointment assistant",
		className: "overflow-hidden rounded-lg border border-border bg-card shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-b border-border px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/favicon.ico",
						alt: "We Care",
						className: "h-10 w-10 rounded-md object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "We Care Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Gemini · Appointment enquiries"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					title: "Clear conversation",
					"aria-label": "Clear conversation",
					disabled: busy || !messages.length,
					onClick: () => {
						if (window.confirm("Clear this saved conversation?")) {
							setMessages([]);
							clearError();
							textarea.current?.focus();
						}
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Conversation, {
				className: "h-[360px] min-h-0 md:h-[430px]",
				"aria-label": "Appointment conversation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ConversationContent, {
					className: "gap-6 p-5",
					children: [
						!messages.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-semibold",
									children: "Let’s plan your clinic visit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Hello! What would you like to ask We Care Physiotherapy in Guntur?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"I’d like an appointment",
										"Where is the clinic?",
										"Do you offer home visits?"
									].map((text) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										className: "whitespace-normal h-auto min-h-9 text-left",
										onClick: () => send(text),
										children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "shrink-0" })]
									}, text))
								})
							]
						}),
						messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
							from: message.role,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContent, {
								className: "break-words",
								children: message.parts.map((part, index) => part.type === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageResponse, {
									isAnimating: busy && message.role === "assistant",
									children: part.text
								}, index) : null)
							})
						}, message.id)),
						status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "animate-pulse text-sm text-muted-foreground motion-reduce:animate-none",
							children: "We Care Assistant is replying…"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversationScrollButton, { "aria-label": "Scroll to latest message" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border p-4 space-y-3",
				children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: error.message
					}),
					storageError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: "Your browser could not save this chat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptInput, {
						onSubmit: ({ text }) => send(text),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputTextarea, {
							ref: textarea,
							autoFocus: true,
							value: input,
							onChange: (e) => setInput(e.target.value),
							placeholder: "Ask about your clinic visit…",
							"aria-label": "Message the clinic assistant",
							maxLength: 6e3,
							className: "min-h-[72px] text-base"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputFooter, {
							className: "justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputSubmit, {
								status,
								disabled: !busy && !input.trim(),
								onStop: stop,
								title: busy ? "Stop reply" : "Send message"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "AI, not medical advice. Chat stays in this browser; avoid sensitive medical details. Only the clinic confirms appointments."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: appointmentWhatsAppUrl(messages),
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Send to clinic on WhatsApp"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+917330833964",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Call clinic"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Press Send in WhatsApp to deliver your request."
					})
				]
			})
		]
	});
}
var faqs = [
	{
		q: "Do I need a doctor's referral for physiotherapy?",
		a: "No, you can directly visit We Care Physiotherapy Clinic in Guntur without a referral. However, if you're recovering from surgery, bringing your medical reports helps us create a better treatment plan."
	},
	{
		q: "How many sessions will I need?",
		a: "The number of sessions depends on your condition, severity, and goals. Typically, patients see improvement within 4–8 sessions. Our physiotherapist will discuss a personalized treatment plan during your first visit."
	},
	{
		q: "What services do you specialize in?",
		a: "We specialize in Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment, Sports Rehab, and many more — all following international rehabilitation protocols."
	},
	{
		q: "What are your clinic hours?",
		a: "We are open daily and close at 11 PM. Walk-ins are welcome, but we recommend booking an appointment to avoid waiting. Call us at 073308 33964."
	},
	{
		q: "Do you accept health insurance?",
		a: "Yes, we work with most major health insurance providers. Please contact us with your insurance details and we'll help you understand your coverage for physiotherapy treatment."
	}
];
var ContactPage = () => {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		concern: "",
		message: ""
	});
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const buildWhatsAppUrl = (data) => {
		const text = `Hello, I would like to book an appointment at We Care Physiotherapy Clinic.\n\n👤 Name: ${data.name || "(not provided)"}\n📞 Phone: ${data.phone || "(not provided)"}\n📧 Email: ${data.email || "(not provided)"}\n🩺 Concern: ${data.concern || "(not provided)"}\n📝 Message: ${data.message || "(not provided)"}\n\nPlease confirm my appointment. Thank you!`;
		return `https://wa.me/917330833964?text=${encodeURIComponent(text)}`;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const waWindow = window.open("", "_blank");
		try {
			const { error } = await supabase.from("appointment_requests").insert({
				patient_name: formData.name,
				phone: formData.phone,
				email: formData.email || null,
				concern: formData.concern,
				message: formData.message || null,
				source: "website_contact_form",
				email_sent: false
			});
			if (error) console.error("Supabase insert error:", error);
			const url = buildWhatsAppUrl(formData);
			if (waWindow) waWindow.location.href = url;
			else window.location.href = url;
			setSubmitted(true);
			trackAppointmentSubmit("website_contact_form", formData.concern);
			toast.success("Opening WhatsApp — press send to deliver your request to the clinic.");
		} catch (err) {
			console.error("Submit error:", err);
			waWindow?.close();
			toast.error("Something went wrong. Please call us at 073308 33964.");
		} finally {
			setLoading(false);
		}
	};
	const bookViaWhatsApp = () => {
		trackWhatsAppClick("contact_page_button");
		window.open(buildWhatsAppUrl(formData), "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
			title: "Contact Us | Book Appointment in Guntur",
			description: "Book an appointment at We Care Physiotherapy in Kothapeta, Guntur. Call 073308 33964, WhatsApp, or fill our form. Open till 11 PM.",
			canonical: "/contact",
			jsonLd: [{
				"@context": "https://schema.org",
				"@type": "Physiotherapy",
				name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
				image: "https://wecarephysioclinic.com/images/clinic-hero.jpg",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota",
					addressLocality: "Kothapeta, Guntur",
					addressRegion: "Andhra Pradesh",
					postalCode: "522001",
					addressCountry: "IN"
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: "16.3067",
					longitude: "80.4365"
				},
				telephone: "+917330833964",
				openingHours: "Mo-Su 00:00-23:00",
				url: "https://wecarephysioclinic.com/contact",
				areaServed: {
					"@type": "City",
					name: "Guntur"
				}
			}, {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-warm py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					className: "text-center mb-14 max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary font-semibold text-sm tracking-wide uppercase mb-3",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4",
							children: "Book Your Appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg",
							children: "Ready to start your recovery? Reach out to us by phone, WhatsApp, or fill out the form below."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
						className: "lg:col-span-2 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card rounded-2xl p-7 shadow-xs border border-border/50 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display font-bold text-xl text-foreground",
									children: "Get in Touch"
								}), [
									{
										icon: Phone,
										label: "073308 33964",
										href: "tel:+917330833964"
									},
									{
										icon: Phone,
										label: "070364 67752",
										href: "tel:+917036467752"
									},
									{
										icon: Mail,
										label: "chandrakaladar@gmail.com",
										href: "mailto:chandrakaladar@gmail.com"
									},
									{
										icon: MapPin,
										label: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta, Guntur, AP 522001"
									},
									{
										icon: Clock,
										label: "Open daily · Closes 11 PM"
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-lg bg-teal-soft flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "w-5 h-5 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: item.href,
										className: "text-foreground font-medium hover:text-primary transition-colors",
										children: item.label
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground font-medium",
										children: item.label
									}) })]
								}, item.label))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-gradient-to-br from-[hsl(142_70%_45%)]/10 to-[hsl(142_70%_45%)]/5 rounded-2xl p-6 border border-[hsl(142_70%_45%)]/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-[hsl(142_70%_45%)]/15 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5 text-[hsl(142_70%_45%)]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground text-sm",
										children: "Prefer WhatsApp?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: "Get instant replies"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: bookViaWhatsApp,
									variant: "outline",
									className: "w-full border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Book via WhatsApp"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl overflow-hidden shadow-xs border border-border/50 bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-72 md:h-80",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "We Care Physiotherapy Clinic Location in Kothapeta, Guntur",
										src: "https://maps.google.com/maps?q=We+Care+Physiotherapy+%26+Sports+%26+Chiropractic+Clinic,+Door+No+13,+5-18,+4th+Lane,+near+Kamaraju+Diagnostic+Center,+Gunturvari+Thota,+Kothapeta,+Guntur,+Andhra+Pradesh+522001&output=embed",
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: true,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade",
										"aria-label": "Google Map showing We Care Physiotherapy Clinic location in Kothapeta, Guntur"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-4 border-t border-border/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://maps.google.com/maps?q=We+Care+Physiotherapy+%26+Sports+%26+Chiropractic+Clinic,+Door+No+13,+5-18,+4th+Lane,+near+Kamaraju+Diagnostic+Center,+Gunturvari+Thota,+Kothapeta,+Guntur,+Andhra+Pradesh+522001",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }), "Open in Google Maps"]
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
						delay: .1,
						className: "lg:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentAssistant, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl p-8 md:p-10 shadow-xs border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display font-bold text-xl text-foreground mb-6",
								children: "Request an Appointment"
							}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-16 h-16 text-primary mx-auto mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-bold text-2xl text-foreground mb-2",
										children: "Thank You!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "We've received your request and will contact you within 24 hours to confirm your appointment."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: bookViaWhatsApp,
											variant: "outline",
											className: "gap-2 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Also Notify via WhatsApp"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => setSubmitted(false),
											variant: "outline",
											className: "gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-4 h-4" }), " Book Another"]
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "contact-name",
											className: "text-sm font-medium text-foreground mb-1.5 block",
											children: "Full Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "contact-name",
											name: "name",
											required: true,
											placeholder: "Your name",
											className: "h-12",
											maxLength: 100,
											value: formData.name,
											onChange: (e) => handleChange("name", e.target.value)
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "contact-phone",
											className: "text-sm font-medium text-foreground mb-1.5 block",
											children: "Phone Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "contact-phone",
											name: "phone",
											required: true,
											type: "tel",
											placeholder: "+91 XXXXX XXXXX",
											className: "h-12",
											maxLength: 15,
											value: formData.phone,
											onChange: (e) => handleChange("phone", e.target.value)
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-email",
										className: "text-sm font-medium text-foreground mb-1.5 block",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "contact-email",
										name: "email",
										type: "email",
										placeholder: "your@email.com",
										className: "h-12",
										maxLength: 255,
										value: formData.email,
										onChange: (e) => handleChange("email", e.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-concern",
										className: "text-sm font-medium text-foreground mb-1.5 block",
										children: "Condition / Concern *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "contact-concern",
										name: "concern",
										required: true,
										value: formData.concern,
										onChange: (e) => handleChange("concern", e.target.value),
										className: "w-full h-12 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-ring",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select your concern"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Back Pain / Neck Pain" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Knee / Hip / Joint Pain" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sports Injury" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Post-Surgery Rehabilitation" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Chiropractic / Osteopathy" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paralysis / Neurological Condition" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dry Needling / Acupuncture" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cupping / Myofascial Therapy" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Foot & Ankle Pain" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paediatric Physiotherapy" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Geriatric / Elderly Care" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-message",
										className: "text-sm font-medium text-foreground mb-1.5 block",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "contact-message",
										name: "message",
										placeholder: "Briefly describe your condition or preferred appointment time...",
										rows: 4,
										maxLength: 1e3,
										value: formData.message,
										onChange: (e) => handleChange("message", e.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											size: "lg",
											disabled: loading,
											className: "flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), loading ? "Submitting..." : "Send Appointment Request"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "lg",
											variant: "outline",
											onClick: bookViaWhatsApp,
											className: "flex-1 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Book via WhatsApp"]
										})]
									})
								]
							})]
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container py-20 max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				className: "mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold text-3xl text-foreground text-center",
					children: "Frequently Asked Questions"
				})
			}), faqs.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold text-lg text-foreground mb-2",
						children: faq.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: faq.a
					})]
				})
			}, i))]
		})
	] });
};
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
