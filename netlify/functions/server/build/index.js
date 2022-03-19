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
  return /* @__PURE__ */ React.createElement("div", null, odile());
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene13, null), /* @__PURE__ */ React.createElement(Scene14, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene15, null), /* @__PURE__ */ React.createElement(Scene16, null), /* @__PURE__ */ React.createElement(Scene17, null), /* @__PURE__ */ React.createElement(Scene18, null), /* @__PURE__ */ React.createElement(Scene19, null), /* @__PURE__ */ React.createElement(Scene20, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene22, null), /* @__PURE__ */ React.createElement(Scene21, null), /* @__PURE__ */ React.createElement(Odile, null), /* @__PURE__ */ React.createElement(Scene23, null), /* @__PURE__ */ React.createElement(Scene24, null), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement(Scene25, null), /* @__PURE__ */ React.createElement(Scene26, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene27, null), /* @__PURE__ */ React.createElement(Scene28, null), /* @__PURE__ */ React.createElement(Scene29, null), /* @__PURE__ */ React.createElement(Scene30, null), /* @__PURE__ */ React.createElement(Scene31, null), /* @__PURE__ */ React.createElement(Scene32, null), /* @__PURE__ */ React.createElement(Scene33, null), /* @__PURE__ */ React.createElement(Scene34, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene35, null), /* @__PURE__ */ React.createElement(Scene36, null), /* @__PURE__ */ React.createElement(Scene37, null), /* @__PURE__ */ React.createElement(Scene38, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene39, null), /* @__PURE__ */ React.createElement(Scene40, null), /* @__PURE__ */ React.createElement(Scene41, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene42, null));
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
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have a sense of patterns about it save in the broadest of senses; this is what I know. I check the weather. People ask if it torments me. I don't tell them I'm from a desert, but I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "All of it. Always. Even the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
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
  return /* @__PURE__ */ React.createElement("div", null, odile());
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Scene132, null), /* @__PURE__ */ React.createElement(Scene142, null), /* @__PURE__ */ React.createElement(Ohio, null), /* @__PURE__ */ React.createElement(Scene152, null), /* @__PURE__ */ React.createElement(Scene162, null), /* @__PURE__ */ React.createElement(Scene172, null), /* @__PURE__ */ React.createElement(Scene182, null), /* @__PURE__ */ React.createElement(Scene192, null), /* @__PURE__ */ React.createElement(Scene202, null), /* @__PURE__ */ React.createElement(Define, null), /* @__PURE__ */ React.createElement(Scene222, null), /* @__PURE__ */ React.createElement(Scene212, null), /* @__PURE__ */ React.createElement(Odile, null), /* @__PURE__ */ React.createElement(Scene232, null), /* @__PURE__ */ React.createElement(Scene242, null), /* @__PURE__ */ React.createElement(Washington, null), /* @__PURE__ */ React.createElement(Scene252, null), /* @__PURE__ */ React.createElement(Scene262, null), /* @__PURE__ */ React.createElement(Garden, null), /* @__PURE__ */ React.createElement(Scene272, null), /* @__PURE__ */ React.createElement(Scene282, null), /* @__PURE__ */ React.createElement(Scene292, null), /* @__PURE__ */ React.createElement(Scene302, null), /* @__PURE__ */ React.createElement(Scene312, null), /* @__PURE__ */ React.createElement(Scene322, null), /* @__PURE__ */ React.createElement(Scene332, null), /* @__PURE__ */ React.createElement(Scene342, null), /* @__PURE__ */ React.createElement(Ode, null), /* @__PURE__ */ React.createElement(Scene352, null), /* @__PURE__ */ React.createElement(Scene362, null), /* @__PURE__ */ React.createElement(Scene372, null), /* @__PURE__ */ React.createElement(Scene382, null), /* @__PURE__ */ React.createElement(WinSum, null), /* @__PURE__ */ React.createElement(Scene392, null), /* @__PURE__ */ React.createElement(Scene402, null), /* @__PURE__ */ React.createElement(Scene412, null), /* @__PURE__ */ React.createElement(GlacierB, null), /* @__PURE__ */ React.createElement(Scene422, null));
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
  }, /* @__PURE__ */ React.createElement("p", null, "I've lived longer in Seattle than anywhere else in the United States, but not long enough to lose things to the present. I don't have a sense of patterns about it save in the broadest of senses; this is what I know. I check the weather. People ask if it torments me. I don't tell them I'm from a desert, but I tell them I like precipitation."), /* @__PURE__ */ React.createElement("p", null, "All of it. Always. Even the snow."), /* @__PURE__ */ React.createElement("p", null, `"I'm sorry," I say, for lack of anything else to do.`), /* @__PURE__ */ React.createElement("p", null, `"It isn't `, /* @__PURE__ */ React.createElement("i", null, "your"), ` fault," he says. "I just wish it could've waited." `)));
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
var coastline_default = "/build/_assets/coastline-247Q4LKC.css";

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
  "routes/pacific/fragments/test1": {
    id: "routes/pacific/fragments/test1",
    parentId: "routes/pacific/fragments",
    path: "test1",
    index: void 0,
    caseSensitive: void 0,
    module: test1_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzLzAxLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0IudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvaGVyZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXIudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdhdmUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvRC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9waG90b3NfY2hpLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19vZGlsZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtb2hpby50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3Rvbi50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcc3RyaXBlLXdhc2hpbmd0b24udHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS13aGFtbGluZS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccGhvdG9zX29kaWxlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLWdsYWNpZXIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdpbnN1bS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xccXVvdGUtY2xpbWUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHN0cmlwZS1vaGlvLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwaG90b3NfY2hpLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFxwb2VtLXdhdmUudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXHBvZW0tb2RlLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xccGFjaWZpY1xcZnJhZ21lbnRzXFx0ZXN0MS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcaGVyZS50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxCZWVwIGJvb3BcXG9jZWFuc2lkZVxcYXBwXFxyb3V0ZXNcXHBhY2lmaWNcXGZyYWdtZW50c1xcMDEudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXEIudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXEMudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxwYWNpZmljXFxmcmFnbWVudHNcXEQudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcQmVlcCBib29wXFxvY2VhbnNpZGVcXGFwcFxccm91dGVzXFxtZXRhZGF0YVxcY3JlZGl0LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5LnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcZm9vdGVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6RDpcXEJlZXAgYm9vcFxcb2NlYW5zaWRlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9yb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcm91dGVzL2Zvb3Rlci50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcc3RyaXBlLXdhc2hpbmd0b24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxzdHJpcGUtd2hhbWxpbmUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwaG90b3Nfb2RpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLWdsYWNpZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLWxldHNheS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0td2luc3VtLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxccXVvdGUtY2xpbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxzdHJpcGUtb2hpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwaG90b3NfY2hpLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXHBvZW0td2F2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxwb2VtLW9kZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFx0ZXN0MS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxoZXJlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXDAxLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXHBhY2lmaWNcXFxcZnJhZ21lbnRzXFxcXEIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE3IGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGFjaWZpY1xcXFxmcmFnbWVudHNcXFxcQy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxwYWNpZmljXFxcXGZyYWdtZW50c1xcXFxELnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcQmVlcCBib29wXFxcXG9jZWFuc2lkZVxcXFxhcHBcXFxccm91dGVzXFxcXG1ldGFkYXRhXFxcXGNyZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXEJlZXAgYm9vcFxcXFxvY2VhbnNpZGVcXFxcYXBwXFxcXHJvdXRlc1xcXFxmb290ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJEOlxcXFxCZWVwIGJvb3BcXFxcb2NlYW5zaWRlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2FzaGluZ3RvblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJzdHJpcGUtd2FzaGluZ3RvblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS13aGFtbGluZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwic3RyaXBlLXdoYW1saW5lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX29kaWxlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX29kaWxlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwaG90b3Nfb2RpbGVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tZ2xhY2llclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1sZXRzYXlcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBvZW0tbGV0c2F5XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13aW5zdW1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS13aW5zdW1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9xdW90ZS1jbGltZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3F1b3RlLWNsaW1lXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJxdW90ZS1jbGltZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3N0cmlwZS1vaGlvXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLW9oaW9cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInN0cmlwZS1vaGlvXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcGhvdG9zX2NoaVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGlcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcInBob3Rvc19jaGlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13YXZlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS13YXZlXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzXCIsXG4gICAgcGF0aDogXCJwb2VtLXdhdmVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTFcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvcG9lbS1vZGVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwicG9lbS1vZGVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvdGVzdDFcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy90ZXN0MVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwidGVzdDFcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTNcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvaGVyZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL2hlcmVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcImhlcmVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTRcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvMDFcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy8wMVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9wYWNpZmljL2ZyYWdtZW50c1wiLFxuICAgIHBhdGg6IFwiMDFcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTVcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQlwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0JcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIkJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTZcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvQ1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0NcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIkNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTdcbiAgfSxcbiAgXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHMvRFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3BhY2lmaWMvZnJhZ21lbnRzL0RcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGFjaWZpYy9mcmFnbWVudHNcIixcbiAgICBwYXRoOiBcIkRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMThcbiAgfSxcbiAgXCJyb3V0ZXMvbWV0YWRhdGEvY3JlZGl0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbWV0YWRhdGEvY3JlZGl0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibWV0YWRhdGEvY3JlZGl0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE5XG4gIH0sXG4gIFwicm91dGVzL2Zvb3RlclwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Zvb3RlclwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImZvb3RlclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTIxXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcyB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9yb3V0ZXMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9yb3V0ZXMvZm9vdGVyJ1xyXG5pbXBvcnQgV2hhbSBmcm9tICcuL3JvdXRlcy9wYWNpZmljL2ZyYWdtZW50cy9zdHJpcGUtd2hhbWxpbmUnXHJcblxyXG4vLyBPdXRsZXQgbWF5IGNyZWF0ZSBkdXBsaWNhdGVzIGZyb20gaW5kZXg7IHRlbXBvcmFyaWx5IHJlbW92aW5nIGAgICAgPE91dGxldCAvPmAuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxodG1sIGxhbmc9J2VuJz5cclxuICAgPGhlYWQ+XHJcbiAgICA8TGlua3MgLz5cclxuICAgIDxtZXRhIGNoYXJTZXQ9J1VURi04JyAvPlxyXG4gICAgPHRpdGxlPndoYXQgdGhlIHdlYXRoZXIgZG9lc24ndDwvdGl0bGU+XHJcbiAgIDwvaGVhZD5cclxuICAgPGJvZHk+XHJcbiAgICA8T3V0bGV0IC8+XHJcbiAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICA8L2JvZHk+XHJcbiAgPC9odG1sPlxyXG4gKVxyXG59ICIsICIvLyBjb25zdCBhID0gUmF3MS52YWx1ZSgpO1xyXG5pbXBvcnQgU2NlbmUwMSBmcm9tICcuL2ZyYWdtZW50cy8wMSc7XHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gJy4vZnJhZ21lbnRzL3N0cmlwZS13YXNoaW5ndG9uJztcclxuaW1wb3J0IEIgZnJvbSAnLi9mcmFnbWVudHMvQic7XHJcbmltcG9ydCBDIGZyb20gJy4vZnJhZ21lbnRzL0MnO1xyXG5pbXBvcnQgRCBmcm9tICcuL2ZyYWdtZW50cy9EJztcclxuXHJcblxyXG5mdW5jdGlvbiBGcmFnbWVudHMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIDxTY2VuZTAxIC8+XHJcbiAgIDxCIC8+XHJcbiAgIDxDIC8+XHJcbiAgIDxEIC8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50cyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZTAxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdvbmUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICA8cD5JdCBpcyAyMDIyLiBJdCBpcyB0aGUgMjJuZC4gSXQgaXMgRmVicnVhcnkuPC9wPlxyXG4gIDxwPkkgYW0gYmVnaW5uaW5nIHRoaXMgZXNzYXkuIEkgYW0gdHdlbnR5LXNpeCB5ZWFycyBvbGQuIEkgYW0gbW92aW5nLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLCB0byBTZWF0dGxlLjwvcD5cclxuICA8cD5JdCBpcyBzbm93aW5nLjwvcD48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCJcclxuaW1wb3J0IEhlcmUgZnJvbSBcIi4vaGVyZVwiXHJcbmltcG9ydCB7IEdsYWNpZXJBIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTAyIC8+XHJcbiAgIDxIZXJlIC8+XHJcbiAgIDxTY2VuZTAzIC8+XHJcbiAgIDxTY2VuZTA0IC8+XHJcbiAgIDxHbGFjaWVyQSAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdvJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkEgbWVtb3J5IHRvbyBzbWFsbCBmb3IgbWUgdG8gaGF2ZSBhIHBsYWNlIGZvciBpdCBpbiB0aW1lOiBJIGFtIGJhcmVseSBvbGQgZW5vdWdoIHRvIHJlbWVtYmVyLCBhbmQgbXkgcGFyZW50cyBhcmUgbWFycmllZCwgYW5kIHRoZXkgYXJlIGRpc2NvdmVyaW5nIHRoYXQgdGhlIGRpbmluZyByb29tIGZsb29yIGlzIHVuZXZlbiwgYXMgaXQgaGFwcGVucywgYXMgdGhlIHdhdGVyIHBvdXJpbmcgaW4gdGhyb3VnaCB0aGUgY2xvc2VkIHdpbmRvd3MgZm9ybXMgYSB0cmlhbmd1bGFyIHB1ZGRsZSB3aGVyZSB0aGUgZXh0ZXJpb3Igd2FsbHMgbWVldC48L3A+XHJcbiAgIDxwPkFuZCBJIGFtIGhlcmU6IHNpdHRpbmcgaW4gdGhlIHBvb2wgb2YgcmFpbndhdGVyIHdpdGggZW5vdWdoIHJvb20gdG8gc2xhcCBteSBoYW5kcyByaHl0aG1pY2FsbHkgb24gbW9yZSBvZiBpdCBiZXNpZGUgbWUsIGF3YXJlIG9mIGFuZCBpZ25vcmluZyB0aGVpciBtb3VudGluZyBidXQgZ2VuZXJhbGl6ZWQgZGlzYXBwcm92YWwuIElmIGl0IGhhcyBvY2N1cnJlZCB0byBtZSB0aGF0IHRoaXMgaXMgbm90IHdoYXQgdGhleSB3YW50ZWQgZnJvbSB0aGVpciByZWNlbnRseS1maW5pc2hlZCBmbG9vciwgdGhlIHRob3VnaHQgY29tZXMgd2l0aCBvdmVyYWxsIGluZGlmZmVyZW5jZTsgdGhhdCB0aGV5IGhhZCBpdCBwb3VyZWQgYW5kIHNhbmRlZCwgYnkgaHVtYW4gaGFuZHMsIHNvIEknbSBub3Qgc3VyZSB3aGF0IHRoZXkgZXhwZWN0ZWQuPC9wPlxyXG4gICA8cD4oQ29uc3RydWN0aW9uIG9mIHRoZSBob3VzZSBJIHdpbGwgZ3JvdyB1cCBpbiBoYXMgYmVlbiBvbmdvaW5nLCB3aWxsIGJlIG11Y2ggbG9uZ2VyLCBpbnRvIG1lbW9yaWVzIHdpdGggZW5vdWdoIGRlZmluaXRpb24gdG8gcHVsbCB0aGVpciBvd24gd2VpZ2h0IGluIHRpbWUuIEkgZG8gbm90IGtub3cgd2hhdCBhIGxldmVsIGlzLik8L3A+XHJcbiAgIDxwPkkgaGF2ZW4ndCBnb3R0ZW4gdGlyZWQgb2YgaXQgeWV0LiBBcyBJIHNsYXAgdGhlIHB1ZGRsZSwgSSBhbSBzaG91dGluZzogXCJTd2ltbWluZyBwb29sISBTd2ltbWluZyBwb29sIVwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RocmVlJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkhlcmUgYXJlIHR3byB0aGluZ3MgSSBrbm93IGFib3V0IHBvd2VyLCB2ZXJ5IGVhcmx5IGluIG15IGxpZmU6PC9wPlxyXG4gICA8cD5UaGUgbW9zdCBwaHlzaWNhbGx5IHBvd2VyZnVsIHRoaW5nIGluIHRoZSB3b3JsZCBpcyB3YXRlci4gV2F0ZXIgd3JpdGVzIHRoZSBzaGFwZSBvZiBsYW5kIGFuZCBjYW4gZGVtb2xpc2ggYW55dGhpbmcgd2l0aCB0aW1lLiBXYXRlciBpbiB0aGUgYWlyIGlzIHdoeSBldmVyeSBpbmFuaW1hdGUgb2JqZWN0IGFyb3VuZCBtZSBkaWVzIGZhc3RlciB0aGFuIGl0IHNhaWQgaXQgPGEgaHJlZj0naHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcG9zdHMvY3ctZGF0YS1sb3NzLTQ5MjEwMjk1Jz53b3VsZDwvYT47IGxpa2Ugb3B0aWNhbCBtZWRpYSB5b3UgdGhvdWdodCBiYWNrZWQgdXAgc29tZXRoaW5nIHlvdSBjYXJlIGFib3V0LCBvciBlbGFzdGljLiBXYXRlciBib3dscyB5b3Ugb3ZlciB3aGVuIHlvdSBjb21lIG5lYXIgaXQgYW5kIGdldCBjb2NreSBlbm91Z2ggdG8gdHVybiB5b3VyIGJhY2suIFdhdGVyIHNldHMgdGhlIGxpdmluZyBsaW1pdHMgb2Ygd2hhdCBpcyBwb3NzaWJsZTogbGlrZSB3aGVuIHRoZSBzdXBwbHkgdHVybnMgb2ZmLCBhbmQgdGhlIHRpbmFjbyB0aGF0IHRoZXJlJ3Mgbm90IGEgb25lLXdvcmQgRW5nbGlzaCB0ZXJtIGZvciBpcyByZXNlcnZlZCBmb3IgcGF5aW5nIHRvdXJpc3RzIGluIHRoZSBiYWNrIHlhcmQgdG8gY3VzaGlvbiB0aGVtIGZyb20gc2NhcmNpdHksIGFuZCBJIGJhdGhlIG91dCBvZiBhIGJ1Y2tldCBpbiB0aGUgc2hvd2VyLjwvcD5cclxuICAgPHA+KEl0IHN0YWdnZXJzIG1lLCB0aGUgd2F5IHRoZSBOb3J0aCB1c2VzIHdvb2Q6IGxpa2UgdGhlcmUncyBlbm91Z2ggb2YgaXQgdG8gZ28gYXJvdW5kLCBpbnN0ZWFkIG9mIGNvbmNyZXRlLiBJIGRvIG5vdCBtYWtlIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGltYmVyLCB3aGljaCBhd2VzIG1lIGFzIGEgc2hvdyBvZiB3ZWFsdGgsIGFuZCBmb3Jlc3RzLCB3aGljaCB1bm5lcnZlIG1lOyBpdCBkb2Vzbid0IGNvbm5lY3QgdGhhdCBhbnl0aGluZyBJIHNlZSBjb3VsZCBiZSBzdWZmaWNpZW50IGZvciBwZW9wbGUgdG8gY2xhaW0gaXQgaXMgZW5vdWdoLik8L3A+XHJcbiAgIDxwPlRoZSBiZXN0IHdheSBmb3IgYSBwZXJzb24gdG8gYWNxdWlyZSBwb3dlciBpcyB0byBiZSBpbmRpc3BlbnNhYmxlLiBNeSBib2R5LS1JIGRvIG5vdCB5ZXQgaGF2ZSB0aGUgbGFuZ3VhZ2UgZm9yIHRoaXM7IEkgYWx3YXlzIGtub3ctLW15IGJvZHkgZG9lcyBub3QgZG8gdGhlIHRoaW5ncyB0aGF0IG90aGVyIHBlb3BsZSB3YW50IGl0IHRvIGRvLiBQZW9wbGUgZG9uJ3Qgd2FudCBtZSwgaWYgdGhleSBjYW4gYWZmb3JkIHRvLiA8L3A+XHJcbiAgIDxwPkJ1dCBJIGFtIGFsc28gYSBkdWFsIGNpdGl6ZW4sIGEgdGVybSB3aGljaCBvZnRlbiBtZWFucyB0aGF0IG5vIG9uZSB3aG8gYXNrcyBmb3IgcGFwZXJ3b3JrIG90aGVyIHRoYW4gYSBwYXNzcG9ydCBpcyBnb2luZyB0byBnZXQgc29tZXRoaW5nIHRoZXkgbGlrZS4gSSB3aWxsIGhhdmUgdG8gYmUgaW5kaXNwZW5zYWJsZS48L3A+XHJcbiAgIDxwPkkgcmVzb2x2ZSB0byBnbyB0byBjb2xsZWdlIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBJIHdpbGwgZ2V0IGEgZGlwbG9tYSBpbiBFbmdsaXNoIHByaW50IGFuZCB0aGVuIG5vIG9uZSB3aWxsIGJlIGFibGUgdG8gYWZmb3JkIHRvIGRpc2xpa2UgbWUgZW5vdWdoIGZvciB0aGVtIHRvIHRlbGwgbWUgbm8uPC9wPlxyXG4gICA8cD4oSSBhbSwgYXBwcm94aW1hdGVseSwgc2l4IHllYXJzIG9sZC4pPC9wPlxyXG4gIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXInPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+VGhyZWUgd2Vla3MgYWZ0ZXIgbXkgZWlnaHRlZW50aCBiaXJ0aGRheSwgSSBnbyBub3J0aC48L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJjb25zdCBjYXBfaGVyZSA9ICdTY3JlZW5zaG90IG9mIGEgc2VjdGlvbiBvZiBhIHNhdGVsaXRlIG1hcCBvZiB0aGUgZ2xvYmUuIEZpbmQgdGhlIGVuZCBvZiB0aGUgQW1lcmljYW4gQ2FsaWZvcm5pYTsgaGVyZSwgU2FuIERpZWdvLiBHbyBhcyBzdHJhaWdodCBvZiBzb3V0aCBhcyB5b3UgY2FuIGdldCBmb3IgYSB0aG91c2FuZCBtaWxlcyBvbiB0aGUgb25seSBoaWdod2F5LCB1bnRpbCB5b3UgaGl0IHRoZSBwb2ludCB3aGVyZSB0aGUgVHJvcGljIG9mIENhbmNlciBtZWV0cyB0aGUgUGFjaWZpYyBjb2FzdGxpbmUuIFRoaXMgaXMgVG9kb3MgU2FudG9zLiBZb3UgYXJlIGhlcmUuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcmUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J0hlcmUnIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX2hlcmUnPjxpbWcgc3JjPScveW91X2FyZV9oZXJlLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfaGVyZScgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF9oZXJlfTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nSUlJJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZ192YS5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgYWx0PScnLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5JSUk8L2g1PlxyXG4gICBUaGUgZ2xhY2llciBhYnNvcmJlZCBncmVlbmhvdXNlIGdhc2VzLiA8YnIvPlxyXG4gICBXZSBhcmUgYSBsYXJnZSBwYXJ0IG9mIHRoZSBiaW9zcGhlcmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJyBpZD0nY3JlZF9nbGFjaWVyJz5DcmFpZyBTYW50b3MgUGVyZXosPGJyLz48Y2l0ZT5cIlRoaXJ0ZWVuIFdheXMgb2YgTG9va2luZyBhdCBhIEdsYWNpZXJcIjwvY2l0ZT48L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xhY2llckIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBjbGFzc05hbWU9J2dsYWNpZXIgcG9lbScgaWQ9J1YnIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICA8aW1nIHNyYz0nL2JsdWVfcXVvdGVfYmdfc20ucG5nJyBpZD0nYmx1ZXEnIGFsdD0nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WPC9oNT5cclxuICAgV2UgZG8gbm90IGtub3cgd2hpY2ggdG8gZmVhciBtb3JlLDxici8+XHJcbiAgIFRoZSB0ZXJyb3Igb2YgY2hhbmdlPGJyLz5cclxuICAgT3IgdGhlIHRlcnJvciBvZiB1bmNlcnRhaW50eSwgPGJyLz5cclxuICAgVGhlIGdsYWNpZXIgY2FsdmluZzxici8+XHJcbiAgIE9yIGp1c3QgYWZ0ZXIuPC9wPlxyXG4gIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQygpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVklJSScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZy5wbmcnIGlkPSdibHVlcW0nIGFsdD0nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPjxoNT5WSUlJPC9oNT5cclxuICAgSSBrbm93IGtpbmcgdGlkZXMsIDxici8+XHJcbiAgIEFuZCBsdXJpZCwgaW5lc2NhcGFibGUgc3Rvcm1zOyA8YnIvPlxyXG4gICBCdXQgSSBrbm93LCB0b28sIDxici8+XHJcbiAgIFRoYXQgdGhlIGdsYWNpZXIgaXMgaW52b2x2ZWQgPGJyLz5cclxuICAgSW4gd2hhdCBJIGtub3cuPC9wPlxyXG4gIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbi8vVW51c2VkIGZvciBub3csIGJ1dCBmdW4gdG8gaGF2ZVxyXG5leHBvcnQgZnVuY3Rpb24gR2xhY2llcigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZ2xhY2llcic+XHJcbiAgIDxHbGFjaWVyQSAvPlxyXG4gICA8R2xhY2llckIgLz5cclxuICAgPEdsYWNpZXJDIC8+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiaW1wb3J0IHsgR2xhY2llckMgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5pbXBvcnQgV0FWRSBmcm9tIFwiLi9wb2VtLXdhdmVcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTA1IC8+XHJcbiAgIDxTY2VuZTA2IC8+XHJcbiAgIDxTY2VuZTA3IC8+XHJcbiAgIDxTY2VuZTA4IC8+XHJcbiAgIDxTY2VuZTA5IC8+XHJcbiAgIDxXQVZFIC8+XHJcbiAgIDxTY2VuZTEwIC8+XHJcbiAgIDxTY2VuZTExIC8+XHJcbiAgIDxTY2VuZTEyIC8+XHJcbiAgIDxHbGFjaWVyQyAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZml2ZSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgYW0gbmluZSB5ZWFycyBvbGQsIGFuZCB3ZSBoYXZlIGZhbWlseSBpbiBOZXcgT3JsZWFucy4gV2UgaGF2ZSBmYW1pbHkgaW4gRmxvcmlkYSwgYXMgd2VsbDsgbXkgZmF0aGVyIGhhcyB0YWtlbiBpdCB1cG9uIGhpbXNlbGYgdG8gZHJpdmUgdXMgZnJvbSBvbmUgdG8gdGhlIG90aGVyLCB3aGljaCBJIGZpbmQgZXhjaXRpbmcuIEkgb25seSBzZWUgR1BTIGluIHJlbnRhbCBjYXJzLCBpbiB0aGUgVVMsIHdoaWNoIGlzIHRoZSBzb3J0IG9mIHRoaW5nIHRoYXQgc2F0ZWxsaXRlcyBib3RoZXIgdG8gbWFwLiBXZSBsZWF2ZSBpbiB0aGUgYWZ0ZXJub29uIHRvIGRyaXZlIHRocm91Z2ggdGhlIG5pZ2h0LCB3aGljaCBJIGZpbmQgbW9yZSBleGNpdGluZyBzdGlsbC48L3A+XHJcbiAgICA8cD5XZSBwYXNzIHRocm91Z2ggYSBzdG9ybSBzeXN0ZW0sIGRyaXZpbmc7IGhhcnNoIHJhaW4gaW4gbW90aW9uIGF0IG5pZ2h0IGlzIGEgcmFyZSB0cmVhdCBmb3IgbWUsIGFuZCBJIGhhdmVuJ3QgcXVpdGUgZ3JhcHBsZWQgd2l0aCB0aGUgcmVhbGl0aWVzIG9mIGhpZ2h3YXlzIGVub3VnaCB0byB1bmRlcnN0YW5kIHRoZSBwaXRmYWxscyBvZiB3aHkuIEkgc3RhcmUgb3V0IHRoZSB3aW5kb3dzIGF0IHRoZSBoYXJkIHJhaW4sIHRoZSBsdXh1cnkgb2YgbGlnaHQgYW5kIGxhbmVzIG9uIGFuIEFtZXJpY2FuIGludGVyc3RhdGUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDYoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NpeCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IGZhdGhlciBoYXMgdG9sZCBtZSBhYm91dCBodXJyaWNhbmUgcGFydGllcywgcmljaCBwZW9wbGUgd2hvIHdlcmUgcmVjZW50bHkgY2hpbGRyZW4gdGFraW5nIG9mZiB0byBzaXQgaXQgb3V0IGluIHNwYXJlIGhvdXNlcyBvbiB0aGUgY29hc3QuIFRoZSBpZGlvY3kgdGhhdCBjb21lcyB3aXRoIHRoZSB3b3JsZCBnaXZpbmcgeW91IG5vIHJlYXNvbiB0byBiZWxpZXZlIHlvdSdyZSBub3QgaW52dWxuZXJhYmxlLiBXZSBtYXkgb3IgbWF5IG5vdCBkaXNjdXNzIHRoYXQgcGFydCBleHBsaWNpdGx5LCBidXQgSSdtIGF3YXJlLCBhdCBob21lLCBvZiB0aGUgY29udHJvdmVyc3kgb2YgdGhlIGZvcmNpYmxlIHJlZGVmaW5pdGlvbiBvZiBcImJlYWNoZnJvbnRcIiBwcm9wZXJ0eSBieSBidWlsZGluZyBvbiBkdW5lcywgYW5kIHRoZSByZWFzb25zIHBlb3BsZSBkbyBzbyBhbnl3YXkuIFdoeSB0aGUgbGF3IGhhcyBsZXNzIHRvIHNheSBhYm91dCBpdCB0aGFuIHRoZSB0ZXh0IGNsYWltcyBpdCdzIHN1cHBvc2VkIHRvLjwvcD5cclxuICAgIDxwPkkga25vdyBhIGxvdCBvZiByZWFsdG9ycy48L3A+XHJcbiAgICA8cD5JIGFsc28ga25vdyBhIGpva2U6IFwiSSd2ZSBnb3QgdGhpcyBncmVhdCBwaWVjZSBvZiBsYW5kIHRvIHNlbGwgeW91LFwiIGl0IHN0YXJ0cywgXCJoYXNuJ3QgZmxvb2RlZCBzaW5jZSB0aGUgZGlub3NhdXJzLi4uXCI8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2V2ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5MYXRlciBpbiB0aGUgc3VtbWVyLCBJIGFtIG5vdCBuaW5lIHllYXJzIG9sZC4gV2hlbiBJJ3ZlIHJlY2VudGx5IHR1cm5lZCB0ZW4sIEthdHJpbmEgc3dlZXBzIHRocm91Z2ggd2hlcmUgSSBhbSBub3QuIEkgaGF2ZSB0aGUgdmFndWVzdCBvZiB1bmRlcnN0YW5kaW5ncyBvZiB3aGF0IGEgbGV2ZWUgaXMsIGZyb20gc29uZ3MsIGFuZCBub3cgZnJvbSBuZXdzOyBsaWtlIGR1bmVzLCBJIHRoaW5rLCBidXQgd29yc2UgYXQgYmVpbmcgc28uPC9wPlxyXG4gICAgPHA+SW4gdGhlIGxlYWQtdXAgdG8gbGFuZGZhbGwsIEkgYW0gY2hpbGRpc2hseSwgY2FsbG91c2x5IGJhZmZsZWQ6IENhdGVnb3J5IDUgb24gdGhlIGZvcmVjYXN0IGlzIGFsd2F5cyBnb29kIG5ld3MgZm9yIG1lLCBiZWNhdXNlIGxhcmdlIG51bWJlcnMgbWVhbiBhIGhpZ2hlciBwcm9iYWJpbGl0eSBvZiBjbGFzcyBiZWluZyBjYWxsZWQgb2ZmLiAoVGhlcmUgaXMsIGZvciB0aGUgZHVyYXRpb24gb2YgbXkgY2hpbGRob29kLCBvbmUgcGF2ZWQgcm9hZC4gVGhlIG90aGVycywgdW5kZXIgc3VmZmljaWVudCBwcmVzc3VyZSwgdHVybiB0byByaXZlcnMuIEkgbGl2ZSBvbiBhIGhpbGw7IEkgbGlrZSB0byB3YXRjaC4gT25lIHllYXIsIGxhdGVyIGluIHRoZSBkZWNhZGUsIG9uIGEgZGF5IHRoYXQgdGhlIHJvYWRzIHdlcmVuJ3Qgd2FzaGVkIG91dCBlYXJseSBlbm91Z2ggaW4gdGhlIG1vcm5pbmcgdG8gZ2V0IG1lIG91dCBvZiBpdCwgbXkgc2Nob29sIHR1cm5zIHRvIHJhcGlkcywgYW5kIEkgYW0gdW5hY2NvdW50YWJseSBwbGVhc2VkIHRvIGtub3cgaXQgd2FzIGJ1aWx0IG9uIGEgdmVpbiBvZiByZWQgY2xheSBhcyB0aGF0IHBhaW50cyBpdHNlbGYgb250byBteSBzb2Nrcy4pIDwvcD5cclxuICAgIDxwPkV2YWN1YXRpb24sIGZvciBleGFtcGxlLCBpcyBmb3JlaWduIHRvIG1lLiBJIGNhbid0IGltYWdpbmUgd2h5IHRoZXkncmUgYm90aGVyaW5nOyBJIGNvdWxkIHNheSB0aGF0IHRoZSByZWFzb24gSSBkb24ndCB1bmRlcnN0YW5kIHdoeSBvbmUgcGxhY2Ugd291bGQgYmUgc2FmZXIgdGhhbiBhbm90aGVyIGlzIHRoYXQgbm8gcGFydCBvZiBteSBzdGF0ZSBpcyBhIGZ1bGwgZmlmdHkgbWlsZXMgZnJvbSB0aGUgY29hc3RsaW5lLCBidXQgSSBkb3VidCBJIHRob3VnaHQgaXQgdGhyb3VnaCB0aGF0IGZhci4gSSB0aGluayBJIHNpbXBseSBkbyBub3QgcmVnaXN0ZXIgdGhhdCBsb2NhdGlvbnMgYXJlIHVubGlrZSBvbmUgYW5vdGhlciBpbiB0aW1lIG5vdCB0byBsZWFybiBpdCBvbiB0aGUgbmV3cy48L3A+XHJcbiAgICA8cD5JIGFtIHRlbiB5ZWFycyBhbmQgYWxtb3N0IG9uZSBtb250aCBvbGQsIGFuZCBJIHVuZGVyc3RhbmQgdGhhdCBodXJyaWNhbmUgcHJlcGFyZWRuZXNzIGlzIHJlbGF0aXZlLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlaWdodCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgc3R1Y2sgbXkgZmVldCBpbiB0aGUgQXRsYW50aWMgb25jZS4gSXQgd2FzIGNvbGRlciB0aGFuIGFuIG9jZWFuIGhhZCBhbnkgYnVzaW5lc3MgYmVpbmcsIGJ5IG15IGxpZ2h0cywgYW5kIGdyYXkuIFRoZXJlIHdhcyBzb21ldGhpbmcgYml6YXJyZSBpbiB0aGUgaWRlYSB0aGF0IGl0IHdhcyB3YXJtIGVub3VnaCB0byBmZWVkIGEgaHVycmljYW5lLiAgPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J25pbmUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5CZWZvcmUgSSBhbSBlbGV2ZW4sIHdlIHN0b3AgaGF2aW5nIGZhbWlseSBpbiBOZXcgT3JsZWFucy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgYXJvdW5kIGZvdXIgeWVhcnMgb2xkLCBJIGFtIGVhdmVzZHJvcHBpbmctLXRoaXMgd2lsbCBiZSBhIGhhYml0LS1JIGFtIGVhdmVzZHJvcHBpbmcgb24ga2luZGVyZ2FydGVuIHRlYWNoZXJzOyB0aGV5IGFyZSB0YWxraW5nIGFib3V0IHRoZSB3ZWF0aGVyLiA8L3A+XHJcbiAgICA8cD5TcGVjaWZpY2FsbHksIHRoZXkgYXJlIHRhbGtpbmcgYWJvdXQgdGhlIG9jZWFuIGdldHRpbmcgd2FybWVyLCBhbmQgaG93IHRoYXQncyBtYWtpbmcgaHVycmljYW5lIHNlYXNvbiBoYXJzaGVyLCBhbmQgbG9uZ2VyLCBpbiB3YXlzIG5vIG9uZSBzaG91bGQgbGlrZS4gV2UgZGVwZW5kIG9uIGh1cnJpY2FuZXMgZm9yIGZyZXNod2F0ZXItLW15IHRvd24sIHNwZWNpZmljYWxseSwgcmVsaWVzIG9uIHRoZW0gdG8gZmlsbCB0aGUgYXF1aWZlciBpdHMgbXVjaC1kaXNjdXNzZWQgb2FzaXMgc3RhdHVzIGlzIGJ1aWx0IHVwb24tLWJ1dCB0b28gbXVjaCB3YXRlciBhdCBhIHRpbWUgZGVmZWF0cyB0aGUgcG9pbnQsIHJpcHMgdG9wc29pbCBpbnRvIHRoZSBzZWEsIHJ1bnMgaXRzIGNvdXJzZSB0b28gZmFzdCBmb3IgdXMgdG8ga2VlcC4gQW5kIGl0J3MgbW9yZSB1bnBsZWFzYW50IGZvciB0aGVtIHRoYW4gaXQgaXMgZm9yIG1lLjwvcD5cclxuICAgIDxwPlRoZSB3YXJtdGgsIGF0IGxlYXN0LCBpcyBjb21tb24gc2Vuc2U7IEkga25vdyBoZWF0IGlzIGVuZXJneSBiZWNhdXNlIEkga25vdyBodXJyaWNhbmVzIG5lZWQgd2FybSB3YXRlciB0byBsaXZlLiBUaGF0J3Mgd2h5IHRoZXkgc3RhcnZlIGFuZCBzdGFsbCBvdXQgZ29pbmcgbm9ydGgsIG9yIGNvbWluZyB0byBsYW5kLiBBIHN0b3JtIHdvdWxkIGhhdmUgdG8gYmUgdmVyeSBzcGVjaWFsIHRvIGZpZ2h0IGFsbCB0aGUgd2F5IHRocm91Z2ggdGhhdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nZWxldmVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgZmlyc3QgeWVhcnMgaW4gdGhlIFVuaXRlZCBTdGF0ZXMsIEkgU2t5cGUgbXkgZGFkIGxlc3Mgb2Z0ZW4gdGhhbiBJIHNob3VsZC4gTGVzcyBvZnRlbiB0aGFuIEkgd2FudCB0by4gSXQncyBoYXJkIHRvIGZpbmQgYSByaHl0aG07IEkgYW0gbm90IGRvaW5nIHdlbGwgdGhlcmUuIEJ1dCBoZSB0ZWxscyBtZSBhYm91dCB0aGUgd2VhdGhlci4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZWx2ZSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPldoZW4gSSBhbSB0d2VudHktZm91ciwgaXQncyA8YSBocmVmPSdodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDIwLzA1LzE4L2NsaW1hdGUvY2xpbWF0ZS1jaGFuZ2VzLWh1cnJpY2FuZS1pbnRlbnNpdHkuaHRtbCc+ZXN0YWJsaXNoZWQ8L2E+IHRoYXQgd2FybWVyIHdhdGVyIGlzIHN1cGVyY2hhcmdpbmcgdHJvcGljYWwgc3Rvcm1zLjwvcD5cclxuICAgIDxwPkkgdW5kZXJzdGFuZCB0aGF0IHNjaWVuY2UgbW92ZXMgbW9yZSBzbG93bHkgdGhhbiBraW5kZXJnYXJ0ZW4gdGVhY2hlcnMnIHNtYWxsIHRhbGs7IHRoYXQgY2xpbWF0ZSwgYnkgZGVmaW5pdGlvbiwgaGFwcGVucyBvbiBhIHRpbWVzY2FsZSBjbG9zZXIgdG8gZ2VvbG9naWNhbCB0aGFuIGFuZWNkb3RlLiA8L3A+XHJcbiAgICA8cD5CdXQgSSBkbyBoYXZlIHRoZSBmbGVldGluZyB0aG91Z2h0IHRoYXQsIGV2ZW4gdGhlbiwgdGFraW5nIHR3ZW50eSB5ZWFycyBvZiBteSBsaWZlIHRvIGNhdGNoIHVwIHRvIGhvdyB0aGUgd2VhdGhlcidzIGRvaW5nIHNlZW1zIGEgYml0IG11Y2guPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBHYXJkZW4gZnJvbSBcIi4vcGhvdG9zX2NoaVwiXHJcbmltcG9ydCBPZGlsZSBmcm9tIFwiLi9waG90b3Nfb2RpbGVcIlxyXG5pbXBvcnQgeyBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5pbXBvcnQgT2RlIGZyb20gXCIuL3BvZW0tb2RlXCJcclxuaW1wb3J0IFdpblN1bSBmcm9tIFwiLi9wb2VtLXdpbnN1bVwiXHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcXVvdGUtY2xpbWVcIlxyXG5pbXBvcnQgT2hpbyBmcm9tIFwiLi9zdHJpcGUtb2hpb1wiXHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gXCIuL3N0cmlwZS13YXNoaW5ndG9uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTEzIC8+XHJcbiAgIDxTY2VuZTE0IC8+XHJcbiAgIDxPaGlvIC8+XHJcbiAgIDxTY2VuZTE1IC8+XHJcbiAgIDxTY2VuZTE2IC8+XHJcbiAgIDxTY2VuZTE3IC8+XHJcbiAgIDxTY2VuZTE4IC8+XHJcbiAgIDxTY2VuZTE5IC8+XHJcbiAgIDxTY2VuZTIwIC8+XHJcbiAgIDxEZWZpbmUgLz5cclxuICAgPFNjZW5lMjIgLz5cclxuICAgPFNjZW5lMjEgLz5cclxuICAgPE9kaWxlIC8+XHJcbiAgIDxTY2VuZTIzIC8+XHJcbiAgIDxTY2VuZTI0IC8+XHJcbiAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgIDxTY2VuZTI1IC8+XHJcbiAgIDxTY2VuZTI2IC8+XHJcbiAgIDxHYXJkZW4gLz5cclxuICAgPFNjZW5lMjcgLz5cclxuICAgPFNjZW5lMjggLz5cclxuICAgPFNjZW5lMjkgLz5cclxuICAgPFNjZW5lMzAgLz5cclxuICAgPFNjZW5lMzEgLz5cclxuICAgPFNjZW5lMzIgLz5cclxuICAgPFNjZW5lMzMgLz5cclxuICAgPFNjZW5lMzQgLz5cclxuICAgPE9kZSAvPlxyXG4gICA8U2NlbmUzNSAvPlxyXG4gICA8U2NlbmUzNiAvPlxyXG4gICA8U2NlbmUzNyAvPlxyXG4gICA8U2NlbmUzOCAvPlxyXG4gICA8V2luU3VtIC8+XHJcbiAgIDxTY2VuZTM5IC8+XHJcbiAgIDxTY2VuZTQwIC8+XHJcbiAgIDxTY2VuZTQxIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8U2NlbmU0MiAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgY29sbGVnZSBpbiB0aGUgVVMgdGhhdCBJIGdldCBpbnRvIGlzIGluIE9oaW8sIHNvIEkgYW0gZWlnaHRlZW4gYW5kIEkgYW0gaW4gT2hpby4gQmVmb3JlIHRoYXQsIEkgYW0gc2V2ZW50ZWVuLCBhbmQgbXkgZmF0aGVyIGlzIGhlbHBpbmcgbWUgcGljayBvdXQgYSB3aW50ZXIgY29hdCBvbiB0aGUgaW50ZXJuZXQsIGFuZCBJIGFtIGFza2luZyBoaW0gaWYgSSBzaG91bGQgY2hvb3NlIHRoZSB3YXJtZXN0IG9uZSBJIHNlZS48L3A+XHJcbiAgICA8cD5UaGF0J3Mgb3ZlcmtpbGwsIGhlIHNheXMuIChIZSBoYXMgYmVlbiB0aGVyZSBiZWZvcmUsIGFsYmVpdCBzdWJzdGFudGlhbGx5IHByaW9yIHRvIG1lIGV2ZW4gYmVpbmcgYm9ybi4pIFdoYXQgSSByZWFsaXN0aWNhbGx5IG5lZWQgaXMgbW9yZSB0b3dhcmRzIHRoZSBjZW50ZXIgb2YgdGhlIHJhbmdlLiBJJ2QgcmVncmV0IGdldHRpbmcgdG9vIGhlYXZ5IGEgY29hdCwgaGUgc2F5cywgYW5kIGhlbHBzIG1lIHBpY2sgb25lIG9mIHRoZSBtaWRkbGluZyBvbmVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE0KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3VydGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgYW0gZ2l2ZW4gdG8gdW5kZXJzdGFuZCBpdCBzYXlzIGVub3VnaCB0byBzYXkgdGhhdCBteSBmaXJzdCB5ZWFyIGluIE9oaW8gaXMgYSBsYWtlIGVmZmVjdCB5ZWFyLCB0aG91Z2ggSSB3b3VsZG4ndCBrbm93IHdoeS4gPC9wPlxyXG4gICAgPHA+SSBsZWFybiwgZmlyc3RoYW5kIGFuZCBvbiBteSBoYW5kcywgd2hhdCBhIC00MCB3aW5kIGNoaWxsIGlzIGluIEZhaHJlbmhlaXQuIEkgbGVhcm4gd2hhdCBzcGVjaWFsIGNhbmUgdGlwcyBJIG5lZWQgZm9yIHRyYWN0aW9uIGluIHNub3cuIEkgbGVhcm4gdGhhdCBteSBjb2xsZWdlIGlzIG5vdCBwYXJ0aWN1bGFybHkgaW50ZXJlc3RlZCBpbiBjbGVhcmluZyB0aGUgc2lkZXdhbGtzIGluIHRpbWUgZm9yIGNsYXNzOyBpdCBkb2VzIG5vdCBvY2N1ciB0byBtZSB0aGF0IHRoZXkgbWF5IG9uY2UgYXQgbGVhc3QgaGF2ZSBiZWVuIGFibGUgdG8gYWZmb3JkIHRoZSBuZWdsaWdlbmNlLCBiZWNhdXNlIEkgZG9uJ3QgaGF2ZSBhbnkgcmVhc29uIHRvIHVuZGVyc3RhbmQgYSBjb21wYXJpc29uIGJ5IHdoaWNoIHRoaXMgYmVjb21lcyBleHRyZW1lLjwvcD5cclxuICAgIDxwPk15IGRhZCBhcG9sb2dpemVzLCB0aG91Z2guIEZvciBsZWFkaW5nIG1lIHdyb25nLCB3aXRoIHRoZSBjb2F0LjwvcD5cclxuICAgIDxwPlRoaXMgaXNuJ3Qgd2hhdCB0aGUgd2VhdGhlciBoZXJlIGlzIHN1cHBvc2VkIHRvIGRvLCBoZSBzYXlzLjwvcD5cclxuICAgIDxwPkkgd291bGRuJ3Qga25vdywgSSBzYXk7IG9yIG1heWJlIEkgZG9uJ3QuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZpZnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIEZhY2VUaW1lIG15IGRhZCBpbnN0ZWFkIG9mIFNreXBpbmcsIHRoZXNlIGRheXMuIEhlIHRlbGxzIG1lIGhvdyBtYW55IGRheXMgdGhpcyB3ZWVrIHRoZXJlIGhhdmUgYmVlbiBtdW5pY2lwYWwgd2F0ZXIuIEkgdGVsbCBoaW0gd2hlbiBpdCBzbm93cy4gSGUgdGVsbHMgbWUgaG93IG91ciB0ZW1wZXJhdHVyZXMgY29tcGFyZS4gSSB0ZWxsIGhpbSBJIGdvdCBhIG5ldyBtb25pdG9yLiBJIHRlbGwgaGltIGhvdyBtdWNoIGl0IHdhcyBuZXcsIGFuZCBob3cgcGxlYXNlZCBJIGFtIHdpdGggbXlzZWxmIGZvciBob3cgSSBmb3VuZCBpdCB1c2VkLCBob3cgdGhlIGRlYWwgdG9vayBhIG1hdHRlciBvZiBkYXlzLjwvcD5cclxuICAgIDxwPllvdSdyZSBpbiB0ZWNoIGhlYXZlbiB1cCB0aGVyZSwgaGUgc2F5cy4gSSBzYXksIEkgZ3Vlc3MuIEhlIHNheXMgdGhhdCB1c2VkIGhlcmUgd291bGQgYmUgbmV3IHRoZXJlLiBJIHRoaW5rIGFib3V0IHRoYXQgYXMgYSB3YXkgdG8gcHV0IGl0LCBsYXRlcjogZGV2ZWxvcG1lbnQgaW4gcmVsYXRpdmUgdGltZSBvdmVyIHNwYWNlLjwvcD5cclxuICAgIDxwPkkgc2F5IChhbm90aGVyIGRheSkgdGhhdCBJJ2QgbGlrZSB0byB0cmFkZSBoaW0gbXkgbGFwdG9wLCB0aGF0IGl0IHdvdWxkIGJlIGJldHRlciBmb3IgaGlzIGdyaXAgdGhhbiBpdCdzIGJlZW4gZm9yIG15IHZpc2lvbi4gSGUgYXNrcyBpZiBJIHdhbnQgaGltIHRvIHRhbGsgdG8gYXNrIHRoZSBndXkgd2hvIHNlbmRzIGhpbSBzdHVmZiBmcm9tIHRoZSBib3JkZXIgd2hhdCB0aGUgY29tcG91bmRpbmcgY29zdHMgb2Ygc2hpcHBpbmcgd291bGQgbG9vayBsaWtlLiBJIHNhaWQgSSB0aG91Z2h0IEknZCBqdXN0IGJyaW5nIGl0IHRvIGhpbSwgd2hlbiBJIGNhbi4gU2F2ZSBoaW0gdGhlIGN1c3RvbXMsIHRoZSB3YXkgd2UgaGFuZGxlZCB0aGluZ3MgZ3Jvd2luZyB1cC48L3A+XHJcbiAgICA8cD5PaCwgaGUgc2F5cy4gVGhhdCdzIGtpbmQgb2YgeW91LjwvcD5cclxuICAgIDxwPkkgd2FudCB0byBzZWUgeW91IGFueXdheSwgSSBzYXkuIFRoZSBtYWNoaW5lIGJlaW5nIGxpZ2h0IGlzIHRoZSB3aG9sZSBwb2ludCBvZiB0aGUgdGhpbmcuIEkgZG9uJ3Qgc2VlIHdoZXJlIGtpbmRuZXNzIGNvbWVzIGludG8gaXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTYoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NpeHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIHdhcyBob21lIGZvciB0aGUgbGFzdCB0aW1lIGluIERlY2VtYmVyLCAyMDEzLiBJdCdzIG5vdCBteSBmaXJzdCBzdW1tZXIgYXdheS0taXQgZmVlbHMgaXQtLWl0J3Mgbm90IG15IGZpcnN0IHN1bW1lciBidXQgbXkgc2Vjb25kIHRoYXQgdGhlIGh1cnJpY2FuZSBjb21lcy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2V2ZW50ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGJpZyBodXJyaWNhbmUgd2hvc2UgbmFtZSBJIHVzZWQgdG8gcmVtZW1iZXIgaGFwcGVuZWQgc2hvcnRseSBiZWZvcmUgSSB3YXMgYm9ybiwgYW5kIHRodXMgdGhlIHBvaW50IG9mIHJlZmVyZW5jZSBmb3IgYW4gZXh0cmFvcmRpbmFyeSBzdG9ybSBjb3VsZCBjb21mb3J0YWJseSBicmFja2V0IGFueXRoaW5nIEknZCBrbm93LjwvcD5cclxuICAgIDxwPkhlciB1c3VycGVyIGNvbWVzIHRoZSBzdW1tZXIgSSB0dXJuIHR3ZW50eS4gSXQgdGVhcnMgdGhyb3VnaCB0b3duIGxpa2UgYSBuYXR1cmFsIGRpc2FzdGVyLCB3aGljaCBpcyBqYXJyaW5nLiBJdCB1cGVuZHMgbXkgZmF0aGVyJ3MgZ2FyZGVuLCB3aGljaCBpcywgc29tZWhvdywgd29yc2UuIFRoaW5raW5nIG9mIGhpbSBwdXR0aW5nIGl0IGJhY2sgdG9nZXRoZXIuIEV2ZW4gaWYgaGUgaGFkIGhlbHAuPC9wPlxyXG4gICAgPHA+SGUgZG9lc24ndCB3YW50IHRvIHZpc2l0LCBhZnRlciB0aGF0LCBldmVuIGJlZm9yZSBoZSBjYW4ndC4gVHJhdmVsIGhhcyBhbHdheXMgYmVlbiBhIHRoaW5nIG9mIHN1bW1lcjsgaGUgZG9lc24ndCB3YW50IHRvIGxlYXZlIHRoZSBob3VzZSB0byBzdG9ybXMgdW5zdXBlcnZpc2VkLiBIZSBkb2Vzbid0IHRydXN0IGFueW9uZSBlbHNlIHRvIGhhbmRsZSBpdCBpZiBoZSBsZWF2ZXMgaXQgYWxvbmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGUgc2VuZHMgbWUgcGhvdG9zLiBCdXQgdGhleSBnZXQgbW9yZSBkaWZmaWN1bHQgdG8gbG9vayBhdCBvdmVyIHRpbWUsIG9kZGx5IGVub3VnaC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nbmluZXRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IdXJyaWNhbmUgc2Vhc29uIGdyb3dzIGxvbmdlciBhdCBib3RoIGVuZHMuIEl0J3MgaGFyZCB0byBmaW5kIG5ld3MgYWJvdXQgaHVycmljYW5lcyBpbiB0aGUgUGFjaWZpYyB0aGF0IEkgY2FuIHBpY2sgdXAgb24gcGFzc2l2ZWx5LCB0aG91Z2g7IEFtZXJpY2FuIHNvdXJjZXMsIHdoaWNoIGFyZSB3aGF0IHRoZSBpbnRlcm5ldCBpcyBidWlsdCBvbiwgY2FyZSBhYm91dCB0aGUgQXRsYW50aWMgZmlyc3QgYW5kIGZvcmVtb3N0LiBJIGRvbid0IGxpa2UgdGhlIEF0bGFudGljLCBzZWxmaXNobHk6IGl0IGhhcyBhIGJhZCB0cmFjayByZWNvcmQsIGFuZCBJIHJlbWVtYmVyIGl0IGdyYXkuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkluIDIwMjIsIEkgdGVsbCBoaW0gSSdtIHdyaXRpbmcgdGhpcyBlc3NheSwgYW5kIEkgYXNrIGlmIEkgY2FuIHVzZSB0aGUgcGhvdG9zLiBIZSBhc2tzIHdoYXQgSSB3YW50IHRoZW0gZm9yLiBJIHNheSBJJ20gd3JpdGluZyBhYm91dCB0aGUgaW5jcmVhc2VkIHRvbGwgb2YgaHVycmljYW5lcyBvbiBhbiBlbnZpcm9ubWVudCB0aGF0IHJlbGllZCBvbiB0aGVtLiBIZSBzYXlzIGhlIHN1cHBvc2VzIE9kaWxlIHdvdWxkIGJlIHRoZSBvbmUgZm9yIHRoYXQuPC9wPlxyXG4gICAgPHA+SSB3YXNuJ3QgdGhlcmUsIEkgc2F5LiBJdCdzIHRoZSBmaXJzdCBiaWcgb25lIHdoZXJlIEkgd2Fzbid0IHRoZXJlLjwvcD5cclxuICAgIDxwPkhlIGFza3Mgd2h5IHRoYXQgbWF0dGVycy4gVGhpbmdzIGFyZSBnb2luZyB0byBrZWVwIGhhcHBlbmluZyB3aGlsZSB5b3UncmUgbm90IGhlcmUsIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+SSBrbm93LCBJIHNheS48L3A+XHJcbiAgICA8cD5TdXJ2aXZvcidzIGd1aWx0IGlzIGEgdGhpbmcsIG15IHBhcnRuZXIgc2F5cywgaW4gZWFyc2hvdCwgZnJvbSBvZmZzY3JlZW4uIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGUgc2VudCBtZSBwaG90b3MuIEluIHRoZSBlbmQsIEkgY2FuJ3QgcXVpdGUgYnJpbmcgbXlzZWxmIHRvIGRlc2NyaWJlIHRoZW0gaW4gdGltZS4gSSBwcm9taXNlIG15c2VsZiBJJ2xsIGNvbWUgYmFjayB0byBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Mic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgdGVsbCBteSBmYXRoZXIgdGhhdCBJJ20gd3JpdGluZyBhYm91dCB0aGUgZmluZ2VycHJpbnRzIG9mIGNsaW1hdGUgY2hhbmdlIGJyYWNrZXRlZCBieSBteSBsaWZlLiBJIHRlbGwgaGltIHRoYXQgYSBsaXR0bGUgb3ZlciBhIHF1YXJ0ZXIgY2VudHVyeSBpcyBhIHByZXR0eSBkZWNlbnQgZnJhbWUgd2l0aCB3aGljaCB0byBlbmNhcHN1bGF0ZSBpdC4gSSB0ZWxsIGhpbSB0aGF0IHNvbWV0aW1lcyBpdCBmZWVscyBsaWtlIGl0J3MgZm9sbG93aW5nIG1lIHVwLjwvcD5cclxuICAgIDxwPllvdSd2ZSBiZWVuIHdvcmtpbmcgeW91ciB3YXkgbm9ydGgsIGhlIHNheXMsIHdpdGggc29tZSBkZWxpZ2h0IGF0IGhvdyBpdCBsaW5lcyB1cC4gPC9wPlxyXG4gICAgPHA+RXZlcnl3aGVyZSBJIGdvLCBldmVyeSB5ZWFyLCBwZW9wbGUgdGVsbCBtZSB0aGF0IHRoaXMgaXNuJ3Qgd2hhdCB0aGUgd2VhdGhlciB1c3VhbGx5IGRvZXMsIEkgdGVsbCBoaW0uIEknbSBnZXR0aW5nIHByYWN0aWNlIGF0IHRoZSBwcmVtaXNlIGJ5IG5vdy48L3A+XHJcbiAgICA8cD5UaGF0J3MgdGhlaXIgcHJvYmxlbSwgaGUgc2F5cy4gSGUgc2F5cyBpdCdzIGEgZmFudGFzeSB0aGF0IGlzbid0IHJlbGV2YW50IHRvIHRoZSB3b3JsZCBhcyBpdCBpcyBhbmQgd2lsbCBjb250aW51ZSBiZWluZy48L3A+XHJcbiAgICA8cD5JIHNheSBJIHRoaW5rIGdyb3VuZGluZyB0aGVtc2VsdmVzIGluIHdoYXQgdGhleSBzdGlsbCB0aGluayBvZiBhcyBub3JtYWwgaXMgaG93IHBlb3BsZSBoZWxwIHRoZW1zZWx2ZXMgdW5kZXJzdGFuZCBjaGFuZ2UuPC9wPlxyXG4gICAgPHA+SGUgc2F5cyBpdCdzIHN0aWxsIHRoZSBjYXNlIHRoYXQgc3VjaCBncm91bmQgZG9lc24ndCBleGlzdC4gSSBzYXkgSSBrbm93LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkzJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SXQgaXMgSmFudWFyeSwgYW5kIEkgc3RpbGwgbGl2ZSBpbiBCZWxsZXZ1ZS4gSW4gdGhlIHRpbWUgYmV0d2VlbiBhbiBhZnRlcm5vb24ncyB3b3J0aCBvZiB0aGlzIGNsYXNzIGFuZCBzdGF5aW5nIGJlaGluZCBhZnRlciwgdGhlIHJhaW4gdGhhdCBteSBwYXJ0bmVyIGhvcGVkIHNpZ25hbGVkIGEgYnJlYWsgZnJvbSB0aGUgc25vdyBoYXMgdHVybmVkIHRvIGhhaWwuPC9wPlxyXG4gICAgPHA+SSBjaGVjayB0aGUgd2luZG93LiBJIGNvbWUgYmFjay4gSSdtIHNvcnJ5IGlmIHRoZXJlJ3MgYmFja2dyb3VuZCBub2lzZSwgSSBzYXkgdG8gbXkgaW5zdHJ1Y3Rvci4gSXQncyBoYWlsLjwvcD5cclxuICAgIDxwPlRoZXJlJ3MgYSBwYXJ0aWN1bGFyIHNvcnQgb2Ygc21pbGUgSSdtIGZhbWlsaWFyIHdpdGgsIHdoZW4gcGVvcGxlIGFyZSB0cnlpbmcgdG8gdG9uZSBkb3duIHRoZSBpbXBhY3Qgb2YgdGFsa2luZyBhYm91dCB0aGUgd2VhdGhlci4gSXQncyB0aGVyZSB3aGVuIGhlIHNheXMgaXQncyBub3Qgc3VwcG9zZWQgdG8gaGFpbC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5NCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgZmluZCBteXNlbGYgd2lzaGluZyBJJ2QgZ29uZSBvdXRzaWRlIGluIHRpbWUgZm9yIHRoZSBoYWlsLiBJdCdzIG5vdCBhIHRleHR1cmUgb2YgaWNlIGZvdW5kIG11Y2ggZWxzZXdoZXJlLCBhbmQgaGFzbid0IGdvdHRlbiBvbGQgZm9yIG1lIHlldDsgSSBsaWtlIHRvIGVhdCBpdC48L3A+XHJcbiAgICA8cD4oV2hlbiBpdCBzbm93ZWQsIG15IGRhZCB3YXMgZGlzYXBwb2ludGVkIHRoYXQgSSBkaWRuJ3QsIGhpcyB3b3JkcywgZ28gcGxheSBpbiB0aGUgc25vdy4gU28gd2FzIEksIGFkbWl0dGVkbHkuIEkgdGhvdWdodDogdGhlcmUgd2lsbCBiZSBtb3JlIHNub3cgbmV4dCB5ZWFyLiBJIHdpbGwgZG8gYmV0dGVyIGJ5IG15c2VsZiBuZXh0IHllYXIsIEkgdGhpbmsuKTwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk1Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGZpcnN0IHN1bW1lciBJJ20gc2V0dGxlZCBlbm91Z2ggaW4gU2VhdHRsZSB0byBiZSBhd2FyZSBvZiBtdWNoIG9mIGFueXRoaW5nLCBDYWxpZm9ybmlhIGlzIG9uIGZpcmUuIEkgYW0gZ2l2ZW4gdG8gdW5kZXJzdGFuZCB0aGF0IHRoaXMgaXMgbmV3LiBBc2ggZmFsbHMgbGlrZSBzbm93LCBvciBsaWtlIGEgQ29sZCBXYXIgZXJhIG51Y2xlYXIgUFNBLiBBIGZyaWVuZCBncm93aW5nIHVwIGlzIHZpc2l0aW5nIGJ1dCBJIGNhbid0IGRvIG11Y2ggbW9yZSB0aGFuIG1ha2UgaXQgZnJvbSB0aGUgY291Y2ggdG8gYW5vdGhlciBzaWRlIG9mIHRoZSByb29tLiA8L3A+XHJcbiAgICA8cD5XZSBkbyBtYW5hZ2UgdG8gZ28gdG8gdGhlIGdsYXNzIHNjdWxwdHVyZSBnYXJkZW4uIEkgdHJ5IHRvIHRha2UgcGhvdG9zLiBNeSBwaG9uZSBjYW4gY2FwdHVyZSB0aGUgY29sb3JzIG9mIHRoZSBnbGFzcyB1bmRlciBhbGllbiBsaWdodCwgb3IgaXQgY2FuIGNhcHR1cmUgdGhlIGdyYXkgc2t5IGFuZCByZWQgc3VuLiBJdCBkb2VzIG5vdCBrbm93IGhvdyB0byBtYWtlIHNlbnNlIG9mIHRoZSB0d28gb2YgdGhlbSB0b2dldGhlci48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyLCBteSBmcmllbmQsIGFuZCBJIHRhbGsgYWJvdXQgaG93IGNvb2wgaXQgd291bGQgYmUgdG8gY29tZSB1cCB3aXRoIGEgc2hvcnQgc3Rvcnkgd2hlcmUgSSBjb3VsZCB1c2UgdGhlIHBob3RvcyBJIGRpZCBnZXQgYXMgaWxsdXN0cmF0aW9ucy4gRXZlbiBpZiBJIGNhbid0IGNhcHR1cmUgdGhlIHdob2xlIG9mIGl0LCBpdCdzIHN0cmlraW5nLiBJdCB3b3VsZCBiZSBuaWNlIHRvIGdldCBzb21ldGhpbmcgb3V0IG9mIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBnZXQgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTcnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGdldCBiZXR0ZXIgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+WWVhcnMgbGF0ZXIsIGluIHRoZSBwYW5kZW1pYywgSSBhbHJlYWR5IG93biByZXNwaXJhdG9ycy4gSSB0YWtlIHRoZSBvcHBvcnR1bml0eSwgcGVyaW9kaWNhbGx5LCB0byBnZXQgYmV0dGVyIG9uZXMuIFRoZXJlJ3MgYSBwb3N0YWwgc3lzdGVtOyBJIGNhbiBkbyB0aGF0LiBJIGFtIGFsbCBidXQgdXNlZCB0byB0aGUgbWFpbC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5OSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IHNlY29uZCB3ZWVrIGluIE9oaW8sIEkgd2FudGVkIHRvIHNlbmQgYSBsZXR0ZXIgdG8gYSBmcmllbmQuIE15IFJBIGhhZCB0byB0ZWFjaCBtZSBob3cgdG8gYWRkcmVzcyBhbiBlbnZlbG9wZS4gSXQgc3RydWNrIG1lIGFzIHNvcmNlcnkgZm9yIHllYXJzOiB0byBvcmRlciB0aGluZ3MgYW5kIGhhdmUgdGhlbSBjb21lIHRvIHlvdS4gUmVzb3VyY2VzIGZsb3cgdG93YXJkcyBlbXBpcmVzLCBJIGtuZXcgd2hlbiBJIHdhcyBzaXg7IHBlb3BsZSBnbyB3aGVyZSB0aGUgcmVzb3VyY2VzIGFyZSwgSSB0ZWxsIHBlb3BsZSBhdCB0d2VudHktc2l4LCBmZWVsaW5ncyB0b3dhcmRzIHRoZSBlbXBpcmUgYXJlIGlycmVsZXZhbnQuIEJ1dCBvbiB0aGUgcGVyc29uYWwgbGV2ZWwtLXRoZXJlIHdhcyBzb21ldGhpbmcgbWFnaWMgaW4gc3VjaCByb2FkcyBsZWFkaW5nIHRvd2FyZHMgbWUuIFRoZSBmaXJzdCB0aGluZyBJIGJvdWdodCB3aXRoIG15IGNvbGxlZ2UgYWRkcmVzcyB3YXMgYSBjYW5lLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBwYXJ0bmVyIGFuZCBJIGhhdmUgYW4gYXJndW1lbnQgYWJvdXQgdGhlIGNvbmNlcHQgb2Ygc3dpbW1pbmcgYmVhY2hlczsgZm9yIHRoZSBzYWtlIG9mIHRoaXMgYXJndW1lbnQsIGxldCdzIHNheSBJIGFtIHR3ZW50eS10d28uIEhpcyBvY2VhbiBpcyB0aGUgUHVnZXQgU291bmQ6IGEgdGFtZSwgY29vbCBsaXR0bGUgdGhpbmcgdGhhdCBJIGtub3cgZnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgYnJpZGdlcywgd2l0aCBnbGFzc3kgZmxhdHMgYW5kIG5pYmJsaW5nIHdhdmVzLiBXZSBhcmUgZGlzY3Vzc2luZyB3aHkgY2hhcmFjdGVycyBpbiBhIHZpZGVvIGdhbWUgd291bGQgcGljayB1cCBhbmQgbGVhdmUgdGhlaXIgc2VjdGlvbiBvZiBhIGNvYXN0bGluZSB0byBzd2ltIHNvbWV3aGVyZSBlbHNlLjwvcD5cclxuICAgIDxwPlByZXN1bWFibHkgaXQncyB3aGVyZSB0aGUgc3dpbW1pbmcgYmVhY2hlcyBhcmUsIEkgc2F5LjwvcD5cclxuICAgIDxwPldoYXQgZG8geW91IG1lYW4gc3dpbW1pbmcgYmVhY2gsIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+QmVhY2hlcyB3aGVyZSBpdCdzIHNhZmUgdG8gc3dpbSwgSSBzYXksIGltcGF0aWVudGx5LiBXaXRoaW4gcmVhc29uLjwvcD5cclxuICAgIDxwPlRoZSByZXN1bHRpbmcgbG9uZyBhbmQgaGFsdGluZyBjb252ZXJzYXRpb24sIHJlbmRlcmVkIGFuIGFyZ3VtZW50IGJ5IGxhY2sgb2YgYW55IHVuaXZlcnNlIG9mIGNvbW1vbiByZWZlcmVuY2UsIGlzIGN1dCBzaG9ydCB3aGVuIGhpcyBtb3RoZXIgdGVsbHMgaGltIHRoYXQgdGhlaXIgZmFtaWx5IHZpc2l0ZWQgbmVhciBteSBob21ldG93biBiZWZvcmUgaGUnZCBiZSBhYmxlIHRvIHJlbWVtYmVyLiBBdCBhIHRvdXJpc3RzJyBiZWFjaCBoaXMgZ3JhbmRmYXRoZXIgdHVybmVkIGhpcyBiYWNrIG9uIHRoZSB3YXRlciBhbmQsIHdoZW4gaGUgd2VudCBmbHlpbmcgYWNjb3JkaW5nbHksIGxvc3QgYSBwYWlyIG9mIGRlbnR1cmVzLjwvcD5cclxuICAgIDxwPlNlZSwgSSBzYXkuIE5vcm1hbCBvY2Vhbi4gWW91IGRvbid0IHR1cm4geW91ciBiYWNrIG9uIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2UgaGF2ZSBoYWQgbG9uZyBlbm91Z2ggdG8gZ3JvdyBhY2N1c3RvbWVkIHRvIG9uZSBhbm90aGVyIHRoYXQgSSBzdHJ1Z2dsZSB0byByZW1lbWJlciBvdGhlciBkaXNqb2ludHMgb2YgdGhpcyBraW5kLiBUaGVyZSdzIGJlZW4gb3ZlciBoYWxmIGEgZGVjYWRlIHRvIGJ1aWxkIHRoZSBuZWNlc3NhcnkgY29uY2VwdHVhbCBicmlkZ2VzLiBPZnRlbiBlbm91Z2gsIHdlIHN0aWxsIGhhdmUgbW9tZW50cyB0aGF0IG1ha2UgaGltIHNheSwgU29tZXRpbWVzIEkgcmVtZW1iZXIgdGhhdCB3ZSBjb21lIGZyb20gZGlmZmVyZW50IHdvcmxkcy4gQnV0IHRoZXkgZG9uJ3QgbXVjaCBzcHJpbmcgdG8gbWVtb3J5IHRoZXNlIGRheXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGhhdmUgbWl4ZWQgZmVlbGluZ3Mgb24gcmVmZXJyaW5nIHRvIHByZXBhcmF0b3JpYSBhcyBhIGhpZ2ggc2Nob29sLiBJdCBnaXZlcyBwZW9wbGUgdGhlIGFwcHJveGltYXRlIGlkZWEgdGhhdCB0aGV5IG5lZWQsIGJ1dCBtb3JlIG9mdGVuIHRoYW4gbm90IEkgZmluZCBJIHdhbnQgdGhlIGFsaWVuYXRpb247IEknbSBqdXN0IG5vdCBlbnRpcmVseSBzdXJlIHdoZW4gSSBtYW5hZ2UgdGhhdCB2ZXJzdXMgYWN0dWFsIGluY29tcHJlaGVuc2lvbi4gQW5kIEkgZG9uJ3Qgd2FudCB0aGUgbGF0dGVyOyB0aGF0IGRlZmVhdHMgdGhlIHBvaW50LiBJIHB1dCBmYXIgdG9vIG11Y2ggZWZmb3J0IGludG8gdHJhbnNsYXRpb24gdGhhbiB0aGF0LjwvcD5cclxuICAgIDxwPkxldCdzIGJvdyB0byBhdWRpZW5jZSBhbmQgc2F5IEknbSBpbiBoaWdoIHNjaG9vbCwgZm9yIHRoaXMgb25lLiBJJ3ZlIGhhZCB0byBtb3ZlIHRvIHRoZSBjYXBpdGFsIG9mIHRoZSBzdGF0ZS0tZHVyaW5nIHRoZSB3ZWVrOyBzcGxpdHRpbmcgY3VzdG9keSB3aWxsIGRvIHRoZXNlIHRoaW5ncyB0byB5b3UtLWZvciBpdC4gSSdtIGEgc2Nob2xhcnNoaXAgc3R1ZGVudCBhdCBhIHByaXZhdGUgc2Nob29sLCBmb3IgcmVsYXRlZCByZWFzb25zLiBBdCB0aGlzIGdyYWRlIGxldmVsIGluIG15IGhvbWV0b3duIHRoZXJlJ3Mgb25seSB2b2NhdGlvbmFsIHNjaG9vbGluZywgYW5kIGl0J3Mgbm90IG1hbmRhdG9yeSBhbnl3YXkuIEZvciB0aGUgZmlyc3QgdGltZSBpbiBteSBsaWZlLGFzIGEgcmVzdWx0LCBJIGFtIG5vdCBpbiB0aGUgcHVibGljIHNjaG9vbCBzeXN0ZW0uPC9wPlxyXG4gICAgPHA+KE9uZSBlYXJseSBtZWFuaW5nIG9mIHRoaXMgaXMgdGhhdCB0aGUgc2Nob29sIGlzIGFpciBjb25kaXRpb25lZCwgd2hpY2ggaXQgZG9lcyBub3Qgb2NjdXIgdG8gbWUgdG8gcGFjayBmb3IgbXkgZmlyc3Qgd2VlayB0aGVyZS4gSSB0dXJuIGZpZnRlZW4gYW5kIG15IHRlZXRoIGFyZSBjaGF0dGVyaW5nIGF0IHRoZSBjb250cmFzdCBmb3IgaGFsZiB0aGUgZGF5LCB1bnRpbCBhIGNsYXNzbWF0ZSBpbmNyZWR1bG91c2x5IGxlbmRzIG1lIGhpcyBqYWNrZXQuKTwvcD5cclxuICAgIDxwPldlIGFyZSB3YXRjaGluZyBhIG1vdmllIGluIG9uZSBvZiB0aGUgdGhyb3dhd2F5IGNsYXNzZXMgd2hvc2UgcmVkZWVtaW5nIGZlYXR1cmVzIGFyZSBnZW5lcmFsbHkgbW92aWVzLCB3aGVuIHRoZSBwcm90YWdvbmlzdCBydW5zIG91dCBvbnRvIHRoZSBncmVlbiwgZ3JlZW4gbGF3biBvZiBzb21lIGZhbW91cyBjb2xsZWdlJ3Mgb2xkIEFtZXJpY2FuIGJ1aWxkaW5nLjwvcD5cclxuICAgIDxwPlRoZSBtZXRhbCByb29mIG9mIG15IGhpZ2ggc2Nob29sJ3MgbmV3IGJ1aWxkaW5nIChpZiB3ZSBjYWxsIGl0IGEgaGlnaCBzY2hvb2wsIGFwcHJveGltYXRpbmcpIHJhdHRsZXMgd2hlbiBpdCByYWlucywgYWx0aG91Z2ggaXQncyBub3QgY3VycmVudGx5IHJhaW5pbmcuPC9wPlxyXG4gICAgPHA+T25lIG9mIG15IGNsYXNzbWF0ZXMgcG9pbnRzIGFuZCBzYXlzLCBpbiBtdWNoIHRoZSBzYW1lIHRvbmUgYXMgcGVvcGxlIHN0YXJ0ZWQgY2l0aW5nIDxpPmxhIGNyaXNpczwvaT4gd2hlbiB0aGUgQW1lcmljYW4gcmVjZXNzaW9uIG1lYW50IHRoZXkgc3RvcHBlZCBleHBvcnRpbmcgb3VyIGVjb25vbXkncyB3b3J0aCBvZiB0b3VyaXN0cywgdGhhdCB3ZSBzaGVsbCBvdXQgc28gbXVjaCBmb3IgdHVpdGlvbiwgc28gd2h5IGRvZXNuJ3Qgb3VyIHNjaG9vbCBsb29rIGxpa2UgdGhhdD88L3A+XHJcbiAgICA8cD5UaGUgdGVhY2hlciBjb3VsZCBjb21tZW50IG9uIGhpc3RvcnksIGFuZCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgYSBuZXcgYnVpbGRpbmcuIFNoZSBjb3VsZCBjb21lbW50LCBldmVuLCBvbiBlbnZpcm9ubWVudDsgd2UgaGF2ZSBhbiBlbnZpcm9ubWVudGFsaXN0IGNvbXBvbmVudCBpbiBhbm90aGVyIGNsYXNzLCBhZ2dyZXNzaXZlbHkgdGhlbWVkIGFyb3VuZCBtYW5ncm92ZSBwcmVzZXJ2YXRpb24uPC9wPlxyXG4gICAgPHA+VGhpcyBpcyBub3QgdGhlIHNvcnQgb2YgcGVyc29uIHNoZSBpczsgc2hlIGlzIHRoZSBzb3J0IG9mIHBlcnNvbiB3aG8gdGVsbHMgcGFyYWJsZXMgYWJvdXQgdGhlIGZ1bmRhbWVudGFsIGRpZmZlcmVuY2VzIGluIGJlaGF2aW9yIGJldHdlZW4gYnVja2V0cyBvZiBNZXhpY2FuIGFuZCBBbWVyaWNhbiBjcmFicy48L3A+XHJcbiAgICA8cD5TbyB3aGF0IHNoZSBzYXlzIGlzIHRydWUgdG8gZm9ybTogc2hlIHNheXMsIHRoYXQncyBiZWNhdXNlIHdlIGxpdmUgaW4gYSB0aGlyZCB3b3JsZCBjb3VudHJ5LCBkZWFyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkzJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgZWlnaHRlZW4sIEkgaGF2ZSBub3QgeWV0IGxlYXJuZWQgdGhhdCwgd2hlbiBzb21lb25lIHRlbGxzIG1lIHRoZXkgZG9uJ3Qgc3BlYWsgU3BhbmlzaCwgdGhleSBtZWFuIHRoYXQgdGhleSBzcGVhayBubyBTcGFuaXNoLiBNZXhpY28gbWFuZGF0ZXMgZm9yZWlnbiBsYW5ndWFnZSBlZHVjYXRpb24gYWZ0ZXIgc2l4dGggZ3JhZGU7IEkgaGVhciBhYm91dCBwZW9wbGUgd2hvc2Ugc2Nob29scyBhcmUgbGFyZ2UgYW5kIHVyYmFuIGFuZCBtb25pZWQgZW5vdWdoIHRvIGhhdmUgY2hvaWNlcyBvZiBsYW5ndWFnZXMsIGJ1dCBldmVyeW9uZSBoYXMgdGhlIG9wdGlvbiBvZiBFbmdsaXNoLiBUaGVyZSBhcmUgZml2ZSB0aG91c2FuZCBwZW9wbGUgaW4gbXkgdG93biBhbmQgc2l4IGh1bmRyZWQgdGhvdXNhbmQgaW4gbXkgc3RhdGUuIFRoZSBvbmx5IG9wdGlvbiBpcyBFbmdsaXNoLiA8L3A+XHJcbiAgICA8cD5UaGUgb25seSBvcHRpb24gd2FzIEVuZ2xpc2ggbG9uZyBiZWZvcmUgdGhhdCwgYW55d2F5OyB3aGVuIHRoZSBtb25leSBhbmQgdGhlIG1lZGlhIGFuZCB0aGUgc2hpcHBpbmcgY29tZXMgaW4gb25lIGxhbmd1YWdlLCB5b3UgcGljayBpdCB1cC4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGVyZSdzIGEgc3BlY2lmaWMgZ2VuZXJhdGlvbiBvZiBTcGFuaXNoLUVuZ2xpc2ggc2xhbmcgSSBoYXZlIHRoYXQgSSBzdXNwZWN0IGlzIGRlYWQgYnkgbm93LiBJdCdzIGEgbWlkcG9pbnQ6IHZvY2FidWxhcnkgd2l0aG91dCBncmFtbWFyLCBrZXl3b3JkcyB3aXRob3V0IGNvbXByZWhlbnNpb24uIEhvdCBkb2dzIHZhcnkgd2lsZGx5IGJldHdlZW4gY291bnRyaWVzLCBhbmQsIHdpdGhpbiBNZXhpY28tLW5vdCB0aGF0IHlvdSdsbCBrbm93IHRoaXMgb25saW5lLS1iZXR3ZWVuIHN0YXRlcywgYW5kIHRodXMgSSBhbSBhcyBjb21taXR0ZWQgYXMgeW91IG1pZ2h0IGV4cGVjdCB0byB0aGUgYXJndW1lbnQgdGhhdCBubyBvbmUgZWxzZSBtYWtlcyB0aGVtIHJpZ2h0OyBhcyBzdWNoLCBJIGhhdmVuJ3QgaGFkIGEgaG90IGRvZyBzaW5jZSBJIHdhcyBlaWdodGVlbi4gPC9wPlxyXG4gICAgPHA+VGhlIGNhcnQgd2hlcmUgbXkgZmF0aGVyIGFuZCBJIHdlcmUgcmVndWxhcnMgaGFkIGEgaHVycmljYW5lIGxhbXAgd2l0aCBubyBnbGFzcywgZm9yIGEgd2hpbGUsIGFuZCBJIGxpa2VkIHN0YW5kaW5nIGNsb3NlIGVub3VnaCB0byB0aGUgY29va2luZyBzdXJmYWNlIHRvIGdldCB0aGUgdGluaWVzdCBwaXR0ZXItcGF0dGVyIG9mIGhvdCBvaWwgb24gbXkgYXJtcy4gPGk+SGF0ZXMgRWwgR1x1MDBGQ2VybzwvaT4sIHBhaW50ZWQgb24gdGhlIHdoaXRlIHN1cmZhY2UgYnkgdGhlIGtpbmQgb2YgZHJhZnRzbWFuIEkgd2FzIHRyYWluZWQgdG8gYmUgaW4gc2VjdW5kYXJpYSBhbmQgd2hvc2UgcHJvZmVzc2lvbiBoYXNuJ3QgZXhpc3RlZCBpbiB0aGUgbm9ydGggZm9yIGdlbmVyYXRpb25zOiB0aGUgPGk+aG90IGRvZzwvaT4gd2FzIGltcG9ydGVkIGJlZm9yZSB0aGUgRW5nbGlzaCBhZGplY3RpdmUtbm91biBvcmRlciBjb3VsZCBmb2xsb3cgc3VpdC48L3A+XHJcbiAgICA8cD5Bbm90aGVyIHdvcmQgSSB1c2UgYXMgYW4gZXhhbXBsZTogPGk+bWFjaFx1MDBFRG48L2k+LCBhbiBhbGwtcHVycG9zZSBpbnRlbnNpZmllci4gV2hlbiBFbmdsaXNoIGJyb3VnaHQgPGk+bWFjaGluZTwvaT5zIHRoZSBjbGVhcmVzdCBwb2ludCBvZiByZWZlcmVuY2UgaW4gY29tbW9uICBmb3IgdGhlIHJlZmVyZW50cyBvZiB0aGUgd29yZCB3YXM6IG1vcmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JbmR1c3RyaWFsaXphdGlvbiB0cmlja2xlcyBkb3duLiBFbWlzc2lvbnMgdHJpY2tsZSBkb3duLiBDbGltYXRlIGNoYW5nZSByZWFjaGVzIHVwLCBkcmlmdHMsIGxpa2UgQ2FsaWZvcm5pYSBzbW9rZSwgbGlrZSBpdCdzIGRvZ2dpbmcgbXkgZm9vdHN0ZXBzLiBMaWtlIGl0IHdhbnRzIHRvIGRvIGFueW9uZSdzIGFiaWxpdHkgdG8gdGFsayB0aGUgYmlnIHBpY3R1cmUgb3V0IHRoZSBvcHBvc2l0ZSBvZiBhbnkgZmF2b3JzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlcmUgaXMgYW4gYXJndW1lbnQgYWJvdXQgbWF5b25uYWlzZSBJIGhhdmUgd2hlbmV2ZXIgSSBjYW4uIEFtZXJpY2FucywgYXMgYSBuYXRpb25hbCBwYXN0aW1lLCBlbmpveSB0YWtpbmcgY3JlZGl0IGZvciB0aGUgY29uY2VwdCBhbmQgdGhlbiBtb25vbG9ndWluZyBhYm91dCBob3cgbXVjaCB0aGV5IGhhdGUgaXQuIFRoZXJlIGlzIGEgZ2VuZXJhbCBhdHRlbXB0IHRvIGVzdGFibGlzaCBpdCBhcyBzeW5vbnltb3VzIHdpdGggd2hpdGVuZXNzIGluIHRoZSByYWNpYWwgc2Vuc2UgYXMgb3Bwb3NlZCB0byB0aGUgdmlzdWFsIG9uZS4gSSBkb24ndCBrbm93IHdobyBiZW5lZml0cyBmcm9tIHRoYXQsIGJ1dCBpdCBtYWtlcyB0aGUgcHJlYW1ibGUgdG8gRW5nbGlzaC1sYW5ndWFnZSByZWNpcGVzIGZvciBKYXBhbmVzZSBwYW5jYWtlcyBleGhhdXN0aW5nLjwvcD5cclxuICAgIDxwPkkgaGF2ZSBzcGVudCB5ZWFycyBpdGVyYXRpbmcgb24gdGhlIGFyZ3VtZW50IHRoaXMgbWVhbnMgaGF2aW5nLCB3aGVuIEkgY2FuIGJvdGhlci4gTWF5b25uYWlzZSBpcyBjb21tb24gd2hlcmUgSSdtIGZyb20sIGluIHRoZSBkZXNlcnQ6IG1peGVkIHdpdGggbWlsayBhcyBhIGZhdCBmb3IgZnJ5aW5nIGFuZCBhIHRvcHBpbmcgZm9yIHNlZW1pbmdseSBoYWxmIG9mIGFsbCBzYXZvcnkgZGlzaGVzIHlvdSBjYW4gc2hha2UgYSBzcXVpcnQgYm90dGxlIGF0IGl0LjwvcD5cclxuICAgIDxwPlRoYXQncyBkaXNndXN0aW5nLCBwZW9wbGUgdGVsbCBtZSBpbiBFbmdsaXNoLCBhbmQgdGhleSB3b3VsZCBsaWtlIHRvIGJsYW1lIGEgd2hpdGUgcGVyc29uIGZvciBpdC48L3A+XHJcbiAgICA8cD5NYXlvbm5haXNlIGlzIGEgc2hlbGYtc3RhYmxlIGVtdWxzaW9uIG9mIGVnZ3MgYW5kIG9pbCwgSSB0ZWxsIHRoZW0uIFdobyBvbiBFYXJ0aCBoYXMgdGhlIHJlZnJpZ2VyYXRlZCB0cnVja3MgdG8gd2FzdGUgb24gdGhlIGFsdGVybmF0aXZlLiBJcyB0aGF0IHJlYWxseSB0aGVpciBwcmVmZXJyZWQgcmVzb3VyY2UgYWxsb2NhdGlvbi4gSXMgdGhhdCBzb21ldGhpbmcgdGhleSBjb25zaWRlciB3b3J0aHdoaWxlIGZvciBhIHBpZWNlIG9mIHN5bWJvbGlzbSB0aGV5IG1hZGUgdXAuPC9wPlxyXG4gICAgPHA+VGhpcyBkb2VzIG5vdCBhY3R1YWxseSBlbmQgYXJndW1lbnRzOyBmb3Igb25lIHRoaW5nLCBpdCByZXF1aXJlcyBhbiB1bmRlcnN0YW5kaW5nIG9mIGhvdyBoYXJkIGEgcmVmcmlnZXJhdGVkIHRydWNrIGhhcyB0byB3b3JrIGZvciAoc2F5KSBhIHRob3VzYW5kIG1pbGVzIG9mIGRlc2VydCBkdWUgc291dGggb24gdGhlIEhpZ2h3YXkgT25lIGFzIEkga25vdyBpdC4gRm9yIGFub3RoZXIsIGl0IHJlcXVpcmVzIGFuIHVuZGVybHlpbmcgdW5kZXJzdGFuZGluZyBvZiByZWZyaWdlcmF0aW9uLCBhbmQgdHJ1Y2tzLCBhbmQgcmVmcmlnZXJhdGVkIHRydWNrcywgYXMgbGltaXRlZCByZXNvdXJjZXMgdG8gYmVnaW4gd2l0aC4gPC9wPlxyXG4gICAgPHA+QnV0IGl0IGRvZXMgc29tZXRpbWVzIG1ha2UgaXQgbW9yZSB0b2xlcmFibGUgdG8gbGl2ZSB3aXRoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk3Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBubyBvbGRlciB0aGFuIGVsZXZlbiB5ZWFycyBvbGQsIGFuZCBJIGFtIGF0dGVtcHRpbmcsIGFzIEkgb2Z0ZW4gZG8sIHRvIGlnbm9yZSBteSBtb3RoZXIuIFRoZXJlIGlzIGEgY3V0dGluZyBxdWFsaXR5IHRvIGhlciB2b2ljZSwgYW5kIG15IGJyYWluIGlzIHR1bmVkIHRvIGl0IG1lYW5pbmcgZGFuZ2VyOyBzbywgYXMgSSBhbHNvIG9mdGVuIGRvLCBJIGFtIGZhaWxpbmcuIEkgd291bGQgYmUgZG9pbmcgYmV0dGVyLCBidXQgSSBhbSB3YWl0aW5nIGZvciBoZXIgaW4gdGhlIGNhciAodHJ1Y2s7IGl0IHdpbGwgdGFrZSBhdCBsZWFzdCBhIGRlY2FkZSBmb3IgbWUgdG8gdW5kZXJzdGFuZCB0aGF0IHRydWNrcyBhcmUgc3VwcG9zZWRseSBub3QgY2FycyksIGFuZCBJIGhhdmUgcnVuIG91dCBvZiBib29rcyB0byBkbyBpdCB3aXRoLiA8L3A+XHJcbiAgICA8cD4oVGhlcmUgYXJlIG5vdCByZWxldmFudCBtb2JpbGUgZGV2aWNlcyBpbiBteSBsaWZlIHlldDsgd2hlbiBJIGxlYXZlIHRoZSBob3VzZSwgSSBkbyBzbyB3aXRoIG9uZSBvciBtb3JlIGJvb2tzLiBBcyBteSBmYXRoZXIgcHV0cyBpdCwgYmFkIHRoaW5ncyBoYXBwZW4gd2hlbiB5b3UgbGVhdmUgdGhlIGhvdXNlIHdpdGhvdXQgYSBib29rLiBJZiB3ZSdyZSBnb2luZyB0byBhIGNpdHksIEkgZG8gc28gd2l0aCBhIHN0YWNrIGluIHRoZSBmb290d2VsbC4gU29tZXRpbWVzLCBhcyBub3csIEkgc3RpbGwgdW5kZXJlc3RpbWF0ZSB3aGF0IGNvdWxkIGJlIGVub3VnaC4pPC9wPlxyXG4gICAgPHA+TXkgbW90aGVyIGlzIGJ1eWluZyBhbGZhbGZhIGZvciBob3JzZXMsIHB1bGxlZCBvdmVyIGJ5IHRoZSBzaWRlIG9mIHRoZSByb2FkIHdoZXJlIHNoZSdzIG1ldCBhIG1hbiB3aXRoIGFuIGVpZ2h0ZWVuLXdoZWVsZXIgc3RhY2tlZCB3aXRoIGl0LiBJIHdpbGwgcmVhbGl6ZSwgbXVjaCBsYXRlciwgdGhhdCB0aGlzIHdhcyBwcm9iYWJseSBzb21lIGxldmVsIG9mIGNhc2ggdW5kZXIgdGhlIHRhYmxlOyBpdCB3aWxsIG5vdCBvY2N1ciB0byBtZSB1bnRpbCBhZHVsdGhvb2QgdGhhdCB0aGUgdHJ1Y2tlcnMgYnJvdWdodCB0aGUgcmVzdCBvZiB0aGUgYmFsZXMgdG8gc3RvcmVzLCB3aGVyZSBwcmVzdW1hYmx5IHBlb3BsZSB3b3VsZCBwYXkgZm9yIHRoZW0uIE15IGNvbnRleHQgaXMganVzdCB0aGlzOiB0aGUgZHVzdHkgc2lkZSBvZiBhIHJvYWQsIGEgcGlja3VwIHRydWNrLCBhIGZsYXRiZWQgZnVsbCBvZiByZWN0YW5ndWxhciBwcmlzbXMgdGhhdCwgbW9yZSBhbmQgbW9yZSBvZnRlbiwgYXJlIG5vdCB0aGUgcmlnaHQgc2hhZGUgb2YgZ3JlZW4uPC9wPlxyXG4gICAgPHA+U2hlIGRlbWFuZHMgaGUgbGV0IGhlciBicmVhayBvcGVuIGEgYmFsZSBmb3IgaW5zcGVjdGlvbiwgYW5kIHRoZW4gZmluZHMgd2hhdCBzaGUgYW50aWNpcGF0ZWQuIFRoaXMgaXMgZHJ5LCBzaGUgc2F5cywgb2YgdGhlIHN0aWZmIHllbGxvdyBvdXRzaWRlOyB0aGlzIGlzIHdldCwgb2YgdGhlIHBsaWFibGUgZ3JlZW4gaW5zaWRlLCB0b28gd2F0ZXItZGFyay4gVGhleSBoYXZlIHBpY2tlZCBhbmQgYmFsZWQgaXQgdG9vIHNvb24uIEl0J3MgZ29pbmcgdG8gcm90LjwvcD5cclxuICAgIDxwPlRoZSBtYW4gc2F5cyBpdCdzIHdoYXQgaGUgaGFzLCB3aGljaCBpcyBvYnZpb3VzbHkgdHJ1ZS4gSXQncyBhYm91dCB0aGUgZm9yZXNob3J0ZW5pbmcgb2YgdGhlIGdyb3dpbmcgc2Vhc29uOyBkcm91Z2h0IGFuZCBoZWF0IGFuZCBodXJyaWNhbmVzIHRoYXQgY29tZSB3aGVuIHRoZXkncmUgbm90IHN1cHBvc2VkIHRvLCB3aGljaCBpcyB0byBzYXkgdGhlIHNhbWUgdGhpbmcgdGhyaWNlLiBUaGUgc3RlbXMgYW5kIGxlYXZlcyBhcmUgcGFja2VkIGludG8gYmFsZXMgdG9vIGVhcmx5IG9yIHRvbyBsYXRlLiBTaGUncyByaWdodCB0aGF0IHRoZXkgbW9sZGVyLiBIZSdzIHJpZ2h0IHRoYXQgaXQncyBub3QgbGlrZSB0aGUgZmFybSBnYXZlIGhpbSBhbnl0aGluZyBlbHNlLiBJbiBhIGNvdXBsZSBtaW51dGVzIHRoZXknbGwgbW92ZSBvbiB0byBoYWdnbGluZyBhYm91dCBzcGlrZXMgaW4gcHJpY2UuPC9wPlxyXG4gICAgPHA+SSBrbm93IHRoaXMuIEkgcGljayB1cCB0aGUgYm9vayBzaGUncyBicm91Z2h0IHdpdGggaGVyIGZyb20gdGhlIGNlbnRlciBjb25zb2xlLCB0byBzZWUgaWYgSSBjYW4gdHVuZSB0aGUgb25nb2luZyBuZWdvdGlhdGlvbnMgYmV0dGVyIHJlYWRpbmcgaXQuIFRoZSBjaGFuZ2Ugb2Ygc2Vhc29ucyBpcyB0ZW4geWVhcnMgb3V0IGZyb20gY29taW5nIE5vcnRoIGVub3VnaCB0byBtYWtlIHRoZSBuZXdzLCB0aG91Z2ggdGhleSBpbmV2aXRhYmx5IGRvLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgdHdlbnR5LWZpdmUgSSBwaWN0dXJlIHRoZSBoZWF0IGRvbWUgb3ZlciBLaW5nIENvdW50eSBsaXRlcmFsbHkgZW5vdWdoOiBsaWtlIGEgZ3JlYXQgaGFuZCBoYXMgcmVhY2hlZCBvdmVyIGFuZCBkZWxpY2F0ZWx5IHBsYWNlZCBhIGdsYXNzIHBvdCBsaWQgb3ZlciB0aGUgbGFuZCwgd2l0aCBhbGwgdGhlIGNhcHR1cmVkIHN0ZWFtIHRoYXQgZW50YWlscy4gPC9wPlxyXG4gICAgPHA+SXQgaGFzIGNvbWUgdG8gbXkgYXR0ZW50aW9uIHRoYXQgbm8gb25lIGhlcmUgYnVpbHQgY2VpbGluZyBmYW5zIGludG8gdGhlaXIgaG91c2VzLiBJIGRvdWJsZSB0aGUgbnVtYmVyIG9mIGZhbnMgaW4gb3VyIGFwYXJ0bWVudCwgbWF0dGVyIG9mIGZhY3Q7IHRoZW4gSSB0cmlwbGUgaXQuIEkgcnVuIHNsaWdodGx5IGJ1dCBjcnVjaWFsbHkgYWhlYWQgb2YgdGhlIHN1YnNlcXVlbnQgcnVuIG9uIGZhbnMgaW4gc3RvcmVzLCB3aGVuIHBlb3BsZSB1bmRlcnN0YW5kIHdoYXQncyBnb2luZyBvbiBhcm91bmQgdGhlbS48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyJ3MgcGFyZW50cycgaG91c2UgaGFzIGFpciBjb25kaXRpb25pbmcuIEhpcyBtb3RoZXIgcG9pbnRzIG91dCB0aGF0IHRoaXMgcHV0cyB0aGVtIGluIGEgdGhpcmQgb2YgU2VhdHRsZSBhcmVhIHJlc2lkZW5jZXMuIEhlIGFuZCBJIGFuZCBoaXMgc2lzdGVyIHZpc2l0LCBpbiBzb21lIGRlc3BlcmF0aW9uOiB0aHJlZSBob3VzZWhvbGRzIHRvdGFsLCBwcm9wb3J0aW9uYXRlLiBUaGV5IGRvIG5vdCBoYXZlIGZhbnM7IEkgYW0gYmFmZmxlZC4gVGhpcyBpcyB3aGVuIEkgbm90aWNlIHRoYXQgdGhleSBkb24ndCBoYXZlIGEgY2VpbGluZyBmYW4uIEkgdHJ5IHRvIGJlIG1vcmUgb2JzZXJ2YW50IHRoYW4gdGhhdCwgYnV0IGl0IGhhZG4ndCBvY2N1cnJlZCB0byBtZSB0byBzZWUgYSBjZWlsaW5nIHdpdGhvdXQgb25lLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkga25vdyB0aGVzZSB0ZW1wZXJhdHVyZXMgdGhlIHdheSBteSBsb3ZlZCBvbmVzIGRvIG5vdCwgYnV0IEkgZGlkbid0IGxpa2UgdGhlbSBhbnkgYmV0dGVyIHdoZW4gSSB3YXMgeW91bmdlci4gSSB3ZWFyIG1vcmUgbGF5ZXJzIG5vdywgYnkgbWVkaWNhbCBuZWNlc3NpdHksIGFuZCBhbSBsZXNzIGFjY2xpbWF0ZWQsIHRyYWRpbmcgdGhlIHBsYWNpZCByZXNpZ25hdGlvbiB0byBzdW1tZXIgY29tbXV0ZXMgYXQgMTIwRiAodGhlIGNhciBoYWQgYnJva2VuLCBteSBmaXJzdCBzdW1tZXIgaW4gcGVyaGFwcy1oaWdoIHNjaG9vbCwgaW4gc3VjaCBhIHdheSBhcyBtZWFudCBvbmUgaGFkIHRvIHJ1biB0aGUgaGVhdGVyIGluIG9yZGVyIHRvIGlkbGUgaXQsIHdoaWNoIGRpZG4ndCBoZWxwKSBmb3IgdG9sZXJhdGluZyBzbm93LiBUaGUgdXBzaG90IGlzIHRoYXQgSSBhbSBtb3JlIGZ1bmN0aW9uYWwgYnV0IHBvb3JseSBmdW5jdGlvbmluZzsgSSBkb24ndCByZWFsaXplIHVudGlsIGxhdGVyIHdoeSBJJ20gbm90IGVhdGluZyBvciBzbGVlcGluZywgYW5kIHRoZW4gSSByZW1lbWJlci48L3A+XHJcbiAgICA8cD5JIGFkZCBhaXIgY29uZGl0aW9uaW5nIHRvIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3Igb3VyIG5leHQgYXBhcnRtZW50LCBsb25nIHNob3QgdGhhdCBpdCBpcy4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGVyZSwgZm9yIHRoZSBzZWNvbmQgdGltZTogVHVlc2RheS4gMjAyMi4gRmVicnVhcnkuIEluY3JlYXNpbmdseSBoZWF2eSBzbm93LCB3aGl0ZXIgdGhhbiBteSBwYXJ0bmVyJ3Mga251Y2tsZXMgb24gdGhlIHN0ZWVyaW5nIHdoZWVsLjwvcD5cclxuICAgIDxwPlwiSSBoYXRlIHRoaXMsXCIgaGUgc2F5cywgbm90IGZvciB0aGUgZmlyc3QgdGltZS48L3A+XHJcbiAgICA8cD5cIkl0J3MgYmVhdXRpLS1JJ20gc29ycnksXCIgSSBzYXksIHRvIG15IHBhcnRuZXIsIHdobydzIHRoZSBvbmUgd2hvIGhhcyB0byBkcml2ZSB0aHJvdWdoIGl0LiBBcyB0aGUgdHJlZXMgd2UgcGFzcyBieSBhcmUgcmVuZGVyZWQgaW50byBibGFjayBhbmQgd2hpdGUgc3RyYWlnaHQgbGluZXMsIHJlYWNoaW5nIG91dCB0byBtZS4gXCJJIHN0aWxsIHRoaW5rIGl0J3MgYmVhdXRpZnVsLCBJJ20gc29ycnkuXCIgPC9wPlxyXG4gICAgPHA+VGhlIHVyZ2UgdG8gYXBvbG9naXplIGlzIGJlY2F1c2UgaGUncyBzdHJlc3NlZC4gSSBrbm93IHRoaXMgbWFrZXMgaXQgZGlmZmljdWx0LCBldmVuIHdpdGhvdXQgdGhlIGNvdW50ZXJ3ZWlnaHQgb2YgYSBzd2F0aGUgb2Ygb3VyIGZvcm1lciBhcGFydG1lbnQsIHRvIGRyaXZlLiBJIHNhdyB0aGUgYWR2aXNvcnkgYWJvdXQgYmxhY2sgaWNlIGZpcnN0IGJldHdlZW4gdGhlIHR3byBvZiB1cy4gSSBrbm93IGZpdmUgd2ludGVycyB3b3J0aCBvZiB3aGF0IHNub3cgZG9lcyB0byBTZWF0dGxlLCB3aGVyZSB0aGUgd2ludGVyIHdlYXRoZXIgaXMgbm90IHN1cHBvc2VkIHRvIHNub3cuIDwvcD5cclxuICAgIDxwPkFuZCBiZWNhdXNlIEkgdHJ1c3QgaGltIGVub3VnaCB0byBjb21tZW50IG9uIHRoZSBiZWF1dHksIHRoZSBwb2ludCBvZiB2aWV3IHRoYXQgYmVpbmcgYSBwZXJwZXR1YWwgcGFzc2VuZ2VyIGNhbiBhZmZvcmQgbWUuIEhlIGtub3dzIHdoYXQgaGUgY2hvc2UgdG8gbWFycnk7IEkgY2FuIGFmZm9yZCB0byBibHVydCBvdXQgbXkgZmVlbGluZ3Mgb24gcHJlY2lwaXRhdGlvbi4gSSB0cnkgdG8gbWVtb3JpemUgaXQsIHNub3cgbmVhciBtaWRuaWdodCBpbiBhIG1vdmluZyBjYXIsIGZvciBsYXRlci4gRm9yIHRoaXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkknbSBub3Qgc29ycnkgdGhhdCBoZSBjYW4ndCBzaGFyZSBoaXMgd2VhdGhlciBhcyBoZSBtZWFucyBpdCB0byBiZSB3aXRoIG1lLCBub3QgdW5sZXNzIEkgdGhpbmsgYWJvdXQgaXQuIE5vIG9uZSdzIGJlZW4gYWJsZSB0byBkbyB0aGF0LCBhbnl3aGVyZSBJIGdvLCBpbiBteSBlbnRpcmUgYWR1bHQgbGlmZS4gSSBkb24ndCBrbm93IGhvdyBvbmUgd291bGQgc3RhcnQuPC9wPlxyXG4gICAgPHA+QnV0IEkgZG8ga25vdywgd2hlbiBJIHRoaW5rIGFib3V0IGl0LCB0aGF0IHRoYXQncyBiZWluZyBzdG9sZW4gZnJvbSBoaW0gYnkgYXR0cml0aW9uOyB3ZSB0YWxrIGFib3V0IGZsb29kIHJpc2sgd2hlbiB3ZSB0YWxrIGFib3V0IG91ciBsb25nLXRlcm0gZnV0dXJlLCBhYm91dCBTZWF0dGxlIGFuZCBpdHMgc2VhIGxldmVsLCBhYm91dCB0aGUgaW5ldml0YWJpbGl0eSBvZiBtb3ZpbmcgaW5sYW5kIHdoZW4gd2UgbGl2ZSBsb25nIGVub3VnaCB0byBkbyBzby4gKEkgdGVsbCBoaW0gSSd2ZSBoZWFyZCBnb29kIHRoaW5ncyBhYm91dCB0aGUgVHdpbiBDaXRpZXMnIGFiaWxpdHkgdG8gbWFpbnRhaW4gYSBkZWNlbnQgcmFtcC4gUHJlY2lwaXRhdGlvbiBraWxscyBwYXZlbWVudCwgdGhlIHdheSB3YXRlciBjYW4ga2lsbCBhbnl0aGluZy4pIFVuZGVyZ2lyZGluZyBpdCBhbGw6IHdlJ3JlIG5vdCBnaXZpbmcgdXAgb24gaGlzIGhvbWUgYW5kIGZhbWlseSBhbnkgdGltZSBzb29uLCBidXQgd2l0aGluIG91ciBsaXZlcyB3ZSBmdWxseSBleHBlY3QgdG8gZG8gc28sIGFzIG1hdHRlciBvZiBmYWN0IGFzIGdpdmluZyBoaW0gbXkgbWVkaWNhbCBwb3dlciBvZiBhdHRvcm5leS48L3A+XHJcbiAgICA8cD48aT5UaGluZ3MgYXJlIGp1c3QgZ29pbmcgdG8ga2VlcCBoYXBwZW5pbmcgd2hpbGUgeW91J3JlIG5vdCBoZXJlLDwvaT4gbXkgZmF0aGVyIHNhaWQuIFJhaW4gY3JlZXBzIHVuZGVyIHJvYWRzIGFuZCBzaWRld2Fsa3MgYmFjayBob21lLCB3aGVuIHRoZXkncmUgcGF2ZWQsIGFuZCBwdWxscyB0aGVtIGludG8gY3JhdGVycy4gU2VhdHRsZSBoYXJkbHkgZXNjYXBlcyBwb3Rob2xlcyBpdHNlbGYuIEJ1dCB5b3Ugd291bGRuJ3Qga25vdyB0aGF0IGZyb20gdGhlIG1lZGlhLCBpZiB5b3VyIHZhbnRhZ2UgcG9pbnQgaXMgYSB0aGlyZC13b3JsZCBjb3VudHJ5LjwvcD5cclxuICAgIDxwPkkgbWVhbnQsIHllYXIgb24geWVhciBvbiB5ZWFyLCB0byBnbyBiYWNrIHRvIE1leGljby4gTm90IGhvbWU7IG5vdCBvbmNlIEknZCBkaXNjb3ZlcmVkIHRoZSBsdXh1cmllcyBvZiBwdWJsaWMgdHJhbnNwb3J0YXRpb24gdGhhdCBjb3VsZCBmZXJyeSBtZSB3aXRob3V0IGZhdm9ycyB0byBkb2N0b3JzIEkgc2VlIGZvciB0aGUgc2FtZSByZWFzb25zIEkgY2FuJ3QgZHJpdmUgYW5kIGZvciBvdGhlciB0aGluZ3MgYWxpa2UuIEJ1dCBELkYuLCBvciBHdWFkYWxhamFyYS4gTGl0dGxlIGxlc3MgYWxpZW4gdGhhbiBoZXJlLCBidXQtLWlmIEkgY291bGQganVzdCBmaW5pc2ggbXkgZGVncmVlLCBzb21lZGF5LS1tb3JlIGJ1eWluZyBwb3dlci48L3A+XHJcbiAgICA8cD5CdXQgdG8gZ2V0IG91dCBvZiBPaGlvIEkgZm9sbG93ZWQgbXkgcGFydG5lciBob21lLCBhbmQgaGUgaGFzIGZhbWlseSBoZXJlLiBXaGVyZSB0aGVyZSdzIHJ1bm5pbmcgd2F0ZXIgYXMgYSBtYXR0ZXIgb2YgY291cnNlLCBhbmQgeW91IGNhbiBkcmluayBpdCwgaWYgeW91IHdhbnQsIHdoZW4geW91IG5lZWQgc29tZXRoaW5nIHdpdGggd2hpY2ggdG8gc3dhbGxvdyBtZWRpY2F0aW9uIHRoYXQgY2FtZSBpbiB0aGUgbWFpbC48L3A+XHJcbiAgICA8cD5BbmQgbm93IEkgcHV0IGRvd24gcm9vdHMgYXMgdGhlaXIgcmVzZW1ibGFuY2UgdG8gaGlzIG1vZGVsIG9mIHRoZSBjaXR5IGhlIGJyb3VnaHQgbWUgdG8gZXJvZGVzLiBXaW50ZXIgc25vd3M7IHN1bW1lciBidXJucy4gSSBkb24ndCBrbm93IGFueSBkaWZmZXJlbnQsIGFuZCBvbmx5IGJlbGF0ZWRseSB3b25kZXIgaWYgaGUncyB3YW50ZWQgbWUgdG8uIEhpcyBwYXJlbnRzIGhhdmUgYSBsYXduOyB0aGUgR3JlYXRlciBTZWF0dGxlIG9mIGhpcyBjaGlsZGhvb2QgaXMgYXBwcm94aW1hdGVseSBhcyBhbGllbiB0byBtZSwgaW4gYm90aCB3YXlzLCBhbmQgdW5hdmFpbGFibGUgYXMgYSBiYWNrZHJvcC4gV2hhdCBJJ3ZlIGxvc3QgYWxvbmcgdGhlIHNhbWUgbGluZXMgaXMgYW4gdW5rbm93bi4gSSB3YW50IHRvIHNob3cgaGltIE9jdG9iZXIsIHRob3VnaCBJIGRvbid0IGtub3cgaG93IG11Y2ggT2N0b2JlcidzIGxlZnQgdG8gc2hvdy4gSSBkb24ndCBmZWVsIGl0LCB0aG91Z2gsIGFic2VudCB0aGF0IGV4cGVyaWVuY2Ugb2YgYWN0dWFsbHkga25vd2luZyB3aGF0IGhhc24ndCBzdXJ2aXZlZCBteSBjaGlsZGhvb2QgZWl0aGVyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JJ3ZlIGxpdmVkIGxvbmdlciBpbiBTZWF0dGxlIHRoYW4gYW55d2hlcmUgZWxzZSBpbiB0aGUgVW5pdGVkIFN0YXRlcywgYnV0IG5vdCBsb25nIGVub3VnaCB0byBsb3NlIHRoaW5ncyB0byB0aGUgcHJlc2VudC4gSSBkb24ndCBoYXZlIGEgc2Vuc2Ugb2YgcGF0dGVybnMgYWJvdXQgaXQgc2F2ZSBpbiB0aGUgYnJvYWRlc3Qgb2Ygc2Vuc2VzOyB0aGlzIGlzIHdoYXQgSSBrbm93LiBJIGNoZWNrIHRoZSB3ZWF0aGVyLiBQZW9wbGUgYXNrIGlmIGl0IHRvcm1lbnRzIG1lLiBJIGRvbid0IHRlbGwgdGhlbSBJJ20gZnJvbSBhIGRlc2VydCwgYnV0IEkgdGVsbCB0aGVtIEkgbGlrZSBwcmVjaXBpdGF0aW9uLjwvcD5cclxuICAgIDxwPkFsbCBvZiBpdC4gQWx3YXlzLiBFdmVuIHRoZSBzbm93LjwvcD5cclxuICAgIDxwPlwiSSdtIHNvcnJ5LFwiIEkgc2F5LCBmb3IgbGFjayBvZiBhbnl0aGluZyBlbHNlIHRvIGRvLjwvcD5cclxuICAgIDxwPlwiSXQgaXNuJ3QgPGk+eW91cjwvaT4gZmF1bHQsXCIgaGUgc2F5cy4gXCJJIGp1c3Qgd2lzaCBpdCBjb3VsZCd2ZSB3YWl0ZWQuXCIgPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuIiwgImNvbnN0IGZhY2VzID0gWydhZ3VpbGEnLCAnc29sJ11cclxuXHJcbmNvbnN0IGZsaXAgPSAoKCkgPT4ge1xyXG4gIGxldCBwaWNrO1xyXG4gIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgIHBpY2sgPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgIHBpY2sgPSAxO1xyXG4gIH1cclxuICByZXR1cm4gZmFjZXNbcGlja107XHJcbiB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FyZGVuKCkge1xyXG4gY29uc3QgZ2FyZGVuTWUgPSAoKSA9PiB7XHJcbiAgIGlmIChmbGlwKCkgPT09ICdhZ3VpbGEnKSB7XHJcbiAgIHJldHVybiA8Q2hpR2FyMSAvPjtcclxuICB9IGVsc2Uge1xyXG4gICByZXR1cm4gPENoaUdhcjIgLz47XHJcbiAgfVxyXG4gfVxyXG5cclxuIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAge2dhcmRlbk1lKCl9XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGlHYXIxKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nQ2hhcmRlbjEnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9jaGlfdmVyX2dhcmQxLmpwZWcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuIFxyXG4gZXhwb3J0IGZ1bmN0aW9uIENoaUdhcjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBpZD0nQ2hhcmRlbjInIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9jaGlfdmVyX2dhcmQyLmpwZWcnIGFsdD0nJy8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59IiwgImNvbnN0IGNhcF9oZXJlID0gJ1NjcmVlbnNob3Qgb2YgYSBzZWN0aW9uIG9mIGEgc2F0ZWxpdGUgbWFwIG9mIHRoZSBnbG9iZS4gRmluZCB0aGUgZW5kIG9mIHRoZSBBbWVyaWNhbiBDYWxpZm9ybmlhOyBoZXJlLCBTYW4gRGllZ28uIEdvIGFzIHN0cmFpZ2h0IG9mIHNvdXRoIGFzIHlvdSBjYW4gZ2V0IGZvciBhIHRob3VzYW5kIG1pbGVzIG9uIHRoZSBvbmx5IGhpZ2h3YXksIHVudGlsIHlvdSBoaXQgdGhlIHBvaW50IHdoZXJlIHRoZSBUcm9waWMgb2YgQ2FuY2VyIG1lZXRzIHRoZSBQYWNpZmljIGNvYXN0bGluZS4gVGhpcyBpcyBUb2RvcyBTYW50b3MuIFlvdSBhcmUgaGVyZS4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZGlsZSgpIHtcclxuIGNvbnN0IG9kaWxlID0gKCkgPT4ge1xyXG4gIHZhciBwaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgaWYgKHBpY2sgPT09IDApIHsgcmV0dXJuICggPE9kaWxlMSAvPiApfSBcclxuICBlbHNlIGlmIChwaWNrID09PSAxKSB7IHJldHVybiAoIDxPZGlsZTIgLz4gKX0gXHJcbiAgZWxzZSBpZiAocGljayA9PT0gMikgeyByZXR1cm4gKCA8T2RpbGUzIC8+ICl9XHJcbiAgZWxzZSBpZiAocGljayA9PT0gMykgeyByZXR1cm4gKCA8T2RpbGU0IC8+ICl9XHJcbiAgZWxzZSBpZiAocGljayA9PT0gNCkgeyByZXR1cm4gKCA8T2RpbGU1IC8+ICl9XHJcbiAgZWxzZSB7IHJldHVybiAoIDxPZGlsZTYgLz4gKX1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtvZGlsZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2RpbGUxKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGUxJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTAxLmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTIoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTInIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMDIuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlMygpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0wMy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gT2RpbGU0KCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGU0JyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTA0LmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTUoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTUnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMTUuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlNigpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlNicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0xNy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2RlKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkaXRfb2RlJyBpZD0nT2RlJyBjbGFzc05hbWU9J3BvZW0nPlxyXG4gICA8aW1nIHNyYz0nL2luZGlnb19wYWludF9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5mb3JnZXR0aW5nIHRoZSBuYXRpb24gaXMgYSBzeW5kcm9tZS48L3A+XHJcbiAgICA8cD5BbGwgdGhhdFx1MjAxOXMgbGVmdCBvZiB0aGUgc2VhIGluIHlvdSBpcyBmb2FtLDwvcD5cclxuICAgIDxwPnRoZSBjb2FzdGxpbmUncyBicm9rZW4gdm9pY2UgYW5kIGFsbCBpdHMgY3JhZ3MuPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBpZD0nY3JlZGl0X29kZScgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbic+XHJcbiAgICBVcmF5b1x1MDBFMW4gTm9lbCw8YnIvPjxjaXRlPlwiTm8gTG9uZ2VyIE9kZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpblN1bSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdXaW5TdW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9zZWFzb24nIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgIDxpbWcgc3JjPScvYmx1ZWJsYWNrX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUnPlxyXG4gICAgPHA+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7c2l0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBvZW0sIGludmlnb3JhdGVkPC9wPlxyXG4gICAgPHA+d2l0aCBpbmt5IGF3a3dhcmQgYmxhbmtuZXNzLjwvcD5cclxuICAgIDxwPlRoZSBib3R0b20gdGVldGggb2Ygc3VtbWVyPC9wPlxyXG4gICAgPHA+aW4gd2ludGVyIGNoYXR0ZXJpbmc6IGhlcmVcdTIwMTlzIHRoZSBtb29uLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnIGlkPSdjcmVkX3NlYXNvbic+Tm9haCBFbGkgR29yZG9uLDxici8+PGNpdGU+XCJTdW1tZXIgaW4gV2ludGVyIGluIFN1bW1lclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmaW5lKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J2RlZmluZScgY2xhc3NOYW1lPSdjaXRlJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfd2h5dGUnPlxyXG4gICA8aW1nIHNyYz0nL3BvbGFyb2lkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5Db25zaWRlciBjbGltYXRlIGNoYW5nZSBhcyBhYm91dCA8Yj50aGUgdGltaW5nIG9mIHJlbGF0aW9uc2hpcHM8L2I+IHdlIGhhdmUgd2l0aCBhbGwgdGhhdCdzIGFyb3VuZCB1cy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX3doeXRlJz5cclxuICAgIEt5bGUgV2h5dGUsPGJyLz48Y2l0ZT5cIkJyYWlkaW5nIEtpbnNoaXAgYW5kIFRpbWVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJcclxuXHJcbmNvbnN0IGNhcF9vaCA9ICdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBPaGlvLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMsIGZyb20gMTg5NSB0byAyMDIxLidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPaGlvKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdPaGlvJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnIGFyaWEtZGVzY3JpYmVkYnk9J2NhcF9vaCc+PGltZyBzcmM9Jy9zdHJpcGVzX29oLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfb2gnIGNsYXNzTmFtZT0nQVJJQWNhcCcgYXJpYS1oaWRkZW49J3RydWUnPntjYXBfb2h9PC9kaXY+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn0iLCAiLy9mdW5jdGlvbiB2aXNpYmxlQ2FwKGUpIHtcclxuIC8vZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuLy99XHJcbi8vTXVsdGlwbGUgYXR0ZW1wdHMgYmVpbmcgbWFkZSB0byBnZXQgdGhlIGNhcHRpb24gY29uZGl0aW9uYWwgZGlzcGxheSB0byB3b3JrIGFzIGludGVuZGVkIFxyXG5cclxuXHJcbmNvbnN0IGNhcF93YSA9ICdcIldhcm1pbmcgc3RyaXBlc1wiIHZpc3VhbGl6YXRpb24gZm9yIHRoZSBzdGF0ZSBvZiBXYXNoaW5ndG9uLCBzaG93aW5nIGFuIG92ZXJhbGwgaW5jcmVhc2UgaW4gd2FybSB5ZWFycyBhbmQgdGhlIG5lYXItdmFuaXNobWVudCBvZiBjb2xkIG9uZXMsIGZyb20gMTg5NSB0byAyMDIxLidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXNoaW5ndG9uKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXYXNoaW5ndG9uJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnIGFyaWEtZGVzY3JpYmVkYnk9J2NhcF93YSc+PGltZyBzcmM9Jy9zdHJpcGVzX3dhLnBuZycgYWx0PScnIC8+XHJcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3NlY3JldCcgYXJpYS1oaWRkZW49J3RydWUnPiAgXHJcbiAgICA8ZGl2IGlkPSdjYXBfd2EnIGNsYXNzTmFtZT0nQVJJQWNhcCcgYXJpYS1oaWRkZW49J3RydWUnPntjYXBfd2F9PC9kaXY+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbi8vTm90IHVzaW5nIHJpZ2h0IG5vdzogXHJcbi8vIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZSgndW5zZWUnKTtcclxuLy9vbkZvY3VzPXsoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJ3Nob3dDYXAnKVxyXG4gIC8vICB9fVxyXG4gIC8vICBvbkJsdXI9eygpID0+IHtcclxuICAvLyAgIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyAgfX1cclxuICAvLyAgICB7IHVzZVN0YXRlKCdzaG93Q2FwJykgfHwgPGRpdj57Y2FwX3dhfTwvZGl2PiB9IiwgIi8vZnVuY3Rpb24gdmlzaWJsZUNhcChlKSB7XHJcbiAvL2UudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbi8vfVxyXG4vL011bHRpcGxlIGF0dGVtcHRzIGJlaW5nIG1hZGUgdG8gZ2V0IHRoZSBjYXB0aW9uIGNvbmRpdGlvbmFsIGRpc3BsYXkgdG8gd29yayBhcyBpbnRlbmRlZCBcclxuXHJcblxyXG5jb25zdCBjYXBfd2EgPSAnXCJXYXJtaW5nIHN0cmlwZXNcIiB2aXN1YWxpemF0aW9uIGZvciB0aGUgc3RhdGUgb2YgV2FzaGluZ3Rvbiwgc2hvd2luZyBhbiBvdmVyYWxsIGluY3JlYXNlIGluIHdhcm0geWVhcnMgYW5kIHRoZSBuZWFyLXZhbmlzaG1lbnQgb2YgY29sZCBvbmVzLCBmcm9tIDE4OTUgdG8gMjAyMS4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FzaGluZ3RvbigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nV2FzaGluZ3RvbicgY2xhc3NOYW1lPSdmbGlwLWluLWhvci10b3AgaGVybycgcm9sZT0naW1nJyBhcmlhLWRlc2NyaWJlZGJ5PSdjYXBfd2EnPjxpbWcgc3JjPScvc3RyaXBlc193YS5wbmcnIGFsdD0nJyAvPlxyXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdzZWNyZXQnIGFyaWEtaGlkZGVuPSd0cnVlJz4gIFxyXG4gICAgPGRpdiBpZD0nY2FwX3dhJyBjbGFzc05hbWU9J0FSSUFjYXAnIGFyaWEtaGlkZGVuPSd0cnVlJz57Y2FwX3dhfTwvZGl2PjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG4vL05vdCB1c2luZyByaWdodCBub3c6IFxyXG4vLyBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJ3Vuc2VlJyk7XHJcbi8vb25Gb2N1cz17KCkgPT4ge1xyXG4gIC8vICAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKCdzaG93Q2FwJylcclxuICAvLyAgfX1cclxuICAvLyAgb25CbHVyPXsoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoJycpXHJcbiAgLy8gIH19XHJcbiAgLy8gICAgeyB1c2VTdGF0ZSgnc2hvd0NhcCcpIHx8IDxkaXY+e2NhcF93YX08L2Rpdj4gfSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2hhbSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0na2lja2VyJz5cclxuICAgPGRpdiBpZD0na2ltZyc+PGltZyBzcmM9Jy9jbGltYXRlX3N0cmlwZXNfbXgucG5nJyBhbHQ9J1RoZSBsYWJlbGVkIFwid2FybWluZyBzdHJpcGVzXCIgY2hhcnQgZm9yIE1leGljby4gVGhlIHN0cmlwZXMgYXJlIHRoZSBzYW1lIG9uZXMgdGhhdCBoYXZlIGZvcm1lZCB0aGUgXCJ0YXBlc3RyeVwiIGJhY2tncm91bmQgb2YgdGhlIGVzc2F5IGFsbCBhbG9uZy4nIGNsYXNzTmFtZT0nc2xpZGUtaW4tYmx1cnJlZC1ib3R0b20nIC8+PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gKVxyXG59IiwgImNvbnN0IGNhcF9oZXJlID0gJ1NjcmVlbnNob3Qgb2YgYSBzZWN0aW9uIG9mIGEgc2F0ZWxpdGUgbWFwIG9mIHRoZSBnbG9iZS4gRmluZCB0aGUgZW5kIG9mIHRoZSBBbWVyaWNhbiBDYWxpZm9ybmlhOyBoZXJlLCBTYW4gRGllZ28uIEdvIGFzIHN0cmFpZ2h0IG9mIHNvdXRoIGFzIHlvdSBjYW4gZ2V0IGZvciBhIHRob3VzYW5kIG1pbGVzIG9uIHRoZSBvbmx5IGhpZ2h3YXksIHVudGlsIHlvdSBoaXQgdGhlIHBvaW50IHdoZXJlIHRoZSBUcm9waWMgb2YgQ2FuY2VyIG1lZXRzIHRoZSBQYWNpZmljIGNvYXN0bGluZS4gVGhpcyBpcyBUb2RvcyBTYW50b3MuIFlvdSBhcmUgaGVyZS4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZGlsZSgpIHtcclxuIGNvbnN0IG9kaWxlID0gKCkgPT4ge1xyXG4gIHZhciBwaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgaWYgKHBpY2sgPT09IDApIHsgcmV0dXJuICggPE9kaWxlMSAvPiApfSBcclxuICBlbHNlIGlmIChwaWNrID09PSAxKSB7IHJldHVybiAoIDxPZGlsZTIgLz4gKX0gXHJcbiAgZWxzZSBpZiAocGljayA9PT0gMikgeyByZXR1cm4gKCA8T2RpbGUzIC8+ICl9XHJcbiAgZWxzZSBpZiAocGljayA9PT0gMykgeyByZXR1cm4gKCA8T2RpbGU0IC8+ICl9XHJcbiAgZWxzZSBpZiAocGljayA9PT0gNCkgeyByZXR1cm4gKCA8T2RpbGU1IC8+ICl9XHJcbiAgZWxzZSB7IHJldHVybiAoIDxPZGlsZTYgLz4gKX1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtvZGlsZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2RpbGUxKCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGUxJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTAxLmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTIoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTInIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMDIuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlMygpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlMScgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0wMy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gT2RpbGU0KCkge1xyXG4gcmV0dXJuIChcclxuICAgPGRpdiBpZD0nT2RpbGU0JyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3Mvb2RpbGUgLSBzZXB0IDE1LTA0LmpwZycgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG4gfVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBPZGlsZTUoKSB7XHJcbiByZXR1cm4gKFxyXG4gICA8ZGl2IGlkPSdPZGlsZTUnIGNsYXNzTmFtZT0naGVybyBmbGlwLWluLWhvci10b3AnIHJvbGU9J2ltZyc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW1nJz5cclxuICAgICA8aW1nIHNyYz0nL3Bob3Rvcy9vZGlsZSAtIHNlcHQgMTUtMTUuanBnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIE9kaWxlNigpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J09kaWxlNicgY2xhc3NOYW1lPSdoZXJvIGZsaXAtaW4taG9yLXRvcCcgcm9sZT0naW1nJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcnPlxyXG4gICAgIDxpbWcgc3JjPScvcGhvdG9zL29kaWxlIC0gc2VwdCAxNS0xNy5qcGcnIGFsdD0nJyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxuIH0iLCAiZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJBKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdJSUknIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9nbGFjaWVyJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnX3ZhLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyBhbHQ9JycvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PklJSTwvaDU+XHJcbiAgIFRoZSBnbGFjaWVyIGFic29yYmVkIGdyZWVuaG91c2UgZ2FzZXMuIDxici8+XHJcbiAgIFdlIGFyZSBhIGxhcmdlIHBhcnQgb2YgdGhlIGJpb3NwaGVyZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nIGlkPSdjcmVkX2dsYWNpZXInPkNyYWlnIFNhbnRvcyBQZXJleiw8YnIvPjxjaXRlPlwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiPC9jaXRlPjwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyQigpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGNsYXNzTmFtZT0nZ2xhY2llciBwb2VtJyBpZD0nVicgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2dsYWNpZXInPlxyXG4gIDxpbWcgc3JjPScvYmx1ZV9xdW90ZV9iZ19zbS5wbmcnIGlkPSdibHVlcScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlY8L2g1PlxyXG4gICBXZSBkbyBub3Qga25vdyB3aGljaCB0byBmZWFyIG1vcmUsPGJyLz5cclxuICAgVGhlIHRlcnJvciBvZiBjaGFuZ2U8YnIvPlxyXG4gICBPciB0aGUgdGVycm9yIG9mIHVuY2VydGFpbnR5LCA8YnIvPlxyXG4gICBUaGUgZ2xhY2llciBjYWx2aW5nPGJyLz5cclxuICAgT3IganVzdCBhZnRlci48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsYWNpZXJDKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgY2xhc3NOYW1lPSdnbGFjaWVyIHBvZW0nIGlkPSdWSUlJJyBhcmlhLWxhYmVsbGVkYnk9J2NyZWRfZ2xhY2llcic+XHJcbiAgPGltZyBzcmM9Jy9ibHVlX3F1b3RlX2JnLnBuZycgaWQ9J2JsdWVxbScgYWx0PScnIGNsYXNzTmFtZT0nZmFkZS1pbicvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+PHA+PGg1PlZJSUk8L2g1PlxyXG4gICBJIGtub3cga2luZyB0aWRlcywgPGJyLz5cclxuICAgQW5kIGx1cmlkLCBpbmVzY2FwYWJsZSBzdG9ybXM7IDxici8+XHJcbiAgIEJ1dCBJIGtub3csIHRvbywgPGJyLz5cclxuICAgVGhhdCB0aGUgZ2xhY2llciBpcyBpbnZvbHZlZCA8YnIvPlxyXG4gICBJbiB3aGF0IEkga25vdy48L3A+XHJcbiAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfZ2xhY2llcic+Q3JhaWcgU2FudG9zIFBlcmV6LDxici8+PGNpdGU+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufVxyXG5cclxuLy9VbnVzZWQgZm9yIG5vdywgYnV0IGZ1biB0byBoYXZlXHJcbmV4cG9ydCBmdW5jdGlvbiBHbGFjaWVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdnbGFjaWVyJz5cclxuICAgPEdsYWNpZXJBIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8R2xhY2llckMgLz5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXRTYXkoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nTGV0U2F5JyBjbGFzc05hbWU9J3BvZW0nIGFyaWEtbGFiZWxsZWRieT0nY3JlZF9sZXRzYXknPlxyXG4gICA8aW1nIHNyYz0nL3JlZF9xdW90ZV9iZy5wbmcnIGNsYXNzTmFtZT0nZmFkZS1pbicgLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5LCBhcyB0aGV5IG11c3Qgc2F5IHNvbWV0aGluZzo8L3A+XHJcbiAgICA8cD5BIGtlcm9zZW5lIGJlYXV0eS48YnIvPlxyXG4gICAgSXQgYnVybmVkLjwvcD5cclxuICAgIDxwPkxldCB0aGVtIHNheSB3ZSB3YXJtZWQgb3Vyc2VsdmVzIGJ5IGl0LDxici8+XHJcbiAgICByZWFkIGJ5IGl0cyBsaWdodCwgcHJhaXNlZCw8YnIvPlxyXG4gICAgYW5kIGl0IGJ1cm5lZC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0JyBpZD0nY3JlZF9sZXRzYXknPlxyXG4gICAgSmFuZSBIaXJzaGZpZWxkLDxici8+PGNpdGU+XCJMZXQgVGhlbSBOb3QgU2F5XCI8L2NpdGU+XHJcbiAgIDwvZGl2PlxyXG4gIDwvYXNpZGU+XHJcbiApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2luU3VtKCkge1xyXG4gcmV0dXJuIChcclxuICA8YXNpZGUgaWQ9J1dpblN1bScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX3NlYXNvbicgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9ibHVlYmxhY2tfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSc+XHJcbiAgICA8cD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtzaXQgaW4gdGhlIGNlbnRlciBvZiB0aGUgcG9lbSwgaW52aWdvcmF0ZWQ8L3A+XHJcbiAgICA8cD53aXRoIGlua3kgYXdrd2FyZCBibGFua25lc3MuPC9wPlxyXG4gICAgPHA+VGhlIGJvdHRvbSB0ZWV0aCBvZiBzdW1tZXI8L3A+XHJcbiAgICA8cD5pbiB3aW50ZXIgY2hhdHRlcmluZzogaGVyZVx1MjAxOXMgdGhlIG1vb24uPC9wPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCcgaWQ9J2NyZWRfc2Vhc29uJz5Ob2FoIEVsaSBHb3Jkb24sPGJyLz48Y2l0ZT5cIlN1bW1lciBpbiBXaW50ZXIgaW4gU3VtbWVyXCI8L2NpdGU+PC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZpbmUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxhc2lkZSBpZD0nZGVmaW5lJyBjbGFzc05hbWU9J2NpdGUnIGFyaWEtbGFiZWxsZWRieT0nY3JlZF93aHl0ZSc+XHJcbiAgIDxpbWcgc3JjPScvcG9sYXJvaWRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nIGFsdD0nJy8+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdxdW90ZSB0ZXh0LWZvY3VzLWluJz5cclxuICAgIDxwPkNvbnNpZGVyIGNsaW1hdGUgY2hhbmdlIGFzIGFib3V0IDxiPnRoZSB0aW1pbmcgb2YgcmVsYXRpb25zaGlwczwvYj4gd2UgaGF2ZSB3aXRoIGFsbCB0aGF0J3MgYXJvdW5kIHVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQgdGV4dC1mb2N1cy1pbicgaWQ9J2NyZWRfd2h5dGUnPlxyXG4gICAgS3lsZSBXaHl0ZSw8YnIvPjxjaXRlPlwiQnJhaWRpbmcgS2luc2hpcCBhbmQgVGltZVwiPC9jaXRlPlxyXG4gICA8L2Rpdj5cclxuICA8L2FzaWRlPlxyXG4gKVxyXG59IiwgIlxyXG5cclxuY29uc3QgY2FwX29oID0gJ1wiV2FybWluZyBzdHJpcGVzXCIgdmlzdWFsaXphdGlvbiBmb3IgdGhlIHN0YXRlIG9mIE9oaW8sIHNob3dpbmcgYW4gb3ZlcmFsbCBpbmNyZWFzZSBpbiB3YXJtIHllYXJzIGFuZCB0aGUgbmVhci12YW5pc2htZW50IG9mIGNvbGQgb25lcywgZnJvbSAxODk1IHRvIDIwMjEuJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9oaW8oKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J09oaW8nIGNsYXNzTmFtZT0nZmxpcC1pbi1ob3ItdG9wIGhlcm8nIHJvbGU9J2ltZycgYXJpYS1kZXNjcmliZWRieT0nY2FwX29oJz48aW1nIHNyYz0nL3N0cmlwZXNfb2gucG5nJyBhbHQ9JycgLz5cclxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nc2VjcmV0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+ICBcclxuICAgIDxkaXYgaWQ9J2NhcF9vaCcgY2xhc3NOYW1lPSdBUklBY2FwJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+e2NhcF9vaH08L2Rpdj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJjb25zdCBmYWNlcyA9IFsnYWd1aWxhJywgJ3NvbCddXHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuICBsZXQgcGljaztcclxuICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICBwaWNrID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICBwaWNrID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGZhY2VzW3BpY2tdO1xyXG4gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhcmRlbigpIHtcclxuIGNvbnN0IGdhcmRlbk1lID0gKCkgPT4ge1xyXG4gICBpZiAoZmxpcCgpID09PSAnYWd1aWxhJykge1xyXG4gICByZXR1cm4gPENoaUdhcjEgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgcmV0dXJuIDxDaGlHYXIyIC8+O1xyXG4gIH1cclxuIH1cclxuXHJcbiByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgIHtnYXJkZW5NZSgpfVxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hpR2FyMSgpIHtcclxuIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4xJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMS5qcGVnJyBhbHQ9JycgLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApXHJcbiB9XHJcbiBcclxuIGV4cG9ydCBmdW5jdGlvbiBDaGlHYXIyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgaWQ9J0NoYXJkZW4yJyBjbGFzc05hbWU9J2hlcm8gZmxpcC1pbi1ob3ItdG9wJyByb2xlPSdpbWcnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XHJcbiAgICAgPGltZyBzcmM9Jy9waG90b3MvY2hpX3Zlcl9nYXJkMi5qcGVnJyBhbHQ9JycvPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXQVZFKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdXQVcnIGNsYXNzTmFtZT0ncG9lbSc+XHJcbiAgPGltZyBzcmM9Jy9tdWx0aXp6ZXRfcXVvdGVfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgdG8gaW5zYXRpYXRlIHRlbXBlc3QsIHVucXVlbGxlZCA8YnIvPlxyXG4gICBieSBwcmF5ZXIgbm9yIGNpZ2FyZXR0ZSwgY2FyZWxlc3MsIG1lYW4sPC9wPlxyXG4gICA8cD5hIGNvbGQtYmxvb2RlZCBpbmRpZmZlcmVuY2Ugc28gcHVyZSw8YnIvPlxyXG4gICBhIHN0cm9uZyBzd2ltbWVyIHdvbid0IGxhc3QgdGVuIHdldCBtaW51dGVzLjwvcD48L2Rpdj5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdCB0ZXh0LWZvY3VzLWluJz5NLiBCYXJ0bGV5IFNlaWdlbCw8YnIvPlwiV0FWRSBBRlRFUiBXQVZFXCI8L2Rpdj5cclxuIDwvZGl2PlxyXG4gKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9kZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGFyaWEtbGFiZWxsZWRieT0nY3JlZGl0X29kZScgaWQ9J09kZScgY2xhc3NOYW1lPSdwb2VtJz5cclxuICAgPGltZyBzcmM9Jy9pbmRpZ29fcGFpbnRfYmcucG5nJyBjbGFzc05hbWU9J2ZhZGUtaW4nLz5cclxuICAgPGRpdiBjbGFzc05hbWU9J3F1b3RlIHRleHQtZm9jdXMtaW4nPlxyXG4gICAgPHA+Zm9yZ2V0dGluZyB0aGUgbmF0aW9uIGlzIGEgc3luZHJvbWUuPC9wPlxyXG4gICAgPHA+QWxsIHRoYXRcdTIwMTlzIGxlZnQgb2YgdGhlIHNlYSBpbiB5b3UgaXMgZm9hbSw8L3A+XHJcbiAgICA8cD50aGUgY29hc3RsaW5lJ3MgYnJva2VuIHZvaWNlIGFuZCBhbGwgaXRzIGNyYWdzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdF9vZGUnIGNsYXNzTmFtZT0nY3JlZGl0IHRleHQtZm9jdXMtaW4nPlxyXG4gICAgVXJheW9cdTAwRTFuIE5vZWwsPGJyLz48Y2l0ZT5cIk5vIExvbmdlciBPZGVcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJpbXBvcnQgbWR4TG9hZGVyIGZyb20gJ0BtZHgtanMvbG9hZGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy9pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcclxuXHJcblxyXG5sZXQgY29udGVudCA9ICdgSSBzd2VhciwgSSAqd2lsbCogbWFrZSB0aGlzIHdvcmtgJ1xyXG4vLyB2YXIgb3V0cHV0ID0gbWR4TG9hZGVyKHRoaXMsIHN0cmluZzogY29udGVudCk7XHJcbi8vdmFyIG91dHB1dCA9IG1hcmtlZChjb250ZW50KVxyXG5cclxuZnVuY3Rpb24gUmF3MSgpIHtcclxuIHJldHVybiAoXHJcbiAgeyBjb250ZW50IH1cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF3MSAiLCAiY29uc3QgY2FwX2hlcmUgPSAnU2NyZWVuc2hvdCBvZiBhIHNlY3Rpb24gb2YgYSBzYXRlbGl0ZSBtYXAgb2YgdGhlIGdsb2JlLiBGaW5kIHRoZSBlbmQgb2YgdGhlIEFtZXJpY2FuIENhbGlmb3JuaWE7IGhlcmUsIFNhbiBEaWVnby4gR28gYXMgc3RyYWlnaHQgb2Ygc291dGggYXMgeW91IGNhbiBnZXQgZm9yIGEgdGhvdXNhbmQgbWlsZXMgb24gdGhlIG9ubHkgaGlnaHdheSwgdW50aWwgeW91IGhpdCB0aGUgcG9pbnQgd2hlcmUgdGhlIFRyb3BpYyBvZiBDYW5jZXIgbWVldHMgdGhlIFBhY2lmaWMgY29hc3RsaW5lLiBUaGlzIGlzIFRvZG9zIFNhbnRvcy4gWW91IGFyZSBoZXJlLidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJlKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdIZXJlJyBjbGFzc05hbWU9J2ZsaXAtaW4taG9yLXRvcCBoZXJvJyByb2xlPSdpbWcnIGFyaWEtZGVzY3JpYmVkYnk9J2NhcF9oZXJlJz48aW1nIHNyYz0nL3lvdV9hcmVfaGVyZS5wbmcnIGFsdD0nJyAvPlxyXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdzZWNyZXQnIGFyaWEtaGlkZGVuPSd0cnVlJz4gIFxyXG4gICAgPGRpdiBpZD0nY2FwX2hlcmUnIGNsYXNzTmFtZT0nQVJJQWNhcCcgYXJpYS1oaWRkZW49J3RydWUnPntjYXBfaGVyZX08L2Rpdj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZTAxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdvbmUnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICA8cD5JdCBpcyAyMDIyLiBJdCBpcyB0aGUgMjJuZC4gSXQgaXMgRmVicnVhcnkuPC9wPlxyXG4gIDxwPkkgYW0gYmVnaW5uaW5nIHRoaXMgZXNzYXkuIEkgYW0gdHdlbnR5LXNpeCB5ZWFycyBvbGQuIEkgYW0gbW92aW5nLCBub3QgZm9yIHRoZSBmaXJzdCB0aW1lLCB0byBTZWF0dGxlLjwvcD5cclxuICA8cD5JdCBpcyBzbm93aW5nLjwvcD48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCJcclxuaW1wb3J0IEhlcmUgZnJvbSBcIi4vaGVyZVwiXHJcbmltcG9ydCB7IEdsYWNpZXJBIH0gZnJvbSBcIi4vcG9lbS1nbGFjaWVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTAyIC8+XHJcbiAgIDxIZXJlIC8+XHJcbiAgIDxTY2VuZTAzIC8+XHJcbiAgIDxTY2VuZTA0IC8+XHJcbiAgIDxHbGFjaWVyQSAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdvJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkEgbWVtb3J5IHRvbyBzbWFsbCBmb3IgbWUgdG8gaGF2ZSBhIHBsYWNlIGZvciBpdCBpbiB0aW1lOiBJIGFtIGJhcmVseSBvbGQgZW5vdWdoIHRvIHJlbWVtYmVyLCBhbmQgbXkgcGFyZW50cyBhcmUgbWFycmllZCwgYW5kIHRoZXkgYXJlIGRpc2NvdmVyaW5nIHRoYXQgdGhlIGRpbmluZyByb29tIGZsb29yIGlzIHVuZXZlbiwgYXMgaXQgaGFwcGVucywgYXMgdGhlIHdhdGVyIHBvdXJpbmcgaW4gdGhyb3VnaCB0aGUgY2xvc2VkIHdpbmRvd3MgZm9ybXMgYSB0cmlhbmd1bGFyIHB1ZGRsZSB3aGVyZSB0aGUgZXh0ZXJpb3Igd2FsbHMgbWVldC48L3A+XHJcbiAgIDxwPkFuZCBJIGFtIGhlcmU6IHNpdHRpbmcgaW4gdGhlIHBvb2wgb2YgcmFpbndhdGVyIHdpdGggZW5vdWdoIHJvb20gdG8gc2xhcCBteSBoYW5kcyByaHl0aG1pY2FsbHkgb24gbW9yZSBvZiBpdCBiZXNpZGUgbWUsIGF3YXJlIG9mIGFuZCBpZ25vcmluZyB0aGVpciBtb3VudGluZyBidXQgZ2VuZXJhbGl6ZWQgZGlzYXBwcm92YWwuIElmIGl0IGhhcyBvY2N1cnJlZCB0byBtZSB0aGF0IHRoaXMgaXMgbm90IHdoYXQgdGhleSB3YW50ZWQgZnJvbSB0aGVpciByZWNlbnRseS1maW5pc2hlZCBmbG9vciwgdGhlIHRob3VnaHQgY29tZXMgd2l0aCBvdmVyYWxsIGluZGlmZmVyZW5jZTsgdGhhdCB0aGV5IGhhZCBpdCBwb3VyZWQgYW5kIHNhbmRlZCwgYnkgaHVtYW4gaGFuZHMsIHNvIEknbSBub3Qgc3VyZSB3aGF0IHRoZXkgZXhwZWN0ZWQuPC9wPlxyXG4gICA8cD4oQ29uc3RydWN0aW9uIG9mIHRoZSBob3VzZSBJIHdpbGwgZ3JvdyB1cCBpbiBoYXMgYmVlbiBvbmdvaW5nLCB3aWxsIGJlIG11Y2ggbG9uZ2VyLCBpbnRvIG1lbW9yaWVzIHdpdGggZW5vdWdoIGRlZmluaXRpb24gdG8gcHVsbCB0aGVpciBvd24gd2VpZ2h0IGluIHRpbWUuIEkgZG8gbm90IGtub3cgd2hhdCBhIGxldmVsIGlzLik8L3A+XHJcbiAgIDxwPkkgaGF2ZW4ndCBnb3R0ZW4gdGlyZWQgb2YgaXQgeWV0LiBBcyBJIHNsYXAgdGhlIHB1ZGRsZSwgSSBhbSBzaG91dGluZzogXCJTd2ltbWluZyBwb29sISBTd2ltbWluZyBwb29sIVwiPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDMoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RocmVlJz5cclxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgIDxwPkhlcmUgYXJlIHR3byB0aGluZ3MgSSBrbm93IGFib3V0IHBvd2VyLCB2ZXJ5IGVhcmx5IGluIG15IGxpZmU6PC9wPlxyXG4gICA8cD5UaGUgbW9zdCBwaHlzaWNhbGx5IHBvd2VyZnVsIHRoaW5nIGluIHRoZSB3b3JsZCBpcyB3YXRlci4gV2F0ZXIgd3JpdGVzIHRoZSBzaGFwZSBvZiBsYW5kIGFuZCBjYW4gZGVtb2xpc2ggYW55dGhpbmcgd2l0aCB0aW1lLiBXYXRlciBpbiB0aGUgYWlyIGlzIHdoeSBldmVyeSBpbmFuaW1hdGUgb2JqZWN0IGFyb3VuZCBtZSBkaWVzIGZhc3RlciB0aGFuIGl0IHNhaWQgaXQgPGEgaHJlZj0naHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcG9zdHMvY3ctZGF0YS1sb3NzLTQ5MjEwMjk1Jz53b3VsZDwvYT47IGxpa2Ugb3B0aWNhbCBtZWRpYSB5b3UgdGhvdWdodCBiYWNrZWQgdXAgc29tZXRoaW5nIHlvdSBjYXJlIGFib3V0LCBvciBlbGFzdGljLiBXYXRlciBib3dscyB5b3Ugb3ZlciB3aGVuIHlvdSBjb21lIG5lYXIgaXQgYW5kIGdldCBjb2NreSBlbm91Z2ggdG8gdHVybiB5b3VyIGJhY2suIFdhdGVyIHNldHMgdGhlIGxpdmluZyBsaW1pdHMgb2Ygd2hhdCBpcyBwb3NzaWJsZTogbGlrZSB3aGVuIHRoZSBzdXBwbHkgdHVybnMgb2ZmLCBhbmQgdGhlIHRpbmFjbyB0aGF0IHRoZXJlJ3Mgbm90IGEgb25lLXdvcmQgRW5nbGlzaCB0ZXJtIGZvciBpcyByZXNlcnZlZCBmb3IgcGF5aW5nIHRvdXJpc3RzIGluIHRoZSBiYWNrIHlhcmQgdG8gY3VzaGlvbiB0aGVtIGZyb20gc2NhcmNpdHksIGFuZCBJIGJhdGhlIG91dCBvZiBhIGJ1Y2tldCBpbiB0aGUgc2hvd2VyLjwvcD5cclxuICAgPHA+KEl0IHN0YWdnZXJzIG1lLCB0aGUgd2F5IHRoZSBOb3J0aCB1c2VzIHdvb2Q6IGxpa2UgdGhlcmUncyBlbm91Z2ggb2YgaXQgdG8gZ28gYXJvdW5kLCBpbnN0ZWFkIG9mIGNvbmNyZXRlLiBJIGRvIG5vdCBtYWtlIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gdGltYmVyLCB3aGljaCBhd2VzIG1lIGFzIGEgc2hvdyBvZiB3ZWFsdGgsIGFuZCBmb3Jlc3RzLCB3aGljaCB1bm5lcnZlIG1lOyBpdCBkb2Vzbid0IGNvbm5lY3QgdGhhdCBhbnl0aGluZyBJIHNlZSBjb3VsZCBiZSBzdWZmaWNpZW50IGZvciBwZW9wbGUgdG8gY2xhaW0gaXQgaXMgZW5vdWdoLik8L3A+XHJcbiAgIDxwPlRoZSBiZXN0IHdheSBmb3IgYSBwZXJzb24gdG8gYWNxdWlyZSBwb3dlciBpcyB0byBiZSBpbmRpc3BlbnNhYmxlLiBNeSBib2R5LS1JIGRvIG5vdCB5ZXQgaGF2ZSB0aGUgbGFuZ3VhZ2UgZm9yIHRoaXM7IEkgYWx3YXlzIGtub3ctLW15IGJvZHkgZG9lcyBub3QgZG8gdGhlIHRoaW5ncyB0aGF0IG90aGVyIHBlb3BsZSB3YW50IGl0IHRvIGRvLiBQZW9wbGUgZG9uJ3Qgd2FudCBtZSwgaWYgdGhleSBjYW4gYWZmb3JkIHRvLiA8L3A+XHJcbiAgIDxwPkJ1dCBJIGFtIGFsc28gYSBkdWFsIGNpdGl6ZW4sIGEgdGVybSB3aGljaCBvZnRlbiBtZWFucyB0aGF0IG5vIG9uZSB3aG8gYXNrcyBmb3IgcGFwZXJ3b3JrIG90aGVyIHRoYW4gYSBwYXNzcG9ydCBpcyBnb2luZyB0byBnZXQgc29tZXRoaW5nIHRoZXkgbGlrZS4gSSB3aWxsIGhhdmUgdG8gYmUgaW5kaXNwZW5zYWJsZS48L3A+XHJcbiAgIDxwPkkgcmVzb2x2ZSB0byBnbyB0byBjb2xsZWdlIGluIHRoZSBVbml0ZWQgU3RhdGVzLiBJIHdpbGwgZ2V0IGEgZGlwbG9tYSBpbiBFbmdsaXNoIHByaW50IGFuZCB0aGVuIG5vIG9uZSB3aWxsIGJlIGFibGUgdG8gYWZmb3JkIHRvIGRpc2xpa2UgbWUgZW5vdWdoIGZvciB0aGVtIHRvIHRlbGwgbWUgbm8uPC9wPlxyXG4gICA8cD4oSSBhbSwgYXBwcm94aW1hdGVseSwgc2l4IHllYXJzIG9sZC4pPC9wPlxyXG4gIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvdXInPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgPHA+VGhyZWUgd2Vla3MgYWZ0ZXIgbXkgZWlnaHRlZW50aCBiaXJ0aGRheSwgSSBnbyBub3J0aC48L3A+XHJcbiAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgeyBHbGFjaWVyQyB9IGZyb20gXCIuL3BvZW0tZ2xhY2llclwiXHJcbmltcG9ydCBXQVZFIGZyb20gXCIuL3BvZW0td2F2ZVwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQygpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuICAgPFNjZW5lMDUgLz5cclxuICAgPFNjZW5lMDYgLz5cclxuICAgPFNjZW5lMDcgLz5cclxuICAgPFNjZW5lMDggLz5cclxuICAgPFNjZW5lMDkgLz5cclxuICAgPFdBVkUgLz5cclxuICAgPFNjZW5lMTAgLz5cclxuICAgPFNjZW5lMTEgLz5cclxuICAgPFNjZW5lMTIgLz5cclxuICAgPEdsYWNpZXJDIC8+XHJcbiAgPC8+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmaXZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBuaW5lIHllYXJzIG9sZCwgYW5kIHdlIGhhdmUgZmFtaWx5IGluIE5ldyBPcmxlYW5zLiBXZSBoYXZlIGZhbWlseSBpbiBGbG9yaWRhLCBhcyB3ZWxsOyBteSBmYXRoZXIgaGFzIHRha2VuIGl0IHVwb24gaGltc2VsZiB0byBkcml2ZSB1cyBmcm9tIG9uZSB0byB0aGUgb3RoZXIsIHdoaWNoIEkgZmluZCBleGNpdGluZy4gSSBvbmx5IHNlZSBHUFMgaW4gcmVudGFsIGNhcnMsIGluIHRoZSBVUywgd2hpY2ggaXMgdGhlIHNvcnQgb2YgdGhpbmcgdGhhdCBzYXRlbGxpdGVzIGJvdGhlciB0byBtYXAuIFdlIGxlYXZlIGluIHRoZSBhZnRlcm5vb24gdG8gZHJpdmUgdGhyb3VnaCB0aGUgbmlnaHQsIHdoaWNoIEkgZmluZCBtb3JlIGV4Y2l0aW5nIHN0aWxsLjwvcD5cclxuICAgIDxwPldlIHBhc3MgdGhyb3VnaCBhIHN0b3JtIHN5c3RlbSwgZHJpdmluZzsgaGFyc2ggcmFpbiBpbiBtb3Rpb24gYXQgbmlnaHQgaXMgYSByYXJlIHRyZWF0IGZvciBtZSwgYW5kIEkgaGF2ZW4ndCBxdWl0ZSBncmFwcGxlZCB3aXRoIHRoZSByZWFsaXRpZXMgb2YgaGlnaHdheXMgZW5vdWdoIHRvIHVuZGVyc3RhbmQgdGhlIHBpdGZhbGxzIG9mIHdoeS4gSSBzdGFyZSBvdXQgdGhlIHdpbmRvd3MgYXQgdGhlIGhhcmQgcmFpbiwgdGhlIGx1eHVyeSBvZiBsaWdodCBhbmQgbGFuZXMgb24gYW4gQW1lcmljYW4gaW50ZXJzdGF0ZS48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwNigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2l4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+TXkgZmF0aGVyIGhhcyB0b2xkIG1lIGFib3V0IGh1cnJpY2FuZSBwYXJ0aWVzLCByaWNoIHBlb3BsZSB3aG8gd2VyZSByZWNlbnRseSBjaGlsZHJlbiB0YWtpbmcgb2ZmIHRvIHNpdCBpdCBvdXQgaW4gc3BhcmUgaG91c2VzIG9uIHRoZSBjb2FzdC4gVGhlIGlkaW9jeSB0aGF0IGNvbWVzIHdpdGggdGhlIHdvcmxkIGdpdmluZyB5b3Ugbm8gcmVhc29uIHRvIGJlbGlldmUgeW91J3JlIG5vdCBpbnZ1bG5lcmFibGUuIFdlIG1heSBvciBtYXkgbm90IGRpc2N1c3MgdGhhdCBwYXJ0IGV4cGxpY2l0bHksIGJ1dCBJJ20gYXdhcmUsIGF0IGhvbWUsIG9mIHRoZSBjb250cm92ZXJzeSBvZiB0aGUgZm9yY2libGUgcmVkZWZpbml0aW9uIG9mIFwiYmVhY2hmcm9udFwiIHByb3BlcnR5IGJ5IGJ1aWxkaW5nIG9uIGR1bmVzLCBhbmQgdGhlIHJlYXNvbnMgcGVvcGxlIGRvIHNvIGFueXdheS4gV2h5IHRoZSBsYXcgaGFzIGxlc3MgdG8gc2F5IGFib3V0IGl0IHRoYW4gdGhlIHRleHQgY2xhaW1zIGl0J3Mgc3VwcG9zZWQgdG8uPC9wPlxyXG4gICAgPHA+SSBrbm93IGEgbG90IG9mIHJlYWx0b3JzLjwvcD5cclxuICAgIDxwPkkgYWxzbyBrbm93IGEgam9rZTogXCJJJ3ZlIGdvdCB0aGlzIGdyZWF0IHBpZWNlIG9mIGxhbmQgdG8gc2VsbCB5b3UsXCIgaXQgc3RhcnRzLCBcImhhc24ndCBmbG9vZGVkIHNpbmNlIHRoZSBkaW5vc2F1cnMuLi5cIjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTA3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdzZXZlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkxhdGVyIGluIHRoZSBzdW1tZXIsIEkgYW0gbm90IG5pbmUgeWVhcnMgb2xkLiBXaGVuIEkndmUgcmVjZW50bHkgdHVybmVkIHRlbiwgS2F0cmluYSBzd2VlcHMgdGhyb3VnaCB3aGVyZSBJIGFtIG5vdC4gSSBoYXZlIHRoZSB2YWd1ZXN0IG9mIHVuZGVyc3RhbmRpbmdzIG9mIHdoYXQgYSBsZXZlZSBpcywgZnJvbSBzb25ncywgYW5kIG5vdyBmcm9tIG5ld3M7IGxpa2UgZHVuZXMsIEkgdGhpbmssIGJ1dCB3b3JzZSBhdCBiZWluZyBzby48L3A+XHJcbiAgICA8cD5JbiB0aGUgbGVhZC11cCB0byBsYW5kZmFsbCwgSSBhbSBjaGlsZGlzaGx5LCBjYWxsb3VzbHkgYmFmZmxlZDogQ2F0ZWdvcnkgNSBvbiB0aGUgZm9yZWNhc3QgaXMgYWx3YXlzIGdvb2QgbmV3cyBmb3IgbWUsIGJlY2F1c2UgbGFyZ2UgbnVtYmVycyBtZWFuIGEgaGlnaGVyIHByb2JhYmlsaXR5IG9mIGNsYXNzIGJlaW5nIGNhbGxlZCBvZmYuIChUaGVyZSBpcywgZm9yIHRoZSBkdXJhdGlvbiBvZiBteSBjaGlsZGhvb2QsIG9uZSBwYXZlZCByb2FkLiBUaGUgb3RoZXJzLCB1bmRlciBzdWZmaWNpZW50IHByZXNzdXJlLCB0dXJuIHRvIHJpdmVycy4gSSBsaXZlIG9uIGEgaGlsbDsgSSBsaWtlIHRvIHdhdGNoLiBPbmUgeWVhciwgbGF0ZXIgaW4gdGhlIGRlY2FkZSwgb24gYSBkYXkgdGhhdCB0aGUgcm9hZHMgd2VyZW4ndCB3YXNoZWQgb3V0IGVhcmx5IGVub3VnaCBpbiB0aGUgbW9ybmluZyB0byBnZXQgbWUgb3V0IG9mIGl0LCBteSBzY2hvb2wgdHVybnMgdG8gcmFwaWRzLCBhbmQgSSBhbSB1bmFjY291bnRhYmx5IHBsZWFzZWQgdG8ga25vdyBpdCB3YXMgYnVpbHQgb24gYSB2ZWluIG9mIHJlZCBjbGF5IGFzIHRoYXQgcGFpbnRzIGl0c2VsZiBvbnRvIG15IHNvY2tzLikgPC9wPlxyXG4gICAgPHA+RXZhY3VhdGlvbiwgZm9yIGV4YW1wbGUsIGlzIGZvcmVpZ24gdG8gbWUuIEkgY2FuJ3QgaW1hZ2luZSB3aHkgdGhleSdyZSBib3RoZXJpbmc7IEkgY291bGQgc2F5IHRoYXQgdGhlIHJlYXNvbiBJIGRvbid0IHVuZGVyc3RhbmQgd2h5IG9uZSBwbGFjZSB3b3VsZCBiZSBzYWZlciB0aGFuIGFub3RoZXIgaXMgdGhhdCBubyBwYXJ0IG9mIG15IHN0YXRlIGlzIGEgZnVsbCBmaWZ0eSBtaWxlcyBmcm9tIHRoZSBjb2FzdGxpbmUsIGJ1dCBJIGRvdWJ0IEkgdGhvdWdodCBpdCB0aHJvdWdoIHRoYXQgZmFyLiBJIHRoaW5rIEkgc2ltcGx5IGRvIG5vdCByZWdpc3RlciB0aGF0IGxvY2F0aW9ucyBhcmUgdW5saWtlIG9uZSBhbm90aGVyIGluIHRpbWUgbm90IHRvIGxlYXJuIGl0IG9uIHRoZSBuZXdzLjwvcD5cclxuICAgIDxwPkkgYW0gdGVuIHllYXJzIGFuZCBhbG1vc3Qgb25lIG1vbnRoIG9sZCwgYW5kIEkgdW5kZXJzdGFuZCB0aGF0IGh1cnJpY2FuZSBwcmVwYXJlZG5lc3MgaXMgcmVsYXRpdmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMDgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBzdHVjayBteSBmZWV0IGluIHRoZSBBdGxhbnRpYyBvbmNlLiBJdCB3YXMgY29sZGVyIHRoYW4gYW4gb2NlYW4gaGFkIGFueSBidXNpbmVzcyBiZWluZywgYnkgbXkgbGlnaHRzLCBhbmQgZ3JheS4gVGhlcmUgd2FzIHNvbWV0aGluZyBiaXphcnJlIGluIHRoZSBpZGVhIHRoYXQgaXQgd2FzIHdhcm0gZW5vdWdoIHRvIGZlZWQgYSBodXJyaWNhbmUuICA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUwOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nbmluZSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkJlZm9yZSBJIGFtIGVsZXZlbiwgd2Ugc3RvcCBoYXZpbmcgZmFtaWx5IGluIE5ldyBPcmxlYW5zLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTEwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5BdCBhcm91bmQgZm91ciB5ZWFycyBvbGQsIEkgYW0gZWF2ZXNkcm9wcGluZy0tdGhpcyB3aWxsIGJlIGEgaGFiaXQtLUkgYW0gZWF2ZXNkcm9wcGluZyBvbiBraW5kZXJnYXJ0ZW4gdGVhY2hlcnM7IHRoZXkgYXJlIHRhbGtpbmcgYWJvdXQgdGhlIHdlYXRoZXIuIDwvcD5cclxuICAgIDxwPlNwZWNpZmljYWxseSwgdGhleSBhcmUgdGFsa2luZyBhYm91dCB0aGUgb2NlYW4gZ2V0dGluZyB3YXJtZXIsIGFuZCBob3cgdGhhdCdzIG1ha2luZyBodXJyaWNhbmUgc2Vhc29uIGhhcnNoZXIsIGFuZCBsb25nZXIsIGluIHdheXMgbm8gb25lIHNob3VsZCBsaWtlLiBXZSBkZXBlbmQgb24gaHVycmljYW5lcyBmb3IgZnJlc2h3YXRlci0tbXkgdG93biwgc3BlY2lmaWNhbGx5LCByZWxpZXMgb24gdGhlbSB0byBmaWxsIHRoZSBhcXVpZmVyIGl0cyBtdWNoLWRpc2N1c3NlZCBvYXNpcyBzdGF0dXMgaXMgYnVpbHQgdXBvbi0tYnV0IHRvbyBtdWNoIHdhdGVyIGF0IGEgdGltZSBkZWZlYXRzIHRoZSBwb2ludCwgcmlwcyB0b3Bzb2lsIGludG8gdGhlIHNlYSwgcnVucyBpdHMgY291cnNlIHRvbyBmYXN0IGZvciB1cyB0byBrZWVwLiBBbmQgaXQncyBtb3JlIHVucGxlYXNhbnQgZm9yIHRoZW0gdGhhbiBpdCBpcyBmb3IgbWUuPC9wPlxyXG4gICAgPHA+VGhlIHdhcm10aCwgYXQgbGVhc3QsIGlzIGNvbW1vbiBzZW5zZTsgSSBrbm93IGhlYXQgaXMgZW5lcmd5IGJlY2F1c2UgSSBrbm93IGh1cnJpY2FuZXMgbmVlZCB3YXJtIHdhdGVyIHRvIGxpdmUuIFRoYXQncyB3aHkgdGhleSBzdGFydmUgYW5kIHN0YWxsIG91dCBnb2luZyBub3J0aCwgb3IgY29taW5nIHRvIGxhbmQuIEEgc3Rvcm0gd291bGQgaGF2ZSB0byBiZSB2ZXJ5IHNwZWNpYWwgdG8gZmlnaHQgYWxsIHRoZSB3YXkgdGhyb3VnaCB0aGF0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTExKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdlbGV2ZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBmaXJzdCB5ZWFycyBpbiB0aGUgVW5pdGVkIFN0YXRlcywgSSBTa3lwZSBteSBkYWQgbGVzcyBvZnRlbiB0aGFuIEkgc2hvdWxkLiBMZXNzIG9mdGVuIHRoYW4gSSB3YW50IHRvLiBJdCdzIGhhcmQgdG8gZmluZCBhIHJoeXRobTsgSSBhbSBub3QgZG9pbmcgd2VsbCB0aGVyZS4gQnV0IGhlIHRlbGxzIG1lIGFib3V0IHRoZSB3ZWF0aGVyLiA8L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbHZlJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2hlbiBJIGFtIHR3ZW50eS1mb3VyLCBpdCdzIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjAvMDUvMTgvY2xpbWF0ZS9jbGltYXRlLWNoYW5nZXMtaHVycmljYW5lLWludGVuc2l0eS5odG1sJz5lc3RhYmxpc2hlZDwvYT4gdGhhdCB3YXJtZXIgd2F0ZXIgaXMgc3VwZXJjaGFyZ2luZyB0cm9waWNhbCBzdG9ybXMuPC9wPlxyXG4gICAgPHA+SSB1bmRlcnN0YW5kIHRoYXQgc2NpZW5jZSBtb3ZlcyBtb3JlIHNsb3dseSB0aGFuIGtpbmRlcmdhcnRlbiB0ZWFjaGVycycgc21hbGwgdGFsazsgdGhhdCBjbGltYXRlLCBieSBkZWZpbml0aW9uLCBoYXBwZW5zIG9uIGEgdGltZXNjYWxlIGNsb3NlciB0byBnZW9sb2dpY2FsIHRoYW4gYW5lY2RvdGUuIDwvcD5cclxuICAgIDxwPkJ1dCBJIGRvIGhhdmUgdGhlIGZsZWV0aW5nIHRob3VnaHQgdGhhdCwgZXZlbiB0aGVuLCB0YWtpbmcgdHdlbnR5IHllYXJzIG9mIG15IGxpZmUgdG8gY2F0Y2ggdXAgdG8gaG93IHRoZSB3ZWF0aGVyJ3MgZG9pbmcgc2VlbXMgYSBiaXQgbXVjaC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59IiwgImltcG9ydCBHYXJkZW4gZnJvbSBcIi4vcGhvdG9zX2NoaVwiXHJcbmltcG9ydCBPZGlsZSBmcm9tIFwiLi9waG90b3Nfb2RpbGVcIlxyXG5pbXBvcnQgeyBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wb2VtLWdsYWNpZXJcIlxyXG5pbXBvcnQgT2RlIGZyb20gXCIuL3BvZW0tb2RlXCJcclxuaW1wb3J0IFdpblN1bSBmcm9tIFwiLi9wb2VtLXdpbnN1bVwiXHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcXVvdGUtY2xpbWVcIlxyXG5pbXBvcnQgT2hpbyBmcm9tIFwiLi9zdHJpcGUtb2hpb1wiXHJcbmltcG9ydCBXYXNoaW5ndG9uIGZyb20gXCIuL3N0cmlwZS13YXNoaW5ndG9uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDw+XHJcbiAgIDxTY2VuZTEzIC8+XHJcbiAgIDxTY2VuZTE0IC8+XHJcbiAgIDxPaGlvIC8+XHJcbiAgIDxTY2VuZTE1IC8+XHJcbiAgIDxTY2VuZTE2IC8+XHJcbiAgIDxTY2VuZTE3IC8+XHJcbiAgIDxTY2VuZTE4IC8+XHJcbiAgIDxTY2VuZTE5IC8+XHJcbiAgIDxTY2VuZTIwIC8+XHJcbiAgIDxEZWZpbmUgLz5cclxuICAgPFNjZW5lMjIgLz5cclxuICAgPFNjZW5lMjEgLz5cclxuICAgPE9kaWxlIC8+XHJcbiAgIDxTY2VuZTIzIC8+XHJcbiAgIDxTY2VuZTI0IC8+XHJcbiAgIDxXYXNoaW5ndG9uIC8+XHJcbiAgIDxTY2VuZTI1IC8+XHJcbiAgIDxTY2VuZTI2IC8+XHJcbiAgIDxHYXJkZW4gLz5cclxuICAgPFNjZW5lMjcgLz5cclxuICAgPFNjZW5lMjggLz5cclxuICAgPFNjZW5lMjkgLz5cclxuICAgPFNjZW5lMzAgLz5cclxuICAgPFNjZW5lMzEgLz5cclxuICAgPFNjZW5lMzIgLz5cclxuICAgPFNjZW5lMzMgLz5cclxuICAgPFNjZW5lMzQgLz5cclxuICAgPE9kZSAvPlxyXG4gICA8U2NlbmUzNSAvPlxyXG4gICA8U2NlbmUzNiAvPlxyXG4gICA8U2NlbmUzNyAvPlxyXG4gICA8U2NlbmUzOCAvPlxyXG4gICA8V2luU3VtIC8+XHJcbiAgIDxTY2VuZTM5IC8+XHJcbiAgIDxTY2VuZTQwIC8+XHJcbiAgIDxTY2VuZTQxIC8+XHJcbiAgIDxHbGFjaWVyQiAvPlxyXG4gICA8U2NlbmU0MiAvPlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxMygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGUgY29sbGVnZSBpbiB0aGUgVVMgdGhhdCBJIGdldCBpbnRvIGlzIGluIE9oaW8sIHNvIEkgYW0gZWlnaHRlZW4gYW5kIEkgYW0gaW4gT2hpby4gQmVmb3JlIHRoYXQsIEkgYW0gc2V2ZW50ZWVuLCBhbmQgbXkgZmF0aGVyIGlzIGhlbHBpbmcgbWUgcGljayBvdXQgYSB3aW50ZXIgY29hdCBvbiB0aGUgaW50ZXJuZXQsIGFuZCBJIGFtIGFza2luZyBoaW0gaWYgSSBzaG91bGQgY2hvb3NlIHRoZSB3YXJtZXN0IG9uZSBJIHNlZS48L3A+XHJcbiAgICA8cD5UaGF0J3Mgb3ZlcmtpbGwsIGhlIHNheXMuIChIZSBoYXMgYmVlbiB0aGVyZSBiZWZvcmUsIGFsYmVpdCBzdWJzdGFudGlhbGx5IHByaW9yIHRvIG1lIGV2ZW4gYmVpbmcgYm9ybi4pIFdoYXQgSSByZWFsaXN0aWNhbGx5IG5lZWQgaXMgbW9yZSB0b3dhcmRzIHRoZSBjZW50ZXIgb2YgdGhlIHJhbmdlLiBJJ2QgcmVncmV0IGdldHRpbmcgdG9vIGhlYXZ5IGEgY29hdCwgaGUgc2F5cywgYW5kIGhlbHBzIG1lIHBpY2sgb25lIG9mIHRoZSBtaWRkbGluZyBvbmVzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTE0KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3VydGVlbic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgYW0gZ2l2ZW4gdG8gdW5kZXJzdGFuZCBpdCBzYXlzIGVub3VnaCB0byBzYXkgdGhhdCBteSBmaXJzdCB5ZWFyIGluIE9oaW8gaXMgYSBsYWtlIGVmZmVjdCB5ZWFyLCB0aG91Z2ggSSB3b3VsZG4ndCBrbm93IHdoeS4gPC9wPlxyXG4gICAgPHA+SSBsZWFybiwgZmlyc3RoYW5kIGFuZCBvbiBteSBoYW5kcywgd2hhdCBhIC00MCB3aW5kIGNoaWxsIGlzIGluIEZhaHJlbmhlaXQuIEkgbGVhcm4gd2hhdCBzcGVjaWFsIGNhbmUgdGlwcyBJIG5lZWQgZm9yIHRyYWN0aW9uIGluIHNub3cuIEkgbGVhcm4gdGhhdCBteSBjb2xsZWdlIGlzIG5vdCBwYXJ0aWN1bGFybHkgaW50ZXJlc3RlZCBpbiBjbGVhcmluZyB0aGUgc2lkZXdhbGtzIGluIHRpbWUgZm9yIGNsYXNzOyBpdCBkb2VzIG5vdCBvY2N1ciB0byBtZSB0aGF0IHRoZXkgbWF5IG9uY2UgYXQgbGVhc3QgaGF2ZSBiZWVuIGFibGUgdG8gYWZmb3JkIHRoZSBuZWdsaWdlbmNlLCBiZWNhdXNlIEkgZG9uJ3QgaGF2ZSBhbnkgcmVhc29uIHRvIHVuZGVyc3RhbmQgYSBjb21wYXJpc29uIGJ5IHdoaWNoIHRoaXMgYmVjb21lcyBleHRyZW1lLjwvcD5cclxuICAgIDxwPk15IGRhZCBhcG9sb2dpemVzLCB0aG91Z2guIEZvciBsZWFkaW5nIG1lIHdyb25nLCB3aXRoIHRoZSBjb2F0LjwvcD5cclxuICAgIDxwPlRoaXMgaXNuJ3Qgd2hhdCB0aGUgd2VhdGhlciBoZXJlIGlzIHN1cHBvc2VkIHRvIGRvLCBoZSBzYXlzLjwvcD5cclxuICAgIDxwPkkgd291bGRuJ3Qga25vdywgSSBzYXk7IG9yIG1heWJlIEkgZG9uJ3QuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZpZnRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIEZhY2VUaW1lIG15IGRhZCBpbnN0ZWFkIG9mIFNreXBpbmcsIHRoZXNlIGRheXMuIEhlIHRlbGxzIG1lIGhvdyBtYW55IGRheXMgdGhpcyB3ZWVrIHRoZXJlIGhhdmUgYmVlbiBtdW5pY2lwYWwgd2F0ZXIuIEkgdGVsbCBoaW0gd2hlbiBpdCBzbm93cy4gSGUgdGVsbHMgbWUgaG93IG91ciB0ZW1wZXJhdHVyZXMgY29tcGFyZS4gSSB0ZWxsIGhpbSBJIGdvdCBhIG5ldyBtb25pdG9yLiBJIHRlbGwgaGltIGhvdyBtdWNoIGl0IHdhcyBuZXcsIGFuZCBob3cgcGxlYXNlZCBJIGFtIHdpdGggbXlzZWxmIGZvciBob3cgSSBmb3VuZCBpdCB1c2VkLCBob3cgdGhlIGRlYWwgdG9vayBhIG1hdHRlciBvZiBkYXlzLjwvcD5cclxuICAgIDxwPllvdSdyZSBpbiB0ZWNoIGhlYXZlbiB1cCB0aGVyZSwgaGUgc2F5cy4gSSBzYXksIEkgZ3Vlc3MuIEhlIHNheXMgdGhhdCB1c2VkIGhlcmUgd291bGQgYmUgbmV3IHRoZXJlLiBJIHRoaW5rIGFib3V0IHRoYXQgYXMgYSB3YXkgdG8gcHV0IGl0LCBsYXRlcjogZGV2ZWxvcG1lbnQgaW4gcmVsYXRpdmUgdGltZSBvdmVyIHNwYWNlLjwvcD5cclxuICAgIDxwPkkgc2F5IChhbm90aGVyIGRheSkgdGhhdCBJJ2QgbGlrZSB0byB0cmFkZSBoaW0gbXkgbGFwdG9wLCB0aGF0IGl0IHdvdWxkIGJlIGJldHRlciBmb3IgaGlzIGdyaXAgdGhhbiBpdCdzIGJlZW4gZm9yIG15IHZpc2lvbi4gSGUgYXNrcyBpZiBJIHdhbnQgaGltIHRvIHRhbGsgdG8gYXNrIHRoZSBndXkgd2hvIHNlbmRzIGhpbSBzdHVmZiBmcm9tIHRoZSBib3JkZXIgd2hhdCB0aGUgY29tcG91bmRpbmcgY29zdHMgb2Ygc2hpcHBpbmcgd291bGQgbG9vayBsaWtlLiBJIHNhaWQgSSB0aG91Z2h0IEknZCBqdXN0IGJyaW5nIGl0IHRvIGhpbSwgd2hlbiBJIGNhbi4gU2F2ZSBoaW0gdGhlIGN1c3RvbXMsIHRoZSB3YXkgd2UgaGFuZGxlZCB0aGluZ3MgZ3Jvd2luZyB1cC48L3A+XHJcbiAgICA8cD5PaCwgaGUgc2F5cy4gVGhhdCdzIGtpbmQgb2YgeW91LjwvcD5cclxuICAgIDxwPkkgd2FudCB0byBzZWUgeW91IGFueXdheSwgSSBzYXkuIFRoZSBtYWNoaW5lIGJlaW5nIGxpZ2h0IGlzIHRoZSB3aG9sZSBwb2ludCBvZiB0aGUgdGhpbmcuIEkgZG9uJ3Qgc2VlIHdoZXJlIGtpbmRuZXNzIGNvbWVzIGludG8gaXQuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTYoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3NpeHRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIHdhcyBob21lIGZvciB0aGUgbGFzdCB0aW1lIGluIERlY2VtYmVyLCAyMDEzLiBJdCdzIG5vdCBteSBmaXJzdCBzdW1tZXIgYXdheS0taXQgZmVlbHMgaXQtLWl0J3Mgbm90IG15IGZpcnN0IHN1bW1lciBidXQgbXkgc2Vjb25kIHRoYXQgdGhlIGh1cnJpY2FuZSBjb21lcy48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxNygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nc2V2ZW50ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGJpZyBodXJyaWNhbmUgd2hvc2UgbmFtZSBJIHVzZWQgdG8gcmVtZW1iZXIgaGFwcGVuZWQgc2hvcnRseSBiZWZvcmUgSSB3YXMgYm9ybiwgYW5kIHRodXMgdGhlIHBvaW50IG9mIHJlZmVyZW5jZSBmb3IgYW4gZXh0cmFvcmRpbmFyeSBzdG9ybSBjb3VsZCBjb21mb3J0YWJseSBicmFja2V0IGFueXRoaW5nIEknZCBrbm93LjwvcD5cclxuICAgIDxwPkhlciB1c3VycGVyIGNvbWVzIHRoZSBzdW1tZXIgSSB0dXJuIHR3ZW50eS4gSXQgdGVhcnMgdGhyb3VnaCB0b3duIGxpa2UgYSBuYXR1cmFsIGRpc2FzdGVyLCB3aGljaCBpcyBqYXJyaW5nLiBJdCB1cGVuZHMgbXkgZmF0aGVyJ3MgZ2FyZGVuLCB3aGljaCBpcywgc29tZWhvdywgd29yc2UuIFRoaW5raW5nIG9mIGhpbSBwdXR0aW5nIGl0IGJhY2sgdG9nZXRoZXIuIEV2ZW4gaWYgaGUgaGFkIGhlbHAuPC9wPlxyXG4gICAgPHA+SGUgZG9lc24ndCB3YW50IHRvIHZpc2l0LCBhZnRlciB0aGF0LCBldmVuIGJlZm9yZSBoZSBjYW4ndC4gVHJhdmVsIGhhcyBhbHdheXMgYmVlbiBhIHRoaW5nIG9mIHN1bW1lcjsgaGUgZG9lc24ndCB3YW50IHRvIGxlYXZlIHRoZSBob3VzZSB0byBzdG9ybXMgdW5zdXBlcnZpc2VkLiBIZSBkb2Vzbid0IHRydXN0IGFueW9uZSBlbHNlIHRvIGhhbmRsZSBpdCBpZiBoZSBsZWF2ZXMgaXQgYWxvbmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMTgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGUgc2VuZHMgbWUgcGhvdG9zLiBCdXQgdGhleSBnZXQgbW9yZSBkaWZmaWN1bHQgdG8gbG9vayBhdCBvdmVyIHRpbWUsIG9kZGx5IGVub3VnaC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUxOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0nbmluZXRlZW4nPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5IdXJyaWNhbmUgc2Vhc29uIGdyb3dzIGxvbmdlciBhdCBib3RoIGVuZHMuIEl0J3MgaGFyZCB0byBmaW5kIG5ld3MgYWJvdXQgaHVycmljYW5lcyBpbiB0aGUgUGFjaWZpYyB0aGF0IEkgY2FuIHBpY2sgdXAgb24gcGFzc2l2ZWx5LCB0aG91Z2g7IEFtZXJpY2FuIHNvdXJjZXMsIHdoaWNoIGFyZSB3aGF0IHRoZSBpbnRlcm5ldCBpcyBidWlsdCBvbiwgY2FyZSBhYm91dCB0aGUgQXRsYW50aWMgZmlyc3QgYW5kIGZvcmVtb3N0LiBJIGRvbid0IGxpa2UgdGhlIEF0bGFudGljLCBzZWxmaXNobHk6IGl0IGhhcyBhIGJhZCB0cmFjayByZWNvcmQsIGFuZCBJIHJlbWVtYmVyIGl0IGdyYXkuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkluIDIwMjIsIEkgdGVsbCBoaW0gSSdtIHdyaXRpbmcgdGhpcyBlc3NheSwgYW5kIEkgYXNrIGlmIEkgY2FuIHVzZSB0aGUgcGhvdG9zLiBIZSBhc2tzIHdoYXQgSSB3YW50IHRoZW0gZm9yLiBJIHNheSBJJ20gd3JpdGluZyBhYm91dCB0aGUgaW5jcmVhc2VkIHRvbGwgb2YgaHVycmljYW5lcyBvbiBhbiBlbnZpcm9ubWVudCB0aGF0IHJlbGllZCBvbiB0aGVtLiBIZSBzYXlzIGhlIHN1cHBvc2VzIE9kaWxlIHdvdWxkIGJlIHRoZSBvbmUgZm9yIHRoYXQuPC9wPlxyXG4gICAgPHA+SSB3YXNuJ3QgdGhlcmUsIEkgc2F5LiBJdCdzIHRoZSBmaXJzdCBiaWcgb25lIHdoZXJlIEkgd2Fzbid0IHRoZXJlLjwvcD5cclxuICAgIDxwPkhlIGFza3Mgd2h5IHRoYXQgbWF0dGVycy4gVGhpbmdzIGFyZSBnb2luZyB0byBrZWVwIGhhcHBlbmluZyB3aGlsZSB5b3UncmUgbm90IGhlcmUsIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+SSBrbm93LCBJIHNheS48L3A+XHJcbiAgICA8cD5TdXJ2aXZvcidzIGd1aWx0IGlzIGEgdGhpbmcsIG15IHBhcnRuZXIgc2F5cywgaW4gZWFyc2hvdCwgZnJvbSBvZmZzY3JlZW4uIDwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGUgc2VudCBtZSBwaG90b3MuIEluIHRoZSBlbmQsIEkgY2FuJ3QgcXVpdGUgYnJpbmcgbXlzZWxmIHRvIGRlc2NyaWJlIHRoZW0gaW4gdGltZS4gSSBwcm9taXNlIG15c2VsZiBJJ2xsIGNvbWUgYmFjayB0byBpdC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyMigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5Mic+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgdGVsbCBteSBmYXRoZXIgdGhhdCBJJ20gd3JpdGluZyBhYm91dCB0aGUgZmluZ2VycHJpbnRzIG9mIGNsaW1hdGUgY2hhbmdlIGJyYWNrZXRlZCBieSBteSBsaWZlLiBJIHRlbGwgaGltIHRoYXQgYSBsaXR0bGUgb3ZlciBhIHF1YXJ0ZXIgY2VudHVyeSBpcyBhIHByZXR0eSBkZWNlbnQgZnJhbWUgd2l0aCB3aGljaCB0byBlbmNhcHN1bGF0ZSBpdC4gSSB0ZWxsIGhpbSB0aGF0IHNvbWV0aW1lcyBpdCBmZWVscyBsaWtlIGl0J3MgZm9sbG93aW5nIG1lIHVwLjwvcD5cclxuICAgIDxwPllvdSd2ZSBiZWVuIHdvcmtpbmcgeW91ciB3YXkgbm9ydGgsIGhlIHNheXMsIHdpdGggc29tZSBkZWxpZ2h0IGF0IGhvdyBpdCBsaW5lcyB1cC4gPC9wPlxyXG4gICAgPHA+RXZlcnl3aGVyZSBJIGdvLCBldmVyeSB5ZWFyLCBwZW9wbGUgdGVsbCBtZSB0aGF0IHRoaXMgaXNuJ3Qgd2hhdCB0aGUgd2VhdGhlciB1c3VhbGx5IGRvZXMsIEkgdGVsbCBoaW0uIEknbSBnZXR0aW5nIHByYWN0aWNlIGF0IHRoZSBwcmVtaXNlIGJ5IG5vdy48L3A+XHJcbiAgICA8cD5UaGF0J3MgdGhlaXIgcHJvYmxlbSwgaGUgc2F5cy4gSGUgc2F5cyBpdCdzIGEgZmFudGFzeSB0aGF0IGlzbid0IHJlbGV2YW50IHRvIHRoZSB3b3JsZCBhcyBpdCBpcyBhbmQgd2lsbCBjb250aW51ZSBiZWluZy48L3A+XHJcbiAgICA8cD5JIHNheSBJIHRoaW5rIGdyb3VuZGluZyB0aGVtc2VsdmVzIGluIHdoYXQgdGhleSBzdGlsbCB0aGluayBvZiBhcyBub3JtYWwgaXMgaG93IHBlb3BsZSBoZWxwIHRoZW1zZWx2ZXMgdW5kZXJzdGFuZCBjaGFuZ2UuPC9wPlxyXG4gICAgPHA+SGUgc2F5cyBpdCdzIHN0aWxsIHRoZSBjYXNlIHRoYXQgc3VjaCBncm91bmQgZG9lc24ndCBleGlzdC4gSSBzYXkgSSBrbm93LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTIzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHkzJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SXQgaXMgSmFudWFyeSwgYW5kIEkgc3RpbGwgbGl2ZSBpbiBCZWxsZXZ1ZS4gSW4gdGhlIHRpbWUgYmV0d2VlbiBhbiBhZnRlcm5vb24ncyB3b3J0aCBvZiB0aGlzIGNsYXNzIGFuZCBzdGF5aW5nIGJlaGluZCBhZnRlciwgdGhlIHJhaW4gdGhhdCBteSBwYXJ0bmVyIGhvcGVkIHNpZ25hbGVkIGEgYnJlYWsgZnJvbSB0aGUgc25vdyBoYXMgdHVybmVkIHRvIGhhaWwuPC9wPlxyXG4gICAgPHA+SSBjaGVjayB0aGUgd2luZG93LiBJIGNvbWUgYmFjay4gSSdtIHNvcnJ5IGlmIHRoZXJlJ3MgYmFja2dyb3VuZCBub2lzZSwgSSBzYXkgdG8gbXkgaW5zdHJ1Y3Rvci4gSXQncyBoYWlsLjwvcD5cclxuICAgIDxwPlRoZXJlJ3MgYSBwYXJ0aWN1bGFyIHNvcnQgb2Ygc21pbGUgSSdtIGZhbWlsaWFyIHdpdGgsIHdoZW4gcGVvcGxlIGFyZSB0cnlpbmcgdG8gdG9uZSBkb3duIHRoZSBpbXBhY3Qgb2YgdGFsa2luZyBhYm91dCB0aGUgd2VhdGhlci4gSXQncyB0aGVyZSB3aGVuIGhlIHNheXMgaXQncyBub3Qgc3VwcG9zZWQgdG8gaGFpbC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyNCgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5NCc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkgZmluZCBteXNlbGYgd2lzaGluZyBJJ2QgZ29uZSBvdXRzaWRlIGluIHRpbWUgZm9yIHRoZSBoYWlsLiBJdCdzIG5vdCBhIHRleHR1cmUgb2YgaWNlIGZvdW5kIG11Y2ggZWxzZXdoZXJlLCBhbmQgaGFzbid0IGdvdHRlbiBvbGQgZm9yIG1lIHlldDsgSSBsaWtlIHRvIGVhdCBpdC48L3A+XHJcbiAgICA8cD4oV2hlbiBpdCBzbm93ZWQsIG15IGRhZCB3YXMgZGlzYXBwb2ludGVkIHRoYXQgSSBkaWRuJ3QsIGhpcyB3b3JkcywgZ28gcGxheSBpbiB0aGUgc25vdy4gU28gd2FzIEksIGFkbWl0dGVkbHkuIEkgdGhvdWdodDogdGhlcmUgd2lsbCBiZSBtb3JlIHNub3cgbmV4dCB5ZWFyLiBJIHdpbGwgZG8gYmV0dGVyIGJ5IG15c2VsZiBuZXh0IHllYXIsIEkgdGhpbmsuKTwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI1KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk1Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlIGZpcnN0IHN1bW1lciBJJ20gc2V0dGxlZCBlbm91Z2ggaW4gU2VhdHRsZSB0byBiZSBhd2FyZSBvZiBtdWNoIG9mIGFueXRoaW5nLCBDYWxpZm9ybmlhIGlzIG9uIGZpcmUuIEkgYW0gZ2l2ZW4gdG8gdW5kZXJzdGFuZCB0aGF0IHRoaXMgaXMgbmV3LiBBc2ggZmFsbHMgbGlrZSBzbm93LCBvciBsaWtlIGEgQ29sZCBXYXIgZXJhIG51Y2xlYXIgUFNBLiBBIGZyaWVuZCBncm93aW5nIHVwIGlzIHZpc2l0aW5nIGJ1dCBJIGNhbid0IGRvIG11Y2ggbW9yZSB0aGFuIG1ha2UgaXQgZnJvbSB0aGUgY291Y2ggdG8gYW5vdGhlciBzaWRlIG9mIHRoZSByb29tLiA8L3A+XHJcbiAgICA8cD5XZSBkbyBtYW5hZ2UgdG8gZ28gdG8gdGhlIGdsYXNzIHNjdWxwdHVyZSBnYXJkZW4uIEkgdHJ5IHRvIHRha2UgcGhvdG9zLiBNeSBwaG9uZSBjYW4gY2FwdHVyZSB0aGUgY29sb3JzIG9mIHRoZSBnbGFzcyB1bmRlciBhbGllbiBsaWdodCwgb3IgaXQgY2FuIGNhcHR1cmUgdGhlIGdyYXkgc2t5IGFuZCByZWQgc3VuLiBJdCBkb2VzIG5vdCBrbm93IGhvdyB0byBtYWtlIHNlbnNlIG9mIHRoZSB0d28gb2YgdGhlbSB0b2dldGhlci48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyLCBteSBmcmllbmQsIGFuZCBJIHRhbGsgYWJvdXQgaG93IGNvb2wgaXQgd291bGQgYmUgdG8gY29tZSB1cCB3aXRoIGEgc2hvcnQgc3Rvcnkgd2hlcmUgSSBjb3VsZCB1c2UgdGhlIHBob3RvcyBJIGRpZCBnZXQgYXMgaWxsdXN0cmF0aW9ucy4gRXZlbiBpZiBJIGNhbid0IGNhcHR1cmUgdGhlIHdob2xlIG9mIGl0LCBpdCdzIHN0cmlraW5nLiBJdCB3b3VsZCBiZSBuaWNlIHRvIGdldCBzb21ldGhpbmcgb3V0IG9mIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTI2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0d2VudHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBnZXQgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjcoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3R3ZW50eTcnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGdldCBiZXR0ZXIgYWlyIGZpbHRlcnMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMjgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2VpZ2h0ZWVuJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+WWVhcnMgbGF0ZXIsIGluIHRoZSBwYW5kZW1pYywgSSBhbHJlYWR5IG93biByZXNwaXJhdG9ycy4gSSB0YWtlIHRoZSBvcHBvcnR1bml0eSwgcGVyaW9kaWNhbGx5LCB0byBnZXQgYmV0dGVyIG9uZXMuIFRoZXJlJ3MgYSBwb3N0YWwgc3lzdGVtOyBJIGNhbiBkbyB0aGF0LiBJIGFtIGFsbCBidXQgdXNlZCB0byB0aGUgbWFpbC48L3A+XHJcbiAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUyOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndHdlbnR5OSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPk15IHNlY29uZCB3ZWVrIGluIE9oaW8sIEkgd2FudGVkIHRvIHNlbmQgYSBsZXR0ZXIgdG8gYSBmcmllbmQuIE15IFJBIGhhZCB0byB0ZWFjaCBtZSBob3cgdG8gYWRkcmVzcyBhbiBlbnZlbG9wZS4gSXQgc3RydWNrIG1lIGFzIHNvcmNlcnkgZm9yIHllYXJzOiB0byBvcmRlciB0aGluZ3MgYW5kIGhhdmUgdGhlbSBjb21lIHRvIHlvdS4gUmVzb3VyY2VzIGZsb3cgdG93YXJkcyBlbXBpcmVzLCBJIGtuZXcgd2hlbiBJIHdhcyBzaXg7IHBlb3BsZSBnbyB3aGVyZSB0aGUgcmVzb3VyY2VzIGFyZSwgSSB0ZWxsIHBlb3BsZSBhdCB0d2VudHktc2l4LCBmZWVsaW5ncyB0b3dhcmRzIHRoZSBlbXBpcmUgYXJlIGlycmVsZXZhbnQuIEJ1dCBvbiB0aGUgcGVyc29uYWwgbGV2ZWwtLXRoZXJlIHdhcyBzb21ldGhpbmcgbWFnaWMgaW4gc3VjaCByb2FkcyBsZWFkaW5nIHRvd2FyZHMgbWUuIFRoZSBmaXJzdCB0aGluZyBJIGJvdWdodCB3aXRoIG15IGNvbGxlZ2UgYWRkcmVzcyB3YXMgYSBjYW5lLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMwKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHknPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5NeSBwYXJ0bmVyIGFuZCBJIGhhdmUgYW4gYXJndW1lbnQgYWJvdXQgdGhlIGNvbmNlcHQgb2Ygc3dpbW1pbmcgYmVhY2hlczsgZm9yIHRoZSBzYWtlIG9mIHRoaXMgYXJndW1lbnQsIGxldCdzIHNheSBJIGFtIHR3ZW50eS10d28uIEhpcyBvY2VhbiBpcyB0aGUgUHVnZXQgU291bmQ6IGEgdGFtZSwgY29vbCBsaXR0bGUgdGhpbmcgdGhhdCBJIGtub3cgZnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgYnJpZGdlcywgd2l0aCBnbGFzc3kgZmxhdHMgYW5kIG5pYmJsaW5nIHdhdmVzLiBXZSBhcmUgZGlzY3Vzc2luZyB3aHkgY2hhcmFjdGVycyBpbiBhIHZpZGVvIGdhbWUgd291bGQgcGljayB1cCBhbmQgbGVhdmUgdGhlaXIgc2VjdGlvbiBvZiBhIGNvYXN0bGluZSB0byBzd2ltIHNvbWV3aGVyZSBlbHNlLjwvcD5cclxuICAgIDxwPlByZXN1bWFibHkgaXQncyB3aGVyZSB0aGUgc3dpbW1pbmcgYmVhY2hlcyBhcmUsIEkgc2F5LjwvcD5cclxuICAgIDxwPldoYXQgZG8geW91IG1lYW4gc3dpbW1pbmcgYmVhY2gsIGhlIHNheXMuPC9wPlxyXG4gICAgPHA+QmVhY2hlcyB3aGVyZSBpdCdzIHNhZmUgdG8gc3dpbSwgSSBzYXksIGltcGF0aWVudGx5LiBXaXRoaW4gcmVhc29uLjwvcD5cclxuICAgIDxwPlRoZSByZXN1bHRpbmcgbG9uZyBhbmQgaGFsdGluZyBjb252ZXJzYXRpb24sIHJlbmRlcmVkIGFuIGFyZ3VtZW50IGJ5IGxhY2sgb2YgYW55IHVuaXZlcnNlIG9mIGNvbW1vbiByZWZlcmVuY2UsIGlzIGN1dCBzaG9ydCB3aGVuIGhpcyBtb3RoZXIgdGVsbHMgaGltIHRoYXQgdGhlaXIgZmFtaWx5IHZpc2l0ZWQgbmVhciBteSBob21ldG93biBiZWZvcmUgaGUnZCBiZSBhYmxlIHRvIHJlbWVtYmVyLiBBdCBhIHRvdXJpc3RzJyBiZWFjaCBoaXMgZ3JhbmRmYXRoZXIgdHVybmVkIGhpcyBiYWNrIG9uIHRoZSB3YXRlciBhbmQsIHdoZW4gaGUgd2VudCBmbHlpbmcgYWNjb3JkaW5nbHksIGxvc3QgYSBwYWlyIG9mIGRlbnR1cmVzLjwvcD5cclxuICAgIDxwPlNlZSwgSSBzYXkuIE5vcm1hbCBvY2Vhbi4gWW91IGRvbid0IHR1cm4geW91ciBiYWNrIG9uIGl0LjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMxKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkxJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+V2UgaGF2ZSBoYWQgbG9uZyBlbm91Z2ggdG8gZ3JvdyBhY2N1c3RvbWVkIHRvIG9uZSBhbm90aGVyIHRoYXQgSSBzdHJ1Z2dsZSB0byByZW1lbWJlciBvdGhlciBkaXNqb2ludHMgb2YgdGhpcyBraW5kLiBUaGVyZSdzIGJlZW4gb3ZlciBoYWxmIGEgZGVjYWRlIHRvIGJ1aWxkIHRoZSBuZWNlc3NhcnkgY29uY2VwdHVhbCBicmlkZ2VzLiBPZnRlbiBlbm91Z2gsIHdlIHN0aWxsIGhhdmUgbW9tZW50cyB0aGF0IG1ha2UgaGltIHNheSwgU29tZXRpbWVzIEkgcmVtZW1iZXIgdGhhdCB3ZSBjb21lIGZyb20gZGlmZmVyZW50IHdvcmxkcy4gQnV0IHRoZXkgZG9uJ3QgbXVjaCBzcHJpbmcgdG8gbWVtb3J5IHRoZXNlIGRheXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzIoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JIGhhdmUgbWl4ZWQgZmVlbGluZ3Mgb24gcmVmZXJyaW5nIHRvIHByZXBhcmF0b3JpYSBhcyBhIGhpZ2ggc2Nob29sLiBJdCBnaXZlcyBwZW9wbGUgdGhlIGFwcHJveGltYXRlIGlkZWEgdGhhdCB0aGV5IG5lZWQsIGJ1dCBtb3JlIG9mdGVuIHRoYW4gbm90IEkgZmluZCBJIHdhbnQgdGhlIGFsaWVuYXRpb247IEknbSBqdXN0IG5vdCBlbnRpcmVseSBzdXJlIHdoZW4gSSBtYW5hZ2UgdGhhdCB2ZXJzdXMgYWN0dWFsIGluY29tcHJlaGVuc2lvbi4gQW5kIEkgZG9uJ3Qgd2FudCB0aGUgbGF0dGVyOyB0aGF0IGRlZmVhdHMgdGhlIHBvaW50LiBJIHB1dCBmYXIgdG9vIG11Y2ggZWZmb3J0IGludG8gdHJhbnNsYXRpb24gdGhhbiB0aGF0LjwvcD5cclxuICAgIDxwPkxldCdzIGJvdyB0byBhdWRpZW5jZSBhbmQgc2F5IEknbSBpbiBoaWdoIHNjaG9vbCwgZm9yIHRoaXMgb25lLiBJJ3ZlIGhhZCB0byBtb3ZlIHRvIHRoZSBjYXBpdGFsIG9mIHRoZSBzdGF0ZS0tZHVyaW5nIHRoZSB3ZWVrOyBzcGxpdHRpbmcgY3VzdG9keSB3aWxsIGRvIHRoZXNlIHRoaW5ncyB0byB5b3UtLWZvciBpdC4gSSdtIGEgc2Nob2xhcnNoaXAgc3R1ZGVudCBhdCBhIHByaXZhdGUgc2Nob29sLCBmb3IgcmVsYXRlZCByZWFzb25zLiBBdCB0aGlzIGdyYWRlIGxldmVsIGluIG15IGhvbWV0b3duIHRoZXJlJ3Mgb25seSB2b2NhdGlvbmFsIHNjaG9vbGluZywgYW5kIGl0J3Mgbm90IG1hbmRhdG9yeSBhbnl3YXkuIEZvciB0aGUgZmlyc3QgdGltZSBpbiBteSBsaWZlLGFzIGEgcmVzdWx0LCBJIGFtIG5vdCBpbiB0aGUgcHVibGljIHNjaG9vbCBzeXN0ZW0uPC9wPlxyXG4gICAgPHA+KE9uZSBlYXJseSBtZWFuaW5nIG9mIHRoaXMgaXMgdGhhdCB0aGUgc2Nob29sIGlzIGFpciBjb25kaXRpb25lZCwgd2hpY2ggaXQgZG9lcyBub3Qgb2NjdXIgdG8gbWUgdG8gcGFjayBmb3IgbXkgZmlyc3Qgd2VlayB0aGVyZS4gSSB0dXJuIGZpZnRlZW4gYW5kIG15IHRlZXRoIGFyZSBjaGF0dGVyaW5nIGF0IHRoZSBjb250cmFzdCBmb3IgaGFsZiB0aGUgZGF5LCB1bnRpbCBhIGNsYXNzbWF0ZSBpbmNyZWR1bG91c2x5IGxlbmRzIG1lIGhpcyBqYWNrZXQuKTwvcD5cclxuICAgIDxwPldlIGFyZSB3YXRjaGluZyBhIG1vdmllIGluIG9uZSBvZiB0aGUgdGhyb3dhd2F5IGNsYXNzZXMgd2hvc2UgcmVkZWVtaW5nIGZlYXR1cmVzIGFyZSBnZW5lcmFsbHkgbW92aWVzLCB3aGVuIHRoZSBwcm90YWdvbmlzdCBydW5zIG91dCBvbnRvIHRoZSBncmVlbiwgZ3JlZW4gbGF3biBvZiBzb21lIGZhbW91cyBjb2xsZWdlJ3Mgb2xkIEFtZXJpY2FuIGJ1aWxkaW5nLjwvcD5cclxuICAgIDxwPlRoZSBtZXRhbCByb29mIG9mIG15IGhpZ2ggc2Nob29sJ3MgbmV3IGJ1aWxkaW5nIChpZiB3ZSBjYWxsIGl0IGEgaGlnaCBzY2hvb2wsIGFwcHJveGltYXRpbmcpIHJhdHRsZXMgd2hlbiBpdCByYWlucywgYWx0aG91Z2ggaXQncyBub3QgY3VycmVudGx5IHJhaW5pbmcuPC9wPlxyXG4gICAgPHA+T25lIG9mIG15IGNsYXNzbWF0ZXMgcG9pbnRzIGFuZCBzYXlzLCBpbiBtdWNoIHRoZSBzYW1lIHRvbmUgYXMgcGVvcGxlIHN0YXJ0ZWQgY2l0aW5nIDxpPmxhIGNyaXNpczwvaT4gd2hlbiB0aGUgQW1lcmljYW4gcmVjZXNzaW9uIG1lYW50IHRoZXkgc3RvcHBlZCBleHBvcnRpbmcgb3VyIGVjb25vbXkncyB3b3J0aCBvZiB0b3VyaXN0cywgdGhhdCB3ZSBzaGVsbCBvdXQgc28gbXVjaCBmb3IgdHVpdGlvbiwgc28gd2h5IGRvZXNuJ3Qgb3VyIHNjaG9vbCBsb29rIGxpa2UgdGhhdD88L3A+XHJcbiAgICA8cD5UaGUgdGVhY2hlciBjb3VsZCBjb21tZW50IG9uIGhpc3RvcnksIGFuZCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgYSBuZXcgYnVpbGRpbmcuIFNoZSBjb3VsZCBjb21lbW50LCBldmVuLCBvbiBlbnZpcm9ubWVudDsgd2UgaGF2ZSBhbiBlbnZpcm9ubWVudGFsaXN0IGNvbXBvbmVudCBpbiBhbm90aGVyIGNsYXNzLCBhZ2dyZXNzaXZlbHkgdGhlbWVkIGFyb3VuZCBtYW5ncm92ZSBwcmVzZXJ2YXRpb24uPC9wPlxyXG4gICAgPHA+VGhpcyBpcyBub3QgdGhlIHNvcnQgb2YgcGVyc29uIHNoZSBpczsgc2hlIGlzIHRoZSBzb3J0IG9mIHBlcnNvbiB3aG8gdGVsbHMgcGFyYWJsZXMgYWJvdXQgdGhlIGZ1bmRhbWVudGFsIGRpZmZlcmVuY2VzIGluIGJlaGF2aW9yIGJldHdlZW4gYnVja2V0cyBvZiBNZXhpY2FuIGFuZCBBbWVyaWNhbiBjcmFicy48L3A+XHJcbiAgICA8cD5TbyB3aGF0IHNoZSBzYXlzIGlzIHRydWUgdG8gZm9ybTogc2hlIHNheXMsIHRoYXQncyBiZWNhdXNlIHdlIGxpdmUgaW4gYSB0aGlyZCB3b3JsZCBjb3VudHJ5LCBkZWFyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTMzKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHkzJz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgZWlnaHRlZW4sIEkgaGF2ZSBub3QgeWV0IGxlYXJuZWQgdGhhdCwgd2hlbiBzb21lb25lIHRlbGxzIG1lIHRoZXkgZG9uJ3Qgc3BlYWsgU3BhbmlzaCwgdGhleSBtZWFuIHRoYXQgdGhleSBzcGVhayBubyBTcGFuaXNoLiBNZXhpY28gbWFuZGF0ZXMgZm9yZWlnbiBsYW5ndWFnZSBlZHVjYXRpb24gYWZ0ZXIgc2l4dGggZ3JhZGU7IEkgaGVhciBhYm91dCBwZW9wbGUgd2hvc2Ugc2Nob29scyBhcmUgbGFyZ2UgYW5kIHVyYmFuIGFuZCBtb25pZWQgZW5vdWdoIHRvIGhhdmUgY2hvaWNlcyBvZiBsYW5ndWFnZXMsIGJ1dCBldmVyeW9uZSBoYXMgdGhlIG9wdGlvbiBvZiBFbmdsaXNoLiBUaGVyZSBhcmUgZml2ZSB0aG91c2FuZCBwZW9wbGUgaW4gbXkgdG93biBhbmQgc2l4IGh1bmRyZWQgdGhvdXNhbmQgaW4gbXkgc3RhdGUuIFRoZSBvbmx5IG9wdGlvbiBpcyBFbmdsaXNoLiA8L3A+XHJcbiAgICA8cD5UaGUgb25seSBvcHRpb24gd2FzIEVuZ2xpc2ggbG9uZyBiZWZvcmUgdGhhdCwgYW55d2F5OyB3aGVuIHRoZSBtb25leSBhbmQgdGhlIG1lZGlhIGFuZCB0aGUgc2hpcHBpbmcgY29tZXMgaW4gb25lIGxhbmd1YWdlLCB5b3UgcGljayBpdCB1cC4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzQoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTQnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5UaGVyZSdzIGEgc3BlY2lmaWMgZ2VuZXJhdGlvbiBvZiBTcGFuaXNoLUVuZ2xpc2ggc2xhbmcgSSBoYXZlIHRoYXQgSSBzdXNwZWN0IGlzIGRlYWQgYnkgbm93LiBJdCdzIGEgbWlkcG9pbnQ6IHZvY2FidWxhcnkgd2l0aG91dCBncmFtbWFyLCBrZXl3b3JkcyB3aXRob3V0IGNvbXByZWhlbnNpb24uIEhvdCBkb2dzIHZhcnkgd2lsZGx5IGJldHdlZW4gY291bnRyaWVzLCBhbmQsIHdpdGhpbiBNZXhpY28tLW5vdCB0aGF0IHlvdSdsbCBrbm93IHRoaXMgb25saW5lLS1iZXR3ZWVuIHN0YXRlcywgYW5kIHRodXMgSSBhbSBhcyBjb21taXR0ZWQgYXMgeW91IG1pZ2h0IGV4cGVjdCB0byB0aGUgYXJndW1lbnQgdGhhdCBubyBvbmUgZWxzZSBtYWtlcyB0aGVtIHJpZ2h0OyBhcyBzdWNoLCBJIGhhdmVuJ3QgaGFkIGEgaG90IGRvZyBzaW5jZSBJIHdhcyBlaWdodGVlbi4gPC9wPlxyXG4gICAgPHA+VGhlIGNhcnQgd2hlcmUgbXkgZmF0aGVyIGFuZCBJIHdlcmUgcmVndWxhcnMgaGFkIGEgaHVycmljYW5lIGxhbXAgd2l0aCBubyBnbGFzcywgZm9yIGEgd2hpbGUsIGFuZCBJIGxpa2VkIHN0YW5kaW5nIGNsb3NlIGVub3VnaCB0byB0aGUgY29va2luZyBzdXJmYWNlIHRvIGdldCB0aGUgdGluaWVzdCBwaXR0ZXItcGF0dGVyIG9mIGhvdCBvaWwgb24gbXkgYXJtcy4gPGk+SGF0ZXMgRWwgR1x1MDBGQ2VybzwvaT4sIHBhaW50ZWQgb24gdGhlIHdoaXRlIHN1cmZhY2UgYnkgdGhlIGtpbmQgb2YgZHJhZnRzbWFuIEkgd2FzIHRyYWluZWQgdG8gYmUgaW4gc2VjdW5kYXJpYSBhbmQgd2hvc2UgcHJvZmVzc2lvbiBoYXNuJ3QgZXhpc3RlZCBpbiB0aGUgbm9ydGggZm9yIGdlbmVyYXRpb25zOiB0aGUgPGk+aG90IGRvZzwvaT4gd2FzIGltcG9ydGVkIGJlZm9yZSB0aGUgRW5nbGlzaCBhZGplY3RpdmUtbm91biBvcmRlciBjb3VsZCBmb2xsb3cgc3VpdC48L3A+XHJcbiAgICA8cD5Bbm90aGVyIHdvcmQgSSB1c2UgYXMgYW4gZXhhbXBsZTogPGk+bWFjaFx1MDBFRG48L2k+LCBhbiBhbGwtcHVycG9zZSBpbnRlbnNpZmllci4gV2hlbiBFbmdsaXNoIGJyb3VnaHQgPGk+bWFjaGluZTwvaT5zIHRoZSBjbGVhcmVzdCBwb2ludCBvZiByZWZlcmVuY2UgaW4gY29tbW9uICBmb3IgdGhlIHJlZmVyZW50cyBvZiB0aGUgd29yZCB3YXM6IG1vcmUuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lMzUoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J3RoaXJ0eTUnPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JbmR1c3RyaWFsaXphdGlvbiB0cmlja2xlcyBkb3duLiBFbWlzc2lvbnMgdHJpY2tsZSBkb3duLiBDbGltYXRlIGNoYW5nZSByZWFjaGVzIHVwLCBkcmlmdHMsIGxpa2UgQ2FsaWZvcm5pYSBzbW9rZSwgbGlrZSBpdCdzIGRvZ2dpbmcgbXkgZm9vdHN0ZXBzLiBMaWtlIGl0IHdhbnRzIHRvIGRvIGFueW9uZSdzIGFiaWxpdHkgdG8gdGFsayB0aGUgYmlnIHBpY3R1cmUgb3V0IHRoZSBvcHBvc2l0ZSBvZiBhbnkgZmF2b3JzLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM2KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk2Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+VGhlcmUgaXMgYW4gYXJndW1lbnQgYWJvdXQgbWF5b25uYWlzZSBJIGhhdmUgd2hlbmV2ZXIgSSBjYW4uIEFtZXJpY2FucywgYXMgYSBuYXRpb25hbCBwYXN0aW1lLCBlbmpveSB0YWtpbmcgY3JlZGl0IGZvciB0aGUgY29uY2VwdCBhbmQgdGhlbiBtb25vbG9ndWluZyBhYm91dCBob3cgbXVjaCB0aGV5IGhhdGUgaXQuIFRoZXJlIGlzIGEgZ2VuZXJhbCBhdHRlbXB0IHRvIGVzdGFibGlzaCBpdCBhcyBzeW5vbnltb3VzIHdpdGggd2hpdGVuZXNzIGluIHRoZSByYWNpYWwgc2Vuc2UgYXMgb3Bwb3NlZCB0byB0aGUgdmlzdWFsIG9uZS4gSSBkb24ndCBrbm93IHdobyBiZW5lZml0cyBmcm9tIHRoYXQsIGJ1dCBpdCBtYWtlcyB0aGUgcHJlYW1ibGUgdG8gRW5nbGlzaC1sYW5ndWFnZSByZWNpcGVzIGZvciBKYXBhbmVzZSBwYW5jYWtlcyBleGhhdXN0aW5nLjwvcD5cclxuICAgIDxwPkkgaGF2ZSBzcGVudCB5ZWFycyBpdGVyYXRpbmcgb24gdGhlIGFyZ3VtZW50IHRoaXMgbWVhbnMgaGF2aW5nLCB3aGVuIEkgY2FuIGJvdGhlci4gTWF5b25uYWlzZSBpcyBjb21tb24gd2hlcmUgSSdtIGZyb20sIGluIHRoZSBkZXNlcnQ6IG1peGVkIHdpdGggbWlsayBhcyBhIGZhdCBmb3IgZnJ5aW5nIGFuZCBhIHRvcHBpbmcgZm9yIHNlZW1pbmdseSBoYWxmIG9mIGFsbCBzYXZvcnkgZGlzaGVzIHlvdSBjYW4gc2hha2UgYSBzcXVpcnQgYm90dGxlIGF0IGl0LjwvcD5cclxuICAgIDxwPlRoYXQncyBkaXNndXN0aW5nLCBwZW9wbGUgdGVsbCBtZSBpbiBFbmdsaXNoLCBhbmQgdGhleSB3b3VsZCBsaWtlIHRvIGJsYW1lIGEgd2hpdGUgcGVyc29uIGZvciBpdC48L3A+XHJcbiAgICA8cD5NYXlvbm5haXNlIGlzIGEgc2hlbGYtc3RhYmxlIGVtdWxzaW9uIG9mIGVnZ3MgYW5kIG9pbCwgSSB0ZWxsIHRoZW0uIFdobyBvbiBFYXJ0aCBoYXMgdGhlIHJlZnJpZ2VyYXRlZCB0cnVja3MgdG8gd2FzdGUgb24gdGhlIGFsdGVybmF0aXZlLiBJcyB0aGF0IHJlYWxseSB0aGVpciBwcmVmZXJyZWQgcmVzb3VyY2UgYWxsb2NhdGlvbi4gSXMgdGhhdCBzb21ldGhpbmcgdGhleSBjb25zaWRlciB3b3J0aHdoaWxlIGZvciBhIHBpZWNlIG9mIHN5bWJvbGlzbSB0aGV5IG1hZGUgdXAuPC9wPlxyXG4gICAgPHA+VGhpcyBkb2VzIG5vdCBhY3R1YWxseSBlbmQgYXJndW1lbnRzOyBmb3Igb25lIHRoaW5nLCBpdCByZXF1aXJlcyBhbiB1bmRlcnN0YW5kaW5nIG9mIGhvdyBoYXJkIGEgcmVmcmlnZXJhdGVkIHRydWNrIGhhcyB0byB3b3JrIGZvciAoc2F5KSBhIHRob3VzYW5kIG1pbGVzIG9mIGRlc2VydCBkdWUgc291dGggb24gdGhlIEhpZ2h3YXkgT25lIGFzIEkga25vdyBpdC4gRm9yIGFub3RoZXIsIGl0IHJlcXVpcmVzIGFuIHVuZGVybHlpbmcgdW5kZXJzdGFuZGluZyBvZiByZWZyaWdlcmF0aW9uLCBhbmQgdHJ1Y2tzLCBhbmQgcmVmcmlnZXJhdGVkIHRydWNrcywgYXMgbGltaXRlZCByZXNvdXJjZXMgdG8gYmVnaW4gd2l0aC4gPC9wPlxyXG4gICAgPHA+QnV0IGl0IGRvZXMgc29tZXRpbWVzIG1ha2UgaXQgbW9yZSB0b2xlcmFibGUgdG8gbGl2ZSB3aXRoLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM3KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk3Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SSBhbSBubyBvbGRlciB0aGFuIGVsZXZlbiB5ZWFycyBvbGQsIGFuZCBJIGFtIGF0dGVtcHRpbmcsIGFzIEkgb2Z0ZW4gZG8sIHRvIGlnbm9yZSBteSBtb3RoZXIuIFRoZXJlIGlzIGEgY3V0dGluZyBxdWFsaXR5IHRvIGhlciB2b2ljZSwgYW5kIG15IGJyYWluIGlzIHR1bmVkIHRvIGl0IG1lYW5pbmcgZGFuZ2VyOyBzbywgYXMgSSBhbHNvIG9mdGVuIGRvLCBJIGFtIGZhaWxpbmcuIEkgd291bGQgYmUgZG9pbmcgYmV0dGVyLCBidXQgSSBhbSB3YWl0aW5nIGZvciBoZXIgaW4gdGhlIGNhciAodHJ1Y2s7IGl0IHdpbGwgdGFrZSBhdCBsZWFzdCBhIGRlY2FkZSBmb3IgbWUgdG8gdW5kZXJzdGFuZCB0aGF0IHRydWNrcyBhcmUgc3VwcG9zZWRseSBub3QgY2FycyksIGFuZCBJIGhhdmUgcnVuIG91dCBvZiBib29rcyB0byBkbyBpdCB3aXRoLiA8L3A+XHJcbiAgICA8cD4oVGhlcmUgYXJlIG5vdCByZWxldmFudCBtb2JpbGUgZGV2aWNlcyBpbiBteSBsaWZlIHlldDsgd2hlbiBJIGxlYXZlIHRoZSBob3VzZSwgSSBkbyBzbyB3aXRoIG9uZSBvciBtb3JlIGJvb2tzLiBBcyBteSBmYXRoZXIgcHV0cyBpdCwgYmFkIHRoaW5ncyBoYXBwZW4gd2hlbiB5b3UgbGVhdmUgdGhlIGhvdXNlIHdpdGhvdXQgYSBib29rLiBJZiB3ZSdyZSBnb2luZyB0byBhIGNpdHksIEkgZG8gc28gd2l0aCBhIHN0YWNrIGluIHRoZSBmb290d2VsbC4gU29tZXRpbWVzLCBhcyBub3csIEkgc3RpbGwgdW5kZXJlc3RpbWF0ZSB3aGF0IGNvdWxkIGJlIGVub3VnaC4pPC9wPlxyXG4gICAgPHA+TXkgbW90aGVyIGlzIGJ1eWluZyBhbGZhbGZhIGZvciBob3JzZXMsIHB1bGxlZCBvdmVyIGJ5IHRoZSBzaWRlIG9mIHRoZSByb2FkIHdoZXJlIHNoZSdzIG1ldCBhIG1hbiB3aXRoIGFuIGVpZ2h0ZWVuLXdoZWVsZXIgc3RhY2tlZCB3aXRoIGl0LiBJIHdpbGwgcmVhbGl6ZSwgbXVjaCBsYXRlciwgdGhhdCB0aGlzIHdhcyBwcm9iYWJseSBzb21lIGxldmVsIG9mIGNhc2ggdW5kZXIgdGhlIHRhYmxlOyBpdCB3aWxsIG5vdCBvY2N1ciB0byBtZSB1bnRpbCBhZHVsdGhvb2QgdGhhdCB0aGUgdHJ1Y2tlcnMgYnJvdWdodCB0aGUgcmVzdCBvZiB0aGUgYmFsZXMgdG8gc3RvcmVzLCB3aGVyZSBwcmVzdW1hYmx5IHBlb3BsZSB3b3VsZCBwYXkgZm9yIHRoZW0uIE15IGNvbnRleHQgaXMganVzdCB0aGlzOiB0aGUgZHVzdHkgc2lkZSBvZiBhIHJvYWQsIGEgcGlja3VwIHRydWNrLCBhIGZsYXRiZWQgZnVsbCBvZiByZWN0YW5ndWxhciBwcmlzbXMgdGhhdCwgbW9yZSBhbmQgbW9yZSBvZnRlbiwgYXJlIG5vdCB0aGUgcmlnaHQgc2hhZGUgb2YgZ3JlZW4uPC9wPlxyXG4gICAgPHA+U2hlIGRlbWFuZHMgaGUgbGV0IGhlciBicmVhayBvcGVuIGEgYmFsZSBmb3IgaW5zcGVjdGlvbiwgYW5kIHRoZW4gZmluZHMgd2hhdCBzaGUgYW50aWNpcGF0ZWQuIFRoaXMgaXMgZHJ5LCBzaGUgc2F5cywgb2YgdGhlIHN0aWZmIHllbGxvdyBvdXRzaWRlOyB0aGlzIGlzIHdldCwgb2YgdGhlIHBsaWFibGUgZ3JlZW4gaW5zaWRlLCB0b28gd2F0ZXItZGFyay4gVGhleSBoYXZlIHBpY2tlZCBhbmQgYmFsZWQgaXQgdG9vIHNvb24uIEl0J3MgZ29pbmcgdG8gcm90LjwvcD5cclxuICAgIDxwPlRoZSBtYW4gc2F5cyBpdCdzIHdoYXQgaGUgaGFzLCB3aGljaCBpcyBvYnZpb3VzbHkgdHJ1ZS4gSXQncyBhYm91dCB0aGUgZm9yZXNob3J0ZW5pbmcgb2YgdGhlIGdyb3dpbmcgc2Vhc29uOyBkcm91Z2h0IGFuZCBoZWF0IGFuZCBodXJyaWNhbmVzIHRoYXQgY29tZSB3aGVuIHRoZXkncmUgbm90IHN1cHBvc2VkIHRvLCB3aGljaCBpcyB0byBzYXkgdGhlIHNhbWUgdGhpbmcgdGhyaWNlLiBUaGUgc3RlbXMgYW5kIGxlYXZlcyBhcmUgcGFja2VkIGludG8gYmFsZXMgdG9vIGVhcmx5IG9yIHRvbyBsYXRlLiBTaGUncyByaWdodCB0aGF0IHRoZXkgbW9sZGVyLiBIZSdzIHJpZ2h0IHRoYXQgaXQncyBub3QgbGlrZSB0aGUgZmFybSBnYXZlIGhpbSBhbnl0aGluZyBlbHNlLiBJbiBhIGNvdXBsZSBtaW51dGVzIHRoZXknbGwgbW92ZSBvbiB0byBoYWdnbGluZyBhYm91dCBzcGlrZXMgaW4gcHJpY2UuPC9wPlxyXG4gICAgPHA+SSBrbm93IHRoaXMuIEkgcGljayB1cCB0aGUgYm9vayBzaGUncyBicm91Z2h0IHdpdGggaGVyIGZyb20gdGhlIGNlbnRlciBjb25zb2xlLCB0byBzZWUgaWYgSSBjYW4gdHVuZSB0aGUgb25nb2luZyBuZWdvdGlhdGlvbnMgYmV0dGVyIHJlYWRpbmcgaXQuIFRoZSBjaGFuZ2Ugb2Ygc2Vhc29ucyBpcyB0ZW4geWVhcnMgb3V0IGZyb20gY29taW5nIE5vcnRoIGVub3VnaCB0byBtYWtlIHRoZSBuZXdzLCB0aG91Z2ggdGhleSBpbmV2aXRhYmx5IGRvLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTM4KCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSd0aGlydHk4Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+QXQgdHdlbnR5LWZpdmUgSSBwaWN0dXJlIHRoZSBoZWF0IGRvbWUgb3ZlciBLaW5nIENvdW50eSBsaXRlcmFsbHkgZW5vdWdoOiBsaWtlIGEgZ3JlYXQgaGFuZCBoYXMgcmVhY2hlZCBvdmVyIGFuZCBkZWxpY2F0ZWx5IHBsYWNlZCBhIGdsYXNzIHBvdCBsaWQgb3ZlciB0aGUgbGFuZCwgd2l0aCBhbGwgdGhlIGNhcHR1cmVkIHN0ZWFtIHRoYXQgZW50YWlscy4gPC9wPlxyXG4gICAgPHA+SXQgaGFzIGNvbWUgdG8gbXkgYXR0ZW50aW9uIHRoYXQgbm8gb25lIGhlcmUgYnVpbHQgY2VpbGluZyBmYW5zIGludG8gdGhlaXIgaG91c2VzLiBJIGRvdWJsZSB0aGUgbnVtYmVyIG9mIGZhbnMgaW4gb3VyIGFwYXJ0bWVudCwgbWF0dGVyIG9mIGZhY3Q7IHRoZW4gSSB0cmlwbGUgaXQuIEkgcnVuIHNsaWdodGx5IGJ1dCBjcnVjaWFsbHkgYWhlYWQgb2YgdGhlIHN1YnNlcXVlbnQgcnVuIG9uIGZhbnMgaW4gc3RvcmVzLCB3aGVuIHBlb3BsZSB1bmRlcnN0YW5kIHdoYXQncyBnb2luZyBvbiBhcm91bmQgdGhlbS48L3A+XHJcbiAgICA8cD5NeSBwYXJ0bmVyJ3MgcGFyZW50cycgaG91c2UgaGFzIGFpciBjb25kaXRpb25pbmcuIEhpcyBtb3RoZXIgcG9pbnRzIG91dCB0aGF0IHRoaXMgcHV0cyB0aGVtIGluIGEgdGhpcmQgb2YgU2VhdHRsZSBhcmVhIHJlc2lkZW5jZXMuIEhlIGFuZCBJIGFuZCBoaXMgc2lzdGVyIHZpc2l0LCBpbiBzb21lIGRlc3BlcmF0aW9uOiB0aHJlZSBob3VzZWhvbGRzIHRvdGFsLCBwcm9wb3J0aW9uYXRlLiBUaGV5IGRvIG5vdCBoYXZlIGZhbnM7IEkgYW0gYmFmZmxlZC4gVGhpcyBpcyB3aGVuIEkgbm90aWNlIHRoYXQgdGhleSBkb24ndCBoYXZlIGEgY2VpbGluZyBmYW4uIEkgdHJ5IHRvIGJlIG1vcmUgb2JzZXJ2YW50IHRoYW4gdGhhdCwgYnV0IGl0IGhhZG4ndCBvY2N1cnJlZCB0byBtZSB0byBzZWUgYSBjZWlsaW5nIHdpdGhvdXQgb25lLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2NlbmUzOSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NjZW5lJyBpZD0ndGhpcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkkga25vdyB0aGVzZSB0ZW1wZXJhdHVyZXMgdGhlIHdheSBteSBsb3ZlZCBvbmVzIGRvIG5vdCwgYnV0IEkgZGlkbid0IGxpa2UgdGhlbSBhbnkgYmV0dGVyIHdoZW4gSSB3YXMgeW91bmdlci4gSSB3ZWFyIG1vcmUgbGF5ZXJzIG5vdywgYnkgbWVkaWNhbCBuZWNlc3NpdHksIGFuZCBhbSBsZXNzIGFjY2xpbWF0ZWQsIHRyYWRpbmcgdGhlIHBsYWNpZCByZXNpZ25hdGlvbiB0byBzdW1tZXIgY29tbXV0ZXMgYXQgMTIwRiAodGhlIGNhciBoYWQgYnJva2VuLCBteSBmaXJzdCBzdW1tZXIgaW4gcGVyaGFwcy1oaWdoIHNjaG9vbCwgaW4gc3VjaCBhIHdheSBhcyBtZWFudCBvbmUgaGFkIHRvIHJ1biB0aGUgaGVhdGVyIGluIG9yZGVyIHRvIGlkbGUgaXQsIHdoaWNoIGRpZG4ndCBoZWxwKSBmb3IgdG9sZXJhdGluZyBzbm93LiBUaGUgdXBzaG90IGlzIHRoYXQgSSBhbSBtb3JlIGZ1bmN0aW9uYWwgYnV0IHBvb3JseSBmdW5jdGlvbmluZzsgSSBkb24ndCByZWFsaXplIHVudGlsIGxhdGVyIHdoeSBJJ20gbm90IGVhdGluZyBvciBzbGVlcGluZywgYW5kIHRoZW4gSSByZW1lbWJlci48L3A+XHJcbiAgICA8cD5JIGFkZCBhaXIgY29uZGl0aW9uaW5nIHRvIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3Igb3VyIG5leHQgYXBhcnRtZW50LCBsb25nIHNob3QgdGhhdCBpdCBpcy4gPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDAoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5Jz5cclxuICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgPHA+SGVyZSwgZm9yIHRoZSBzZWNvbmQgdGltZTogVHVlc2RheS4gMjAyMi4gRmVicnVhcnkuIEluY3JlYXNpbmdseSBoZWF2eSBzbm93LCB3aGl0ZXIgdGhhbiBteSBwYXJ0bmVyJ3Mga251Y2tsZXMgb24gdGhlIHN0ZWVyaW5nIHdoZWVsLjwvcD5cclxuICAgIDxwPlwiSSBoYXRlIHRoaXMsXCIgaGUgc2F5cywgbm90IGZvciB0aGUgZmlyc3QgdGltZS48L3A+XHJcbiAgICA8cD5cIkl0J3MgYmVhdXRpLS1JJ20gc29ycnksXCIgSSBzYXksIHRvIG15IHBhcnRuZXIsIHdobydzIHRoZSBvbmUgd2hvIGhhcyB0byBkcml2ZSB0aHJvdWdoIGl0LiBBcyB0aGUgdHJlZXMgd2UgcGFzcyBieSBhcmUgcmVuZGVyZWQgaW50byBibGFjayBhbmQgd2hpdGUgc3RyYWlnaHQgbGluZXMsIHJlYWNoaW5nIG91dCB0byBtZS4gXCJJIHN0aWxsIHRoaW5rIGl0J3MgYmVhdXRpZnVsLCBJJ20gc29ycnkuXCIgPC9wPlxyXG4gICAgPHA+VGhlIHVyZ2UgdG8gYXBvbG9naXplIGlzIGJlY2F1c2UgaGUncyBzdHJlc3NlZC4gSSBrbm93IHRoaXMgbWFrZXMgaXQgZGlmZmljdWx0LCBldmVuIHdpdGhvdXQgdGhlIGNvdW50ZXJ3ZWlnaHQgb2YgYSBzd2F0aGUgb2Ygb3VyIGZvcm1lciBhcGFydG1lbnQsIHRvIGRyaXZlLiBJIHNhdyB0aGUgYWR2aXNvcnkgYWJvdXQgYmxhY2sgaWNlIGZpcnN0IGJldHdlZW4gdGhlIHR3byBvZiB1cy4gSSBrbm93IGZpdmUgd2ludGVycyB3b3J0aCBvZiB3aGF0IHNub3cgZG9lcyB0byBTZWF0dGxlLCB3aGVyZSB0aGUgd2ludGVyIHdlYXRoZXIgaXMgbm90IHN1cHBvc2VkIHRvIHNub3cuIDwvcD5cclxuICAgIDxwPkFuZCBiZWNhdXNlIEkgdHJ1c3QgaGltIGVub3VnaCB0byBjb21tZW50IG9uIHRoZSBiZWF1dHksIHRoZSBwb2ludCBvZiB2aWV3IHRoYXQgYmVpbmcgYSBwZXJwZXR1YWwgcGFzc2VuZ2VyIGNhbiBhZmZvcmQgbWUuIEhlIGtub3dzIHdoYXQgaGUgY2hvc2UgdG8gbWFycnk7IEkgY2FuIGFmZm9yZCB0byBibHVydCBvdXQgbXkgZmVlbGluZ3Mgb24gcHJlY2lwaXRhdGlvbi4gSSB0cnkgdG8gbWVtb3JpemUgaXQsIHNub3cgbmVhciBtaWRuaWdodCBpbiBhIG1vdmluZyBjYXIsIGZvciBsYXRlci4gRm9yIHRoaXMuPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjZW5lNDEoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzY2VuZScgaWQ9J2ZvcnR5MSc+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgIDxwPkknbSBub3Qgc29ycnkgdGhhdCBoZSBjYW4ndCBzaGFyZSBoaXMgd2VhdGhlciBhcyBoZSBtZWFucyBpdCB0byBiZSB3aXRoIG1lLCBub3QgdW5sZXNzIEkgdGhpbmsgYWJvdXQgaXQuIE5vIG9uZSdzIGJlZW4gYWJsZSB0byBkbyB0aGF0LCBhbnl3aGVyZSBJIGdvLCBpbiBteSBlbnRpcmUgYWR1bHQgbGlmZS4gSSBkb24ndCBrbm93IGhvdyBvbmUgd291bGQgc3RhcnQuPC9wPlxyXG4gICAgPHA+QnV0IEkgZG8ga25vdywgd2hlbiBJIHRoaW5rIGFib3V0IGl0LCB0aGF0IHRoYXQncyBiZWluZyBzdG9sZW4gZnJvbSBoaW0gYnkgYXR0cml0aW9uOyB3ZSB0YWxrIGFib3V0IGZsb29kIHJpc2sgd2hlbiB3ZSB0YWxrIGFib3V0IG91ciBsb25nLXRlcm0gZnV0dXJlLCBhYm91dCBTZWF0dGxlIGFuZCBpdHMgc2VhIGxldmVsLCBhYm91dCB0aGUgaW5ldml0YWJpbGl0eSBvZiBtb3ZpbmcgaW5sYW5kIHdoZW4gd2UgbGl2ZSBsb25nIGVub3VnaCB0byBkbyBzby4gKEkgdGVsbCBoaW0gSSd2ZSBoZWFyZCBnb29kIHRoaW5ncyBhYm91dCB0aGUgVHdpbiBDaXRpZXMnIGFiaWxpdHkgdG8gbWFpbnRhaW4gYSBkZWNlbnQgcmFtcC4gUHJlY2lwaXRhdGlvbiBraWxscyBwYXZlbWVudCwgdGhlIHdheSB3YXRlciBjYW4ga2lsbCBhbnl0aGluZy4pIFVuZGVyZ2lyZGluZyBpdCBhbGw6IHdlJ3JlIG5vdCBnaXZpbmcgdXAgb24gaGlzIGhvbWUgYW5kIGZhbWlseSBhbnkgdGltZSBzb29uLCBidXQgd2l0aGluIG91ciBsaXZlcyB3ZSBmdWxseSBleHBlY3QgdG8gZG8gc28sIGFzIG1hdHRlciBvZiBmYWN0IGFzIGdpdmluZyBoaW0gbXkgbWVkaWNhbCBwb3dlciBvZiBhdHRvcm5leS48L3A+XHJcbiAgICA8cD48aT5UaGluZ3MgYXJlIGp1c3QgZ29pbmcgdG8ga2VlcCBoYXBwZW5pbmcgd2hpbGUgeW91J3JlIG5vdCBoZXJlLDwvaT4gbXkgZmF0aGVyIHNhaWQuIFJhaW4gY3JlZXBzIHVuZGVyIHJvYWRzIGFuZCBzaWRld2Fsa3MgYmFjayBob21lLCB3aGVuIHRoZXkncmUgcGF2ZWQsIGFuZCBwdWxscyB0aGVtIGludG8gY3JhdGVycy4gU2VhdHRsZSBoYXJkbHkgZXNjYXBlcyBwb3Rob2xlcyBpdHNlbGYuIEJ1dCB5b3Ugd291bGRuJ3Qga25vdyB0aGF0IGZyb20gdGhlIG1lZGlhLCBpZiB5b3VyIHZhbnRhZ2UgcG9pbnQgaXMgYSB0aGlyZC13b3JsZCBjb3VudHJ5LjwvcD5cclxuICAgIDxwPkkgbWVhbnQsIHllYXIgb24geWVhciBvbiB5ZWFyLCB0byBnbyBiYWNrIHRvIE1leGljby4gTm90IGhvbWU7IG5vdCBvbmNlIEknZCBkaXNjb3ZlcmVkIHRoZSBsdXh1cmllcyBvZiBwdWJsaWMgdHJhbnNwb3J0YXRpb24gdGhhdCBjb3VsZCBmZXJyeSBtZSB3aXRob3V0IGZhdm9ycyB0byBkb2N0b3JzIEkgc2VlIGZvciB0aGUgc2FtZSByZWFzb25zIEkgY2FuJ3QgZHJpdmUgYW5kIGZvciBvdGhlciB0aGluZ3MgYWxpa2UuIEJ1dCBELkYuLCBvciBHdWFkYWxhamFyYS4gTGl0dGxlIGxlc3MgYWxpZW4gdGhhbiBoZXJlLCBidXQtLWlmIEkgY291bGQganVzdCBmaW5pc2ggbXkgZGVncmVlLCBzb21lZGF5LS1tb3JlIGJ1eWluZyBwb3dlci48L3A+XHJcbiAgICA8cD5CdXQgdG8gZ2V0IG91dCBvZiBPaGlvIEkgZm9sbG93ZWQgbXkgcGFydG5lciBob21lLCBhbmQgaGUgaGFzIGZhbWlseSBoZXJlLiBXaGVyZSB0aGVyZSdzIHJ1bm5pbmcgd2F0ZXIgYXMgYSBtYXR0ZXIgb2YgY291cnNlLCBhbmQgeW91IGNhbiBkcmluayBpdCwgaWYgeW91IHdhbnQsIHdoZW4geW91IG5lZWQgc29tZXRoaW5nIHdpdGggd2hpY2ggdG8gc3dhbGxvdyBtZWRpY2F0aW9uIHRoYXQgY2FtZSBpbiB0aGUgbWFpbC48L3A+XHJcbiAgICA8cD5BbmQgbm93IEkgcHV0IGRvd24gcm9vdHMgYXMgdGhlaXIgcmVzZW1ibGFuY2UgdG8gaGlzIG1vZGVsIG9mIHRoZSBjaXR5IGhlIGJyb3VnaHQgbWUgdG8gZXJvZGVzLiBXaW50ZXIgc25vd3M7IHN1bW1lciBidXJucy4gSSBkb24ndCBrbm93IGFueSBkaWZmZXJlbnQsIGFuZCBvbmx5IGJlbGF0ZWRseSB3b25kZXIgaWYgaGUncyB3YW50ZWQgbWUgdG8uIEhpcyBwYXJlbnRzIGhhdmUgYSBsYXduOyB0aGUgR3JlYXRlciBTZWF0dGxlIG9mIGhpcyBjaGlsZGhvb2QgaXMgYXBwcm94aW1hdGVseSBhcyBhbGllbiB0byBtZSwgaW4gYm90aCB3YXlzLCBhbmQgdW5hdmFpbGFibGUgYXMgYSBiYWNrZHJvcC4gV2hhdCBJJ3ZlIGxvc3QgYWxvbmcgdGhlIHNhbWUgbGluZXMgaXMgYW4gdW5rbm93bi4gSSB3YW50IHRvIHNob3cgaGltIE9jdG9iZXIsIHRob3VnaCBJIGRvbid0IGtub3cgaG93IG11Y2ggT2N0b2JlcidzIGxlZnQgdG8gc2hvdy4gSSBkb24ndCBmZWVsIGl0LCB0aG91Z2gsIGFic2VudCB0aGF0IGV4cGVyaWVuY2Ugb2YgYWN0dWFsbHkga25vd2luZyB3aGF0IGhhc24ndCBzdXJ2aXZlZCBteSBjaGlsZGhvb2QgZWl0aGVyLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2VuZTQyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0nc2NlbmUnIGlkPSdmb3J0eTInPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICA8cD5JJ3ZlIGxpdmVkIGxvbmdlciBpbiBTZWF0dGxlIHRoYW4gYW55d2hlcmUgZWxzZSBpbiB0aGUgVW5pdGVkIFN0YXRlcywgYnV0IG5vdCBsb25nIGVub3VnaCB0byBsb3NlIHRoaW5ncyB0byB0aGUgcHJlc2VudC4gSSBkb24ndCBoYXZlIGEgc2Vuc2Ugb2YgcGF0dGVybnMgYWJvdXQgaXQgc2F2ZSBpbiB0aGUgYnJvYWRlc3Qgb2Ygc2Vuc2VzOyB0aGlzIGlzIHdoYXQgSSBrbm93LiBJIGNoZWNrIHRoZSB3ZWF0aGVyLiBQZW9wbGUgYXNrIGlmIGl0IHRvcm1lbnRzIG1lLiBJIGRvbid0IHRlbGwgdGhlbSBJJ20gZnJvbSBhIGRlc2VydCwgYnV0IEkgdGVsbCB0aGVtIEkgbGlrZSBwcmVjaXBpdGF0aW9uLjwvcD5cclxuICAgIDxwPkFsbCBvZiBpdC4gQWx3YXlzLiBFdmVuIHRoZSBzbm93LjwvcD5cclxuICAgIDxwPlwiSSdtIHNvcnJ5LFwiIEkgc2F5LCBmb3IgbGFjayBvZiBhbnl0aGluZyBlbHNlIHRvIGRvLjwvcD5cclxuICAgIDxwPlwiSXQgaXNuJ3QgPGk+eW91cjwvaT4gZmF1bHQsXCIgaGUgc2F5cy4gXCJJIGp1c3Qgd2lzaCBpdCBjb3VsZCd2ZSB3YWl0ZWQuXCIgPC9wPlxyXG4gICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvYWlyc3BhY2UuY3NzJ1xyXG5pbXBvcnQgTGV0U2F5IGZyb20gJy4uL3BhY2lmaWMvZnJhZ21lbnRzL3BvZW0tbGV0c2F5J1xyXG4vL01heSBhZGQgcG9lbSBmb3IgcHVuY2gsIGxhdGVyLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YWRhdGEoKSB7XHJcbiByZXR1cm4gKCBcclxuICA8ZGl2IGlkPSdtZXRhZGF0YSc+XHJcbiAgIDxkaXYgaWQ9J3Byb2plY3QnIGNsYXNzTmFtZT0nY3JlZGl0cyBhYm91dCc+PGgzPkFib3V0IDxpPndoYXQgdGhlIHdlYXRoZXIgZG9lc24ndDwvaT48L2gzPlxyXG4gICA8cD5UaGlzIGVzc2F5IHdhcyBmaXJzdCBjb21wb3NlZCBhcyBhIGZpbmFsIHByb2plY3QgZm9yIENISUQgNDgwLUEgXCJVcHNpZGUgRG93biBUaGlua2luZyBXaXRoIHRoZSBHbG9iYWwgU291dGhcIiwgd2ludGVyIHF1YXJ0ZXIgMjAyMiwgYXQgdGhlIFVuaXZlcnNpdHkgb2YgV2FzaGluZ3Rvbi4gV2l0aCB0aGUgZXhjZXB0aW9uIG9mIHNwZWNpZmljIGVwaWdyYXBocyBhbmQgcXVvdGVzIChzZWUgYmVsb3cpLCBhbGwgY29udGVudCB3YXMgcHJvZHVjZWQgYnkgQ3lydXMgRW9zcGhvcm9zLiBWZXJzaW9uIDEuMCBpcyBsaXZlIGFzIG9mIE1hcmNoIDE4LCAyMDIyOyB0ZWNobmljYWwgaW1wcm92ZW1lbnRzIGFyZSBwbGFubmVkIGJ1dCB0aGUgY29yZSBjb250ZW50IGFuZCBwcmVzZW50YXRpb24gaXMgaW4gcGxhY2UuIElmIGl0IGludGVyZXN0cyB5b3UgdG8gZG8gc28sIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9jeXJ1c2FlL29jZWFuc2lkZSc+dGhlIHNvdXJjZSBjb2RlIGNhbiBiZSB2aWV3ZWQgb24gR2l0SHViPC9hPi48L3A+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J21lJyBjbGFzc05hbWU9J2NyZWRpdHMgYWJvdXQnPjxoMz5BYm91dCB0aGUgYXV0aG9yPC9oMz5cclxuICAgPHA+Q3lydXMgRW9zcGhvcm9zIGlzIGhhdmluZyBhIHRpbWUgb2YgaXQgYXQgYWxsIHBvc3NpYmxlIHRpbWVzLiBNb3JlIHdvcmssIGxpa2UgYW5kIHVubGlrZSA8aT53ZWF0aGVyPC9pPiBhbGlrZSwgY2FuIGJlIGZvdW5kIGFuZCBzdXBwb3J0ZWQgPGEgaHJlZj0naHR0cHM6Ly9wYXRyZW9uLmNvbS9lb3NwaG9yb3MnPm9uIGhpcyBQYXRyZW9uPC9hPiBmb3Igbm93LiBPdGhlciB0ZWNobmljYWwgcHJvamVjdHMgaGF2ZSBhIGhvbWUgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2N5cnVzYWUnPm9uIEdpdEh1YjwvYT4gYWxvbmdzaWRlIHRoaXMgb25lLiBIZSBhbHNvIGhhcyA8YSBocmVmPSdodHRwczovL3Zpc3VhbGl0eS5jYXJyZC5jbyc+dGhpcyBjb29sIHZpcnR1YWwgYnVzaW5lc3MgY2FyZDwvYT4gZm9yIGhvcGVmdWxseSByZW1lbWJlcmluZyB0byB1cGRhdGUgaW1wb3J0YW50IGRhdGEgd2l0aC48L3A+PC9kaXY+XHJcbiAgIDxkaXYgaWQ9J2NyZWRpdHMnIGNsYXNzTmFtZT0nY3JlZGl0cyBzb3VyY2VzJz48aDM+Q3JlZGl0cyBhbmQgdGhpcmQgcGFydHkgc291cmNlczwvaDM+XHJcbiAgIDxoNT5UZXh0PC9oNT5cclxuICAgUG9lbXMgcXVvdGVkOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+XCJUaGlydGVlbiBXYXlzIG9mIExvb2tpbmcgYXQgYSBHbGFjaWVyXCIgYnkgQ3JhaWcgU2FudG9zIFBlcmV6PC9saT5cclxuICAgIDxsaT5cIkxldCBUaGVtIE5vdCBTYXlcIiBieSBKYW5lIEhpcnNoZmllbGQ8L2xpPlxyXG4gICAgPGxpPlwiV0FWRSBBRlRFUiBXQVZFXCIgYnkgTS4gQmFydGxleSBTZWlnZWw8L2xpPlxyXG4gICAgPGxpPlwiTm8gTG9uZ2VyIE9kZVwiIGJ5IFVyYXlvXHUwMEUxbiBOb2VsPC9saT5cclxuICAgPC91bD5cclxuICAgT3RoZXIgc291cmNlczpcclxuICAgPHVsPkt5bGUgV2h5dGUsIFwiQnJhaWRpbmcgS2luc2hpcCBhbmQgVGltZVwiIChsZWN0dXJlIG9uIEluZGlnZW5vdXMgY2xpbWF0ZSBqdXN0aWNlKTwvdWw+XHJcbiAgIDxoNT5JbWFnZXM8L2g1PlxyXG4gICA8cD5DbGltYXRlIHN0cmlwZXMgZ2VuZXJhdGVkIHZpYSA8YSBocmVmPSdodHRwczovL3Nob3d5b3Vyc3RyaXBlcy5pbmZvJz5TaG93IFlvdXIgU3RyaXBlczwvYT4uPC9wPlxyXG4gICA8cD5Ub2RvcyBTYW50b3MgcGhvdG9ncmFwaHMgY29weXJpZ2h0IEhvd2FyZCBFa21hbiwgdXNlZCB3aXRoIHBlcm1pc3Npb24uPC9wPlxyXG4gICA8cD5TZWF0dGxlIHNtb2tlIHN1bW1lciBwaG90b2dyYXBocyBkZXBpY3QgdGhlIENoaWh1bHkgU2N1bHB0dXJlIEdhcmRlbiBhdCBTZWF0dGxlIENlbnRlciBhbmQgYXJlIGJ5IHRoZSBhdXRob3IuPC9wPlxyXG4gICA8cD5NYXAgdmlhIEdvb2dsZSBNYXBzLiBJbWFnZXJ5IGNvcHlyaWdodCBEYXRhIFNJTywgTk9BQSwgVS5TLiBOYXZ5LCBOR0JBLCBHRUJDTywgTGFuZHNhdC9Db3Blcm5pY3VzLCBJQkNBTy4gTWFwIGRhdGEgY29weXJpZ2h0IElORUdJIGFuZCBHb29nbGUuPC9wPlxyXG4gICBJbWFnZSBhc3NldHMgZnJvbSBQTkd0cmVlOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9wbmd0cmVlLmNvbS9mcmVlcG5nL2hlYXZ5LXNub3dfMzcyMzk1NC5odG1sJz5cImhlYXZ5IHNub3dcIiBiYWNrZ3JvdW5kPC9hPjwvbGk+XHJcblxyXG4gICA8bGk+PGk+RnJhbWVzIHVzZWQgZm9yIFwiVGhpcnRlZW4gV2F5cyBvZiBMb29raW5nIGF0IGEgR2xhY2llclwiOjwvaT5cclxuICAgPHVsPlxyXG4gICAgPGxpPkJsdWUgc21va2UgZnJhbWUgIzE8L2xpPlxyXG4gICAgPGxpPkJsdWUgc21va2UgZnJhbWUgIzI8L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vcG5ndHJlZS5jb20vZnJlZXBuZy9ibHVlLXNtb2tlLWFic3RyYWN0LWZyYW1lLWFydC1mcmVlLXBuZy1hbmQtcHNkXzU1MTI4MTQuaHRtbCc+Qmx1ZSBzbW9rZSBmcmFtZSAjMzwvYT48L2xpPlxyXG4gICA8L3VsPjwvbGk+XHJcbiAgIDxsaT48aT5GcmFtZXMgdXNlZCBmb3Igb3RoZXIgcXVvdGVzOjwvaT5cclxuICAgPHVsPlxyXG4gICAgPGxpPlJlZCBhbmQgYmxhY2sgc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPkRhcmsgYmx1ZSBzbW9rZSBmcmFtZTwvbGk+XHJcbiAgICA8bGk+UHVycGxlIHdhdGVyY29sb3Igc21va2UgZnJhbWU8L2xpPlxyXG4gICAgPGxpPkNvb2wgY29sb3JzIHNtb2tlIGZyYW1lPC9saT5cclxuICAgIDxsaT5DaXJjdWxhciBjeWFuIGZyYW1lPC9saT5cclxuICAgPC91bD48L2xpPlxyXG4gICA8L3VsPjwvZGl2PlxyXG4gICA8ZGl2IGlkPSdyZXNwZWN0cycgY2xhc3NOYW1lPSdjcmVkaXRzIGFib3V0Jz48aDM+QWNrbm93bGVkZ21lbnRzPC9oMz5cclxuICAgU3BlY2lmaWMgdGhhbmtzIHRvOlxyXG4gICA8dWw+XHJcbiAgICA8bGk+VGhlIDxhIGhyZWY9J2h0dHBzOi8vZXNzZW50aWFsLXJhbmRvbW5lc3MudHVtYmxyLmNvbS9wb3N0LzY3NzI5MzAxNDUzNDc1MDIwOC9oaS1jYW4teW91LWVsYWJvcmF0ZS1vbi10aGUtc3BhY2UtdGhhdHMtYmVpbmcnPkZhbmRvbSBDb2RlcnMgRGlzY29yZCBzZXJ2ZXI8L2E+LCBmb3IgdGVjaG5pY2FsIGFuZCBtb3JhbCBzdXBwb3J0PC9saT5cclxuICAgIDxsaT5Qcm9mZSBUb255LCBmb3IgbGV0dGluZyBtZSBnZXQgYXdheSB3aXRoIHRoaXMgaW4gdGhlIGZpcnN0IHBsYWNlPC9saT5cclxuICAgPC91bD48L2Rpdj5cclxuICAgPExldFNheSAvPlxyXG4gICA8ZGl2IGlkPSdnb2JhY2snPjxhIGhyZWY9Jy8nPkJhY2sgdG8gdGhlIGVzc2F5PC9hPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICkgfVxyXG5cclxuLyogTGF0ZXI6XHJcbiAgIFxyXG4gICA8cD5BZXJpYWwgY2xpbWF0ZSBwaG90b2dyYXBocyBieSBOQVNBLjwvcD5cclxuXHJcbiAgICAgICA8bGk+QmxhY2sgY2xvdWRzIGJhY2tncm91bmQ8L2xpPlxyXG4gICAgPGxpPkJsYWNrIG1pc3QgYmFja2dyb3VuZCAjMTwvbGk+XHJcbiAgICA8bGk+QmxhY2sgbWlzdCBiYWNrZ3JvdW5kICMyPC9saT5cclxuICAgIDxsaT5GaXJlIGFuZCBzcGFya3MgYmFja2dyb3VuZDwvbGk+XHJcbiovIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldFNheSgpIHtcclxuIHJldHVybiAoXHJcbiAgPGFzaWRlIGlkPSdMZXRTYXknIGNsYXNzTmFtZT0ncG9lbScgYXJpYS1sYWJlbGxlZGJ5PSdjcmVkX2xldHNheSc+XHJcbiAgIDxpbWcgc3JjPScvcmVkX3F1b3RlX2JnLnBuZycgY2xhc3NOYW1lPSdmYWRlLWluJyAvPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ncXVvdGUgdGV4dC1mb2N1cy1pbic+XHJcbiAgICA8cD5MZXQgdGhlbSBzYXksIGFzIHRoZXkgbXVzdCBzYXkgc29tZXRoaW5nOjwvcD5cclxuICAgIDxwPkEga2Vyb3NlbmUgYmVhdXR5Ljxici8+XHJcbiAgICBJdCBidXJuZWQuPC9wPlxyXG4gICAgPHA+TGV0IHRoZW0gc2F5IHdlIHdhcm1lZCBvdXJzZWx2ZXMgYnkgaXQsPGJyLz5cclxuICAgIHJlYWQgYnkgaXRzIGxpZ2h0LCBwcmFpc2VkLDxici8+XHJcbiAgICBhbmQgaXQgYnVybmVkLjwvcD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXQnIGlkPSdjcmVkX2xldHNheSc+XHJcbiAgICBKYW5lIEhpcnNoZmllbGQsPGJyLz48Y2l0ZT5cIkxldCBUaGVtIE5vdCBTYXlcIjwvY2l0ZT5cclxuICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuIClcclxufSIsICJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdmZWV0Jz5cclxuICAgPGRpdj48YSBocmVmPScvbWV0YWRhdGEvY3JlZGl0Jz5BYm91dDwvYT48L2Rpdj5cclxuICA8L2Rpdj5cclxuIClcclxufSIsICJpbXBvcnQgRnJhZ21lbnRzIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvYXN0bGluZS5jc3MnXHJcbmltcG9ydCB7IEdsYWNpZXJBLCBHbGFjaWVyQiwgR2xhY2llckMgfSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLWdsYWNpZXJcIjtcclxuaW1wb3J0IFdoYW0gZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvc3RyaXBlLXdoYW1saW5lXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBEZWZpbmUgZnJvbSBcIi4vcGFjaWZpYy9mcmFnbWVudHMvcXVvdGUtY2xpbWVcIjtcclxuaW1wb3J0IE9kZSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLW9kZVwiO1xyXG5pbXBvcnQgR2FyZGVuIGZyb20gXCIuL3BhY2lmaWMvZnJhZ21lbnRzL3Bob3Rvc19jaGlcIjtcclxuaW1wb3J0IFdpblN1bSBmcm9tIFwiLi9wYWNpZmljL2ZyYWdtZW50cy9wb2VtLXdpbnN1bVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgaWQ9J29jZWFuc2lkZSc+XHJcbiAgIDxtYWluIGlkPSd3YXRlcic+XHJcbiAgICA8ZGl2IGlkPSdiZWFjaCc+XHJcbiAgICAgPEZyYWdtZW50cyAvPlxyXG4gICAgIDxkaXYgaWQ9J3ByZXByZWtpY2snPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvbWFpbj5cclxuICAgPGRpdiBpZD0ncHJla2ljayc+PC9kaXY+XHJcbiAgIDxXaGFtIC8+XHJcbiAgIDxGb290ZXIgLz5cclxuICA8L2Rpdj5cclxuICk7XHJcbn1cclxuIiwgIi8vIGNvbnN0IGEgPSBSYXcxLnZhbHVlKCk7XHJcbmltcG9ydCBTY2VuZTAxIGZyb20gJy4vZnJhZ21lbnRzLzAxJztcclxuaW1wb3J0IFdhc2hpbmd0b24gZnJvbSAnLi9mcmFnbWVudHMvc3RyaXBlLXdhc2hpbmd0b24nO1xyXG5pbXBvcnQgQiBmcm9tICcuL2ZyYWdtZW50cy9CJztcclxuaW1wb3J0IEMgZnJvbSAnLi9mcmFnbWVudHMvQyc7XHJcbmltcG9ydCBEIGZyb20gJy4vZnJhZ21lbnRzL0QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEZyYWdtZW50cygpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgPFNjZW5lMDEgLz5cclxuICAgPEIgLz5cclxuICAgPEMgLz5cclxuICAgPEQgLz5cclxuICA8L2Rpdj5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhZ21lbnRzIiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaGFtKCkge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGlkPSdraWNrZXInPlxyXG4gICA8ZGl2IGlkPSdraW1nJz48aW1nIHNyYz0nL2NsaW1hdGVfc3RyaXBlc19teC5wbmcnIGFsdD0nVGhlIGxhYmVsZWQgXCJ3YXJtaW5nIHN0cmlwZXNcIiBjaGFydCBmb3IgTWV4aWNvLiBUaGUgc3RyaXBlcyBhcmUgdGhlIHNhbWUgb25lcyB0aGF0IGhhdmUgZm9ybWVkIHRoZSBcInRhcGVzdHJ5XCIgYmFja2dyb3VuZCBvZiB0aGUgZXNzYXkgYWxsIGFsb25nLicgY2xhc3NOYW1lPSdzbGlkZS1pbi1ibHVycmVkLWJvdHRvbScgLz48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiApXHJcbn0iLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuIHJldHVybiAoXHJcbiAgPGRpdiBpZD0nZmVldCc+XHJcbiAgIDxkaXY+PGEgaHJlZj0nL21ldGFkYXRhL2NyZWRpdCc+QWJvdXQ8L2E+PC9kaXY+XHJc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Q0U7QUFBQTtBQUtHLGtCQUFrQjtBQUN4QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFBQTtBQUFBO0FBTTNDLGtCQUFrQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUF1QixNQUFLO0FBQUEsS0FDdEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSTtBQUFBLElBQWlDLEtBQUk7QUFB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
