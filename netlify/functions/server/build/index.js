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

// app/routes/pacific/fragments/here.tsx
init_react();
var cap_here = "Screenshot of a section of a satelite map of the globe. Find the end of the American California; here, San Diego. Go as straight of south as you can get for a thousand miles on the only highway, until you hit the point where the Tropic of Cancer meets the Pacific coastline. This is Todos Santos. You are here.";
function Here() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Here",
    className: "flip-in-hor-top hero",
    role: "img",
    "aria-describedby": "cap_here"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/you_are_here.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_here",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_here)));
}

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene02, null), /* @__PURE__ */ React.createElement(Here, null), /* @__PURE__ */ React.createElement(Scene03, null), /* @__PURE__ */ React.createElement(Scene04, null), /* @__PURE__ */ React.createElement(GlacierA, null));
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, gardenMe());
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

// app/routes/pacific/fragments/photos_odile.tsx
init_react();
function Odile() {
  const odile = () => {
    var pick = Math.floor(Math.random() * 6);
    if (pick === 0) {
      return /* @__PURE__ */ React.createElement(Odile1, null);
    } else if (pick === 1) {
      return /* @__PURE__ */ React.createElement(Odile2, null);
    } else if (pick === 2) {
      return /* @__PURE__ */ React.createElement(Odile3, null);
    } else if (pick === 3) {
      return /* @__PURE__ */ React.createElement(Odile4, null);
    } else if (pick === 4) {
      return /* @__PURE__ */ React.createElement(Odile5, null);
    } else {
      return /* @__PURE__ */ React.createElement(Odile6, null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile"
  }, odile());
}
function Odile1() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-01.jpg",
    alt: ""
  })));
}
function Odile2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile2",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-02.jpg",
    alt: ""
  })));
}
function Odile3() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-03.jpg",
    alt: ""
  })));
}
function Odile4() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile4",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-04.jpg",
    alt: ""
  })));
}
function Odile5() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile5",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-15.jpg",
    alt: ""
  })));
}
function Odile6() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile6",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-17.jpg",
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene13, null), /* @__PURE__ */ React.createElement(Scene14, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene19, null), /* @__PURE__ */ React.createElement(Scene15, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene16, null), /* @__PURE__ */ React.createElement(Scene17, null), /* @__PURE__ */ React.createElement(Scene18, null), /* @__PURE__ */ React.createElement(Scene20, null), /* @__PURE__ */ React.createElement(Scene22, null), /* @__PURE__ */ React.createElement(Odile, null), /* @__PURE__ */ React.createElement(Scene21, null), /* @__PURE__ */ React.createElement(Scene23, null), /* @__PURE__ */ React.createElement(Scene24, null), /* @__PURE__ */ React.createElement(Scene25, null), /* @__PURE__ */ React.createElement(Scene26, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene27, null), /* @__PURE__ */ React.createElement(Scene28, null), /* @__PURE__ */ React.createElement(Scene29, null), /* @__PURE__ */ React.createElement(Scene30, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene31, null), /* @__PURE__ */ React.createElement(Scene32, null), /* @__PURE__ */ React.createElement(Scene33, null), /* @__PURE__ */ React.createElement(Scene34, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene35, null), /* @__PURE__ */ React.createElement(Scene36, null), /* @__PURE__ */ React.createElement(Scene37, null), /* @__PURE__ */ React.createElement(Scene38, null), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement(Scene39, null), /* @__PURE__ */ React.createElement(Scene40, null), /* @__PURE__ */ React.createElement(Scene41, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene42, null));
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
  }, /* @__PURE__ */ React.createElement("p", null, "He sent me photos."), /* @__PURE__ */ React.createElement("p", null, "I struggle to describe them."), /* @__PURE__ */ React.createElement("p", null, "I remind myself that I owe that to other people. I promise myself I'll come back to it.")));
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
  }, /* @__PURE__ */ React.createElement("p", null, "It is January, and I still live in Bellevue. In the time between an afternoon's worth of this class and staying behind after, the rain that my partner hoped signaled a break from the snow has turned to hail."), /* @__PURE__ */ React.createElement("p", null, "I check the window. I come back. I'm sorry if there's background noise, I say to my instructor. It's hail."), /* @__PURE__ */ React.createElement("p", null, "There's a particular sort of smile I'm familiar with, when people are trying to tone down the impact of talking about the weather. The strain of trying to offset tension when there's nowhere to offset it to."), /* @__PURE__ */ React.createElement("p", null, "It's there when he says: It's not supposed to hail.")));
}
function Scene24() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I find myself wishing I'd gone outside in time for the hail. It's not a texture of ice found much elsewhere, and hasn't gotten old for me yet; I like to eat it."), /* @__PURE__ */ React.createElement("p", null, "(When it snowed, my dad was disappointed that I didn't, his words, go play in the snow. So was I, admittedly. I thought: there will be more snow next year. I will do better by myself next year, I think.)")));
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
    id: "thirty9"
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
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have an idea of patterns about it, save in the broadest of senses; this is what I know. "), /* @__PURE__ */ React.createElement("p", null, "I check the weather. People ask if it torments me, as the Pacific Northwest is expected to do. My favorite weather is fog: the closest you get to domesticating the eye of a hurricane."), /* @__PURE__ */ React.createElement("p", null, "I don't tell them I'm from a desert--I don't care for psychoanalysis--but I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "All of it. Always. Even the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
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
    alt: 'The labeled "warming stripes" chart for Mexico. The stripes are the same ones that have formed the "tapestry" background of the essay all along.',
    className: "slide-in-blurred-bottom"
  })));
}

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\photos_odile.tsx
var photos_odile_exports = {};
__export(photos_odile_exports, {
  Odile1: () => Odile12,
  Odile2: () => Odile22,
  Odile3: () => Odile32,
  Odile4: () => Odile42,
  Odile5: () => Odile52,
  Odile6: () => Odile62,
  default: () => Odile7
});
init_react();
function Odile7() {
  const odile = () => {
    var pick = Math.floor(Math.random() * 6);
    if (pick === 0) {
      return /* @__PURE__ */ React.createElement(Odile12, null);
    } else if (pick === 1) {
      return /* @__PURE__ */ React.createElement(Odile22, null);
    } else if (pick === 2) {
      return /* @__PURE__ */ React.createElement(Odile32, null);
    } else if (pick === 3) {
      return /* @__PURE__ */ React.createElement(Odile42, null);
    } else if (pick === 4) {
      return /* @__PURE__ */ React.createElement(Odile52, null);
    } else {
      return /* @__PURE__ */ React.createElement(Odile62, null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile"
  }, odile());
}
function Odile12() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-01.jpg",
    alt: ""
  })));
}
function Odile22() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile2",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-02.jpg",
    alt: ""
  })));
}
function Odile32() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile1",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-03.jpg",
    alt: ""
  })));
}
function Odile42() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile4",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-04.jpg",
    alt: ""
  })));
}
function Odile52() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile5",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-15.jpg",
    alt: ""
  })));
}
function Odile62() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Odile6",
    className: "hero flip-in-hor-top",
    role: "img"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "img"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/photos/odile - sept 15-17.jpg",
    alt: ""
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, gardenMe());
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

// route-module:D:\Beep boop\oceanside\app\routes\pacific\fragments\here.tsx
var here_exports = {};
__export(here_exports, {
  default: () => Here2
});
init_react();
var cap_here2 = "Screenshot of a section of a satelite map of the globe. Find the end of the American California; here, San Diego. Go as straight of south as you can get for a thousand miles on the only highway, until you hit the point where the Tropic of Cancer meets the Pacific coastline. This is Todos Santos. You are here.";
function Here2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "Here",
    className: "flip-in-hor-top hero",
    role: "img",
    "aria-describedby": "cap_here"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/you_are_here.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "secret",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cap_here",
    className: "ARIAcap",
    "aria-hidden": "true"
  }, cap_here2)));
}

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene022, null), /* @__PURE__ */ React.createElement(Here, null), /* @__PURE__ */ React.createElement(Scene032, null), /* @__PURE__ */ React.createElement(Scene042, null), /* @__PURE__ */ React.createElement(GlacierA, null));
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene132, null), /* @__PURE__ */ React.createElement(Scene142, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene192, null), /* @__PURE__ */ React.createElement(Scene152, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene162, null), /* @__PURE__ */ React.createElement(Scene172, null), /* @__PURE__ */ React.createElement(Scene182, null), /* @__PURE__ */ React.createElement(Scene202, null), /* @__PURE__ */ React.createElement(Scene222, null), /* @__PURE__ */ React.createElement(Odile, null), /* @__PURE__ */ React.createElement(Scene212, null), /* @__PURE__ */ React.createElement(Scene232, null), /* @__PURE__ */ React.createElement(Scene242, null), /* @__PURE__ */ React.createElement(Scene252, null), /* @__PURE__ */ React.createElement(Scene262, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene272, null), /* @__PURE__ */ React.createElement(Scene282, null), /* @__PURE__ */ React.createElement(Scene292, null), /* @__PURE__ */ React.createElement(Scene302, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene312, null), /* @__PURE__ */ React.createElement(Scene322, null), /* @__PURE__ */ React.createElement(Scene332, null), /* @__PURE__ */ React.createElement(Scene342, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene352, null), /* @__PURE__ */ React.createElement(Scene362, null), /* @__PURE__ */ React.createElement(Scene372, null), /* @__PURE__ */ React.createElement(Scene382, null), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement(Scene392, null), /* @__PURE__ */ React.createElement(Scene402, null), /* @__PURE__ */ React.createElement(Scene412, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene422, null));
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
  }, /* @__PURE__ */ React.createElement("p", null, "He sent me photos."), /* @__PURE__ */ React.createElement("p", null, "I struggle to describe them."), /* @__PURE__ */ React.createElement("p", null, "I remind myself that I owe that to other people. I promise myself I'll come back to it.")));
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
  }, /* @__PURE__ */ React.createElement("p", null, "It is January, and I still live in Bellevue. In the time between an afternoon's worth of this class and staying behind after, the rain that my partner hoped signaled a break from the snow has turned to hail."), /* @__PURE__ */ React.createElement("p", null, "I check the window. I come back. I'm sorry if there's background noise, I say to my instructor. It's hail."), /* @__PURE__ */ React.createElement("p", null, "There's a particular sort of smile I'm familiar with, when people are trying to tone down the impact of talking about the weather. The strain of trying to offset tension when there's nowhere to offset it to."), /* @__PURE__ */ React.createElement("p", null, "It's there when he says: It's not supposed to hail.")));
}
function Scene242() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "scene",
    id: "twenty4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("p", null, "I find myself wishing I'd gone outside in time for the hail. It's not a texture of ice found much elsewhere, and hasn't gotten old for me yet; I like to eat it."), /* @__PURE__ */ React.createElement("p", null, "(When it snowed, my dad was disappointed that I didn't, his words, go play in the snow. So was I, admittedly. I thought: there will be more snow next year. I will do better by myself next year, I think.)")));
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
    id: "thirty9"
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
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have an idea of patterns about it, save in the broadest of senses; this is what I know. "), /* @__PURE__ */ React.createElement("p", null, "I check the weather. People ask if it torments me, as the Pacific Northwest is expected to do. My favorite weather is fog: the closest you get to domesticating the eye of a hurricane."), /* @__PURE__ */ React.createElement("p", null, "I don't tell them I'm from a desert--I don't care for psychoanalysis--but I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "All of it. Always. Even the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
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
  }, /* @__PURE__ */ React.createElement("h3", null, "Credits and third party sources"), /* @__PURE__ */ React.createElement("h5", null, "Text"), "Poems quoted:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, '"Thirteen Ways of Looking at a Glacier" by Craig Santos Perez'), /* @__PURE__ */ React.createElement("li", null, '"Let Them Not Say" by Jane Hirshfield'), /* @__PURE__ */ React.createElement("li", null, '"WAVE AFTER WAVE" by M. Bartley Seigel'), /* @__PURE__ */ React.createElement("li", null, '"No Longer Ode" by Urayo\xE1n Noel')), "Other sources:", /* @__PURE__ */ React.createElement("ul", null, 'Kyle Whyte, "Braiding Kinship and Time" (lecture on Indigenous climate justice)'), /* @__PURE__ */ React.createElement("h5", null, "Images"), /* @__PURE__ */ React.createElement("p", null, "Climate stripes generated via ", /* @__PURE__ */ React.createElement("a", {
    href: "https://showyourstripes.info"
  }, "Show Your Stripes"), "."), /* @__PURE__ */ React.createElement("p", null, "Todos Santos photographs copyright Howard Ekman, used with permission."), /* @__PURE__ */ React.createElement("p", null, "Seattle smoke summer photographs depict the Chihuly Sculpture Garden at Seattle Center and are by the author."), /* @__PURE__ */ React.createElement("p", null, "Map via Google Maps. Imagery copyright Data SIO, NOAA, U.S. Navy, NGBA, GEBCO, Landsat/Copernicus, IBCAO. Map data copyright INEGI and Google."), "Image assets from PNGtree:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://pngtree.com/freepng/heavy-snow_3723954.html"
  }, '"heavy snow" background')), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", null, 'Frames used for "Thirteen Ways of Looking at a Glacier":'), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #1"), /* @__PURE__ */ React.createElement("li", null, "Blue smoke frame #2"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
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
var coastline_default = "/build/_assets/coastline-ODW6RXDO.css";

// app/routes/pacific/fragments/stripe-whamline.tsx
init_react();
function Wham2() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "kicker"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "kimg"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/climate_stripes_mx.png",
    alt: 'The labeled "warming stripes" chart for Mexico. The stripes are the same ones that have formed the "tapestry" background of the essay all along.',
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
  }, /* @__PURE__ */ React.createElement(fragments_default2, null), /* @__PURE__ */ React.createElement("div", {
    id: "preprekick"
  }))), /* @__PURE__ */ React.createElement("div", {
    id: "prekick"
  }), /* @__PURE__ */ React.createElement(Wham2, null), /* @__PURE__ */ React.createElement(Footer2, null));
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
  "routes/pacific/fragments/photos_odile": {
    id: "routes/pacific/fragments/photos_odile",
    parentId: "routes/pacific/fragments",
    path: "photos_odile",
    index: void 0,
    caseSensitive: void 0,
    module: photos_odile_exports
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
  "routes/pacific/fragments/here": {
    id: "routes/pacific/fragments/here",
    parentId: "routes/pacific/fragments",
    path: "here",
    index: void 0,
    caseSensitive: void 0,
    module: here_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0IudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvaGVyZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXIudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvRC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19vZGlsZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpby50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdhc2hpbmd0b24udHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS13aGFtbGluZS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccGhvdG9zX29kaWxlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWdsYWNpZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdpbnN1bS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccXVvdGUtY2xpbWUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS1vaGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwaG90b3NfY2hpLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdhdmUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tb2RlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxoZXJlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFwwMS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcQi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcQy50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcRC50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXG1ldGFkYXRhXFxjcmVkaXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXkudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxmb290ZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvZm9vdGVyLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxzdHJpcGUtd2FzaGluZ3Rvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS13aGFtbGluZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBob3Rvc19vZGlsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0tZ2xhY2llci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0tbGV0c2F5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS13aW5zdW0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxxdW90ZS1jbGltZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHN0cmlwZS1vaGlvLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBob3Rvc19jaGkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccG9lbS13YXZlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0tb2RlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXGhlcmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcMDEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcQi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxDLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXEQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWV0YWRhdGFcXFxcY3JlZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXGZvb3Rlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b25cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS13YXNoaW5ndG9uXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJzdHJpcGUtd2hhbWxpbmVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3Nfb2RpbGVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3Nfb2RpbGVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBob3Rvc19vZGlsZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1nbGFjaWVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWxldHNheVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1sZXRzYXlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLXdpbnN1bVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInF1b3RlLWNsaW1lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpb1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLW9oaW9cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicGhvdG9zX2NoaVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0td2F2ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLW9kZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9oZXJlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvaGVyZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwiaGVyZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxM1xuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy8wMVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCIwMVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9CXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQlwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwiQlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9DXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQ1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwiQ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNlxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9EXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvRFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwiRFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxN1xuICB9LFxuICBcInJvdXRlcy9tZXRhZGF0YS9jcmVkaXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9tZXRhZGF0YS9jcmVkaXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJtZXRhZGF0YS9jcmVkaXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMThcbiAgfSxcbiAgXCJyb3V0ZXMvZm9vdGVyXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZm9vdGVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZm9vdGVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE5XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMjBcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaXZlUmVsb2FkLCBPdXRsZXQsIExpbmtzIH0gZnJvbSAncmVtaXgnXHJcbmltcG9ydCBJbmRleCBmcm9tICcuL3JvdXRlcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3JvdXRlcy9mb290ZXInXHJcbmltcG9ydCBXaGFtIGZyb20gJy4vcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZSdcclxuXHJcbi8vIE91dGxldCBtYXkgY3JlYXRlIGR1cGxpY2F0ZXMgZnJvbSBpbmRleDsgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgYCAgICA8T3V0bGV0IC8+YC5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGh0bWwgbGFuZz0nZW4nPlxyXG4gICA8aGVhZD5cclxuICAgIDxMaW5rcyAvPlxyXG4gICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XHJcbiAgICA8dGl0bGU+d2hhdCB0aGUgd2VhdGhlciBkb2Vzbid0PC90aXRsZT5cclxuICAgPC9oZWFkPlxyXG4gICA8Ym9keT5cclxuICAgIDxPdXRsZXQgLz5cclxuICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgIDwvYm9keT5cclxuICA8L2h0bWw+XHJcbiApXHJcbn0gIiwgIi8vIGNvbnN0IGEgPSBSYXcxLnZhbHVlKCk7XHJcbmltcG9ydCBTY2VuZTAxIGZyb20gJy4vZnJhZ21lbnRzLzAxJztcclxuaW1wb3J0IFdhc2hpbmd0b24gZnJvbSAnLi9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b24nO1xyXG5pbXBvcnQgQiBmcm9tICcuL2ZyYWdtZW50cy9CJztcclxuaW1wb3J0IEMgZnJvbSAnLi9mcmFnbWVudHMvQyc7XHJcbmltcG9ydCBEIGZyb20gJy4vZnJhZ21lbnRzL0QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZyYWdtZW50cygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgPFNjZW5lMDEgLz5cclxuICAgPEIgLz5cclxuICAgPEMgLz5cclxuICAgPEQgLz5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhZ21lbnRzIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lMDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J29uZSc+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gIDxwPkl0IGlzIDIwMjIuIEl0IGlzIHRoZSAyMm5kLiBJdCBpcyBGZWJydWFyeS48L3A+XHJcbiAgPHA+SSBhbSBiZWdpbm5pbmcgdGhpcyBlc3NheS4gSSBhbSB0d2VudHktc2l4IHllYXJzIG9sZC4gSSBhbSBtb3ZpbmcsIG5vdCBmb3IgdGhlIGZpcnN0IHRpbWUsIHRvIFNlYXR0bGUuPC9wPlxyXG4gIDxwPkl0IGlzIHNub3dpbmcuPC9wPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIlxyXG5pbXBvcnQgSGVyZSBmcm9tIFwiLi9oZXJlXCJcclxuaW1wb3J0IHsgR2xhY2llckEgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQigpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMDIgLz5cclxuICAgPEhlcmUgLz5cclxuICAgPFNjZW5lMDMgLz5cclxuICAgPFNjZW5lMDQgLz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTAyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d28nPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+QSBtZW1vcnkgdG9vIHNtYWxsIGZvciBtZSB0byBoYXZlIGEgcGxhY2UgZm9yIGl0IGluIHRpbWU6IEkgYW0gYmFyZWx5IG9sZCBlbm91Z2ggdG8gcmVtZW1iZXIsIGFuZCBteSBwYXJlbnRzIGFyZSBtYXJyaWVkLCBhbmQgdGhleSBhcmUgZGlzY292ZXJpbmcgdGhhdCB0aGUgZGluaW5nIHJvb20gZmxvb3IgaXMgdW5ldmVuLCBhcyBpdCBoYXBwZW5zLCBhcyB0aGUgd2F0ZXIgcG91cmluZyBpbiB0aHJvdWdoIHRoZSBjbG9zZWQgd2luZG93cyBmb3JtcyBhIHRyaWFuZ3VsYXIgcHVkZGxlIHdoZXJlIHRoZSBleHRlcmlvciB3YWxscyBtZWV0LjwvcD5cclxuICAgPHA+QW5kIEkgYW0gaGVyZTogc2l0dGluZyBpbiB0aGUgcG9vbCBvZiByYWlud2F0ZXIgd2l0aCBlbm91Z2ggcm9vbSB0byBzbGFwIG15IGhhbmRzIHJoeXRobWljYWxseSBvbiBtb3JlIG9mIGl0IGJlc2lkZSBtZSwgYXdhcmUgb2YgYW5kIGlnbm9yaW5nIHRoZWlyIG1vdW50aW5nIGJ1dCBnZW5lcmFsaXplZCBkaXNhcHByb3ZhbC4gSWYgaXQgaGFzIG9jY3VycmVkIHRvIG1lIHRoYXQgdGhpcyBpcyBub3Qgd2hhdCB0aGV5IHdhbnRlZCBmcm9tIHRoZWlyIHJlY2VudGx5LWZpbmlzaGVkIGZsb29yLCB0aGUgdGhvdWdodCBjb21lcyB3aXRoIG92ZXJhbGwgaW5kaWZmZXJlbmNlOyB0aGF0IHRoZXkgaGFkIGl0IHBvdXJlZCBhbmQgc2FuZGVkLCBieSBodW1hbiBoYW5kcywgc28gSSdtIG5vdCBzdXJlIHdoYXQgdGhleSBleHBlY3RlZC48L3A+XHJcbiAgIDxwPihDb25zdHJ1Y3Rpb24gb2YgdGhlIGhvdXNlIEkgd2lsbCBncm93IHVwIGluIGhhcyBiZWVuIG9uZ29pbmcsIHdpbGwgYmUgbXVjaCBsb25nZXIsIGludG8gbWVtb3JpZXMgd2l0aCBlbm91Z2ggZGVmaW5pdGlvbiB0byBwdWxsIHRoZWlyIG93biB3ZWlnaHQgaW4gdGltZS4gSSBkbyBub3Qga25vdyB3aGF0IGEgbGV2ZWwgaXMuKTwvcD5cclxuICAgPHA+SSBoYXZlbid0IGdvdHRlbiB0aXJlZCBvZiBpdCB5ZXQuIEFzIEkgc2xhcCB0aGUgcHVkZGxlLCBJIGFtIHNob3V0aW5nOiBcIlN3aW1taW5nIHBvb2whIFN3aW1taW5nIHBvb2whXCI8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhyZWUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+SGVyZSBhcmUgdHdvIHRoaW5ncyBJIGtub3cgYWJvdXQgcG93ZXIsIHZlcnkgZWFybHkgaW4gbXkgbGlmZTo8L3A+XHJcbiAgIDxwPlRoZSBtb3N0IHBoeXNpY2FsbHkgcG93ZXJmdWwgdGhpbmcgaW4gdGhlIHdvcmxkIGlzIHdhdGVyLiBXYXRlciB3cml0ZXMgdGhlIHNoYXBlIG9mIGxhbmQgYW5kIGNhbiBkZW1vbGlzaCBhbnl0aGluZyB3aXRoIHRpbWUuIFdhdGVyIGluIHRoZSBhaXIgaXMgd2h5IGV2ZXJ5IGluYW5pbWF0ZSBvYmplY3QgYXJvdW5kIG1lIGRpZXMgZmFzdGVyIHRoYW4gaXQgc2FpZCBpdCA8YSBocmVmPSdodHRwczovL3d3dy5wYXRyZW9uLmNvbS9wb3N0cy9jdy1kYXRhLWxvc3MtNDkyMTAyOTUnPndvdWxkPC9hPjsgbGlrZSBvcHRpY2FsIG1lZGlhIHlvdSB0aG91Z2h0IGJhY2tlZCB1cCBzb21ldGhpbmcgeW91IGNhcmUgYWJvdXQsIG9yIGVsYXN0aWMuIFdhdGVyIGJvd2xzIHlvdSBvdmVyIHdoZW4geW91IGNvbWUgbmVhciBpdCBhbmQgZ2V0IGNvY2t5IGVub3VnaCB0byB0dXJuIHlvdXIgYmFjay4gV2F0ZXIgc2V0cyB0aGUgbGl2aW5nIGxpbWl0cyBvZiB3aGF0IGlzIHBvc3NpYmxlOiBsaWtlIHdoZW4gdGhlIHN1cHBseSB0dXJucyBvZmYsIGFuZCB0aGUgdGluYWNvIHRoYXQgdGhlcmUncyBub3QgYSBvbmUtd29yZCBFbmdsaXNoIHRlcm0gZm9yIGlzIHJlc2VydmVkIGZvciBwYXlpbmcgdG91cmlzdHMgaW4gdGhlIGJhY2sgeWFyZCB0byBjdXNoaW9uIHRoZW0gZnJvbSBzY2FyY2l0eSwgYW5kIEkgYmF0aGUgb3V0IG9mIGEgYnVja2V0IGluIHRoZSBzaG93ZXIuPC9wPlxyXG4gICA8cD4oSXQgc3RhZ2dlcnMgbWUsIHRoZSB3YXkgdGhlIE5vcnRoIHVzZXMgd29vZDogbGlrZSB0aGVyZSdzIGVub3VnaCBvZiBpdCB0byBnbyBhcm91bmQsIGluc3RlYWQgb2YgY29uY3JldGUuIEkgZG8gbm90IG1ha2UgdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aW1iZXIsIHdoaWNoIGF3ZXMgbWUgYXMgYSBzaG93IG9mIHdlYWx0aCwgYW5kIGZvcmVzdHMsIHdoaWNoIHVubmVydmUgbWU7IGl0IGRvZXNuJ3QgY29ubmVjdCB0aGF0IGFueXRoaW5nIEkgc2VlIGNvdWxkIGJlIHN1ZmZpY2llbnQgZm9yIHBlb3BsZSB0byBjbGFpbSBpdCBpcyBlbm91Z2guKTwvcD5cclxuICAgPHA+VGhlIGJlc3Qgd2F5IGZvciBhIHBlcnNvbiB0byBhY3F1aXJlIHBvd2VyIGlzIHRvIGJlIGluZGlzcGVuc2FibGUuIE15IGJvZHktLUkgZG8gbm90IHlldCBoYXZlIHRoZSBsYW5ndWFnZSBmb3IgdGhpczsgSSBhbHdheXMga25vdy0tbXkgYm9keSBkb2VzIG5vdCBkbyB0aGUgdGhpbmdzIHRoYXQgb3RoZXIgcGVvcGxlIHdhbnQgaXQgdG8gZG8uIFBlb3BsZSBkb24ndCB3YW50IG1lLCBpZiB0aGV5IGNhbiBhZmZvcmQgdG8uIDwvcD5cclxuICAgPHA+QnV0IEkgYW0gYWxzbyBhIGR1YWwgY2l0aXplbiwgYSB0ZXJtIHdoaWNoIG9mdGVuIG1lYW5zIHRoYXQgbm8gb25lIHdobyBhc2tzIGZvciBwYXBlcndvcmsgb3RoZXIgdGhhbiBhIHBhc3Nwb3J0IGlzIGdvaW5nIHRvIGdldCBzb21ldGhpbmcgdGhleSBsaWtlLiBJIHdpbGwgaGF2ZSB0byBiZSBpbmRpc3BlbnNhYmxlLjwvcD5cclxuICAgPHA+SSByZXNvbHZlIHRvIGdvIHRvIGNvbGxlZ2UgaW4gdGhlIFVuaXRlZCBTdGF0ZXMuIEkgd2lsbCBnZXQgYSBkaXBsb21hIGluIEVuZ2xpc2ggcHJpbnQgYW5kIHRoZW4gbm8gb25lIHdpbGwgYmUgYWJsZSB0byBhZmZvcmQgdG8gZGlzbGlrZSBtZSBlbm91Z2ggZm9yIHRoZW0gdG8gdGVsbCBtZSBuby48L3A+XHJcbiAgIDxwPihJIGFtLCBhcHByb3hpbWF0ZWx5LCBzaXggeWVhcnMgb2xkLik8L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm91cic+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICA8cD5UaHJlZSB3ZWVrcyBhZnRlciBteSBlaWdodGVlbnRoIGJpcnRoZGF5LCBJIGdvIG5vcnRoLjwvcD5cclxuICA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImNvbnN0IGNhcF9oZXJlID0gJ1NjcmVlbnNob3Qgb2YgYSBzZWN0aW9uIG9mIGEgc2F0ZWxpdGUgbWFwIG9mIHRoZSBnbG9iZS4gRmluZCB0aGUgZW5kIG9mIHRoZSBBbWVyaWNhbiBDYWxpZm9ybmlhOyBoZXJlLCBTYW4gRGllZ28uIEdvIGFzIHN0cmFpZ2h0IG9mIHNvdXRoIGFzIHlvdSBjYW4gZ2V0IGZvciBhIHRob3VzYW5kIG1pbGVzIG9uIHRoZSBvbmx5IGhpZ2h3YXksIHVudGlsIHlvdSBoaXQgdGhlIHBvaW50IHdoZXJlIHRoZSBUcm9waWMgb2YgQ2FuY2VyIG1lZXRzIHRoZSBQYWNpZmljIGNvYXN0bGluZS4gVGhpcyBpcyBUb2RvcyBTYW50b3MuIFlvdSBhcmUgaGVyZS4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nSGVyZScgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfaGVyZSc+PGltZyBzcmM9Jy95b3VfYXJlX2hlcmUucG5nJyBhbHQ9JycgLz5cclxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nc2VjcmV0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICBcclxuICAgIDxkaXYgaWQ9J2NhcF9oZXJlJyBjbGFzc05hbWU9J0FSSUFjYXAnIGFyaWEtaGlkZGVuPSd0cnVlJz57Y2FwX2hlcmV9PC9kaXY+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PklJSTwvaDU+XHJcbiAgIFRoZSBnbGFjaWVyIGFic29yYmVkIGdyZWVuaG91c2UgZ2FzZXMuIDxici8+XHJcbiAgIFdlIGFyZSBhIGxhcmdlIHBhcnQgb2YgdGhlIGJpb3NwaGVyZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQigpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVicgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZ19zbS5wbmcnIGlkPSdibHVlcScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlY8L2g1PlxyXG4gICBXZSBkbyBub3Qga25vdyB3aGljaCB0byBmZWFyIG1vcmUsPGJyLz5cclxuICAgVGhlIHRlcnJvciBvZiBjaGFuZ2U8YnIvPlxyXG4gICBPciB0aGUgdGVycm9yIG9mIHVuY2VydGFpbnR5LCA8YnIvPlxyXG4gICBUaGUgZ2xhY2llciBjYWx2aW5nPGJyLz5cclxuICAgT3IganVzdCBhZnRlci48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWSUlJJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlZJSUk8L2g1PlxyXG4gICBJIGtub3cga2luZyB0aWRlcywgPGJyLz5cclxuICAgQW5kIGx1cmlkLCBpbmVzY2FwYWJsZSBzdG9ybXM7IDxici8+XHJcbiAgIEJ1dCBJIGtub3csIHRvbywgPGJyLz5cclxuICAgVGhhdCB0aGUgZ2xhY2llciBpcyBpbnZvbHZlZCA8YnIvPlxyXG4gICBJbiB3aGF0IEkga25vdy48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuLy9VbnVzZWQgZm9yIG5vdywgYnV0IGZ1biB0byBoYXZlXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBXQVZFIGZyb20gXCIuL3BvZW0td2F2ZVwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQygpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMDUgLz5cclxuICAgPFNjZW5lMDYgLz5cclxuICAgPFNjZW5lMDcgLz5cclxuICAgPFNjZW5lMDggLz5cclxuICAgPFNjZW5lMDkgLz5cclxuICAgPFdBVkUgLz5cclxuICAgPFNjZW5lMTAgLz5cclxuICAgPFNjZW5lMTEgLz5cclxuICAgPFNjZW5lMTIgLz5cclxuICAgPEdsYWNpZXJDIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmaXZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBuaW5lIHllYXJzIG9sZCwgYW5kIHdlIGhhdmUgZmFtaWx5IGluIE5ldyBPcmxlYW5zLiBXZSBoYXZlIGZhbWlseSBpbiBGbG9yaWRhLCBhcyB3ZWxsOyBteSBmYXRoZXIgaGFzIHRha2VuIGl0IHVwb24gaGltc2VsZiB0byBkcml2ZSB1cyBmcm9tIG9uZSB0byB0aGUgb3RoZXIsIHdoaWNoIEkgZmluZCBleGNpdGluZy4gSSBvbmx5IHNlZSBHUFMgaW4gcmVudGFsIGNhcnMsIGluIHRoZSBVUywgd2hpY2ggaXMgdGhlIHNvcnQgb2YgdGhpbmcgdGhhdCBzYXRlbGxpdGVzIGJvdGhlciB0byBtYXAuIFdlIGxlYXZlIGluIHRoZSBhZnRlcm5vb24gdG8gZHJpdmUgdGhyb3VnaCB0aGUgbmlnaHQsIHdoaWNoIEkgZmluZCBtb3JlIGV4Y2l0aW5nIHN0aWxsLjwvcD5cclxuICAgIDxwPldlIHBhc3MgdGhyb3VnaCBhIHN0b3JtIHN5c3RlbSwgZHJpdmluZzsgaGFyc2ggcmFpbiBpbiBtb3Rpb24gYXQgbmlnaHQgaXMgYSByYXJlIHRyZWF0IGZvciBtZSwgYW5kIEkgaGF2ZW4ndCBxdWl0ZSBncmFwcGxlZCB3aXRoIHRoZSByZWFsaXRpZXMgb2YgaGlnaHdheXMgZW5vdWdoIHRvIHVuZGVyc3RhbmQgdGhlIHBpdGZhbGxzIG9mIHdoeS4gSSBzdGFyZSBvdXQgdGhlIHdpbmRvd3MgYXQgdGhlIGhhcmQgcmFpbiwgdGhlIGx1eHVyeSBvZiBsaWdodCBhbmQgbGFuZXMgb24gYW4gQW1lcmljYW4gaW50ZXJzdGF0ZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgZmF0aGVyIGhhcyB0b2xkIG1lIGFib3V0IGh1cnJpY2FuZSBwYXJ0aWVzLCByaWNoIHBlb3BsZSB3aG8gd2VyZSByZWNlbnRseSBjaGlsZHJlbiB0YWtpbmcgb2ZmIHRvIHNpdCBpdCBvdXQgaW4gc3BhcmUgaG91c2VzIG9uIHRoZSBjb2FzdC4gVGhlIGlkaW9jeSB0aGF0IGNvbWVzIHdpdGggdGhlIHdvcmxkIGdpdmluZyB5b3Ugbm8gcmVhc29uIHRvIGJlbGlldmUgeW91J3JlIG5vdCBpbnZ1bG5lcmFibGUuIFdlIG1heSBvciBtYXkgbm90IGRpc2N1c3MgdGhhdCBwYXJ0IGV4cGxpY2l0bHksIGJ1dCBJJ20gYXdhcmUsIGF0IGhvbWUsIG9mIHRoZSBjb250cm92ZXJzeSBvZiB0aGUgZm9yY2libGUgcmVkZWZpbml0aW9uIG9mIFwiYmVhY2hmcm9udFwiIHByb3BlcnR5IGJ5IGJ1aWxkaW5nIG9uIGR1bmVzLCBhbmQgdGhlIHJlYXNvbnMgcGVvcGxlIGRvIHNvIGFueXdheS4gV2h5IHRoZSBsYXcgaGFzIGxlc3MgdG8gc2F5IGFib3V0IGl0IHRoYW4gdGhlIHRleHQgY2xhaW1zIGl0J3Mgc3VwcG9zZWQgdG8uPC9wPlxyXG4gICAgPHA+SSBrbm93IGEgbG90IG9mIHJlYWx0b3JzLjwvcD5cclxuICAgIDxwPkkgYWxzbyBrbm93IGEgam9rZTogXCJJJ3ZlIGdvdCB0aGlzIGdyZWF0IHBpZWNlIG9mIGxhbmQgdG8gc2VsbCB5b3UsXCIgaXQgc3RhcnRzLCBcImhhc24ndCBmbG9vZGVkIHNpbmNlIHRoZSBkaW5vc2F1cnMuLi5cIjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkxhdGVyIGluIHRoZSBzdW1tZXIsIEkgYW0gbm90IG5pbmUgeWVhcnMgb2xkLiBXaGVuIEkndmUgcmVjZW50bHkgdHVybmVkIHRlbiwgS2F0cmluYSBzd2VlcHMgdGhyb3VnaCB3aGVyZSBJIGFtIG5vdC4gSSBoYXZlIHRoZSB2YWd1ZXN0IG9mIHVuZGVyc3RhbmRpbmdzIG9mIHdoYXQgYSBsZXZlZSBpcywgZnJvbSBzb25ncywgYW5kIG5vdyBmcm9tIG5ld3M7IGxpa2UgZHVuZXMsIEkgdGhpbmssIGJ1dCB3b3JzZSBhdCBiZWluZyBzby48L3A+XHJcbiAgICA8cD5JbiB0aGUgbGVhZC11cCB0byBsYW5kZmFsbCwgSSBhbSBjaGlsZGlzaGx5LCBjYWxsb3VzbHkgYmFmZmxlZDogQ2F0ZWdvcnkgNSBvbiB0aGUgZm9yZWNhc3QgaXMgYWx3YXlzIGdvb2QgbmV3cyBmb3IgbWUsIGJlY2F1c2UgbGFyZ2UgbnVtYmVycyBtZWFuIGEgaGlnaGVyIHByb2JhYmlsaXR5IG9mIGNsYXNzIGJlaW5nIGNhbGxlZCBvZmYuIChUaGVyZSBpcywgZm9yIHRoZSBkdXJhdGlvbiBvZiBteSBjaGlsZGhvb2QsIG9uZSBwYXZlZCByb2FkLiBUaGUgb3RoZXJzLCB1bmRlciBzdWZmaWNpZW50IHByZXNzdXJlLCB0dXJuIHRvIHJpdmVycy4gSSBsaXZlIG9uIGEgaGlsbDsgSSBsaWtlIHRvIHdhdGNoLiBPbmUgeWVhciwgbGF0ZXIgaW4gdGhlIGRlY2FkZSwgb24gYSBkYXkgdGhhdCB0aGUgcm9hZHMgd2VyZW4ndCB3YXNoZWQgb3V0IGVhcmx5IGVub3VnaCBpbiB0aGUgbW9ybmluZyB0byBnZXQgbWUgb3V0IG9mIGl0LCBteSBzY2hvb2wgdHVybnMgdG8gcmFwaWRzLCBhbmQgSSBhbSB1bmFjY291bnRhYmx5IHBsZWFzZWQgdG8ga25vdyBpdCB3YXMgYnVpbHQgb24gYSB2ZWluIG9mIHJlZCBjbGF5IGFzIHRoYXQgcGFpbnRzIGl0c2VsZiBvbnRvIG15IHNvY2tzLikgPC9wPlxyXG4gICAgPHA+RXZhY3VhdGlvbiwgZm9yIGV4YW1wbGUsIGlzIGZvcmVpZ24gdG8gbWUuIEkgY2FuJ3QgaW1hZ2luZSB3aHkgdGhleSdyZSBib3RoZXJpbmc7IEkgY291bGQgc2F5IHRoYXQgdGhlIHJlYXNvbiBJIGRvbid0IHVuZGVyc3RhbmQgd2h5IG9uZSBwbGFjZSB3b3VsZCBiZSBzYWZlciB0aGFuIGFub3RoZXIgaXMgdGhhdCBubyBwYXJ0IG9mIG15IHN0YXRlIGlzIGEgZnVsbCBmaWZ0eSBtaWxlcyBmcm9tIHRoZSBjb2FzdGxpbmUsIGJ1dCBJIGRvdWJ0IEkgdGhvdWdodCBpdCB0aHJvdWdoIHRoYXQgZmFyLiBJIHRoaW5rIEkgc2ltcGx5IGRvIG5vdCByZWdpc3RlciB0aGF0IGxvY2F0aW9ucyBhcmUgdW5saWtlIG9uZSBhbm90aGVyIGluIHRpbWUgbm90IHRvIGxlYXJuIGl0IG9uIHRoZSBuZXdzLjwvcD5cclxuICAgIDxwPkkgYW0gdGVuIHllYXJzIGFuZCBhbG1vc3Qgb25lIG1vbnRoIG9sZCwgYW5kIEkgdW5kZXJzdGFuZCB0aGF0IGh1cnJpY2FuZSBwcmVwYXJlZG5lc3MgaXMgcmVsYXRpdmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBzdHVjayBteSBmZWV0IGluIHRoZSBBdGxhbnRpYyBvbmNlLiBJdCB3YXMgY29sZGVyIHRoYW4gYW4gb2NlYW4gaGFkIGFueSBidXNpbmVzcyBiZWluZywgYnkgbXkgbGlnaHRzLCBhbmQgZ3JheS4gVGhlcmUgd2FzIHNvbWV0aGluZyBiaXphcnJlIGluIHRoZSBpZGVhIHRoYXQgaXQgd2FzIHdhcm0gZW5vdWdoIHRvIGZlZWQgYSBodXJyaWNhbmUuICA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nbmluZSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkJlZm9yZSBJIGFtIGVsZXZlbiwgd2Ugc3RvcCBoYXZpbmcgZmFtaWx5IGluIE5ldyBPcmxlYW5zLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5BdCBhcm91bmQgZm91ciB5ZWFycyBvbGQsIEkgYW0gZWF2ZXNkcm9wcGluZy0tdGhpcyB3aWxsIGJlIGEgaGFiaXQtLUkgYW0gZWF2ZXNkcm9wcGluZyBvbiBraW5kZXJnYXJ0ZW4gdGVhY2hlcnM7IHRoZXkgYXJlIHRhbGtpbmcgYWJvdXQgdGhlIHdlYXRoZXIuIDwvcD5cclxuICAgIDxwPlNwZWNpZmljYWxseSwgdGhleSBhcmUgdGFsa2luZyBhYm91dCB0aGUgb2NlYW4gZ2V0dGluZyB3YXJtZXIsIGFuZCBob3cgdGhhdCdzIG1ha2luZyBodXJyaWNhbmUgc2Vhc29uIGhhcnNoZXIsIGFuZCBsb25nZXIsIGluIHdheXMgbm8gb25lIHNob3VsZCBsaWtlLiBXZSBkZXBlbmQgb24gaHVycmljYW5lcyBmb3IgZnJlc2h3YXRlci0tbXkgdG93biwgc3BlY2lmaWNhbGx5LCByZWxpZXMgb24gdGhlbSB0byBmaWxsIHRoZSBhcXVpZmVyIGl0cyBtdWNoLWRpc2N1c3NlZCBvYXNpcyBzdGF0dXMgaXMgYnVpbHQgdXBvbi0tYnV0IHRvbyBtdWNoIHdhdGVyIGF0IGEgdGltZSBkZWZlYXRzIHRoZSBwb2ludCwgcmlwcyB0b3Bzb2lsIGludG8gdGhlIHNlYSwgcnVucyBpdHMgY291cnNlIHRvbyBmYXN0IGZvciB1cyB0byBrZWVwLiBBbmQgaXQncyBtb3JlIHVucGxlYXNhbnQgZm9yIHRoZW0gdGhhbiBpdCBpcyBmb3IgbWUuPC9wPlxyXG4gICAgPHA+VGhlIHdhcm10aCwgYXQgbGVhc3QsIGlzIGNvbW1vbiBzZW5zZTsgSSBrbm93IGhlYXQgaXMgZW5lcmd5IGJlY2F1c2UgSSBrbm93IGh1cnJpY2FuZXMgbmVlZCB3YXJtIHdhdGVyIHRvIGxpdmUuIFRoYXQncyB3aHkgdGhleSBzdGFydmUgYW5kIHN0YWxsIG91dCBnb2luZyBub3J0aCwgb3IgY29taW5nIHRvIGxhbmQuIEEgc3Rvcm0gd291bGQgaGF2ZSB0byBiZSB2ZXJ5IHNwZWNpYWwgdG8gZmlnaHQgYWxsIHRoZSB3YXkgdGhyb3VnaCB0aGF0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTExKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlbGV2ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBmaXJzdCB5ZWFycyBpbiB0aGUgVW5pdGVkIFN0YXRlcywgSSBTa3lwZSBteSBkYWQgbGVzcyBvZnRlbiB0aGFuIEkgc2hvdWxkLiBMZXNzIG9mdGVuIHRoYW4gSSB3YW50IHRvLiBJdCdzIGhhcmQgdG8gZmluZCBhIHJoeXRobTsgSSBhbSBub3QgZG9pbmcgd2VsbCB0aGVyZS4gQnV0IGhlIHRlbGxzIG1lIGFib3V0IHRoZSB3ZWF0aGVyLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbHZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2hlbiBJIGFtIHR3ZW50eS1mb3VyLCBpdCdzIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjAvMDUvMTgvY2xpbWF0ZS9jbGltYXRlLWNoYW5nZXMtaHVycmljYW5lLWludGVuc2l0eS5odG1sJz5lc3RhYmxpc2hlZDwvYT4gdGhhdCB3YXJtZXIgd2F0ZXIgaXMgc3VwZXJjaGFyZ2luZyB0cm9waWNhbCBzdG9ybXMuPC9wPlxyXG4gICAgPHA+SSB1bmRlcnN0YW5kIHRoYXQgc2NpZW5jZSBtb3ZlcyBtb3JlIHNsb3dseSB0aGFuIGtpbmRlcmdhcnRlbiB0ZWFjaGVycycgc21hbGwgdGFsazsgdGhhdCBjbGltYXRlLCBieSBkZWZpbml0aW9uLCBoYXBwZW5zIG9uIGEgdGltZXNjYWxlIGNsb3NlciB0byBnZW9sb2dpY2FsIHRoYW4gYW5lY2RvdGUuIDwvcD5cclxuICAgIDxwPkJ1dCBJIGRvIGhhdmUgdGhlIGZsZWV0aW5nIHRob3VnaHQgdGhhdCwgZXZlbiB0aGVuLCB0YWtpbmcgdHdlbnR5IHllYXJzIG9mIG15IGxpZmUgdG8gY2F0Y2ggdXAgdG8gaG93IHRoZSB3ZWF0aGVyJ3MgZG9pbmcgc2VlbXMgYSBiaXQgbXVjaC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdBVkUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J1dBVycgY2xhc3NOYW1lPSdwb2VtJz5cclxuICA8aW1nIHNyYz0nL211bHRpenpldF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+Jm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyB0byBpbnNhdGlhdGUgdGVtcGVzdCwgdW5xdWVsbGVkIDxici8+XHJcbiAgIGJ5IHByYXllciBub3IgY2lnYXJldHRlLCBjYXJlbGVzcywgbWVhbiw8L3A+XHJcbiAgIDxwPmEgY29sZC1ibG9vZGVkIGluZGlmZmVyZW5jZSBzbyBwdXJlLDxici8+XHJcbiAgIGEgc3Ryb25nIHN3aW1tZXIgd29uJ3QgbGFzdCB0ZW4gd2V0IG1pbnV0ZXMuPC9wPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPk0uIEJhcnRsZXkgU2VpZ2VsLDxici8+XCJXQVZFIEFGVEVSIFdBVkVcIjwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IEdhcmRlbiBmcm9tIFwiLi9waG90b3NfY2hpXCJcclxuaW1wb3J0IE9kaWxlIGZyb20gXCIuL3Bob3Rvc19vZGlsZVwiXHJcbmltcG9ydCB7IEdsYWNpZXJCLCBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBPZGUgZnJvbSBcIi4vcG9lbS1vZGVcIlxyXG5pbXBvcnQgV2luU3VtIGZyb20gXCIuL3BvZW0td2luc3VtXCJcclxuaW1wb3J0IERlZmluZSBmcm9tIFwiLi9xdW90ZS1jbGltZVwiXHJcbmltcG9ydCBPaGlvIGZyb20gXCIuL3N0cmlwZS1vaGlvXCJcclxuaW1wb3J0IFdhc2hpbmd0b24gZnJvbSBcIi4vc3RyaXBlLXdhc2hpbmd0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRCgpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMTMgLz5cclxuICAgPFNjZW5lMTQgLz5cclxuICAgPE9oaW8gLz5cclxuICAgPFNjZW5lMTkgLz5cclxuICAgPFNjZW5lMTUgLz5cclxuICAgPERlZmluZSAvPlxyXG4gICA8U2NlbmUxNiAvPlxyXG4gICA8U2NlbmUxNyAvPlxyXG4gICA8U2NlbmUxOCAvPlxyXG4gICA8U2NlbmUyMCAvPlxyXG4gICA8U2NlbmUyMiAvPlxyXG4gICA8T2RpbGUgLz5cclxuICAgPFNjZW5lMjEgLz5cclxuICAgPFNjZW5lMjMgLz5cclxuICAgPFNjZW5lMjQgLz5cclxuICAgPFNjZW5lMjUgLz5cclxuICAgPFNjZW5lMjYgLz5cclxuICAgPEdhcmRlbiAvPlxyXG4gICA8U2NlbmUyNyAvPlxyXG4gICA8U2NlbmUyOCAvPlxyXG4gICA8U2NlbmUyOSAvPlxyXG4gICA8U2NlbmUzMCAvPlxyXG4gICA8V2luU3VtIC8+XHJcbiAgIDxTY2VuZTMxIC8+XHJcbiAgIDxTY2VuZTMyIC8+XHJcbiAgIDxTY2VuZTMzIC8+XHJcbiAgIDxTY2VuZTM0IC8+XHJcbiAgIDxPZGUgLz5cclxuICAgPFNjZW5lMzUgLz5cclxuICAgPFNjZW5lMzYgLz5cclxuICAgPFNjZW5lMzcgLz5cclxuICAgPFNjZW5lMzggLz5cclxuICAgPFdhc2hpbmd0b24gLz5cclxuICAgPFNjZW5lMzkgLz5cclxuICAgPFNjZW5lNDAgLz5cclxuICAgPFNjZW5lNDEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxTY2VuZTQyIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBjb2xsZWdlIGluIHRoZSBVUyB0aGF0IEkgZ2V0IGludG8gaXMgaW4gT2hpbywgc28gSSBhbSBlaWdodGVlbiBhbmQgSSBhbSBpbiBPaGlvLiBCZWZvcmUgdGhhdCwgSSBhbSBzZXZlbnRlZW4sIGFuZCBteSBmYXRoZXIgaXMgaGVscGluZyBtZSBwaWNrIG91dCBhIHdpbnRlciBjb2F0IG9uIHRoZSBpbnRlcm5ldCwgYW5kIEkgYW0gYXNraW5nIGhpbSBpZiBJIHNob3VsZCBjaG9vc2UgdGhlIHdhcm1lc3Qgb25lIEkgc2VlLjwvcD5cclxuICAgIDxwPlRoYXQncyBvdmVya2lsbCwgaGUgc2F5cy4gKEhlIGhhcyBiZWVuIHRoZXJlIGJlZm9yZSwgYWxiZWl0IHN1YnN0YW50aWFsbHkgcHJpb3IgdG8gbWUgZXZlbiBiZWluZyBib3JuLikgV2hhdCBJIHJlYWxpc3RpY2FsbHkgbmVlZCBpcyBtb3JlIHRvd2FyZHMgdGhlIGNlbnRlciBvZiB0aGUgcmFuZ2UuIEknZCByZWdyZXQgZ2V0dGluZyB0b28gaGVhdnkgYSBjb2F0LCBoZSBzYXlzLCBhbmQgaGVscHMgbWUgcGljayBvbmUgb2YgdGhlIG1pZGRsaW5nIG9uZXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXJ0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBnaXZlbiB0byB1bmRlcnN0YW5kIGl0IHNheXMgZW5vdWdoIHRvIHNheSB0aGF0IG15IGZpcnN0IHllYXIgaW4gT2hpbyBpcyBhIGxha2UgZWZmZWN0IHllYXIsIHRob3VnaCBJIHdvdWxkbid0IGtub3cgd2h5LiA8L3A+XHJcbiAgICA8cD5JIGxlYXJuLCBmaXJzdGhhbmQgYW5kIG9uIG15IGhhbmRzLCB3aGF0IGEgLTQwIHdpbmQgY2hpbGwgaXMgaW4gRmFocmVuaGVpdC4gSSBsZWFybiB3aGF0IHNwZWNpYWwgY2FuZSB0aXBzIEkgbmVlZCBmb3IgdHJhY3Rpb24gaW4gc25vdy4gSSBsZWFybiB0aGF0IG15IGNvbGxlZ2UgaXMgbm90IHBhcnRpY3VsYXJseSBpbnRlcmVzdGVkIGluIGNsZWFyaW5nIHRoZSBzaWRld2Fsa3MgaW4gdGltZSBmb3IgY2xhc3M7IGl0IGRvZXMgbm90IG9jY3VyIHRvIG1lIHRoYXQgdGhleSBtYXkgb25jZSBhdCBsZWFzdCBoYXZlIGJlZW4gYWJsZSB0byBhZmZvcmQgdGhlIG5lZ2xpZ2VuY2UsIGJlY2F1c2UgSSBkb24ndCBoYXZlIGFueSByZWFzb24gdG8gdW5kZXJzdGFuZCBhIGNvbXBhcmlzb24gYnkgd2hpY2ggdGhpcyBiZWNvbWVzIGV4dHJlbWUuPC9wPlxyXG4gICAgPHA+TXkgZGFkIGFwb2xvZ2l6ZXMsIHRob3VnaC4gRm9yIGxlYWRpbmcgbWUgd3JvbmcsIHdpdGggdGhlIGNvYXQuPC9wPlxyXG4gICAgPHA+VGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIGhlcmUgaXMgc3VwcG9zZWQgdG8gZG8sIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+SSB3b3VsZG4ndCBrbm93LCBJIHNheTsgb3IgbWF5YmUgSSBkb24ndC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZmlmdGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgRmFjZVRpbWUgbXkgZGFkIGluc3RlYWQgb2YgU2t5cGluZywgdGhlc2UgZGF5cy4gSGUgdGVsbHMgbWUgaG93IG1hbnkgZGF5cyB0aGlzIHdlZWsgdGhlcmUgaGF2ZSBiZWVuIG11bmljaXBhbCB3YXRlci4gSSB0ZWxsIGhpbSB3aGVuIGl0IHNub3dzLiBIZSB0ZWxscyBtZSBob3cgb3VyIHRlbXBlcmF0dXJlcyBjb21wYXJlLiBJIHRlbGwgaGltIEkgZ290IGEgbmV3IG1vbml0b3IuIEkgdGVsbCBoaW0gaG93IG11Y2ggaXQgd2FzIG5ldywgYW5kIGhvdyBwbGVhc2VkIEkgYW0gd2l0aCBteXNlbGYgZm9yIGhvdyBJIGZvdW5kIGl0IHVzZWQsIGhvdyB0aGUgZGVhbCB0b29rIGEgbWF0dGVyIG9mIGRheXMuPC9wPlxyXG4gICAgPHA+WW91J3JlIGluIHRlY2ggaGVhdmVuIHVwIHRoZXJlLCBoZSBzYXlzLiBJIHNheSwgSSBndWVzcy4gSGUgc2F5cyB0aGF0IHVzZWQgaGVyZSB3b3VsZCBiZSBuZXcgdGhlcmUuIEkgdGhpbmsgYWJvdXQgdGhhdCBhcyBhIHdheSB0byBwdXQgaXQsIGxhdGVyOiBkZXZlbG9wbWVudCBpbiByZWxhdGl2ZSB0aW1lIG92ZXIgc3BhY2UuPC9wPlxyXG4gICAgPHA+SSBzYXkgKGFub3RoZXIgZGF5KSB0aGF0IEknZCBsaWtlIHRvIHRyYWRlIGhpbSBteSBsYXB0b3AsIHRoYXQgaXQgd291bGQgYmUgYmV0dGVyIGZvciBoaXMgZ3JpcCB0aGFuIGl0J3MgYmVlbiBmb3IgbXkgdmlzaW9uLiBIZSBhc2tzIGlmIEkgd2FudCBoaW0gdG8gdGFsayB0byBhc2sgdGhlIGd1eSB3aG8gc2VuZHMgaGltIHN0dWZmIGZyb20gdGhlIGJvcmRlciB3aGF0IHRoZSBjb21wb3VuZGluZyBjb3N0cyBvZiBzaGlwcGluZyB3b3VsZCBsb29rIGxpa2UuIEkgc2FpZCBJIHRob3VnaHQgSSdkIGp1c3QgYnJpbmcgaXQgdG8gaGltLCB3aGVuIEkgY2FuLiBTYXZlIGhpbSB0aGUgY3VzdG9tcywgdGhlIHdheSB3ZSBoYW5kbGVkIHRoaW5ncyBncm93aW5nIHVwLjwvcD5cclxuICAgIDxwPk9oLCBoZSBzYXlzLiBUaGF0J3Mga2luZCBvZiB5b3UuPC9wPlxyXG4gICAgPHA+SSB3YW50IHRvIHNlZSB5b3UgYW55d2F5LCBJIHNheS4gVGhlIG1hY2hpbmUgYmVpbmcgbGlnaHQgaXMgdGhlIHdob2xlIHBvaW50IG9mIHRoZSB0aGluZy4gSSBkb24ndCBzZWUgd2hlcmUga2luZG5lc3MgY29tZXMgaW50byBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4dGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgd2FzIGhvbWUgZm9yIHRoZSBsYXN0IHRpbWUgaW4gRGVjZW1iZXIsIDIwMTMuIEl0J3Mgbm90IG15IGZpcnN0IHN1bW1lciBhd2F5LS1pdCBmZWVscyBpdC0taXQncyBub3QgbXkgZmlyc3Qgc3VtbWVyIGJ1dCBteSBzZWNvbmQgdGhhdCB0aGUgaHVycmljYW5lIGNvbWVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgYmlnIGh1cnJpY2FuZSB3aG9zZSBuYW1lIEkgdXNlZCB0byByZW1lbWJlciBoYXBwZW5lZCBzaG9ydGx5IGJlZm9yZSBJIHdhcyBib3JuLCBhbmQgdGh1cyB0aGUgcG9pbnQgb2YgcmVmZXJlbmNlIGZvciBhbiBleHRyYW9yZGluYXJ5IHN0b3JtIGNvdWxkIGNvbWZvcnRhYmx5IGJyYWNrZXQgYW55dGhpbmcgSSdkIGtub3cuPC9wPlxyXG4gICAgPHA+SGVyIHVzdXJwZXIgY29tZXMgdGhlIHN1bW1lciBJIHR1cm4gdHdlbnR5LiBJdCB0ZWFycyB0aHJvdWdoIHRvd24gbGlrZSBhIG5hdHVyYWwgZGlzYXN0ZXIsIHdoaWNoIGlzIGphcnJpbmcuIEl0IHVwZW5kcyBteSBmYXRoZXIncyBnYXJkZW4sIHdoaWNoIGlzLCBzb21laG93LCB3b3JzZS4gVGhpbmtpbmcgb2YgaGltIHB1dHRpbmcgaXQgYmFjayB0b2dldGhlci4gRXZlbiBpZiBoZSBoYWQgaGVscC48L3A+XHJcbiAgICA8cD5IZSBkb2Vzbid0IHdhbnQgdG8gdmlzaXQsIGFmdGVyIHRoYXQsIGV2ZW4gYmVmb3JlIGhlIGNhbid0LiBUcmF2ZWwgaGFzIGFsd2F5cyBiZWVuIGEgdGhpbmcgb2Ygc3VtbWVyOyBoZSBkb2Vzbid0IHdhbnQgdG8gbGVhdmUgdGhlIGhvdXNlIHRvIHN0b3JtcyB1bnN1cGVydmlzZWQuIEhlIGRvZXNuJ3QgdHJ1c3QgYW55b25lIGVsc2UgdG8gaGFuZGxlIGl0IGlmIGhlIGxlYXZlcyBpdCBhbG9uZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW5kcyBtZSBwaG90b3MuIEJ1dCB0aGV5IGdldCBtb3JlIGRpZmZpY3VsdCB0byBsb29rIGF0IG92ZXIgdGltZSwgb2RkbHkgZW5vdWdoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSduaW5ldGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkh1cnJpY2FuZSBzZWFzb24gZ3Jvd3MgbG9uZ2VyIGF0IGJvdGggZW5kcy4gSXQncyBoYXJkIHRvIGZpbmQgbmV3cyBhYm91dCBodXJyaWNhbmVzIGluIHRoZSBQYWNpZmljIHRoYXQgSSBjYW4gcGljayB1cCBvbiBwYXNzaXZlbHksIHRob3VnaDsgQW1lcmljYW4gc291cmNlcywgd2hpY2ggYXJlIHdoYXQgdGhlIGludGVybmV0IGlzIGJ1aWx0IG9uLCBjYXJlIGFib3V0IHRoZSBBdGxhbnRpYyBmaXJzdCBhbmQgZm9yZW1vc3QuIEkgZG9uJ3QgbGlrZSB0aGUgQXRsYW50aWMsIHNlbGZpc2hseTogaXQgaGFzIGEgYmFkIHRyYWNrIHJlY29yZCwgYW5kIEkgcmVtZW1iZXIgaXQgZ3JheS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SW4gMjAyMiwgSSB0ZWxsIGhpbSBJJ20gd3JpdGluZyB0aGlzIGVzc2F5LCBhbmQgSSBhc2sgaWYgSSBjYW4gdXNlIHRoZSBwaG90b3MuIEhlIGFza3Mgd2hhdCBJIHdhbnQgdGhlbSBmb3IuIEkgc2F5IEknbSB3cml0aW5nIGFib3V0IHRoZSBpbmNyZWFzZWQgdG9sbCBvZiBodXJyaWNhbmVzIG9uIGFuIGVudmlyb25tZW50IHRoYXQgcmVsaWVkIG9uIHRoZW0uIEhlIHNheXMgaGUgc3VwcG9zZXMgT2RpbGUgd291bGQgYmUgdGhlIG9uZSBmb3IgdGhhdC48L3A+XHJcbiAgICA8cD5JIHdhc24ndCB0aGVyZSwgSSBzYXkuIEl0J3MgdGhlIGZpcnN0IGJpZyBvbmUgd2hlcmUgSSB3YXNuJ3QgdGhlcmUuPC9wPlxyXG4gICAgPHA+SGUgYXNrcyB3aHkgdGhhdCBtYXR0ZXJzLiBUaGluZ3MgYXJlIGdvaW5nIHRvIGtlZXAgaGFwcGVuaW5nIHdoaWxlIHlvdSdyZSBub3QgaGVyZSwgaGUgc2F5cy48L3A+XHJcbiAgICA8cD5JIGtub3csIEkgc2F5LjwvcD5cclxuICAgIDxwPlN1cnZpdm9yJ3MgZ3VpbHQgaXMgYSB0aGluZywgbXkgcGFydG5lciBzYXlzLCBpbiBlYXJzaG90LCBmcm9tIG9mZnNjcmVlbi4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW50IG1lIHBob3Rvcy48L3A+IFxyXG4gICAgPHA+SSBzdHJ1Z2dsZSB0byBkZXNjcmliZSB0aGVtLjwvcD5cclxuICAgIDxwPkkgcmVtaW5kIG15c2VsZiB0aGF0IEkgb3dlIHRoYXQgdG8gb3RoZXIgcGVvcGxlLiBJIHByb21pc2UgbXlzZWxmIEknbGwgY29tZSBiYWNrIHRvIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSB0ZWxsIG15IGZhdGhlciB0aGF0IEknbSB3cml0aW5nIGFib3V0IHRoZSBmaW5nZXJwcmludHMgb2YgY2xpbWF0ZSBjaGFuZ2UgYnJhY2tldGVkIGJ5IG15IGxpZmUuIEkgdGVsbCBoaW0gdGhhdCBhIGxpdHRsZSBvdmVyIGEgcXVhcnRlciBjZW50dXJ5IGlzIGEgcHJldHR5IGRlY2VudCBmcmFtZSB3aXRoIHdoaWNoIHRvIGVuY2Fwc3VsYXRlIGl0LiBJIHRlbGwgaGltIHRoYXQgc29tZXRpbWVzIGl0IGZlZWxzIGxpa2UgaXQncyBmb2xsb3dpbmcgbWUgdXAuPC9wPlxyXG4gICAgPHA+WW91J3ZlIGJlZW4gd29ya2luZyB5b3VyIHdheSBub3J0aCwgaGUgc2F5cywgd2l0aCBzb21lIGRlbGlnaHQgYXQgaG93IGl0IGxpbmVzIHVwLiA8L3A+XHJcbiAgICA8cD5FdmVyeXdoZXJlIEkgZ28sIGV2ZXJ5IHllYXIsIHBlb3BsZSB0ZWxsIG1lIHRoYXQgdGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIHVzdWFsbHkgZG9lcywgSSB0ZWxsIGhpbS4gSSdtIGdldHRpbmcgcHJhY3RpY2UgYXQgdGhlIHByZW1pc2UgYnkgbm93LjwvcD5cclxuICAgIDxwPlRoYXQncyB0aGVpciBwcm9ibGVtLCBoZSBzYXlzLiBIZSBzYXlzIGl0J3MgYSBmYW50YXN5IHRoYXQgaXNuJ3QgcmVsZXZhbnQgdG8gdGhlIHdvcmxkIGFzIGl0IGlzIGFuZCB3aWxsIGNvbnRpbnVlIGJlaW5nLjwvcD5cclxuICAgIDxwPkkgc2F5IEkgdGhpbmsgZ3JvdW5kaW5nIHRoZW1zZWx2ZXMgaW4gd2hhdCB0aGV5IHN0aWxsIHRoaW5rIG9mIGFzIG5vcm1hbCBpcyBob3cgcGVvcGxlIGhlbHAgdGhlbXNlbHZlcyB1bmRlcnN0YW5kIGNoYW5nZS48L3A+XHJcbiAgICA8cD5IZSBzYXlzIGl0J3Mgc3RpbGwgdGhlIGNhc2UgdGhhdCBzdWNoIGdyb3VuZCBkb2Vzbid0IGV4aXN0LiBJIHNheSBJIGtub3cuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTMnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JdCBpcyBKYW51YXJ5LCBhbmQgSSBzdGlsbCBsaXZlIGluIEJlbGxldnVlLiBJbiB0aGUgdGltZSBiZXR3ZWVuIGFuIGFmdGVybm9vbidzIHdvcnRoIG9mIHRoaXMgY2xhc3MgYW5kIHN0YXlpbmcgYmVoaW5kIGFmdGVyLCB0aGUgcmFpbiB0aGF0IG15IHBhcnRuZXIgaG9wZWQgc2lnbmFsZWQgYSBicmVhayBmcm9tIHRoZSBzbm93IGhhcyB0dXJuZWQgdG8gaGFpbC48L3A+XHJcbiAgICA8cD5JIGNoZWNrIHRoZSB3aW5kb3cuIEkgY29tZSBiYWNrLiBJJ20gc29ycnkgaWYgdGhlcmUncyBiYWNrZ3JvdW5kIG5vaXNlLCBJIHNheSB0byBteSBpbnN0cnVjdG9yLiBJdCdzIGhhaWwuPC9wPlxyXG4gICAgPHA+VGhlcmUncyBhIHBhcnRpY3VsYXIgc29ydCBvZiBzbWlsZSBJJ20gZmFtaWxpYXIgd2l0aCwgd2hlbiBwZW9wbGUgYXJlIHRyeWluZyB0byB0b25lIGRvd24gdGhlIGltcGFjdCBvZiB0YWxraW5nIGFib3V0IHRoZSB3ZWF0aGVyLiBUaGUgc3RyYWluIG9mIHRyeWluZyB0byBvZmZzZXQgdGVuc2lvbiB3aGVuIHRoZXJlJ3Mgbm93aGVyZSB0byBvZmZzZXQgaXQgdG8uPC9wPlxyXG4gICAgPHA+SXQncyB0aGVyZSB3aGVuIGhlIHNheXM6IEl0J3Mgbm90IHN1cHBvc2VkIHRvIGhhaWwuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGZpbmQgbXlzZWxmIHdpc2hpbmcgSSdkIGdvbmUgb3V0c2lkZSBpbiB0aW1lIGZvciB0aGUgaGFpbC4gSXQncyBub3QgYSB0ZXh0dXJlIG9mIGljZSBmb3VuZCBtdWNoIGVsc2V3aGVyZSwgYW5kIGhhc24ndCBnb3R0ZW4gb2xkIGZvciBtZSB5ZXQ7IEkgbGlrZSB0byBlYXQgaXQuPC9wPlxyXG4gICAgPHA+KFdoZW4gaXQgc25vd2VkLCBteSBkYWQgd2FzIGRpc2FwcG9pbnRlZCB0aGF0IEkgZGlkbid0LCBoaXMgd29yZHMsIGdvIHBsYXkgaW4gdGhlIHNub3cuIFNvIHdhcyBJLCBhZG1pdHRlZGx5LiBJIHRob3VnaHQ6IHRoZXJlIHdpbGwgYmUgbW9yZSBzbm93IG5leHQgeWVhci4gSSB3aWxsIGRvIGJldHRlciBieSBteXNlbGYgbmV4dCB5ZWFyLCBJIHRoaW5rLik8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5NSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBmaXJzdCBzdW1tZXIgSSdtIHNldHRsZWQgZW5vdWdoIGluIFNlYXR0bGUgdG8gYmUgYXdhcmUgb2YgbXVjaCBvZiBhbnl0aGluZywgQ2FsaWZvcm5pYSBpcyBvbiBmaXJlLiBJIGFtIGdpdmVuIHRvIHVuZGVyc3RhbmQgdGhhdCB0aGlzIGlzIG5ldy4gQXNoIGZhbGxzIGxpa2Ugc25vdywgb3IgbGlrZSBhIENvbGQgV2FyIGVyYSBudWNsZWFyIFBTQS4gQSBmcmllbmQgZ3Jvd2luZyB1cCBpcyB2aXNpdGluZyBidXQgSSBjYW4ndCBkbyBtdWNoIG1vcmUgdGhhbiBtYWtlIGl0IGZyb20gdGhlIGNvdWNoIHRvIGFub3RoZXIgc2lkZSBvZiB0aGUgcm9vbS4gPC9wPlxyXG4gICAgPHA+V2UgZG8gbWFuYWdlIHRvIGdvIHRvIHRoZSBnbGFzcyBzY3VscHR1cmUgZ2FyZGVuLiBJIHRyeSB0byB0YWtlIHBob3Rvcy4gTXkgcGhvbmUgY2FuIGNhcHR1cmUgdGhlIGNvbG9ycyBvZiB0aGUgZ2xhc3MgdW5kZXIgYWxpZW4gbGlnaHQsIG9yIGl0IGNhbiBjYXB0dXJlIHRoZSBncmF5IHNreSBhbmQgcmVkIHN1bi4gSXQgZG9lcyBub3Qga25vdyBob3cgdG8gbWFrZSBzZW5zZSBvZiB0aGUgdHdvIG9mIHRoZW0gdG9nZXRoZXIuPC9wPlxyXG4gICAgPHA+TXkgcGFydG5lciwgbXkgZnJpZW5kLCBhbmQgSSB0YWxrIGFib3V0IGhvdyBjb29sIGl0IHdvdWxkIGJlIHRvIGNvbWUgdXAgd2l0aCBhIHNob3J0IHN0b3J5IHdoZXJlIEkgY291bGQgdXNlIHRoZSBwaG90b3MgSSBkaWQgZ2V0IGFzIGlsbHVzdHJhdGlvbnMuIEV2ZW4gaWYgSSBjYW4ndCBjYXB0dXJlIHRoZSB3aG9sZSBvZiBpdCwgaXQncyBzdHJpa2luZy4gSXQgd291bGQgYmUgbmljZSB0byBnZXQgc29tZXRoaW5nIG91dCBvZiBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Nic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgZ2V0IGFpciBmaWx0ZXJzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk3Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBnZXQgYmV0dGVyIGFpciBmaWx0ZXJzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlaWdodGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlllYXJzIGxhdGVyLCBpbiB0aGUgcGFuZGVtaWMsIEkgYWxyZWFkeSBvd24gcmVzcGlyYXRvcnMuIEkgdGFrZSB0aGUgb3Bwb3J0dW5pdHksIHBlcmlvZGljYWxseSwgdG8gZ2V0IGJldHRlciBvbmVzLiBUaGVyZSdzIGEgcG9zdGFsIHN5c3RlbTsgSSBjYW4gZG8gdGhhdC4gSSBhbSBhbGwgYnV0IHVzZWQgdG8gdGhlIG1haWwuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBzZWNvbmQgd2VlayBpbiBPaGlvLCBJIHdhbnRlZCB0byBzZW5kIGEgbGV0dGVyIHRvIGEgZnJpZW5kLiBNeSBSQSBoYWQgdG8gdGVhY2ggbWUgaG93IHRvIGFkZHJlc3MgYW4gZW52ZWxvcGUuIEl0IHN0cnVjayBtZSBhcyBzb3JjZXJ5IGZvciB5ZWFyczogdG8gb3JkZXIgdGhpbmdzIGFuZCBoYXZlIHRoZW0gY29tZSB0byB5b3UuIFJlc291cmNlcyBmbG93IHRvd2FyZHMgZW1waXJlcywgSSBrbmV3IHdoZW4gSSB3YXMgc2l4OyBwZW9wbGUgZ28gd2hlcmUgdGhlIHJlc291cmNlcyBhcmUsIEkgdGVsbCBwZW9wbGUgYXQgdHdlbnR5LXNpeCwgZmVlbGluZ3MgdG93YXJkcyB0aGUgZW1waXJlIGFyZSBpcnJlbGV2YW50LiBCdXQgb24gdGhlIHBlcnNvbmFsIGxldmVsLS10aGVyZSB3YXMgc29tZXRoaW5nIG1hZ2ljIGluIHN1Y2ggcm9hZHMgbGVhZGluZyB0b3dhcmRzIG1lLiBUaGUgZmlyc3QgdGhpbmcgSSBib3VnaHQgd2l0aCBteSBjb2xsZWdlIGFkZHJlc3Mgd2FzIGEgY2FuZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgcGFydG5lciBhbmQgSSBoYXZlIGFuIGFyZ3VtZW50IGFib3V0IHRoZSBjb25jZXB0IG9mIHN3aW1taW5nIGJlYWNoZXM7IGZvciB0aGUgc2FrZSBvZiB0aGlzIGFyZ3VtZW50LCBsZXQncyBzYXkgSSBhbSB0d2VudHktdHdvLiBIaXMgb2NlYW4gaXMgdGhlIFB1Z2V0IFNvdW5kOiBhIHRhbWUsIGNvb2wgbGl0dGxlIHRoaW5nIHRoYXQgSSBrbm93IGZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIGJyaWRnZXMsIHdpdGggZ2xhc3N5IGZsYXRzIGFuZCBuaWJibGluZyB3YXZlcy4gV2UgYXJlIGRpc2N1c3Npbmcgd2h5IGNoYXJhY3RlcnMgaW4gYSB2aWRlbyBnYW1lIHdvdWxkIHBpY2sgdXAgYW5kIGxlYXZlIHRoZWlyIHNlY3Rpb24gb2YgYSBjb2FzdGxpbmUgdG8gc3dpbSBzb21ld2hlcmUgZWxzZS48L3A+XHJcbiAgICA8cD5QcmVzdW1hYmx5IGl0J3Mgd2hlcmUgdGhlIHN3aW1taW5nIGJlYWNoZXMgYXJlLCBJIHNheS48L3A+XHJcbiAgICA8cD5XaGF0IGRvIHlvdSBtZWFuIHN3aW1taW5nIGJlYWNoLCBoZSBzYXlzLjwvcD5cclxuICAgIDxwPkJlYWNoZXMgd2hlcmUgaXQncyBzYWZlIHRvIHN3aW0sIEkgc2F5LCBpbXBhdGllbnRseS4gV2l0aGluIHJlYXNvbi48L3A+XHJcbiAgICA8cD5UaGUgcmVzdWx0aW5nIGxvbmcgYW5kIGhhbHRpbmcgY29udmVyc2F0aW9uLCByZW5kZXJlZCBhbiBhcmd1bWVudCBieSBsYWNrIG9mIGFueSB1bml2ZXJzZSBvZiBjb21tb24gcmVmZXJlbmNlLCBpcyBjdXQgc2hvcnQgd2hlbiBoaXMgbW90aGVyIHRlbGxzIGhpbSB0aGF0IHRoZWlyIGZhbWlseSB2aXNpdGVkIG5lYXIgbXkgaG9tZXRvd24gYmVmb3JlIGhlJ2QgYmUgYWJsZSB0byByZW1lbWJlci4gQXQgYSB0b3VyaXN0cycgYmVhY2ggaGlzIGdyYW5kZmF0aGVyIHR1cm5lZCBoaXMgYmFjayBvbiB0aGUgd2F0ZXIgYW5kLCB3aGVuIGhlIHdlbnQgZmx5aW5nIGFjY29yZGluZ2x5LCBsb3N0IGEgcGFpciBvZiBkZW50dXJlcy48L3A+XHJcbiAgICA8cD5TZWUsIEkgc2F5LiBOb3JtYWwgb2NlYW4uIFlvdSBkb24ndCB0dXJuIHlvdXIgYmFjayBvbiBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPldlIGhhdmUgaGFkIGxvbmcgZW5vdWdoIHRvIGdyb3cgYWNjdXN0b21lZCB0byBvbmUgYW5vdGhlciB0aGF0IEkgc3RydWdnbGUgdG8gcmVtZW1iZXIgb3RoZXIgZGlzam9pbnRzIG9mIHRoaXMga2luZC4gVGhlcmUncyBiZWVuIG92ZXIgaGFsZiBhIGRlY2FkZSB0byBidWlsZCB0aGUgbmVjZXNzYXJ5IGNvbmNlcHR1YWwgYnJpZGdlcy4gT2Z0ZW4gZW5vdWdoLCB3ZSBzdGlsbCBoYXZlIG1vbWVudHMgdGhhdCBtYWtlIGhpbSBzYXksIFNvbWV0aW1lcyBJIHJlbWVtYmVyIHRoYXQgd2UgY29tZSBmcm9tIGRpZmZlcmVudCB3b3JsZHMuIEJ1dCB0aGV5IGRvbid0IG11Y2ggc3ByaW5nIHRvIG1lbW9yeSB0aGVzZSBkYXlzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBoYXZlIG1peGVkIGZlZWxpbmdzIG9uIHJlZmVycmluZyB0byBwcmVwYXJhdG9yaWEgYXMgYSBoaWdoIHNjaG9vbC4gSXQgZ2l2ZXMgcGVvcGxlIHRoZSBhcHByb3hpbWF0ZSBpZGVhIHRoYXQgdGhleSBuZWVkLCBidXQgbW9yZSBvZnRlbiB0aGFuIG5vdCBJIGZpbmQgSSB3YW50IHRoZSBhbGllbmF0aW9uOyBJJ20ganVzdCBub3QgZW50aXJlbHkgc3VyZSB3aGVuIEkgbWFuYWdlIHRoYXQgdmVyc3VzIGFjdHVhbCBpbmNvbXByZWhlbnNpb24uIEFuZCBJIGRvbid0IHdhbnQgdGhlIGxhdHRlcjsgdGhhdCBkZWZlYXRzIHRoZSBwb2ludC4gSSBwdXQgZmFyIHRvbyBtdWNoIGVmZm9ydCBpbnRvIHRyYW5zbGF0aW9uIHRoYW4gdGhhdC48L3A+XHJcbiAgICA8cD5MZXQncyBib3cgdG8gYXVkaWVuY2UgYW5kIHNheSBJJ20gaW4gaGlnaCBzY2hvb2wsIGZvciB0aGlzIG9uZS4gSSd2ZSBoYWQgdG8gbW92ZSB0byB0aGUgY2FwaXRhbCBvZiB0aGUgc3RhdGUtLWR1cmluZyB0aGUgd2Vlazsgc3BsaXR0aW5nIGN1c3RvZHkgd2lsbCBkbyB0aGVzZSB0aGluZ3MgdG8geW91LS1mb3IgaXQuIEknbSBhIHNjaG9sYXJzaGlwIHN0dWRlbnQgYXQgYSBwcml2YXRlIHNjaG9vbCwgZm9yIHJlbGF0ZWQgcmVhc29ucy4gQXQgdGhpcyBncmFkZSBsZXZlbCBpbiBteSBob21ldG93biB0aGVyZSdzIG9ubHkgdm9jYXRpb25hbCBzY2hvb2xpbmcsIGFuZCBpdCdzIG5vdCBtYW5kYXRvcnkgYW55d2F5LiBGb3IgdGhlIGZpcnN0IHRpbWUgaW4gbXkgbGlmZSxhcyBhIHJlc3VsdCwgSSBhbSBub3QgaW4gdGhlIHB1YmxpYyBzY2hvb2wgc3lzdGVtLjwvcD5cclxuICAgIDxwPihPbmUgZWFybHkgbWVhbmluZyBvZiB0aGlzIGlzIHRoYXQgdGhlIHNjaG9vbCBpcyBhaXIgY29uZGl0aW9uZWQsIHdoaWNoIGl0IGRvZXMgbm90IG9jY3VyIHRvIG1lIHRvIHBhY2sgZm9yIG15IGZpcnN0IHdlZWsgdGhlcmUuIEkgdHVybiBmaWZ0ZWVuIGFuZCBteSB0ZWV0aCBhcmUgY2hhdHRlcmluZyBhdCB0aGUgY29udHJhc3QgZm9yIGhhbGYgdGhlIGRheSwgdW50aWwgYSBjbGFzc21hdGUgaW5jcmVkdWxvdXNseSBsZW5kcyBtZSBoaXMgamFja2V0Lik8L3A+XHJcbiAgICA8cD5XZSBhcmUgd2F0Y2hpbmcgYSBtb3ZpZSBpbiBvbmUgb2YgdGhlIHRocm93YXdheSBjbGFzc2VzIHdob3NlIHJlZGVlbWluZyBmZWF0dXJlcyBhcmUgZ2VuZXJhbGx5IG1vdmllcywgd2hlbiB0aGUgcHJvdGFnb25pc3QgcnVucyBvdXQgb250byB0aGUgZ3JlZW4sIGdyZWVuIGxhd24gb2Ygc29tZSBmYW1vdXMgY29sbGVnZSdzIG9sZCBBbWVyaWNhbiBidWlsZGluZy48L3A+XHJcbiAgICA8cD5UaGUgbWV0YWwgcm9vZiBvZiBteSBoaWdoIHNjaG9vbCdzIG5ldyBidWlsZGluZyAoaWYgd2UgY2FsbCBpdCBhIGhpZ2ggc2Nob29sLCBhcHByb3hpbWF0aW5nKSByYXR0bGVzIHdoZW4gaXQgcmFpbnMsIGFsdGhvdWdoIGl0J3Mgbm90IGN1cnJlbnRseSByYWluaW5nLjwvcD5cclxuICAgIDxwPk9uZSBvZiBteSBjbGFzc21hdGVzIHBvaW50cyBhbmQgc2F5cywgaW4gbXVjaCB0aGUgc2FtZSB0b25lIGFzIHBlb3BsZSBzdGFydGVkIGNpdGluZyA8aT5sYSBjcmlzaXM8L2k+IHdoZW4gdGhlIEFtZXJpY2FuIHJlY2Vzc2lvbiBtZWFudCB0aGV5IHN0b3BwZWQgZXhwb3J0aW5nIG91ciBlY29ub215J3Mgd29ydGggb2YgdG91cmlzdHMsIHRoYXQgd2Ugc2hlbGwgb3V0IHNvIG11Y2ggZm9yIHR1aXRpb24sIHNvIHdoeSBkb2Vzbid0IG91ciBzY2hvb2wgbG9vayBsaWtlIHRoYXQ/PC9wPlxyXG4gICAgPHA+VGhlIHRlYWNoZXIgY291bGQgY29tbWVudCBvbiBoaXN0b3J5LCBhbmQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIGEgbmV3IGJ1aWxkaW5nLiBTaGUgY291bGQgY29tZW1udCwgZXZlbiwgb24gZW52aXJvbm1lbnQ7IHdlIGhhdmUgYW4gZW52aXJvbm1lbnRhbGlzdCBjb21wb25lbnQgaW4gYW5vdGhlciBjbGFzcywgYWdncmVzc2l2ZWx5IHRoZW1lZCBhcm91bmQgbWFuZ3JvdmUgcHJlc2VydmF0aW9uLjwvcD5cclxuICAgIDxwPlRoaXMgaXMgbm90IHRoZSBzb3J0IG9mIHBlcnNvbiBzaGUgaXM7IHNoZSBpcyB0aGUgc29ydCBvZiBwZXJzb24gd2hvIHRlbGxzIHBhcmFibGVzIGFib3V0IHRoZSBmdW5kYW1lbnRhbCBkaWZmZXJlbmNlcyBpbiBiZWhhdmlvciBiZXR3ZWVuIGJ1Y2tldHMgb2YgTWV4aWNhbiBhbmQgQW1lcmljYW4gY3JhYnMuPC9wPlxyXG4gICAgPHA+U28gd2hhdCBzaGUgc2F5cyBpcyB0cnVlIHRvIGZvcm06IHNoZSBzYXlzLCB0aGF0J3MgYmVjYXVzZSB3ZSBsaXZlIGluIGEgdGhpcmQgd29ybGQgY291bnRyeSwgZGVhci48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Myc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IGVpZ2h0ZWVuLCBJIGhhdmUgbm90IHlldCBsZWFybmVkIHRoYXQsIHdoZW4gc29tZW9uZSB0ZWxscyBtZSB0aGV5IGRvbid0IHNwZWFrIFNwYW5pc2gsIHRoZXkgbWVhbiB0aGF0IHRoZXkgc3BlYWsgbm8gU3BhbmlzaC4gTWV4aWNvIG1hbmRhdGVzIGZvcmVpZ24gbGFuZ3VhZ2UgZWR1Y2F0aW9uIGFmdGVyIHNpeHRoIGdyYWRlOyBJIGhlYXIgYWJvdXQgcGVvcGxlIHdob3NlIHNjaG9vbHMgYXJlIGxhcmdlIGFuZCB1cmJhbiBhbmQgbW9uaWVkIGVub3VnaCB0byBoYXZlIGNob2ljZXMgb2YgbGFuZ3VhZ2VzLCBidXQgZXZlcnlvbmUgaGFzIHRoZSBvcHRpb24gb2YgRW5nbGlzaC4gVGhlcmUgYXJlIGZpdmUgdGhvdXNhbmQgcGVvcGxlIGluIG15IHRvd24gYW5kIHNpeCBodW5kcmVkIHRob3VzYW5kIGluIG15IHN0YXRlLiBUaGUgb25seSBvcHRpb24gaXMgRW5nbGlzaC4gPC9wPlxyXG4gICAgPHA+VGhlIG9ubHkgb3B0aW9uIHdhcyBFbmdsaXNoIGxvbmcgYmVmb3JlIHRoYXQsIGFueXdheTsgd2hlbiB0aGUgbW9uZXkgYW5kIHRoZSBtZWRpYSBhbmQgdGhlIHNoaXBwaW5nIGNvbWVzIGluIG9uZSBsYW5ndWFnZSwgeW91IHBpY2sgaXQgdXAuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM0KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlcmUncyBhIHNwZWNpZmljIGdlbmVyYXRpb24gb2YgU3BhbmlzaC1FbmdsaXNoIHNsYW5nIEkgaGF2ZSB0aGF0IEkgc3VzcGVjdCBpcyBkZWFkIGJ5IG5vdy4gSXQncyBhIG1pZHBvaW50OiB2b2NhYnVsYXJ5IHdpdGhvdXQgZ3JhbW1hciwga2V5d29yZHMgd2l0aG91dCBjb21wcmVoZW5zaW9uLiBIb3QgZG9ncyB2YXJ5IHdpbGRseSBiZXR3ZWVuIGNvdW50cmllcywgYW5kLCB3aXRoaW4gTWV4aWNvLS1ub3QgdGhhdCB5b3UnbGwga25vdyB0aGlzIG9ubGluZS0tYmV0d2VlbiBzdGF0ZXMsIGFuZCB0aHVzIEkgYW0gYXMgY29tbWl0dGVkIGFzIHlvdSBtaWdodCBleHBlY3QgdG8gdGhlIGFyZ3VtZW50IHRoYXQgbm8gb25lIGVsc2UgbWFrZXMgdGhlbSByaWdodDsgYXMgc3VjaCwgSSBoYXZlbid0IGhhZCBhIGhvdCBkb2cgc2luY2UgSSB3YXMgZWlnaHRlZW4uIDwvcD5cclxuICAgIDxwPlRoZSBjYXJ0IHdoZXJlIG15IGZhdGhlciBhbmQgSSB3ZXJlIHJlZ3VsYXJzIGhhZCBhIGh1cnJpY2FuZSBsYW1wIHdpdGggbm8gZ2xhc3MsIGZvciBhIHdoaWxlLCBhbmQgSSBsaWtlZCBzdGFuZGluZyBjbG9zZSBlbm91Z2ggdG8gdGhlIGNvb2tpbmcgc3VyZmFjZSB0byBnZXQgdGhlIHRpbmllc3QgcGl0dGVyLXBhdHRlciBvZiBob3Qgb2lsIG9uIG15IGFybXMuIDxpPkhhdGVzIEVsIEdcdTAwRkNlcm88L2k+LCBwYWludGVkIG9uIHRoZSB3aGl0ZSBzdXJmYWNlIGJ5IHRoZSBraW5kIG9mIGRyYWZ0c21hbiBJIHdhcyB0cmFpbmVkIHRvIGJlIGluIHNlY3VuZGFyaWEgYW5kIHdob3NlIHByb2Zlc3Npb24gaGFzbid0IGV4aXN0ZWQgaW4gdGhlIG5vcnRoIGZvciBnZW5lcmF0aW9uczogdGhlIDxpPmhvdCBkb2c8L2k+IHdhcyBpbXBvcnRlZCBiZWZvcmUgdGhlIEVuZ2xpc2ggYWRqZWN0aXZlLW5vdW4gb3JkZXIgY291bGQgZm9sbG93IHN1aXQuPC9wPlxyXG4gICAgPHA+QW5vdGhlciB3b3JkIEkgdXNlIGFzIGFuIGV4YW1wbGU6IDxpPm1hY2hcdTAwRURuPC9pPiwgYW4gYWxsLXB1cnBvc2UgaW50ZW5zaWZpZXIuIFdoZW4gRW5nbGlzaCBicm91Z2h0IDxpPm1hY2hpbmU8L2k+cyB0aGUgY2xlYXJlc3QgcG9pbnQgb2YgcmVmZXJlbmNlIGluIGNvbW1vbiAgZm9yIHRoZSByZWZlcmVudHMgb2YgdGhlIHdvcmQgd2FzOiBtb3JlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk1Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SW5kdXN0cmlhbGl6YXRpb24gdHJpY2tsZXMgZG93bi4gRW1pc3Npb25zIHRyaWNrbGUgZG93bi4gQ2xpbWF0ZSBjaGFuZ2UgcmVhY2hlcyB1cCwgZHJpZnRzLCBsaWtlIENhbGlmb3JuaWEgc21va2UsIGxpa2UgaXQncyBkb2dnaW5nIG15IGZvb3RzdGVwcy4gTGlrZSBpdCB3YW50cyB0byBkbyBhbnlvbmUncyBhYmlsaXR5IHRvIHRhbGsgdGhlIGJpZyBwaWN0dXJlIG91dCB0aGUgb3Bwb3NpdGUgb2YgYW55IGZhdm9ycy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Nic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZXJlIGlzIGFuIGFyZ3VtZW50IGFib3V0IG1heW9ubmFpc2UgSSBoYXZlIHdoZW5ldmVyIEkgY2FuLiBBbWVyaWNhbnMsIGFzIGEgbmF0aW9uYWwgcGFzdGltZSwgZW5qb3kgdGFraW5nIGNyZWRpdCBmb3IgdGhlIGNvbmNlcHQgYW5kIHRoZW4gbW9ub2xvZ3VpbmcgYWJvdXQgaG93IG11Y2ggdGhleSBoYXRlIGl0LiBUaGVyZSBpcyBhIGdlbmVyYWwgYXR0ZW1wdCB0byBlc3RhYmxpc2ggaXQgYXMgc3lub255bW91cyB3aXRoIHdoaXRlbmVzcyBpbiB0aGUgcmFjaWFsIHNlbnNlIGFzIG9wcG9zZWQgdG8gdGhlIHZpc3VhbCBvbmUuIEkgZG9uJ3Qga25vdyB3aG8gYmVuZWZpdHMgZnJvbSB0aGF0LCBidXQgaXQgbWFrZXMgdGhlIHByZWFtYmxlIHRvIEVuZ2xpc2gtbGFuZ3VhZ2UgcmVjaXBlcyBmb3IgSmFwYW5lc2UgcGFuY2FrZXMgZXhoYXVzdGluZy48L3A+XHJcbiAgICA8cD5JIGhhdmUgc3BlbnQgeWVhcnMgaXRlcmF0aW5nIG9uIHRoZSBhcmd1bWVudCB0aGlzIG1lYW5zIGhhdmluZywgd2hlbiBJIGNhbiBib3RoZXIuIE1heW9ubmFpc2UgaXMgY29tbW9uIHdoZXJlIEknbSBmcm9tLCBpbiB0aGUgZGVzZXJ0OiBtaXhlZCB3aXRoIG1pbGsgYXMgYSBmYXQgZm9yIGZyeWluZyBhbmQgYSB0b3BwaW5nIGZvciBzZWVtaW5nbHkgaGFsZiBvZiBhbGwgc2F2b3J5IGRpc2hlcyB5b3UgY2FuIHNoYWtlIGEgc3F1aXJ0IGJvdHRsZSBhdCBpdC48L3A+XHJcbiAgICA8cD5UaGF0J3MgZGlzZ3VzdGluZywgcGVvcGxlIHRlbGwgbWUgaW4gRW5nbGlzaCwgYW5kIHRoZXkgd291bGQgbGlrZSB0byBibGFtZSBhIHdoaXRlIHBlcnNvbiBmb3IgaXQuPC9wPlxyXG4gICAgPHA+TWF5b25uYWlzZSBpcyBhIHNoZWxmLXN0YWJsZSBlbXVsc2lvbiBvZiBlZ2dzIGFuZCBvaWwsIEkgdGVsbCB0aGVtLiBXaG8gb24gRWFydGggaGFzIHRoZSByZWZyaWdlcmF0ZWQgdHJ1Y2tzIHRvIHdhc3RlIG9uIHRoZSBhbHRlcm5hdGl2ZS4gSXMgdGhhdCByZWFsbHkgdGhlaXIgcHJlZmVycmVkIHJlc291cmNlIGFsbG9jYXRpb24uIElzIHRoYXQgc29tZXRoaW5nIHRoZXkgY29uc2lkZXIgd29ydGh3aGlsZSBmb3IgYSBwaWVjZSBvZiBzeW1ib2xpc20gdGhleSBtYWRlIHVwLjwvcD5cclxuICAgIDxwPlRoaXMgZG9lcyBub3QgYWN0dWFsbHkgZW5kIGFyZ3VtZW50czsgZm9yIG9uZSB0aGluZywgaXQgcmVxdWlyZXMgYW4gdW5kZXJzdGFuZGluZyBvZiBob3cgaGFyZCBhIHJlZnJpZ2VyYXRlZCB0cnVjayBoYXMgdG8gd29yayBmb3IgKHNheSkgYSB0aG91c2FuZCBtaWxlcyBvZiBkZXNlcnQgZHVlIHNvdXRoIG9uIHRoZSBIaWdod2F5IE9uZSBhcyBJIGtub3cgaXQuIEZvciBhbm90aGVyLCBpdCByZXF1aXJlcyBhbiB1bmRlcmx5aW5nIHVuZGVyc3RhbmRpbmcgb2YgcmVmcmlnZXJhdGlvbiwgYW5kIHRydWNrcywgYW5kIHJlZnJpZ2VyYXRlZCB0cnVja3MsIGFzIGxpbWl0ZWQgcmVzb3VyY2VzIHRvIGJlZ2luIHdpdGguIDwvcD5cclxuICAgIDxwPkJ1dCBpdCBkb2VzIHNvbWV0aW1lcyBtYWtlIGl0IG1vcmUgdG9sZXJhYmxlIHRvIGxpdmUgd2l0aC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Nyc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgYW0gbm8gb2xkZXIgdGhhbiBlbGV2ZW4geWVhcnMgb2xkLCBhbmQgSSBhbSBhdHRlbXB0aW5nLCBhcyBJIG9mdGVuIGRvLCB0byBpZ25vcmUgbXkgbW90aGVyLiBUaGVyZSBpcyBhIGN1dHRpbmcgcXVhbGl0eSB0byBoZXIgdm9pY2UsIGFuZCBteSBicmFpbiBpcyB0dW5lZCB0byBpdCBtZWFuaW5nIGRhbmdlcjsgc28sIGFzIEkgYWxzbyBvZnRlbiBkbywgSSBhbSBmYWlsaW5nLiBJIHdvdWxkIGJlIGRvaW5nIGJldHRlciwgYnV0IEkgYW0gd2FpdGluZyBmb3IgaGVyIGluIHRoZSBjYXIgKHRydWNrOyBpdCB3aWxsIHRha2UgYXQgbGVhc3QgYSBkZWNhZGUgZm9yIG1lIHRvIHVuZGVyc3RhbmQgdGhhdCB0cnVja3MgYXJlIHN1cHBvc2VkbHkgbm90IGNhcnMpLCBhbmQgSSBoYXZlIHJ1biBvdXQgb2YgYm9va3MgdG8gZG8gaXQgd2l0aC4gPC9wPlxyXG4gICAgPHA+KFRoZXJlIGFyZSBub3QgcmVsZXZhbnQgbW9iaWxlIGRldmljZXMgaW4gbXkgbGlmZSB5ZXQ7IHdoZW4gSSBsZWF2ZSB0aGUgaG91c2UsIEkgZG8gc28gd2l0aCBvbmUgb3IgbW9yZSBib29rcy4gQXMgbXkgZmF0aGVyIHB1dHMgaXQsIGJhZCB0aGluZ3MgaGFwcGVuIHdoZW4geW91IGxlYXZlIHRoZSBob3VzZSB3aXRob3V0IGEgYm9vay4gSWYgd2UncmUgZ29pbmcgdG8gYSBjaXR5LCBJIGRvIHNvIHdpdGggYSBzdGFjayBpbiB0aGUgZm9vdHdlbGwuIFNvbWV0aW1lcywgYXMgbm93LCBJIHN0aWxsIHVuZGVyZXN0aW1hdGUgd2hhdCBjb3VsZCBiZSBlbm91Z2guKTwvcD5cclxuICAgIDxwPk15IG1vdGhlciBpcyBidXlpbmcgYWxmYWxmYSBmb3IgaG9yc2VzLCBwdWxsZWQgb3ZlciBieSB0aGUgc2lkZSBvZiB0aGUgcm9hZCB3aGVyZSBzaGUncyBtZXQgYSBtYW4gd2l0aCBhbiBlaWdodGVlbi13aGVlbGVyIHN0YWNrZWQgd2l0aCBpdC4gSSB3aWxsIHJlYWxpemUsIG11Y2ggbGF0ZXIsIHRoYXQgdGhpcyB3YXMgcHJvYmFibHkgc29tZSBsZXZlbCBvZiBjYXNoIHVuZGVyIHRoZSB0YWJsZTsgaXQgd2lsbCBub3Qgb2NjdXIgdG8gbWUgdW50aWwgYWR1bHRob29kIHRoYXQgdGhlIHRydWNrZXJzIGJyb3VnaHQgdGhlIHJlc3Qgb2YgdGhlIGJhbGVzIHRvIHN0b3Jlcywgd2hlcmUgcHJlc3VtYWJseSBwZW9wbGUgd291bGQgcGF5IGZvciB0aGVtLiBNeSBjb250ZXh0IGlzIGp1c3QgdGhpczogdGhlIGR1c3R5IHNpZGUgb2YgYSByb2FkLCBhIHBpY2t1cCB0cnVjaywgYSBmbGF0YmVkIGZ1bGwgb2YgcmVjdGFuZ3VsYXIgcHJpc21zIHRoYXQsIG1vcmUgYW5kIG1vcmUgb2Z0ZW4sIGFyZSBub3QgdGhlIHJpZ2h0IHNoYWRlIG9mIGdyZWVuLjwvcD5cclxuICAgIDxwPlNoZSBkZW1hbmRzIGhlIGxldCBoZXIgYnJlYWsgb3BlbiBhIGJhbGUgZm9yIGluc3BlY3Rpb24sIGFuZCB0aGVuIGZpbmRzIHdoYXQgc2hlIGFudGljaXBhdGVkLiBUaGlzIGlzIGRyeSwgc2hlIHNheXMsIG9mIHRoZSBzdGlmZiB5ZWxsb3cgb3V0c2lkZTsgdGhpcyBpcyB3ZXQsIG9mIHRoZSBwbGlhYmxlIGdyZWVuIGluc2lkZSwgdG9vIHdhdGVyLWRhcmsuIFRoZXkgaGF2ZSBwaWNrZWQgYW5kIGJhbGVkIGl0IHRvbyBzb29uLiBJdCdzIGdvaW5nIHRvIHJvdC48L3A+XHJcbiAgICA8cD5UaGUgbWFuIHNheXMgaXQncyB3aGF0IGhlIGhhcywgd2hpY2ggaXMgb2J2aW91c2x5IHRydWUuIEl0J3MgYWJvdXQgdGhlIGZvcmVzaG9ydGVuaW5nIG9mIHRoZSBncm93aW5nIHNlYXNvbjsgZHJvdWdodCBhbmQgaGVhdCBhbmQgaHVycmljYW5lcyB0aGF0IGNvbWUgd2hlbiB0aGV5J3JlIG5vdCBzdXBwb3NlZCB0bywgd2hpY2ggaXMgdG8gc2F5IHRoZSBzYW1lIHRoaW5nIHRocmljZS4gVGhlIHN0ZW1zIGFuZCBsZWF2ZXMgYXJlIHBhY2tlZCBpbnRvIGJhbGVzIHRvbyBlYXJseSBvciB0b28gbGF0ZS4gU2hlJ3MgcmlnaHQgdGhhdCB0aGV5IG1vbGRlci4gSGUncyByaWdodCB0aGF0IGl0J3Mgbm90IGxpa2UgdGhlIGZhcm0gZ2F2ZSBoaW0gYW55dGhpbmcgZWxzZS4gSW4gYSBjb3VwbGUgbWludXRlcyB0aGV5J2xsIG1vdmUgb24gdG8gaGFnZ2xpbmcgYWJvdXQgc3Bpa2VzIGluIHByaWNlLjwvcD5cclxuICAgIDxwPkkga25vdyB0aGlzLiBJIHBpY2sgdXAgdGhlIGJvb2sgc2hlJ3MgYnJvdWdodCB3aXRoIGhlciBmcm9tIHRoZSBjZW50ZXIgY29uc29sZSwgdG8gc2VlIGlmIEkgY2FuIHR1bmUgdGhlIG9uZ29pbmcgbmVnb3RpYXRpb25zIGJldHRlciByZWFkaW5nIGl0LiBUaGUgY2hhbmdlIG9mIHNlYXNvbnMgaXMgdGVuIHllYXJzIG91dCBmcm9tIGNvbWluZyBOb3J0aCBlbm91Z2ggdG8gbWFrZSB0aGUgbmV3cywgdGhvdWdoIHRoZXkgaW5ldml0YWJseSBkby48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5OCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IHR3ZW50eS1maXZlIEkgcGljdHVyZSB0aGUgaGVhdCBkb21lIG92ZXIgS2luZyBDb3VudHkgbGl0ZXJhbGx5IGVub3VnaDogbGlrZSBhIGdyZWF0IGhhbmQgaGFzIHJlYWNoZWQgb3ZlciBhbmQgZGVsaWNhdGVseSBwbGFjZWQgYSBnbGFzcyBwb3QgbGlkIG92ZXIgdGhlIGxhbmQsIHdpdGggYWxsIHRoZSBjYXB0dXJlZCBzdGVhbSB0aGF0IGVudGFpbHMuIDwvcD5cclxuICAgIDxwPkl0IGhhcyBjb21lIHRvIG15IGF0dGVudGlvbiB0aGF0IG5vIG9uZSBoZXJlIGJ1aWx0IGNlaWxpbmcgZmFucyBpbnRvIHRoZWlyIGhvdXNlcy4gSSBkb3VibGUgdGhlIG51bWJlciBvZiBmYW5zIGluIG91ciBhcGFydG1lbnQsIG1hdHRlciBvZiBmYWN0OyB0aGVuIEkgdHJpcGxlIGl0LiBJIHJ1biBzbGlnaHRseSBidXQgY3J1Y2lhbGx5IGFoZWFkIG9mIHRoZSBzdWJzZXF1ZW50IHJ1biBvbiBmYW5zIGluIHN0b3Jlcywgd2hlbiBwZW9wbGUgdW5kZXJzdGFuZCB3aGF0J3MgZ29pbmcgb24gYXJvdW5kIHRoZW0uPC9wPlxyXG4gICAgPHA+TXkgcGFydG5lcidzIHBhcmVudHMnIGhvdXNlIGhhcyBhaXIgY29uZGl0aW9uaW5nLiBIaXMgbW90aGVyIHBvaW50cyBvdXQgdGhhdCB0aGlzIHB1dHMgdGhlbSBpbiBhIHRoaXJkIG9mIFNlYXR0bGUgYXJlYSByZXNpZGVuY2VzLiBIZSBhbmQgSSBhbmQgaGlzIHNpc3RlciB2aXNpdCwgaW4gc29tZSBkZXNwZXJhdGlvbjogdGhyZWUgaG91c2Vob2xkcyB0b3RhbCwgcHJvcG9ydGlvbmF0ZS4gVGhleSBkbyBub3QgaGF2ZSBmYW5zOyBJIGFtIGJhZmZsZWQuIFRoaXMgaXMgd2hlbiBJIG5vdGljZSB0aGF0IHRoZXkgZG9uJ3QgaGF2ZSBhIGNlaWxpbmcgZmFuLiBJIHRyeSB0byBiZSBtb3JlIG9ic2VydmFudCB0aGFuIHRoYXQsIGJ1dCBpdCBoYWRuJ3Qgb2NjdXJyZWQgdG8gbWUgdG8gc2VlIGEgY2VpbGluZyB3aXRob3V0IG9uZS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGtub3cgdGhlc2UgdGVtcGVyYXR1cmVzIHRoZSB3YXkgbXkgbG92ZWQgb25lcyBkbyBub3QsIGJ1dCBJIGRpZG4ndCBsaWtlIHRoZW0gYW55IGJldHRlciB3aGVuIEkgd2FzIHlvdW5nZXIuIEkgd2VhciBtb3JlIGxheWVycyBub3csIGJ5IG1lZGljYWwgbmVjZXNzaXR5LCBhbmQgYW0gbGVzcyBhY2NsaW1hdGVkLCB0cmFkaW5nIHRoZSBwbGFjaWQgcmVzaWduYXRpb24gdG8gc3VtbWVyIGNvbW11dGVzIGF0IDEyMEYgKHRoZSBjYXIgaGFkIGJyb2tlbiwgbXkgZmlyc3Qgc3VtbWVyIGluIHBlcmhhcHMtaGlnaCBzY2hvb2wsIGluIHN1Y2ggYSB3YXkgYXMgbWVhbnQgb25lIGhhZCB0byBydW4gdGhlIGhlYXRlciBpbiBvcmRlciB0byBpZGxlIGl0LCB3aGljaCBkaWRuJ3QgaGVscCkgZm9yIHRvbGVyYXRpbmcgc25vdy4gVGhlIHVwc2hvdCBpcyB0aGF0IEkgYW0gbW9yZSBmdW5jdGlvbmFsIGJ1dCBwb29ybHkgZnVuY3Rpb25pbmc7IEkgZG9uJ3QgcmVhbGl6ZSB1bnRpbCBsYXRlciB3aHkgSSdtIG5vdCBlYXRpbmcgb3Igc2xlZXBpbmcsIGFuZCB0aGVuIEkgcmVtZW1iZXIuPC9wPlxyXG4gICAgPHA+SSBhZGQgYWlyIGNvbmRpdGlvbmluZyB0byB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIG91ciBuZXh0IGFwYXJ0bWVudCwgbG9uZyBzaG90IHRoYXQgaXQgaXMuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkhlcmUsIGZvciB0aGUgc2Vjb25kIHRpbWU6IFR1ZXNkYXkuIDIwMjIuIEZlYnJ1YXJ5LiBJbmNyZWFzaW5nbHkgaGVhdnkgc25vdywgd2hpdGVyIHRoYW4gbXkgcGFydG5lcidzIGtudWNrbGVzIG9uIHRoZSBzdGVlcmluZyB3aGVlbC48L3A+XHJcbiAgICA8cD5cIkkgaGF0ZSB0aGlzLFwiIGhlIHNheXMsIG5vdCBmb3IgdGhlIGZpcnN0IHRpbWUuPC9wPlxyXG4gICAgPHA+XCJJdCdzIGJlYXV0aS0tSSdtIHNvcnJ5LFwiIEkgc2F5LCB0byBteSBwYXJ0bmVyLCB3aG8ncyB0aGUgb25lIHdobyBoYXMgdG8gZHJpdmUgdGhyb3VnaCBpdC4gQXMgdGhlIHRyZWVzIHdlIHBhc3MgYnkgYXJlIHJlbmRlcmVkIGludG8gYmxhY2sgYW5kIHdoaXRlIHN0cmFpZ2h0IGxpbmVzLCByZWFjaGluZyBvdXQgdG8gbWUuIFwiSSBzdGlsbCB0aGluayBpdCdzIGJlYXV0aWZ1bCwgSSdtIHNvcnJ5LlwiIDwvcD5cclxuICAgIDxwPlRoZSB1cmdlIHRvIGFwb2xvZ2l6ZSBpcyBiZWNhdXNlIGhlJ3Mgc3RyZXNzZWQuIEkga25vdyB0aGlzIG1ha2VzIGl0IGRpZmZpY3VsdCwgZXZlbiB3aXRob3V0IHRoZSBjb3VudGVyd2VpZ2h0IG9mIGEgc3dhdGhlIG9mIG91ciBmb3JtZXIgYXBhcnRtZW50LCB0byBkcml2ZS4gSSBzYXcgdGhlIGFkdmlzb3J5IGFib3V0IGJsYWNrIGljZSBmaXJzdCBiZXR3ZWVuIHRoZSB0d28gb2YgdXMuIEkga25vdyBmaXZlIHdpbnRlcnMgd29ydGggb2Ygd2hhdCBzbm93IGRvZXMgdG8gU2VhdHRsZSwgd2hlcmUgdGhlIHdpbnRlciB3ZWF0aGVyIGlzIG5vdCBzdXBwb3NlZCB0byBzbm93LiA8L3A+XHJcbiAgICA8cD5BbmQgYmVjYXVzZSBJIHRydXN0IGhpbSBlbm91Z2ggdG8gY29tbWVudCBvbiB0aGUgYmVhdXR5LCB0aGUgcG9pbnQgb2YgdmlldyB0aGF0IGJlaW5nIGEgcGVycGV0dWFsIHBhc3NlbmdlciBjYW4gYWZmb3JkIG1lLiBIZSBrbm93cyB3aGF0IGhlIGNob3NlIHRvIG1hcnJ5OyBJIGNhbiBhZmZvcmQgdG8gYmx1cnQgb3V0IG15IGZlZWxpbmdzIG9uIHByZWNpcGl0YXRpb24uIEkgdHJ5IHRvIG1lbW9yaXplIGl0LCBzbm93IG5lYXIgbWlkbmlnaHQgaW4gYSBtb3ZpbmcgY2FyLCBmb3IgbGF0ZXIuIEZvciB0aGlzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JJ20gbm90IHNvcnJ5IHRoYXQgaGUgY2FuJ3Qgc2hhcmUgaGlzIHdlYXRoZXIgYXMgaGUgbWVhbnMgaXQgdG8gYmUgd2l0aCBtZSwgbm90IHVubGVzcyBJIHRoaW5rIGFib3V0IGl0LiBObyBvbmUncyBiZWVuIGFibGUgdG8gZG8gdGhhdCwgYW55d2hlcmUgSSBnbywgaW4gbXkgZW50aXJlIGFkdWx0IGxpZmUuIEkgZG9uJ3Qga25vdyBob3cgb25lIHdvdWxkIHN0YXJ0LjwvcD5cclxuICAgIDxwPkJ1dCBJIGRvIGtub3csIHdoZW4gSSB0aGluayBhYm91dCBpdCwgdGhhdCB0aGF0J3MgYmVpbmcgc3RvbGVuIGZyb20gaGltIGJ5IGF0dHJpdGlvbjsgd2UgdGFsayBhYm91dCBmbG9vZCByaXNrIHdoZW4gd2UgdGFsayBhYm91dCBvdXIgbG9uZy10ZXJtIGZ1dHVyZSwgYWJvdXQgU2VhdHRsZSBhbmQgaXRzIHNlYSBsZXZlbCwgYWJvdXQgdGhlIGluZXZpdGFiaWxpdHkgb2YgbW92aW5nIGlubGFuZCB3aGVuIHdlIGxpdmUgbG9uZyBlbm91Z2ggdG8gZG8gc28uIChJIHRlbGwgaGltIEkndmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgdGhlIFR3aW4gQ2l0aWVzJyBhYmlsaXR5IHRvIG1haW50YWluIGEgZGVjZW50IHJhbXAuIFByZWNpcGl0YXRpb24ga2lsbHMgcGF2ZW1lbnQsIHRoZSB3YXkgd2F0ZXIgY2FuIGtpbGwgYW55dGhpbmcuKSBVbmRlcmdpcmRpbmcgaXQgYWxsOiB3ZSdyZSBub3QgZ2l2aW5nIHVwIG9uIGhpcyBob21lIGFuZCBmYW1pbHkgYW55IHRpbWUgc29vbiwgYnV0IHdpdGhpbiBvdXIgbGl2ZXMgd2UgZnVsbHkgZXhwZWN0IHRvIGRvIHNvLCBhcyBtYXR0ZXIgb2YgZmFjdCBhcyBnaXZpbmcgaGltIG15IG1lZGljYWwgcG93ZXIgb2YgYXR0b3JuZXkuPC9wPlxyXG4gICAgPHA+PGk+VGhpbmdzIGFyZSBqdXN0IGdvaW5nIHRvIGtlZXAgaGFwcGVuaW5nIHdoaWxlIHlvdSdyZSBub3QgaGVyZSw8L2k+IG15IGZhdGhlciBzYWlkLiBSYWluIGNyZWVwcyB1bmRlciByb2FkcyBhbmQgc2lkZXdhbGtzIGJhY2sgaG9tZSwgd2hlbiB0aGV5J3JlIHBhdmVkLCBhbmQgcHVsbHMgdGhlbSBpbnRvIGNyYXRlcnMuIFNlYXR0bGUgaGFyZGx5IGVzY2FwZXMgcG90aG9sZXMgaXRzZWxmLiBCdXQgeW91IHdvdWxkbid0IGtub3cgdGhhdCBmcm9tIHRoZSBtZWRpYSwgaWYgeW91ciB2YW50YWdlIHBvaW50IGlzIGEgdGhpcmQtd29ybGQgY291bnRyeS48L3A+XHJcbiAgICA8cD5JIG1lYW50LCB5ZWFyIG9uIHllYXIgb24geWVhciwgdG8gZ28gYmFjayB0byBNZXhpY28uIE5vdCBob21lOyBub3Qgb25jZSBJJ2QgZGlzY292ZXJlZCB0aGUgbHV4dXJpZXMgb2YgcHVibGljIHRyYW5zcG9ydGF0aW9uIHRoYXQgY291bGQgZmVycnkgbWUgd2l0aG91dCBmYXZvcnMgdG8gZG9jdG9ycyBJIHNlZSBmb3IgdGhlIHNhbWUgcmVhc29ucyBJIGNhbid0IGRyaXZlIGFuZCBmb3Igb3RoZXIgdGhpbmdzIGFsaWtlLiBCdXQgRC5GLiwgb3IgR3VhZGFsYWphcmEuIExpdHRsZSBsZXNzIGFsaWVuIHRoYW4gaGVyZSwgYnV0LS1pZiBJIGNvdWxkIGp1c3QgZmluaXNoIG15IGRlZ3JlZSwgc29tZWRheS0tbW9yZSBidXlpbmcgcG93ZXIuPC9wPlxyXG4gICAgPHA+QnV0IHRvIGdldCBvdXQgb2YgT2hpbyBJIGZvbGxvd2VkIG15IHBhcnRuZXIgaG9tZSwgYW5kIGhlIGhhcyBmYW1pbHkgaGVyZS4gV2hlcmUgdGhlcmUncyBydW5uaW5nIHdhdGVyIGFzIGEgbWF0dGVyIG9mIGNvdXJzZSwgYW5kIHlvdSBjYW4gZHJpbmsgaXQsIGlmIHlvdSB3YW50LCB3aGVuIHlvdSBuZWVkIHNvbWV0aGluZyB3aXRoIHdoaWNoIHRvIHN3YWxsb3cgbWVkaWNhdGlvbiB0aGF0IGNhbWUgaW4gdGhlIG1haWwuPC9wPlxyXG4gICAgPHA+QW5kIG5vdyBJIHB1dCBkb3duIHJvb3RzIGFzIHRoZWlyIHJlc2VtYmxhbmNlIHRvIGhpcyBtb2RlbCBvZiB0aGUgY2l0eSBoZSBicm91Z2h0IG1lIHRvIGVyb2Rlcy4gV2ludGVyIHNub3dzOyBzdW1tZXIgYnVybnMuIEkgZG9uJ3Qga25vdyBhbnkgZGlmZmVyZW50LCBhbmQgb25seSBiZWxhdGVkbHkgd29uZGVyIGlmIGhlJ3Mgd2FudGVkIG1lIHRvLiBIaXMgcGFyZW50cyBoYXZlIGEgbGF3bjsgdGhlIEdyZWF0ZXIgU2VhdHRsZSBvZiBoaXMgY2hpbGRob29kIGlzIGFwcHJveGltYXRlbHkgYXMgYWxpZW4gdG8gbWUsIGluIGJvdGggd2F5cywgYW5kIHVuYXZhaWxhYmxlIGFzIGEgYmFja2Ryb3AuIFdoYXQgSSd2ZSBsb3N0IGFsb25nIHRoZSBzYW1lIGxpbmVzIGlzIGFuIHVua25vd24uIEkgd2FudCB0byBzaG93IGhpbSBPY3RvYmVyLCB0aG91Z2ggSSBkb24ndCBrbm93IGhvdyBtdWNoIE9jdG9iZXIncyBsZWZ0IHRvIHNob3cuIEkgZG9uJ3QgZmVlbCBpdCwgdGhvdWdoLCBhYnNlbnQgdGhhdCBleHBlcmllbmNlIG9mIGFjdHVhbGx5IGtub3dpbmcgd2hhdCBoYXNuJ3Qgc3Vydml2ZWQgbXkgY2hpbGRob29kIGVpdGhlci48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmU0MigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm9ydHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSd2ZSBsaXZlZCBsb25nZXIgaW4gU2VhdHRsZSB0aGFuIGFueXdoZXJlIGVsc2UgaW4gdGhlIFVuaXRlZCBTdGF0ZXMsIGJ1dCBub3QgbG9uZyBlbm91Z2ggdG8gbG9zZSB0aGluZ3MgdG8gdGhlIHByZXNlbnQuIEkgZG9uJ3QgaGF2ZSBhbiBpZGVhIG9mIHBhdHRlcm5zIGFib3V0IGl0LCBzYXZlIGluIHRoZSBicm9hZGVzdCBvZiBzZW5zZXM7IHRoaXMgaXMgd2hhdCBJIGtub3cuIDwvcD5cclxuICAgIDxwPkkgY2hlY2sgdGhlIHdlYXRoZXIuIFBlb3BsZSBhc2sgaWYgaXQgdG9ybWVudHMgbWUsIGFzIHRoZSBQYWNpZmljIE5vcnRod2VzdCBpcyBleHBlY3RlZCB0byBkby4gTXkgZmF2b3JpdGUgd2VhdGhlciBpcyBmb2c6IHRoZSBjbG9zZXN0IHlvdSBnZXQgdG8gZG9tZXN0aWNhdGluZyB0aGUgZXllIG9mIGEgaHVycmljYW5lLjwvcD5cclxuICAgIDxwPkkgZG9uJ3QgdGVsbCB0aGVtIEknbSBmcm9tIGEgZGVzZXJ0LS1JIGRvbid0IGNhcmUgZm9yIHBzeWNob2FuYWx5c2lzLS1idXQgSSB0ZWxsIHRoZW0gSSBsaWtlIHByZWNpcGl0YXRpb24uPC9wPlxyXG4gICAgPHA+QWxsIG9mIGl0LiBBbHdheXMuIEV2ZW4gdGhlIHNub3cuPC9wPlxyXG4gICAgPHA+XCJJJ20gc29ycnksXCIgSSBzYXksIGZvciBsYWNrIG9mIGFueXRoaW5nIGVsc2UgdG8gZG8uPC9wPlxyXG4gICAgPHA+XCJJdCBpc24ndCA8aT55b3VyPC9pPiBmYXVsdCxcIiBoZSBzYXlzLiBcIkkganVzdCB3aXNoIGl0IGNvdWxkJ3ZlIHdhaXRlZC5cIiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4iLCAiY29uc3QgZmFjZXMgPSBbJ2FndWlsYScsICdzb2wnXVxyXG5cclxuY29uc3QgZmxpcCA9ICgoKSA9PiB7XHJcbiAgbGV0IHBpY2s7XHJcbiAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgcGljayA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgcGljayA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBmYWNlc1twaWNrXTtcclxuIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXJkZW4oKSB7XHJcbiBjb25zdCBnYXJkZW5NZSA9ICgpID0+IHtcclxuICAgaWYgKGZsaXAoKSA9PT0gJ2FndWlsYScpIHtcclxuICAgcmV0dXJuIDxDaGlHYXIxIC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgIHJldHVybiA8Q2hpR2FyMiAvPjtcclxuICB9XHJcbiB9XHJcblxyXG4gcmV0dXJuIChcclxuICA8PlxyXG4gICB7Z2FyZGVuTWUoKX1cclxuICA8Lz5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoaUdhcjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDEuanBlZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG4gXHJcbiBleHBvcnQgZnVuY3Rpb24gQ2hpR2FyMigpIHtcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdDaGFyZGVuMicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL2NoaV92ZXJfZ2FyZDIuanBlZycgYWx0PScnLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbn0iLCAiY29uc3QgY2FwX2hlcmUgPSAnU2NyZWVuc2hvdCBvZiBhIHNlY3Rpb24gb2YgYSBzYXRlbGl0ZSBtYXAgb2YgdGhlIGdsb2JlLiBGaW5kIHRoZSBlbmQgb2YgdGhlIEFtZXJpY2FuIENhbGlmb3JuaWE7IGhlcmUsIFNhbiBEaWVnby4gR28gYXMgc3RyYWlnaHQgb2Ygc291dGggYXMgeW91IGNhbiBnZXQgZm9yIGEgdGhvdXNhbmQgbWlsZXMgb24gdGhlIG9ubHkgaGlnaHdheSwgdW50aWwgeW91IGhpdCB0aGUgcG9pbnQgd2hlcmUgdGhlIFRyb3BpYyBvZiBDYW5jZXIgbWVldHMgdGhlIFBhY2lmaWMgY29hc3RsaW5lLiBUaGlzIGlzIFRvZG9zIFNhbnRvcy4gWW91IGFyZSBoZXJlLidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kaWxlKCkge1xyXG4gY29uc3Qgb2RpbGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICBpZiAocGljayA9PT0gMCkgeyByZXR1cm4gKCA8T2RpbGUxIC8+ICl9IFxyXG4gIGVsc2UgaWYgKHBpY2sgPT09IDEpIHsgcmV0dXJuICggPE9kaWxlMiAvPiApfSBcclxuICBlbHNlIGlmIChwaWNrID09PSAyKSB7IHJldHVybiAoIDxPZGlsZTMgLz4gKX1cclxuICBlbHNlIGlmIChwaWNrID09PSAzKSB7IHJldHVybiAoIDxPZGlsZTQgLz4gKX1cclxuICBlbHNlIGlmIChwaWNrID09PSA0KSB7IHJldHVybiAoIDxPZGlsZTUgLz4gKX1cclxuICBlbHNlIHsgcmV0dXJuICggPE9kaWxlNiAvPiApfVxyXG4gfVxyXG5cclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nT2RpbGUnPlxyXG4gICB7b2RpbGUoKX1cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9kaWxlMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0wMS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gT2RpbGUyKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGUyJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTAyLmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTMoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTEnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMDMuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlNCgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlNCcgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0wNC5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gT2RpbGU1KCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGU1JyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTE1LmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTYoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTYnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMTcuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGFyaWEtbGFiZWxsZWRieT0nY3JlZGl0X29kZScgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdF9vZGUnIGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPlxyXG4gICAgVXJheW9cdTAwRTFuIE5vZWwsPGJyLz48Y2l0ZT5cIk5vIExvbmdlciBPZGVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaW5TdW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nV2luU3VtJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfc2Vhc29uJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2JsdWVibGFja19xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgYWx0PScnLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlJz5cclxuICAgIDxwPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3NpdCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwb2VtLCBpbnZpZ29yYXRlZDwvcD5cclxuICAgIDxwPndpdGggaW5reSBhd2t3YXJkIGJsYW5rbmVzcy48L3A+XHJcbiAgICA8cD5UaGUgYm90dG9tIHRlZXRoIG9mIHN1bW1lcjwvcD5cclxuICAgIDxwPmluIHdpbnRlciBjaGF0dGVyaW5nOiBoZXJlXHUyMDE5cyB0aGUgbW9vbi48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9zZWFzb24nPk5vYWggRWxpIEdvcmRvbiw8YnIvPjxjaXRlPlwiU3VtbWVyIGluIFdpbnRlciBpbiBTdW1tZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZmluZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdkZWZpbmUnIGNsYXNzTmFtZT0nY2l0ZScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX3doeXRlJz5cclxuICAgPGltZyBzcmM9Jy9wb2xhcm9pZF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgYWx0PScnLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Q29uc2lkZXIgY2xpbWF0ZSBjaGFuZ2UgYXMgYWJvdXQgPGI+dGhlIHRpbWluZyBvZiByZWxhdGlvbnNoaXBzPC9iPiB3ZSBoYXZlIHdpdGggYWxsIHRoYXQncyBhcm91bmQgdXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF93aHl0ZSc+XHJcbiAgICBLeWxlIFdoeXRlLDxici8+PGNpdGU+XCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiXHJcblxyXG5jb25zdCBjYXBfb2ggPSAnXCJXYXJtaW5nIHN0cmlwZXNcIiB2aXN1YWxpemF0aW9uIGZvciB0aGUgc3RhdGUgb2YgT2hpbywgc2hvd2luZyBhbiBvdmVyYWxsIGluY3JlYXNlIGluIHdhcm0geWVhcnMgYW5kIHRoZSBuZWFyLXZhbmlzaG1lbnQgb2YgY29sZCBvbmVzLCBmcm9tIDE4OTUgdG8gMjAyMS4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2hpbygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nT2hpbycgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfb2gnPjxpbWcgc3JjPScvc3RyaXBlc19vaC5wbmcnIGFsdD0nJyAvPlxyXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdzZWNyZXQnIGFyaWEtaGlkZGVuPSd0cnVlJz4gIFxyXG4gICAgPGRpdiBpZD0nY2FwX29oJyBjbGFzc05hbWU9J0FSSUFjYXAnIGFyaWEtaGlkZGVuPSd0cnVlJz57Y2FwX29ofTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgIi8vZnVuY3Rpb24gdmlzaWJsZUNhcChlKSB7XHJcbiAvL2UudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbi8vfVxyXG4vL011bHRpcGxlIGF0dGVtcHRzIGJlaW5nIG1hZGUgdG8gZ2V0IHRoZSBjYXB0aW9uIGNvbmRpdGlvbmFsIGRpc3BsYXkgdG8gd29yayBhcyBpbnRlbmRlZCBcclxuXHJcblxyXG5jb25zdCBjYXBfd2EgPSAnXCJXYXJtaW5nIHN0cmlwZXNcIiB2aXN1YWxpemF0aW9uIGZvciB0aGUgc3RhdGUgb2YgV2FzaGluZ3Rvbiwgc2hvd2luZyBhbiBvdmVyYWxsIGluY3JlYXNlIGluIHdhcm0geWVhcnMgYW5kIHRoZSBuZWFyLXZhbmlzaG1lbnQgb2YgY29sZCBvbmVzLCBmcm9tIDE4OTUgdG8gMjAyMS4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfd2EnPjxpbWcgc3JjPScvc3RyaXBlc193YS5wbmcnIGFsdD0nJyAvPlxyXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdzZWNyZXQnIGFyaWEtaGlkZGVuPSd0cnVlJz4gIFxyXG4gICAgPGRpdiBpZD0nY2FwX3dhJyBjbGFzc05hbWU9J0FSSUFjYXAnIGFyaWEtaGlkZGVuPSd0cnVlJz57Y2FwX3dhfTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4vL05vdCB1c2luZyByaWdodCBub3c6IFxyXG4vLyBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJ3Vuc2VlJyk7XHJcbi8vb25Gb2N1cz17KCkgPT4ge1xyXG4gIC8vICAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKCdzaG93Q2FwJylcclxuICAvLyAgfX1cclxuICAvLyAgb25CbHVyPXsoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJycpXHJcbiAgLy8gIH19XHJcbiAgLy8gICAgeyB1c2VTdGF0ZSgnc2hvd0NhcCcpIHx8IDxkaXY+e2NhcF93YX08L2Rpdj4gfSIsICIvL2Z1bmN0aW9uIHZpc2libGVDYXAoZSkge1xyXG4gLy9lLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4vL31cclxuLy9NdWx0aXBsZSBhdHRlbXB0cyBiZWluZyBtYWRlIHRvIGdldCB0aGUgY2FwdGlvbiBjb25kaXRpb25hbCBkaXNwbGF5IHRvIHdvcmsgYXMgaW50ZW5kZWQgXHJcblxyXG5cclxuY29uc3QgY2FwX3dhID0gJ1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIFdhc2hpbmd0b24sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcywgZnJvbSAxODk1IHRvIDIwMjEuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhc2hpbmd0b24oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J1dhc2hpbmd0b24nIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX3dhJz48aW1nIHNyYz0nL3N0cmlwZXNfd2EucG5nJyBhbHQ9JycgLz5cclxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nc2VjcmV0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICBcclxuICAgIDxkaXYgaWQ9J2NhcF93YScgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF93YX08L2Rpdj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuLy9Ob3QgdXNpbmcgcmlnaHQgbm93OiBcclxuLy8gY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKCd1bnNlZScpO1xyXG4vL29uRm9jdXM9eygpID0+IHtcclxuICAvLyAgIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZSgnc2hvd0NhcCcpXHJcbiAgLy8gIH19XHJcbiAgLy8gIG9uQmx1cj17KCkgPT4ge1xyXG4gIC8vICAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIC8vICB9fVxyXG4gIC8vICAgIHsgdXNlU3RhdGUoJ3Nob3dDYXAnKSB8fCA8ZGl2PntjYXBfd2F9PC9kaXY+IH0iLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdoYW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2tpY2tlcic+XHJcbiAgIDxkaXYgaWQ9J2tpbWcnPjxpbWcgc3JjPScvY2xpbWF0ZV9zdHJpcGVzX214LnBuZycgYWx0PSdUaGUgbGFiZWxlZCBcIndhcm1pbmcgc3RyaXBlc1wiIGNoYXJ0IGZvciBNZXhpY28uIFRoZSBzdHJpcGVzIGFyZSB0aGUgc2FtZSBvbmVzIHRoYXQgaGF2ZSBmb3JtZWQgdGhlIFwidGFwZXN0cnlcIiBiYWNrZ3JvdW5kIG9mIHRoZSBlc3NheSBhbGwgYWxvbmcuJyBjbGFzc05hbWU9J3NsaWRlLWluLWJsdXJyZWQtYm90dG9tJyAvPjwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIClcclxufSIsICJjb25zdCBjYXBfaGVyZSA9ICdTY3JlZW5zaG90IG9mIGEgc2VjdGlvbiBvZiBhIHNhdGVsaXRlIG1hcCBvZiB0aGUgZ2xvYmUuIEZpbmQgdGhlIGVuZCBvZiB0aGUgQW1lcmljYW4gQ2FsaWZvcm5pYTsgaGVyZSwgU2FuIERpZWdvLiBHbyBhcyBzdHJhaWdodCBvZiBzb3V0aCBhcyB5b3UgY2FuIGdldCBmb3IgYSB0aG91c2FuZCBtaWxlcyBvbiB0aGUgb25seSBoaWdod2F5LCB1bnRpbCB5b3UgaGl0IHRoZSBwb2ludCB3aGVyZSB0aGUgVHJvcGljIG9mIENhbmNlciBtZWV0cyB0aGUgUGFjaWZpYyBjb2FzdGxpbmUuIFRoaXMgaXMgVG9kb3MgU2FudG9zLiBZb3UgYXJlIGhlcmUuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RpbGUoKSB7XHJcbiBjb25zdCBvZGlsZSA9ICgpID0+IHtcclxuICB2YXIgcGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gIGlmIChwaWNrID09PSAwKSB7IHJldHVybiAoIDxPZGlsZTEgLz4gKX0gXHJcbiAgZWxzZSBpZiAocGljayA9PT0gMSkgeyByZXR1cm4gKCA8T2RpbGUyIC8+ICl9IFxyXG4gIGVsc2UgaWYgKHBpY2sgPT09IDIpIHsgcmV0dXJuICggPE9kaWxlMyAvPiApfVxyXG4gIGVsc2UgaWYgKHBpY2sgPT09IDMpIHsgcmV0dXJuICggPE9kaWxlNCAvPiApfVxyXG4gIGVsc2UgaWYgKHBpY2sgPT09IDQpIHsgcmV0dXJuICggPE9kaWxlNSAvPiApfVxyXG4gIGVsc2UgeyByZXR1cm4gKCA8T2RpbGU2IC8+ICl9XHJcbiB9XHJcblxyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdPZGlsZSc+XHJcbiAgIHtvZGlsZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2RpbGUxKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGUxJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTAxLmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTIoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTInIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMDIuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlMygpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0wMy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gT2RpbGU0KCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGU0JyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTA0LmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTUoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTUnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMTUuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlNigpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlNicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0xNy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PklJSTwvaDU+XHJcbiAgIFRoZSBnbGFjaWVyIGFic29yYmVkIGdyZWVuaG91c2UgZ2FzZXMuIDxici8+XHJcbiAgIFdlIGFyZSBhIGxhcmdlIHBhcnQgb2YgdGhlIGJpb3NwaGVyZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQigpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVicgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZ19zbS5wbmcnIGlkPSdibHVlcScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlY8L2g1PlxyXG4gICBXZSBkbyBub3Qga25vdyB3aGljaCB0byBmZWFyIG1vcmUsPGJyLz5cclxuICAgVGhlIHRlcnJvciBvZiBjaGFuZ2U8YnIvPlxyXG4gICBPciB0aGUgdGVycm9yIG9mIHVuY2VydGFpbnR5LCA8YnIvPlxyXG4gICBUaGUgZ2xhY2llciBjYWx2aW5nPGJyLz5cclxuICAgT3IganVzdCBhZnRlci48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWSUlJJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlZJSUk8L2g1PlxyXG4gICBJIGtub3cga2luZyB0aWRlcywgPGJyLz5cclxuICAgQW5kIGx1cmlkLCBpbmVzY2FwYWJsZSBzdG9ybXM7IDxici8+XHJcbiAgIEJ1dCBJIGtub3csIHRvbywgPGJyLz5cclxuICAgVGhhdCB0aGUgZ2xhY2llciBpcyBpbnZvbHZlZCA8YnIvPlxyXG4gICBJbiB3aGF0IEkga25vdy48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuLy9VbnVzZWQgZm9yIG5vdywgYnV0IGZ1biB0byBoYXZlXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRTYXkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nTGV0U2F5JyBjbGFzc05hbWU9J3BvZW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9sZXRzYXknPlxyXG4gICA8aW1nIHNyYz0nL3JlZF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9sZXRzYXknPlxyXG4gICAgSmFuZSBIaXJzaGZpZWxkLDxici8+PGNpdGU+XCJMZXQgVGhlbSBOb3QgU2F5XCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2luU3VtKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J1dpblN1bScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX3NlYXNvbicgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlYmxhY2tfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSc+XHJcbiAgICA8cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtzaXQgaW4gdGhlIGNlbnRlciBvZiB0aGUgcG9lbSwgaW52aWdvcmF0ZWQ8L3A+XHJcbiAgICA8cD53aXRoIGlua3kgYXdrd2FyZCBibGFua25lc3MuPC9wPlxyXG4gICAgPHA+VGhlIGJvdHRvbSB0ZWV0aCBvZiBzdW1tZXI8L3A+XHJcbiAgICA8cD5pbiB3aW50ZXIgY2hhdHRlcmluZzogaGVyZVx1MjAxOXMgdGhlIG1vb24uPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCcgaWQ9J2NyZWRfc2Vhc29uJz5Ob2FoIEVsaSBHb3Jkb24sPGJyLz48Y2l0ZT5cIlN1bW1lciBpbiBXaW50ZXIgaW4gU3VtbWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZpbmUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnIGFyaWEtbGFiZWxsZWRieT0nY3JlZF93aHl0ZSc+XHJcbiAgIDxpbWcgc3JjPScvcG9sYXJvaWRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfd2h5dGUnPlxyXG4gICAgS3lsZSBXaHl0ZSw8YnIvPjxjaXRlPlwiQnJhaWRpbmcgS2luc2hpcCBhbmQgVGltZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgIlxyXG5cclxuY29uc3QgY2FwX29oID0gJ1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIE9oaW8sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcywgZnJvbSAxODk1IHRvIDIwMjEuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9oaW8oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J09oaW8nIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX29oJz48aW1nIHNyYz0nL3N0cmlwZXNfb2gucG5nJyBhbHQ9JycgLz5cclxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nc2VjcmV0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICBcclxuICAgIDxkaXYgaWQ9J2NhcF9vaCcgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF9vaH08L2Rpdj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJjb25zdCBmYWNlcyA9IFsnYWd1aWxhJywgJ3NvbCddXHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuICBsZXQgcGljaztcclxuICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICBwaWNrID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICBwaWNrID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGZhY2VzW3BpY2tdO1xyXG4gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhcmRlbigpIHtcclxuIGNvbnN0IGdhcmRlbk1lID0gKCkgPT4ge1xyXG4gICBpZiAoZmxpcCgpID09PSAnYWd1aWxhJykge1xyXG4gICByZXR1cm4gPENoaUdhcjEgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgcmV0dXJuIDxDaGlHYXIyIC8+O1xyXG4gIH1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIHtnYXJkZW5NZSgpfVxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hpR2FyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4xJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMS5qcGVnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBmdW5jdGlvbiBDaGlHYXIyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4yJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyBhbHQ9JycvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGFyaWEtbGFiZWxsZWRieT0nY3JlZGl0X29kZScgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdF9vZGUnIGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPlxyXG4gICAgVXJheW9cdTAwRTFuIE5vZWwsPGJyLz48Y2l0ZT5cIk5vIExvbmdlciBPZGVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJjb25zdCBjYXBfaGVyZSA9ICdTY3JlZW5zaG90IG9mIGEgc2VjdGlvbiBvZiBhIHNhdGVsaXRlIG1hcCBvZiB0aGUgZ2xvYmUuIEZpbmQgdGhlIGVuZCBvZiB0aGUgQW1lcmljYW4gQ2FsaWZvcm5pYTsgaGVyZSwgU2FuIERpZWdvLiBHbyBhcyBzdHJhaWdodCBvZiBzb3V0aCBhcyB5b3UgY2FuIGdldCBmb3IgYSB0aG91c2FuZCBtaWxlcyBvbiB0aGUgb25seSBoaWdod2F5LCB1bnRpbCB5b3UgaGl0IHRoZSBwb2ludCB3aGVyZSB0aGUgVHJvcGljIG9mIENhbmNlciBtZWV0cyB0aGUgUGFjaWZpYyBjb2FzdGxpbmUuIFRoaXMgaXMgVG9kb3MgU2FudG9zLiBZb3UgYXJlIGhlcmUuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcmUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J0hlcmUnIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX2hlcmUnPjxpbWcgc3JjPScveW91X2FyZV9oZXJlLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfaGVyZScgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF9oZXJlfTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lMDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J29uZSc+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gIDxwPkl0IGlzIDIwMjIuIEl0IGlzIHRoZSAyMm5kLiBJdCBpcyBGZWJydWFyeS48L3A+XHJcbiAgPHA+SSBhbSBiZWdpbm5pbmcgdGhpcyBlc3NheS4gSSBhbSB0d2VudHktc2l4IHllYXJzIG9sZC4gSSBhbSBtb3ZpbmcsIG5vdCBmb3IgdGhlIGZpcnN0IHRpbWUsIHRvIFNlYXR0bGUuPC9wPlxyXG4gIDxwPkl0IGlzIHNub3dpbmcuPC9wPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIlxyXG5pbXBvcnQgSGVyZSBmcm9tIFwiLi9oZXJlXCJcclxuaW1wb3J0IHsgR2xhY2llckEgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQigpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMDIgLz5cclxuICAgPEhlcmUgLz5cclxuICAgPFNjZW5lMDMgLz5cclxuICAgPFNjZW5lMDQgLz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTAyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d28nPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+QSBtZW1vcnkgdG9vIHNtYWxsIGZvciBtZSB0byBoYXZlIGEgcGxhY2UgZm9yIGl0IGluIHRpbWU6IEkgYW0gYmFyZWx5IG9sZCBlbm91Z2ggdG8gcmVtZW1iZXIsIGFuZCBteSBwYXJlbnRzIGFyZSBtYXJyaWVkLCBhbmQgdGhleSBhcmUgZGlzY292ZXJpbmcgdGhhdCB0aGUgZGluaW5nIHJvb20gZmxvb3IgaXMgdW5ldmVuLCBhcyBpdCBoYXBwZW5zLCBhcyB0aGUgd2F0ZXIgcG91cmluZyBpbiB0aHJvdWdoIHRoZSBjbG9zZWQgd2luZG93cyBmb3JtcyBhIHRyaWFuZ3VsYXIgcHVkZGxlIHdoZXJlIHRoZSBleHRlcmlvciB3YWxscyBtZWV0LjwvcD5cclxuICAgPHA+QW5kIEkgYW0gaGVyZTogc2l0dGluZyBpbiB0aGUgcG9vbCBvZiByYWlud2F0ZXIgd2l0aCBlbm91Z2ggcm9vbSB0byBzbGFwIG15IGhhbmRzIHJoeXRobWljYWxseSBvbiBtb3JlIG9mIGl0IGJlc2lkZSBtZSwgYXdhcmUgb2YgYW5kIGlnbm9yaW5nIHRoZWlyIG1vdW50aW5nIGJ1dCBnZW5lcmFsaXplZCBkaXNhcHByb3ZhbC4gSWYgaXQgaGFzIG9jY3VycmVkIHRvIG1lIHRoYXQgdGhpcyBpcyBub3Qgd2hhdCB0aGV5IHdhbnRlZCBmcm9tIHRoZWlyIHJlY2VudGx5LWZpbmlzaGVkIGZsb29yLCB0aGUgdGhvdWdodCBjb21lcyB3aXRoIG92ZXJhbGwgaW5kaWZmZXJlbmNlOyB0aGF0IHRoZXkgaGFkIGl0IHBvdXJlZCBhbmQgc2FuZGVkLCBieSBodW1hbiBoYW5kcywgc28gSSdtIG5vdCBzdXJlIHdoYXQgdGhleSBleHBlY3RlZC48L3A+XHJcbiAgIDxwPihDb25zdHJ1Y3Rpb24gb2YgdGhlIGhvdXNlIEkgd2lsbCBncm93IHVwIGluIGhhcyBiZWVuIG9uZ29pbmcsIHdpbGwgYmUgbXVjaCBsb25nZXIsIGludG8gbWVtb3JpZXMgd2l0aCBlbm91Z2ggZGVmaW5pdGlvbiB0byBwdWxsIHRoZWlyIG93biB3ZWlnaHQgaW4gdGltZS4gSSBkbyBub3Qga25vdyB3aGF0IGEgbGV2ZWwgaXMuKTwvcD5cclxuICAgPHA+SSBoYXZlbid0IGdvdHRlbiB0aXJlZCBvZiBpdCB5ZXQuIEFzIEkgc2xhcCB0aGUgcHVkZGxlLCBJIGFtIHNob3V0aW5nOiBcIlN3aW1taW5nIHBvb2whIFN3aW1taW5nIHBvb2whXCI8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhyZWUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+SGVyZSBhcmUgdHdvIHRoaW5ncyBJIGtub3cgYWJvdXQgcG93ZXIsIHZlcnkgZWFybHkgaW4gbXkgbGlmZTo8L3A+XHJcbiAgIDxwPlRoZSBtb3N0IHBoeXNpY2FsbHkgcG93ZXJmdWwgdGhpbmcgaW4gdGhlIHdvcmxkIGlzIHdhdGVyLiBXYXRlciB3cml0ZXMgdGhlIHNoYXBlIG9mIGxhbmQgYW5kIGNhbiBkZW1vbGlzaCBhbnl0aGluZyB3aXRoIHRpbWUuIFdhdGVyIGluIHRoZSBhaXIgaXMgd2h5IGV2ZXJ5IGluYW5pbWF0ZSBvYmplY3QgYXJvdW5kIG1lIGRpZXMgZmFzdGVyIHRoYW4gaXQgc2FpZCBpdCA8YSBocmVmPSdodHRwczovL3d3dy5wYXRyZW9uLmNvbS9wb3N0cy9jdy1kYXRhLWxvc3MtNDkyMTAyOTUnPndvdWxkPC9hPjsgbGlrZSBvcHRpY2FsIG1lZGlhIHlvdSB0aG91Z2h0IGJhY2tlZCB1cCBzb21ldGhpbmcgeW91IGNhcmUgYWJvdXQsIG9yIGVsYXN0aWMuIFdhdGVyIGJvd2xzIHlvdSBvdmVyIHdoZW4geW91IGNvbWUgbmVhciBpdCBhbmQgZ2V0IGNvY2t5IGVub3VnaCB0byB0dXJuIHlvdXIgYmFjay4gV2F0ZXIgc2V0cyB0aGUgbGl2aW5nIGxpbWl0cyBvZiB3aGF0IGlzIHBvc3NpYmxlOiBsaWtlIHdoZW4gdGhlIHN1cHBseSB0dXJucyBvZmYsIGFuZCB0aGUgdGluYWNvIHRoYXQgdGhlcmUncyBub3QgYSBvbmUtd29yZCBFbmdsaXNoIHRlcm0gZm9yIGlzIHJlc2VydmVkIGZvciBwYXlpbmcgdG91cmlzdHMgaW4gdGhlIGJhY2sgeWFyZCB0byBjdXNoaW9uIHRoZW0gZnJvbSBzY2FyY2l0eSwgYW5kIEkgYmF0aGUgb3V0IG9mIGEgYnVja2V0IGluIHRoZSBzaG93ZXIuPC9wPlxyXG4gICA8cD4oSXQgc3RhZ2dlcnMgbWUsIHRoZSB3YXkgdGhlIE5vcnRoIHVzZXMgd29vZDogbGlrZSB0aGVyZSdzIGVub3VnaCBvZiBpdCB0byBnbyBhcm91bmQsIGluc3RlYWQgb2YgY29uY3JldGUuIEkgZG8gbm90IG1ha2UgdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aW1iZXIsIHdoaWNoIGF3ZXMgbWUgYXMgYSBzaG93IG9mIHdlYWx0aCwgYW5kIGZvcmVzdHMsIHdoaWNoIHVubmVydmUgbWU7IGl0IGRvZXNuJ3QgY29ubmVjdCB0aGF0IGFueXRoaW5nIEkgc2VlIGNvdWxkIGJlIHN1ZmZpY2llbnQgZm9yIHBlb3BsZSB0byBjbGFpbSBpdCBpcyBlbm91Z2guKTwvcD5cclxuICAgPHA+VGhlIGJlc3Qgd2F5IGZvciBhIHBlcnNvbiB0byBhY3F1aXJlIHBvd2VyIGlzIHRvIGJlIGluZGlzcGVuc2FibGUuIE15IGJvZHktLUkgZG8gbm90IHlldCBoYXZlIHRoZSBsYW5ndWFnZSBmb3IgdGhpczsgSSBhbHdheXMga25vdy0tbXkgYm9keSBkb2VzIG5vdCBkbyB0aGUgdGhpbmdzIHRoYXQgb3RoZXIgcGVvcGxlIHdhbnQgaXQgdG8gZG8uIFBlb3BsZSBkb24ndCB3YW50IG1lLCBpZiB0aGV5IGNhbiBhZmZvcmQgdG8uIDwvcD5cclxuICAgPHA+QnV0IEkgYW0gYWxzbyBhIGR1YWwgY2l0aXplbiwgYSB0ZXJtIHdoaWNoIG9mdGVuIG1lYW5zIHRoYXQgbm8gb25lIHdobyBhc2tzIGZvciBwYXBlcndvcmsgb3RoZXIgdGhhbiBhIHBhc3Nwb3J0IGlzIGdvaW5nIHRvIGdldCBzb21ldGhpbmcgdGhleSBsaWtlLiBJIHdpbGwgaGF2ZSB0byBiZSBpbmRpc3BlbnNhYmxlLjwvcD5cclxuICAgPHA+SSByZXNvbHZlIHRvIGdvIHRvIGNvbGxlZ2UgaW4gdGhlIFVuaXRlZCBTdGF0ZXMuIEkgd2lsbCBnZXQgYSBkaXBsb21hIGluIEVuZ2xpc2ggcHJpbnQgYW5kIHRoZW4gbm8gb25lIHdpbGwgYmUgYWJsZSB0byBhZmZvcmQgdG8gZGlzbGlrZSBtZSBlbm91Z2ggZm9yIHRoZW0gdG8gdGVsbCBtZSBuby48L3A+XHJcbiAgIDxwPihJIGFtLCBhcHByb3hpbWF0ZWx5LCBzaXggeWVhcnMgb2xkLik8L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm91cic+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICA8cD5UaHJlZSB3ZWVrcyBhZnRlciBteSBlaWdodGVlbnRoIGJpcnRoZGF5LCBJIGdvIG5vcnRoLjwvcD5cclxuICA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCB7IEdsYWNpZXJDIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuaW1wb3J0IFdBVkUgZnJvbSBcIi4vcG9lbS13YXZlXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDKCkge1xyXG4gcmV0dXJuIChcclxuICA8PlxyXG4gICA8U2NlbmUwNSAvPlxyXG4gICA8U2NlbmUwNiAvPlxyXG4gICA8U2NlbmUwNyAvPlxyXG4gICA8U2NlbmUwOCAvPlxyXG4gICA8U2NlbmUwOSAvPlxyXG4gICA8V0FWRSAvPlxyXG4gICA8U2NlbmUxMCAvPlxyXG4gICA8U2NlbmUxMSAvPlxyXG4gICA8U2NlbmUxMiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8Lz5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZpdmUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGFtIG5pbmUgeWVhcnMgb2xkLCBhbmQgd2UgaGF2ZSBmYW1pbHkgaW4gTmV3IE9ybGVhbnMuIFdlIGhhdmUgZmFtaWx5IGluIEZsb3JpZGEsIGFzIHdlbGw7IG15IGZhdGhlciBoYXMgdGFrZW4gaXQgdXBvbiBoaW1zZWxmIHRvIGRyaXZlIHVzIGZyb20gb25lIHRvIHRoZSBvdGhlciwgd2hpY2ggSSBmaW5kIGV4Y2l0aW5nLiBJIG9ubHkgc2VlIEdQUyBpbiByZW50YWwgY2FycywgaW4gdGhlIFVTLCB3aGljaCBpcyB0aGUgc29ydCBvZiB0aGluZyB0aGF0IHNhdGVsbGl0ZXMgYm90aGVyIHRvIG1hcC4gV2UgbGVhdmUgaW4gdGhlIGFmdGVybm9vbiB0byBkcml2ZSB0aHJvdWdoIHRoZSBuaWdodCwgd2hpY2ggSSBmaW5kIG1vcmUgZXhjaXRpbmcgc3RpbGwuPC9wPlxyXG4gICAgPHA+V2UgcGFzcyB0aHJvdWdoIGEgc3Rvcm0gc3lzdGVtLCBkcml2aW5nOyBoYXJzaCByYWluIGluIG1vdGlvbiBhdCBuaWdodCBpcyBhIHJhcmUgdHJlYXQgZm9yIG1lLCBhbmQgSSBoYXZlbid0IHF1aXRlIGdyYXBwbGVkIHdpdGggdGhlIHJlYWxpdGllcyBvZiBoaWdod2F5cyBlbm91Z2ggdG8gdW5kZXJzdGFuZCB0aGUgcGl0ZmFsbHMgb2Ygd2h5LiBJIHN0YXJlIG91dCB0aGUgd2luZG93cyBhdCB0aGUgaGFyZCByYWluLCB0aGUgbHV4dXJ5IG9mIGxpZ2h0IGFuZCBsYW5lcyBvbiBhbiBBbWVyaWNhbiBpbnRlcnN0YXRlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzaXgnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBmYXRoZXIgaGFzIHRvbGQgbWUgYWJvdXQgaHVycmljYW5lIHBhcnRpZXMsIHJpY2ggcGVvcGxlIHdobyB3ZXJlIHJlY2VudGx5IGNoaWxkcmVuIHRha2luZyBvZmYgdG8gc2l0IGl0IG91dCBpbiBzcGFyZSBob3VzZXMgb24gdGhlIGNvYXN0LiBUaGUgaWRpb2N5IHRoYXQgY29tZXMgd2l0aCB0aGUgd29ybGQgZ2l2aW5nIHlvdSBubyByZWFzb24gdG8gYmVsaWV2ZSB5b3UncmUgbm90IGludnVsbmVyYWJsZS4gV2UgbWF5IG9yIG1heSBub3QgZGlzY3VzcyB0aGF0IHBhcnQgZXhwbGljaXRseSwgYnV0IEknbSBhd2FyZSwgYXQgaG9tZSwgb2YgdGhlIGNvbnRyb3ZlcnN5IG9mIHRoZSBmb3JjaWJsZSByZWRlZmluaXRpb24gb2YgXCJiZWFjaGZyb250XCIgcHJvcGVydHkgYnkgYnVpbGRpbmcgb24gZHVuZXMsIGFuZCB0aGUgcmVhc29ucyBwZW9wbGUgZG8gc28gYW55d2F5LiBXaHkgdGhlIGxhdyBoYXMgbGVzcyB0byBzYXkgYWJvdXQgaXQgdGhhbiB0aGUgdGV4dCBjbGFpbXMgaXQncyBzdXBwb3NlZCB0by48L3A+XHJcbiAgICA8cD5JIGtub3cgYSBsb3Qgb2YgcmVhbHRvcnMuPC9wPlxyXG4gICAgPHA+SSBhbHNvIGtub3cgYSBqb2tlOiBcIkkndmUgZ290IHRoaXMgZ3JlYXQgcGllY2Ugb2YgbGFuZCB0byBzZWxsIHlvdSxcIiBpdCBzdGFydHMsIFwiaGFzbid0IGZsb29kZWQgc2luY2UgdGhlIGRpbm9zYXVycy4uLlwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NldmVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TGF0ZXIgaW4gdGhlIHN1bW1lciwgSSBhbSBub3QgbmluZSB5ZWFycyBvbGQuIFdoZW4gSSd2ZSByZWNlbnRseSB0dXJuZWQgdGVuLCBLYXRyaW5hIHN3ZWVwcyB0aHJvdWdoIHdoZXJlIEkgYW0gbm90LiBJIGhhdmUgdGhlIHZhZ3Vlc3Qgb2YgdW5kZXJzdGFuZGluZ3Mgb2Ygd2hhdCBhIGxldmVlIGlzLCBmcm9tIHNvbmdzLCBhbmQgbm93IGZyb20gbmV3czsgbGlrZSBkdW5lcywgSSB0aGluaywgYnV0IHdvcnNlIGF0IGJlaW5nIHNvLjwvcD5cclxuICAgIDxwPkluIHRoZSBsZWFkLXVwIHRvIGxhbmRmYWxsLCBJIGFtIGNoaWxkaXNobHksIGNhbGxvdXNseSBiYWZmbGVkOiBDYXRlZ29yeSA1IG9uIHRoZSBmb3JlY2FzdCBpcyBhbHdheXMgZ29vZCBuZXdzIGZvciBtZSwgYmVjYXVzZSBsYXJnZSBudW1iZXJzIG1lYW4gYSBoaWdoZXIgcHJvYmFiaWxpdHkgb2YgY2xhc3MgYmVpbmcgY2FsbGVkIG9mZi4gKFRoZXJlIGlzLCBmb3IgdGhlIGR1cmF0aW9uIG9mIG15IGNoaWxkaG9vZCwgb25lIHBhdmVkIHJvYWQuIFRoZSBvdGhlcnMsIHVuZGVyIHN1ZmZpY2llbnQgcHJlc3N1cmUsIHR1cm4gdG8gcml2ZXJzLiBJIGxpdmUgb24gYSBoaWxsOyBJIGxpa2UgdG8gd2F0Y2guIE9uZSB5ZWFyLCBsYXRlciBpbiB0aGUgZGVjYWRlLCBvbiBhIGRheSB0aGF0IHRoZSByb2FkcyB3ZXJlbid0IHdhc2hlZCBvdXQgZWFybHkgZW5vdWdoIGluIHRoZSBtb3JuaW5nIHRvIGdldCBtZSBvdXQgb2YgaXQsIG15IHNjaG9vbCB0dXJucyB0byByYXBpZHMsIGFuZCBJIGFtIHVuYWNjb3VudGFibHkgcGxlYXNlZCB0byBrbm93IGl0IHdhcyBidWlsdCBvbiBhIHZlaW4gb2YgcmVkIGNsYXkgYXMgdGhhdCBwYWludHMgaXRzZWxmIG9udG8gbXkgc29ja3MuKSA8L3A+XHJcbiAgICA8cD5FdmFjdWF0aW9uLCBmb3IgZXhhbXBsZSwgaXMgZm9yZWlnbiB0byBtZS4gSSBjYW4ndCBpbWFnaW5lIHdoeSB0aGV5J3JlIGJvdGhlcmluZzsgSSBjb3VsZCBzYXkgdGhhdCB0aGUgcmVhc29uIEkgZG9uJ3QgdW5kZXJzdGFuZCB3aHkgb25lIHBsYWNlIHdvdWxkIGJlIHNhZmVyIHRoYW4gYW5vdGhlciBpcyB0aGF0IG5vIHBhcnQgb2YgbXkgc3RhdGUgaXMgYSBmdWxsIGZpZnR5IG1pbGVzIGZyb20gdGhlIGNvYXN0bGluZSwgYnV0IEkgZG91YnQgSSB0aG91Z2h0IGl0IHRocm91Z2ggdGhhdCBmYXIuIEkgdGhpbmsgSSBzaW1wbHkgZG8gbm90IHJlZ2lzdGVyIHRoYXQgbG9jYXRpb25zIGFyZSB1bmxpa2Ugb25lIGFub3RoZXIgaW4gdGltZSBub3QgdG8gbGVhcm4gaXQgb24gdGhlIG5ld3MuPC9wPlxyXG4gICAgPHA+SSBhbSB0ZW4geWVhcnMgYW5kIGFsbW9zdCBvbmUgbW9udGggb2xkLCBhbmQgSSB1bmRlcnN0YW5kIHRoYXQgaHVycmljYW5lIHByZXBhcmVkbmVzcyBpcyByZWxhdGl2ZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIHN0dWNrIG15IGZlZXQgaW4gdGhlIEF0bGFudGljIG9uY2UuIEl0IHdhcyBjb2xkZXIgdGhhbiBhbiBvY2VhbiBoYWQgYW55IGJ1c2luZXNzIGJlaW5nLCBieSBteSBsaWdodHMsIGFuZCBncmF5LiBUaGVyZSB3YXMgc29tZXRoaW5nIGJpemFycmUgaW4gdGhlIGlkZWEgdGhhdCBpdCB3YXMgd2FybSBlbm91Z2ggdG8gZmVlZCBhIGh1cnJpY2FuZS4gIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSduaW5lJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QmVmb3JlIEkgYW0gZWxldmVuLCB3ZSBzdG9wIGhhdmluZyBmYW1pbHkgaW4gTmV3IE9ybGVhbnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3Rlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IGFyb3VuZCBmb3VyIHllYXJzIG9sZCwgSSBhbSBlYXZlc2Ryb3BwaW5nLS10aGlzIHdpbGwgYmUgYSBoYWJpdC0tSSBhbSBlYXZlc2Ryb3BwaW5nIG9uIGtpbmRlcmdhcnRlbiB0ZWFjaGVyczsgdGhleSBhcmUgdGFsa2luZyBhYm91dCB0aGUgd2VhdGhlci4gPC9wPlxyXG4gICAgPHA+U3BlY2lmaWNhbGx5LCB0aGV5IGFyZSB0YWxraW5nIGFib3V0IHRoZSBvY2VhbiBnZXR0aW5nIHdhcm1lciwgYW5kIGhvdyB0aGF0J3MgbWFraW5nIGh1cnJpY2FuZSBzZWFzb24gaGFyc2hlciwgYW5kIGxvbmdlciwgaW4gd2F5cyBubyBvbmUgc2hvdWxkIGxpa2UuIFdlIGRlcGVuZCBvbiBodXJyaWNhbmVzIGZvciBmcmVzaHdhdGVyLS1teSB0b3duLCBzcGVjaWZpY2FsbHksIHJlbGllcyBvbiB0aGVtIHRvIGZpbGwgdGhlIGFxdWlmZXIgaXRzIG11Y2gtZGlzY3Vzc2VkIG9hc2lzIHN0YXR1cyBpcyBidWlsdCB1cG9uLS1idXQgdG9vIG11Y2ggd2F0ZXIgYXQgYSB0aW1lIGRlZmVhdHMgdGhlIHBvaW50LCByaXBzIHRvcHNvaWwgaW50byB0aGUgc2VhLCBydW5zIGl0cyBjb3Vyc2UgdG9vIGZhc3QgZm9yIHVzIHRvIGtlZXAuIEFuZCBpdCdzIG1vcmUgdW5wbGVhc2FudCBmb3IgdGhlbSB0aGFuIGl0IGlzIGZvciBtZS48L3A+XHJcbiAgICA8cD5UaGUgd2FybXRoLCBhdCBsZWFzdCwgaXMgY29tbW9uIHNlbnNlOyBJIGtub3cgaGVhdCBpcyBlbmVyZ3kgYmVjYXVzZSBJIGtub3cgaHVycmljYW5lcyBuZWVkIHdhcm0gd2F0ZXIgdG8gbGl2ZS4gVGhhdCdzIHdoeSB0aGV5IHN0YXJ2ZSBhbmQgc3RhbGwgb3V0IGdvaW5nIG5vcnRoLCBvciBjb21pbmcgdG8gbGFuZC4gQSBzdG9ybSB3b3VsZCBoYXZlIHRvIGJlIHZlcnkgc3BlY2lhbCB0byBmaWdodCBhbGwgdGhlIHdheSB0aHJvdWdoIHRoYXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VsZXZlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IGZpcnN0IHllYXJzIGluIHRoZSBVbml0ZWQgU3RhdGVzLCBJIFNreXBlIG15IGRhZCBsZXNzIG9mdGVuIHRoYW4gSSBzaG91bGQuIExlc3Mgb2Z0ZW4gdGhhbiBJIHdhbnQgdG8uIEl0J3MgaGFyZCB0byBmaW5kIGEgcmh5dGhtOyBJIGFtIG5vdCBkb2luZyB3ZWxsIHRoZXJlLiBCdXQgaGUgdGVsbHMgbWUgYWJvdXQgdGhlIHdlYXRoZXIuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VsdmUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5XaGVuIEkgYW0gdHdlbnR5LWZvdXIsIGl0J3MgPGEgaHJlZj0naHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAyMC8wNS8xOC9jbGltYXRlL2NsaW1hdGUtY2hhbmdlcy1odXJyaWNhbmUtaW50ZW5zaXR5Lmh0bWwnPmVzdGFibGlzaGVkPC9hPiB0aGF0IHdhcm1lciB3YXRlciBpcyBzdXBlcmNoYXJnaW5nIHRyb3BpY2FsIHN0b3Jtcy48L3A+XHJcbiAgICA8cD5JIHVuZGVyc3RhbmQgdGhhdCBzY2llbmNlIG1vdmVzIG1vcmUgc2xvd2x5IHRoYW4ga2luZGVyZ2FydGVuIHRlYWNoZXJzJyBzbWFsbCB0YWxrOyB0aGF0IGNsaW1hdGUsIGJ5IGRlZmluaXRpb24sIGhhcHBlbnMgb24gYSB0aW1lc2NhbGUgY2xvc2VyIHRvIGdlb2xvZ2ljYWwgdGhhbiBhbmVjZG90ZS4gPC9wPlxyXG4gICAgPHA+QnV0IEkgZG8gaGF2ZSB0aGUgZmxlZXRpbmcgdGhvdWdodCB0aGF0LCBldmVuIHRoZW4sIHRha2luZyB0d2VudHkgeWVhcnMgb2YgbXkgbGlmZSB0byBjYXRjaCB1cCB0byBob3cgdGhlIHdlYXRoZXIncyBkb2luZyBzZWVtcyBhIGJpdCBtdWNoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IEdhcmRlbiBmcm9tIFwiLi9waG90b3NfY2hpXCJcclxuaW1wb3J0IE9kaWxlIGZyb20gXCIuL3Bob3Rvc19vZGlsZVwiXHJcbmltcG9ydCB7IEdsYWNpZXJCLCBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBPZGUgZnJvbSBcIi4vcG9lbS1vZGVcIlxyXG5pbXBvcnQgV2luU3VtIGZyb20gXCIuL3BvZW0td2luc3VtXCJcclxuaW1wb3J0IERlZmluZSBmcm9tIFwiLi9xdW90ZS1jbGltZVwiXHJcbmltcG9ydCBPaGlvIGZyb20gXCIuL3N0cmlwZS1vaGlvXCJcclxuaW1wb3J0IFdhc2hpbmd0b24gZnJvbSBcIi4vc3RyaXBlLXdhc2hpbmd0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRCgpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMTMgLz5cclxuICAgPFNjZW5lMTQgLz5cclxuICAgPE9oaW8gLz5cclxuICAgPFNjZW5lMTkgLz5cclxuICAgPFNjZW5lMTUgLz5cclxuICAgPERlZmluZSAvPlxyXG4gICA8U2NlbmUxNiAvPlxyXG4gICA8U2NlbmUxNyAvPlxyXG4gICA8U2NlbmUxOCAvPlxyXG4gICA8U2NlbmUyMCAvPlxyXG4gICA8U2NlbmUyMiAvPlxyXG4gICA8T2RpbGUgLz5cclxuICAgPFNjZW5lMjEgLz5cclxuICAgPFNjZW5lMjMgLz5cclxuICAgPFNjZW5lMjQgLz5cclxuICAgPFNjZW5lMjUgLz5cclxuICAgPFNjZW5lMjYgLz5cclxuICAgPEdhcmRlbiAvPlxyXG4gICA8U2NlbmUyNyAvPlxyXG4gICA8U2NlbmUyOCAvPlxyXG4gICA8U2NlbmUyOSAvPlxyXG4gICA8U2NlbmUzMCAvPlxyXG4gICA8V2luU3VtIC8+XHJcbiAgIDxTY2VuZTMxIC8+XHJcbiAgIDxTY2VuZTMyIC8+XHJcbiAgIDxTY2VuZTMzIC8+XHJcbiAgIDxTY2VuZTM0IC8+XHJcbiAgIDxPZGUgLz5cclxuICAgPFNjZW5lMzUgLz5cclxuICAgPFNjZW5lMzYgLz5cclxuICAgPFNjZW5lMzcgLz5cclxuICAgPFNjZW5lMzggLz5cclxuICAgPFdhc2hpbmd0b24gLz5cclxuICAgPFNjZW5lMzkgLz5cclxuICAgPFNjZW5lNDAgLz5cclxuICAgPFNjZW5lNDEgLz5cclxuICAgPEdsYWNpZXJCIC8+XHJcbiAgIDxTY2VuZTQyIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBjb2xsZWdlIGluIHRoZSBVUyB0aGF0IEkgZ2V0IGludG8gaXMgaW4gT2hpbywgc28gSSBhbSBlaWdodGVlbiBhbmQgSSBhbSBpbiBPaGlvLiBCZWZvcmUgdGhhdCwgSSBhbSBzZXZlbnRlZW4sIGFuZCBteSBmYXRoZXIgaXMgaGVscGluZyBtZSBwaWNrIG91dCBhIHdpbnRlciBjb2F0IG9uIHRoZSBpbnRlcm5ldCwgYW5kIEkgYW0gYXNraW5nIGhpbSBpZiBJIHNob3VsZCBjaG9vc2UgdGhlIHdhcm1lc3Qgb25lIEkgc2VlLjwvcD5cclxuICAgIDxwPlRoYXQncyBvdmVya2lsbCwgaGUgc2F5cy4gKEhlIGhhcyBiZWVuIHRoZXJlIGJlZm9yZSwgYWxiZWl0IHN1YnN0YW50aWFsbHkgcHJpb3IgdG8gbWUgZXZlbiBiZWluZyBib3JuLikgV2hhdCBJIHJlYWxpc3RpY2FsbHkgbmVlZCBpcyBtb3JlIHRvd2FyZHMgdGhlIGNlbnRlciBvZiB0aGUgcmFuZ2UuIEknZCByZWdyZXQgZ2V0dGluZyB0b28gaGVhdnkgYSBjb2F0LCBoZSBzYXlzLCBhbmQgaGVscHMgbWUgcGljayBvbmUgb2YgdGhlIG1pZGRsaW5nIG9uZXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXJ0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBnaXZlbiB0byB1bmRlcnN0YW5kIGl0IHNheXMgZW5vdWdoIHRvIHNheSB0aGF0IG15IGZpcnN0IHllYXIgaW4gT2hpbyBpcyBhIGxha2UgZWZmZWN0IHllYXIsIHRob3VnaCBJIHdvdWxkbid0IGtub3cgd2h5LiA8L3A+XHJcbiAgICA8cD5JIGxlYXJuLCBmaXJzdGhhbmQgYW5kIG9uIG15IGhhbmRzLCB3aGF0IGEgLTQwIHdpbmQgY2hpbGwgaXMgaW4gRmFocmVuaGVpdC4gSSBsZWFybiB3aGF0IHNwZWNpYWwgY2FuZSB0aXBzIEkgbmVlZCBmb3IgdHJhY3Rpb24gaW4gc25vdy4gSSBsZWFybiB0aGF0IG15IGNvbGxlZ2UgaXMgbm90IHBhcnRpY3VsYXJseSBpbnRlcmVzdGVkIGluIGNsZWFyaW5nIHRoZSBzaWRld2Fsa3MgaW4gdGltZSBmb3IgY2xhc3M7IGl0IGRvZXMgbm90IG9jY3VyIHRvIG1lIHRoYXQgdGhleSBtYXkgb25jZSBhdCBsZWFzdCBoYXZlIGJlZW4gYWJsZSB0byBhZmZvcmQgdGhlIG5lZ2xpZ2VuY2UsIGJlY2F1c2UgSSBkb24ndCBoYXZlIGFueSByZWFzb24gdG8gdW5kZXJzdGFuZCBhIGNvbXBhcmlzb24gYnkgd2hpY2ggdGhpcyBiZWNvbWVzIGV4dHJlbWUuPC9wPlxyXG4gICAgPHA+TXkgZGFkIGFwb2xvZ2l6ZXMsIHRob3VnaC4gRm9yIGxlYWRpbmcgbWUgd3JvbmcsIHdpdGggdGhlIGNvYXQuPC9wPlxyXG4gICAgPHA+VGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIGhlcmUgaXMgc3VwcG9zZWQgdG8gZG8sIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+SSB3b3VsZG4ndCBrbm93LCBJIHNheTsgb3IgbWF5YmUgSSBkb24ndC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZmlmdGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgRmFjZVRpbWUgbXkgZGFkIGluc3RlYWQgb2YgU2t5cGluZywgdGhlc2UgZGF5cy4gSGUgdGVsbHMgbWUgaG93IG1hbnkgZGF5cyB0aGlzIHdlZWsgdGhlcmUgaGF2ZSBiZWVuIG11bmljaXBhbCB3YXRlci4gSSB0ZWxsIGhpbSB3aGVuIGl0IHNub3dzLiBIZSB0ZWxscyBtZSBob3cgb3VyIHRlbXBlcmF0dXJlcyBjb21wYXJlLiBJIHRlbGwgaGltIEkgZ290IGEgbmV3IG1vbml0b3IuIEkgdGVsbCBoaW0gaG93IG11Y2ggaXQgd2FzIG5ldywgYW5kIGhvdyBwbGVhc2VkIEkgYW0gd2l0aCBteXNlbGYgZm9yIGhvdyBJIGZvdW5kIGl0IHVzZWQsIGhvdyB0aGUgZGVhbCB0b29rIGEgbWF0dGVyIG9mIGRheXMuPC9wPlxyXG4gICAgPHA+WW91J3JlIGluIHRlY2ggaGVhdmVuIHVwIHRoZXJlLCBoZSBzYXlzLiBJIHNheSwgSSBndWVzcy4gSGUgc2F5cyB0aGF0IHVzZWQgaGVyZSB3b3VsZCBiZSBuZXcgdGhlcmUuIEkgdGhpbmsgYWJvdXQgdGhhdCBhcyBhIHdheSB0byBwdXQgaXQsIGxhdGVyOiBkZXZlbG9wbWVudCBpbiByZWxhdGl2ZSB0aW1lIG92ZXIgc3BhY2UuPC9wPlxyXG4gICAgPHA+SSBzYXkgKGFub3RoZXIgZGF5KSB0aGF0IEknZCBsaWtlIHRvIHRyYWRlIGhpbSBteSBsYXB0b3AsIHRoYXQgaXQgd291bGQgYmUgYmV0dGVyIGZvciBoaXMgZ3JpcCB0aGFuIGl0J3MgYmVlbiBmb3IgbXkgdmlzaW9uLiBIZSBhc2tzIGlmIEkgd2FudCBoaW0gdG8gdGFsayB0byBhc2sgdGhlIGd1eSB3aG8gc2VuZHMgaGltIHN0dWZmIGZyb20gdGhlIGJvcmRlciB3aGF0IHRoZSBjb21wb3VuZGluZyBjb3N0cyBvZiBzaGlwcGluZyB3b3VsZCBsb29rIGxpa2UuIEkgc2FpZCBJIHRob3VnaHQgSSdkIGp1c3QgYnJpbmcgaXQgdG8gaGltLCB3aGVuIEkgY2FuLiBTYXZlIGhpbSB0aGUgY3VzdG9tcywgdGhlIHdheSB3ZSBoYW5kbGVkIHRoaW5ncyBncm93aW5nIHVwLjwvcD5cclxuICAgIDxwPk9oLCBoZSBzYXlzLiBUaGF0J3Mga2luZCBvZiB5b3UuPC9wPlxyXG4gICAgPHA+SSB3YW50IHRvIHNlZSB5b3UgYW55d2F5LCBJIHNheS4gVGhlIG1hY2hpbmUgYmVpbmcgbGlnaHQgaXMgdGhlIHdob2xlIHBvaW50IG9mIHRoZSB0aGluZy4gSSBkb24ndCBzZWUgd2hlcmUga2luZG5lc3MgY29tZXMgaW50byBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4dGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgd2FzIGhvbWUgZm9yIHRoZSBsYXN0IHRpbWUgaW4gRGVjZW1iZXIsIDIwMTMuIEl0J3Mgbm90IG15IGZpcnN0IHN1bW1lciBhd2F5LS1pdCBmZWVscyBpdC0taXQncyBub3QgbXkgZmlyc3Qgc3VtbWVyIGJ1dCBteSBzZWNvbmQgdGhhdCB0aGUgaHVycmljYW5lIGNvbWVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgYmlnIGh1cnJpY2FuZSB3aG9zZSBuYW1lIEkgdXNlZCB0byByZW1lbWJlciBoYXBwZW5lZCBzaG9ydGx5IGJlZm9yZSBJIHdhcyBib3JuLCBhbmQgdGh1cyB0aGUgcG9pbnQgb2YgcmVmZXJlbmNlIGZvciBhbiBleHRyYW9yZGluYXJ5IHN0b3JtIGNvdWxkIGNvbWZvcnRhYmx5IGJyYWNrZXQgYW55dGhpbmcgSSdkIGtub3cuPC9wPlxyXG4gICAgPHA+SGVyIHVzdXJwZXIgY29tZXMgdGhlIHN1bW1lciBJIHR1cm4gdHdlbnR5LiBJdCB0ZWFycyB0aHJvdWdoIHRvd24gbGlrZSBhIG5hdHVyYWwgZGlzYXN0ZXIsIHdoaWNoIGlzIGphcnJpbmcuIEl0IHVwZW5kcyBteSBmYXRoZXIncyBnYXJkZW4sIHdoaWNoIGlzLCBzb21laG93LCB3b3JzZS4gVGhpbmtpbmcgb2YgaGltIHB1dHRpbmcgaXQgYmFjayB0b2dldGhlci4gRXZlbiBpZiBoZSBoYWQgaGVscC48L3A+XHJcbiAgICA8cD5IZSBkb2Vzbid0IHdhbnQgdG8gdmlzaXQsIGFmdGVyIHRoYXQsIGV2ZW4gYmVmb3JlIGhlIGNhbid0LiBUcmF2ZWwgaGFzIGFsd2F5cyBiZWVuIGEgdGhpbmcgb2Ygc3VtbWVyOyBoZSBkb2Vzbid0IHdhbnQgdG8gbGVhdmUgdGhlIGhvdXNlIHRvIHN0b3JtcyB1bnN1cGVydmlzZWQuIEhlIGRvZXNuJ3QgdHJ1c3QgYW55b25lIGVsc2UgdG8gaGFuZGxlIGl0IGlmIGhlIGxlYXZlcyBpdCBhbG9uZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWlnaHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW5kcyBtZSBwaG90b3MuIEJ1dCB0aGV5IGdldCBtb3JlIGRpZmZpY3VsdCB0byBsb29rIGF0IG92ZXIgdGltZSwgb2RkbHkgZW5vdWdoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE5KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSduaW5ldGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkh1cnJpY2FuZSBzZWFzb24gZ3Jvd3MgbG9uZ2VyIGF0IGJvdGggZW5kcy4gSXQncyBoYXJkIHRvIGZpbmQgbmV3cyBhYm91dCBodXJyaWNhbmVzIGluIHRoZSBQYWNpZmljIHRoYXQgSSBjYW4gcGljayB1cCBvbiBwYXNzaXZlbHksIHRob3VnaDsgQW1lcmljYW4gc291cmNlcywgd2hpY2ggYXJlIHdoYXQgdGhlIGludGVybmV0IGlzIGJ1aWx0IG9uLCBjYXJlIGFib3V0IHRoZSBBdGxhbnRpYyBmaXJzdCBhbmQgZm9yZW1vc3QuIEkgZG9uJ3QgbGlrZSB0aGUgQXRsYW50aWMsIHNlbGZpc2hseTogaXQgaGFzIGEgYmFkIHRyYWNrIHJlY29yZCwgYW5kIEkgcmVtZW1iZXIgaXQgZ3JheS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SW4gMjAyMiwgSSB0ZWxsIGhpbSBJJ20gd3JpdGluZyB0aGlzIGVzc2F5LCBhbmQgSSBhc2sgaWYgSSBjYW4gdXNlIHRoZSBwaG90b3MuIEhlIGFza3Mgd2hhdCBJIHdhbnQgdGhlbSBmb3IuIEkgc2F5IEknbSB3cml0aW5nIGFib3V0IHRoZSBpbmNyZWFzZWQgdG9sbCBvZiBodXJyaWNhbmVzIG9uIGFuIGVudmlyb25tZW50IHRoYXQgcmVsaWVkIG9uIHRoZW0uIEhlIHNheXMgaGUgc3VwcG9zZXMgT2RpbGUgd291bGQgYmUgdGhlIG9uZSBmb3IgdGhhdC48L3A+XHJcbiAgICA8cD5JIHdhc24ndCB0aGVyZSwgSSBzYXkuIEl0J3MgdGhlIGZpcnN0IGJpZyBvbmUgd2hlcmUgSSB3YXNuJ3QgdGhlcmUuPC9wPlxyXG4gICAgPHA+SGUgYXNrcyB3aHkgdGhhdCBtYXR0ZXJzLiBUaGluZ3MgYXJlIGdvaW5nIHRvIGtlZXAgaGFwcGVuaW5nIHdoaWxlIHlvdSdyZSBub3QgaGVyZSwgaGUgc2F5cy48L3A+XHJcbiAgICA8cD5JIGtub3csIEkgc2F5LjwvcD5cclxuICAgIDxwPlN1cnZpdm9yJ3MgZ3VpbHQgaXMgYSB0aGluZywgbXkgcGFydG5lciBzYXlzLCBpbiBlYXJzaG90LCBmcm9tIG9mZnNjcmVlbi4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IZSBzZW50IG1lIHBob3Rvcy48L3A+IFxyXG4gICAgPHA+SSBzdHJ1Z2dsZSB0byBkZXNjcmliZSB0aGVtLjwvcD5cclxuICAgIDxwPkkgcmVtaW5kIG15c2VsZiB0aGF0IEkgb3dlIHRoYXQgdG8gb3RoZXIgcGVvcGxlLiBJIHByb21pc2UgbXlzZWxmIEknbGwgY29tZSBiYWNrIHRvIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSB0ZWxsIG15IGZhdGhlciB0aGF0IEknbSB3cml0aW5nIGFib3V0IHRoZSBmaW5nZXJwcmludHMgb2YgY2xpbWF0ZSBjaGFuZ2UgYnJhY2tldGVkIGJ5IG15IGxpZmUuIEkgdGVsbCBoaW0gdGhhdCBhIGxpdHRsZSBvdmVyIGEgcXVhcnRlciBjZW50dXJ5IGlzIGEgcHJldHR5IGRlY2VudCBmcmFtZSB3aXRoIHdoaWNoIHRvIGVuY2Fwc3VsYXRlIGl0LiBJIHRlbGwgaGltIHRoYXQgc29tZXRpbWVzIGl0IGZlZWxzIGxpa2UgaXQncyBmb2xsb3dpbmcgbWUgdXAuPC9wPlxyXG4gICAgPHA+WW91J3ZlIGJlZW4gd29ya2luZyB5b3VyIHdheSBub3J0aCwgaGUgc2F5cywgd2l0aCBzb21lIGRlbGlnaHQgYXQgaG93IGl0IGxpbmVzIHVwLiA8L3A+XHJcbiAgICA8cD5FdmVyeXdoZXJlIEkgZ28sIGV2ZXJ5IHllYXIsIHBlb3BsZSB0ZWxsIG1lIHRoYXQgdGhpcyBpc24ndCB3aGF0IHRoZSB3ZWF0aGVyIHVzdWFsbHkgZG9lcywgSSB0ZWxsIGhpbS4gSSdtIGdldHRpbmcgcHJhY3RpY2UgYXQgdGhlIHByZW1pc2UgYnkgbm93LjwvcD5cclxuICAgIDxwPlRoYXQncyB0aGVpciBwcm9ibGVtLCBoZSBzYXlzLiBIZSBzYXlzIGl0J3MgYSBmYW50YXN5IHRoYXQgaXNuJ3QgcmVsZXZhbnQgdG8gdGhlIHdvcmxkIGFzIGl0IGlzIGFuZCB3aWxsIGNvbnRpbnVlIGJlaW5nLjwvcD5cclxuICAgIDxwPkkgc2F5IEkgdGhpbmsgZ3JvdW5kaW5nIHRoZW1zZWx2ZXMgaW4gd2hhdCB0aGV5IHN0aWxsIHRoaW5rIG9mIGFzIG5vcm1hbCBpcyBob3cgcGVvcGxlIGhlbHAgdGhlbXNlbHZlcyB1bmRlcnN0YW5kIGNoYW5nZS48L3A+XHJcbiAgICA8cD5IZSBzYXlzIGl0J3Mgc3RpbGwgdGhlIGNhc2UgdGhhdCBzdWNoIGdyb3VuZCBkb2Vzbid0IGV4aXN0LiBJIHNheSBJIGtub3cuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTMnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JdCBpcyBKYW51YXJ5LCBhbmQgSSBzdGlsbCBsaXZlIGluIEJlbGxldnVlLiBJbiB0aGUgdGltZSBiZXR3ZWVuIGFuIGFmdGVybm9vbidzIHdvcnRoIG9mIHRoaXMgY2xhc3MgYW5kIHN0YXlpbmcgYmVoaW5kIGFmdGVyLCB0aGUgcmFpbiB0aGF0IG15IHBhcnRuZXIgaG9wZWQgc2lnbmFsZWQgYSBicmVhayBmcm9tIHRoZSBzbm93IGhhcyB0dXJuZWQgdG8gaGFpbC48L3A+XHJcbiAgICA8cD5JIGNoZWNrIHRoZSB3aW5kb3cuIEkgY29tZSBiYWNrLiBJJ20gc29ycnkgaWYgdGhlcmUncyBiYWNrZ3JvdW5kIG5vaXNlLCBJIHNheSB0byBteSBpbnN0cnVjdG9yLiBJdCdzIGhhaWwuPC9wPlxyXG4gICAgPHA+VGhlcmUncyBhIHBhcnRpY3VsYXIgc29ydCBvZiBzbWlsZSBJJ20gZmFtaWxpYXIgd2l0aCwgd2hlbiBwZW9wbGUgYXJlIHRyeWluZyB0byB0b25lIGRvd24gdGhlIGltcGFjdCBvZiB0YWxraW5nIGFib3V0IHRoZSB3ZWF0aGVyLiBUaGUgc3RyYWluIG9mIHRyeWluZyB0byBvZmZzZXQgdGVuc2lvbiB3aGVuIHRoZXJlJ3Mgbm93aGVyZSB0byBvZmZzZXQgaXQgdG8uPC9wPlxyXG4gICAgPHA+SXQncyB0aGVyZSB3aGVuIGhlIHNheXM6IEl0J3Mgbm90IHN1cHBvc2VkIHRvIGhhaWwuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGZpbmQgbXlzZWxmIHdpc2hpbmcgSSdkIGdvbmUgb3V0c2lkZSBpbiB0aW1lIGZvciB0aGUgaGFpbC4gSXQncyBub3QgYSB0ZXh0dXJlIG9mIGljZSBmb3VuZCBtdWNoIGVsc2V3aGVyZSwgYW5kIGhhc24ndCBnb3R0ZW4gb2xkIGZvciBtZSB5ZXQ7IEkgbGlrZSB0byBlYXQgaXQuPC9wPlxyXG4gICAgPHA+KFdoZW4gaXQgc25vd2VkLCBteSBkYWQgd2FzIGRpc2FwcG9pbnRlZCB0aGF0IEkgZGlkbid0LCBoaXMgd29yZHMsIGdvIHBsYXkgaW4gdGhlIHNub3cuIFNvIHdhcyBJLCBhZG1pdHRlZGx5LiBJIHRob3VnaHQ6IHRoZXJlIHdpbGwgYmUgbW9yZSBzbm93IG5leHQgeWVhci4gSSB3aWxsIGRvIGJldHRlciBieSBteXNlbGYgbmV4dCB5ZWFyLCBJIHRoaW5rLik8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5NSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZSBmaXJzdCBzdW1tZXIgSSdtIHNldHRsZWQgZW5vdWdoIGluIFNlYXR0bGUgdG8gYmUgYXdhcmUgb2YgbXVjaCBvZiBhbnl0aGluZywgQ2FsaWZvcm5pYSBpcyBvbiBmaXJlLiBJIGFtIGdpdmVuIHRvIHVuZGVyc3RhbmQgdGhhdCB0aGlzIGlzIG5ldy4gQXNoIGZhbGxzIGxpa2Ugc25vdywgb3IgbGlrZSBhIENvbGQgV2FyIGVyYSBudWNsZWFyIFBTQS4gQSBmcmllbmQgZ3Jvd2luZyB1cCBpcyB2aXNpdGluZyBidXQgSSBjYW4ndCBkbyBtdWNoIG1vcmUgdGhhbiBtYWtlIGl0IGZyb20gdGhlIGNvdWNoIHRvIGFub3RoZXIgc2lkZSBvZiB0aGUgcm9vbS4gPC9wPlxyXG4gICAgPHA+V2UgZG8gbWFuYWdlIHRvIGdvIHRvIHRoZSBnbGFzcyBzY3VscHR1cmUgZ2FyZGVuLiBJIHRyeSB0byB0YWtlIHBob3Rvcy4gTXkgcGhvbmUgY2FuIGNhcHR1cmUgdGhlIGNvbG9ycyBvZiB0aGUgZ2xhc3MgdW5kZXIgYWxpZW4gbGlnaHQsIG9yIGl0IGNhbiBjYXB0dXJlIHRoZSBncmF5IHNreSBhbmQgcmVkIHN1bi4gSXQgZG9lcyBub3Qga25vdyBob3cgdG8gbWFrZSBzZW5zZSBvZiB0aGUgdHdvIG9mIHRoZW0gdG9nZXRoZXIuPC9wPlxyXG4gICAgPHA+TXkgcGFydG5lciwgbXkgZnJpZW5kLCBhbmQgSSB0YWxrIGFib3V0IGhvdyBjb29sIGl0IHdvdWxkIGJlIHRvIGNvbWUgdXAgd2l0aCBhIHNob3J0IHN0b3J5IHdoZXJlIEkgY291bGQgdXNlIHRoZSBwaG90b3MgSSBkaWQgZ2V0IGFzIGlsbHVzdHJhdGlvbnMuIEV2ZW4gaWYgSSBjYW4ndCBjYXB0dXJlIHRoZSB3aG9sZSBvZiBpdCwgaXQncyBzdHJpa2luZy4gSXQgd291bGQgYmUgbmljZSB0byBnZXQgc29tZXRoaW5nIG91dCBvZiBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Nic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgZ2V0IGFpciBmaWx0ZXJzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk3Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBnZXQgYmV0dGVyIGFpciBmaWx0ZXJzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlaWdodGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlllYXJzIGxhdGVyLCBpbiB0aGUgcGFuZGVtaWMsIEkgYWxyZWFkeSBvd24gcmVzcGlyYXRvcnMuIEkgdGFrZSB0aGUgb3Bwb3J0dW5pdHksIHBlcmlvZGljYWxseSwgdG8gZ2V0IGJldHRlciBvbmVzLiBUaGVyZSdzIGEgcG9zdGFsIHN5c3RlbTsgSSBjYW4gZG8gdGhhdC4gSSBhbSBhbGwgYnV0IHVzZWQgdG8gdGhlIG1haWwuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBzZWNvbmQgd2VlayBpbiBPaGlvLCBJIHdhbnRlZCB0byBzZW5kIGEgbGV0dGVyIHRvIGEgZnJpZW5kLiBNeSBSQSBoYWQgdG8gdGVhY2ggbWUgaG93IHRvIGFkZHJlc3MgYW4gZW52ZWxvcGUuIEl0IHN0cnVjayBtZSBhcyBzb3JjZXJ5IGZvciB5ZWFyczogdG8gb3JkZXIgdGhpbmdzIGFuZCBoYXZlIHRoZW0gY29tZSB0byB5b3UuIFJlc291cmNlcyBmbG93IHRvd2FyZHMgZW1waXJlcywgSSBrbmV3IHdoZW4gSSB3YXMgc2l4OyBwZW9wbGUgZ28gd2hlcmUgdGhlIHJlc291cmNlcyBhcmUsIEkgdGVsbCBwZW9wbGUgYXQgdHdlbnR5LXNpeCwgZmVlbGluZ3MgdG93YXJkcyB0aGUgZW1waXJlIGFyZSBpcnJlbGV2YW50LiBCdXQgb24gdGhlIHBlcnNvbmFsIGxldmVsLS10aGVyZSB3YXMgc29tZXRoaW5nIG1hZ2ljIGluIHN1Y2ggcm9hZHMgbGVhZGluZyB0b3dhcmRzIG1lLiBUaGUgZmlyc3QgdGhpbmcgSSBib3VnaHQgd2l0aCBteSBjb2xsZWdlIGFkZHJlc3Mgd2FzIGEgY2FuZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgcGFydG5lciBhbmQgSSBoYXZlIGFuIGFyZ3VtZW50IGFib3V0IHRoZSBjb25jZXB0IG9mIHN3aW1taW5nIGJlYWNoZXM7IGZvciB0aGUgc2FrZSBvZiB0aGlzIGFyZ3VtZW50LCBsZXQncyBzYXkgSSBhbSB0d2VudHktdHdvLiBIaXMgb2NlYW4gaXMgdGhlIFB1Z2V0IFNvdW5kOiBhIHRhbWUsIGNvb2wgbGl0dGxlIHRoaW5nIHRoYXQgSSBrbm93IGZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIGJyaWRnZXMsIHdpdGggZ2xhc3N5IGZsYXRzIGFuZCBuaWJibGluZyB3YXZlcy4gV2UgYXJlIGRpc2N1c3Npbmcgd2h5IGNoYXJhY3RlcnMgaW4gYSB2aWRlbyBnYW1lIHdvdWxkIHBpY2sgdXAgYW5kIGxlYXZlIHRoZWlyIHNlY3Rpb24gb2YgYSBjb2FzdGxpbmUgdG8gc3dpbSBzb21ld2hlcmUgZWxzZS48L3A+XHJcbiAgICA8cD5QcmVzdW1hYmx5IGl0J3Mgd2hlcmUgdGhlIHN3aW1taW5nIGJlYWNoZXMgYXJlLCBJIHNheS48L3A+XHJcbiAgICA8cD5XaGF0IGRvIHlvdSBtZWFuIHN3aW1taW5nIGJlYWNoLCBoZSBzYXlzLjwvcD5cclxuICAgIDxwPkJlYWNoZXMgd2hlcmUgaXQncyBzYWZlIHRvIHN3aW0sIEkgc2F5LCBpbXBhdGllbnRseS4gV2l0aGluIHJlYXNvbi48L3A+XHJcbiAgICA8cD5UaGUgcmVzdWx0aW5nIGxvbmcgYW5kIGhhbHRpbmcgY29udmVyc2F0aW9uLCByZW5kZXJlZCBhbiBhcmd1bWVudCBieSBsYWNrIG9mIGFueSB1bml2ZXJzZSBvZiBjb21tb24gcmVmZXJlbmNlLCBpcyBjdXQgc2hvcnQgd2hlbiBoaXMgbW90aGVyIHRlbGxzIGhpbSB0aGF0IHRoZWlyIGZhbWlseSB2aXNpdGVkIG5lYXIgbXkgaG9tZXRvd24gYmVmb3JlIGhlJ2QgYmUgYWJsZSB0byByZW1lbWJlci4gQXQgYSB0b3VyaXN0cycgYmVhY2ggaGlzIGdyYW5kZmF0aGVyIHR1cm5lZCBoaXMgYmFjayBvbiB0aGUgd2F0ZXIgYW5kLCB3aGVuIGhlIHdlbnQgZmx5aW5nIGFjY29yZGluZ2x5LCBsb3N0IGEgcGFpciBvZiBkZW50dXJlcy48L3A+XHJcbiAgICA8cD5TZWUsIEkgc2F5LiBOb3JtYWwgb2NlYW4uIFlvdSBkb24ndCB0dXJuIHlvdXIgYmFjayBvbiBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPldlIGhhdmUgaGFkIGxvbmcgZW5vdWdoIHRvIGdyb3cgYWNjdXN0b21lZCB0byBvbmUgYW5vdGhlciB0aGF0IEkgc3RydWdnbGUgdG8gcmVtZW1iZXIgb3RoZXIgZGlzam9pbnRzIG9mIHRoaXMga2luZC4gVGhlcmUncyBiZWVuIG92ZXIgaGFsZiBhIGRlY2FkZSB0byBidWlsZCB0aGUgbmVjZXNzYXJ5IGNvbmNlcHR1YWwgYnJpZGdlcy4gT2Z0ZW4gZW5vdWdoLCB3ZSBzdGlsbCBoYXZlIG1vbWVudHMgdGhhdCBtYWtlIGhpbSBzYXksIFNvbWV0aW1lcyBJIHJlbWVtYmVyIHRoYXQgd2UgY29tZSBmcm9tIGRpZmZlcmVudCB3b3JsZHMuIEJ1dCB0aGV5IGRvbid0IG11Y2ggc3ByaW5nIHRvIG1lbW9yeSB0aGVzZSBkYXlzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBoYXZlIG1peGVkIGZlZWxpbmdzIG9uIHJlZmVycmluZyB0byBwcmVwYXJhdG9yaWEgYXMgYSBoaWdoIHNjaG9vbC4gSXQgZ2l2ZXMgcGVvcGxlIHRoZSBhcHByb3hpbWF0ZSBpZGVhIHRoYXQgdGhleSBuZWVkLCBidXQgbW9yZSBvZnRlbiB0aGFuIG5vdCBJIGZpbmQgSSB3YW50IHRoZSBhbGllbmF0aW9uOyBJJ20ganVzdCBub3QgZW50aXJlbHkgc3VyZSB3aGVuIEkgbWFuYWdlIHRoYXQgdmVyc3VzIGFjdHVhbCBpbmNvbXByZWhlbnNpb24uIEFuZCBJIGRvbid0IHdhbnQgdGhlIGxhdHRlcjsgdGhhdCBkZWZlYXRzIHRoZSBwb2ludC4gSSBwdXQgZmFyIHRvbyBtdWNoIGVmZm9ydCBpbnRvIHRyYW5zbGF0aW9uIHRoYW4gdGhhdC48L3A+XHJcbiAgICA8cD5MZXQncyBib3cgdG8gYXVkaWVuY2UgYW5kIHNheSBJJ20gaW4gaGlnaCBzY2hvb2wsIGZvciB0aGlzIG9uZS4gSSd2ZSBoYWQgdG8gbW92ZSB0byB0aGUgY2FwaXRhbCBvZiB0aGUgc3RhdGUtLWR1cmluZyB0aGUgd2Vlazsgc3BsaXR0aW5nIGN1c3RvZHkgd2lsbCBkbyB0aGVzZSB0aGluZ3MgdG8geW91LS1mb3IgaXQuIEknbSBhIHNjaG9sYXJzaGlwIHN0dWRlbnQgYXQgYSBwcml2YXRlIHNjaG9vbCwgZm9yIHJlbGF0ZWQgcmVhc29ucy4gQXQgdGhpcyBncmFkZSBsZXZlbCBpbiBteSBob21ldG93biB0aGVyZSdzIG9ubHkgdm9jYXRpb25hbCBzY2hvb2xpbmcsIGFuZCBpdCdzIG5vdCBtYW5kYXRvcnkgYW55d2F5LiBGb3IgdGhlIGZpcnN0IHRpbWUgaW4gbXkgbGlmZSxhcyBhIHJlc3VsdCwgSSBhbSBub3QgaW4gdGhlIHB1YmxpYyBzY2hvb2wgc3lzdGVtLjwvcD5cclxuICAgIDxwPihPbmUgZWFybHkgbWVhbmluZyBvZiB0aGlzIGlzIHRoYXQgdGhlIHNjaG9vbCBpcyBhaXIgY29uZGl0aW9uZWQsIHdoaWNoIGl0IGRvZXMgbm90IG9jY3VyIHRvIG1lIHRvIHBhY2sgZm9yIG15IGZpcnN0IHdlZWsgdGhlcmUuIEkgdHVybiBmaWZ0ZWVuIGFuZCBteSB0ZWV0aCBhcmUgY2hhdHRlcmluZyBhdCB0aGUgY29udHJhc3QgZm9yIGhhbGYgdGhlIGRheSwgdW50aWwgYSBjbGFzc21hdGUgaW5jcmVkdWxvdXNseSBsZW5kcyBtZSBoaXMgamFja2V0Lik8L3A+XHJcbiAgICA8cD5XZSBhcmUgd2F0Y2hpbmcgYSBtb3ZpZSBpbiBvbmUgb2YgdGhlIHRocm93YXdheSBjbGFzc2VzIHdob3NlIHJlZGVlbWluZyBmZWF0dXJlcyBhcmUgZ2VuZXJhbGx5IG1vdmllcywgd2hlbiB0aGUgcHJvdGFnb25pc3QgcnVucyBvdXQgb250byB0aGUgZ3JlZW4sIGdyZWVuIGxhd24gb2Ygc29tZSBmYW1vdXMgY29sbGVnZSdzIG9sZCBBbWVyaWNhbiBidWlsZGluZy48L3A+XHJcbiAgICA8cD5UaGUgbWV0YWwgcm9vZiBvZiBteSBoaWdoIHNjaG9vbCdzIG5ldyBidWlsZGluZyAoaWYgd2UgY2FsbCBpdCBhIGhpZ2ggc2Nob29sLCBhcHByb3hpbWF0aW5nKSByYXR0bGVzIHdoZW4gaXQgcmFpbnMsIGFsdGhvdWdoIGl0J3Mgbm90IGN1cnJlbnRseSByYWluaW5nLjwvcD5cclxuICAgIDxwPk9uZSBvZiBteSBjbGFzc21hdGVzIHBvaW50cyBhbmQgc2F5cywgaW4gbXVjaCB0aGUgc2FtZSB0b25lIGFzIHBlb3BsZSBzdGFydGVkIGNpdGluZyA8aT5sYSBjcmlzaXM8L2k+IHdoZW4gdGhlIEFtZXJpY2FuIHJlY2Vzc2lvbiBtZWFudCB0aGV5IHN0b3BwZWQgZXhwb3J0aW5nIG91ciBlY29ub215J3Mgd29ydGggb2YgdG91cmlzdHMsIHRoYXQgd2Ugc2hlbGwgb3V0IHNvIG11Y2ggZm9yIHR1aXRpb24sIHNvIHdoeSBkb2Vzbid0IG91ciBzY2hvb2wgbG9vayBsaWtlIHRoYXQ/PC9wPlxyXG4gICAgPHA+VGhlIHRlYWNoZXIgY291bGQgY29tbWVudCBvbiBoaXN0b3J5LCBhbmQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIGEgbmV3IGJ1aWxkaW5nLiBTaGUgY291bGQgY29tZW1udCwgZXZlbiwgb24gZW52aXJvbm1lbnQ7IHdlIGhhdmUgYW4gZW52aXJvbm1lbnRhbGlzdCBjb21wb25lbnQgaW4gYW5vdGhlciBjbGFzcywgYWdncmVzc2l2ZWx5IHRoZW1lZCBhcm91bmQgbWFuZ3JvdmUgcHJlc2VydmF0aW9uLjwvcD5cclxuICAgIDxwPlRoaXMgaXMgbm90IHRoZSBzb3J0IG9mIHBlcnNvbiBzaGUgaXM7IHNoZSBpcyB0aGUgc29ydCBvZiBwZXJzb24gd2hvIHRlbGxzIHBhcmFibGVzIGFib3V0IHRoZSBmdW5kYW1lbnRhbCBkaWZmZXJlbmNlcyBpbiBiZWhhdmlvciBiZXR3ZWVuIGJ1Y2tldHMgb2YgTWV4aWNhbiBhbmQgQW1lcmljYW4gY3JhYnMuPC9wPlxyXG4gICAgPHA+U28gd2hhdCBzaGUgc2F5cyBpcyB0cnVlIHRvIGZvcm06IHNoZSBzYXlzLCB0aGF0J3MgYmVjYXVzZSB3ZSBsaXZlIGluIGEgdGhpcmQgd29ybGQgY291bnRyeSwgZGVhci48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Myc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IGVpZ2h0ZWVuLCBJIGhhdmUgbm90IHlldCBsZWFybmVkIHRoYXQsIHdoZW4gc29tZW9uZSB0ZWxscyBtZSB0aGV5IGRvbid0IHNwZWFrIFNwYW5pc2gsIHRoZXkgbWVhbiB0aGF0IHRoZXkgc3BlYWsgbm8gU3BhbmlzaC4gTWV4aWNvIG1hbmRhdGVzIGZvcmVpZ24gbGFuZ3VhZ2UgZWR1Y2F0aW9uIGFmdGVyIHNpeHRoIGdyYWRlOyBJIGhlYXIgYWJvdXQgcGVvcGxlIHdob3NlIHNjaG9vbHMgYXJlIGxhcmdlIGFuZCB1cmJhbiBhbmQgbW9uaWVkIGVub3VnaCB0byBoYXZlIGNob2ljZXMgb2YgbGFuZ3VhZ2VzLCBidXQgZXZlcnlvbmUgaGFzIHRoZSBvcHRpb24gb2YgRW5nbGlzaC4gVGhlcmUgYXJlIGZpdmUgdGhvdXNhbmQgcGVvcGxlIGluIG15IHRvd24gYW5kIHNpeCBodW5kcmVkIHRob3VzYW5kIGluIG15IHN0YXRlLiBUaGUgb25seSBvcHRpb24gaXMgRW5nbGlzaC4gPC9wPlxyXG4gICAgPHA+VGhlIG9ubHkgb3B0aW9uIHdhcyBFbmdsaXNoIGxvbmcgYmVmb3JlIHRoYXQsIGFueXdheTsgd2hlbiB0aGUgbW9uZXkgYW5kIHRoZSBtZWRpYSBhbmQgdGhlIHNoaXBwaW5nIGNvbWVzIGluIG9uZSBsYW5ndWFnZSwgeW91IHBpY2sgaXQgdXAuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM0KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlcmUncyBhIHNwZWNpZmljIGdlbmVyYXRpb24gb2YgU3BhbmlzaC1FbmdsaXNoIHNsYW5nIEkgaGF2ZSB0aGF0IEkgc3VzcGVjdCBpcyBkZWFkIGJ5IG5vdy4gSXQncyBhIG1pZHBvaW50OiB2b2NhYnVsYXJ5IHdpdGhvdXQgZ3JhbW1hciwga2V5d29yZHMgd2l0aG91dCBjb21wcmVoZW5zaW9uLiBIb3QgZG9ncyB2YXJ5IHdpbGRseSBiZXR3ZWVuIGNvdW50cmllcywgYW5kLCB3aXRoaW4gTWV4aWNvLS1ub3QgdGhhdCB5b3UnbGwga25vdyB0aGlzIG9ubGluZS0tYmV0d2VlbiBzdGF0ZXMsIGFuZCB0aHVzIEkgYW0gYXMgY29tbWl0dGVkIGFzIHlvdSBtaWdodCBleHBlY3QgdG8gdGhlIGFyZ3VtZW50IHRoYXQgbm8gb25lIGVsc2UgbWFrZXMgdGhlbSByaWdodDsgYXMgc3VjaCwgSSBoYXZlbid0IGhhZCBhIGhvdCBkb2cgc2luY2UgSSB3YXMgZWlnaHRlZW4uIDwvcD5cclxuICAgIDxwPlRoZSBjYXJ0IHdoZXJlIG15IGZhdGhlciBhbmQgSSB3ZXJlIHJlZ3VsYXJzIGhhZCBhIGh1cnJpY2FuZSBsYW1wIHdpdGggbm8gZ2xhc3MsIGZvciBhIHdoaWxlLCBhbmQgSSBsaWtlZCBzdGFuZGluZyBjbG9zZSBlbm91Z2ggdG8gdGhlIGNvb2tpbmcgc3VyZmFjZSB0byBnZXQgdGhlIHRpbmllc3QgcGl0dGVyLXBhdHRlciBvZiBob3Qgb2lsIG9uIG15IGFybXMuIDxpPkhhdGVzIEVsIEdcdTAwRkNlcm88L2k+LCBwYWludGVkIG9uIHRoZSB3aGl0ZSBzdXJmYWNlIGJ5IHRoZSBraW5kIG9mIGRyYWZ0c21hbiBJIHdhcyB0cmFpbmVkIHRvIGJlIGluIHNlY3VuZGFyaWEgYW5kIHdob3NlIHByb2Zlc3Npb24gaGFzbid0IGV4aXN0ZWQgaW4gdGhlIG5vcnRoIGZvciBnZW5lcmF0aW9uczogdGhlIDxpPmhvdCBkb2c8L2k+IHdhcyBpbXBvcnRlZCBiZWZvcmUgdGhlIEVuZ2xpc2ggYWRqZWN0aXZlLW5vdW4gb3JkZXIgY291bGQgZm9sbG93IHN1aXQuPC9wPlxyXG4gICAgPHA+QW5vdGhlciB3b3JkIEkgdXNlIGFzIGFuIGV4YW1wbGU6IDxpPm1hY2hcdTAwRURuPC9pPiwgYW4gYWxsLXB1cnBvc2UgaW50ZW5zaWZpZXIuIFdoZW4gRW5nbGlzaCBicm91Z2h0IDxpPm1hY2hpbmU8L2k+cyB0aGUgY2xlYXJlc3QgcG9pbnQgb2YgcmVmZXJlbmNlIGluIGNvbW1vbiAgZm9yIHRoZSByZWZlcmVudHMgb2YgdGhlIHdvcmQgd2FzOiBtb3JlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk1Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SW5kdXN0cmlhbGl6YXRpb24gdHJpY2tsZXMgZG93bi4gRW1pc3Npb25zIHRyaWNrbGUgZG93bi4gQ2xpbWF0ZSBjaGFuZ2UgcmVhY2hlcyB1cCwgZHJpZnRzLCBsaWtlIENhbGlmb3JuaWEgc21va2UsIGxpa2UgaXQncyBkb2dnaW5nIG15IGZvb3RzdGVwcy4gTGlrZSBpdCB3YW50cyB0byBkbyBhbnlvbmUncyBhYmlsaXR5IHRvIHRhbGsgdGhlIGJpZyBwaWN0dXJlIG91dCB0aGUgb3Bwb3NpdGUgb2YgYW55IGZhdm9ycy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Nic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPlRoZXJlIGlzIGFuIGFyZ3VtZW50IGFib3V0IG1heW9ubmFpc2UgSSBoYXZlIHdoZW5ldmVyIEkgY2FuLiBBbWVyaWNhbnMsIGFzIGEgbmF0aW9uYWwgcGFzdGltZSwgZW5qb3kgdGFraW5nIGNyZWRpdCBmb3IgdGhlIGNvbmNlcHQgYW5kIHRoZW4gbW9ub2xvZ3VpbmcgYWJvdXQgaG93IG11Y2ggdGhleSBoYXRlIGl0LiBUaGVyZSBpcyBhIGdlbmVyYWwgYXR0ZW1wdCB0byBlc3RhYmxpc2ggaXQgYXMgc3lub255bW91cyB3aXRoIHdoaXRlbmVzcyBpbiB0aGUgcmFjaWFsIHNlbnNlIGFzIG9wcG9zZWQgdG8gdGhlIHZpc3VhbCBvbmUuIEkgZG9uJ3Qga25vdyB3aG8gYmVuZWZpdHMgZnJvbSB0aGF0LCBidXQgaXQgbWFrZXMgdGhlIHByZWFtYmxlIHRvIEVuZ2xpc2gtbGFuZ3VhZ2UgcmVjaXBlcyBmb3IgSmFwYW5lc2UgcGFuY2FrZXMgZXhoYXVzdGluZy48L3A+XHJcbiAgICA8cD5JIGhhdmUgc3BlbnQgeWVhcnMgaXRlcmF0aW5nIG9uIHRoZSBhcmd1bWVudCB0aGlzIG1lYW5zIGhhdmluZywgd2hlbiBJIGNhbiBib3RoZXIuIE1heW9ubmFpc2UgaXMgY29tbW9uIHdoZXJlIEknbSBmcm9tLCBpbiB0aGUgZGVzZXJ0OiBtaXhlZCB3aXRoIG1pbGsgYXMgYSBmYXQgZm9yIGZyeWluZyBhbmQgYSB0b3BwaW5nIGZvciBzZWVtaW5nbHkgaGFsZiBvZiBhbGwgc2F2b3J5IGRpc2hlcyB5b3UgY2FuIHNoYWtlIGEgc3F1aXJ0IGJvdHRsZSBhdCBpdC48L3A+XHJcbiAgICA8cD5UaGF0J3MgZGlzZ3VzdGluZywgcGVvcGxlIHRlbGwgbWUgaW4gRW5nbGlzaCwgYW5kIHRoZXkgd291bGQgbGlrZSB0byBibGFtZSBhIHdoaXRlIHBlcnNvbiBmb3IgaXQuPC9wPlxyXG4gICAgPHA+TWF5b25uYWlzZSBpcyBhIHNoZWxmLXN0YWJsZSBlbXVsc2lvbiBvZiBlZ2dzIGFuZCBvaWwsIEkgdGVsbCB0aGVtLiBXaG8gb24gRWFydGggaGFzIHRoZSByZWZyaWdlcmF0ZWQgdHJ1Y2tzIHRvIHdhc3RlIG9uIHRoZSBhbHRlcm5hdGl2ZS4gSXMgdGhhdCByZWFsbHkgdGhlaXIgcHJlZmVycmVkIHJlc291cmNlIGFsbG9jYXRpb24uIElzIHRoYXQgc29tZXRoaW5nIHRoZXkgY29uc2lkZXIgd29ydGh3aGlsZSBmb3IgYSBwaWVjZSBvZiBzeW1ib2xpc20gdGhleSBtYWRlIHVwLjwvcD5cclxuICAgIDxwPlRoaXMgZG9lcyBub3QgYWN0dWFsbHkgZW5kIGFyZ3VtZW50czsgZm9yIG9uZSB0aGluZywgaXQgcmVxdWlyZXMgYW4gdW5kZXJzdGFuZGluZyBvZiBob3cgaGFyZCBhIHJlZnJpZ2VyYXRlZCB0cnVjayBoYXMgdG8gd29yayBmb3IgKHNheSkgYSB0aG91c2FuZCBtaWxlcyBvZiBkZXNlcnQgZHVlIHNvdXRoIG9uIHRoZSBIaWdod2F5IE9uZSBhcyBJIGtub3cgaXQuIEZvciBhbm90aGVyLCBpdCByZXF1aXJlcyBhbiB1bmRlcmx5aW5nIHVuZGVyc3RhbmRpbmcgb2YgcmVmcmlnZXJhdGlvbiwgYW5kIHRydWNrcywgYW5kIHJlZnJpZ2VyYXRlZCB0cnVja3MsIGFzIGxpbWl0ZWQgcmVzb3VyY2VzIHRvIGJlZ2luIHdpdGguIDwvcD5cclxuICAgIDxwPkJ1dCBpdCBkb2VzIHNvbWV0aW1lcyBtYWtlIGl0IG1vcmUgdG9sZXJhYmxlIHRvIGxpdmUgd2l0aC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5Nyc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgYW0gbm8gb2xkZXIgdGhhbiBlbGV2ZW4geWVhcnMgb2xkLCBhbmQgSSBhbSBhdHRlbXB0aW5nLCBhcyBJIG9mdGVuIGRvLCB0byBpZ25vcmUgbXkgbW90aGVyLiBUaGVyZSBpcyBhIGN1dHRpbmcgcXVhbGl0eSB0byBoZXIgdm9pY2UsIGFuZCBteSBicmFpbiBpcyB0dW5lZCB0byBpdCBtZWFuaW5nIGRhbmdlcjsgc28sIGFzIEkgYWxzbyBvZnRlbiBkbywgSSBhbSBmYWlsaW5nLiBJIHdvdWxkIGJlIGRvaW5nIGJldHRlciwgYnV0IEkgYW0gd2FpdGluZyBmb3IgaGVyIGluIHRoZSBjYXIgKHRydWNrOyBpdCB3aWxsIHRha2UgYXQgbGVhc3QgYSBkZWNhZGUgZm9yIG1lIHRvIHVuZGVyc3RhbmQgdGhhdCB0cnVja3MgYXJlIHN1cHBvc2VkbHkgbm90IGNhcnMpLCBhbmQgSSBoYXZlIHJ1biBvdXQgb2YgYm9va3MgdG8gZG8gaXQgd2l0aC4gPC9wPlxyXG4gICAgPHA+KFRoZXJlIGFyZSBub3QgcmVsZXZhbnQgbW9iaWxlIGRldmljZXMgaW4gbXkgbGlmZSB5ZXQ7IHdoZW4gSSBsZWF2ZSB0aGUgaG91c2UsIEkgZG8gc28gd2l0aCBvbmUgb3IgbW9yZSBib29rcy4gQXMgbXkgZmF0aGVyIHB1dHMgaXQsIGJhZCB0aGluZ3MgaGFwcGVuIHdoZW4geW91IGxlYXZlIHRoZSBob3VzZSB3aXRob3V0IGEgYm9vay4gSWYgd2UncmUgZ29pbmcgdG8gYSBjaXR5LCBJIGRvIHNvIHdpdGggYSBzdGFjayBpbiB0aGUgZm9vdHdlbGwuIFNvbWV0aW1lcywgYXMgbm93LCBJIHN0aWxsIHVuZGVyZXN0aW1hdGUgd2hhdCBjb3VsZCBiZSBlbm91Z2guKTwvcD5cclxuICAgIDxwPk15IG1vdGhlciBpcyBidXlpbmcgYWxmYWxmYSBmb3IgaG9yc2VzLCBwdWxsZWQgb3ZlciBieSB0aGUgc2lkZSBvZiB0aGUgcm9hZCB3aGVyZSBzaGUncyBtZXQgYSBtYW4gd2l0aCBhbiBlaWdodGVlbi13aGVlbGVyIHN0YWNrZWQgd2l0aCBpdC4gSSB3aWxsIHJlYWxpemUsIG11Y2ggbGF0ZXIsIHRoYXQgdGhpcyB3YXMgcHJvYmFibHkgc29tZSBsZXZlbCBvZiBjYXNoIHVuZGVyIHRoZSB0YWJsZTsgaXQgd2lsbCBub3Qgb2NjdXIgdG8gbWUgdW50aWwgYWR1bHRob29kIHRoYXQgdGhlIHRydWNrZXJzIGJyb3VnaHQgdGhlIHJlc3Qgb2YgdGhlIGJhbGVzIHRvIHN0b3Jlcywgd2hlcmUgcHJlc3VtYWJseSBwZW9wbGUgd291bGQgcGF5IGZvciB0aGVtLiBNeSBjb250ZXh0IGlzIGp1c3QgdGhpczogdGhlIGR1c3R5IHNpZGUgb2YgYSByb2FkLCBhIHBpY2t1cCB0cnVjaywgYSBmbGF0YmVkIGZ1bGwgb2YgcmVjdGFuZ3VsYXIgcHJpc21zIHRoYXQsIG1vcmUgYW5kIG1vcmUgb2Z0ZW4sIGFyZSBub3QgdGhlIHJpZ2h0IHNoYWRlIG9mIGdyZWVuLjwvcD5cclxuICAgIDxwPlNoZSBkZW1hbmRzIGhlIGxldCBoZXIgYnJlYWsgb3BlbiBhIGJhbGUgZm9yIGluc3BlY3Rpb24sIGFuZCB0aGVuIGZpbmRzIHdoYXQgc2hlIGFudGljaXBhdGVkLiBUaGlzIGlzIGRyeSwgc2hlIHNheXMsIG9mIHRoZSBzdGlmZiB5ZWxsb3cgb3V0c2lkZTsgdGhpcyBpcyB3ZXQsIG9mIHRoZSBwbGlhYmxlIGdyZWVuIGluc2lkZSwgdG9vIHdhdGVyLWRhcmsuIFRoZXkgaGF2ZSBwaWNrZWQgYW5kIGJhbGVkIGl0IHRvbyBzb29uLiBJdCdzIGdvaW5nIHRvIHJvdC48L3A+XHJcbiAgICA8cD5UaGUgbWFuIHNheXMgaXQncyB3aGF0IGhlIGhhcywgd2hpY2ggaXMgb2J2aW91c2x5IHRydWUuIEl0J3MgYWJvdXQgdGhlIGZvcmVzaG9ydGVuaW5nIG9mIHRoZSBncm93aW5nIHNlYXNvbjsgZHJvdWdodCBhbmQgaGVhdCBhbmQgaHVycmljYW5lcyB0aGF0IGNvbWUgd2hlbiB0aGV5J3JlIG5vdCBzdXBwb3NlZCB0bywgd2hpY2ggaXMgdG8gc2F5IHRoZSBzYW1lIHRoaW5nIHRocmljZS4gVGhlIHN0ZW1zIGFuZCBsZWF2ZXMgYXJlIHBhY2tlZCBpbnRvIGJhbGVzIHRvbyBlYXJseSBvciB0b28gbGF0ZS4gU2hlJ3MgcmlnaHQgdGhhdCB0aGV5IG1vbGRlci4gSGUncyByaWdodCB0aGF0IGl0J3Mgbm90IGxpa2UgdGhlIGZhcm0gZ2F2ZSBoaW0gYW55dGhpbmcgZWxzZS4gSW4gYSBjb3VwbGUgbWludXRlcyB0aGV5J2xsIG1vdmUgb24gdG8gaGFnZ2xpbmcgYWJvdXQgc3Bpa2VzIGluIHByaWNlLjwvcD5cclxuICAgIDxwPkkga25vdyB0aGlzLiBJIHBpY2sgdXAgdGhlIGJvb2sgc2hlJ3MgYnJvdWdodCB3aXRoIGhlciBmcm9tIHRoZSBjZW50ZXIgY29uc29sZSwgdG8gc2VlIGlmIEkgY2FuIHR1bmUgdGhlIG9uZ29pbmcgbmVnb3RpYXRpb25zIGJldHRlciByZWFkaW5nIGl0LiBUaGUgY2hhbmdlIG9mIHNlYXNvbnMgaXMgdGVuIHllYXJzIG91dCBmcm9tIGNvbWluZyBOb3J0aCBlbm91Z2ggdG8gbWFrZSB0aGUgbmV3cywgdGhvdWdoIHRoZXkgaW5ldml0YWJseSBkby48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzOCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5OCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkF0IHR3ZW50eS1maXZlIEkgcGljdHVyZSB0aGUgaGVhdCBkb21lIG92ZXIgS2luZyBDb3VudHkgbGl0ZXJhbGx5IGVub3VnaDogbGlrZSBhIGdyZWF0IGhhbmQgaGFzIHJlYWNoZWQgb3ZlciBhbmQgZGVsaWNhdGVseSBwbGFjZWQgYSBnbGFzcyBwb3QgbGlkIG92ZXIgdGhlIGxhbmQsIHdpdGggYWxsIHRoZSBjYXB0dXJlZCBzdGVhbSB0aGF0IGVudGFpbHMuIDwvcD5cclxuICAgIDxwPkl0IGhhcyBjb21lIHRvIG15IGF0dGVudGlvbiB0aGF0IG5vIG9uZSBoZXJlIGJ1aWx0IGNlaWxpbmcgZmFucyBpbnRvIHRoZWlyIGhvdXNlcy4gSSBkb3VibGUgdGhlIG51bWJlciBvZiBmYW5zIGluIG91ciBhcGFydG1lbnQsIG1hdHRlciBvZiBmYWN0OyB0aGVuIEkgdHJpcGxlIGl0LiBJIHJ1biBzbGlnaHRseSBidXQgY3J1Y2lhbGx5IGFoZWFkIG9mIHRoZSBzdWJzZXF1ZW50IHJ1biBvbiBmYW5zIGluIHN0b3Jlcywgd2hlbiBwZW9wbGUgdW5kZXJzdGFuZCB3aGF0J3MgZ29pbmcgb24gYXJvdW5kIHRoZW0uPC9wPlxyXG4gICAgPHA+TXkgcGFydG5lcidzIHBhcmVudHMnIGhvdXNlIGhhcyBhaXIgY29uZGl0aW9uaW5nLiBIaXMgbW90aGVyIHBvaW50cyBvdXQgdGhhdCB0aGlzIHB1dHMgdGhlbSBpbiBhIHRoaXJkIG9mIFNlYXR0bGUgYXJlYSByZXNpZGVuY2VzLiBIZSBhbmQgSSBhbmQgaGlzIHNpc3RlciB2aXNpdCwgaW4gc29tZSBkZXNwZXJhdGlvbjogdGhyZWUgaG91c2Vob2xkcyB0b3RhbCwgcHJvcG9ydGlvbmF0ZS4gVGhleSBkbyBub3QgaGF2ZSBmYW5zOyBJIGFtIGJhZmZsZWQuIFRoaXMgaXMgd2hlbiBJIG5vdGljZSB0aGF0IHRoZXkgZG9uJ3QgaGF2ZSBhIGNlaWxpbmcgZmFuLiBJIHRyeSB0byBiZSBtb3JlIG9ic2VydmFudCB0aGFuIHRoYXQsIGJ1dCBpdCBoYWRuJ3Qgb2NjdXJyZWQgdG8gbWUgdG8gc2VlIGEgY2VpbGluZyB3aXRob3V0IG9uZS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGtub3cgdGhlc2UgdGVtcGVyYXR1cmVzIHRoZSB3YXkgbXkgbG92ZWQgb25lcyBkbyBub3QsIGJ1dCBJIGRpZG4ndCBsaWtlIHRoZW0gYW55IGJldHRlciB3aGVuIEkgd2FzIHlvdW5nZXIuIEkgd2VhciBtb3JlIGxheWVycyBub3csIGJ5IG1lZGljYWwgbmVjZXNzaXR5LCBhbmQgYW0gbGVzcyBhY2NsaW1hdGVkLCB0cmFkaW5nIHRoZSBwbGFjaWQgcmVzaWduYXRpb24gdG8gc3VtbWVyIGNvbW11dGVzIGF0IDEyMEYgKHRoZSBjYXIgaGFkIGJyb2tlbiwgbXkgZmlyc3Qgc3VtbWVyIGluIHBlcmhhcHMtaGlnaCBzY2hvb2wsIGluIHN1Y2ggYSB3YXkgYXMgbWVhbnQgb25lIGhhZCB0byBydW4gdGhlIGhlYXRlciBpbiBvcmRlciB0byBpZGxlIGl0LCB3aGljaCBkaWRuJ3QgaGVscCkgZm9yIHRvbGVyYXRpbmcgc25vdy4gVGhlIHVwc2hvdCBpcyB0aGF0IEkgYW0gbW9yZSBmdW5jdGlvbmFsIGJ1dCBwb29ybHkgZnVuY3Rpb25pbmc7IEkgZG9uJ3QgcmVhbGl6ZSB1bnRpbCBsYXRlciB3aHkgSSdtIG5vdCBlYXRpbmcgb3Igc2xlZXBpbmcsIGFuZCB0aGVuIEkgcmVtZW1iZXIuPC9wPlxyXG4gICAgPHA+SSBhZGQgYWlyIGNvbmRpdGlvbmluZyB0byB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIG91ciBuZXh0IGFwYXJ0bWVudCwgbG9uZyBzaG90IHRoYXQgaXQgaXMuIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkhlcmUsIGZvciB0aGUgc2Vjb25kIHRpbWU6IFR1ZXNkYXkuIDIwMjIuIEZlYnJ1YXJ5LiBJbmNyZWFzaW5nbHkgaGVhdnkgc25vdywgd2hpdGVyIHRoYW4gbXkgcGFydG5lcidzIGtudWNrbGVzIG9uIHRoZSBzdGVlcmluZyB3aGVlbC48L3A+XHJcbiAgICA8cD5cIkkgaGF0ZSB0aGlzLFwiIGhlIHNheXMsIG5vdCBmb3IgdGhlIGZpcnN0IHRpbWUuPC9wPlxyXG4gICAgPHA+XCJJdCdzIGJlYXV0aS0tSSdtIHNvcnJ5LFwiIEkgc2F5LCB0byBteSBwYXJ0bmVyLCB3aG8ncyB0aGUgb25lIHdobyBoYXMgdG8gZHJpdmUgdGhyb3VnaCBpdC4gQXMgdGhlIHRyZWVzIHdlIHBhc3MgYnkgYXJlIHJlbmRlcmVkIGludG8gYmxhY2sgYW5kIHdoaXRlIHN0cmFpZ2h0IGxpbmVzLCByZWFjaGluZyBvdXQgdG8gbWUuIFwiSSBzdGlsbCB0aGluayBpdCdzIGJlYXV0aWZ1bCwgSSdtIHNvcnJ5LlwiIDwvcD5cclxuICAgIDxwPlRoZSB1cmdlIHRvIGFwb2xvZ2l6ZSBpcyBiZWNhdXNlIGhlJ3Mgc3RyZXNzZWQuIEkga25vdyB0aGlzIG1ha2VzIGl0IGRpZmZpY3VsdCwgZXZlbiB3aXRob3V0IHRoZSBjb3VudGVyd2VpZ2h0IG9mIGEgc3dhdGhlIG9mIG91ciBmb3JtZXIgYXBhcnRtZW50LCB0byBkcml2ZS4gSSBzYXcgdGhlIGFkdmlzb3J5IGFib3V0IGJsYWNrIGljZSBmaXJzdCBiZXR3ZWVuIHRoZSB0d28gb2YgdXMuIEkga25vdyBmaXZlIHdpbnRlcnMgd29ydGggb2Ygd2hhdCBzbm93IGRvZXMgdG8gU2VhdHRsZSwgd2hlcmUgdGhlIHdpbnRlciB3ZWF0aGVyIGlzIG5vdCBzdXBwb3NlZCB0byBzbm93LiA8L3A+XHJcbiAgICA8cD5BbmQgYmVjYXVzZSBJIHRydXN0IGhpbSBlbm91Z2ggdG8gY29tbWVudCBvbiB0aGUgYmVhdXR5LCB0aGUgcG9pbnQgb2YgdmlldyB0aGF0IGJlaW5nIGEgcGVycGV0dWFsIHBhc3NlbmdlciBjYW4gYWZmb3JkIG1lLiBIZSBrbm93cyB3aGF0IGhlIGNob3NlIHRvIG1hcnJ5OyBJIGNhbiBhZmZvcmQgdG8gYmx1cnQgb3V0IG15IGZlZWxpbmdzIG9uIHByZWNpcGl0YXRpb24uIEkgdHJ5IHRvIG1lbW9yaXplIGl0LCBzbm93IG5lYXIgbWlkbmlnaHQgaW4gYSBtb3ZpbmcgY2FyLCBmb3IgbGF0ZXIuIEZvciB0aGlzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eTEnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JJ20gbm90IHNvcnJ5IHRoYXQgaGUgY2FuJ3Qgc2hhcmUgaGlzIHdlYXRoZXIgYXMgaGUgbWVhbnMgaXQgdG8gYmUgd2l0aCBtZSwgbm90IHVubGVzcyBJIHRoaW5rIGFib3V0IGl0LiBObyBvbmUncyBiZWVuIGFibGUgdG8gZG8gdGhhdCwgYW55d2hlcmUgSSBnbywgaW4gbXkgZW50aXJlIGFkdWx0IGxpZmUuIEkgZG9uJ3Qga25vdyBob3cgb25lIHdvdWxkIHN0YXJ0LjwvcD5cclxuICAgIDxwPkJ1dCBJIGRvIGtub3csIHdoZW4gSSB0aGluayBhYm91dCBpdCwgdGhhdCB0aGF0J3MgYmVpbmcgc3RvbGVuIGZyb20gaGltIGJ5IGF0dHJpdGlvbjsgd2UgdGFsayBhYm91dCBmbG9vZCByaXNrIHdoZW4gd2UgdGFsayBhYm91dCBvdXIgbG9uZy10ZXJtIGZ1dHVyZSwgYWJvdXQgU2VhdHRsZSBhbmQgaXRzIHNlYSBsZXZlbCwgYWJvdXQgdGhlIGluZXZpdGFiaWxpdHkgb2YgbW92aW5nIGlubGFuZCB3aGVuIHdlIGxpdmUgbG9uZyBlbm91Z2ggdG8gZG8gc28uIChJIHRlbGwgaGltIEkndmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgdGhlIFR3aW4gQ2l0aWVzJyBhYmlsaXR5IHRvIG1haW50YWluIGEgZGVjZW50IHJhbXAuIFByZWNpcGl0YXRpb24ga2lsbHMgcGF2ZW1lbnQsIHRoZSB3YXkgd2F0ZXIgY2FuIGtpbGwgYW55dGhpbmcuKSBVbmRlcmdpcmRpbmcgaXQgYWxsOiB3ZSdyZSBub3QgZ2l2aW5nIHVwIG9uIGhpcyBob21lIGFuZCBmYW1pbHkgYW55IHRpbWUgc29vbiwgYnV0IHdpdGhpbiBvdXIgbGl2ZXMgd2UgZnVsbHkgZXhwZWN0IHRvIGRvIHNvLCBhcyBtYXR0ZXIgb2YgZmFjdCBhcyBnaXZpbmcgaGltIG15IG1lZGljYWwgcG93ZXIgb2YgYXR0b3JuZXkuPC9wPlxyXG4gICAgPHA+PGk+VGhpbmdzIGFyZSBqdXN0IGdvaW5nIHRvIGtlZXAgaGFwcGVuaW5nIHdoaWxlIHlvdSdyZSBub3QgaGVyZSw8L2k+IG15IGZhdGhlciBzYWlkLiBSYWluIGNyZWVwcyB1bmRlciByb2FkcyBhbmQgc2lkZXdhbGtzIGJhY2sgaG9tZSwgd2hlbiB0aGV5J3JlIHBhdmVkLCBhbmQgcHVsbHMgdGhlbSBpbnRvIGNyYXRlcnMuIFNlYXR0bGUgaGFyZGx5IGVzY2FwZXMgcG90aG9sZXMgaXRzZWxmLiBCdXQgeW91IHdvdWxkbid0IGtub3cgdGhhdCBmcm9tIHRoZSBtZWRpYSwgaWYgeW91ciB2YW50YWdlIHBvaW50IGlzIGEgdGhpcmQtd29ybGQgY291bnRyeS48L3A+XHJcbiAgICA8cD5JIG1lYW50LCB5ZWFyIG9uIHllYXIgb24geWVhciwgdG8gZ28gYmFjayB0byBNZXhpY28uIE5vdCBob21lOyBub3Qgb25jZSBJJ2QgZGlzY292ZXJlZCB0aGUgbHV4dXJpZXMgb2YgcHVibGljIHRyYW5zcG9ydGF0aW9uIHRoYXQgY291bGQgZmVycnkgbWUgd2l0aG91dCBmYXZvcnMgdG8gZG9jdG9ycyBJIHNlZSBmb3IgdGhlIHNhbWUgcmVhc29ucyBJIGNhbid0IGRyaXZlIGFuZCBmb3Igb3RoZXIgdGhpbmdzIGFsaWtlLiBCdXQgRC5GLiwgb3IgR3VhZGFsYWphcmEuIExpdHRsZSBsZXNzIGFsaWVuIHRoYW4gaGVyZSwgYnV0LS1pZiBJIGNvdWxkIGp1c3QgZmluaXNoIG15IGRlZ3JlZSwgc29tZWRheS0tbW9yZSBidXlpbmcgcG93ZXIuPC9wPlxyXG4gICAgPHA+QnV0IHRvIGdldCBvdXQgb2YgT2hpbyBJIGZvbGxvd2VkIG15IHBhcnRuZXIgaG9tZSwgYW5kIGhlIGhhcyBmYW1pbHkgaGVyZS4gV2hlcmUgdGhlcmUncyBydW5uaW5nIHdhdGVyIGFzIGEgbWF0dGVyIG9mIGNvdXJzZSwgYW5kIHlvdSBjYW4gZHJpbmsgaXQsIGlmIHlvdSB3YW50LCB3aGVuIHlvdSBuZWVkIHNvbWV0aGluZyB3aXRoIHdoaWNoIHRvIHN3YWxsb3cgbWVkaWNhdGlvbiB0aGF0IGNhbWUgaW4gdGhlIG1haWwuPC9wPlxyXG4gICAgPHA+QW5kIG5vdyBJIHB1dCBkb3duIHJvb3RzIGFzIHRoZWlyIHJlc2VtYmxhbmNlIHRvIGhpcyBtb2RlbCBvZiB0aGUgY2l0eSBoZSBicm91Z2h0IG1lIHRvIGVyb2Rlcy4gV2ludGVyIHNub3dzOyBzdW1tZXIgYnVybnMuIEkgZG9uJ3Qga25vdyBhbnkgZGlmZmVyZW50LCBhbmQgb25seSBiZWxhdGVkbHkgd29uZGVyIGlmIGhlJ3Mgd2FudGVkIG1lIHRvLiBIaXMgcGFyZW50cyBoYXZlIGEgbGF3bjsgdGhlIEdyZWF0ZXIgU2VhdHRsZSBvZiBoaXMgY2hpbGRob29kIGlzIGFwcHJveGltYXRlbHkgYXMgYWxpZW4gdG8gbWUsIGluIGJvdGggd2F5cywgYW5kIHVuYXZhaWxhYmxlIGFzIGEgYmFja2Ryb3AuIFdoYXQgSSd2ZSBsb3N0IGFsb25nIHRoZSBzYW1lIGxpbmVzIGlzIGFuIHVua25vd24uIEkgd2FudCB0byBzaG93IGhpbSBPY3RvYmVyLCB0aG91Z2ggSSBkb24ndCBrbm93IGhvdyBtdWNoIE9jdG9iZXIncyBsZWZ0IHRvIHNob3cuIEkgZG9uJ3QgZmVlbCBpdCwgdGhvdWdoLCBhYnNlbnQgdGhhdCBleHBlcmllbmNlIG9mIGFjdHVhbGx5IGtub3dpbmcgd2hhdCBoYXNuJ3Qgc3Vydml2ZWQgbXkgY2hpbGRob29kIGVpdGhlci48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmU0MigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZm9ydHkyJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSd2ZSBsaXZlZCBsb25nZXIgaW4gU2VhdHRsZSB0aGFuIGFueXdoZXJlIGVsc2UgaW4gdGhlIFVuaXRlZCBTdGF0ZXMsIGJ1dCBub3QgbG9uZyBlbm91Z2ggdG8gbG9zZSB0aGluZ3MgdG8gdGhlIHByZXNlbnQuIEkgZG9uJ3QgaGF2ZSBhbiBpZGVhIG9mIHBhdHRlcm5zIGFib3V0IGl0LCBzYXZlIGluIHRoZSBicm9hZGVzdCBvZiBzZW5zZXM7IHRoaXMgaXMgd2hhdCBJIGtub3cuIDwvcD5cclxuICAgIDxwPkkgY2hlY2sgdGhlIHdlYXRoZXIuIFBlb3BsZSBhc2sgaWYgaXQgdG9ybWVudHMgbWUsIGFzIHRoZSBQYWNpZmljIE5vcnRod2VzdCBpcyBleHBlY3RlZCB0byBkby4gTXkgZmF2b3JpdGUgd2VhdGhlciBpcyBmb2c6IHRoZSBjbG9zZXN0IHlvdSBnZXQgdG8gZG9tZXN0aWNhdGluZyB0aGUgZXllIG9mIGEgaHVycmljYW5lLjwvcD5cclxuICAgIDxwPkkgZG9uJ3QgdGVsbCB0aGVtIEknbSBmcm9tIGEgZGVzZXJ0LS1JIGRvbid0IGNhcmUgZm9yIHBzeWNob2FuYWx5c2lzLS1idXQgSSB0ZWxsIHRoZW0gSSBsaWtlIHByZWNpcGl0YXRpb24uPC9wPlxyXG4gICAgPHA+QWxsIG9mIGl0LiBBbHdheXMuIEV2ZW4gdGhlIHNub3cuPC9wPlxyXG4gICAgPHA+XCJJJ20gc29ycnksXCIgSSBzYXksIGZvciBsYWNrIG9mIGFueXRoaW5nIGVsc2UgdG8gZG8uPC9wPlxyXG4gICAgPHA+XCJJdCBpc24ndCA8aT55b3VyPC9pPiBmYXVsdCxcIiBoZSBzYXlzLiBcIkkganVzdCB3aXNoIGl0IGNvdWxkJ3ZlIHdhaXRlZC5cIiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9haXJzcGFjZS5jc3MnXHJcbmltcG9ydCBMZXRTYXkgZnJvbSAnLi4vcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXknXHJcbi8vTWF5IGFkZCBwb2VtIGZvciBwdW5jaCwgbGF0ZXIuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhZGF0YSgpIHtcclxuIHJldHVybiAoIFxyXG4gIDxkaXYgaWQ9J21ldGFkYXRhJz5cclxuICAgPGRpdiBpZD0ncHJvamVjdCcgY2xhc3NOYW1lPSdjcmVkaXRzIGFib3V0Jz48aDM+QWJvdXQgPGk+d2hhdCB0aGUgd2VhdGhlciBkb2Vzbid0PC9pPjwvaDM+XHJcbiAgIDxwPlRoaXMgZXNzYXkgd2FzIGZpcnN0IGNvbXBvc2VkIGFzIGEgZmluYWwgcHJvamVjdCBmb3IgQ0hJRCA0ODAtQSBcIlVwc2lkZSBEb3duIFRoaW5raW5nIFdpdGggdGhlIEdsb2JhbCBTb3V0aFwiLCB3aW50ZXIgcXVhcnRlciAyMDIyLCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBXYXNoaW5ndG9uLiBXaXRoIHRoZSBleGNlcHRpb24gb2Ygc3BlY2lmaWMgZXBpZ3JhcGhzIGFuZCBxdW90ZXMgKHNlZSBiZWxvdyksIGFsbCBjb250ZW50IHdhcyBwcm9kdWNlZCBieSBDeXJ1cyBFb3NwaG9yb3MuIFZlcnNpb24gMS4wIGlzIGxpdmUgYXMgb2YgTWFyY2ggMTgsIDIwMjI7IHRlY2huaWNhbCBpbXByb3ZlbWVudHMgYXJlIHBsYW5uZWQgYnV0IHRoZSBjb3JlIGNvbnRlbnQgYW5kIHByZXNlbnRhdGlvbiBpcyBpbiBwbGFjZS4gSWYgaXQgaW50ZXJlc3RzIHlvdSB0byBkbyBzbywgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2N5cnVzYWUvb2NlYW5zaWRlJz50aGUgc291cmNlIGNvZGUgY2FuIGJlIHZpZXdlZCBvbiBHaXRIdWI8L2E+LjwvcD48L2Rpdj5cclxuICAgPGRpdiBpZD0nbWUnIGNsYXNzTmFtZT0nY3JlZGl0cyBhYm91dCc+PGgzPkFib3V0IHRoZSBhdXRob3I8L2gzPlxyXG4gICA8cD5DeXJ1cyBFb3NwaG9yb3MgaXMgaGF2aW5nIGEgdGltZSBvZiBpdCBhdCBhbGwgcG9zc2libGUgdGltZXMuIE1vcmUgd29yaywgbGlrZSBhbmQgdW5saWtlIDxpPndlYXRoZXI8L2k+IGFsaWtlLCBjYW4gYmUgZm91bmQgYW5kIHN1cHBvcnRlZCA8YSBocmVmPSdodHRwczovL3BhdHJlb24uY29tL2Vvc3Bob3Jvcyc+b24gaGlzIFBhdHJlb248L2E+IGZvciBub3cuIE90aGVyIHRlY2huaWNhbCBwcm9qZWN0cyBoYXZlIGEgaG9tZSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vY3lydXNhZSc+b24gR2l0SHViPC9hPiBhbG9uZ3NpZGUgdGhpcyBvbmUuIEhlIGFsc28gaGFzIDxhIGhyZWY9J2h0dHBzOi8vdmlzdWFsaXR5LmNhcnJkLmNvJz50aGlzIGNvb2wgdmlydHVhbCBidXNpbmVzcyBjYXJkPC9hPiBmb3IgaG9wZWZ1bGx5IHJlbWVtYmVyaW5nIHRvIHVwZGF0ZSBpbXBvcnRhbnQgZGF0YSB3aXRoLjwvcD48L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0cycgY2xhc3NOYW1lPSdjcmVkaXRzIHNvdXJjZXMnPjxoMz5DcmVkaXRzIGFuZCB0aGlyZCBwYXJ0eSBzb3VyY2VzPC9oMz5cclxuICAgPGg1PlRleHQ8L2g1PlxyXG4gICBQb2VtcyBxdW90ZWQ6XHJcbiAgIDx1bD5cclxuICAgIDxsaT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIiBieSBDcmFpZyBTYW50b3MgUGVyZXo8L2xpPlxyXG4gICAgPGxpPlwiTGV0IFRoZW0gTm90IFNheVwiIGJ5IEphbmUgSGlyc2hmaWVsZDwvbGk+XHJcbiAgICA8bGk+XCJXQVZFIEFGVEVSIFdBVkVcIiBieSBNLiBCYXJ0bGV5IFNlaWdlbDwvbGk+XHJcbiAgICA8bGk+XCJObyBMb25nZXIgT2RlXCIgYnkgVXJheW9cdTAwRTFuIE5vZWw8L2xpPlxyXG4gICA8L3VsPlxyXG4gICBPdGhlciBzb3VyY2VzOlxyXG4gICA8dWw+S3lsZSBXaHl0ZSwgXCJCcmFpZGluZyBLaW5zaGlwIGFuZCBUaW1lXCIgKGxlY3R1cmUgb24gSW5kaWdlbm91cyBjbGltYXRlIGp1c3RpY2UpPC91bD5cclxuICAgPGg1PkltYWdlczwvaDU+XHJcbiAgIDxwPkNsaW1hdGUgc3RyaXBlcyBnZW5lcmF0ZWQgdmlhIDxhIGhyZWY9J2h0dHBzOi8vc2hvd3lvdXJzdHJpcGVzLmluZm8nPlNob3cgWW91ciBTdHJpcGVzPC9hPi48L3A+XHJcbiAgIDxwPlRvZG9zIFNhbnRvcyBwaG90b2dyYXBocyBjb3B5cmlnaHQgSG93YXJkIEVrbWFuLCB1c2VkIHdpdGggcGVybWlzc2lvbi48L3A+XHJcbiAgIDxwPlNlYXR0bGUgc21va2Ugc3VtbWVyIHBob3RvZ3JhcGhzIGRlcGljdCB0aGUgQ2hpaHVseSBTY3VscHR1cmUgR2FyZGVuIGF0IFNlYXR0bGUgQ2VudGVyIGFuZCBhcmUgYnkgdGhlIGF1dGhvci48L3A+XHJcbiAgIDxwPk1hcCB2aWEgR29vZ2xlIE1hcHMuIEltYWdlcnkgY29weXJpZ2h0IERhdGEgU0lPLCBOT0FBLCBVLlMuIE5hdnksIE5HQkEsIEdFQkNPLCBMYW5kc2F0L0NvcGVybmljdXMsIElCQ0FPLiBNYXAgZGF0YSBjb3B5cmlnaHQgSU5FR0kgYW5kIEdvb2dsZS48L3A+XHJcbiAgIEltYWdlIGFzc2V0cyBmcm9tIFBOR3RyZWU6XHJcbiAgIDx1bD5cclxuICAgIDxsaT48YSBocmVmPSdodHRwczovL3BuZ3RyZWUuY29tL2ZyZWVwbmcvaGVhdnktc25vd18zNzIzOTU0Lmh0bWwnPlwiaGVhdnkgc25vd1wiIGJhY2tncm91bmQ8L2E+PC9saT5cclxuXHJcbiAgIDxsaT48aT5GcmFtZXMgdXNlZCBmb3IgXCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI6PC9pPlxyXG4gICA8dWw+XHJcbiAgICA8bGk+Qmx1ZSBzbW9rZSBmcmFtZSAjMTwvbGk+XHJcbiAgICA8bGk+Qmx1ZSBzbW9rZSBmcmFtZSAjMjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9wbmd0cmVlLmNvbS9mcmVlcG5nL2JsdWUtc21va2UtYWJzdHJhY3QtZnJhbWUtYXJ0LWZyZWUtcG5nLWFuZC1wc2RfNTUxMjgxNC5odG1sJz5CbHVlIHNtb2tlIGZyYW1lICMzPC9hPjwvbGk+XHJcbiAgIDwvdWw+PC9saT5cclxuICAgPGxpPjxpPkZyYW1lcyB1c2VkIGZvciBvdGhlciBxdW90ZXM6PC9pPlxyXG4gICA8dWw+XHJcbiAgICA8bGk+UmVkIGFuZCBibGFjayBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+RGFyayBibHVlIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5QdXJwbGUgd2F0ZXJjb2xvciBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+Q29vbCBjb2xvcnMgc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPkNpcmN1bGFyIGN5YW4gZnJhbWU8L2xpPlxyXG4gICA8L3VsPjwvbGk+XHJcbiAgIDwvdWw+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J3Jlc3BlY3RzJyBjbGFzc05hbWU9J2NyZWRpdHMgYWJvdXQnPjxoMz5BY2tub3dsZWRnbWVudHM8L2gzPlxyXG4gICBTcGVjaWZpYyB0aGFua3MgdG86XHJcbiAgIDx1bD5cclxuICAgIDxsaT5UaGUgPGEgaHJlZj0naHR0cHM6Ly9lc3NlbnRpYWwtcmFuZG9tbmVzcy50dW1ibHIuY29tL3Bvc3QvNjc3MjkzMDE0NTM0NzUwMjA4L2hpLWNhbi15b3UtZWxhYm9yYXRlLW9uLXRoZS1zcGFjZS10aGF0cy1iZWluZyc+RmFuZG9tIENvZGVycyBEaXNjb3JkIHNlcnZlcjwvYT4sIGZvciB0ZWNobmljYWwgYW5kIG1vcmFsIHN1cHBvcnQ8L2xpPlxyXG4gICAgPGxpPlByb2ZlIFRvbnksIGZvciBsZXR0aW5nIG1lIGdldCBhd2F5IHdpdGggdGhpcyBpbiB0aGUgZmlyc3QgcGxhY2U8L2xpPlxyXG4gICA8L3VsPjwvZGl2PlxyXG4gICA8TGV0U2F5IC8+XHJcbiAgIDxkaXYgaWQ9J2dvYmFjayc+PGEgaHJlZj0nLyc+QmFjayB0byB0aGUgZXNzYXk8L2E+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKSB9XHJcblxyXG4vKiBMYXRlcjpcclxuICAgXHJcbiAgIDxwPkFlcmlhbCBjbGltYXRlIHBob3RvZ3JhcGhzIGJ5IE5BU0EuPC9wPlxyXG5cclxuICAgICAgIDxsaT5CbGFjayBjbG91ZHMgYmFja2dyb3VuZDwvbGk+XHJcbiAgICA8bGk+QmxhY2sgbWlzdCBiYWNrZ3JvdW5kICMxPC9saT5cclxuICAgIDxsaT5CbGFjayBtaXN0IGJhY2tncm91bmQgIzI8L2xpPlxyXG4gICAgPGxpPkZpcmUgYW5kIHNwYXJrcyBiYWNrZ3JvdW5kPC9saT5cclxuKi8iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0U2F5KCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J0xldFNheScgY2xhc3NOYW1lPSdwb2VtJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfbGV0c2F5Jz5cclxuICAgPGltZyBzcmM9Jy9yZWRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIC8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkxldCB0aGVtIHNheSwgYXMgdGhleSBtdXN0IHNheSBzb21ldGhpbmc6PC9wPlxyXG4gICAgPHA+QSBrZXJvc2VuZSBiZWF1dHkuPGJyLz5cclxuICAgIEl0IGJ1cm5lZC48L3A+XHJcbiAgICA8cD5MZXQgdGhlbSBzYXkgd2Ugd2FybWVkIG91cnNlbHZlcyBieSBpdCw8YnIvPlxyXG4gICAgcmVhZCBieSBpdHMgbGlnaHQsIHByYWlzZWQsPGJyLz5cclxuICAgIGFuZCBpdCBidXJuZWQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCcgaWQ9J2NyZWRfbGV0c2F5Jz5cclxuICAgIEphbmUgSGlyc2hmaWVsZCw8YnIvPjxjaXRlPlwiTGV0IFRoZW0gTm90IFNheVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2ZlZXQnPlxyXG4gICA8ZGl2PjxhIGhyZWY9Jy9tZXRhZGF0YS9jcmVkaXQnPkFib3V0PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBGcmFnbWVudHMgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29hc3RsaW5lLmNzcydcclxuaW1wb3J0IHsgR2xhY2llckEsIEdsYWNpZXJCLCBHbGFjaWVyQyB9IGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tZ2xhY2llclwiO1xyXG5pbXBvcnQgV2hhbSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IERlZmluZSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZVwiO1xyXG5pbXBvcnQgT2RlIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tb2RlXCI7XHJcbmltcG9ydCBHYXJkZW4gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiO1xyXG5pbXBvcnQgV2luU3VtIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0td2luc3VtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nb2NlYW5zaWRlJz5cclxuICAgPG1haW4gaWQ9J3dhdGVyJz5cclxuICAgIDxkaXYgaWQ9J2JlYWNoJz5cclxuICAgICA8RnJhZ21lbnRzIC8+XHJcbiAgICAgPGRpdiBpZD0ncHJlcHJla2ljayc+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9tYWluPlxyXG4gICA8ZGl2IGlkPSdwcmVraWNrJz48L2Rpdj5cclxuICAgPFdoYW0gLz5cclxuICAgPEZvb3RlciAvPlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufVxyXG4iLCAiLy8gY29uc3QgYSA9IFJhdzEudmFsdWUoKTtcclxuaW1wb3J0IFNjZW5lMDEgZnJvbSAnLi9mcmFnbWVudHMvMDEnO1xyXG5pbXBvcnQgV2FzaGluZ3RvbiBmcm9tICcuL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbic7XHJcbmltcG9ydCBCIGZyb20gJy4vZnJhZ21lbnRzL0InO1xyXG5pbXBvcnQgQyBmcm9tICcuL2ZyYWdtZW50cy9DJztcclxuaW1wb3J0IEQgZnJvbSAnLi9mcmFnbWVudHMvRCc7XHJcblxyXG5cclxuZnVuY3Rpb24gRnJhZ21lbnRzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICA8U2NlbmUwMSAvPlxyXG4gICA8QiAvPlxyXG4gICA8QyAvPlxyXG4gICA8RCAvPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudHMiLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdoYW0oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J2tpY2tlcic+XHJcbiAgIDxkaXYgaWQ9J2tpbWcnPjxpbWcgc3JjPScvY2xpbWF0ZV9zdHJpcGVzX214LnBuZycgYWx0PSdUaGUgbGFiZWxlZCBcIndhcm1pbmcgc3RyaXBlc1wiIGNoYXJ0IGZvciBNZXhpY28uIFRoZSBzdHJpcGVzIGFyZSB0aGUgc2FtZSBvbmVzIHRoYXQgaGF2ZSBmb3JtZWQgdGhlIFwidGFwZXN0cnlcIiBiYWNrZ3JvdW5kIG9mIHRoZSBlc3NheSBhbGwgYWxvbmcuJyBjbGFzc05hbWU9J3NsaWRlLWluLWJsdXJyZWQtYm90dG9tJyAvPjwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIClcclxufSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdmZWV0Jz5cclxuICAgPGRpdj48YSBocmVmPScvbWV0YWRhdGEvY3JlZGl0Jz5BYm91dDwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdB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QUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtB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
