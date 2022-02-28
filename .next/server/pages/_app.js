(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3677:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__HCNwd"
};


/***/ }),

/***/ 4215:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__aye0F",
	"header__label": "header_header__label__Ohkw3",
	"header__label__logo": "header_header__label__logo__53qHS",
	"header__tab": "header_header__tab__oTATF",
	"header__tab__list": "header_header__tab__list__MSUNw",
	"toggle_btn": "header_toggle_btn___CkOP",
	"hamburger": "header_hamburger__iQN9M"
};


/***/ }),

/***/ 5737:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "layout_layout__tZtl7"
};


/***/ }),

/***/ 128:
/***/ ((module) => {

// Exports
module.exports = {
	"tab__list": "listitem_tab__list__vXc23",
	"tab__list__item": "listitem_tab__list__item__z9XM_",
	"activePage": "listitem_activePage__M_yby",
	"inActivePage": "listitem_inActivePage__HxOC3"
};


/***/ }),

/***/ 86:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "sidebar_nav__As9bo",
	"nav__btn": "sidebar_nav__btn__NO2LL",
	"nav__hamburger__icon": "sidebar_nav__hamburger__icon__Qawf2"
};


/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/components/global/Meta.js


const Meta = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "Portfolio, NextJS, ThreeJS, SASS,SCSS, Portfolio NextJS, Beginner Portfolio, Website Portfolio, Webpage, Blue Royalty, James, James Romero"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "James Romero's Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "James Romero"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "Blue Royalty"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: "James Romero's Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:sit_name",
                content: "James Romero's Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: "https://ia.media-imdb.com/images/rock.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "James Romero - Portfolio"
            })
        ]
    }));
};
/* harmony default export */ const global_Meta = (Meta);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "@mui/icons-material/DarkMode"
const DarkMode_namespaceObject = require("@mui/icons-material/DarkMode");
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LightMode"
const LightMode_namespaceObject = require("@mui/icons-material/LightMode");
var LightMode_default = /*#__PURE__*/__webpack_require__.n(LightMode_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./src/styles/components/sidebar.module.scss
var sidebar_module = __webpack_require__(86);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: ./src/styles/components/listitem.module.scss
var listitem_module = __webpack_require__(128);
var listitem_module_default = /*#__PURE__*/__webpack_require__.n(listitem_module);
;// CONCATENATED MODULE: ./src/components/TabList.js



const LinkItem = ({ href , path , children , ...props })=>{
    const active = path === href;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        scroll: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: active ? (listitem_module_default()).activePage : (listitem_module_default()).inActivePage,
            ...props,
            children: children
        })
    }));
};
const TabList = ({ toggleSidebar , path  })=>{
    const openMenu = ()=>{
        if (toggleSidebar) {
            toggleSidebar(false);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (listitem_module_default()),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (listitem_module_default()).tab__list,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/projects",
                    path: path,
                    onClick: openMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: openMenu,
                        className: (listitem_module_default()).tab__list__item,
                        children: "PROJECTS"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/contact",
                    path: path,
                    onClick: openMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: openMenu,
                        className: (listitem_module_default()).tab__list__item,
                        children: "CONTACT"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    href: "/GithubRepo",
                    path: path,
                    onClick: openMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: openMenu,
                        className: (listitem_module_default()).tab__list__item,
                        children: "SOURCE CODE"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_TabList = (TabList);

;// CONCATENATED MODULE: ./src/components/global/Sidebar.js




const Sidebar = ({ toggleSidebar  })=>{
    const openMenu = ()=>{
        if (toggleSidebar) {
            toggleSidebar(false);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (sidebar_module_default()).nav,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_TabList, {
                toggleSidebar: toggleSidebar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (sidebar_module_default()).nav__btn,
                onClick: openMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    className: (sidebar_module_default()).nav__hamburger__icon
                })
            })
        ]
    }));
};
/* harmony default export */ const global_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./src/styles/components/header.module.scss
var header_module = __webpack_require__(4215);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/global/Header.js











//TODO : FIX HEADER TO MATCH PATH WITH THE STYLES
//TIP : Use export: to export colors from modules.scss
const Header = ({ router  })=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { setTheme , resolvedTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const { 0: toggleSidebar , 1: setToggleSidebar  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    if (!mounted) return null;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: '/',
                passHref: true,
                scroll: false,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (header_module_default()).header__label,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (header_module_default()).header__label__logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646059079/portfolio-res/Crown_g2kvb0.webp",
                                width: 30,
                                height: 30,
                                alt: "James Romero Logo, Website's Logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "JAMES ROMERO"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).header__tab,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).header__tab__list,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_TabList, {
                            path: router.asPath
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (header_module_default()).hamburger,
                        onClick: ()=>setToggleSidebar(!toggleSidebar)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            className: (header_module_default()).hamburger__icon,
                            style: {
                                fontSize: 21
                            }
                        })
                    }),
                    toggleSidebar && /*#__PURE__*/ jsx_runtime_.jsx(global_Sidebar, {
                        toggleSidebar: setToggleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (header_module_default()).toggle_btn,
                        onClick: ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        ,
                        children: resolvedTheme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((LightMode_default()), {
                            style: {
                                fontSize: 20
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((DarkMode_default()), {
                            style: {
                                fontSize: 20
                            }
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const global_Header = (Header);

// EXTERNAL MODULE: ./src/styles/components/footer.module.scss
var footer_module = __webpack_require__(3677);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/global/Footer.js


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            "\xa9 JAMES ROMERO | BLUE ROYALTY ",
            new Date().getFullYear(),
            ". All Rights Reserved"
        ]
    }));
};
/* harmony default export */ const global_Footer = (Footer);

// EXTERNAL MODULE: ./src/styles/components/layout.module.scss
var layout_module = __webpack_require__(5737);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/components/global/Layout.js





const Layout = ({ children , router  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).layout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(global_Meta, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(global_Header, {
                router: router
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(global_Footer, {})
        ]
    }));
};
/* harmony default export */ const global_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.js





function App({ Component , router , ...pageProps }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_namespaceObject.ThemeProvider, {
        defaultTheme: "system",
        children: /*#__PURE__*/ jsx_runtime_.jsx(global_Layout, {
            router: router,
            children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                ...pageProps,
                key: router.route
            })
        })
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675], () => (__webpack_exec__(3265)));
module.exports = __webpack_exports__;

})();