var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-GD2KIUKR.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "Canada Poast \u2014 Today's News",
  description: "Subscribe to Canada Poast. Free newsletter. Get today's news, plus one trending podcast, and exclusive subscriber-only insights",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/advertise-with-us.tsx
var advertise_with_us_exports = {};
__export(advertise_with_us_exports, {
  default: () => Index
});
var import_react4 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "altcha-widget",
    {
      challengeurl: "https://app.jeffamzn.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    },
    void 0,
    !1,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// public/img/social/linkedin.png
var linkedin_default = "/build/_assets/linkedin-34LPKGU3.png";

// public/img/social/x.png
var x_default = "/build/_assets/x-2OTC4MLH.png";

// public/img/social/instagram.png
var instagram_default = "/build/_assets/instagram-NEV5BMHS.png";

// public/img/social/info.png
var info_default = "/build/_assets/info-FQKLT5OI.png";

// public/img/ja7.png
var ja7_default = "/build/_assets/ja7-SN2RWQ7W.png";

// public/img/ja.png
var ja_default = "/build/_assets/ja-LEQTUTZL.png";

// app/routes/advertise-with-us.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ads-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Canada Poast Logo" }, void 0, !1, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Interested in advertising with Canada Poast?" }, void 0, !1, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Contact us for information on setting up a campaign that helps you grow your business!" }, void 0, !1, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "x", href: "https://x.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "ig", href: "https://instagram.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 35,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { method: "post", action: "https://app.canadapoast.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "Your Name *" }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "submit", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/advertise-with-us.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/advertise-with-us.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Instagram" }, void 0, !1, {
      fileName: "app/routes/advertise-with-us.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/advertise-with-us.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/advertise-with-us.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Index2
});
var import_react5 = require("@remix-run/react");

// public/img/social/youtube.png
var youtube_default = "/build/_assets/youtube-6G4FYXU3.png";

// app/routes/subscribe.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Canada Poast Logo" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "x", href: "https://x.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "ig", href: "https://instagram.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 33,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", action: "https://app.canadapoast.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", checked: !0, value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Instagram" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index3
});
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_node = require("@remix-run/node");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-I7ZOSWKE.png";

// app/routes/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let email = (await request.formData()).get("email");
  return console.log("New Poast Subscriber:", email), (0, import_node.json)({ success: !0 });
}
function Index3() {
  let [showModal, setShowModal] = (0, import_react6.useState)(!1), navigation = (0, import_react7.useNavigation)(), actionData = (0, import_react7.useActionData)();
  return (0, import_react6.useEffect)(() => {
    let isSubscribed = localStorage.getItem("thepoast_subscribed"), hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");
    if (!isSubscribed && !hasSeenThisSession) {
      let timer = setTimeout(() => {
        setShowModal(!0), sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []), (0, import_react6.useEffect)(() => {
    let handleEsc = (event) => {
      event.key === "Escape" && setShowModal(!1);
    };
    return window.addEventListener("keydown", handleEsc), () => window.removeEventListener("keydown", handleEsc);
  }, []), (0, import_react6.useEffect)(() => {
    actionData != null && actionData.success && (localStorage.setItem("thepoast_subscribed", "true"), setShowModal(!1));
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: [
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-overlay", onClick: () => setShowModal(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "logo", src: ja1_default, alt: "Canada Poast Logo" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Subscribe to Canada Poast's free newsletter" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Get today's news, plus one trending podcast, and exclusive subscriber-only insights" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", action: "https://app.canadapoast.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "submit", type: "submit", children: navigation.state === "submitting" ? "..." : "Subscribe" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", checked: !0, value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "dismiss-text", onClick: () => setShowModal(!1), children: "No thanks! I'm already subscribed" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Gotta minute?" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "That's all it takes to keep up with Canada" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        "Join 12,000+ people scrolling our ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/today", children: "feed-style email" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 46
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { className: "x", href: "https://x.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { className: "ig", href: "https://instagram.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/subscribe", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Canada Poast" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/info.tsx
var info_exports = {};
__export(info_exports, {
  default: () => Index4,
  links: () => links2
});
var import_react8 = require("@remix-run/react");

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// public/img/cs.jpg
var cs_default = "/build/_assets/cs-3THKTAXS.jpg";

// app/routes/info.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "moreinfo-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Canada Poast Logo" }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "x", href: "https://x.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "ig", href: "https://instagram.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 28,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 32,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 35,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 40,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "profile-outside", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "headerimg", src: cs_default, alt: "It's me (Chris Signore)" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-profile", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Chris Signore" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 50,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "social", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "li", href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 52,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "x", href: "https://x.com/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 56,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 55,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 51,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "subscribe", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Get the Canada Poast" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", action: "https://app.canadapoast.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 70,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 71,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 69,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", checked: !0, value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 74,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/info.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/info.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index5
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Gotta minute?" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "That's all it takes to keep up with Canada" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "Join 18,000+ people scrolling our ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "/today", children: "feed-style email" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 23,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "x", href: "https://x.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "ig", href: "https://instagram.com/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/canadapoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { to: "/subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Canada Poast" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "err", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "404 | This page could not be found." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-776IHDJE.js", imports: ["/build/_shared/chunk-AVNBQUPV.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NF3ZN2IC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-YHE65NAD.js", imports: ["/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-CHIJSXN5.js", "/build/_shared/chunk-5GA4UCIN.js", "/build/_shared/chunk-SZ5Q75MQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/advertise-with-us": { id: "routes/advertise-with-us", parentId: "root", path: "advertise-with-us", index: void 0, caseSensitive: void 0, module: "/build/routes/advertise-with-us-TPAKD6Q7.js", imports: ["/build/_shared/chunk-IYHKUAJ2.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-CHIJSXN5.js", "/build/_shared/chunk-SZ5Q75MQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3FHZFO4U.js", imports: ["/build/_shared/chunk-IYHKUAJ2.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-CHIJSXN5.js", "/build/_shared/chunk-5GA4UCIN.js", "/build/_shared/chunk-SZ5Q75MQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/info": { id: "routes/info", parentId: "root", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/info-Q4JTRSRO.js", imports: ["/build/_shared/chunk-IYHKUAJ2.js", "/build/_shared/chunk-5GA4UCIN.js", "/build/_shared/chunk-SZ5Q75MQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-STBED6IQ.js", imports: ["/build/_shared/chunk-IYHKUAJ2.js", "/build/_shared/chunk-CHIJSXN5.js", "/build/_shared/chunk-5GA4UCIN.js", "/build/_shared/chunk-SZ5Q75MQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1af17e35", hmr: void 0, url: "/build/manifest-1AF17E35.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/advertise-with-us": {
    id: "routes/advertise-with-us",
    parentId: "root",
    path: "advertise-with-us",
    index: void 0,
    caseSensitive: void 0,
    module: advertise_with_us_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/info": {
    id: "routes/info",
    parentId: "root",
    path: "info",
    index: void 0,
    caseSensitive: void 0,
    module: info_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
