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

// app/routes/pacific/fragments/B.tsx
init_react();

// app/routes/pacific/fragments/poem-glacier.tsx
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

// app/routes/pacific/fragments/B.tsx
function B() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene02, null), /* @__PURE__ */ React.createElement(Scene03, null), /* @__PURE__ */ React.createElement(Scene04, null), /* @__PURE__ */ React.createElement(GlacierA, null));
}
function Scene02() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "two"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "A memory too small for me to have a place for it in time: I am barely old enough to remember, and my parents are married, and they are discovering that the dining room floor is uneven, as it happens, as the water pouring in through the closed windows forms a triangular puddle where the exterior walls meet."), /* @__PURE__ */ React.createElement("p", null, "And I am here: sitting in the pool of rainwater with enough room to slap my hands rhythmically on more of it beside me, aware of and ignoring their mounting but generalized disapproval. If it has occurred to me that this is not what they wanted from their recently-finished floor, the thought comes with overall indifference; that they had it poured and sanded, by human hands, so I'm not sure what they expected."), /* @__PURE__ */ React.createElement("p", null, "(Construction of the house I will grow up in has been ongoing, will be much longer, into memories with enough definition to pull their own weight in time. I do not know what a level is.)"), /* @__PURE__ */ React.createElement("p", null, `I haven't gotten tired of it yet. As I slap the puddle, I am shouting: "Swimming pool! Swimming pool!"`)));
}
function Scene03() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "three"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Here are two things I know about power, very early in my life:"), /* @__PURE__ */ React.createElement("p", null, "The most physically powerful thing in the world is water. Water writes the shape of land and can demolish anything with time. Water in the air is why every inanimate object around me dies faster than it said it ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.patreon.com/posts/cw-data-loss-49210295"
  }, "would"), "; like optical media you thought backed up something you care about, or elastic. Water bowls you over when you come near it and get cocky enough to turn your back. Water sets the living limits of what is possible: like when the supply turns off, and the tinaco that there's not a one-word English term for is reserved for paying tourists in the back yard to cushion them from scarcity, and I bathe out of a bucket in the shower."), /* @__PURE__ */ React.createElement("p", null, "(It staggers me, the way the North uses wood: like there's enough of it to go around, instead of concrete. I do not make the connection between timber, which awes me as a show of wealth, and forests, which unnerve me; it doesn't connect that anything I see could be sufficient for people to claim it is enough.)"), /* @__PURE__ */ React.createElement("p", null, "The best way for a person to acquire power is to be indispensable. My body--I do not yet have the language for this; I always know--my body does not do the things that other people want it to do. People don't want me, if they can afford to. "), /* @__PURE__ */ React.createElement("p", null, "But I am also a dual citizen, a term which often means that no one who asks for paperwork other than a passport is going to get something they like. I will have to be indispensable."), /* @__PURE__ */ React.createElement("p", null, "I resolve to go to college in the United States. I will get a diploma in English print and then no one will be able to afford to dislike me enough for them to tell me no."), /* @__PURE__ */ React.createElement("p", null, "(I am, approximately, six years old.)")));
}
function Scene04() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "four"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Three weeks after my eighteenth birthday, I go north.")));
}

// app/routes/pacific/fragments/C.tsx
init_react();

// app/routes/pacific/fragments/poem-wave.tsx
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

// app/routes/pacific/fragments/C.tsx
function C() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene05, null), /* @__PURE__ */ React.createElement(Scene06, null), /* @__PURE__ */ React.createElement(Scene07, null), /* @__PURE__ */ React.createElement(Scene08, null), /* @__PURE__ */ React.createElement(Scene09, null), /* @__PURE__ */ React.createElement(WAVE, null), /* @__PURE__ */ React.createElement(Scene10, null), /* @__PURE__ */ React.createElement(Scene11, null), /* @__PURE__ */ React.createElement(Scene12, null), /* @__PURE__ */ React.createElement(GlacierC, null));
}
function Scene05() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "five"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am nine years old, and we have family in New Orleans. We have family in Florida, as well; my father has taken it upon himself to drive us from one to the other, which I find exciting. I only see GPS in rental cars, in the US, which is the sort of thing that satellites bother to map. We leave in the afternoon to drive through the night, which I find more exciting still."), /* @__PURE__ */ React.createElement("p", null, "We pass through a storm system, driving; harsh rain in motion at night is a rare treat for me, and I haven't quite grappled with the realities of highways enough to understand the pitfalls of why. I stare out the windows at the hard rain, the luxury of light and lanes on an American interstate.")));
}
function Scene06() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "six"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, `My father has told me about hurricane parties, rich people who were recently children taking off to sit it out in spare houses on the coast. The idiocy that comes with the world giving you no reason to believe you're not invulnerable. We may or may not discuss that part explicitly, but I'm aware, at home, of the controversy of the forcible redefinition of "beachfront" property by building on dunes, and the reasons people do so anyway. Why the law has less to say about it than the text claims it's supposed to.`), /* @__PURE__ */ React.createElement("p", null, "I know a lot of realtors."), /* @__PURE__ */ React.createElement("p", null, `I also know a joke: "I've got this great piece of land to sell you," it starts, "hasn't flooded since the dinosaurs..."`)));
}
function Scene07() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "seven"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Later in the summer, I am not nine years old. When I've recently turned ten, Katrina sweeps through where I am not. I have the vaguest of understandings of what a levee is, from songs, and now from news; like dunes, I think, but worse at being so."), /* @__PURE__ */ React.createElement("p", null, "In the lead-up to landfall, I am childishly, callously baffled: Category 5 on the forecast is always good news for me, because large numbers mean a higher probability of class being called off. (There is, for the duration of my childhood, one paved road. The others, under sufficient pressure, turn to rivers. I live on a hill; I like to watch. One year, later in the decade, on a day that the roads weren't washed out early enough in the morning to get me out of it, my school turns to rapids, and I am unaccountably pleased to know it was built on a vein of red clay as that paints itself onto my socks.) "), /* @__PURE__ */ React.createElement("p", null, "Evacuation, for example, is foreign to me. I can't imagine why they're bothering; I could say that the reason I don't understand why one place would be safer than another is that no part of my state is a full fifty miles from the coastline, but I doubt I thought it through that far. I think I simply do not register that locations are unlike one another in time not to learn it on the news."), /* @__PURE__ */ React.createElement("p", null, "I am ten years and almost one month old, and I understand that hurricane preparedness is relative.")));
}
function Scene08() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eight"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I stuck my feet in the Atlantic once. It was colder than an ocean had any business being, by my lights, and gray. There was something bizarre in the idea that it was warm enough to feed a hurricane.  ")));
}
function Scene09() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "nine"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Before I am eleven, we stop having family in New Orleans.")));
}
function Scene10() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "ten"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At around four years old, I am eavesdropping--this will be a habit--I am eavesdropping on kindergarten teachers; they are talking about the weather. "), /* @__PURE__ */ React.createElement("p", null, "Specifically, they are talking about the ocean getting warmer, and how that's making hurricane season harsher, and longer, in ways no one should like. We depend on hurricanes for freshwater--my town, specifically, relies on them to fill the aquifer its much-discussed oasis status is built upon--but too much water at a time defeats the point, rips topsoil into the sea, runs its course too fast for us to keep. And it's more unpleasant for them than it is for me."), /* @__PURE__ */ React.createElement("p", null, "The warmth, at least, is common sense; I know heat is energy because I know hurricanes need warm water to live. That's why they starve and stall out going north, or coming to land. A storm would have to be very special to fight all the way through that.")));
}
function Scene11() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eleven"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My first years in the United States, I Skype my dad less often than I should. Less often than I want to. It's hard to find a rhythm; I am not doing well there. But he tells me about the weather. ")));
}
function Scene12() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twelve"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "When I am twenty-four, it's ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.nytimes.com/2020/05/18/climate/climate-changes-hurricane-intensity.html"
  }, "established"), " that warmer water is supercharging tropical storms."), /* @__PURE__ */ React.createElement("p", null, "I understand that science moves more slowly than kindergarten teachers' small talk; that climate, by definition, happens on a timescale closer to geological than anecdote. "), /* @__PURE__ */ React.createElement("p", null, "But I do have the fleeting thought that, even then, taking twenty years of my life to catch up to how the weather's doing seems a bit much.")));
}

// app/routes/pacific/fragments/D.tsx
init_react();

// app/routes/pacific/fragments/photos_chi.tsx
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

// app/routes/pacific/fragments/poem-ode.tsx
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

// app/routes/pacific/fragments/poem-winsum.tsx
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

// app/routes/pacific/fragments/quote-clime.tsx
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

// app/routes/pacific/fragments/stripe-ohio.tsx
init_react();
var cap_oh = '"Warming stripes" visualization for the state of Ohio, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.';
function Ohio() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Ohio",
    className: "flip-in-hor-top hero",
    role: "img",
    "aria-describedby": "cap_oh"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_oh.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_oh",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_oh)));
}

// app/routes/pacific/fragments/stripe-washington.tsx
init_react();
var cap_wa = '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.';
function Washington() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Washington",
    className: "flip-in-hor-top hero",
    role: "img",
    "aria-describedby": "cap_wa"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_wa",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_wa)));
}

// app/routes/pacific/fragments/D.tsx
function D() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene13, null), /* @__PURE__ */ React.createElement(Scene14, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene15, null), /* @__PURE__ */ React.createElement(Scene16, null), /* @__PURE__ */ React.createElement(Scene17, null), /* @__PURE__ */ React.createElement(Scene18, null), /* @__PURE__ */ React.createElement(Scene19, null), /* @__PURE__ */ React.createElement(Scene20, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene22, null), /* @__PURE__ */ React.createElement(Scene21, null), /* @__PURE__ */ React.createElement(Scene23, null), /* @__PURE__ */ React.createElement(Scene24, null), /* @__PURE__ */ React.createElement(Scene25, null), /* @__PURE__ */ React.createElement(Scene26, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene27, null), /* @__PURE__ */ React.createElement(Scene28, null), /* @__PURE__ */ React.createElement(Scene29, null), /* @__PURE__ */ React.createElement(Scene30, null), /* @__PURE__ */ React.createElement(Scene31, null), /* @__PURE__ */ React.createElement(Scene32, null), /* @__PURE__ */ React.createElement(Scene33, null), /* @__PURE__ */ React.createElement(Scene34, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene35, null), /* @__PURE__ */ React.createElement(Scene36, null), /* @__PURE__ */ React.createElement(Scene37, null), /* @__PURE__ */ React.createElement(Scene38, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene39, null), /* @__PURE__ */ React.createElement(Scene40, null), /* @__PURE__ */ React.createElement(Scene41, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene42, null));
}
function Scene13() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The college in the US that I get into is in Ohio, so I am eighteen and I am in Ohio. Before that, I am seventeen, and my father is helping me pick out a winter coat on the internet, and I am asking him if I should choose the warmest one I see."), /* @__PURE__ */ React.createElement("p", null, "That's overkill, he says. (He has been there before, albeit substantially prior to me even being born.) What I realistically need is more towards the center of the range. I'd regret getting too heavy a coat, he says, and helps me pick one of the middling ones.")));
}
function Scene14() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "fourteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am given to understand it says enough to say that my first year in Ohio is a lake effect year, though I wouldn't know why. "), /* @__PURE__ */ React.createElement("p", null, "I learn, firsthand and on my hands, what a -40 wind chill is in Fahrenheit. I learn what special cane tips I need for traction in snow. I learn that my college is not particularly interested in clearing the sidewalks in time for class; it does not occur to me that they may once at least have been able to afford the negligence, because I don't have any reason to understand a comparison by which this becomes extreme."), /* @__PURE__ */ React.createElement("p", null, "My dad apologizes, though. For leading me wrong, with the coat."), /* @__PURE__ */ React.createElement("p", null, "This isn't what the weather here is supposed to do, he says."), /* @__PURE__ */ React.createElement("p", null, "I wouldn't know, I say; or maybe I don't.")));
}
function Scene15() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "fifteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I FaceTime my dad instead of Skyping, these days. He tells me how many days this week there have been municipal water. I tell him when it snows. He tells me how our temperatures compare. I tell him I got a new monitor. I tell him how much it was new, and how pleased I am with myself for how I found it used, how the deal took a matter of days."), /* @__PURE__ */ React.createElement("p", null, "You're in tech heaven up there, he says. I say, I guess. He says that used here would be new there. I think about that as a way to put it, later: development in relative time over space."), /* @__PURE__ */ React.createElement("p", null, "I say (another day) that I'd like to trade him my laptop, that it would be better for his grip than it's been for my vision. He asks if I want him to talk to ask the guy who sends him stuff from the border what the compounding costs of shipping would look like. I said I thought I'd just bring it to him, when I can. Save him the customs, the way we handled things growing up."), /* @__PURE__ */ React.createElement("p", null, "Oh, he says. That's kind of you."), /* @__PURE__ */ React.createElement("p", null, "I want to see you anyway, I say. The machine being light is the whole point of the thing. I don't see where kindness comes into it.")));
}
function Scene16() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "sixteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I was home for the last time in December, 2013. It's not my first summer away--it feels it--it's not my first summer but my second that the hurricane comes.")));
}
function Scene17() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "seventeen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The big hurricane whose name I used to remember happened shortly before I was born, and thus the point of reference for an extraordinary storm could comfortably bracket anything I'd know."), /* @__PURE__ */ React.createElement("p", null, "Her usurper comes the summer I turn twenty. It tears through town like a natural disaster, which is jarring. It upends my father's garden, which is, somehow, worse. Thinking of him putting it back together. Even if he had help."), /* @__PURE__ */ React.createElement("p", null, "He doesn't want to visit, after that, even before he can't. Travel has always been a thing of summer; he doesn't want to leave the house to storms unsupervised. He doesn't trust anyone else to handle it if he leaves it alone.")));
}
function Scene18() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eighteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "He sends me photos. But they get more difficult to look at over time, oddly enough.")));
}
function Scene19() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "nineteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Hurricane season grows longer at both ends. It's hard to find news about hurricanes in the Pacific that I can pick up on passively, though; American sources, which are what the internet is built on, care about the Atlantic first and foremost. I don't like the Atlantic, selfishly: it has a bad track record, and I remember it gray.")));
}
function Scene20() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "In 2022, I tell him I'm writing this essay, and I ask if I can use the photos. He asks what I want them for. I say I'm writing about the increased toll of hurricanes on an environment that relied on them. He says he supposes Odile would be the one for that."), /* @__PURE__ */ React.createElement("p", null, "I wasn't there, I say. It's the first big one where I wasn't there."), /* @__PURE__ */ React.createElement("p", null, "He asks why that matters. Things are going to keep happening while you're not here, he says."), /* @__PURE__ */ React.createElement("p", null, "I know, I say."), /* @__PURE__ */ React.createElement("p", null, "Survivor's guilt is a thing, my partner says, in earshot, from offscreen. ")));
}
function Scene21() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "He sent me photos. In the end, I can't quite bring myself to describe them in time. I promise myself I'll come back to it.")));
}
function Scene22() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I tell my father that I'm writing about the fingerprints of climate change bracketed by my life. I tell him that a little over a quarter century is a pretty decent frame with which to encapsulate it. I tell him that sometimes it feels like it's following me up."), /* @__PURE__ */ React.createElement("p", null, "You've been working your way north, he says, with some delight at how it lines up. "), /* @__PURE__ */ React.createElement("p", null, "Everywhere I go, every year, people tell me that this isn't what the weather usually does, I tell him. I'm getting practice at the premise by now."), /* @__PURE__ */ React.createElement("p", null, "That's their problem, he says. He says it's a fantasy that isn't relevant to the world as it is and will continue being."), /* @__PURE__ */ React.createElement("p", null, "I say I think grounding themselves in what they still think of as normal is how people help themselves understand change."), /* @__PURE__ */ React.createElement("p", null, "He says it's still the case that such ground doesn't exist. I say I know.")));
}
function Scene23() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "It is January, and I still live in Bellevue. In the time between an afternoon's worth of this class and staying behind after, the rain that my partner hoped signaled a break from the snow has turned to hail."), /* @__PURE__ */ React.createElement("p", null, "I check the window. I come back. I'm sorry if there's background noise, I say to my instructor. It's hail."), /* @__PURE__ */ React.createElement("p", null, "There's a particular sort of smile I'm familiar with, when people are trying to tone down the impact of talking about the weather. It's there when he says it's not supposed to hail.")));
}
function Scene24() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I find myself wishing I'd gone outside in time for the hail. It's not a texture of ice found much elsewhere, and hasn't gotten old for me yet; I like to eat it."), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement("p", null, "(When it snowed, my dad was disappointed that I didn't, his words, go play in the snow. So was I, admittedly. I thought: there will be more snow next year. I will do better by myself next year, I think.)")));
}
function Scene25() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The first summer I'm settled enough in Seattle to be aware of much of anything, California is on fire. I am given to understand that this is new. Ash falls like snow, or like a Cold War era nuclear PSA. A friend growing up is visiting but I can't do much more than make it from the couch to another side of the room. "), /* @__PURE__ */ React.createElement("p", null, "We do manage to go to the glass sculpture garden. I try to take photos. My phone can capture the colors of the glass under alien light, or it can capture the gray sky and red sun. It does not know how to make sense of the two of them together."), /* @__PURE__ */ React.createElement("p", null, "My partner, my friend, and I talk about how cool it would be to come up with a short story where I could use the photos I did get as illustrations. Even if I can't capture the whole of it, it's striking. It would be nice to get something out of it.")));
}
function Scene26() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I get air filters.")));
}
function Scene27() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I get better air filters.")));
}
function Scene28() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eighteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Years later, in the pandemic, I already own respirators. I take the opportunity, periodically, to get better ones. There's a postal system; I can do that. I am all but used to the mail.")));
}
function Scene29() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My second week in Ohio, I wanted to send a letter to a friend. My RA had to teach me how to address an envelope. It struck me as sorcery for years: to order things and have them come to you. Resources flow towards empires, I knew when I was six; people go where the resources are, I tell people at twenty-six, feelings towards the empire are irrelevant. But on the personal level--there was something magic in such roads leading towards me. The first thing I bought with my college address was a cane.")));
}
function Scene30() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My partner and I have an argument about the concept of swimming beaches; for the sake of this argument, let's say I am twenty-two. His ocean is the Puget Sound: a tame, cool little thing that I know from the perspective of bridges, with glassy flats and nibbling waves. We are discussing why characters in a video game would pick up and leave their section of a coastline to swim somewhere else."), /* @__PURE__ */ React.createElement("p", null, "Presumably it's where the swimming beaches are, I say."), /* @__PURE__ */ React.createElement("p", null, "What do you mean swimming beach, he says."), /* @__PURE__ */ React.createElement("p", null, "Beaches where it's safe to swim, I say, impatiently. Within reason."), /* @__PURE__ */ React.createElement("p", null, "The resulting long and halting conversation, rendered an argument by lack of any universe of common reference, is cut short when his mother tells him that their family visited near my hometown before he'd be able to remember. At a tourists' beach his grandfather turned his back on the water and, when he went flying accordingly, lost a pair of dentures."), /* @__PURE__ */ React.createElement("p", null, "See, I say. Normal ocean. You don't turn your back on it.")));
}
function Scene31() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "We have had long enough to grow accustomed to one another that I struggle to remember other disjoints of this kind. There's been over half a decade to build the necessary conceptual bridges. Often enough, we still have moments that make him say, Sometimes I remember that we come from different worlds. But they don't much spring to memory these days.")));
}
function Scene32() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I have mixed feelings on referring to preparatoria as a high school. It gives people the approximate idea that they need, but more often than not I find I want the alienation; I'm just not entirely sure when I manage that versus actual incomprehension. And I don't want the latter; that defeats the point. I put far too much effort into translation than that."), /* @__PURE__ */ React.createElement("p", null, "Let's bow to audience and say I'm in high school, for this one. I've had to move to the capital of the state--during the week; splitting custody will do these things to you--for it. I'm a scholarship student at a private school, for related reasons. At this grade level in my hometown there's only vocational schooling, and it's not mandatory anyway. For the first time in my life,as a result, I am not in the public school system."), /* @__PURE__ */ React.createElement("p", null, "(One early meaning of this is that the school is air conditioned, which it does not occur to me to pack for my first week there. I turn fifteen and my teeth are chattering at the contrast for half the day, until a classmate incredulously lends me his jacket.)"), /* @__PURE__ */ React.createElement("p", null, "We are watching a movie in one of the throwaway classes whose redeeming features are generally movies, when the protagonist runs out onto the green, green lawn of some famous college's old American building."), /* @__PURE__ */ React.createElement("p", null, "The metal roof of my high school's new building (if we call it a high school, approximating) rattles when it rains, although it's not currently raining."), /* @__PURE__ */ React.createElement("p", null, "One of my classmates points and says, in much the same tone as people started citing ", /* @__PURE__ */ React.createElement("i", null, "la crisis"), " when the American recession meant they stopped exporting our economy's worth of tourists, that we shell out so much for tuition, so why doesn't our school look like that?"), /* @__PURE__ */ React.createElement("p", null, "The teacher could comment on history, and the fact that this is a new building. She could comemnt, even, on environment; we have an environmentalist component in another class, aggressively themed around mangrove preservation."), /* @__PURE__ */ React.createElement("p", null, "This is not the sort of person she is; she is the sort of person who tells parables about the fundamental differences in behavior between buckets of Mexican and American crabs."), /* @__PURE__ */ React.createElement("p", null, "So what she says is true to form: she says, that's because we live in a third world country, dear.")));
}
function Scene33() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At eighteen, I have not yet learned that, when someone tells me they don't speak Spanish, they mean that they speak no Spanish. Mexico mandates foreign language education after sixth grade; I hear about people whose schools are large and urban and monied enough to have choices of languages, but everyone has the option of English. There are five thousand people in my town and six hundred thousand in my state. The only option is English. "), /* @__PURE__ */ React.createElement("p", null, "The only option was English long before that, anyway; when the money and the media and the shipping comes in one language, you pick it up. ")));
}
function Scene34() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "There's a specific generation of Spanish-English slang I have that I suspect is dead by now. It's a midpoint: vocabulary without grammar, keywords without comprehension. Hot dogs vary wildly between countries, and, within Mexico--not that you'll know this online--between states, and thus I am as committed as you might expect to the argument that no one else makes them right; as such, I haven't had a hot dog since I was eighteen. "), /* @__PURE__ */ React.createElement("p", null, "The cart where my father and I were regulars had a hurricane lamp with no glass, for a while, and I liked standing close enough to the cooking surface to get the tiniest pitter-patter of hot oil on my arms. ", /* @__PURE__ */ React.createElement("i", null, "Hates El G\xFCero"), ", painted on the white surface by the kind of draftsman I was trained to be in secundaria and whose profession hasn't existed in the north for generations: the ", /* @__PURE__ */ React.createElement("i", null, "hot dog"), " was imported before the English adjective-noun order could follow suit."), /* @__PURE__ */ React.createElement("p", null, "Another word I use as an example: ", /* @__PURE__ */ React.createElement("i", null, "mach\xEDn"), ", an all-purpose intensifier. When English brought ", /* @__PURE__ */ React.createElement("i", null, "machine"), "s the clearest point of reference in common  for the referents of the word was: more.")));
}
function Scene35() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Industrialization trickles down. Emissions trickle down. Climate change reaches up, drifts, like California smoke, like it's dogging my footsteps. Like it wants to do anyone's ability to talk the big picture out the opposite of any favors.")));
}
function Scene36() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "There is an argument about mayonnaise I have whenever I can. Americans, as a national pastime, enjoy taking credit for the concept and then monologuing about how much they hate it. There is a general attempt to establish it as synonymous with whiteness in the racial sense as opposed to the visual one. I don't know who benefits from that, but it makes the preamble to English-language recipes for Japanese pancakes exhausting."), /* @__PURE__ */ React.createElement("p", null, "I have spent years iterating on the argument this means having, when I can bother. Mayonnaise is common where I'm from, in the desert: mixed with milk as a fat for frying and a topping for seemingly half of all savory dishes you can shake a squirt bottle at it."), /* @__PURE__ */ React.createElement("p", null, "That's disgusting, people tell me in English, and they would like to blame a white person for it."), /* @__PURE__ */ React.createElement("p", null, "Mayonnaise is a shelf-stable emulsion of eggs and oil, I tell them. Who on Earth has the refrigerated trucks to waste on the alternative. Is that really their preferred resource allocation. Is that something they consider worthwhile for a piece of symbolism they made up."), /* @__PURE__ */ React.createElement("p", null, "This does not actually end arguments; for one thing, it requires an understanding of how hard a refrigerated truck has to work for (say) a thousand miles of desert due south on the Highway One as I know it. For another, it requires an underlying understanding of refrigeration, and trucks, and refrigerated trucks, as limited resources to begin with. "), /* @__PURE__ */ React.createElement("p", null, "But it does sometimes make it more tolerable to live with.")));
}
function Scene37() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am no older than eleven years old, and I am attempting, as I often do, to ignore my mother. There is a cutting quality to her voice, and my brain is tuned to it meaning danger; so, as I also often do, I am failing. I would be doing better, but I am waiting for her in the car (truck; it will take at least a decade for me to understand that trucks are supposedly not cars), and I have run out of books to do it with. "), /* @__PURE__ */ React.createElement("p", null, "(There are not relevant mobile devices in my life yet; when I leave the house, I do so with one or more books. As my father puts it, bad things happen when you leave the house without a book. If we're going to a city, I do so with a stack in the footwell. Sometimes, as now, I still underestimate what could be enough.)"), /* @__PURE__ */ React.createElement("p", null, "My mother is buying alfalfa for horses, pulled over by the side of the road where she's met a man with an eighteen-wheeler stacked with it. I will realize, much later, that this was probably some level of cash under the table; it will not occur to me until adulthood that the truckers brought the rest of the bales to stores, where presumably people would pay for them. My context is just this: the dusty side of a road, a pickup truck, a flatbed full of rectangular prisms that, more and more often, are not the right shade of green."), /* @__PURE__ */ React.createElement("p", null, "She demands he let her break open a bale for inspection, and then finds what she anticipated. This is dry, she says, of the stiff yellow outside; this is wet, of the pliable green inside, too water-dark. They have picked and baled it too soon. It's going to rot."), /* @__PURE__ */ React.createElement("p", null, "The man says it's what he has, which is obviously true. It's about the foreshortening of the growing season; drought and heat and hurricanes that come when they're not supposed to, which is to say the same thing thrice. The stems and leaves are packed into bales too early or too late. She's right that they molder. He's right that it's not like the farm gave him anything else. In a couple minutes they'll move on to haggling about spikes in price."), /* @__PURE__ */ React.createElement("p", null, "I know this. I pick up the book she's brought with her from the center console, to see if I can tune the ongoing negotiations better reading it. The change of seasons is ten years out from coming North enough to make the news, though they inevitably do.")));
}
function Scene38() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At twenty-five I picture the heat dome over King County literally enough: like a great hand has reached over and delicately placed a glass pot lid over the land, with all the captured steam that entails. "), /* @__PURE__ */ React.createElement("p", null, "It has come to my attention that no one here built ceiling fans into their houses. I double the number of fans in our apartment, matter of fact; then I triple it. I run slightly but crucially ahead of the subsequent run on fans in stores, when people understand what's going on around them."), /* @__PURE__ */ React.createElement("p", null, "My partner's parents' house has air conditioning. His mother points out that this puts them in a third of Seattle area residences. He and I and his sister visit, in some desperation: three households total, proportionate. They do not have fans; I am baffled. This is when I notice that they don't have a ceiling fan. I try to be more observant than that, but it hadn't occurred to me to see a ceiling without one.")));
}
function Scene39() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I know these temperatures the way my loved ones do not, but I didn't like them any better when I was younger. I wear more layers now, by medical necessity, and am less acclimated, trading the placid resignation to summer commutes at 120F (the car had broken, my first summer in perhaps-high school, in such a way as meant one had to run the heater in order to idle it, which didn't help) for tolerating snow. The upshot is that I am more functional but poorly functioning; I don't realize until later why I'm not eating or sleeping, and then I remember."), /* @__PURE__ */ React.createElement("p", null, "I add air conditioning to the list of requirements for our next apartment, long shot that it is. ")));
}
function Scene40() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Here, for the second time: Tuesday. 2022. February. Increasingly heavy snow, whiter than my partner's knuckles on the steering wheel."), /* @__PURE__ */ React.createElement("p", null, '"I hate this," he says, not for the first time.'), /* @__PURE__ */ React.createElement("p", null, `"It's beauti--I'm sorry," I say, to my partner, who's the one who has to drive through it. As the trees we pass by are rendered into black and white straight lines, reaching out to me. "I still think it's beautiful, I'm sorry." `), /* @__PURE__ */ React.createElement("p", null, "The urge to apologize is because he's stressed. I know this makes it difficult, even without the counterweight of a swathe of our former apartment, to drive. I saw the advisory about black ice first between the two of us. I know five winters worth of what snow does to Seattle, where the winter weather is not supposed to snow. "), /* @__PURE__ */ React.createElement("p", null, "And because I trust him enough to comment on the beauty, the point of view that being a perpetual passenger can afford me. He knows what he chose to marry; I can afford to blurt out my feelings on precipitation. I try to memorize it, snow near midnight in a moving car, for later. For this.")));
}
function Scene41() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I'm not sorry that he can't share his weather as he means it to be with me, not unless I think about it. No one's been able to do that, anywhere I go, in my entire adult life. I don't know how one would start."), /* @__PURE__ */ React.createElement("p", null, "But I do know, when I think about it, that that's being stolen from him by attrition; we talk about flood risk when we talk about our long-term future, about Seattle and its sea level, about the inevitability of moving inland when we live long enough to do so. (I tell him I've heard good things about the Twin Cities' ability to maintain a decent ramp. Precipitation kills pavement, the way water can kill anything.) Undergirding it all: we're not giving up on his home and family any time soon, but within our lives we fully expect to do so, as matter of fact as giving him my medical power of attorney."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Things are just going to keep happening while you're not here,"), " my father said. Rain creeps under roads and sidewalks back home, when they're paved, and pulls them into craters. Seattle hardly escapes potholes itself. But you wouldn't know that from the media, if your vantage point is a third-world country."), /* @__PURE__ */ React.createElement("p", null, "I meant, year on year on year, to go back to Mexico. Not home; not once I'd discovered the luxuries of public transportation that could ferry me without favors to doctors I see for the same reasons I can't drive and for other things alike. But D.F., or Guadalajara. Little less alien than here, but--if I could just finish my degree, someday--more buying power."), /* @__PURE__ */ React.createElement("p", null, "But to get out of Ohio I followed my partner home, and he has family here. Where there's running water as a matter of course, and you can drink it, if you want, when you need something with which to swallow medication that came in the mail."), /* @__PURE__ */ React.createElement("p", null, "And now I put down roots as their resemblance to his model of the city he brought me to erodes. Winter snows; summer burns. I don't know any different, and only belatedly wonder if he's wanted me to. His parents have a lawn; the Greater Seattle of his childhood is approximately as alien to me, in both ways, and unavailable as a backdrop. What I've lost along the same lines is an unknown. I want to show him October, though I don't know how much October's left to show. I don't feel it, though, absent that experience of actually knowing what hasn't survived my childhood either.")));
}
function Scene42() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have a sense of patterns about it save in the broadest of senses; this is what I know. I check the weather. People ask if it torments me; I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "I like the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments.tsx
function Fragments() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Scene01, null), /* @__PURE__ */ React.createElement(B, null), /* @__PURE__ */ React.createElement(C, null), /* @__PURE__ */ React.createElement(D, null));
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
    role: "img",
    "aria-describedby": "cap_wa"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_wa.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_wa",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_wa2)));
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
  GlacierA: () => GlacierA2,
  GlacierB: () => GlacierB2,
  GlacierC: () => GlacierC3
});
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
function GlacierC3() {
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
  }, /* @__PURE__ */ React.createElement(GlacierA2, null), /* @__PURE__ */ React.createElement(GlacierB2, null), /* @__PURE__ */ React.createElement(GlacierC3, null));
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
    src: "/red_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Let them say, as they must say something:"), /* @__PURE__ */ React.createElement("p", null, "A kerosene beauty.", /* @__PURE__ */ React.createElement("br", null), "It burned."), /* @__PURE__ */ React.createElement("p", null, "Let them say we warmed ourselves by it,", /* @__PURE__ */ React.createElement("br", null), "read by its light, praised,", /* @__PURE__ */ React.createElement("br", null), "and it burned.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_letsay"
  }, "Jane Hirshfield,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Let Them Not Say"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-winsum.tsx
var poem_winsum_exports = {};
__export(poem_winsum_exports, {
  default: () => WinSum2
});
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\quote-clime.tsx
var quote_clime_exports = {};
__export(quote_clime_exports, {
  default: () => Define2
});
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\stripe-ohio.tsx
var stripe_ohio_exports = {};
__export(stripe_ohio_exports, {
  default: () => Ohio2
});
init_react();
var cap_oh2 = '"Warming stripes" visualization for the state of Ohio, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.';
function Ohio2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Ohio",
    className: "flip-in-hor-top hero",
    role: "img",
    "aria-describedby": "cap_oh"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/stripes_oh.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_oh",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_oh2)));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\photos_chi.tsx
var photos_chi_exports = {};
__export(photos_chi_exports, {
  ChiGar1: () => ChiGar12,
  ChiGar2: () => ChiGar22,
  default: () => Garden2
});
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-wave.tsx
var poem_wave_exports = {};
__export(poem_wave_exports, {
  default: () => WAVE2
});
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\poem-ode.tsx
var poem_ode_exports = {};
__export(poem_ode_exports, {
  default: () => Ode2
});
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\B.tsx
var B_exports = {};
__export(B_exports, {
  Scene02: () => Scene022,
  Scene03: () => Scene032,
  Scene04: () => Scene042,
  default: () => B2
});
init_react();
function B2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene022, null), /* @__PURE__ */ React.createElement(Scene032, null), /* @__PURE__ */ React.createElement(Scene042, null), /* @__PURE__ */ React.createElement(GlacierA, null));
}
function Scene022() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "two"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "A memory too small for me to have a place for it in time: I am barely old enough to remember, and my parents are married, and they are discovering that the dining room floor is uneven, as it happens, as the water pouring in through the closed windows forms a triangular puddle where the exterior walls meet."), /* @__PURE__ */ React.createElement("p", null, "And I am here: sitting in the pool of rainwater with enough room to slap my hands rhythmically on more of it beside me, aware of and ignoring their mounting but generalized disapproval. If it has occurred to me that this is not what they wanted from their recently-finished floor, the thought comes with overall indifference; that they had it poured and sanded, by human hands, so I'm not sure what they expected."), /* @__PURE__ */ React.createElement("p", null, "(Construction of the house I will grow up in has been ongoing, will be much longer, into memories with enough definition to pull their own weight in time. I do not know what a level is.)"), /* @__PURE__ */ React.createElement("p", null, `I haven't gotten tired of it yet. As I slap the puddle, I am shouting: "Swimming pool! Swimming pool!"`)));
}
function Scene032() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "three"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Here are two things I know about power, very early in my life:"), /* @__PURE__ */ React.createElement("p", null, "The most physically powerful thing in the world is water. Water writes the shape of land and can demolish anything with time. Water in the air is why every inanimate object around me dies faster than it said it ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.patreon.com/posts/cw-data-loss-49210295"
  }, "would"), "; like optical media you thought backed up something you care about, or elastic. Water bowls you over when you come near it and get cocky enough to turn your back. Water sets the living limits of what is possible: like when the supply turns off, and the tinaco that there's not a one-word English term for is reserved for paying tourists in the back yard to cushion them from scarcity, and I bathe out of a bucket in the shower."), /* @__PURE__ */ React.createElement("p", null, "(It staggers me, the way the North uses wood: like there's enough of it to go around, instead of concrete. I do not make the connection between timber, which awes me as a show of wealth, and forests, which unnerve me; it doesn't connect that anything I see could be sufficient for people to claim it is enough.)"), /* @__PURE__ */ React.createElement("p", null, "The best way for a person to acquire power is to be indispensable. My body--I do not yet have the language for this; I always know--my body does not do the things that other people want it to do. People don't want me, if they can afford to. "), /* @__PURE__ */ React.createElement("p", null, "But I am also a dual citizen, a term which often means that no one who asks for paperwork other than a passport is going to get something they like. I will have to be indispensable."), /* @__PURE__ */ React.createElement("p", null, "I resolve to go to college in the United States. I will get a diploma in English print and then no one will be able to afford to dislike me enough for them to tell me no."), /* @__PURE__ */ React.createElement("p", null, "(I am, approximately, six years old.)")));
}
function Scene042() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "four"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Three weeks after my eighteenth birthday, I go north.")));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\C.tsx
var C_exports = {};
__export(C_exports, {
  Scene05: () => Scene052,
  Scene06: () => Scene062,
  Scene07: () => Scene072,
  Scene08: () => Scene082,
  Scene09: () => Scene092,
  Scene10: () => Scene102,
  Scene11: () => Scene112,
  Scene12: () => Scene122,
  default: () => C2
});
init_react();
function C2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene052, null), /* @__PURE__ */ React.createElement(Scene062, null), /* @__PURE__ */ React.createElement(Scene072, null), /* @__PURE__ */ React.createElement(Scene082, null), /* @__PURE__ */ React.createElement(Scene092, null), /* @__PURE__ */ React.createElement(WAVE, null), /* @__PURE__ */ React.createElement(Scene102, null), /* @__PURE__ */ React.createElement(Scene112, null), /* @__PURE__ */ React.createElement(Scene122, null), /* @__PURE__ */ React.createElement(GlacierC, null));
}
function Scene052() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "five"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am nine years old, and we have family in New Orleans. We have family in Florida, as well; my father has taken it upon himself to drive us from one to the other, which I find exciting. I only see GPS in rental cars, in the US, which is the sort of thing that satellites bother to map. We leave in the afternoon to drive through the night, which I find more exciting still."), /* @__PURE__ */ React.createElement("p", null, "We pass through a storm system, driving; harsh rain in motion at night is a rare treat for me, and I haven't quite grappled with the realities of highways enough to understand the pitfalls of why. I stare out the windows at the hard rain, the luxury of light and lanes on an American interstate.")));
}
function Scene062() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "six"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, `My father has told me about hurricane parties, rich people who were recently children taking off to sit it out in spare houses on the coast. The idiocy that comes with the world giving you no reason to believe you're not invulnerable. We may or may not discuss that part explicitly, but I'm aware, at home, of the controversy of the forcible redefinition of "beachfront" property by building on dunes, and the reasons people do so anyway. Why the law has less to say about it than the text claims it's supposed to.`), /* @__PURE__ */ React.createElement("p", null, "I know a lot of realtors."), /* @__PURE__ */ React.createElement("p", null, `I also know a joke: "I've got this great piece of land to sell you," it starts, "hasn't flooded since the dinosaurs..."`)));
}
function Scene072() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "seven"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Later in the summer, I am not nine years old. When I've recently turned ten, Katrina sweeps through where I am not. I have the vaguest of understandings of what a levee is, from songs, and now from news; like dunes, I think, but worse at being so."), /* @__PURE__ */ React.createElement("p", null, "In the lead-up to landfall, I am childishly, callously baffled: Category 5 on the forecast is always good news for me, because large numbers mean a higher probability of class being called off. (There is, for the duration of my childhood, one paved road. The others, under sufficient pressure, turn to rivers. I live on a hill; I like to watch. One year, later in the decade, on a day that the roads weren't washed out early enough in the morning to get me out of it, my school turns to rapids, and I am unaccountably pleased to know it was built on a vein of red clay as that paints itself onto my socks.) "), /* @__PURE__ */ React.createElement("p", null, "Evacuation, for example, is foreign to me. I can't imagine why they're bothering; I could say that the reason I don't understand why one place would be safer than another is that no part of my state is a full fifty miles from the coastline, but I doubt I thought it through that far. I think I simply do not register that locations are unlike one another in time not to learn it on the news."), /* @__PURE__ */ React.createElement("p", null, "I am ten years and almost one month old, and I understand that hurricane preparedness is relative.")));
}
function Scene082() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eight"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I stuck my feet in the Atlantic once. It was colder than an ocean had any business being, by my lights, and gray. There was something bizarre in the idea that it was warm enough to feed a hurricane.  ")));
}
function Scene092() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "nine"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Before I am eleven, we stop having family in New Orleans.")));
}
function Scene102() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "ten"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At around four years old, I am eavesdropping--this will be a habit--I am eavesdropping on kindergarten teachers; they are talking about the weather. "), /* @__PURE__ */ React.createElement("p", null, "Specifically, they are talking about the ocean getting warmer, and how that's making hurricane season harsher, and longer, in ways no one should like. We depend on hurricanes for freshwater--my town, specifically, relies on them to fill the aquifer its much-discussed oasis status is built upon--but too much water at a time defeats the point, rips topsoil into the sea, runs its course too fast for us to keep. And it's more unpleasant for them than it is for me."), /* @__PURE__ */ React.createElement("p", null, "The warmth, at least, is common sense; I know heat is energy because I know hurricanes need warm water to live. That's why they starve and stall out going north, or coming to land. A storm would have to be very special to fight all the way through that.")));
}
function Scene112() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eleven"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My first years in the United States, I Skype my dad less often than I should. Less often than I want to. It's hard to find a rhythm; I am not doing well there. But he tells me about the weather. ")));
}
function Scene122() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twelve"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "When I am twenty-four, it's ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.nytimes.com/2020/05/18/climate/climate-changes-hurricane-intensity.html"
  }, "established"), " that warmer water is supercharging tropical storms."), /* @__PURE__ */ React.createElement("p", null, "I understand that science moves more slowly than kindergarten teachers' small talk; that climate, by definition, happens on a timescale closer to geological than anecdote. "), /* @__PURE__ */ React.createElement("p", null, "But I do have the fleeting thought that, even then, taking twenty years of my life to catch up to how the weather's doing seems a bit much.")));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\D.tsx
var D_exports = {};
__export(D_exports, {
  Scene13: () => Scene132,
  Scene14: () => Scene142,
  Scene15: () => Scene152,
  Scene16: () => Scene162,
  Scene17: () => Scene172,
  Scene18: () => Scene182,
  Scene19: () => Scene192,
  Scene20: () => Scene202,
  Scene21: () => Scene212,
  Scene22: () => Scene222,
  Scene23: () => Scene232,
  Scene24: () => Scene242,
  Scene25: () => Scene252,
  Scene26: () => Scene262,
  Scene27: () => Scene272,
  Scene28: () => Scene282,
  Scene29: () => Scene292,
  Scene30: () => Scene302,
  Scene31: () => Scene312,
  Scene32: () => Scene322,
  Scene33: () => Scene332,
  Scene34: () => Scene342,
  Scene35: () => Scene352,
  Scene36: () => Scene362,
  Scene37: () => Scene372,
  Scene38: () => Scene382,
  Scene39: () => Scene392,
  Scene40: () => Scene402,
  Scene41: () => Scene412,
  Scene42: () => Scene422,
  default: () => D2
});
init_react();
function D2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene132, null), /* @__PURE__ */ React.createElement(Scene142, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene152, null), /* @__PURE__ */ React.createElement(Scene162, null), /* @__PURE__ */ React.createElement(Scene172, null), /* @__PURE__ */ React.createElement(Scene182, null), /* @__PURE__ */ React.createElement(Scene192, null), /* @__PURE__ */ React.createElement(Scene202, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene222, null), /* @__PURE__ */ React.createElement(Scene212, null), /* @__PURE__ */ React.createElement(Scene232, null), /* @__PURE__ */ React.createElement(Scene242, null), /* @__PURE__ */ React.createElement(Scene252, null), /* @__PURE__ */ React.createElement(Scene262, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene272, null), /* @__PURE__ */ React.createElement(Scene282, null), /* @__PURE__ */ React.createElement(Scene292, null), /* @__PURE__ */ React.createElement(Scene302, null), /* @__PURE__ */ React.createElement(Scene312, null), /* @__PURE__ */ React.createElement(Scene322, null), /* @__PURE__ */ React.createElement(Scene332, null), /* @__PURE__ */ React.createElement(Scene342, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene352, null), /* @__PURE__ */ React.createElement(Scene362, null), /* @__PURE__ */ React.createElement(Scene372, null), /* @__PURE__ */ React.createElement(Scene382, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene392, null), /* @__PURE__ */ React.createElement(Scene402, null), /* @__PURE__ */ React.createElement(Scene412, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene422, null));
}
function Scene132() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The college in the US that I get into is in Ohio, so I am eighteen and I am in Ohio. Before that, I am seventeen, and my father is helping me pick out a winter coat on the internet, and I am asking him if I should choose the warmest one I see."), /* @__PURE__ */ React.createElement("p", null, "That's overkill, he says. (He has been there before, albeit substantially prior to me even being born.) What I realistically need is more towards the center of the range. I'd regret getting too heavy a coat, he says, and helps me pick one of the middling ones.")));
}
function Scene142() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "fourteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am given to understand it says enough to say that my first year in Ohio is a lake effect year, though I wouldn't know why. "), /* @__PURE__ */ React.createElement("p", null, "I learn, firsthand and on my hands, what a -40 wind chill is in Fahrenheit. I learn what special cane tips I need for traction in snow. I learn that my college is not particularly interested in clearing the sidewalks in time for class; it does not occur to me that they may once at least have been able to afford the negligence, because I don't have any reason to understand a comparison by which this becomes extreme."), /* @__PURE__ */ React.createElement("p", null, "My dad apologizes, though. For leading me wrong, with the coat."), /* @__PURE__ */ React.createElement("p", null, "This isn't what the weather here is supposed to do, he says."), /* @__PURE__ */ React.createElement("p", null, "I wouldn't know, I say; or maybe I don't.")));
}
function Scene152() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "fifteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I FaceTime my dad instead of Skyping, these days. He tells me how many days this week there have been municipal water. I tell him when it snows. He tells me how our temperatures compare. I tell him I got a new monitor. I tell him how much it was new, and how pleased I am with myself for how I found it used, how the deal took a matter of days."), /* @__PURE__ */ React.createElement("p", null, "You're in tech heaven up there, he says. I say, I guess. He says that used here would be new there. I think about that as a way to put it, later: development in relative time over space."), /* @__PURE__ */ React.createElement("p", null, "I say (another day) that I'd like to trade him my laptop, that it would be better for his grip than it's been for my vision. He asks if I want him to talk to ask the guy who sends him stuff from the border what the compounding costs of shipping would look like. I said I thought I'd just bring it to him, when I can. Save him the customs, the way we handled things growing up."), /* @__PURE__ */ React.createElement("p", null, "Oh, he says. That's kind of you."), /* @__PURE__ */ React.createElement("p", null, "I want to see you anyway, I say. The machine being light is the whole point of the thing. I don't see where kindness comes into it.")));
}
function Scene162() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "sixteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I was home for the last time in December, 2013. It's not my first summer away--it feels it--it's not my first summer but my second that the hurricane comes.")));
}
function Scene172() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "seventeen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The big hurricane whose name I used to remember happened shortly before I was born, and thus the point of reference for an extraordinary storm could comfortably bracket anything I'd know."), /* @__PURE__ */ React.createElement("p", null, "Her usurper comes the summer I turn twenty. It tears through town like a natural disaster, which is jarring. It upends my father's garden, which is, somehow, worse. Thinking of him putting it back together. Even if he had help."), /* @__PURE__ */ React.createElement("p", null, "He doesn't want to visit, after that, even before he can't. Travel has always been a thing of summer; he doesn't want to leave the house to storms unsupervised. He doesn't trust anyone else to handle it if he leaves it alone.")));
}
function Scene182() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eighteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "He sends me photos. But they get more difficult to look at over time, oddly enough.")));
}
function Scene192() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "nineteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Hurricane season grows longer at both ends. It's hard to find news about hurricanes in the Pacific that I can pick up on passively, though; American sources, which are what the internet is built on, care about the Atlantic first and foremost. I don't like the Atlantic, selfishly: it has a bad track record, and I remember it gray.")));
}
function Scene202() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "In 2022, I tell him I'm writing this essay, and I ask if I can use the photos. He asks what I want them for. I say I'm writing about the increased toll of hurricanes on an environment that relied on them. He says he supposes Odile would be the one for that."), /* @__PURE__ */ React.createElement("p", null, "I wasn't there, I say. It's the first big one where I wasn't there."), /* @__PURE__ */ React.createElement("p", null, "He asks why that matters. Things are going to keep happening while you're not here, he says."), /* @__PURE__ */ React.createElement("p", null, "I know, I say."), /* @__PURE__ */ React.createElement("p", null, "Survivor's guilt is a thing, my partner says, in earshot, from offscreen. ")));
}
function Scene212() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "He sent me photos. In the end, I can't quite bring myself to describe them in time. I promise myself I'll come back to it.")));
}
function Scene222() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I tell my father that I'm writing about the fingerprints of climate change bracketed by my life. I tell him that a little over a quarter century is a pretty decent frame with which to encapsulate it. I tell him that sometimes it feels like it's following me up."), /* @__PURE__ */ React.createElement("p", null, "You've been working your way north, he says, with some delight at how it lines up. "), /* @__PURE__ */ React.createElement("p", null, "Everywhere I go, every year, people tell me that this isn't what the weather usually does, I tell him. I'm getting practice at the premise by now."), /* @__PURE__ */ React.createElement("p", null, "That's their problem, he says. He says it's a fantasy that isn't relevant to the world as it is and will continue being."), /* @__PURE__ */ React.createElement("p", null, "I say I think grounding themselves in what they still think of as normal is how people help themselves understand change."), /* @__PURE__ */ React.createElement("p", null, "He says it's still the case that such ground doesn't exist. I say I know.")));
}
function Scene232() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "It is January, and I still live in Bellevue. In the time between an afternoon's worth of this class and staying behind after, the rain that my partner hoped signaled a break from the snow has turned to hail."), /* @__PURE__ */ React.createElement("p", null, "I check the window. I come back. I'm sorry if there's background noise, I say to my instructor. It's hail."), /* @__PURE__ */ React.createElement("p", null, "There's a particular sort of smile I'm familiar with, when people are trying to tone down the impact of talking about the weather. It's there when he says it's not supposed to hail.")));
}
function Scene242() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I find myself wishing I'd gone outside in time for the hail. It's not a texture of ice found much elsewhere, and hasn't gotten old for me yet; I like to eat it."), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement("p", null, "(When it snowed, my dad was disappointed that I didn't, his words, go play in the snow. So was I, admittedly. I thought: there will be more snow next year. I will do better by myself next year, I think.)")));
}
function Scene252() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "The first summer I'm settled enough in Seattle to be aware of much of anything, California is on fire. I am given to understand that this is new. Ash falls like snow, or like a Cold War era nuclear PSA. A friend growing up is visiting but I can't do much more than make it from the couch to another side of the room. "), /* @__PURE__ */ React.createElement("p", null, "We do manage to go to the glass sculpture garden. I try to take photos. My phone can capture the colors of the glass under alien light, or it can capture the gray sky and red sun. It does not know how to make sense of the two of them together."), /* @__PURE__ */ React.createElement("p", null, "My partner, my friend, and I talk about how cool it would be to come up with a short story where I could use the photos I did get as illustrations. Even if I can't capture the whole of it, it's striking. It would be nice to get something out of it.")));
}
function Scene262() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I get air filters.")));
}
function Scene272() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I get better air filters.")));
}
function Scene282() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "eighteen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Years later, in the pandemic, I already own respirators. I take the opportunity, periodically, to get better ones. There's a postal system; I can do that. I am all but used to the mail.")));
}
function Scene292() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My second week in Ohio, I wanted to send a letter to a friend. My RA had to teach me how to address an envelope. It struck me as sorcery for years: to order things and have them come to you. Resources flow towards empires, I knew when I was six; people go where the resources are, I tell people at twenty-six, feelings towards the empire are irrelevant. But on the personal level--there was something magic in such roads leading towards me. The first thing I bought with my college address was a cane.")));
}
function Scene302() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "My partner and I have an argument about the concept of swimming beaches; for the sake of this argument, let's say I am twenty-two. His ocean is the Puget Sound: a tame, cool little thing that I know from the perspective of bridges, with glassy flats and nibbling waves. We are discussing why characters in a video game would pick up and leave their section of a coastline to swim somewhere else."), /* @__PURE__ */ React.createElement("p", null, "Presumably it's where the swimming beaches are, I say."), /* @__PURE__ */ React.createElement("p", null, "What do you mean swimming beach, he says."), /* @__PURE__ */ React.createElement("p", null, "Beaches where it's safe to swim, I say, impatiently. Within reason."), /* @__PURE__ */ React.createElement("p", null, "The resulting long and halting conversation, rendered an argument by lack of any universe of common reference, is cut short when his mother tells him that their family visited near my hometown before he'd be able to remember. At a tourists' beach his grandfather turned his back on the water and, when he went flying accordingly, lost a pair of dentures."), /* @__PURE__ */ React.createElement("p", null, "See, I say. Normal ocean. You don't turn your back on it.")));
}
function Scene312() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "We have had long enough to grow accustomed to one another that I struggle to remember other disjoints of this kind. There's been over half a decade to build the necessary conceptual bridges. Often enough, we still have moments that make him say, Sometimes I remember that we come from different worlds. But they don't much spring to memory these days.")));
}
function Scene322() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I have mixed feelings on referring to preparatoria as a high school. It gives people the approximate idea that they need, but more often than not I find I want the alienation; I'm just not entirely sure when I manage that versus actual incomprehension. And I don't want the latter; that defeats the point. I put far too much effort into translation than that."), /* @__PURE__ */ React.createElement("p", null, "Let's bow to audience and say I'm in high school, for this one. I've had to move to the capital of the state--during the week; splitting custody will do these things to you--for it. I'm a scholarship student at a private school, for related reasons. At this grade level in my hometown there's only vocational schooling, and it's not mandatory anyway. For the first time in my life,as a result, I am not in the public school system."), /* @__PURE__ */ React.createElement("p", null, "(One early meaning of this is that the school is air conditioned, which it does not occur to me to pack for my first week there. I turn fifteen and my teeth are chattering at the contrast for half the day, until a classmate incredulously lends me his jacket.)"), /* @__PURE__ */ React.createElement("p", null, "We are watching a movie in one of the throwaway classes whose redeeming features are generally movies, when the protagonist runs out onto the green, green lawn of some famous college's old American building."), /* @__PURE__ */ React.createElement("p", null, "The metal roof of my high school's new building (if we call it a high school, approximating) rattles when it rains, although it's not currently raining."), /* @__PURE__ */ React.createElement("p", null, "One of my classmates points and says, in much the same tone as people started citing ", /* @__PURE__ */ React.createElement("i", null, "la crisis"), " when the American recession meant they stopped exporting our economy's worth of tourists, that we shell out so much for tuition, so why doesn't our school look like that?"), /* @__PURE__ */ React.createElement("p", null, "The teacher could comment on history, and the fact that this is a new building. She could comemnt, even, on environment; we have an environmentalist component in another class, aggressively themed around mangrove preservation."), /* @__PURE__ */ React.createElement("p", null, "This is not the sort of person she is; she is the sort of person who tells parables about the fundamental differences in behavior between buckets of Mexican and American crabs."), /* @__PURE__ */ React.createElement("p", null, "So what she says is true to form: she says, that's because we live in a third world country, dear.")));
}
function Scene332() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At eighteen, I have not yet learned that, when someone tells me they don't speak Spanish, they mean that they speak no Spanish. Mexico mandates foreign language education after sixth grade; I hear about people whose schools are large and urban and monied enough to have choices of languages, but everyone has the option of English. There are five thousand people in my town and six hundred thousand in my state. The only option is English. "), /* @__PURE__ */ React.createElement("p", null, "The only option was English long before that, anyway; when the money and the media and the shipping comes in one language, you pick it up. ")));
}
function Scene342() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "There's a specific generation of Spanish-English slang I have that I suspect is dead by now. It's a midpoint: vocabulary without grammar, keywords without comprehension. Hot dogs vary wildly between countries, and, within Mexico--not that you'll know this online--between states, and thus I am as committed as you might expect to the argument that no one else makes them right; as such, I haven't had a hot dog since I was eighteen. "), /* @__PURE__ */ React.createElement("p", null, "The cart where my father and I were regulars had a hurricane lamp with no glass, for a while, and I liked standing close enough to the cooking surface to get the tiniest pitter-patter of hot oil on my arms. ", /* @__PURE__ */ React.createElement("i", null, "Hates El G\xFCero"), ", painted on the white surface by the kind of draftsman I was trained to be in secundaria and whose profession hasn't existed in the north for generations: the ", /* @__PURE__ */ React.createElement("i", null, "hot dog"), " was imported before the English adjective-noun order could follow suit."), /* @__PURE__ */ React.createElement("p", null, "Another word I use as an example: ", /* @__PURE__ */ React.createElement("i", null, "mach\xEDn"), ", an all-purpose intensifier. When English brought ", /* @__PURE__ */ React.createElement("i", null, "machine"), "s the clearest point of reference in common  for the referents of the word was: more.")));
}
function Scene352() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Industrialization trickles down. Emissions trickle down. Climate change reaches up, drifts, like California smoke, like it's dogging my footsteps. Like it wants to do anyone's ability to talk the big picture out the opposite of any favors.")));
}
function Scene362() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "There is an argument about mayonnaise I have whenever I can. Americans, as a national pastime, enjoy taking credit for the concept and then monologuing about how much they hate it. There is a general attempt to establish it as synonymous with whiteness in the racial sense as opposed to the visual one. I don't know who benefits from that, but it makes the preamble to English-language recipes for Japanese pancakes exhausting."), /* @__PURE__ */ React.createElement("p", null, "I have spent years iterating on the argument this means having, when I can bother. Mayonnaise is common where I'm from, in the desert: mixed with milk as a fat for frying and a topping for seemingly half of all savory dishes you can shake a squirt bottle at it."), /* @__PURE__ */ React.createElement("p", null, "That's disgusting, people tell me in English, and they would like to blame a white person for it."), /* @__PURE__ */ React.createElement("p", null, "Mayonnaise is a shelf-stable emulsion of eggs and oil, I tell them. Who on Earth has the refrigerated trucks to waste on the alternative. Is that really their preferred resource allocation. Is that something they consider worthwhile for a piece of symbolism they made up."), /* @__PURE__ */ React.createElement("p", null, "This does not actually end arguments; for one thing, it requires an understanding of how hard a refrigerated truck has to work for (say) a thousand miles of desert due south on the Highway One as I know it. For another, it requires an underlying understanding of refrigeration, and trucks, and refrigerated trucks, as limited resources to begin with. "), /* @__PURE__ */ React.createElement("p", null, "But it does sometimes make it more tolerable to live with.")));
}
function Scene372() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I am no older than eleven years old, and I am attempting, as I often do, to ignore my mother. There is a cutting quality to her voice, and my brain is tuned to it meaning danger; so, as I also often do, I am failing. I would be doing better, but I am waiting for her in the car (truck; it will take at least a decade for me to understand that trucks are supposedly not cars), and I have run out of books to do it with. "), /* @__PURE__ */ React.createElement("p", null, "(There are not relevant mobile devices in my life yet; when I leave the house, I do so with one or more books. As my father puts it, bad things happen when you leave the house without a book. If we're going to a city, I do so with a stack in the footwell. Sometimes, as now, I still underestimate what could be enough.)"), /* @__PURE__ */ React.createElement("p", null, "My mother is buying alfalfa for horses, pulled over by the side of the road where she's met a man with an eighteen-wheeler stacked with it. I will realize, much later, that this was probably some level of cash under the table; it will not occur to me until adulthood that the truckers brought the rest of the bales to stores, where presumably people would pay for them. My context is just this: the dusty side of a road, a pickup truck, a flatbed full of rectangular prisms that, more and more often, are not the right shade of green."), /* @__PURE__ */ React.createElement("p", null, "She demands he let her break open a bale for inspection, and then finds what she anticipated. This is dry, she says, of the stiff yellow outside; this is wet, of the pliable green inside, too water-dark. They have picked and baled it too soon. It's going to rot."), /* @__PURE__ */ React.createElement("p", null, "The man says it's what he has, which is obviously true. It's about the foreshortening of the growing season; drought and heat and hurricanes that come when they're not supposed to, which is to say the same thing thrice. The stems and leaves are packed into bales too early or too late. She's right that they molder. He's right that it's not like the farm gave him anything else. In a couple minutes they'll move on to haggling about spikes in price."), /* @__PURE__ */ React.createElement("p", null, "I know this. I pick up the book she's brought with her from the center console, to see if I can tune the ongoing negotiations better reading it. The change of seasons is ten years out from coming North enough to make the news, though they inevitably do.")));
}
function Scene382() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "At twenty-five I picture the heat dome over King County literally enough: like a great hand has reached over and delicately placed a glass pot lid over the land, with all the captured steam that entails. "), /* @__PURE__ */ React.createElement("p", null, "It has come to my attention that no one here built ceiling fans into their houses. I double the number of fans in our apartment, matter of fact; then I triple it. I run slightly but crucially ahead of the subsequent run on fans in stores, when people understand what's going on around them."), /* @__PURE__ */ React.createElement("p", null, "My partner's parents' house has air conditioning. His mother points out that this puts them in a third of Seattle area residences. He and I and his sister visit, in some desperation: three households total, proportionate. They do not have fans; I am baffled. This is when I notice that they don't have a ceiling fan. I try to be more observant than that, but it hadn't occurred to me to see a ceiling without one.")));
}
function Scene392() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "thirty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I know these temperatures the way my loved ones do not, but I didn't like them any better when I was younger. I wear more layers now, by medical necessity, and am less acclimated, trading the placid resignation to summer commutes at 120F (the car had broken, my first summer in perhaps-high school, in such a way as meant one had to run the heater in order to idle it, which didn't help) for tolerating snow. The upshot is that I am more functional but poorly functioning; I don't realize until later why I'm not eating or sleeping, and then I remember."), /* @__PURE__ */ React.createElement("p", null, "I add air conditioning to the list of requirements for our next apartment, long shot that it is. ")));
}
function Scene402() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "Here, for the second time: Tuesday. 2022. February. Increasingly heavy snow, whiter than my partner's knuckles on the steering wheel."), /* @__PURE__ */ React.createElement("p", null, '"I hate this," he says, not for the first time.'), /* @__PURE__ */ React.createElement("p", null, `"It's beauti--I'm sorry," I say, to my partner, who's the one who has to drive through it. As the trees we pass by are rendered into black and white straight lines, reaching out to me. "I still think it's beautiful, I'm sorry." `), /* @__PURE__ */ React.createElement("p", null, "The urge to apologize is because he's stressed. I know this makes it difficult, even without the counterweight of a swathe of our former apartment, to drive. I saw the advisory about black ice first between the two of us. I know five winters worth of what snow does to Seattle, where the winter weather is not supposed to snow. "), /* @__PURE__ */ React.createElement("p", null, "And because I trust him enough to comment on the beauty, the point of view that being a perpetual passenger can afford me. He knows what he chose to marry; I can afford to blurt out my feelings on precipitation. I try to memorize it, snow near midnight in a moving car, for later. For this.")));
}
function Scene412() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I'm not sorry that he can't share his weather as he means it to be with me, not unless I think about it. No one's been able to do that, anywhere I go, in my entire adult life. I don't know how one would start."), /* @__PURE__ */ React.createElement("p", null, "But I do know, when I think about it, that that's being stolen from him by attrition; we talk about flood risk when we talk about our long-term future, about Seattle and its sea level, about the inevitability of moving inland when we live long enough to do so. (I tell him I've heard good things about the Twin Cities' ability to maintain a decent ramp. Precipitation kills pavement, the way water can kill anything.) Undergirding it all: we're not giving up on his home and family any time soon, but within our lives we fully expect to do so, as matter of fact as giving him my medical power of attorney."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Things are just going to keep happening while you're not here,"), " my father said. Rain creeps under roads and sidewalks back home, when they're paved, and pulls them into craters. Seattle hardly escapes potholes itself. But you wouldn't know that from the media, if your vantage point is a third-world country."), /* @__PURE__ */ React.createElement("p", null, "I meant, year on year on year, to go back to Mexico. Not home; not once I'd discovered the luxuries of public transportation that could ferry me without favors to doctors I see for the same reasons I can't drive and for other things alike. But D.F., or Guadalajara. Little less alien than here, but--if I could just finish my degree, someday--more buying power."), /* @__PURE__ */ React.createElement("p", null, "But to get out of Ohio I followed my partner home, and he has family here. Where there's running water as a matter of course, and you can drink it, if you want, when you need something with which to swallow medication that came in the mail."), /* @__PURE__ */ React.createElement("p", null, "And now I put down roots as their resemblance to his model of the city he brought me to erodes. Winter snows; summer burns. I don't know any different, and only belatedly wonder if he's wanted me to. His parents have a lawn; the Greater Seattle of his childhood is approximately as alien to me, in both ways, and unavailable as a backdrop. What I've lost along the same lines is an unknown. I want to show him October, though I don't know how much October's left to show. I don't feel it, though, absent that experience of actually knowing what hasn't survived my childhood either.")));
}
function Scene422() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "forty2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have a sense of patterns about it save in the broadest of senses; this is what I know. I check the weather. People ask if it torments me; I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "I like the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
}

// route-module:D:\Beep boop\oceanside\app\routes\metadata\credit.tsx
var credit_exports = {};
__export(credit_exports, {
  default: () => Metadata,
  links: () => links
});
init_react();

// app/styles/airspace.css
var airspace_default = "/build/_assets/airspace-PSDU3NPN.css";

// app/routes/pacific/fragments/poem-letsay.tsx
init_react();
function LetSay2() {
  return /* @__PURE__ */ React.createElement("aside", {
    id: "LetSay",
    className: "poem",
    "aria-labelledby": "cred_letsay"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/red_quote_bg.png",
    className: "fade-in"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "quote text-focus-in"
  }, /* @__PURE__ */ React.createElement("p", null, "Let them say, as they must say something:"), /* @__PURE__ */ React.createElement("p", null, "A kerosene beauty.", /* @__PURE__ */ React.createElement("br", null), "It burned."), /* @__PURE__ */ React.createElement("p", null, "Let them say we warmed ourselves by it,", /* @__PURE__ */ React.createElement("br", null), "read by its light, praised,", /* @__PURE__ */ React.createElement("br", null), "and it burned.")), /* @__PURE__ */ React.createElement("div", {
    className: "credit",
    id: "cred_letsay"
  }, "Jane Hirshfield,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, '"Let Them Not Say"')));
}

// route-module:D:\Beep boop\oceanside\app\routes\metadata\credit.tsx
function links() {
  return [{ rel: "stylesheet", href: airspace_default }];
}
function Metadata() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "metadata"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "project",
    className: "credits about"
  }, /* @__PURE__ */ React.createElement("h3", null, "About ", /* @__PURE__ */ React.createElement("i", null, "what the weather doesn't")), /* @__PURE__ */ React.createElement("p", null, 'This essay was first composed as a final project for CHID 480-A "Upside Down Thinking With the Global South", winter quarter 2022, at the University of Washington. With the exception of specific epigraphs and quotes (see below), all content was produced by Cyrus Eosphoros. Version 1.0 is live as of March 18, 2022; technical improvements are planned but the core content and presentation is in place. If it interests you to do so, ', /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cyrusae/oceanside"
  }, "the source code can be viewed on GitHub"), ".")), /* @__PURE__ */ React.createElement("div", {
    id: "me",
    className: "credits about"
  }, /* @__PURE__ */ React.createElement("h3", null, "About the author"), /* @__PURE__ */ React.createElement("p", null, "Cyrus Eosphoros is having a time of it at all possible times. More work, like and unlike ", /* @__PURE__ */ React.createElement("i", null, "weather"), " alike, can be found and supported ", /* @__PURE__ */ React.createElement("a", {
    href: "https://patreon.com/eosphoros"
  }, "on his Patreon"), " for now. Other technical projects have a home ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cyrusae"
  }, "on GitHub"), " alongside this one. He also has ", /* @__PURE__ */ React.createElement("a", {
    href: "https://visuality.carrd.co"
  }, "this cool virtual business card"), " for hopefully remembering to update important data with.")), /* @__PURE__ */ React.createElement("div", {
    id: "credits",
    className: "credits sources"
  }, /* @__PURE__ */ React.createElement("h3", null, "Credits and third party sources"), /* @__PURE__ */ React.createElement("h5", null, "Text"), "Poems quoted:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, '"Thirteen Ways of Looking at a Glacier" by Craig Santos Perez'), /* @__PURE__ */ React.createElement("li", null, '"Let Them Not Say" by Jane Hirshfield'), /* @__PURE__ */ React.createElement("li", null, '"WAVE AFTER WAVE" by M. Bartley Seigel'), /* @__PURE__ */ React.createElement("li", null, '"No Longer Ode" by Urayo\xE1n Noel')), "Other sources:", /* @__PURE__ */ React.createElement("ul", null), /* @__PURE__ */ React.createElement("h5", null, "Images"), /* @__PURE__ */ React.createElement("p", null, "Climate stripes generated via ", /* @__PURE__ */ React.createElement("a", {
    href: "https://showyourstripes.info"
  }, "Show Your Stripes"), "."), /* @__PURE__ */ React.createElement("p", null, "Todos Santos photographs copyright Howard Ekman, used with permission."), /* @__PURE__ */ React.createElement("p", null, "Seattle smoke summer photographs depict the Chihuly Sculpture Garden at Seattle Center and are by the author."), /* @__PURE__ */ React.createElement("p", null, "Aerial climate photographs by NASA."), "Image assets from PNGtree:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://pngtree.com/freepng/heavy-snow_3723954.html"
  }, '"heavy snow" background')), /* @__PURE__ */ React.createElement("li", null, "Black clouds background"), /* @__PURE__ */ React.createElement("li", null, "Black mist background #1"), /* @__PURE__ */ React.createElement("li", null, "Black mist background #2"), /* @__PURE__ */ React.createElement("li", null, "Fire and sparks background"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", null, 'Frames used for "Thirteen Ways of Looking at a Glacier":'), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #1"), /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #2"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://pngtree.com/freepng/blue-smoke-abstract-frame-art-free-png-and-psd_5512814.html"
  }, "Blue smoke frame #3")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", null, "Frames used for other quotes:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Red and black smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Dark blue smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Purple watercolor smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Cool colors smoke frame"), /* @__PURE__ */ React.createElement("li", null, "Circular cyan frame"))))), /* @__PURE__ */ React.createElement("div", {
    id: "respects",
    className: "credits about"
  }, /* @__PURE__ */ React.createElement("h3", null, "Acknowledgments"), "Specific thanks to:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The ", /* @__PURE__ */ React.createElement("a", {
    href: "https://essential-randomness.tumblr.com/post/677293014534750208/hi-can-you-elaborate-on-the-space-thats-being"
  }, "Fandom Coders Discord server"), ", for technical and moral support"), /* @__PURE__ */ React.createElement("li", null, "Profe Tony, for letting me get away with this in the first place"))), /* @__PURE__ */ React.createElement(LetSay2, null), /* @__PURE__ */ React.createElement("div", {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Scene01, null), /* @__PURE__ */ React.createElement(B, null), /* @__PURE__ */ React.createElement(C, null), /* @__PURE__ */ React.createElement(D, null));
}
var fragments_default2 = Fragments2;

// app/styles/coastline.css
var coastline_default = "/build/_assets/coastline-A5SGIBW7.css";

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
  }, /* @__PURE__ */ React.createElement(fragments_default2, null))), /* @__PURE__ */ React.createElement(Wham2, null), /* @__PURE__ */ React.createElement(Footer2, null));
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
  "routes/pacific/fragments/B": {
    id: "routes/pacific/fragments/B",
    parentId: "routes/pacific/fragments",
    path: "B",
    index: void 0,
    caseSensitive: void 0,
    module: B_exports
  },
  "routes/pacific/fragments/C": {
    id: "routes/pacific/fragments/C",
    parentId: "routes/pacific/fragments",
    path: "C",
    index: void 0,
    caseSensitive: void 0,
    module: C_exports
  },
  "routes/pacific/fragments/D": {
    id: "routes/pacific/fragments/D",
    parentId: "routes/pacific/fragments",
    path: "D",
    index: void 0,
    caseSensitive: void 0,
    module: D_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0IudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1nbGFjaWVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0MudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13YXZlLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0QudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpby50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdhc2hpbmd0b24udHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS13aGFtbGluZS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccG9lbS1nbGFjaWVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWxldHNheS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccG9lbS13aW5zdW0udHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHF1b3RlLWNsaW1lLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxzdHJpcGUtb2hpby50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccGhvdG9zX2NoaS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccG9lbS13YXZlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLW9kZS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcdGVzdDEudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXDAxLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxCLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxDLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxELnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcbWV0YWRhdGFcXGNyZWRpdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXGZvb3Rlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9mb290ZXIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS13YXNoaW5ndG9uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLXdoYW1saW5lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1nbGFjaWVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS1sZXRzYXkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLXdpbnN1bS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHF1b3RlLWNsaW1lLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLW9oaW8udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwaG90b3NfY2hpLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0td2F2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLW9kZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFx0ZXN0MS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFwwMS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxCLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXEMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcRC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZXRhZGF0YVxcXFxjcmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZm9vdGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInBhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3RvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLXdhc2hpbmd0b25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS13aGFtbGluZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1nbGFjaWVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1sZXRzYXlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLXdpbnN1bVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInF1b3RlLWNsaW1lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpb1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLW9oaW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicGhvdG9zX2NoaVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2F2ZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS13YXZlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEwXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1vZGVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tb2RlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTExXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Rlc3QxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvdGVzdDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInRlc3QxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvMDFcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIjAxXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEzXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0JcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9CXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJCXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE0XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9DXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJDXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE1XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0RcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9EXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJEXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE2XG4gIH0sXG4gIFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21ldGFkYXRhL2NyZWRpdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIm1ldGFkYXRhL2NyZWRpdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxN1xuICB9LFxuICBcInJvdXRlcy9mb290ZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9mb290ZXJcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJmb290ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMThcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxOVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpdmVSZWxvYWQsIE91dGxldCwgTGlua3MgfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vcm91dGVzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcm91dGVzL2Zvb3RlcidcclxuaW1wb3J0IFdoYW0gZnJvbSAnLi9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lJ1xyXG5cclxuLy8gT3V0bGV0IG1heSBjcmVhdGUgZHVwbGljYXRlcyBmcm9tIGluZGV4OyB0ZW1wb3JhcmlseSByZW1vdmluZyBgICAgIDxPdXRsZXQgLz5gLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gcmV0dXJuIChcclxuICA8aHRtbCBsYW5nPSdlbic+XHJcbiAgIDxoZWFkPlxyXG4gICAgPExpbmtzIC8+XHJcbiAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcgLz5cclxuICAgIDx0aXRsZT53aGF0IHRoZSB3ZWF0aGVyIGRvZXNuJ3Q8L3RpdGxlPlxyXG4gICA8L2hlYWQ+XHJcbiAgIDxib2R5PlxyXG4gICAgPE91dGxldCAvPlxyXG4gICAgPExpdmVSZWxvYWQgLz5cclxuICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuIClcclxufSAiLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcbmltcG9ydCBCIGZyb20gJy4vZnJhZ21lbnRzL0InO1xyXG5pbXBvcnQgQyBmcm9tICcuL2ZyYWdtZW50cy9DJztcclxuaW1wb3J0IEQgZnJvbSAnLi9mcmFnbWVudHMvRCc7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8QiAvPlxyXG4gICA8QyAvPlxyXG4gICA8RCAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUwMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nb25lJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgPHA+SXQgaXMgMjAyMi4gSXQgaXMgdGhlIDIybmQuIEl0IGlzIEZlYnJ1YXJ5LjwvcD5cclxuICA8cD5JIGFtIGJlZ2lubmluZyB0aGlzIGVzc2F5LiBJIGFtIHR3ZW50eS1zaXggeWVhcnMgb2xkLiBJIGFtIG1vdmluZywgbm90IGZvciB0aGUgZmlyc3QgdGltZSwgdG8gU2VhdHRsZS48L3A+XHJcbiAgPHA+SXQgaXMgc25vd2luZy48L3A+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiXHJcbmltcG9ydCB7IEdsYWNpZXJBIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTAyIC8+XHJcbiAgIDxTY2VuZTAzIC8+XHJcbiAgIDxTY2VuZTA0IC8+XHJcbiAgIDxHbGFjaWVyQSAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdvJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkEgbWVtb3J5IHRvbyBzbWFsbCBmb3IgbWUgdG8gaGF2ZSBhIHBsYWNlIGZvciBpdCBpbiB0aW1lOiBJIGFtIGJhcmVseSBvbGQgZW5vdWdoIHRvIHJlbWVtYmVyLCBhbmQgbXkgcGFyZW50cyBhcmUgbWFycmllZCwgYW5kIHRoZXkgYXJlIGRpc2NvdmVyaW5nIHRoYXQgdGhlIGRpbmluZyByb29tIGZsb29yIGlzIHVuZXZlbiwgYXMgaXQgaGFwcGVucywgYXMgdGhlIHdhdGVyIHBvdXJpbmcgaW4gdGhyb3VnaCB0aGUgY2xvc2VkIHdpbmRvd3MgZm9ybXMgYSB0cmlhbmd1bGFyIHB1ZGRsZSB3aGVyZSB0aGUgZXh0ZXJpb3Igd2FsbHMgbWVldC48L3A+XHJcbiAgIDxwPkFuZCBJIGFtIGhlcmU6IHNpdHRpbmcgaW4gdGhlIHBvb2wgb2YgcmFpbndhdGVyIHdpdGggZW5vdWdoIHJvb20gdG8gc2xhcCBteSBoYW5kcyByaHl0aG1pY2FsbHkgb24gbW9yZSBvZiBpdCBiZXNpZGUgbWUsIGF3YXJlIG9mIGFuZCBpZ25vcmluZyB0aGVpciBtb3VudGluZyBidXQgZ2VuZXJhbGl6ZWQgZGlzYXBwcm92YWwuIElmIGl0IGhhcyBvY2N1cnJlZCB0byBtZSB0aGF0IHRoaXMgaXMgbm90IHdoYXQgdGhleSB3YW50ZWQgZnJvbSB0aGVpciByZWNlbnRseS1maW5pc2hlZCBmbG9vciwgdGhlIHRob3VnaHQgY29tZXMgd2l0aCBvdmVyYWxsIGluZGlmZmVyZW5jZTsgdGhhdCB0aGV5IGhhZCBpdCBwb3VyZWQgYW5kIHNhbmRlZCwgYnkgaHVtYW4gaGFuZHMsIHNvIEknbSBub3Qgc3VyZSB3aGF0IHRoZXkgZXhwZWN0ZWQuPC9wPlxyXG4gICA8cD4oQ29uc3RydWN0aW9uIG9mIHRoZSBob3VzZSBJIHdpbGwgZ3JvdyB1cCBpbiBoYXMgYmVlbiBvbmdvaW5nLCB3aWxsIGJlIG11Y2ggbG9uZ2VyLCBpbnRvIG1lbW9yaWVzIHdpdGggZW5vdWdoIGRlZmluaXRpb24gdG8gcHVsbCB0aGVpciBvd24gd2VpZ2h0IGluIHRpbWUuIEkgZG8gbm90IGtub3cgd2hhdCBhIGxldmVsIGlzLik8L3A+XHJcbiAgIDxwPkkgaGF2ZW4ndCBnb3R0ZW4gdGlyZWQgb2YgaXQgeWV0LiBBcyBJIHNsYXAgdGhlIHB1ZGRsZSwgSSBhbSBzaG91dGluZzogXCJTd2ltbWluZyBwb29sISBTd2ltbWluZyBwb29sIVwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RocmVlJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkhlcmUgYXJlIHR3byB0aGluZ3MgSSBrbm93IGFib3V0IHBvd2VyLCB2ZXJ5IGVhcmx5IGluIG15IGxpZmU6PC9wPlxyXG4gICA8cD5UaGUgbW9zdCBwaHlzaWNhbGx5IHBvd2VyZnVsIHRoaW5nIGluIHRoZSB3b3JsZCBpcyB3YXRlci4gV2F0ZXIgd3JpdGVzIHRoZSBzaGFwZSBvZiBsYW5kIGFuZCBjYW4gZGVtb2xpc2ggYW55dGhpbmcgd2l0aCB0aW1lLiBXYXRlciBpbiB0aGUgYWlyIGlzIHdoeSBldmVyeSBpbmFuaW1hdGUgb2JqZWN0IGFyb3VuZCBtZSBkaWVzIGZhc3RlciB0aGFuIGl0IHNhaWQgaXQgPGEgaHJlZj0naHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcG9zdHMvY3ctZGF0YS1sb3NzLTQ5MjEwMjk1Jz53b3VsZDwvYT47IGxpa2Ugb3B0aWNhbCBtZWRpYSB5b3UgdGhvdWdodCBiYWNrZWQgdXAgc29tZXRoaW5nIHlvdSBjYXJlIGFib3V0LCBvciBlbGFzdGljLiBXYXRlciBib3dscyB5b3Ugb3ZlciB3aGVuIHlvdSBjb21lIG5lYXIgaXQgYW5kIGdldCBjb2NreSBlbm91Z2ggdG8gdHVybiB5b3VyIGJhY2suIFdhdGVyIHNldHMgdGhlIGxpdmluZyBsaW1pdHMgb2Ygd2hhdCBpcyBwb3NzaWJsZTogbGlrZSB3aGVuIHRoZSBzdXBwbHkgdHVybnMgb2ZmLCBhbmQgdGhlIHRpbmFjbyB0aGF0IHRoZXJlJ3Mgbm90IGEgb25lLXdvcmQgRW5nbGlzaCB0ZXJtIGZvciBpcyByZXNlcnZlZCBmb3IgcGF5aW5nIHRvdXJpc3RzIGluIHRoZSBiYWNrIHlhcmQgdG8gY3VzaGlvbiB0aGVtIGZyb20gc2NhcmNpdHksIGFuZCBJIGJhdGhlIG91dCBvZiBhIGJ1Y2tldCBpbiB0aGUgc2hvd2VyLjwvcD5cclxuICAgPHA+KEl0IHN0YWdnZXJzIG1lLCB0aGUgd2F5IHRoZSBOb3J0aCB1c2VzIHdvb2Q6IGxpa2UgdGhlcmUncyBlbm91Z2ggb2YgaXQgdG8gZ28gYXJvdW5kLCBpbnN0ZWFkIG9mIGNvbmNyZXRlLiBJIGRvIG5vdCBtYWtlIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGltYmVyLCB3aGljaCBhd2VzIG1lIGFzIGEgc2hvdyBvZiB3ZWFsdGgsIGFuZCBmb3Jlc3RzLCB3aGljaCB1bm5lcnZlIG1lOyBpdCBkb2Vzbid0IGNvbm5lY3QgdGhhdCBhbnl0aGluZyBJIHNlZSBjb3VsZCBiZSBzdWZmaWNpZW50IGZvciBwZW9wbGUgdG8gY2xhaW0gaXQgaXMgZW5vdWdoLik8L3A+XHJcbiAgIDxwPlRoZSBiZXN0IHdheSBmb3IgYSBwZXJzb24gdG8gYWNxdWlyZSBwb3dlciBpcyB0byBiZSBpbmRpc3BlbnNhYmxlLiBNeSBib2R5LS1JIGRvIG5vdCB5ZXQgaGF2ZSB0aGUgbGFuZ3VhZ2UgZm9yIHRoaXM7IEkgYWx3YXlzIGtub3ctLW15IGJvZHkgZG9lcyBub3QgZG8gdGhlIHRoaW5ncyB0aGF0IG90aGVyIHBlb3BsZSB3YW50IGl0IHRvIGRvLiBQZW9wbGUgZG9uJ3Qgd2FudCBtZSwgaWYgdGhleSBjYW4gYWZmb3JkIHRvLiA8L3A+XHJcbiAgIDxwPkJ1dCBJIGFtIGFsc28gYSBkdWFsIGNpdGl6ZW4sIGEgdGVybSB3aGljaCBvZnRlbiBtZWFucyB0aGF0IG5vIG9uZSB3aG8gYXNrcyBmb3IgcGFwZXJ3b3JrIG90aGVyIHRoYW4gYSBwYXNzcG9ydCBpcyBnb2luZyB0byBnZXQgc29tZXRoaW5nIHRoZXkgbGlrZS4gSSB3aWxsIGhhdmUgdG8gYmUgaW5kaXNwZW5zYWJsZS48L3A+XHJcbiAgIDxwPkkgcmVzb2x2ZSB0byBnbyB0byBjb2xsZWdlIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBJIHdpbGwgZ2V0IGEgZGlwbG9tYSBpbiBFbmdsaXNoIHByaW50IGFuZCB0aGVuIG5vIG9uZSB3aWxsIGJlIGFibGUgdG8gYWZmb3JkIHRvIGRpc2xpa2UgbWUgZW5vdWdoIGZvciB0aGVtIHRvIHRlbGwgbWUgbm8uPC9wPlxyXG4gICA8cD4oSSBhbSwgYXBwcm94aW1hdGVseSwgc2l4IHllYXJzIG9sZC4pPC9wPlxyXG4gIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXInPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+VGhyZWUgd2Vla3MgYWZ0ZXIgbXkgZWlnaHRlZW50aCBiaXJ0aGRheSwgSSBnbyBub3J0aC48L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZnVuY3Rpb24gR2xhY2llckEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J0lJSScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmdfdmEucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+SUlJPC9oNT5cclxuICAgVGhlIGdsYWNpZXIgYWJzb3JiZWQgZ3JlZW5ob3VzZSBnYXNlcy4gPGJyLz5cclxuICAgV2UgYXJlIGEgbGFyZ2UgcGFydCBvZiB0aGUgYmlvc3BoZXJlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJCKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3NtLnBuZycgaWQ9J2JsdWVxJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VjwvaDU+XHJcbiAgIFdlIGRvIG5vdCBrbm93IHdoaWNoIHRvIGZlYXIgbW9yZSw8YnIvPlxyXG4gICBUaGUgdGVycm9yIG9mIGNoYW5nZTxici8+XHJcbiAgIE9yIHRoZSB0ZXJyb3Igb2YgdW5jZXJ0YWludHksIDxici8+XHJcbiAgIFRoZSBnbGFjaWVyIGNhbHZpbmc8YnIvPlxyXG4gICBPciBqdXN0IGFmdGVyLjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xhY2llckMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J1ZJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmcucG5nJyBpZD0nYmx1ZXFtJyBhbHQ9JycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD48aDU+VklJSTwvaDU+XHJcbiAgIEkga25vdyBraW5nIHRpZGVzLCA8YnIvPlxyXG4gICBBbmQgbHVyaWQsIGluZXNjYXBhYmxlIHN0b3JtczsgPGJyLz5cclxuICAgQnV0IEkga25vdywgdG9vLCA8YnIvPlxyXG4gICBUaGF0IHRoZSBnbGFjaWVyIGlzIGludm9sdmVkIDxici8+XHJcbiAgIEluIHdoYXQgSSBrbm93LjwvcD5cclxuICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG4vL1VudXNlZCBmb3Igbm93LCBidXQgZnVuIHRvIGhhdmVcclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2dsYWNpZXInPlxyXG4gICA8R2xhY2llckEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxHbGFjaWVyQyAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCB7IEdsYWNpZXJDIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuaW1wb3J0IFdBVkUgZnJvbSBcIi4vcG9lbS13YXZlXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDKCkge1xyXG4gcmV0dXJuIChcclxuICA8PlxyXG4gICA8U2NlbmUwNSAvPlxyXG4gICA8U2NlbmUwNiAvPlxyXG4gICA8U2NlbmUwNyAvPlxyXG4gICA8U2NlbmUwOCAvPlxyXG4gICA8U2NlbmUwOSAvPlxyXG4gICA8V0FWRSAvPlxyXG4gICA8U2NlbmUxMCAvPlxyXG4gICA8U2NlbmUxMSAvPlxyXG4gICA8U2NlbmUxMiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8Lz5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZpdmUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGFtIG5pbmUgeWVhcnMgb2xkLCBhbmQgd2UgaGF2ZSBmYW1pbHkgaW4gTmV3IE9ybGVhbnMuIFdlIGhhdmUgZmFtaWx5IGluIEZsb3JpZGEsIGFzIHdlbGw7IG15IGZhdGhlciBoYXMgdGFrZW4gaXQgdXBvbiBoaW1zZWxmIHRvIGRyaXZlIHVzIGZyb20gb25lIHRvIHRoZSBvdGhlciwgd2hpY2ggSSBmaW5kIGV4Y2l0aW5nLiBJIG9ubHkgc2VlIEdQUyBpbiByZW50YWwgY2FycywgaW4gdGhlIFVTLCB3aGljaCBpcyB0aGUgc29ydCBvZiB0aGluZyB0aGF0IHNhdGVsbGl0ZXMgYm90aGVyIHRvIG1hcC4gV2UgbGVhdmUgaW4gdGhlIGFmdGVybm9vbiB0byBkcml2ZSB0aHJvdWdoIHRoZSBuaWdodCwgd2hpY2ggSSBmaW5kIG1vcmUgZXhjaXRpbmcgc3RpbGwuPC9wPlxyXG4gICAgPHA+V2UgcGFzcyB0aHJvdWdoIGEgc3Rvcm0gc3lzdGVtLCBkcml2aW5nOyBoYXJzaCByYWluIGluIG1vdGlvbiBhdCBuaWdodCBpcyBhIHJhcmUgdHJlYXQgZm9yIG1lLCBhbmQgSSBoYXZlbid0IHF1aXRlIGdyYXBwbGVkIHdpdGggdGhlIHJlYWxpdGllcyBvZiBoaWdod2F5cyBlbm91Z2ggdG8gdW5kZXJzdGFuZCB0aGUgcGl0ZmFsbHMgb2Ygd2h5LiBJIHN0YXJlIG91dCB0aGUgd2luZG93cyBhdCB0aGUgaGFyZCByYWluLCB0aGUgbHV4dXJ5IG9mIGxpZ2h0IGFuZCBsYW5lcyBvbiBhbiBBbWVyaWNhbiBpbnRlcnN0YXRlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzaXgnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBmYXRoZXIgaGFzIHRvbGQgbWUgYWJvdXQgaHVycmljYW5lIHBhcnRpZXMsIHJpY2ggcGVvcGxlIHdobyB3ZXJlIHJlY2VudGx5IGNoaWxkcmVuIHRha2luZyBvZmYgdG8gc2l0IGl0IG91dCBpbiBzcGFyZSBob3VzZXMgb24gdGhlIGNvYXN0LiBUaGUgaWRpb2N5IHRoYXQgY29tZXMgd2l0aCB0aGUgd29ybGQgZ2l2aW5nIHlvdSBubyByZWFzb24gdG8gYmVsaWV2ZSB5b3UncmUgbm90IGludnVsbmVyYWJsZS4gV2UgbWF5IG9yIG1heSBub3QgZGlzY3VzcyB0aGF0IHBhcnQgZXhwbGljaXRseSwgYnV0IEknbSBhd2FyZSwgYXQgaG9tZSwgb2YgdGhlIGNvbnRyb3ZlcnN5IG9mIHRoZSBmb3JjaWJsZSByZWRlZmluaXRpb24gb2YgXCJiZWFjaGZyb250XCIgcHJvcGVydHkgYnkgYnVpbGRpbmcgb24gZHVuZXMsIGFuZCB0aGUgcmVhc29ucyBwZW9wbGUgZG8gc28gYW55d2F5LiBXaHkgdGhlIGxhdyBoYXMgbGVzcyB0byBzYXkgYWJvdXQgaXQgdGhhbiB0aGUgdGV4dCBjbGFpbXMgaXQncyBzdXBwb3NlZCB0by48L3A+XHJcbiAgICA8cD5JIGtub3cgYSBsb3Qgb2YgcmVhbHRvcnMuPC9wPlxyXG4gICAgPHA+SSBhbHNvIGtub3cgYSBqb2tlOiBcIkkndmUgZ290IHRoaXMgZ3JlYXQgcGllY2Ugb2YgbGFuZCB0byBzZWxsIHlvdSxcIiBpdCBzdGFydHMsIFwiaGFzbid0IGZsb29kZWQgc2luY2UgdGhlIGRpbm9zYXVycy4uLlwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NldmVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TGF0ZXIgaW4gdGhlIHN1bW1lciwgSSBhbSBub3QgbmluZSB5ZWFycyBvbGQuIFdoZW4gSSd2ZSByZWNlbnRseSB0dXJuZWQgdGVuLCBLYXRyaW5hIHN3ZWVwcyB0aHJvdWdoIHdoZXJlIEkgYW0gbm90LiBJIGhhdmUgdGhlIHZhZ3Vlc3Qgb2YgdW5kZXJzdGFuZGluZ3Mgb2Ygd2hhdCBhIGxldmVlIGlzLCBmcm9tIHNvbmdzLCBhbmQgbm93IGZyb20gbmV3czsgbGlrZSBkdW5lcywgSSB0aGluaywgYnV0IHdvcnNlIGF0IGJlaW5nIHNvLjwvcD5cclxuICAgIDxwPkluIHRoZSBsZWFkLXVwIHRvIGxhbmRmYWxsLCBJIGFtIGNoaWxkaXNobHksIGNhbGxvdXNseSBiYWZmbGVkOiBDYXRlZ29yeSA1IG9uIHRoZSBmb3JlY2FzdCBpcyBhbHdheXMgZ29vZCBuZXdzIGZvciBtZSwgYmVjYXVzZSBsYXJnZSBudW1iZXJzIG1lYW4gYSBoaWdoZXIgcHJvYmFiaWxpdHkgb2YgY2xhc3MgYmVpbmcgY2FsbGVkIG9mZi4gKFRoZXJlIGlzLCBmb3IgdGhlIGR1cmF0aW9uIG9mIG15IGNoaWxkaG9vZCwgb25lIHBhdmVkIHJvYWQuIFRoZSBvdGhlcnMsIHVuZGVyIHN1ZmZpY2llbnQgcHJlc3N1cmUsIHR1cm4gdG8gcml2ZXJzLiBJIGxpdmUgb24gYSBoaWxsOyBJIGxpa2UgdG8gd2F0Y2guIE9uZSB5ZWFyLCBsYXRlciBpbiB0aGUgZGVjYWRlLCBvbiBhIGRheSB0aGF0IHRoZSByb2FkcyB3ZXJlbid0IHdhc2hlZCBvdXQgZWFybHkgZW5vdWdoIGluIHRoZSBtb3JuaW5nIHRvIGdldCBtZSBvdXQgb2YgaXQsIG15IHNjaG9vbCB0dXJucyB0byByYXBpZHMsIGFuZCBJIGFtIHVuYWNjb3VudGFibHkgcGxlYXNlZCB0byBrbm93IGl0IHdhcyBidWlsdCBvbiBhIHZlaW4gb2YgcmVkIGNsYXkgYXMgdGhhdCBwYWludHMgaXRzZWxmIG9udG8gbXkgc29ja3MuKSA8L3A+XHJcbiAgICA8cD5FdmFjdWF0aW9uLCBmb3IgZXhhbXBsZSwgaXMgZm9yZWlnbiB0byBtZS4gSSBjYW4ndCBpbWFnaW5lIHdoeSB0aGV5J3JlIGJvdGhlcmluZzsgSSBjb3VsZCBzYXkgdGhhdCB0aGUgcmVhc29uIEkgZG9uJ3QgdW5kZXJzdGFuZCB3aHkgb25lIHBsYWNlIHdvdWxkIGJlIHNhZmVyIHRoYW4gYW5vdGhlciBpcyB0aGF0IG5vIHBhcnQgb2YgbXkgc3RhdGUgaXMgYSBmdWxsIGZpZnR5IG1pbGVzIGZyb20gdGhlIGNvYXN0bGluZSwgYnV0IEkgZG91YnQgSSB0aG91Z2h0IGl0IHRocm91Z2ggdGhhdCBmYXIuIEkgdGhpbmsgSSBzaW1wbHkgZG8gbm90IHJlZ2lzdGVyIHRoYXQgbG9jYXRpb25zIGFyZSB1bmxpa2Ugb25lIGFub3RoZXIgaW4gdGltZSBub3QgdG8gbGVhcm4gaXQgb24gdGhlIG5ld3MuPC9wPlxyXG4gICAgPHA+SSBhbSB0ZW4geWVhcnMgYW5kIGFsbW9zdCBvbmUgbW9udGggb2xkLCBhbmQgSSB1bmRlcnN0YW5kIHRoYXQgaHVycmljYW5lIHByZXBhcmVkbmVzcyBpcyByZWxhdGl2ZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIHN0dWNrIG15IGZlZXQgaW4gdGhlIEF0bGFudGljIG9uY2UuIEl0IHdhcyBjb2xkZXIgdGhhbiBhbiBvY2VhbiBoYWQgYW55IGJ1c2luZXNzIGJlaW5nLCBieSBteSBsaWdodHMsIGFuZCBncmF5LiBUaGVyZSB3YXMgc29tZXRoaW5nIGJpemFycmUgaW4gdGhlIGlkZWEgdGhhdCBpdCB3YXMgd2FybSBlbm91Z2ggdG8gZmVlZCBhIGh1cnJpY2FuZS4gIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSduaW5lJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QmVmb3JlIEkgYW0gZWxldmVuLCB3ZSBzdG9wIGhhdmluZyBmYW1pbHkgaW4gTmV3IE9ybGVhbnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3Rlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IGFyb3VuZCBmb3VyIHllYXJzIG9sZCwgSSBhbSBlYXZlc2Ryb3BwaW5nLS10aGlzIHdpbGwgYmUgYSBoYWJpdC0tSSBhbSBlYXZlc2Ryb3BwaW5nIG9uIGtpbmRlcmdhcnRlbiB0ZWFjaGVyczsgdGhleSBhcmUgdGFsa2luZyBhYm91dCB0aGUgd2VhdGhlci4gPC9wPlxyXG4gICAgPHA+U3BlY2lmaWNhbGx5LCB0aGV5IGFyZSB0YWxraW5nIGFib3V0IHRoZSBvY2VhbiBnZXR0aW5nIHdhcm1lciwgYW5kIGhvdyB0aGF0J3MgbWFraW5nIGh1cnJpY2FuZSBzZWFzb24gaGFyc2hlciwgYW5kIGxvbmdlciwgaW4gd2F5cyBubyBvbmUgc2hvdWxkIGxpa2UuIFdlIGRlcGVuZCBvbiBodXJyaWNhbmVzIGZvciBmcmVzaHdhdGVyLS1teSB0b3duLCBzcGVjaWZpY2FsbHksIHJlbGllcyBvbiB0aGVtIHRvIGZpbGwgdGhlIGFxdWlmZXIgaXRzIG11Y2gtZGlzY3Vzc2VkIG9hc2lzIHN0YXR1cyBpcyBidWlsdCB1cG9uLS1idXQgdG9vIG11Y2ggd2F0ZXIgYXQgYSB0aW1lIGRlZmVhdHMgdGhlIHBvaW50LCByaXBzIHRvcHNvaWwgaW50byB0aGUgc2VhLCBydW5zIGl0cyBjb3Vyc2UgdG9vIGZhc3QgZm9yIHVzIHRvIGtlZXAuIEFuZCBpdCdzIG1vcmUgdW5wbGVhc2FudCBmb3IgdGhlbSB0aGFuIGl0IGlzIGZvciBtZS48L3A+XHJcbiAgICA8cD5UaGUgd2FybXRoLCBhdCBsZWFzdCwgaXMgY29tbW9uIHNlbnNlOyBJIGtub3cgaGVhdCBpcyBlbmVyZ3kgYmVjYXVzZSBJIGtub3cgaHVycmljYW5lcyBuZWVkIHdhcm0gd2F0ZXIgdG8gbGl2ZS4gVGhhdCdzIHdoeSB0aGV5IHN0YXJ2ZSBhbmQgc3RhbGwgb3V0IGdvaW5nIG5vcnRoLCBvciBjb21pbmcgdG8gbGFuZC4gQSBzdG9ybSB3b3VsZCBoYXZlIHRvIGJlIHZlcnkgc3BlY2lhbCB0byBmaWdodCBhbGwgdGhlIHdheSB0aHJvdWdoIHRoYXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VsZXZlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IGZpcnN0IHllYXJzIGluIHRoZSBVbml0ZWQgU3RhdGVzLCBJIFNreXBlIG15IGRhZCBsZXNzIG9mdGVuIHRoYW4gSSBzaG91bGQuIExlc3Mgb2Z0ZW4gdGhhbiBJIHdhbnQgdG8uIEl0J3MgaGFyZCB0byBmaW5kIGEgcmh5dGhtOyBJIGFtIG5vdCBkb2luZyB3ZWxsIHRoZXJlLiBCdXQgaGUgdGVsbHMgbWUgYWJvdXQgdGhlIHdlYXRoZXIuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VsdmUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5XaGVuIEkgYW0gdHdlbnR5LWZvdXIsIGl0J3MgPGEgaHJlZj0naHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAyMC8wNS8xOC9jbGltYXRlL2NsaW1hdGUtY2hhbmdlcy1odXJyaWNhbmUtaW50ZW5zaXR5Lmh0bWwnPmVzdGFibGlzaGVkPC9hPiB0aGF0IHdhcm1lciB3YXRlciBpcyBzdXBlcmNoYXJnaW5nIHRyb3BpY2FsIHN0b3Jtcy48L3A+XHJcbiAgICA8cD5JIHVuZGVyc3RhbmQgdGhhdCBzY2llbmNlIG1vdmVzIG1vcmUgc2xvd2x5IHRoYW4ga2luZGVyZ2FydGVuIHRlYWNoZXJzJyBzbWFsbCB0YWxrOyB0aGF0IGNsaW1hdGUsIGJ5IGRlZmluaXRpb24sIGhhcHBlbnMgb24gYSB0aW1lc2NhbGUgY2xvc2VyIHRvIGdlb2xvZ2ljYWwgdGhhbiBhbmVjZG90ZS4gPC9wPlxyXG4gICAgPHA+QnV0IEkgZG8gaGF2ZSB0aGUgZmxlZXRpbmcgdGhvdWdodCB0aGF0LCBldmVuIHRoZW4sIHRha2luZyB0d2VudHkgeWVhcnMgb2YgbXkgbGlmZSB0byBjYXRjaCB1cCB0byBob3cgdGhlIHdlYXRoZXIncyBkb2luZyBzZWVtcyBhIGJpdCBtdWNoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0FWRSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV0FXJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gIDxpbWcgc3JjPScvbXVsdGl6emV0X3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz48cD4mbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7IHRvIGluc2F0aWF0ZSB0ZW1wZXN0LCB1bnF1ZWxsZWQgPGJyLz5cclxuICAgYnkgcHJheWVyIG5vciBjaWdhcmV0dGUsIGNhcmVsZXNzLCBtZWFuLDwvcD5cclxuICAgPHA+YSBjb2xkLWJsb29kZWQgaW5kaWZmZXJlbmNlIHNvIHB1cmUsPGJyLz5cclxuICAgYSBzdHJvbmcgc3dpbW1lciB3b24ndCBsYXN0IHRlbiB3ZXQgbWludXRlcy48L3A+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+TS4gQmFydGxleSBTZWlnZWwsPGJyLz5cIldBVkUgQUZURVIgV0FWRVwiPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgR2FyZGVuIGZyb20gXCIuL3Bob3Rvc19jaGlcIlxyXG5pbXBvcnQgeyBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5pbXBvcnQgT2RlIGZyb20gXCIuL3BvZW0tb2RlXCJcclxuaW1wb3J0IFdpblN1bSBmcm9tIFwiLi9wb2VtLXdpbnN1bVwiXHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcXVvdGUtY2xpbWVcIlxyXG5pbXBvcnQgT2hpbyBmcm9tIFwiLi9zdHJpcGUtb2hpb1wiXHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gXCIuL3N0cmlwZS13YXNoaW5ndG9uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTEzIC8+XHJcbiAgIDxTY2VuZTE0IC8+XHJcbiAgIDxPaGlvIC8+XHJcbiAgIDxTY2VuZTE1IC8+XHJcbiAgIDxTY2VuZTE2IC8+XHJcbiAgIDxTY2VuZTE3IC8+XHJcbiAgIDxTY2VuZTE4IC8+XHJcbiAgIDxTY2VuZTE5IC8+XHJcbiAgIDxTY2VuZTIwIC8+XHJcbiAgIDxEZWZpbmUgLz5cclxuICAgPFNjZW5lMjIgLz5cclxuICAgPFNjZW5lMjEgLz5cclxuICAgPFNjZW5lMjMgLz5cclxuICAgPFNjZW5lMjQgLz5cclxuICAgPFNjZW5lMjUgLz5cclxuICAgPFNjZW5lMjYgLz5cclxuICAgPEdhcmRlbiAvPlxyXG4gICA8U2NlbmUyNyAvPlxyXG4gICA8U2NlbmUyOCAvPlxyXG4gICA8U2NlbmUyOSAvPlxyXG4gICA8U2NlbmUzMCAvPlxyXG4gICA8U2NlbmUzMSAvPlxyXG4gICA8U2NlbmUzMiAvPlxyXG4gICA8U2NlbmUzMyAvPlxyXG4gICA8U2NlbmUzNCAvPlxyXG4gICA8T2RlIC8+XHJcbiAgIDxTY2VuZTM1IC8+XHJcbiAgIDxTY2VuZTM2IC8+XHJcbiAgIDxTY2VuZTM3IC8+XHJcbiAgIDxTY2VuZTM4IC8+XHJcbiAgIDxXaW5TdW0gLz5cclxuICAgPFNjZW5lMzkgLz5cclxuICAgPFNjZW5lNDAgLz5cclxuICAgPFNjZW5lNDEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxTY2VuZTQyIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBjb2xsZWdlIGluIHRoZSBVUyB0aGF0IEkgZ2V0IGludG8gaXMgaW4gT2hpbywgc28gSSBhbSBlaWdodGVlbiBhbmQgSSBhbSBpbiBPaGlvLiBCZWZvcmUgdGhhdCwgSSBhbSBzZXZlbnRlZW4sIGFuZCBteSBmYXRoZXIgaXMgaGVscGluZyBtZSBwaWNrIG91dCBhIHdpbnRlciBjb2F0IG9uIHRoZSBpbnRlcm5ldCwgYW5kIEkgYW0gYXNraW5nIGhpbSBpZiBJIHNob3VsZCBjaG9vc2UgdGhlIHdhcm1lc3Qgb25lIEkgc2VlLjwvcD5cclxuICAgIDxwPlRoYXQncyBvdmVya2lsbCwgaGUgc2F5cy4gKEhlIGhhcyBiZWVuIHRoZXJlIGJlZm9yZSwgYWxiZWl0IHN1YnN0YW50aWFsbHkgcHJpb3IgdG8gbWUgZXZlbiBiZWluZyBib3JuLikgV2hhdCBJIHJlYWxpc3RpY2FsbHkgbmVlZCBpcyBtb3JlIHRvd2FyZHMgdGhlIGNlbnRlciBvZiB0aGUgcmFuZ2UuIEknZCByZWdyZXQgZ2V0dGluZyB0b28gaGVhdnkgYSBjb2F0LCBoZSBzYXlzLCBhbmQgaGVscHMgbWUgcGljayBvbmUgb2YgdGhlIG1pZGRsaW5nIG9uZXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXJ0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBnaXZlbiB0byB1bmRlcnN0YW5kIGl0IHNheXMgZW5vdWdoIHRvIHNheSB0aGF0IG15IGZpcnN0IHllYXIgaW4gT2hpbyBpcyBhIGxha2UgZWZmZWN0IHllYXIsIHRob3VnaCBJIHdvdWxkbid0IGtub3cgd2h5LiA8L3A+XHJcbiAgICA8cD5JIGxlYXJuLCBmaXJzdGhhbmQgYW5kIG9uIG15IGhhbmRzLCB3aGF0IGEgLTQwIHdpbmQgY2hpbGwgaXMgaW4gRmFocmVuaGVpdC4gSSBsZWFybiB3aGF0IHNwZWNpYWwgY2FuZSB0aXBzIEkgbmVlZCBmb3IgdHJhY3Rpb24gaW4gc25vdy4gSSBsZWFybiB0aGF0IG15IGNvbGxlZ2UgaXMgbm90IHBhcnRpY3VsYXJseSBpbnRlcmVzdGVkIGluIGNsZWFyaW5nIHRoZSBzaWRld2Fsa3MgaW4gdGltZSBmb3IgY2xhc3M7IGl0IGRvZXMgbm90IG9jY3VyIHRvIG1lIHRoYXQgdGhleSBtYXkgb25jZSBhdCBsZWFzdCBoYXZlIGJlZW4gYWJsZSB0byBhZmZvcmQgdGhlIG5lZ2xpZ2VuY2UsIGJlY2F1c2UgSSBkb24ndCBoYXZlIGFueSByZWFzb24gdG8gdW5kZXJzdGFuZCBhIGNvbXBhcmlzb24gYnkgd2hpY2ggdGhpcyBiZWNvbWVzIGV4dHJlbWUuPC9wPlxyXG4gICAgPHA+TXkgZGFkIGFwb2xvZ2l6ZXMsIHRob3VnaC4gRm9yIGxlYWRpbmcgbWUgd3JvbmcsIHdpdGggdGhlIGNvYXQuPC9wPlxyXG4gICAgPHA+VGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIGhlcmUgaXMgc3VwcG9zZWQgdG8gZG8sIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+SSB3b3VsZG4ndCBrbm93LCBJIHNheTsgb3IgbWF5YmUgSSBkb24ndC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZmlmdGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgRmFjZVRpbWUgbXkgZGFkIGluc3RlYWQgb2YgU2t5cGluZywgdGhlc2UgZGF5cy4gSGUgdGVsbHMgbWUgaG93IG1hbnkgZGF5cyB0aGlzIHdlZWsgdGhlcmUgaGF2ZSBiZWVuIG11bmljaXBhbCB3YXRlci4gSSB0ZWxsIGhpbSB3aGVuIGl0IHNub3dzLiBIZSB0ZWxscyBtZSBob3cgb3VyIHRlbXBlcmF0dXJlcyBjb21wYXJlLiBJIHRlbGwgaGltIEkgZ290IGEgbmV3IG1vbml0b3IuIEkgdGVsbCBoaW0gaG93IG11Y2ggaXQgd2FzIG5ldywgYW5kIGhvdyBwbGVhc2VkIEkgYW0gd2l0aCBteXNlbGYgZm9yIGhvdyBJIGZvdW5kIGl0IHVzZWQsIGhvdyB0aGUgZGVhbCB0b29rIGEgbWF0dGVyIG9mIGRheXMuPC9wPlxyXG4gICAgPHA+WW91J3JlIGluIHRlY2ggaGVhdmVuIHVwIHRoZXJlLCBoZSBzYXlzLiBJIHNheSwgSSBndWVzcy4gSGUgc2F5cyB0aGF0IHVzZWQgaGVyZSB3b3VsZCBiZSBuZXcgdGhlcmUuIEkgdGhpbmsgYWJvdXQgdGhhdCBhcyBhIHdheSB0byBwdXQgaXQsIGxhdGVyOiBkZXZlbG9wbWVudCBpbiByZWxhdGl2ZSB0aW1lIG92ZXIgc3BhY2UuPC9wPlxyXG4gICAgPHA+SSBzYXkgKGFub3RoZXIgZGF5KSB0aGF0IEknZCBsaWtlIHRvIHRyYWRlIGhpbSBteSBsYXB0b3AsIHRoYXQgaXQgd291bGQgYmUgYmV0dGVyIGZvciBoaXMgZ3JpcCB0aGFuIGl0J3MgYmVlbiBmb3IgbXkgdmlzaW9uLiBIZSBhc2tzIGlmIEkgd2FudCBoaW0gdG8gdGFsayB0byBhc2sgdGhlIGd1eSB3aG8gc2VuZHMgaGltIHN0dWZmIGZyb20gdGhlIGJvcmRlciB3aGF0IHRoZSBjb21wb3VuZGluZyBjb3N0cyBvZiBzaGlwcGluZyB3b3VsZCBsb29rIGxpa2UuIEkgc2FpZCBJIHRob3VnaHQgSSdkIGp1c3QgYnJpbmcgaXQgdG8gaGltLCB3aGVuIEkgY2FuLiBTYXZlIGhpbSB0aGUgY3VzdG9tcywgdGhlIHdheSB3ZSBoYW5kbGVkIHRoaW5ncyBncm93aW5nIHVwLjwvcD5cclxuICAgIDxwPk9oLCBoZSBzYXlzLiBUaGF0J3Mga2luZCBvZiB5b3UuPC9wPlxyXG4gICAgPHA+SSB3YW50IHRvIHNlZSB5b3UgYW55d2F5LCBJIHNheS4gVGhlIG1hY2hpbmUgYmVpbmcgbGlnaHQgaXMgdGhlIHdob2xlIHBvaW50IG9mIHRoZSB0aGluZy4gSSBkb24ndCBzZWUgd2hlcmUga2luZG5lc3MgY29tZXMgaW50byBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4dGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgd2FzIGhvbWUgZm9yIHRoZSBsYXN0IHRpbWUgaW4gRGVjZW1iZXIsIDIwMTMuIEl0J3Mgbm90IG15IGZpcnN0IHN1bW1lciBhd2F5LS1pdCBmZWVscyBpdC0taXQncyBub3QgbXkgZmlyc3Qgc3VtbWVyIGJ1dCBteSBzZWNvbmQgdGhhdCB0aGUgaHVycmljYW5lIGNvbWVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgYmlnIGh1cnJpY2FuZSB3aG9zZSBuYW1lIEkgdXNlZCB0byByZW1lbWJlciBoYXBwZW5lZCBzaG9ydGx5IGJlZm9yZSBJIHdhcyBib3JuLCBhbmQgdGh1cyB0aGUgcG9pbnQgb2YgcmVmZXJlbmNlIGZvciBhbiBleHRyYW9yZGluYXJ5IHN0b3JtIGNvdWxkIGNvbWZvcnRhYmx5IGJyYWNrZXQgYW55dGhpbmcgSSdkIGtub3cuPC9wPlxyXG4gICAgPHA+SGVyIHVzdXJwZXIgY29tZXMgdGhlIHN1bW1lciBJIHR1cm4gdHdlbnR5LiBJdCB0ZWFycyB0aHJvdWdoIHRvd24gbGlrZSBhIG5hdHVyYWwgZGlzYXN0ZXIsIHdoaWNoIGlzIGphcnJpbmcuIEl0IHVwZW5kcyBteSBmYXRoZXIncyBnYXJkZW4sIHdoaWNoIGlzLCBzb21laG93LCB3b3JzZS4gVGhpbmtpbmcgb2YgaGltIHB1dHRpbmcgaXQgYmFjayB0b2dldGhlci4gRXZlbiBpZiBoZSBoYWQgaGVscC48L3A+XHJcbiAgICA8cD5IZSBkb2Vzbid0IHdhbnQgdG8gdmlzaXQsIGFmdGVyIHRoYXQsIGV2ZW4gYmVmb3JlIGhlIGNhbid0LiBUcmF2ZWwgaGFzIGFsd2F5cyBiZWVuIGEgdGhpbmcgb2Ygc3VtbWVyOyBoZSBkb2Vzbid0IHdhbnQgdG8gbGVhdmUgdGhlIGhvdXNlIHRvIHN0b3JtcyB1bnN1cGVydmlzZWQuIEhlIGRvZXNuJ3QgdHJ1c3QgYW55b25lIGVsc2UgdG8gaGFuZGxlIGl0IGlmIGhlIGxlYXZlcyBpdCBhbG9uZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW5kcyBtZSBwaG90b3MuIEJ1dCB0aGV5IGdldCBtb3JlIGRpZmZpY3VsdCB0byBsb29rIGF0IG92ZXIgdGltZSwgb2RkbHkgZW5vdWdoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSduaW5ldGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkh1cnJpY2FuZSBzZWFzb24gZ3Jvd3MgbG9uZ2VyIGF0IGJvdGggZW5kcy4gSXQncyBoYXJkIHRvIGZpbmQgbmV3cyBhYm91dCBodXJyaWNhbmVzIGluIHRoZSBQYWNpZmljIHRoYXQgSSBjYW4gcGljayB1cCBvbiBwYXNzaXZlbHksIHRob3VnaDsgQW1lcmljYW4gc291cmNlcywgd2hpY2ggYXJlIHdoYXQgdGhlIGludGVybmV0IGlzIGJ1aWx0IG9uLCBjYXJlIGFib3V0IHRoZSBBdGxhbnRpYyBmaXJzdCBhbmQgZm9yZW1vc3QuIEkgZG9uJ3QgbGlrZSB0aGUgQXRsYW50aWMsIHNlbGZpc2hseTogaXQgaGFzIGEgYmFkIHRyYWNrIHJlY29yZCwgYW5kIEkgcmVtZW1iZXIgaXQgZ3JheS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SW4gMjAyMiwgSSB0ZWxsIGhpbSBJJ20gd3JpdGluZyB0aGlzIGVzc2F5LCBhbmQgSSBhc2sgaWYgSSBjYW4gdXNlIHRoZSBwaG90b3MuIEhlIGFza3Mgd2hhdCBJIHdhbnQgdGhlbSBmb3IuIEkgc2F5IEknbSB3cml0aW5nIGFib3V0IHRoZSBpbmNyZWFzZWQgdG9sbCBvZiBodXJyaWNhbmVzIG9uIGFuIGVudmlyb25tZW50IHRoYXQgcmVsaWVkIG9uIHRoZW0uIEhlIHNheXMgaGUgc3VwcG9zZXMgT2RpbGUgd291bGQgYmUgdGhlIG9uZSBmb3IgdGhhdC48L3A+XHJcbiAgICA8cD5JIHdhc24ndCB0aGVyZSwgSSBzYXkuIEl0J3MgdGhlIGZpcnN0IGJpZyBvbmUgd2hlcmUgSSB3YXNuJ3QgdGhlcmUuPC9wPlxyXG4gICAgPHA+SGUgYXNrcyB3aHkgdGhhdCBtYXR0ZXJzLiBUaGluZ3MgYXJlIGdvaW5nIHRvIGtlZXAgaGFwcGVuaW5nIHdoaWxlIHlvdSdyZSBub3QgaGVyZSwgaGUgc2F5cy48L3A+XHJcbiAgICA8cD5JIGtub3csIEkgc2F5LjwvcD5cclxuICAgIDxwPlN1cnZpdm9yJ3MgZ3VpbHQgaXMgYSB0aGluZywgbXkgcGFydG5lciBzYXlzLCBpbiBlYXJzaG90LCBmcm9tIG9mZnNjcmVlbi4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW50IG1lIHBob3Rvcy4gSW4gdGhlIGVuZCwgSSBjYW4ndCBxdWl0ZSBicmluZyBteXNlbGYgdG8gZGVzY3JpYmUgdGhlbSBpbiB0aW1lLiBJIHByb21pc2UgbXlzZWxmIEknbGwgY29tZSBiYWNrIHRvIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSB0ZWxsIG15IGZhdGhlciB0aGF0IEknbSB3cml0aW5nIGFib3V0IHRoZSBmaW5nZXJwcmludHMgb2YgY2xpbWF0ZSBjaGFuZ2UgYnJhY2tldGVkIGJ5IG15IGxpZmUuIEkgdGVsbCBoaW0gdGhhdCBhIGxpdHRsZSBvdmVyIGEgcXVhcnRlciBjZW50dXJ5IGlzIGEgcHJldHR5IGRlY2VudCBmcmFtZSB3aXRoIHdoaWNoIHRvIGVuY2Fwc3VsYXRlIGl0LiBJIHRlbGwgaGltIHRoYXQgc29tZXRpbWVzIGl0IGZlZWxzIGxpa2UgaXQncyBmb2xsb3dpbmcgbWUgdXAuPC9wPlxyXG4gICAgPHA+WW91J3ZlIGJlZW4gd29ya2luZyB5b3VyIHdheSBub3J0aCwgaGUgc2F5cywgd2l0aCBzb21lIGRlbGlnaHQgYXQgaG93IGl0IGxpbmVzIHVwLiA8L3A+XHJcbiAgICA8cD5FdmVyeXdoZXJlIEkgZ28sIGV2ZXJ5IHllYXIsIHBlb3BsZSB0ZWxsIG1lIHRoYXQgdGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIHVzdWFsbHkgZG9lcywgSSB0ZWxsIGhpbS4gSSdtIGdldHRpbmcgcHJhY3RpY2UgYXQgdGhlIHByZW1pc2UgYnkgbm93LjwvcD5cclxuICAgIDxwPlRoYXQncyB0aGVpciBwcm9ibGVtLCBoZSBzYXlzLiBIZSBzYXlzIGl0J3MgYSBmYW50YXN5IHRoYXQgaXNuJ3QgcmVsZXZhbnQgdG8gdGhlIHdvcmxkIGFzIGl0IGlzIGFuZCB3aWxsIGNvbnRpbnVlIGJlaW5nLjwvcD5cclxuICAgIDxwPkkgc2F5IEkgdGhpbmsgZ3JvdW5kaW5nIHRoZW1zZWx2ZXMgaW4gd2hhdCB0aGV5IHN0aWxsIHRoaW5rIG9mIGFzIG5vcm1hbCBpcyBob3cgcGVvcGxlIGhlbHAgdGhlbXNlbHZlcyB1bmRlcnN0YW5kIGNoYW5nZS48L3A+XHJcbiAgICA8cD5IZSBzYXlzIGl0J3Mgc3RpbGwgdGhlIGNhc2UgdGhhdCBzdWNoIGdyb3VuZCBkb2Vzbid0IGV4aXN0LiBJIHNheSBJIGtub3cuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTMnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JdCBpcyBKYW51YXJ5LCBhbmQgSSBzdGlsbCBsaXZlIGluIEJlbGxldnVlLiBJbiB0aGUgdGltZSBiZXR3ZWVuIGFuIGFmdGVybm9vbidzIHdvcnRoIG9mIHRoaXMgY2xhc3MgYW5kIHN0YXlpbmcgYmVoaW5kIGFmdGVyLCB0aGUgcmFpbiB0aGF0IG15IHBhcnRuZXIgaG9wZWQgc2lnbmFsZWQgYSBicmVhayBmcm9tIHRoZSBzbm93IGhhcyB0dXJuZWQgdG8gaGFpbC48L3A+XHJcbiAgICA8cD5JIGNoZWNrIHRoZSB3aW5kb3cuIEkgY29tZSBiYWNrLiBJJ20gc29ycnkgaWYgdGhlcmUncyBiYWNrZ3JvdW5kIG5vaXNlLCBJIHNheSB0byBteSBpbnN0cnVjdG9yLiBJdCdzIGhhaWwuPC9wPlxyXG4gICAgPHA+VGhlcmUncyBhIHBhcnRpY3VsYXIgc29ydCBvZiBzbWlsZSBJJ20gZmFtaWxpYXIgd2l0aCwgd2hlbiBwZW9wbGUgYXJlIHRyeWluZyB0byB0b25lIGRvd24gdGhlIGltcGFjdCBvZiB0YWxraW5nIGFib3V0IHRoZSB3ZWF0aGVyLiBJdCdzIHRoZXJlIHdoZW4gaGUgc2F5cyBpdCdzIG5vdCBzdXBwb3NlZCB0byBoYWlsLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI0KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBmaW5kIG15c2VsZiB3aXNoaW5nIEknZCBnb25lIG91dHNpZGUgaW4gdGltZSBmb3IgdGhlIGhhaWwuIEl0J3Mgbm90IGEgdGV4dHVyZSBvZiBpY2UgZm91bmQgbXVjaCBlbHNld2hlcmUsIGFuZCBoYXNuJ3QgZ290dGVuIG9sZCBmb3IgbWUgeWV0OyBJIGxpa2UgdG8gZWF0IGl0LjwvcD5cclxuICAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgICA8cD4oV2hlbiBpdCBzbm93ZWQsIG15IGRhZCB3YXMgZGlzYXBwb2ludGVkIHRoYXQgSSBkaWRuJ3QsIGhpcyB3b3JkcywgZ28gcGxheSBpbiB0aGUgc25vdy4gU28gd2FzIEksIGFkbWl0dGVkbHkuIEkgdGhvdWdodDogdGhlcmUgd2lsbCBiZSBtb3JlIHNub3cgbmV4dCB5ZWFyLiBJIHdpbGwgZG8gYmV0dGVyIGJ5IG15c2VsZiBuZXh0IHllYXIsIEkgdGhpbmsuKTwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk1Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGZpcnN0IHN1bW1lciBJJ20gc2V0dGxlZCBlbm91Z2ggaW4gU2VhdHRsZSB0byBiZSBhd2FyZSBvZiBtdWNoIG9mIGFueXRoaW5nLCBDYWxpZm9ybmlhIGlzIG9uIGZpcmUuIEkgYW0gZ2l2ZW4gdG8gdW5kZXJzdGFuZCB0aGF0IHRoaXMgaXMgbmV3LiBBc2ggZmFsbHMgbGlrZSBzbm93LCBvciBsaWtlIGEgQ29sZCBXYXIgZXJhIG51Y2xlYXIgUFNBLiBBIGZyaWVuZCBncm93aW5nIHVwIGlzIHZpc2l0aW5nIGJ1dCBJIGNhbid0IGRvIG11Y2ggbW9yZSB0aGFuIG1ha2UgaXQgZnJvbSB0aGUgY291Y2ggdG8gYW5vdGhlciBzaWRlIG9mIHRoZSByb29tLiA8L3A+XHJcbiAgICA8cD5XZSBkbyBtYW5hZ2UgdG8gZ28gdG8gdGhlIGdsYXNzIHNjdWxwdHVyZSBnYXJkZW4uIEkgdHJ5IHRvIHRha2UgcGhvdG9zLiBNeSBwaG9uZSBjYW4gY2FwdHVyZSB0aGUgY29sb3JzIG9mIHRoZSBnbGFzcyB1bmRlciBhbGllbiBsaWdodCwgb3IgaXQgY2FuIGNhcHR1cmUgdGhlIGdyYXkgc2t5IGFuZCByZWQgc3VuLiBJdCBkb2VzIG5vdCBrbm93IGhvdyB0byBtYWtlIHNlbnNlIG9mIHRoZSB0d28gb2YgdGhlbSB0b2dldGhlci48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyLCBteSBmcmllbmQsIGFuZCBJIHRhbGsgYWJvdXQgaG93IGNvb2wgaXQgd291bGQgYmUgdG8gY29tZSB1cCB3aXRoIGEgc2hvcnQgc3Rvcnkgd2hlcmUgSSBjb3VsZCB1c2UgdGhlIHBob3RvcyBJIGRpZCBnZXQgYXMgaWxsdXN0cmF0aW9ucy4gRXZlbiBpZiBJIGNhbid0IGNhcHR1cmUgdGhlIHdob2xlIG9mIGl0LCBpdCdzIHN0cmlraW5nLiBJdCB3b3VsZCBiZSBuaWNlIHRvIGdldCBzb21ldGhpbmcgb3V0IG9mIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBnZXQgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTcnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGdldCBiZXR0ZXIgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+WWVhcnMgbGF0ZXIsIGluIHRoZSBwYW5kZW1pYywgSSBhbHJlYWR5IG93biByZXNwaXJhdG9ycy4gSSB0YWtlIHRoZSBvcHBvcnR1bml0eSwgcGVyaW9kaWNhbGx5LCB0byBnZXQgYmV0dGVyIG9uZXMuIFRoZXJlJ3MgYSBwb3N0YWwgc3lzdGVtOyBJIGNhbiBkbyB0aGF0LiBJIGFtIGFsbCBidXQgdXNlZCB0byB0aGUgbWFpbC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5OSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IHNlY29uZCB3ZWVrIGluIE9oaW8sIEkgd2FudGVkIHRvIHNlbmQgYSBsZXR0ZXIgdG8gYSBmcmllbmQuIE15IFJBIGhhZCB0byB0ZWFjaCBtZSBob3cgdG8gYWRkcmVzcyBhbiBlbnZlbG9wZS4gSXQgc3RydWNrIG1lIGFzIHNvcmNlcnkgZm9yIHllYXJzOiB0byBvcmRlciB0aGluZ3MgYW5kIGhhdmUgdGhlbSBjb21lIHRvIHlvdS4gUmVzb3VyY2VzIGZsb3cgdG93YXJkcyBlbXBpcmVzLCBJIGtuZXcgd2hlbiBJIHdhcyBzaXg7IHBlb3BsZSBnbyB3aGVyZSB0aGUgcmVzb3VyY2VzIGFyZSwgSSB0ZWxsIHBlb3BsZSBhdCB0d2VudHktc2l4LCBmZWVsaW5ncyB0b3dhcmRzIHRoZSBlbXBpcmUgYXJlIGlycmVsZXZhbnQuIEJ1dCBvbiB0aGUgcGVyc29uYWwgbGV2ZWwtLXRoZXJlIHdhcyBzb21ldGhpbmcgbWFnaWMgaW4gc3VjaCByb2FkcyBsZWFkaW5nIHRvd2FyZHMgbWUuIFRoZSBmaXJzdCB0aGluZyBJIGJvdWdodCB3aXRoIG15IGNvbGxlZ2UgYWRkcmVzcyB3YXMgYSBjYW5lLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBwYXJ0bmVyIGFuZCBJIGhhdmUgYW4gYXJndW1lbnQgYWJvdXQgdGhlIGNvbmNlcHQgb2Ygc3dpbW1pbmcgYmVhY2hlczsgZm9yIHRoZSBzYWtlIG9mIHRoaXMgYXJndW1lbnQsIGxldCdzIHNheSBJIGFtIHR3ZW50eS10d28uIEhpcyBvY2VhbiBpcyB0aGUgUHVnZXQgU291bmQ6IGEgdGFtZSwgY29vbCBsaXR0bGUgdGhpbmcgdGhhdCBJIGtub3cgZnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgYnJpZGdlcywgd2l0aCBnbGFzc3kgZmxhdHMgYW5kIG5pYmJsaW5nIHdhdmVzLiBXZSBhcmUgZGlzY3Vzc2luZyB3aHkgY2hhcmFjdGVycyBpbiBhIHZpZGVvIGdhbWUgd291bGQgcGljayB1cCBhbmQgbGVhdmUgdGhlaXIgc2VjdGlvbiBvZiBhIGNvYXN0bGluZSB0byBzd2ltIHNvbWV3aGVyZSBlbHNlLjwvcD5cclxuICAgIDxwPlByZXN1bWFibHkgaXQncyB3aGVyZSB0aGUgc3dpbW1pbmcgYmVhY2hlcyBhcmUsIEkgc2F5LjwvcD5cclxuICAgIDxwPldoYXQgZG8geW91IG1lYW4gc3dpbW1pbmcgYmVhY2gsIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+QmVhY2hlcyB3aGVyZSBpdCdzIHNhZmUgdG8gc3dpbSwgSSBzYXksIGltcGF0aWVudGx5LiBXaXRoaW4gcmVhc29uLjwvcD5cclxuICAgIDxwPlRoZSByZXN1bHRpbmcgbG9uZyBhbmQgaGFsdGluZyBjb252ZXJzYXRpb24sIHJlbmRlcmVkIGFuIGFyZ3VtZW50IGJ5IGxhY2sgb2YgYW55IHVuaXZlcnNlIG9mIGNvbW1vbiByZWZlcmVuY2UsIGlzIGN1dCBzaG9ydCB3aGVuIGhpcyBtb3RoZXIgdGVsbHMgaGltIHRoYXQgdGhlaXIgZmFtaWx5IHZpc2l0ZWQgbmVhciBteSBob21ldG93biBiZWZvcmUgaGUnZCBiZSBhYmxlIHRvIHJlbWVtYmVyLiBBdCBhIHRvdXJpc3RzJyBiZWFjaCBoaXMgZ3JhbmRmYXRoZXIgdHVybmVkIGhpcyBiYWNrIG9uIHRoZSB3YXRlciBhbmQsIHdoZW4gaGUgd2VudCBmbHlpbmcgYWNjb3JkaW5nbHksIGxvc3QgYSBwYWlyIG9mIGRlbnR1cmVzLjwvcD5cclxuICAgIDxwPlNlZSwgSSBzYXkuIE5vcm1hbCBvY2Vhbi4gWW91IGRvbid0IHR1cm4geW91ciBiYWNrIG9uIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2UgaGF2ZSBoYWQgbG9uZyBlbm91Z2ggdG8gZ3JvdyBhY2N1c3RvbWVkIHRvIG9uZSBhbm90aGVyIHRoYXQgSSBzdHJ1Z2dsZSB0byByZW1lbWJlciBvdGhlciBkaXNqb2ludHMgb2YgdGhpcyBraW5kLiBUaGVyZSdzIGJlZW4gb3ZlciBoYWxmIGEgZGVjYWRlIHRvIGJ1aWxkIHRoZSBuZWNlc3NhcnkgY29uY2VwdHVhbCBicmlkZ2VzLiBPZnRlbiBlbm91Z2gsIHdlIHN0aWxsIGhhdmUgbW9tZW50cyB0aGF0IG1ha2UgaGltIHNheSwgU29tZXRpbWVzIEkgcmVtZW1iZXIgdGhhdCB3ZSBjb21lIGZyb20gZGlmZmVyZW50IHdvcmxkcy4gQnV0IHRoZXkgZG9uJ3QgbXVjaCBzcHJpbmcgdG8gbWVtb3J5IHRoZXNlIGRheXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGhhdmUgbWl4ZWQgZmVlbGluZ3Mgb24gcmVmZXJyaW5nIHRvIHByZXBhcmF0b3JpYSBhcyBhIGhpZ2ggc2Nob29sLiBJdCBnaXZlcyBwZW9wbGUgdGhlIGFwcHJveGltYXRlIGlkZWEgdGhhdCB0aGV5IG5lZWQsIGJ1dCBtb3JlIG9mdGVuIHRoYW4gbm90IEkgZmluZCBJIHdhbnQgdGhlIGFsaWVuYXRpb247IEknbSBqdXN0IG5vdCBlbnRpcmVseSBzdXJlIHdoZW4gSSBtYW5hZ2UgdGhhdCB2ZXJzdXMgYWN0dWFsIGluY29tcHJlaGVuc2lvbi4gQW5kIEkgZG9uJ3Qgd2FudCB0aGUgbGF0dGVyOyB0aGF0IGRlZmVhdHMgdGhlIHBvaW50LiBJIHB1dCBmYXIgdG9vIG11Y2ggZWZmb3J0IGludG8gdHJhbnNsYXRpb24gdGhhbiB0aGF0LjwvcD5cclxuICAgIDxwPkxldCdzIGJvdyB0byBhdWRpZW5jZSBhbmQgc2F5IEknbSBpbiBoaWdoIHNjaG9vbCwgZm9yIHRoaXMgb25lLiBJJ3ZlIGhhZCB0byBtb3ZlIHRvIHRoZSBjYXBpdGFsIG9mIHRoZSBzdGF0ZS0tZHVyaW5nIHRoZSB3ZWVrOyBzcGxpdHRpbmcgY3VzdG9keSB3aWxsIGRvIHRoZXNlIHRoaW5ncyB0byB5b3UtLWZvciBpdC4gSSdtIGEgc2Nob2xhcnNoaXAgc3R1ZGVudCBhdCBhIHByaXZhdGUgc2Nob29sLCBmb3IgcmVsYXRlZCByZWFzb25zLiBBdCB0aGlzIGdyYWRlIGxldmVsIGluIG15IGhvbWV0b3duIHRoZXJlJ3Mgb25seSB2b2NhdGlvbmFsIHNjaG9vbGluZywgYW5kIGl0J3Mgbm90IG1hbmRhdG9yeSBhbnl3YXkuIEZvciB0aGUgZmlyc3QgdGltZSBpbiBteSBsaWZlLGFzIGEgcmVzdWx0LCBJIGFtIG5vdCBpbiB0aGUgcHVibGljIHNjaG9vbCBzeXN0ZW0uPC9wPlxyXG4gICAgPHA+KE9uZSBlYXJseSBtZWFuaW5nIG9mIHRoaXMgaXMgdGhhdCB0aGUgc2Nob29sIGlzIGFpciBjb25kaXRpb25lZCwgd2hpY2ggaXQgZG9lcyBub3Qgb2NjdXIgdG8gbWUgdG8gcGFjayBmb3IgbXkgZmlyc3Qgd2VlayB0aGVyZS4gSSB0dXJuIGZpZnRlZW4gYW5kIG15IHRlZXRoIGFyZSBjaGF0dGVyaW5nIGF0IHRoZSBjb250cmFzdCBmb3IgaGFsZiB0aGUgZGF5LCB1bnRpbCBhIGNsYXNzbWF0ZSBpbmNyZWR1bG91c2x5IGxlbmRzIG1lIGhpcyBqYWNrZXQuKTwvcD5cclxuICAgIDxwPldlIGFyZSB3YXRjaGluZyBhIG1vdmllIGluIG9uZSBvZiB0aGUgdGhyb3dhd2F5IGNsYXNzZXMgd2hvc2UgcmVkZWVtaW5nIGZlYXR1cmVzIGFyZSBnZW5lcmFsbHkgbW92aWVzLCB3aGVuIHRoZSBwcm90YWdvbmlzdCBydW5zIG91dCBvbnRvIHRoZSBncmVlbiwgZ3JlZW4gbGF3biBvZiBzb21lIGZhbW91cyBjb2xsZWdlJ3Mgb2xkIEFtZXJpY2FuIGJ1aWxkaW5nLjwvcD5cclxuICAgIDxwPlRoZSBtZXRhbCByb29mIG9mIG15IGhpZ2ggc2Nob29sJ3MgbmV3IGJ1aWxkaW5nIChpZiB3ZSBjYWxsIGl0IGEgaGlnaCBzY2hvb2wsIGFwcHJveGltYXRpbmcpIHJhdHRsZXMgd2hlbiBpdCByYWlucywgYWx0aG91Z2ggaXQncyBub3QgY3VycmVudGx5IHJhaW5pbmcuPC9wPlxyXG4gICAgPHA+T25lIG9mIG15IGNsYXNzbWF0ZXMgcG9pbnRzIGFuZCBzYXlzLCBpbiBtdWNoIHRoZSBzYW1lIHRvbmUgYXMgcGVvcGxlIHN0YXJ0ZWQgY2l0aW5nIDxpPmxhIGNyaXNpczwvaT4gd2hlbiB0aGUgQW1lcmljYW4gcmVjZXNzaW9uIG1lYW50IHRoZXkgc3RvcHBlZCBleHBvcnRpbmcgb3VyIGVjb25vbXkncyB3b3J0aCBvZiB0b3VyaXN0cywgdGhhdCB3ZSBzaGVsbCBvdXQgc28gbXVjaCBmb3IgdHVpdGlvbiwgc28gd2h5IGRvZXNuJ3Qgb3VyIHNjaG9vbCBsb29rIGxpa2UgdGhhdD88L3A+XHJcbiAgICA8cD5UaGUgdGVhY2hlciBjb3VsZCBjb21tZW50IG9uIGhpc3RvcnksIGFuZCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgYSBuZXcgYnVpbGRpbmcuIFNoZSBjb3VsZCBjb21lbW50LCBldmVuLCBvbiBlbnZpcm9ubWVudDsgd2UgaGF2ZSBhbiBlbnZpcm9ubWVudGFsaXN0IGNvbXBvbmVudCBpbiBhbm90aGVyIGNsYXNzLCBhZ2dyZXNzaXZlbHkgdGhlbWVkIGFyb3VuZCBtYW5ncm92ZSBwcmVzZXJ2YXRpb24uPC9wPlxyXG4gICAgPHA+VGhpcyBpcyBub3QgdGhlIHNvcnQgb2YgcGVyc29uIHNoZSBpczsgc2hlIGlzIHRoZSBzb3J0IG9mIHBlcnNvbiB3aG8gdGVsbHMgcGFyYWJsZXMgYWJvdXQgdGhlIGZ1bmRhbWVudGFsIGRpZmZlcmVuY2VzIGluIGJlaGF2aW9yIGJldHdlZW4gYnVja2V0cyBvZiBNZXhpY2FuIGFuZCBBbWVyaWNhbiBjcmFicy48L3A+XHJcbiAgICA8cD5TbyB3aGF0IHNoZSBzYXlzIGlzIHRydWUgdG8gZm9ybTogc2hlIHNheXMsIHRoYXQncyBiZWNhdXNlIHdlIGxpdmUgaW4gYSB0aGlyZCB3b3JsZCBjb3VudHJ5LCBkZWFyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkzJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgZWlnaHRlZW4sIEkgaGF2ZSBub3QgeWV0IGxlYXJuZWQgdGhhdCwgd2hlbiBzb21lb25lIHRlbGxzIG1lIHRoZXkgZG9uJ3Qgc3BlYWsgU3BhbmlzaCwgdGhleSBtZWFuIHRoYXQgdGhleSBzcGVhayBubyBTcGFuaXNoLiBNZXhpY28gbWFuZGF0ZXMgZm9yZWlnbiBsYW5ndWFnZSBlZHVjYXRpb24gYWZ0ZXIgc2l4dGggZ3JhZGU7IEkgaGVhciBhYm91dCBwZW9wbGUgd2hvc2Ugc2Nob29scyBhcmUgbGFyZ2UgYW5kIHVyYmFuIGFuZCBtb25pZWQgZW5vdWdoIHRvIGhhdmUgY2hvaWNlcyBvZiBsYW5ndWFnZXMsIGJ1dCBldmVyeW9uZSBoYXMgdGhlIG9wdGlvbiBvZiBFbmdsaXNoLiBUaGVyZSBhcmUgZml2ZSB0aG91c2FuZCBwZW9wbGUgaW4gbXkgdG93biBhbmQgc2l4IGh1bmRyZWQgdGhvdXNhbmQgaW4gbXkgc3RhdGUuIFRoZSBvbmx5IG9wdGlvbiBpcyBFbmdsaXNoLiA8L3A+XHJcbiAgICA8cD5UaGUgb25seSBvcHRpb24gd2FzIEVuZ2xpc2ggbG9uZyBiZWZvcmUgdGhhdCwgYW55d2F5OyB3aGVuIHRoZSBtb25leSBhbmQgdGhlIG1lZGlhIGFuZCB0aGUgc2hpcHBpbmcgY29tZXMgaW4gb25lIGxhbmd1YWdlLCB5b3UgcGljayBpdCB1cC4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGVyZSdzIGEgc3BlY2lmaWMgZ2VuZXJhdGlvbiBvZiBTcGFuaXNoLUVuZ2xpc2ggc2xhbmcgSSBoYXZlIHRoYXQgSSBzdXNwZWN0IGlzIGRlYWQgYnkgbm93LiBJdCdzIGEgbWlkcG9pbnQ6IHZvY2FidWxhcnkgd2l0aG91dCBncmFtbWFyLCBrZXl3b3JkcyB3aXRob3V0IGNvbXByZWhlbnNpb24uIEhvdCBkb2dzIHZhcnkgd2lsZGx5IGJldHdlZW4gY291bnRyaWVzLCBhbmQsIHdpdGhpbiBNZXhpY28tLW5vdCB0aGF0IHlvdSdsbCBrbm93IHRoaXMgb25saW5lLS1iZXR3ZWVuIHN0YXRlcywgYW5kIHRodXMgSSBhbSBhcyBjb21taXR0ZWQgYXMgeW91IG1pZ2h0IGV4cGVjdCB0byB0aGUgYXJndW1lbnQgdGhhdCBubyBvbmUgZWxzZSBtYWtlcyB0aGVtIHJpZ2h0OyBhcyBzdWNoLCBJIGhhdmVuJ3QgaGFkIGEgaG90IGRvZyBzaW5jZSBJIHdhcyBlaWdodGVlbi4gPC9wPlxyXG4gICAgPHA+VGhlIGNhcnQgd2hlcmUgbXkgZmF0aGVyIGFuZCBJIHdlcmUgcmVndWxhcnMgaGFkIGEgaHVycmljYW5lIGxhbXAgd2l0aCBubyBnbGFzcywgZm9yIGEgd2hpbGUsIGFuZCBJIGxpa2VkIHN0YW5kaW5nIGNsb3NlIGVub3VnaCB0byB0aGUgY29va2luZyBzdXJmYWNlIHRvIGdldCB0aGUgdGluaWVzdCBwaXR0ZXItcGF0dGVyIG9mIGhvdCBvaWwgb24gbXkgYXJtcy4gPGk+SGF0ZXMgRWwgR1x1MDBGQ2VybzwvaT4sIHBhaW50ZWQgb24gdGhlIHdoaXRlIHN1cmZhY2UgYnkgdGhlIGtpbmQgb2YgZHJhZnRzbWFuIEkgd2FzIHRyYWluZWQgdG8gYmUgaW4gc2VjdW5kYXJpYSBhbmQgd2hvc2UgcHJvZmVzc2lvbiBoYXNuJ3QgZXhpc3RlZCBpbiB0aGUgbm9ydGggZm9yIGdlbmVyYXRpb25zOiB0aGUgPGk+aG90IGRvZzwvaT4gd2FzIGltcG9ydGVkIGJlZm9yZSB0aGUgRW5nbGlzaCBhZGplY3RpdmUtbm91biBvcmRlciBjb3VsZCBmb2xsb3cgc3VpdC48L3A+XHJcbiAgICA8cD5Bbm90aGVyIHdvcmQgSSB1c2UgYXMgYW4gZXhhbXBsZTogPGk+bWFjaFx1MDBFRG48L2k+LCBhbiBhbGwtcHVycG9zZSBpbnRlbnNpZmllci4gV2hlbiBFbmdsaXNoIGJyb3VnaHQgPGk+bWFjaGluZTwvaT5zIHRoZSBjbGVhcmVzdCBwb2ludCBvZiByZWZlcmVuY2UgaW4gY29tbW9uICBmb3IgdGhlIHJlZmVyZW50cyBvZiB0aGUgd29yZCB3YXM6IG1vcmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JbmR1c3RyaWFsaXphdGlvbiB0cmlja2xlcyBkb3duLiBFbWlzc2lvbnMgdHJpY2tsZSBkb3duLiBDbGltYXRlIGNoYW5nZSByZWFjaGVzIHVwLCBkcmlmdHMsIGxpa2UgQ2FsaWZvcm5pYSBzbW9rZSwgbGlrZSBpdCdzIGRvZ2dpbmcgbXkgZm9vdHN0ZXBzLiBMaWtlIGl0IHdhbnRzIHRvIGRvIGFueW9uZSdzIGFiaWxpdHkgdG8gdGFsayB0aGUgYmlnIHBpY3R1cmUgb3V0IHRoZSBvcHBvc2l0ZSBvZiBhbnkgZmF2b3JzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlcmUgaXMgYW4gYXJndW1lbnQgYWJvdXQgbWF5b25uYWlzZSBJIGhhdmUgd2hlbmV2ZXIgSSBjYW4uIEFtZXJpY2FucywgYXMgYSBuYXRpb25hbCBwYXN0aW1lLCBlbmpveSB0YWtpbmcgY3JlZGl0IGZvciB0aGUgY29uY2VwdCBhbmQgdGhlbiBtb25vbG9ndWluZyBhYm91dCBob3cgbXVjaCB0aGV5IGhhdGUgaXQuIFRoZXJlIGlzIGEgZ2VuZXJhbCBhdHRlbXB0IHRvIGVzdGFibGlzaCBpdCBhcyBzeW5vbnltb3VzIHdpdGggd2hpdGVuZXNzIGluIHRoZSByYWNpYWwgc2Vuc2UgYXMgb3Bwb3NlZCB0byB0aGUgdmlzdWFsIG9uZS4gSSBkb24ndCBrbm93IHdobyBiZW5lZml0cyBmcm9tIHRoYXQsIGJ1dCBpdCBtYWtlcyB0aGUgcHJlYW1ibGUgdG8gRW5nbGlzaC1sYW5ndWFnZSByZWNpcGVzIGZvciBKYXBhbmVzZSBwYW5jYWtlcyBleGhhdXN0aW5nLjwvcD5cclxuICAgIDxwPkkgaGF2ZSBzcGVudCB5ZWFycyBpdGVyYXRpbmcgb24gdGhlIGFyZ3VtZW50IHRoaXMgbWVhbnMgaGF2aW5nLCB3aGVuIEkgY2FuIGJvdGhlci4gTWF5b25uYWlzZSBpcyBjb21tb24gd2hlcmUgSSdtIGZyb20sIGluIHRoZSBkZXNlcnQ6IG1peGVkIHdpdGggbWlsayBhcyBhIGZhdCBmb3IgZnJ5aW5nIGFuZCBhIHRvcHBpbmcgZm9yIHNlZW1pbmdseSBoYWxmIG9mIGFsbCBzYXZvcnkgZGlzaGVzIHlvdSBjYW4gc2hha2UgYSBzcXVpcnQgYm90dGxlIGF0IGl0LjwvcD5cclxuICAgIDxwPlRoYXQncyBkaXNndXN0aW5nLCBwZW9wbGUgdGVsbCBtZSBpbiBFbmdsaXNoLCBhbmQgdGhleSB3b3VsZCBsaWtlIHRvIGJsYW1lIGEgd2hpdGUgcGVyc29uIGZvciBpdC48L3A+XHJcbiAgICA8cD5NYXlvbm5haXNlIGlzIGEgc2hlbGYtc3RhYmxlIGVtdWxzaW9uIG9mIGVnZ3MgYW5kIG9pbCwgSSB0ZWxsIHRoZW0uIFdobyBvbiBFYXJ0aCBoYXMgdGhlIHJlZnJpZ2VyYXRlZCB0cnVja3MgdG8gd2FzdGUgb24gdGhlIGFsdGVybmF0aXZlLiBJcyB0aGF0IHJlYWxseSB0aGVpciBwcmVmZXJyZWQgcmVzb3VyY2UgYWxsb2NhdGlvbi4gSXMgdGhhdCBzb21ldGhpbmcgdGhleSBjb25zaWRlciB3b3J0aHdoaWxlIGZvciBhIHBpZWNlIG9mIHN5bWJvbGlzbSB0aGV5IG1hZGUgdXAuPC9wPlxyXG4gICAgPHA+VGhpcyBkb2VzIG5vdCBhY3R1YWxseSBlbmQgYXJndW1lbnRzOyBmb3Igb25lIHRoaW5nLCBpdCByZXF1aXJlcyBhbiB1bmRlcnN0YW5kaW5nIG9mIGhvdyBoYXJkIGEgcmVmcmlnZXJhdGVkIHRydWNrIGhhcyB0byB3b3JrIGZvciAoc2F5KSBhIHRob3VzYW5kIG1pbGVzIG9mIGRlc2VydCBkdWUgc291dGggb24gdGhlIEhpZ2h3YXkgT25lIGFzIEkga25vdyBpdC4gRm9yIGFub3RoZXIsIGl0IHJlcXVpcmVzIGFuIHVuZGVybHlpbmcgdW5kZXJzdGFuZGluZyBvZiByZWZyaWdlcmF0aW9uLCBhbmQgdHJ1Y2tzLCBhbmQgcmVmcmlnZXJhdGVkIHRydWNrcywgYXMgbGltaXRlZCByZXNvdXJjZXMgdG8gYmVnaW4gd2l0aC4gPC9wPlxyXG4gICAgPHA+QnV0IGl0IGRvZXMgc29tZXRpbWVzIG1ha2UgaXQgbW9yZSB0b2xlcmFibGUgdG8gbGl2ZSB3aXRoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk3Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBubyBvbGRlciB0aGFuIGVsZXZlbiB5ZWFycyBvbGQsIGFuZCBJIGFtIGF0dGVtcHRpbmcsIGFzIEkgb2Z0ZW4gZG8sIHRvIGlnbm9yZSBteSBtb3RoZXIuIFRoZXJlIGlzIGEgY3V0dGluZyBxdWFsaXR5IHRvIGhlciB2b2ljZSwgYW5kIG15IGJyYWluIGlzIHR1bmVkIHRvIGl0IG1lYW5pbmcgZGFuZ2VyOyBzbywgYXMgSSBhbHNvIG9mdGVuIGRvLCBJIGFtIGZhaWxpbmcuIEkgd291bGQgYmUgZG9pbmcgYmV0dGVyLCBidXQgSSBhbSB3YWl0aW5nIGZvciBoZXIgaW4gdGhlIGNhciAodHJ1Y2s7IGl0IHdpbGwgdGFrZSBhdCBsZWFzdCBhIGRlY2FkZSBmb3IgbWUgdG8gdW5kZXJzdGFuZCB0aGF0IHRydWNrcyBhcmUgc3VwcG9zZWRseSBub3QgY2FycyksIGFuZCBJIGhhdmUgcnVuIG91dCBvZiBib29rcyB0byBkbyBpdCB3aXRoLiA8L3A+XHJcbiAgICA8cD4oVGhlcmUgYXJlIG5vdCByZWxldmFudCBtb2JpbGUgZGV2aWNlcyBpbiBteSBsaWZlIHlldDsgd2hlbiBJIGxlYXZlIHRoZSBob3VzZSwgSSBkbyBzbyB3aXRoIG9uZSBvciBtb3JlIGJvb2tzLiBBcyBteSBmYXRoZXIgcHV0cyBpdCwgYmFkIHRoaW5ncyBoYXBwZW4gd2hlbiB5b3UgbGVhdmUgdGhlIGhvdXNlIHdpdGhvdXQgYSBib29rLiBJZiB3ZSdyZSBnb2luZyB0byBhIGNpdHksIEkgZG8gc28gd2l0aCBhIHN0YWNrIGluIHRoZSBmb290d2VsbC4gU29tZXRpbWVzLCBhcyBub3csIEkgc3RpbGwgdW5kZXJlc3RpbWF0ZSB3aGF0IGNvdWxkIGJlIGVub3VnaC4pPC9wPlxyXG4gICAgPHA+TXkgbW90aGVyIGlzIGJ1eWluZyBhbGZhbGZhIGZvciBob3JzZXMsIHB1bGxlZCBvdmVyIGJ5IHRoZSBzaWRlIG9mIHRoZSByb2FkIHdoZXJlIHNoZSdzIG1ldCBhIG1hbiB3aXRoIGFuIGVpZ2h0ZWVuLXdoZWVsZXIgc3RhY2tlZCB3aXRoIGl0LiBJIHdpbGwgcmVhbGl6ZSwgbXVjaCBsYXRlciwgdGhhdCB0aGlzIHdhcyBwcm9iYWJseSBzb21lIGxldmVsIG9mIGNhc2ggdW5kZXIgdGhlIHRhYmxlOyBpdCB3aWxsIG5vdCBvY2N1ciB0byBtZSB1bnRpbCBhZHVsdGhvb2QgdGhhdCB0aGUgdHJ1Y2tlcnMgYnJvdWdodCB0aGUgcmVzdCBvZiB0aGUgYmFsZXMgdG8gc3RvcmVzLCB3aGVyZSBwcmVzdW1hYmx5IHBlb3BsZSB3b3VsZCBwYXkgZm9yIHRoZW0uIE15IGNvbnRleHQgaXMganVzdCB0aGlzOiB0aGUgZHVzdHkgc2lkZSBvZiBhIHJvYWQsIGEgcGlja3VwIHRydWNrLCBhIGZsYXRiZWQgZnVsbCBvZiByZWN0YW5ndWxhciBwcmlzbXMgdGhhdCwgbW9yZSBhbmQgbW9yZSBvZnRlbiwgYXJlIG5vdCB0aGUgcmlnaHQgc2hhZGUgb2YgZ3JlZW4uPC9wPlxyXG4gICAgPHA+U2hlIGRlbWFuZHMgaGUgbGV0IGhlciBicmVhayBvcGVuIGEgYmFsZSBmb3IgaW5zcGVjdGlvbiwgYW5kIHRoZW4gZmluZHMgd2hhdCBzaGUgYW50aWNpcGF0ZWQuIFRoaXMgaXMgZHJ5LCBzaGUgc2F5cywgb2YgdGhlIHN0aWZmIHllbGxvdyBvdXRzaWRlOyB0aGlzIGlzIHdldCwgb2YgdGhlIHBsaWFibGUgZ3JlZW4gaW5zaWRlLCB0b28gd2F0ZXItZGFyay4gVGhleSBoYXZlIHBpY2tlZCBhbmQgYmFsZWQgaXQgdG9vIHNvb24uIEl0J3MgZ29pbmcgdG8gcm90LjwvcD5cclxuICAgIDxwPlRoZSBtYW4gc2F5cyBpdCdzIHdoYXQgaGUgaGFzLCB3aGljaCBpcyBvYnZpb3VzbHkgdHJ1ZS4gSXQncyBhYm91dCB0aGUgZm9yZXNob3J0ZW5pbmcgb2YgdGhlIGdyb3dpbmcgc2Vhc29uOyBkcm91Z2h0IGFuZCBoZWF0IGFuZCBodXJyaWNhbmVzIHRoYXQgY29tZSB3aGVuIHRoZXkncmUgbm90IHN1cHBvc2VkIHRvLCB3aGljaCBpcyB0byBzYXkgdGhlIHNhbWUgdGhpbmcgdGhyaWNlLiBUaGUgc3RlbXMgYW5kIGxlYXZlcyBhcmUgcGFja2VkIGludG8gYmFsZXMgdG9vIGVhcmx5IG9yIHRvbyBsYXRlLiBTaGUncyByaWdodCB0aGF0IHRoZXkgbW9sZGVyLiBIZSdzIHJpZ2h0IHRoYXQgaXQncyBub3QgbGlrZSB0aGUgZmFybSBnYXZlIGhpbSBhbnl0aGluZyBlbHNlLiBJbiBhIGNvdXBsZSBtaW51dGVzIHRoZXknbGwgbW92ZSBvbiB0byBoYWdnbGluZyBhYm91dCBzcGlrZXMgaW4gcHJpY2UuPC9wPlxyXG4gICAgPHA+SSBrbm93IHRoaXMuIEkgcGljayB1cCB0aGUgYm9vayBzaGUncyBicm91Z2h0IHdpdGggaGVyIGZyb20gdGhlIGNlbnRlciBjb25zb2xlLCB0byBzZWUgaWYgSSBjYW4gdHVuZSB0aGUgb25nb2luZyBuZWdvdGlhdGlvbnMgYmV0dGVyIHJlYWRpbmcgaXQuIFRoZSBjaGFuZ2Ugb2Ygc2Vhc29ucyBpcyB0ZW4geWVhcnMgb3V0IGZyb20gY29taW5nIE5vcnRoIGVub3VnaCB0byBtYWtlIHRoZSBuZXdzLCB0aG91Z2ggdGhleSBpbmV2aXRhYmx5IGRvLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgdHdlbnR5LWZpdmUgSSBwaWN0dXJlIHRoZSBoZWF0IGRvbWUgb3ZlciBLaW5nIENvdW50eSBsaXRlcmFsbHkgZW5vdWdoOiBsaWtlIGEgZ3JlYXQgaGFuZCBoYXMgcmVhY2hlZCBvdmVyIGFuZCBkZWxpY2F0ZWx5IHBsYWNlZCBhIGdsYXNzIHBvdCBsaWQgb3ZlciB0aGUgbGFuZCwgd2l0aCBhbGwgdGhlIGNhcHR1cmVkIHN0ZWFtIHRoYXQgZW50YWlscy4gPC9wPlxyXG4gICAgPHA+SXQgaGFzIGNvbWUgdG8gbXkgYXR0ZW50aW9uIHRoYXQgbm8gb25lIGhlcmUgYnVpbHQgY2VpbGluZyBmYW5zIGludG8gdGhlaXIgaG91c2VzLiBJIGRvdWJsZSB0aGUgbnVtYmVyIG9mIGZhbnMgaW4gb3VyIGFwYXJ0bWVudCwgbWF0dGVyIG9mIGZhY3Q7IHRoZW4gSSB0cmlwbGUgaXQuIEkgcnVuIHNsaWdodGx5IGJ1dCBjcnVjaWFsbHkgYWhlYWQgb2YgdGhlIHN1YnNlcXVlbnQgcnVuIG9uIGZhbnMgaW4gc3RvcmVzLCB3aGVuIHBlb3BsZSB1bmRlcnN0YW5kIHdoYXQncyBnb2luZyBvbiBhcm91bmQgdGhlbS48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyJ3MgcGFyZW50cycgaG91c2UgaGFzIGFpciBjb25kaXRpb25pbmcuIEhpcyBtb3RoZXIgcG9pbnRzIG91dCB0aGF0IHRoaXMgcHV0cyB0aGVtIGluIGEgdGhpcmQgb2YgU2VhdHRsZSBhcmVhIHJlc2lkZW5jZXMuIEhlIGFuZCBJIGFuZCBoaXMgc2lzdGVyIHZpc2l0LCBpbiBzb21lIGRlc3BlcmF0aW9uOiB0aHJlZSBob3VzZWhvbGRzIHRvdGFsLCBwcm9wb3J0aW9uYXRlLiBUaGV5IGRvIG5vdCBoYXZlIGZhbnM7IEkgYW0gYmFmZmxlZC4gVGhpcyBpcyB3aGVuIEkgbm90aWNlIHRoYXQgdGhleSBkb24ndCBoYXZlIGEgY2VpbGluZyBmYW4uIEkgdHJ5IHRvIGJlIG1vcmUgb2JzZXJ2YW50IHRoYW4gdGhhdCwgYnV0IGl0IGhhZG4ndCBvY2N1cnJlZCB0byBtZSB0byBzZWUgYSBjZWlsaW5nIHdpdGhvdXQgb25lLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkga25vdyB0aGVzZSB0ZW1wZXJhdHVyZXMgdGhlIHdheSBteSBsb3ZlZCBvbmVzIGRvIG5vdCwgYnV0IEkgZGlkbid0IGxpa2UgdGhlbSBhbnkgYmV0dGVyIHdoZW4gSSB3YXMgeW91bmdlci4gSSB3ZWFyIG1vcmUgbGF5ZXJzIG5vdywgYnkgbWVkaWNhbCBuZWNlc3NpdHksIGFuZCBhbSBsZXNzIGFjY2xpbWF0ZWQsIHRyYWRpbmcgdGhlIHBsYWNpZCByZXNpZ25hdGlvbiB0byBzdW1tZXIgY29tbXV0ZXMgYXQgMTIwRiAodGhlIGNhciBoYWQgYnJva2VuLCBteSBmaXJzdCBzdW1tZXIgaW4gcGVyaGFwcy1oaWdoIHNjaG9vbCwgaW4gc3VjaCBhIHdheSBhcyBtZWFudCBvbmUgaGFkIHRvIHJ1biB0aGUgaGVhdGVyIGluIG9yZGVyIHRvIGlkbGUgaXQsIHdoaWNoIGRpZG4ndCBoZWxwKSBmb3IgdG9sZXJhdGluZyBzbm93LiBUaGUgdXBzaG90IGlzIHRoYXQgSSBhbSBtb3JlIGZ1bmN0aW9uYWwgYnV0IHBvb3JseSBmdW5jdGlvbmluZzsgSSBkb24ndCByZWFsaXplIHVudGlsIGxhdGVyIHdoeSBJJ20gbm90IGVhdGluZyBvciBzbGVlcGluZywgYW5kIHRoZW4gSSByZW1lbWJlci48L3A+XHJcbiAgICA8cD5JIGFkZCBhaXIgY29uZGl0aW9uaW5nIHRvIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3Igb3VyIG5leHQgYXBhcnRtZW50LCBsb25nIHNob3QgdGhhdCBpdCBpcy4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGVyZSwgZm9yIHRoZSBzZWNvbmQgdGltZTogVHVlc2RheS4gMjAyMi4gRmVicnVhcnkuIEluY3JlYXNpbmdseSBoZWF2eSBzbm93LCB3aGl0ZXIgdGhhbiBteSBwYXJ0bmVyJ3Mga251Y2tsZXMgb24gdGhlIHN0ZWVyaW5nIHdoZWVsLjwvcD5cclxuICAgIDxwPlwiSSBoYXRlIHRoaXMsXCIgaGUgc2F5cywgbm90IGZvciB0aGUgZmlyc3QgdGltZS48L3A+XHJcbiAgICA8cD5cIkl0J3MgYmVhdXRpLS1JJ20gc29ycnksXCIgSSBzYXksIHRvIG15IHBhcnRuZXIsIHdobydzIHRoZSBvbmUgd2hvIGhhcyB0byBkcml2ZSB0aHJvdWdoIGl0LiBBcyB0aGUgdHJlZXMgd2UgcGFzcyBieSBhcmUgcmVuZGVyZWQgaW50byBibGFjayBhbmQgd2hpdGUgc3RyYWlnaHQgbGluZXMsIHJlYWNoaW5nIG91dCB0byBtZS4gXCJJIHN0aWxsIHRoaW5rIGl0J3MgYmVhdXRpZnVsLCBJJ20gc29ycnkuXCIgPC9wPlxyXG4gICAgPHA+VGhlIHVyZ2UgdG8gYXBvbG9naXplIGlzIGJlY2F1c2UgaGUncyBzdHJlc3NlZC4gSSBrbm93IHRoaXMgbWFrZXMgaXQgZGlmZmljdWx0LCBldmVuIHdpdGhvdXQgdGhlIGNvdW50ZXJ3ZWlnaHQgb2YgYSBzd2F0aGUgb2Ygb3VyIGZvcm1lciBhcGFydG1lbnQsIHRvIGRyaXZlLiBJIHNhdyB0aGUgYWR2aXNvcnkgYWJvdXQgYmxhY2sgaWNlIGZpcnN0IGJldHdlZW4gdGhlIHR3byBvZiB1cy4gSSBrbm93IGZpdmUgd2ludGVycyB3b3J0aCBvZiB3aGF0IHNub3cgZG9lcyB0byBTZWF0dGxlLCB3aGVyZSB0aGUgd2ludGVyIHdlYXRoZXIgaXMgbm90IHN1cHBvc2VkIHRvIHNub3cuIDwvcD5cclxuICAgIDxwPkFuZCBiZWNhdXNlIEkgdHJ1c3QgaGltIGVub3VnaCB0byBjb21tZW50IG9uIHRoZSBiZWF1dHksIHRoZSBwb2ludCBvZiB2aWV3IHRoYXQgYmVpbmcgYSBwZXJwZXR1YWwgcGFzc2VuZ2VyIGNhbiBhZmZvcmQgbWUuIEhlIGtub3dzIHdoYXQgaGUgY2hvc2UgdG8gbWFycnk7IEkgY2FuIGFmZm9yZCB0byBibHVydCBvdXQgbXkgZmVlbGluZ3Mgb24gcHJlY2lwaXRhdGlvbi4gSSB0cnkgdG8gbWVtb3JpemUgaXQsIHNub3cgbmVhciBtaWRuaWdodCBpbiBhIG1vdmluZyBjYXIsIGZvciBsYXRlci4gRm9yIHRoaXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkknbSBub3Qgc29ycnkgdGhhdCBoZSBjYW4ndCBzaGFyZSBoaXMgd2VhdGhlciBhcyBoZSBtZWFucyBpdCB0byBiZSB3aXRoIG1lLCBub3QgdW5sZXNzIEkgdGhpbmsgYWJvdXQgaXQuIE5vIG9uZSdzIGJlZW4gYWJsZSB0byBkbyB0aGF0LCBhbnl3aGVyZSBJIGdvLCBpbiBteSBlbnRpcmUgYWR1bHQgbGlmZS4gSSBkb24ndCBrbm93IGhvdyBvbmUgd291bGQgc3RhcnQuPC9wPlxyXG4gICAgPHA+QnV0IEkgZG8ga25vdywgd2hlbiBJIHRoaW5rIGFib3V0IGl0LCB0aGF0IHRoYXQncyBiZWluZyBzdG9sZW4gZnJvbSBoaW0gYnkgYXR0cml0aW9uOyB3ZSB0YWxrIGFib3V0IGZsb29kIHJpc2sgd2hlbiB3ZSB0YWxrIGFib3V0IG91ciBsb25nLXRlcm0gZnV0dXJlLCBhYm91dCBTZWF0dGxlIGFuZCBpdHMgc2VhIGxldmVsLCBhYm91dCB0aGUgaW5ldml0YWJpbGl0eSBvZiBtb3ZpbmcgaW5sYW5kIHdoZW4gd2UgbGl2ZSBsb25nIGVub3VnaCB0byBkbyBzby4gKEkgdGVsbCBoaW0gSSd2ZSBoZWFyZCBnb29kIHRoaW5ncyBhYm91dCB0aGUgVHdpbiBDaXRpZXMnIGFiaWxpdHkgdG8gbWFpbnRhaW4gYSBkZWNlbnQgcmFtcC4gUHJlY2lwaXRhdGlvbiBraWxscyBwYXZlbWVudCwgdGhlIHdheSB3YXRlciBjYW4ga2lsbCBhbnl0aGluZy4pIFVuZGVyZ2lyZGluZyBpdCBhbGw6IHdlJ3JlIG5vdCBnaXZpbmcgdXAgb24gaGlzIGhvbWUgYW5kIGZhbWlseSBhbnkgdGltZSBzb29uLCBidXQgd2l0aGluIG91ciBsaXZlcyB3ZSBmdWxseSBleHBlY3QgdG8gZG8gc28sIGFzIG1hdHRlciBvZiBmYWN0IGFzIGdpdmluZyBoaW0gbXkgbWVkaWNhbCBwb3dlciBvZiBhdHRvcm5leS48L3A+XHJcbiAgICA8cD48aT5UaGluZ3MgYXJlIGp1c3QgZ29pbmcgdG8ga2VlcCBoYXBwZW5pbmcgd2hpbGUgeW91J3JlIG5vdCBoZXJlLDwvaT4gbXkgZmF0aGVyIHNhaWQuIFJhaW4gY3JlZXBzIHVuZGVyIHJvYWRzIGFuZCBzaWRld2Fsa3MgYmFjayBob21lLCB3aGVuIHRoZXkncmUgcGF2ZWQsIGFuZCBwdWxscyB0aGVtIGludG8gY3JhdGVycy4gU2VhdHRsZSBoYXJkbHkgZXNjYXBlcyBwb3Rob2xlcyBpdHNlbGYuIEJ1dCB5b3Ugd291bGRuJ3Qga25vdyB0aGF0IGZyb20gdGhlIG1lZGlhLCBpZiB5b3VyIHZhbnRhZ2UgcG9pbnQgaXMgYSB0aGlyZC13b3JsZCBjb3VudHJ5LjwvcD5cclxuICAgIDxwPkkgbWVhbnQsIHllYXIgb24geWVhciBvbiB5ZWFyLCB0byBnbyBiYWNrIHRvIE1leGljby4gTm90IGhvbWU7IG5vdCBvbmNlIEknZCBkaXNjb3ZlcmVkIHRoZSBsdXh1cmllcyBvZiBwdWJsaWMgdHJhbnNwb3J0YXRpb24gdGhhdCBjb3VsZCBmZXJyeSBtZSB3aXRob3V0IGZhdm9ycyB0byBkb2N0b3JzIEkgc2VlIGZvciB0aGUgc2FtZSByZWFzb25zIEkgY2FuJ3QgZHJpdmUgYW5kIGZvciBvdGhlciB0aGluZ3MgYWxpa2UuIEJ1dCBELkYuLCBvciBHdWFkYWxhamFyYS4gTGl0dGxlIGxlc3MgYWxpZW4gdGhhbiBoZXJlLCBidXQtLWlmIEkgY291bGQganVzdCBmaW5pc2ggbXkgZGVncmVlLCBzb21lZGF5LS1tb3JlIGJ1eWluZyBwb3dlci48L3A+XHJcbiAgICA8cD5CdXQgdG8gZ2V0IG91dCBvZiBPaGlvIEkgZm9sbG93ZWQgbXkgcGFydG5lciBob21lLCBhbmQgaGUgaGFzIGZhbWlseSBoZXJlLiBXaGVyZSB0aGVyZSdzIHJ1bm5pbmcgd2F0ZXIgYXMgYSBtYXR0ZXIgb2YgY291cnNlLCBhbmQgeW91IGNhbiBkcmluayBpdCwgaWYgeW91IHdhbnQsIHdoZW4geW91IG5lZWQgc29tZXRoaW5nIHdpdGggd2hpY2ggdG8gc3dhbGxvdyBtZWRpY2F0aW9uIHRoYXQgY2FtZSBpbiB0aGUgbWFpbC48L3A+XHJcbiAgICA8cD5BbmQgbm93IEkgcHV0IGRvd24gcm9vdHMgYXMgdGhlaXIgcmVzZW1ibGFuY2UgdG8gaGlzIG1vZGVsIG9mIHRoZSBjaXR5IGhlIGJyb3VnaHQgbWUgdG8gZXJvZGVzLiBXaW50ZXIgc25vd3M7IHN1bW1lciBidXJucy4gSSBkb24ndCBrbm93IGFueSBkaWZmZXJlbnQsIGFuZCBvbmx5IGJlbGF0ZWRseSB3b25kZXIgaWYgaGUncyB3YW50ZWQgbWUgdG8uIEhpcyBwYXJlbnRzIGhhdmUgYSBsYXduOyB0aGUgR3JlYXRlciBTZWF0dGxlIG9mIGhpcyBjaGlsZGhvb2QgaXMgYXBwcm94aW1hdGVseSBhcyBhbGllbiB0byBtZSwgaW4gYm90aCB3YXlzLCBhbmQgdW5hdmFpbGFibGUgYXMgYSBiYWNrZHJvcC4gV2hhdCBJJ3ZlIGxvc3QgYWxvbmcgdGhlIHNhbWUgbGluZXMgaXMgYW4gdW5rbm93bi4gSSB3YW50IHRvIHNob3cgaGltIE9jdG9iZXIsIHRob3VnaCBJIGRvbid0IGtub3cgaG93IG11Y2ggT2N0b2JlcidzIGxlZnQgdG8gc2hvdy4gSSBkb24ndCBmZWVsIGl0LCB0aG91Z2gsIGFic2VudCB0aGF0IGV4cGVyaWVuY2Ugb2YgYWN0dWFsbHkga25vd2luZyB3aGF0IGhhc24ndCBzdXJ2aXZlZCBteSBjaGlsZGhvb2QgZWl0aGVyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JJ3ZlIGxpdmVkIGxvbmdlciBpbiBTZWF0dGxlIHRoYW4gYW55d2hlcmUgZWxzZSBpbiB0aGUgVW5pdGVkIFN0YXRlcywgYnV0IG5vdCBsb25nIGVub3VnaCB0byBsb3NlIHRoaW5ncyB0byB0aGUgcHJlc2VudC4gSSBkb24ndCBoYXZlIGEgc2Vuc2Ugb2YgcGF0dGVybnMgYWJvdXQgaXQgc2F2ZSBpbiB0aGUgYnJvYWRlc3Qgb2Ygc2Vuc2VzOyB0aGlzIGlzIHdoYXQgSSBrbm93LiBJIGNoZWNrIHRoZSB3ZWF0aGVyLiBQZW9wbGUgYXNrIGlmIGl0IHRvcm1lbnRzIG1lOyBJIHRlbGwgdGhlbSBJIGxpa2UgcHJlY2lwaXRhdGlvbi48L3A+XHJcbiAgICA8cD5JIGxpa2UgdGhlIHNub3cuPC9wPlxyXG4gICAgPHA+XCJJJ20gc29ycnksXCIgSSBzYXksIGZvciBsYWNrIG9mIGFueXRoaW5nIGVsc2UgdG8gZG8uPC9wPlxyXG4gICAgPHA+XCJJdCBpc24ndCA8aT55b3VyPC9pPiBmYXVsdCxcIiBoZSBzYXlzLiBcIkkganVzdCB3aXNoIGl0IGNvdWxkJ3ZlIHdhaXRlZC5cIiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4iLCAiY29uc3QgZmFjZXMgPSBbJ2FndWlsYScsICdzb2wnXVxyXG5cclxuY29uc3QgZmxpcCA9ICgoKSA9PiB7XHJcbiAgbGV0IHBpY2s7XHJcbiAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgcGljayA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgcGljayA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBmYWNlc1twaWNrXTtcclxuIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXJkZW4oKSB7XHJcbiBjb25zdCBnYXJkZW5NZSA9ICgpID0+IHtcclxuICAgaWYgKGZsaXAoKSA9PT0gJ2FndWlsYScpIHtcclxuICAgcmV0dXJuIDxDaGlHYXIxIC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgIHJldHVybiA8Q2hpR2FyMiAvPjtcclxuICB9XHJcbiB9XHJcblxyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICB7Z2FyZGVuTWUoKX1cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoaUdhcjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDEuanBlZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG4gXHJcbiBleHBvcnQgZnVuY3Rpb24gQ2hpR2FyMigpIHtcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDIuanBlZycgYWx0PScnLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RlKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkaXRfb2RlJyBpZD0nT2RlJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2luZGlnb19wYWludF9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5mb3JnZXR0aW5nIHRoZSBuYXRpb24gaXMgYSBzeW5kcm9tZS48L3A+XHJcbiAgICA8cD5BbGwgdGhhdFx1MjAxOXMgbGVmdCBvZiB0aGUgc2VhIGluIHlvdSBpcyBmb2FtLDwvcD5cclxuICAgIDxwPnRoZSBjb2FzdGxpbmUncyBicm9rZW4gdm9pY2UgYW5kIGFsbCBpdHMgY3JhZ3MuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0X29kZScgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBVcmF5b1x1MDBFMW4gTm9lbCw8YnIvPjxjaXRlPlwiTm8gTG9uZ2VyIE9kZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpblN1bSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdXaW5TdW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9zZWFzb24nIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgIDxpbWcgc3JjPScvYmx1ZWJsYWNrX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7c2l0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBvZW0sIGludmlnb3JhdGVkPC9wPlxyXG4gICAgPHA+d2l0aCBpbmt5IGF3a3dhcmQgYmxhbmtuZXNzLjwvcD5cclxuICAgIDxwPlRoZSBib3R0b20gdGVldGggb2Ygc3VtbWVyPC9wPlxyXG4gICAgPHA+aW4gd2ludGVyIGNoYXR0ZXJpbmc6IGhlcmVcdTIwMTlzIHRoZSBtb29uLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnIGlkPSdjcmVkX3NlYXNvbic+Tm9haCBFbGkgR29yZG9uLDxici8+PGNpdGU+XCJTdW1tZXIgaW4gV2ludGVyIGluIFN1bW1lclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmaW5lKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J2RlZmluZScgY2xhc3NOYW1lPSdjaXRlJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfd2h5dGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5Db25zaWRlciBjbGltYXRlIGNoYW5nZSBhcyBhYm91dCA8Yj50aGUgdGltaW5nIG9mIHJlbGF0aW9uc2hpcHM8L2I+IHdlIGhhdmUgd2l0aCBhbGwgdGhhdCdzIGFyb3VuZCB1cy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX3doeXRlJz5cclxuICAgIEt5bGUgV2h5dGUsPGJyLz48Y2l0ZT5cIkJyYWlkaW5nIEtpbnNoaXAgYW5kIFRpbWVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJcclxuXHJcbmNvbnN0IGNhcF9vaCA9ICdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBPaGlvLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMsIGZyb20gMTg5NSB0byAyMDIxLidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPaGlvKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdPaGlvJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnIGFyaWEtZGVzY3JpYmVkYnk9J2NhcF9vaCc+PGltZyBzcmM9Jy9zdHJpcGVzX29oLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfb2gnIGNsYXNzTmFtZT0nQVJJQWNhcCcgYXJpYS1oaWRkZW49J3RydWUnPntjYXBfb2h9PC9kaXY+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiLy9mdW5jdGlvbiB2aXNpYmxlQ2FwKGUpIHtcclxuIC8vZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuLy99XHJcbi8vTXVsdGlwbGUgYXR0ZW1wdHMgYmVpbmcgbWFkZSB0byBnZXQgdGhlIGNhcHRpb24gY29uZGl0aW9uYWwgZGlzcGxheSB0byB3b3JrIGFzIGludGVuZGVkIFxyXG5cclxuXHJcbmNvbnN0IGNhcF93YSA9ICdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBXYXNoaW5ndG9uLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMsIGZyb20gMTg5NSB0byAyMDIxLidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXNoaW5ndG9uKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXYXNoaW5ndG9uJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnIGFyaWEtZGVzY3JpYmVkYnk9J2NhcF93YSc+PGltZyBzcmM9Jy9zdHJpcGVzX3dhLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfd2EnIGNsYXNzTmFtZT0nQVJJQWNhcCcgYXJpYS1oaWRkZW49J3RydWUnPntjYXBfd2F9PC9kaXY+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbi8vTm90IHVzaW5nIHJpZ2h0IG5vdzogXHJcbi8vIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZSgndW5zZWUnKTtcclxuLy9vbkZvY3VzPXsoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJ3Nob3dDYXAnKVxyXG4gIC8vICB9fVxyXG4gIC8vICBvbkJsdXI9eygpID0+IHtcclxuICAvLyAgIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyAgfX1cclxuICAvLyAgICB7IHVzZVN0YXRlKCdzaG93Q2FwJykgfHwgPGRpdj57Y2FwX3dhfTwvZGl2PiB9IiwgIi8vZnVuY3Rpb24gdmlzaWJsZUNhcChlKSB7XHJcbiAvL2UudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbi8vfVxyXG4vL011bHRpcGxlIGF0dGVtcHRzIGJlaW5nIG1hZGUgdG8gZ2V0IHRoZSBjYXB0aW9uIGNvbmRpdGlvbmFsIGRpc3BsYXkgdG8gd29yayBhcyBpbnRlbmRlZCBcclxuXHJcblxyXG5jb25zdCBjYXBfd2EgPSAnXCJXYXJtaW5nIHN0cmlwZXNcIiB2aXN1YWxpemF0aW9uIGZvciB0aGUgc3RhdGUgb2YgV2FzaGluZ3Rvbiwgc2hvd2luZyBhbiBvdmVyYWxsIGluY3JlYXNlIGluIHdhcm0geWVhcnMgYW5kIHRoZSBuZWFyLXZhbmlzaG1lbnQgb2YgY29sZCBvbmVzLCBmcm9tIDE4OTUgdG8gMjAyMS4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfd2EnPjxpbWcgc3JjPScvc3RyaXBlc193YS5wbmcnIGFsdD0nJyAvPlxyXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdzZWNyZXQnIGFyaWEtaGlkZGVuPSd0cnVlJz4gIFxyXG4gICAgPGRpdiBpZD0nY2FwX3dhJyBjbGFzc05hbWU9J0FSSUFjYXAnIGFyaWEtaGlkZGVuPSd0cnVlJz57Y2FwX3dhfTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4vL05vdCB1c2luZyByaWdodCBub3c6IFxyXG4vLyBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJ3Vuc2VlJyk7XHJcbi8vb25Gb2N1cz17KCkgPT4ge1xyXG4gIC8vICAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKCdzaG93Q2FwJylcclxuICAvLyAgfX1cclxuICAvLyAgb25CbHVyPXsoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJycpXHJcbiAgLy8gIH19XHJcbiAgLy8gICAgeyB1c2VTdGF0ZSgnc2hvd0NhcCcpIHx8IDxkaXY+e2NhcF93YX08L2Rpdj4gfSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2hhbSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0na2lja2VyJz5cclxuICAgPGRpdiBpZD0na2ltZyc+PGltZyBzcmM9Jy9jbGltYXRlX3N0cmlwZXNfbXgucG5nJyBhcmlhLWRlc2NyaWJlZGJ5PVwiXCIgYXJpYS1kZXRhaWxzPVwiXCIgY2xhc3NOYW1lPSdzbGlkZS1pbi1ibHVycmVkLWJvdHRvbScgLz48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PklJSTwvaDU+XHJcbiAgIFRoZSBnbGFjaWVyIGFic29yYmVkIGdyZWVuaG91c2UgZ2FzZXMuIDxici8+XHJcbiAgIFdlIGFyZSBhIGxhcmdlIHBhcnQgb2YgdGhlIGJpb3NwaGVyZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQigpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVicgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZ19zbS5wbmcnIGlkPSdibHVlcScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlY8L2g1PlxyXG4gICBXZSBkbyBub3Qga25vdyB3aGljaCB0byBmZWFyIG1vcmUsPGJyLz5cclxuICAgVGhlIHRlcnJvciBvZiBjaGFuZ2U8YnIvPlxyXG4gICBPciB0aGUgdGVycm9yIG9mIHVuY2VydGFpbnR5LCA8YnIvPlxyXG4gICBUaGUgZ2xhY2llciBjYWx2aW5nPGJyLz5cclxuICAgT3IganVzdCBhZnRlci48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWSUlJJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlZJSUk8L2g1PlxyXG4gICBJIGtub3cga2luZyB0aWRlcywgPGJyLz5cclxuICAgQW5kIGx1cmlkLCBpbmVzY2FwYWJsZSBzdG9ybXM7IDxici8+XHJcbiAgIEJ1dCBJIGtub3csIHRvbywgPGJyLz5cclxuICAgVGhhdCB0aGUgZ2xhY2llciBpcyBpbnZvbHZlZCA8YnIvPlxyXG4gICBJbiB3aGF0IEkga25vdy48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuLy9VbnVzZWQgZm9yIG5vdywgYnV0IGZ1biB0byBoYXZlXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRTYXkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nTGV0U2F5JyBjbGFzc05hbWU9J3BvZW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9sZXRzYXknPlxyXG4gICA8aW1nIHNyYz0nL3JlZF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9sZXRzYXknPlxyXG4gICAgSmFuZSBIaXJzaGZpZWxkLDxici8+PGNpdGU+XCJMZXQgVGhlbSBOb3QgU2F5XCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2luU3VtKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J1dpblN1bScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX3NlYXNvbicgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlYmxhY2tfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSc+XHJcbiAgICA8cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtzaXQgaW4gdGhlIGNlbnRlciBvZiB0aGUgcG9lbSwgaW52aWdvcmF0ZWQ8L3A+XHJcbiAgICA8cD53aXRoIGlua3kgYXdrd2FyZCBibGFua25lc3MuPC9wPlxyXG4gICAgPHA+VGhlIGJvdHRvbSB0ZWV0aCBvZiBzdW1tZXI8L3A+XHJcbiAgICA8cD5pbiB3aW50ZXIgY2hhdHRlcmluZzogaGVyZVx1MjAxOXMgdGhlIG1vb24uPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCcgaWQ9J2NyZWRfc2Vhc29uJz5Ob2FoIEVsaSBHb3Jkb24sPGJyLz48Y2l0ZT5cIlN1bW1lciBpbiBXaW50ZXIgaW4gU3VtbWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZpbmUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnIGFyaWEtbGFiZWxsZWRieT0nY3JlZF93aHl0ZSc+XHJcbiAgIDxpbWcgc3JjPScvcG9sYXJvaWRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfd2h5dGUnPlxyXG4gICAgS3lsZSBXaHl0ZSw8YnIvPjxjaXRlPlwiQnJhaWRpbmcgS2luc2hpcCBhbmQgVGltZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgIlxyXG5cclxuY29uc3QgY2FwX29oID0gJ1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIE9oaW8sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcywgZnJvbSAxODk1IHRvIDIwMjEuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9oaW8oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J09oaW8nIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX29oJz48aW1nIHNyYz0nL3N0cmlwZXNfb2gucG5nJyBhbHQ9JycgLz5cclxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nc2VjcmV0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICBcclxuICAgIDxkaXYgaWQ9J2NhcF9vaCcgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF9vaH08L2Rpdj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJjb25zdCBmYWNlcyA9IFsnYWd1aWxhJywgJ3NvbCddXHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuICBsZXQgcGljaztcclxuICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICBwaWNrID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICBwaWNrID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGZhY2VzW3BpY2tdO1xyXG4gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhcmRlbigpIHtcclxuIGNvbnN0IGdhcmRlbk1lID0gKCkgPT4ge1xyXG4gICBpZiAoZmxpcCgpID09PSAnYWd1aWxhJykge1xyXG4gICByZXR1cm4gPENoaUdhcjEgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgcmV0dXJuIDxDaGlHYXIyIC8+O1xyXG4gIH1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtnYXJkZW5NZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hpR2FyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4xJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMS5qcGVnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBmdW5jdGlvbiBDaGlHYXIyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4yJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyBhbHQ9JycvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGFyaWEtbGFiZWxsZWRieT0nY3JlZGl0X29kZScgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdF9vZGUnIGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPlxyXG4gICAgVXJheW9cdTAwRTFuIE5vZWwsPGJyLz48Y2l0ZT5cIk5vIExvbmdlciBPZGVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJpbXBvcnQgbWR4TG9hZGVyIGZyb20gJ0BtZHgtanMvbG9hZGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy9pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcclxuXHJcblxyXG5sZXQgY29udGVudCA9ICdgSSBzd2VhciwgSSAqd2lsbCogbWFrZSB0aGlzIHdvcmtgJ1xyXG4vLyB2YXIgb3V0cHV0ID0gbWR4TG9hZGVyKHRoaXMsIHN0cmluZzogY29udGVudCk7XHJcbi8vdmFyIG91dHB1dCA9IG1hcmtlZChjb250ZW50KVxyXG5cclxuZnVuY3Rpb24gUmF3MSgpIHtcclxuIHJldHVybiAoXHJcbiAgeyBjb250ZW50IH1cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF3MSAiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUwMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nb25lJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgPHA+SXQgaXMgMjAyMi4gSXQgaXMgdGhlIDIybmQuIEl0IGlzIEZlYnJ1YXJ5LjwvcD5cclxuICA8cD5JIGFtIGJlZ2lubmluZyB0aGlzIGVzc2F5LiBJIGFtIHR3ZW50eS1zaXggeWVhcnMgb2xkLiBJIGFtIG1vdmluZywgbm90IGZvciB0aGUgZmlyc3QgdGltZSwgdG8gU2VhdHRsZS48L3A+XHJcbiAgPHA+SXQgaXMgc25vd2luZy48L3A+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiXHJcbmltcG9ydCB7IEdsYWNpZXJBIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTAyIC8+XHJcbiAgIDxTY2VuZTAzIC8+XHJcbiAgIDxTY2VuZTA0IC8+XHJcbiAgIDxHbGFjaWVyQSAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdvJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkEgbWVtb3J5IHRvbyBzbWFsbCBmb3IgbWUgdG8gaGF2ZSBhIHBsYWNlIGZvciBpdCBpbiB0aW1lOiBJIGFtIGJhcmVseSBvbGQgZW5vdWdoIHRvIHJlbWVtYmVyLCBhbmQgbXkgcGFyZW50cyBhcmUgbWFycmllZCwgYW5kIHRoZXkgYXJlIGRpc2NvdmVyaW5nIHRoYXQgdGhlIGRpbmluZyByb29tIGZsb29yIGlzIHVuZXZlbiwgYXMgaXQgaGFwcGVucywgYXMgdGhlIHdhdGVyIHBvdXJpbmcgaW4gdGhyb3VnaCB0aGUgY2xvc2VkIHdpbmRvd3MgZm9ybXMgYSB0cmlhbmd1bGFyIHB1ZGRsZSB3aGVyZSB0aGUgZXh0ZXJpb3Igd2FsbHMgbWVldC48L3A+XHJcbiAgIDxwPkFuZCBJIGFtIGhlcmU6IHNpdHRpbmcgaW4gdGhlIHBvb2wgb2YgcmFpbndhdGVyIHdpdGggZW5vdWdoIHJvb20gdG8gc2xhcCBteSBoYW5kcyByaHl0aG1pY2FsbHkgb24gbW9yZSBvZiBpdCBiZXNpZGUgbWUsIGF3YXJlIG9mIGFuZCBpZ25vcmluZyB0aGVpciBtb3VudGluZyBidXQgZ2VuZXJhbGl6ZWQgZGlzYXBwcm92YWwuIElmIGl0IGhhcyBvY2N1cnJlZCB0byBtZSB0aGF0IHRoaXMgaXMgbm90IHdoYXQgdGhleSB3YW50ZWQgZnJvbSB0aGVpciByZWNlbnRseS1maW5pc2hlZCBmbG9vciwgdGhlIHRob3VnaHQgY29tZXMgd2l0aCBvdmVyYWxsIGluZGlmZmVyZW5jZTsgdGhhdCB0aGV5IGhhZCBpdCBwb3VyZWQgYW5kIHNhbmRlZCwgYnkgaHVtYW4gaGFuZHMsIHNvIEknbSBub3Qgc3VyZSB3aGF0IHRoZXkgZXhwZWN0ZWQuPC9wPlxyXG4gICA8cD4oQ29uc3RydWN0aW9uIG9mIHRoZSBob3VzZSBJIHdpbGwgZ3JvdyB1cCBpbiBoYXMgYmVlbiBvbmdvaW5nLCB3aWxsIGJlIG11Y2ggbG9uZ2VyLCBpbnRvIG1lbW9yaWVzIHdpdGggZW5vdWdoIGRlZmluaXRpb24gdG8gcHVsbCB0aGVpciBvd24gd2VpZ2h0IGluIHRpbWUuIEkgZG8gbm90IGtub3cgd2hhdCBhIGxldmVsIGlzLik8L3A+XHJcbiAgIDxwPkkgaGF2ZW4ndCBnb3R0ZW4gdGlyZWQgb2YgaXQgeWV0LiBBcyBJIHNsYXAgdGhlIHB1ZGRsZSwgSSBhbSBzaG91dGluZzogXCJTd2ltbWluZyBwb29sISBTd2ltbWluZyBwb29sIVwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RocmVlJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkhlcmUgYXJlIHR3byB0aGluZ3MgSSBrbm93IGFib3V0IHBvd2VyLCB2ZXJ5IGVhcmx5IGluIG15IGxpZmU6PC9wPlxyXG4gICA8cD5UaGUgbW9zdCBwaHlzaWNhbGx5IHBvd2VyZnVsIHRoaW5nIGluIHRoZSB3b3JsZCBpcyB3YXRlci4gV2F0ZXIgd3JpdGVzIHRoZSBzaGFwZSBvZiBsYW5kIGFuZCBjYW4gZGVtb2xpc2ggYW55dGhpbmcgd2l0aCB0aW1lLiBXYXRlciBpbiB0aGUgYWlyIGlzIHdoeSBldmVyeSBpbmFuaW1hdGUgb2JqZWN0IGFyb3VuZCBtZSBkaWVzIGZhc3RlciB0aGFuIGl0IHNhaWQgaXQgPGEgaHJlZj0naHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcG9zdHMvY3ctZGF0YS1sb3NzLTQ5MjEwMjk1Jz53b3VsZDwvYT47IGxpa2Ugb3B0aWNhbCBtZWRpYSB5b3UgdGhvdWdodCBiYWNrZWQgdXAgc29tZXRoaW5nIHlvdSBjYXJlIGFib3V0LCBvciBlbGFzdGljLiBXYXRlciBib3dscyB5b3Ugb3ZlciB3aGVuIHlvdSBjb21lIG5lYXIgaXQgYW5kIGdldCBjb2NreSBlbm91Z2ggdG8gdHVybiB5b3VyIGJhY2suIFdhdGVyIHNldHMgdGhlIGxpdmluZyBsaW1pdHMgb2Ygd2hhdCBpcyBwb3NzaWJsZTogbGlrZSB3aGVuIHRoZSBzdXBwbHkgdHVybnMgb2ZmLCBhbmQgdGhlIHRpbmFjbyB0aGF0IHRoZXJlJ3Mgbm90IGEgb25lLXdvcmQgRW5nbGlzaCB0ZXJtIGZvciBpcyByZXNlcnZlZCBmb3IgcGF5aW5nIHRvdXJpc3RzIGluIHRoZSBiYWNrIHlhcmQgdG8gY3VzaGlvbiB0aGVtIGZyb20gc2NhcmNpdHksIGFuZCBJIGJhdGhlIG91dCBvZiBhIGJ1Y2tldCBpbiB0aGUgc2hvd2VyLjwvcD5cclxuICAgPHA+KEl0IHN0YWdnZXJzIG1lLCB0aGUgd2F5IHRoZSBOb3J0aCB1c2VzIHdvb2Q6IGxpa2UgdGhlcmUncyBlbm91Z2ggb2YgaXQgdG8gZ28gYXJvdW5kLCBpbnN0ZWFkIG9mIGNvbmNyZXRlLiBJIGRvIG5vdCBtYWtlIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGltYmVyLCB3aGljaCBhd2VzIG1lIGFzIGEgc2hvdyBvZiB3ZWFsdGgsIGFuZCBmb3Jlc3RzLCB3aGljaCB1bm5lcnZlIG1lOyBpdCBkb2Vzbid0IGNvbm5lY3QgdGhhdCBhbnl0aGluZyBJIHNlZSBjb3VsZCBiZSBzdWZmaWNpZW50IGZvciBwZW9wbGUgdG8gY2xhaW0gaXQgaXMgZW5vdWdoLik8L3A+XHJcbiAgIDxwPlRoZSBiZXN0IHdheSBmb3IgYSBwZXJzb24gdG8gYWNxdWlyZSBwb3dlciBpcyB0byBiZSBpbmRpc3BlbnNhYmxlLiBNeSBib2R5LS1JIGRvIG5vdCB5ZXQgaGF2ZSB0aGUgbGFuZ3VhZ2UgZm9yIHRoaXM7IEkgYWx3YXlzIGtub3ctLW15IGJvZHkgZG9lcyBub3QgZG8gdGhlIHRoaW5ncyB0aGF0IG90aGVyIHBlb3BsZSB3YW50IGl0IHRvIGRvLiBQZW9wbGUgZG9uJ3Qgd2FudCBtZSwgaWYgdGhleSBjYW4gYWZmb3JkIHRvLiA8L3A+XHJcbiAgIDxwPkJ1dCBJIGFtIGFsc28gYSBkdWFsIGNpdGl6ZW4sIGEgdGVybSB3aGljaCBvZnRlbiBtZWFucyB0aGF0IG5vIG9uZSB3aG8gYXNrcyBmb3IgcGFwZXJ3b3JrIG90aGVyIHRoYW4gYSBwYXNzcG9ydCBpcyBnb2luZyB0byBnZXQgc29tZXRoaW5nIHRoZXkgbGlrZS4gSSB3aWxsIGhhdmUgdG8gYmUgaW5kaXNwZW5zYWJsZS48L3A+XHJcbiAgIDxwPkkgcmVzb2x2ZSB0byBnbyB0byBjb2xsZWdlIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBJIHdpbGwgZ2V0IGEgZGlwbG9tYSBpbiBFbmdsaXNoIHByaW50IGFuZCB0aGVuIG5vIG9uZSB3aWxsIGJlIGFibGUgdG8gYWZmb3JkIHRvIGRpc2xpa2UgbWUgZW5vdWdoIGZvciB0aGVtIHRvIHRlbGwgbWUgbm8uPC9wPlxyXG4gICA8cD4oSSBhbSwgYXBwcm94aW1hdGVseSwgc2l4IHllYXJzIG9sZC4pPC9wPlxyXG4gIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXInPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+VGhyZWUgd2Vla3MgYWZ0ZXIgbXkgZWlnaHRlZW50aCBiaXJ0aGRheSwgSSBnbyBub3J0aC48L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBXQVZFIGZyb20gXCIuL3BvZW0td2F2ZVwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQygpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMDUgLz5cclxuICAgPFNjZW5lMDYgLz5cclxuICAgPFNjZW5lMDcgLz5cclxuICAgPFNjZW5lMDggLz5cclxuICAgPFNjZW5lMDkgLz5cclxuICAgPFdBVkUgLz5cclxuICAgPFNjZW5lMTAgLz5cclxuICAgPFNjZW5lMTEgLz5cclxuICAgPFNjZW5lMTIgLz5cclxuICAgPEdsYWNpZXJDIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmaXZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBuaW5lIHllYXJzIG9sZCwgYW5kIHdlIGhhdmUgZmFtaWx5IGluIE5ldyBPcmxlYW5zLiBXZSBoYXZlIGZhbWlseSBpbiBGbG9yaWRhLCBhcyB3ZWxsOyBteSBmYXRoZXIgaGFzIHRha2VuIGl0IHVwb24gaGltc2VsZiB0byBkcml2ZSB1cyBmcm9tIG9uZSB0byB0aGUgb3RoZXIsIHdoaWNoIEkgZmluZCBleGNpdGluZy4gSSBvbmx5IHNlZSBHUFMgaW4gcmVudGFsIGNhcnMsIGluIHRoZSBVUywgd2hpY2ggaXMgdGhlIHNvcnQgb2YgdGhpbmcgdGhhdCBzYXRlbGxpdGVzIGJvdGhlciB0byBtYXAuIFdlIGxlYXZlIGluIHRoZSBhZnRlcm5vb24gdG8gZHJpdmUgdGhyb3VnaCB0aGUgbmlnaHQsIHdoaWNoIEkgZmluZCBtb3JlIGV4Y2l0aW5nIHN0aWxsLjwvcD5cclxuICAgIDxwPldlIHBhc3MgdGhyb3VnaCBhIHN0b3JtIHN5c3RlbSwgZHJpdmluZzsgaGFyc2ggcmFpbiBpbiBtb3Rpb24gYXQgbmlnaHQgaXMgYSByYXJlIHRyZWF0IGZvciBtZSwgYW5kIEkgaGF2ZW4ndCBxdWl0ZSBncmFwcGxlZCB3aXRoIHRoZSByZWFsaXRpZXMgb2YgaGlnaHdheXMgZW5vdWdoIHRvIHVuZGVyc3RhbmQgdGhlIHBpdGZhbGxzIG9mIHdoeS4gSSBzdGFyZSBvdXQgdGhlIHdpbmRvd3MgYXQgdGhlIGhhcmQgcmFpbiwgdGhlIGx1eHVyeSBvZiBsaWdodCBhbmQgbGFuZXMgb24gYW4gQW1lcmljYW4gaW50ZXJzdGF0ZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgZmF0aGVyIGhhcyB0b2xkIG1lIGFib3V0IGh1cnJpY2FuZSBwYXJ0aWVzLCByaWNoIHBlb3BsZSB3aG8gd2VyZSByZWNlbnRseSBjaGlsZHJlbiB0YWtpbmcgb2ZmIHRvIHNpdCBpdCBvdXQgaW4gc3BhcmUgaG91c2VzIG9uIHRoZSBjb2FzdC4gVGhlIGlkaW9jeSB0aGF0IGNvbWVzIHdpdGggdGhlIHdvcmxkIGdpdmluZyB5b3Ugbm8gcmVhc29uIHRvIGJlbGlldmUgeW91J3JlIG5vdCBpbnZ1bG5lcmFibGUuIFdlIG1heSBvciBtYXkgbm90IGRpc2N1c3MgdGhhdCBwYXJ0IGV4cGxpY2l0bHksIGJ1dCBJJ20gYXdhcmUsIGF0IGhvbWUsIG9mIHRoZSBjb250cm92ZXJzeSBvZiB0aGUgZm9yY2libGUgcmVkZWZpbml0aW9uIG9mIFwiYmVhY2hmcm9udFwiIHByb3BlcnR5IGJ5IGJ1aWxkaW5nIG9uIGR1bmVzLCBhbmQgdGhlIHJlYXNvbnMgcGVvcGxlIGRvIHNvIGFueXdheS4gV2h5IHRoZSBsYXcgaGFzIGxlc3MgdG8gc2F5IGFib3V0IGl0IHRoYW4gdGhlIHRleHQgY2xhaW1zIGl0J3Mgc3VwcG9zZWQgdG8uPC9wPlxyXG4gICAgPHA+SSBrbm93IGEgbG90IG9mIHJlYWx0b3JzLjwvcD5cclxuICAgIDxwPkkgYWxzbyBrbm93IGEgam9rZTogXCJJJ3ZlIGdvdCB0aGlzIGdyZWF0IHBpZWNlIG9mIGxhbmQgdG8gc2VsbCB5b3UsXCIgaXQgc3RhcnRzLCBcImhhc24ndCBmbG9vZGVkIHNpbmNlIHRoZSBkaW5vc2F1cnMuLi5cIjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkxhdGVyIGluIHRoZSBzdW1tZXIsIEkgYW0gbm90IG5pbmUgeWVhcnMgb2xkLiBXaGVuIEkndmUgcmVjZW50bHkgdHVybmVkIHRlbiwgS2F0cmluYSBzd2VlcHMgdGhyb3VnaCB3aGVyZSBJIGFtIG5vdC4gSSBoYXZlIHRoZSB2YWd1ZXN0IG9mIHVuZGVyc3RhbmRpbmdzIG9mIHdoYXQgYSBsZXZlZSBpcywgZnJvbSBzb25ncywgYW5kIG5vdyBmcm9tIG5ld3M7IGxpa2UgZHVuZXMsIEkgdGhpbmssIGJ1dCB3b3JzZSBhdCBiZWluZyBzby48L3A+XHJcbiAgICA8cD5JbiB0aGUgbGVhZC11cCB0byBsYW5kZmFsbCwgSSBhbSBjaGlsZGlzaGx5LCBjYWxsb3VzbHkgYmFmZmxlZDogQ2F0ZWdvcnkgNSBvbiB0aGUgZm9yZWNhc3QgaXMgYWx3YXlzIGdvb2QgbmV3cyBmb3IgbWUsIGJlY2F1c2UgbGFyZ2UgbnVtYmVycyBtZWFuIGEgaGlnaGVyIHByb2JhYmlsaXR5IG9mIGNsYXNzIGJlaW5nIGNhbGxlZCBvZmYuIChUaGVyZSBpcywgZm9yIHRoZSBkdXJhdGlvbiBvZiBteSBjaGlsZGhvb2QsIG9uZSBwYXZlZCByb2FkLiBUaGUgb3RoZXJzLCB1bmRlciBzdWZmaWNpZW50IHByZXNzdXJlLCB0dXJuIHRvIHJpdmVycy4gSSBsaXZlIG9uIGEgaGlsbDsgSSBsaWtlIHRvIHdhdGNoLiBPbmUgeWVhciwgbGF0ZXIgaW4gdGhlIGRlY2FkZSwgb24gYSBkYXkgdGhhdCB0aGUgcm9hZHMgd2VyZW4ndCB3YXNoZWQgb3V0IGVhcmx5IGVub3VnaCBpbiB0aGUgbW9ybmluZyB0byBnZXQgbWUgb3V0IG9mIGl0LCBteSBzY2hvb2wgdHVybnMgdG8gcmFwaWRzLCBhbmQgSSBhbSB1bmFjY291bnRhYmx5IHBsZWFzZWQgdG8ga25vdyBpdCB3YXMgYnVpbHQgb24gYSB2ZWluIG9mIHJlZCBjbGF5IGFzIHRoYXQgcGFpbnRzIGl0c2VsZiBvbnRvIG15IHNvY2tzLikgPC9wPlxyXG4gICAgPHA+RXZhY3VhdGlvbiwgZm9yIGV4YW1wbGUsIGlzIGZvcmVpZ24gdG8gbWUuIEkgY2FuJ3QgaW1hZ2luZSB3aHkgdGhleSdyZSBib3RoZXJpbmc7IEkgY291bGQgc2F5IHRoYXQgdGhlIHJlYXNvbiBJIGRvbid0IHVuZGVyc3RhbmQgd2h5IG9uZSBwbGFjZSB3b3VsZCBiZSBzYWZlciB0aGFuIGFub3RoZXIgaXMgdGhhdCBubyBwYXJ0IG9mIG15IHN0YXRlIGlzIGEgZnVsbCBmaWZ0eSBtaWxlcyBmcm9tIHRoZSBjb2FzdGxpbmUsIGJ1dCBJIGRvdWJ0IEkgdGhvdWdodCBpdCB0aHJvdWdoIHRoYXQgZmFyLiBJIHRoaW5rIEkgc2ltcGx5IGRvIG5vdCByZWdpc3RlciB0aGF0IGxvY2F0aW9ucyBhcmUgdW5saWtlIG9uZSBhbm90aGVyIGluIHRpbWUgbm90IHRvIGxlYXJuIGl0IG9uIHRoZSBuZXdzLjwvcD5cclxuICAgIDxwPkkgYW0gdGVuIHllYXJzIGFuZCBhbG1vc3Qgb25lIG1vbnRoIG9sZCwgYW5kIEkgdW5kZXJzdGFuZCB0aGF0IGh1cnJpY2FuZSBwcmVwYXJlZG5lc3MgaXMgcmVsYXRpdmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBzdHVjayBteSBmZWV0IGluIHRoZSBBdGxhbnRpYyBvbmNlLiBJdCB3YXMgY29sZGVyIHRoYW4gYW4gb2NlYW4gaGFkIGFueSBidXNpbmVzcyBiZWluZywgYnkgbXkgbGlnaHRzLCBhbmQgZ3JheS4gVGhlcmUgd2FzIHNvbWV0aGluZyBiaXphcnJlIGluIHRoZSBpZGVhIHRoYXQgaXQgd2FzIHdhcm0gZW5vdWdoIHRvIGZlZWQgYSBodXJyaWNhbmUuICA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nbmluZSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkJlZm9yZSBJIGFtIGVsZXZlbiwgd2Ugc3RvcCBoYXZpbmcgZmFtaWx5IGluIE5ldyBPcmxlYW5zLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5BdCBhcm91bmQgZm91ciB5ZWFycyBvbGQsIEkgYW0gZWF2ZXNkcm9wcGluZy0tdGhpcyB3aWxsIGJlIGEgaGFiaXQtLUkgYW0gZWF2ZXNkcm9wcGluZyBvbiBraW5kZXJnYXJ0ZW4gdGVhY2hlcnM7IHRoZXkgYXJlIHRhbGtpbmcgYWJvdXQgdGhlIHdlYXRoZXIuIDwvcD5cclxuICAgIDxwPlNwZWNpZmljYWxseSwgdGhleSBhcmUgdGFsa2luZyBhYm91dCB0aGUgb2NlYW4gZ2V0dGluZyB3YXJtZXIsIGFuZCBob3cgdGhhdCdzIG1ha2luZyBodXJyaWNhbmUgc2Vhc29uIGhhcnNoZXIsIGFuZCBsb25nZXIsIGluIHdheXMgbm8gb25lIHNob3VsZCBsaWtlLiBXZSBkZXBlbmQgb24gaHVycmljYW5lcyBmb3IgZnJlc2h3YXRlci0tbXkgdG93biwgc3BlY2lmaWNhbGx5LCByZWxpZXMgb24gdGhlbSB0byBmaWxsIHRoZSBhcXVpZmVyIGl0cyBtdWNoLWRpc2N1c3NlZCBvYXNpcyBzdGF0dXMgaXMgYnVpbHQgdXBvbi0tYnV0IHRvbyBtdWNoIHdhdGVyIGF0IGEgdGltZSBkZWZlYXRzIHRoZSBwb2ludCwgcmlwcyB0b3Bzb2lsIGludG8gdGhlIHNlYSwgcnVucyBpdHMgY291cnNlIHRvbyBmYXN0IGZvciB1cyB0byBrZWVwLiBBbmQgaXQncyBtb3JlIHVucGxlYXNhbnQgZm9yIHRoZW0gdGhhbiBpdCBpcyBmb3IgbWUuPC9wPlxyXG4gICAgPHA+VGhlIHdhcm10aCwgYXQgbGVhc3QsIGlzIGNvbW1vbiBzZW5zZTsgSSBrbm93IGhlYXQgaXMgZW5lcmd5IGJlY2F1c2UgSSBrbm93IGh1cnJpY2FuZXMgbmVlZCB3YXJtIHdhdGVyIHRvIGxpdmUuIFRoYXQncyB3aHkgdGhleSBzdGFydmUgYW5kIHN0YWxsIG91dCBnb2luZyBub3J0aCwgb3IgY29taW5nIHRvIGxhbmQuIEEgc3Rvcm0gd291bGQgaGF2ZSB0byBiZSB2ZXJ5IHNwZWNpYWwgdG8gZmlnaHQgYWxsIHRoZSB3YXkgdGhyb3VnaCB0aGF0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTExKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlbGV2ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBmaXJzdCB5ZWFycyBpbiB0aGUgVW5pdGVkIFN0YXRlcywgSSBTa3lwZSBteSBkYWQgbGVzcyBvZnRlbiB0aGFuIEkgc2hvdWxkLiBMZXNzIG9mdGVuIHRoYW4gSSB3YW50IHRvLiBJdCdzIGhhcmQgdG8gZmluZCBhIHJoeXRobTsgSSBhbSBub3QgZG9pbmcgd2VsbCB0aGVyZS4gQnV0IGhlIHRlbGxzIG1lIGFib3V0IHRoZSB3ZWF0aGVyLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbHZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2hlbiBJIGFtIHR3ZW50eS1mb3VyLCBpdCdzIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjAvMDUvMTgvY2xpbWF0ZS9jbGltYXRlLWNoYW5nZXMtaHVycmljYW5lLWludGVuc2l0eS5odG1sJz5lc3RhYmxpc2hlZDwvYT4gdGhhdCB3YXJtZXIgd2F0ZXIgaXMgc3VwZXJjaGFyZ2luZyB0cm9waWNhbCBzdG9ybXMuPC9wPlxyXG4gICAgPHA+SSB1bmRlcnN0YW5kIHRoYXQgc2NpZW5jZSBtb3ZlcyBtb3JlIHNsb3dseSB0aGFuIGtpbmRlcmdhcnRlbiB0ZWFjaGVycycgc21hbGwgdGFsazsgdGhhdCBjbGltYXRlLCBieSBkZWZpbml0aW9uLCBoYXBwZW5zIG9uIGEgdGltZXNjYWxlIGNsb3NlciB0byBnZW9sb2dpY2FsIHRoYW4gYW5lY2RvdGUuIDwvcD5cclxuICAgIDxwPkJ1dCBJIGRvIGhhdmUgdGhlIGZsZWV0aW5nIHRob3VnaHQgdGhhdCwgZXZlbiB0aGVuLCB0YWtpbmcgdHdlbnR5IHllYXJzIG9mIG15IGxpZmUgdG8gY2F0Y2ggdXAgdG8gaG93IHRoZSB3ZWF0aGVyJ3MgZG9pbmcgc2VlbXMgYSBiaXQgbXVjaC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBHYXJkZW4gZnJvbSBcIi4vcGhvdG9zX2NoaVwiXHJcbmltcG9ydCB7IEdsYWNpZXJCLCBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBPZGUgZnJvbSBcIi4vcG9lbS1vZGVcIlxyXG5pbXBvcnQgV2luU3VtIGZyb20gXCIuL3BvZW0td2luc3VtXCJcclxuaW1wb3J0IERlZmluZSBmcm9tIFwiLi9xdW90ZS1jbGltZVwiXHJcbmltcG9ydCBPaGlvIGZyb20gXCIuL3N0cmlwZS1vaGlvXCJcclxuaW1wb3J0IFdhc2hpbmd0b24gZnJvbSBcIi4vc3RyaXBlLXdhc2hpbmd0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRCgpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMTMgLz5cclxuICAgPFNjZW5lMTQgLz5cclxuICAgPE9oaW8gLz5cclxuICAgPFNjZW5lMTUgLz5cclxuICAgPFNjZW5lMTYgLz5cclxuICAgPFNjZW5lMTcgLz5cclxuICAgPFNjZW5lMTggLz5cclxuICAgPFNjZW5lMTkgLz5cclxuICAgPFNjZW5lMjAgLz5cclxuICAgPERlZmluZSAvPlxyXG4gICA8U2NlbmUyMiAvPlxyXG4gICA8U2NlbmUyMSAvPlxyXG4gICA8U2NlbmUyMyAvPlxyXG4gICA8U2NlbmUyNCAvPlxyXG4gICA8U2NlbmUyNSAvPlxyXG4gICA8U2NlbmUyNiAvPlxyXG4gICA8R2FyZGVuIC8+XHJcbiAgIDxTY2VuZTI3IC8+XHJcbiAgIDxTY2VuZTI4IC8+XHJcbiAgIDxTY2VuZTI5IC8+XHJcbiAgIDxTY2VuZTMwIC8+XHJcbiAgIDxTY2VuZTMxIC8+XHJcbiAgIDxTY2VuZTMyIC8+XHJcbiAgIDxTY2VuZTMzIC8+XHJcbiAgIDxTY2VuZTM0IC8+XHJcbiAgIDxPZGUgLz5cclxuICAgPFNjZW5lMzUgLz5cclxuICAgPFNjZW5lMzYgLz5cclxuICAgPFNjZW5lMzcgLz5cclxuICAgPFNjZW5lMzggLz5cclxuICAgPFdpblN1bSAvPlxyXG4gICA8U2NlbmUzOSAvPlxyXG4gICA8U2NlbmU0MCAvPlxyXG4gICA8U2NlbmU0MSAvPlxyXG4gICA8R2xhY2llckIgLz5cclxuICAgPFNjZW5lNDIgLz5cclxuICA8Lz5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGNvbGxlZ2UgaW4gdGhlIFVTIHRoYXQgSSBnZXQgaW50byBpcyBpbiBPaGlvLCBzbyBJIGFtIGVpZ2h0ZWVuIGFuZCBJIGFtIGluIE9oaW8uIEJlZm9yZSB0aGF0LCBJIGFtIHNldmVudGVlbiwgYW5kIG15IGZhdGhlciBpcyBoZWxwaW5nIG1lIHBpY2sgb3V0IGEgd2ludGVyIGNvYXQgb24gdGhlIGludGVybmV0LCBhbmQgSSBhbSBhc2tpbmcgaGltIGlmIEkgc2hvdWxkIGNob29zZSB0aGUgd2FybWVzdCBvbmUgSSBzZWUuPC9wPlxyXG4gICAgPHA+VGhhdCdzIG92ZXJraWxsLCBoZSBzYXlzLiAoSGUgaGFzIGJlZW4gdGhlcmUgYmVmb3JlLCBhbGJlaXQgc3Vic3RhbnRpYWxseSBwcmlvciB0byBtZSBldmVuIGJlaW5nIGJvcm4uKSBXaGF0IEkgcmVhbGlzdGljYWxseSBuZWVkIGlzIG1vcmUgdG93YXJkcyB0aGUgY2VudGVyIG9mIHRoZSByYW5nZS4gSSdkIHJlZ3JldCBnZXR0aW5nIHRvbyBoZWF2eSBhIGNvYXQsIGhlIHNheXMsIGFuZCBoZWxwcyBtZSBwaWNrIG9uZSBvZiB0aGUgbWlkZGxpbmcgb25lcy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm91cnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGFtIGdpdmVuIHRvIHVuZGVyc3RhbmQgaXQgc2F5cyBlbm91Z2ggdG8gc2F5IHRoYXQgbXkgZmlyc3QgeWVhciBpbiBPaGlvIGlzIGEgbGFrZSBlZmZlY3QgeWVhciwgdGhvdWdoIEkgd291bGRuJ3Qga25vdyB3aHkuIDwvcD5cclxuICAgIDxwPkkgbGVhcm4sIGZpcnN0aGFuZCBhbmQgb24gbXkgaGFuZHMsIHdoYXQgYSAtNDAgd2luZCBjaGlsbCBpcyBpbiBGYWhyZW5oZWl0LiBJIGxlYXJuIHdoYXQgc3BlY2lhbCBjYW5lIHRpcHMgSSBuZWVkIGZvciB0cmFjdGlvbiBpbiBzbm93LiBJIGxlYXJuIHRoYXQgbXkgY29sbGVnZSBpcyBub3QgcGFydGljdWxhcmx5IGludGVyZXN0ZWQgaW4gY2xlYXJpbmcgdGhlIHNpZGV3YWxrcyBpbiB0aW1lIGZvciBjbGFzczsgaXQgZG9lcyBub3Qgb2NjdXIgdG8gbWUgdGhhdCB0aGV5IG1heSBvbmNlIGF0IGxlYXN0IGhhdmUgYmVlbiBhYmxlIHRvIGFmZm9yZCB0aGUgbmVnbGlnZW5jZSwgYmVjYXVzZSBJIGRvbid0IGhhdmUgYW55IHJlYXNvbiB0byB1bmRlcnN0YW5kIGEgY29tcGFyaXNvbiBieSB3aGljaCB0aGlzIGJlY29tZXMgZXh0cmVtZS48L3A+XHJcbiAgICA8cD5NeSBkYWQgYXBvbG9naXplcywgdGhvdWdoLiBGb3IgbGVhZGluZyBtZSB3cm9uZywgd2l0aCB0aGUgY29hdC48L3A+XHJcbiAgICA8cD5UaGlzIGlzbid0IHdoYXQgdGhlIHdlYXRoZXIgaGVyZSBpcyBzdXBwb3NlZCB0byBkbywgaGUgc2F5cy48L3A+XHJcbiAgICA8cD5JIHdvdWxkbid0IGtub3csIEkgc2F5OyBvciBtYXliZSBJIGRvbid0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmaWZ0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBGYWNlVGltZSBteSBkYWQgaW5zdGVhZCBvZiBTa3lwaW5nLCB0aGVzZSBkYXlzLiBIZSB0ZWxscyBtZSBob3cgbWFueSBkYXlzIHRoaXMgd2VlayB0aGVyZSBoYXZlIGJlZW4gbXVuaWNpcGFsIHdhdGVyLiBJIHRlbGwgaGltIHdoZW4gaXQgc25vd3MuIEhlIHRlbGxzIG1lIGhvdyBvdXIgdGVtcGVyYXR1cmVzIGNvbXBhcmUuIEkgdGVsbCBoaW0gSSBnb3QgYSBuZXcgbW9uaXRvci4gSSB0ZWxsIGhpbSBob3cgbXVjaCBpdCB3YXMgbmV3LCBhbmQgaG93IHBsZWFzZWQgSSBhbSB3aXRoIG15c2VsZiBmb3IgaG93IEkgZm91bmQgaXQgdXNlZCwgaG93IHRoZSBkZWFsIHRvb2sgYSBtYXR0ZXIgb2YgZGF5cy48L3A+XHJcbiAgICA8cD5Zb3UncmUgaW4gdGVjaCBoZWF2ZW4gdXAgdGhlcmUsIGhlIHNheXMuIEkgc2F5LCBJIGd1ZXNzLiBIZSBzYXlzIHRoYXQgdXNlZCBoZXJlIHdvdWxkIGJlIG5ldyB0aGVyZS4gSSB0aGluayBhYm91dCB0aGF0IGFzIGEgd2F5IHRvIHB1dCBpdCwgbGF0ZXI6IGRldmVsb3BtZW50IGluIHJlbGF0aXZlIHRpbWUgb3ZlciBzcGFjZS48L3A+XHJcbiAgICA8cD5JIHNheSAoYW5vdGhlciBkYXkpIHRoYXQgSSdkIGxpa2UgdG8gdHJhZGUgaGltIG15IGxhcHRvcCwgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgZm9yIGhpcyBncmlwIHRoYW4gaXQncyBiZWVuIGZvciBteSB2aXNpb24uIEhlIGFza3MgaWYgSSB3YW50IGhpbSB0byB0YWxrIHRvIGFzayB0aGUgZ3V5IHdobyBzZW5kcyBoaW0gc3R1ZmYgZnJvbSB0aGUgYm9yZGVyIHdoYXQgdGhlIGNvbXBvdW5kaW5nIGNvc3RzIG9mIHNoaXBwaW5nIHdvdWxkIGxvb2sgbGlrZS4gSSBzYWlkIEkgdGhvdWdodCBJJ2QganVzdCBicmluZyBpdCB0byBoaW0sIHdoZW4gSSBjYW4uIFNhdmUgaGltIHRoZSBjdXN0b21zLCB0aGUgd2F5IHdlIGhhbmRsZWQgdGhpbmdzIGdyb3dpbmcgdXAuPC9wPlxyXG4gICAgPHA+T2gsIGhlIHNheXMuIFRoYXQncyBraW5kIG9mIHlvdS48L3A+XHJcbiAgICA8cD5JIHdhbnQgdG8gc2VlIHlvdSBhbnl3YXksIEkgc2F5LiBUaGUgbWFjaGluZSBiZWluZyBsaWdodCBpcyB0aGUgd2hvbGUgcG9pbnQgb2YgdGhlIHRoaW5nLiBJIGRvbid0IHNlZSB3aGVyZSBraW5kbmVzcyBjb21lcyBpbnRvIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzaXh0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSB3YXMgaG9tZSBmb3IgdGhlIGxhc3QgdGltZSBpbiBEZWNlbWJlciwgMjAxMy4gSXQncyBub3QgbXkgZmlyc3Qgc3VtbWVyIGF3YXktLWl0IGZlZWxzIGl0LS1pdCdzIG5vdCBteSBmaXJzdCBzdW1tZXIgYnV0IG15IHNlY29uZCB0aGF0IHRoZSBodXJyaWNhbmUgY29tZXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NldmVudGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBiaWcgaHVycmljYW5lIHdob3NlIG5hbWUgSSB1c2VkIHRvIHJlbWVtYmVyIGhhcHBlbmVkIHNob3J0bHkgYmVmb3JlIEkgd2FzIGJvcm4sIGFuZCB0aHVzIHRoZSBwb2ludCBvZiByZWZlcmVuY2UgZm9yIGFuIGV4dHJhb3JkaW5hcnkgc3Rvcm0gY291bGQgY29tZm9ydGFibHkgYnJhY2tldCBhbnl0aGluZyBJJ2Qga25vdy48L3A+XHJcbiAgICA8cD5IZXIgdXN1cnBlciBjb21lcyB0aGUgc3VtbWVyIEkgdHVybiB0d2VudHkuIEl0IHRlYXJzIHRocm91Z2ggdG93biBsaWtlIGEgbmF0dXJhbCBkaXNhc3Rlciwgd2hpY2ggaXMgamFycmluZy4gSXQgdXBlbmRzIG15IGZhdGhlcidzIGdhcmRlbiwgd2hpY2ggaXMsIHNvbWVob3csIHdvcnNlLiBUaGlua2luZyBvZiBoaW0gcHV0dGluZyBpdCBiYWNrIHRvZ2V0aGVyLiBFdmVuIGlmIGhlIGhhZCBoZWxwLjwvcD5cclxuICAgIDxwPkhlIGRvZXNuJ3Qgd2FudCB0byB2aXNpdCwgYWZ0ZXIgdGhhdCwgZXZlbiBiZWZvcmUgaGUgY2FuJ3QuIFRyYXZlbCBoYXMgYWx3YXlzIGJlZW4gYSB0aGluZyBvZiBzdW1tZXI7IGhlIGRvZXNuJ3Qgd2FudCB0byBsZWF2ZSB0aGUgaG91c2UgdG8gc3Rvcm1zIHVuc3VwZXJ2aXNlZC4gSGUgZG9lc24ndCB0cnVzdCBhbnlvbmUgZWxzZSB0byBoYW5kbGUgaXQgaWYgaGUgbGVhdmVzIGl0IGFsb25lLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlaWdodGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkhlIHNlbmRzIG1lIHBob3Rvcy4gQnV0IHRoZXkgZ2V0IG1vcmUgZGlmZmljdWx0IHRvIGxvb2sgYXQgb3ZlciB0aW1lLCBvZGRseSBlbm91Z2guPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J25pbmV0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SHVycmljYW5lIHNlYXNvbiBncm93cyBsb25nZXIgYXQgYm90aCBlbmRzLiBJdCdzIGhhcmQgdG8gZmluZCBuZXdzIGFib3V0IGh1cnJpY2FuZXMgaW4gdGhlIFBhY2lmaWMgdGhhdCBJIGNhbiBwaWNrIHVwIG9uIHBhc3NpdmVseSwgdGhvdWdoOyBBbWVyaWNhbiBzb3VyY2VzLCB3aGljaCBhcmUgd2hhdCB0aGUgaW50ZXJuZXQgaXMgYnVpbHQgb24sIGNhcmUgYWJvdXQgdGhlIEF0bGFudGljIGZpcnN0IGFuZCBmb3JlbW9zdC4gSSBkb24ndCBsaWtlIHRoZSBBdGxhbnRpYywgc2VsZmlzaGx5OiBpdCBoYXMgYSBiYWQgdHJhY2sgcmVjb3JkLCBhbmQgSSByZW1lbWJlciBpdCBncmF5LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JbiAyMDIyLCBJIHRlbGwgaGltIEknbSB3cml0aW5nIHRoaXMgZXNzYXksIGFuZCBJIGFzayBpZiBJIGNhbiB1c2UgdGhlIHBob3Rvcy4gSGUgYXNrcyB3aGF0IEkgd2FudCB0aGVtIGZvci4gSSBzYXkgSSdtIHdyaXRpbmcgYWJvdXQgdGhlIGluY3JlYXNlZCB0b2xsIG9mIGh1cnJpY2FuZXMgb24gYW4gZW52aXJvbm1lbnQgdGhhdCByZWxpZWQgb24gdGhlbS4gSGUgc2F5cyBoZSBzdXBwb3NlcyBPZGlsZSB3b3VsZCBiZSB0aGUgb25lIGZvciB0aGF0LjwvcD5cclxuICAgIDxwPkkgd2Fzbid0IHRoZXJlLCBJIHNheS4gSXQncyB0aGUgZmlyc3QgYmlnIG9uZSB3aGVyZSBJIHdhc24ndCB0aGVyZS48L3A+XHJcbiAgICA8cD5IZSBhc2tzIHdoeSB0aGF0IG1hdHRlcnMuIFRoaW5ncyBhcmUgZ29pbmcgdG8ga2VlcCBoYXBwZW5pbmcgd2hpbGUgeW91J3JlIG5vdCBoZXJlLCBoZSBzYXlzLjwvcD5cclxuICAgIDxwPkkga25vdywgSSBzYXkuPC9wPlxyXG4gICAgPHA+U3Vydml2b3IncyBndWlsdCBpcyBhIHRoaW5nLCBteSBwYXJ0bmVyIHNheXMsIGluIGVhcnNob3QsIGZyb20gb2Zmc2NyZWVuLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkhlIHNlbnQgbWUgcGhvdG9zLiBJbiB0aGUgZW5kLCBJIGNhbid0IHF1aXRlIGJyaW5nIG15c2VsZiB0byBkZXNjcmliZSB0aGVtIGluIHRpbWUuIEkgcHJvbWlzZSBteXNlbGYgSSdsbCBjb21lIGJhY2sgdG8gaXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIHRlbGwgbXkgZmF0aGVyIHRoYXQgSSdtIHdyaXRpbmcgYWJvdXQgdGhlIGZpbmdlcnByaW50cyBvZiBjbGltYXRlIGNoYW5nZSBicmFja2V0ZWQgYnkgbXkgbGlmZS4gSSB0ZWxsIGhpbSB0aGF0IGEgbGl0dGxlIG92ZXIgYSBxdWFydGVyIGNlbnR1cnkgaXMgYSBwcmV0dHkgZGVjZW50IGZyYW1lIHdpdGggd2hpY2ggdG8gZW5jYXBzdWxhdGUgaXQuIEkgdGVsbCBoaW0gdGhhdCBzb21ldGltZXMgaXQgZmVlbHMgbGlrZSBpdCdzIGZvbGxvd2luZyBtZSB1cC48L3A+XHJcbiAgICA8cD5Zb3UndmUgYmVlbiB3b3JraW5nIHlvdXIgd2F5IG5vcnRoLCBoZSBzYXlzLCB3aXRoIHNvbWUgZGVsaWdodCBhdCBob3cgaXQgbGluZXMgdXAuIDwvcD5cclxuICAgIDxwPkV2ZXJ5d2hlcmUgSSBnbywgZXZlcnkgeWVhciwgcGVvcGxlIHRlbGwgbWUgdGhhdCB0aGlzIGlzbid0IHdoYXQgdGhlIHdlYXRoZXIgdXN1YWxseSBkb2VzLCBJIHRlbGwgaGltLiBJJ20gZ2V0dGluZyBwcmFjdGljZSBhdCB0aGUgcHJlbWlzZSBieSBub3cuPC9wPlxyXG4gICAgPHA+VGhhdCdzIHRoZWlyIHByb2JsZW0sIGhlIHNheXMuIEhlIHNheXMgaXQncyBhIGZhbnRhc3kgdGhhdCBpc24ndCByZWxldmFudCB0byB0aGUgd29ybGQgYXMgaXQgaXMgYW5kIHdpbGwgY29udGludWUgYmVpbmcuPC9wPlxyXG4gICAgPHA+SSBzYXkgSSB0aGluayBncm91bmRpbmcgdGhlbXNlbHZlcyBpbiB3aGF0IHRoZXkgc3RpbGwgdGhpbmsgb2YgYXMgbm9ybWFsIGlzIGhvdyBwZW9wbGUgaGVscCB0aGVtc2VsdmVzIHVuZGVyc3RhbmQgY2hhbmdlLjwvcD5cclxuICAgIDxwPkhlIHNheXMgaXQncyBzdGlsbCB0aGUgY2FzZSB0aGF0IHN1Y2ggZ3JvdW5kIGRvZXNuJ3QgZXhpc3QuIEkgc2F5IEkga25vdy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Myc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkl0IGlzIEphbnVhcnksIGFuZCBJIHN0aWxsIGxpdmUgaW4gQmVsbGV2dWUuIEluIHRoZSB0aW1lIGJldHdlZW4gYW4gYWZ0ZXJub29uJ3Mgd29ydGggb2YgdGhpcyBjbGFzcyBhbmQgc3RheWluZyBiZWhpbmQgYWZ0ZXIsIHRoZSByYWluIHRoYXQgbXkgcGFydG5lciBob3BlZCBzaWduYWxlZCBhIGJyZWFrIGZyb20gdGhlIHNub3cgaGFzIHR1cm5lZCB0byBoYWlsLjwvcD5cclxuICAgIDxwPkkgY2hlY2sgdGhlIHdpbmRvdy4gSSBjb21lIGJhY2suIEknbSBzb3JyeSBpZiB0aGVyZSdzIGJhY2tncm91bmQgbm9pc2UsIEkgc2F5IHRvIG15IGluc3RydWN0b3IuIEl0J3MgaGFpbC48L3A+XHJcbiAgICA8cD5UaGVyZSdzIGEgcGFydGljdWxhciBzb3J0IG9mIHNtaWxlIEknbSBmYW1pbGlhciB3aXRoLCB3aGVuIHBlb3BsZSBhcmUgdHJ5aW5nIHRvIHRvbmUgZG93biB0aGUgaW1wYWN0IG9mIHRhbGtpbmcgYWJvdXQgdGhlIHdlYXRoZXIuIEl0J3MgdGhlcmUgd2hlbiBoZSBzYXlzIGl0J3Mgbm90IHN1cHBvc2VkIHRvIGhhaWwuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGZpbmQgbXlzZWxmIHdpc2hpbmcgSSdkIGdvbmUgb3V0c2lkZSBpbiB0aW1lIGZvciB0aGUgaGFpbC4gSXQncyBub3QgYSB0ZXh0dXJlIG9mIGljZSBmb3VuZCBtdWNoIGVsc2V3aGVyZSwgYW5kIGhhc24ndCBnb3R0ZW4gb2xkIGZvciBtZSB5ZXQ7IEkgbGlrZSB0byBlYXQgaXQuPC9wPlxyXG4gICAgPFdhc2hpbmd0b24gLz5cclxuICAgIDxwPihXaGVuIGl0IHNub3dlZCwgbXkgZGFkIHdhcyBkaXNhcHBvaW50ZWQgdGhhdCBJIGRpZG4ndCwgaGlzIHdvcmRzLCBnbyBwbGF5IGluIHRoZSBzbm93LiBTbyB3YXMgSSwgYWRtaXR0ZWRseS4gSSB0aG91Z2h0OiB0aGVyZSB3aWxsIGJlIG1vcmUgc25vdyBuZXh0IHllYXIuIEkgd2lsbCBkbyBiZXR0ZXIgYnkgbXlzZWxmIG5leHQgeWVhciwgSSB0aGluay4pPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgZmlyc3Qgc3VtbWVyIEknbSBzZXR0bGVkIGVub3VnaCBpbiBTZWF0dGxlIHRvIGJlIGF3YXJlIG9mIG11Y2ggb2YgYW55dGhpbmcsIENhbGlmb3JuaWEgaXMgb24gZmlyZS4gSSBhbSBnaXZlbiB0byB1bmRlcnN0YW5kIHRoYXQgdGhpcyBpcyBuZXcuIEFzaCBmYWxscyBsaWtlIHNub3csIG9yIGxpa2UgYSBDb2xkIFdhciBlcmEgbnVjbGVhciBQU0EuIEEgZnJpZW5kIGdyb3dpbmcgdXAgaXMgdmlzaXRpbmcgYnV0IEkgY2FuJ3QgZG8gbXVjaCBtb3JlIHRoYW4gbWFrZSBpdCBmcm9tIHRoZSBjb3VjaCB0byBhbm90aGVyIHNpZGUgb2YgdGhlIHJvb20uIDwvcD5cclxuICAgIDxwPldlIGRvIG1hbmFnZSB0byBnbyB0byB0aGUgZ2xhc3Mgc2N1bHB0dXJlIGdhcmRlbi4gSSB0cnkgdG8gdGFrZSBwaG90b3MuIE15IHBob25lIGNhbiBjYXB0dXJlIHRoZSBjb2xvcnMgb2YgdGhlIGdsYXNzIHVuZGVyIGFsaWVuIGxpZ2h0LCBvciBpdCBjYW4gY2FwdHVyZSB0aGUgZ3JheSBza3kgYW5kIHJlZCBzdW4uIEl0IGRvZXMgbm90IGtub3cgaG93IHRvIG1ha2Ugc2Vuc2Ugb2YgdGhlIHR3byBvZiB0aGVtIHRvZ2V0aGVyLjwvcD5cclxuICAgIDxwPk15IHBhcnRuZXIsIG15IGZyaWVuZCwgYW5kIEkgdGFsayBhYm91dCBob3cgY29vbCBpdCB3b3VsZCBiZSB0byBjb21lIHVwIHdpdGggYSBzaG9ydCBzdG9yeSB3aGVyZSBJIGNvdWxkIHVzZSB0aGUgcGhvdG9zIEkgZGlkIGdldCBhcyBpbGx1c3RyYXRpb25zLiBFdmVuIGlmIEkgY2FuJ3QgY2FwdHVyZSB0aGUgd2hvbGUgb2YgaXQsIGl0J3Mgc3RyaWtpbmcuIEl0IHdvdWxkIGJlIG5pY2UgdG8gZ2V0IHNvbWV0aGluZyBvdXQgb2YgaXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjYoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTYnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGdldCBhaXIgZmlsdGVycy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Nyc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgZ2V0IGJldHRlciBhaXIgZmlsdGVycy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5ZZWFycyBsYXRlciwgaW4gdGhlIHBhbmRlbWljLCBJIGFscmVhZHkgb3duIHJlc3BpcmF0b3JzLiBJIHRha2UgdGhlIG9wcG9ydHVuaXR5LCBwZXJpb2RpY2FsbHksIHRvIGdldCBiZXR0ZXIgb25lcy4gVGhlcmUncyBhIHBvc3RhbCBzeXN0ZW07IEkgY2FuIGRvIHRoYXQuIEkgYW0gYWxsIGJ1dCB1c2VkIHRvIHRoZSBtYWlsLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgc2Vjb25kIHdlZWsgaW4gT2hpbywgSSB3YW50ZWQgdG8gc2VuZCBhIGxldHRlciB0byBhIGZyaWVuZC4gTXkgUkEgaGFkIHRvIHRlYWNoIG1lIGhvdyB0byBhZGRyZXNzIGFuIGVudmVsb3BlLiBJdCBzdHJ1Y2sgbWUgYXMgc29yY2VyeSBmb3IgeWVhcnM6IHRvIG9yZGVyIHRoaW5ncyBhbmQgaGF2ZSB0aGVtIGNvbWUgdG8geW91LiBSZXNvdXJjZXMgZmxvdyB0b3dhcmRzIGVtcGlyZXMsIEkga25ldyB3aGVuIEkgd2FzIHNpeDsgcGVvcGxlIGdvIHdoZXJlIHRoZSByZXNvdXJjZXMgYXJlLCBJIHRlbGwgcGVvcGxlIGF0IHR3ZW50eS1zaXgsIGZlZWxpbmdzIHRvd2FyZHMgdGhlIGVtcGlyZSBhcmUgaXJyZWxldmFudC4gQnV0IG9uIHRoZSBwZXJzb25hbCBsZXZlbC0tdGhlcmUgd2FzIHNvbWV0aGluZyBtYWdpYyBpbiBzdWNoIHJvYWRzIGxlYWRpbmcgdG93YXJkcyBtZS4gVGhlIGZpcnN0IHRoaW5nIEkgYm91Z2h0IHdpdGggbXkgY29sbGVnZSBhZGRyZXNzIHdhcyBhIGNhbmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IHBhcnRuZXIgYW5kIEkgaGF2ZSBhbiBhcmd1bWVudCBhYm91dCB0aGUgY29uY2VwdCBvZiBzd2ltbWluZyBiZWFjaGVzOyBmb3IgdGhlIHNha2Ugb2YgdGhpcyBhcmd1bWVudCwgbGV0J3Mgc2F5IEkgYW0gdHdlbnR5LXR3by4gSGlzIG9jZWFuIGlzIHRoZSBQdWdldCBTb3VuZDogYSB0YW1lLCBjb29sIGxpdHRsZSB0aGluZyB0aGF0IEkga25vdyBmcm9tIHRoZSBwZXJzcGVjdGl2ZSBvZiBicmlkZ2VzLCB3aXRoIGdsYXNzeSBmbGF0cyBhbmQgbmliYmxpbmcgd2F2ZXMuIFdlIGFyZSBkaXNjdXNzaW5nIHdoeSBjaGFyYWN0ZXJzIGluIGEgdmlkZW8gZ2FtZSB3b3VsZCBwaWNrIHVwIGFuZCBsZWF2ZSB0aGVpciBzZWN0aW9uIG9mIGEgY29hc3RsaW5lIHRvIHN3aW0gc29tZXdoZXJlIGVsc2UuPC9wPlxyXG4gICAgPHA+UHJlc3VtYWJseSBpdCdzIHdoZXJlIHRoZSBzd2ltbWluZyBiZWFjaGVzIGFyZSwgSSBzYXkuPC9wPlxyXG4gICAgPHA+V2hhdCBkbyB5b3UgbWVhbiBzd2ltbWluZyBiZWFjaCwgaGUgc2F5cy48L3A+XHJcbiAgICA8cD5CZWFjaGVzIHdoZXJlIGl0J3Mgc2FmZSB0byBzd2ltLCBJIHNheSwgaW1wYXRpZW50bHkuIFdpdGhpbiByZWFzb24uPC9wPlxyXG4gICAgPHA+VGhlIHJlc3VsdGluZyBsb25nIGFuZCBoYWx0aW5nIGNvbnZlcnNhdGlvbiwgcmVuZGVyZWQgYW4gYXJndW1lbnQgYnkgbGFjayBvZiBhbnkgdW5pdmVyc2Ugb2YgY29tbW9uIHJlZmVyZW5jZSwgaXMgY3V0IHNob3J0IHdoZW4gaGlzIG1vdGhlciB0ZWxscyBoaW0gdGhhdCB0aGVpciBmYW1pbHkgdmlzaXRlZCBuZWFyIG15IGhvbWV0b3duIGJlZm9yZSBoZSdkIGJlIGFibGUgdG8gcmVtZW1iZXIuIEF0IGEgdG91cmlzdHMnIGJlYWNoIGhpcyBncmFuZGZhdGhlciB0dXJuZWQgaGlzIGJhY2sgb24gdGhlIHdhdGVyIGFuZCwgd2hlbiBoZSB3ZW50IGZseWluZyBhY2NvcmRpbmdseSwgbG9zdCBhIHBhaXIgb2YgZGVudHVyZXMuPC9wPlxyXG4gICAgPHA+U2VlLCBJIHNheS4gTm9ybWFsIG9jZWFuLiBZb3UgZG9uJ3QgdHVybiB5b3VyIGJhY2sgb24gaXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5XZSBoYXZlIGhhZCBsb25nIGVub3VnaCB0byBncm93IGFjY3VzdG9tZWQgdG8gb25lIGFub3RoZXIgdGhhdCBJIHN0cnVnZ2xlIHRvIHJlbWVtYmVyIG90aGVyIGRpc2pvaW50cyBvZiB0aGlzIGtpbmQuIFRoZXJlJ3MgYmVlbiBvdmVyIGhhbGYgYSBkZWNhZGUgdG8gYnVpbGQgdGhlIG5lY2Vzc2FyeSBjb25jZXB0dWFsIGJyaWRnZXMuIE9mdGVuIGVub3VnaCwgd2Ugc3RpbGwgaGF2ZSBtb21lbnRzIHRoYXQgbWFrZSBoaW0gc2F5LCBTb21ldGltZXMgSSByZW1lbWJlciB0aGF0IHdlIGNvbWUgZnJvbSBkaWZmZXJlbnQgd29ybGRzLiBCdXQgdGhleSBkb24ndCBtdWNoIHNwcmluZyB0byBtZW1vcnkgdGhlc2UgZGF5cy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Mic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgaGF2ZSBtaXhlZCBmZWVsaW5ncyBvbiByZWZlcnJpbmcgdG8gcHJlcGFyYXRvcmlhIGFzIGEgaGlnaCBzY2hvb2wuIEl0IGdpdmVzIHBlb3BsZSB0aGUgYXBwcm94aW1hdGUgaWRlYSB0aGF0IHRoZXkgbmVlZCwgYnV0IG1vcmUgb2Z0ZW4gdGhhbiBub3QgSSBmaW5kIEkgd2FudCB0aGUgYWxpZW5hdGlvbjsgSSdtIGp1c3Qgbm90IGVudGlyZWx5IHN1cmUgd2hlbiBJIG1hbmFnZSB0aGF0IHZlcnN1cyBhY3R1YWwgaW5jb21wcmVoZW5zaW9uLiBBbmQgSSBkb24ndCB3YW50IHRoZSBsYXR0ZXI7IHRoYXQgZGVmZWF0cyB0aGUgcG9pbnQuIEkgcHV0IGZhciB0b28gbXVjaCBlZmZvcnQgaW50byB0cmFuc2xhdGlvbiB0aGFuIHRoYXQuPC9wPlxyXG4gICAgPHA+TGV0J3MgYm93IHRvIGF1ZGllbmNlIGFuZCBzYXkgSSdtIGluIGhpZ2ggc2Nob29sLCBmb3IgdGhpcyBvbmUuIEkndmUgaGFkIHRvIG1vdmUgdG8gdGhlIGNhcGl0YWwgb2YgdGhlIHN0YXRlLS1kdXJpbmcgdGhlIHdlZWs7IHNwbGl0dGluZyBjdXN0b2R5IHdpbGwgZG8gdGhlc2UgdGhpbmdzIHRvIHlvdS0tZm9yIGl0LiBJJ20gYSBzY2hvbGFyc2hpcCBzdHVkZW50IGF0IGEgcHJpdmF0ZSBzY2hvb2wsIGZvciByZWxhdGVkIHJlYXNvbnMuIEF0IHRoaXMgZ3JhZGUgbGV2ZWwgaW4gbXkgaG9tZXRvd24gdGhlcmUncyBvbmx5IHZvY2F0aW9uYWwgc2Nob29saW5nLCBhbmQgaXQncyBub3QgbWFuZGF0b3J5IGFueXdheS4gRm9yIHRoZSBmaXJzdCB0aW1lIGluIG15IGxpZmUsYXMgYSByZXN1bHQsIEkgYW0gbm90IGluIHRoZSBwdWJsaWMgc2Nob29sIHN5c3RlbS48L3A+XHJcbiAgICA8cD4oT25lIGVhcmx5IG1lYW5pbmcgb2YgdGhpcyBpcyB0aGF0IHRoZSBzY2hvb2wgaXMgYWlyIGNvbmRpdGlvbmVkLCB3aGljaCBpdCBkb2VzIG5vdCBvY2N1ciB0byBtZSB0byBwYWNrIGZvciBteSBmaXJzdCB3ZWVrIHRoZXJlLiBJIHR1cm4gZmlmdGVlbiBhbmQgbXkgdGVldGggYXJlIGNoYXR0ZXJpbmcgYXQgdGhlIGNvbnRyYXN0IGZvciBoYWxmIHRoZSBkYXksIHVudGlsIGEgY2xhc3NtYXRlIGluY3JlZHVsb3VzbHkgbGVuZHMgbWUgaGlzIGphY2tldC4pPC9wPlxyXG4gICAgPHA+V2UgYXJlIHdhdGNoaW5nIGEgbW92aWUgaW4gb25lIG9mIHRoZSB0aHJvd2F3YXkgY2xhc3NlcyB3aG9zZSByZWRlZW1pbmcgZmVhdHVyZXMgYXJlIGdlbmVyYWxseSBtb3ZpZXMsIHdoZW4gdGhlIHByb3RhZ29uaXN0IHJ1bnMgb3V0IG9udG8gdGhlIGdyZWVuLCBncmVlbiBsYXduIG9mIHNvbWUgZmFtb3VzIGNvbGxlZ2UncyBvbGQgQW1lcmljYW4gYnVpbGRpbmcuPC9wPlxyXG4gICAgPHA+VGhlIG1ldGFsIHJvb2Ygb2YgbXkgaGlnaCBzY2hvb2wncyBuZXcgYnVpbGRpbmcgKGlmIHdlIGNhbGwgaXQgYSBoaWdoIHNjaG9vbCwgYXBwcm94aW1hdGluZykgcmF0dGxlcyB3aGVuIGl0IHJhaW5zLCBhbHRob3VnaCBpdCdzIG5vdCBjdXJyZW50bHkgcmFpbmluZy48L3A+XHJcbiAgICA8cD5PbmUgb2YgbXkgY2xhc3NtYXRlcyBwb2ludHMgYW5kIHNheXMsIGluIG11Y2ggdGhlIHNhbWUgdG9uZSBhcyBwZW9wbGUgc3RhcnRlZCBjaXRpbmcgPGk+bGEgY3Jpc2lzPC9pPiB3aGVuIHRoZSBBbWVyaWNhbiByZWNlc3Npb24gbWVhbnQgdGhleSBzdG9wcGVkIGV4cG9ydGluZyBvdXIgZWNvbm9teSdzIHdvcnRoIG9mIHRvdXJpc3RzLCB0aGF0IHdlIHNoZWxsIG91dCBzbyBtdWNoIGZvciB0dWl0aW9uLCBzbyB3aHkgZG9lc24ndCBvdXIgc2Nob29sIGxvb2sgbGlrZSB0aGF0PzwvcD5cclxuICAgIDxwPlRoZSB0ZWFjaGVyIGNvdWxkIGNvbW1lbnQgb24gaGlzdG9yeSwgYW5kIHRoZSBmYWN0IHRoYXQgdGhpcyBpcyBhIG5ldyBidWlsZGluZy4gU2hlIGNvdWxkIGNvbWVtbnQsIGV2ZW4sIG9uIGVudmlyb25tZW50OyB3ZSBoYXZlIGFuIGVudmlyb25tZW50YWxpc3QgY29tcG9uZW50IGluIGFub3RoZXIgY2xhc3MsIGFnZ3Jlc3NpdmVseSB0aGVtZWQgYXJvdW5kIG1hbmdyb3ZlIHByZXNlcnZhdGlvbi48L3A+XHJcbiAgICA8cD5UaGlzIGlzIG5vdCB0aGUgc29ydCBvZiBwZXJzb24gc2hlIGlzOyBzaGUgaXMgdGhlIHNvcnQgb2YgcGVyc29uIHdobyB0ZWxscyBwYXJhYmxlcyBhYm91dCB0aGUgZnVuZGFtZW50YWwgZGlmZmVyZW5jZXMgaW4gYmVoYXZpb3IgYmV0d2VlbiBidWNrZXRzIG9mIE1leGljYW4gYW5kIEFtZXJpY2FuIGNyYWJzLjwvcD5cclxuICAgIDxwPlNvIHdoYXQgc2hlIHNheXMgaXMgdHJ1ZSB0byBmb3JtOiBzaGUgc2F5cywgdGhhdCdzIGJlY2F1c2Ugd2UgbGl2ZSBpbiBhIHRoaXJkIHdvcmxkIGNvdW50cnksIGRlYXIuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTMnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5BdCBlaWdodGVlbiwgSSBoYXZlIG5vdCB5ZXQgbGVhcm5lZCB0aGF0LCB3aGVuIHNvbWVvbmUgdGVsbHMgbWUgdGhleSBkb24ndCBzcGVhayBTcGFuaXNoLCB0aGV5IG1lYW4gdGhhdCB0aGV5IHNwZWFrIG5vIFNwYW5pc2guIE1leGljbyBtYW5kYXRlcyBmb3JlaWduIGxhbmd1YWdlIGVkdWNhdGlvbiBhZnRlciBzaXh0aCBncmFkZTsgSSBoZWFyIGFib3V0IHBlb3BsZSB3aG9zZSBzY2hvb2xzIGFyZSBsYXJnZSBhbmQgdXJiYW4gYW5kIG1vbmllZCBlbm91Z2ggdG8gaGF2ZSBjaG9pY2VzIG9mIGxhbmd1YWdlcywgYnV0IGV2ZXJ5b25lIGhhcyB0aGUgb3B0aW9uIG9mIEVuZ2xpc2guIFRoZXJlIGFyZSBmaXZlIHRob3VzYW5kIHBlb3BsZSBpbiBteSB0b3duIGFuZCBzaXggaHVuZHJlZCB0aG91c2FuZCBpbiBteSBzdGF0ZS4gVGhlIG9ubHkgb3B0aW9uIGlzIEVuZ2xpc2guIDwvcD5cclxuICAgIDxwPlRoZSBvbmx5IG9wdGlvbiB3YXMgRW5nbGlzaCBsb25nIGJlZm9yZSB0aGF0LCBhbnl3YXk7IHdoZW4gdGhlIG1vbmV5IGFuZCB0aGUgbWVkaWEgYW5kIHRoZSBzaGlwcGluZyBjb21lcyBpbiBvbmUgbGFuZ3VhZ2UsIHlvdSBwaWNrIGl0IHVwLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5NCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZXJlJ3MgYSBzcGVjaWZpYyBnZW5lcmF0aW9uIG9mIFNwYW5pc2gtRW5nbGlzaCBzbGFuZyBJIGhhdmUgdGhhdCBJIHN1c3BlY3QgaXMgZGVhZCBieSBub3cuIEl0J3MgYSBtaWRwb2ludDogdm9jYWJ1bGFyeSB3aXRob3V0IGdyYW1tYXIsIGtleXdvcmRzIHdpdGhvdXQgY29tcHJlaGVuc2lvbi4gSG90IGRvZ3MgdmFyeSB3aWxkbHkgYmV0d2VlbiBjb3VudHJpZXMsIGFuZCwgd2l0aGluIE1leGljby0tbm90IHRoYXQgeW91J2xsIGtub3cgdGhpcyBvbmxpbmUtLWJldHdlZW4gc3RhdGVzLCBhbmQgdGh1cyBJIGFtIGFzIGNvbW1pdHRlZCBhcyB5b3UgbWlnaHQgZXhwZWN0IHRvIHRoZSBhcmd1bWVudCB0aGF0IG5vIG9uZSBlbHNlIG1ha2VzIHRoZW0gcmlnaHQ7IGFzIHN1Y2gsIEkgaGF2ZW4ndCBoYWQgYSBob3QgZG9nIHNpbmNlIEkgd2FzIGVpZ2h0ZWVuLiA8L3A+XHJcbiAgICA8cD5UaGUgY2FydCB3aGVyZSBteSBmYXRoZXIgYW5kIEkgd2VyZSByZWd1bGFycyBoYWQgYSBodXJyaWNhbmUgbGFtcCB3aXRoIG5vIGdsYXNzLCBmb3IgYSB3aGlsZSwgYW5kIEkgbGlrZWQgc3RhbmRpbmcgY2xvc2UgZW5vdWdoIHRvIHRoZSBjb29raW5nIHN1cmZhY2UgdG8gZ2V0IHRoZSB0aW5pZXN0IHBpdHRlci1wYXR0ZXIgb2YgaG90IG9pbCBvbiBteSBhcm1zLiA8aT5IYXRlcyBFbCBHXHUwMEZDZXJvPC9pPiwgcGFpbnRlZCBvbiB0aGUgd2hpdGUgc3VyZmFjZSBieSB0aGUga2luZCBvZiBkcmFmdHNtYW4gSSB3YXMgdHJhaW5lZCB0byBiZSBpbiBzZWN1bmRhcmlhIGFuZCB3aG9zZSBwcm9mZXNzaW9uIGhhc24ndCBleGlzdGVkIGluIHRoZSBub3J0aCBmb3IgZ2VuZXJhdGlvbnM6IHRoZSA8aT5ob3QgZG9nPC9pPiB3YXMgaW1wb3J0ZWQgYmVmb3JlIHRoZSBFbmdsaXNoIGFkamVjdGl2ZS1ub3VuIG9yZGVyIGNvdWxkIGZvbGxvdyBzdWl0LjwvcD5cclxuICAgIDxwPkFub3RoZXIgd29yZCBJIHVzZSBhcyBhbiBleGFtcGxlOiA8aT5tYWNoXHUwMEVEbjwvaT4sIGFuIGFsbC1wdXJwb3NlIGludGVuc2lmaWVyLiBXaGVuIEVuZ2xpc2ggYnJvdWdodCA8aT5tYWNoaW5lPC9pPnMgdGhlIGNsZWFyZXN0IHBvaW50IG9mIHJlZmVyZW5jZSBpbiBjb21tb24gIGZvciB0aGUgcmVmZXJlbnRzIG9mIHRoZSB3b3JkIHdhczogbW9yZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5NSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkluZHVzdHJpYWxpemF0aW9uIHRyaWNrbGVzIGRvd24uIEVtaXNzaW9ucyB0cmlja2xlIGRvd24uIENsaW1hdGUgY2hhbmdlIHJlYWNoZXMgdXAsIGRyaWZ0cywgbGlrZSBDYWxpZm9ybmlhIHNtb2tlLCBsaWtlIGl0J3MgZG9nZ2luZyBteSBmb290c3RlcHMuIExpa2UgaXQgd2FudHMgdG8gZG8gYW55b25lJ3MgYWJpbGl0eSB0byB0YWxrIHRoZSBiaWcgcGljdHVyZSBvdXQgdGhlIG9wcG9zaXRlIG9mIGFueSBmYXZvcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzYoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTYnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGVyZSBpcyBhbiBhcmd1bWVudCBhYm91dCBtYXlvbm5haXNlIEkgaGF2ZSB3aGVuZXZlciBJIGNhbi4gQW1lcmljYW5zLCBhcyBhIG5hdGlvbmFsIHBhc3RpbWUsIGVuam95IHRha2luZyBjcmVkaXQgZm9yIHRoZSBjb25jZXB0IGFuZCB0aGVuIG1vbm9sb2d1aW5nIGFib3V0IGhvdyBtdWNoIHRoZXkgaGF0ZSBpdC4gVGhlcmUgaXMgYSBnZW5lcmFsIGF0dGVtcHQgdG8gZXN0YWJsaXNoIGl0IGFzIHN5bm9ueW1vdXMgd2l0aCB3aGl0ZW5lc3MgaW4gdGhlIHJhY2lhbCBzZW5zZSBhcyBvcHBvc2VkIHRvIHRoZSB2aXN1YWwgb25lLiBJIGRvbid0IGtub3cgd2hvIGJlbmVmaXRzIGZyb20gdGhhdCwgYnV0IGl0IG1ha2VzIHRoZSBwcmVhbWJsZSB0byBFbmdsaXNoLWxhbmd1YWdlIHJlY2lwZXMgZm9yIEphcGFuZXNlIHBhbmNha2VzIGV4aGF1c3RpbmcuPC9wPlxyXG4gICAgPHA+SSBoYXZlIHNwZW50IHllYXJzIGl0ZXJhdGluZyBvbiB0aGUgYXJndW1lbnQgdGhpcyBtZWFucyBoYXZpbmcsIHdoZW4gSSBjYW4gYm90aGVyLiBNYXlvbm5haXNlIGlzIGNvbW1vbiB3aGVyZSBJJ20gZnJvbSwgaW4gdGhlIGRlc2VydDogbWl4ZWQgd2l0aCBtaWxrIGFzIGEgZmF0IGZvciBmcnlpbmcgYW5kIGEgdG9wcGluZyBmb3Igc2VlbWluZ2x5IGhhbGYgb2YgYWxsIHNhdm9yeSBkaXNoZXMgeW91IGNhbiBzaGFrZSBhIHNxdWlydCBib3R0bGUgYXQgaXQuPC9wPlxyXG4gICAgPHA+VGhhdCdzIGRpc2d1c3RpbmcsIHBlb3BsZSB0ZWxsIG1lIGluIEVuZ2xpc2gsIGFuZCB0aGV5IHdvdWxkIGxpa2UgdG8gYmxhbWUgYSB3aGl0ZSBwZXJzb24gZm9yIGl0LjwvcD5cclxuICAgIDxwPk1heW9ubmFpc2UgaXMgYSBzaGVsZi1zdGFibGUgZW11bHNpb24gb2YgZWdncyBhbmQgb2lsLCBJIHRlbGwgdGhlbS4gV2hvIG9uIEVhcnRoIGhhcyB0aGUgcmVmcmlnZXJhdGVkIHRydWNrcyB0byB3YXN0ZSBvbiB0aGUgYWx0ZXJuYXRpdmUuIElzIHRoYXQgcmVhbGx5IHRoZWlyIHByZWZlcnJlZCByZXNvdXJjZSBhbGxvY2F0aW9uLiBJcyB0aGF0IHNvbWV0aGluZyB0aGV5IGNvbnNpZGVyIHdvcnRod2hpbGUgZm9yIGEgcGllY2Ugb2Ygc3ltYm9saXNtIHRoZXkgbWFkZSB1cC48L3A+XHJcbiAgICA8cD5UaGlzIGRvZXMgbm90IGFjdHVhbGx5IGVuZCBhcmd1bWVudHM7IGZvciBvbmUgdGhpbmcsIGl0IHJlcXVpcmVzIGFuIHVuZGVyc3RhbmRpbmcgb2YgaG93IGhhcmQgYSByZWZyaWdlcmF0ZWQgdHJ1Y2sgaGFzIHRvIHdvcmsgZm9yIChzYXkpIGEgdGhvdXNhbmQgbWlsZXMgb2YgZGVzZXJ0IGR1ZSBzb3V0aCBvbiB0aGUgSGlnaHdheSBPbmUgYXMgSSBrbm93IGl0LiBGb3IgYW5vdGhlciwgaXQgcmVxdWlyZXMgYW4gdW5kZXJseWluZyB1bmRlcnN0YW5kaW5nIG9mIHJlZnJpZ2VyYXRpb24sIGFuZCB0cnVja3MsIGFuZCByZWZyaWdlcmF0ZWQgdHJ1Y2tzLCBhcyBsaW1pdGVkIHJlc291cmNlcyB0byBiZWdpbiB3aXRoLiA8L3A+XHJcbiAgICA8cD5CdXQgaXQgZG9lcyBzb21ldGltZXMgbWFrZSBpdCBtb3JlIHRvbGVyYWJsZSB0byBsaXZlIHdpdGguPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTcnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGFtIG5vIG9sZGVyIHRoYW4gZWxldmVuIHllYXJzIG9sZCwgYW5kIEkgYW0gYXR0ZW1wdGluZywgYXMgSSBvZnRlbiBkbywgdG8gaWdub3JlIG15IG1vdGhlci4gVGhlcmUgaXMgYSBjdXR0aW5nIHF1YWxpdHkgdG8gaGVyIHZvaWNlLCBhbmQgbXkgYnJhaW4gaXMgdHVuZWQgdG8gaXQgbWVhbmluZyBkYW5nZXI7IHNvLCBhcyBJIGFsc28gb2Z0ZW4gZG8sIEkgYW0gZmFpbGluZy4gSSB3b3VsZCBiZSBkb2luZyBiZXR0ZXIsIGJ1dCBJIGFtIHdhaXRpbmcgZm9yIGhlciBpbiB0aGUgY2FyICh0cnVjazsgaXQgd2lsbCB0YWtlIGF0IGxlYXN0IGEgZGVjYWRlIGZvciBtZSB0byB1bmRlcnN0YW5kIHRoYXQgdHJ1Y2tzIGFyZSBzdXBwb3NlZGx5IG5vdCBjYXJzKSwgYW5kIEkgaGF2ZSBydW4gb3V0IG9mIGJvb2tzIHRvIGRvIGl0IHdpdGguIDwvcD5cclxuICAgIDxwPihUaGVyZSBhcmUgbm90IHJlbGV2YW50IG1vYmlsZSBkZXZpY2VzIGluIG15IGxpZmUgeWV0OyB3aGVuIEkgbGVhdmUgdGhlIGhvdXNlLCBJIGRvIHNvIHdpdGggb25lIG9yIG1vcmUgYm9va3MuIEFzIG15IGZhdGhlciBwdXRzIGl0LCBiYWQgdGhpbmdzIGhhcHBlbiB3aGVuIHlvdSBsZWF2ZSB0aGUgaG91c2Ugd2l0aG91dCBhIGJvb2suIElmIHdlJ3JlIGdvaW5nIHRvIGEgY2l0eSwgSSBkbyBzbyB3aXRoIGEgc3RhY2sgaW4gdGhlIGZvb3R3ZWxsLiBTb21ldGltZXMsIGFzIG5vdywgSSBzdGlsbCB1bmRlcmVzdGltYXRlIHdoYXQgY291bGQgYmUgZW5vdWdoLik8L3A+XHJcbiAgICA8cD5NeSBtb3RoZXIgaXMgYnV5aW5nIGFsZmFsZmEgZm9yIGhvcnNlcywgcHVsbGVkIG92ZXIgYnkgdGhlIHNpZGUgb2YgdGhlIHJvYWQgd2hlcmUgc2hlJ3MgbWV0IGEgbWFuIHdpdGggYW4gZWlnaHRlZW4td2hlZWxlciBzdGFja2VkIHdpdGggaXQuIEkgd2lsbCByZWFsaXplLCBtdWNoIGxhdGVyLCB0aGF0IHRoaXMgd2FzIHByb2JhYmx5IHNvbWUgbGV2ZWwgb2YgY2FzaCB1bmRlciB0aGUgdGFibGU7IGl0IHdpbGwgbm90IG9jY3VyIHRvIG1lIHVudGlsIGFkdWx0aG9vZCB0aGF0IHRoZSB0cnVja2VycyBicm91Z2h0IHRoZSByZXN0IG9mIHRoZSBiYWxlcyB0byBzdG9yZXMsIHdoZXJlIHByZXN1bWFibHkgcGVvcGxlIHdvdWxkIHBheSBmb3IgdGhlbS4gTXkgY29udGV4dCBpcyBqdXN0IHRoaXM6IHRoZSBkdXN0eSBzaWRlIG9mIGEgcm9hZCwgYSBwaWNrdXAgdHJ1Y2ssIGEgZmxhdGJlZCBmdWxsIG9mIHJlY3Rhbmd1bGFyIHByaXNtcyB0aGF0LCBtb3JlIGFuZCBtb3JlIG9mdGVuLCBhcmUgbm90IHRoZSByaWdodCBzaGFkZSBvZiBncmVlbi48L3A+XHJcbiAgICA8cD5TaGUgZGVtYW5kcyBoZSBsZXQgaGVyIGJyZWFrIG9wZW4gYSBiYWxlIGZvciBpbnNwZWN0aW9uLCBhbmQgdGhlbiBmaW5kcyB3aGF0IHNoZSBhbnRpY2lwYXRlZC4gVGhpcyBpcyBkcnksIHNoZSBzYXlzLCBvZiB0aGUgc3RpZmYgeWVsbG93IG91dHNpZGU7IHRoaXMgaXMgd2V0LCBvZiB0aGUgcGxpYWJsZSBncmVlbiBpbnNpZGUsIHRvbyB3YXRlci1kYXJrLiBUaGV5IGhhdmUgcGlja2VkIGFuZCBiYWxlZCBpdCB0b28gc29vbi4gSXQncyBnb2luZyB0byByb3QuPC9wPlxyXG4gICAgPHA+VGhlIG1hbiBzYXlzIGl0J3Mgd2hhdCBoZSBoYXMsIHdoaWNoIGlzIG9idmlvdXNseSB0cnVlLiBJdCdzIGFib3V0IHRoZSBmb3Jlc2hvcnRlbmluZyBvZiB0aGUgZ3Jvd2luZyBzZWFzb247IGRyb3VnaHQgYW5kIGhlYXQgYW5kIGh1cnJpY2FuZXMgdGhhdCBjb21lIHdoZW4gdGhleSdyZSBub3Qgc3VwcG9zZWQgdG8sIHdoaWNoIGlzIHRvIHNheSB0aGUgc2FtZSB0aGluZyB0aHJpY2UuIFRoZSBzdGVtcyBhbmQgbGVhdmVzIGFyZSBwYWNrZWQgaW50byBiYWxlcyB0b28gZWFybHkgb3IgdG9vIGxhdGUuIFNoZSdzIHJpZ2h0IHRoYXQgdGhleSBtb2xkZXIuIEhlJ3MgcmlnaHQgdGhhdCBpdCdzIG5vdCBsaWtlIHRoZSBmYXJtIGdhdmUgaGltIGFueXRoaW5nIGVsc2UuIEluIGEgY291cGxlIG1pbnV0ZXMgdGhleSdsbCBtb3ZlIG9uIHRvIGhhZ2dsaW5nIGFib3V0IHNwaWtlcyBpbiBwcmljZS48L3A+XHJcbiAgICA8cD5JIGtub3cgdGhpcy4gSSBwaWNrIHVwIHRoZSBib29rIHNoZSdzIGJyb3VnaHQgd2l0aCBoZXIgZnJvbSB0aGUgY2VudGVyIGNvbnNvbGUsIHRvIHNlZSBpZiBJIGNhbiB0dW5lIHRoZSBvbmdvaW5nIG5lZ290aWF0aW9ucyBiZXR0ZXIgcmVhZGluZyBpdC4gVGhlIGNoYW5nZSBvZiBzZWFzb25zIGlzIHRlbiB5ZWFycyBvdXQgZnJvbSBjb21pbmcgTm9ydGggZW5vdWdoIHRvIG1ha2UgdGhlIG5ld3MsIHRob3VnaCB0aGV5IGluZXZpdGFibHkgZG8uPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTgnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5BdCB0d2VudHktZml2ZSBJIHBpY3R1cmUgdGhlIGhlYXQgZG9tZSBvdmVyIEtpbmcgQ291bnR5IGxpdGVyYWxseSBlbm91Z2g6IGxpa2UgYSBncmVhdCBoYW5kIGhhcyByZWFjaGVkIG92ZXIgYW5kIGRlbGljYXRlbHkgcGxhY2VkIGEgZ2xhc3MgcG90IGxpZCBvdmVyIHRoZSBsYW5kLCB3aXRoIGFsbCB0aGUgY2FwdHVyZWQgc3RlYW0gdGhhdCBlbnRhaWxzLiA8L3A+XHJcbiAgICA8cD5JdCBoYXMgY29tZSB0byBteSBhdHRlbnRpb24gdGhhdCBubyBvbmUgaGVyZSBidWlsdCBjZWlsaW5nIGZhbnMgaW50byB0aGVpciBob3VzZXMuIEkgZG91YmxlIHRoZSBudW1iZXIgb2YgZmFucyBpbiBvdXIgYXBhcnRtZW50LCBtYXR0ZXIgb2YgZmFjdDsgdGhlbiBJIHRyaXBsZSBpdC4gSSBydW4gc2xpZ2h0bHkgYnV0IGNydWNpYWxseSBhaGVhZCBvZiB0aGUgc3Vic2VxdWVudCBydW4gb24gZmFucyBpbiBzdG9yZXMsIHdoZW4gcGVvcGxlIHVuZGVyc3RhbmQgd2hhdCdzIGdvaW5nIG9uIGFyb3VuZCB0aGVtLjwvcD5cclxuICAgIDxwPk15IHBhcnRuZXIncyBwYXJlbnRzJyBob3VzZSBoYXMgYWlyIGNvbmRpdGlvbmluZy4gSGlzIG1vdGhlciBwb2ludHMgb3V0IHRoYXQgdGhpcyBwdXRzIHRoZW0gaW4gYSB0aGlyZCBvZiBTZWF0dGxlIGFyZWEgcmVzaWRlbmNlcy4gSGUgYW5kIEkgYW5kIGhpcyBzaXN0ZXIgdmlzaXQsIGluIHNvbWUgZGVzcGVyYXRpb246IHRocmVlIGhvdXNlaG9sZHMgdG90YWwsIHByb3BvcnRpb25hdGUuIFRoZXkgZG8gbm90IGhhdmUgZmFuczsgSSBhbSBiYWZmbGVkLiBUaGlzIGlzIHdoZW4gSSBub3RpY2UgdGhhdCB0aGV5IGRvbid0IGhhdmUgYSBjZWlsaW5nIGZhbi4gSSB0cnkgdG8gYmUgbW9yZSBvYnNlcnZhbnQgdGhhbiB0aGF0LCBidXQgaXQgaGFkbid0IG9jY3VycmVkIHRvIG1lIHRvIHNlZSBhIGNlaWxpbmcgd2l0aG91dCBvbmUuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBrbm93IHRoZXNlIHRlbXBlcmF0dXJlcyB0aGUgd2F5IG15IGxvdmVkIG9uZXMgZG8gbm90LCBidXQgSSBkaWRuJ3QgbGlrZSB0aGVtIGFueSBiZXR0ZXIgd2hlbiBJIHdhcyB5b3VuZ2VyLiBJIHdlYXIgbW9yZSBsYXllcnMgbm93LCBieSBtZWRpY2FsIG5lY2Vzc2l0eSwgYW5kIGFtIGxlc3MgYWNjbGltYXRlZCwgdHJhZGluZyB0aGUgcGxhY2lkIHJlc2lnbmF0aW9uIHRvIHN1bW1lciBjb21tdXRlcyBhdCAxMjBGICh0aGUgY2FyIGhhZCBicm9rZW4sIG15IGZpcnN0IHN1bW1lciBpbiBwZXJoYXBzLWhpZ2ggc2Nob29sLCBpbiBzdWNoIGEgd2F5IGFzIG1lYW50IG9uZSBoYWQgdG8gcnVuIHRoZSBoZWF0ZXIgaW4gb3JkZXIgdG8gaWRsZSBpdCwgd2hpY2ggZGlkbid0IGhlbHApIGZvciB0b2xlcmF0aW5nIHNub3cuIFRoZSB1cHNob3QgaXMgdGhhdCBJIGFtIG1vcmUgZnVuY3Rpb25hbCBidXQgcG9vcmx5IGZ1bmN0aW9uaW5nOyBJIGRvbid0IHJlYWxpemUgdW50aWwgbGF0ZXIgd2h5IEknbSBub3QgZWF0aW5nIG9yIHNsZWVwaW5nLCBhbmQgdGhlbiBJIHJlbWVtYmVyLjwvcD5cclxuICAgIDxwPkkgYWRkIGFpciBjb25kaXRpb25pbmcgdG8gdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBvdXIgbmV4dCBhcGFydG1lbnQsIGxvbmcgc2hvdCB0aGF0IGl0IGlzLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmU0MCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm9ydHknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZXJlLCBmb3IgdGhlIHNlY29uZCB0aW1lOiBUdWVzZGF5LiAyMDIyLiBGZWJydWFyeS4gSW5jcmVhc2luZ2x5IGhlYXZ5IHNub3csIHdoaXRlciB0aGFuIG15IHBhcnRuZXIncyBrbnVja2xlcyBvbiB0aGUgc3RlZXJpbmcgd2hlZWwuPC9wPlxyXG4gICAgPHA+XCJJIGhhdGUgdGhpcyxcIiBoZSBzYXlzLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLjwvcD5cclxuICAgIDxwPlwiSXQncyBiZWF1dGktLUknbSBzb3JyeSxcIiBJIHNheSwgdG8gbXkgcGFydG5lciwgd2hvJ3MgdGhlIG9uZSB3aG8gaGFzIHRvIGRyaXZlIHRocm91Z2ggaXQuIEFzIHRoZSB0cmVlcyB3ZSBwYXNzIGJ5IGFyZSByZW5kZXJlZCBpbnRvIGJsYWNrIGFuZCB3aGl0ZSBzdHJhaWdodCBsaW5lcywgcmVhY2hpbmcgb3V0IHRvIG1lLiBcIkkgc3RpbGwgdGhpbmsgaXQncyBiZWF1dGlmdWwsIEknbSBzb3JyeS5cIiA8L3A+XHJcbiAgICA8cD5UaGUgdXJnZSB0byBhcG9sb2dpemUgaXMgYmVjYXVzZSBoZSdzIHN0cmVzc2VkLiBJIGtub3cgdGhpcyBtYWtlcyBpdCBkaWZmaWN1bHQsIGV2ZW4gd2l0aG91dCB0aGUgY291bnRlcndlaWdodCBvZiBhIHN3YXRoZSBvZiBvdXIgZm9ybWVyIGFwYXJ0bWVudCwgdG8gZHJpdmUuIEkgc2F3IHRoZSBhZHZpc29yeSBhYm91dCBibGFjayBpY2UgZmlyc3QgYmV0d2VlbiB0aGUgdHdvIG9mIHVzLiBJIGtub3cgZml2ZSB3aW50ZXJzIHdvcnRoIG9mIHdoYXQgc25vdyBkb2VzIHRvIFNlYXR0bGUsIHdoZXJlIHRoZSB3aW50ZXIgd2VhdGhlciBpcyBub3Qgc3VwcG9zZWQgdG8gc25vdy4gPC9wPlxyXG4gICAgPHA+QW5kIGJlY2F1c2UgSSB0cnVzdCBoaW0gZW5vdWdoIHRvIGNvbW1lbnQgb24gdGhlIGJlYXV0eSwgdGhlIHBvaW50IG9mIHZpZXcgdGhhdCBiZWluZyBhIHBlcnBldHVhbCBwYXNzZW5nZXIgY2FuIGFmZm9yZCBtZS4gSGUga25vd3Mgd2hhdCBoZSBjaG9zZSB0byBtYXJyeTsgSSBjYW4gYWZmb3JkIHRvIGJsdXJ0IG91dCBteSBmZWVsaW5ncyBvbiBwcmVjaXBpdGF0aW9uLiBJIHRyeSB0byBtZW1vcml6ZSBpdCwgc25vdyBuZWFyIG1pZG5pZ2h0IGluIGEgbW92aW5nIGNhciwgZm9yIGxhdGVyLiBGb3IgdGhpcy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmU0MSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm9ydHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSdtIG5vdCBzb3JyeSB0aGF0IGhlIGNhbid0IHNoYXJlIGhpcyB3ZWF0aGVyIGFzIGhlIG1lYW5zIGl0IHRvIGJlIHdpdGggbWUsIG5vdCB1bmxlc3MgSSB0aGluayBhYm91dCBpdC4gTm8gb25lJ3MgYmVlbiBhYmxlIHRvIGRvIHRoYXQsIGFueXdoZXJlIEkgZ28sIGluIG15IGVudGlyZSBhZHVsdCBsaWZlLiBJIGRvbid0IGtub3cgaG93IG9uZSB3b3VsZCBzdGFydC48L3A+XHJcbiAgICA8cD5CdXQgSSBkbyBrbm93LCB3aGVuIEkgdGhpbmsgYWJvdXQgaXQsIHRoYXQgdGhhdCdzIGJlaW5nIHN0b2xlbiBmcm9tIGhpbSBieSBhdHRyaXRpb247IHdlIHRhbGsgYWJvdXQgZmxvb2QgcmlzayB3aGVuIHdlIHRhbGsgYWJvdXQgb3VyIGxvbmctdGVybSBmdXR1cmUsIGFib3V0IFNlYXR0bGUgYW5kIGl0cyBzZWEgbGV2ZWwsIGFib3V0IHRoZSBpbmV2aXRhYmlsaXR5IG9mIG1vdmluZyBpbmxhbmQgd2hlbiB3ZSBsaXZlIGxvbmcgZW5vdWdoIHRvIGRvIHNvLiAoSSB0ZWxsIGhpbSBJJ3ZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IHRoZSBUd2luIENpdGllcycgYWJpbGl0eSB0byBtYWludGFpbiBhIGRlY2VudCByYW1wLiBQcmVjaXBpdGF0aW9uIGtpbGxzIHBhdmVtZW50LCB0aGUgd2F5IHdhdGVyIGNhbiBraWxsIGFueXRoaW5nLikgVW5kZXJnaXJkaW5nIGl0IGFsbDogd2UncmUgbm90IGdpdmluZyB1cCBvbiBoaXMgaG9tZSBhbmQgZmFtaWx5IGFueSB0aW1lIHNvb24sIGJ1dCB3aXRoaW4gb3VyIGxpdmVzIHdlIGZ1bGx5IGV4cGVjdCB0byBkbyBzbywgYXMgbWF0dGVyIG9mIGZhY3QgYXMgZ2l2aW5nIGhpbSBteSBtZWRpY2FsIHBvd2VyIG9mIGF0dG9ybmV5LjwvcD5cclxuICAgIDxwPjxpPlRoaW5ncyBhcmUganVzdCBnb2luZyB0byBrZWVwIGhhcHBlbmluZyB3aGlsZSB5b3UncmUgbm90IGhlcmUsPC9pPiBteSBmYXRoZXIgc2FpZC4gUmFpbiBjcmVlcHMgdW5kZXIgcm9hZHMgYW5kIHNpZGV3YWxrcyBiYWNrIGhvbWUsIHdoZW4gdGhleSdyZSBwYXZlZCwgYW5kIHB1bGxzIHRoZW0gaW50byBjcmF0ZXJzLiBTZWF0dGxlIGhhcmRseSBlc2NhcGVzIHBvdGhvbGVzIGl0c2VsZi4gQnV0IHlvdSB3b3VsZG4ndCBrbm93IHRoYXQgZnJvbSB0aGUgbWVkaWEsIGlmIHlvdXIgdmFudGFnZSBwb2ludCBpcyBhIHRoaXJkLXdvcmxkIGNvdW50cnkuPC9wPlxyXG4gICAgPHA+SSBtZWFudCwgeWVhciBvbiB5ZWFyIG9uIHllYXIsIHRvIGdvIGJhY2sgdG8gTWV4aWNvLiBOb3QgaG9tZTsgbm90IG9uY2UgSSdkIGRpc2NvdmVyZWQgdGhlIGx1eHVyaWVzIG9mIHB1YmxpYyB0cmFuc3BvcnRhdGlvbiB0aGF0IGNvdWxkIGZlcnJ5IG1lIHdpdGhvdXQgZmF2b3JzIHRvIGRvY3RvcnMgSSBzZWUgZm9yIHRoZSBzYW1lIHJlYXNvbnMgSSBjYW4ndCBkcml2ZSBhbmQgZm9yIG90aGVyIHRoaW5ncyBhbGlrZS4gQnV0IEQuRi4sIG9yIEd1YWRhbGFqYXJhLiBMaXR0bGUgbGVzcyBhbGllbiB0aGFuIGhlcmUsIGJ1dC0taWYgSSBjb3VsZCBqdXN0IGZpbmlzaCBteSBkZWdyZWUsIHNvbWVkYXktLW1vcmUgYnV5aW5nIHBvd2VyLjwvcD5cclxuICAgIDxwPkJ1dCB0byBnZXQgb3V0IG9mIE9oaW8gSSBmb2xsb3dlZCBteSBwYXJ0bmVyIGhvbWUsIGFuZCBoZSBoYXMgZmFtaWx5IGhlcmUuIFdoZXJlIHRoZXJlJ3MgcnVubmluZyB3YXRlciBhcyBhIG1hdHRlciBvZiBjb3Vyc2UsIGFuZCB5b3UgY2FuIGRyaW5rIGl0LCBpZiB5b3Ugd2FudCwgd2hlbiB5b3UgbmVlZCBzb21ldGhpbmcgd2l0aCB3aGljaCB0byBzd2FsbG93IG1lZGljYXRpb24gdGhhdCBjYW1lIGluIHRoZSBtYWlsLjwvcD5cclxuICAgIDxwPkFuZCBub3cgSSBwdXQgZG93biByb290cyBhcyB0aGVpciByZXNlbWJsYW5jZSB0byBoaXMgbW9kZWwgb2YgdGhlIGNpdHkgaGUgYnJvdWdodCBtZSB0byBlcm9kZXMuIFdpbnRlciBzbm93czsgc3VtbWVyIGJ1cm5zLiBJIGRvbid0IGtub3cgYW55IGRpZmZlcmVudCwgYW5kIG9ubHkgYmVsYXRlZGx5IHdvbmRlciBpZiBoZSdzIHdhbnRlZCBtZSB0by4gSGlzIHBhcmVudHMgaGF2ZSBhIGxhd247IHRoZSBHcmVhdGVyIFNlYXR0bGUgb2YgaGlzIGNoaWxkaG9vZCBpcyBhcHByb3hpbWF0ZWx5IGFzIGFsaWVuIHRvIG1lLCBpbiBib3RoIHdheXMsIGFuZCB1bmF2YWlsYWJsZSBhcyBhIGJhY2tkcm9wLiBXaGF0IEkndmUgbG9zdCBhbG9uZyB0aGUgc2FtZSBsaW5lcyBpcyBhbiB1bmtub3duLiBJIHdhbnQgdG8gc2hvdyBoaW0gT2N0b2JlciwgdGhvdWdoIEkgZG9uJ3Qga25vdyBob3cgbXVjaCBPY3RvYmVyJ3MgbGVmdCB0byBzaG93LiBJIGRvbid0IGZlZWwgaXQsIHRob3VnaCwgYWJzZW50IHRoYXQgZXhwZXJpZW5jZSBvZiBhY3R1YWxseSBrbm93aW5nIHdoYXQgaGFzbid0IHN1cnZpdmVkIG15IGNoaWxkaG9vZCBlaXRoZXIuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5Mic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkndmUgbGl2ZWQgbG9uZ2VyIGluIFNlYXR0bGUgdGhhbiBhbnl3aGVyZSBlbHNlIGluIHRoZSBVbml0ZWQgU3RhdGVzLCBidXQgbm90IGxvbmcgZW5vdWdoIHRvIGxvc2UgdGhpbmdzIHRvIHRoZSBwcmVzZW50LiBJIGRvbid0IGhhdmUgYSBzZW5zZSBvZiBwYXR0ZXJucyBhYm91dCBpdCBzYXZlIGluIHRoZSBicm9hZGVzdCBvZiBzZW5zZXM7IHRoaXMgaXMgd2hhdCBJIGtub3cuIEkgY2hlY2sgdGhlIHdlYXRoZXIuIFBlb3BsZSBhc2sgaWYgaXQgdG9ybWVudHMgbWU7IEkgdGVsbCB0aGVtIEkgbGlrZSBwcmVjaXBpdGF0aW9uLjwvcD5cclxuICAgIDxwPkkgbGlrZSB0aGUgc25vdy48L3A+XHJcbiAgICA8cD5cIkknbSBzb3JyeSxcIiBJIHNheSwgZm9yIGxhY2sgb2YgYW55dGhpbmcgZWxzZSB0byBkby48L3A+XHJcbiAgICA8cD5cIkl0IGlzbid0IDxpPnlvdXI8L2k+IGZhdWx0LFwiIGhlIHNheXMuIFwiSSBqdXN0IHdpc2ggaXQgY291bGQndmUgd2FpdGVkLlwiIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2FpcnNwYWNlLmNzcydcclxuaW1wb3J0IExldFNheSBmcm9tICcuLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheSdcclxuLy9NYXkgYWRkIHBvZW0gZm9yIHB1bmNoLCBsYXRlci5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGFkYXRhKCkge1xyXG4gcmV0dXJuICggXHJcbiAgPGRpdiBpZD0nbWV0YWRhdGEnPlxyXG4gICA8ZGl2IGlkPSdwcm9qZWN0JyBjbGFzc05hbWU9J2NyZWRpdHMgYWJvdXQnPjxoMz5BYm91dCA8aT53aGF0IHRoZSB3ZWF0aGVyIGRvZXNuJ3Q8L2k+PC9oMz5cclxuICAgPHA+VGhpcyBlc3NheSB3YXMgZmlyc3QgY29tcG9zZWQgYXMgYSBmaW5hbCBwcm9qZWN0IGZvciBDSElEIDQ4MC1BIFwiVXBzaWRlIERvd24gVGhpbmtpbmcgV2l0aCB0aGUgR2xvYmFsIFNvdXRoXCIsIHdpbnRlciBxdWFydGVyIDIwMjIsIGF0IHRoZSBVbml2ZXJzaXR5IG9mIFdhc2hpbmd0b24uIFdpdGggdGhlIGV4Y2VwdGlvbiBvZiBzcGVjaWZpYyBlcGlncmFwaHMgYW5kIHF1b3RlcyAoc2VlIGJlbG93KSwgYWxsIGNvbnRlbnQgd2FzIHByb2R1Y2VkIGJ5IEN5cnVzIEVvc3Bob3Jvcy4gVmVyc2lvbiAxLjAgaXMgbGl2ZSBhcyBvZiBNYXJjaCAxOCwgMjAyMjsgdGVjaG5pY2FsIGltcHJvdmVtZW50cyBhcmUgcGxhbm5lZCBidXQgdGhlIGNvcmUgY29udGVudCBhbmQgcHJlc2VudGF0aW9uIGlzIGluIHBsYWNlLiBJZiBpdCBpbnRlcmVzdHMgeW91IHRvIGRvIHNvLCA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vY3lydXNhZS9vY2VhbnNpZGUnPnRoZSBzb3VyY2UgY29kZSBjYW4gYmUgdmlld2VkIG9uIEdpdEh1YjwvYT4uPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdtZScgY2xhc3NOYW1lPSdjcmVkaXRzIGFib3V0Jz48aDM+QWJvdXQgdGhlIGF1dGhvcjwvaDM+XHJcbiAgIDxwPkN5cnVzIEVvc3Bob3JvcyBpcyBoYXZpbmcgYSB0aW1lIG9mIGl0IGF0IGFsbCBwb3NzaWJsZSB0aW1lcy4gTW9yZSB3b3JrLCBsaWtlIGFuZCB1bmxpa2UgPGk+d2VhdGhlcjwvaT4gYWxpa2UsIGNhbiBiZSBmb3VuZCBhbmQgc3VwcG9ydGVkIDxhIGhyZWY9J2h0dHBzOi8vcGF0cmVvbi5jb20vZW9zcGhvcm9zJz5vbiBoaXMgUGF0cmVvbjwvYT4gZm9yIG5vdy4gT3RoZXIgdGVjaG5pY2FsIHByb2plY3RzIGhhdmUgYSBob21lIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9jeXJ1c2FlJz5vbiBHaXRIdWI8L2E+IGFsb25nc2lkZSB0aGlzIG9uZS4gSGUgYWxzbyBoYXMgPGEgaHJlZj0naHR0cHM6Ly92aXN1YWxpdHkuY2FycmQuY28nPnRoaXMgY29vbCB2aXJ0dWFsIGJ1c2luZXNzIGNhcmQ8L2E+IGZvciBob3BlZnVsbHkgcmVtZW1iZXJpbmcgdG8gdXBkYXRlIGltcG9ydGFudCBkYXRhIHdpdGguPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdjcmVkaXRzJyBjbGFzc05hbWU9J2NyZWRpdHMgc291cmNlcyc+PGgzPkNyZWRpdHMgYW5kIHRoaXJkIHBhcnR5IHNvdXJjZXM8L2gzPlxyXG4gICA8aDU+VGV4dDwvaDU+XHJcbiAgIFBvZW1zIHF1b3RlZDpcclxuICAgPHVsPlxyXG4gICAgPGxpPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiIGJ5IENyYWlnIFNhbnRvcyBQZXJlejwvbGk+XHJcbiAgICA8bGk+XCJMZXQgVGhlbSBOb3QgU2F5XCIgYnkgSmFuZSBIaXJzaGZpZWxkPC9saT5cclxuICAgIDxsaT5cIldBVkUgQUZURVIgV0FWRVwiIGJ5IE0uIEJhcnRsZXkgU2VpZ2VsPC9saT5cclxuICAgIDxsaT5cIk5vIExvbmdlciBPZGVcIiBieSBVcmF5b1x1MDBFMW4gTm9lbDwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIE90aGVyIHNvdXJjZXM6XHJcbiAgIDx1bD48L3VsPlxyXG4gICA8aDU+SW1hZ2VzPC9oNT5cclxuICAgPHA+Q2xpbWF0ZSBzdHJpcGVzIGdlbmVyYXRlZCB2aWEgPGEgaHJlZj0naHR0cHM6Ly9zaG93eW91cnN0cmlwZXMuaW5mbyc+U2hvdyBZb3VyIFN0cmlwZXM8L2E+LjwvcD5cclxuICAgPHA+VG9kb3MgU2FudG9zIHBob3RvZ3JhcGhzIGNvcHlyaWdodCBIb3dhcmQgRWttYW4sIHVzZWQgd2l0aCBwZXJtaXNzaW9uLjwvcD5cclxuICAgPHA+U2VhdHRsZSBzbW9rZSBzdW1tZXIgcGhvdG9ncmFwaHMgZGVwaWN0IHRoZSBDaGlodWx5IFNjdWxwdHVyZSBHYXJkZW4gYXQgU2VhdHRsZSBDZW50ZXIgYW5kIGFyZSBieSB0aGUgYXV0aG9yLjwvcD5cclxuICAgPHA+QWVyaWFsIGNsaW1hdGUgcGhvdG9ncmFwaHMgYnkgTkFTQS48L3A+XHJcbiAgIEltYWdlIGFzc2V0cyBmcm9tIFBOR3RyZWU6XHJcbiAgIDx1bD5cclxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3BuZ3RyZWUuY29tL2ZyZWVwbmcvaGVhdnktc25vd18zNzIzOTU0Lmh0bWwnPlwiaGVhdnkgc25vd1wiIGJhY2tncm91bmQ8L2E+PC9saT5cclxuICAgIDxsaT5CbGFjayBjbG91ZHMgYmFja2dyb3VuZDwvbGk+XHJcbiAgICA8bGk+QmxhY2sgbWlzdCBiYWNrZ3JvdW5kICMxPC9saT5cclxuICAgIDxsaT5CbGFjayBtaXN0IGJhY2tncm91bmQgIzI8L2xpPlxyXG4gICAgPGxpPkZpcmUgYW5kIHNwYXJrcyBiYWNrZ3JvdW5kPC9saT5cclxuICAgPGxpPjxpPkZyYW1lcyB1c2VkIGZvciBcIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjo8L2k+XHJcbiAgIDx1bD5cclxuICAgIDxsaT5CbHVlIHNtb2tlIGZyYW1lICMxPC9saT5cclxuICAgIDxsaT5CbHVlIHNtb2tlIGZyYW1lICMyPC9saT5cclxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3BuZ3RyZWUuY29tL2ZyZWVwbmcvYmx1ZS1zbW9rZS1hYnN0cmFjdC1mcmFtZS1hcnQtZnJlZS1wbmctYW5kLXBzZF81NTEyODE0Lmh0bWwnPkJsdWUgc21va2UgZnJhbWUgIzM8L2E+PC9saT5cclxuICAgPC91bD48L2xpPlxyXG4gICA8bGk+PGk+RnJhbWVzIHVzZWQgZm9yIG90aGVyIHF1b3Rlczo8L2k+XHJcbiAgIDx1bD5cclxuICAgIDxsaT5SZWQgYW5kIGJsYWNrIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5EYXJrIGJsdWUgc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPlB1cnBsZSB3YXRlcmNvbG9yIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5Db29sIGNvbG9ycyBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+Q2lyY3VsYXIgY3lhbiBmcmFtZTwvbGk+XHJcbiAgIDwvdWw+PC9saT5cclxuICAgPC91bD48L2Rpdj5cclxuICAgPGRpdiBpZD0ncmVzcGVjdHMnIGNsYXNzTmFtZT0nY3JlZGl0cyBhYm91dCc+PGgzPkFja25vd2xlZGdtZW50czwvaDM+XHJcbiAgIFNwZWNpZmljIHRoYW5rcyB0bzpcclxuICAgPHVsPlxyXG4gICAgPGxpPlRoZSA8YSBocmVmPSdodHRwczovL2Vzc2VudGlhbC1yYW5kb21uZXNzLnR1bWJsci5jb20vcG9zdC82NzcyOTMwMTQ1MzQ3NTAyMDgvaGktY2FuLXlvdS1lbGFib3JhdGUtb24tdGhlLXNwYWNlLXRoYXRzLWJlaW5nJz5GYW5kb20gQ29kZXJzIERpc2NvcmQgc2VydmVyPC9hPiwgZm9yIHRlY2huaWNhbCBhbmQgbW9yYWwgc3VwcG9ydDwvbGk+XHJcbiAgICA8bGk+UHJvZmUgVG9ueSwgZm9yIGxldHRpbmcgbWUgZ2V0IGF3YXkgd2l0aCB0aGlzIGluIHRoZSBmaXJzdCBwbGFjZTwvbGk+XHJcbiAgIDwvdWw+PC9kaXY+XHJcbiAgIDxMZXRTYXkgLz5cclxuICAgPGRpdiBpZD0nZ29iYWNrJz48YSBocmVmPScvJz5CYWNrIHRvIHRoZSBlc3NheTwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuICApIH1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldFNheSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdMZXRTYXknIGNsYXNzTmFtZT0ncG9lbScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2xldHNheSc+XHJcbiAgIDxpbWcgc3JjPScvcmVkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5MZXQgdGhlbSBzYXksIGFzIHRoZXkgbXVzdCBzYXkgc29tZXRoaW5nOjwvcD5cclxuICAgIDxwPkEga2Vyb3NlbmUgYmVhdXR5Ljxici8+XHJcbiAgICBJdCBidXJuZWQuPC9wPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5IHdlIHdhcm1lZCBvdXJzZWx2ZXMgYnkgaXQsPGJyLz5cclxuICAgIHJlYWQgYnkgaXRzIGxpZ2h0LCBwcmFpc2VkLDxici8+XHJcbiAgICBhbmQgaXQgYnVybmVkLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnIGlkPSdjcmVkX2xldHNheSc+XHJcbiAgICBKYW5lIEhpcnNoZmllbGQsPGJyLz48Y2l0ZT5cIkxldCBUaGVtIE5vdCBTYXlcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdmZWV0Jz5cclxuICAgPGRpdj48YSBocmVmPScvbWV0YWRhdGEvY3JlZGl0Jz5BYm91dDwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgRnJhZ21lbnRzIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvYXN0bGluZS5jc3MnXHJcbmltcG9ydCB7IEdsYWNpZXJBLCBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIjtcclxuaW1wb3J0IFdoYW0gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIjtcclxuaW1wb3J0IE9kZSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiO1xyXG5pbXBvcnQgR2FyZGVuIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGlcIjtcclxuaW1wb3J0IFdpblN1bSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J29jZWFuc2lkZSc+XHJcbiAgIDxtYWluIGlkPSd3YXRlcic+XHJcbiAgICA8ZGl2IGlkPSdiZWFjaCc+XHJcbiAgICAgPEZyYWdtZW50cyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvbWFpbj5cclxuICAgPFdoYW0gLz5cclxuICAgPEZvb3RlciAvPlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufVxyXG4iLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcbmltcG9ydCBCIGZyb20gJy4vZnJhZ21lbnRzL0InO1xyXG5pbXBvcnQgQyBmcm9tICcuL2ZyYWdtZW50cy9DJztcclxuaW1wb3J0IEQgZnJvbSAnLi9mcmFnbWVudHMvRCc7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8QiAvPlxyXG4gICA8QyAvPlxyXG4gICA8RCAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdoYW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2tpY2tlcic+XHJcbiAgIDxkaXYgaWQ9J2tpbWcnPjxpbWcgc3JjPScvY2xpbWF0ZV9zdHJpcGVzX214LnBuZycgYXJpYS1kZXNjcmliZWRieT1cIlwiIGFyaWEtZGV0YWlscz1cIlwiIGNsYXNzTmFtZT0nc2xpZGUtaW4tYmx1cnJlZC1ib3R0b20nIC8+PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2ZlZXQnPlxyXG4gICA8ZGl2PjxhIGhyZWY9Jy9tZXRhZGF0YS9jcmVkaXQnPkFib3V0PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlB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
