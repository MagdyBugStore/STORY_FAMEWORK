import e from "react";
var t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r = t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), a = t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = r() : t.exports = i();
}))();
function o({ className: e }) {
	return (0, a.jsxs)("div", {
		className: ["sb", e].filter(Boolean).join(" "),
		children: [(0, a.jsx)("div", {
			className: "sb-time",
			children: "9:41"
		}), (0, a.jsxs)("div", {
			className: "sb-icons",
			children: [
				(0, a.jsx)("div", { className: "sb-dot sm" }),
				(0, a.jsx)("div", { className: "sb-dot sm" }),
				(0, a.jsx)("div", { className: "sb-dot" })
			]
		})]
	});
}
function s({ children: e, showStatusBar: t = !0, className: n }) {
	return (0, a.jsxs)("div", {
		className: ["phone", n].filter(Boolean).join(" "),
		children: [t && (0, a.jsx)(o, {}), e]
	});
}
var c = [
	"الرئيسية",
	"استكشف",
	"حجوزاتي",
	"حسابي"
], l = [
	"الرئيسية",
	"التقويم",
	"الحجوزات",
	"الإعدادات"
];
function u({ activeIndex: e = 0, variant: t = "player", tabs: n, className: r }) {
	let i = n ?? (t === "owner" ? l : c);
	return (0, a.jsx)("div", {
		className: ["bnav", r].filter(Boolean).join(" "),
		children: i.map((t, n) => (0, a.jsxs)("div", {
			className: `bni${n === e ? " on" : ""}`,
			children: [
				(0, a.jsx)("div", { className: `bni-bar${n === e ? " on" : ""}` }),
				(0, a.jsx)("div", { className: "bni-dot" }),
				(0, a.jsx)("div", {
					className: `bni-lbl${n === e ? " on" : ""}`,
					children: t
				})
			]
		}, `${t}-${n}`))
	});
}
function d({ name: e, price: t, rating: n, imgBg: r, address: i, format: o, players: s, className: c }) {
	let l = o || s, u = !!i || !!l;
	return (0, a.jsxs)("div", {
		className: ["fcard", c].filter(Boolean).join(" "),
		children: [(0, a.jsxs)("div", {
			className: "fcard-img",
			style: r ? { background: r } : {},
			children: ["[Content Image]", (0, a.jsxs)("div", {
				className: "fcard-img-badge",
				children: ["⭐ ", n || "4.8"]
			})]
		}), (0, a.jsxs)("div", {
			className: "fcard-body",
			children: [
				(0, a.jsxs)("div", {
					className: "fcard-top",
					children: [(0, a.jsx)("div", {
						className: "fcard-name",
						children: e
					}), (0, a.jsx)("div", {
						className: "fcard-price",
						children: t || "150 ج/ساعة"
					})]
				}),
				u ? (0, a.jsxs)("div", {
					className: "fcard-details",
					children: [(0, a.jsx)("div", {
						className: "fcard-address",
						children: i
					}), (0, a.jsx)("div", {
						className: "fcard-format",
						children: l ? `نظام اللعب: ${l}` : ""
					})]
				}) : (0, a.jsxs)("div", {
					className: "fcard-meta",
					children: [
						(0, a.jsx)("div", {
							className: "mbar",
							style: { width: "80px" }
						}),
						(0, a.jsx)("div", {
							className: "mbar",
							style: { width: "55px" }
						}),
						(0, a.jsx)("div", {
							className: "mbar",
							style: { width: "38px" }
						})
					]
				}),
				(0, a.jsx)("div", {
					className: "btn-primary",
					children: "احجز"
				})
			]
		})]
	});
}
function f({ step: e, total: t = 4, className: n }) {
	return (0, a.jsxs)("div", {
		className: ["prog-wrap", n].filter(Boolean).join(" "),
		children: [(0, a.jsxs)("div", {
			className: "prog-top",
			children: [(0, a.jsxs)("div", {
				className: "prog-lbl",
				children: [
					"الخطوة ",
					e,
					" من ",
					t
				]
			}), (0, a.jsxs)("div", {
				className: "prog-lbl",
				children: [Math.round(e / t * 100), "%"]
			})]
		}), (0, a.jsx)("div", {
			className: "prog-bg",
			children: (0, a.jsx)("div", {
				className: "prog-fill",
				style: { width: `${e / t * 100}%` }
			})
		})]
	});
}
function p({ children: e, className: t }) {
	return (0, a.jsx)("div", {
		className: ["board-layout", t].filter(Boolean).join(" "),
		children: e
	});
}
function m({ title: e, count: t, subtitle: n, children: r, className: i }) {
	return (0, a.jsxs)("div", {
		className: ["board-group", i].filter(Boolean).join(" "),
		children: [(0, a.jsxs)("div", {
			className: "board-group-header",
			children: [(0, a.jsx)("div", {
				className: "board-group-title",
				children: e
			}), (0, a.jsx)("div", {
				className: "board-group-subtitle",
				children: n || `${t} Screens`
			})]
		}), (0, a.jsx)("div", {
			className: "board-grid",
			children: r
		})]
	});
}
function h({ id: e, name: t, children: n, className: r }) {
	return (0, a.jsxs)("div", {
		className: ["board-item", r].filter(Boolean).join(" "),
		children: [
			(0, a.jsx)("div", {
				className: "board-item-id",
				children: e
			}),
			n,
			(0, a.jsx)("div", {
				className: "board-item-name",
				children: t
			})
		]
	});
}
function g({ title: t, subtitle: n, count: r, children: i, className: o }) {
	let s = r ?? e.Children.toArray(i).length, c = n ?? (s ? `${s} Screens` : void 0);
	return (0, a.jsxs)("div", {
		className: ["board-group", o].filter(Boolean).join(" "),
		children: [(0, a.jsxs)("div", {
			className: "board-group-header",
			children: [(0, a.jsx)("div", {
				className: "board-group-title",
				children: t
			}), c ? (0, a.jsx)("div", {
				className: "board-group-subtitle",
				children: c
			}) : null]
		}), i]
	});
}
function _({ children: e, className: t }) {
	return (0, a.jsx)("div", {
		className: ["board-grid", t].filter(Boolean).join(" "),
		children: e
	});
}
function v({ children: e, className: t }) {
	return (0, a.jsx)("div", {
		className: ["flex flex-col gap-10 items-start", t].filter(Boolean).join(" "),
		children: e
	});
}
function y({ id: e, name: t, children: n, className: r }) {
	return (0, a.jsxs)("div", {
		className: ["board-item", r].filter(Boolean).join(" "),
		children: [(0, a.jsxs)("div", {
			className: "screen-meta",
			children: [(0, a.jsx)("div", {
				className: "screen-num",
				children: e
			}), (0, a.jsx)("div", {
				className: "screen-name",
				children: t
			})]
		}), n]
	});
}
function b(...e) {
	return e.filter(Boolean).join(" ");
}
function x({ as: t = "div", className: n, style: r, children: i, ...a }) {
	return e.createElement(t, {
		className: n,
		style: r,
		...a
	}, i);
}
function S({ className: e, children: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("content", e),
		...n,
		children: t
	});
}
function C({ className: e, children: t, align: n = "center", justify: r, wrap: i = !1, gap: o, style: s, ...c }) {
	return (0, a.jsx)(x, {
		className: b("flex flex-row", n === "start" ? "items-start" : n === "end" ? "items-end" : "items-center", r ? r === "start" ? "justify-start" : r === "end" ? "justify-end" : r === "between" ? "justify-between" : r === "around" ? "justify-around" : r === "evenly" ? "justify-evenly" : "justify-center" : "", i ? "flex-wrap" : "", e),
		style: o == null ? s : {
			...s,
			gap: o
		},
		...c,
		children: t
	});
}
function w({ className: e, children: t, align: n = "stretch", justify: r, gap: i, style: o, ...s }) {
	return (0, a.jsx)(x, {
		className: b("flex flex-col", n === "start" ? "items-start" : n === "end" ? "items-end" : n === "center" ? "items-center" : "items-stretch", r ? r === "start" ? "justify-start" : r === "end" ? "justify-end" : r === "between" ? "justify-between" : r === "around" ? "justify-around" : r === "evenly" ? "justify-evenly" : "justify-center" : "", e),
		style: i == null ? o : {
			...o,
			gap: i
		},
		...s,
		children: t
	});
}
function T({ className: e, children: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("relative", e),
		...n,
		children: t
	});
}
function E({ className: e, children: t, style: n, top: r, right: i, bottom: o, left: s, ...c }) {
	return (0, a.jsx)(x, {
		className: b("absolute", e),
		style: {
			...n,
			top: r,
			right: i,
			bottom: o,
			left: s
		},
		...c,
		children: t
	});
}
function D({ size: e = 12, vertical: t = !0 }) {
	return (0, a.jsx)(x, {
		style: t ? { height: e } : { width: e },
		"aria-hidden": "true"
	});
}
function O({ className: e, ...t }) {
	return (0, a.jsx)(x, {
		as: "hr",
		className: b("border-0 border-t border-[var(--g200)]", e),
		...t
	});
}
function k({ title: e, left: t, right: n, className: r, ...i }) {
	return (0, a.jsxs)(x, {
		className: b("topnav", r),
		...i,
		children: [
			t ?? (0, a.jsx)(A, {}),
			(0, a.jsx)(x, {
				className: "topnav-title",
				children: e
			}),
			n ?? (0, a.jsx)(x, { className: "w-[32px]" })
		]
	});
}
function A({ round: e = !1, className: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("tn-btn", e ? "round" : "", t),
		...n
	});
}
function j({ className: e, children: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("inp-lbl", e),
		...n,
		children: t
	});
}
function M({ className: e, children: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("inp-field", e),
		...n,
		children: t
	});
}
function N({ className: e, children: t, ...n }) {
	return (0, a.jsx)(x, {
		className: b("inp-group", e),
		...n,
		children: t
	});
}
function P({ variant: t = "cta", className: n, children: r, as: i = "button", ...a }) {
	let o = t === "primary" ? "btn-primary" : t === "ghost" ? "btn-ghost" : t === "danger" ? "btn-danger" : "btn-cta", s = i === "button";
	return e.createElement(i, {
		className: b(o, n),
		type: s ? "button" : void 0,
		...a
	}, r);
}
function F({ as: t = "div", className: n, children: r, ...i }) {
	return e.createElement(t, {
		className: n,
		...i
	}, r);
}
function I({ className: e, ...t }) {
	return (0, a.jsx)(x, {
		className: b("tl", e),
		...t
	});
}
function L({ className: e, ...t }) {
	return (0, a.jsx)(x, {
		className: b("tl", e),
		...t
	});
}
export { m as BoardGroup, h as BoardItem, p as BoardLayout, u as BottomNav, x as Box, P as Button, w as Column, S as Content, O as Divider, d as FCard, M as Field, N as Group, A as IconButton, j as Label, s as Phone, E as Positioned, f as ProgressBar, C as Row, _ as ScreenGrid, v as ScreenList, y as ScreenTile, g as Section, L as SkeletonBlock, I as SkeletonLine, D as Spacer, T as Stack, o as StatusBar, F as Text, k as TopNav };
