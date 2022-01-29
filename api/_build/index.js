var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/gdavis/Project/mainSite/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_react2 = __toModule(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-77EWTQDF.css";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-OFS4BEQX.css";

// app/components/TopNav/index.tsx
init_react();
var import_react = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var TopNav = () => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [showOrHideText, setShowOrHideText] = (0, import_react.useState)("show");
  const handleOnClick = () => {
    setOpen(!open);
    setShowOrHideText(open ? "show" : "hide");
  };
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setOpen(!open);
      setShowOrHideText(open ? "show" : "hide");
    }
  };
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    role: "button",
    "aria-pressed": open,
    "aria-haspopup": "dialog",
    tabIndex: 0,
    className: `hamburgerMenu-nav-${showOrHideText}`,
    onClick: handleOnClick,
    onKeyDown: handleOnKeyDown
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    role: "img",
    "aria-labelledby": "title  desc",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("title", {
    id: "title"
  }, "Hamburger Menu"), /* @__PURE__ */ import_react.default.createElement("desc", {
    id: "desc"
  }, "Three lines stacked on top of each other with space between each"), /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), open ? /* @__PURE__ */ import_react.default.createElement("div", {
    id: "myModal",
    className: "modal"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "modal-content"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: handleOnClick,
    className: "close modal-button-close"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "hamburgerMenu-list-container"
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "/",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Home")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "about",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "skills",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Skills")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "contact",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Contact"))))) : "", /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "header-nav-hide",
    "data-primary-nav": true
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    "data-primary-list": true
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": true
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    style: ({ isActive }) => isActive ? activeStyle : void 0,
    "data-primary-nav-text": true,
    to: "/"
  }, "Home")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": true
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": true,
    to: "about",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": true
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": true,
    to: "skills",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Skills")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": true
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": true,
    to: "contact",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Contact")))));
};
var TopNav_default = TopNav;

// route-module:/Users/gdavis/Project/mainSite/app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    { rel: "stylesheet", href: shared_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(TopNav_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react2.Fragment, null, children);
}

// route-module:/Users/gdavis/Project/mainSite/app/routes/adminLoginZ/index.tsx
var adminLoginZ_exports = {};
__export(adminLoginZ_exports, {
  default: () => AdminLoginZ,
  links: () => links2,
  meta: () => meta
});
init_react();

// app/styles/adminloginz.css
var adminloginz_default = "/build/_assets/adminloginz-6UMIURDL.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/adminLoginZ/index.tsx
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: adminloginz_default
    }
  ];
};
var meta = () => {
  return {
    title: `Skills - Greg | FullStack Developer`,
    description: `Admin Login`
  };
};
function AdminLoginZ() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "underConstructionMsgContainer"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "glow"
  }, /* @__PURE__ */ React.createElement("p", null, "Login here")))));
}

// route-module:/Users/gdavis/Project/mainSite/app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => contact_default2,
  links: () => links3,
  loader: () => loader,
  meta: () => meta2,
  unstable_shouldReload: () => unstable_shouldReload
});
init_react();
var import_react4 = __toModule(require("react"));
var import_remix5 = __toModule(require_remix());

// app/sendEmail.tsx
init_react();
var nodemailer = require("nodemailer");
var { google: google2 } = require("googleapis");
var OAuth2 = google2.auth.OAuth2;
var GMAIL_EMAIL = process.env.GMAIL_EMAIL;
var GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
var GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
var GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
var GMAIL_REDIRECT_URL = process.env.GMAIL_REDIRECT_URL;
var oauth2Client = new OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URL);
oauth2Client.setCredentials({
  refresh_token: GMAIL_REFRESH_TOKEN
});
var accessToken = oauth2Client.getAccessToken();
async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL_EMAIL,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken
    }
  });
  transporter.verify((err, success) => {
    err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`);
  });
  let mailOptions = {
    from: data == null ? void 0 : data.email,
    to: GMAIL_EMAIL,
    subject: data == null ? void 0 : data.subject,
    text: `${data == null ? void 0 : data.message} 

 from: ${data == null ? void 0 : data.email} 

 name: ${data == null ? void 0 : data.name}`
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("Error Sending Email:", err);
    } else {
      console.log("email info:", info);
    }
    transporter.close();
  });
  return data;
}

// app/components/MyMap/index.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_api = __toModule(require("@react-google-maps/api"));
var import_remix4 = __toModule(require_remix());
var containerStyle = {
  width: "100%",
  height: "100vh"
};
var center = {
  lat: 40.7561,
  lng: -74.0035
};
var MyMap = (props) => {
  const { customOptions } = props;
  const data = (0, import_remix4.useLoaderData)();
  const {
    ENV: { GOOGLE_MAP_ID, GOOGLE_MAP_API_KEY }
  } = data;
  const { isLoaded } = (0, import_api.useJsApiLoader)({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY
  });
  const [map, setMap] = (0, import_react3.useState)(null);
  const onLoad = (0, import_react3.useCallback)(function callback(map2) {
    setMap(map2);
  }, []);
  const onUnmount = (0, import_react3.useCallback)(function callback(map2) {
    setMap(null);
  }, []);
  const mapOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
    mapId: GOOGLE_MAP_ID
  };
  const modifiedCustomOptions = __spreadProps(__spreadValues({}, customOptions), { mapId: GOOGLE_MAP_ID });
  const options = customOptions ? modifiedCustomOptions : mapOptions;
  return isLoaded ? /* @__PURE__ */ import_react3.default.createElement(import_api.GoogleMap, {
    mapContainerStyle: containerStyle,
    center,
    options,
    onLoad,
    onUnmount
  }, /* @__PURE__ */ import_react3.default.createElement(import_api.Marker, {
    animation: google.maps.Animation.DROP,
    position: center
  })) : /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "defaultMapImg",
    "aria-label": "gregory location"
  });
};
var MyMap_default = MyMap;

// app/components/SocialFooter/index.tsx
init_react();
var import_react_simple_icons = __toModule(require("@icons-pack/react-simple-icons"));
var SocialFooter = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "social-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "social-footer-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/gregdavisdeveloper/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react_simple_icons.Linkedin, null))), /* @__PURE__ */ React.createElement("div", {
    className: "social-footer-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/davisgreg1",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react_simple_icons.Github, null))), /* @__PURE__ */ React.createElement("div", {
    className: "social-footer-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/moneycaptainapp",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react_simple_icons.Facebook, null))));
};
var SocialFooter_default = SocialFooter;

// app/styles/contact.css
var contact_default = "/build/_assets/contact-PUIL625D.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/contact/index.tsx
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: contact_default
    }
  ];
};
var meta2 = () => {
  return {
    title: `Contact - Greg | FullStack Developer`,
    description: `Contact Greg`
  };
};
function loader() {
  return {
    ENV: {
      GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
    }
  };
}
var unstable_shouldReload = () => false;
var action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const errors = {};
  if (!name)
    errors.name = true;
  if (!email)
    errors.email = true;
  if (!subject)
    errors.subject = true;
  if (!message)
    errors.message = true;
  if (Object.keys(errors).length) {
    return (0, import_remix5.json)(errors, { status: 422 });
  }
  await sendEmail({ name, email, subject, message });
  return (0, import_remix5.redirect)("/contact");
};
var Contact = () => {
  const errors = (0, import_remix5.useActionData)();
  const transition = (0, import_remix5.useTransition)();
  const { state } = transition;
  const [isDisabled, setIsDisabled] = (0, import_react4.useState)(true);
  const [name, setName] = (0, import_react4.useState)("");
  const [email, setEmail] = (0, import_react4.useState)("");
  const [subject, setSubject] = (0, import_react4.useState)("");
  const [message, setMessage] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    if (name && email && subject && message) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, subject, message]);
  (0, import_react4.useEffect)(() => {
    if (transition.state === "submitting") {
      clearForm();
    }
  }, [transition]);
  const portfolioBackImgStyle = {
    backgroundColor: "#ecf0f3",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex"
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const handleOnInputChange = (e, inputName) => {
    const value = e.target.value;
    if (inputName === "name") {
      setName(value);
    }
    if (inputName === "email") {
      setEmail(value);
    }
    if (inputName === "subject") {
      setSubject(value);
    }
    if (inputName === "message") {
      setMessage(value);
    }
  };
  const text = !email || !subject || !message || !name ? "Complete the form" : transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Thank you!" : "Send message";
  const customOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react4.default.createElement("section", {
    id: "section-contactMe",
    className: "section-content section section-child ",
    style: portfolioBackImgStyle
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-container"
  }, /* @__PURE__ */ import_react4.default.createElement(import_remix5.Form, {
    method: "post",
    className: "form-element"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "contact-div"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "title"
  }, "Contact me"), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "fields"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-name"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "username",
    className: "user-input",
    name: "name",
    value: name,
    placeholder: name ? name : "Name",
    onChange: (e) => handleOnInputChange(e, "name")
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-email"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "email",
    name: "email",
    className: "user-input",
    value: email,
    placeholder: email ? email : "Email",
    onChange: (e) => handleOnInputChange(e, "email")
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-subject"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "username",
    name: "subject",
    className: "user-input",
    value: subject,
    placeholder: subject ? subject : "Subject",
    onChange: (e) => handleOnInputChange(e, "subject")
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ import_react4.default.createElement("textarea", {
    id: "message",
    className: "user-input",
    name: "message",
    rows: 3,
    value: message,
    placeholder: message ? message : "Email body",
    onChange: (e) => handleOnInputChange(e, "message")
  }))), /* @__PURE__ */ import_react4.default.createElement("button", {
    className: isDisabled ? "send-msg-btn-disabled" : "send-msg-btn",
    disabled: isDisabled,
    type: "submit"
  }, /* @__PURE__ */ import_react4.default.createElement("span", null, text))))), /* @__PURE__ */ import_react4.default.createElement(MyMap_default, {
    customOptions
  }))), /* @__PURE__ */ import_react4.default.createElement("footer", {
    className: "contact-footer-container"
  }, /* @__PURE__ */ import_react4.default.createElement(SocialFooter_default, null))));
};
var contact_default2 = Contact;

// route-module:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => skills_default2,
  links: () => links4,
  meta: () => meta3
});
init_react();

// app/components/CloudTagComp/index.tsx
init_react();
var import_react5 = __toModule(require("react"));
var import_react_icon_cloud = __toModule(require("react-icon-cloud"));
var import_react_responsive = __toModule(require("react-responsive"));
var import_icons = __toModule(require("simple-icons/icons"));
var CloudTagComp = (props) => {
  const { ssrID, skillsRoute } = props;
  const icons = [
    import_icons.siJavascript,
    import_icons.siTypescript,
    import_icons.siNextdotjs,
    import_icons.siNodedotjs,
    import_icons.siCss3,
    import_icons.siHtml5,
    import_icons.siReact,
    import_icons.siGit,
    import_icons.siExpress,
    import_icons.siPostgresql,
    import_icons.siAmazonaws,
    import_icons.siJest,
    import_icons.siVisualstudiocode,
    import_icons.siSequelize,
    import_icons.siJson,
    import_icons.siTrello,
    import_icons.siJquery,
    import_icons.siNpm,
    import_icons.siJira,
    import_icons.siRedis,
    import_icons.siMacos
  ];
  const [skillSelectedDescription, setSkillSelectedDescription] = (0, import_react5.useState)("Select Skill to see a description");
  const isDesktopOrLaptop = (0, import_react_responsive.useMediaQuery)({ minWidth: 1241 });
  const renderSkillDescription = (skill) => {
    switch (skill) {
      case "JavaScript":
        return ` Javascript is my primary language. I have experience with ES6,
        TypeScript, React, Redux, Node.js, Express, and many other
        technologies.
        `;
      case "Jest":
        return `Jest is a testing framework for JavaScript. It is used to
        test React components. I use it daily.`;
      case "Visual Studio Code":
        return `Visual Studio Code is a code editor that I enjoy using daily.`;
      case "JSON":
        return `JSON is a data format that I use daily.`;
      case "Trello":
        return `Trello is a project management tool that I use daily.`;
      case "JQuery":
        return `JQuery is a JavaScript library that I use daily.`;
      case "npm":
        return `NPM is a package manager for JavaScript. I use it daily.`;
      case "Jira":
        return `Jira is a project management tool that I use daily.`;
      case "Redis":
        return `Redis is a key-value store that I use daily.`;
      case "macOS":
        return `MacOS is a platform that I use daily.`;
      case "React":
        return `React is a JavaScript library that I use daily.`;
      case "CSS3":
        return `CSS3 is a style sheet language that I use daily.`;
      case "HTML5":
        return `HTML5 is a markup language that I use daily.`;
      case "Git":
        return `Git is a version control system that I use daily.`;
      case "Express":
        return `Express is a web framework that I use daily.`;
      case "PostgreSQL":
        return `PostgreSQL is a database that I use daily.`;
      case "Amazon AWS":
        return `Amazon AWS is a cloud platform that I use daily.`;
      case "TypeScript":
        return `TypeScript is a JavaScript library that I use daily.`;
      case "Node.js":
        return `Node.js is a JavaScript runtime that I use daily.`;
      case "Sequelize":
        return `Sequelize is a database ORM that I use daily.`;
      case "Next.js":
        return `Next.js is a web framework that I use daily.`;
      case "jQuery":
        return `jQuery is a JavaScript library that I don't use daily but am skilled in.`;
    }
  };
  const makeProps = () => ({
    root: {
      top: 0,
      left: 0,
      right: 0,
      height: "200vh",
      position: "absolute"
    },
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
        backgroundImage: "radial-gradient( circle, rgb(11, 34, 238) 0%, rgb(15, 120, 181) 100%, rgb(17, 216, 251) 50% )",
        borderRadius: "777px"
      }
    },
    options: {
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: false,
      tooltip: isDesktopOrLaptop && !skillsRoute ? "div" : "native",
      tooltipDelay: 0,
      wheelZoom: false,
      radiusX: 0.7,
      radiusY: 0.7,
      radiusZ: 0.7,
      maxSpeed: 0.06,
      tooltipClass: "icon-title",
      freezeActive: skillsRoute ? true : false
    }
  });
  const makeIcons = () => icons.map((icon) => {
    const description = renderSkillDescription(icon.title);
    return (0, import_react_icon_cloud.renderSimpleIcon)({
      icon,
      minContrastRatio: 3,
      bgHex: "#fff",
      size: 42,
      fallbackHex: "#fff",
      aProps: {
        href: void 0,
        target: void 0,
        rel: void 0,
        onClick: (e) => {
          e.preventDefault();
          setSkillSelectedDescription(description);
        }
      }
    });
  });
  const constructedProps = makeProps();
  const cloudIcons = makeIcons();
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "cloudTagComp-container"
  }, skillsRoute ? /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "skills-description"
  }, skillSelectedDescription) : "", /* @__PURE__ */ import_react5.default.createElement(import_react_icon_cloud.Cloud, {
    containerProps: constructedProps.containerProps,
    options: constructedProps.options,
    id: ssrID
  }, cloudIcons));
};
var CloudTagComp_default = CloudTagComp;

// route-module:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var import_icons2 = __toModule(require("simple-icons/icons"));

// app/styles/skills.css
var skills_default = "/build/_assets/skills-O6W6G4RO.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var meta3 = () => {
  return {
    title: `Skills - Greg | FullStack Developer`,
    description: `Greg's Skills`
  };
};
var links4 = () => {
  return [
    {
      rel: "stylesheet",
      href: skills_default
    }
  ];
};
var Skills = () => {
  const icons = [
    import_icons2.siJavascript,
    import_icons2.siTypescript,
    import_icons2.siNextdotjs,
    import_icons2.siNodedotjs,
    import_icons2.siCss3,
    import_icons2.siHtml5,
    import_icons2.siReact,
    import_icons2.siGit,
    import_icons2.siExpress,
    import_icons2.siPostgresql,
    import_icons2.siAmazonaws,
    import_icons2.siJest,
    import_icons2.siVisualstudiocode,
    import_icons2.siSequelize,
    import_icons2.siJson,
    import_icons2.siTrello,
    import_icons2.siJquery,
    import_icons2.siNpm,
    import_icons2.siJira,
    import_icons2.siRedis,
    import_icons2.siMacos
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "content",
    id: "cloud-container"
  }, /* @__PURE__ */ React.createElement(CloudTagComp_default, {
    ssrID: "skillsSSRCloud",
    skillsRoute: true
  }));
};
var skills_default2 = Skills;

// route-module:/Users/gdavis/Project/mainSite/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2,
  links: () => links5,
  meta: () => meta4
});
init_react();
var import_react_typist = __toModule(require("react-typist"));

// app/styles/about.css
var about_default = "/build/_assets/about-TWCU74E7.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/about/index.tsx
var import_chart = __toModule(require("chart.js"));
var import_react_chartjs_2 = __toModule(require("react-chartjs-2"));
import_chart.Chart.register(import_chart.CategoryScale, import_chart.LinearScale, import_chart.BarElement, import_chart.Title, import_chart.Tooltip, import_chart.Legend);
var links5 = () => {
  return [
    {
      rel: "stylesheet",
      href: about_default
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
    }
  ];
};
var meta4 = () => {
  return {
    title: `About - Greg | FullStack Developer`,
    description: `About Greg`
  };
};
var About = () => {
  const cursorOptions = {
    show: false,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: 1e3
  };
  const labels = ["Front End", "Back End", "React JS", "Design"];
  const data = {
    labels,
    datasets: [
      {
        label: "Rating",
        data: [87, 79, 88, 60, 100],
        borderColor: "rgba(15, 120, 181)",
        backgroundColor: "rgba(15, 120, 181,0.2)"
      }
    ]
  };
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: "About Me"
      }
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skill-bar-container"
  }, /* @__PURE__ */ React.createElement(import_react_chartjs_2.Bar, {
    options,
    data,
    datasetIdKey: "abks"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text-container"
  }, /* @__PURE__ */ React.createElement(import_react_typist.default, {
    cursor: cursorOptions
  }, "I'm a software engineer with a passion for building products that are:", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
    ms: 500
  }), " accessible,", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
    ms: 500
  }), " performant,", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
    ms: 500
  }), " intuitive,", " ", " and", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
    ms: 500
  }), " user-friendly."))));
};
var about_default2 = About;

// route-module:/Users/gdavis/Project/mainSite/app/routes/blogs.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default
});
init_react();
var import_remix6 = __toModule(require_remix());
var Blogs = () => {
  return /* @__PURE__ */ React.createElement(import_remix6.Outlet, null);
};
var blogs_default = Blogs;

// route-module:/Users/gdavis/Project/mainSite/app/routes/blogs/index.tsx
var blogs_exports2 = {};
__export(blogs_exports2, {
  default: () => Blogs2,
  links: () => links6,
  meta: () => meta5
});
init_react();

// app/styles/blogs.css
var blogs_default2 = "/build/_assets/blogs-UMM4KU6O.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/blogs/index.tsx
var links6 = () => {
  return [
    {
      rel: "stylesheet",
      href: blogs_default2
    },
    {
      rel: "stylesheet",
      type: "text/css",
      charSet: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    },
    {
      rel: "preload",
      href: "https://drive.google.com/uc?export=view&id=1i9NVQ9SOEFbzVsIo0u51qcZcVTwFPCHX",
      as: "image"
    },
    {
      rel: "preload",
      href: "https://drive.google.com/uc?export=view&id=1mF-p0RvL9B0k-DDdFgPmWduSCfCk_MOb",
      as: "image"
    },
    {
      rel: "preload",
      href: "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-b.png",
      as: "image"
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
    }
  ];
};
var meta5 = () => {
  return {
    title: `Blogs - Greg | FullStack Developer`,
    description: `Greg's Blogs`
  };
};
function Blogs2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "underConstructionMsgContainer"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "glow"
  }, /* @__PURE__ */ React.createElement("p", null, "Blogs")))));
}

// route-module:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => IndexRoute,
  links: () => links7,
  loader: () => loader2,
  meta: () => meta6,
  unstable_shouldReload: () => unstable_shouldReload2
});
init_react();
var import_react10 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
var import_react_router_dom = __toModule(require("react-router-dom"));
var import_react_responsive3 = __toModule(require("react-responsive"));
var import_react_intersection_observer = __toModule(require("react-intersection-observer"));

// app/styles/index.css
var styles_default = "/build/_assets/index-WM42AEYI.css";

// route-module:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var import_react_tsparticles = __toModule(require("react-tsparticles"));

// app/particlesConfig.tsx
init_react();
var particlesConfig = {
  background: {
    color: {
      value: ""
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1
  },
  backgroundMask: {
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: []
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onDiv: {
        ids: [],
        enable: false,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      bubble: {
        distance: 150,
        duration: 2,
        opacity: 0.8,
        size: 7
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        quantity: 1
      }
    }
  },
  particles: {
    collisions: {
      enable: true,
      mode: "bounce"
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 1,
        sync: true
      }
    },
    line_linked: {
      color: {
        value: "#eee"
      },
      enable: true,
      distance: 100,
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 100
    },
    opacity: {
      animation: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false
      },
      random: {
        enable: false
      },
      value: 0.5
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: "clockwise",
      path: false,
      random: false,
      value: 0
    },
    shadow: {
      blur: 5,
      color: {
        value: "#000000"
      },
      enable: true,
      offset: {
        x: 3,
        y: 3
      }
    },
    shape: {
      options: {
        polygon: {
          nb_sides: 5
        },
        stroke: {
          width: 0,
          color: "#ff0000"
        }
      },
      type: "circle"
    },
    size: {
      animation: {
        enable: false,
        size_min: 0.1,
        speed: 40,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 1
      },
      value: 3
    },
    stroke: {
      width: 0,
      color: {
        value: "#000000",
        animation: {
          enable: false,
          speed: 1,
          sync: true
        }
      }
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    }
  },
  pauseOnBlur: true
};
var particlesConfig_default = particlesConfig;

// app/components/MyFlipBook/index.tsx
init_react();
var import_react9 = __toModule(require("react"));
var import_react_pageflip = __toModule(require("react-pageflip"));
var import_react_responsive2 = __toModule(require("react-responsive"));

// app/components/Page/index.tsx
init_react();
var import_react6 = __toModule(require("react"));
var Page = import_react6.default.forwardRef((props, ref) => {
  const { number, pageHeader, isSlides, children } = props;
  const strToNumber = parseInt(number);
  const isOddPage = strToNumber % 2 !== 0;
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `${isSlides ? "bookPage-slides bookPage" : "bookPage"} ${isOddPage ? "leftPage" : "rightPage"}`,
    ref
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "page-content-container"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", null, pageHeader), /* @__PURE__ */ import_react6.default.createElement("p", null, children), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: `page-content-page-number ${isOddPage ? "page-number-flexStart" : "page-number-flexEnd"}`
  }, strToNumber - 1 === 0 || strToNumber === 6 ? "" : `${strToNumber - 1}.`)));
});
var Page_default = Page;

// app/components/PageCover/index.tsx
init_react();
var import_react7 = __toModule(require("react"));

// app/images/home/myHorse.png
var myHorse_default = "/build/_assets/myHorse-MILBP5MW.png";

// app/components/PageCover/index.tsx
var PageCover = import_react7.default.forwardRef((props, ref) => {
  const { number, backCover, frontCover, children } = props;
  const myHorseImgStyle = {
    backgroundImage: `url(${myHorse_default})`,
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex"
  };
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `${backCover ? "back-cover" : ""} ${frontCover ? "front-cover" : ""} page-cover page`,
    style: myHorseImgStyle,
    ref,
    "data-density": "hard"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `${backCover ? "shimmer" : ""} ${frontCover ? "shimmer" : ""} page-content`
  }, /* @__PURE__ */ import_react7.default.createElement("h2", null, props.children)));
});
var PageCover_default = PageCover;

// app/components/MySlides/index.tsx
init_react();
var import_react8 = __toModule(require("react"));
var import_react_slick = __toModule(require("react-slick"));
var MySlides = (props) => {
  const { slides } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "mobile-slides-container"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "section-main-heading"
  }, "WORK"), /* @__PURE__ */ import_react8.default.createElement(import_react_slick.default, __spreadValues({}, settings), slides.map((slide) => slide)));
};
var MySlides_default = MySlides;

// app/components/MyFlipBook/index.tsx
var MyFlipBook = (props) => {
  (0, import_react9.useEffect)(() => {
    import("@lottiefiles/lottie-player");
  });
  const isDesktopOrLaptop = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1241 });
  const isTabletVal = (0, import_react_responsive2.useMediaQuery)({ minWidth: 720, maxWidth: 1240 });
  const isMobileVal = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 719 });
  const [isMobile, setIsMobile] = (0, import_react9.useState)(isMobileVal);
  const [isTablet, setIsTablet] = (0, import_react9.useState)(isTabletVal);
  const [isDesktop, setIsDesktop] = (0, import_react9.useState)(isDesktopOrLaptop);
  (0, import_react9.useEffect)(() => {
    setIsMobile(isMobileVal);
    setIsTablet(isTabletVal);
    setIsDesktop(isDesktopOrLaptop);
  });
  const { inView = false } = props;
  const [page, setPage] = (0, import_react9.useState)(0);
  const pageFlip = (0, import_react9.useRef)(null);
  const lottieRef = (0, import_react9.useRef)(null);
  const shouldRenderFlipBook = isTablet || isDesktop;
  const flipBookStyle = {
    width: isTablet ? `350px` : `500px`,
    height: "733px"
  };
  const onPage = (e) => setPage(e.data);
  const slides = [
    /* @__PURE__ */ import_react9.default.createElement(Page_default, {
      isSlides: true,
      key: "1",
      number: "1"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-container"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-logo"
    }, /* @__PURE__ */ import_react9.default.createElement("img", {
      src: "data:image/png;base64,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",
      alt: "pursuit",
      width: "150px"
    })), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "shimmer-fancy-letter fancy-letter"
    }, "\u{1D4DE}"), "nce upon a time, I mentored a group of prospective students interested in learning web fundamentals at a wonderful school called Pursuit."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I mentored them in pair-programming, debugging, whiteboarding, Node.js and how to use shell terminals."), /* @__PURE__ */ import_react9.default.createElement("p", null, "Ultimately, they were able to build a command line game!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "They went on to add these skills to their toolboxes as they became successful web developers."))),
    /* @__PURE__ */ import_react9.default.createElement(Page_default, {
      isSlides: true,
      key: "2",
      number: "2"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-container"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-logo"
    }, /* @__PURE__ */ import_react9.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      version: "1.1",
      id: "Cognizant_Logo",
      x: "0px",
      y: "0px",
      width: "auto",
      height: "auto",
      viewBox: "0 0 820 189.56",
      enableBackground: "new 0 0 820 189.56",
      xmlSpace: "preserve"
    }, /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#0033A1",
      d: "M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749  L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019  c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638  c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019  c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454  c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899  c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133  c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906  c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9  C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163  c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z   M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15  V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091  v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716  c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586  c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10  C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675  L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64  c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325  c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z   M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335  C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849  c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967  c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475  c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z   M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599  s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04  c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247  c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333  c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512  c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549  c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104  c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154  c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
    }))), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "shimmer-fancy-letter fancy-letter"
    }, "\u{1D598}"), "oon after Pursuit, I joined Cognizant as a Software Engineer."), /* @__PURE__ */ import_react9.default.createElement("p", null, "At Cognizant I am responsible for building and maintaining web applications for one of the company's clients."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I'm able to use many different technologies and frameworks to build a robust web application."), /* @__PURE__ */ import_react9.default.createElement("p", null, "On a daily basis I use React.js, Next.js, CSS3, HTML 5, JavaScript ES6, Node.js, Express.js, TypeScript, Jest, Cypress, Oracle ATG Business Control Center, and many more!"))),
    /* @__PURE__ */ import_react9.default.createElement(Page_default, {
      isSlides: true,
      key: "3",
      number: "3"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-logo"
    }, /* @__PURE__ */ import_react9.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "175",
      height: "68",
      viewBox: "0 0 238 29"
    }, /* @__PURE__ */ import_react9.default.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#FFFFFE",
      d: "M103.5 3.842C106.56.745 110.913.356 112.9.356c5.406 0 9.05 2.436 8.894 6.172h15.707l1.534-2.673h10.357l-1.559 2.714h3.573l-.428.746c2.067-1.228 4.132-1.797 6.477-1.734 5.355.143 7.945 4.541 5.701 10.69-.098.27-.2.537-.305.8l11.06-8.056h-7.646l4.92-8.568h22.762l-3.506 6.108c1.616-.68 2.843-.915 4.591-.915 5.839 0 6.983 4.498 6.745 7.01l3.496-6.072h8.346c5.695-1.11 6.915 3.5 6.98 3.717 2.738-3.141 6.25-4.853 9.993-4.655 2.855.153 9.527 1.942 3.766 14.078-1.824 3.842-6.007 8.737-12.55 8.37-4.6-.26-6.424-3.48-6.071-6.54l-3.354 5.854-19.096-.005.739-1.283c-2.04 1.372-4.819 2.156-7.41 1.968-4.32-.314-5.425-2.496-5.991-4.417l-2.148 3.732h-22.802l1.001-1.73c-2.246 1.64-4.87 2.477-7.811 2.315-3.054-.168-5.913-1.659-6.26-5.417l-2.776 4.832h-5.06c-3.622 0-4.867-3.345-5.069-4.003-2.679 4.145-7.575 4.611-9.6 4.611-6.168 0-7.613-3.276-7.797-3.72l-1.788 3.104H0V.453h105.446l-1.946 3.39z"
    }), /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#0A0B09",
      d: "M235.602 3.778v-.674h.455c.234 0 .478.045.478.319 0 .335-.254.355-.536.355h-.397zm0 .274h.383l.58.953h.37l-.624-.968c.32-.03.569-.207.569-.593 0-.437-.253-.623-.771-.623h-.828v2.184h.321v-.953zm-1.131-.147c0-.898.664-1.572 1.543-1.572.845 0 1.525.674 1.525 1.572 0 .913-.68 1.583-1.525 1.583-.879 0-1.543-.67-1.543-1.583zm1.543 1.902c1.027 0 1.911-.802 1.911-1.902 0-1.084-.884-1.885-1.911-1.885-1.05 0-1.93.8-1.93 1.885 0 1.1.88 1.902 1.93 1.902z"
    }), /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#D52B1E",
      d: "M230.517 7.072c4.686.25 5.55 4.066 3.883 8.795-.317.9-.664 1.736-1.035 2.515h-9.584c-.603 1.512-.858 2.95-.096 3.1.818.161 1.668-.691 2.567-2.074h6.591c-2.86 5.271-6.68 7.477-10.98 7.248-5.11-.274-5.487-4.247-3.82-8.976 2.328-6.607 7.073-10.897 12.474-10.608zm-2.676 8.722c.805-1.684 1.14-2.858.128-3.042-.958-.175-2.075 1.107-3.166 3.042h3.038zM216.656 8.015c-3.162-.772-5.24 1.22-5.24 1.22l.692-1.224h-6.005l-10.335 17.953h6.598l6.21-10.811c.435-.766 1.027-1.646 1.913-1.457.79.169 1.025.894.765 1.38l-6.25 10.893h6.55l7.497-13.09c1.034-1.9-.667-4.443-2.395-4.864M193.006 16.15c-1.606 3.106-2.702 4.654-4.054 4.388-.984-.193-.616-1.594.353-3.47 1.354-2.62 2.807-4.527 4.017-4.316 1.132.197.653 1.523-.316 3.398zm2.435-9.078c-5.4-.289-10.472 4-12.8 10.608-1.667 4.729-.963 8.702 4.146 8.976 5.162.275 10.104-2.955 12.864-10.789 1.667-4.73.476-8.545-4.21-8.795z"
    }), /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#D52B1E",
      d: "M187.662 8.519l3.81-6.639h-19.456l-3.274 5.7h9.573l-16.45 11.984-3.704 6.4h19.488l3.259-5.665h-9.148l15.902-11.78M155.16 16.075c-1.605 3.097-2.702 4.64-4.053 4.375-.985-.193-.617-1.59.352-3.46 1.354-2.612 2.806-4.514 4.016-4.304 1.133.197.653 1.519-.315 3.389zm2.435-9.053c-5.401-.289-10.473 3.988-12.8 10.577-1.666 4.716-.962 8.678 4.147 8.952 5.162.275 10.103-2.946 12.863-10.758 1.667-4.716.475-8.521-4.21-8.771zM142.393 13.159h3.588l2.953-5.157h-3.577l1.559-2.713h-7.05L131.42 20c-.77 1.408-.698 2.986.425 4.41.8 1.036 1.642 1.553 3.158 1.553H139l2.771-4.825h-3.017c-.232 0-.495.038-.593-.181-.05-.135-.08-.277-.019-.403l4.251-7.396M130.303 8.002l-6.708 11.927c-.548.986-1.116 1.266-1.986 1.095-1.086-.213-.632-1.044-.318-1.612l6.61-11.41h-6.573s-7.474 13.004-7.47 13.01c-1.332 2.443.417 4.89 4.745 5.43 2.461.307 7.622.012 10.053-4.15l.013-.01 8.176-14.28h-6.542M111.83 9.954l-2.844 4.959h-3.463l3.116-5.435c.41-.72 1.205-1.357 2.454-1.237 1.046.1 1.384.635.736 1.713zm2.776-8.064c-2.867-.358-8.959 0-11.63 5.082L92.068 25.954h7.109l3.042-5.3h3.457l-3.045 5.3h7.055l10.049-17.435c1.672-3.073.062-5.98-5.13-6.629z"
    }), /* @__PURE__ */ import_react9.default.createElement("path", {
      fill: "#F37100",
      d: "M101.957 1.887L88.13 25.952h.817l13.823-24.065h-.812zm-5 0L83.134 25.952h1.689L98.65 1.887h-1.693zm-3.017 0h-2.87L77.24 25.952h2.866l4.985-8.65 8.85-15.415zm-9.859 0L70.248 25.952h4.634L88.728 1.887h-4.647zm-8.975 0L61.277 25.952h7.281L82.393 1.887h-7.287zm-11.046 0L50.232 25.952h9.635L73.702 1.887H64.06zm-12.849 0l-13.84 24.065h11.705l13.83-24.065H51.21zm-49.822 0v24.065h35.044L50.257 1.887H1.389z"
    })))), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "shimmer-fancy-letter fancy-letter"
    }, "\u{1D4DE}"), "ne project I'm really excited about is AutoZone."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I've been a member of the AutoZone Dev team since 2018!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "We migrated this amazing e-commerce site from an older stack to a new blazing fast modernized stack."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use an agile scrum methodology to get work done efficiently. "), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use many technologies here as the giant e-commerce site serves millions of people a year, generates billions in revenue and supports 6,767 stores!")),
    /* @__PURE__ */ import_react9.default.createElement(Page_default, {
      isSlides: true,
      key: "4",
      number: "4"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-container"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-logo"
    }, /* @__PURE__ */ import_react9.default.createElement("img", {
      src: "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-w.png",
      alt: "money captain labs",
      width: 175
    })), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
      className: "shimmer-fancy-letter fancy-letter"
    }, "\u{1D578}"), "oneycaptain is a family affair!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "My sister (who's also a dev) and I started this company because we feel confident we can use tech to help battle financial illiteracy."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use React Native, Express.js, Postgres, Git, Trello, GraphQL and other technologies in our work flow."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We are currently working on HypePerks! HypePerks is designed for children to earn incentives for doing chores or just achieving goals set up!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "With our help, you can be the Captain of your Money Ship!"))),
    /* @__PURE__ */ import_react9.default.createElement(Page_default, {
      isSlides: true,
      key: "5",
      number: "5"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-container"
    }, /* @__PURE__ */ import_react9.default.createElement("div", {
      className: "data-logo"
    }, /* @__PURE__ */ import_react9.default.createElement("lottie-player", {
      autoplay: true,
      loop: true,
      mode: "normal",
      id: "firstLottie",
      ref: lottieRef,
      speed: "1",
      src: "https://assets1.lottiefiles.com/packages/lf20_ymyikn6l.json",
      style: { width: "320px", height: "300px" }
    })), /* @__PURE__ */ import_react9.default.createElement("p", {
      className: "back-cover-first-text"
    }, /* @__PURE__ */ import_react9.default.createElement("p", {
      className: "shimmer-fancy-letter fancy-letter"
    }, "\u{1D4E3}"), /* @__PURE__ */ import_react9.default.createElement("p", null, "his story doesn't end here.")), /* @__PURE__ */ import_react9.default.createElement("p", null, "I'm available to consult about your prospective project/idea."), /* @__PURE__ */ import_react9.default.createElement("p", {
      className: ""
    }, "Drop me a line!")))
  ];
  return shouldRenderFlipBook ? /* @__PURE__ */ import_react9.default.createElement(import_react_pageflip.default, {
    width: isDesktop ? 500 : 350,
    height: 733,
    style: flipBookStyle,
    size: "fixed",
    minWidth: 300,
    maxWidth: 1e3,
    minHeight: 400,
    maxHeight: 1533,
    maxShadowOpacity: 0.7,
    showCover: true,
    mobileScrollSupport: true,
    className: "demo-book",
    startPage: 1,
    drawShadow: true,
    flippingTime: 1e3,
    usePortrait: false,
    startZIndex: 0,
    autoSize: false,
    clickEventForward: false,
    useMouseEvents: true,
    swipeDistance: 0,
    showPageCorners: false,
    disableFlipByClick: false,
    ref: pageFlip,
    onFlip: onPage
  }, /* @__PURE__ */ import_react9.default.createElement(PageCover_default, {
    number: "0",
    frontCover: true
  }, "Book Of Jobs"), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    pageHeader: "List Of Projects",
    number: "1"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, "Pursuit"), /* @__PURE__ */ import_react9.default.createElement("span", null, "Page 1")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, "Cognizant"), /* @__PURE__ */ import_react9.default.createElement("span", null, "Page 2")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, "AutoZone"), /* @__PURE__ */ import_react9.default.createElement("span", null, "Page 3")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, "MoneyCaptain Labs"), /* @__PURE__ */ import_react9.default.createElement("span", null, "Page 4"))), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    number: "2"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: "data:image/png;base64,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",
    alt: "pursuit"
  })), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4DE}"), "nce upon a time, I mentored a group of prospective students interested in learning web fundamentals at a wonderful school called Pursuit."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I mentored them in pair-programming, debugging, whiteboarding, Node.js and how to use shell terminals."), /* @__PURE__ */ import_react9.default.createElement("p", null, "Ultimately, they were able to build a command line game!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "They went on to add these skills to their toolboxes as they became successful web developers."))), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    number: "3"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ import_react9.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Cognizant_Logo",
    x: "0px",
    y: "0px",
    width: "auto",
    height: "auto",
    viewBox: "0 0 820 189.56",
    enableBackground: "new 0 0 820 189.56",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#0033A1",
    d: "M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749  L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019  c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638  c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019  c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454  c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899  c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133  c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906  c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9  C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163  c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z   M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15  V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091  v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716  c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586  c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10  C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675  L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64  c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325  c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z   M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335  C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849  c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967  c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475  c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z   M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599  s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04  c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247  c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333  c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512  c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549  c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104  c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154  c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
  }))), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D598}"), "oon after Pursuit, I joined Cognizant as a Software Engineer."), /* @__PURE__ */ import_react9.default.createElement("p", null, "At Cognizant I am responsible for building and maintaining web applications for one of the company's clients."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I'm able to use many different technologies and frameworks to build a robust web application."), /* @__PURE__ */ import_react9.default.createElement("p", null, "On a daily basis I use React.js, Next.js, CSS3, HTML 5, JavaScript ES6, Node.js, Express.js, TypeScript, Jest, Cypress, Oracle ATG Business Control Center, and many more!"))), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    number: "4"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ import_react9.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "300",
    height: "68",
    viewBox: "0 0 238 29"
  }, /* @__PURE__ */ import_react9.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#FFFFFE",
    d: "M103.5 3.842C106.56.745 110.913.356 112.9.356c5.406 0 9.05 2.436 8.894 6.172h15.707l1.534-2.673h10.357l-1.559 2.714h3.573l-.428.746c2.067-1.228 4.132-1.797 6.477-1.734 5.355.143 7.945 4.541 5.701 10.69-.098.27-.2.537-.305.8l11.06-8.056h-7.646l4.92-8.568h22.762l-3.506 6.108c1.616-.68 2.843-.915 4.591-.915 5.839 0 6.983 4.498 6.745 7.01l3.496-6.072h8.346c5.695-1.11 6.915 3.5 6.98 3.717 2.738-3.141 6.25-4.853 9.993-4.655 2.855.153 9.527 1.942 3.766 14.078-1.824 3.842-6.007 8.737-12.55 8.37-4.6-.26-6.424-3.48-6.071-6.54l-3.354 5.854-19.096-.005.739-1.283c-2.04 1.372-4.819 2.156-7.41 1.968-4.32-.314-5.425-2.496-5.991-4.417l-2.148 3.732h-22.802l1.001-1.73c-2.246 1.64-4.87 2.477-7.811 2.315-3.054-.168-5.913-1.659-6.26-5.417l-2.776 4.832h-5.06c-3.622 0-4.867-3.345-5.069-4.003-2.679 4.145-7.575 4.611-9.6 4.611-6.168 0-7.613-3.276-7.797-3.72l-1.788 3.104H0V.453h105.446l-1.946 3.39z"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#0A0B09",
    d: "M235.602 3.778v-.674h.455c.234 0 .478.045.478.319 0 .335-.254.355-.536.355h-.397zm0 .274h.383l.58.953h.37l-.624-.968c.32-.03.569-.207.569-.593 0-.437-.253-.623-.771-.623h-.828v2.184h.321v-.953zm-1.131-.147c0-.898.664-1.572 1.543-1.572.845 0 1.525.674 1.525 1.572 0 .913-.68 1.583-1.525 1.583-.879 0-1.543-.67-1.543-1.583zm1.543 1.902c1.027 0 1.911-.802 1.911-1.902 0-1.084-.884-1.885-1.911-1.885-1.05 0-1.93.8-1.93 1.885 0 1.1.88 1.902 1.93 1.902z"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#D52B1E",
    d: "M230.517 7.072c4.686.25 5.55 4.066 3.883 8.795-.317.9-.664 1.736-1.035 2.515h-9.584c-.603 1.512-.858 2.95-.096 3.1.818.161 1.668-.691 2.567-2.074h6.591c-2.86 5.271-6.68 7.477-10.98 7.248-5.11-.274-5.487-4.247-3.82-8.976 2.328-6.607 7.073-10.897 12.474-10.608zm-2.676 8.722c.805-1.684 1.14-2.858.128-3.042-.958-.175-2.075 1.107-3.166 3.042h3.038zM216.656 8.015c-3.162-.772-5.24 1.22-5.24 1.22l.692-1.224h-6.005l-10.335 17.953h6.598l6.21-10.811c.435-.766 1.027-1.646 1.913-1.457.79.169 1.025.894.765 1.38l-6.25 10.893h6.55l7.497-13.09c1.034-1.9-.667-4.443-2.395-4.864M193.006 16.15c-1.606 3.106-2.702 4.654-4.054 4.388-.984-.193-.616-1.594.353-3.47 1.354-2.62 2.807-4.527 4.017-4.316 1.132.197.653 1.523-.316 3.398zm2.435-9.078c-5.4-.289-10.472 4-12.8 10.608-1.667 4.729-.963 8.702 4.146 8.976 5.162.275 10.104-2.955 12.864-10.789 1.667-4.73.476-8.545-4.21-8.795z"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#D52B1E",
    d: "M187.662 8.519l3.81-6.639h-19.456l-3.274 5.7h9.573l-16.45 11.984-3.704 6.4h19.488l3.259-5.665h-9.148l15.902-11.78M155.16 16.075c-1.605 3.097-2.702 4.64-4.053 4.375-.985-.193-.617-1.59.352-3.46 1.354-2.612 2.806-4.514 4.016-4.304 1.133.197.653 1.519-.315 3.389zm2.435-9.053c-5.401-.289-10.473 3.988-12.8 10.577-1.666 4.716-.962 8.678 4.147 8.952 5.162.275 10.103-2.946 12.863-10.758 1.667-4.716.475-8.521-4.21-8.771zM142.393 13.159h3.588l2.953-5.157h-3.577l1.559-2.713h-7.05L131.42 20c-.77 1.408-.698 2.986.425 4.41.8 1.036 1.642 1.553 3.158 1.553H139l2.771-4.825h-3.017c-.232 0-.495.038-.593-.181-.05-.135-.08-.277-.019-.403l4.251-7.396M130.303 8.002l-6.708 11.927c-.548.986-1.116 1.266-1.986 1.095-1.086-.213-.632-1.044-.318-1.612l6.61-11.41h-6.573s-7.474 13.004-7.47 13.01c-1.332 2.443.417 4.89 4.745 5.43 2.461.307 7.622.012 10.053-4.15l.013-.01 8.176-14.28h-6.542M111.83 9.954l-2.844 4.959h-3.463l3.116-5.435c.41-.72 1.205-1.357 2.454-1.237 1.046.1 1.384.635.736 1.713zm2.776-8.064c-2.867-.358-8.959 0-11.63 5.082L92.068 25.954h7.109l3.042-5.3h3.457l-3.045 5.3h7.055l10.049-17.435c1.672-3.073.062-5.98-5.13-6.629z"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    fill: "#F37100",
    d: "M101.957 1.887L88.13 25.952h.817l13.823-24.065h-.812zm-5 0L83.134 25.952h1.689L98.65 1.887h-1.693zm-3.017 0h-2.87L77.24 25.952h2.866l4.985-8.65 8.85-15.415zm-9.859 0L70.248 25.952h4.634L88.728 1.887h-4.647zm-8.975 0L61.277 25.952h7.281L82.393 1.887h-7.287zm-11.046 0L50.232 25.952h9.635L73.702 1.887H64.06zm-12.849 0l-13.84 24.065h11.705l13.83-24.065H51.21zm-49.822 0v24.065h35.044L50.257 1.887H1.389z"
  })))), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4DE}"), "ne project I'm really excited about is AutoZone."), /* @__PURE__ */ import_react9.default.createElement("p", null, "I've been a member of the AutoZone Dev team since 2018!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "We migrated this amazing e-commerce site from an older stack to a new blazing fast modernized stack."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use an agile scrum methodology to get work done efficiently.", " "), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use many technologies here as the giant e-commerce site serves millions of people a year, generates billions in revenue and supports 6,767 stores!"))), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    number: "5"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-b.png",
    alt: "money captain labs",
    width: 250
  })), /* @__PURE__ */ import_react9.default.createElement("p", null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D578}"), "oneycaptain is a family affair!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "My sister (who's also a dev) and I started this company because we feel confident we can use tech to help battle financial illiteracy."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We use React Native, Express.js, Postgres, Git, Trello, GraphQL and other technologies in our work flow."), /* @__PURE__ */ import_react9.default.createElement("p", null, "We are currently working on HypePerks! HypePerks is designed for children to earn incentives for doing chores or just achieving goals set up!"), /* @__PURE__ */ import_react9.default.createElement("p", null, "With our help, you can be the Captain of your Money Ship!"))), /* @__PURE__ */ import_react9.default.createElement(Page_default, {
    number: "6"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ import_react9.default.createElement("lottie-player", {
    autoplay: true,
    loop: true,
    mode: "normal",
    id: "firstLottie",
    ref: lottieRef,
    speed: "1",
    src: "https://assets1.lottiefiles.com/packages/lf20_ymyikn6l.json",
    style: { width: "320px", height: "300px" }
  })), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "back-cover-first-text"
  }, /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4E3}"), /* @__PURE__ */ import_react9.default.createElement("p", null, "his story doesn't end here.")), /* @__PURE__ */ import_react9.default.createElement("p", null, "I'm available to consult about your prospective project/idea."), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: ""
  }, "Drop me a line!"))), /* @__PURE__ */ import_react9.default.createElement(PageCover_default, {
    backCover: true,
    number: "7"
  })) : /* @__PURE__ */ import_react9.default.createElement(MySlides_default, {
    slides
  });
};
var MyFlipBook_default = MyFlipBook;

// route-module:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var import_icons3 = __toModule(require("simple-icons/icons"));
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const errors = {};
  if (!name)
    errors.name = true;
  if (!email)
    errors.email = true;
  if (!subject)
    errors.subject = true;
  if (!message)
    errors.message = true;
  if (Object.keys(errors).length) {
    return (0, import_remix7.json)(errors, { status: 422 });
  }
  await sendEmail({ name, email, subject, message });
  return (0, import_remix7.redirect)("/");
};
var links7 = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "stylesheet",
      type: "text/css",
      charSet: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    }
  ];
};
var meta6 = () => {
  return {
    title: `Home - Greg | FullStack Developer`,
    description: "Welcome to my site"
  };
};
function loader2() {
  return {
    ENV: {
      GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
    }
  };
}
var unstable_shouldReload2 = () => false;
function IndexRoute() {
  const icons = [
    import_icons3.siJavascript,
    import_icons3.siTypescript,
    import_icons3.siNextdotjs,
    import_icons3.siNodedotjs,
    import_icons3.siCss3,
    import_icons3.siHtml5,
    import_icons3.siReact,
    import_icons3.siGit,
    import_icons3.siExpress,
    import_icons3.siPostgresql,
    import_icons3.siAmazonaws,
    import_icons3.siJest,
    import_icons3.siVisualstudiocode,
    import_icons3.siSequelize,
    import_icons3.siJson,
    import_icons3.siTrello,
    import_icons3.siJquery,
    import_icons3.siNpm,
    import_icons3.siJira,
    import_icons3.siRedis,
    import_icons3.siMacos
  ];
  let navigate = (0, import_react_router_dom.useNavigate)();
  const errors = (0, import_remix7.useActionData)();
  const transition = (0, import_remix7.useTransition)();
  const { state } = transition;
  const isDesktopOrLaptop = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1241 });
  const isTabletVal = (0, import_react_responsive3.useMediaQuery)({ minWidth: 720, maxWidth: 1240 });
  const isMobileVal = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 719 });
  const [isMobile, setIsMobile] = (0, import_react10.useState)(isMobileVal);
  const [isTablet, setIsTablet] = (0, import_react10.useState)(isTabletVal);
  const [isDesktop, setIsDesktop] = (0, import_react10.useState)(isDesktopOrLaptop);
  const [isDisabled, setIsDisabled] = (0, import_react10.useState)(true);
  const [name, setName] = (0, import_react10.useState)("");
  const [email, setEmail] = (0, import_react10.useState)("");
  const [subject, setSubject] = (0, import_react10.useState)("");
  const [message, setMessage] = (0, import_react10.useState)("");
  const keyLog = {};
  const handleKeyboard = ({ type, key, repeat, metaKey }) => {
    if (repeat)
      return;
    if (type === "keydown") {
      keyLog[key] = true;
      if (keyLog.s && key === "u")
        navigate("/adminloginz", { replace: true });
    }
    if (type === "keyup")
      delete keyLog[key];
  };
  import_react10.default.useEffect(() => {
    const events = ["keydown", "keyup"];
    events.forEach((name2) => document.addEventListener(name2, handleKeyboard));
    return () => events.forEach((name2) => document.removeEventListener(name2, handleKeyboard));
  });
  (0, import_react10.useEffect)(() => {
    if (transition.state === "submitting") {
      clearForm();
    }
  }, [transition]);
  (0, import_react10.useEffect)(() => {
    setIsMobile(isMobileVal);
    setIsTablet(isTabletVal);
    setIsDesktop(isDesktopOrLaptop);
  });
  (0, import_react10.useEffect)(() => {
    if (name && email && subject && message) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, subject, message]);
  const { ref, inView } = (0, import_react_intersection_observer.useInView)({
    threshold: 1
  });
  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const portfolioBackImgStyle = {
    backgroundColor: "#ecf0f3",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex"
  };
  const customOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false
  };
  const handleOnInputChange = (e, inputName) => {
    const value = e.target.value;
    if (inputName === "name") {
      setName(value);
    }
    if (inputName === "email") {
      setEmail(value);
    }
    if (inputName === "subject") {
      setSubject(value);
    }
    if (inputName === "message") {
      setMessage(value);
    }
  };
  const text = !email || !subject || !message || !name ? "Complete the form" : transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Thank you!" : "Send message";
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ import_react10.default.createElement("section", {
    id: "section-home",
    className: "section-content section section-child"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "heading-subtexts-container"
  }, /* @__PURE__ */ import_react10.default.createElement("h1", {
    className: "heading-h1-container"
  }, /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "heading-text"
  }, "Hi,"), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "heading-text"
  }, "I'm Greg,"), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "heading-h1-lastItem heading-text"
  }, "Web Developer")), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "headings-paragraph-container"
  }, /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "Software Engineer"), /* @__PURE__ */ import_react10.default.createElement("span", {
    className: "headings-pipe"
  }, "|"), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "FullStack Developer"), /* @__PURE__ */ import_react10.default.createElement("span", {
    className: "headings-pipe"
  }, "|"), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "Dad"))), /* @__PURE__ */ import_react10.default.createElement(import_react_tsparticles.default, {
    id: "tsparticles",
    options: particlesConfig_default
  }), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "scroll-down scroll-down-left"
  }, /* @__PURE__ */ import_react10.default.createElement("span", null, "scroll down"), /* @__PURE__ */ import_react10.default.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fal",
    "data-icon": "arrow-down",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
  }, /* @__PURE__ */ import_react10.default.createElement("path", {
    fill: "currentColor",
    d: "M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z",
    className: ""
  }))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "scroll-down"
  }, /* @__PURE__ */ import_react10.default.createElement("span", null, "scroll down"), /* @__PURE__ */ import_react10.default.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fal",
    "data-icon": "arrow-down",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
  }, /* @__PURE__ */ import_react10.default.createElement("path", {
    fill: "currentColor",
    d: "M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z",
    className: ""
  })))), /* @__PURE__ */ import_react10.default.createElement("section", {
    ref,
    style: isMobile ? { display: "flex" } : portfolioBackImgStyle,
    className: "section-child",
    id: "section-portfolio"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "section-big-word"
  }, "WORK"), /* @__PURE__ */ import_react10.default.createElement(MyFlipBook_default, {
    inView
  })), /* @__PURE__ */ import_react10.default.createElement("section", {
    className: "section-child",
    id: "section-skills"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "section-big-word section-bigWord-zIndex"
  }, "Skills"), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "mobile-slides-container"
  }, /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "section-main-heading"
  }, "Skills")), /* @__PURE__ */ import_react10.default.createElement(CloudTagComp_default, {
    ssrID: "homeSSRCloud"
  }), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "scroll-down scroll-down-skills scroll-down-left"
  }, /* @__PURE__ */ import_react10.default.createElement("span", null, "Made it"), /* @__PURE__ */ import_react10.default.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fal",
    "data-icon": "arrow-down",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
  }, /* @__PURE__ */ import_react10.default.createElement("path", {
    fill: "currentColor",
    d: "M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z",
    className: ""
  }))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "scroll-down scroll-down-skills"
  }, /* @__PURE__ */ import_react10.default.createElement("span", null, "Made it"), /* @__PURE__ */ import_react10.default.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fal",
    "data-icon": "arrow-down",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
  }, /* @__PURE__ */ import_react10.default.createElement("path", {
    fill: "currentColor",
    d: "M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z",
    className: ""
  })))), /* @__PURE__ */ import_react10.default.createElement("section", {
    id: "section-contactMe",
    className: "section-content section section-child ",
    style: portfolioBackImgStyle
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "section-big-word-contact"
  }, "Contact"), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "form-container"
  }, /* @__PURE__ */ import_react10.default.createElement(import_remix7.Form, {
    method: "post",
    className: "form-element"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "contact-div"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "title"
  }, "Contact me"), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "fields"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "form-name"
  }, /* @__PURE__ */ import_react10.default.createElement("input", {
    type: "username",
    className: "user-input",
    name: "name",
    value: name,
    placeholder: name ? name : "Name",
    onChange: (e) => handleOnInputChange(e, "name")
  })), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "form-email"
  }, /* @__PURE__ */ import_react10.default.createElement("input", {
    type: "email",
    name: "email",
    className: "user-input",
    value: email,
    placeholder: email ? email : "Email",
    onChange: (e) => handleOnInputChange(e, "email")
  })), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "form-subject"
  }, /* @__PURE__ */ import_react10.default.createElement("input", {
    type: "username",
    name: "subject",
    className: "user-input",
    value: subject,
    placeholder: subject ? subject : "Subject",
    onChange: (e) => handleOnInputChange(e, "subject")
  })), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ import_react10.default.createElement("textarea", {
    id: "message",
    className: "user-input",
    name: "message",
    rows: 3,
    value: message,
    placeholder: message ? message : "Email body",
    onChange: (e) => handleOnInputChange(e, "message")
  }))), /* @__PURE__ */ import_react10.default.createElement("button", {
    className: isDisabled ? "send-msg-btn-disabled" : "send-msg-btn",
    disabled: isDisabled,
    type: "submit"
  }, /* @__PURE__ */ import_react10.default.createElement("span", null, text))))), /* @__PURE__ */ import_react10.default.createElement(MyMap_default, {
    customOptions
  }))), /* @__PURE__ */ import_react10.default.createElement("footer", null, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "footer-container"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "footer-content"
  }, "Made with ", /* @__PURE__ */ import_react10.default.createElement("span", null, "\u2764\uFE0F"), " in New York"))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/adminLoginZ/index": {
    id: "routes/adminLoginZ/index",
    parentId: "root",
    path: "adminLoginZ",
    index: true,
    caseSensitive: void 0,
    module: adminLoginZ_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/skills/index": {
    id: "routes/skills/index",
    parentId: "root",
    path: "skills",
    index: true,
    caseSensitive: void 0,
    module: skills_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blogs": {
    id: "routes/blogs",
    parentId: "root",
    path: "blogs",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "routes/blogs",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blogs_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvcm9vdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvVG9wTmF2L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2dkYXZpcy9Qcm9qZWN0L21haW5TaXRlL2FwcC9yb3V0ZXMvYWRtaW5Mb2dpblovaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICIuLi8uLi9hcHAvc2VuZEVtYWlsLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9NeU1hcC9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvU29jaWFsRm9vdGVyL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2dkYXZpcy9Qcm9qZWN0L21haW5TaXRlL2FwcC9yb3V0ZXMvc2tpbGxzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9DbG91ZFRhZ0NvbXAvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9hYm91dC9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvcm91dGVzL2Jsb2dzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2dkYXZpcy9Qcm9qZWN0L21haW5TaXRlL2FwcC9yb3V0ZXMvYmxvZ3MvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL3BhcnRpY2xlc0NvbmZpZy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTXlGbGlwQm9vay9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvUGFnZS9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvUGFnZUNvdmVyL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9NeVNsaWRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvcm91dGVzL2FkbWluTG9naW5aL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9za2lsbHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZ2RhdmlzL1Byb2plY3QvbWFpblNpdGUvYXBwL3JvdXRlcy9ibG9ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2dkYXZpcy9Qcm9qZWN0L21haW5TaXRlL2FwcC9yb3V0ZXMvYmxvZ3MvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9nZGF2aXMvUHJvamVjdC9tYWluU2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW5Mb2dpblovaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbkxvZ2luWi9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFkbWluTG9naW5aXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9za2lsbHMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9za2lsbHMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJza2lsbHNcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ3NcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ3NcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgZ2xvYmFsU3R5bGVTaGVldCBmcm9tICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHNoYXJlZFN0eWxlcyBmcm9tICcuL3N0eWxlcy9zaGFyZWQuY3NzJ1xuaW1wb3J0IFRvcE5hdiBmcm9tICcuL2NvbXBvbmVudHMvVG9wTmF2J1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvYXBwI2xpbmtzXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlU2hlZXRcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHNoYXJlZFN0eWxlcyB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJywgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6XG4gICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDAmZGlzcGxheT1zd2FwJ1xuICAgIH0sXG4gIF1cbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2RlZmF1bHQtZXhwb3J0XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjcm91dGUtZmlsZW5hbWVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxUb3BOYXYgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSAoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPSdFcnJvciEnPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXksIGRldmVsb3BlciwgeW91IHNob3VsZCByZXBsYWNlIHRoaXMgd2l0aCB3aGF0IHlvdSB3YW50IHlvdXJcbiAgICAgICAgICAgIHVzZXJzIHRvIHNlZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSAoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgbGV0IG1lc3NhZ2VcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApXG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gIClcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQgKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQgKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIDxGcmFnbWVudD57Y2hpbGRyZW59PC9GcmFnbWVudD5cbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZW1peCdcblxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dPckhpZGVUZXh0LCBzZXRTaG93T3JIaWRlVGV4dF0gPSB1c2VTdGF0ZSgnc2hvdycpXG5cbiAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKVxuICAgIHNldFNob3dPckhpZGVUZXh0KG9wZW4gPyAnc2hvdycgOiAnaGlkZScpXG4gIH1cblxuICBjb25zdCBoYW5kbGVPbktleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykge1xuICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgIHNldFNob3dPckhpZGVUZXh0KG9wZW4gPyAnc2hvdycgOiAnaGlkZScpXG4gICAgfVxuICB9XG5cbiAgbGV0IGFjdGl2ZVN0eWxlID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAnNHB4J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPSdidXR0b24nXG4gICAgICAgIGFyaWEtcHJlc3NlZD17b3Blbn1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD0nZGlhbG9nJ1xuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyTWVudS1uYXYtJHtzaG93T3JIaWRlVGV4dH1gfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICBvbktleURvd249e2hhbmRsZU9uS2V5RG93bn1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHJvbGU9J2ltZydcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3RpdGxlICBkZXNjJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYnXG4gICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgID5cbiAgICAgICAgICA8dGl0bGUgaWQ9J3RpdGxlJz5IYW1idXJnZXIgTWVudTwvdGl0bGU+XG4gICAgICAgICAgPGRlc2MgaWQ9J2Rlc2MnPlxuICAgICAgICAgICAgVGhyZWUgbGluZXMgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlciB3aXRoIHNwYWNlIGJldHdlZW4gZWFjaFxuICAgICAgICAgIDwvZGVzYz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgIGQ9J000IDZoMTZNNCAxMmgxNk00IDE4aDE2J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPGRpdiBpZD0nbXlNb2RhbCcgY2xhc3NOYW1lPSdtb2RhbCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3NlIG1vZGFsLWJ1dHRvbi1jbG9zZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYnXG4gICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMidcbiAgICAgICAgICAgICAgICAgIGQ9J002IDE4TDE4IDZNNiA2bDEyIDEyJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdoYW1idXJnZXJNZW51LWxpc3QtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0naGFtYnVyZ2VyTWVudS1saXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoYW1idXJnZXJNZW51LWxpc3QtaXRlbS10ZXh0J1xuICAgICAgICAgICAgICAgICAgdG89eycvJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydIb21lJ31cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2hhbWJ1cmdlck1lbnUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGFtYnVyZ2VyTWVudS1saXN0LWl0ZW0tdGV4dCdcbiAgICAgICAgICAgICAgICAgIHRvPXsnYWJvdXQnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7J0Fib3V0J31cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2hhbWJ1cmdlck1lbnUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGFtYnVyZ2VyTWVudS1saXN0LWl0ZW0tdGV4dCdcbiAgICAgICAgICAgICAgICAgIHRvPXsnc2tpbGxzJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydTa2lsbHMnfVxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9J2hhbWJ1cmdlck1lbnUtbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGFtYnVyZ2VyTWVudS1saXN0LWl0ZW0tdGV4dCdcbiAgICAgICAgICAgICAgICAgIHRvPXsnYmxvZ3MnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7J0Jsb2dzJ31cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdoYW1idXJnZXJNZW51LWxpc3QtaXRlbSc+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hhbWJ1cmdlck1lbnUtbGlzdC1pdGVtLXRleHQnXG4gICAgICAgICAgICAgICAgICB0bz17J2NvbnRhY3QnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7J0NvbnRhY3QnfVxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgJydcbiAgICAgICl9XG4gICAgICA8bmF2IGNsYXNzTmFtZT0naGVhZGVyLW5hdi1oaWRlJyBkYXRhLXByaW1hcnktbmF2PlxuICAgICAgICA8dWwgZGF0YS1wcmltYXJ5LWxpc3Q+XG4gICAgICAgICAgPGxpIGRhdGEtcHJpbWFyeS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBzdHlsZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgICBkYXRhLXByaW1hcnktbmF2LXRleHRcbiAgICAgICAgICAgICAgdG89eycvJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydIb21lJ31cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBkYXRhLXByaW1hcnktbGlzdC1pdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgZGF0YS1wcmltYXJ5LW5hdi10ZXh0XG4gICAgICAgICAgICAgIHRvPXsnYWJvdXQnfVxuICAgICAgICAgICAgICBzdHlsZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0Fib3V0J31cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBkYXRhLXByaW1hcnktbGlzdC1pdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgZGF0YS1wcmltYXJ5LW5hdi10ZXh0XG4gICAgICAgICAgICAgIHRvPXsnc2tpbGxzJ31cbiAgICAgICAgICAgICAgc3R5bGU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydTa2lsbHMnfVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgey8qIDxsaSBkYXRhLXByaW1hcnktbGlzdC1pdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgZGF0YS1wcmltYXJ5LW5hdi10ZXh0XG4gICAgICAgICAgICAgIHRvPXsnYmxvZ3MnfVxuICAgICAgICAgICAgICBzdHlsZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0Jsb2dzJ31cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8bGkgZGF0YS1wcmltYXJ5LWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGRhdGEtcHJpbWFyeS1uYXYtdGV4dFxuICAgICAgICAgICAgICB0bz17J2NvbnRhY3QnfVxuICAgICAgICAgICAgICBzdHlsZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0NvbnRhY3QnfVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BOYXZcbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvYWRtaW5sb2dpbnouY3NzJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNcbiAgICB9XG4gIF1cbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBgU2tpbGxzIC0gR3JlZyB8IEZ1bGxTdGFjayBEZXZlbG9wZXJgLFxuICAgIGRlc2NyaXB0aW9uOiBgQWRtaW4gTG9naW5gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5Mb2dpblogKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5kZXJDb25zdHJ1Y3Rpb25Nc2dDb250YWluZXInPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2dsb3cnPlxuICAgICAgICAgICAgPHA+TG9naW4gaGVyZTwvcD5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlZGlyZWN0LFxuICBMaW5rc0Z1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIEFjdGlvbkZ1bmN0aW9uLFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxuICBqc29uLFxuICBGb3JtXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSAnfi9zZW5kRW1haWwnXG5pbXBvcnQgTXlNYXAgZnJvbSAnfi9jb21wb25lbnRzL015TWFwJ1xuaW1wb3J0IFNvY2lhbEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL1NvY2lhbEZvb3RlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9jb250YWN0LmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogc3R5bGVzXG4gICAgfVxuICBdXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYENvbnRhY3QgLSBHcmVnIHwgRnVsbFN0YWNrIERldmVsb3BlcmAsXG4gICAgZGVzY3JpcHRpb246IGBDb250YWN0IEdyZWdgXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlciAoKSB7XG4gIHJldHVybiB7XG4gICAgRU5WOiB7XG4gICAgICBHT09HTEVfTUFQX0lEOiBwcm9jZXNzLmVudi5HT09HTEVfTUFQX0lELFxuICAgICAgR09PR0xFX01BUF9BUElfS0VZOiBwcm9jZXNzLmVudi5HT09HTEVfTUFQX0FQSV9LRVlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX3Nob3VsZFJlbG9hZCA9ICgpID0+IGZhbHNlXG5cbnR5cGUgRm9ybUVycm9yVHlwZSA9IHtcbiAgbmFtZT86IGJvb2xlYW5cbiAgZW1haWw/OiBib29sZWFuXG4gIHN1YmplY3Q/OiBib29sZWFuXG4gIG1lc3NhZ2U/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpXG4gIGNvbnN0IHN1YmplY3QgPSBmb3JtRGF0YS5nZXQoJ3N1YmplY3QnKVxuICBjb25zdCBtZXNzYWdlID0gZm9ybURhdGEuZ2V0KCdtZXNzYWdlJylcblxuICBjb25zdCBlcnJvcnM6IEZvcm1FcnJvclR5cGUgPSB7fVxuICBpZiAoIW5hbWUpIGVycm9ycy5uYW1lID0gdHJ1ZVxuICBpZiAoIWVtYWlsKSBlcnJvcnMuZW1haWwgPSB0cnVlXG4gIGlmICghc3ViamVjdCkgZXJyb3JzLnN1YmplY3QgPSB0cnVlXG4gIGlmICghbWVzc2FnZSkgZXJyb3JzLm1lc3NhZ2UgPSB0cnVlXG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGpzb24oZXJyb3JzLCB7IHN0YXR1czogNDIyIH0pXG4gIH1cblxuICBhd2FpdCBzZW5kRW1haWwoeyBuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSB9KVxuXG4gIHJldHVybiByZWRpcmVjdCgnL2NvbnRhY3QnKVxufVxuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKClcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICBjb25zdCB7IHN0YXRlIH0gPSB0cmFuc2l0aW9uXG4gIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hbWUgJiYgZW1haWwgJiYgc3ViamVjdCAmJiBtZXNzYWdlKSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKHRydWUpXG4gICAgfVxuICB9LCBbbmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2VdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycpIHtcbiAgICAgIGNsZWFyRm9ybSgpXG4gICAgfVxuICB9LCBbdHJhbnNpdGlvbl0pXG5cbiAgY29uc3QgcG9ydGZvbGlvQmFja0ltZ1N0eWxlID0ge1xuICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke3BvcnRmb2xpb0JhY2tJbWd9KWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VjZjBmMycsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAncm91bmQnLFxuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9XG5cbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIHNldE5hbWUoJycpXG4gICAgc2V0RW1haWwoJycpXG4gICAgc2V0U3ViamVjdCgnJylcbiAgICBzZXRNZXNzYWdlKCcnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25JbnB1dENoYW5nZSA9IChcbiAgICBlOlxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBpbnB1dE5hbWU6IHN0cmluZ1xuICApID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgaWYgKGlucHV0TmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICBzZXROYW1lKHZhbHVlKVxuICAgIH1cbiAgICBpZiAoaW5wdXROYW1lID09PSAnZW1haWwnKSB7XG4gICAgICBzZXRFbWFpbCh2YWx1ZSlcbiAgICB9XG4gICAgaWYgKGlucHV0TmFtZSA9PT0gJ3N1YmplY3QnKSB7XG4gICAgICBzZXRTdWJqZWN0KHZhbHVlKVxuICAgIH1cbiAgICBpZiAoaW5wdXROYW1lID09PSAnbWVzc2FnZScpIHtcbiAgICAgIHNldE1lc3NhZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGV4dCA9XG4gICAgIWVtYWlsIHx8ICFzdWJqZWN0IHx8ICFtZXNzYWdlIHx8ICFuYW1lXG4gICAgICA/ICdDb21wbGV0ZSB0aGUgZm9ybSdcbiAgICAgIDogdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG4gICAgICA/ICdTZW5kaW5nLi4uJ1xuICAgICAgOiB0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZydcbiAgICAgID8gJ1RoYW5rIHlvdSEnXG4gICAgICA6ICdTZW5kIG1lc3NhZ2UnXG5cbiAgY29uc3QgY3VzdG9tT3B0aW9ucyA9IHtcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgem9vbTogMTUsXG4gICAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxuICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxuICAgIHJvdGF0ZUNvbnRyb2w6IGZhbHNlLFxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgIHpvb21Db250cm9sOiBmYWxzZSxcbiAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2VcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBpZD0nc2VjdGlvbi1jb250YWN0TWUnXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRlbnQgc2VjdGlvbiBzZWN0aW9uLWNoaWxkICdcbiAgICAgICAgICBzdHlsZT17cG9ydGZvbGlvQmFja0ltZ1N0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgY2xhc3NOYW1lPSdmb3JtLWVsZW1lbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0LWRpdic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPkNvbnRhY3QgbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZHMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1uYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1c2VyLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e25hbWUgPyBuYW1lIDogJ05hbWUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25JbnB1dENoYW5nZShlLCAnbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1lbWFpbCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1c2VyLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2VtYWlsID8gZW1haWwgOiAnRW1haWwnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25JbnB1dENoYW5nZShlLCAnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tc3ViamVjdCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N1YmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VzZXItaW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzdWJqZWN0ID8gc3ViamVjdCA6ICdTdWJqZWN0J31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZU9uSW5wdXRDaGFuZ2UoZSwgJ3N1YmplY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tbWVzc2FnZSc+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndXNlci1pbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bWVzc2FnZSA/IG1lc3NhZ2UgOiAnRW1haWwgYm9keSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbklucHV0Q2hhbmdlKGUsICdtZXNzYWdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkID8gJ3NlbmQtbXNnLWJ0bi1kaXNhYmxlZCcgOiAnc2VuZC1tc2ctYnRuJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNeU1hcCBjdXN0b21PcHRpb25zPXtjdXN0b21PcHRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdjb250YWN0LWZvb3Rlci1jb250YWluZXInPlxuICAgICAgICAgIDxTb2NpYWxGb290ZXIgLz5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XG4iLCAiY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuY29uc3QgeyBnb29nbGUgfSA9IHJlcXVpcmUoJ2dvb2dsZWFwaXMnKVxuY29uc3QgT0F1dGgyID0gZ29vZ2xlLmF1dGguT0F1dGgyXG5cbmNvbnN0IEdNQUlMX0VNQUlMID0gcHJvY2Vzcy5lbnYuR01BSUxfRU1BSUxcbmNvbnN0IEdNQUlMX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52LkdNQUlMX0NMSUVOVF9JRFxuY29uc3QgR01BSUxfQ0xJRU5UX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkdNQUlMX0NMSUVOVF9TRUNSRVRcbmNvbnN0IEdNQUlMX1JFRlJFU0hfVE9LRU4gPSBwcm9jZXNzLmVudi5HTUFJTF9SRUZSRVNIX1RPS0VOXG5jb25zdCBHTUFJTF9SRURJUkVDVF9VUkwgPSBwcm9jZXNzLmVudi5HTUFJTF9SRURJUkVDVF9VUkxcblxuY29uc3Qgb2F1dGgyQ2xpZW50ID0gbmV3IE9BdXRoMihcbiAgR01BSUxfQ0xJRU5UX0lELFxuICBHTUFJTF9DTElFTlRfU0VDUkVULFxuICBHTUFJTF9SRURJUkVDVF9VUkxcbilcblxub2F1dGgyQ2xpZW50LnNldENyZWRlbnRpYWxzKHtcbiAgcmVmcmVzaF90b2tlbjogR01BSUxfUkVGUkVTSF9UT0tFTlxufSlcblxuY29uc3QgYWNjZXNzVG9rZW4gPSBvYXV0aDJDbGllbnQuZ2V0QWNjZXNzVG9rZW4oKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsIChkYXRhOmFueSkge1xuICBcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgc2VydmljZTogJ2dtYWlsJyxcbiAgICBhdXRoOiB7XG4gICAgICB0eXBlOiAnT0F1dGgyJyxcbiAgICAgIHVzZXI6IEdNQUlMX0VNQUlMLFxuICAgICAgY2xpZW50SWQ6IEdNQUlMX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogR01BSUxfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIHJlZnJlc2hUb2tlbjogR01BSUxfUkVGUkVTSF9UT0tFTixcbiAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlblxuICAgIH1cbiAgfSlcblxuICB0cmFuc3BvcnRlci52ZXJpZnkoKGVyciwgc3VjY2VzcykgPT4ge1xuICAgIGVyclxuICAgICAgPyBjb25zb2xlLmxvZyhlcnIpXG4gICAgICA6IGNvbnNvbGUubG9nKGA9PT0gU2VydmVyIGlzIHJlYWR5IHRvIHRha2UgbWVzc2FnZXM6ICR7c3VjY2Vzc30gPT09YClcbiAgfSlcblxuICBsZXQgbWFpbE9wdGlvbnMgPSB7XG4gICAgZnJvbTogZGF0YT8uZW1haWwsXG4gICAgdG86IEdNQUlMX0VNQUlMLFxuICAgIHN1YmplY3Q6IGRhdGE/LnN1YmplY3QsXG4gICAgdGV4dDogYCR7ZGF0YT8ubWVzc2FnZX0gXFxuXFxuIGZyb206ICR7ZGF0YT8uZW1haWx9IFxcblxcbiBuYW1lOiAke2RhdGE/Lm5hbWV9YFxuICB9XG5cbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgU2VuZGluZyBFbWFpbDonLCBlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbWFpbCBpbmZvOicsIGluZm8pXG4gICAgfVxuICAgIHRyYW5zcG9ydGVyLmNsb3NlKClcbiAgfSlcblxuICByZXR1cm4gZGF0YVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlSnNBcGlMb2FkZXIsIE1hcmtlciB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgZ01hcCBmcm9tICd+L2ltYWdlcy9ob21lL2dNYXAucG5nJ1xuXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwdmgnXG59XG5cbmNvbnN0IGNlbnRlciA9IHtcbiAgbGF0OiA0MC43NTYxLFxuICBsbmc6IC03NC4wMDM1XG59XG5cbnR5cGUgQ3VzdG9tT3B0aW9uc1R5cGUgPSB7XG4gIG1hcFR5cGVDb250cm9sPzogYm9vbGVhblxuICB6b29tPzogbnVtYmVyXG4gIGNsaWNrYWJsZUljb25zPzogYm9vbGVhblxuICBwYW5Db250cm9sPzogYm9vbGVhblxuICByb3RhdGVDb250cm9sPzogYm9vbGVhblxuICBzY2FsZUNvbnRyb2w/OiBib29sZWFuXG4gIHN0cmVldFZpZXdDb250cm9sPzogYm9vbGVhblxuICB6b29tQ29udHJvbD86IGJvb2xlYW5cbiAgZnVsbHNjcmVlbkNvbnRyb2w/OiBib29sZWFuXG4gIG1hcElkPzogc3RyaW5nXG59XG5cbnR5cGUgTXlNYXBQcm9wcyA9IHtcbiAgY3VzdG9tT3B0aW9ucz86IEN1c3RvbU9wdGlvbnNUeXBlXG59XG5cbmNvbnN0IE15TWFwID0gKHByb3BzOiBNeU1hcFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY3VzdG9tT3B0aW9ucyB9ID0gcHJvcHNcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7XG4gICAgRU5WOiB7IEdPT0dMRV9NQVBfSUQsIEdPT0dMRV9NQVBfQVBJX0tFWSB9XG4gIH0gPSBkYXRhXG4gIGNvbnN0IHsgaXNMb2FkZWQgfSA9IHVzZUpzQXBpTG9hZGVyKHtcbiAgICBpZDogJ2dvb2dsZS1tYXAtc2NyaXB0JyxcbiAgICBnb29nbGVNYXBzQXBpS2V5OiBHT09HTEVfTUFQX0FQSV9LRVlcbiAgfSlcblxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBvbkxvYWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiBjYWxsYmFjayAobWFwKSB7XG4gICAgc2V0TWFwKG1hcClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25Vbm1vdW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sgKG1hcCkge1xuICAgIHNldE1hcChudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICB6b29tOiAxNSxcbiAgICBjbGlja2FibGVJY29uczogZmFsc2UsXG4gICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgcm90YXRlQ29udHJvbDogZmFsc2UsXG4gICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICBtYXBJZDogR09PR0xFX01BUF9JRFxuICB9XG5cbiAgY29uc3QgbW9kaWZpZWRDdXN0b21PcHRpb25zID0geyAuLi5jdXN0b21PcHRpb25zLCBtYXBJZDogR09PR0xFX01BUF9JRCB9XG4gIGNvbnN0IG9wdGlvbnMgPSBjdXN0b21PcHRpb25zID8gbW9kaWZpZWRDdXN0b21PcHRpb25zIDogbWFwT3B0aW9uc1xuXG4gIHJldHVybiBpc0xvYWRlZCA/IChcbiAgICA8R29vZ2xlTWFwXG4gICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICBjZW50ZXI9e2NlbnRlcn1cbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgIG9uVW5tb3VudD17b25Vbm1vdW50fVxuICAgID5cbiAgICAgIDxNYXJrZXIgYW5pbWF0aW9uPXtnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUH0gcG9zaXRpb249e2NlbnRlcn0gLz5cbiAgICA8L0dvb2dsZU1hcD5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGVmYXVsdE1hcEltZycgYXJpYS1sYWJlbD0nZ3JlZ29yeSBsb2NhdGlvbic+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlNYXBcbiIsICJpbXBvcnQgeyBMaW5rZWRpbiwgR2l0aHViLCBGYWNlYm9vayB9IGZyb20gJ0BpY29ucy1wYWNrL3JlYWN0LXNpbXBsZS1pY29ucydcbmNvbnN0IFNvY2lhbEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLWZvb3Rlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLWZvb3Rlci1pdGVtJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXsnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dyZWdkYXZpc2RldmVsb3Blci8nfVxuICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICA+XG4gICAgICAgICAgPExpbmtlZGluIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1mb290ZXItaXRlbSc+XG4gICAgICAgIDxhIGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vZGF2aXNncmVnMSd9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICA8R2l0aHViIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1mb290ZXItaXRlbSc+XG4gICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5mYWNlYm9vay5jb20vbW9uZXljYXB0YWluYXBwJ30gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgIDxGYWNlYm9vayAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxGb290ZXJcbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCBDbG91ZFRhZ0NvbXAgZnJvbSAnfi9jb21wb25lbnRzL0Nsb3VkVGFnQ29tcCdcbmltcG9ydCB7XG4gIHNpSmF2YXNjcmlwdCxcbiAgc2lUeXBlc2NyaXB0LFxuICBzaU5leHRkb3RqcyxcbiAgc2lOb2RlZG90anMsXG4gIHNpQ3NzMyxcbiAgc2lIdG1sNSxcbiAgc2lSZWFjdCxcbiAgc2lHaXQsXG4gIHNpRXhwcmVzcyxcbiAgc2lQb3N0Z3Jlc3FsLFxuICBzaUFtYXpvbmF3cyxcbiAgc2lKZXN0LFxuICBzaVZpc3VhbHN0dWRpb2NvZGUsXG4gIHNpU2VxdWVsaXplLFxuICBzaUpzb24sXG4gIHNpVHJlbGxvLFxuICBzaUpxdWVyeSxcbiAgc2lOcG0sXG4gIHNpSmlyYSxcbiAgc2lSZWRpcyxcbiAgc2lNYWNvc1xufSBmcm9tICdzaW1wbGUtaWNvbnMvaWNvbnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL3NraWxscy5jc3MnXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYFNraWxscyAtIEdyZWcgfCBGdWxsU3RhY2sgRGV2ZWxvcGVyYCxcbiAgICBkZXNjcmlwdGlvbjogYEdyZWcncyBTa2lsbHNgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogc3R5bGVzXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgY29uc3QgaWNvbnMgPSBbXG4gICAgc2lKYXZhc2NyaXB0LFxuICAgIHNpVHlwZXNjcmlwdCxcbiAgICBzaU5leHRkb3RqcyxcbiAgICBzaU5vZGVkb3RqcyxcbiAgICBzaUNzczMsXG4gICAgc2lIdG1sNSxcbiAgICBzaVJlYWN0LFxuICAgIHNpR2l0LFxuICAgIHNpRXhwcmVzcyxcbiAgICBzaVBvc3RncmVzcWwsXG4gICAgc2lBbWF6b25hd3MsXG4gICAgc2lKZXN0LFxuICAgIHNpVmlzdWFsc3R1ZGlvY29kZSxcbiAgICBzaVNlcXVlbGl6ZSxcbiAgICBzaUpzb24sXG4gICAgc2lUcmVsbG8sXG4gICAgc2lKcXVlcnksXG4gICAgc2lOcG0sXG4gICAgc2lKaXJhLFxuICAgIHNpUmVkaXMsXG4gICAgc2lNYWNvc1xuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgaWQ9J2Nsb3VkLWNvbnRhaW5lcic+XG4gICAgICA8Q2xvdWRUYWdDb21wIHNzcklEPXsnc2tpbGxzU1NSQ2xvdWQnfSBza2lsbHNSb3V0ZT17dHJ1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbG91ZCwgcmVuZGVyU2ltcGxlSWNvbiwgSUNsb3VkIH0gZnJvbSAncmVhY3QtaWNvbi1jbG91ZCdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuaW1wb3J0IHtcbiAgc2lKYXZhc2NyaXB0LFxuICBzaVR5cGVzY3JpcHQsXG4gIHNpTmV4dGRvdGpzLFxuICBzaU5vZGVkb3RqcyxcbiAgc2lDc3MzLFxuICBzaUh0bWw1LFxuICBzaVJlYWN0LFxuICBzaUdpdCxcbiAgc2lFeHByZXNzLFxuICBzaVBvc3RncmVzcWwsXG4gIHNpQW1hem9uYXdzLFxuICBzaUplc3QsXG4gIHNpVmlzdWFsc3R1ZGlvY29kZSxcbiAgc2lTZXF1ZWxpemUsXG4gIHNpSnNvbixcbiAgc2lUcmVsbG8sXG4gIHNpSnF1ZXJ5LFxuICBzaU5wbSxcbiAgc2lKaXJhLFxuICBzaVJlZGlzLFxuICBzaU1hY29zXG59IGZyb20gJ3NpbXBsZS1pY29ucy9pY29ucydcblxuY29uc3QgQ2xvdWRUYWdDb21wID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgeyBzc3JJRCwgc2tpbGxzUm91dGUgfSA9IHByb3BzXG4gIGNvbnN0IGljb25zID0gW1xuICAgIHNpSmF2YXNjcmlwdCxcbiAgICBzaVR5cGVzY3JpcHQsXG4gICAgc2lOZXh0ZG90anMsXG4gICAgc2lOb2RlZG90anMsXG4gICAgc2lDc3MzLFxuICAgIHNpSHRtbDUsXG4gICAgc2lSZWFjdCxcbiAgICBzaUdpdCxcbiAgICBzaUV4cHJlc3MsXG4gICAgc2lQb3N0Z3Jlc3FsLFxuICAgIHNpQW1hem9uYXdzLFxuICAgIHNpSmVzdCxcbiAgICBzaVZpc3VhbHN0dWRpb2NvZGUsXG4gICAgc2lTZXF1ZWxpemUsXG4gICAgc2lKc29uLFxuICAgIHNpVHJlbGxvLFxuICAgIHNpSnF1ZXJ5LFxuICAgIHNpTnBtLFxuICAgIHNpSmlyYSxcbiAgICBzaVJlZGlzLFxuICAgIHNpTWFjb3NcbiAgXVxuICBjb25zdCBbc2tpbGxTZWxlY3RlZERlc2NyaXB0aW9uLCBzZXRTa2lsbFNlbGVjdGVkRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXG4gICAgJ1NlbGVjdCBTa2lsbCB0byBzZWUgYSBkZXNjcmlwdGlvbidcbiAgKVxuICBjb25zdCBpc0Rlc2t0b3BPckxhcHRvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogMTI0MSB9KVxuXG4gIGNvbnN0IHJlbmRlclNraWxsRGVzY3JpcHRpb24gPSAoc2tpbGw6IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoc2tpbGwpIHtcbiAgICAgIGNhc2UgJ0phdmFTY3JpcHQnOlxuICAgICAgICByZXR1cm4gYCBKYXZhc2NyaXB0IGlzIG15IHByaW1hcnkgbGFuZ3VhZ2UuIEkgaGF2ZSBleHBlcmllbmNlIHdpdGggRVM2LFxuICAgICAgICBUeXBlU2NyaXB0LCBSZWFjdCwgUmVkdXgsIE5vZGUuanMsIEV4cHJlc3MsIGFuZCBtYW55IG90aGVyXG4gICAgICAgIHRlY2hub2xvZ2llcy5cbiAgICAgICAgYFxuICAgICAgY2FzZSAnSmVzdCc6XG4gICAgICAgIHJldHVybiBgSmVzdCBpcyBhIHRlc3RpbmcgZnJhbWV3b3JrIGZvciBKYXZhU2NyaXB0LiBJdCBpcyB1c2VkIHRvXG4gICAgICAgIHRlc3QgUmVhY3QgY29tcG9uZW50cy4gSSB1c2UgaXQgZGFpbHkuYFxuXG4gICAgICBjYXNlICdWaXN1YWwgU3R1ZGlvIENvZGUnOlxuICAgICAgICByZXR1cm4gYFZpc3VhbCBTdHVkaW8gQ29kZSBpcyBhIGNvZGUgZWRpdG9yIHRoYXQgSSBlbmpveSB1c2luZyBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ0pTT04nOlxuICAgICAgICByZXR1cm4gYEpTT04gaXMgYSBkYXRhIGZvcm1hdCB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnVHJlbGxvJzpcbiAgICAgICAgcmV0dXJuIGBUcmVsbG8gaXMgYSBwcm9qZWN0IG1hbmFnZW1lbnQgdG9vbCB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnSlF1ZXJ5JzpcbiAgICAgICAgcmV0dXJuIGBKUXVlcnkgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBJIHVzZSBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ25wbSc6XG4gICAgICAgIHJldHVybiBgTlBNIGlzIGEgcGFja2FnZSBtYW5hZ2VyIGZvciBKYXZhU2NyaXB0LiBJIHVzZSBpdCBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ0ppcmEnOlxuICAgICAgICByZXR1cm4gYEppcmEgaXMgYSBwcm9qZWN0IG1hbmFnZW1lbnQgdG9vbCB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnUmVkaXMnOlxuICAgICAgICByZXR1cm4gYFJlZGlzIGlzIGEga2V5LXZhbHVlIHN0b3JlIHRoYXQgSSB1c2UgZGFpbHkuYFxuXG4gICAgICBjYXNlICdtYWNPUyc6XG4gICAgICAgIHJldHVybiBgTWFjT1MgaXMgYSBwbGF0Zm9ybSB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnUmVhY3QnOlxuICAgICAgICByZXR1cm4gYFJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgSSB1c2UgZGFpbHkuYFxuXG4gICAgICBjYXNlICdDU1MzJzpcbiAgICAgICAgcmV0dXJuIGBDU1MzIGlzIGEgc3R5bGUgc2hlZXQgbGFuZ3VhZ2UgdGhhdCBJIHVzZSBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ0hUTUw1JzpcbiAgICAgICAgcmV0dXJuIGBIVE1MNSBpcyBhIG1hcmt1cCBsYW5ndWFnZSB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnR2l0JzpcbiAgICAgICAgcmV0dXJuIGBHaXQgaXMgYSB2ZXJzaW9uIGNvbnRyb2wgc3lzdGVtIHRoYXQgSSB1c2UgZGFpbHkuYFxuXG4gICAgICBjYXNlICdFeHByZXNzJzpcbiAgICAgICAgcmV0dXJuIGBFeHByZXNzIGlzIGEgd2ViIGZyYW1ld29yayB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnUG9zdGdyZVNRTCc6XG4gICAgICAgIHJldHVybiBgUG9zdGdyZVNRTCBpcyBhIGRhdGFiYXNlIHRoYXQgSSB1c2UgZGFpbHkuYFxuXG4gICAgICBjYXNlICdBbWF6b24gQVdTJzpcbiAgICAgICAgcmV0dXJuIGBBbWF6b24gQVdTIGlzIGEgY2xvdWQgcGxhdGZvcm0gdGhhdCBJIHVzZSBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ1R5cGVTY3JpcHQnOlxuICAgICAgICByZXR1cm4gYFR5cGVTY3JpcHQgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBJIHVzZSBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ05vZGUuanMnOlxuICAgICAgICByZXR1cm4gYE5vZGUuanMgaXMgYSBKYXZhU2NyaXB0IHJ1bnRpbWUgdGhhdCBJIHVzZSBkYWlseS5gXG5cbiAgICAgIGNhc2UgJ1NlcXVlbGl6ZSc6XG4gICAgICAgIHJldHVybiBgU2VxdWVsaXplIGlzIGEgZGF0YWJhc2UgT1JNIHRoYXQgSSB1c2UgZGFpbHkuYFxuXG4gICAgICBjYXNlICdOZXh0LmpzJzpcbiAgICAgICAgcmV0dXJuIGBOZXh0LmpzIGlzIGEgd2ViIGZyYW1ld29yayB0aGF0IEkgdXNlIGRhaWx5LmBcblxuICAgICAgY2FzZSAnalF1ZXJ5JzpcbiAgICAgICAgcmV0dXJuIGBqUXVlcnkgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBJIGRvbid0IHVzZSBkYWlseSBidXQgYW0gc2tpbGxlZCBpbi5gXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFrZVByb3BzID0gKCk6IFBhcnRpYWw8SUNsb3VkPiAmIHsgcm9vdDogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgaGVpZ2h0OiAnMjAwdmgnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIGNvbnRhaW5lclByb3BzOiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmdUb3A6IDQwLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgJ3JhZGlhbC1ncmFkaWVudCggY2lyY2xlLCByZ2IoMTEsIDM0LCAyMzgpIDAlLCByZ2IoMTUsIDEyMCwgMTgxKSAxMDAlLCByZ2IoMTcsIDIxNiwgMjUxKSA1MCUgKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzc3N3B4J1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gaHR0cHM6Ly93d3cuZ29hdDEwMDAuY29tL3RhZ2NhbnZhcy1vcHRpb25zLnBocFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGRlcHRoOiAxLFxuICAgICAgaW1hZ2VTY2FsZTogMixcbiAgICAgIGluaXRpYWw6IFswLjEsIC0wLjFdLFxuICAgICAgb3V0bGluZUNvbG91cjogJyMwMDAwJyxcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogKGlzRGVza3RvcE9yTGFwdG9wICYmICFza2lsbHNSb3V0ZSkgPyAnZGl2JyA6ICduYXRpdmUnLFxuICAgICAgdG9vbHRpcERlbGF5OiAwLFxuICAgICAgd2hlZWxab29tOiBmYWxzZSxcbiAgICAgIHJhZGl1c1g6IDAuNyxcbiAgICAgIHJhZGl1c1k6IDAuNyxcbiAgICAgIHJhZGl1c1o6IDAuNyxcbiAgICAgIG1heFNwZWVkOiAwLjA2LFxuICAgICAgdG9vbHRpcENsYXNzOiAnaWNvbi10aXRsZScsXG4gICAgICBmcmVlemVBY3RpdmU6IHNraWxsc1JvdXRlID8gdHJ1ZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbWFrZUljb25zID0gKCkgPT5cbiAgICBpY29ucy5tYXAoKGljb246IGFueSkgPT4ge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSByZW5kZXJTa2lsbERlc2NyaXB0aW9uKGljb24udGl0bGUpXG4gICAgICByZXR1cm4gcmVuZGVyU2ltcGxlSWNvbih7XG4gICAgICAgIGljb24sXG4gICAgICAgIG1pbkNvbnRyYXN0UmF0aW86IDMsXG4gICAgICAgIGJnSGV4OiAnI2ZmZicsXG4gICAgICAgIHNpemU6IDQyLFxuICAgICAgICBmYWxsYmFja0hleDogJyNmZmYnLFxuICAgICAgICBhUHJvcHM6IHtcbiAgICAgICAgICBocmVmOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgcmVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgb25DbGljazogKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBzZXRTa2lsbFNlbGVjdGVkRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIGNvbnN0IGNvbnN0cnVjdGVkUHJvcHMgPSBtYWtlUHJvcHMoKVxuICBjb25zdCBjbG91ZEljb25zID0gbWFrZUljb25zKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjbG91ZFRhZ0NvbXAtY29udGFpbmVyJz5cbiAgICAgIHtza2lsbHNSb3V0ZSA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdza2lsbHMtZGVzY3JpcHRpb24nPntza2lsbFNlbGVjdGVkRGVzY3JpcHRpb259PC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgJydcbiAgICAgICl9XG4gICAgICA8Q2xvdWRcbiAgICAgICAgY29udGFpbmVyUHJvcHM9e2NvbnN0cnVjdGVkUHJvcHMuY29udGFpbmVyUHJvcHN9XG4gICAgICAgIG9wdGlvbnM9e2NvbnN0cnVjdGVkUHJvcHMub3B0aW9uc31cbiAgICAgICAgaWQ9e3NzcklEfVxuICAgICAgPlxuICAgICAgICB7Y2xvdWRJY29uc31cbiAgICAgIDwvQ2xvdWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENsb3VkVGFnQ29tcFxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2Fib3V0LmNzcydcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG59IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kKVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNcbiAgICB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMCZkaXNwbGF5PXN3YXAnXG4gICAgfVxuICBdXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYEFib3V0IC0gR3JlZyB8IEZ1bGxTdGFjayBEZXZlbG9wZXJgLFxuICAgIGRlc2NyaXB0aW9uOiBgQWJvdXQgR3JlZ2BcbiAgfVxufVxuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgY3Vyc29yT3B0aW9ucyA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBibGluazogdHJ1ZSxcbiAgICBlbGVtZW50OiAnXycsXG4gICAgaGlkZVdoZW5Eb25lOiB0cnVlLFxuICAgIGhpZGVXaGVuRG9uZURlbGF5OiAxMDAwXG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBbJ0Zyb250IEVuZCcsICdCYWNrIEVuZCcsICdSZWFjdCBKUycsICdEZXNpZ24nXVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUmF0aW5nJyxcbiAgICAgICAgZGF0YTogWzg3LCA3OSwgODgsIDYwLCAxMDBdLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTUsIDEyMCwgMTgxKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsIDEyMCwgMTgxLDAuMiknXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBpbmRleEF4aXM6ICd5JyBhcyBjb25zdCxcbiAgICBlbGVtZW50czoge1xuICAgICAgYmFyOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICB9XG4gICAgfSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScgYXMgY29uc3RcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0ZXh0OiAnQWJvdXQgTWUnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdza2lsbC1iYXItY29udGFpbmVyJz5cbiAgICAgICAgICA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2RhdGF9IGRhdGFzZXRJZEtleT17J2Fia3MnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICA8VHlwaXN0IGN1cnNvcj17Y3Vyc29yT3B0aW9uc30+XG4gICAgICAgICAgICBJJ20gYSBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgYnVpbGRpbmcgcHJvZHVjdHMgdGhhdFxuICAgICAgICAgICAgYXJlOlxuICAgICAgICAgICAgPFR5cGlzdC5EZWxheSBtcz17NTAwfSAvPiBhY2Nlc3NpYmxlLFxuICAgICAgICAgICAgPFR5cGlzdC5EZWxheSBtcz17NTAwfSAvPiBwZXJmb3JtYW50LFxuICAgICAgICAgICAgPFR5cGlzdC5EZWxheSBtcz17NTAwfSAvPiBpbnR1aXRpdmUsIFxuICAgICAgICAgICAge1wiIFwifSBhbmRcbiAgICAgICAgICAgIDxUeXBpc3QuRGVsYXkgbXM9ezUwMH0gLz4gdXNlci1mcmllbmRseS5cbiAgICAgICAgICA8L1R5cGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCBCbG9ncyA9ICgpID0+IHtcbiAgcmV0dXJuIDxPdXRsZXQgLz5cbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2dzXG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2Jsb2dzLmNzcydcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogc3R5bGVzXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0L2NzcycsXG4gICAgICBjaGFyU2V0OiAnVVRGLTgnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIHR5cGU6ICd0ZXh0L2NzcycsXG4gICAgICBocmVmOlxuICAgICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xaTlOVlE5U09FRmJ6VnNJbzB1NTFxY1pjVlR3RlBDSFgnLFxuICAgICAgYXM6ICdpbWFnZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xbUYtcDBSdkw5QjBrLUREZEZnUG1XZHVTQ2ZDa19NT2InLFxuICAgICAgYXM6ICdpbWFnZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vd3d3Lm1vbmV5Y2FwdGFpbmxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL2xvZ28tYi5wbmcnLFxuICAgICAgYXM6ICdpbWFnZSdcbiAgICB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB9LFxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjpcbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMCZkaXNwbGF5PXN3YXAnXG4gICAgfVxuICBdXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYEJsb2dzIC0gR3JlZyB8IEZ1bGxTdGFjayBEZXZlbG9wZXJgLFxuICAgIGRlc2NyaXB0aW9uOiBgR3JlZydzIEJsb2dzYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dzICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlckNvbnN0cnVjdGlvbk1zZ0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2dsb3cnPlxuICAgICAgICAgICAgPHA+QmxvZ3M8L3A+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2Jsb2dzLmNzcydcblxuLy8gZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuLy8gICByZXR1cm4gW1xuLy8gICAgIHtcbi8vICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuLy8gICAgICAgaHJlZjogc3R5bGVzXG4vLyAgICAgfVxuLy8gICBdXG4vLyB9XG5cbi8vIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG4vLyBleHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICB0aXRsZTogYEdyZWcncyBibG9nc2AsXG4vLyAgICAgZGVzY3JpcHRpb246IGBHcmVnJ3MgYmxvZ3NgLFxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dzICgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbi8vICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRlbnQgZ2xvdyc+XG4vLyAgICAgICAgIDxwPkJMT0dTPC9wPlxuLy8gICAgICAgPC9oMT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZWRpcmVjdCxcbiAgTGlua3NGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICBBY3Rpb25GdW5jdGlvbixcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbiAganNvbixcbiAgRm9ybVxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXRzcGFydGljbGVzJ1xuaW1wb3J0IHBhcnRpY2xlc0NvbmZpZyBmcm9tICd+L3BhcnRpY2xlc0NvbmZpZydcbmltcG9ydCBNeUZsaXBCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvTXlGbGlwQm9vaydcbmltcG9ydCBNeU1hcCBmcm9tICcuLi9jb21wb25lbnRzL015TWFwJ1xuaW1wb3J0IENsb3VkVGFnQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL0Nsb3VkVGFnQ29tcCdcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gJ34vc2VuZEVtYWlsJ1xuaW1wb3J0IHtcbiAgc2lKYXZhc2NyaXB0LFxuICBzaVR5cGVzY3JpcHQsXG4gIHNpTmV4dGRvdGpzLFxuICBzaU5vZGVkb3RqcyxcbiAgc2lDc3MzLFxuICBzaUh0bWw1LFxuICBzaVJlYWN0LFxuICBzaUdpdCxcbiAgc2lFeHByZXNzLFxuICBzaVBvc3RncmVzcWwsXG4gIHNpQW1hem9uYXdzLFxuICBzaUplc3QsXG4gIHNpVmlzdWFsc3R1ZGlvY29kZSxcbiAgc2lTZXF1ZWxpemUsXG4gIHNpSnNvbixcbiAgc2lUcmVsbG8sXG4gIHNpSnF1ZXJ5LFxuICBzaU5wbSxcbiAgc2lKaXJhLFxuICBzaVJlZGlzLFxuICBzaU1hY29zXG59IGZyb20gJ3NpbXBsZS1pY29ucy9pY29ucydcblxudHlwZSBGb3JtRXJyb3JUeXBlID0ge1xuICBuYW1lPzogYm9vbGVhblxuICBlbWFpbD86IGJvb2xlYW5cbiAgc3ViamVjdD86IGJvb2xlYW5cbiAgbWVzc2FnZT86IGJvb2xlYW5cbn1cblxudHlwZSBLZXlMb2dUeXBlID0ge1xuICBrZXk/OiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKVxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKVxuICBjb25zdCBzdWJqZWN0ID0gZm9ybURhdGEuZ2V0KCdzdWJqZWN0JylcbiAgY29uc3QgbWVzc2FnZSA9IGZvcm1EYXRhLmdldCgnbWVzc2FnZScpXG5cbiAgY29uc3QgZXJyb3JzOiBGb3JtRXJyb3JUeXBlID0ge31cbiAgaWYgKCFuYW1lKSBlcnJvcnMubmFtZSA9IHRydWVcbiAgaWYgKCFlbWFpbCkgZXJyb3JzLmVtYWlsID0gdHJ1ZVxuICBpZiAoIXN1YmplY3QpIGVycm9ycy5zdWJqZWN0ID0gdHJ1ZVxuICBpZiAoIW1lc3NhZ2UpIGVycm9ycy5tZXNzYWdlID0gdHJ1ZVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBqc29uKGVycm9ycywgeyBzdGF0dXM6IDQyMiB9KVxuICB9XG5cbiAgYXdhaXQgc2VuZEVtYWlsKHsgbmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2UgfSlcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nKVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgdHlwZTogJ3RleHQvY3NzJyxcbiAgICAgIGNoYXJTZXQ6ICdVVEYtOCcsXG4gICAgICBocmVmOlxuICAgICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgdHlwZTogJ3RleHQvY3NzJyxcbiAgICAgIGhyZWY6XG4gICAgICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzJ1xuICAgIH0sXG4gIF1cbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBgSG9tZSAtIEdyZWcgfCBGdWxsU3RhY2sgRGV2ZWxvcGVyYCxcbiAgICBkZXNjcmlwdGlvbjogJ1dlbGNvbWUgdG8gbXkgc2l0ZSdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyICgpIHtcbiAgcmV0dXJuIHtcbiAgICBFTlY6IHtcbiAgICAgIEdPT0dMRV9NQVBfSUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9NQVBfSUQsXG4gICAgICBHT09HTEVfTUFQX0FQSV9LRVk6IHByb2Nlc3MuZW52LkdPT0dMRV9NQVBfQVBJX0tFWVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX3Nob3VsZFJlbG9hZCA9ICgpID0+IGZhbHNlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhSb3V0ZSAoKSB7XG4gIGNvbnN0IGljb25zID0gW1xuICAgIHNpSmF2YXNjcmlwdCxcbiAgICBzaVR5cGVzY3JpcHQsXG4gICAgc2lOZXh0ZG90anMsXG4gICAgc2lOb2RlZG90anMsXG4gICAgc2lDc3MzLFxuICAgIHNpSHRtbDUsXG4gICAgc2lSZWFjdCxcbiAgICBzaUdpdCxcbiAgICBzaUV4cHJlc3MsXG4gICAgc2lQb3N0Z3Jlc3FsLFxuICAgIHNpQW1hem9uYXdzLFxuICAgIHNpSmVzdCxcbiAgICBzaVZpc3VhbHN0dWRpb2NvZGUsXG4gICAgc2lTZXF1ZWxpemUsXG4gICAgc2lKc29uLFxuICAgIHNpVHJlbGxvLFxuICAgIHNpSnF1ZXJ5LFxuICAgIHNpTnBtLFxuICAgIHNpSmlyYSxcbiAgICBzaVJlZGlzLFxuICAgIHNpTWFjb3NcbiAgXVxuXG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdHJhbnNpdGlvblxuXG4gIGNvbnN0IGlzRGVza3RvcE9yTGFwdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiAxMjQxIH0pXG4gIGNvbnN0IGlzVGFibGV0VmFsID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiA3MjAsIG1heFdpZHRoOiAxMjQwIH0pXG4gIGNvbnN0IGlzTW9iaWxlVmFsID0gdXNlTWVkaWFRdWVyeSh7IG1heFdpZHRoOiA3MTkgfSlcblxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGlzTW9iaWxlVmFsKVxuICBjb25zdCBbaXNUYWJsZXQsIHNldElzVGFibGV0XSA9IHVzZVN0YXRlKGlzVGFibGV0VmFsKVxuICBjb25zdCBbaXNEZXNrdG9wLCBzZXRJc0Rlc2t0b3BdID0gdXNlU3RhdGUoaXNEZXNrdG9wT3JMYXB0b3ApXG4gIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qga2V5TG9nOiBLZXlMb2dUeXBlID0ge31cblxuICBjb25zdCBoYW5kbGVLZXlib2FyZCA9ICh7IHR5cGUsIGtleSwgcmVwZWF0LCBtZXRhS2V5IH0pID0+IHtcbiAgICBpZiAocmVwZWF0KSByZXR1cm5cblxuICAgIGlmICh0eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIGtleUxvZ1trZXldID0gdHJ1ZVxuXG4gICAgICBpZiAoa2V5TG9nLnMgJiYga2V5ID09PSAndScpIG5hdmlnYXRlKCcvYWRtaW5sb2dpbnonLCB7IHJlcGxhY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2tleXVwJykgZGVsZXRlIGtleUxvZ1trZXldXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IFsna2V5ZG93bicsICdrZXl1cCddXG4gICAgZXZlbnRzLmZvckVhY2gobmFtZSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZUtleWJvYXJkKSlcblxuICAgIHJldHVybiAoKSA9PlxuICAgICAgZXZlbnRzLmZvckVhY2gobmFtZSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZUtleWJvYXJkKSlcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycpIHtcbiAgICAgIGNsZWFyRm9ybSgpXG4gICAgfVxuICB9LCBbdHJhbnNpdGlvbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vYmlsZShpc01vYmlsZVZhbClcbiAgICBzZXRJc1RhYmxldChpc1RhYmxldFZhbClcbiAgICBzZXRJc0Rlc2t0b3AoaXNEZXNrdG9wT3JMYXB0b3ApXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmFtZSAmJiBlbWFpbCAmJiBzdWJqZWN0ICYmIG1lc3NhZ2UpIHtcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZV0pXG5cbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICAvKiBPcHRpb25hbCBvcHRpb25zICovXG4gICAgdGhyZXNob2xkOiAxXG4gIH0pXG5cbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIHNldE5hbWUoJycpXG4gICAgc2V0RW1haWwoJycpXG4gICAgc2V0U3ViamVjdCgnJylcbiAgICBzZXRNZXNzYWdlKCcnKVxuICB9XG5cbiAgY29uc3QgcG9ydGZvbGlvQmFja0ltZ1N0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNlY2YwZjMnLFxuICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ3JvdW5kJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbU9wdGlvbnMgPSB7XG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgIHpvb206IDE1LFxuICAgIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbiAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICByb3RhdGVDb250cm9sOiBmYWxzZSxcbiAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICB6b29tQ29udHJvbDogZmFsc2UsXG4gICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlXG4gIH1cbiAgY29uc3QgaGFuZGxlT25JbnB1dENoYW5nZSA9IChcbiAgICBlOlxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICAgICAgfCBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBpbnB1dE5hbWU6IHN0cmluZ1xuICApID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgaWYgKGlucHV0TmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICBzZXROYW1lKHZhbHVlKVxuICAgIH1cbiAgICBpZiAoaW5wdXROYW1lID09PSAnZW1haWwnKSB7XG4gICAgICBzZXRFbWFpbCh2YWx1ZSlcbiAgICB9XG4gICAgaWYgKGlucHV0TmFtZSA9PT0gJ3N1YmplY3QnKSB7XG4gICAgICBzZXRTdWJqZWN0KHZhbHVlKVxuICAgIH1cbiAgICBpZiAoaW5wdXROYW1lID09PSAnbWVzc2FnZScpIHtcbiAgICAgIHNldE1lc3NhZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGV4dCA9XG4gICAgIWVtYWlsIHx8ICFzdWJqZWN0IHx8ICFtZXNzYWdlIHx8ICFuYW1lXG4gICAgICA/ICdDb21wbGV0ZSB0aGUgZm9ybSdcbiAgICAgIDogdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG4gICAgICA/ICdTZW5kaW5nLi4uJ1xuICAgICAgOiB0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZydcbiAgICAgID8gJ1RoYW5rIHlvdSEnXG4gICAgICA6ICdTZW5kIG1lc3NhZ2UnXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSdzZWN0aW9uLWhvbWUnXG4gICAgICAgIGNsYXNzTmFtZT0nc2VjdGlvbi1jb250ZW50IHNlY3Rpb24gc2VjdGlvbi1jaGlsZCdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRpbmctc3VidGV4dHMtY29udGFpbmVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkaW5nLWgxLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2hlYWRpbmctdGV4dCc+SGksPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkaW5nLXRleHQnPkknbSBHcmVnLDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGluZy1oMS1sYXN0SXRlbSBoZWFkaW5nLXRleHQnPldlYiBEZXZlbG9wZXI8L3A+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGluZ3MtcGFyYWdyYXBoLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2hlYWRpbmdzLXBhcmFncmFwaC1pdGVtJz5Tb2Z0d2FyZSBFbmdpbmVlcjwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGluZ3MtcGlwZSc+fDwvc3Bhbj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGluZ3MtcGFyYWdyYXBoLWl0ZW0nPkZ1bGxTdGFjayBEZXZlbG9wZXI8L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRpbmdzLXBpcGUnPnw8L3NwYW4+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2hlYWRpbmdzLXBhcmFncmFwaC1pdGVtJz5EYWQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFydGljbGVzIGlkPSd0c3BhcnRpY2xlcycgb3B0aW9ucz17cGFydGljbGVzQ29uZmlnfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWRvd24gc2Nyb2xsLWRvd24tbGVmdCc+XG4gICAgICAgICAgPHNwYW4+c2Nyb2xsIGRvd248L3NwYW4+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICBmb2N1c2FibGU9J2ZhbHNlJ1xuICAgICAgICAgICAgZGF0YS1wcmVmaXg9J2ZhbCdcbiAgICAgICAgICAgIGRhdGEtaWNvbj0nYXJyb3ctZG93bidcbiAgICAgICAgICAgIHJvbGU9J2ltZydcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA0NDggNTEyJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1kb3duIGZhLXctMTQgZmEtNXgnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICBkPSdNNDQzLjUgMjQ4LjVsLTcuMS03LjFjLTQuNy00LjctMTIuMy00LjctMTcgMEwyNDEgNDE5LjlWNDRjMC02LjYtNS40LTEyLTEyLTEyaC0xMGMtNi42IDAtMTIgNS40LTEyIDEydjM3NS45TDI4LjUgMjQxLjRjLTQuNy00LjctMTIuMy00LjctMTcgMGwtNy4xIDcuMWMtNC43IDQuNy00LjcgMTIuMyAwIDE3bDIxMSAyMTEuMWM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjExLTIxMS4xYzQuOC00LjggNC44LTEyLjMuMS0xN3onXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nJ1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtZG93bic+XG4gICAgICAgICAgPHNwYW4+c2Nyb2xsIGRvd248L3NwYW4+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICBmb2N1c2FibGU9J2ZhbHNlJ1xuICAgICAgICAgICAgZGF0YS1wcmVmaXg9J2ZhbCdcbiAgICAgICAgICAgIGRhdGEtaWNvbj0nYXJyb3ctZG93bidcbiAgICAgICAgICAgIHJvbGU9J2ltZydcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA0NDggNTEyJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1kb3duIGZhLXctMTQgZmEtNXgnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICBkPSdNNDQzLjUgMjQ4LjVsLTcuMS03LjFjLTQuNy00LjctMTIuMy00LjctMTcgMEwyNDEgNDE5LjlWNDRjMC02LjYtNS40LTEyLTEyLTEyaC0xMGMtNi42IDAtMTIgNS40LTEyIDEydjM3NS45TDI4LjUgMjQxLjRjLTQuNy00LjctMTIuMy00LjctMTcgMGwtNy4xIDcuMWMtNC43IDQuNy00LjcgMTIuMyAwIDE3bDIxMSAyMTEuMWM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjExLTIxMS4xYzQuOC00LjggNC44LTEyLjMuMS0xN3onXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nJ1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgc3R5bGU9e2lzTW9iaWxlID8geyBkaXNwbGF5OiAnZmxleCcgfSA6IHBvcnRmb2xpb0JhY2tJbWdTdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uLWNoaWxkJ1xuICAgICAgICBpZD0nc2VjdGlvbi1wb3J0Zm9saW8nXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWJpZy13b3JkJz5XT1JLPC9kaXY+XG4gICAgICAgIDxNeUZsaXBCb29rIGluVmlldz17aW5WaWV3fSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uLWNoaWxkJyBpZD0nc2VjdGlvbi1za2lsbHMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1iaWctd29yZCBzZWN0aW9uLWJpZ1dvcmQtekluZGV4Jz5Ta2lsbHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1zbGlkZXMtY29udGFpbmVyJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NlY3Rpb24tbWFpbi1oZWFkaW5nJz5Ta2lsbHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2xvdWRUYWdDb21wIHNzcklEPXsnaG9tZVNTUkNsb3VkJ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC1kb3duIHNjcm9sbC1kb3duLXNraWxscyBzY3JvbGwtZG93bi1sZWZ0Jz5cbiAgICAgICAgICA8c3Bhbj5NYWRlIGl0PC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgZm9jdXNhYmxlPSdmYWxzZSdcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PSdmYWwnXG4gICAgICAgICAgICBkYXRhLWljb249J2Fycm93LWRvd24nXG4gICAgICAgICAgICByb2xlPSdpbWcnXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgNDQ4IDUxMidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctZG93biBmYS13LTE0IGZhLTV4J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgZD0nTTQ0My41IDI0OC41bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjQxIDQxOS45VjQ0YzAtNi42LTUuNC0xMi0xMi0xMmgtMTBjLTYuNiAwLTEyIDUuNC0xMiAxMnYzNzUuOUwyOC41IDI0MS40Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC44IDQuOC0xMi4zLjEtMTd6J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JydcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWRvd24gc2Nyb2xsLWRvd24tc2tpbGxzJz5cbiAgICAgICAgICA8c3Bhbj5NYWRlIGl0PC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgZm9jdXNhYmxlPSdmYWxzZSdcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PSdmYWwnXG4gICAgICAgICAgICBkYXRhLWljb249J2Fycm93LWRvd24nXG4gICAgICAgICAgICByb2xlPSdpbWcnXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgNDQ4IDUxMidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctZG93biBmYS13LTE0IGZhLTV4J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgZD0nTTQ0My41IDI0OC41bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjQxIDQxOS45VjQ0YzAtNi42LTUuNC0xMi0xMi0xMmgtMTBjLTYuNiAwLTEyIDUuNC0xMiAxMnYzNzUuOUwyOC41IDI0MS40Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC44IDQuOC0xMi4zLjEtMTd6J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JydcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J3NlY3Rpb24tY29udGFjdE1lJ1xuICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb24tY29udGVudCBzZWN0aW9uIHNlY3Rpb24tY2hpbGQgJ1xuICAgICAgICBzdHlsZT17cG9ydGZvbGlvQmFja0ltZ1N0eWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1iaWctd29yZC1jb250YWN0Jz5Db250YWN0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgY2xhc3NOYW1lPSdmb3JtLWVsZW1lbnQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdC1kaXYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+Q29udGFjdCBtZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZHMnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndXNlci1pbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtuYW1lID8gbmFtZSA6ICdOYW1lJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbklucHV0Q2hhbmdlKGUsICduYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVtYWlsJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1c2VyLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZW1haWwgPyBlbWFpbCA6ICdFbWFpbCd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25JbnB1dENoYW5nZShlLCAnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tc3ViamVjdCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N1YmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1c2VyLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzdWJqZWN0ID8gc3ViamVjdCA6ICdTdWJqZWN0J31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbklucHV0Q2hhbmdlKGUsICdzdWJqZWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLW1lc3NhZ2UnPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VzZXItaW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXttZXNzYWdlID8gbWVzc2FnZSA6ICdFbWFpbCBib2R5J31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbklucHV0Q2hhbmdlKGUsICdtZXNzYWdlJyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkID8gJ3NlbmQtbXNnLWJ0bi1kaXNhYmxlZCcgOiAnc2VuZC1tc2ctYnRuJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TXlNYXAgY3VzdG9tT3B0aW9ucz17Y3VzdG9tT3B0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1jb250ZW50Jz5cbiAgICAgICAgICAgIE1hZGUgd2l0aCA8c3Bhbj5cdTI3NjRcdUZFMEY8L3NwYW4+IGluIE5ldyBZb3JrXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJjb25zdCBwYXJ0aWNsZXNDb25maWc6IGFueSA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGNvbG9yOiB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIGltYWdlOiAnJyxcbiAgICBwb3NpdGlvbjogJycsXG4gICAgcmVwZWF0OiAnJyxcbiAgICBzaXplOiAnJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIGJhY2tncm91bmRNYXNrOiB7XG4gICAgY292ZXI6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBlbmFibGU6IGZhbHNlXG4gIH0sXG4gIGRldGVjdFJldGluYTogdHJ1ZSxcbiAgZnBzTGltaXQ6IDYwLFxuICBpbmZlY3Rpb246IHtcbiAgICBjdXJlOiBmYWxzZSxcbiAgICBkZWxheTogMCxcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIGluZmVjdGlvbnM6IDAsXG4gICAgc3RhZ2VzOiBbXVxuICB9LFxuICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgZGV0ZWN0c09uOiAnd2luZG93JyxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiAncHVzaCdcbiAgICAgIH0sXG4gICAgICBvbkRpdjoge1xuICAgICAgICBpZHM6IFtdLFxuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBtb2RlOiBbXSxcbiAgICAgICAgdHlwZTogJ2NpcmNsZSdcbiAgICAgIH0sXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogJ2Nvbm5lY3QnLFxuICAgICAgICBwYXJhbGxheDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgZm9yY2U6IDYwLFxuICAgICAgICAgIHNtb290aDogMTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgc3BlZWQ6IDFcbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgc2l6ZTogN1xuICAgICAgfSxcbiAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgZGlzdGFuY2U6IDgwLFxuICAgICAgICBsaW5rczoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgICB9LFxuICAgICAgICByYWRpdXM6IDYwXG4gICAgICB9LFxuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5rczoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHB1c2g6IHtcbiAgICAgICAgcXVhbnRpdHk6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcXVhbnRpdHk6IDJcbiAgICAgIH0sXG4gICAgICByZXB1bHNlOiB7XG4gICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgIHNwZWVkOiAxXG4gICAgICB9LFxuICAgICAgc2xvdzoge1xuICAgICAgICBmYWN0b3I6IDMsXG4gICAgICAgIHJhZGl1czogMjAwXG4gICAgICB9LFxuICAgICAgdHJhaWw6IHtcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHF1YW50aXR5OiAxXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwYXJ0aWNsZXM6IHtcbiAgICBjb2xsaXNpb25zOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICBtb2RlOiAnYm91bmNlJ1xuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHZhbHVlOiAnI2ZmZicsXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgIHN5bmM6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogJyNlZWUnXG4gICAgICB9LFxuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIHdpZHRoOiAxXG4gICAgfSxcbiAgICBtb3ZlOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICBzcGVlZDogMyxcbiAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICBhdHRyYWN0OiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgcm90YXRlWTogMTIwMFxuICAgICAgfVxuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBkZW5zaXR5OiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICB9LFxuICAgICAgdmFsdWU6IDEwMFxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHJhbmRvbToge1xuICAgICAgICBlbmFibGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IDAuNVxuICAgIH0sXG4gICAgcm90YXRlOiB7XG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZGlyZWN0aW9uOiAnY2xvY2t3aXNlJyxcbiAgICAgIHBhdGg6IGZhbHNlLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAwXG4gICAgfSxcbiAgICBzaGFkb3c6IHtcbiAgICAgIGJsdXI6IDUsXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogJyMwMDAwMDAnXG4gICAgICB9LFxuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IDMsXG4gICAgICAgIHk6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHNoYXBlOiB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICB9LFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0eXBlOiAnY2lyY2xlJ1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgc3luYzogZmFsc2VcbiAgICAgIH0sXG4gICAgICByYW5kb206IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtaW5pbXVtVmFsdWU6IDFcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogM1xuICAgIH0sXG4gICAgc3Ryb2tlOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiAnIzAwMDAwMCcsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgc3luYzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0d2lua2xlOiB7XG4gICAgICBsaW5lczoge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBmcmVxdWVuY3k6IDAuMDUsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sXG4gICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgZnJlcXVlbmN5OiAwLjA1LFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwYXVzZU9uQmx1cjogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWNsZXNDb25maWdcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSFRNTEZsaXBCb29rIGZyb20gJ3JlYWN0LXBhZ2VmbGlwJ1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9QYWdlJ1xuaW1wb3J0IFBhZ2VDb3ZlciBmcm9tICcuLi9QYWdlQ292ZXInXG5pbXBvcnQgTXlTbGlkZXMgZnJvbSAnLi4vTXlTbGlkZXMnXG5cbmNvbnN0IE15RmxpcEJvb2sgPSAocHJvcHM6IGFueSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGltcG9ydCgnQGxvdHRpZWZpbGVzL2xvdHRpZS1wbGF5ZXInKVxuICB9KVxuICBjb25zdCBpc0Rlc2t0b3BPckxhcHRvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogMTI0MSB9KVxuICBjb25zdCBpc1RhYmxldFZhbCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogNzIwLCBtYXhXaWR0aDogMTI0MCB9KVxuICBjb25zdCBpc01vYmlsZVZhbCA9IHVzZU1lZGlhUXVlcnkoeyBtYXhXaWR0aDogNzE5IH0pXG5cbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShpc01vYmlsZVZhbClcbiAgY29uc3QgW2lzVGFibGV0LCBzZXRJc1RhYmxldF0gPSB1c2VTdGF0ZShpc1RhYmxldFZhbClcbiAgY29uc3QgW2lzRGVza3RvcCwgc2V0SXNEZXNrdG9wXSA9IHVzZVN0YXRlKGlzRGVza3RvcE9yTGFwdG9wKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb2JpbGUoaXNNb2JpbGVWYWwpXG4gICAgc2V0SXNUYWJsZXQoaXNUYWJsZXRWYWwpXG4gICAgc2V0SXNEZXNrdG9wKGlzRGVza3RvcE9yTGFwdG9wKVxuICB9KVxuICBjb25zdCB7IGluVmlldyA9IGZhbHNlIH0gPSBwcm9wc1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHBhZ2VGbGlwID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBsb3R0aWVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgLy8gY29uc3Qgc2hvdWxkUmVuZGVyRmxpcEJvb2sgPSB0cnVlXG4gIGNvbnN0IHNob3VsZFJlbmRlckZsaXBCb29rID0gaXNUYWJsZXQgfHwgaXNEZXNrdG9wXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAocGFnZUZsaXA/LmN1cnJlbnQpIHtcbiAgLy8gICAgIGlmIChpblZpZXcgJiYgcGFnZSA8PSAxKSB7XG4gIC8vICAgICAgIHBhZ2VGbGlwLmN1cnJlbnQucGFnZUZsaXAoKS5mbGlwKDEpXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9LCBbaW5WaWV3XSlcblxuICBjb25zdCBmbGlwQm9va1N0eWxlID0ge1xuICAgIHdpZHRoOiBpc1RhYmxldCA/IGAzNTBweGAgOiBgNTAwcHhgLFxuICAgIGhlaWdodDogJzczM3B4J1xuICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgzcHgsIDNweClgXG4gIH1cblxuICBjb25zdCBvblBhZ2UgPSAoZTogYW55KSA9PiBzZXRQYWdlKGUuZGF0YSlcblxuICBjb25zdCBzbGlkZXMgPSBbXG4gICAgPFBhZ2UgaXNTbGlkZXM9e3RydWV9IGtleT1cIjFcIiBudW1iZXI9eycxJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2dvJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVjBBQUFDUUNBTUFBQUNjVjBoYkFBQUFsbEJNVkVWQ1F1ci8vLzlBUU9wZlgrMCtQdW8yTnVrdUx1a3hNZWs1T2VyNysvL1MwdmtzTE9saVl1MzQrUDQ2T3VuZTN2dWFtdk5sWmUzazVQdVRrL0t3c1BYdTd2MnBxZlNGaGZETHkvaGJXKzJ6cy9XNHVQYmIyL3BSVWV0V1Z1eDlmZS9Cd2ZkSlNldWpvL05yYSs0bEplalUxUG5xNnZ6eTh2MkJnZkNMaS9HUWtQRnZiKzdNelBpWGwvS2ZuL04yZHUvRXhQY1RFK2lPM2Vjd0FBQUxBa2xFUVZSNG5PMmRhM2VxT2hDR0lTWUVURTJ0dFdxOWE3MVVxN2JuLy8rNUF5UVRBb1R1WFVzWDI2NTV2cHpkUWlGNUNaUEp6SVRqZVFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFqeUZRaHB1Z1cvR0RKYkNTWlI0WjhoWFB1N3lUQkVoWDhFM3ZZVGV1T0ZSSVZyUi9pRysvNTdHRERhZEl0K0VmVEZ6ekVkdk9INHJRMDI4SXU4NGVpdEN6a2NkZkxpUmd3SGIyMUlMbHJkMHo1VGR4czAzYVRmaGR5MHBwbTZhOVowZTM0VmJIV3lMY01EbXQzNklPSXhiM2JSTU5TSGxPMzhwSGJpVFRmcDl4QSs3L1BpK3QydzZUYjlHdGhiSnV0ZWVXWXROTHMxd2Q0dFZ5Rk0vOVBaTk4ybzMwS1lqZHkySnc3cFAwWm9kdXVCem8yNHh3M2h5L1JmWnpTN3RVQkNtTkE2clhnQklaN1NmOC9RN05hQ2dEWEVreWZqZ1R4VFU1dG91bG0vZy9BQTRxWVIzZkNjL3ZDQlpyY09TQmhwcytDbHRvRE11NmZZSlR2S3BodjJLK0FUUFhUdnRKNGs1TUhkWUliUnh4b2dIaXpOYkZOQW1XUmNKQVNZWXZzR2JLekV2YmNYRDVTSmgvV290NCtpcCtua0lIbkJTaEJGMVNVTGg0bVRUeHRGS09PQkNJS0FPNS90SDY1UU9KeTdvYnN4ZjkreXIwR1l0cnJQbVFOR2c5azRGM1JvdnduYlBTTXlUS2dhMDRYRCtzY0M3Sk9YZ25MMnR2Nlk3cDUydmRONDZBWEY4Mmg2UlZubE1lckQ4RWRFbjAycUc1T2o4cnBYSUlkS3dGSG1nUEhaaDE5ayttelpEWDd2UjFIazd5b2lsS0lUSlllbjZpL29YWEp5aWM1K09obFM3dWdKRlM4ZlVlN2VoL3k3STQvcEZmMmhlOTROMStxd2prNFRtZDVQUmZ6aVpaT3JNVG44Ulgzek9UOFZoaTRWNjVLMkNXdGhSbERRVXc1Y2hVZXNNL2YzU3Z4WTNXbytub1BpK0dYemFlbTAvVkJZcDRVNkRGMmhMbVJmamJycXg2MVc5OCs4MXFZdVlTb2UxZ09sNUtwWGNkT1I2V0Y5NnZyK3NqQjh4ZGw1MnNrNjdUcDEydzJvQzMySEZKb2RpQ3pTQmpYclZOZC9XdG55aXY2ZlQ3c2RkZlhDREdLNWZHamRaWC9xcndmTCsrd1hFeTFucmVyNkhVdGU3clpLNmQwb3ZEcTNveTVUU3dsZHVXQ0x1M3lJM2FFWTRWMU1tY09yQ3B2VnE2N2ZNN1pYV3VWQXZjbWxleGxiTm5nS3Q3c2RkZmxJZFNWdHVSVkNYM3JHMEJGbVZuTWQ5UkN1VXJkOTd0cXNsenR6c3dGazlnUHp1OGxLTUJiN2JZRThtMmZiMWFkOVExMnl1dGlOZUZUM2kzSk51enpYNXBJRjArelc4aG42MFhteDUyZ3JXZHhQTzNpVnVuMlI5M2Y1NW5rTDk5TWV2RnpBL1Z2V3N4VWpPRTNiaG0rb0c2L3liVGFxOTUxODArcnpkN1ZRU1I2Q1NGaEI5R2l4M2VLaWppZ0xjcDI2cGRJVHVnRXJxK2RVOEE3OW1YMS9zb0ZYUjEvaU8rb1dlcThtbGM1UFZYUlo2Z3BJdUc4ZFByNSt5c29tMWFSdWZOV2xmcHpwcVdiWnVNNExRZURtZTNYRjIxR1hUN1dnSG9PM2YxcHk4R05vU3gxY0ptMnNUVjBTNm51bTd6d0Z5MVJhK2M3MEFWV1RlVVBxS3FPMkUzU2xlL0RFbmJjU1N0RjA5VnVidWg3L3NKU1FyM29rbDY0YmpPeHIzSTY2RUNFTEJVd3hLN2RSMXllbWhyYytkY09MSlpUVU9aSnlEUkRvbnE1bWIwaGRlZFJOQVdmc3RhTHVFYnBFYTFVWEJEM2E2cFlMV3hNTDBtbXZYNVRKdUIxMXdkYXR0YWM1cXNwVmh2b3hrSHJIcmw0cUhsSjE5UlB1bEs4Ym5sdWNzeG84c2p3L3JhN0hsUnVtWit1b01nL0J0UGNVMXFvdXJGUGVFeVhJcXZyOWtUUnIyQzJwbTR2bFBsYldRK3ZwYjEvdnJDYTBpNzFTQzNGd3VPZnVtVlZ6UStxYTlWSENycktHZ1FScVFicXQxU1BqMmpCb1I1YkJzc0cvaEx4NnlYUkQ2aEp1NVhqZUsrTVhZQlBUa0VCZDZuSUkya3pVTWVQWHhweTZkd0YzNzVpN0lYWHRqVlM5NnFySHpiM1Y1T3ZVNVRTSFpKc0wzQmhxV1UyNEtDWGFEdDVjMmJkYlVwZFEwNTNxMEJ2VG9Va2w2RlhxVG1iUE5xM2h4QVMvVG5BaEVwUVNJL2ZqQlMzcytyd2xkVDBHNllCZDVkQ1Y4TXFxY3ZTYTQ3dldBb1l3Vjk2cE4xZ0ZscjQzcGE2eHZORkxSZW1ZWE9rek92ejYrRzQxNzFZcEt3a216bk5HODZ4dE42VXVoQkQ4cEhqWE1ZMlE0QUhlNGNOUDVDYUd1VzRUZnJkMW5qWXdJZWViVXRlRXBwSW1ySXJSUjhMNEdJNXV0ZW1vVTkzOVE5R1hvTUZzNExJUFU1RDNwdFRONzc2ZXpFUUk2eUpDdzhCYm04cU5Ec3plOWFrYkRZcEZWT21mTUNFWC9WSlpBeVRXYmtwZHNTdDA0dEppSXVBOEVQTHVZcjJsMFJ4Nm85V3RxcC8rVzNYM3B3T3I2aGVSTE9BUDNWR3U0R3FnQlBxVHV2MS9TRjNiaFRmc3B1M3Q5Q24zcStqWmRFYXJHMzFKM1kvM1JjdzdKSGQ2OHhYbm4xZFh4cThPRjdQaE10dDVQOHRGenc4VjZvNy9JWFhEcnU1dTFSRFRlcSt5dnVoVVp5bUhvQ0JFSGQyYU9yS1VmaUFUekJRNi9yc05XMVR5NEFBamVKemFhQ2g5dTdpM3pVRGtaUFl2cUt1L2h1UC9sOThrWEdCc0YwRkMrOTJwYVpCeldWQlhyM1lwU0hYKzI2MERKQlM1eEJwOEJHWGlEamxweWRKb250ZDBuRUduQ3JjQjg1WlYyazVidWFhQlpYTWJQZ2lDNnlxRllweEJtb0tOUlZrZEdyTEE4Y2dvODYzeENLdkxxYnNHVTZnT3dhelFxTG93RU9KVkdPRnpweXQvZWhINUhzT3JPWEdPUHIzZERkYlZwU2hPYUdwUzd2SlBKd3lDMW5INTVQcHVBVnhUaFpsMHZBNUdaNkZET3IrcURWT3o2a0pVUEgzTEtXZUZ6N2RFN1VkU1NzQkRtSHZ2SER5QmZ2VTkxZVJ5akl5RERZbzgrOHJoWlpxT3VxUERuTUpFcHJiS2NPM0pPQXR0d1NHRCt6VWJQVmRtdDJQZW8yU2FIa3hHcDlOb01qak1CWGNORUwxZjBCbXhoRmdsZU1PT0NLU0E5VWt1L3d5MUlxNnRYTG44bXhrUmJaZlRVbXhicytxcW9Xcm5ZYWxrak1jd1ZsWGtEbUh1ZTBmM1lBWWFhelZkOGQwTitHVlRxNklLckxuclcwZVFmMU9XM3RUYU9hYlZFQW9OVGR5dHlheWw5bll2WC9vRWp2bDAyYkQwWjZaM2Q3cm5MblVKQjc5c21UMGZHUFNtR3M4QzdLNjJ5ZURXM1plOE9oT1NNbTlBb3hsM0xjYkwxMHJUak5kYXJINmdzRC9MbEh3NGN4T1VnSFZmRzl0TkF2MHIzeXNaZXUwSEZPdjAvSFh4NWRsQW10RE1qZjlDdGNnWDk2VEJRL0gzWG43RGlQRm1UU1RlbmZuSjZpMno0UThETkg0eUJYbWhJaDBzVVphdU91YUxOVGNRcXpiRnZzMVdPcW5wdHpwZFdZRVp2QjFyc3hVVkpsYVpWU3RWNU5XeVd1RVg4Qkd5MHVXZVovZVhDTmpJYkw0bEE5VVZ5VExIVEx1RU1aUGd6dDdGUm1zZzFTRDQ4cFpyS3pZenVvc2RDeWxESnVaWjl2Nk9GczhzWmkyNTJYNWlQbFhBcytWTWwzTlZ3aEN2aEtueHdyTTNUSmdOQi9zRDR5eU1ieCt3UitOTUxqTmZzVUYxWWRuejllKzYyVHNjZHN2TGNOaWRXSkVLcTBhME1pY3NRTFI5dG04d0M0bDFKcTh6dnRudzJXc211VFgxbXFMQ21PZzBPQzZPQSt1TFZIdExyZ2JWaGNuL2lnMXdtNUZmeWNreU5OVVpkMU1ZZUEvR1V6NVhYdEl2K0gvaEo1dVRjaC91YUZCZHNGOVhmRWVFbUc5bWxOamFVMDIxdW9SRFpObFVyNFVQMVpJOTVUVmdpOG96Y3l2c0J0VzE2MGEvQ2pGTHJnS1QzRHorU2JVSUpaRDM2QnQ1NTAvdWkvbzlXaGdCN0NWeW5yaWY1MTdFQnRVMXhkRlgvWFd3S0g0Z0xubFNyemx4UDYxMGtpMzRxeVAwblRKM1VyaGZqcDFKNG5wN2xvVUNuZ2JWMVZ1WXRsOTFHVFNTcll2anA4OEtRUmhRZCt5YU9MUFgyMWgrd3VmbFNPakh6RlczUjhSYk1mbTJmU2p1UzhqdEV5NEF4U2svWmhrbUNSVTVsRDlEbUJoK0dEOG9PaDE0cWFGa051N0hqTjBUSnora1IyT3l3NVN6bzVWUWk5cG41MTc0QkNubS9jeFY2UTFteFhWSWNybjA4dU5IeC8zRGJucHM4Rk1mcVdFcDM3ZzZrWHl6ZWgrZXo0ZjNtWEFteXNpbjk1RHFhSDdFSjVFNjcrMzE4ZkZ4K0xaeWgra0F5Z1I3V0R5ZWo0c0hMdHhWZlovY1AxVEhxaS8vRDBDUzcwM0lPcjhhQVJjTjdhcm83NStKSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ1hNTmYvRytma1d2eFdzalA4VDhwZThqcTMyZU5VQUFBQUFCSlJVNUVya0pnZ2c9PSdcbiAgICAgICAgICAgIGFsdD0ncHVyc3VpdCdcbiAgICAgICAgICAgIHdpZHRoPXsnMTUwcHgnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoaW1tZXItZmFuY3ktbGV0dGVyIGZhbmN5LWxldHRlcic+XHVEODM1XHVEQ0RFPC9zcGFuPm5jZSB1cG9uIGFcbiAgICAgICAgICB0aW1lLCBJIG1lbnRvcmVkIGEgZ3JvdXAgb2YgcHJvc3BlY3RpdmUgc3R1ZGVudHMgaW50ZXJlc3RlZCBpblxuICAgICAgICAgIGxlYXJuaW5nIHdlYiBmdW5kYW1lbnRhbHMgYXQgYSB3b25kZXJmdWwgc2Nob29sIGNhbGxlZCBQdXJzdWl0LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSSBtZW50b3JlZCB0aGVtIGluIHBhaXItcHJvZ3JhbW1pbmcsIGRlYnVnZ2luZywgd2hpdGVib2FyZGluZywgTm9kZS5qc1xuICAgICAgICAgIGFuZCBob3cgdG8gdXNlIHNoZWxsIHRlcm1pbmFscy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5VbHRpbWF0ZWx5LCB0aGV5IHdlcmUgYWJsZSB0byBidWlsZCBhIGNvbW1hbmQgbGluZSBnYW1lITwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhleSB3ZW50IG9uIHRvIGFkZCB0aGVzZSBza2lsbHMgdG8gdGhlaXIgdG9vbGJveGVzIGFzIHRoZXkgYmVjYW1lXG4gICAgICAgICAgc3VjY2Vzc2Z1bCB3ZWIgZGV2ZWxvcGVycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPixcbiAgICA8UGFnZSBpc1NsaWRlcz17dHJ1ZX0ga2V5PVwiMlwiICBudW1iZXI9eycyJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2dvJz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICB4bWxuc1hsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgaWQ9J0NvZ25pemFudF9Mb2dvJ1xuICAgICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgICAgd2lkdGg9J2F1dG8nXG4gICAgICAgICAgICBoZWlnaHQ9J2F1dG8nXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgODIwIDE4OS41NidcbiAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9J25ldyAwIDAgODIwIDE4OS41NidcbiAgICAgICAgICAgIHhtbFNwYWNlPSdwcmVzZXJ2ZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPScjMDAzM0ExJ1xuICAgICAgICAgICAgICBkPSdNNDY5LjIxOSwxMTQuMDk0bDQ3LjU3My00Ni4zMzFoLTQ2Ljg1NVY0NS45NDVoODAuMTQ0VjY4LjEybC00Ny41OCw0Ni4xNTVoNDguNDg1djIxLjgxNWgtODEuNzQ5ICBMNDY5LjIxOSwxMTQuMDk0eiBNNDM1LjQxOCwxNi4yOTVoMjQuNzgzdjIyLjQyOWgtMjQuNzgzVjE2LjI5NXogTTQzNS4wODIsNDYuMjE3aDI0Ljc4NXY5MC4xNDZoLTI0Ljc4NVY0Ni4yMTd6IE0xMzUuMzE4LDkxLjAxOSAgYzAuMDk5LTI1Ljc2NywyMS4xMjEtNDYuNTgzLDQ2Ljk3NC00Ni41MThjMjUuODU0LDAuMDY2LDQ2Ljc3MSwyMC45ODksNDYuNzM3LDQ2Ljc1NmMtMC4wMzIsMjUuNzY1LTIxLjAwMSw0Ni42MzgtNDYuODU1LDQ2LjYzOCAgYy0xMi40NjUsMC4wMTgtMjQuNDItNC45MjItMzMuMjE3LTEzLjcyMkMxNDAuMTYsMTE1LjM3MiwxMzUuMjUsMTAzLjQzOCwxMzUuMzE4LDkxLjAxOXogTTIwNC45NjMsOTEuMDE5ICBjMC0xMi44MDEtMTAuMTMyLTIzLjQ1My0yMi43OS0yMy40NTNjLTEyLjg0NCwwLTIyLjYxNywxMC42NC0yMi42MTcsMjMuNDUzYzAsMTIuODEzLDkuNzczLDIzLjQ1NCwyMi42MTcsMjMuNDU0ICBjMTIuNjU4LTAuMDIsMjIuNzk2LTEwLjY1MywyMi43OTYtMjMuNDU0SDIwNC45NjN6IE0zNDAuODc0LDQ1Ljk0NWgyNC42MTJ2MTAuMDk3YzUuNzgzLTcuNDA1LDE0LjY0Ni0xMS44OTksMjQuOTU2LTExLjg5OSAgYzIxLjM1NCwwLDM0LjE5OCwxMy43MDIsMzQuMTk4LDM2Ljk1N3Y1NC45OTFoLTI1LjE0OFY4NC4zNDdjMC0xMi4wNzktNS42MTItMTkuMTMzLTE2LjY0My0xOS4xMzMgIGMtOS40MDYsMC0xNy4xODUsNi40ODYtMTcuMTg1LDIxLjYwMnY0OS4yMmgtMjQuNzcxTDM0MC44NzQsNDUuOTQ1eiBNNTUyLjM5Nyw5MS4wMTljMC0zMS45MTUsMjMuNTM0LTQ2LjkwNiw0My45NzEtNDYuOTA2ICBjMTEuNzY2LDAsMjAuOTg2LDQuMzIsMjYuOTUxLDEwLjY0MXYtOC44MDhoMjQuNzcxdjkwLjE0NmgtMjQuNzcxdi0xMC4wOTdjLTUuOTY1LDcuMDMtMTUuNTU3LDExLjktMjcuMzExLDExLjkgIEM1NzYuODI4LDEzNy44OTUsNTUyLjM5NywxMjIuNzcxLDU1Mi4zOTcsOTEuMDE5eiBNNjI0LjAzMSw5MC44NGMwLTEzLjM0NC05Ljc2OC0yNC4xNjMtMjMuMTU1LTI0LjE2MyAgYy0xMy43NSwwLTI0LjIzOSwxMC4yNzUtMjQuMjM5LDI0LjE2M2MwLDEzLjg4NSwxMC40ODksMjQuMzM1LDI0LjIzOSwyNC4zMzVjMTMuNDAxLDAsMjMuMTY3LTEwLjk5OCwyMy4xNjctMjQuMzM1SDYyNC4wMzF6ICAgTTY1OC4xMTEsNDUuOTQ1aDI0LjYwNXYxMC4wOTdjNS43OTEtNy40MDUsMTQuNjUyLTExLjg5OSwyNC45NjUtMTEuODk5YzIxLjM0NiwwLDM0LjE5MSwxMy43MDIsMzQuMTkxLDM2Ljk1N3Y1NC45OTFoLTI1LjE1ICBWODQuMzQ3YzAtMTIuMDc5LTUuNTc0LTE5LjEzMy0xNi42NC0xOS4xMzNjLTkuNDA4LDAtMTcuMTg3LDYuNDg2LTE3LjE4NywyMS42MDJ2NDkuMjJoLTI0Ljc3MUw2NTguMTExLDQ1Ljk0NXogTTQ2OS4yMTksMTM2LjA5MSAgdi0yMS45OTdsNDcuNTczLTQ2LjMzMWgtNDYuODU1VjQ1Ljk0NWg4MC4xNDRWNjguMTJsLTQ3LjU4LDQ2LjE1NSBNMTA4Ljg3OSw5MC4yMzRsLTAuMzQxLDAuNzE2ICBjLTYuODQzLDE0LjM3NS0xOS40MjYsMjIuNjItMzQuNTI1LDIyLjYyYy0yMS44OTMsMC0zOS4wMTYtMTcuMjQzLTM5LjAxNi0zOS4yNTNjMC0yMi41NzEsMTcuMDA1LTM5LjU4NiwzOS41Ni0zOS41ODYgIGMxNC42MTYsMCwyNS43MTksNi44MiwzMy4wMSwyMC4yODFsMC4zODksMC43MTZsMjIuMDYtMTQuMDUzbC0wLjM3MS0wLjYxOEMxMTguMTg2LDIxLjYxLDk3LjU4OCwxMCw3NC41NTcsMTAgIEMzNy43NTEsMTAsMTAsMzcuNjU2LDEwLDc0LjMzYzAsMzcuMjc3LDI3LjE1MSw2NC4zMzQsNjQuNTU3LDY0LjMzNGMyNC4xMDgsMCw0NS40MDctMTMuMzM1LDU2Ljk3Ni0zNS42NzJsMC4zNDctMC42NzUgIEwxMDguODc5LDkwLjIzNHogTTIzNS4yNzIsOTEuMDE5YzAtMzEuOTE1LDIzLjUzNC00Ni45MDYsNDMuOTcxLTQ2LjkwNmMxMS43NjYsMCwyMC45ODIsNC44NywyNi45NTEsMTEuNTM1di05LjcwMmgyNC43NzF2ODcuNjQgIGMwLDI1LjQyMy0xNi4xMDIsNDUuOTc2LTQ2LjY3Niw0NS45NzZjLTIyLjk3NiwwLTM5Ljc5Ny0xMS45MDYtNDcuMDY2LTI1Ljk2NmwyMS44OTMtMTIuMjU3YzQuNyw5LjM3NCwxMy4wMDUsMTUuMzI1LDI1LjE0MywxNS4zMjUgIGMxMy4zOSwwLDIxLjg4Ny0xMC40NTYsMjEuODg3LTIyLjE3N3YtOC40OTJjLTUuOTcyLDcuMDMtMTUuNTU3LDExLjktMjcuMzEyLDExLjlDMjU5LjY5MiwxMzcuODk1LDIzNS4yNzIsMTIyLjc3MSwyMzUuMjcyLDkxLjAxOXogICBNMzA2LjkwNiw5MC44NGMwLTEzLjM0NC05Ljc2Ni0yNC4xNjMtMjMuMTU2LTI0LjE2M2MtMTMuNzQ5LDAtMjQuMjM4LDEwLjI3NS0yNC4yMzgsMjQuMTYzYzAsMTMuODg1LDEwLjQ4OSwyNC4zMzUsMjQuMjM4LDI0LjMzNSAgQzI5Ny4xNDEsMTE1LjE3NSwzMDYuOTA2LDEwNC4xNzcsMzA2LjkwNiw5MC44NHogTTgwMi45MDgsNjguMTJWNDUuOTQ1aC0xNy4wMDVWMTYuMjA5aC0yNC43NzF2MjkuNzM2aC0xNS4zOTFWNjguMTJoMTUuMzU5djI4Ljg0OSAgYzAsMjkuMzkxLDkuNDA2LDM5LjEyMiwzOC4xNzMsMzkuMTIyaDMuNjE3di0yMy4wNzZjLTE1LjE5NywwLTE3LjAwNS0yLjE2NS0xNy4wMDUtMTYuMjI2VjY4LjEySDgwMi45MDh6IE04MDguMTY3LDI2Ljk2NyAgYy0xLjE4NCwxLjE4OC0yLjc5NiwxLjg1Ny00LjQ3OCwxLjg1N2MtMS42ODEsMC0zLjI5My0wLjY2OS00LjQ3Ny0xLjg1N2MtMS4yMS0xLjE3NS0xLjg4My0yLjc5My0xLjg1OS00LjQ3NSAgYzAuMDA2LTIuODUxLDEuOTMzLTUuMzQzLDQuNjk4LTYuMDc2YzIuNzY1LTAuNzMzLDUuNjc5LDAuNDc2LDcuMTA1LDIuOTQ3YzEuNDI3LDIuNDcyLDEuMDExLDUuNTktMS4wMTQsNy42MDRIODA4LjE2N3ogICBNNzk5Ljg0NCwxOC42NjZjLTEuMDM3LDEuMDA2LTEuNjA5LDIuMzk2LTEuNTg2LDMuODM5Yy0wLjAyMywxLjQ0OCwwLjU0NSwyLjg0MiwxLjU3NCwzLjg2NGMxLjAxOSwxLjAyMywyLjQwNSwxLjU5OSwzLjg1MiwxLjU5OSAgczIuODM0LTAuNTc2LDMuODUyLTEuNTk5YzEuMDM4LTEuMDE3LDEuNjEtMi40MTQsMS41ODUtMy44NjRjMC4wMi0yLjIwMy0xLjMwNS00LjE5Ni0zLjM0Ny01LjA0ICBjLTIuMDQtMC44NDMtNC4zOTEtMC4zNjgtNS45NDEsMS4yMDFINzk5Ljg0NHogTTgwMy41NiwxOS4wMThjMC42NDItMC4wMzMsMS4yODQsMC4wNTEsMS44OTUsMC4yNDcgIGMwLjcxLDAuMjgyLDEuMTQ4LDAuOTk2LDEuMDc5LDEuNzUzYzAuMDM1LDAuNTQ0LTAuMjIxLDEuMDY3LTAuNjc3LDEuMzcxYy0wLjMwOCwwLjE3Ny0wLjY0OSwwLjI5LTEuMDAyLDAuMzMzICBjMC40NzYsMC4wNDcsMC45MDcsMC4yOTQsMS4xODksMC42NzljMC4yMzQsMC4zMDgsMC4zNjUsMC42ODEsMC4zNzcsMS4wNjd2MC41MTJjMCwwLjE1NSwwLDAuMzI4LDAsMC41MTIgIGMwLjAwMiwwLjEyMSwwLjAyLDAuMjQzLDAuMDU1LDAuMzU4bDAuMDQ0LDAuMDg3aC0xLjE0NWMtMC4wMDQtMC4wMjMtMC4wMDQtMC4wNDUsMC0wLjA2OHYtMC4wNzR2LTAuMjIydi0wLjU0OSAgYzAuMDgzLTAuNjA4LTAuMTY4LTEuMjE0LTAuNjU3LTEuNTg2Yy0wLjQzLTAuMTgxLTAuODk3LTAuMjU3LTEuMzYzLTAuMjIyaC0wLjk2NXYyLjcyMmgtMS4yMzl2LTYuOTE5SDgwMy41NnogTTgwNC44OCwyMC4xMDQgIGMtMC40NjYtMC4yMDItMC45NzUtMC4yODktMS40ODItMC4yNTJoLTEuMDQ2djIuNTA1aDEuMTA5YzAuMzk1LDAuMDE5LDAuNzg3LTAuMDMzLDEuMTY0LTAuMTU0ICBjMC4zOTUtMC4xNzgsMC42NjktMC41NDgsMC43MjEtMC45NzhDODA1LjM5OSwyMC43OTUsODA1LjIyMSwyMC4zNyw4MDQuODgsMjAuMTA0eidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoaW1tZXItZmFuY3ktbGV0dGVyIGZhbmN5LWxldHRlcic+XHVEODM1XHVERDk4PC9zcGFuPm9vbiBhZnRlclxuICAgICAgICAgIFB1cnN1aXQsIEkgam9pbmVkIENvZ25pemFudCBhcyBhIFNvZnR3YXJlIEVuZ2luZWVyLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEF0IENvZ25pemFudCBJIGFtIHJlc3BvbnNpYmxlIGZvciBidWlsZGluZyBhbmQgbWFpbnRhaW5pbmcgd2ViXG4gICAgICAgICAgYXBwbGljYXRpb25zIGZvciBvbmUgb2YgdGhlIGNvbXBhbnkncyBjbGllbnRzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEknbSBhYmxlIHRvIHVzZSBtYW55IGRpZmZlcmVudCB0ZWNobm9sb2dpZXMgYW5kIGZyYW1ld29ya3MgdG8gYnVpbGQgYVxuICAgICAgICAgIHJvYnVzdCB3ZWIgYXBwbGljYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT24gYSBkYWlseSBiYXNpcyBJIHVzZSBSZWFjdC5qcywgTmV4dC5qcywgQ1NTMywgSFRNTCA1LCBKYXZhU2NyaXB0XG4gICAgICAgICAgRVM2LCBOb2RlLmpzLCBFeHByZXNzLmpzLCBUeXBlU2NyaXB0LCBKZXN0LCBDeXByZXNzLCBPcmFjbGUgQVRHXG4gICAgICAgICAgQnVzaW5lc3MgQ29udHJvbCBDZW50ZXIsIGFuZCBtYW55IG1vcmUhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT4sXG4gICAgPFBhZ2UgaXNTbGlkZXM9e3RydWV9IGtleT1cIjNcIiAgbnVtYmVyPXsnMyd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtbG9nbyc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgd2lkdGg9JzE3NSdcbiAgICAgICAgICBoZWlnaHQ9JzY4J1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMzggMjknXG4gICAgICAgID5cbiAgICAgICAgICA8ZyBmaWxsPSdub25lJyBmaWxsUnVsZT0nZXZlbm9kZCc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPScjRkZGRkZFJ1xuICAgICAgICAgICAgICBkPSdNMTAzLjUgMy44NDJDMTA2LjU2Ljc0NSAxMTAuOTEzLjM1NiAxMTIuOS4zNTZjNS40MDYgMCA5LjA1IDIuNDM2IDguODk0IDYuMTcyaDE1LjcwN2wxLjUzNC0yLjY3M2gxMC4zNTdsLTEuNTU5IDIuNzE0aDMuNTczbC0uNDI4Ljc0NmMyLjA2Ny0xLjIyOCA0LjEzMi0xLjc5NyA2LjQ3Ny0xLjczNCA1LjM1NS4xNDMgNy45NDUgNC41NDEgNS43MDEgMTAuNjktLjA5OC4yNy0uMi41MzctLjMwNS44bDExLjA2LTguMDU2aC03LjY0Nmw0LjkyLTguNTY4aDIyLjc2MmwtMy41MDYgNi4xMDhjMS42MTYtLjY4IDIuODQzLS45MTUgNC41OTEtLjkxNSA1LjgzOSAwIDYuOTgzIDQuNDk4IDYuNzQ1IDcuMDFsMy40OTYtNi4wNzJoOC4zNDZjNS42OTUtMS4xMSA2LjkxNSAzLjUgNi45OCAzLjcxNyAyLjczOC0zLjE0MSA2LjI1LTQuODUzIDkuOTkzLTQuNjU1IDIuODU1LjE1MyA5LjUyNyAxLjk0MiAzLjc2NiAxNC4wNzgtMS44MjQgMy44NDItNi4wMDcgOC43MzctMTIuNTUgOC4zNy00LjYtLjI2LTYuNDI0LTMuNDgtNi4wNzEtNi41NGwtMy4zNTQgNS44NTQtMTkuMDk2LS4wMDUuNzM5LTEuMjgzYy0yLjA0IDEuMzcyLTQuODE5IDIuMTU2LTcuNDEgMS45NjgtNC4zMi0uMzE0LTUuNDI1LTIuNDk2LTUuOTkxLTQuNDE3bC0yLjE0OCAzLjczMmgtMjIuODAybDEuMDAxLTEuNzNjLTIuMjQ2IDEuNjQtNC44NyAyLjQ3Ny03LjgxMSAyLjMxNS0zLjA1NC0uMTY4LTUuOTEzLTEuNjU5LTYuMjYtNS40MTdsLTIuNzc2IDQuODMyaC01LjA2Yy0zLjYyMiAwLTQuODY3LTMuMzQ1LTUuMDY5LTQuMDAzLTIuNjc5IDQuMTQ1LTcuNTc1IDQuNjExLTkuNiA0LjYxMS02LjE2OCAwLTcuNjEzLTMuMjc2LTcuNzk3LTMuNzJsLTEuNzg4IDMuMTA0SDBWLjQ1M2gxMDUuNDQ2bC0xLjk0NiAzLjM5eidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPScjMEEwQjA5J1xuICAgICAgICAgICAgICBkPSdNMjM1LjYwMiAzLjc3OHYtLjY3NGguNDU1Yy4yMzQgMCAuNDc4LjA0NS40NzguMzE5IDAgLjMzNS0uMjU0LjM1NS0uNTM2LjM1NWgtLjM5N3ptMCAuMjc0aC4zODNsLjU4Ljk1M2guMzdsLS42MjQtLjk2OGMuMzItLjAzLjU2OS0uMjA3LjU2OS0uNTkzIDAtLjQzNy0uMjUzLS42MjMtLjc3MS0uNjIzaC0uODI4djIuMTg0aC4zMjF2LS45NTN6bS0xLjEzMS0uMTQ3YzAtLjg5OC42NjQtMS41NzIgMS41NDMtMS41NzIuODQ1IDAgMS41MjUuNjc0IDEuNTI1IDEuNTcyIDAgLjkxMy0uNjggMS41ODMtMS41MjUgMS41ODMtLjg3OSAwLTEuNTQzLS42Ny0xLjU0My0xLjU4M3ptMS41NDMgMS45MDJjMS4wMjcgMCAxLjkxMS0uODAyIDEuOTExLTEuOTAyIDAtMS4wODQtLjg4NC0xLjg4NS0xLjkxMS0xLjg4NS0xLjA1IDAtMS45My44LTEuOTMgMS44ODUgMCAxLjEuODggMS45MDIgMS45MyAxLjkwMnonXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD0nI0Q1MkIxRSdcbiAgICAgICAgICAgICAgZD0nTTIzMC41MTcgNy4wNzJjNC42ODYuMjUgNS41NSA0LjA2NiAzLjg4MyA4Ljc5NS0uMzE3LjktLjY2NCAxLjczNi0xLjAzNSAyLjUxNWgtOS41ODRjLS42MDMgMS41MTItLjg1OCAyLjk1LS4wOTYgMy4xLjgxOC4xNjEgMS42NjgtLjY5MSAyLjU2Ny0yLjA3NGg2LjU5MWMtMi44NiA1LjI3MS02LjY4IDcuNDc3LTEwLjk4IDcuMjQ4LTUuMTEtLjI3NC01LjQ4Ny00LjI0Ny0zLjgyLTguOTc2IDIuMzI4LTYuNjA3IDcuMDczLTEwLjg5NyAxMi40NzQtMTAuNjA4em0tMi42NzYgOC43MjJjLjgwNS0xLjY4NCAxLjE0LTIuODU4LjEyOC0zLjA0Mi0uOTU4LS4xNzUtMi4wNzUgMS4xMDctMy4xNjYgMy4wNDJoMy4wMzh6TTIxNi42NTYgOC4wMTVjLTMuMTYyLS43NzItNS4yNCAxLjIyLTUuMjQgMS4yMmwuNjkyLTEuMjI0aC02LjAwNWwtMTAuMzM1IDE3Ljk1M2g2LjU5OGw2LjIxLTEwLjgxMWMuNDM1LS43NjYgMS4wMjctMS42NDYgMS45MTMtMS40NTcuNzkuMTY5IDEuMDI1Ljg5NC43NjUgMS4zOGwtNi4yNSAxMC44OTNoNi41NWw3LjQ5Ny0xMy4wOWMxLjAzNC0xLjktLjY2Ny00LjQ0My0yLjM5NS00Ljg2NE0xOTMuMDA2IDE2LjE1Yy0xLjYwNiAzLjEwNi0yLjcwMiA0LjY1NC00LjA1NCA0LjM4OC0uOTg0LS4xOTMtLjYxNi0xLjU5NC4zNTMtMy40NyAxLjM1NC0yLjYyIDIuODA3LTQuNTI3IDQuMDE3LTQuMzE2IDEuMTMyLjE5Ny42NTMgMS41MjMtLjMxNiAzLjM5OHptMi40MzUtOS4wNzhjLTUuNC0uMjg5LTEwLjQ3MiA0LTEyLjggMTAuNjA4LTEuNjY3IDQuNzI5LS45NjMgOC43MDIgNC4xNDYgOC45NzYgNS4xNjIuMjc1IDEwLjEwNC0yLjk1NSAxMi44NjQtMTAuNzg5IDEuNjY3LTQuNzMuNDc2LTguNTQ1LTQuMjEtOC43OTV6J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9JyNENTJCMUUnXG4gICAgICAgICAgICAgIGQ9J00xODcuNjYyIDguNTE5bDMuODEtNi42MzloLTE5LjQ1NmwtMy4yNzQgNS43aDkuNTczbC0xNi40NSAxMS45ODQtMy43MDQgNi40aDE5LjQ4OGwzLjI1OS01LjY2NWgtOS4xNDhsMTUuOTAyLTExLjc4TTE1NS4xNiAxNi4wNzVjLTEuNjA1IDMuMDk3LTIuNzAyIDQuNjQtNC4wNTMgNC4zNzUtLjk4NS0uMTkzLS42MTctMS41OS4zNTItMy40NiAxLjM1NC0yLjYxMiAyLjgwNi00LjUxNCA0LjAxNi00LjMwNCAxLjEzMy4xOTcuNjUzIDEuNTE5LS4zMTUgMy4zODl6bTIuNDM1LTkuMDUzYy01LjQwMS0uMjg5LTEwLjQ3MyAzLjk4OC0xMi44IDEwLjU3Ny0xLjY2NiA0LjcxNi0uOTYyIDguNjc4IDQuMTQ3IDguOTUyIDUuMTYyLjI3NSAxMC4xMDMtMi45NDYgMTIuODYzLTEwLjc1OCAxLjY2Ny00LjcxNi40NzUtOC41MjEtNC4yMS04Ljc3MXpNMTQyLjM5MyAxMy4xNTloMy41ODhsMi45NTMtNS4xNTdoLTMuNTc3bDEuNTU5LTIuNzEzaC03LjA1TDEzMS40MiAyMGMtLjc3IDEuNDA4LS42OTggMi45ODYuNDI1IDQuNDEuOCAxLjAzNiAxLjY0MiAxLjU1MyAzLjE1OCAxLjU1M0gxMzlsMi43NzEtNC44MjVoLTMuMDE3Yy0uMjMyIDAtLjQ5NS4wMzgtLjU5My0uMTgxLS4wNS0uMTM1LS4wOC0uMjc3LS4wMTktLjQwM2w0LjI1MS03LjM5Nk0xMzAuMzAzIDguMDAybC02LjcwOCAxMS45MjdjLS41NDguOTg2LTEuMTE2IDEuMjY2LTEuOTg2IDEuMDk1LTEuMDg2LS4yMTMtLjYzMi0xLjA0NC0uMzE4LTEuNjEybDYuNjEtMTEuNDFoLTYuNTczcy03LjQ3NCAxMy4wMDQtNy40NyAxMy4wMWMtMS4zMzIgMi40NDMuNDE3IDQuODkgNC43NDUgNS40MyAyLjQ2MS4zMDcgNy42MjIuMDEyIDEwLjA1My00LjE1bC4wMTMtLjAxIDguMTc2LTE0LjI4aC02LjU0Mk0xMTEuODMgOS45NTRsLTIuODQ0IDQuOTU5aC0zLjQ2M2wzLjExNi01LjQzNWMuNDEtLjcyIDEuMjA1LTEuMzU3IDIuNDU0LTEuMjM3IDEuMDQ2LjEgMS4zODQuNjM1LjczNiAxLjcxM3ptMi43NzYtOC4wNjRjLTIuODY3LS4zNTgtOC45NTkgMC0xMS42MyA1LjA4Mkw5Mi4wNjggMjUuOTU0aDcuMTA5bDMuMDQyLTUuM2gzLjQ1N2wtMy4wNDUgNS4zaDcuMDU1bDEwLjA0OS0xNy40MzVjMS42NzItMy4wNzMuMDYyLTUuOTgtNS4xMy02LjYyOXonXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD0nI0YzNzEwMCdcbiAgICAgICAgICAgICAgZD0nTTEwMS45NTcgMS44ODdMODguMTMgMjUuOTUyaC44MTdsMTMuODIzLTI0LjA2NWgtLjgxMnptLTUgMEw4My4xMzQgMjUuOTUyaDEuNjg5TDk4LjY1IDEuODg3aC0xLjY5M3ptLTMuMDE3IDBoLTIuODdMNzcuMjQgMjUuOTUyaDIuODY2bDQuOTg1LTguNjUgOC44NS0xNS40MTV6bS05Ljg1OSAwTDcwLjI0OCAyNS45NTJoNC42MzRMODguNzI4IDEuODg3aC00LjY0N3ptLTguOTc1IDBMNjEuMjc3IDI1Ljk1Mmg3LjI4MUw4Mi4zOTMgMS44ODdoLTcuMjg3em0tMTEuMDQ2IDBMNTAuMjMyIDI1Ljk1Mmg5LjYzNUw3My43MDIgMS44ODdINjQuMDZ6bS0xMi44NDkgMGwtMTMuODQgMjQuMDY1aDExLjcwNWwxMy44My0yNC4wNjVINTEuMjF6bS00OS44MjIgMHYyNC4wNjVoMzUuMDQ0TDUwLjI1NyAxLjg4N0gxLjM4OXonXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoaW1tZXItZmFuY3ktbGV0dGVyIGZhbmN5LWxldHRlcic+XHVEODM1XHVEQ0RFPC9zcGFuPm5lIHByb2plY3RcbiAgICAgICAgSSdtIHJlYWxseSBleGNpdGVkIGFib3V0IGlzIEF1dG9ab25lLlxuICAgICAgPC9wPlxuICAgICAgPHA+SSd2ZSBiZWVuIGEgbWVtYmVyIG9mIHRoZSBBdXRvWm9uZSBEZXYgdGVhbSBzaW5jZSAyMDE4ITwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSBtaWdyYXRlZCB0aGlzIGFtYXppbmcgZS1jb21tZXJjZSBzaXRlIGZyb20gYW4gb2xkZXIgc3RhY2sgdG8gYSBuZXdcbiAgICAgICAgYmxhemluZyBmYXN0IG1vZGVybml6ZWQgc3RhY2suXG4gICAgICA8L3A+XG4gICAgICA8cD5XZSB1c2UgYW4gYWdpbGUgc2NydW0gbWV0aG9kb2xvZ3kgdG8gZ2V0IHdvcmsgZG9uZSBlZmZpY2llbnRseS4gPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIHVzZSBtYW55IHRlY2hub2xvZ2llcyBoZXJlIGFzIHRoZSBnaWFudCBlLWNvbW1lcmNlIHNpdGUgc2VydmVzXG4gICAgICAgIG1pbGxpb25zIG9mIHBlb3BsZSBhIHllYXIsIGdlbmVyYXRlcyBiaWxsaW9ucyBpbiByZXZlbnVlIGFuZCBzdXBwb3J0c1xuICAgICAgICA2LDc2NyBzdG9yZXMhXG4gICAgICA8L3A+XG4gICAgPC9QYWdlPixcbiAgICA8UGFnZSBpc1NsaWRlcz17dHJ1ZX0ga2V5PVwiNFwiICBudW1iZXI9eyc0J30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2dvJz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9J2h0dHBzOi8vd3d3Lm1vbmV5Y2FwdGFpbmxhYnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL2xvZ28tdy5wbmcnXG4gICAgICAgICAgICBhbHQ9J21vbmV5IGNhcHRhaW4gbGFicydcbiAgICAgICAgICAgIHdpZHRoPXsxNzV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2hpbW1lci1mYW5jeS1sZXR0ZXIgZmFuY3ktbGV0dGVyJz5cdUQ4MzVcdURENzg8L3NwYW4+XG4gICAgICAgICAgb25leWNhcHRhaW4gaXMgYSBmYW1pbHkgYWZmYWlyIVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE15IHNpc3RlciAod2hvJ3MgYWxzbyBhIGRldikgYW5kIEkgc3RhcnRlZCB0aGlzIGNvbXBhbnkgYmVjYXVzZSB3ZVxuICAgICAgICAgIGZlZWwgY29uZmlkZW50IHdlIGNhbiB1c2UgdGVjaCB0byBoZWxwIGJhdHRsZSBmaW5hbmNpYWwgaWxsaXRlcmFjeS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSB1c2UgUmVhY3QgTmF0aXZlLCBFeHByZXNzLmpzLCBQb3N0Z3JlcywgR2l0LCBUcmVsbG8sIEdyYXBoUUwgYW5kXG4gICAgICAgICAgb3RoZXIgdGVjaG5vbG9naWVzIGluIG91ciB3b3JrIGZsb3cuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgYXJlIGN1cnJlbnRseSB3b3JraW5nIG9uIEh5cGVQZXJrcyEgSHlwZVBlcmtzIGlzIGRlc2lnbmVkIGZvclxuICAgICAgICAgIGNoaWxkcmVuIHRvIGVhcm4gaW5jZW50aXZlcyBmb3IgZG9pbmcgY2hvcmVzIG9yIGp1c3QgYWNoaWV2aW5nIGdvYWxzXG4gICAgICAgICAgc2V0IHVwIVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPldpdGggb3VyIGhlbHAsIHlvdSBjYW4gYmUgdGhlIENhcHRhaW4gb2YgeW91ciBNb25leSBTaGlwITwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT4sXG4gICAgPFBhZ2UgaXNTbGlkZXM9e3RydWV9IGtleT1cIjVcIiAgbnVtYmVyPXsnNSd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtbG9nbyc+XG4gICAgICAgICAgPGxvdHRpZS1wbGF5ZXJcbiAgICAgICAgICAgIGF1dG9wbGF5XG4gICAgICAgICAgICBsb29wXG4gICAgICAgICAgICBtb2RlPSdub3JtYWwnXG4gICAgICAgICAgICBpZD0nZmlyc3RMb3R0aWUnXG4gICAgICAgICAgICByZWY9e2xvdHRpZVJlZn1cbiAgICAgICAgICAgIHNwZWVkPScxJ1xuICAgICAgICAgICAgc3JjPSdodHRwczovL2Fzc2V0czEubG90dGllZmlsZXMuY29tL3BhY2thZ2VzL2xmMjBfeW15aWtuNmwuanNvbidcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzIwcHgnLCBoZWlnaHQ6ICczMDBweCcgfX1cbiAgICAgICAgICA+PC9sb3R0aWUtcGxheWVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdiYWNrLWNvdmVyLWZpcnN0LXRleHQnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2hpbW1lci1mYW5jeS1sZXR0ZXIgZmFuY3ktbGV0dGVyJz5cdUQ4MzVcdURDRTM8L3A+XG4gICAgICAgICAgPHA+aGlzIHN0b3J5IGRvZXNuJ3QgZW5kIGhlcmUuPC9wPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPkknbSBhdmFpbGFibGUgdG8gY29uc3VsdCBhYm91dCB5b3VyIHByb3NwZWN0aXZlIHByb2plY3QvaWRlYS48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nJz5Ecm9wIG1lIGEgbGluZSE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIF1cblxuICByZXR1cm4gc2hvdWxkUmVuZGVyRmxpcEJvb2sgPyAoXG4gICAgPEhUTUxGbGlwQm9va1xuICAgICAgd2lkdGg9e2lzRGVza3RvcCA/IDUwMCA6IDM1MH1cbiAgICAgIGhlaWdodD17NzMzfVxuICAgICAgc3R5bGU9e2ZsaXBCb29rU3R5bGV9XG4gICAgICBzaXplPSdmaXhlZCdcbiAgICAgIG1pbldpZHRoPXszMDB9XG4gICAgICBtYXhXaWR0aD17MTAwMH1cbiAgICAgIG1pbkhlaWdodD17NDAwfVxuICAgICAgbWF4SGVpZ2h0PXsxNTMzfVxuICAgICAgbWF4U2hhZG93T3BhY2l0eT17MC43fVxuICAgICAgc2hvd0NvdmVyPXt0cnVlfVxuICAgICAgbW9iaWxlU2Nyb2xsU3VwcG9ydD17dHJ1ZX1cbiAgICAgIGNsYXNzTmFtZT0nZGVtby1ib29rJ1xuICAgICAgc3RhcnRQYWdlPXsxfVxuICAgICAgZHJhd1NoYWRvdz17dHJ1ZX1cbiAgICAgIGZsaXBwaW5nVGltZT17MTAwMH1cbiAgICAgIHVzZVBvcnRyYWl0PXtmYWxzZX1cbiAgICAgIHN0YXJ0WkluZGV4PXswfVxuICAgICAgYXV0b1NpemU9e2ZhbHNlfVxuICAgICAgY2xpY2tFdmVudEZvcndhcmQ9e2ZhbHNlfVxuICAgICAgdXNlTW91c2VFdmVudHM9e3RydWV9XG4gICAgICBzd2lwZURpc3RhbmNlPXswfVxuICAgICAgc2hvd1BhZ2VDb3JuZXJzPXtmYWxzZX1cbiAgICAgIGRpc2FibGVGbGlwQnlDbGljaz17ZmFsc2V9XG4gICAgICByZWY9e3BhZ2VGbGlwfVxuICAgICAgb25GbGlwPXtvblBhZ2V9XG4gICAgPlxuICAgICAgPFBhZ2VDb3ZlciBudW1iZXI9eycwJ30gZnJvbnRDb3Zlcj17dHJ1ZX0+XG4gICAgICAgIEJvb2sgT2YgSm9ic1xuICAgICAgPC9QYWdlQ292ZXI+XG4gICAgICA8UGFnZSBwYWdlSGVhZGVyPXsnTGlzdCBPZiBQcm9qZWN0cyd9IG51bWJlcj17JzEnfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYy1jb250YWluZXInPlxuICAgICAgICAgIDxzcGFuPlB1cnN1aXQ8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+UGFnZSAxPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYy1jb250YWluZXInPlxuICAgICAgICAgIDxzcGFuPkNvZ25pemFudDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5QYWdlIDI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9jLWNvbnRhaW5lcic+XG4gICAgICAgICAgPHNwYW4+QXV0b1pvbmU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+UGFnZSAzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYy1jb250YWluZXInPlxuICAgICAgICAgIDxzcGFuPk1vbmV5Q2FwdGFpbiBMYWJzPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlBhZ2UgNDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgICA8UGFnZSBudW1iZXI9eycyJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtbG9nbyc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFWMEFBQUNRQ0FNQUFBQ2NWMGhiQUFBQWxsQk1WRVZDUXVyLy8vOUFRT3BmWCswK1B1bzJOdWt1THVreE1lazVPZXI3Ky8vUzB2a3NMT2xpWXUzNCtQNDZPdW5lM3Z1YW12TmxaZTNrNVB1VGsvS3dzUFh1N3YycHFmU0ZoZkRMeS9oYlcrMnpzL1c0dVBiYjIvcFJVZXRXVnV4OWZlL0J3ZmRKU2V1am8vTnJhKzRsSmVqVTFQbnE2dnp5OHYyQmdmQ0xpL0dRa1BGdmIrN016UGlYbC9LZm4vTjJkdS9FeFBjVEUraU8zZWN3QUFBTEFrbEVRVlI0bk8yZGEzZXFPaENHSVNZRVRFMnR0V3E5YTcxVXE3Ym4vLys1QXlRVEFvVHVYVXNYMjY1NXZwemRRaUY1Q1pQSnpJVGplUWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWp5RlFocHVnVy9HREpiQ1NaUjRaOGhYUHU3eVRCRWhYOEUzdllUZXVPRlJJVnJSL2lHKy81N0dERGFkSXQrRWZURnp6RWR2T0g0clEwMjhJdTg0ZWl0Q3prY2RmTGlSZ3dIYjIxSUxscmQwejVUZHhzMDNhVGZoZHkwcHBtNmE5WjBlMzRWYkhXeUxjTURtdDM2SU9JeGIzYlJNTlNIbE8zOHBIYmlUVGZwOXhBKzcvUGkrdDJ3NlRiOUd0aGJKdXRlZVdZdE5MczF3ZDR0VnlGTS85UFpOTjJvMzBLWWpkeTJKdzdwUDBab2R1dUJ6bzI0eHczaHkvUmZaelM3dFVCQ21OQTZyWGdCSVo3U2Y4L1E3TmFDZ0RYRWt5ZmpnVHhUVTV0b3VsbS9nL0FBNHFZUjNmQ2MvdkNCWnJjT1NCaHBzK0NsdG9ETXU2ZllKVHZLcGh2MksrQVRQWFR2dEo0azVNSGRZSWJSeHhvZ0hpek5iRk5BbVdSY0pBU1lZdnNHYkt6RXZiY1hENVNKaC9Xb3Q0K2lwK25rSUhuQlNoQkYxU1VMaDRtVFR4dEZLT09CQ0lLQU81L3RINjVRT0p5N29ic3hmOSt5cjBHWXRyclBtUU5HZzlrNEYzUm92d25iUFNNeVRLZ2EwNFhEK3NjQzdKT1hnbkwydHY2WTdwNTJ2ZE40NkFYRjgyaDZSVm5sTWVyRDhFZEVuMDJxRzVPajhycFhJSWRLd0ZIbWdQSFpoMTlrK216WkRYN3ZSMUhrN3lvaWxLSVRKWWVuNmkvb1hYSnlpYzUrT2hsUzd1Z0pGUzhmVWU3ZWgveTdJNC9wRmYyaGU5NE4xK3F3ams0VG1kNVBSZnppWlpPck1UbjhSWDN6T1Q4VmhpNFY2NUsyQ1d0aFJsRFFVdzVjaFVlc00vZjNTdnhZM1dvK25vUGkrR1h6YWVtMC9WQllwNFU2REYyaExtUmZqYnJxeDYxVzk4KzgxcVl1WVNvZTFnT2w1S3BYY2RPUjZXRjk2dnIrc2pCOHhkbDUyc2s2N1RwMTJ3Mm9DMzJIRkpvZGlDelNCalhyVk5kL1d0bnlpdjZmVDdzZGRmWENER0s1ZkdqZFpYL3Fyd2ZMKyt3WEV5MW5yZXI2SFV0ZTdyWks2ZDBvdkRxM295NVRTd2xkdVdDTHUzeUkzYUVZNFYxTW1jT3JDcHZWcTY3Zk03WlhXdVZBdmNtbGV4bGJObmdLdDdzZGRmbElkU1Z0dVJWQ1gzckcwQkZtVm5NZDlSQ3VVcmQ5N3Rxc2x6dHpzd0ZrOWdQenU4bEtNQmI3YllFOG0yZmIxYWQ5UTEyeXV0aU5lRlQzaTNKTnV6elg1cElGMCt6VzhobjYwWG14NTJncldkeFBPM2lWdW4yUjkzZjU1bmtMOTlNZXZGekEvVnZXc3hVak9FM2JobStvRzYveWJUYXE5NTE4MCtyemQ3VlFTUjZDU0ZoQjlHaXgzZUtpamlnTGNwMjZwZElUdWdFcnErZFU4QTc5bVgxL3NvRlhSMS9pTytvV2VxOG1sYzVQVlhSWjZncEl1RzhkUHI1K3lzb20xYVJ1Zk5XbGZwenBxV2JadU00TFFlRG1lM1hGMjFHWFQ3V2dIb08zZjFweThHTm9TeDFjSm0yc1RWMFM2bnVtN3p3RnkxUmErYzcwQVZXVGVVUHFLcU8yRTNTbGUvREVuYmNTU3RGMDlWdWJ1aDcvc0pTUXIzb2tsNjRiak94cjNJNjZFQ0VMQlV3eEs3ZFIxeWVtaHJjK2RjT0xKWlRVT1pKeURSRG9ucTVtYjBoZGVkUk5BV2ZzdGFMdUVicEVhMVVYQkQzYTZwWUxXeE1MMG1tdlg1VEp1QjExd2RhdHRhYzVxc3BWaHZveGtIckhybDRxSGxKMTlSUHVsSzhibmx1Y3N4bzhzancvcmE3SGxSdW1aK3VvTWcvQnRQY1UxcW91ckZQZUV5WElxdnI5a1RScjJDMnBtNHZsUGxiV1ErdnBiMS92ckNhMGk3MVNDM0Z3dU9mdW1WVnpRK3FhOVZIQ3JyS0dnUVJxUWJxdDFTUGoyakJvUjViQnNzRy9oTHg2eVhSRDZoSnU1WGplSytNWFlCUFRrRUJkNm5JSTJrelVNZVBYeHB5NmR3RjM3NWk3SVhYdGpWUzk2cXJIemIzVjVPdlU1VFNIWkpzTDNCaHFXVTI0S0NYYUR0NWMyYmRiVXBkUTA1M3EwQnZUb1VrbDZGWHFUbWJQTnEzaHhBUy9UbkFoRXBRU0kvZmpCUzNzK3J3bGRUMEc2WUJkNWRDVjhNcXFjdlNhNDd2V0FvWXdWOTZwTjFnRmxyNDNwYTZ4dk5GTFJlbVlYT2t6T3Z6NitHNDE3MVlwS3drbXpuTkc4Nnh0TjZVdWhCRDhwSGpYTVkyUTRBSGU0Y05QNUNhR3VXNFRmcmQxbmpZd0llZWJVdGVFcHBJbXJJclJSOEw0R0k1dXRlbW9VOTM5UTlHWG9NRnM0TElQVTVEM3B0VE43NzZlekVRSTZ5SkN3OEJibThxTkRzemU5YWtiRFlwRlZPbWZNQ0VYL1ZKWkF5VFdia3Bkc1N0MDR0SmlJdUE4RVBMdVlyMmwwUng2bzlXdHFwLytXM1gzcHdPcjZoZVJMT0FQM1ZHdTRHcWdCUHFUdXYxL1NGM2JoVGZzcHUzdDlDbjNxK2paZEVhckczMUozWS8zUmN3N0pIZDY4eFhubjFkWHhxOE9GN1BoTXR0NVA4dEZ6dzhWNm83L0lYWERydTV1MVJEVGVxK3l2dWhVWnltSG9DQkVIZDJhT3JLVWZpQVR6QlE2L3JzTlcxVHk0QUFqZUp6YWFDaDl1N2kzelVEa1pQWXZxS3UvaHVQL2w5OGtYR0JzRjBGQys5MnBhWkJ6V1ZCWHIzWXBTSFgrMjYwREpCUzV4QnA4QkdYaURqbHB5ZEpvbnRkMG5FR25DcmNCODVaVjJrNWJ1YWFCWlhNYlBnaUM2eXFGWXB4Qm1vS05SVmtkR3JMQThjZ284NjN4Q0t2THFic0dVNmdPd2F6UXFMb3dFT0pWR09GenB5dC9laEg1SHNPck9YR09QcjNkRGRiVnBTaE9hR3BTN3ZKUEp3eUMxbkg1NVBwdUFWeFRoWmwwdkE1R1o2RkRPcitxRFZPejZrSlVQSDNMS1dlRno3ZEU3VWRTU3NCRG1IdnZIRHlCZnZVOTFlUnlqSXlERFlvOCs4cmhaWnFPdXFQRG5NSkVwcmJLY08zSk9BdHR3U0dEK3pVYlBWZG10MlBlbzJTYUhreEdwOU5vTWpqTUJYY05FTDFmMEJteGhGZ2xlTU9PQ0tTQTlVa3Uvd3kxSXE2dFhMbjhteGtSYlpmVFVteGJzK3Fxb1dybllhbGtqTWN3VmxYa0RtSHVlMGYzWUFZYWF6VmQ4ZDBOK0dWVHE2SUtyTG5yVzBlUWYxT1czdFRhT2FiVkVBb05UZHl0eWF5bDluWXZYL29FanZsMDJiRDBaNlozZDdybkxuVUpCNzlzbVQwZkdQU21HczhDN0s2MnllRFczWmU4T2hPU01tOUFveGwzTGNiTDEwclRqTmRhckg2Z3NEL0xsSHc0Y3hPVWdIVmZHOXROQXYwcjN5c1pldTBIRk92MC9IWHg1ZGxBbXRETWpmOUN0Y2dYOTZUQlEvSDNYbjdEaVBGbVRTVGVuZm5KNmkyejRROEROSDR5QlhtaEloMHNVWmF1T3VhTE5UY1FxemJGdnMxV09xbnB0enBkV1lFWnZCMXJzeFVWSmxhWlZTdFY1Tld5V3VFWDhCR3kwdVdlWi9lWENOakliTDRsQTlVVnlUTEhUTHVFTVpQZ3p0N0ZSbXNnMVNENDhwWnJLell6dW9zZEN5bERKdVpaOXY2T0ZzOHNaaTI1Mlg1aVBsWEFzK1ZNbDNOVndoQ3ZoS254d3JNM1RKZ05CL3NENHl5TWJ4K3dSK05NTGpOZnNVRjFZZG56OWUrNjJUc2Nkc3ZMY05pZFdKRUtxMGEwTWljc1FMUjl0bTh3QzRsMUpxOHp2dG53MldzbXVUWDFtcUxDbU9nME9DNk9BK3VMVkh0THJnYlZoY24vaWcxd201RmZ5Y2t5Tk5VWmQxTVllQS9HVXo1WFh0SXYrSC9oSjV1VGNoL3VhRkJkc0Y5WGZFZUVtRzltbE5qYVUwMjF1b1JEWk5sVXI0VVAxWkk5NVRWZ2k4b3pjeXZzQnRXMTYwYS9DakZMcmdLVDNEeitTYlVJSlpEMzZCdDU1MC91aS9vOVdoZ0I3Q1Z5bnJpZjUxN0VCdFUxeGRGWC9YV3dLSDRnTG5sU3J6bHhQNjEwa2kzNHF5UDBuVEozVXJoZmpwMUo0bnA3bG9VQ25nYlYxVnVZdGw5MUdUU1NyWXZqcDg4S1FSaFFkK3lhT0xQWDIxaCt3dWZsU09qSHpGVzNSOFJiTWZtMmZTanVTOGp0RXk0QXhTay9aaGttQ1JVNWxEOURtQmgrR0Q4b09oMTRxYUZrTnU3SGpOMFRKeitrUjJPeXc1U3pvNVZRaTlwbjUxNzRCQ25tL2N4VjZRMW14WFZJY3JuMDh1Tkh4LzNEYm5wczhGTWZxV0VwMzdnNmtYeXplaCtlejRmM21YQW15c2luOTVEcWFIN0VKNUU2NyszMThmRngrTFp5aCtrQXlnUjdXRHllajRzSEx0eFZmWi9jUDFUSHFpLy9EMENTNzAzSU9yOGFBUmNON2Fybzc1K0pJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDWE1OZi9HK2ZrV3Z4V3NqUDhUOHBlOGpxMzJlTlVBQUFBQUJKUlU1RXJrSmdnZz09J1xuICAgICAgICAgICAgICBhbHQ9J3B1cnN1aXQnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaGltbWVyLWZhbmN5LWxldHRlciBmYW5jeS1sZXR0ZXInPlx1RDgzNVx1RENERTwvc3Bhbj5uY2UgdXBvblxuICAgICAgICAgICAgYSB0aW1lLCBJIG1lbnRvcmVkIGEgZ3JvdXAgb2YgcHJvc3BlY3RpdmUgc3R1ZGVudHMgaW50ZXJlc3RlZCBpblxuICAgICAgICAgICAgbGVhcm5pbmcgd2ViIGZ1bmRhbWVudGFscyBhdCBhIHdvbmRlcmZ1bCBzY2hvb2wgY2FsbGVkIFB1cnN1aXQuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJIG1lbnRvcmVkIHRoZW0gaW4gcGFpci1wcm9ncmFtbWluZywgZGVidWdnaW5nLCB3aGl0ZWJvYXJkaW5nLFxuICAgICAgICAgICAgTm9kZS5qcyBhbmQgaG93IHRvIHVzZSBzaGVsbCB0ZXJtaW5hbHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlVsdGltYXRlbHksIHRoZXkgd2VyZSBhYmxlIHRvIGJ1aWxkIGEgY29tbWFuZCBsaW5lIGdhbWUhPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhleSB3ZW50IG9uIHRvIGFkZCB0aGVzZSBza2lsbHMgdG8gdGhlaXIgdG9vbGJveGVzIGFzIHRoZXkgYmVjYW1lXG4gICAgICAgICAgICBzdWNjZXNzZnVsIHdlYiBkZXZlbG9wZXJzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgICA8UGFnZSBudW1iZXI9eyczJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtbG9nbyc+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgeG1sbnNYbGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgICAgICAgICAgICAgdmVyc2lvbj0nMS4xJ1xuICAgICAgICAgICAgICBpZD0nQ29nbml6YW50X0xvZ28nXG4gICAgICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICAgICAgeT0nMHB4J1xuICAgICAgICAgICAgICB3aWR0aD0nYXV0bydcbiAgICAgICAgICAgICAgaGVpZ2h0PSdhdXRvJ1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgODIwIDE4OS41NidcbiAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD0nbmV3IDAgMCA4MjAgMTg5LjU2J1xuICAgICAgICAgICAgICB4bWxTcGFjZT0ncHJlc2VydmUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD0nIzAwMzNBMSdcbiAgICAgICAgICAgICAgICBkPSdNNDY5LjIxOSwxMTQuMDk0bDQ3LjU3My00Ni4zMzFoLTQ2Ljg1NVY0NS45NDVoODAuMTQ0VjY4LjEybC00Ny41OCw0Ni4xNTVoNDguNDg1djIxLjgxNWgtODEuNzQ5ICBMNDY5LjIxOSwxMTQuMDk0eiBNNDM1LjQxOCwxNi4yOTVoMjQuNzgzdjIyLjQyOWgtMjQuNzgzVjE2LjI5NXogTTQzNS4wODIsNDYuMjE3aDI0Ljc4NXY5MC4xNDZoLTI0Ljc4NVY0Ni4yMTd6IE0xMzUuMzE4LDkxLjAxOSAgYzAuMDk5LTI1Ljc2NywyMS4xMjEtNDYuNTgzLDQ2Ljk3NC00Ni41MThjMjUuODU0LDAuMDY2LDQ2Ljc3MSwyMC45ODksNDYuNzM3LDQ2Ljc1NmMtMC4wMzIsMjUuNzY1LTIxLjAwMSw0Ni42MzgtNDYuODU1LDQ2LjYzOCAgYy0xMi40NjUsMC4wMTgtMjQuNDItNC45MjItMzMuMjE3LTEzLjcyMkMxNDAuMTYsMTE1LjM3MiwxMzUuMjUsMTAzLjQzOCwxMzUuMzE4LDkxLjAxOXogTTIwNC45NjMsOTEuMDE5ICBjMC0xMi44MDEtMTAuMTMyLTIzLjQ1My0yMi43OS0yMy40NTNjLTEyLjg0NCwwLTIyLjYxNywxMC42NC0yMi42MTcsMjMuNDUzYzAsMTIuODEzLDkuNzczLDIzLjQ1NCwyMi42MTcsMjMuNDU0ICBjMTIuNjU4LTAuMDIsMjIuNzk2LTEwLjY1MywyMi43OTYtMjMuNDU0SDIwNC45NjN6IE0zNDAuODc0LDQ1Ljk0NWgyNC42MTJ2MTAuMDk3YzUuNzgzLTcuNDA1LDE0LjY0Ni0xMS44OTksMjQuOTU2LTExLjg5OSAgYzIxLjM1NCwwLDM0LjE5OCwxMy43MDIsMzQuMTk4LDM2Ljk1N3Y1NC45OTFoLTI1LjE0OFY4NC4zNDdjMC0xMi4wNzktNS42MTItMTkuMTMzLTE2LjY0My0xOS4xMzMgIGMtOS40MDYsMC0xNy4xODUsNi40ODYtMTcuMTg1LDIxLjYwMnY0OS4yMmgtMjQuNzcxTDM0MC44NzQsNDUuOTQ1eiBNNTUyLjM5Nyw5MS4wMTljMC0zMS45MTUsMjMuNTM0LTQ2LjkwNiw0My45NzEtNDYuOTA2ICBjMTEuNzY2LDAsMjAuOTg2LDQuMzIsMjYuOTUxLDEwLjY0MXYtOC44MDhoMjQuNzcxdjkwLjE0NmgtMjQuNzcxdi0xMC4wOTdjLTUuOTY1LDcuMDMtMTUuNTU3LDExLjktMjcuMzExLDExLjkgIEM1NzYuODI4LDEzNy44OTUsNTUyLjM5NywxMjIuNzcxLDU1Mi4zOTcsOTEuMDE5eiBNNjI0LjAzMSw5MC44NGMwLTEzLjM0NC05Ljc2OC0yNC4xNjMtMjMuMTU1LTI0LjE2MyAgYy0xMy43NSwwLTI0LjIzOSwxMC4yNzUtMjQuMjM5LDI0LjE2M2MwLDEzLjg4NSwxMC40ODksMjQuMzM1LDI0LjIzOSwyNC4zMzVjMTMuNDAxLDAsMjMuMTY3LTEwLjk5OCwyMy4xNjctMjQuMzM1SDYyNC4wMzF6ICAgTTY1OC4xMTEsNDUuOTQ1aDI0LjYwNXYxMC4wOTdjNS43OTEtNy40MDUsMTQuNjUyLTExLjg5OSwyNC45NjUtMTEuODk5YzIxLjM0NiwwLDM0LjE5MSwxMy43MDIsMzQuMTkxLDM2Ljk1N3Y1NC45OTFoLTI1LjE1ICBWODQuMzQ3YzAtMTIuMDc5LTUuNTc0LTE5LjEzMy0xNi42NC0xOS4xMzNjLTkuNDA4LDAtMTcuMTg3LDYuNDg2LTE3LjE4NywyMS42MDJ2NDkuMjJoLTI0Ljc3MUw2NTguMTExLDQ1Ljk0NXogTTQ2OS4yMTksMTM2LjA5MSAgdi0yMS45OTdsNDcuNTczLTQ2LjMzMWgtNDYuODU1VjQ1Ljk0NWg4MC4xNDRWNjguMTJsLTQ3LjU4LDQ2LjE1NSBNMTA4Ljg3OSw5MC4yMzRsLTAuMzQxLDAuNzE2ICBjLTYuODQzLDE0LjM3NS0xOS40MjYsMjIuNjItMzQuNTI1LDIyLjYyYy0yMS44OTMsMC0zOS4wMTYtMTcuMjQzLTM5LjAxNi0zOS4yNTNjMC0yMi41NzEsMTcuMDA1LTM5LjU4NiwzOS41Ni0zOS41ODYgIGMxNC42MTYsMCwyNS43MTksNi44MiwzMy4wMSwyMC4yODFsMC4zODksMC43MTZsMjIuMDYtMTQuMDUzbC0wLjM3MS0wLjYxOEMxMTguMTg2LDIxLjYxLDk3LjU4OCwxMCw3NC41NTcsMTAgIEMzNy43NTEsMTAsMTAsMzcuNjU2LDEwLDc0LjMzYzAsMzcuMjc3LDI3LjE1MSw2NC4zMzQsNjQuNTU3LDY0LjMzNGMyNC4xMDgsMCw0NS40MDctMTMuMzM1LDU2Ljk3Ni0zNS42NzJsMC4zNDctMC42NzUgIEwxMDguODc5LDkwLjIzNHogTTIzNS4yNzIsOTEuMDE5YzAtMzEuOTE1LDIzLjUzNC00Ni45MDYsNDMuOTcxLTQ2LjkwNmMxMS43NjYsMCwyMC45ODIsNC44NywyNi45NTEsMTEuNTM1di05LjcwMmgyNC43NzF2ODcuNjQgIGMwLDI1LjQyMy0xNi4xMDIsNDUuOTc2LTQ2LjY3Niw0NS45NzZjLTIyLjk3NiwwLTM5Ljc5Ny0xMS45MDYtNDcuMDY2LTI1Ljk2NmwyMS44OTMtMTIuMjU3YzQuNyw5LjM3NCwxMy4wMDUsMTUuMzI1LDI1LjE0MywxNS4zMjUgIGMxMy4zOSwwLDIxLjg4Ny0xMC40NTYsMjEuODg3LTIyLjE3N3YtOC40OTJjLTUuOTcyLDcuMDMtMTUuNTU3LDExLjktMjcuMzEyLDExLjlDMjU5LjY5MiwxMzcuODk1LDIzNS4yNzIsMTIyLjc3MSwyMzUuMjcyLDkxLjAxOXogICBNMzA2LjkwNiw5MC44NGMwLTEzLjM0NC05Ljc2Ni0yNC4xNjMtMjMuMTU2LTI0LjE2M2MtMTMuNzQ5LDAtMjQuMjM4LDEwLjI3NS0yNC4yMzgsMjQuMTYzYzAsMTMuODg1LDEwLjQ4OSwyNC4zMzUsMjQuMjM4LDI0LjMzNSAgQzI5Ny4xNDEsMTE1LjE3NSwzMDYuOTA2LDEwNC4xNzcsMzA2LjkwNiw5MC44NHogTTgwMi45MDgsNjguMTJWNDUuOTQ1aC0xNy4wMDVWMTYuMjA5aC0yNC43NzF2MjkuNzM2aC0xNS4zOTFWNjguMTJoMTUuMzU5djI4Ljg0OSAgYzAsMjkuMzkxLDkuNDA2LDM5LjEyMiwzOC4xNzMsMzkuMTIyaDMuNjE3di0yMy4wNzZjLTE1LjE5NywwLTE3LjAwNS0yLjE2NS0xNy4wMDUtMTYuMjI2VjY4LjEySDgwMi45MDh6IE04MDguMTY3LDI2Ljk2NyAgYy0xLjE4NCwxLjE4OC0yLjc5NiwxLjg1Ny00LjQ3OCwxLjg1N2MtMS42ODEsMC0zLjI5My0wLjY2OS00LjQ3Ny0xLjg1N2MtMS4yMS0xLjE3NS0xLjg4My0yLjc5My0xLjg1OS00LjQ3NSAgYzAuMDA2LTIuODUxLDEuOTMzLTUuMzQzLDQuNjk4LTYuMDc2YzIuNzY1LTAuNzMzLDUuNjc5LDAuNDc2LDcuMTA1LDIuOTQ3YzEuNDI3LDIuNDcyLDEuMDExLDUuNTktMS4wMTQsNy42MDRIODA4LjE2N3ogICBNNzk5Ljg0NCwxOC42NjZjLTEuMDM3LDEuMDA2LTEuNjA5LDIuMzk2LTEuNTg2LDMuODM5Yy0wLjAyMywxLjQ0OCwwLjU0NSwyLjg0MiwxLjU3NCwzLjg2NGMxLjAxOSwxLjAyMywyLjQwNSwxLjU5OSwzLjg1MiwxLjU5OSAgczIuODM0LTAuNTc2LDMuODUyLTEuNTk5YzEuMDM4LTEuMDE3LDEuNjEtMi40MTQsMS41ODUtMy44NjRjMC4wMi0yLjIwMy0xLjMwNS00LjE5Ni0zLjM0Ny01LjA0ICBjLTIuMDQtMC44NDMtNC4zOTEtMC4zNjgtNS45NDEsMS4yMDFINzk5Ljg0NHogTTgwMy41NiwxOS4wMThjMC42NDItMC4wMzMsMS4yODQsMC4wNTEsMS44OTUsMC4yNDcgIGMwLjcxLDAuMjgyLDEuMTQ4LDAuOTk2LDEuMDc5LDEuNzUzYzAuMDM1LDAuNTQ0LTAuMjIxLDEuMDY3LTAuNjc3LDEuMzcxYy0wLjMwOCwwLjE3Ny0wLjY0OSwwLjI5LTEuMDAyLDAuMzMzICBjMC40NzYsMC4wNDcsMC45MDcsMC4yOTQsMS4xODksMC42NzljMC4yMzQsMC4zMDgsMC4zNjUsMC42ODEsMC4zNzcsMS4wNjd2MC41MTJjMCwwLjE1NSwwLDAuMzI4LDAsMC41MTIgIGMwLjAwMiwwLjEyMSwwLjAyLDAuMjQzLDAuMDU1LDAuMzU4bDAuMDQ0LDAuMDg3aC0xLjE0NWMtMC4wMDQtMC4wMjMtMC4wMDQtMC4wNDUsMC0wLjA2OHYtMC4wNzR2LTAuMjIydi0wLjU0OSAgYzAuMDgzLTAuNjA4LTAuMTY4LTEuMjE0LTAuNjU3LTEuNTg2Yy0wLjQzLTAuMTgxLTAuODk3LTAuMjU3LTEuMzYzLTAuMjIyaC0wLjk2NXYyLjcyMmgtMS4yMzl2LTYuOTE5SDgwMy41NnogTTgwNC44OCwyMC4xMDQgIGMtMC40NjYtMC4yMDItMC45NzUtMC4yODktMS40ODItMC4yNTJoLTEuMDQ2djIuNTA1aDEuMTA5YzAuMzk1LDAuMDE5LDAuNzg3LTAuMDMzLDEuMTY0LTAuMTU0ICBjMC4zOTUtMC4xNzgsMC42NjktMC41NDgsMC43MjEtMC45NzhDODA1LjM5OSwyMC43OTUsODA1LjIyMSwyMC4zNyw4MDQuODgsMjAuMTA0eidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaGltbWVyLWZhbmN5LWxldHRlciBmYW5jeS1sZXR0ZXInPlx1RDgzNVx1REQ5ODwvc3Bhbj5vb25cbiAgICAgICAgICAgIGFmdGVyIFB1cnN1aXQsIEkgam9pbmVkIENvZ25pemFudCBhcyBhIFNvZnR3YXJlIEVuZ2luZWVyLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEF0IENvZ25pemFudCBJIGFtIHJlc3BvbnNpYmxlIGZvciBidWlsZGluZyBhbmQgbWFpbnRhaW5pbmcgd2ViXG4gICAgICAgICAgICBhcHBsaWNhdGlvbnMgZm9yIG9uZSBvZiB0aGUgY29tcGFueSdzIGNsaWVudHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSSdtIGFibGUgdG8gdXNlIG1hbnkgZGlmZmVyZW50IHRlY2hub2xvZ2llcyBhbmQgZnJhbWV3b3JrcyB0byBidWlsZFxuICAgICAgICAgICAgYSByb2J1c3Qgd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE9uIGEgZGFpbHkgYmFzaXMgSSB1c2UgUmVhY3QuanMsIE5leHQuanMsIENTUzMsIEhUTUwgNSwgSmF2YVNjcmlwdFxuICAgICAgICAgICAgRVM2LCBOb2RlLmpzLCBFeHByZXNzLmpzLCBUeXBlU2NyaXB0LCBKZXN0LCBDeXByZXNzLCBPcmFjbGUgQVRHXG4gICAgICAgICAgICBCdXNpbmVzcyBDb250cm9sIENlbnRlciwgYW5kIG1hbnkgbW9yZSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlPlxuICAgICAgPFBhZ2UgbnVtYmVyPXsnNCd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLWxvZ28nPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgIHdpZHRoPSczMDAnXG4gICAgICAgICAgICAgIGhlaWdodD0nNjgnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMzggMjknXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnIGZpbGw9J25vbmUnIGZpbGxSdWxlPSdldmVub2RkJz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD0nI0ZGRkZGRSdcbiAgICAgICAgICAgICAgICAgIGQ9J00xMDMuNSAzLjg0MkMxMDYuNTYuNzQ1IDExMC45MTMuMzU2IDExMi45LjM1NmM1LjQwNiAwIDkuMDUgMi40MzYgOC44OTQgNi4xNzJoMTUuNzA3bDEuNTM0LTIuNjczaDEwLjM1N2wtMS41NTkgMi43MTRoMy41NzNsLS40MjguNzQ2YzIuMDY3LTEuMjI4IDQuMTMyLTEuNzk3IDYuNDc3LTEuNzM0IDUuMzU1LjE0MyA3Ljk0NSA0LjU0MSA1LjcwMSAxMC42OS0uMDk4LjI3LS4yLjUzNy0uMzA1LjhsMTEuMDYtOC4wNTZoLTcuNjQ2bDQuOTItOC41NjhoMjIuNzYybC0zLjUwNiA2LjEwOGMxLjYxNi0uNjggMi44NDMtLjkxNSA0LjU5MS0uOTE1IDUuODM5IDAgNi45ODMgNC40OTggNi43NDUgNy4wMWwzLjQ5Ni02LjA3Mmg4LjM0NmM1LjY5NS0xLjExIDYuOTE1IDMuNSA2Ljk4IDMuNzE3IDIuNzM4LTMuMTQxIDYuMjUtNC44NTMgOS45OTMtNC42NTUgMi44NTUuMTUzIDkuNTI3IDEuOTQyIDMuNzY2IDE0LjA3OC0xLjgyNCAzLjg0Mi02LjAwNyA4LjczNy0xMi41NSA4LjM3LTQuNi0uMjYtNi40MjQtMy40OC02LjA3MS02LjU0bC0zLjM1NCA1Ljg1NC0xOS4wOTYtLjAwNS43MzktMS4yODNjLTIuMDQgMS4zNzItNC44MTkgMi4xNTYtNy40MSAxLjk2OC00LjMyLS4zMTQtNS40MjUtMi40OTYtNS45OTEtNC40MTdsLTIuMTQ4IDMuNzMyaC0yMi44MDJsMS4wMDEtMS43M2MtMi4yNDYgMS42NC00Ljg3IDIuNDc3LTcuODExIDIuMzE1LTMuMDU0LS4xNjgtNS45MTMtMS42NTktNi4yNi01LjQxN2wtMi43NzYgNC44MzJoLTUuMDZjLTMuNjIyIDAtNC44NjctMy4zNDUtNS4wNjktNC4wMDMtMi42NzkgNC4xNDUtNy41NzUgNC42MTEtOS42IDQuNjExLTYuMTY4IDAtNy42MTMtMy4yNzYtNy43OTctMy43MmwtMS43ODggMy4xMDRIMFYuNDUzaDEwNS40NDZsLTEuOTQ2IDMuMzl6J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGw9JyMwQTBCMDknXG4gICAgICAgICAgICAgICAgICBkPSdNMjM1LjYwMiAzLjc3OHYtLjY3NGguNDU1Yy4yMzQgMCAuNDc4LjA0NS40NzguMzE5IDAgLjMzNS0uMjU0LjM1NS0uNTM2LjM1NWgtLjM5N3ptMCAuMjc0aC4zODNsLjU4Ljk1M2guMzdsLS42MjQtLjk2OGMuMzItLjAzLjU2OS0uMjA3LjU2OS0uNTkzIDAtLjQzNy0uMjUzLS42MjMtLjc3MS0uNjIzaC0uODI4djIuMTg0aC4zMjF2LS45NTN6bS0xLjEzMS0uMTQ3YzAtLjg5OC42NjQtMS41NzIgMS41NDMtMS41NzIuODQ1IDAgMS41MjUuNjc0IDEuNTI1IDEuNTcyIDAgLjkxMy0uNjggMS41ODMtMS41MjUgMS41ODMtLjg3OSAwLTEuNTQzLS42Ny0xLjU0My0xLjU4M3ptMS41NDMgMS45MDJjMS4wMjcgMCAxLjkxMS0uODAyIDEuOTExLTEuOTAyIDAtMS4wODQtLjg4NC0xLjg4NS0xLjkxMS0xLjg4NS0xLjA1IDAtMS45My44LTEuOTMgMS44ODUgMCAxLjEuODggMS45MDIgMS45MyAxLjkwMnonXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbD0nI0Q1MkIxRSdcbiAgICAgICAgICAgICAgICAgIGQ9J00yMzAuNTE3IDcuMDcyYzQuNjg2LjI1IDUuNTUgNC4wNjYgMy44ODMgOC43OTUtLjMxNy45LS42NjQgMS43MzYtMS4wMzUgMi41MTVoLTkuNTg0Yy0uNjAzIDEuNTEyLS44NTggMi45NS0uMDk2IDMuMS44MTguMTYxIDEuNjY4LS42OTEgMi41NjctMi4wNzRoNi41OTFjLTIuODYgNS4yNzEtNi42OCA3LjQ3Ny0xMC45OCA3LjI0OC01LjExLS4yNzQtNS40ODctNC4yNDctMy44Mi04Ljk3NiAyLjMyOC02LjYwNyA3LjA3My0xMC44OTcgMTIuNDc0LTEwLjYwOHptLTIuNjc2IDguNzIyYy44MDUtMS42ODQgMS4xNC0yLjg1OC4xMjgtMy4wNDItLjk1OC0uMTc1LTIuMDc1IDEuMTA3LTMuMTY2IDMuMDQyaDMuMDM4ek0yMTYuNjU2IDguMDE1Yy0zLjE2Mi0uNzcyLTUuMjQgMS4yMi01LjI0IDEuMjJsLjY5Mi0xLjIyNGgtNi4wMDVsLTEwLjMzNSAxNy45NTNoNi41OThsNi4yMS0xMC44MTFjLjQzNS0uNzY2IDEuMDI3LTEuNjQ2IDEuOTEzLTEuNDU3Ljc5LjE2OSAxLjAyNS44OTQuNzY1IDEuMzhsLTYuMjUgMTAuODkzaDYuNTVsNy40OTctMTMuMDljMS4wMzQtMS45LS42NjctNC40NDMtMi4zOTUtNC44NjRNMTkzLjAwNiAxNi4xNWMtMS42MDYgMy4xMDYtMi43MDIgNC42NTQtNC4wNTQgNC4zODgtLjk4NC0uMTkzLS42MTYtMS41OTQuMzUzLTMuNDcgMS4zNTQtMi42MiAyLjgwNy00LjUyNyA0LjAxNy00LjMxNiAxLjEzMi4xOTcuNjUzIDEuNTIzLS4zMTYgMy4zOTh6bTIuNDM1LTkuMDc4Yy01LjQtLjI4OS0xMC40NzIgNC0xMi44IDEwLjYwOC0xLjY2NyA0LjcyOS0uOTYzIDguNzAyIDQuMTQ2IDguOTc2IDUuMTYyLjI3NSAxMC4xMDQtMi45NTUgMTIuODY0LTEwLjc4OSAxLjY2Ny00LjczLjQ3Ni04LjU0NS00LjIxLTguNzk1eidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPScjRDUyQjFFJ1xuICAgICAgICAgICAgICAgICAgZD0nTTE4Ny42NjIgOC41MTlsMy44MS02LjYzOWgtMTkuNDU2bC0zLjI3NCA1LjdoOS41NzNsLTE2LjQ1IDExLjk4NC0zLjcwNCA2LjRoMTkuNDg4bDMuMjU5LTUuNjY1aC05LjE0OGwxNS45MDItMTEuNzhNMTU1LjE2IDE2LjA3NWMtMS42MDUgMy4wOTctMi43MDIgNC42NC00LjA1MyA0LjM3NS0uOTg1LS4xOTMtLjYxNy0xLjU5LjM1Mi0zLjQ2IDEuMzU0LTIuNjEyIDIuODA2LTQuNTE0IDQuMDE2LTQuMzA0IDEuMTMzLjE5Ny42NTMgMS41MTktLjMxNSAzLjM4OXptMi40MzUtOS4wNTNjLTUuNDAxLS4yODktMTAuNDczIDMuOTg4LTEyLjggMTAuNTc3LTEuNjY2IDQuNzE2LS45NjIgOC42NzggNC4xNDcgOC45NTIgNS4xNjIuMjc1IDEwLjEwMy0yLjk0NiAxMi44NjMtMTAuNzU4IDEuNjY3LTQuNzE2LjQ3NS04LjUyMS00LjIxLTguNzcxek0xNDIuMzkzIDEzLjE1OWgzLjU4OGwyLjk1My01LjE1N2gtMy41NzdsMS41NTktMi43MTNoLTcuMDVMMTMxLjQyIDIwYy0uNzcgMS40MDgtLjY5OCAyLjk4Ni40MjUgNC40MS44IDEuMDM2IDEuNjQyIDEuNTUzIDMuMTU4IDEuNTUzSDEzOWwyLjc3MS00LjgyNWgtMy4wMTdjLS4yMzIgMC0uNDk1LjAzOC0uNTkzLS4xODEtLjA1LS4xMzUtLjA4LS4yNzctLjAxOS0uNDAzbDQuMjUxLTcuMzk2TTEzMC4zMDMgOC4wMDJsLTYuNzA4IDExLjkyN2MtLjU0OC45ODYtMS4xMTYgMS4yNjYtMS45ODYgMS4wOTUtMS4wODYtLjIxMy0uNjMyLTEuMDQ0LS4zMTgtMS42MTJsNi42MS0xMS40MWgtNi41NzNzLTcuNDc0IDEzLjAwNC03LjQ3IDEzLjAxYy0xLjMzMiAyLjQ0My40MTcgNC44OSA0Ljc0NSA1LjQzIDIuNDYxLjMwNyA3LjYyMi4wMTIgMTAuMDUzLTQuMTVsLjAxMy0uMDEgOC4xNzYtMTQuMjhoLTYuNTQyTTExMS44MyA5Ljk1NGwtMi44NDQgNC45NTloLTMuNDYzbDMuMTE2LTUuNDM1Yy40MS0uNzIgMS4yMDUtMS4zNTcgMi40NTQtMS4yMzcgMS4wNDYuMSAxLjM4NC42MzUuNzM2IDEuNzEzem0yLjc3Ni04LjA2NGMtMi44NjctLjM1OC04Ljk1OSAwLTExLjYzIDUuMDgyTDkyLjA2OCAyNS45NTRoNy4xMDlsMy4wNDItNS4zaDMuNDU3bC0zLjA0NSA1LjNoNy4wNTVsMTAuMDQ5LTE3LjQzNWMxLjY3Mi0zLjA3My4wNjItNS45OC01LjEzLTYuNjI5eidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsPScjRjM3MTAwJ1xuICAgICAgICAgICAgICAgICAgZD0nTTEwMS45NTcgMS44ODdMODguMTMgMjUuOTUyaC44MTdsMTMuODIzLTI0LjA2NWgtLjgxMnptLTUgMEw4My4xMzQgMjUuOTUyaDEuNjg5TDk4LjY1IDEuODg3aC0xLjY5M3ptLTMuMDE3IDBoLTIuODdMNzcuMjQgMjUuOTUyaDIuODY2bDQuOTg1LTguNjUgOC44NS0xNS40MTV6bS05Ljg1OSAwTDcwLjI0OCAyNS45NTJoNC42MzRMODguNzI4IDEuODg3aC00LjY0N3ptLTguOTc1IDBMNjEuMjc3IDI1Ljk1Mmg3LjI4MUw4Mi4zOTMgMS44ODdoLTcuMjg3em0tMTEuMDQ2IDBMNTAuMjMyIDI1Ljk1Mmg5LjYzNUw3My43MDIgMS44ODdINjQuMDZ6bS0xMi44NDkgMGwtMTMuODQgMjQuMDY1aDExLjcwNWwxMy44My0yNC4wNjVINTEuMjF6bS00OS44MjIgMHYyNC4wNjVoMzUuMDQ0TDUwLjI1NyAxLjg4N0gxLjM4OXonXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoaW1tZXItZmFuY3ktbGV0dGVyIGZhbmN5LWxldHRlcic+XHVEODM1XHVEQ0RFPC9zcGFuPm5lXG4gICAgICAgICAgICBwcm9qZWN0IEknbSByZWFsbHkgZXhjaXRlZCBhYm91dCBpcyBBdXRvWm9uZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+SSd2ZSBiZWVuIGEgbWVtYmVyIG9mIHRoZSBBdXRvWm9uZSBEZXYgdGVhbSBzaW5jZSAyMDE4ITwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIG1pZ3JhdGVkIHRoaXMgYW1hemluZyBlLWNvbW1lcmNlIHNpdGUgZnJvbSBhbiBvbGRlciBzdGFjayB0byBhXG4gICAgICAgICAgICBuZXcgYmxhemluZyBmYXN0IG1vZGVybml6ZWQgc3RhY2suXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgdXNlIGFuIGFnaWxlIHNjcnVtIG1ldGhvZG9sb2d5IHRvIGdldCB3b3JrIGRvbmUgZWZmaWNpZW50bHkueycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSB1c2UgbWFueSB0ZWNobm9sb2dpZXMgaGVyZSBhcyB0aGUgZ2lhbnQgZS1jb21tZXJjZSBzaXRlIHNlcnZlc1xuICAgICAgICAgICAgbWlsbGlvbnMgb2YgcGVvcGxlIGEgeWVhciwgZ2VuZXJhdGVzIGJpbGxpb25zIGluIHJldmVudWUgYW5kXG4gICAgICAgICAgICBzdXBwb3J0cyA2LDc2NyBzdG9yZXMhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICAgIDxQYWdlIG51bWJlcj17JzUnfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2dvJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPSdodHRwczovL3d3dy5tb25leWNhcHRhaW5sYWJzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9sb2dvLWIucG5nJ1xuICAgICAgICAgICAgICBhbHQ9J21vbmV5IGNhcHRhaW4gbGFicydcbiAgICAgICAgICAgICAgd2lkdGg9ezI1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoaW1tZXItZmFuY3ktbGV0dGVyIGZhbmN5LWxldHRlcic+XHVEODM1XHVERDc4PC9zcGFuPlxuICAgICAgICAgICAgb25leWNhcHRhaW4gaXMgYSBmYW1pbHkgYWZmYWlyIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE15IHNpc3RlciAod2hvJ3MgYWxzbyBhIGRldikgYW5kIEkgc3RhcnRlZCB0aGlzIGNvbXBhbnkgYmVjYXVzZSB3ZVxuICAgICAgICAgICAgZmVlbCBjb25maWRlbnQgd2UgY2FuIHVzZSB0ZWNoIHRvIGhlbHAgYmF0dGxlIGZpbmFuY2lhbCBpbGxpdGVyYWN5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIHVzZSBSZWFjdCBOYXRpdmUsIEV4cHJlc3MuanMsIFBvc3RncmVzLCBHaXQsIFRyZWxsbywgR3JhcGhRTCBhbmRcbiAgICAgICAgICAgIG90aGVyIHRlY2hub2xvZ2llcyBpbiBvdXIgd29yayBmbG93LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBIeXBlUGVya3MhIEh5cGVQZXJrcyBpcyBkZXNpZ25lZCBmb3JcbiAgICAgICAgICAgIGNoaWxkcmVuIHRvIGVhcm4gaW5jZW50aXZlcyBmb3IgZG9pbmcgY2hvcmVzIG9yIGp1c3QgYWNoaWV2aW5nIGdvYWxzXG4gICAgICAgICAgICBzZXQgdXAhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPldpdGggb3VyIGhlbHAsIHlvdSBjYW4gYmUgdGhlIENhcHRhaW4gb2YgeW91ciBNb25leSBTaGlwITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgICA8UGFnZSBudW1iZXI9eyc2J30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtbG9nbyc+XG4gICAgICAgICAgICA8bG90dGllLXBsYXllclxuICAgICAgICAgICAgICBhdXRvcGxheVxuICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgIG1vZGU9J25vcm1hbCdcbiAgICAgICAgICAgICAgaWQ9J2ZpcnN0TG90dGllJ1xuICAgICAgICAgICAgICByZWY9e2xvdHRpZVJlZn1cbiAgICAgICAgICAgICAgc3BlZWQ9JzEnXG4gICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9hc3NldHMxLmxvdHRpZWZpbGVzLmNvbS9wYWNrYWdlcy9sZjIwX3lteWlrbjZsLmpzb24nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzIwcHgnLCBoZWlnaHQ6ICczMDBweCcgfX1cbiAgICAgICAgICAgID48L2xvdHRpZS1wbGF5ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdiYWNrLWNvdmVyLWZpcnN0LXRleHQnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzaGltbWVyLWZhbmN5LWxldHRlciBmYW5jeS1sZXR0ZXInPlx1RDgzNVx1RENFMzwvcD5cbiAgICAgICAgICAgIDxwPmhpcyBzdG9yeSBkb2Vzbid0IGVuZCBoZXJlLjwvcD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+SSdtIGF2YWlsYWJsZSB0byBjb25zdWx0IGFib3V0IHlvdXIgcHJvc3BlY3RpdmUgcHJvamVjdC9pZGVhLjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9Jyc+RHJvcCBtZSBhIGxpbmUhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICAgIDxQYWdlQ292ZXIgYmFja0NvdmVyPXt0cnVlfSBudW1iZXI9eyc3J30+PC9QYWdlQ292ZXI+XG4gICAgPC9IVE1MRmxpcEJvb2s+XG4gICkgOiAoXG4gICAgPE15U2xpZGVzIHNsaWRlcz17c2xpZGVzfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RmxpcEJvb2tcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUGFnZVByb3BzVHlwZSA9IHtcbiAgbnVtYmVyOiBzdHJpbmdcbiAgcGFnZUhlYWRlcj86IHN0cmluZ1xuICBpc1NsaWRlcz86IGJvb2xlYW5cbn1cbmNvbnN0IFBhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UGFnZVByb3BzVHlwZT5cbj4oKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgeyBudW1iZXIsIHBhZ2VIZWFkZXIsIGlzU2xpZGVzLCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc3RyVG9OdW1iZXIgPSBwYXJzZUludChudW1iZXIpXG4gIGNvbnN0IGlzT2RkUGFnZSA9IHN0clRvTnVtYmVyICUgMiAhPT0gMFxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7aXNTbGlkZXMgPyAnYm9va1BhZ2Utc2xpZGVzIGJvb2tQYWdlJyA6ICdib29rUGFnZSd9ICR7XG4gICAgICAgIGlzT2RkUGFnZSA/ICdsZWZ0UGFnZScgOiAncmlnaHRQYWdlJ1xuICAgICAgfWB9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS1jb250ZW50LWNvbnRhaW5lcic+XG4gICAgICAgIDxoMT57cGFnZUhlYWRlcn08L2gxPlxuICAgICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2UtY29udGVudC1wYWdlLW51bWJlciAke1xuICAgICAgICAgICAgaXNPZGRQYWdlID8gJ3BhZ2UtbnVtYmVyLWZsZXhTdGFydCcgOiAncGFnZS1udW1iZXItZmxleEVuZCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdHJUb051bWJlciAtIDEgPT09IDAgfHwgc3RyVG9OdW1iZXIgPT09IDZcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogYCR7c3RyVG9OdW1iZXIgLSAxfS5gfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBteUhvcnNlIGZyb20gJy4uLy4uL2ltYWdlcy9ob21lL215SG9yc2UucG5nJ1xuXG50eXBlIFBhZ2VDb3ZlclByb3BzVHlwZSA9IHtcbiAgbnVtYmVyPzogc3RyaW5nXG4gIGJhY2tDb3Zlcj86IGJvb2xlYW5cbiAgZnJvbnRDb3Zlcj86IGJvb2xlYW5cbn1cbmNvbnN0IFBhZ2VDb3ZlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQYWdlQ292ZXJQcm9wc1R5cGU+XG4+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHsgbnVtYmVyLCBiYWNrQ292ZXIsIGZyb250Q292ZXIsIGNoaWxkcmVuIH0gPSBwcm9wc1xuXG4gIGNvbnN0IG15SG9yc2VJbWdTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtteUhvcnNlfSlgLFxuICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ3JvdW5kJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtiYWNrQ292ZXIgPyAnYmFjay1jb3ZlcicgOiAnJ30gJHtcbiAgICAgICAgZnJvbnRDb3ZlciA/ICdmcm9udC1jb3ZlcicgOiAnJ1xuICAgICAgfSBwYWdlLWNvdmVyIHBhZ2VgfVxuICAgICAgc3R5bGU9e215SG9yc2VJbWdTdHlsZX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgZGF0YS1kZW5zaXR5PSdoYXJkJ1xuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYWNrQ292ZXIgPyAnc2hpbW1lcicgOiAnJ30gJHtcbiAgICAgICAgICBmcm9udENvdmVyID8gJ3NoaW1tZXInIDogJydcbiAgICAgICAgfSBwYWdlLWNvbnRlbnRgfVxuICAgICAgPlxuICAgICAgICA8aDI+e3Byb3BzLmNoaWxkcmVufTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvdmVyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljaydcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnXG5cbnR5cGUgTXlTbGlkZVByb3BzID0ge1xuICBzbGlkZXM6IEFycmF5PEpTWC5FbGVtZW50PlxufVxuY29uc3QgTXlTbGlkZXMgPSAocHJvcHM6IE15U2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCB7IHNsaWRlcyB9ID0gcHJvcHNcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtc2xpZGVzLWNvbnRhaW5lcic+XG4gICAgICA8cCBjbGFzc05hbWU9J3NlY3Rpb24tbWFpbi1oZWFkaW5nJz5XT1JLPC9wPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PntzbGlkZXMubWFwKHNsaWRlID0+IHNsaWRlKX08L1NsaWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlTbGlkZXNcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7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
