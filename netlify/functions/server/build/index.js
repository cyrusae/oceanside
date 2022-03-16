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
  return /* @__PURE__ */ React.createElement("div", {
    id: "Ode",
    className: "poem"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/indigo_paint_bg.png",
    className: "fade-in"
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
var coastline_default = "/build/_assets/coastline-BR6YWUWD.css";

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
    src: "/indigo_paint_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "forgetting the nation is a syndrome."), /* @__PURE__ */ React.createElement("p", null, "All that\u2019s left of the sea in you is foam,"), /* @__PURE__ */ React.createElement("p", null, "the coastline's broken voice and all its crags.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit text-focus-in"
  }, "Urayo\xE1n Noel,", /* @__PURE__ */ React.createElement("br", null), '"No Longer Ode"'));
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
  }, /* @__PURE__ */ React.createElement(fragments_default2, null), /* @__PURE__ */ React.createElement(Ode2, null), /* @__PURE__ */ React.createElement(GlacierA2, null), /* @__PURE__ */ React.createElement(Garden2, null), /* @__PURE__ */ React.createElement(Define2, null), /* @__PURE__ */ React.createElement(GlacierB2, null), /* @__PURE__ */ React.createElement(WAVE2, null), /* @__PURE__ */ React.createElement(GlacierC2, null))), /* @__PURE__ */ React.createElement(Wham2, null), /* @__PURE__ */ React.createElement(Footer2, null));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxzdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdoYW1saW5lLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWdsYWNpZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdpbnN1bS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccXVvdGUtY2xpbWUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS1vaGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwaG90b3NfY2hpLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdhdmUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tb2RlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFx0ZXN0MS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcMDEudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxtZXRhZGF0YVxcY3JlZGl0LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcZm9vdGVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1nbGFjaWVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvZm9vdGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGkudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS13YXNoaW5ndG9uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLXdoYW1saW5lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1nbGFjaWVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1sZXRzYXkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLXdpbnN1bS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHF1b3RlLWNsaW1lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLW9oaW8udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwaG90b3NfY2hpLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0td2F2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLW9kZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFx0ZXN0MS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFwwMS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZXRhZGF0YVxcXFxjcmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZm9vdGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInBhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3RvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLXdhc2hpbmd0b25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS13aGFtbGluZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1nbGFjaWVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1sZXRzYXlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLXdpbnN1bVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInF1b3RlLWNsaW1lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpb1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLW9oaW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicGhvdG9zX2NoaVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS13YXZlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEwXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1vZGVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tb2RlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTExXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Rlc3QxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvdGVzdDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInRlc3QxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvMDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIjAxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEzXG4gIH0sXG4gIFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIm1ldGFkYXRhL2NyZWRpdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNFxuICB9LFxuICBcInJvdXRlcy9mb290ZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9mb290ZXJcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJmb290ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTVcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpdmVSZWxvYWQsIE91dGxldCwgTGlua3MgfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vcm91dGVzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcm91dGVzL2Zvb3RlcidcclxuaW1wb3J0IFdoYW0gZnJvbSAnLi9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lJ1xyXG5cclxuLy8gT3V0bGV0IG1heSBjcmVhdGUgZHVwbGljYXRlcyBmcm9tIGluZGV4OyB0ZW1wb3JhcmlseSByZW1vdmluZyBgICAgIDxPdXRsZXQgLz5gLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gcmV0dXJuIChcclxuICA8aHRtbCBsYW5nPSdlbic+XHJcbiAgIDxoZWFkPlxyXG4gICAgPExpbmtzIC8+XHJcbiAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcgLz5cclxuICAgIDx0aXRsZT53aGF0IHRoZSB3ZWF0aGVyIGRvZXNuJ3Q8L3RpdGxlPlxyXG4gICA8L2hlYWQ+XHJcbiAgIDxib2R5PlxyXG4gICAgPE91dGxldCAvPlxyXG4gICAgPExpdmVSZWxvYWQgLz5cclxuICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuIClcclxufSAiLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgT2hpbyBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtb2hpbyc7XHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gJy4vZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBGcmFnbWVudHMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIDxTY2VuZTAxIC8+XHJcbiAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50cyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZTAxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdvbmUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICA8cD5JdCBpcyAyMDIyLiBJdCBpcyB0aGUgMjJuZC4gSXQgaXMgRmVicnVhcnkuPC9wPlxyXG4gIDxwPkkgYW0gYmVnaW5uaW5nIHRoaXMgZXNzYXkuIEkgYW0gdHdlbnR5LXNpeCB5ZWFycyBvbGQuIEkgYW0gbW92aW5nLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLCB0byBTZWF0dGxlLjwvcD5cclxuICA8cD5JdCBpcyBzbm93aW5nLjwvcD48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXNoaW5ndG9uKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXYXNoaW5ndG9uJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICA8aW1nIHNyYz0nL3N0cmlwZXNfd2EucG5nJyBhbHQ9J1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIFdhc2hpbmd0b24sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcy4nPjwvaW1nPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXNoaW5ndG9uKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXYXNoaW5ndG9uJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICA8aW1nIHNyYz0nL3N0cmlwZXNfd2EucG5nJyBhbHQ9J1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIFdhc2hpbmd0b24sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcy4nPjwvaW1nPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2hhbSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0na2lja2VyJz5cclxuICAgPGRpdiBpZD0na2ltZyc+PGltZyBzcmM9Jy9jbGltYXRlX3N0cmlwZXNfbXgucG5nJyBhcmlhLWRlc2NyaWJlZGJ5PVwiXCIgYXJpYS1kZXRhaWxzPVwiXCIgY2xhc3NOYW1lPSdzbGlkZS1pbi1ibHVycmVkLWJvdHRvbScgLz48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nSUlJJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WPC9oNT5cclxuICAgV2UgZG8gbm90IGtub3cgd2hpY2ggdG8gZmVhciBtb3JlLDxici8+XHJcbiAgIFRoZSB0ZXJyb3Igb2YgY2hhbmdlPGJyLz5cclxuICAgT3IgdGhlIHRlcnJvciBvZiB1bmNlcnRhaW50eSwgPGJyLz5cclxuICAgVGhlIGdsYWNpZXIgY2FsdmluZzxici8+XHJcbiAgIE9yIGp1c3QgYWZ0ZXIuPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVklJSSc+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRTYXkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J0xldFNheScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9yZWRfcXVvdGVfYmcucG5nJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0Jz5cclxuICAgIEphbmUgSGlyc2hmaWVsZCw8YnIvPlwiTGV0IFRoZW0gTm90IFNheVwiXHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpblN1bSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2luU3VtJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgJm5ic3A7Jm5ic3A7c2l0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBvZW0sIGludmlnb3JhdGVkPGJyLz5cclxuICAgIHdpdGggaW5reSBhd2t3YXJkIGJsYW5rbmVzcy48YnIvPlxyXG4gICAgVGhlIGJvdHRvbSB0ZWV0aCBvZiBzdW1tZXI8YnIvPlxyXG4gICAgaW4gd2ludGVyIGNoYXR0ZXJpbmc6IGhlcmVcdTIwMTlzIHRoZSBtb29uLiBcclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnPk5vYWggRWxpIEdvcmRvbiw8YnIvPlwiU3VtbWVyIGluIFdpbnRlciBpbiBTdW1tZXJcIjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmluZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBLeWxlIFdoeXRlLDxici8+XCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCJcclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2hpbygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2hpbycgY2xhc3NOYW1lPSdoZXJvJz5cclxuICAgPGltZyBzcmM9Jy9zdHJpcGVzX29oLnBuZycgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgZmFjZXMgPSBbJ2FndWlsYScsICdzb2wnXVxyXG5cclxuY29uc3QgZmxpcCA9ICgoKSA9PiB7XHJcbiAgbGV0IHBpY2s7XHJcbiAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgcGljayA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgcGljayA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBmYWNlc1twaWNrXTtcclxuIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXJkZW4oKSB7XHJcbiBjb25zdCBnYXJkZW5NZSA9ICgpID0+IHtcclxuICAgaWYgKGZsaXAoKSA9PT0gJ2FndWlsYScpIHtcclxuICAgcmV0dXJuIDxDaGlHYXIxIC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgIHJldHVybiA8Q2hpR2FyMiAvPjtcclxuICB9XHJcbiB9XHJcblxyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICB7Z2FyZGVuTWUoKX1cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoaUdhcjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDEuanBlZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG4gXHJcbiBleHBvcnQgZnVuY3Rpb24gQ2hpR2FyMigpIHtcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDIuanBlZycgYWx0PScnLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0FWRSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV0FXJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gIDxpbWcgc3JjPScvbXVsdGl6emV0X3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD4mbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7IHRvIGluc2F0aWF0ZSB0ZW1wZXN0LCB1bnF1ZWxsZWQgPGJyLz5cclxuICAgYnkgcHJheWVyIG5vciBjaWdhcmV0dGUsIGNhcmVsZXNzLCBtZWFuLDwvcD5cclxuICAgPHA+YSBjb2xkLWJsb29kZWQgaW5kaWZmZXJlbmNlIHNvIHB1cmUsPGJyLz5cclxuICAgYSBzdHJvbmcgc3dpbW1lciB3b24ndCBsYXN0IHRlbiB3ZXQgbWludXRlcy48L3A+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+TS4gQmFydGxleSBTZWlnZWwsPGJyLz5cIldBVkUgQUZURVIgV0FWRVwiPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZGUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgIFxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5cclxuICAgIFVyYXlvXHUwMEUxbiBOb2VsLDxici8+XCJObyBMb25nZXIgT2RlXCJcclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IG1keExvYWRlciBmcm9tICdAbWR4LWpzL2xvYWRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXHJcblxyXG5cclxubGV0IGNvbnRlbnQgPSAnYEkgc3dlYXIsIEkgKndpbGwqIG1ha2UgdGhpcyB3b3JrYCdcclxuLy8gdmFyIG91dHB1dCA9IG1keExvYWRlcih0aGlzLCBzdHJpbmc6IGNvbnRlbnQpO1xyXG4vL3ZhciBvdXRwdXQgPSBtYXJrZWQoY29udGVudClcclxuXHJcbmZ1bmN0aW9uIFJhdzEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIHsgY29udGVudCB9XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdzEgIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lMDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J29uZSc+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gIDxwPkl0IGlzIDIwMjIuIEl0IGlzIHRoZSAyMm5kLiBJdCBpcyBGZWJydWFyeS48L3A+XHJcbiAgPHA+SSBhbSBiZWdpbm5pbmcgdGhpcyBlc3NheS4gSSBhbSB0d2VudHktc2l4IHllYXJzIG9sZC4gSSBhbSBtb3ZpbmcsIG5vdCBmb3IgdGhlIGZpcnN0IHRpbWUsIHRvIFNlYXR0bGUuPC9wPlxyXG4gIDxwPkl0IGlzIHNub3dpbmcuPC9wPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvYWlyc3BhY2UuY3NzJ1xyXG5pbXBvcnQgTGV0U2F5IGZyb20gJy4uL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5J1xyXG4vL01heSBhZGQgcG9lbSBmb3IgcHVuY2gsIGxhdGVyLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YWRhdGEoKSB7XHJcbiByZXR1cm4gKCBcclxuICA8ZGl2IGlkPSdtZXRhZGF0YSc+XHJcbiAgIDxkaXYgaWQ9J3Byb2plY3QnIGNsYXNzTmFtZT0nY3JlZGl0IGFib3V0Jz48aDM+QWJvdXQgPGk+d2hhdCB0aGUgd2VhdGhlciBkb2Vzbid0PC9pPjwvaDM+XHJcbiAgIDxwPlRoaXMgZXNzYXkgd2FzIGZpcnN0IGNvbXBvc2VkIGFzIGEgZmluYWwgcHJvamVjdCBmb3IgQ0hJRCA0ODAtQSBcIlVwc2lkZSBEb3duIFRoaW5raW5nIFdpdGggdGhlIEdsb2JhbCBTb3V0aFwiLCB3aW50ZXIgcXVhcnRlciAyMDIyLCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uLiBXaXRoIHRoZSBleGNlcHRpb24gb2Ygc3BlY2lmaWMgZXBpZ3JhcGhzIGFuZCBxdW90ZXMgKHNlZSBiZWxvdyksIGFsbCBjb250ZW50IHdhcyBwcm9kdWNlZCBieSBDeXJ1cyBFb3NwaG9yb3MuIFZlcnNpb24gMS4wIGlzIGxpdmUgYXMgb2YgTWFyY2ggMTgsIDIwMjI7IHRlY2huaWNhbCBpbXByb3ZlbWVudHMgYXJlIHBsYW5uZWQgYnV0IHRoZSBjb3JlIGNvbnRlbnQgYW5kIHByZXNlbnRhdGlvbiBpcyBpbiBwbGFjZS4gSWYgaXQgaW50ZXJlc3RzIHlvdSB0byBkbyBzbywgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2N5cnVzYWUvb2NlYW5zaWRlJz50aGUgc291cmNlIGNvZGUgY2FuIGJlIHZpZXdlZCBvbiBHaXRIdWI8L2E+LjwvcD48L2Rpdj5cclxuICAgPGRpdiBpZD0nbWUnIGNsYXNzTmFtZT0nY3JlZGl0IGFib3V0Jz48aDM+QWJvdXQgdGhlIGF1dGhvcjwvaDM+XHJcbiAgIDxwPkN5cnVzIEVvc3Bob3JvcyBpcyBoYXZpbmcgYSB0aW1lIG9mIGl0IGF0IGFsbCBwb3NzaWJsZSB0aW1lcy4gTW9yZSB3b3JrLCBsaWtlIGFuZCB1bmxpa2UgPGk+d2VhdGhlcjwvaT4gYWxpa2UsIGNhbiBiZSBmb3VuZCBhbmQgc3VwcG9ydGVkIDxhIGhyZWY9J2h0dHBzOi8vcGF0cmVvbi5jb20vZW9zcGhvcm9zJz5vbiBoaXMgUGF0cmVvbjwvYT4gZm9yIG5vdy4gT3RoZXIgdGVjaG5pY2FsIHByb2plY3RzIGhhdmUgYSBob21lIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9jeXJ1c2FlJz5vbiBHaXRIdWI8L2E+IGFsb25nc2lkZSB0aGlzIG9uZS4gSGUgYWxzbyBoYXMgPGEgaHJlZj0naHR0cHM6Ly92aXN1YWxpdHkuY2FycmQuY28nPnRoaXMgY29vbCB2aXJ0dWFsIGJ1c2luZXNzIGNhcmQ8L2E+IGZvciBob3BlZnVsbHkgcmVtZW1iZXJpbmcgdG8gdXBkYXRlIGltcG9ydGFudCBkYXRhIHdpdGguPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdjcmVkaXRzJyBjbGFzc05hbWU9J2NyZWRpdCBzb3VyY2VzJz48aDM+Q3JlZGl0cyBhbmQgdGhpcmQgcGFydHkgc291cmNlczwvaDM+XHJcbiAgIDxoNT5UZXh0PC9oNT5cclxuICAgUG9lbXMgcXVvdGVkOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCIgYnkgQ3JhaWcgU2FudG9zIFBlcmV6PC9saT5cclxuICAgIDxsaT5cIkxldCBUaGVtIE5vdCBTYXlcIiBieSBKYW5lIEhpcnNoZmllbGQ8L2xpPlxyXG4gICAgPGxpPlwiV0FWRSBBRlRFUiBXQVZFXCIgYnkgTS4gQmFydGxleSBTZWlnZWw8L2xpPlxyXG4gICAgPGxpPlwiTm8gTG9uZ2VyIE9kZVwiIGJ5IFVyYXlvXHUwMEUxbiBOb2VsPC9saT5cclxuICAgPC91bD5cclxuICAgT3RoZXIgc291cmNlczpcclxuICAgPHVsPjwvdWw+XHJcbiAgIDxoNT5JbWFnZXM8L2g1PlxyXG4gICA8cD5DbGltYXRlIHN0cmlwZXMgZ2VuZXJhdGVkIHZpYSA8YSBocmVmPSdodHRwczovL3Nob3d5b3Vyc3RyaXBlcy5pbmZvJz5TaG93IFlvdXIgU3RyaXBlczwvYT4uPC9wPlxyXG4gICA8cD5Ub2RvcyBTYW50b3MgcGhvdG9ncmFwaHMgY29weXJpZ2h0IEhvd2FyZCBFa21hbiwgdXNlZCB3aXRoIHBlcm1pc3Npb24uPC9wPlxyXG4gICA8cD5TZWF0dGxlIHNtb2tlIHN1bW1lciBwaG90b2dyYXBocyBkZXBpY3QgdGhlIENoaWh1bHkgU2N1bHB0dXJlIEdhcmRlbiBhdCBTZWF0dGxlIENlbnRlciBhbmQgYXJlIGJ5IHRoZSBhdXRob3IuPC9wPlxyXG4gICA8cD5BZXJpYWwgY2xpbWF0ZSBwaG90b2dyYXBocyBieSBOQVNBLjwvcD5cclxuICAgSW1hZ2UgYXNzZXRzIGZyb20gUE5HdHJlZTpcclxuICAgPHVsPlxyXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vcG5ndHJlZS5jb20vZnJlZXBuZy9oZWF2eS1zbm93XzM3MjM5NTQuaHRtbCc+XCJoZWF2eSBzbm93XCIgYmFja2dyb3VuZDwvYT48L2xpPlxyXG4gICAgPGxpPkJsYWNrIGNsb3VkcyBiYWNrZ3JvdW5kPC9saT5cclxuICAgIDxsaT5CbGFjayBtaXN0IGJhY2tncm91bmQgIzE8L2xpPlxyXG4gICAgPGxpPkJsYWNrIG1pc3QgYmFja2dyb3VuZCAjMjwvbGk+XHJcbiAgICA8bGk+RmlyZSBhbmQgc3BhcmtzIGJhY2tncm91bmQ8L2xpPlxyXG4gICA8bGk+PGk+RnJhbWVzIHVzZWQgZm9yIFwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiOjwvaT5cclxuICAgPHVsPlxyXG4gICAgPGxpPkJsdWUgc21va2UgZnJhbWUgIzE8L2xpPlxyXG4gICAgPGxpPkJsdWUgc21va2UgZnJhbWUgIzI8L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vcG5ndHJlZS5jb20vZnJlZXBuZy9ibHVlLXNtb2tlLWFic3RyYWN0LWZyYW1lLWFydC1mcmVlLXBuZy1hbmQtcHNkXzU1MTI4MTQuaHRtbCc+Qmx1ZSBzbW9rZSBmcmFtZSAjMzwvYT48L2xpPlxyXG4gICA8L3VsPjwvbGk+XHJcbiAgIDxsaT48aT5GcmFtZXMgdXNlZCBmb3Igb3RoZXIgcXVvdGVzOjwvaT5cclxuICAgPHVsPlxyXG4gICAgPGxpPlJlZCBhbmQgYmxhY2sgc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPkRhcmsgYmx1ZSBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+UHVycGxlIHdhdGVyY29sb3Igc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPkNvb2wgY29sb3JzIHNtb2tlIGZyYW1lXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPkNpcmN1bGFyIGN5YW4gZnJhbWU8L2xpPlxyXG4gICA8L3VsPjwvbGk+XHJcbiAgIDwvdWw+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J3Jlc3BlY3RzJyBjbGFzc05hbWU9J2NyZWRpdCBhYm91dCc+PGgzPkFja25vd2xlZGdtZW50czwvaDM+XHJcbiAgIFNwZWNpZmljIHRoYW5rcyB0bzpcclxuICAgPHVsPlxyXG4gICAgPGxpPlRvbnksIGZvciBsZXR0aW5nIG1lIGdldCBhd2F5IHdpdGggdGhpcyBpbiB0aGUgZmlyc3QgcGxhY2U8L2xpPlxyXG4gICA8L3VsPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdnb2JhY2snPjxhIGhyZWY9Jy8nPkJhY2sgdG8gdGhlIGVzc2F5PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICkgfVxyXG4iLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZmVldCc+XHJcbiAgIDxkaXY+PGEgaHJlZj0nL21ldGFkYXRhL2NyZWRpdCc+Q3JlZGl0czwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgRnJhZ21lbnRzIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzXCI7XHJcbmltcG9ydCBSYXcxIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3Rlc3QxXCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb2FzdGxpbmUuY3NzJ1xyXG5pbXBvcnQgeyBHbGFjaWVyQSwgR2xhY2llckIsIEdsYWNpZXJDIH0gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1nbGFjaWVyXCI7XHJcbmltcG9ydCBXQVZFIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiO1xyXG5pbXBvcnQgV2hhbSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IERlZmluZSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZVwiO1xyXG5pbXBvcnQgTGV0U2F5IGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5XCI7XHJcbmltcG9ydCBPZGUgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1vZGVcIjtcclxuaW1wb3J0IHsgQ2hpR2FyMSwgQ2hpR2FyMiB9IGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGlcIjtcclxuaW1wb3J0IEdhcmRlbiBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2NlYW5zaWRlJz5cclxuICAgPG1haW4gaWQ9J3dhdGVyJz5cclxuICAgIDxkaXYgaWQ9J2JlYWNoJz5cclxuICAgICA8RnJhZ21lbnRzIC8+XHJcbiAgICAgPE9kZSAvPlxyXG4gICAgIDxHbGFjaWVyQSAvPlxyXG4gICAgIDxHYXJkZW4gLz5cclxuICAgICA8RGVmaW5lIC8+XHJcbiAgICAgPEdsYWNpZXJCIC8+XHJcbiAgICAgPFdBVkUgLz5cclxuICAgICA8R2xhY2llckMgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L21haW4+XHJcbiAgIDxXaGFtIC8+XHJcbiAgIDxGb290ZXIgLz5cclxuICA8L2Rpdj5cclxuICk7XHJcbn1cclxuIiwgIi8vIGNvbnN0IGEgPSBSYXcxLnZhbHVlKCk7XHJcbmltcG9ydCBTY2VuZTAxIGZyb20gJy4vZnJhZ21lbnRzLzAxJztcclxuaW1wb3J0IE9oaW8gZnJvbSAnLi9mcmFnbWVudHMvc3RyaXBlLW9oaW8nO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8V2FzaGluZ3RvbiAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nSUlJJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WPC9oNT5cclxuICAgV2UgZG8gbm90IGtub3cgd2hpY2ggdG8gZmVhciBtb3JlLDxici8+XHJcbiAgIFRoZSB0ZXJyb3Igb2YgY2hhbmdlPGJyLz5cclxuICAgT3IgdGhlIHRlcnJvciBvZiB1bmNlcnRhaW50eSwgPGJyLz5cclxuICAgVGhlIGdsYWNpZXIgY2FsdmluZzxici8+XHJcbiAgIE9yIGp1c3QgYWZ0ZXIuPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVklJSSc+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaGFtKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdraWNrZXInPlxyXG4gICA8ZGl2IGlkPSdraW1nJz48aW1nIHNyYz0nL2NsaW1hdGVfc3RyaXBlc19teC5wbmcnIGFyaWEtZGVzY3JpYmVkYnk9XCJcIiBhcmlhLWRldGFpbHM9XCJcIiBjbGFzc05hbWU9J3NsaWRlLWluLWJsdXJyZWQtYm90dG9tJyAvPjwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIClcclxufSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdmZWV0Jz5cclxuICAgPGRpdj48YSBocmVmPScvbWV0YWRhdGEvY3JlZGl0Jz5DcmVkaXRzPC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmluZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBLeWxlIFdoeXRlLDxici8+XCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCJcclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RlKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdPZGUnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgIDxpbWcgc3JjPScvaW5kaWdvX3BhaW50X2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPmZvcmdldHRpbmcgdGhlIG5hdGlvbiBpcyBhIHN5bmRyb21lLjwvcD5cclxuICAgIDxwPkFsbCB0aGF0XHUyMDE5cyBsZWZ0IG9mIHRoZSBzZWEgaW4geW91IGlzIGZvYW0sPC9wPlxyXG4gICAgPHA+dGhlIGNvYXN0bGluZSdzIGJyb2tlbiB2b2ljZSBhbmQgYWxsIGl0cyBjcmFncy48L3A+XHJcbiAgICBcclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBVcmF5b1x1MDBFMW4gTm9lbCw8YnIvPlwiTm8gTG9uZ2VyIE9kZVwiXHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBmYWNlcyA9IFsnYWd1aWxhJywgJ3NvbCddXHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuICBsZXQgcGljaztcclxuICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICBwaWNrID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICBwaWNrID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGZhY2VzW3BpY2tdO1xyXG4gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhcmRlbigpIHtcclxuIGNvbnN0IGdhcmRlbk1lID0gKCkgPT4ge1xyXG4gICBpZiAoZmxpcCgpID09PSAnYWd1aWxhJykge1xyXG4gICByZXR1cm4gPENoaUdhcjEgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgcmV0dXJuIDxDaGlHYXIyIC8+O1xyXG4gIH1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtnYXJkZW5NZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hpR2FyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4xJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMS5qcGVnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBmdW5jdGlvbiBDaGlHYXIyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4yJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyBhbHQ9JycvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDNUlsQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDcEQxQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNoQ2pDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxXQUFXO0FBSWYsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxVQUFVLFFBQVEsU0FBVSxHQUFHO0FBQzFDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNuQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFHYix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNsQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEwQztBQU8zQixlQUFlO0FBQzdCLFNBQ0Msb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Ysb0NBQUMsUUFBRCxNQUNDLG9DQUFDLHFCQUFELE9BQ0Esb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsU0FBRCxNQUFPLDhCQUVSLG9DQUFDLFFBQUQsTUFDQyxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBQ2pCSjtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFlLG1CQUFtQjtBQUNqQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFRLElBQUc7QUFBQSxLQUMxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxLQUFELE1BQUcsZ0RBQ0gsb0NBQUMsS0FBRCxNQUFHLDJHQUNILG9DQUFDLEtBQUQsTUFBRztBQUFBOzs7QUNOTDtBQUFlLHNCQUFzQjtBQUNwQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFhLFdBQVU7QUFBQSxLQUM5QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBa0IsS0FBSTtBQUFBO0FBQUE7OztBRkVuQyxxQkFBcUI7QUFDcEIsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsU0FBRCxPQUNBLG9DQUFDLFlBQUQ7QUFBQTtBQUtILElBQU8sb0JBQVE7OztBR2ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSx1QkFBc0I7QUFDcEMsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBYSxXQUFVO0FBQUEsS0FDOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWtCLEtBQUk7QUFBQTtBQUFBOzs7QUNKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNlLGdCQUFnQjtBQUM5QixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUNQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUFPLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUEwQixvQkFBaUI7QUFBQSxJQUFHLGdCQUFhO0FBQUEsSUFBRyxXQUFVO0FBQUE7QUFBQTs7O0FDSm5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxvQkFBb0I7QUFDMUIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBZSxJQUFHO0FBQUEsS0FDaEMsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXdCLFdBQVU7QUFBQSxNQUMzQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBc0Isb0NBQUMsS0FBRCxNQUFHLG9DQUFDLE1BQUQsTUFBSSxRQUFRLDJDQUNiLG9DQUFDLE1BQUQsT0FBSywyQ0FHNUMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXVCLHVCQUFtQixvQ0FBQyxNQUFELE9BQUs7QUFBQTtBQUsxRCxvQkFBb0I7QUFDMUIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBZSxJQUFHO0FBQUEsS0FDakMsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXdCLElBQUc7QUFBQSxJQUFRLFdBQVU7QUFBQSxNQUNyRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBc0Isb0NBQUMsS0FBRCxNQUFHLG9DQUFDLE1BQUQsTUFBSSxNQUFNLHNDQUNoQixvQ0FBQyxNQUFELE9BQUssd0JBQ25CLG9DQUFDLE1BQUQsT0FBSyxrQ0FDSyxvQ0FBQyxNQUFELE9BQUssdUJBQ2hCLG9DQUFDLE1BQUQsT0FBSyxvQkFHekIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXVCLHVCQUFtQixvQ0FBQyxNQUFELE9BQUs7QUFBQTtBQUt6RCxvQkFBb0I7QUFDMUIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBZSxJQUFHO0FBQUEsS0FDakMsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXFCLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxNQUNuRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBc0Isb0NBQUMsS0FBRCxNQUFHLG9DQUFDLE1BQUQsTUFBSSxTQUFTLHVCQUNsQyxvQ0FBQyxNQUFELE9BQUssbUNBQ08sb0NBQUMsTUFBRCxPQUFLLHFCQUNuQixvQ0FBQyxNQUFELE9BQUssaUNBQ08sb0NBQUMsTUFBRCxPQUFLLHFCQUduQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBdUIsdUJBQW1CLG9DQUFDLE1BQUQsT0FBSztBQUFBO0FBS3pELG1CQUFtQjtBQUN6QixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUNQLG9DQUFDLFVBQUQsT0FDQSxvQ0FBQyxVQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBOzs7QUNsREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLGtCQUFrQjtBQUNoQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUMxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsTUFDVCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcsOENBQ0gsb0NBQUMsS0FBRCxNQUFHLHNCQUFrQixvQ0FBQyxNQUFELE9BQUssZUFFMUIsb0NBQUMsS0FBRCxNQUFHLDJDQUF1QyxvQ0FBQyxNQUFELE9BQUssK0JBQ3BCLG9DQUFDLE1BQUQsT0FBSyxvQkFHakMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQVMsb0JBQ1Asb0NBQUMsTUFBRCxPQUFLO0FBQUE7OztBQ2J6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUsa0JBQWtCO0FBQ2hDLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQzFCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxNQUNULG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFRLHNEQUNnQyxvQ0FBQyxNQUFELE9BQUssZ0NBQy9CLG9DQUFDLE1BQUQsT0FBSyw4QkFDUCxvQ0FBQyxNQUFELE9BQUssZ0RBR2hDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFTLG9CQUFnQixvQ0FBQyxNQUFELE9BQUs7QUFBQTs7O0FDVmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSxrQkFBa0I7QUFDaEMsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDMUIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXlCLFdBQVU7QUFBQSxNQUM1QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcscUNBQWlDLG9DQUFDLEtBQUQsTUFBRyxnQ0FBK0IseUNBRXZFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1QixlQUMxQixvQ0FBQyxNQUFELE9BQUs7QUFBQTs7O0FDUnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSxnQkFBZ0I7QUFDOUIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBO0FBQUE7OztBQ0haO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTSxRQUFRLENBQUMsVUFBVTtBQUV6QixJQUFNLE9BQVEsTUFBTTtBQUNsQixNQUFJO0FBQ0osTUFBSSxLQUFLLFdBQVcsS0FBSztBQUN4QixXQUFPO0FBQUEsU0FDRDtBQUNOLFdBQU87QUFBQTtBQUVSLFNBQU8sTUFBTTtBQUFBO0FBR0Esa0JBQWtCO0FBQ2hDLFFBQU0sV0FBVyxNQUFNO0FBQ3JCLFFBQUksV0FBVyxVQUFVO0FBQ3pCLGFBQU8sb0NBQUMsU0FBRDtBQUFBLFdBQ0Q7QUFDTixhQUFPLG9DQUFDLFNBQUQ7QUFBQTtBQUFBO0FBSVQsU0FDQyxvQ0FBQyxPQUFELE1BQ0U7QUFBQTtBQUtHLG1CQUFtQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFXLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDeEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQTZCLEtBQUk7QUFBQTtBQUFBO0FBTXZDLG1CQUFtQjtBQUN6QixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFXLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDeEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQTZCLEtBQUk7QUFBQTtBQUFBOzs7QUMzQy9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSxnQkFBZ0I7QUFDOUIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQTBCLFdBQVU7QUFBQSxNQUM1QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBc0Isb0NBQUMsS0FBRCxNQUFHLDZEQUFtRSxvQ0FBQyxNQUFELE9BQUssNkNBRWhILG9DQUFDLEtBQUQsTUFBRyx3Q0FBb0Msb0NBQUMsTUFBRCxPQUFLLGtEQUU1QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBdUIsc0JBQWtCLG9DQUFDLE1BQUQsT0FBSztBQUFBOzs7QUNSaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLGVBQWU7QUFDN0IsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXVCLFdBQVU7QUFBQSxNQUMxQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcseUNBQ0gsb0NBQUMsS0FBRCxNQUFHLG9EQUNILG9DQUFDLEtBQUQsTUFBRyxxREFHSixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBdUIsb0JBQ3hCLG9DQUFDLE1BQUQsT0FBSztBQUFBOzs7QUNYdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLElBQUksVUFBVTtBQUlkLGdCQUFnQjtBQUNmLFNBQ0MsRUFBRTtBQUFBO0FBSUosSUFBTyxnQkFBUTs7O0FDZmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLG9CQUFtQjtBQUNqQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFRLElBQUc7QUFBQSxLQUMxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxLQUFELE1BQUcsZ0RBQ0gsb0NBQUMsS0FBRCxNQUFHLDJHQUNILG9DQUFDLEtBQUQsTUFBRztBQUFBOzs7QUNOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQUlPLGlCQUFpQjtBQUN2QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3JCLG9CQUFvQjtBQUNsQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUNQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUFlLG9DQUFDLE1BQUQsTUFBSSxVQUFNLG9DQUFDLEtBQUQsTUFBRyw4QkFDeEQsb0NBQUMsS0FBRCxNQUFHLG9iQUFnYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBdUMsNENBQTJDLE9BQzdnQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBZSxvQ0FBQyxNQUFELE1BQUkscUJBQzFDLG9DQUFDLEtBQUQsTUFBRyw2RkFBeUYsb0NBQUMsS0FBRCxNQUFHLFlBQVcsdUNBQW1DLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFnQyxtQkFBa0IsbURBQStDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUE2QixjQUFhLHFDQUFpQyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBNkIsb0NBQW1DLCtEQUNqWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBVSxXQUFVO0FBQUEsS0FBaUIsb0NBQUMsTUFBRCxNQUFJLG9DQUNqRCxvQ0FBQyxNQUFELE1BQUksU0FBUyxpQkFFYixvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLGtFQUNKLG9DQUFDLE1BQUQsTUFBSSwwQ0FDSixvQ0FBQyxNQUFELE1BQUksMkNBQ0osb0NBQUMsTUFBRCxNQUFJLHdDQUNBLGtCQUVMLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxNQUFELE1BQUksV0FDSixvQ0FBQyxLQUFELE1BQUcsa0NBQThCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUErQixzQkFBcUIsTUFDN0Ysb0NBQUMsS0FBRCxNQUFHLDJFQUNILG9DQUFDLEtBQUQsTUFBRyxrSEFDSCxvQ0FBQyxLQUFELE1BQUcsd0NBQXVDLDhCQUUxQyxvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFzRCw2QkFDbEUsb0NBQUMsTUFBRCxNQUFJLDRCQUNKLG9DQUFDLE1BQUQsTUFBSSw2QkFDSixvQ0FBQyxNQUFELE1BQUksNkJBQ0osb0NBQUMsTUFBRCxNQUFJLCtCQUNMLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxLQUFELE1BQUcsNkRBQ1Asb0NBQUMsTUFBRCxNQUNDLG9DQUFDLE1BQUQsTUFBSSx3QkFDSixvQ0FBQyxNQUFELE1BQUksd0JBQ0osb0NBQUMsTUFBRCxNQUFJLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUEwRiwyQkFFdkcsb0NBQUMsTUFBRCxNQUFJLG9DQUFDLEtBQUQsTUFBRyxrQ0FDUCxvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLDhCQUNKLG9DQUFDLE1BQUQsTUFBSSwwQkFDSixvQ0FBQyxNQUFELE1BQUksa0NBQ0osb0NBQUMsTUFBRCxNQUFJLDRCQUVKLG9DQUFDLE1BQUQsTUFBSSw0QkFHTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FBZSxvQ0FBQyxNQUFELE1BQUksb0JBQW9CLHVCQUVwRSxvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLGlFQUVMLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUFTLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFJO0FBQUE7OztBQzNEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNlLGtCQUFrQjtBQUNoQyxTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUNQLG9DQUFDLE9BQUQsTUFBSyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBbUI7QUFBQTs7O0FDSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFNQSxzQkFBcUI7QUFDcEIsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsU0FBRCxPQUNBLG9DQUFDLFlBQUQ7QUFBQTtBQUtILElBQU8scUJBQVE7Ozs7OztBQ2ZmO0FBQU8scUJBQW9CO0FBQzFCLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQWUsSUFBRztBQUFBLEtBQ2hDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUF3QixXQUFVO0FBQUEsTUFDM0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXNCLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxNQUFELE1BQUksUUFBUSwyQ0FDYixvQ0FBQyxNQUFELE9BQUssMkNBRzVDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1Qix1QkFBbUIsb0NBQUMsTUFBRCxPQUFLO0FBQUE7QUFLMUQscUJBQW9CO0FBQzFCLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQWUsSUFBRztBQUFBLEtBQ2pDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUF3QixJQUFHO0FBQUEsSUFBUSxXQUFVO0FBQUEsTUFDckQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXNCLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxNQUFELE1BQUksTUFBTSxzQ0FDaEIsb0NBQUMsTUFBRCxPQUFLLHdCQUNuQixvQ0FBQyxNQUFELE9BQUssa0NBQ0ssb0NBQUMsTUFBRCxPQUFLLHVCQUNoQixvQ0FBQyxNQUFELE9BQUssb0JBR3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1Qix1QkFBbUIsb0NBQUMsTUFBRCxPQUFLO0FBQUE7QUFLekQscUJBQW9CO0FBQzFCLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQWUsSUFBRztBQUFBLEtBQ2pDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUFxQixJQUFHO0FBQUEsSUFBUyxXQUFVO0FBQUEsTUFDbkQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXNCLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxNQUFELE1BQUksU0FBUyx1QkFDbEMsb0NBQUMsTUFBRCxPQUFLLG1DQUNPLG9DQUFDLE1BQUQsT0FBSyxxQkFDbkIsb0NBQUMsTUFBRCxPQUFLLGlDQUNPLG9DQUFDLE1BQUQsT0FBSyxxQkFHbkMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXVCLHVCQUFtQixvQ0FBQyxNQUFELE9BQUs7QUFBQTs7O0FDeENoRTtBQUFlLGlCQUFnQjtBQUM5QixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUN4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBMEIsV0FBVTtBQUFBLE1BQzVDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFzQixvQ0FBQyxLQUFELE1BQUcsNkRBQW1FLG9DQUFDLE1BQUQsT0FBSyw2Q0FFaEgsb0NBQUMsS0FBRCxNQUFHLHdDQUFvQyxvQ0FBQyxNQUFELE9BQUssa0RBRTVDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1QixzQkFBa0Isb0NBQUMsTUFBRCxPQUFLO0FBQUE7OztBQ1JoRTtBQUNlLGlCQUFnQjtBQUM5QixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUNQLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxLQUFPLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUEwQixvQkFBaUI7QUFBQSxJQUFHLGdCQUFhO0FBQUEsSUFBRyxXQUFVO0FBQUE7QUFBQTs7O0FDSm5HO0FBQ2UsbUJBQWtCO0FBQ2hDLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLEtBQ1Asb0NBQUMsT0FBRCxNQUFLLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUFtQjtBQUFBOzs7QUNKbkM7QUFBZSxtQkFBa0I7QUFDaEMsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDMUIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXlCLFdBQVU7QUFBQSxNQUM1QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcscUNBQWlDLG9DQUFDLEtBQUQsTUFBRyxnQ0FBK0IseUNBRXZFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1QixlQUMxQixvQ0FBQyxNQUFELE9BQUs7QUFBQTs7O0FDUnBCO0FBQWUsZ0JBQWU7QUFDN0IsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQXVCLFdBQVU7QUFBQSxNQUMxQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFELE1BQUcseUNBQ0gsb0NBQUMsS0FBRCxNQUFHLG9EQUNILG9DQUFDLEtBQUQsTUFBRyxxREFHSixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBdUIsb0JBQ3hCLG9DQUFDLE1BQUQsT0FBSztBQUFBOzs7QUNYdEI7QUFDQSxJQUFNLFNBQVEsQ0FBQyxVQUFVO0FBRXpCLElBQU0sUUFBUSxNQUFNO0FBQ2xCLE1BQUk7QUFDSixNQUFJLEtBQUssV0FBVyxLQUFLO0FBQ3hCLFdBQU87QUFBQSxTQUNEO0FBQ04sV0FBTztBQUFBO0FBRVIsU0FBTyxPQUFNO0FBQUE7QUFHQSxtQkFBa0I7QUFDaEMsUUFBTSxXQUFXLE1BQU07QUFDckIsUUFBSSxZQUFXLFVBQVU7QUFDekIsYUFBTyxvQ0FBQyxVQUFEO0FBQUEsV0FDRDtBQUNOLGFBQU8sb0NBQUMsVUFBRDtBQUFBO0FBQUE7QUFJVCxTQUNDLG9DQUFDLE9BQUQsTUFDRTtBQUFBO0FBS0csb0JBQW1CO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVcsV0FBVTtBQUFBLElBQXVCLE1BQUs7QUFBQSxLQUN4RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBNkIsS0FBSTtBQUFBO0FBQUE7QUFNdkMsb0JBQW1CO0FBQ3pCLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVcsV0FBVTtBQUFBLElBQXVCLE1BQUs7QUFBQSxLQUN4RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBNkIsS0FBSTtBQUFBO0FBQUE7OztBUjdCeEMsa0JBQWlCO0FBQ3ZCLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHckIsaUJBQWlCO0FBQy9CLFNBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLEtBQ1Asb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ1Isb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLEtBQ1Asb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsV0FBRCxPQUNBLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxTQUFELE9BQ0Esb0NBQUMsV0FBRCxPQUNBLG9DQUFDLE9BQUQsT0FDQSxvQ0FBQyxXQUFELFNBR0Ysb0NBQUMsT0FBRCxPQUNBLG9DQUFDLFNBQUQ7QUFBQTs7O0FwQmZILG9CQUFrQztBQUMzQixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsNEJBQTRCO0FBQUEsSUFDMUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViw4Q0FBOEM7QUFBQSxJQUM1QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLDRDQUE0QztBQUFBLElBQzFDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYseUNBQXlDO0FBQUEsSUFDdkMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix3Q0FBd0M7QUFBQSxJQUN0QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHdDQUF3QztBQUFBLElBQ3RDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsd0NBQXdDO0FBQUEsSUFDdEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix3Q0FBd0M7QUFBQSxJQUN0QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHVDQUF1QztBQUFBLElBQ3JDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsc0NBQXNDO0FBQUEsSUFDcEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixxQ0FBcUM7QUFBQSxJQUNuQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGtDQUFrQztBQUFBLElBQ2hDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsK0JBQStCO0FBQUEsSUFDN0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViwwQkFBMEI7QUFBQSxJQUN4QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGlCQUFpQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
