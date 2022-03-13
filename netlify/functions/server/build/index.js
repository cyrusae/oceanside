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
function Washington() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Washington",
    className: "flip-in-hor-top hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones.'
  })));
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
function Washington2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Washington",
    className: "flip-in-hor-top hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones.'
  })));
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
    className: "fade-in"
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "III"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_va.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "III"), "The glacier absorbed greenhouse gases. ", /* @__PURE__ */ React.createElement("br", null), "We are a large part of the biosphere.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
}
function GlacierB() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "V"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_sm.png",
    id: "blueq",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "V"), "We do not know which to fear more,", /* @__PURE__ */ React.createElement("br", null), "The terror of change", /* @__PURE__ */ React.createElement("br", null), "Or the terror of uncertainty, ", /* @__PURE__ */ React.createElement("br", null), "The glacier calving", /* @__PURE__ */ React.createElement("br", null), "Or just after.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
}
function GlacierC() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "VIII"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg.png",
    id: "blueqm",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "VIII"), "I know king tides, ", /* @__PURE__ */ React.createElement("br", null), "And lurid, inescapable storms; ", /* @__PURE__ */ React.createElement("br", null), "But I know, too, ", /* @__PURE__ */ React.createElement("br", null), "That the glacier is involved ", /* @__PURE__ */ React.createElement("br", null), "In what I know.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
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
  return /* @__PURE__ */ React.createElement("div", {
    id: "LetSay",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/red_quote_bg.png"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, /* @__PURE__ */ React.createElement("p", null, "Let them say, as they must say something:"), /* @__PURE__ */ React.createElement("p", null, "A kerosene beauty.", /* @__PURE__ */ React.createElement("br", null), "It burned."), /* @__PURE__ */ React.createElement("p", null, "Let them say we warmed ourselves by it,", /* @__PURE__ */ React.createElement("br", null), "read by its light, praised,", /* @__PURE__ */ React.createElement("br", null), "and it burned.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit"
  }, "Jane Hirshfield,", /* @__PURE__ */ React.createElement("br", null), '"Let Them Not Say"'));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-winsum.tsx
var poem_winsum_exports = {};
__export(poem_winsum_exports, {
  default: () => WinSum
});
init_react();
function WinSum() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "WinSum",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote"
  }, "\xA0\xA0sit in the center of the poem, invigorated", /* @__PURE__ */ React.createElement("br", null), "with inky awkward blankness.", /* @__PURE__ */ React.createElement("br", null), "The bottom teeth of summer", /* @__PURE__ */ React.createElement("br", null), "in winter chattering: here\u2019s the moon."), /* @__PURE__ */ React.createElement("div", {
    className: "credit"
  }, "Noah Eli Gordon,", /* @__PURE__ */ React.createElement("br", null), '"Summer in Winter in Summer"'));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\quote-clime.tsx
var quote_clime_exports = {};
__export(quote_clime_exports, {
  default: () => Define
});
init_react();
function Define() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "define",
    className: "cite"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/polaroid_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Consider climate change as about ", /* @__PURE__ */ React.createElement("b", null, "the timing of relationships"), " we have with all that's around us.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Kyle Whyte,", /* @__PURE__ */ React.createElement("br", null), '"Braiding Kinship and Time"'));
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
    className: "hero"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_oh.png"
  }));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\photos_chi.tsx
var photos_chi_exports = {};
__export(photos_chi_exports, {
  ChiGar: () => ChiGar
});
init_react();
function ChiGar() {
  var coin = Math.random();
  if (coin < 0.5) {
    var flip = "heads";
  } else {
    var flip = "tails";
  }
  ;
  switch (flip) {
    case "heads":
      return /* @__PURE__ */ React.createElement("div", {
        id: "Charden",
        className: "hero flip-in-hor-top"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "img"
      }, /* @__PURE__ */ React.createElement("img", {
        src: "/photos/chi_ver_gard1.jpeg"
      })));
      break;
    case "tails":
      return /* @__PURE__ */ React.createElement("div", {
        id: "Charden",
        className: "hero flip-in-hor-top"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "img"
      }, /* @__PURE__ */ React.createElement("img", {
        src: "/photos/chi_ver_gard2.jpeg"
      })));
  }
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
    src: "/multizzet_quote_bg_ph.png",
    className: "fade-in PLACEHOLDER"
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
  return /* @__PURE__ */ React.createElement("div", {
    id: "Ode",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/indigo_paint_bg_ph.png",
    className: "fade-in PLACEHOLDER"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "forgetting the nation is a syndrome."), /* @__PURE__ */ React.createElement("p", null, "All that\u2019s left of the sea in you is foam,"), /* @__PURE__ */ React.createElement("p", null, "the coastline's broken voice and all its crags.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Urayo\xE1n Noel,", /* @__PURE__ */ React.createElement("br", null), '"No Longer Ode"'));
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
  }, "Credits")));
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
var coastline_default = "/build/_assets/coastline-HN5RV6BM.css";

// app/routes/pacific/fragments/poem-glacier.tsx
init_react();
function GlacierA2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "III"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_va.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "III"), "The glacier absorbed greenhouse gases. ", /* @__PURE__ */ React.createElement("br", null), "We are a large part of the biosphere.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
}
function GlacierB2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "V"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg_sm.png",
    id: "blueq",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "V"), "We do not know which to fear more,", /* @__PURE__ */ React.createElement("br", null), "The terror of change", /* @__PURE__ */ React.createElement("br", null), "Or the terror of uncertainty, ", /* @__PURE__ */ React.createElement("br", null), "The glacier calving", /* @__PURE__ */ React.createElement("br", null), "Or just after.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
}
function GlacierC2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "glacier poem",
    id: "VIII"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/blue_quote_bg.png",
    id: "blueqm",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("h5", null, "VIII"), "I know king tides, ", /* @__PURE__ */ React.createElement("br", null), "And lurid, inescapable storms; ", /* @__PURE__ */ React.createElement("br", null), "But I know, too, ", /* @__PURE__ */ React.createElement("br", null), "That the glacier is involved ", /* @__PURE__ */ React.createElement("br", null), "In what I know.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Craig Santos Perez,", /* @__PURE__ */ React.createElement("br", null), '"Thirteen Ways of Looking at a Glacier"'));
}

// app/routes/pacific/fragments/poem-wave.tsx
init_react();
function WAVE2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "WAW",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/multizzet_quote_bg_ph.png",
    className: "fade-in PLACEHOLDER"
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
    className: "fade-in"
  })));
}

// app/routes/footer.tsx
init_react();
function Footer2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "feet"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/metadata/credit"
  }, "Credits")));
}

// app/routes/pacific/fragments/quote-clime.tsx
init_react();
function Define2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "define",
    className: "cite"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/polaroid_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Consider climate change as about ", /* @__PURE__ */ React.createElement("b", null, "the timing of relationships"), " we have with all that's around us.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Kyle Whyte,", /* @__PURE__ */ React.createElement("br", null), '"Braiding Kinship and Time"'));
}

// app/routes/pacific/fragments/poem-ode.tsx
init_react();
function Ode2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Ode",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/indigo_paint_bg_ph.png",
    className: "fade-in PLACEHOLDER"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "forgetting the nation is a syndrome."), /* @__PURE__ */ React.createElement("p", null, "All that\u2019s left of the sea in you is foam,"), /* @__PURE__ */ React.createElement("p", null, "the coastline's broken voice and all its crags.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Urayo\xE1n Noel,", /* @__PURE__ */ React.createElement("br", null), '"No Longer Ode"'));
}

// route-module:D:\Beep boop\oceanside\app\routes\index.tsx
function links2() {
  return [{ rel: "stylesheet", href: coastline_default }];
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "oceanside"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "water"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "beach"
  }, /* @__PURE__ */ React.createElement(fragments_default2, null), /* @__PURE__ */ React.createElement(Ode2, null), /* @__PURE__ */ React.createElement(GlacierA2, null), /* @__PURE__ */ React.createElement(Define2, null), /* @__PURE__ */ React.createElement(GlacierB2, null), /* @__PURE__ */ React.createElement(WAVE2, null), /* @__PURE__ */ React.createElement(GlacierC2, null))), /* @__PURE__ */ React.createElement(Wham2, null), /* @__PURE__ */ React.createElement(Footer2, null));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxzdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdoYW1saW5lLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWdsYWNpZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdpbnN1bS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccXVvdGUtY2xpbWUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS1vaGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwaG90b3NfY2hpLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdhdmUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tb2RlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFx0ZXN0MS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcMDEudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxtZXRhZGF0YVxcY3JlZGl0LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcZm9vdGVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1nbGFjaWVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvZm9vdGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxzdHJpcGUtd2FzaGluZ3Rvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS13aGFtbGluZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0tZ2xhY2llci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0tbGV0c2F5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS13aW5zdW0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxxdW90ZS1jbGltZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS1vaGlvLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccGhvdG9zX2NoaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLXdhdmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1vZGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcdGVzdDEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcMDEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWV0YWRhdGFcXFxcY3JlZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXGZvb3Rlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b25cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS13YXNoaW5ndG9uXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJzdHJpcGUtd2hhbWxpbmVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tZ2xhY2llclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tbGV0c2F5XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13aW5zdW1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS13aW5zdW1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJxdW90ZS1jbGltZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS1vaGlvXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS1vaGlvXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGlcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBob3Rvc19jaGlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0td2F2ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLW9kZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy90ZXN0MVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Rlc3QxXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJ0ZXN0MVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy8wMVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCIwMVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxM1xuICB9LFxuICBcInJvdXRlcy9tZXRhZGF0YS9jcmVkaXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9tZXRhZGF0YS9jcmVkaXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJtZXRhZGF0YS9jcmVkaXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTRcbiAgfSxcbiAgXCJyb3V0ZXMvZm9vdGVyXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZm9vdGVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZm9vdGVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE1XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTZcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaXZlUmVsb2FkLCBPdXRsZXQsIExpbmtzIH0gZnJvbSAncmVtaXgnXHJcbmltcG9ydCBJbmRleCBmcm9tICcuL3JvdXRlcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3JvdXRlcy9mb290ZXInXHJcbmltcG9ydCBXaGFtIGZyb20gJy4vcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZSdcclxuXHJcbi8vIE91dGxldCBtYXkgY3JlYXRlIGR1cGxpY2F0ZXMgZnJvbSBpbmRleDsgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgYCAgICA8T3V0bGV0IC8+YC5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGh0bWwgbGFuZz0nZW4nPlxyXG4gICA8aGVhZD5cclxuICAgIDxMaW5rcyAvPlxyXG4gICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XHJcbiAgICA8dGl0bGU+d2hhdCB0aGUgd2VhdGhlciBkb2Vzbid0PC90aXRsZT5cclxuICAgPC9oZWFkPlxyXG4gICA8Ym9keT5cclxuICAgIDxPdXRsZXQgLz5cclxuICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgIDwvYm9keT5cclxuICA8L2h0bWw+XHJcbiApXHJcbn0gIiwgIi8vIGNvbnN0IGEgPSBSYXcxLnZhbHVlKCk7XHJcbmltcG9ydCBTY2VuZTAxIGZyb20gJy4vZnJhZ21lbnRzLzAxJztcclxuaW1wb3J0IE9oaW8gZnJvbSAnLi9mcmFnbWVudHMvc3RyaXBlLW9oaW8nO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8V2FzaGluZ3RvbiAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUwMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nb25lJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgPHA+SXQgaXMgMjAyMi4gSXQgaXMgdGhlIDIybmQuIEl0IGlzIEZlYnJ1YXJ5LjwvcD5cclxuICA8cD5JIGFtIGJlZ2lubmluZyB0aGlzIGVzc2F5LiBJIGFtIHR3ZW50eS1zaXggeWVhcnMgb2xkLiBJIGFtIG1vdmluZywgbm90IGZvciB0aGUgZmlyc3QgdGltZSwgdG8gU2VhdHRsZS48L3A+XHJcbiAgPHA+SXQgaXMgc25vd2luZy48L3A+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybyc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgPGltZyBzcmM9Jy9zdHJpcGVzX3dhLnBuZycgYWx0PSdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBXYXNoaW5ndG9uLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMuJz48L2ltZz5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybyc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgPGltZyBzcmM9Jy9zdHJpcGVzX3dhLnBuZycgYWx0PSdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBXYXNoaW5ndG9uLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMuJz48L2ltZz5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdoYW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2tpY2tlcic+XHJcbiAgIDxkaXYgaWQ9J2tpbWcnPjxpbWcgc3JjPScvY2xpbWF0ZV9zdHJpcGVzX214LnBuZycgYXJpYS1kZXNjcmliZWRieT1cIlwiIGFyaWEtZGV0YWlscz1cIlwiIGNsYXNzTmFtZT0nZmFkZS1pbicgLz48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nSUlJJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WPC9oNT5cclxuICAgV2UgZG8gbm90IGtub3cgd2hpY2ggdG8gZmVhciBtb3JlLDxici8+XHJcbiAgIFRoZSB0ZXJyb3Igb2YgY2hhbmdlPGJyLz5cclxuICAgT3IgdGhlIHRlcnJvciBvZiB1bmNlcnRhaW50eSwgPGJyLz5cclxuICAgVGhlIGdsYWNpZXIgY2FsdmluZzxici8+XHJcbiAgIE9yIGp1c3QgYWZ0ZXIuPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVklJSSc+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRTYXkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J0xldFNheScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9yZWRfcXVvdGVfYmcucG5nJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0Jz5cclxuICAgIEphbmUgSGlyc2hmaWVsZCw8YnIvPlwiTGV0IFRoZW0gTm90IFNheVwiXHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpblN1bSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2luU3VtJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgJm5ic3A7Jm5ic3A7c2l0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBvZW0sIGludmlnb3JhdGVkPGJyLz5cclxuICAgIHdpdGggaW5reSBhd2t3YXJkIGJsYW5rbmVzcy48YnIvPlxyXG4gICAgVGhlIGJvdHRvbSB0ZWV0aCBvZiBzdW1tZXI8YnIvPlxyXG4gICAgaW4gd2ludGVyIGNoYXR0ZXJpbmc6IGhlcmVcdTIwMTlzIHRoZSBtb29uLiBcclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnPk5vYWggRWxpIEdvcmRvbiw8YnIvPlwiU3VtbWVyIGluIFdpbnRlciBpbiBTdW1tZXJcIjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmluZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBLeWxlIFdoeXRlLDxici8+XCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCJcclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2hpbygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2hpbycgY2xhc3NOYW1lPSdoZXJvJz5cclxuICAgPGltZyBzcmM9Jy9zdHJpcGVzX29oLnBuZycgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICIvL0V4cG9ydCBub3QgY3VycmVudGx5IHdvcmtpbmdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGlHYXIoKSB7XHJcbiB2YXIgY29pbiA9IE1hdGgucmFuZG9tKCk7XHJcbiBpZiAoY29pbiA8IDAuNSkgeyB2YXIgZmxpcCA9ICdoZWFkcyd9IGVsc2UgeyB2YXIgZmxpcCA9ICd0YWlscyc7IH07XHJcbiBzd2l0Y2ggKGZsaXApIHtcclxuICBjYXNlICdoZWFkcyc6XHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBpZD0nQ2hhcmRlbicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9jaGlfdmVyX2dhcmQxLmpwZWcnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gIGJyZWFrO1xyXG4gY2FzZSAndGFpbHMnOlxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9J0NoYXJkZW4nIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmdfcGgucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4gUExBQ0VIT0xERVInLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nT2RlJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2luZGlnb19wYWludF9iZ19waC5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbiBQTEFDRUhPTERFUicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5mb3JnZXR0aW5nIHRoZSBuYXRpb24gaXMgYSBzeW5kcm9tZS48L3A+XHJcbiAgICA8cD5BbGwgdGhhdFx1MjAxOXMgbGVmdCBvZiB0aGUgc2VhIGluIHlvdSBpcyBmb2FtLDwvcD5cclxuICAgIDxwPnRoZSBjb2FzdGxpbmUncyBicm9rZW4gdm9pY2UgYW5kIGFsbCBpdHMgY3JhZ3MuPC9wPlxyXG4gICAgXHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPlxyXG4gICAgVXJheW9cdTAwRTFuIE5vZWwsPGJyLz5cIk5vIExvbmdlciBPZGVcIlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgbWR4TG9hZGVyIGZyb20gJ0BtZHgtanMvbG9hZGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy9pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcclxuXHJcblxyXG5sZXQgY29udGVudCA9ICdgSSBzd2VhciwgSSAqd2lsbCogbWFrZSB0aGlzIHdvcmtgJ1xyXG4vLyB2YXIgb3V0cHV0ID0gbWR4TG9hZGVyKHRoaXMsIHN0cmluZzogY29udGVudCk7XHJcbi8vdmFyIG91dHB1dCA9IG1hcmtlZChjb250ZW50KVxyXG5cclxuZnVuY3Rpb24gUmF3MSgpIHtcclxuIHJldHVybiAoXHJcbiAgeyBjb250ZW50IH1cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF3MSAiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUwMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nb25lJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgPHA+SXQgaXMgMjAyMi4gSXQgaXMgdGhlIDIybmQuIEl0IGlzIEZlYnJ1YXJ5LjwvcD5cclxuICA8cD5JIGFtIGJlZ2lubmluZyB0aGlzIGVzc2F5LiBJIGFtIHR3ZW50eS1zaXggeWVhcnMgb2xkLiBJIGFtIG1vdmluZywgbm90IGZvciB0aGUgZmlyc3QgdGltZSwgdG8gU2VhdHRsZS48L3A+XHJcbiAgPHA+SXQgaXMgc25vd2luZy48L3A+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9haXJzcGFjZS5jc3MnXHJcbmltcG9ydCBMZXRTYXkgZnJvbSAnLi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXknXHJcbi8vTWF5IGFkZCBwb2VtIGZvciBwdW5jaCwgbGF0ZXIuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhZGF0YSgpIHtcclxuIHJldHVybiAoIFxyXG4gIDxkaXYgaWQ9J21ldGFkYXRhJz5cclxuICAgPGRpdiBpZD0ncHJvamVjdCcgY2xhc3NOYW1lPSdjcmVkaXQgYWJvdXQnPjxoMz5BYm91dCA8aT53aGF0IHRoZSB3ZWF0aGVyIGRvZXNuJ3Q8L2k+PC9oMz5cclxuICAgPHA+VGhpcyBlc3NheSB3YXMgZmlyc3QgY29tcG9zZWQgYXMgYSBmaW5hbCBwcm9qZWN0IGZvciBDSElEIDQ4MC1BIFwiVXBzaWRlIERvd24gVGhpbmtpbmcgV2l0aCB0aGUgR2xvYmFsIFNvdXRoXCIsIHdpbnRlciBxdWFydGVyIDIwMjIsIGF0IHRoZSBVbml2ZXJzaXR5IG9mIFdhc2hpbmd0b24uIFdpdGggdGhlIGV4Y2VwdGlvbiBvZiBzcGVjaWZpYyBlcGlncmFwaHMgYW5kIHF1b3RlcyAoc2VlIGJlbG93KSwgYWxsIGNvbnRlbnQgd2FzIHByb2R1Y2VkIGJ5IEN5cnVzIEVvc3Bob3Jvcy4gVmVyc2lvbiAxLjAgaXMgbGl2ZSBhcyBvZiBNYXJjaCAxOCwgMjAyMjsgdGVjaG5pY2FsIGltcHJvdmVtZW50cyBhcmUgcGxhbm5lZCBidXQgdGhlIGNvcmUgY29udGVudCBhbmQgcHJlc2VudGF0aW9uIGlzIGluIHBsYWNlLiBJZiBpdCBpbnRlcmVzdHMgeW91IHRvIGRvIHNvLCA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vY3lydXNhZS9vY2VhbnNpZGUnPnRoZSBzb3VyY2UgY29kZSBjYW4gYmUgdmlld2VkIG9uIEdpdEh1YjwvYT4uPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdtZScgY2xhc3NOYW1lPSdjcmVkaXQgYWJvdXQnPjxoMz5BYm91dCB0aGUgYXV0aG9yPC9oMz5cclxuICAgPHA+Q3lydXMgRW9zcGhvcm9zIGlzIGhhdmluZyBhIHRpbWUgb2YgaXQgYXQgYWxsIHBvc3NpYmxlIHRpbWVzLiBNb3JlIHdvcmssIGxpa2UgYW5kIHVubGlrZSA8aT53ZWF0aGVyPC9pPiBhbGlrZSwgY2FuIGJlIGZvdW5kIGFuZCBzdXBwb3J0ZWQgPGEgaHJlZj0naHR0cHM6Ly9wYXRyZW9uLmNvbS9lb3NwaG9yb3MnPm9uIGhpcyBQYXRyZW9uPC9hPiBmb3Igbm93LiBPdGhlciB0ZWNobmljYWwgcHJvamVjdHMgaGF2ZSBhIGhvbWUgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2N5cnVzYWUnPm9uIEdpdEh1YjwvYT4gYWxvbmdzaWRlIHRoaXMgb25lLiBIZSBhbHNvIGhhcyA8YSBocmVmPSdodHRwczovL3Zpc3VhbGl0eS5jYXJyZC5jbyc+dGhpcyBjb29sIHZpcnR1YWwgYnVzaW5lc3MgY2FyZDwvYT4gZm9yIGhvcGVmdWxseSByZW1lbWJlcmluZyB0byB1cGRhdGUgaW1wb3J0YW50IGRhdGEgd2l0aC48L3A+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdHMnIGNsYXNzTmFtZT0nY3JlZGl0IHNvdXJjZXMnPjxoMz5DcmVkaXRzIGFuZCB0aGlyZCBwYXJ0eSBzb3VyY2VzPC9oMz5cclxuICAgPGg1PlRleHQ8L2g1PlxyXG4gICBQb2VtcyBxdW90ZWQ6XHJcbiAgIDx1bD5cclxuICAgIDxsaT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIiBieSBDcmFpZyBTYW50b3MgUGVyZXo8L2xpPlxyXG4gICAgPGxpPlwiTGV0IFRoZW0gTm90IFNheVwiIGJ5IEphbmUgSGlyc2hmaWVsZDwvbGk+XHJcbiAgICA8bGk+XCJXQVZFIEFGVEVSIFdBVkVcIiBieSBNLiBCYXJ0bGV5IFNlaWdlbDwvbGk+XHJcbiAgICA8bGk+XCJObyBMb25nZXIgT2RlXCIgYnkgVXJheW9cdTAwRTFuIE5vZWw8L2xpPlxyXG4gICA8L3VsPlxyXG4gICBPdGhlciBzb3VyY2VzOlxyXG4gICA8dWw+PC91bD5cclxuICAgPGg1PkltYWdlczwvaDU+XHJcbiAgIDxwPkNsaW1hdGUgc3RyaXBlcyBnZW5lcmF0ZWQgdmlhIDxhIGhyZWY9J2h0dHBzOi8vc2hvd3lvdXJzdHJpcGVzLmluZm8nPlNob3cgWW91ciBTdHJpcGVzPC9hPi48L3A+XHJcbiAgIDxwPlRvZG9zIFNhbnRvcyBwaG90b2dyYXBocyBjb3B5cmlnaHQgSG93YXJkIEVrbWFuLCB1c2VkIHdpdGggcGVybWlzc2lvbi48L3A+XHJcbiAgIDxwPlNlYXR0bGUgc21va2Ugc3VtbWVyIHBob3RvZ3JhcGhzIGRlcGljdCB0aGUgQ2hpaHVseSBTY3VscHR1cmUgR2FyZGVuIGF0IFNlYXR0bGUgQ2VudGVyIGFuZCBhcmUgYnkgdGhlIGF1dGhvci48L3A+XHJcbiAgIDxwPkFlcmlhbCBjbGltYXRlIHBob3RvZ3JhcGhzIGJ5IE5BU0EuPC9wPlxyXG4gICBJbWFnZSBhc3NldHMgZnJvbSBQTkd0cmVlOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9wbmd0cmVlLmNvbS9mcmVlcG5nL2hlYXZ5LXNub3dfMzcyMzk1NC5odG1sJz5cImhlYXZ5IHNub3dcIiBiYWNrZ3JvdW5kPC9hPjwvbGk+XHJcbiAgICA8bGk+QmxhY2sgY2xvdWRzIGJhY2tncm91bmQ8L2xpPlxyXG4gICAgPGxpPkJsYWNrIG1pc3QgYmFja2dyb3VuZCAjMTwvbGk+XHJcbiAgICA8bGk+QmxhY2sgbWlzdCBiYWNrZ3JvdW5kICMyPC9saT5cclxuICAgIDxsaT5GaXJlIGFuZCBzcGFya3MgYmFja2dyb3VuZDwvbGk+XHJcbiAgIDxsaT48aT5GcmFtZXMgdXNlZCBmb3IgXCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI6PC9pPlxyXG4gICA8dWw+XHJcbiAgICA8bGk+Qmx1ZSBzbW9rZSBmcmFtZSAjMTwvbGk+XHJcbiAgICA8bGk+Qmx1ZSBzbW9rZSBmcmFtZSAjMjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9wbmd0cmVlLmNvbS9mcmVlcG5nL2JsdWUtc21va2UtYWJzdHJhY3QtZnJhbWUtYXJ0LWZyZWUtcG5nLWFuZC1wc2RfNTUxMjgxNC5odG1sJz5CbHVlIHNtb2tlIGZyYW1lICMzPC9hPjwvbGk+XHJcbiAgIDwvdWw+PC9saT5cclxuICAgPGxpPjxpPkZyYW1lcyB1c2VkIGZvciBvdGhlciBxdW90ZXM6PC9pPlxyXG4gICA8dWw+XHJcbiAgICA8bGk+UmVkIGFuZCBibGFjayBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+RGFyayBibHVlIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5QdXJwbGUgd2F0ZXJjb2xvciBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+Q29vbCBjb2xvcnMgc21va2UgZnJhbWVcclxuICAgIDwvbGk+XHJcbiAgICA8bGk+Q2lyY3VsYXIgY3lhbiBmcmFtZTwvbGk+XHJcbiAgIDwvdWw+PC9saT5cclxuICAgPC91bD48L2Rpdj5cclxuICAgPGRpdiBpZD0ncmVzcGVjdHMnIGNsYXNzTmFtZT0nY3JlZGl0IGFib3V0Jz48aDM+QWNrbm93bGVkZ21lbnRzPC9oMz5cclxuICAgU3BlY2lmaWMgdGhhbmtzIHRvOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+VG9ueSwgZm9yIGxldHRpbmcgbWUgZ2V0IGF3YXkgd2l0aCB0aGlzIGluIHRoZSBmaXJzdCBwbGFjZTwvbGk+XHJcbiAgIDwvdWw+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2dvYmFjayc+PGEgaHJlZj0nLyc+QmFjayB0byB0aGUgZXNzYXk8L2E+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKSB9XHJcbiIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdmZWV0Jz5cclxuICAgPGRpdj48YSBocmVmPScvbWV0YWRhdGEvY3JlZGl0Jz5DcmVkaXRzPC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBGcmFnbWVudHMgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHNcIjtcclxuaW1wb3J0IFJhdzEgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvdGVzdDFcIjtcclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvYXN0bGluZS5jc3MnXHJcbmltcG9ydCB7IEdsYWNpZXJBLCBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIjtcclxuaW1wb3J0IFdBVkUgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13YXZlXCI7XHJcbmltcG9ydCBXaGFtIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgRGVmaW5lIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCI7XHJcbmltcG9ydCBMZXRTYXkgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIjtcclxuaW1wb3J0IE9kZSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiO1xyXG5pbXBvcnQgeyBDaGlHYXIgfSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2NlYW5zaWRlJz5cclxuICAgPGRpdiBpZD0nd2F0ZXInPlxyXG4gICAgPGRpdiBpZD0nYmVhY2gnPlxyXG4gICAgIDxGcmFnbWVudHMgLz5cclxuICAgICA8T2RlIC8+XHJcbiAgICAgPEdsYWNpZXJBIC8+XHJcbiAgICAgPERlZmluZSAvPlxyXG4gICAgIDxHbGFjaWVyQiAvPlxyXG4gICAgIDxXQVZFIC8+XHJcbiAgICAgPEdsYWNpZXJDIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIDxXaGFtIC8+XHJcbiAgIDxGb290ZXIgLz5cclxuICA8L2Rpdj5cclxuICk7XHJcbn1cclxuIiwgIi8vIGNvbnN0IGEgPSBSYXcxLnZhbHVlKCk7XHJcbmltcG9ydCBTY2VuZTAxIGZyb20gJy4vZnJhZ21lbnRzLzAxJztcclxuaW1wb3J0IE9oaW8gZnJvbSAnLi9mcmFnbWVudHMvc3RyaXBlLW9oaW8nO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8V2FzaGluZ3RvbiAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nSUlJJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WPC9oNT5cclxuICAgV2UgZG8gbm90IGtub3cgd2hpY2ggdG8gZmVhciBtb3JlLDxici8+XHJcbiAgIFRoZSB0ZXJyb3Igb2YgY2hhbmdlPGJyLz5cclxuICAgT3IgdGhlIHRlcnJvciBvZiB1bmNlcnRhaW50eSwgPGJyLz5cclxuICAgVGhlIGdsYWNpZXIgY2FsdmluZzxici8+XHJcbiAgIE9yIGp1c3QgYWZ0ZXIuPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVklJSSc+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmdfcGgucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4gUExBQ0VIT0xERVInLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaGFtKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdraWNrZXInPlxyXG4gICA8ZGl2IGlkPSdraW1nJz48aW1nIHNyYz0nL2NsaW1hdGVfc3RyaXBlc19teC5wbmcnIGFyaWEtZGVzY3JpYmVkYnk9XCJcIiBhcmlhLWRldGFpbHM9XCJcIiBjbGFzc05hbWU9J2ZhZGUtaW4nIC8+PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2ZlZXQnPlxyXG4gICA8ZGl2PjxhIGhyZWY9Jy9tZXRhZGF0YS9jcmVkaXQnPkNyZWRpdHM8L2E+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmaW5lKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdkZWZpbmUnIGNsYXNzTmFtZT0nY2l0ZSc+XHJcbiAgIDxpbWcgc3JjPScvcG9sYXJvaWRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Q29uc2lkZXIgY2xpbWF0ZSBjaGFuZ2UgYXMgYWJvdXQgPGI+dGhlIHRpbWluZyBvZiByZWxhdGlvbnNoaXBzPC9iPiB3ZSBoYXZlIHdpdGggYWxsIHRoYXQncyBhcm91bmQgdXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5cclxuICAgIEt5bGUgV2h5dGUsPGJyLz5cIkJyYWlkaW5nIEtpbnNoaXAgYW5kIFRpbWVcIlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZGUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmdfcGgucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4gUExBQ0VIT0xERVInLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgIFxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5cclxuICAgIFVyYXlvXHUwMEUxbiBOb2VsLDxici8+XCJObyBMb25nZXIgT2RlXCJcclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtB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
