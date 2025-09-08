(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/modals/RulesModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/modals/RulesModal.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RulesModal = (param)=>{
    let { isOpen, onClose, title, content, pdfUrl } = param;
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const backdropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleClose = ()=>{
        if (isAnimating.current || !isOpen) return;
        isAnimating.current = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modalRef.current, {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.in',
            onComplete: ()=>{
                document.body.style.overflow = 'auto';
                onClose();
                isAnimating.current = false;
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(backdropRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.2
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RulesModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                isAnimating.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(backdropRef.current, {
                    opacity: 1,
                    duration: 0.3
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(modalRef.current, {
                    y: '100%',
                    opacity: 0
                }, {
                    y: '0%',
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                    onComplete: {
                        "RulesModal.useEffect": ()=>{
                            isAnimating.current = false;
                        }
                    }["RulesModal.useEffect"]
                });
            }
        }
    }["RulesModal.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: backdropRef,
        className: "fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex justify-center items-end ".concat(isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'),
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: "w-full max-w-4xl h-[90vh] bg-gray-900/80 border-t-2 border-purple-500 rounded-t-3xl flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex-shrink-0 p-4 sm:p-6 flex items-center justify-between border-b border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg sm:text-2xl font-bold text-purple-300 font-orbitron",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/RulesModal.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-gray-400 hover:text-white transition-colors p-2 rounded-full",
                            "data-cursor-hover": true,
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/RulesModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 193
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/RulesModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 236
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/RulesModal.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/RulesModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/RulesModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow p-4 sm:p-8 overflow-y-auto font-sans text-gray-300",
                    children: Array.isArray(content) && content.length > 0 ? content.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-md sm:text-xl font-bold text-cyan-300 mb-4 font-orbitron",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/RulesModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 list-disc list-inside",
                                    children: section.points.map((point, pIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "leading-relaxed text-sm sm:text-base",
                                            children: point
                                        }, pIndex, false, {
                                            fileName: "[project]/src/components/modals/RulesModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/RulesModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/modals/RulesModal.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-400",
                        children: "Rules & Regulations are currently unavailable."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/RulesModal.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/RulesModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "flex-shrink-0 p-4 sm:p-6 border-t border-gray-700 bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: pdfUrl,
                        download: true,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "w-full block text-center bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors",
                        "data-cursor-hover": true,
                        children: "Download PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/RulesModal.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/RulesModal.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/RulesModal.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/modals/RulesModal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RulesModal, "Zqi0+zHA2FDyYwOJ2+NkWC0oLCI=");
_c = RulesModal;
const __TURBOPACK__default__export__ = RulesModal;
var _c;
__turbopack_context__.k.register(_c, "RulesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/modals/LeaderboardModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/modals/LeaderboardModal.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Use the new type for the leaderboardData array
const leaderboardData = [];
const LeaderboardModal = (param)=>{
    let { isOpen, onClose } = param;
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const backdropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleClose = ()=>{
        if (isAnimating.current || !isOpen) return;
        isAnimating.current = true;
        window.dispatchEvent(new CustomEvent('start-lenis'));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modalRef.current, {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.in',
            onComplete: ()=>{
                document.body.style.overflow = 'auto';
                onClose();
                isAnimating.current = false;
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(backdropRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.2
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeaderboardModal.useEffect": ()=>{
            if (isOpen) {
                window.dispatchEvent(new CustomEvent('stop-lenis'));
                document.body.style.overflow = 'hidden';
                isAnimating.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(backdropRef.current, {
                    opacity: 1,
                    duration: 0.3
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(modalRef.current, {
                    y: '100%',
                    opacity: 0
                }, {
                    y: '0%',
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                    onComplete: {
                        "LeaderboardModal.useEffect": ()=>{
                            isAnimating.current = false;
                        }
                    }["LeaderboardModal.useEffect"]
                });
            }
        }
    }["LeaderboardModal.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: backdropRef,
        className: "fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex justify-center items-end ".concat(isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'),
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: "w-full max-w-4xl h-[90vh] bg-gray-900/80 border-t-2 border-purple-500 rounded-t-3xl flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex-shrink-0 p-4 sm:p-6 flex items-center justify-between border-b border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg sm:text-2xl font-bold text-purple-300 font-orbitron",
                            children: "Live Leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-gray-400 hover:text-white transition-colors p-2 rounded-full",
                            "data-cursor-hover": true,
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 192
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 235
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow p-4 sm:p-8 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left font-sans",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "sticky top-0 bg-gray-900/80 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-1/6 sm:w-1/12",
                                            children: "Rank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-3/6 sm:w-7/12",
                                            children: "School Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-sm sm:text-base font-bold text-cyan-300 uppercase w-2/6 sm:w-4/12 text-right",
                                            children: "No. of Votes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: leaderboardData.map((school, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-800 hover:bg-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-base sm:text-lg font-bold text-white",
                                                children: school.rank
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-sm sm:text-base text-gray-300",
                                                children: school.schoolName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-base sm:text-lg font-bold text-purple-400 text-right",
                                                children: school.votes.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/modals/LeaderboardModal.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeaderboardModal, "Zqi0+zHA2FDyYwOJ2+NkWC0oLCI=");
_c = LeaderboardModal;
const __TURBOPACK__default__export__ = LeaderboardModal;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/rrData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/data/rrData.ts
__turbopack_context__.s({
    "rrData": ()=>rrData
});
const rrData = [
    {
        slug: 'codinex',
        title: 'CODINEX!! Rules & Regulations',
        rules: [
            {
                subCompetitionName: 'Coding Challenges',
                pdfUrl: '/pdfs/rr-codinex-algorithm.pdf',
                content: [
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 9-13 can participate.',
                            'This competition is for individuals, not for teams.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'The competition will be held physically using PCs (offline).',
                            'Participants will face 10 algorithmic problems.',
                            'The total competition duration is 1 hour 30 minutes (90 minutes).',
                            'Participants must declare their programming language at the beginning and use only that language.',
                            'The allowed programming languages are: Python 3, C, C++, Java.',
                            'PCs provided will include offline editors/compilers.',
                            'No internet access or online help is permitted.',
                            'Code must be compiled and tested locally during the given time.',
                            'Each solution must be saved as a separate file named based on the question and language (e.g., Q1.py, Q2.cpp).',
                            'All code files must be placed in a folder named "CODINEX_SchoolName_YourName".',
                            'Participants must work individually. Collaboration, communication, or plagiarism will result in disqualification.',
                            'Participants may solve questions in any order.',
                            'All final submissions must be made before the time ends.'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Correctness of the logic and output.',
                            'Efficiency and proper use of algorithms.',
                            'Code readability and organization.',
                            'Adherence to input/output specifications.'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'App Development',
                pdfUrl: '/pdfs/rr-codinex-app.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Build an educational productivity app that helps students plan and track their study schedule.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 9-13 can participate.',
                            'Solo or duet entries are allowed.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'The app must be original and built for this competition.',
                            'You may use any platform or framework (Flutter, React Native, Web, etc.).',
                            'Must include a task planner, calendar view, and at least one smart feature (e.g., Pomodoro timer, progress tracking).'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit the app source code (via a public GitHub repository).',
                            'A hosted link (if applicable) and a brief video demonstration (2-3 minutes) must also be submitted.'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Functionality and technical execution.',
                            'UI/UX design and usability.',
                            'Innovation and creativity.',
                            'Adherence to the theme and requirements.'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Website Development',
                pdfUrl: '/pdfs/rr-codinex-web.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Design and develop a Teacher Performance and Development Tracking System. The platform should allow storing teacher information, performance reviews, student feedback, training history, and career milestones.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'To All Students with no Age or Grade Restrictions.',
                            'Only For Individuals Not for Teams.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'The website must be original and fully functional.',
                            'You can use any modern web technologies (React, Vue, Angular, Node.js, etc.).',
                            'Backend functionalities (e.g., user authentication, database integration) will significantly boost your score.',
                            'The design must be responsive and user-friendly.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit a link to your public GitHub repository containing all source code.',
                            'A hosted link to the live web app (e.g., on Netlify, Vercel) must be provided.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'pixelynx',
        title: 'PixelynX Rules & Regulations',
        rules: [
            {
                subCompetitionName: 'Digital Poster Designing',
                pdfUrl: '/pdfs/rr-pixelynx-poster.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Design an infographic about "Smart Cities: How Technology is Shaping the Future of Urban Life"'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 6-13.',
                            'Individual participation only.',
                            'Only one submission per contestant.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Use either Adobe Photoshop or Adobe Illustrator.',
                            'Regularly capture screenshots of your workspace for submission.',
                            'No templates or plagiarism allowed.',
                            'Dimensions: 4:3 size.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit a .rar file with all project files (textures, images, etc.).',
                            'Artwork exported in .png, .jpg, or .pdf.',
                            'Include a PDF with screenshots of all layers and 5 workspace screenshots.',
                            'File format: "POST_SCHOOLNAME_YOURNAME.RAR"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Functionality (Theme-relativity)',
                            'Creativity (Uniqueness)',
                            'Aesthetics (Visual Appeal)',
                            'Technical Execution',
                            'User Experience'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Video Editing',
                pdfUrl: '/pdfs/rr-pixelynx-video.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            "Submit one video on one of these topics:",
                            "1. School in the year 2050 (Max 5 mins)",
                            "2. Gadget Commercial Parody (30s - 2 mins)",
                            "3. Glitched Reality (1-3 mins)"
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 10-13.',
                            'Team-based (1 to 4 students).'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'AI-generated content is strictly prohibited.',
                            'All content must be original or royalty-free.',
                            'Capture at least 3 screenshots of your editing timeline.',
                            'Landscape format, minimum 720p resolution.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit video in .mp4 or .mov format.',
                            'Include a PDF with a short description (max 150 words) and screenshots.',
                            'Folder name: "VIDEO_SCHOOLNAME_YOURNAME"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Concept & Theme Relevance',
                            'Editing Technique',
                            'Storytelling & Creative Presentation',
                            'Visual & Audio Quality',
                            'Effort & Production Quality'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Animation Competition',
                pdfUrl: '/pdfs/rr-pixelynx-animation.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Create a short animation (30 seconds to 2 minutes) on the theme: "A Day in a Future World"'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 6-13.',
                            'Individual participation only.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Use 2D, 3D, stop-motion, or motion graphics.',
                            'No AI-generated content.',
                            'Plagiarism or use of templates is strictly prohibited.',
                            'Capture screenshots of your timeline/workspace.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit final animation in .mp4 or .mov format.',
                            'Include a PDF with at least 3 screenshots and a short concept explanation (max 100 words).',
                            'File name: "ANIM_SCHOOLNAME_YOURNAME"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Theme Interpretation',
                            'Animation Skill',
                            'Art Direction',
                            'Audio Integration',
                            'Originality & Technical Execution'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Graphic Designing',
                pdfUrl: '/pdfs/rr-pixelynx-graphic.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Design a creative digital artwork based on the theme: "Breaking Boundaries, The Future of Expression"'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 6-13.',
                            'Individual participation only.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Use standard design software (Photoshop, Illustrator, etc.).',
                            'AI-generated tools are strictly prohibited.',
                            'Capture screenshots of your workspace and layers.',
                            'Dimensions: 1:1 ratio.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit a .rar file with all project files.',
                            'Export artwork in .png, .jpg, or .pdf.',
                            'Include a PDF with layer screenshots and 5 workspace screenshots.',
                            'File name: "GRAPHIC_SCHOOLNAME_YOURNAME"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Functionality (Relevance to theme)',
                            'Creativity',
                            'Aesthetics',
                            'Technical Execution',
                            'User Experience'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'AI Graphic Designing',
                pdfUrl: '/pdfs/rr-pixelynx-ai.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Generate an AI artwork based on the theme: "When Machines Dream"'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 6-13.',
                            'Individual participation only.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Use any AI graphic generation tools (DALL-E, Midjourney, etc.).',
                            'You must include the full prompt(s) used.',
                            'Post-editing is allowed but must be mentioned.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit final artwork in .png or .jpg format.',
                            'Include a text/PDF file with the prompt(s) and a brief concept description (max 50 words).',
                            'File name: "AIGRAPHIC_SCHOOLNAME_YOURNAME"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Prompt Creativity',
                            'Theme Relevance',
                            'Visual Impact',
                            'Post-Processing Quality',
                            'Originality'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: '3D Modeling',
                pdfUrl: '/pdfs/rr-pixelynx-3d.pdf',
                content: [
                    {
                        title: 'General Information',
                        points: [
                            'Eligibility: Grades 6 to 13.',
                            'Individual participation only.',
                            'Open Theme, but must be original, self-designed artwork.',
                            'Software: Any 3D software (Blender recommended).'
                        ]
                    },
                    {
                        title: 'Submission Requirements',
                        points: [
                            'A base file (Blender, FBX, or OBJ) will be provided to work from.',
                            'Submit the completed project file, OBJ, and FBX files.',
                            'At least 3 high-quality renders of the final model (PNG/JPEG).'
                        ]
                    },
                    {
                        title: 'Additional Rules',
                        points: [
                            'Plagiarism or use of non-original models will result in disqualification.',
                            'AI-generated content is strictly prohibited.',
                            'Use of references, HDRIs, and textures is allowed.'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Originality & Creativity',
                            'Technical Skill (Detail, Complexity, Topology)',
                            'Aesthetic Quality (Colors, Lighting, Composition)',
                            'Presentation'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Photo Manipulation',
                pdfUrl: '/pdfs/rr-pixelynx-photomanipulation.pdf',
                content: [
                    {
                        title: 'Theme',
                        points: [
                            'Broken Reality: When Data Becomes Dangerous'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Open for any category, Grades 6-13.',
                            'Individual participation only.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Only use Adobe Photoshop.',
                            'Regularly capture screenshots of your workspace.',
                            'No templates or plagiarism.',
                            'Feel free to use any dimension for your design.'
                        ]
                    },
                    {
                        title: 'Submission',
                        points: [
                            'Submit all project files in a .rar file.',
                            'Export artwork in .png or .jpg.',
                            'Include a PDF with screenshots of all layers and 5 workspace screenshots.',
                            'File format: "POST_SCHOOLNAME_YOURNAME.RAR"'
                        ]
                    },
                    {
                        title: 'Judging Criteria',
                        points: [
                            'Functionality (Theme relevance)',
                            'Creativity',
                            'Aesthetics',
                            'Technical Execution',
                            'User Experience'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'mechatron',
        title: 'Mechatron Rules & Regulations',
        rules: [
            {
                subCompetitionName: 'IOT Innovation',
                pdfUrl: '/pdfs/rr-mechatron-iot.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Build an IoT prototype that solves a real-world problem.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 9-13.',
                            'Teams of four only.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Round 1 will be held online.',
                            'Present prototype via Zoom for 5-10 minutes.',
                            'The invention should be simple, useful, and fulfill a social need.',
                            'Use of recycled or eco-friendly materials is encouraged.',
                            'The prototype must be a working model.',
                            'Submit a project report (PDF) one day before the Zoom session.'
                        ]
                    },
                    {
                        title: 'Scoring',
                        points: [
                            'Feasibility (25 Marks)',
                            'Originality (25 Marks)',
                            'Usefulness & Social Impact (25 Marks)',
                            'Presentation & Clarity (25 Marks)'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Robotic Design Challenge',
                pdfUrl: '/pdfs/rr-mechatron-robotic.pdf',
                content: [
                    {
                        title: 'Task',
                        points: [
                            'Build a functional robot (wired or wireless) that solves a basic problem or performs a useful task.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 9-13.',
                            'Individual or teams of up to 3 members.'
                        ]
                    },
                    {
                        title: 'Competition Format',
                        points: [
                            'Round 1 (Online): Submit a slide presentation and robot structure/model design. Top 10 teams will be selected.',
                            'Round 2 (Final): Finalists will present their project live physically (15 min presentation + 5 min Q&A).'
                        ]
                    },
                    {
                        title: 'Scoring',
                        points: [
                            'Innovation & Originality (25 Marks)',
                            'Problem Relevance (20 Marks)',
                            'Robot Structure & Design (15 Marks)',
                            'Technical Explanation (15 Marks)',
                            'Slide Presentation Quality (10 Marks)',
                            'Optional Video (5 Bonus Marks)'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'virtueverse',
        title: 'VirtueVerse E-Sports Rules',
        rules: [
            {
                subCompetitionName: 'Custom Games Competition',
                pdfUrl: '/pdfs/rr-virtueverse-esports.pdf',
                content: [
                    {
                        title: 'Eligibility',
                        points: [
                            'Open to all school students.',
                            'Teams must consist of 5 main players from the same school.',
                            'One optional substitute is allowed.',
                            'Only one team per school.'
                        ]
                    },
                    {
                        title: 'Team Registration',
                        points: [
                            'Register with a team name, full names, and in-game Riot IDs.',
                            'Registration must be completed by the deadline.',
                            'No team member changes without prior notice to the organizing committee.'
                        ]
                    },
                    {
                        title: 'Match Format',
                        points: [
                            'Game: Valorant (Online)',
                            'Game Mode: 5v5, Unrated.',
                            'Format: Best of 1 or Best of 3 depending on the stage.',
                            'Map Selection: Teams will participate in a map banning phase.',
                            'First team to win 13 rounds wins. Tie (12-12) leads to overtime.'
                        ]
                    },
                    {
                        title: 'Code of Conduct',
                        points: [
                            'Maintain respectful communication.',
                            'Cheating or hacking will lead to immediate disqualification.',
                            'Sportsmanship is mandatory.'
                        ]
                    },
                    {
                        title: 'Punctuality',
                        points: [
                            'Be online and ready 15 minutes before the scheduled match time.',
                            'Failure to show up within 10 minutes of the scheduled time results in a forfeit.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'zenthack',
        title: 'ZenThack Rules & Regulations',
        rules: [
            {
                subCompetitionName: 'Cyber Security and Ethical Hacking Quiz',
                pdfUrl: '/pdfs/rr-zenthack-quiz.pdf',
                content: [
                    {
                        title: 'Overview',
                        points: [
                            'A multi-stage quiz testing advanced cybersecurity concepts, ethical hacking techniques, and incident response strategies.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Individual competition only.',
                            'Open to Grades 6-13.'
                        ]
                    },
                    {
                        title: 'Competition Format',
                        points: [
                            'A 2-stage quiz competition.',
                            'Round 1 - Preliminary (Online): 20 MCQs | 7 Minutes | Real-time scoring.',
                            'Round 2 - Final (Online): 20 MCQs | Reduced time limit.'
                        ]
                    },
                    {
                        title: 'Disqualification Criteria',
                        points: [
                            'Use of AI or search engines.',
                            'Submitting multiple entries or copied work.',
                            'Disruptive or unethical behavior.'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Security Tool Designing Competition',
                pdfUrl: '/pdfs/rr-zenthack-tool.pdf',
                content: [
                    {
                        title: 'Overview',
                        points: [
                            'Conceptualize and develop innovative tools to combat real-world cyber threats.'
                        ]
                    },
                    {
                        title: 'Eligibility',
                        points: [
                            'Individual competition only.',
                            'Open to Grades 6-13.'
                        ]
                    },
                    {
                        title: 'Competition Format',
                        points: [
                            'A two-part scenario:',
                            '1. Cyber Defense Task: Implement secure coding and system-hardening measures.',
                            '2. Ethical Recovery Task: Analyze system logs, identify breach vectors, and restore data.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'Use only approved tools and languages (Python, C++, JavaScript, SQL, Wireshark, Nmap, etc.).',
                            'AI tools are strictly prohibited.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'cipher',
        title: 'CipherX Quiz Rules',
        rules: [
            {
                subCompetitionName: 'Quiz Competition',
                pdfUrl: '/pdfs/rr-cipherx-quiz.pdf',
                content: [
                    {
                        title: 'Overview',
                        points: [
                            "Tests students' knowledge in ICT, programming, and general knowledge.",
                            'The first round will be held online, with the top two teams qualifying for the physical final round.'
                        ]
                    },
                    {
                        title: 'Team Composition',
                        points: [
                            'Each school can send one team.',
                            'A maximum of 4 students per team.'
                        ]
                    },
                    {
                        title: 'Competition Format',
                        points: [
                            'Preliminary Round (Online): MCQs and short answer questions in Zoom breakout rooms.',
                            'Semifinal Round (Online): For the top 8 teams from the preliminary round.',
                            'Final Round (Physical): For the top 2 teams from the semifinal round, held at the main event.'
                        ]
                    },
                    {
                        title: 'Guidelines',
                        points: [
                            'All team members must have their cameras and microphones on during online rounds.',
                            'Any form of cheating will lead to immediate disqualification.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'questrix',
        title: 'Questrix Rules & Regulations',
        rules: [
            {
                subCompetitionName: 'Puzzle Challenges',
                pdfUrl: '/pdfs/rr-questrix-puzzle.pdf',
                content: [
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 12/13 can participate.',
                            'This is for teams of four, not individuals.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'The competition will be held physically.',
                            'The format is a crossword-style ICT puzzle.',
                            'There will be one round.',
                            'Questions will be based on G.C.E. A/L ICT syllabus and general tech knowledge.'
                        ]
                    },
                    {
                        title: 'Scoring',
                        points: [
                            'Marks awarded for each correct word.',
                            'Teams ranked based on correct answers and time taken.',
                            'In case of a tie, the earliest submission wins.'
                        ]
                    }
                ]
            },
            {
                subCompetitionName: 'Treasure Hunt',
                pdfUrl: '/pdfs/rr-questrix-treasurehunt.pdf',
                content: [
                    {
                        title: 'Eligibility',
                        points: [
                            'Students from Grade 9-13 can participate.',
                            'This is for teams of four, not individuals.'
                        ]
                    },
                    {
                        title: 'Instructions',
                        points: [
                            'The competition will be held physically.',
                            'Teams will be given a sequence of tech-related tasks and clues.',
                            'The first team to find the "treasure" location wins.',
                            'Tasks may include logic puzzles, QR codes, decoding, etc.'
                        ]
                    },
                    {
                        title: 'Scoring',
                        points: [
                            'The winning team is the one that completes all tasks and reaches the final location first.',
                            'Ranking is based on time taken and number of correctly completed clues.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: 'most-popular',
        title: 'Most Popular School ICT Society Rules',
        rules: [
            {
                subCompetitionName: 'Most Popular School ICT Society',
                pdfUrl: '/pdfs/rr-mpss.pdf',
                content: [
                    {
                        title: 'Eligibility',
                        points: [
                            'The competition is open to all school ICT societies across the island.'
                        ]
                    },
                    {
                        title: 'Registration Requirement',
                        points: [
                            'Only the top five positions of the society (President, Vice President, etc.) are eligible to register their school.'
                        ]
                    },
                    {
                        title: 'Voting',
                        points: [
                            'Posts for each registered school will be published on the official Josephian ICT Society WhatsApp channel.',
                            'Votes will be counted based on the number of red heart (❤️) reactions received by each post.',
                            'The voting will remain open for a specified period.'
                        ]
                    },
                    {
                        title: 'Winner Selection',
                        points: [
                            'The school whose post accumulates the highest number of red heart reactions by the deadline will be declared the winner.'
                        ]
                    },
                    {
                        title: 'Disclaimer',
                        points: [
                            'Any attempt to manipulate or artificially increase the number of reactions will result in disqualification.'
                        ]
                    }
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CompetitionPageClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/CompetitionPageClient.tsx
__turbopack_context__.s({
    "default": ()=>CompetitionPageClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$RulesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/RulesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$LeaderboardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/LeaderboardModal.tsx [app-client] (ecmascript)"); // Leaderboard Modal එක import කිරීම
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rrData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/rrData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SubCompetitionCard = (param)=>{
    let { name, description, onRulesClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subcomp-card flex flex-col border border-purple-800/40 bg-gray-900/40 p-6 sm:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-gray-900/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-bold text-purple-300 mb-4",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-sm sm:text-base text-gray-400 mb-6 flex-grow",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRulesClick,
                        className: "flex-1 px-4 py-2 text-sm bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "R & R"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompetitionPageClient.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 px-4 py-2 text-sm bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "Registration"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompetitionPageClient.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 px-4 py-2 text-sm bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "Submission"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompetitionPageClient.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CompetitionPageClient.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubCompetitionCard;
function CompetitionPageClient(param) {
    let { competition } = param;
    _s();
    const compRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isRulesModalOpen, setIsRulesModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Leaderboard Modal සඳහා state
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: ''
    });
    const alertRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const competitionRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompetitionPageClient.useMemo[competitionRules]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rrData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rrData"].find({
                "CompetitionPageClient.useMemo[competitionRules]": (r)=>r.slug === competition.slug
            }["CompetitionPageClient.useMemo[competitionRules]"]);
        }
    }["CompetitionPageClient.useMemo[competitionRules]"], [
        competition.slug
    ]);
    const showAlert = (message)=>{
        setAlertState({
            isOpen: true,
            message
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompetitionPageClient.useEffect": ()=>{
            if (alertState.isOpen) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(alertRef.current, {
                    y: 100,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                });
                const timer = setTimeout({
                    "CompetitionPageClient.useEffect.timer": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(alertRef.current, {
                            y: 100,
                            opacity: 0,
                            duration: 0.5,
                            ease: 'power3.in',
                            onComplete: {
                                "CompetitionPageClient.useEffect.timer": ()=>setAlertState({
                                        isOpen: false,
                                        message: ''
                                    })
                            }["CompetitionPageClient.useEffect.timer"]
                        });
                    }
                }["CompetitionPageClient.useEffect.timer"], 3000);
                return ({
                    "CompetitionPageClient.useEffect": ()=>clearTimeout(timer)
                })["CompetitionPageClient.useEffect"];
            }
        }
    }["CompetitionPageClient.useEffect"], [
        alertState
    ]);
    const handleOpenRules = (subCompetitionName)=>{
        if (competitionRules) {
            const subRules = competitionRules.rules.find((sr)=>sr.subCompetitionName === subCompetitionName);
            if (subRules && subRules.content) {
                setModalContent({
                    title: "".concat(competition.title, ": ").concat(subCompetitionName),
                    content: subRules.content,
                    pdfUrl: subRules.pdfUrl
                });
                setIsRulesModalOpen(true);
            } else {
                showAlert("Rules for this event are not yet available.");
            }
        } else {
            showAlert("Rules for this category are not yet available.");
        }
    };
    const handleCloseRulesModal = ()=>setIsRulesModalOpen(false);
    const handleOpenLeaderboard = ()=>setIsLeaderboardModalOpen(true);
    const handleCloseLeaderboard = ()=>setIsLeaderboardModalOpen(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CompetitionPageClient.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "CompetitionPageClient.useLayoutEffect.ctx": ()=>{
                // GSAP Context is kept for potential future animations and proper cleanup.
                }
            }["CompetitionPageClient.useLayoutEffect.ctx"], compRef);
            return ({
                "CompetitionPageClient.useLayoutEffect": ()=>ctx.revert()
            })["CompetitionPageClient.useLayoutEffect"];
        }
    }["CompetitionPageClient.useLayoutEffect"], []);
    const isMostPopularAward = competition.slug === 'most-popular';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: compRef,
                className: "w-full bg-black font-orbitron pt-32 pb-16 min-h-screen overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "comp-hero-logo text-center mb-16 relative flex justify-center items-center h-48",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent blur-3xl -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg h-36 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: competition.logoSrc,
                                        alt: "".concat(competition.title, " logo"),
                                        fill: true,
                                        style: {
                                            objectFit: "contain"
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        isMostPopularAward ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-lg text-gray-300 leading-relaxed mb-12",
                                    children: "This special award recognizes the ICT Society that garners the most support from the community."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-6 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOpenRules('Most Popular School ICT Society'),
                                            className: "px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg",
                                            "data-cursor-hover": true,
                                            children: "R & R"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleOpenLeaderboard,
                                            className: "px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 text-lg",
                                            "data-cursor-hover": true,
                                            children: "Live Leaderboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this) : competition.subCompetitions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: competition.subCompetitions.map((sub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubCompetitionCard, {
                                    name: sub.name,
                                    description: sub.description,
                                    onRulesClick: ()=>handleOpenRules(sub.name)
                                }, index, false, {
                                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-400 font-sans py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl mb-4",
                                children: "More details coming soon!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#categories",
                                className: "inline-block text-purple-400 border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-black transition-colors duration-300",
                                "data-cursor-hover": true,
                                children: "← Back to All Categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CompetitionPageClient.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            isRulesModalOpen && modalContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$RulesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isRulesModalOpen,
                onClose: handleCloseRulesModal,
                title: modalContent.title,
                content: modalContent.content,
                pdfUrl: modalContent.pdfUrl
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$LeaderboardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isLeaderboardModalOpen,
                onClose: handleCloseLeaderboard
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            alertState.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 left-1/2 -translate-x-1/2 z-[1000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: alertRef,
                    className: "bg-gray-900/80 backdrop-blur-md border border-purple-500 text-white font-sans text-center py-3 px-6 rounded-lg shadow-lg",
                    children: alertState.message
                }, void 0, false, {
                    fileName: "[project]/src/components/CompetitionPageClient.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CompetitionPageClient.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CompetitionPageClient, "iLEEJphimIKu7G2Eh36X0GIKLDE=");
_c1 = CompetitionPageClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubCompetitionCard");
__turbopack_context__.k.register(_c1, "CompetitionPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9d57a7f6._.js.map