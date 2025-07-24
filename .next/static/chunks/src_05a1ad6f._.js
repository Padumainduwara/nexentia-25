(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/competitions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/data/competitions.ts
__turbopack_context__.s({
    "competitionsData": ()=>competitionsData
});
const competitionsData = [
    {
        slug: 'codinex',
        title: 'CODINEX!!',
        subtitle: 'Inter-School Coding Competition',
        logoSrc: '/logos/codinex.png',
        category: 'CODINEX',
        subCompetitions: [
            {
                name: 'Competitive Programming',
                description: 'Solve algorithmic challenges against the clock.'
            },
            {
                name: 'Hackathon',
                description: 'Build a creative solution for a real-world problem in 24 hours.'
            },
            {
                name: 'Web Development',
                description: 'Design and develop a fully functional modern website.'
            }
        ]
    },
    {
        slug: 'pixelynx',
        title: 'pixelynx',
        subtitle: 'Digital Art & Design Competition',
        logoSrc: '/logos/pixelynx.png',
        category: 'PIXELYNX',
        subCompetitions: [
            {
                name: 'Graphic Design',
                description: 'Create a stunning poster based on the given theme.'
            },
            {
                name: 'UI/UX Design',
                description: 'Design a user-friendly interface for a mobile application.'
            }
        ]
    },
    {
        slug: 'mechatron',
        title: 'MECHATRON',
        subtitle: 'Robotics & IoT Challenge',
        logoSrc: '/logos/mechatron.png',
        category: 'MECHATRON',
        subCompetitions: [
            {
                name: 'Line Following Robot',
                description: 'Build a robot that follows a black line on a white surface.'
            }
        ]
    },
    {
        slug: 'virtueverse',
        title: 'VIRTUEVERSE',
        subtitle: 'Inter-School E-Sports Arena',
        logoSrc: '/logos/virtueverse.png',
        category: 'VIRTUEVERSE',
        subCompetitions: [
            {
                name: 'Valorant Tournament',
                description: '5v5 tactical shooter competition.'
            }
        ]
    },
    {
        slug: 'zenhack',
        title: 'ZEN HACK',
        subtitle: 'Cyber Security & Ethical Hacking',
        logoSrc: '/logos/zenhack.png',
        category: 'ZENTHACK',
        subCompetitions: [
            {
                name: 'Capture The Flag (CTF)',
                description: 'Find hidden flags in a series of security challenges.'
            }
        ]
    },
    {
        slug: 'cipher',
        title: 'CIPHER',
        subtitle: 'Inter-School Tech Quiz Challenge',
        logoSrc: '/logos/cipher.png',
        category: 'CIPHERX',
        subCompetitions: []
    },
    {
        slug: 'questrix',
        title: 'QUESTRIX',
        subtitle: 'Inter-School Puzzle Challenge',
        logoSrc: '/logos/questrix.png',
        category: 'QUESTRIX',
        subCompetitions: []
    },
    {
        slug: 'most-popular',
        title: 'Most Popular',
        subtitle: 'Most Popular School ICT Society',
        logoSrc: '/logos/award.png',
        category: 'MOST POPULAR SOCIETY',
        subCompetitions: []
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/competitions/[slug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/app/competitions/[slug]/page.tsx
__turbopack_context__.s({
    "default": ()=>CompetitionPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$competitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/competitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Sub-competition card component (remains the same)
const SubCompetitionCard = (param)=>{
    let { name, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "subcomp-card border border-purple-800/40 bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-gray-900/60 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-purple-300 mb-4",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-gray-400 mb-6 flex-grow",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "R & R"
                    }, void 0, false, {
                        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "Registration"
                    }, void 0, false, {
                        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300",
                        "data-cursor-hover": true,
                        children: "Submission"
                    }, void 0, false, {
                        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubCompetitionCard;
function CompetitionPage(param) {
    let { params } = param;
    _s();
    const competition = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$competitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionsData"].find((c)=>c.slug === params.slug);
    const compRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CompetitionPage.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "CompetitionPage.useLayoutEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        delay: 0.2
                    });
                    tl.from(".comp-hero-logo", {
                        scale: 0.5,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                    }).from(".subcomp-card, .no-subcomp-content", {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out'
                    }, "-=0.7");
                }
            }["CompetitionPage.useLayoutEffect.ctx"], compRef);
            return ({
                "CompetitionPage.useLayoutEffect": ()=>ctx.revert()
            })["CompetitionPage.useLayoutEffect"];
        }
    }["CompetitionPage.useLayoutEffect"], []);
    if (!competition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center text-white",
            children: "Competition not found."
        }, void 0, false, {
            fileName: "[project]/src/app/competitions/[slug]/page.tsx",
            lineNumber: 44,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: compRef,
        className: "w-full bg-black font-orbitron pt-24 pb-16 min-h-screen overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "comp-hero-logo text-center mb-16 relative flex justify-center items-center h-48",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent blur-3xl -z-10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md h-32 relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: competition.logoSrc,
                                alt: "".concat(competition.title, " logo"),
                                layout: "fill",
                                objectFit: "contain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                competition.subCompetitions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: competition.subCompetitions.map((sub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubCompetitionCard, {
                            name: sub.name,
                            description: sub.description
                        }, index, false, {
                            fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-subcomp-content text-center text-gray-400 font-sans py-16",
                    children: competition.slug === 'most-popular' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center flex-col sm:flex-row gap-4 max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 px-4 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300",
                                "data-cursor-hover": true,
                                children: "R & R"
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                                lineNumber: 70,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 px-4 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300",
                                "data-cursor-hover": true,
                                children: "Live Leaderboard"
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                                lineNumber: 71,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl mb-4",
                                children: "More details coming soon!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Stay tuned for updates on sub-competition categories."
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                    lineNumber: 66,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#categories",
                        className: "inline-block text-purple-400 border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-black transition-colors duration-300",
                        "data-cursor-hover": true,
                        children: "← Back to All Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/competitions/[slug]/page.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/competitions/[slug]/page.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/competitions/[slug]/page.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(CompetitionPage, "36TM6Kw4RDQCMkvMdwOvVznlyMI=");
_c1 = CompetitionPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubCompetitionCard");
__turbopack_context__.k.register(_c1, "CompetitionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_05a1ad6f._.js.map