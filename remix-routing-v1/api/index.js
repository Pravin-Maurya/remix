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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-N4JBW4X2.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-AMGOQIW7.css";

// app/styles/global.css
var global_default = "/build/_assets/global-X42EWOC3.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
];
function Document({
  children,
  title = "Remix: So great, it's funny!"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  if ((0, import_react2.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this);
  let errorMessage = error instanceof Error ? error.message : "Unknown error";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Uh-oh!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "App Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { children: errorMessage }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
var import_node3 = require("@remix-run/node");

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/utils/session.server.ts
async function register({ password, username }) {
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  return { id: (await db.user.create({
    data: { passwordHash, username }
  })).id, username };
}
async function login({ password, username }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      select: { id: !0, username: !0 },
      where: { id: userId }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/logout.tsx
var action = async ({ request }) => logout(request), loader = async () => (0, import_node3.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-N5UQ7QMB.css";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: styles_default }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      "Remix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jokes!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "jokes", children: "Read Jokes" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/index.tsx
var jokes_exports = {};
__export(jokes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => JokesIndexRoute,
  links: () => links3,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react");

// app/components/header.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function JokesHeader({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-layout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 12,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 13,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    data.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: `Hi ${data.user.username}` }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "button",
          style: { width: "fit-content" },
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 20,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/login", children: "Login" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/jokesList.tsx
var import_react5 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-JHKHIGNL.css";

// app/components/jokesList.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
var JokesList = ({ data }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "jokes-list", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
      fileName: "app/components/jokesList.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
      fileName: "app/components/jokesList.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: (_a = data == null ? void 0 : data.jokeListItems) == null ? void 0 : _a.map(
      ({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: `/jokes/${id}`, children: name }, void 0, !1, {
        fileName: "app/components/jokesList.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this) }, id, !1, {
        fileName: "app/components/jokesList.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ) }, void 0, !1, {
      fileName: "app/components/jokesList.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/jokes/new", className: "button", children: "Add your own" }, void 0, !1, {
      fileName: "app/components/jokesList.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/jokesList.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/jokesList.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/jokesList.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, jokesList_default = JokesList;

// app/routes/jokes/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: jokes_default }
];
function ErrorBoundary2() {
  let error = (0, import_react6.useRouteError)();
  return (0, import_react6.isRouteErrorResponse)(error) && error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "There are no jokes to display." }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: "new", children: "Add your own" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error-container", children: "I did a whoopsies." }, void 0, !1, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
var loader2 = async ({ request }) => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    skip: randomRowNumber,
    take: 1
  }), jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: !0, name: !0 },
    take: 5
  }), user = await getUser(request);
  if (!randomJoke)
    throw new Response("No random joke found", {
      status: 404
    });
  return { randomJoke, jokeListItems, user };
};
function JokesIndexRoute() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(JokesHeader, { data }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { display: "flex", gap: "3rem", margin: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(jokesList_default, { data }, void 0, !1, {
        fileName: "app/routes/jokes/index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
          fileName: "app/routes/jokes/index.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: data.randomJoke.content }, void 0, !1, {
          fileName: "app/routes/jokes/index.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: data.randomJoke.id, children: [
          '"',
          data.randomJoke.name,
          '" Permalink'
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/index.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links4
});
var import_react7 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-MPWT2RCD.css";

// app/utils/request.server.ts
var import_node4 = require("@remix-run/node"), badRequest = (data) => (0, import_node4.json)(data, { status: 400 });

// app/routes/login.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: login_default }
];
function validateUsername(username) {
  if (username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (password.length < 6)
    return "Passwords must be at least 6 characters long";
}
function validateUrl(url) {
  return ["/jokes", "/", "https://remix.run"].includes(url) ? url : "/jokes";
}
var action2 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), password = form.get("password"), username = form.get("username"), redirectTo = validateUrl(
    form.get("redirectTo") || "/jokes"
  );
  if (typeof loginType != "string" || typeof password != "string" || typeof username != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fields = { loginType, password, username }, fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Username/Password combination is incorrect"
      });
    }
    case "register": {
      if (await db.user.findFirst({
        where: { username }
      }))
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `User with username ${username} already exists`
        });
      let user = await register({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Something went wrong trying to create a new user."
      });
    }
    default:
      return badRequest({
        fieldErrors: null,
        fields,
        formError: "Login type invalid"
      });
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react7.useActionData)(), [searchParams] = (0, import_react7.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 117,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "login",
                defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) != null && _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 125,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "register",
                defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 137,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Register"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              id: "username-input",
              name: "username",
              defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
              "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
              "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.username ? "username-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 148,
              columnNumber: 13
            },
            this
          ),
          (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "username-error",
              children: actionData.fieldErrors.username
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 159,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              id: "password-input",
              name: "password",
              type: "password",
              defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
              "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password),
              "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 170,
              columnNumber: 13
            },
            this
          ),
          (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "password-error",
              children: actionData.fieldErrors.password
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 181,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 205,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/jokes", children: "Jokes" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 208,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$id.tsx
var id_exports = {};
__export(id_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action3,
  default: () => JokeRoute,
  links: () => links5,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: jokes_default }
], loader3 = async ({ params, request }) => {
  let userId = await getUserId(request), joke = await db.joke.findUnique({
    where: { id: params.id }
  }), jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: !0, name: !0 },
    take: 5
  }), user = await getUser(request);
  if (!joke)
    throw new Response("What a joke! Not found.", {
      status: 404
    });
  return { isOwner: userId === joke.jokesterId, joke, jokeListItems, user };
}, action3 = async ({ params, request }) => {
  let form = await request.formData();
  if (form.get("intent") !== "delete")
    throw new Response(`The intent ${form.get("intent")} is not supported`, {
      status: 400
    });
  let userId = await requireUserId(request), joke = await db.joke.findUnique({
    where: { id: params.id }
  });
  if (!joke)
    throw new Response("Can't delete what does not exist", {
      status: 404
    });
  if (joke.jokesterId !== userId)
    throw new Response("Pssh, nice try. That's not your joke", { status: 403 });
  return await db.joke.delete({ where: { id: params.id } }), (0, import_node5.redirect)("/jokes");
};
function JokeRoute() {
  let data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(JokesHeader, { data }, void 0, !1, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { display: "flex", gap: "3rem", margin: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(jokesList_default, { data }, void 0, !1, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: data.joke.content }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: ".", children: [
          '"',
          data.joke.name,
          '" Permalink'
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        data.isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            className: "button",
            name: "intent",
            type: "submit",
            value: "delete",
            children: "Delete"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/$id.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3() {
  let { id } = (0, import_react8.useParams)(), error = (0, import_react8.useRouteError)();
  if (console.log({ error }), (0, import_react8.isRouteErrorResponse)(error)) {
    if (error.status === 400)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: "What you're trying to do is not allowed." }, void 0, !1, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this);
    if (error.status === 403)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: [
        'Sorry, but "',
        id,
        '" is not your joke.'
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this);
    if (error.status === 404)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: [
        'Huh? What the heck is "',
        id,
        '"?'
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "error-container", children: [
    'There was an error loading joke by the id "$',
    id,
    '". Sorry.'
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/$id.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action4,
  default: () => NewJokeRoute,
  links: () => links6,
  loader: () => loader4
});
var import_react9 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: jokes_default }
], loader4 = async ({ request }) => {
  let userId = await getUserId(request), jokeListItems = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: !0, name: !0 },
    take: 5
  }), user = await getUser(request);
  if (!userId)
    throw new Response("Unauthorized", { status: 401 });
  return (0, import_node6.json)({ jokeListItems, user });
};
function ErrorBoundary4() {
  let error = (0, import_react9.useRouteError)();
  return console.log({ error }), (0, import_react9.isRouteErrorResponse)(error) && error.status === 401 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "You must be logged in to create a joke." }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/login", children: "Login" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "error-container", children: "Something unexpected went wrong. Sorry about that." }, void 0, !1, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 3)
    return "That joke's name is too short";
}
var action4 = async ({ request }) => {
  let userId = await requireUserId(request), form = await request.formData(), content = form.get("content"), name = form.get("name");
  if (typeof content != "string" || typeof name != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fieldErrors = {
    content: validateJokeContent(content),
    name: validateJokeName(name)
  }, fields = { content, name };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  let joke = await db.joke.create({
    data: { ...fields, jokesterId: userId }
  });
  return (0, import_node6.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react9.useActionData)(), data = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(JokesHeader, { data }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { display: "flex", gap: "3rem", margin: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(jokesList_default, {}, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { flexGrow: 1, maxWidth: "600px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
              "Name:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "input",
                {
                  defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
                  name: "name",
                  type: "text",
                  "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name),
                  "aria-errormessage": (_c = actionData == null ? void 0 : actionData.fieldErrors) != null && _c.name ? "name-error" : void 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/jokes/new.tsx",
                  lineNumber: 117,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "p",
              {
                className: "form-validation-error",
                id: "name-error",
                role: "alert",
                children: actionData.fieldErrors.name
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 128,
                columnNumber: 15
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
              "Content:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "textarea",
                {
                  defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
                  name: "content",
                  "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content),
                  "aria-errormessage": (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.content ? "content-error" : void 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/jokes/new.tsx",
                  lineNumber: 140,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 138,
              columnNumber: 15
            }, this),
            (_h = actionData == null ? void 0 : actionData.fieldErrors) != null && _h.content ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "p",
              {
                className: "form-validation-error",
                id: "content-error",
                role: "alert",
                children: actionData.fieldErrors.content
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 152,
                columnNumber: 15
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
            actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "button",
                style: { width: "fit-content" },
                children: "Add"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 168,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OFRA4SBX.js", imports: ["/build/_shared/chunk-BTSADRPJ.js", "/build/_shared/chunk-J7UW6RBQ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4E5Q4PV4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-C773MBAM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/index-TWLBIB6K.js", imports: ["/build/_shared/chunk-O47XESZL.js", "/build/_shared/chunk-H3O36UDX.js", "/build/_shared/chunk-BY7O2LMB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "root", path: "jokes", index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-TWLBIB6K.js", imports: ["/build/_shared/chunk-O47XESZL.js", "/build/_shared/chunk-H3O36UDX.js", "/build/_shared/chunk-BY7O2LMB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/jokes/$id": { id: "routes/jokes/$id", parentId: "root", path: "jokes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$id-JEAUWRMB.js", imports: ["/build/_shared/chunk-H3O36UDX.js", "/build/_shared/chunk-BY7O2LMB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "root", path: "jokes/new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-ERUEZBHU.js", imports: ["/build/_shared/chunk-TXXJ5LLX.js", "/build/_shared/chunk-H3O36UDX.js", "/build/_shared/chunk-BY7O2LMB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-DJQJTQSO.js", imports: ["/build/_shared/chunk-TXXJ5LLX.js", "/build/_shared/chunk-BY7O2LMB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-ETKF2DLA.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "bf6204cf", hmr: void 0, url: "/build/manifest-BF6204CF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "root",
    path: "jokes",
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$id": {
    id: "routes/jokes/$id",
    parentId: "root",
    path: "jokes/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "root",
    path: "jokes/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
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
//# sourceMappingURL=index.js.map
