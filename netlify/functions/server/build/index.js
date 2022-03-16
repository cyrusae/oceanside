var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// route-module:D:\Beep boop\oceanside\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
init_react();
var import_remix2 = __toModule(require_remix());
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("meta", {
    charSet: "UTF-8"
  }), /* @__PURE__ */ React.createElement("title", null, "what the weather doesn't")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments.tsx
var fragments_exports = {};
__export(fragments_exports, {
  default: () => fragments_default
});
init_react();

// app/routes/pacific/fragments/01.tsx
init_react();
function Scene01() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "one"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "It is 2022. It is the 22nd. It is February."), /* @__PURE__ */ React.createElement("p", null, "I am beginning this essay. I am twenty-six years old. I am moving, not for the first time, to Seattle."), /* @__PURE__ */ React.createElement("p", null, "It is snowing.")));
}

// app/routes/pacific/fragments/stripe-washington.tsx
init_react();
var cap_wa = '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.';
function Washington() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Washington",
    className: "flip-in-hor-top hero",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: "",
    "aria-describedby": "cap_wa"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "captimg"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_wa"
  }, cap_wa))));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments.tsx
function Fragments() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Scene01, null), /* @__PURE__ */ React.createElement(Washington, null));
}
var fragments_default = Fragments;

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\stripe-washington.tsx
var stripe_washington_exports = {};
__export(stripe_washington_exports, {
  default: () => Washington2
});
init_react();
var cap_wa2 = '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.';
function Washington2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Washington",
    className: "flip-in-hor-top hero",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: "",
    "aria-describedby": "cap_wa"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "captimg"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_wa"
  }, cap_wa2))));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\stripe-whamline.tsx
var stripe_whamline_exports = {};
__export(stripe_whamline_exports, {
  default: () => Wham
});
init_react();
function Wham() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "kicker"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "kimg"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/climate_stripes_mx.png",
    "aria-describedby": "",
    "aria-details": "",
    className: "slide-in-blurred-bottom"
  })));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-glacier.tsx
var poem_glacier_exports = {};
__export(poem_glacier_exports, {
  Glacier: () => Glacier,
  GlacierA: () => GlacierA,
  GlacierB: () => GlacierB,
  GlacierC: () => GlacierC
});
init_react();
function GlacierA() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "III",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_va.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "III"), "The glacier absorbed greenhouse gases. ", /* @__PURE__ */ React.createElement("br", null), "We are a large part of the biosphere.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}
function GlacierB() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "V",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_sm.png",
    id: "blueq",
    alt: "",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "V"), "We do not know which to fear more,", /* @__PURE__ */ React.createElement("br", null), "The terror of change", /* @__PURE__ */ React.createElement("br", null), "Or the terror of uncertainty, ", /* @__PURE__ */ React.createElement("br", null), "The glacier calving", /* @__PURE__ */ React.createElement("br", null), "Or just after.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}
function GlacierC() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "VIII",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg.png",
    id: "blueqm",
    alt: "",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "VIII"), "I know king tides, ", /* @__PURE__ */ React.createElement("br", null), "And lurid, inescapable storms; ", /* @__PURE__ */ React.createElement("br", null), "But I know, too, ", /* @__PURE__ */ React.createElement("br", null), "That the glacier is involved ", /* @__PURE__ */ React.createElement("br", null), "In what I know.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}
function Glacier() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "glacier"
  }, /* @__PURE__ */ React.createElement(GlacierA, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(GlacierC, null));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-letsay.tsx
var poem_letsay_exports = {};
__export(poem_letsay_exports, {
  default: () => LetSay
});
init_react();
function LetSay() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "LetSay",
    className: "poem",
    "aria-labelledby": "cred_letsay"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/red_quote_bg.png"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, /* @__PURE__ */ React.createElement("p", null, "Let them say, as they must say something:"), /* @__PURE__ */ React.createElement("p", null, "A kerosene beauty.", /* @__PURE__ */ React.createElement("br", null), "It burned."), /* @__PURE__ */ React.createElement("p", null, "Let them say we warmed ourselves by it,", /* @__PURE__ */ React.createElement("br", null), "read by its light, praised,", /* @__PURE__ */ React.createElement("br", null), "and it burned.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_letsay"
  }, "Jane Hirshfield,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Let Them Not Say"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-winsum.tsx
var poem_winsum_exports = {};
__export(poem_winsum_exports, {
  default: () => WinSum
});
init_react();
function WinSum() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "WinSum",
    "aria-labelledby": "cred_season",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blueblack_quote_bg.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA0\xA0\xA0\xA0sit in the center of the poem, invigorated"), /* @__PURE__ */ React.createElement("p", null, "with inky awkward blankness."), /* @__PURE__ */ React.createElement("p", null, "The bottom teeth of summer"), /* @__PURE__ */ React.createElement("p", null, "in winter chattering: here\u2019s the moon.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_season"
  }, "Noah Eli Gordon,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Summer in Winter in Summer"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\quote-clime.tsx
var quote_clime_exports = {};
__export(quote_clime_exports, {
  default: () => Define
});
init_react();
function Define() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "define",
    className: "cite",
    "aria-labelledby": "cred_whyte"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/polaroid_quote_bg.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Consider climate change as about ", /* @__PURE__ */ React.createElement("b", null, "the timing of relationships"), " we have with all that's around us.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_whyte"
  }, "Kyle Whyte,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Braiding Kinship and Time"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\stripe-ohio.tsx
var stripe_ohio_exports = {};
__export(stripe_ohio_exports, {
  default: () => Ohio
});
init_react();
function Ohio() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "ohio",
    className: "hero",
    role: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_oh.png",
    alt: ""
  }));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\photos_chi.tsx
var photos_chi_exports = {};
__export(photos_chi_exports, {
  ChiGar1: () => ChiGar1,
  ChiGar2: () => ChiGar2,
  default: () => Garden
});
init_react();
var faces = ["aguila", "sol"];
var flip = () => {
  let pick;
  if (Math.random() < 0.5) {
    pick = 0;
  } else {
    pick = 1;
  }
  return faces[pick];
};
function Garden() {
  const gardenMe = () => {
    if (flip() === "aguila") {
      return /* @__PURE__ */ React.createElement(ChiGar1, null);
    } else {
      return /* @__PURE__ */ React.createElement(ChiGar2, null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, gardenMe());
}
function ChiGar1() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Charden1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/chi_ver_gard1.jpeg",
    alt: ""
  })));
}
function ChiGar2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Charden2",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/chi_ver_gard2.jpeg",
    alt: ""
  })));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-wave.tsx
var poem_wave_exports = {};
__export(poem_wave_exports, {
  default: () => WAVE
});
init_react();
function WAVE() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "WAW",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/multizzet_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA0 \xA0 \xA0 \xA0 \xA0 to insatiate tempest, unquelled ", /* @__PURE__ */ React.createElement("br", null), "by prayer nor cigarette, careless, mean,"), /* @__PURE__ */ React.createElement("p", null, "a cold-blooded indifference so pure,", /* @__PURE__ */ React.createElement("br", null), "a strong swimmer won't last ten wet minutes.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "M. Bartley Seigel,", /* @__PURE__ */ React.createElement("br", null), '"WAVE AFTER WAVE"'));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-ode.tsx
var poem_ode_exports = {};
__export(poem_ode_exports, {
  default: () => Ode
});
init_react();
function Ode() {
  return /* @__PURE__ */ React.createElement("aside", {
    "aria-labelledby": "credit_ode",
    id: "Ode",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/indigo_paint_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "forgetting the nation is a syndrome."), /* @__PURE__ */ React.createElement("p", null, "All that\u2019s left of the sea in you is foam,"), /* @__PURE__ */ React.createElement("p", null, "the coastline's broken voice and all its crags.")), /* @__PURE__ */ React.createElement("div", {
    id: "credit_ode",
    className: "credit text-focus-in"
  }, "Urayo\xE1n Noel,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"No Longer Ode"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\test1.tsx
var test1_exports = {};
__export(test1_exports, {
  default: () => test1_default
});
init_react();
var content = "`I swear, I *will* make this work`";
function Raw1() {
  return { content };
}
var test1_default = Raw1;

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\01.tsx
var __exports = {};
__export(__exports, {
  default: () => Scene012
});
init_react();
function Scene012() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "one"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "It is 2022. It is the 22nd. It is February."), /* @__PURE__ */ React.createElement("p", null, "I am beginning this essay. I am twenty-six years old. I am moving, not for the first time, to Seattle."), /* @__PURE__ */ React.createElement("p", null, "It is snowing.")));
}

// route-module:D:\Beep boop\oceanside\app\routes\metadata\credit.tsx
var credit_exports = {};
__export(credit_exports, {
  default: () => Metadata,
  links: () => links
});
init_react();

// app/styles/airspace.css
var airspace_default = "/build/_assets/airspace-R4DIOXDJ.css";

// route-module:D:\Beep boop\oceanside\app\routes\metadata\credit.tsx
function links() {
  return [{ rel: "stylesheet", href: airspace_default }];
}
function Metadata() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "metadata"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "project",
    className: "credit about"
  }, /* @__PURE__ */ React.createElement("h3", null, "About ", /* @__PURE__ */ React.createElement("i", null, "what the weather doesn't")), /* @__PURE__ */ React.createElement("p", null, 'This essay was first composed as a final project for CHID 480-A "Upside Down Thinking With the Global South", winter quarter 2022, at the University of Washington. With the exception of specific epigraphs and quotes (see below), all content was produced by Cyrus Eosphoros. Version 1.0 is live as of March 18, 2022; technical improvements are planned but the core content and presentation is in place. If it interests you to do so, ', /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cyrusae/oceanside"
  }, "the source code can be viewed on GitHub"), ".")), /* @__PURE__ */ React.createElement("div", {
    id: "me",
    className: "credit about"
  }, /* @__PURE__ */ React.createElement("h3", null, "About the author"), /* @__PURE__ */ React.createElement("p", null, "Cyrus Eosphoros is having a time of it at all possible times. More work, like and unlike ", /* @__PURE__ */ React.createElement("i", null, "weather"), " alike, can be found and supported ", /* @__PURE__ */ React.createElement("a", {
    href: "https://patreon.com/eosphoros"
  }, "on his Patreon"), " for now. Other technical projects have a home ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cyrusae"
  }, "on GitHub"), " alongside this one. He also has ", /* @__PURE__ */ React.createElement("a", {
    href: "https://visuality.carrd.co"
  }, "this cool virtual business card"), " for hopefully remembering to update important data with.")), /* @__PURE__ */ React.createElement("div", {
    id: "credits",
    className: "credit sources"
  }, /* @__PURE__ */ React.createElement("h3", null, "Credits and third party sources"), /* @__PURE__ */ React.createElement("h5", null, "Text"), "Poems quoted:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, '"Thirteen Ways of Looking at a Glacier" by Craig Santos Perez'), /* @__PURE__ */ React.createElement("li", null, '"Let Them Not Say" by Jane Hirshfield'), /* @__PURE__ */ React.createElement("li", null, '"WAVE AFTER WAVE" by M. Bartley Seigel'), /* @__PURE__ */ React.createElement("li", null, '"No Longer Ode" by Urayo\xE1n Noel')), "Other sources:", /* @__PURE__ */ React.createElement("ul", null), /* @__PURE__ */ React.createElement("h5", null, "Images"), /* @__PURE__ */ React.createElement("p", null, "Climate stripes generated via ", /* @__PURE__ */ React.createElement("a", {
    href: "https://showyourstripes.info"
  }, "Show Your Stripes"), "."), /* @__PURE__ */ React.createElement("p", null, "Todos Santos photographs copyright Howard Ekman, used with permission."), /* @__PURE__ */ React.createElement("p", null, "Seattle smoke summer photographs depict the Chihuly Sculpture Garden at Seattle Center and are by the author."), /* @__PURE__ */ React.createElement("p", null, "Aerial climate photographs by NASA."), "Image assets from PNGtree:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://pngtree.com/freepng/heavy-snow_3723954.html"
  }, '"heavy snow" background')), /* @__PURE__ */ React.createElement("li", null, "Black clouds background"), /* @__PURE__ */ React.createElement("li", null, "Black mist background #1"), /* @__PURE__ */ React.createElement("li", null, "Black mist background #2"), /* @__PURE__ */ React.createElement("li", null, "Fire and sparks background"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", null, 'Frames used for "Thirteen Ways of Looking at a Glacier":'), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #1"), /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #2"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://pngtree.com/freepng/blue-smoke-abstract-frame-art-free-png-and-psd_5512814.html"
  }, "Blue smoke frame #3")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", null, "Frames used for other quotes:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Red and black smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Dark blue smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Purple watercolor smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Cool colors smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Circular cyan frame"))))), /* @__PURE__ */ React.createElement("div", {
    id: "respects",
    className: "credit about"
  }, /* @__PURE__ */ React.createElement("h3", null, "Acknowledgments"), "Specific thanks to:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Tony, for letting me get away with this in the first place"))), /* @__PURE__ */ React.createElement("div", {
    id: "goback"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Back to the essay")));
}

// route-module:D:\Beep boop\oceanside\app\routes\footer.tsx
var footer_exports = {};
__export(footer_exports, {
  default: () => Footer
});
init_react();
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "feet"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/metadata/credit"
  }, "About")));
}

// route-module:D:\Beep boop\oceanside\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
init_react();

// app/routes/pacific/fragments.tsx
init_react();
function Fragments2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Scene01, null), /* @__PURE__ */ React.createElement(Washington, null));
}
var fragments_default2 = Fragments2;

// app/styles/coastline.css
var coastline_default = "/build/_assets/coastline-TUJV7G6Z.css";

// app/routes/pacific/fragments/poem-glacier.tsx
init_react();
function GlacierA2() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "III",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_va.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "III"), "The glacier absorbed greenhouse gases. ", /* @__PURE__ */ React.createElement("br", null), "We are a large part of the biosphere.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}
function GlacierB2() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "V",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_sm.png",
    id: "blueq",
    alt: "",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "V"), "We do not know which to fear more,", /* @__PURE__ */ React.createElement("br", null), "The terror of change", /* @__PURE__ */ React.createElement("br", null), "Or the terror of uncertainty, ", /* @__PURE__ */ React.createElement("br", null), "The glacier calving", /* @__PURE__ */ React.createElement("br", null), "Or just after.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}
function GlacierC2() {
  return /* @__PURE__ */ React.createElement("aside", {
    className: "glacier poem",
    id: "VIII",
    "aria-labelledby": "cred_glacier"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg.png",
    id: "blueqm",
    alt: "",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "VIII"), "I know king tides, ", /* @__PURE__ */ React.createElement("br", null), "And lurid, inescapable storms; ", /* @__PURE__ */ React.createElement("br", null), "But I know, too, ", /* @__PURE__ */ React.createElement("br", null), "That the glacier is involved ", /* @__PURE__ */ React.createElement("br", null), "In what I know.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_glacier"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Thirteen Ways of Looking at a Glacier"')));
}

// app/routes/pacific/fragments/poem-wave.tsx
init_react();
function WAVE2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "WAW",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/multizzet_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA0 \xA0 \xA0 \xA0 \xA0 to insatiate tempest, unquelled ", /* @__PURE__ */ React.createElement("br", null), "by prayer nor cigarette, careless, mean,"), /* @__PURE__ */ React.createElement("p", null, "a cold-blooded indifference so pure,", /* @__PURE__ */ React.createElement("br", null), "a strong swimmer won't last ten wet minutes.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "M. Bartley Seigel,", /* @__PURE__ */ React.createElement("br", null), '"WAVE AFTER WAVE"'));
}

// app/routes/pacific/fragments/stripe-whamline.tsx
init_react();
function Wham2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "kicker"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "kimg"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/climate_stripes_mx.png",
    "aria-describedby": "",
    "aria-details": "",
    className: "slide-in-blurred-bottom"
  })));
}

// app/routes/footer.tsx
init_react();
function Footer2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "feet"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/metadata/credit"
  }, "About")));
}

// app/routes/pacific/fragments/quote-clime.tsx
init_react();
function Define2() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "define",
    className: "cite",
    "aria-labelledby": "cred_whyte"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/polaroid_quote_bg.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Consider climate change as about ", /* @__PURE__ */ React.createElement("b", null, "the timing of relationships"), " we have with all that's around us.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in",
    id: "cred_whyte"
  }, "Kyle Whyte,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Braiding Kinship and Time"')));
}

// app/routes/pacific/fragments/poem-letsay.tsx
init_react();
function LetSay2() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "LetSay",
    className: "poem",
    "aria-labelledby": "cred_letsay"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/red_quote_bg.png"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, /* @__PURE__ */ React.createElement("p", null, "Let them say, as they must say something:"), /* @__PURE__ */ React.createElement("p", null, "A kerosene beauty.", /* @__PURE__ */ React.createElement("br", null), "It burned."), /* @__PURE__ */ React.createElement("p", null, "Let them say we warmed ourselves by it,", /* @__PURE__ */ React.createElement("br", null), "read by its light, praised,", /* @__PURE__ */ React.createElement("br", null), "and it burned.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_letsay"
  }, "Jane Hirshfield,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Let Them Not Say"')));
}

// app/routes/pacific/fragments/poem-ode.tsx
init_react();
function Ode2() {
  return /* @__PURE__ */ React.createElement("aside", {
    "aria-labelledby": "credit_ode",
    id: "Ode",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/indigo_paint_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "forgetting the nation is a syndrome."), /* @__PURE__ */ React.createElement("p", null, "All that\u2019s left of the sea in you is foam,"), /* @__PURE__ */ React.createElement("p", null, "the coastline's broken voice and all its crags.")), /* @__PURE__ */ React.createElement("div", {
    id: "credit_ode",
    className: "credit text-focus-in"
  }, "Urayo\xE1n Noel,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"No Longer Ode"')));
}

// app/routes/pacific/fragments/photos_chi.tsx
init_react();
var faces2 = ["aguila", "sol"];
var flip2 = () => {
  let pick;
  if (Math.random() < 0.5) {
    pick = 0;
  } else {
    pick = 1;
  }
  return faces2[pick];
};
function Garden2() {
  const gardenMe = () => {
    if (flip2() === "aguila") {
      return /* @__PURE__ */ React.createElement(ChiGar12, null);
    } else {
      return /* @__PURE__ */ React.createElement(ChiGar22, null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, gardenMe());
}
function ChiGar12() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Charden1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/chi_ver_gard1.jpeg",
    alt: ""
  })));
}
function ChiGar22() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Charden2",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/chi_ver_gard2.jpeg",
    alt: ""
  })));
}

// app/routes/pacific/fragments/poem-winsum.tsx
init_react();
function WinSum2() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "WinSum",
    "aria-labelledby": "cred_season",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blueblack_quote_bg.png",
    className: "fade-in",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA0\xA0\xA0\xA0sit in the center of the poem, invigorated"), /* @__PURE__ */ React.createElement("p", null, "with inky awkward blankness."), /* @__PURE__ */ React.createElement("p", null, "The bottom teeth of summer"), /* @__PURE__ */ React.createElement("p", null, "in winter chattering: here\u2019s the moon.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_season"
  }, "Noah Eli Gordon,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Summer in Winter in Summer"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\index.tsx
function links2() {
  return [{ rel: "stylesheet", href: coastline_default }];
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "oceanside"
  }, /* @__PURE__ */ React.createElement("main", {
    id: "water"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "beach"
  }, /* @__PURE__ */ React.createElement(fragments_default2, null), /* @__PURE__ */ React.createElement(Ode2, null), /* @__PURE__ */ React.createElement(GlacierA2, null), /* @__PURE__ */ React.createElement(Garden2, null), /* @__PURE__ */ React.createElement(Define2, null), /* @__PURE__ */ React.createElement(LetSay2, null), /* @__PURE__ */ React.createElement(WinSum2, null), /* @__PURE__ */ React.createElement(GlacierB2, null), /* @__PURE__ */ React.createElement(WAVE2, null), /* @__PURE__ */ React.createElement(GlacierC2, null))), /* @__PURE__ */ React.createElement(Wham2, null), /* @__PURE__ */ React.createElement(Footer2, null));
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
  "routes/pacific/fragments": {
    id: "routes/pacific/fragments",
    parentId: "root",
    path: "pacific/fragments",
    index: void 0,
    caseSensitive: void 0,
    module: fragments_exports
  },
  "routes/pacific/fragments/stripe-washington": {
    id: "routes/pacific/fragments/stripe-washington",
    parentId: "routes/pacific/fragments",
    path: "stripe-washington",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_washington_exports
  },
  "routes/pacific/fragments/stripe-whamline": {
    id: "routes/pacific/fragments/stripe-whamline",
    parentId: "routes/pacific/fragments",
    path: "stripe-whamline",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_whamline_exports
  },
  "routes/pacific/fragments/poem-glacier": {
    id: "routes/pacific/fragments/poem-glacier",
    parentId: "routes/pacific/fragments",
    path: "poem-glacier",
    index: void 0,
    caseSensitive: void 0,
    module: poem_glacier_exports
  },
  "routes/pacific/fragments/poem-letsay": {
    id: "routes/pacific/fragments/poem-letsay",
    parentId: "routes/pacific/fragments",
    path: "poem-letsay",
    index: void 0,
    caseSensitive: void 0,
    module: poem_letsay_exports
  },
  "routes/pacific/fragments/poem-winsum": {
    id: "routes/pacific/fragments/poem-winsum",
    parentId: "routes/pacific/fragments",
    path: "poem-winsum",
    index: void 0,
    caseSensitive: void 0,
    module: poem_winsum_exports
  },
  "routes/pacific/fragments/quote-clime": {
    id: "routes/pacific/fragments/quote-clime",
    parentId: "routes/pacific/fragments",
    path: "quote-clime",
    index: void 0,
    caseSensitive: void 0,
    module: quote_clime_exports
  },
  "routes/pacific/fragments/stripe-ohio": {
    id: "routes/pacific/fragments/stripe-ohio",
    parentId: "routes/pacific/fragments",
    path: "stripe-ohio",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_ohio_exports
  },
  "routes/pacific/fragments/photos_chi": {
    id: "routes/pacific/fragments/photos_chi",
    parentId: "routes/pacific/fragments",
    path: "photos_chi",
    index: void 0,
    caseSensitive: void 0,
    module: photos_chi_exports
  },
  "routes/pacific/fragments/poem-wave": {
    id: "routes/pacific/fragments/poem-wave",
    parentId: "routes/pacific/fragments",
    path: "poem-wave",
    index: void 0,
    caseSensitive: void 0,
    module: poem_wave_exports
  },
  "routes/pacific/fragments/poem-ode": {
    id: "routes/pacific/fragments/poem-ode",
    parentId: "routes/pacific/fragments",
    path: "poem-ode",
    index: void 0,
    caseSensitive: void 0,
    module: poem_ode_exports
  },
  "routes/pacific/fragments/test1": {
    id: "routes/pacific/fragments/test1",
    parentId: "routes/pacific/fragments",
    path: "test1",
    index: void 0,
    caseSensitive: void 0,
    module: test1_exports
  },
  "routes/pacific/fragments/01": {
    id: "routes/pacific/fragments/01",
    parentId: "routes/pacific/fragments",
    path: "01",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/metadata/credit": {
    id: "routes/metadata/credit",
    parentId: "root",
    path: "metadata/credit",
    index: void 0,
    caseSensitive: void 0,
    module: credit_exports
  },
  "routes/footer": {
    id: "routes/footer",
    parentId: "root",
    path: "footer",
    index: void 0,
    caseSensitive: void 0,
    module: footer_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxzdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdoYW1saW5lLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWdsYWNpZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdpbnN1bS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccXVvdGUtY2xpbWUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS1vaGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwaG90b3NfY2hpLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdhdmUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tb2RlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFx0ZXN0MS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcMDEudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxtZXRhZGF0YVxcY3JlZGl0LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcZm9vdGVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1nbGFjaWVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvZm9vdGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGkudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13aW5zdW0udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS13YXNoaW5ndG9uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLXdoYW1saW5lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1nbGFjaWVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1sZXRzYXkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLXdpbnN1bS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHF1b3RlLWNsaW1lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLW9oaW8udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwaG90b3NfY2hpLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0td2F2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLW9kZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFx0ZXN0MS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFwwMS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZXRhZGF0YVxcXFxjcmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZm9vdGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInBhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3RvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLXdhc2hpbmd0b25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS13aGFtbGluZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1nbGFjaWVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1sZXRzYXlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLXdpbnN1bVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInF1b3RlLWNsaW1lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpb1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLW9oaW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicGhvdG9zX2NoaVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS13YXZlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEwXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1vZGVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tb2RlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTExXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Rlc3QxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvdGVzdDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInRlc3QxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvMDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIjAxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEzXG4gIH0sXG4gIFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIm1ldGFkYXRhL2NyZWRpdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNFxuICB9LFxuICBcInJvdXRlcy9mb290ZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9mb290ZXJcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJmb290ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTVcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpdmVSZWxvYWQsIE91dGxldCwgTGlua3MgfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vcm91dGVzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcm91dGVzL2Zvb3RlcidcclxuaW1wb3J0IFdoYW0gZnJvbSAnLi9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lJ1xyXG5cclxuLy8gT3V0bGV0IG1heSBjcmVhdGUgZHVwbGljYXRlcyBmcm9tIGluZGV4OyB0ZW1wb3JhcmlseSByZW1vdmluZyBgICAgIDxPdXRsZXQgLz5gLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gcmV0dXJuIChcclxuICA8aHRtbCBsYW5nPSdlbic+XHJcbiAgIDxoZWFkPlxyXG4gICAgPExpbmtzIC8+XHJcbiAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcgLz5cclxuICAgIDx0aXRsZT53aGF0IHRoZSB3ZWF0aGVyIGRvZXNuJ3Q8L3RpdGxlPlxyXG4gICA8L2hlYWQ+XHJcbiAgIDxib2R5PlxyXG4gICAgPE91dGxldCAvPlxyXG4gICAgPExpdmVSZWxvYWQgLz5cclxuICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuIClcclxufSAiLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgT2hpbyBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtb2hpbyc7XHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gJy4vZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBGcmFnbWVudHMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIDxTY2VuZTAxIC8+XHJcbiAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50cyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZTAxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdvbmUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICA8cD5JdCBpcyAyMDIyLiBJdCBpcyB0aGUgMjJuZC4gSXQgaXMgRmVicnVhcnkuPC9wPlxyXG4gIDxwPkkgYW0gYmVnaW5uaW5nIHRoaXMgZXNzYXkuIEkgYW0gdHdlbnR5LXNpeCB5ZWFycyBvbGQuIEkgYW0gbW92aW5nLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLCB0byBTZWF0dGxlLjwvcD5cclxuICA8cD5JdCBpcyBzbm93aW5nLjwvcD48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICIvL2Z1bmN0aW9uIHZpc2libGVDYXAoZSkge1xyXG4gLy9lLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4vL31cclxuLy9NdWx0aXBsZSBhdHRlbXB0cyBiZWluZyBtYWRlIHRvIGdldCB0aGUgY2FwdGlvbiBjb25kaXRpb25hbCBkaXNwbGF5IHRvIHdvcmsgYXMgaW50ZW5kZWQgXHJcblxyXG5jb25zdCBjYXBfd2EgPSAnXCJXYXJtaW5nIHN0cmlwZXNcIiB2aXN1YWxpemF0aW9uIGZvciB0aGUgc3RhdGUgb2YgV2FzaGluZ3Rvbiwgc2hvd2luZyBhbiBvdmVyYWxsIGluY3JlYXNlIGluIHdhcm0geWVhcnMgYW5kIHRoZSBuZWFyLXZhbmlzaG1lbnQgb2YgY29sZCBvbmVzLCBmcm9tIDE4OTUgdG8gMjAyMS4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXNoaW5ndG9uKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXYXNoaW5ndG9uJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgIDxpbWcgc3JjPScvc3RyaXBlc193YS5wbmcnIGFsdD0nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfd2EnPjwvaW1nPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcHRpbWcnPjxkaXYgaWQ9J2NhcF93YSc+e2NhcF93YX08L2Rpdj48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiLy9mdW5jdGlvbiB2aXNpYmxlQ2FwKGUpIHtcclxuIC8vZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuLy99XHJcbi8vTXVsdGlwbGUgYXR0ZW1wdHMgYmVpbmcgbWFkZSB0byBnZXQgdGhlIGNhcHRpb24gY29uZGl0aW9uYWwgZGlzcGxheSB0byB3b3JrIGFzIGludGVuZGVkIFxyXG5cclxuY29uc3QgY2FwX3dhID0gJ1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIFdhc2hpbmd0b24sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcywgZnJvbSAxODk1IHRvIDIwMjEuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICA8aW1nIHNyYz0nL3N0cmlwZXNfd2EucG5nJyBhbHQ9JycgYXJpYS1kZXNjcmliZWRieT0nY2FwX3dhJz48L2ltZz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYXB0aW1nJz48ZGl2IGlkPSdjYXBfd2EnPntjYXBfd2F9PC9kaXY+PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaGFtKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdraWNrZXInPlxyXG4gICA8ZGl2IGlkPSdraW1nJz48aW1nIHNyYz0nL2NsaW1hdGVfc3RyaXBlc19teC5wbmcnIGFyaWEtZGVzY3JpYmVkYnk9XCJcIiBhcmlhLWRldGFpbHM9XCJcIiBjbGFzc05hbWU9J3NsaWRlLWluLWJsdXJyZWQtYm90dG9tJyAvPjwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZnVuY3Rpb24gR2xhY2llckEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J0lJSScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmdfdmEucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VjwvaDU+XHJcbiAgIFdlIGRvIG5vdCBrbm93IHdoaWNoIHRvIGZlYXIgbW9yZSw8YnIvPlxyXG4gICBUaGUgdGVycm9yIG9mIGNoYW5nZTxici8+XHJcbiAgIE9yIHRoZSB0ZXJyb3Igb2YgdW5jZXJ0YWludHksIDxici8+XHJcbiAgIFRoZSBnbGFjaWVyIGNhbHZpbmc8YnIvPlxyXG4gICBPciBqdXN0IGFmdGVyLjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xhY2llckMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J1ZJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmcucG5nJyBpZD0nYmx1ZXFtJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG4vL1VudXNlZCBmb3Igbm93LCBidXQgZnVuIHRvIGhhdmVcclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2dsYWNpZXInPlxyXG4gICA8R2xhY2llckEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxHbGFjaWVyQyAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldFNheSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdMZXRTYXknIGNsYXNzTmFtZT0ncG9lbScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2xldHNheSc+XHJcbiAgIDxpbWcgc3JjPScvcmVkX3F1b3RlX2JnLnBuZycgLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlJz5cclxuICAgIDxwPkxldCB0aGVtIHNheSwgYXMgdGhleSBtdXN0IHNheSBzb21ldGhpbmc6PC9wPlxyXG4gICAgPHA+QSBrZXJvc2VuZSBiZWF1dHkuPGJyLz5cclxuICAgIEl0IGJ1cm5lZC48L3A+XHJcbiAgICA8cD5MZXQgdGhlbSBzYXkgd2Ugd2FybWVkIG91cnNlbHZlcyBieSBpdCw8YnIvPlxyXG4gICAgcmVhZCBieSBpdHMgbGlnaHQsIHByYWlzZWQsPGJyLz5cclxuICAgIGFuZCBpdCBidXJuZWQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCcgaWQ9J2NyZWRfbGV0c2F5Jz5cclxuICAgIEphbmUgSGlyc2hmaWVsZCw8YnIvPjxjaXRlPlwiTGV0IFRoZW0gTm90IFNheVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpblN1bSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdXaW5TdW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9zZWFzb24nIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgIDxpbWcgc3JjPScvYmx1ZWJsYWNrX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7c2l0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBvZW0sIGludmlnb3JhdGVkPC9wPlxyXG4gICAgPHA+d2l0aCBpbmt5IGF3a3dhcmQgYmxhbmtuZXNzLjwvcD5cclxuICAgIDxwPlRoZSBib3R0b20gdGVldGggb2Ygc3VtbWVyPC9wPlxyXG4gICAgPHA+aW4gd2ludGVyIGNoYXR0ZXJpbmc6IGhlcmVcdTIwMTlzIHRoZSBtb29uLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnIGlkPSdjcmVkX3NlYXNvbic+Tm9haCBFbGkgR29yZG9uLDxici8+PGNpdGU+XCJTdW1tZXIgaW4gV2ludGVyIGluIFN1bW1lclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmaW5lKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J2RlZmluZScgY2xhc3NOYW1lPSdjaXRlJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfd2h5dGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5Db25zaWRlciBjbGltYXRlIGNoYW5nZSBhcyBhYm91dCA8Yj50aGUgdGltaW5nIG9mIHJlbGF0aW9uc2hpcHM8L2I+IHdlIGhhdmUgd2l0aCBhbGwgdGhhdCdzIGFyb3VuZCB1cy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX3doeXRlJz5cclxuICAgIEt5bGUgV2h5dGUsPGJyLz48Y2l0ZT5cIkJyYWlkaW5nIEtpbnNoaXAgYW5kIFRpbWVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPaGlvKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdvaGlvJyBjbGFzc05hbWU9J2hlcm8nIHJvbGU9J2ltZyc+XHJcbiAgIDxpbWcgc3JjPScvc3RyaXBlc19vaC5wbmcnIGFsdD0nJy8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGZhY2VzID0gWydhZ3VpbGEnLCAnc29sJ11cclxuXHJcbmNvbnN0IGZsaXAgPSAoKCkgPT4ge1xyXG4gIGxldCBwaWNrO1xyXG4gIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgIHBpY2sgPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHBpY2sgPSAxO1xyXG4gIH1cclxuICByZXR1cm4gZmFjZXNbcGlja107XHJcbiB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FyZGVuKCkge1xyXG4gY29uc3QgZ2FyZGVuTWUgPSAoKSA9PiB7XHJcbiAgIGlmIChmbGlwKCkgPT09ICdhZ3VpbGEnKSB7XHJcbiAgIHJldHVybiA8Q2hpR2FyMSAvPjtcclxuICB9IGVsc2Uge1xyXG4gICByZXR1cm4gPENoaUdhcjIgLz47XHJcbiAgfVxyXG4gfVxyXG5cclxuIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAge2dhcmRlbk1lKCl9XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGlHYXIxKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nQ2hhcmRlbjEnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9jaGlfdmVyX2dhcmQxLmpwZWcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuIFxyXG4gZXhwb3J0IGZ1bmN0aW9uIENoaUdhcjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBpZD0nQ2hhcmRlbjInIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9jaGlfdmVyX2dhcmQyLmpwZWcnIGFsdD0nJy8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdBVkUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J1dBVycgY2xhc3NOYW1lPSdwb2VtJz5cclxuICA8aW1nIHNyYz0nL211bHRpenpldF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+Jm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyB0byBpbnNhdGlhdGUgdGVtcGVzdCwgdW5xdWVsbGVkIDxici8+XHJcbiAgIGJ5IHByYXllciBub3IgY2lnYXJldHRlLCBjYXJlbGVzcywgbWVhbiw8L3A+XHJcbiAgIDxwPmEgY29sZC1ibG9vZGVkIGluZGlmZmVyZW5jZSBzbyBwdXJlLDxici8+XHJcbiAgIGEgc3Ryb25nIHN3aW1tZXIgd29uJ3QgbGFzdCB0ZW4gd2V0IG1pbnV0ZXMuPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPk0uIEJhcnRsZXkgU2VpZ2VsLDxici8+XCJXQVZFIEFGVEVSIFdBVkVcIjwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RlKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkaXRfb2RlJyBpZD0nT2RlJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2luZGlnb19wYWludF9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5mb3JnZXR0aW5nIHRoZSBuYXRpb24gaXMgYSBzeW5kcm9tZS48L3A+XHJcbiAgICA8cD5BbGwgdGhhdFx1MjAxOXMgbGVmdCBvZiB0aGUgc2VhIGluIHlvdSBpcyBmb2FtLDwvcD5cclxuICAgIDxwPnRoZSBjb2FzdGxpbmUncyBicm9rZW4gdm9pY2UgYW5kIGFsbCBpdHMgY3JhZ3MuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0X29kZScgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBVcmF5b1x1MDBFMW4gTm9lbCw8YnIvPjxjaXRlPlwiTm8gTG9uZ2VyIE9kZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImltcG9ydCBtZHhMb2FkZXIgZnJvbSAnQG1keC1qcy9sb2FkZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vL2ltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xyXG5cclxuXHJcbmxldCBjb250ZW50ID0gJ2BJIHN3ZWFyLCBJICp3aWxsKiBtYWtlIHRoaXMgd29ya2AnXHJcbi8vIHZhciBvdXRwdXQgPSBtZHhMb2FkZXIodGhpcywgc3RyaW5nOiBjb250ZW50KTtcclxuLy92YXIgb3V0cHV0ID0gbWFya2VkKGNvbnRlbnQpXHJcblxyXG5mdW5jdGlvbiBSYXcxKCkge1xyXG4gcmV0dXJuIChcclxuICB7IGNvbnRlbnQgfVxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXcxICIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZTAxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdvbmUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICA8cD5JdCBpcyAyMDIyLiBJdCBpcyB0aGUgMjJuZC4gSXQgaXMgRmVicnVhcnkuPC9wPlxyXG4gIDxwPkkgYW0gYmVnaW5uaW5nIHRoaXMgZXNzYXkuIEkgYW0gdHdlbnR5LXNpeCB5ZWFycyBvbGQuIEkgYW0gbW92aW5nLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLCB0byBTZWF0dGxlLjwvcD5cclxuICA8cD5JdCBpcyBzbm93aW5nLjwvcD48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2FpcnNwYWNlLmNzcydcclxuaW1wb3J0IExldFNheSBmcm9tICcuLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheSdcclxuLy9NYXkgYWRkIHBvZW0gZm9yIHB1bmNoLCBsYXRlci5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGFkYXRhKCkge1xyXG4gcmV0dXJuICggXHJcbiAgPGRpdiBpZD0nbWV0YWRhdGEnPlxyXG4gICA8ZGl2IGlkPSdwcm9qZWN0JyBjbGFzc05hbWU9J2NyZWRpdCBhYm91dCc+PGgzPkFib3V0IDxpPndoYXQgdGhlIHdlYXRoZXIgZG9lc24ndDwvaT48L2gzPlxyXG4gICA8cD5UaGlzIGVzc2F5IHdhcyBmaXJzdCBjb21wb3NlZCBhcyBhIGZpbmFsIHByb2plY3QgZm9yIENISUQgNDgwLUEgXCJVcHNpZGUgRG93biBUaGlua2luZyBXaXRoIHRoZSBHbG9iYWwgU291dGhcIiwgd2ludGVyIHF1YXJ0ZXIgMjAyMiwgYXQgdGhlIFVuaXZlcnNpdHkgb2YgV2FzaGluZ3Rvbi4gV2l0aCB0aGUgZXhjZXB0aW9uIG9mIHNwZWNpZmljIGVwaWdyYXBocyBhbmQgcXVvdGVzIChzZWUgYmVsb3cpLCBhbGwgY29udGVudCB3YXMgcHJvZHVjZWQgYnkgQ3lydXMgRW9zcGhvcm9zLiBWZXJzaW9uIDEuMCBpcyBsaXZlIGFzIG9mIE1hcmNoIDE4LCAyMDIyOyB0ZWNobmljYWwgaW1wcm92ZW1lbnRzIGFyZSBwbGFubmVkIGJ1dCB0aGUgY29yZSBjb250ZW50IGFuZCBwcmVzZW50YXRpb24gaXMgaW4gcGxhY2UuIElmIGl0IGludGVyZXN0cyB5b3UgdG8gZG8gc28sIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9jeXJ1c2FlL29jZWFuc2lkZSc+dGhlIHNvdXJjZSBjb2RlIGNhbiBiZSB2aWV3ZWQgb24gR2l0SHViPC9hPi48L3A+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J21lJyBjbGFzc05hbWU9J2NyZWRpdCBhYm91dCc+PGgzPkFib3V0IHRoZSBhdXRob3I8L2gzPlxyXG4gICA8cD5DeXJ1cyBFb3NwaG9yb3MgaXMgaGF2aW5nIGEgdGltZSBvZiBpdCBhdCBhbGwgcG9zc2libGUgdGltZXMuIE1vcmUgd29yaywgbGlrZSBhbmQgdW5saWtlIDxpPndlYXRoZXI8L2k+IGFsaWtlLCBjYW4gYmUgZm91bmQgYW5kIHN1cHBvcnRlZCA8YSBocmVmPSdodHRwczovL3BhdHJlb24uY29tL2Vvc3Bob3Jvcyc+b24gaGlzIFBhdHJlb248L2E+IGZvciBub3cuIE90aGVyIHRlY2huaWNhbCBwcm9qZWN0cyBoYXZlIGEgaG9tZSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vY3lydXNhZSc+b24gR2l0SHViPC9hPiBhbG9uZ3NpZGUgdGhpcyBvbmUuIEhlIGFsc28gaGFzIDxhIGhyZWY9J2h0dHBzOi8vdmlzdWFsaXR5LmNhcnJkLmNvJz50aGlzIGNvb2wgdmlydHVhbCBidXNpbmVzcyBjYXJkPC9hPiBmb3IgaG9wZWZ1bGx5IHJlbWVtYmVyaW5nIHRvIHVwZGF0ZSBpbXBvcnRhbnQgZGF0YSB3aXRoLjwvcD48L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0cycgY2xhc3NOYW1lPSdjcmVkaXQgc291cmNlcyc+PGgzPkNyZWRpdHMgYW5kIHRoaXJkIHBhcnR5IHNvdXJjZXM8L2gzPlxyXG4gICA8aDU+VGV4dDwvaDU+XHJcbiAgIFBvZW1zIHF1b3RlZDpcclxuICAgPHVsPlxyXG4gICAgPGxpPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiIGJ5IENyYWlnIFNhbnRvcyBQZXJlejwvbGk+XHJcbiAgICA8bGk+XCJMZXQgVGhlbSBOb3QgU2F5XCIgYnkgSmFuZSBIaXJzaGZpZWxkPC9saT5cclxuICAgIDxsaT5cIldBVkUgQUZURVIgV0FWRVwiIGJ5IE0uIEJhcnRsZXkgU2VpZ2VsPC9saT5cclxuICAgIDxsaT5cIk5vIExvbmdlciBPZGVcIiBieSBVcmF5b1x1MDBFMW4gTm9lbDwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIE90aGVyIHNvdXJjZXM6XHJcbiAgIDx1bD48L3VsPlxyXG4gICA8aDU+SW1hZ2VzPC9oNT5cclxuICAgPHA+Q2xpbWF0ZSBzdHJpcGVzIGdlbmVyYXRlZCB2aWEgPGEgaHJlZj0naHR0cHM6Ly9zaG93eW91cnN0cmlwZXMuaW5mbyc+U2hvdyBZb3VyIFN0cmlwZXM8L2E+LjwvcD5cclxuICAgPHA+VG9kb3MgU2FudG9zIHBob3RvZ3JhcGhzIGNvcHlyaWdodCBIb3dhcmQgRWttYW4sIHVzZWQgd2l0aCBwZXJtaXNzaW9uLjwvcD5cclxuICAgPHA+U2VhdHRsZSBzbW9rZSBzdW1tZXIgcGhvdG9ncmFwaHMgZGVwaWN0IHRoZSBDaGlodWx5IFNjdWxwdHVyZSBHYXJkZW4gYXQgU2VhdHRsZSBDZW50ZXIgYW5kIGFyZSBieSB0aGUgYXV0aG9yLjwvcD5cclxuICAgPHA+QWVyaWFsIGNsaW1hdGUgcGhvdG9ncmFwaHMgYnkgTkFTQS48L3A+XHJcbiAgIEltYWdlIGFzc2V0cyBmcm9tIFBOR3RyZWU6XHJcbiAgIDx1bD5cclxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3BuZ3RyZWUuY29tL2ZyZWVwbmcvaGVhdnktc25vd18zNzIzOTU0Lmh0bWwnPlwiaGVhdnkgc25vd1wiIGJhY2tncm91bmQ8L2E+PC9saT5cclxuICAgIDxsaT5CbGFjayBjbG91ZHMgYmFja2dyb3VuZDwvbGk+XHJcbiAgICA8bGk+QmxhY2sgbWlzdCBiYWNrZ3JvdW5kICMxPC9saT5cclxuICAgIDxsaT5CbGFjayBtaXN0IGJhY2tncm91bmQgIzI8L2xpPlxyXG4gICAgPGxpPkZpcmUgYW5kIHNwYXJrcyBiYWNrZ3JvdW5kPC9saT5cclxuICAgPGxpPjxpPkZyYW1lcyB1c2VkIGZvciBcIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjo8L2k+XHJcbiAgIDx1bD5cclxuICAgIDxsaT5CbHVlIHNtb2tlIGZyYW1lICMxPC9saT5cclxuICAgIDxsaT5CbHVlIHNtb2tlIGZyYW1lICMyPC9saT5cclxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3BuZ3RyZWUuY29tL2ZyZWVwbmcvYmx1ZS1zbW9rZS1hYnN0cmFjdC1mcmFtZS1hcnQtZnJlZS1wbmctYW5kLXBzZF81NTEyODE0Lmh0bWwnPkJsdWUgc21va2UgZnJhbWUgIzM8L2E+PC9saT5cclxuICAgPC91bD48L2xpPlxyXG4gICA8bGk+PGk+RnJhbWVzIHVzZWQgZm9yIG90aGVyIHF1b3Rlczo8L2k+XHJcbiAgIDx1bD5cclxuICAgIDxsaT5SZWQgYW5kIGJsYWNrIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5EYXJrIGJsdWUgc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPlB1cnBsZSB3YXRlcmNvbG9yIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5Db29sIGNvbG9ycyBzbW9rZSBmcmFtZVxyXG4gICAgPC9saT5cclxuICAgIDxsaT5DaXJjdWxhciBjeWFuIGZyYW1lPC9saT5cclxuICAgPC91bD48L2xpPlxyXG4gICA8L3VsPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdyZXNwZWN0cycgY2xhc3NOYW1lPSdjcmVkaXQgYWJvdXQnPjxoMz5BY2tub3dsZWRnbWVudHM8L2gzPlxyXG4gICBTcGVjaWZpYyB0aGFua3MgdG86XHJcbiAgIDx1bD5cclxuICAgIDxsaT5Ub255LCBmb3IgbGV0dGluZyBtZSBnZXQgYXdheSB3aXRoIHRoaXMgaW4gdGhlIGZpcnN0IHBsYWNlPC9saT5cclxuICAgPC91bD48L2Rpdj5cclxuICAgPGRpdiBpZD0nZ29iYWNrJz48YSBocmVmPScvJz5CYWNrIHRvIHRoZSBlc3NheTwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuICApIH1cclxuIiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2ZlZXQnPlxyXG4gICA8ZGl2PjxhIGhyZWY9Jy9tZXRhZGF0YS9jcmVkaXQnPkFib3V0PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBGcmFnbWVudHMgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29hc3RsaW5lLmNzcydcclxuaW1wb3J0IHsgR2xhY2llckEsIEdsYWNpZXJCLCBHbGFjaWVyQyB9IGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiO1xyXG5pbXBvcnQgV0FWRSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmVcIjtcclxuaW1wb3J0IFdoYW0gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIjtcclxuaW1wb3J0IExldFNheSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheVwiO1xyXG5pbXBvcnQgT2RlIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCI7XHJcbmltcG9ydCBHYXJkZW4gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiO1xyXG5pbXBvcnQgV2luU3VtIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2NlYW5zaWRlJz5cclxuICAgPG1haW4gaWQ9J3dhdGVyJz5cclxuICAgIDxkaXYgaWQ9J2JlYWNoJz5cclxuICAgICA8RnJhZ21lbnRzIC8+XHJcbiAgICAgPE9kZSAvPlxyXG4gICAgIDxHbGFjaWVyQSAvPlxyXG4gICAgIDxHYXJkZW4gLz5cclxuICAgICA8RGVmaW5lIC8+XHJcbiAgICAgPExldFNheSAvPlxyXG4gICAgIDxXaW5TdW0gLz5cclxuICAgICA8R2xhY2llckIgLz5cclxuICAgICA8V0FWRSAvPlxyXG4gICAgIDxHbGFjaWVyQyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvbWFpbj5cclxuICAgPFdoYW0gLz5cclxuICAgPEZvb3RlciAvPlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufVxyXG4iLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgT2hpbyBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtb2hpbyc7XHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gJy4vZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBGcmFnbWVudHMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIDxTY2VuZTAxIC8+XHJcbiAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50cyIsICJleHBvcnQgZnVuY3Rpb24gR2xhY2llckEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J0lJSScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmdfdmEucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VjwvaDU+XHJcbiAgIFdlIGRvIG5vdCBrbm93IHdoaWNoIHRvIGZlYXIgbW9yZSw8YnIvPlxyXG4gICBUaGUgdGVycm9yIG9mIGNoYW5nZTxici8+XHJcbiAgIE9yIHRoZSB0ZXJyb3Igb2YgdW5jZXJ0YWludHksIDxici8+XHJcbiAgIFRoZSBnbGFjaWVyIGNhbHZpbmc8YnIvPlxyXG4gICBPciBqdXN0IGFmdGVyLjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xhY2llckMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J1ZJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmcucG5nJyBpZD0nYmx1ZXFtJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG4vL1VudXNlZCBmb3Igbm93LCBidXQgZnVuIHRvIGhhdmVcclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2dsYWNpZXInPlxyXG4gICA8R2xhY2llckEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxHbGFjaWVyQyAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdBVkUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J1dBVycgY2xhc3NOYW1lPSdwb2VtJz5cclxuICA8aW1nIHNyYz0nL211bHRpenpldF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+Jm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyB0byBpbnNhdGlhdGUgdGVtcGVzdCwgdW5xdWVsbGVkIDxici8+XHJcbiAgIGJ5IHByYXllciBub3IgY2lnYXJldHRlLCBjYXJlbGVzcywgbWVhbiw8L3A+XHJcbiAgIDxwPmEgY29sZC1ibG9vZGVkIGluZGlmZmVyZW5jZSBzbyBwdXJlLDxici8+XHJcbiAgIGEgc3Ryb25nIHN3aW1tZXIgd29uJ3QgbGFzdCB0ZW4gd2V0IG1pbnV0ZXMuPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPk0uIEJhcnRsZXkgU2VpZ2VsLDxici8+XCJXQVZFIEFGVEVSIFdBVkVcIjwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn0iLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdoYW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2tpY2tlcic+XHJcbiAgIDxkaXYgaWQ9J2tpbWcnPjxpbWcgc3JjPScvY2xpbWF0ZV9zdHJpcGVzX214LnBuZycgYXJpYS1kZXNjcmliZWRieT1cIlwiIGFyaWEtZGV0YWlscz1cIlwiIGNsYXNzTmFtZT0nc2xpZGUtaW4tYmx1cnJlZC1ib3R0b20nIC8+PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2ZlZXQnPlxyXG4gICA8ZGl2PjxhIGhyZWY9Jy9tZXRhZGF0YS9jcmVkaXQnPkFib3V0PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmluZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdkZWZpbmUnIGNsYXNzTmFtZT0nY2l0ZScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX3doeXRlJz5cclxuICAgPGltZyBzcmM9Jy9wb2xhcm9pZF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgYWx0PScnLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Q29uc2lkZXIgY2xpbWF0ZSBjaGFuZ2UgYXMgYWJvdXQgPGI+dGhlIHRpbWluZyBvZiByZWxhdGlvbnNoaXBzPC9iPiB3ZSBoYXZlIHdpdGggYWxsIHRoYXQncyBhcm91bmQgdXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF93aHl0ZSc+XHJcbiAgICBLeWxlIFdoeXRlLDxici8+PGNpdGU+XCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0U2F5KCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J0xldFNheScgY2xhc3NOYW1lPSdwb2VtJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfbGV0c2F5Jz5cclxuICAgPGltZyBzcmM9Jy9yZWRfcXVvdGVfYmcucG5nJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9sZXRzYXknPlxyXG4gICAgSmFuZSBIaXJzaGZpZWxkLDxici8+PGNpdGU+XCJMZXQgVGhlbSBOb3QgU2F5XCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RlKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkaXRfb2RlJyBpZD0nT2RlJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2luZGlnb19wYWludF9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5mb3JnZXR0aW5nIHRoZSBuYXRpb24gaXMgYSBzeW5kcm9tZS48L3A+XHJcbiAgICA8cD5BbGwgdGhhdFx1MjAxOXMgbGVmdCBvZiB0aGUgc2VhIGluIHlvdSBpcyBmb2FtLDwvcD5cclxuICAgIDxwPnRoZSBjb2FzdGxpbmUncyBicm9rZW4gdm9pY2UgYW5kIGFsbCBpdHMgY3JhZ3MuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0X29kZScgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBVcmF5b1x1MDBFMW4gTm9lbCw8YnIvPjxjaXRlPlwiTm8gTG9uZ2VyIE9kZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBmYWNlcyA9IFsnYWd1aWxhJywgJ3NvbCddXHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuICBsZXQgcGljaztcclxuICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICBwaWNrID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICBwaWNrID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGZhY2VzW3BpY2tdO1xyXG4gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhcmRlbigpIHtcclxuIGNvbnN0IGdhcmRlbk1lID0gKCkgPT4ge1xyXG4gICBpZiAoZmxpcCgpID09PSAnYWd1aWxhJykge1xyXG4gICByZXR1cm4gPENoaUdhcjEgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgcmV0dXJuIDxDaGlHYXIyIC8+O1xyXG4gIH1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtnYXJkZW5NZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hpR2FyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4xJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMS5qcGVnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBmdW5jdGlvbiBDaGlHYXIyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4yJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyBhbHQ9JycvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaW5TdW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nV2luU3VtJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfc2Vhc29uJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2JsdWVibGFja19xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgYWx0PScnLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlJz5cclxuICAgIDxwPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3NpdCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwb2VtLCBpbnZpZ29yYXRlZDwvcD5cclxuICAgIDxwPndpdGggaW5reSBhd2t3YXJkIGJsYW5rbmVzcy48L3A+XHJcbiAgICA8cD5UaGUgYm90dG9tIHRlZXRoIG9mIHN1bW1lcjwvcD5cclxuICAgIDxwPmluIHdpbnRlciBjaGF0dGVyaW5nOiBoZXJlXHUyMDE5cyB0aGUgbW9vbi48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9zZWFzb24nPk5vYWggRWxpIEdvcmRvbiw8YnIvPjxjaXRlPlwiU3VtbWVyIGluIFdpbnRlciBpbiBTdW1tZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7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
