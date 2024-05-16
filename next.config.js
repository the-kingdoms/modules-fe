'use strict';

var jsxRuntime = require('react/jsx-runtime');
var require$$1$2 = require('react');
var require$$3 = require('react-dom');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c; _a.backgroundColor; var label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (jsxRuntime.jsx("button", __assign({ type: "button", className: ["storybook-button", "storybook-button--".concat(size), mode].join(" ") }, props, { children: label })));
};

function Divider(_a) {
    var _b = _a.height, height = _b === void 0 ? 1 : _b;
    return (jsxRuntime.jsx("div", { className: "border-t border-Gray2 bg-Gray1 w-full", style: { height: "".concat(height, "px") } }));
}

function GridBox(_a) {
    var className = _a.className, col = _a.col, children = _a.children;
    return (jsxRuntime.jsx("div", { className: "grid items-center ".concat(col === 1 ? "grid-cols-1" : "grid-cols-2", " ").concat(className), children: children }));
}

function FlexBox(_a) {
    var className = _a.className, direction = _a.direction, children = _a.children;
    return (jsxRuntime.jsx("div", { className: "flex ".concat(direction === "col" ? "flex-col" : "flex-row", " ").concat(className, " ").concat((className === null || className === void 0 ? void 0 : className.includes("items-")) ? "" : "items-center"), children: children }));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding$1(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$1.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance$1)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding$1,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var imageExternal = {};

var _interop_require_default$1 = {};

_interop_require_default$1._ = _interop_require_default$1._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var getImgProps = {};

var warnOnce = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "warnOnce", {
	    enumerable: true,
	    get: function() {
	        return warnOnce;
	    }
	});
	let warnOnce = (_)=>{};
	if (browser$1.env.NODE_ENV !== "production") {
	    const warnings = new Set();
	    warnOnce = (msg)=>{
	        if (!warnings.has(msg)) {
	            console.warn(msg);
	        }
	        warnings.add(msg);
	    };
	}

	
} (warnOnce));

var imageBlurSvg = {};

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getImageBlurSvg", {
	    enumerable: true,
	    get: function() {
	        return getImageBlurSvg;
	    }
	});
	function getImageBlurSvg(param) {
	    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
	    const std = 20;
	    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
	    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
	    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
	    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
	    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
	}

	
} (imageBlurSvg));

var imageConfig = {};

var hasRequiredImageConfig;

function requireImageConfig () {
	if (hasRequiredImageConfig) return imageConfig;
	hasRequiredImageConfig = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    VALID_LOADERS: function() {
		        return VALID_LOADERS;
		    },
		    imageConfigDefault: function() {
		        return imageConfigDefault;
		    }
		});
		const VALID_LOADERS = [
		    "default",
		    "imgix",
		    "cloudinary",
		    "akamai",
		    "custom"
		];
		const imageConfigDefault = {
		    deviceSizes: [
		        640,
		        750,
		        828,
		        1080,
		        1200,
		        1920,
		        2048,
		        3840
		    ],
		    imageSizes: [
		        16,
		        32,
		        48,
		        64,
		        96,
		        128,
		        256,
		        384
		    ],
		    path: "/_next/image",
		    loader: "default",
		    loaderFile: "",
		    domains: [],
		    disableStaticImages: false,
		    minimumCacheTTL: 60,
		    formats: [
		        "image/webp"
		    ],
		    dangerouslyAllowSVG: false,
		    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
		    contentDispositionType: "inline",
		    remotePatterns: [],
		    unoptimized: false
		};

		
	} (imageConfig));
	return imageConfig;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getImgProps", {
	    enumerable: true,
	    get: function() {
	        return getImgProps;
	    }
	});
	const _warnonce = warnOnce;
	const _imageblursvg = imageBlurSvg;
	const _imageconfig = requireImageConfig();
	const VALID_LOADING_VALUES = [
	    "lazy",
	    "eager",
	    undefined
	];
	function isStaticRequire(src) {
	    return src.default !== undefined;
	}
	function isStaticImageData(src) {
	    return src.src !== undefined;
	}
	function isStaticImport(src) {
	    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
	}
	const allImgs = new Map();
	let perfObserver;
	function getInt(x) {
	    if (typeof x === "undefined") {
	        return x;
	    }
	    if (typeof x === "number") {
	        return Number.isFinite(x) ? x : NaN;
	    }
	    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
	        return parseInt(x, 10);
	    }
	    return NaN;
	}
	function getWidths(param, width, sizes) {
	    let { deviceSizes, allSizes } = param;
	    if (sizes) {
	        // Find all the "vw" percent sizes used in the sizes prop
	        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
	        const percentSizes = [];
	        for(let match; match = viewportWidthRe.exec(sizes); match){
	            percentSizes.push(parseInt(match[2]));
	        }
	        if (percentSizes.length) {
	            const smallestRatio = Math.min(...percentSizes) * 0.01;
	            return {
	                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
	                kind: "w"
	            };
	        }
	        return {
	            widths: allSizes,
	            kind: "w"
	        };
	    }
	    if (typeof width !== "number") {
	        return {
	            widths: deviceSizes,
	            kind: "w"
	        };
	    }
	    const widths = [
	        ...new Set(// > This means that most OLED screens that say they are 3x resolution,
	        // > are actually 3x in the green color, but only 1.5x in the red and
	        // > blue colors. Showing a 3x resolution image in the app vs a 2x
	        // > resolution image will be visually the same, though the 3x image
	        // > takes significantly more data. Even true 3x resolution screens are
	        // > wasteful as the human eye cannot see that level of detail without
	        // > something like a magnifying glass.
	        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
	        [
	            width,
	            width * 2 /*, width * 3*/ 
	        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
	    ];
	    return {
	        widths,
	        kind: "x"
	    };
	}
	function generateImgAttrs(param) {
	    let { config, src, unoptimized, width, quality, sizes, loader } = param;
	    if (unoptimized) {
	        return {
	            src,
	            srcSet: undefined,
	            sizes: undefined
	        };
	    }
	    const { widths, kind } = getWidths(config, width, sizes);
	    const last = widths.length - 1;
	    return {
	        sizes: !sizes && kind === "w" ? "100vw" : sizes,
	        srcSet: widths.map((w, i)=>loader({
	                config,
	                src,
	                quality,
	                width: w
	            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
	        // It's intended to keep `src` the last attribute because React updates
	        // attributes in order. If we keep `src` the first one, Safari will
	        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
	        // updated by React. That causes multiple unnecessary requests if `srcSet`
	        // and `sizes` are defined.
	        // This bug cannot be reproduced in Chrome or Firefox.
	        src: loader({
	            config,
	            src,
	            quality,
	            width: widths[last]
	        })
	    };
	}
	function getImgProps(param, _state) {
	    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
	    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
	    let config;
	    let c = imgConf || _imageconfig.imageConfigDefault;
	    if ("allSizes" in c) {
	        config = c;
	    } else {
	        const allSizes = [
	            ...c.deviceSizes,
	            ...c.imageSizes
	        ].sort((a, b)=>a - b);
	        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
	        config = {
	            ...c,
	            allSizes,
	            deviceSizes
	        };
	    }
	    let loader = rest.loader || defaultLoader;
	    // Remove property so it's not spread on <img> element
	    delete rest.loader;
	    delete rest.srcSet;
	    // This special value indicates that the user
	    // didn't define a "loader" prop or "loader" config.
	    const isDefaultLoader = "__next_img_default" in loader;
	    if (isDefaultLoader) {
	        if (config.loader === "custom") {
	            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
	        }
	    } else {
	        // The user defined a "loader" prop or config.
	        // Since the config object is internal only, we
	        // must not pass it to the user-defined "loader".
	        const customImageLoader = loader;
	        loader = (obj)=>{
	            const { config: _, ...opts } = obj;
	            return customImageLoader(opts);
	        };
	    }
	    if (layout) {
	        if (layout === "fill") {
	            fill = true;
	        }
	        const layoutToStyle = {
	            intrinsic: {
	                maxWidth: "100%",
	                height: "auto"
	            },
	            responsive: {
	                width: "100%",
	                height: "auto"
	            }
	        };
	        const layoutToSizes = {
	            responsive: "100vw",
	            fill: "100vw"
	        };
	        const layoutStyle = layoutToStyle[layout];
	        if (layoutStyle) {
	            style = {
	                ...style,
	                ...layoutStyle
	            };
	        }
	        const layoutSizes = layoutToSizes[layout];
	        if (layoutSizes && !sizes) {
	            sizes = layoutSizes;
	        }
	    }
	    let staticSrc = "";
	    let widthInt = getInt(width);
	    let heightInt = getInt(height);
	    let blurWidth;
	    let blurHeight;
	    if (isStaticImport(src)) {
	        const staticImageData = isStaticRequire(src) ? src.default : src;
	        if (!staticImageData.src) {
	            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
	        }
	        if (!staticImageData.height || !staticImageData.width) {
	            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
	        }
	        blurWidth = staticImageData.blurWidth;
	        blurHeight = staticImageData.blurHeight;
	        blurDataURL = blurDataURL || staticImageData.blurDataURL;
	        staticSrc = staticImageData.src;
	        if (!fill) {
	            if (!widthInt && !heightInt) {
	                widthInt = staticImageData.width;
	                heightInt = staticImageData.height;
	            } else if (widthInt && !heightInt) {
	                const ratio = widthInt / staticImageData.width;
	                heightInt = Math.round(staticImageData.height * ratio);
	            } else if (!widthInt && heightInt) {
	                const ratio = heightInt / staticImageData.height;
	                widthInt = Math.round(staticImageData.width * ratio);
	            }
	        }
	    }
	    src = typeof src === "string" ? src : staticSrc;
	    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
	    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
	        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
	        unoptimized = true;
	        isLazy = false;
	    }
	    if (config.unoptimized) {
	        unoptimized = true;
	    }
	    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
	        // Special case to make svg serve as-is to avoid proxying
	        // through the built-in Image Optimization API.
	        unoptimized = true;
	    }
	    if (priority) {
	        fetchPriority = "high";
	    }
	    const qualityInt = getInt(quality);
	    if (browser$1.env.NODE_ENV !== "production") {
	        if (config.output === "export" && isDefaultLoader && !unoptimized) {
	            throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
	        }
	        if (!src) {
	            // React doesn't show the stack trace and there's
	            // no `src` to help identify which image, so we
	            // instead console.error(ref) during mount.
	            unoptimized = true;
	        } else {
	            if (fill) {
	                if (width) {
	                    throw new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.');
	                }
	                if (height) {
	                    throw new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.');
	                }
	                if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
	                    throw new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
	                }
	                if ((style == null ? void 0 : style.width) && style.width !== "100%") {
	                    throw new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
	                }
	                if ((style == null ? void 0 : style.height) && style.height !== "100%") {
	                    throw new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
	                }
	            } else {
	                if (typeof widthInt === "undefined") {
	                    throw new Error('Image with src "' + src + '" is missing required "width" property.');
	                } else if (isNaN(widthInt)) {
	                    throw new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".');
	                }
	                if (typeof heightInt === "undefined") {
	                    throw new Error('Image with src "' + src + '" is missing required "height" property.');
	                } else if (isNaN(heightInt)) {
	                    throw new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".');
	                }
	            }
	        }
	        if (!VALID_LOADING_VALUES.includes(loading)) {
	            throw new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + ".");
	        }
	        if (priority && loading === "lazy") {
	            throw new Error('Image with src "' + src + '" has both "priority" and "loading=\'lazy\'" properties. Only one should be used.');
	        }
	        if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
	            throw new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".');
	        }
	        if (placeholder !== "empty") {
	            if (widthInt && heightInt && widthInt * heightInt < 1600) {
	                (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
	            }
	        }
	        if (placeholder === "blur" && !blurDataURL) {
	            const VALID_BLUR_EXT = [
	                "jpeg",
	                "png",
	                "webp",
	                "avif"
	            ] // should match next-image-loader
	            ;
	            throw new Error('Image with src "' + src + '" has "placeholder=\'blur\'" property but is missing the "blurDataURL" property.\n        Possible solutions:\n          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image\n          - Change the "src" property to a static import with one of the supported file types: ' + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url');
	        }
	        if ("ref" in rest) {
	            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
	        }
	        if (!unoptimized && !isDefaultLoader) {
	            const urlStr = loader({
	                config,
	                src,
	                width: widthInt || 400,
	                quality: qualityInt || 75
	            });
	            let url;
	            try {
	                url = new URL(urlStr);
	            } catch (err) {}
	            if (urlStr === src || url && url.pathname === src && !url.search) {
	                (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width");
	            }
	        }
	        if (onLoadingComplete) {
	            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
	        }
	        for (const [legacyKey, legacyValue] of Object.entries({
	            layout,
	            objectFit,
	            objectPosition,
	            lazyBoundary,
	            lazyRoot
	        })){
	            if (legacyValue) {
	                (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?' + "\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13");
	            }
	        }
	        if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
	            perfObserver = new PerformanceObserver((entryList)=>{
	                for (const entry of entryList.getEntries()){
	                    var _entry_element;
	                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
	                    const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
	                    const lcpImage = allImgs.get(imgSrc);
	                    if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
	                        // https://web.dev/lcp/#measure-lcp-in-javascript
	                        (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.' + "\nRead more: https://nextjs.org/docs/api-reference/next/image#priority");
	                    }
	                }
	            });
	            try {
	                perfObserver.observe({
	                    type: "largest-contentful-paint",
	                    buffered: true
	                });
	            } catch (err) {
	                // Log error but don't crash the app
	                console.error(err);
	            }
	        }
	    }
	    const imgStyle = Object.assign(fill ? {
	        position: "absolute",
	        height: "100%",
	        width: "100%",
	        left: 0,
	        top: 0,
	        right: 0,
	        bottom: 0,
	        objectFit,
	        objectPosition
	    } : {}, showAltText ? {} : {
	        color: "transparent"
	    }, style);
	    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
	        widthInt,
	        heightInt,
	        blurWidth,
	        blurHeight,
	        blurDataURL: blurDataURL || "",
	        objectFit: imgStyle.objectFit
	    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
	     : null;
	    let placeholderStyle = backgroundImage ? {
	        backgroundSize: imgStyle.objectFit || "cover",
	        backgroundPosition: imgStyle.objectPosition || "50% 50%",
	        backgroundRepeat: "no-repeat",
	        backgroundImage
	    } : {};
	    if (browser$1.env.NODE_ENV === "development") {
	        if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
	            // During `next dev`, we don't want to generate blur placeholders with webpack
	            // because it can delay starting the dev server. Instead, `next-image-loader.js`
	            // will inline a special url to lazily generate the blur placeholder at request time.
	            placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
	        }
	    }
	    const imgAttributes = generateImgAttrs({
	        config,
	        src,
	        unoptimized,
	        width: widthInt,
	        quality: qualityInt,
	        sizes,
	        loader
	    });
	    if (browser$1.env.NODE_ENV !== "production") {
	        if (typeof window !== "undefined") {
	            let fullUrl;
	            try {
	                fullUrl = new URL(imgAttributes.src);
	            } catch (e) {
	                fullUrl = new URL(imgAttributes.src, window.location.href);
	            }
	            allImgs.set(fullUrl.href, {
	                src,
	                priority,
	                placeholder
	            });
	        }
	    }
	    const props = {
	        ...rest,
	        loading: isLazy ? "lazy" : loading,
	        fetchPriority,
	        width: widthInt,
	        height: heightInt,
	        decoding: "async",
	        className,
	        style: {
	            ...imgStyle,
	            ...placeholderStyle
	        },
	        sizes: imgAttributes.sizes,
	        srcSet: imgAttributes.srcSet,
	        src: imgAttributes.src
	    };
	    const meta = {
	        unoptimized,
	        priority,
	        placeholder,
	        fill
	    };
	    return {
	        props,
	        meta
	    };
	}

	
} (getImgProps));

var imageComponent = {exports: {}};

var _interop_require_wildcard$1 = {};

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
_interop_require_wildcard$1._ = _interop_require_wildcard$1._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}

var head = {exports: {}};

var sideEffect = {};

var hasRequiredSideEffect;

function requireSideEffect () {
	if (hasRequiredSideEffect) return sideEffect;
	hasRequiredSideEffect = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return SideEffect;
		    }
		});
		const _react = require$$1$2;
		const isServer = typeof window === "undefined";
		const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
		const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
		function SideEffect(props) {
		    const { headManager, reduceComponentsToState } = props;
		    function emitChange() {
		        if (headManager && headManager.mountedInstances) {
		            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
		            headManager.updateHead(reduceComponentsToState(headElements, props));
		        }
		    }
		    if (isServer) {
		        var _headManager_mountedInstances;
		        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
		        emitChange();
		    }
		    useClientOnlyLayoutEffect(()=>{
		        var _headManager_mountedInstances;
		        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
		        return ()=>{
		            var _headManager_mountedInstances;
		            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
		        };
		    });
		    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
		    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
		    // being rendered, we only trigger the method from the last one.
		    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
		    // singleton in the layout effect pass, and actually trigger it in the effect pass.
		    useClientOnlyLayoutEffect(()=>{
		        if (headManager) {
		            headManager._pendingUpdate = emitChange;
		        }
		        return ()=>{
		            if (headManager) {
		                headManager._pendingUpdate = emitChange;
		            }
		        };
		    });
		    useClientOnlyEffect(()=>{
		        if (headManager && headManager._pendingUpdate) {
		            headManager._pendingUpdate();
		            headManager._pendingUpdate = null;
		        }
		        return ()=>{
		            if (headManager && headManager._pendingUpdate) {
		                headManager._pendingUpdate();
		                headManager._pendingUpdate = null;
		            }
		        };
		    });
		    return null;
		}

		
	} (sideEffect));
	return sideEffect;
}

var ampContext_sharedRuntime = {};

var hasRequiredAmpContext_sharedRuntime;

function requireAmpContext_sharedRuntime () {
	if (hasRequiredAmpContext_sharedRuntime) return ampContext_sharedRuntime;
	hasRequiredAmpContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "AmpStateContext", {
		    enumerable: true,
		    get: function() {
		        return AmpStateContext;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const AmpStateContext = _react.default.createContext({});
		if (browser$1.env.NODE_ENV !== "production") {
		    AmpStateContext.displayName = "AmpStateContext";
		}

		
	} (ampContext_sharedRuntime));
	return ampContext_sharedRuntime;
}

var headManagerContext_sharedRuntime = {};

var hasRequiredHeadManagerContext_sharedRuntime;

function requireHeadManagerContext_sharedRuntime () {
	if (hasRequiredHeadManagerContext_sharedRuntime) return headManagerContext_sharedRuntime;
	hasRequiredHeadManagerContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "HeadManagerContext", {
		    enumerable: true,
		    get: function() {
		        return HeadManagerContext;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const HeadManagerContext = _react.default.createContext({});
		if (browser$1.env.NODE_ENV !== "production") {
		    HeadManagerContext.displayName = "HeadManagerContext";
		}

		
	} (headManagerContext_sharedRuntime));
	return headManagerContext_sharedRuntime;
}

var ampMode = {};

var hasRequiredAmpMode;

function requireAmpMode () {
	if (hasRequiredAmpMode) return ampMode;
	hasRequiredAmpMode = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isInAmpMode", {
		    enumerable: true,
		    get: function() {
		        return isInAmpMode;
		    }
		});
		function isInAmpMode(param) {
		    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
		    return ampFirst || hybrid && hasQuery;
		}

		
	} (ampMode));
	return ampMode;
}

var hasRequiredHead;

function requireHead () {
	if (hasRequiredHead) return head.exports;
	hasRequiredHead = 1;
	(function (module, exports) {
		"use client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    defaultHead: function() {
		        return defaultHead;
		    },
		    default: function() {
		        return _default;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _interop_require_wildcard = _interop_require_wildcard$1;
		const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$1$2);
		const _sideeffect = /*#__PURE__*/ _interop_require_default._(requireSideEffect());
		const _ampcontextsharedruntime = requireAmpContext_sharedRuntime();
		const _headmanagercontextsharedruntime = requireHeadManagerContext_sharedRuntime();
		const _ampmode = requireAmpMode();
		const _warnonce = warnOnce;
		function defaultHead(inAmpMode) {
		    if (inAmpMode === void 0) inAmpMode = false;
		    const head = [
		        /*#__PURE__*/ _react.default.createElement("meta", {
		            charSet: "utf-8"
		        })
		    ];
		    if (!inAmpMode) {
		        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
		            name: "viewport",
		            content: "width=device-width"
		        }));
		    }
		    return head;
		}
		function onlyReactElement(list, child) {
		    // React children can be "string" or "number" in this case we ignore them for backwards compat
		    if (typeof child === "string" || typeof child === "number") {
		        return list;
		    }
		    // Adds support for React.Fragment
		    if (child.type === _react.default.Fragment) {
		        return list.concat(// @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
		        _react.default.Children.toArray(child.props.children).reduce(// @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
		        (fragmentList, fragmentChild)=>{
		            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
		                return fragmentList;
		            }
		            return fragmentList.concat(fragmentChild);
		        }, []));
		    }
		    return list.concat(child);
		}
		const METATYPES = [
		    "name",
		    "httpEquiv",
		    "charSet",
		    "itemProp"
		];
		/*
		 returns a function for filtering head child elements
		 which shouldn't be duplicated, like <title/>
		 Also adds support for deduplicated `key` properties
		*/ function unique() {
		    const keys = new Set();
		    const tags = new Set();
		    const metaTypes = new Set();
		    const metaCategories = {};
		    return (h)=>{
		        let isUnique = true;
		        let hasKey = false;
		        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
		            hasKey = true;
		            const key = h.key.slice(h.key.indexOf("$") + 1);
		            if (keys.has(key)) {
		                isUnique = false;
		            } else {
		                keys.add(key);
		            }
		        }
		        // eslint-disable-next-line default-case
		        switch(h.type){
		            case "title":
		            case "base":
		                if (tags.has(h.type)) {
		                    isUnique = false;
		                } else {
		                    tags.add(h.type);
		                }
		                break;
		            case "meta":
		                for(let i = 0, len = METATYPES.length; i < len; i++){
		                    const metatype = METATYPES[i];
		                    if (!h.props.hasOwnProperty(metatype)) continue;
		                    if (metatype === "charSet") {
		                        if (metaTypes.has(metatype)) {
		                            isUnique = false;
		                        } else {
		                            metaTypes.add(metatype);
		                        }
		                    } else {
		                        const category = h.props[metatype];
		                        const categories = metaCategories[metatype] || new Set();
		                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
		                            isUnique = false;
		                        } else {
		                            categories.add(category);
		                            metaCategories[metatype] = categories;
		                        }
		                    }
		                }
		                break;
		        }
		        return isUnique;
		    };
		}
		/**
		 *
		 * @param headChildrenElements List of children of <Head>
		 */ function reduceComponents(headChildrenElements, props) {
		    const { inAmpMode } = props;
		    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
		        const key = c.key || i;
		        if (browser$1.env.NODE_ENV !== "development" && browser$1.env.__NEXT_OPTIMIZE_FONTS && !inAmpMode) {
		            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
		            [
		                "https://fonts.googleapis.com/css",
		                "https://use.typekit.net/"
		            ].some((url)=>c.props["href"].startsWith(url))) {
		                const newProps = {
		                    ...c.props || {}
		                };
		                newProps["data-href"] = newProps["href"];
		                newProps["href"] = undefined;
		                // Add this attribute to make it easy to identify optimized tags
		                newProps["data-optimized-fonts"] = true;
		                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
		            }
		        }
		        if (browser$1.env.NODE_ENV === "development") {
		            // omit JSON-LD structured data snippets from the warning
		            if (c.type === "script" && c.props["type"] !== "application/ld+json") {
		                const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
		                (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
		            } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
		                (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
		            }
		        }
		        return /*#__PURE__*/ _react.default.cloneElement(c, {
		            key
		        });
		    });
		}
		/**
		 * This component injects elements to `<head>` of your page.
		 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
		 */ function Head(param) {
		    let { children } = param;
		    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
		    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
		    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {
		        reduceComponentsToState: reduceComponents,
		        headManager: headManager,
		        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
		    }, children);
		}
		const _default = Head;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (head, head.exports));
	return head.exports;
}

var imageConfigContext_sharedRuntime = {};

var hasRequiredImageConfigContext_sharedRuntime;

function requireImageConfigContext_sharedRuntime () {
	if (hasRequiredImageConfigContext_sharedRuntime) return imageConfigContext_sharedRuntime;
	hasRequiredImageConfigContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "ImageConfigContext", {
		    enumerable: true,
		    get: function() {
		        return ImageConfigContext;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const _imageconfig = requireImageConfig();
		const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
		if (browser$1.env.NODE_ENV !== "production") {
		    ImageConfigContext.displayName = "ImageConfigContext";
		}

		
	} (imageConfigContext_sharedRuntime));
	return imageConfigContext_sharedRuntime;
}

var routerContext_sharedRuntime = {};

var hasRequiredRouterContext_sharedRuntime;

function requireRouterContext_sharedRuntime () {
	if (hasRequiredRouterContext_sharedRuntime) return routerContext_sharedRuntime;
	hasRequiredRouterContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "RouterContext", {
		    enumerable: true,
		    get: function() {
		        return RouterContext;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const RouterContext = _react.default.createContext(null);
		if (browser$1.env.NODE_ENV !== "production") {
		    RouterContext.displayName = "RouterContext";
		}

		
	} (routerContext_sharedRuntime));
	return routerContext_sharedRuntime;
}

var imageLoader = {};

var matchRemotePattern = {};

var __dirname$3 = '/Users\BangAndroid\Documents\Eollluga_modules\modules-fe\node_modules\next\dist\compiled\micromatch';

var micromatch = {exports: {}};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}
// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}
// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

var path$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    basename: basename,
    default: path,
    delimiter: delimiter,
    dirname: dirname,
    extname: extname,
    isAbsolute: isAbsolute,
    join: join,
    normalize: normalize,
    relative: relative,
    resolve: resolve,
    sep: sep
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(path$1);

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray$1 = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer$1;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray$1(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer$1(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;

var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$1.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (browser$1.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (browser$1.throwDeprecation) {
        throw new Error(msg);
      } else if (browser$1.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = browser$1.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError$1(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError$1(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError$1(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

function isError$1(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}

function isBuffer(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
function log() {
  console.log('%s - %s', timestamp(), format.apply(null, arguments));
}

function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util = {
  inherits: inherits$1,
  _extend: _extend,
  log: log,
  isBuffer: isBuffer,
  isPrimitive: isPrimitive,
  isFunction: isFunction,
  isError: isError$1,
  isDate: isDate,
  isObject: isObject,
  isRegExp: isRegExp,
  isUndefined: isUndefined,
  isSymbol: isSymbol,
  isString: isString,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};

var util$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _extend: _extend,
    debuglog: debuglog,
    default: util,
    deprecate: deprecate,
    format: format,
    inherits: inherits$1,
    inspect: inspect,
    isArray: isArray,
    isBoolean: isBoolean,
    isBuffer: isBuffer,
    isDate: isDate,
    isError: isError$1,
    isFunction: isFunction,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined,
    isNumber: isNumber,
    isObject: isObject,
    isPrimitive: isPrimitive,
    isRegExp: isRegExp,
    isString: isString,
    isSymbol: isSymbol,
    isUndefined: isUndefined,
    log: log
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(util$1);

var hasRequiredMicromatch;

function requireMicromatch () {
	if (hasRequiredMicromatch) return micromatch.exports;
	hasRequiredMicromatch = 1;
	(()=>{var e={333:(e,t,r)=>{const n=r(137);const u=r(179);const s=r(13);const o=r(719);const braces=(e,t={})=>{let r=[];if(Array.isArray(e)){for(let n of e){let e=braces.create(n,t);if(Array.isArray(e)){r.push(...e);}else {r.push(e);}}}else {r=[].concat(braces.create(e,t));}if(t&&t.expand===true&&t.nodupes===true){r=[...new Set(r)];}return r};braces.parse=(e,t={})=>o(e,t);braces.stringify=(e,t={})=>{if(typeof e==="string"){return n(braces.parse(e,t),t)}return n(e,t)};braces.compile=(e,t={})=>{if(typeof e==="string"){e=braces.parse(e,t);}return u(e,t)};braces.expand=(e,t={})=>{if(typeof e==="string"){e=braces.parse(e,t);}let r=s(e,t);if(t.noempty===true){r=r.filter(Boolean);}if(t.nodupes===true){r=[...new Set(r)];}return r};braces.create=(e,t={})=>{if(e===""||e.length<3){return [e]}return t.expand!==true?braces.compile(e,t):braces.expand(e,t)};e.exports=braces;},179:(e,t,r)=>{const n=r(783);const u=r(617);const compile=(e,t={})=>{let walk=(e,r={})=>{let s=u.isInvalidBrace(r);let o=e.invalid===true&&t.escapeInvalid===true;let i=s===true||o===true;let a=t.escapeInvalid===true?"\\":"";let l="";if(e.isOpen===true){return a+e.value}if(e.isClose===true){return a+e.value}if(e.type==="open"){return i?a+e.value:"("}if(e.type==="close"){return i?a+e.value:")"}if(e.type==="comma"){return e.prev.type==="comma"?"":i?e.value:"|"}if(e.value){return e.value}if(e.nodes&&e.ranges>0){let r=u.reduce(e.nodes);let s=n(...r,{...t,wrap:false,toRegex:true});if(s.length!==0){return r.length>1&&s.length>1?`(${s})`:s}}if(e.nodes){for(let t of e.nodes){l+=walk(t,e);}}return l};return walk(e)};e.exports=compile;},457:e=>{e.exports={MAX_LENGTH:1024*64,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:"\n",CHAR_NO_BREAK_SPACE:" ",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"\t",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\ufeff"};},13:(e,t,r)=>{const n=r(783);const u=r(137);const s=r(617);const append=(e="",t="",r=false)=>{let n=[];e=[].concat(e);t=[].concat(t);if(!t.length)return e;if(!e.length){return r?s.flatten(t).map((e=>`{${e}}`)):t}for(let u of e){if(Array.isArray(u)){for(let e of u){n.push(append(e,t,r));}}else {for(let e of t){if(r===true&&typeof e==="string")e=`{${e}}`;n.push(Array.isArray(e)?append(u,e,r):u+e);}}}return s.flatten(n)};const expand=(e,t={})=>{let r=t.rangeLimit===void 0?1e3:t.rangeLimit;let walk=(e,o={})=>{e.queue=[];let i=o;let a=o.queue;while(i.type!=="brace"&&i.type!=="root"&&i.parent){i=i.parent;a=i.queue;}if(e.invalid||e.dollar){a.push(append(a.pop(),u(e,t)));return}if(e.type==="brace"&&e.invalid!==true&&e.nodes.length===2){a.push(append(a.pop(),["{}"]));return}if(e.nodes&&e.ranges>0){let o=s.reduce(e.nodes);if(s.exceedsLimit(...o,t.step,r)){throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.")}let i=n(...o,t);if(i.length===0){i=u(e,t);}a.push(append(a.pop(),i));e.nodes=[];return}let l=s.encloseBrace(e);let c=e.queue;let p=e;while(p.type!=="brace"&&p.type!=="root"&&p.parent){p=p.parent;c=p.queue;}for(let t=0;t<e.nodes.length;t++){let r=e.nodes[t];if(r.type==="comma"&&e.type==="brace"){if(t===1)c.push("");c.push("");continue}if(r.type==="close"){a.push(append(a.pop(),c,l));continue}if(r.value&&r.type!=="open"){c.push(append(c.pop(),r.value));continue}if(r.nodes){walk(r,e);}}return c};return s.flatten(walk(e))};e.exports=expand;},719:(e,t,r)=>{const n=r(137);const{MAX_LENGTH:u,CHAR_BACKSLASH:s,CHAR_BACKTICK:o,CHAR_COMMA:i,CHAR_DOT:a,CHAR_LEFT_PARENTHESES:l,CHAR_RIGHT_PARENTHESES:c,CHAR_LEFT_CURLY_BRACE:p,CHAR_RIGHT_CURLY_BRACE:f,CHAR_LEFT_SQUARE_BRACKET:A,CHAR_RIGHT_SQUARE_BRACKET:R,CHAR_DOUBLE_QUOTE:_,CHAR_SINGLE_QUOTE:h,CHAR_NO_BREAK_SPACE:g,CHAR_ZERO_WIDTH_NOBREAK_SPACE:E}=r(457);const parse=(e,t={})=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}let r=t||{};let C=typeof r.maxLength==="number"?Math.min(u,r.maxLength):u;if(e.length>C){throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${C})`)}let y={type:"root",input:e,nodes:[]};let d=[y];let x=y;let b=y;let S=0;let H=e.length;let v=0;let $=0;let m;const advance=()=>e[v++];const push=e=>{if(e.type==="text"&&b.type==="dot"){b.type="text";}if(b&&b.type==="text"&&e.type==="text"){b.value+=e.value;return}x.nodes.push(e);e.parent=x;e.prev=b;b=e;return e};push({type:"bos"});while(v<H){x=d[d.length-1];m=advance();if(m===E||m===g){continue}if(m===s){push({type:"text",value:(t.keepEscaping?m:"")+advance()});continue}if(m===R){push({type:"text",value:"\\"+m});continue}if(m===A){S++;let t;while(v<H&&(t=advance())){m+=t;if(t===A){S++;continue}if(t===s){m+=advance();continue}if(t===R){S--;if(S===0){break}}}push({type:"text",value:m});continue}if(m===l){x=push({type:"paren",nodes:[]});d.push(x);push({type:"text",value:m});continue}if(m===c){if(x.type!=="paren"){push({type:"text",value:m});continue}x=d.pop();push({type:"text",value:m});x=d[d.length-1];continue}if(m===_||m===h||m===o){let e=m;let r;if(t.keepQuotes!==true){m="";}while(v<H&&(r=advance())){if(r===s){m+=r+advance();continue}if(r===e){if(t.keepQuotes===true)m+=r;break}m+=r;}push({type:"text",value:m});continue}if(m===p){$++;let e=b.value&&b.value.slice(-1)==="$"||x.dollar===true;let t={type:"brace",open:true,close:false,dollar:e,depth:$,commas:0,ranges:0,nodes:[]};x=push(t);d.push(x);push({type:"open",value:m});continue}if(m===f){if(x.type!=="brace"){push({type:"text",value:m});continue}let e="close";x=d.pop();x.close=true;push({type:e,value:m});$--;x=d[d.length-1];continue}if(m===i&&$>0){if(x.ranges>0){x.ranges=0;let e=x.nodes.shift();x.nodes=[e,{type:"text",value:n(x)}];}push({type:"comma",value:m});x.commas++;continue}if(m===a&&$>0&&x.commas===0){let e=x.nodes;if($===0||e.length===0){push({type:"text",value:m});continue}if(b.type==="dot"){x.range=[];b.value+=m;b.type="range";if(x.nodes.length!==3&&x.nodes.length!==5){x.invalid=true;x.ranges=0;b.type="text";continue}x.ranges++;x.args=[];continue}if(b.type==="range"){e.pop();let t=e[e.length-1];t.value+=b.value+m;b=t;x.ranges--;continue}push({type:"dot",value:m});continue}push({type:"text",value:m});}do{x=d.pop();if(x.type!=="root"){x.nodes.forEach((e=>{if(!e.nodes){if(e.type==="open")e.isOpen=true;if(e.type==="close")e.isClose=true;if(!e.nodes)e.type="text";e.invalid=true;}}));let e=d[d.length-1];let t=e.nodes.indexOf(x);e.nodes.splice(t,1,...x.nodes);}}while(d.length>0);push({type:"eos"});return y};e.exports=parse;},137:(e,t,r)=>{const n=r(617);e.exports=(e,t={})=>{let stringify=(e,r={})=>{let u=t.escapeInvalid&&n.isInvalidBrace(r);let s=e.invalid===true&&t.escapeInvalid===true;let o="";if(e.value){if((u||s)&&n.isOpenOrClose(e)){return "\\"+e.value}return e.value}if(e.value){return e.value}if(e.nodes){for(let t of e.nodes){o+=stringify(t);}}return o};return stringify(e)};},617:(e,t)=>{t.isInteger=e=>{if(typeof e==="number"){return Number.isInteger(e)}if(typeof e==="string"&&e.trim()!==""){return Number.isInteger(Number(e))}return false};t.find=(e,t)=>e.nodes.find((e=>e.type===t));t.exceedsLimit=(e,r,n=1,u)=>{if(u===false)return false;if(!t.isInteger(e)||!t.isInteger(r))return false;return (Number(r)-Number(e))/Number(n)>=u};t.escapeNode=(e,t=0,r)=>{let n=e.nodes[t];if(!n)return;if(r&&n.type===r||n.type==="open"||n.type==="close"){if(n.escaped!==true){n.value="\\"+n.value;n.escaped=true;}}};t.encloseBrace=e=>{if(e.type!=="brace")return false;if(e.commas>>0+e.ranges>>0===0){e.invalid=true;return true}return false};t.isInvalidBrace=e=>{if(e.type!=="brace")return false;if(e.invalid===true||e.dollar)return true;if(e.commas>>0+e.ranges>>0===0){e.invalid=true;return true}if(e.open!==true||e.close!==true){e.invalid=true;return true}return false};t.isOpenOrClose=e=>{if(e.type==="open"||e.type==="close"){return true}return e.open===true||e.close===true};t.reduce=e=>e.reduce(((e,t)=>{if(t.type==="text")e.push(t.value);if(t.type==="range")t.type="text";return e}),[]);t.flatten=(...e)=>{const t=[];const flat=e=>{for(let r=0;r<e.length;r++){let n=e[r];Array.isArray(n)?flat(n):n!==void 0&&t.push(n);}return t};flat(e);return t};},783:(e,t,r)=>{
	/*!
	 * fill-range <https://github.com/jonschlinkert/fill-range>
	 *
	 * Copyright (c) 2014-present, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	const n=r(837);const u=r(492);const isObject=e=>e!==null&&typeof e==="object"&&!Array.isArray(e);const transform=e=>t=>e===true?Number(t):String(t);const isValidValue=e=>typeof e==="number"||typeof e==="string"&&e!=="";const isNumber=e=>Number.isInteger(+e);const zeros=e=>{let t=`${e}`;let r=-1;if(t[0]==="-")t=t.slice(1);if(t==="0")return false;while(t[++r]==="0");return r>0};const stringify=(e,t,r)=>{if(typeof e==="string"||typeof t==="string"){return true}return r.stringify===true};const pad=(e,t,r)=>{if(t>0){let r=e[0]==="-"?"-":"";if(r)e=e.slice(1);e=r+e.padStart(r?t-1:t,"0");}if(r===false){return String(e)}return e};const toMaxLen=(e,t)=>{let r=e[0]==="-"?"-":"";if(r){e=e.slice(1);t--;}while(e.length<t)e="0"+e;return r?"-"+e:e};const toSequence=(e,t)=>{e.negatives.sort(((e,t)=>e<t?-1:e>t?1:0));e.positives.sort(((e,t)=>e<t?-1:e>t?1:0));let r=t.capture?"":"?:";let n="";let u="";let s;if(e.positives.length){n=e.positives.join("|");}if(e.negatives.length){u=`-(${r}${e.negatives.join("|")})`;}if(n&&u){s=`${n}|${u}`;}else {s=n||u;}if(t.wrap){return `(${r}${s})`}return s};const toRange=(e,t,r,n)=>{if(r){return u(e,t,{wrap:false,...n})}let s=String.fromCharCode(e);if(e===t)return s;let o=String.fromCharCode(t);return `[${s}-${o}]`};const toRegex=(e,t,r)=>{if(Array.isArray(e)){let t=r.wrap===true;let n=r.capture?"":"?:";return t?`(${n}${e.join("|")})`:e.join("|")}return u(e,t,r)};const rangeError=(...e)=>new RangeError("Invalid range arguments: "+n.inspect(...e));const invalidRange=(e,t,r)=>{if(r.strictRanges===true)throw rangeError([e,t]);return []};const invalidStep=(e,t)=>{if(t.strictRanges===true){throw new TypeError(`Expected step "${e}" to be a number`)}return []};const fillNumbers=(e,t,r=1,n={})=>{let u=Number(e);let s=Number(t);if(!Number.isInteger(u)||!Number.isInteger(s)){if(n.strictRanges===true)throw rangeError([e,t]);return []}if(u===0)u=0;if(s===0)s=0;let o=u>s;let i=String(e);let a=String(t);let l=String(r);r=Math.max(Math.abs(r),1);let c=zeros(i)||zeros(a)||zeros(l);let p=c?Math.max(i.length,a.length,l.length):0;let f=c===false&&stringify(e,t,n)===false;let A=n.transform||transform(f);if(n.toRegex&&r===1){return toRange(toMaxLen(e,p),toMaxLen(t,p),true,n)}let R={negatives:[],positives:[]};let push=e=>R[e<0?"negatives":"positives"].push(Math.abs(e));let _=[];let h=0;while(o?u>=s:u<=s){if(n.toRegex===true&&r>1){push(u);}else {_.push(pad(A(u,h),p,f));}u=o?u-r:u+r;h++;}if(n.toRegex===true){return r>1?toSequence(R,n):toRegex(_,null,{wrap:false,...n})}return _};const fillLetters=(e,t,r=1,n={})=>{if(!isNumber(e)&&e.length>1||!isNumber(t)&&t.length>1){return invalidRange(e,t,n)}let u=n.transform||(e=>String.fromCharCode(e));let s=`${e}`.charCodeAt(0);let o=`${t}`.charCodeAt(0);let i=s>o;let a=Math.min(s,o);let l=Math.max(s,o);if(n.toRegex&&r===1){return toRange(a,l,false,n)}let c=[];let p=0;while(i?s>=o:s<=o){c.push(u(s,p));s=i?s-r:s+r;p++;}if(n.toRegex===true){return toRegex(c,null,{wrap:false,options:n})}return c};const fill=(e,t,r,n={})=>{if(t==null&&isValidValue(e)){return [e]}if(!isValidValue(e)||!isValidValue(t)){return invalidRange(e,t,n)}if(typeof r==="function"){return fill(e,t,1,{transform:r})}if(isObject(r)){return fill(e,t,0,r)}let u={...n};if(u.capture===true)u.wrap=true;r=r||u.step||1;if(!isNumber(r)){if(r!=null&&!isObject(r))return invalidStep(r,u);return fill(e,t,1,r)}if(isNumber(e)&&isNumber(t)){return fillNumbers(e,t,r,u)}return fillLetters(e,t,Math.max(Math.abs(r),1),u)};e.exports=fill;},357:e=>{
	/*!
	 * is-number <https://github.com/jonschlinkert/is-number>
	 *
	 * Copyright (c) 2014-present, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	e.exports=function(e){if(typeof e==="number"){return e-e===0}if(typeof e==="string"&&e.trim()!==""){return Number.isFinite?Number.isFinite(+e):isFinite(+e)}return false};},971:(e,t,r)=>{const n=r(837);const u=r(333);const s=r(251);const o=r(513);const isEmptyString=e=>e===""||e==="./";const micromatch=(e,t,r)=>{t=[].concat(t);e=[].concat(e);let n=new Set;let u=new Set;let o=new Set;let i=0;let onResult=e=>{o.add(e.output);if(r&&r.onResult){r.onResult(e);}};for(let o=0;o<t.length;o++){let a=s(String(t[o]),{...r,onResult:onResult},true);let l=a.state.negated||a.state.negatedExtglob;if(l)i++;for(let t of e){let e=a(t,true);let r=l?!e.isMatch:e.isMatch;if(!r)continue;if(l){n.add(e.output);}else {n.delete(e.output);u.add(e.output);}}}let a=i===t.length?[...o]:[...u];let l=a.filter((e=>!n.has(e)));if(r&&l.length===0){if(r.failglob===true){throw new Error(`No matches found for "${t.join(", ")}"`)}if(r.nonull===true||r.nullglob===true){return r.unescape?t.map((e=>e.replace(/\\/g,""))):t}}return l};micromatch.match=micromatch;micromatch.matcher=(e,t)=>s(e,t);micromatch.isMatch=(e,t,r)=>s(t,r)(e);micromatch.any=micromatch.isMatch;micromatch.not=(e,t,r={})=>{t=[].concat(t).map(String);let n=new Set;let u=[];let onResult=e=>{if(r.onResult)r.onResult(e);u.push(e.output);};let s=micromatch(e,t,{...r,onResult:onResult});for(let e of u){if(!s.includes(e)){n.add(e);}}return [...n]};micromatch.contains=(e,t,r)=>{if(typeof e!=="string"){throw new TypeError(`Expected a string: "${n.inspect(e)}"`)}if(Array.isArray(t)){return t.some((t=>micromatch.contains(e,t,r)))}if(typeof t==="string"){if(isEmptyString(e)||isEmptyString(t)){return false}if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t)){return true}}return micromatch.isMatch(e,t,{...r,contains:true})};micromatch.matchKeys=(e,t,r)=>{if(!o.isObject(e)){throw new TypeError("Expected the first argument to be an object")}let n=micromatch(Object.keys(e),t,r);let u={};for(let t of n)u[t]=e[t];return u};micromatch.some=(e,t,r)=>{let n=[].concat(e);for(let e of [].concat(t)){let t=s(String(e),r);if(n.some((e=>t(e)))){return true}}return false};micromatch.every=(e,t,r)=>{let n=[].concat(e);for(let e of [].concat(t)){let t=s(String(e),r);if(!n.every((e=>t(e)))){return false}}return true};micromatch.all=(e,t,r)=>{if(typeof e!=="string"){throw new TypeError(`Expected a string: "${n.inspect(e)}"`)}return [].concat(t).every((t=>s(t,r)(e)))};micromatch.capture=(e,t,r)=>{let n=o.isWindows(r);let u=s.makeRe(String(e),{...r,capture:true});let i=u.exec(n?o.toPosixSlashes(t):t);if(i){return i.slice(1).map((e=>e===void 0?"":e))}};micromatch.makeRe=(...e)=>s.makeRe(...e);micromatch.scan=(...e)=>s.scan(...e);micromatch.parse=(e,t)=>{let r=[];for(let n of [].concat(e||[])){for(let e of u(String(n),t)){r.push(s.parse(e,t));}}return r};micromatch.braces=(e,t)=>{if(typeof e!=="string")throw new TypeError("Expected a string");if(t&&t.nobrace===true||!/\{.*\}/.test(e)){return [e]}return u(e,t)};micromatch.braceExpand=(e,t)=>{if(typeof e!=="string")throw new TypeError("Expected a string");return micromatch.braces(e,{...t,expand:true})};e.exports=micromatch;},251:(e,t,r)=>{e.exports=r(683);},356:(e,t,r)=>{const n=r(17);const u="\\\\/";const s=`[^${u}]`;const o="\\.";const i="\\+";const a="\\?";const l="\\/";const c="(?=.)";const p="[^/]";const f=`(?:${l}|$)`;const A=`(?:^|${l})`;const R=`${o}{1,2}${f}`;const _=`(?!${o})`;const h=`(?!${A}${R})`;const g=`(?!${o}{0,1}${f})`;const E=`(?!${R})`;const C=`[^.${l}]`;const y=`${p}*?`;const d={DOT_LITERAL:o,PLUS_LITERAL:i,QMARK_LITERAL:a,SLASH_LITERAL:l,ONE_CHAR:c,QMARK:p,END_ANCHOR:f,DOTS_SLASH:R,NO_DOT:_,NO_DOTS:h,NO_DOT_SLASH:g,NO_DOTS_SLASH:E,QMARK_NO_DOT:C,STAR:y,START_ANCHOR:A};const x={...d,SLASH_LITERAL:`[${u}]`,QMARK:s,STAR:`${s}*?`,DOTS_SLASH:`${o}{1,2}(?:[${u}]|$)`,NO_DOT:`(?!${o})`,NO_DOTS:`(?!(?:^|[${u}])${o}{1,2}(?:[${u}]|$))`,NO_DOT_SLASH:`(?!${o}{0,1}(?:[${u}]|$))`,NO_DOTS_SLASH:`(?!${o}{1,2}(?:[${u}]|$))`,QMARK_NO_DOT:`[^.${u}]`,START_ANCHOR:`(?:^|[${u}])`,END_ANCHOR:`(?:[${u}]|$)`};const b={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};e.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:b,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:n.sep,extglobChars(e){return {"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(e){return e===true?x:d}};},754:(e,t,r)=>{const n=r(356);const u=r(513);const{MAX_LENGTH:s,POSIX_REGEX_SOURCE:o,REGEX_NON_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_BACKREF:a,REPLACEMENTS:l}=n;const expandRange=(e,t)=>{if(typeof t.expandRange==="function"){return t.expandRange(...e,t)}e.sort();const r=`[${e.join("-")}]`;try{new RegExp(r);}catch(t){return e.map((e=>u.escapeRegex(e))).join("..")}return r};const syntaxError=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`;const parse=(e,t)=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}e=l[e]||e;const r={...t};const c=typeof r.maxLength==="number"?Math.min(s,r.maxLength):s;let p=e.length;if(p>c){throw new SyntaxError(`Input length: ${p}, exceeds maximum allowed length: ${c}`)}const f={type:"bos",value:"",output:r.prepend||""};const A=[f];const R=r.capture?"":"?:";const _=u.isWindows(t);const h=n.globChars(_);const g=n.extglobChars(h);const{DOT_LITERAL:E,PLUS_LITERAL:C,SLASH_LITERAL:y,ONE_CHAR:d,DOTS_SLASH:x,NO_DOT:b,NO_DOT_SLASH:S,NO_DOTS_SLASH:H,QMARK:v,QMARK_NO_DOT:$,STAR:m,START_ANCHOR:T}=h;const globstar=e=>`(${R}(?:(?!${T}${e.dot?x:E}).)*?)`;const L=r.dot?"":b;const O=r.dot?v:$;let w=r.bash===true?globstar(r):m;if(r.capture){w=`(${w})`;}if(typeof r.noext==="boolean"){r.noextglob=r.noext;}const N={input:e,index:-1,start:0,dot:r.dot===true,consumed:"",output:"",prefix:"",backtrack:false,negated:false,brackets:0,braces:0,parens:0,quotes:0,globstar:false,tokens:A};e=u.removePrefix(e,N);p=e.length;const k=[];const I=[];const M=[];let P=f;let B;const eos=()=>N.index===p-1;const G=N.peek=(t=1)=>e[N.index+t];const D=N.advance=()=>e[++N.index];const remaining=()=>e.slice(N.index+1);const consume=(e="",t=0)=>{N.consumed+=e;N.index+=t;};const append=e=>{N.output+=e.output!=null?e.output:e.value;consume(e.value);};const negate=()=>{let e=1;while(G()==="!"&&(G(2)!=="("||G(3)==="?")){D();N.start++;e++;}if(e%2===0){return false}N.negated=true;N.start++;return true};const increment=e=>{N[e]++;M.push(e);};const decrement=e=>{N[e]--;M.pop();};const push=e=>{if(P.type==="globstar"){const t=N.braces>0&&(e.type==="comma"||e.type==="brace");const r=e.extglob===true||k.length&&(e.type==="pipe"||e.type==="paren");if(e.type!=="slash"&&e.type!=="paren"&&!t&&!r){N.output=N.output.slice(0,-P.output.length);P.type="star";P.value="*";P.output=w;N.output+=P.output;}}if(k.length&&e.type!=="paren"&&!g[e.value]){k[k.length-1].inner+=e.value;}if(e.value||e.output)append(e);if(P&&P.type==="text"&&e.type==="text"){P.value+=e.value;P.output=(P.output||"")+e.value;return}e.prev=P;A.push(e);P=e;};const extglobOpen=(e,t)=>{const n={...g[t],conditions:1,inner:""};n.prev=P;n.parens=N.parens;n.output=N.output;const u=(r.capture?"(":"")+n.open;increment("parens");push({type:e,value:t,output:N.output?"":d});push({type:"paren",extglob:true,value:D(),output:u});k.push(n);};const extglobClose=e=>{let t=e.close+(r.capture?")":"");if(e.type==="negate"){let n=w;if(e.inner&&e.inner.length>1&&e.inner.includes("/")){n=globstar(r);}if(n!==w||eos()||/^\)+$/.test(remaining())){t=e.close=`)$))${n}`;}if(e.prev.type==="bos"){N.negatedExtglob=true;}}push({type:"paren",extglob:true,value:B,output:t});decrement("parens");};if(r.fastpaths!==false&&!/(^[*!]|[/()[\]{}"])/.test(e)){let n=false;let s=e.replace(a,((e,t,r,u,s,o)=>{if(u==="\\"){n=true;return e}if(u==="?"){if(t){return t+u+(s?v.repeat(s.length):"")}if(o===0){return O+(s?v.repeat(s.length):"")}return v.repeat(r.length)}if(u==="."){return E.repeat(r.length)}if(u==="*"){if(t){return t+u+(s?w:"")}return w}return t?e:`\\${e}`}));if(n===true){if(r.unescape===true){s=s.replace(/\\/g,"");}else {s=s.replace(/\\+/g,(e=>e.length%2===0?"\\\\":e?"\\":""));}}if(s===e&&r.contains===true){N.output=e;return N}N.output=u.wrapOutput(s,N,t);return N}while(!eos()){B=D();if(B==="\0"){continue}if(B==="\\"){const e=G();if(e==="/"&&r.bash!==true){continue}if(e==="."||e===";"){continue}if(!e){B+="\\";push({type:"text",value:B});continue}const t=/^\\+/.exec(remaining());let n=0;if(t&&t[0].length>2){n=t[0].length;N.index+=n;if(n%2!==0){B+="\\";}}if(r.unescape===true){B=D()||"";}else {B+=D()||"";}if(N.brackets===0){push({type:"text",value:B});continue}}if(N.brackets>0&&(B!=="]"||P.value==="["||P.value==="[^")){if(r.posix!==false&&B===":"){const e=P.value.slice(1);if(e.includes("[")){P.posix=true;if(e.includes(":")){const e=P.value.lastIndexOf("[");const t=P.value.slice(0,e);const r=P.value.slice(e+2);const n=o[r];if(n){P.value=t+n;N.backtrack=true;D();if(!f.output&&A.indexOf(P)===1){f.output=d;}continue}}}}if(B==="["&&G()!==":"||B==="-"&&G()==="]"){B=`\\${B}`;}if(B==="]"&&(P.value==="["||P.value==="[^")){B=`\\${B}`;}if(r.posix===true&&B==="!"&&P.value==="["){B="^";}P.value+=B;append({value:B});continue}if(N.quotes===1&&B!=='"'){B=u.escapeRegex(B);P.value+=B;append({value:B});continue}if(B==='"'){N.quotes=N.quotes===1?0:1;if(r.keepQuotes===true){push({type:"text",value:B});}continue}if(B==="("){increment("parens");push({type:"paren",value:B});continue}if(B===")"){if(N.parens===0&&r.strictBrackets===true){throw new SyntaxError(syntaxError("opening","("))}const e=k[k.length-1];if(e&&N.parens===e.parens+1){extglobClose(k.pop());continue}push({type:"paren",value:B,output:N.parens?")":"\\)"});decrement("parens");continue}if(B==="["){if(r.nobracket===true||!remaining().includes("]")){if(r.nobracket!==true&&r.strictBrackets===true){throw new SyntaxError(syntaxError("closing","]"))}B=`\\${B}`;}else {increment("brackets");}push({type:"bracket",value:B});continue}if(B==="]"){if(r.nobracket===true||P&&P.type==="bracket"&&P.value.length===1){push({type:"text",value:B,output:`\\${B}`});continue}if(N.brackets===0){if(r.strictBrackets===true){throw new SyntaxError(syntaxError("opening","["))}push({type:"text",value:B,output:`\\${B}`});continue}decrement("brackets");const e=P.value.slice(1);if(P.posix!==true&&e[0]==="^"&&!e.includes("/")){B=`/${B}`;}P.value+=B;append({value:B});if(r.literalBrackets===false||u.hasRegexChars(e)){continue}const t=u.escapeRegex(P.value);N.output=N.output.slice(0,-P.value.length);if(r.literalBrackets===true){N.output+=t;P.value=t;continue}P.value=`(${R}${t}|${P.value})`;N.output+=P.value;continue}if(B==="{"&&r.nobrace!==true){increment("braces");const e={type:"brace",value:B,output:"(",outputIndex:N.output.length,tokensIndex:N.tokens.length};I.push(e);push(e);continue}if(B==="}"){const e=I[I.length-1];if(r.nobrace===true||!e){push({type:"text",value:B,output:B});continue}let t=")";if(e.dots===true){const e=A.slice();const n=[];for(let t=e.length-1;t>=0;t--){A.pop();if(e[t].type==="brace"){break}if(e[t].type!=="dots"){n.unshift(e[t].value);}}t=expandRange(n,r);N.backtrack=true;}if(e.comma!==true&&e.dots!==true){const r=N.output.slice(0,e.outputIndex);const n=N.tokens.slice(e.tokensIndex);e.value=e.output="\\{";B=t="\\}";N.output=r;for(const e of n){N.output+=e.output||e.value;}}push({type:"brace",value:B,output:t});decrement("braces");I.pop();continue}if(B==="|"){if(k.length>0){k[k.length-1].conditions++;}push({type:"text",value:B});continue}if(B===","){let e=B;const t=I[I.length-1];if(t&&M[M.length-1]==="braces"){t.comma=true;e="|";}push({type:"comma",value:B,output:e});continue}if(B==="/"){if(P.type==="dot"&&N.index===N.start+1){N.start=N.index+1;N.consumed="";N.output="";A.pop();P=f;continue}push({type:"slash",value:B,output:y});continue}if(B==="."){if(N.braces>0&&P.type==="dot"){if(P.value===".")P.output=E;const e=I[I.length-1];P.type="dots";P.output+=B;P.value+=B;e.dots=true;continue}if(N.braces+N.parens===0&&P.type!=="bos"&&P.type!=="slash"){push({type:"text",value:B,output:E});continue}push({type:"dot",value:B,output:E});continue}if(B==="?"){const e=P&&P.value==="(";if(!e&&r.noextglob!==true&&G()==="("&&G(2)!=="?"){extglobOpen("qmark",B);continue}if(P&&P.type==="paren"){const e=G();let t=B;if(e==="<"&&!u.supportsLookbehinds()){throw new Error("Node.js v10 or higher is required for regex lookbehinds")}if(P.value==="("&&!/[!=<:]/.test(e)||e==="<"&&!/<([!=]|\w+>)/.test(remaining())){t=`\\${B}`;}push({type:"text",value:B,output:t});continue}if(r.dot!==true&&(P.type==="slash"||P.type==="bos")){push({type:"qmark",value:B,output:$});continue}push({type:"qmark",value:B,output:v});continue}if(B==="!"){if(r.noextglob!==true&&G()==="("){if(G(2)!=="?"||!/[!=<:]/.test(G(3))){extglobOpen("negate",B);continue}}if(r.nonegate!==true&&N.index===0){negate();continue}}if(B==="+"){if(r.noextglob!==true&&G()==="("&&G(2)!=="?"){extglobOpen("plus",B);continue}if(P&&P.value==="("||r.regex===false){push({type:"plus",value:B,output:C});continue}if(P&&(P.type==="bracket"||P.type==="paren"||P.type==="brace")||N.parens>0){push({type:"plus",value:B});continue}push({type:"plus",value:C});continue}if(B==="@"){if(r.noextglob!==true&&G()==="("&&G(2)!=="?"){push({type:"at",extglob:true,value:B,output:""});continue}push({type:"text",value:B});continue}if(B!=="*"){if(B==="$"||B==="^"){B=`\\${B}`;}const e=i.exec(remaining());if(e){B+=e[0];N.index+=e[0].length;}push({type:"text",value:B});continue}if(P&&(P.type==="globstar"||P.star===true)){P.type="star";P.star=true;P.value+=B;P.output=w;N.backtrack=true;N.globstar=true;consume(B);continue}let t=remaining();if(r.noextglob!==true&&/^\([^?]/.test(t)){extglobOpen("star",B);continue}if(P.type==="star"){if(r.noglobstar===true){consume(B);continue}const n=P.prev;const u=n.prev;const s=n.type==="slash"||n.type==="bos";const o=u&&(u.type==="star"||u.type==="globstar");if(r.bash===true&&(!s||t[0]&&t[0]!=="/")){push({type:"star",value:B,output:""});continue}const i=N.braces>0&&(n.type==="comma"||n.type==="brace");const a=k.length&&(n.type==="pipe"||n.type==="paren");if(!s&&n.type!=="paren"&&!i&&!a){push({type:"star",value:B,output:""});continue}while(t.slice(0,3)==="/**"){const r=e[N.index+4];if(r&&r!=="/"){break}t=t.slice(3);consume("/**",3);}if(n.type==="bos"&&eos()){P.type="globstar";P.value+=B;P.output=globstar(r);N.output=P.output;N.globstar=true;consume(B);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&!o&&eos()){N.output=N.output.slice(0,-(n.output+P.output).length);n.output=`(?:${n.output}`;P.type="globstar";P.output=globstar(r)+(r.strictSlashes?")":"|$)");P.value+=B;N.globstar=true;N.output+=n.output+P.output;consume(B);continue}if(n.type==="slash"&&n.prev.type!=="bos"&&t[0]==="/"){const e=t[1]!==void 0?"|$":"";N.output=N.output.slice(0,-(n.output+P.output).length);n.output=`(?:${n.output}`;P.type="globstar";P.output=`${globstar(r)}${y}|${y}${e})`;P.value+=B;N.output+=n.output+P.output;N.globstar=true;consume(B+D());push({type:"slash",value:"/",output:""});continue}if(n.type==="bos"&&t[0]==="/"){P.type="globstar";P.value+=B;P.output=`(?:^|${y}|${globstar(r)}${y})`;N.output=P.output;N.globstar=true;consume(B+D());push({type:"slash",value:"/",output:""});continue}N.output=N.output.slice(0,-P.output.length);P.type="globstar";P.output=globstar(r);P.value+=B;N.output+=P.output;N.globstar=true;consume(B);continue}const n={type:"star",value:B,output:w};if(r.bash===true){n.output=".*?";if(P.type==="bos"||P.type==="slash"){n.output=L+n.output;}push(n);continue}if(P&&(P.type==="bracket"||P.type==="paren")&&r.regex===true){n.output=B;push(n);continue}if(N.index===N.start||P.type==="slash"||P.type==="dot"){if(P.type==="dot"){N.output+=S;P.output+=S;}else if(r.dot===true){N.output+=H;P.output+=H;}else {N.output+=L;P.output+=L;}if(G()!=="*"){N.output+=d;P.output+=d;}}push(n);}while(N.brackets>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing","]"));N.output=u.escapeLast(N.output,"[");decrement("brackets");}while(N.parens>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing",")"));N.output=u.escapeLast(N.output,"(");decrement("parens");}while(N.braces>0){if(r.strictBrackets===true)throw new SyntaxError(syntaxError("closing","}"));N.output=u.escapeLast(N.output,"{");decrement("braces");}if(r.strictSlashes!==true&&(P.type==="star"||P.type==="bracket")){push({type:"maybe_slash",value:"",output:`${y}?`});}if(N.backtrack===true){N.output="";for(const e of N.tokens){N.output+=e.output!=null?e.output:e.value;if(e.suffix){N.output+=e.suffix;}}}return N};parse.fastpaths=(e,t)=>{const r={...t};const o=typeof r.maxLength==="number"?Math.min(s,r.maxLength):s;const i=e.length;if(i>o){throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${o}`)}e=l[e]||e;const a=u.isWindows(t);const{DOT_LITERAL:c,SLASH_LITERAL:p,ONE_CHAR:f,DOTS_SLASH:A,NO_DOT:R,NO_DOTS:_,NO_DOTS_SLASH:h,STAR:g,START_ANCHOR:E}=n.globChars(a);const C=r.dot?_:R;const y=r.dot?h:R;const d=r.capture?"":"?:";const x={negated:false,prefix:""};let b=r.bash===true?".*?":g;if(r.capture){b=`(${b})`;}const globstar=e=>{if(e.noglobstar===true)return b;return `(${d}(?:(?!${E}${e.dot?A:c}).)*?)`};const create=e=>{switch(e){case"*":return `${C}${f}${b}`;case".*":return `${c}${f}${b}`;case"*.*":return `${C}${b}${c}${f}${b}`;case"*/*":return `${C}${b}${p}${f}${y}${b}`;case"**":return C+globstar(r);case"**/*":return `(?:${C}${globstar(r)}${p})?${y}${f}${b}`;case"**/*.*":return `(?:${C}${globstar(r)}${p})?${y}${b}${c}${f}${b}`;case"**/.*":return `(?:${C}${globstar(r)}${p})?${c}${f}${b}`;default:{const t=/^(.*?)\.(\w+)$/.exec(e);if(!t)return;const r=create(t[1]);if(!r)return;return r+c+t[2]}}};const S=u.removePrefix(e,x);let H=create(S);if(H&&r.strictSlashes!==true){H+=`${p}?`;}return H};e.exports=parse;},683:(e,t,r)=>{const n=r(17);const u=r(700);const s=r(754);const o=r(513);const i=r(356);const isObject=e=>e&&typeof e==="object"&&!Array.isArray(e);const picomatch=(e,t,r=false)=>{if(Array.isArray(e)){const n=e.map((e=>picomatch(e,t,r)));const arrayMatcher=e=>{for(const t of n){const r=t(e);if(r)return r}return false};return arrayMatcher}const n=isObject(e)&&e.tokens&&e.input;if(e===""||typeof e!=="string"&&!n){throw new TypeError("Expected pattern to be a non-empty string")}const u=t||{};const s=o.isWindows(t);const i=n?picomatch.compileRe(e,t):picomatch.makeRe(e,t,false,true);const a=i.state;delete i.state;let isIgnored=()=>false;if(u.ignore){const e={...t,ignore:null,onMatch:null,onResult:null};isIgnored=picomatch(u.ignore,e,r);}const matcher=(r,n=false)=>{const{isMatch:o,match:l,output:c}=picomatch.test(r,i,t,{glob:e,posix:s});const p={glob:e,state:a,regex:i,posix:s,input:r,output:c,match:l,isMatch:o};if(typeof u.onResult==="function"){u.onResult(p);}if(o===false){p.isMatch=false;return n?p:false}if(isIgnored(r)){if(typeof u.onIgnore==="function"){u.onIgnore(p);}p.isMatch=false;return n?p:false}if(typeof u.onMatch==="function"){u.onMatch(p);}return n?p:true};if(r){matcher.state=a;}return matcher};picomatch.test=(e,t,r,{glob:n,posix:u}={})=>{if(typeof e!=="string"){throw new TypeError("Expected input to be a string")}if(e===""){return {isMatch:false,output:""}}const s=r||{};const i=s.format||(u?o.toPosixSlashes:null);let a=e===n;let l=a&&i?i(e):e;if(a===false){l=i?i(e):e;a=l===n;}if(a===false||s.capture===true){if(s.matchBase===true||s.basename===true){a=picomatch.matchBase(e,t,r,u);}else {a=t.exec(l);}}return {isMatch:Boolean(a),match:a,output:l}};picomatch.matchBase=(e,t,r,u=o.isWindows(r))=>{const s=t instanceof RegExp?t:picomatch.makeRe(t,r);return s.test(n.basename(e))};picomatch.isMatch=(e,t,r)=>picomatch(t,r)(e);picomatch.parse=(e,t)=>{if(Array.isArray(e))return e.map((e=>picomatch.parse(e,t)));return s(e,{...t,fastpaths:false})};picomatch.scan=(e,t)=>u(e,t);picomatch.compileRe=(e,t,r=false,n=false)=>{if(r===true){return e.output}const u=t||{};const s=u.contains?"":"^";const o=u.contains?"":"$";let i=`${s}(?:${e.output})${o}`;if(e&&e.negated===true){i=`^(?!${i}).*$`;}const a=picomatch.toRegex(i,t);if(n===true){a.state=e;}return a};picomatch.makeRe=(e,t,r=false,n=false)=>{if(!e||typeof e!=="string"){throw new TypeError("Expected a non-empty string")}const u=t||{};let o={negated:false,fastpaths:true};let i="";let a;if(e.startsWith("./")){e=e.slice(2);i=o.prefix="./";}if(u.fastpaths!==false&&(e[0]==="."||e[0]==="*")){a=s.fastpaths(e,t);}if(a===undefined){o=s(e,t);o.prefix=i+(o.prefix||"");}else {o.output=a;}return picomatch.compileRe(o,t,r,n)};picomatch.toRegex=(e,t)=>{try{const r=t||{};return new RegExp(e,r.flags||(r.nocase?"i":""))}catch(e){if(t&&t.debug===true)throw e;return /$^/}};picomatch.constants=i;e.exports=picomatch;},700:(e,t,r)=>{const n=r(513);const{CHAR_ASTERISK:u,CHAR_AT:s,CHAR_BACKWARD_SLASH:o,CHAR_COMMA:i,CHAR_DOT:a,CHAR_EXCLAMATION_MARK:l,CHAR_FORWARD_SLASH:c,CHAR_LEFT_CURLY_BRACE:p,CHAR_LEFT_PARENTHESES:f,CHAR_LEFT_SQUARE_BRACKET:A,CHAR_PLUS:R,CHAR_QUESTION_MARK:_,CHAR_RIGHT_CURLY_BRACE:h,CHAR_RIGHT_PARENTHESES:g,CHAR_RIGHT_SQUARE_BRACKET:E}=r(356);const isPathSeparator=e=>e===c||e===o;const depth=e=>{if(e.isPrefix!==true){e.depth=e.isGlobstar?Infinity:1;}};const scan=(e,t)=>{const r=t||{};const C=e.length-1;const y=r.parts===true||r.scanToEnd===true;const d=[];const x=[];const b=[];let S=e;let H=-1;let v=0;let $=0;let m=false;let T=false;let L=false;let O=false;let w=false;let N=false;let k=false;let I=false;let M=false;let P=0;let B;let G;let D={value:"",depth:0,isGlob:false};const eos=()=>H>=C;const peek=()=>S.charCodeAt(H+1);const advance=()=>{B=G;return S.charCodeAt(++H)};while(H<C){G=advance();let e;if(G===o){k=D.backslashes=true;G=advance();if(G===p){N=true;}continue}if(N===true||G===p){P++;while(eos()!==true&&(G=advance())){if(G===o){k=D.backslashes=true;advance();continue}if(G===p){P++;continue}if(N!==true&&G===a&&(G=advance())===a){m=D.isBrace=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(N!==true&&G===i){m=D.isBrace=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===h){P--;if(P===0){N=false;m=D.isBrace=true;M=true;break}}}if(y===true){continue}break}if(G===c){d.push(H);x.push(D);D={value:"",depth:0,isGlob:false};if(M===true)continue;if(B===a&&H===v+1){v+=2;continue}$=H+1;continue}if(r.noext!==true){const e=G===R||G===s||G===u||G===_||G===l;if(e===true&&peek()===f){L=D.isGlob=true;O=D.isExtglob=true;M=true;if(y===true){while(eos()!==true&&(G=advance())){if(G===o){k=D.backslashes=true;G=advance();continue}if(G===g){L=D.isGlob=true;M=true;break}}continue}break}}if(G===u){if(B===u)w=D.isGlobstar=true;L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===_){L=D.isGlob=true;M=true;if(y===true){continue}break}if(G===A){while(eos()!==true&&(e=advance())){if(e===o){k=D.backslashes=true;advance();continue}if(e===E){T=D.isBracket=true;L=D.isGlob=true;M=true;break}}if(y===true){continue}break}if(r.nonegate!==true&&G===l&&H===v){I=D.negated=true;v++;continue}if(r.noparen!==true&&G===f){L=D.isGlob=true;if(y===true){while(eos()!==true&&(G=advance())){if(G===f){k=D.backslashes=true;G=advance();continue}if(G===g){M=true;break}}continue}break}if(L===true){M=true;if(y===true){continue}break}}if(r.noext===true){O=false;L=false;}let U=S;let K="";let F="";if(v>0){K=S.slice(0,v);S=S.slice(v);$-=v;}if(U&&L===true&&$>0){U=S.slice(0,$);F=S.slice($);}else if(L===true){U="";F=S;}else {U=S;}if(U&&U!==""&&U!=="/"&&U!==S){if(isPathSeparator(U.charCodeAt(U.length-1))){U=U.slice(0,-1);}}if(r.unescape===true){if(F)F=n.removeBackslashes(F);if(U&&k===true){U=n.removeBackslashes(U);}}const Q={prefix:K,input:e,start:v,base:U,glob:F,isBrace:m,isBracket:T,isGlob:L,isExtglob:O,isGlobstar:w,negated:I};if(r.tokens===true){Q.maxDepth=0;if(!isPathSeparator(G)){x.push(D);}Q.tokens=x;}if(r.parts===true||r.tokens===true){let t;for(let n=0;n<d.length;n++){const u=t?t+1:v;const s=d[n];const o=e.slice(u,s);if(r.tokens){if(n===0&&v!==0){x[n].isPrefix=true;x[n].value=K;}else {x[n].value=o;}depth(x[n]);Q.maxDepth+=x[n].depth;}if(n!==0||o!==""){b.push(o);}t=s;}if(t&&t+1<e.length){const n=e.slice(t+1);b.push(n);if(r.tokens){x[x.length-1].value=n;depth(x[x.length-1]);Q.maxDepth+=x[x.length-1].depth;}}Q.slashes=d;Q.parts=b;}return Q};e.exports=scan;},513:(e,t,r)=>{const n=r(17);const{REGEX_BACKSLASH:s,REGEX_REMOVE_BACKSLASH:o,REGEX_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_GLOBAL:a}=r(356);t.isObject=e=>e!==null&&typeof e==="object"&&!Array.isArray(e);t.hasRegexChars=e=>i.test(e);t.isRegexChar=e=>e.length===1&&t.hasRegexChars(e);t.escapeRegex=e=>e.replace(a,"\\$1");t.toPosixSlashes=e=>e.replace(s,"/");t.removeBackslashes=e=>e.replace(o,(e=>e==="\\"?"":e));t.supportsLookbehinds=()=>{const e=browser$1.version.slice(1).split(".").map(Number);if(e.length===3&&e[0]>=9||e[0]===8&&e[1]>=10){return true}return false};t.isWindows=e=>{if(e&&typeof e.windows==="boolean"){return e.windows}return n.sep==="\\"};t.escapeLast=(e,r,n)=>{const u=e.lastIndexOf(r,n);if(u===-1)return e;if(e[u-1]==="\\")return t.escapeLast(e,r,u-1);return `${e.slice(0,u)}\\${e.slice(u)}`};t.removePrefix=(e,t={})=>{let r=e;if(r.startsWith("./")){r=r.slice(2);t.prefix="./";}return r};t.wrapOutput=(e,t={},r={})=>{const n=r.contains?"":"^";const u=r.contains?"":"$";let s=`${n}(?:${e})${u}`;if(t.negated===true){s=`(?:^(?!${s}).*$)`;}return s};},492:(e,t,r)=>{
	/*!
	 * to-regex-range <https://github.com/micromatch/to-regex-range>
	 *
	 * Copyright (c) 2015-present, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	const n=r(357);const toRegexRange=(e,t,r)=>{if(n(e)===false){throw new TypeError("toRegexRange: expected the first argument to be a number")}if(t===void 0||e===t){return String(e)}if(n(t)===false){throw new TypeError("toRegexRange: expected the second argument to be a number.")}let u={relaxZeros:true,...r};if(typeof u.strictZeros==="boolean"){u.relaxZeros=u.strictZeros===false;}let s=String(u.relaxZeros);let o=String(u.shorthand);let i=String(u.capture);let a=String(u.wrap);let l=e+":"+t+"="+s+o+i+a;if(toRegexRange.cache.hasOwnProperty(l)){return toRegexRange.cache[l].result}let c=Math.min(e,t);let p=Math.max(e,t);if(Math.abs(c-p)===1){let r=e+"|"+t;if(u.capture){return `(${r})`}if(u.wrap===false){return r}return `(?:${r})`}let f=hasPadding(e)||hasPadding(t);let A={min:e,max:t,a:c,b:p};let R=[];let _=[];if(f){A.isPadded=f;A.maxLen=String(A.max).length;}if(c<0){let e=p<0?Math.abs(p):1;_=splitToPatterns(e,Math.abs(c),A,u);c=A.a=0;}if(p>=0){R=splitToPatterns(c,p,A,u);}A.negatives=_;A.positives=R;A.result=collatePatterns(_,R);if(u.capture===true){A.result=`(${A.result})`;}else if(u.wrap!==false&&R.length+_.length>1){A.result=`(?:${A.result})`;}toRegexRange.cache[l]=A;return A.result};function collatePatterns(e,t,r){let n=filterPatterns(e,t,"-",false)||[];let u=filterPatterns(t,e,"",false)||[];let s=filterPatterns(e,t,"-?",true)||[];let o=n.concat(s).concat(u);return o.join("|")}function splitToRanges(e,t){let r=1;let n=1;let u=countNines(e,r);let s=new Set([t]);while(e<=u&&u<=t){s.add(u);r+=1;u=countNines(e,r);}u=countZeros(t+1,n)-1;while(e<u&&u<=t){s.add(u);n+=1;u=countZeros(t+1,n)-1;}s=[...s];s.sort(compare);return s}function rangeToPattern(e,t,r){if(e===t){return {pattern:e,count:[],digits:0}}let n=zip(e,t);let u=n.length;let s="";let o=0;for(let e=0;e<u;e++){let[t,u]=n[e];if(t===u){s+=t;}else if(t!=="0"||u!=="9"){s+=toCharacterClass(t,u);}else {o++;}}if(o){s+=r.shorthand===true?"\\d":"[0-9]";}return {pattern:s,count:[o],digits:u}}function splitToPatterns(e,t,r,n){let u=splitToRanges(e,t);let s=[];let o=e;let i;for(let e=0;e<u.length;e++){let t=u[e];let a=rangeToPattern(String(o),String(t),n);let l="";if(!r.isPadded&&i&&i.pattern===a.pattern){if(i.count.length>1){i.count.pop();}i.count.push(a.count[0]);i.string=i.pattern+toQuantifier(i.count);o=t+1;continue}if(r.isPadded){l=padZeros(t,r,n);}a.string=l+a.pattern+toQuantifier(a.count);s.push(a);o=t+1;i=a;}return s}function filterPatterns(e,t,r,n,u){let s=[];for(let u of e){let{string:e}=u;if(!n&&!contains(t,"string",e)){s.push(r+e);}if(n&&contains(t,"string",e)){s.push(r+e);}}return s}function zip(e,t){let r=[];for(let n=0;n<e.length;n++)r.push([e[n],t[n]]);return r}function compare(e,t){return e>t?1:t>e?-1:0}function contains(e,t,r){return e.some((e=>e[t]===r))}function countNines(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function countZeros(e,t){return e-e%Math.pow(10,t)}function toQuantifier(e){let[t=0,r=""]=e;if(r||t>1){return `{${t+(r?","+r:"")}}`}return ""}function toCharacterClass(e,t,r){return `[${e}${t-e===1?"":"-"}${t}]`}function hasPadding(e){return /^-?(0+)\d/.test(e)}function padZeros(e,t,r){if(!t.isPadded){return e}let n=Math.abs(t.maxLen-String(e).length);let u=r.relaxZeros!==false;switch(n){case 0:return "";case 1:return u?"0?":"0";case 2:return u?"0{0,2}":"00";default:{return u?`0{0,${n}}`:`0{${n}}`}}}toRegexRange.cache={};toRegexRange.clearCache=()=>toRegexRange.cache={};e.exports=toRegexRange;},17:e=>{e.exports=require$$0$1;},837:e=>{e.exports=require$$1$1;}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var u=t[r]={exports:{}};var s=true;try{e[r](u,u.exports,__nccwpck_require__);s=false;}finally{if(s)delete t[r];}return u.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname$3+"/";var r=__nccwpck_require__(971);micromatch.exports=r;})();
	return micromatch.exports;
}

var hasRequiredMatchRemotePattern;

function requireMatchRemotePattern () {
	if (hasRequiredMatchRemotePattern) return matchRemotePattern;
	hasRequiredMatchRemotePattern = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    matchRemotePattern: function() {
		        return matchRemotePattern;
		    },
		    hasMatch: function() {
		        return hasMatch;
		    }
		});
		const _micromatch = requireMicromatch();
		function matchRemotePattern(pattern, url) {
		    if (pattern.protocol !== undefined) {
		        const actualProto = url.protocol.slice(0, -1);
		        if (pattern.protocol !== actualProto) {
		            return false;
		        }
		    }
		    if (pattern.port !== undefined) {
		        if (pattern.port !== url.port) {
		            return false;
		        }
		    }
		    if (pattern.hostname === undefined) {
		        throw new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern));
		    } else {
		        if (!(0, _micromatch.makeRe)(pattern.hostname).test(url.hostname)) {
		            return false;
		        }
		    }
		    var _pattern_pathname;
		    if (!(0, _micromatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**").test(url.pathname)) {
		        return false;
		    }
		    return true;
		}
		function hasMatch(domains, remotePatterns, url) {
		    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
		}

		
	} (matchRemotePattern));
	return matchRemotePattern;
}

var hasRequiredImageLoader;

function requireImageLoader () {
	if (hasRequiredImageLoader) return imageLoader;
	hasRequiredImageLoader = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return _default;
		    }
		});
		function defaultLoader(param) {
		    let { config, src, width, quality } = param;
		    if (browser$1.env.NODE_ENV !== "production") {
		        const missingValues = [];
		        // these should always be provided but make sure they are
		        if (!src) missingValues.push("src");
		        if (!width) missingValues.push("width");
		        if (missingValues.length > 0) {
		            throw new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
		                src,
		                width,
		                quality
		            }));
		        }
		        if (src.startsWith("//")) {
		            throw new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
		        }
		        if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
		            let parsedSrc;
		            try {
		                parsedSrc = new URL(src);
		            } catch (err) {
		                console.error(err);
		                throw new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
		            }
		            if (browser$1.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
		            browser$1.env.NEXT_RUNTIME !== "edge") {
		                // We use dynamic require because this should only error in development
		                const { hasMatch } = requireMatchRemotePattern();
		                if (!hasMatch(config.domains, config.remotePatterns, parsedSrc)) {
		                    throw new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\n' + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
		                }
		            }
		        }
		    }
		    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + (browser$1.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + browser$1.env.NEXT_DEPLOYMENT_ID : "");
		}
		// We use this to determine if the import is the default loader
		// or a custom loader defined by the user in next.config.js
		defaultLoader.__next_img_default = true;
		const _default = defaultLoader;

		
	} (imageLoader));
	return imageLoader;
}

(function (module, exports) {
	"use client";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "Image", {
	    enumerable: true,
	    get: function() {
	        return Image;
	    }
	});
	const _interop_require_default = _interop_require_default$1;
	const _interop_require_wildcard = _interop_require_wildcard$1;
	const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$1$2);
	const _reactdom = /*#__PURE__*/ _interop_require_default._(require$$3);
	const _head = /*#__PURE__*/ _interop_require_default._(requireHead());
	const _getimgprops = getImgProps;
	const _imageconfig = requireImageConfig();
	const _imageconfigcontextsharedruntime = requireImageConfigContext_sharedRuntime();
	const _warnonce = warnOnce;
	const _routercontextsharedruntime = requireRouterContext_sharedRuntime();
	const _imageloader = /*#__PURE__*/ _interop_require_default._(requireImageLoader());
	// This is replaced by webpack define plugin
	const configEnv = browser$1.env.__NEXT_IMAGE_OPTS;
	if (typeof window === "undefined") {
	    globalThis.__NEXT_IMAGE_IMPORTED = true;
	}
	// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
	// handler instead of the img's onLoad attribute.
	function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
	    const src = img == null ? void 0 : img.src;
	    if (!img || img["data-loaded-src"] === src) {
	        return;
	    }
	    img["data-loaded-src"] = src;
	    const p = "decode" in img ? img.decode() : Promise.resolve();
	    p.catch(()=>{}).then(()=>{
	        if (!img.parentElement || !img.isConnected) {
	            // Exit early in case of race condition:
	            // - onload() is called
	            // - decode() is called but incomplete
	            // - unmount is called
	            // - decode() completes
	            return;
	        }
	        if (placeholder !== "empty") {
	            setBlurComplete(true);
	        }
	        if (onLoadRef == null ? void 0 : onLoadRef.current) {
	            // Since we don't have the SyntheticEvent here,
	            // we must create one with the same shape.
	            // See https://reactjs.org/docs/events.html
	            const event = new Event("load");
	            Object.defineProperty(event, "target", {
	                writable: false,
	                value: img
	            });
	            let prevented = false;
	            let stopped = false;
	            onLoadRef.current({
	                ...event,
	                nativeEvent: event,
	                currentTarget: img,
	                target: img,
	                isDefaultPrevented: ()=>prevented,
	                isPropagationStopped: ()=>stopped,
	                persist: ()=>{},
	                preventDefault: ()=>{
	                    prevented = true;
	                    event.preventDefault();
	                },
	                stopPropagation: ()=>{
	                    stopped = true;
	                    event.stopPropagation();
	                }
	            });
	        }
	        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
	            onLoadingCompleteRef.current(img);
	        }
	        if (browser$1.env.NODE_ENV !== "production") {
	            const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
	            if (img.getAttribute("data-nimg") === "fill") {
	                if (!unoptimized && (!img.getAttribute("sizes") || img.getAttribute("sizes") === "100vw")) {
	                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
	                    if (widthViewportRatio < 0.6) {
	                        (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
	                    }
	                }
	                if (img.parentElement) {
	                    const { position } = window.getComputedStyle(img.parentElement);
	                    const valid = [
	                        "absolute",
	                        "fixed",
	                        "relative"
	                    ];
	                    if (!valid.includes(position)) {
	                        (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
	                    }
	                }
	                if (img.height === 0) {
	                    (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
	                }
	            }
	            const heightModified = img.height.toString() !== img.getAttribute("height");
	            const widthModified = img.width.toString() !== img.getAttribute("width");
	            if (heightModified && !widthModified || !heightModified && widthModified) {
	                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles \'width: "auto"\' or \'height: "auto"\' to maintain the aspect ratio.');
	            }
	        }
	    });
	}
	function getDynamicProps(fetchPriority) {
	    const [majorStr, minorStr] = _react.version.split(".", 2);
	    const major = parseInt(majorStr, 10);
	    const minor = parseInt(minorStr, 10);
	    if (major > 18 || major === 18 && minor >= 3) {
	        // In React 18.3.0 or newer, we must use camelCase
	        // prop to avoid "Warning: Invalid DOM property".
	        // See https://github.com/facebook/react/pull/25927
	        return {
	            fetchPriority
	        };
	    }
	    // In React 18.2.0 or older, we must use lowercase prop
	    // to avoid "Warning: Invalid DOM property".
	    return {
	        fetchpriority: fetchPriority
	    };
	}
	const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
	    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
	    return /*#__PURE__*/ _react.default.createElement("img", {
	        ...rest,
	        ...getDynamicProps(fetchPriority),
	        // It's intended to keep `loading` before `src` because React updates
	        // props in order which causes Safari/Firefox to not lazy load properly.
	        // See https://github.com/facebook/react/issues/25883
	        loading: loading,
	        width: width,
	        height: height,
	        decoding: decoding,
	        "data-nimg": fill ? "fill" : "1",
	        className: className,
	        style: style,
	        // It's intended to keep `src` the last attribute because React updates
	        // attributes in order. If we keep `src` the first one, Safari will
	        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
	        // updated by React. That causes multiple unnecessary requests if `srcSet`
	        // and `sizes` are defined.
	        // This bug cannot be reproduced in Chrome or Firefox.
	        sizes: sizes,
	        srcSet: srcSet,
	        src: src,
	        ref: (0, _react.useCallback)((img)=>{
	            if (forwardedRef) {
	                if (typeof forwardedRef === "function") forwardedRef(img);
	                else if (typeof forwardedRef === "object") {
	                    // @ts-ignore - .current is read only it's usually assigned by react internally
	                    forwardedRef.current = img;
	                }
	            }
	            if (!img) {
	                return;
	            }
	            if (onError) {
	                // If the image has an error before react hydrates, then the error is lost.
	                // The workaround is to wait until the image is mounted which is after hydration,
	                // then we set the src again to trigger the error handler (if there was an error).
	                // eslint-disable-next-line no-self-assign
	                img.src = img.src;
	            }
	            if (browser$1.env.NODE_ENV !== "production") {
	                if (!src) {
	                    console.error('Image is missing required "src" property:', img);
	                }
	                if (img.getAttribute("alt") === null) {
	                    console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
	                }
	            }
	            if (img.complete) {
	                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
	            }
	        }, [
	            src,
	            placeholder,
	            onLoadRef,
	            onLoadingCompleteRef,
	            setBlurComplete,
	            onError,
	            unoptimized,
	            forwardedRef
	        ]),
	        onLoad: (event)=>{
	            const img = event.currentTarget;
	            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
	        },
	        onError: (event)=>{
	            // if the real image fails to load, this will ensure "alt" is visible
	            setShowAltText(true);
	            if (placeholder !== "empty") {
	                // If the real image fails to load, this will still remove the placeholder.
	                setBlurComplete(true);
	            }
	            if (onError) {
	                onError(event);
	            }
	        }
	    });
	});
	function ImagePreload(param) {
	    let { isAppRouter, imgAttributes } = param;
	    const opts = {
	        as: "image",
	        imageSrcSet: imgAttributes.srcSet,
	        imageSizes: imgAttributes.sizes,
	        crossOrigin: imgAttributes.crossOrigin,
	        referrerPolicy: imgAttributes.referrerPolicy,
	        ...getDynamicProps(imgAttributes.fetchPriority)
	    };
	    if (isAppRouter && _reactdom.default.preload) {
	        // See https://github.com/facebook/react/pull/26940
	        _reactdom.default.preload(imgAttributes.src, // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
	        opts);
	        return null;
	    }
	    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
	        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
	        rel: "preload",
	        // Note how we omit the `href` attribute, as it would only be relevant
	        // for browsers that do not support `imagesrcset`, and in those cases
	        // it would cause the incorrect image to be preloaded.
	        //
	        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
	        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
	        ...opts
	    }));
	}
	const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
	    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
	    // We're in the app directory if there is no pages router.
	    const isAppRouter = !pagesRouter;
	    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
	    const config = (0, _react.useMemo)(()=>{
	        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
	        const allSizes = [
	            ...c.deviceSizes,
	            ...c.imageSizes
	        ].sort((a, b)=>a - b);
	        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
	        return {
	            ...c,
	            allSizes,
	            deviceSizes
	        };
	    }, [
	        configContext
	    ]);
	    const { onLoad, onLoadingComplete } = props;
	    const onLoadRef = (0, _react.useRef)(onLoad);
	    (0, _react.useEffect)(()=>{
	        onLoadRef.current = onLoad;
	    }, [
	        onLoad
	    ]);
	    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
	    (0, _react.useEffect)(()=>{
	        onLoadingCompleteRef.current = onLoadingComplete;
	    }, [
	        onLoadingComplete
	    ]);
	    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
	    const [showAltText, setShowAltText] = (0, _react.useState)(false);
	    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
	        defaultLoader: _imageloader.default,
	        imgConf: config,
	        blurComplete,
	        showAltText
	    });
	    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
	        ...imgAttributes,
	        unoptimized: imgMeta.unoptimized,
	        placeholder: imgMeta.placeholder,
	        fill: imgMeta.fill,
	        onLoadRef: onLoadRef,
	        onLoadingCompleteRef: onLoadingCompleteRef,
	        setBlurComplete: setBlurComplete,
	        setShowAltText: setShowAltText,
	        ref: forwardedRef
	    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
	        isAppRouter: isAppRouter,
	        imgAttributes: imgAttributes
	    }) : null);
	});

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (imageComponent, imageComponent.exports));

var imageComponentExports = imageComponent.exports;

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    unstable_getImgProps: function() {
	        return unstable_getImgProps;
	    },
	    default: function() {
	        return _default;
	    }
	});
	const _interop_require_default = _interop_require_default$1;
	const _getimgprops = getImgProps;
	const _warnonce = warnOnce;
	const _imagecomponent = imageComponentExports;
	const _imageloader = /*#__PURE__*/ _interop_require_default._(requireImageLoader());
	const unstable_getImgProps = (imgProps)=>{
	    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
	    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
	        defaultLoader: _imageloader.default,
	        // This is replaced by webpack define plugin
	        imgConf: browser$1.env.__NEXT_IMAGE_OPTS
	    });
	    for (const [key, value] of Object.entries(props)){
	        if (value === undefined) {
	            delete props[key];
	        }
	    }
	    return {
	        props
	    };
	};
	const _default = _imagecomponent.Image;

	
} (imageExternal));

var image = imageExternal;

var Image = /*@__PURE__*/getDefaultExportFromCjs(image);

function Icon(_a) {
    var onClick = _a.onClick, className = _a.className, src = _a.src, alt = _a.alt, sz = _a.sz;
    return (jsxRuntime.jsx(Image, { onPointerDown: onClick, onClick: function () { }, className: className, src: src, alt: alt !== null && alt !== void 0 ? alt : "icon", width: sz !== null && sz !== void 0 ? sz : 16, height: sz !== null && sz !== void 0 ? sz : 16 }));
}

function Layout(_a) {
    var className = _a.className, children = _a.children;
    return (jsxRuntime.jsx("div", { className: className, style: { height: "100dvh" }, children: jsxRuntime.jsx("div", { className: "w-screen h-full m-auto", children: children }) }));
}

function Slider(_a) {
    var className = _a.className, children = _a.children;
    return (jsxRuntime.jsx("div", { className: "min-w-full", children: jsxRuntime.jsx("div", { className: "flex overflow-x-scroll scroll-hide ".concat(className), children: children }) }));
}

var router$2 = {exports: {}};

var router$1 = {};

var removeTrailingSlash = {};

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */

var hasRequiredRemoveTrailingSlash;

function requireRemoveTrailingSlash () {
	if (hasRequiredRemoveTrailingSlash) return removeTrailingSlash;
	hasRequiredRemoveTrailingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removeTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return removeTrailingSlash;
		    }
		});
		function removeTrailingSlash(route) {
		    return route.replace(/\/$/, "") || "/";
		}

		
	} (removeTrailingSlash));
	return removeTrailingSlash;
}

var routeLoader = {exports: {}};

var getAssetPathFromRoute = {};

var hasRequiredGetAssetPathFromRoute;

function requireGetAssetPathFromRoute () {
	if (hasRequiredGetAssetPathFromRoute) return getAssetPathFromRoute;
	hasRequiredGetAssetPathFromRoute = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return getAssetPathFromRoute;
		    }
		});
		function getAssetPathFromRoute(route, ext) {
		    if (ext === void 0) ext = "";
		    const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? "/index" + route : route;
		    return path + ext;
		}

		
	} (getAssetPathFromRoute));
	return getAssetPathFromRoute;
}

var trustedTypes = {exports: {}};

/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */

var hasRequiredTrustedTypes;

function requireTrustedTypes () {
	if (hasRequiredTrustedTypes) return trustedTypes.exports;
	hasRequiredTrustedTypes = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", {
		    enumerable: true,
		    get: function() {
		        return __unsafeCreateTrustedScriptURL;
		    }
		});
		let policy;
		/**
		 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
		 * here or set to null if Trusted Types is not supported in the browser.
		 */ function getPolicy() {
		    if (typeof policy === "undefined" && typeof window !== "undefined") {
		        var _window_trustedTypes;
		        policy = ((_window_trustedTypes = window.trustedTypes) == null ? void 0 : _window_trustedTypes.createPolicy("nextjs", {
		            createHTML: (input)=>input,
		            createScript: (input)=>input,
		            createScriptURL: (input)=>input
		        })) || null;
		    }
		    return policy;
		}
		function __unsafeCreateTrustedScriptURL(url) {
		    var _getPolicy;
		    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (trustedTypes, trustedTypes.exports));
	return trustedTypes.exports;
}

var requestIdleCallback = {exports: {}};

var hasRequiredRequestIdleCallback;

function requireRequestIdleCallback () {
	if (hasRequiredRequestIdleCallback) return requestIdleCallback.exports;
	hasRequiredRequestIdleCallback = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    requestIdleCallback: function() {
		        return requestIdleCallback;
		    },
		    cancelIdleCallback: function() {
		        return cancelIdleCallback;
		    }
		});
		const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
		    let start = Date.now();
		    return self.setTimeout(function() {
		        cb({
		            didTimeout: false,
		            timeRemaining: function() {
		                return Math.max(0, 50 - (Date.now() - start));
		            }
		        });
		    }, 1);
		};
		const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
		    return clearTimeout(id);
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (requestIdleCallback, requestIdleCallback.exports));
	return requestIdleCallback.exports;
}

var deploymentId = {};

var hasRequiredDeploymentId;

function requireDeploymentId () {
	if (hasRequiredDeploymentId) return deploymentId;
	hasRequiredDeploymentId = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getDeploymentIdQueryOrEmptyString", {
		    enumerable: true,
		    get: function() {
		        return getDeploymentIdQueryOrEmptyString;
		    }
		});
		function getDeploymentIdQueryOrEmptyString() {
		    if (browser$1.env.NEXT_DEPLOYMENT_ID) {
		        return `?dpl=${browser$1.env.NEXT_DEPLOYMENT_ID}`;
		    }
		    return "";
		}

		
	} (deploymentId));
	return deploymentId;
}

var hasRequiredRouteLoader;

function requireRouteLoader () {
	if (hasRequiredRouteLoader) return routeLoader.exports;
	hasRequiredRouteLoader = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    markAssetError: function() {
		        return markAssetError;
		    },
		    isAssetError: function() {
		        return isAssetError;
		    },
		    getClientBuildManifest: function() {
		        return getClientBuildManifest;
		    },
		    createRouteLoader: function() {
		        return createRouteLoader;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(requireGetAssetPathFromRoute());
		const _trustedtypes = requireTrustedTypes();
		const _requestidlecallback = requireRequestIdleCallback();
		const _deploymentid = requireDeploymentId();
		// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
		// considers as "Good" time-to-interactive. We must assume something went
		// wrong beyond this point, and then fall-back to a full page transition to
		// show the user something of value.
		const MS_MAX_IDLE_DELAY = 3800;
		function withFuture(key, map, generator) {
		    let entry = map.get(key);
		    if (entry) {
		        if ("future" in entry) {
		            return entry.future;
		        }
		        return Promise.resolve(entry);
		    }
		    let resolver;
		    const prom = new Promise((resolve)=>{
		        resolver = resolve;
		    });
		    map.set(key, entry = {
		        resolve: resolver,
		        future: prom
		    });
		    return generator ? generator()// eslint-disable-next-line no-sequences
		    .then((value)=>(resolver(value), value)).catch((err)=>{
		        map.delete(key);
		        throw err;
		    }) : prom;
		}
		const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
		function markAssetError(err) {
		    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
		}
		function isAssetError(err) {
		    return err && ASSET_LOAD_ERROR in err;
		}
		function hasPrefetch(link) {
		    try {
		        link = document.createElement("link");
		        return(// detect IE11 since it supports prefetch but isn't detected
		        // with relList.support
		        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch"));
		    } catch (e) {
		        return false;
		    }
		}
		const canPrefetch = hasPrefetch();
		const getAssetQueryString = ()=>{
		    return (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
		};
		function prefetchViaDom(href, as, link) {
		    return new Promise((resolve, reject)=>{
		        const selector = '\n      link[rel="prefetch"][href^="' + href + '"],\n      link[rel="preload"][href^="' + href + '"],\n      script[src^="' + href + '"]';
		        if (document.querySelector(selector)) {
		            return resolve();
		        }
		        link = document.createElement("link");
		        // The order of property assignment here is intentional:
		        link.as = as;
		        link.rel = "prefetch";
		        link.crossOrigin = browser$1.env.__NEXT_CROSS_ORIGIN;
		        link.onload = resolve;
		        link.onerror = ()=>reject(markAssetError(new Error("Failed to prefetch: " + href)));
		        // `href` should always be last:
		        link.href = href;
		        document.head.appendChild(link);
		    });
		}
		function appendScript(src, script) {
		    return new Promise((resolve, reject)=>{
		        script = document.createElement("script");
		        // The order of property assignment here is intentional.
		        // 1. Setup success/failure hooks in case the browser synchronously
		        //    executes when `src` is set.
		        script.onload = resolve;
		        script.onerror = ()=>reject(markAssetError(new Error("Failed to load script: " + src)));
		        // 2. Configure the cross-origin attribute before setting `src` in case the
		        //    browser begins to fetch.
		        script.crossOrigin = browser$1.env.__NEXT_CROSS_ORIGIN;
		        // 3. Finally, set the source and inject into the DOM in case the child
		        //    must be appended for fetching to start.
		        script.src = src;
		        document.body.appendChild(script);
		    });
		}
		// We wait for pages to be built in dev before we start the route transition
		// timeout to prevent an un-necessary hard navigation in development.
		let devBuildPromise;
		// Resolve a promise that times out after given amount of milliseconds.
		function resolvePromiseWithTimeout(p, ms, err) {
		    return new Promise((resolve, reject)=>{
		        let cancelled = false;
		        p.then((r)=>{
		            // Resolved, cancel the timeout
		            cancelled = true;
		            resolve(r);
		        }).catch(reject);
		        // We wrap these checks separately for better dead-code elimination in
		        // production bundles.
		        if (browser$1.env.NODE_ENV === "development") {
		            (devBuildPromise || Promise.resolve()).then(()=>{
		                (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
		                        if (!cancelled) {
		                            reject(err);
		                        }
		                    }, ms));
		            });
		        }
		        if (browser$1.env.NODE_ENV !== "development") {
		            (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
		                    if (!cancelled) {
		                        reject(err);
		                    }
		                }, ms));
		        }
		    });
		}
		function getClientBuildManifest() {
		    if (self.__BUILD_MANIFEST) {
		        return Promise.resolve(self.__BUILD_MANIFEST);
		    }
		    const onBuildManifest = new Promise((resolve)=>{
		        // Mandatory because this is not concurrent safe:
		        const cb = self.__BUILD_MANIFEST_CB;
		        self.__BUILD_MANIFEST_CB = ()=>{
		            resolve(self.__BUILD_MANIFEST);
		            cb && cb();
		        };
		    });
		    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
		}
		function getFilesForRoute(assetPrefix, route) {
		    if (browser$1.env.NODE_ENV === "development") {
		        const scriptUrl = assetPrefix + "/_next/static/chunks/pages" + encodeURI((0, _getassetpathfromroute.default)(route, ".js")) + getAssetQueryString();
		        return Promise.resolve({
		            scripts: [
		                (0, _trustedtypes.__unsafeCreateTrustedScriptURL)(scriptUrl)
		            ],
		            // Styles are handled by `style-loader` in development:
		            css: []
		        });
		    }
		    return getClientBuildManifest().then((manifest)=>{
		        if (!(route in manifest)) {
		            throw markAssetError(new Error("Failed to lookup route: " + route));
		        }
		        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
		        return {
		            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedtypes.__unsafeCreateTrustedScriptURL)(v) + getAssetQueryString()),
		            css: allFiles.filter((v)=>v.endsWith(".css")).map((v)=>v + getAssetQueryString())
		        };
		    });
		}
		function createRouteLoader(assetPrefix) {
		    const entrypoints = new Map();
		    const loadedScripts = new Map();
		    const styleSheets = new Map();
		    const routes = new Map();
		    function maybeExecuteScript(src) {
		        // With HMR we might need to "reload" scripts when they are
		        // disposed and readded. Executing scripts twice has no functional
		        // differences
		        if (browser$1.env.NODE_ENV !== "development") {
		            let prom = loadedScripts.get(src.toString());
		            if (prom) {
		                return prom;
		            }
		            // Skip executing script if it's already in the DOM:
		            if (document.querySelector('script[src^="' + src + '"]')) {
		                return Promise.resolve();
		            }
		            loadedScripts.set(src.toString(), prom = appendScript(src));
		            return prom;
		        } else {
		            return appendScript(src);
		        }
		    }
		    function fetchStyleSheet(href) {
		        let prom = styleSheets.get(href);
		        if (prom) {
		            return prom;
		        }
		        styleSheets.set(href, prom = fetch(href).then((res)=>{
		            if (!res.ok) {
		                throw new Error("Failed to load stylesheet: " + href);
		            }
		            return res.text().then((text)=>({
		                    href: href,
		                    content: text
		                }));
		        }).catch((err)=>{
		            throw markAssetError(err);
		        }));
		        return prom;
		    }
		    return {
		        whenEntrypoint (route) {
		            return withFuture(route, entrypoints);
		        },
		        onEntrypoint (route, execute) {
		            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
		                    component: exports1 && exports1.default || exports1,
		                    exports: exports1
		                }), (err)=>({
		                    error: err
		                })) : Promise.resolve(undefined)).then((input)=>{
		                const old = entrypoints.get(route);
		                if (old && "resolve" in old) {
		                    if (input) {
		                        entrypoints.set(route, input);
		                        old.resolve(input);
		                    }
		                } else {
		                    if (input) {
		                        entrypoints.set(route, input);
		                    } else {
		                        entrypoints.delete(route);
		                    }
		                    // when this entrypoint has been resolved before
		                    // the route is outdated and we want to invalidate
		                    // this cache entry
		                    routes.delete(route);
		                }
		            });
		        },
		        loadRoute (route, prefetch) {
		            return withFuture(route, routes, ()=>{
		                let devBuildPromiseResolve;
		                if (browser$1.env.NODE_ENV === "development") {
		                    devBuildPromise = new Promise((resolve)=>{
		                        devBuildPromiseResolve = resolve;
		                    });
		                }
		                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then((param)=>{
		                    let { scripts, css } = param;
		                    return Promise.all([
		                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
		                        Promise.all(css.map(fetchStyleSheet))
		                    ]);
		                }).then((res)=>{
		                    return this.whenEntrypoint(route).then((entrypoint)=>({
		                            entrypoint,
		                            styles: res[1]
		                        }));
		                }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: " + route))).then((param)=>{
		                    let { entrypoint, styles } = param;
		                    const res = Object.assign({
		                        styles: styles
		                    }, entrypoint);
		                    return "error" in entrypoint ? entrypoint : res;
		                }).catch((err)=>{
		                    if (prefetch) {
		                        // we don't want to cache errors during prefetch
		                        throw err;
		                    }
		                    return {
		                        error: err
		                    };
		                }).finally(()=>devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve());
		            });
		        },
		        prefetch (route) {
		            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
		            // License: Apache 2.0
		            let cn;
		            if (cn = navigator.connection) {
		                // Don't prefetch if using 2G or if Save-Data is enabled.
		                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
		            }
		            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
		                (0, _requestidlecallback.requestIdleCallback)(()=>this.loadRoute(route, true).catch(()=>{}));
		            }).catch(// swallow prefetch errors
		            ()=>{});
		        }
		    };
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (routeLoader, routeLoader.exports));
	return routeLoader.exports;
}

var script = {exports: {}};

var headManager = {exports: {}};

var hasRequiredHeadManager;

function requireHeadManager () {
	if (hasRequiredHeadManager) return headManager.exports;
	hasRequiredHeadManager = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DOMAttributeNames: function() {
		        return DOMAttributeNames;
		    },
		    isEqualNode: function() {
		        return isEqualNode;
		    },
		    default: function() {
		        return initHeadManager;
		    }
		});
		const DOMAttributeNames = {
		    acceptCharset: "accept-charset",
		    className: "class",
		    htmlFor: "for",
		    httpEquiv: "http-equiv",
		    noModule: "noModule"
		};
		function reactElementToDOM(param) {
		    let { type, props } = param;
		    const el = document.createElement(type);
		    for(const p in props){
		        if (!props.hasOwnProperty(p)) continue;
		        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
		        // we don't render undefined props to the DOM
		        if (props[p] === undefined) continue;
		        const attr = DOMAttributeNames[p] || p.toLowerCase();
		        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
		            el[attr] = !!props[p];
		        } else {
		            el.setAttribute(attr, props[p]);
		        }
		    }
		    const { children, dangerouslySetInnerHTML } = props;
		    if (dangerouslySetInnerHTML) {
		        el.innerHTML = dangerouslySetInnerHTML.__html || "";
		    } else if (children) {
		        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
		    }
		    return el;
		}
		function isEqualNode(oldTag, newTag) {
		    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
		        const nonce = newTag.getAttribute("nonce");
		        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
		        // be stripped if there is no content security policy response header that includes a nonce.
		        if (nonce && !oldTag.getAttribute("nonce")) {
		            const cloneTag = newTag.cloneNode(true);
		            cloneTag.setAttribute("nonce", "");
		            cloneTag.nonce = nonce;
		            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
		        }
		    }
		    return oldTag.isEqualNode(newTag);
		}
		let updateElements;
		if (browser$1.env.__NEXT_STRICT_NEXT_HEAD) {
		    updateElements = (type, components)=>{
		        const headEl = document.querySelector("head");
		        if (!headEl) return;
		        const headMetaTags = headEl.querySelectorAll('meta[name="next-head"]') || [];
		        const oldTags = [];
		        if (type === "meta") {
		            const metaCharset = headEl.querySelector("meta[charset]");
		            if (metaCharset) {
		                oldTags.push(metaCharset);
		            }
		        }
		        for(let i = 0; i < headMetaTags.length; i++){
		            var _headTag_tagName;
		            const metaTag = headMetaTags[i];
		            const headTag = metaTag.nextSibling;
		            if ((headTag == null ? void 0 : (_headTag_tagName = headTag.tagName) == null ? void 0 : _headTag_tagName.toLowerCase()) === type) {
		                oldTags.push(headTag);
		            }
		        }
		        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
		            for(let k = 0, len = oldTags.length; k < len; k++){
		                const oldTag = oldTags[k];
		                if (isEqualNode(oldTag, newTag)) {
		                    oldTags.splice(k, 1);
		                    return false;
		                }
		            }
		            return true;
		        });
		        oldTags.forEach((t)=>{
		            var _t_parentNode;
		            const metaTag = t.previousSibling;
		            if (metaTag && metaTag.getAttribute("name") === "next-head") {
		                var _t_parentNode1;
		                (_t_parentNode1 = t.parentNode) == null ? void 0 : _t_parentNode1.removeChild(metaTag);
		            }
		            (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
		        });
		        newTags.forEach((t)=>{
		            var _t_tagName;
		            const meta = document.createElement("meta");
		            meta.name = "next-head";
		            meta.content = "1";
		            // meta[charset] must be first element so special case
		            if (!(((_t_tagName = t.tagName) == null ? void 0 : _t_tagName.toLowerCase()) === "meta" && t.getAttribute("charset"))) {
		                headEl.appendChild(meta);
		            }
		            headEl.appendChild(t);
		        });
		    };
		} else {
		    updateElements = (type, components)=>{
		        const headEl = document.getElementsByTagName("head")[0];
		        const headCountEl = headEl.querySelector("meta[name=next-head-count]");
		        if (browser$1.env.NODE_ENV !== "production") {
		            if (!headCountEl) {
		                console.error("Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing");
		                return;
		            }
		        }
		        const headCount = Number(headCountEl.content);
		        const oldTags = [];
		        for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
		            var _j_tagName;
		            if ((j == null ? void 0 : (_j_tagName = j.tagName) == null ? void 0 : _j_tagName.toLowerCase()) === type) {
		                oldTags.push(j);
		            }
		        }
		        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
		            for(let k = 0, len = oldTags.length; k < len; k++){
		                const oldTag = oldTags[k];
		                if (isEqualNode(oldTag, newTag)) {
		                    oldTags.splice(k, 1);
		                    return false;
		                }
		            }
		            return true;
		        });
		        oldTags.forEach((t)=>{
		            var _t_parentNode;
		            return (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
		        });
		        newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
		        headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
		    };
		}
		function initHeadManager() {
		    return {
		        mountedInstances: new Set(),
		        updateHead: (head)=>{
		            const tags = {};
		            head.forEach((h)=>{
		                if (// If the font tag is loaded only on client navigation
		                // it won't be inlined. In this case revert to the original behavior
		                h.type === "link" && h.props["data-optimized-fonts"]) {
		                    if (document.querySelector('style[data-href="' + h.props["data-href"] + '"]')) {
		                        return;
		                    } else {
		                        h.props.href = h.props["data-href"];
		                        h.props["data-href"] = undefined;
		                    }
		                }
		                const components = tags[h.type] || [];
		                components.push(h);
		                tags[h.type] = components;
		            });
		            const titleComponent = tags.title ? tags.title[0] : null;
		            let title = "";
		            if (titleComponent) {
		                const { children } = titleComponent.props;
		                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
		            }
		            if (title !== document.title) document.title = title;
		            [
		                "meta",
		                "base",
		                "link",
		                "style",
		                "script"
		            ].forEach((type)=>{
		                updateElements(type, tags[type] || []);
		            });
		        }
		    };
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (headManager, headManager.exports));
	return headManager.exports;
}

var hasRequiredScript;

function requireScript () {
	if (hasRequiredScript) return script.exports;
	hasRequiredScript = 1;
	(function (module, exports) {
		"use client";
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    handleClientScriptLoad: function() {
		        return handleClientScriptLoad;
		    },
		    initScriptLoader: function() {
		        return initScriptLoader;
		    },
		    default: function() {
		        return _default;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _interop_require_wildcard = _interop_require_wildcard$1;
		const _reactdom = /*#__PURE__*/ _interop_require_default._(require$$3);
		const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$1$2);
		const _headmanagercontextsharedruntime = requireHeadManagerContext_sharedRuntime();
		const _headmanager = requireHeadManager();
		const _requestidlecallback = requireRequestIdleCallback();
		const ScriptCache = new Map();
		const LoadCache = new Set();
		const ignoreProps = [
		    "onLoad",
		    "onReady",
		    "dangerouslySetInnerHTML",
		    "children",
		    "onError",
		    "strategy",
		    "stylesheets"
		];
		const insertStylesheets = (stylesheets)=>{
		    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
		    //
		    // Using ReactDOM.preinit to feature detect appDir and inject styles
		    // Stylesheets might have already been loaded if initialized with Script component
		    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
		    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
		    if (_reactdom.default.preinit) {
		        stylesheets.forEach((stylesheet)=>{
		            _reactdom.default.preinit(stylesheet, {
		                as: "style"
		            });
		        });
		        return;
		    }
		    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
		    //
		    // We use this function to load styles when appdir is not detected
		    // TODO: Use React float APIs to load styles once available for pages dir
		    if (typeof window !== "undefined") {
		        let head = document.head;
		        stylesheets.forEach((stylesheet)=>{
		            let link = document.createElement("link");
		            link.type = "text/css";
		            link.rel = "stylesheet";
		            link.href = stylesheet;
		            head.appendChild(link);
		        });
		    }
		};
		const loadScript = (props)=>{
		    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = "", strategy = "afterInteractive", onError, stylesheets } = props;
		    const cacheKey = id || src;
		    // Script has already loaded
		    if (cacheKey && LoadCache.has(cacheKey)) {
		        return;
		    }
		    // Contents of this script are already loading/loaded
		    if (ScriptCache.has(src)) {
		        LoadCache.add(cacheKey);
		        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
		        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
		        ScriptCache.get(src).then(onLoad, onError);
		        return;
		    }
		    /** Execute after the script first loaded */ const afterLoad = ()=>{
		        // Run onReady for the first time after load event
		        if (onReady) {
		            onReady();
		        }
		        // add cacheKey to LoadCache when load successfully
		        LoadCache.add(cacheKey);
		    };
		    const el = document.createElement("script");
		    const loadPromise = new Promise((resolve, reject)=>{
		        el.addEventListener("load", function(e) {
		            resolve();
		            if (onLoad) {
		                onLoad.call(this, e);
		            }
		            afterLoad();
		        });
		        el.addEventListener("error", function(e) {
		            reject(e);
		        });
		    }).catch(function(e) {
		        if (onError) {
		            onError(e);
		        }
		    });
		    if (dangerouslySetInnerHTML) {
		        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
		        el.innerHTML = dangerouslySetInnerHTML.__html || "";
		        afterLoad();
		    } else if (children) {
		        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
		        afterLoad();
		    } else if (src) {
		        el.src = src;
		        // do not add cacheKey into LoadCache for remote script here
		        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
		        ScriptCache.set(src, loadPromise);
		    }
		    for (const [k, value] of Object.entries(props)){
		        if (value === undefined || ignoreProps.includes(k)) {
		            continue;
		        }
		        const attr = _headmanager.DOMAttributeNames[k] || k.toLowerCase();
		        el.setAttribute(attr, value);
		    }
		    if (strategy === "worker") {
		        el.setAttribute("type", "text/partytown");
		    }
		    el.setAttribute("data-nscript", strategy);
		    // Load styles associated with this script
		    if (stylesheets) {
		        insertStylesheets(stylesheets);
		    }
		    document.body.appendChild(el);
		};
		function handleClientScriptLoad(props) {
		    const { strategy = "afterInteractive" } = props;
		    if (strategy === "lazyOnload") {
		        window.addEventListener("load", ()=>{
		            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
		        });
		    } else {
		        loadScript(props);
		    }
		}
		function loadLazyScript(props) {
		    if (document.readyState === "complete") {
		        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
		    } else {
		        window.addEventListener("load", ()=>{
		            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
		        });
		    }
		}
		function addBeforeInteractiveToCache() {
		    const scripts = [
		        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
		        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
		    ];
		    scripts.forEach((script)=>{
		        const cacheKey = script.id || script.getAttribute("src");
		        LoadCache.add(cacheKey);
		    });
		}
		function initScriptLoader(scriptLoaderItems) {
		    scriptLoaderItems.forEach(handleClientScriptLoad);
		    addBeforeInteractiveToCache();
		}
		function Script(props) {
		    const { id, src = "", onLoad = ()=>{}, onReady = null, strategy = "afterInteractive", onError, stylesheets, ...restProps } = props;
		    // Context is available only during SSR
		    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
		    /**
		   * - First mount:
		   *   1. The useEffect for onReady executes
		   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
		   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
		   *   3. The useEffect for loadScript executes
		   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
		   *      Once the script is loaded, the onLoad and onReady will be called by then
		   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
		   *   5. The useEffect for onReady executes again
		   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
		   *   7. The useEffect for loadScript executes again
		   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
		   *
		   * - Second mount:
		   *   1. The useEffect for onReady executes
		   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
		   *      onReady is called, set hasOnReadyEffectCalled.current to true
		   *   3. The useEffect for loadScript executes
		   *   4. The script is already loaded, loadScript bails out
		   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
		   *   5. The useEffect for onReady executes again
		   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
		   *   7. The useEffect for loadScript executes again
		   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
		   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
		    (0, _react.useEffect)(()=>{
		        const cacheKey = id || src;
		        if (!hasOnReadyEffectCalled.current) {
		            // Run onReady if script has loaded before but component is re-mounted
		            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
		                onReady();
		            }
		            hasOnReadyEffectCalled.current = true;
		        }
		    }, [
		        onReady,
		        id,
		        src
		    ]);
		    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
		    (0, _react.useEffect)(()=>{
		        if (!hasLoadScriptEffectCalled.current) {
		            if (strategy === "afterInteractive") {
		                loadScript(props);
		            } else if (strategy === "lazyOnload") {
		                loadLazyScript(props);
		            }
		            hasLoadScriptEffectCalled.current = true;
		        }
		    }, [
		        props,
		        strategy
		    ]);
		    if (strategy === "beforeInteractive" || strategy === "worker") {
		        if (updateScripts) {
		            scripts[strategy] = (scripts[strategy] || []).concat([
		                {
		                    id,
		                    src,
		                    onLoad,
		                    onReady,
		                    onError,
		                    ...restProps
		                }
		            ]);
		            updateScripts(scripts);
		        } else if (getIsSsr && getIsSsr()) {
		            // Script has already loaded during SSR
		            LoadCache.add(id || src);
		        } else if (getIsSsr && !getIsSsr()) {
		            loadScript(props);
		        }
		    }
		    // For the app directory, we need React Float to preload these scripts.
		    if (appDir) {
		        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
		        // For other strategies injecting here ensures correct stylesheet order
		        // ReactDOM.preinit handles loading the styles in the correct order,
		        // also ensures the stylesheet is loaded only once and in a consistent manner
		        //
		        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
		        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
		        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
		        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
		        if (stylesheets) {
		            stylesheets.forEach((styleSrc)=>{
		                _reactdom.default.preinit(styleSrc, {
		                    as: "style"
		                });
		            });
		        }
		        // Before interactive scripts need to be loaded by Next.js' runtime instead
		        // of native <script> tags, because they no longer have `defer`.
		        if (strategy === "beforeInteractive") {
		            if (!src) {
		                // For inlined scripts, we put the content in `children`.
		                if (restProps.dangerouslySetInnerHTML) {
		                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
		                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
		                    delete restProps.dangerouslySetInnerHTML;
		                }
		                return /*#__PURE__*/ _react.default.createElement("script", {
		                    nonce: nonce,
		                    dangerouslySetInnerHTML: {
		                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
		                            0,
		                            {
		                                ...restProps
		                            }
		                        ]) + ")"
		                    }
		                });
		            } else {
		                // @ts-ignore
		                _reactdom.default.preload(src, restProps.integrity ? {
		                    as: "script",
		                    integrity: restProps.integrity
		                } : {
		                    as: "script"
		                });
		                return /*#__PURE__*/ _react.default.createElement("script", {
		                    nonce: nonce,
		                    dangerouslySetInnerHTML: {
		                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
		                            src
		                        ]) + ")"
		                    }
		                });
		            }
		        } else if (strategy === "afterInteractive") {
		            if (src) {
		                // @ts-ignore
		                _reactdom.default.preload(src, restProps.integrity ? {
		                    as: "script",
		                    integrity: restProps.integrity
		                } : {
		                    as: "script"
		                });
		            }
		        }
		    }
		    return null;
		}
		Object.defineProperty(Script, "__nextScript", {
		    value: true
		});
		const _default = Script;

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (script, script.exports));
	return script.exports;
}

var isError = {};

var isPlainObject = {};

var hasRequiredIsPlainObject;

function requireIsPlainObject () {
	if (hasRequiredIsPlainObject) return isPlainObject;
	hasRequiredIsPlainObject = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getObjectClassLabel: function() {
		        return getObjectClassLabel;
		    },
		    isPlainObject: function() {
		        return isPlainObject;
		    }
		});
		function getObjectClassLabel(value) {
		    return Object.prototype.toString.call(value);
		}
		function isPlainObject(value) {
		    if (getObjectClassLabel(value) !== "[object Object]") {
		        return false;
		    }
		    const prototype = Object.getPrototypeOf(value);
		    /**
		   * this used to be previously:
		   *
		   * `return prototype === null || prototype === Object.prototype`
		   *
		   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
		   *
		   * It was changed to the current implementation since it's resilient to serialization.
		   */ return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
		}

		
	} (isPlainObject));
	return isPlainObject;
}

var hasRequiredIsError;

function requireIsError () {
	if (hasRequiredIsError) return isError;
	hasRequiredIsError = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    default: function() {
		        return isError;
		    },
		    getProperError: function() {
		        return getProperError;
		    }
		});
		const _isplainobject = requireIsPlainObject();
		function isError(err) {
		    return typeof err === "object" && err !== null && "name" in err && "message" in err;
		}
		function getProperError(err) {
		    if (isError(err)) {
		        return err;
		    }
		    if (browser$1.env.NODE_ENV === "development") {
		        // provide better error for case where `throw undefined`
		        // is called in development
		        if (typeof err === "undefined") {
		            return new Error("An undefined error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
		        }
		        if (err === null) {
		            return new Error("A null error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
		        }
		    }
		    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
		}

		
	} (isError));
	return isError;
}

var denormalizePagePath = {};

var utils$1 = {};

var sortedRoutes = {};

var hasRequiredSortedRoutes;

function requireSortedRoutes () {
	if (hasRequiredSortedRoutes) return sortedRoutes;
	hasRequiredSortedRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getSortedRoutes", {
		    enumerable: true,
		    get: function() {
		        return getSortedRoutes;
		    }
		});
		class UrlNode {
		    insert(urlPath) {
		        this._insert(urlPath.split("/").filter(Boolean), [], false);
		    }
		    smoosh() {
		        return this._smoosh();
		    }
		    _smoosh(prefix) {
		        if (prefix === void 0) prefix = "/";
		        const childrenPaths = [
		            ...this.children.keys()
		        ].sort();
		        if (this.slugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
		        }
		        if (this.restSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
		        }
		        if (this.optionalRestSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
		        }
		        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
		                ...prev,
		                ...curr
		            ], []);
		        if (this.slugName !== null) {
		            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
		        }
		        if (!this.placeholder) {
		            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
		            if (this.optionalRestSlugName != null) {
		                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
		            }
		            routes.unshift(r);
		        }
		        if (this.restSlugName !== null) {
		            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
		        }
		        if (this.optionalRestSlugName !== null) {
		            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
		        }
		        return routes;
		    }
		    _insert(urlPaths, slugNames, isCatchAll) {
		        if (urlPaths.length === 0) {
		            this.placeholder = false;
		            return;
		        }
		        if (isCatchAll) {
		            throw new Error("Catch-all must be the last part of the URL.");
		        }
		        // The next segment in the urlPaths list
		        let nextSegment = urlPaths[0];
		        // Check if the segment matches `[something]`
		        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
		            // Strip `[` and `]`, leaving only `something`
		            let segmentName = nextSegment.slice(1, -1);
		            let isOptional = false;
		            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
		                // Strip optional `[` and `]`, leaving only `something`
		                segmentName = segmentName.slice(1, -1);
		                isOptional = true;
		            }
		            if (segmentName.startsWith("...")) {
		                // Strip `...`, leaving only `something`
		                segmentName = segmentName.substring(3);
		                isCatchAll = true;
		            }
		            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
		                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
		            }
		            if (segmentName.startsWith(".")) {
		                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
		            }
		            function handleSlug(previousSlug, nextSlug) {
		                if (previousSlug !== null) {
		                    // If the specific segment already has a slug but the slug is not `something`
		                    // This prevents collisions like:
		                    // pages/[post]/index.js
		                    // pages/[id]/index.js
		                    // Because currently multiple dynamic params on the same segment level are not supported
		                    if (previousSlug !== nextSlug) {
		                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
		                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
		                    }
		                }
		                slugNames.forEach((slug)=>{
		                    if (slug === nextSlug) {
		                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
		                    }
		                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
		                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
		                    }
		                });
		                slugNames.push(nextSlug);
		            }
		            if (isCatchAll) {
		                if (isOptional) {
		                    if (this.restSlugName != null) {
		                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
		                    }
		                    handleSlug(this.optionalRestSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.optionalRestSlugName = segmentName;
		                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
		                    nextSegment = "[[...]]";
		                } else {
		                    if (this.optionalRestSlugName != null) {
		                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
		                    }
		                    handleSlug(this.restSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.restSlugName = segmentName;
		                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
		                    nextSegment = "[...]";
		                }
		            } else {
		                if (isOptional) {
		                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
		                }
		                handleSlug(this.slugName, segmentName);
		                // slugName is kept as it can only be one particular slugName
		                this.slugName = segmentName;
		                // nextSegment is overwritten to [] so that it can later be sorted specifically
		                nextSegment = "[]";
		            }
		        }
		        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
		        if (!this.children.has(nextSegment)) {
		            this.children.set(nextSegment, new UrlNode());
		        }
		        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
		    }
		    constructor(){
		        this.placeholder = true;
		        this.children = new Map();
		        this.slugName = null;
		        this.restSlugName = null;
		        this.optionalRestSlugName = null;
		    }
		}
		function getSortedRoutes(normalizedPages) {
		    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
		    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
		    // Only 1 dynamic segment per nesting level
		    // So in the case that is test/integration/dynamic-routing it'll be this:
		    // pages/[post]/comments.js
		    // pages/blog/[post]/comment/[id].js
		    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
		    // So in this case `UrlNode` created here has `this.slugName === 'post'`
		    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
		    // Instead what has to be passed through is the upwards path's dynamic names
		    const root = new UrlNode();
		    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
		    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
		    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
		    return root.smoosh();
		}

		
	} (sortedRoutes));
	return sortedRoutes;
}

var isDynamic = {};

var interceptionRoutes = {};

var appPaths = {};

var ensureLeadingSlash = {};

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */

var hasRequiredEnsureLeadingSlash;

function requireEnsureLeadingSlash () {
	if (hasRequiredEnsureLeadingSlash) return ensureLeadingSlash;
	hasRequiredEnsureLeadingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "ensureLeadingSlash", {
		    enumerable: true,
		    get: function() {
		        return ensureLeadingSlash;
		    }
		});
		function ensureLeadingSlash(path) {
		    return path.startsWith("/") ? path : "/" + path;
		}

		
	} (ensureLeadingSlash));
	return ensureLeadingSlash;
}

var segment = {};

var hasRequiredSegment;

function requireSegment () {
	if (hasRequiredSegment) return segment;
	hasRequiredSegment = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isGroupSegment", {
		    enumerable: true,
		    get: function() {
		        return isGroupSegment;
		    }
		});
		function isGroupSegment(segment) {
		    // Use array[0] for performant purpose
		    return segment[0] === "(" && segment.endsWith(")");
		}

		
	} (segment));
	return segment;
}

var hasRequiredAppPaths;

function requireAppPaths () {
	if (hasRequiredAppPaths) return appPaths;
	hasRequiredAppPaths = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    normalizeAppPath: function() {
		        return normalizeAppPath;
		    },
		    normalizeRscURL: function() {
		        return normalizeRscURL;
		    }
		});
		const _ensureleadingslash = requireEnsureLeadingSlash();
		const _segment = requireSegment();
		function normalizeAppPath(route) {
		    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
		        // Empty segments are ignored.
		        if (!segment) {
		            return pathname;
		        }
		        // Groups are ignored.
		        if ((0, _segment.isGroupSegment)(segment)) {
		            return pathname;
		        }
		        // Parallel segments are ignored.
		        if (segment[0] === "@") {
		            return pathname;
		        }
		        // The last segment (if it's a leaf) should be ignored.
		        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
		            return pathname;
		        }
		        return pathname + "/" + segment;
		    }, ""));
		}
		function normalizeRscURL(url) {
		    return url.replace(/\.rsc($|\?)/, // $1 ensures `?` is preserved
		    "$1");
		}

		
	} (appPaths));
	return appPaths;
}

var hasRequiredInterceptionRoutes;

function requireInterceptionRoutes () {
	if (hasRequiredInterceptionRoutes) return interceptionRoutes;
	hasRequiredInterceptionRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    INTERCEPTION_ROUTE_MARKERS: function() {
		        return INTERCEPTION_ROUTE_MARKERS;
		    },
		    isInterceptionRouteAppPath: function() {
		        return isInterceptionRouteAppPath;
		    },
		    extractInterceptionRouteInformation: function() {
		        return extractInterceptionRouteInformation;
		    }
		});
		const _apppaths = requireAppPaths();
		const INTERCEPTION_ROUTE_MARKERS = [
		    "(..)(..)",
		    "(.)",
		    "(..)",
		    "(...)"
		];
		function isInterceptionRouteAppPath(path) {
		    // TODO-APP: add more serious validation
		    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
		}
		function extractInterceptionRouteInformation(path) {
		    let interceptingRoute, marker, interceptedRoute;
		    for (const segment of path.split("/")){
		        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		        if (marker) {
		            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
		            break;
		        }
		    }
		    if (!interceptingRoute || !marker || !interceptedRoute) {
		        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
		    }
		    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
		    ;
		    switch(marker){
		        case "(.)":
		            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
		            if (interceptingRoute === "/") {
		                interceptedRoute = `/${interceptedRoute}`;
		            } else {
		                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
		            }
		            break;
		        case "(..)":
		            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
		            if (interceptingRoute === "/") {
		                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
		            }
		            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
		            break;
		        case "(...)":
		            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
		            interceptedRoute = "/" + interceptedRoute;
		            break;
		        case "(..)(..)":
		            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
		            const splitInterceptingRoute = interceptingRoute.split("/");
		            if (splitInterceptingRoute.length <= 2) {
		                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
		            }
		            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
		            break;
		        default:
		            throw new Error("Invariant: unexpected marker");
		    }
		    return {
		        interceptingRoute,
		        interceptedRoute
		    };
		}

		
	} (interceptionRoutes));
	return interceptionRoutes;
}

var hasRequiredIsDynamic;

function requireIsDynamic () {
	if (hasRequiredIsDynamic) return isDynamic;
	hasRequiredIsDynamic = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isDynamicRoute", {
		    enumerable: true,
		    get: function() {
		        return isDynamicRoute;
		    }
		});
		const _interceptionroutes = requireInterceptionRoutes();
		// Identify /[param]/ in route string
		const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
		function isDynamicRoute(route) {
		    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
		        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
		    }
		    return TEST_ROUTE.test(route);
		}

		
	} (isDynamic));
	return isDynamic;
}

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getSortedRoutes: function() {
		        return _sortedroutes.getSortedRoutes;
		    },
		    isDynamicRoute: function() {
		        return _isdynamic.isDynamicRoute;
		    }
		});
		const _sortedroutes = requireSortedRoutes();
		const _isdynamic = requireIsDynamic();

		
	} (utils$1));
	return utils$1;
}

var normalizePathSep = {};

/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */

var hasRequiredNormalizePathSep;

function requireNormalizePathSep () {
	if (hasRequiredNormalizePathSep) return normalizePathSep;
	hasRequiredNormalizePathSep = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizePathSep", {
		    enumerable: true,
		    get: function() {
		        return normalizePathSep;
		    }
		});
		function normalizePathSep(path) {
		    return path.replace(/\\/g, "/");
		}

		
	} (normalizePathSep));
	return normalizePathSep;
}

var hasRequiredDenormalizePagePath;

function requireDenormalizePagePath () {
	if (hasRequiredDenormalizePagePath) return denormalizePagePath;
	hasRequiredDenormalizePagePath = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "denormalizePagePath", {
		    enumerable: true,
		    get: function() {
		        return denormalizePagePath;
		    }
		});
		const _utils = requireUtils$1();
		const _normalizepathsep = requireNormalizePathSep();
		function denormalizePagePath(page) {
		    let _page = (0, _normalizepathsep.normalizePathSep)(page);
		    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
		}

		
	} (denormalizePagePath));
	return denormalizePagePath;
}

var normalizeLocalePath = {};

var hasRequiredNormalizeLocalePath;

function requireNormalizeLocalePath () {
	if (hasRequiredNormalizeLocalePath) return normalizeLocalePath;
	hasRequiredNormalizeLocalePath = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizeLocalePath", {
		    enumerable: true,
		    get: function() {
		        return normalizeLocalePath;
		    }
		});
		function normalizeLocalePath(pathname, locales) {
		    let detectedLocale;
		    // first item will be empty string from splitting at first char
		    const pathnameParts = pathname.split("/");
		    (locales || []).some((locale)=>{
		        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
		            detectedLocale = locale;
		            pathnameParts.splice(1, 1);
		            pathname = pathnameParts.join("/") || "/";
		            return true;
		        }
		        return false;
		    });
		    return {
		        pathname,
		        detectedLocale
		    };
		}

		
	} (normalizeLocalePath));
	return normalizeLocalePath;
}

var mitt = {};

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var hasRequiredMitt;

function requireMitt () {
	if (hasRequiredMitt) return mitt;
	hasRequiredMitt = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return mitt;
		    }
		});
		function mitt() {
		    const all = Object.create(null);
		    return {
		        on (type, handler) {
		            (all[type] || (all[type] = [])).push(handler);
		        },
		        off (type, handler) {
		            if (all[type]) {
		                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
		            }
		        },
		        emit (type) {
		            for(var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		                evts[_key - 1] = arguments[_key];
		            }
		            (all[type] || []).slice().map((handler)=>{
		                handler(...evts);
		            });
		        }
		    };
		}

		
	} (mitt));
	return mitt;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    WEB_VITALS: function() {
		        return WEB_VITALS;
		    },
		    execOnce: function() {
		        return execOnce;
		    },
		    isAbsoluteUrl: function() {
		        return isAbsoluteUrl;
		    },
		    getLocationOrigin: function() {
		        return getLocationOrigin;
		    },
		    getURL: function() {
		        return getURL;
		    },
		    getDisplayName: function() {
		        return getDisplayName;
		    },
		    isResSent: function() {
		        return isResSent;
		    },
		    normalizeRepeatedSlashes: function() {
		        return normalizeRepeatedSlashes;
		    },
		    loadGetInitialProps: function() {
		        return loadGetInitialProps;
		    },
		    SP: function() {
		        return SP;
		    },
		    ST: function() {
		        return ST;
		    },
		    DecodeError: function() {
		        return DecodeError;
		    },
		    NormalizeError: function() {
		        return NormalizeError;
		    },
		    PageNotFoundError: function() {
		        return PageNotFoundError;
		    },
		    MissingStaticPage: function() {
		        return MissingStaticPage;
		    },
		    MiddlewareNotFoundError: function() {
		        return MiddlewareNotFoundError;
		    },
		    stringifyError: function() {
		        return stringifyError;
		    }
		});
		const WEB_VITALS = [
		    "CLS",
		    "FCP",
		    "FID",
		    "INP",
		    "LCP",
		    "TTFB"
		];
		function execOnce(fn) {
		    let used = false;
		    let result;
		    return function() {
		        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		            args[_key] = arguments[_key];
		        }
		        if (!used) {
		            used = true;
		            result = fn(...args);
		        }
		        return result;
		    };
		}
		// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
		// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
		const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
		const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
		function getLocationOrigin() {
		    const { protocol, hostname, port } = window.location;
		    return protocol + "//" + hostname + (port ? ":" + port : "");
		}
		function getURL() {
		    const { href } = window.location;
		    const origin = getLocationOrigin();
		    return href.substring(origin.length);
		}
		function getDisplayName(Component) {
		    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
		}
		function isResSent(res) {
		    return res.finished || res.headersSent;
		}
		function normalizeRepeatedSlashes(url) {
		    const urlParts = url.split("?");
		    const urlNoQuery = urlParts[0];
		    return urlNoQuery// first we replace any non-encoded backslashes with forward
		    // then normalize repeated forward slashes
		    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
		}
		async function loadGetInitialProps(App, ctx) {
		    if (browser$1.env.NODE_ENV !== "production") {
		        var _App_prototype;
		        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
		            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
		            throw new Error(message);
		        }
		    }
		    // when called from _app `ctx` is nested in `ctx`
		    const res = ctx.res || ctx.ctx && ctx.ctx.res;
		    if (!App.getInitialProps) {
		        if (ctx.ctx && ctx.Component) {
		            // @ts-ignore pageProps default
		            return {
		                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
		            };
		        }
		        return {};
		    }
		    const props = await App.getInitialProps(ctx);
		    if (res && isResSent(res)) {
		        return props;
		    }
		    if (!props) {
		        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
		        throw new Error(message);
		    }
		    if (browser$1.env.NODE_ENV !== "production") {
		        if (Object.keys(props).length === 0 && !ctx.ctx) {
		            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
		        }
		    }
		    return props;
		}
		const SP = typeof performance !== "undefined";
		const ST = SP && [
		    "mark",
		    "measure",
		    "getEntriesByName"
		].every((method)=>typeof performance[method] === "function");
		class DecodeError extends Error {
		}
		class NormalizeError extends Error {
		}
		class PageNotFoundError extends Error {
		    constructor(page){
		        super();
		        this.code = "ENOENT";
		        this.name = "PageNotFoundError";
		        this.message = "Cannot find module for page: " + page;
		    }
		}
		class MissingStaticPage extends Error {
		    constructor(page, message){
		        super();
		        this.message = "Failed to load static file for page: " + page + " " + message;
		    }
		}
		class MiddlewareNotFoundError extends Error {
		    constructor(){
		        super();
		        this.code = "ENOENT";
		        this.message = "Cannot find the middleware module";
		    }
		}
		function stringifyError(error) {
		    return JSON.stringify({
		        message: error.message,
		        stack: error.stack
		    });
		}

		
	} (utils));
	return utils;
}

var parseRelativeUrl = {};

var querystring = {};

var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    searchParamsToUrlQuery: function() {
		        return searchParamsToUrlQuery;
		    },
		    urlQueryToSearchParams: function() {
		        return urlQueryToSearchParams;
		    },
		    assign: function() {
		        return assign;
		    }
		});
		function searchParamsToUrlQuery(searchParams) {
		    const query = {};
		    searchParams.forEach((value, key)=>{
		        if (typeof query[key] === "undefined") {
		            query[key] = value;
		        } else if (Array.isArray(query[key])) {
		            query[key].push(value);
		        } else {
		            query[key] = [
		                query[key],
		                value
		            ];
		        }
		    });
		    return query;
		}
		function stringifyUrlQueryParam(param) {
		    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
		        return String(param);
		    } else {
		        return "";
		    }
		}
		function urlQueryToSearchParams(urlQuery) {
		    const result = new URLSearchParams();
		    Object.entries(urlQuery).forEach((param)=>{
		        let [key, value] = param;
		        if (Array.isArray(value)) {
		            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
		        } else {
		            result.set(key, stringifyUrlQueryParam(value));
		        }
		    });
		    return result;
		}
		function assign(target) {
		    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        searchParamsList[_key - 1] = arguments[_key];
		    }
		    searchParamsList.forEach((searchParams)=>{
		        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
		        searchParams.forEach((value, key)=>target.append(key, value));
		    });
		    return target;
		}

		
	} (querystring));
	return querystring;
}

var hasRequiredParseRelativeUrl;

function requireParseRelativeUrl () {
	if (hasRequiredParseRelativeUrl) return parseRelativeUrl;
	hasRequiredParseRelativeUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "parseRelativeUrl", {
		    enumerable: true,
		    get: function() {
		        return parseRelativeUrl;
		    }
		});
		const _utils = requireUtils();
		const _querystring = requireQuerystring();
		function parseRelativeUrl(url, base) {
		    const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils.getLocationOrigin)());
		    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL(typeof window === "undefined" ? "http://n" : window.location.href) : globalBase;
		    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
		    if (origin !== globalBase.origin) {
		        throw new Error("invariant: invalid relative URL, router received " + url);
		    }
		    return {
		        pathname,
		        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
		        search,
		        hash,
		        href: href.slice(globalBase.origin.length)
		    };
		}

		
	} (parseRelativeUrl));
	return parseRelativeUrl;
}

var resolveRewrites = {};

var pathMatch = {};

var pathToRegexp = {};

var hasRequiredPathToRegexp;

function requirePathToRegexp () {
	if (hasRequiredPathToRegexp) return pathToRegexp;
	hasRequiredPathToRegexp = 1;
	Object.defineProperty(pathToRegexp, "__esModule", { value: true });
	/**
	 * Tokenize input string.
	 */
	function lexer(str) {
	    var tokens = [];
	    var i = 0;
	    while (i < str.length) {
	        var char = str[i];
	        if (char === "*" || char === "+" || char === "?") {
	            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "\\") {
	            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
	            continue;
	        }
	        if (char === "{") {
	            tokens.push({ type: "OPEN", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "}") {
	            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === ":") {
	            var name = "";
	            var j = i + 1;
	            while (j < str.length) {
	                var code = str.charCodeAt(j);
	                if (
	                // `0-9`
	                (code >= 48 && code <= 57) ||
	                    // `A-Z`
	                    (code >= 65 && code <= 90) ||
	                    // `a-z`
	                    (code >= 97 && code <= 122) ||
	                    // `_`
	                    code === 95) {
	                    name += str[j++];
	                    continue;
	                }
	                break;
	            }
	            if (!name)
	                throw new TypeError("Missing parameter name at " + i);
	            tokens.push({ type: "NAME", index: i, value: name });
	            i = j;
	            continue;
	        }
	        if (char === "(") {
	            var count = 1;
	            var pattern = "";
	            var j = i + 1;
	            if (str[j] === "?") {
	                throw new TypeError("Pattern cannot start with \"?\" at " + j);
	            }
	            while (j < str.length) {
	                if (str[j] === "\\") {
	                    pattern += str[j++] + str[j++];
	                    continue;
	                }
	                if (str[j] === ")") {
	                    count--;
	                    if (count === 0) {
	                        j++;
	                        break;
	                    }
	                }
	                else if (str[j] === "(") {
	                    count++;
	                    if (str[j + 1] !== "?") {
	                        throw new TypeError("Capturing groups are not allowed at " + j);
	                    }
	                }
	                pattern += str[j++];
	            }
	            if (count)
	                throw new TypeError("Unbalanced pattern at " + i);
	            if (!pattern)
	                throw new TypeError("Missing pattern at " + i);
	            tokens.push({ type: "PATTERN", index: i, value: pattern });
	            i = j;
	            continue;
	        }
	        tokens.push({ type: "CHAR", index: i, value: str[i++] });
	    }
	    tokens.push({ type: "END", index: i, value: "" });
	    return tokens;
	}
	/**
	 * Parse a string for the raw tokens.
	 */
	function parse(str, options) {
	    if (options === void 0) { options = {}; }
	    var tokens = lexer(str);
	    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
	    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
	    var result = [];
	    var key = 0;
	    var i = 0;
	    var path = "";
	    var tryConsume = function (type) {
	        if (i < tokens.length && tokens[i].type === type)
	            return tokens[i++].value;
	    };
	    var mustConsume = function (type) {
	        var value = tryConsume(type);
	        if (value !== undefined)
	            return value;
	        var _a = tokens[i], nextType = _a.type, index = _a.index;
	        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
	    };
	    var consumeText = function () {
	        var result = "";
	        var value;
	        // tslint:disable-next-line
	        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
	            result += value;
	        }
	        return result;
	    };
	    while (i < tokens.length) {
	        var char = tryConsume("CHAR");
	        var name = tryConsume("NAME");
	        var pattern = tryConsume("PATTERN");
	        if (name || pattern) {
	            var prefix = char || "";
	            if (prefixes.indexOf(prefix) === -1) {
	                path += prefix;
	                prefix = "";
	            }
	            if (path) {
	                result.push(path);
	                path = "";
	            }
	            result.push({
	                name: name || key++,
	                prefix: prefix,
	                suffix: "",
	                pattern: pattern || defaultPattern,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        var value = char || tryConsume("ESCAPED_CHAR");
	        if (value) {
	            path += value;
	            continue;
	        }
	        if (path) {
	            result.push(path);
	            path = "";
	        }
	        var open = tryConsume("OPEN");
	        if (open) {
	            var prefix = consumeText();
	            var name_1 = tryConsume("NAME") || "";
	            var pattern_1 = tryConsume("PATTERN") || "";
	            var suffix = consumeText();
	            mustConsume("CLOSE");
	            result.push({
	                name: name_1 || (pattern_1 ? key++ : ""),
	                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
	                prefix: prefix,
	                suffix: suffix,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        mustConsume("END");
	    }
	    return result;
	}
	pathToRegexp.parse = parse;
	/**
	 * Compile a string to a template function for the path.
	 */
	function compile(str, options) {
	    return tokensToFunction(parse(str, options), options);
	}
	pathToRegexp.compile = compile;
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens, options) {
	    if (options === void 0) { options = {}; }
	    var reFlags = flags(options);
	    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
	    // Compile all the tokens into regexps.
	    var matches = tokens.map(function (token) {
	        if (typeof token === "object") {
	            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
	        }
	    });
	    return function (data) {
	        var path = "";
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];
	            if (typeof token === "string") {
	                path += token;
	                continue;
	            }
	            var value = data ? data[token.name] : undefined;
	            var optional = token.modifier === "?" || token.modifier === "*";
	            var repeat = token.modifier === "*" || token.modifier === "+";
	            if (Array.isArray(value)) {
	                if (!repeat) {
	                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
	                }
	                if (value.length === 0) {
	                    if (optional)
	                        continue;
	                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
	                }
	                for (var j = 0; j < value.length; j++) {
	                    var segment = encode(value[j], token);
	                    if (validate && !matches[i].test(segment)) {
	                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                    }
	                    path += token.prefix + segment + token.suffix;
	                }
	                continue;
	            }
	            if (typeof value === "string" || typeof value === "number") {
	                var segment = encode(String(value), token);
	                if (validate && !matches[i].test(segment)) {
	                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                }
	                path += token.prefix + segment + token.suffix;
	                continue;
	            }
	            if (optional)
	                continue;
	            var typeOfMessage = repeat ? "an array" : "a string";
	            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
	        }
	        return path;
	    };
	}
	pathToRegexp.tokensToFunction = tokensToFunction;
	/**
	 * Create path match function from `path-to-regexp` spec.
	 */
	function match(str, options) {
	    var keys = [];
	    var re = pathToRegexp$1(str, keys, options);
	    return regexpToFunction(re, keys, options);
	}
	pathToRegexp.match = match;
	/**
	 * Create a path match function from `path-to-regexp` output.
	 */
	function regexpToFunction(re, keys, options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
	    return function (pathname) {
	        var m = re.exec(pathname);
	        if (!m)
	            return false;
	        var path = m[0], index = m.index;
	        var params = Object.create(null);
	        var _loop_1 = function (i) {
	            // tslint:disable-next-line
	            if (m[i] === undefined)
	                return "continue";
	            var key = keys[i - 1];
	            if (key.modifier === "*" || key.modifier === "+") {
	                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
	                    return decode(value, key);
	                });
	            }
	            else {
	                params[key.name] = decode(m[i], key);
	            }
	        };
	        for (var i = 1; i < m.length; i++) {
	            _loop_1(i);
	        }
	        return { path: path, index: index, params: params };
	    };
	}
	pathToRegexp.regexpToFunction = regexpToFunction;
	/**
	 * Escape a regular expression string.
	 */
	function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	}
	/**
	 * Get the flags for a regexp from the options.
	 */
	function flags(options) {
	    return options && options.sensitive ? "" : "i";
	}
	/**
	 * Pull out keys from a regexp.
	 */
	function regexpToRegexp(path, keys) {
	    if (!keys)
	        return path;
	    // Use a negative lookahead to match only capturing groups.
	    var groups = path.source.match(/\((?!\?)/g);
	    if (groups) {
	        for (var i = 0; i < groups.length; i++) {
	            keys.push({
	                name: i,
	                prefix: "",
	                suffix: "",
	                modifier: "",
	                pattern: ""
	            });
	        }
	    }
	    return path;
	}
	/**
	 * Transform an array into a regexp.
	 */
	function arrayToRegexp(paths, keys, options) {
	    var parts = paths.map(function (path) { return pathToRegexp$1(path, keys, options).source; });
	    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
	}
	/**
	 * Create a path regexp from string input.
	 */
	function stringToRegexp(path, keys, options) {
	    return tokensToRegexp(parse(path, options), keys, options);
	}
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 */
	function tokensToRegexp(tokens, keys, options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
	    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
	    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
	    var route = start ? "^" : "";
	    // Iterate over the tokens and create our regexp string.
	    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
	        var token = tokens_1[_i];
	        if (typeof token === "string") {
	            route += escapeString(encode(token));
	        }
	        else {
	            var prefix = escapeString(encode(token.prefix));
	            var suffix = escapeString(encode(token.suffix));
	            if (token.pattern) {
	                if (keys)
	                    keys.push(token);
	                if (prefix || suffix) {
	                    if (token.modifier === "+" || token.modifier === "*") {
	                        var mod = token.modifier === "*" ? "?" : "";
	                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
	                    }
	                    else {
	                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
	                    }
	                }
	                else {
	                    route += "(" + token.pattern + ")" + token.modifier;
	                }
	            }
	            else {
	                route += "(?:" + prefix + suffix + ")" + token.modifier;
	            }
	        }
	    }
	    if (end) {
	        if (!strict)
	            route += delimiter + "?";
	        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
	    }
	    else {
	        var endToken = tokens[tokens.length - 1];
	        var isEndDelimited = typeof endToken === "string"
	            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
	            : // tslint:disable-next-line
	                endToken === undefined;
	        if (!strict) {
	            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
	        }
	        if (!isEndDelimited) {
	            route += "(?=" + delimiter + "|" + endsWith + ")";
	        }
	    }
	    return new RegExp(route, flags(options));
	}
	pathToRegexp.tokensToRegexp = tokensToRegexp;
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 */
	function pathToRegexp$1(path, keys, options) {
	    if (path instanceof RegExp)
	        return regexpToRegexp(path, keys);
	    if (Array.isArray(path))
	        return arrayToRegexp(path, keys, options);
	    return stringToRegexp(path, keys, options);
	}
	pathToRegexp.pathToRegexp = pathToRegexp$1;
	
	return pathToRegexp;
}

var hasRequiredPathMatch;

function requirePathMatch () {
	if (hasRequiredPathMatch) return pathMatch;
	hasRequiredPathMatch = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getPathMatch", {
		    enumerable: true,
		    get: function() {
		        return getPathMatch;
		    }
		});
		const _pathtoregexp = requirePathToRegexp();
		function getPathMatch(path, options) {
		    const keys = [];
		    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
		        delimiter: "/",
		        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
		        strict: options == null ? void 0 : options.strict
		    });
		    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
		    /**
		   * A matcher function that will check if a given pathname matches the path
		   * given in the builder function. When the path does not match it will return
		   * `false` but if it does it will return an object with the matched params
		   * merged with the params provided in the second argument.
		   */ return (pathname, params)=>{
		        // If no pathname is provided it's not a match.
		        if (typeof pathname !== "string") return false;
		        const match = matcher(pathname);
		        // If the path did not match `false` will be returned.
		        if (!match) return false;
		        /**
		     * If unnamed params are not allowed they must be removed from
		     * the matched parameters. path-to-regexp uses "string" for named and
		     * "number" for unnamed parameters.
		     */ if (options == null ? void 0 : options.removeUnnamedParams) {
		            for (const key of keys){
		                if (typeof key.name === "number") {
		                    delete match.params[key.name];
		                }
		            }
		        }
		        return {
		            ...params,
		            ...match.params
		        };
		    };
		}

		
	} (pathMatch));
	return pathMatch;
}

var prepareDestination = {};

var escapeRegexp = {};

var hasRequiredEscapeRegexp;

function requireEscapeRegexp () {
	if (hasRequiredEscapeRegexp) return escapeRegexp;
	hasRequiredEscapeRegexp = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "escapeStringRegexp", {
		    enumerable: true,
		    get: function() {
		        return escapeStringRegexp;
		    }
		});
		const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
		const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
		function escapeStringRegexp(str) {
		    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
		    if (reHasRegExp.test(str)) {
		        return str.replace(reReplaceRegExp, "\\$&");
		    }
		    return str;
		}

		
	} (escapeRegexp));
	return escapeRegexp;
}

var parseUrl = {};

var hasRequiredParseUrl;

function requireParseUrl () {
	if (hasRequiredParseUrl) return parseUrl;
	hasRequiredParseUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "parseUrl", {
		    enumerable: true,
		    get: function() {
		        return parseUrl;
		    }
		});
		const _querystring = requireQuerystring();
		const _parserelativeurl = requireParseRelativeUrl();
		function parseUrl(url) {
		    if (url.startsWith("/")) {
		        return (0, _parserelativeurl.parseRelativeUrl)(url);
		    }
		    const parsedURL = new URL(url);
		    return {
		        hash: parsedURL.hash,
		        hostname: parsedURL.hostname,
		        href: parsedURL.href,
		        pathname: parsedURL.pathname,
		        port: parsedURL.port,
		        protocol: parsedURL.protocol,
		        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
		        search: parsedURL.search
		    };
		}

		
	} (parseUrl));
	return parseUrl;
}

var appRouterHeaders = {exports: {}};

var hasRequiredAppRouterHeaders;

function requireAppRouterHeaders () {
	if (hasRequiredAppRouterHeaders) return appRouterHeaders.exports;
	hasRequiredAppRouterHeaders = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    RSC_HEADER: function() {
		        return RSC_HEADER;
		    },
		    ACTION: function() {
		        return ACTION;
		    },
		    NEXT_ROUTER_STATE_TREE: function() {
		        return NEXT_ROUTER_STATE_TREE;
		    },
		    NEXT_ROUTER_PREFETCH_HEADER: function() {
		        return NEXT_ROUTER_PREFETCH_HEADER;
		    },
		    NEXT_URL: function() {
		        return NEXT_URL;
		    },
		    RSC_CONTENT_TYPE_HEADER: function() {
		        return RSC_CONTENT_TYPE_HEADER;
		    },
		    RSC_VARY_HEADER: function() {
		        return RSC_VARY_HEADER;
		    },
		    FLIGHT_PARAMETERS: function() {
		        return FLIGHT_PARAMETERS;
		    },
		    NEXT_RSC_UNION_QUERY: function() {
		        return NEXT_RSC_UNION_QUERY;
		    },
		    NEXT_DID_POSTPONE_HEADER: function() {
		        return NEXT_DID_POSTPONE_HEADER;
		    }
		});
		const RSC_HEADER = "RSC";
		const ACTION = "Next-Action";
		const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
		const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
		const NEXT_URL = "Next-Url";
		const RSC_CONTENT_TYPE_HEADER = "text/x-component";
		const RSC_VARY_HEADER = RSC_HEADER + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH_HEADER + ", " + NEXT_URL;
		const FLIGHT_PARAMETERS = [
		    [
		        RSC_HEADER
		    ],
		    [
		        NEXT_ROUTER_STATE_TREE
		    ],
		    [
		        NEXT_ROUTER_PREFETCH_HEADER
		    ]
		];
		const NEXT_RSC_UNION_QUERY = "_rsc";
		const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (appRouterHeaders, appRouterHeaders.exports));
	return appRouterHeaders.exports;
}

var getCookieParser = {};

var __dirname$2 = '/Users\BangAndroid\Documents\Eollluga_modules\modules-fe\node_modules\next\dist\compiled\cookie';

var cookie = {exports: {}};

var hasRequiredCookie;

function requireCookie () {
	if (hasRequiredCookie) return cookie.exports;
	hasRequiredCookie = 1;
	(()=>{if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname$2+"/";var e={};(()=>{var r=e;
	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function parse(e,r){if(typeof e!=="string"){throw new TypeError("argument str must be a string")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf("=");if(u<0){continue}var v=f.substr(0,u).trim();var c=f.substr(++u,f.length).trim();if('"'==c[0]){c=c.slice(1,-1);}if(undefined==t[v]){t[v]=tryDecode(c,s);}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!=="function"){throw new TypeError("option encode is invalid")}if(!n.test(e)){throw new TypeError("argument name is invalid")}var s=o(r);if(s&&!n.test(s)){throw new TypeError("argument val is invalid")}var p=e+"="+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError("option maxAge is invalid")}p+="; Max-Age="+Math.floor(f);}if(a.domain){if(!n.test(a.domain)){throw new TypeError("option domain is invalid")}p+="; Domain="+a.domain;}if(a.path){if(!n.test(a.path)){throw new TypeError("option path is invalid")}p+="; Path="+a.path;}if(a.expires){if(typeof a.expires.toUTCString!=="function"){throw new TypeError("option expires is invalid")}p+="; Expires="+a.expires.toUTCString();}if(a.httpOnly){p+="; HttpOnly";}if(a.secure){p+="; Secure";}if(a.sameSite){var u=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}})();cookie.exports=e;})();
	return cookie.exports;
}

var hasRequiredGetCookieParser;

function requireGetCookieParser () {
	if (hasRequiredGetCookieParser) return getCookieParser;
	hasRequiredGetCookieParser = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getCookieParser", {
		    enumerable: true,
		    get: function() {
		        return getCookieParser;
		    }
		});
		function getCookieParser(headers) {
		    return function parseCookie() {
		        const { cookie } = headers;
		        if (!cookie) {
		            return {};
		        }
		        const { parse: parseCookieFn } = requireCookie();
		        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
		    };
		}

		
	} (getCookieParser));
	return getCookieParser;
}

var hasRequiredPrepareDestination;

function requirePrepareDestination () {
	if (hasRequiredPrepareDestination) return prepareDestination;
	hasRequiredPrepareDestination = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    matchHas: function() {
		        return matchHas;
		    },
		    compileNonPath: function() {
		        return compileNonPath;
		    },
		    prepareDestination: function() {
		        return prepareDestination;
		    }
		});
		const _pathtoregexp = requirePathToRegexp();
		const _escaperegexp = requireEscapeRegexp();
		const _parseurl = requireParseUrl();
		const _interceptionroutes = requireInterceptionRoutes();
		const _approuterheaders = requireAppRouterHeaders();
		const _getcookieparser = requireGetCookieParser();
		/**
		 * Ensure only a-zA-Z are used for param names for proper interpolating
		 * with path-to-regexp
		 */ function getSafeParamName(paramName) {
		    let newParamName = "";
		    for(let i = 0; i < paramName.length; i++){
		        const charCode = paramName.charCodeAt(i);
		        if (charCode > 64 && charCode < 91 || // A-Z
		        charCode > 96 && charCode < 123 // a-z
		        ) {
		            newParamName += paramName[i];
		        }
		    }
		    return newParamName;
		}
		function escapeSegment(str, segmentName) {
		    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), "g"), "__ESC_COLON_" + segmentName);
		}
		function unescapeSegments(str) {
		    return str.replace(/__ESC_COLON_/gi, ":");
		}
		function matchHas(req, query, has, missing) {
		    if (has === void 0) has = [];
		    if (missing === void 0) missing = [];
		    const params = {};
		    const hasMatch = (hasItem)=>{
		        let value;
		        let key = hasItem.key;
		        switch(hasItem.type){
		            case "header":
		                {
		                    key = key.toLowerCase();
		                    value = req.headers[key];
		                    break;
		                }
		            case "cookie":
		                {
		                    if ("cookies" in req) {
		                        value = req.cookies[hasItem.key];
		                    } else {
		                        const cookies = (0, _getcookieparser.getCookieParser)(req.headers)();
		                        value = cookies[hasItem.key];
		                    }
		                    break;
		                }
		            case "query":
		                {
		                    value = query[key];
		                    break;
		                }
		            case "host":
		                {
		                    const { host } = (req == null ? void 0 : req.headers) || {};
		                    // remove port from host if present
		                    const hostname = host == null ? void 0 : host.split(":", 1)[0].toLowerCase();
		                    value = hostname;
		                    break;
		                }
		        }
		        if (!hasItem.value && value) {
		            params[getSafeParamName(key)] = value;
		            return true;
		        } else if (value) {
		            const matcher = new RegExp("^" + hasItem.value + "$");
		            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
		            if (matches) {
		                if (Array.isArray(matches)) {
		                    if (matches.groups) {
		                        Object.keys(matches.groups).forEach((groupKey)=>{
		                            params[groupKey] = matches.groups[groupKey];
		                        });
		                    } else if (hasItem.type === "host" && matches[0]) {
		                        params.host = matches[0];
		                    }
		                }
		                return true;
		            }
		        }
		        return false;
		    };
		    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
		    if (allMatch) {
		        return params;
		    }
		    return false;
		}
		function compileNonPath(value, params) {
		    if (!value.includes(":")) {
		        return value;
		    }
		    for (const key of Object.keys(params)){
		        if (value.includes(":" + key)) {
		            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
		        }
		    }
		    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
		    // the value needs to start with a forward-slash to be compiled
		    // correctly
		    return (0, _pathtoregexp.compile)("/" + value, {
		        validate: false
		    })(params).slice(1);
		}
		function prepareDestination(args) {
		    const query = Object.assign({}, args.query);
		    delete query.__nextLocale;
		    delete query.__nextDefaultLocale;
		    delete query.__nextDataReq;
		    delete query.__nextInferredLocaleFromDefault;
		    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
		    let escapedDestination = args.destination;
		    for (const param of Object.keys({
		        ...args.params,
		        ...query
		    })){
		        escapedDestination = escapeSegment(escapedDestination, param);
		    }
		    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
		    const destQuery = parsedDestination.query;
		    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
		    const destHostname = unescapeSegments(parsedDestination.hostname || "");
		    const destPathParamKeys = [];
		    const destHostnameParamKeys = [];
		    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
		    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
		    const destParams = [];
		    destPathParamKeys.forEach((key)=>destParams.push(key.name));
		    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
		    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // we don't validate while compiling the destination since we should
		    // have already validated before we got to this point and validating
		    // breaks compiling destinations with named pattern params from the source
		    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
		    // since compile validation is meant for reversing and not for inserting
		    // params from a separate path-regex into another
		    {
		        validate: false
		    });
		    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
		        validate: false
		    });
		    // update any params in query values
		    for (const [key, strOrArray] of Object.entries(destQuery)){
		        // the value needs to start with a forward-slash to be compiled
		        // correctly
		        if (Array.isArray(strOrArray)) {
		            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
		        } else if (typeof strOrArray === "string") {
		            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
		        }
		    }
		    // add path params to query if it's not a redirect and not
		    // already defined in destination query or path
		    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
		    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
		        for (const key of paramKeys){
		            if (!(key in destQuery)) {
		                destQuery[key] = args.params[key];
		            }
		        }
		    }
		    let newUrl;
		    // The compiler also that the interception route marker is an unnamed param, hence '0',
		    // so we need to add it to the params object.
		    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
		        for (const segment of destPath.split("/")){
		            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		            if (marker) {
		                args.params["0"] = marker;
		                break;
		            }
		        }
		    }
		    try {
		        newUrl = destPathCompiler(args.params);
		        const [pathname, hash] = newUrl.split("#", 2);
		        parsedDestination.hostname = destHostnameCompiler(args.params);
		        parsedDestination.pathname = pathname;
		        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
		        delete parsedDestination.search;
		    } catch (err) {
		        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
		            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
		        }
		        throw err;
		    }
		    // Query merge order lowest priority to highest
		    // 1. initial URL query values
		    // 2. path segment values
		    // 3. destination specified query values
		    parsedDestination.query = {
		        ...query,
		        ...parsedDestination.query
		    };
		    return {
		        newUrl,
		        destQuery,
		        parsedDestination
		    };
		}

		
	} (prepareDestination));
	return prepareDestination;
}

var removeBasePath = {exports: {}};

var hasBasePath = {exports: {}};

var pathHasPrefix = {};

var parsePath = {};

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */

var hasRequiredParsePath;

function requireParsePath () {
	if (hasRequiredParsePath) return parsePath;
	hasRequiredParsePath = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "parsePath", {
		    enumerable: true,
		    get: function() {
		        return parsePath;
		    }
		});
		function parsePath(path) {
		    const hashIndex = path.indexOf("#");
		    const queryIndex = path.indexOf("?");
		    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
		    if (hasQuery || hashIndex > -1) {
		        return {
		            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
		            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
		            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
		        };
		    }
		    return {
		        pathname: path,
		        query: "",
		        hash: ""
		    };
		}

		
	} (parsePath));
	return parsePath;
}

var hasRequiredPathHasPrefix;

function requirePathHasPrefix () {
	if (hasRequiredPathHasPrefix) return pathHasPrefix;
	hasRequiredPathHasPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "pathHasPrefix", {
		    enumerable: true,
		    get: function() {
		        return pathHasPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function pathHasPrefix(path, prefix) {
		    if (typeof path !== "string") {
		        return false;
		    }
		    const { pathname } = (0, _parsepath.parsePath)(path);
		    return pathname === prefix || pathname.startsWith(prefix + "/");
		}

		
	} (pathHasPrefix));
	return pathHasPrefix;
}

var hasRequiredHasBasePath;

function requireHasBasePath () {
	if (hasRequiredHasBasePath) return hasBasePath.exports;
	hasRequiredHasBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "hasBasePath", {
		    enumerable: true,
		    get: function() {
		        return hasBasePath;
		    }
		});
		const _pathhasprefix = requirePathHasPrefix();
		const basePath = browser$1.env.__NEXT_ROUTER_BASEPATH || "";
		function hasBasePath(path) {
		    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hasBasePath, hasBasePath.exports));
	return hasBasePath.exports;
}

var hasRequiredRemoveBasePath;

function requireRemoveBasePath () {
	if (hasRequiredRemoveBasePath) return removeBasePath.exports;
	hasRequiredRemoveBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removeBasePath", {
		    enumerable: true,
		    get: function() {
		        return removeBasePath;
		    }
		});
		const _hasbasepath = requireHasBasePath();
		const basePath = browser$1.env.__NEXT_ROUTER_BASEPATH || "";
		function removeBasePath(path) {
		    if (browser$1.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
		        if (!(0, _hasbasepath.hasBasePath)(path)) {
		            return path;
		        }
		    }
		    // Can't trim the basePath if it has zero length!
		    if (basePath.length === 0) return path;
		    path = path.slice(basePath.length);
		    if (!path.startsWith("/")) path = "/" + path;
		    return path;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (removeBasePath, removeBasePath.exports));
	return removeBasePath.exports;
}

var hasRequiredResolveRewrites;

function requireResolveRewrites () {
	if (hasRequiredResolveRewrites) return resolveRewrites;
	hasRequiredResolveRewrites = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return resolveRewrites;
		    }
		});
		const _pathmatch = requirePathMatch();
		const _preparedestination = requirePrepareDestination();
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _normalizelocalepath = requireNormalizeLocalePath();
		const _removebasepath = requireRemoveBasePath();
		const _parserelativeurl = requireParseRelativeUrl();
		function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
		    let matchedPage = false;
		    let externalDest = false;
		    let parsedAs = (0, _parserelativeurl.parseRelativeUrl)(asPath);
		    let fsPathname = (0, _removetrailingslash.removeTrailingSlash)((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(parsedAs.pathname), locales).pathname);
		    let resolvedHref;
		    const handleRewrite = (rewrite)=>{
		        const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (browser$1.env.__NEXT_TRAILING_SLASH ? "(/)?" : ""), {
		            removeUnnamedParams: true,
		            strict: true
		        });
		        let params = matcher(parsedAs.pathname);
		        if ((rewrite.has || rewrite.missing) && params) {
		            const hasParams = (0, _preparedestination.matchHas)({
		                headers: {
		                    host: document.location.hostname,
		                    "user-agent": navigator.userAgent
		                },
		                cookies: document.cookie.split("; ").reduce((acc, item)=>{
		                    const [key, ...value] = item.split("=");
		                    acc[key] = value.join("=");
		                    return acc;
		                }, {})
		            }, parsedAs.query, rewrite.has, rewrite.missing);
		            if (hasParams) {
		                Object.assign(params, hasParams);
		            } else {
		                params = false;
		            }
		        }
		        if (params) {
		            if (!rewrite.destination) {
		                // this is a proxied rewrite which isn't handled on the client
		                externalDest = true;
		                return true;
		            }
		            const destRes = (0, _preparedestination.prepareDestination)({
		                appendParamsToQuery: true,
		                destination: rewrite.destination,
		                params: params,
		                query: query
		            });
		            parsedAs = destRes.parsedDestination;
		            asPath = destRes.newUrl;
		            Object.assign(query, destRes.parsedDestination.query);
		            fsPathname = (0, _removetrailingslash.removeTrailingSlash)((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(asPath), locales).pathname);
		            if (pages.includes(fsPathname)) {
		                // check if we now match a page as this means we are done
		                // resolving the rewrites
		                matchedPage = true;
		                resolvedHref = fsPathname;
		                return true;
		            }
		            // check if we match a dynamic-route, if so we break the rewrites chain
		            resolvedHref = resolveHref(fsPathname);
		            if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
		                matchedPage = true;
		                return true;
		            }
		        }
		    };
		    let finished = false;
		    for(let i = 0; i < rewrites.beforeFiles.length; i++){
		        // we don't end after match in beforeFiles to allow
		        // continuing through all beforeFiles rewrites
		        handleRewrite(rewrites.beforeFiles[i]);
		    }
		    matchedPage = pages.includes(fsPathname);
		    if (!matchedPage) {
		        if (!finished) {
		            for(let i = 0; i < rewrites.afterFiles.length; i++){
		                if (handleRewrite(rewrites.afterFiles[i])) {
		                    finished = true;
		                    break;
		                }
		            }
		        }
		        // check dynamic route before processing fallback rewrites
		        if (!finished) {
		            resolvedHref = resolveHref(fsPathname);
		            matchedPage = pages.includes(resolvedHref);
		            finished = matchedPage;
		        }
		        if (!finished) {
		            for(let i = 0; i < rewrites.fallback.length; i++){
		                if (handleRewrite(rewrites.fallback[i])) {
		                    finished = true;
		                    break;
		                }
		            }
		        }
		    }
		    return {
		        asPath,
		        parsedAs,
		        matchedPage,
		        resolvedHref,
		        externalDest
		    };
		}

		
	} (resolveRewrites));
	return resolveRewrites;
}

var routeMatcher = {};

var hasRequiredRouteMatcher;

function requireRouteMatcher () {
	if (hasRequiredRouteMatcher) return routeMatcher;
	hasRequiredRouteMatcher = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getRouteMatcher", {
		    enumerable: true,
		    get: function() {
		        return getRouteMatcher;
		    }
		});
		const _utils = requireUtils();
		function getRouteMatcher(param) {
		    let { re, groups } = param;
		    return (pathname)=>{
		        const routeMatch = re.exec(pathname);
		        if (!routeMatch) {
		            return false;
		        }
		        const decode = (param)=>{
		            try {
		                return decodeURIComponent(param);
		            } catch (_) {
		                throw new _utils.DecodeError("failed to decode param");
		            }
		        };
		        const params = {};
		        Object.keys(groups).forEach((slugName)=>{
		            const g = groups[slugName];
		            const m = routeMatch[g.pos];
		            if (m !== undefined) {
		                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
		                    decode(m)
		                ] : decode(m);
		            }
		        });
		        return params;
		    };
		}

		
	} (routeMatcher));
	return routeMatcher;
}

var routeRegex = {};

var hasRequiredRouteRegex;

function requireRouteRegex () {
	if (hasRequiredRouteRegex) return routeRegex;
	hasRequiredRouteRegex = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getRouteRegex: function() {
		        return getRouteRegex;
		    },
		    getNamedRouteRegex: function() {
		        return getNamedRouteRegex;
		    },
		    getNamedMiddlewareRegex: function() {
		        return getNamedMiddlewareRegex;
		    }
		});
		const _interceptionroutes = requireInterceptionRoutes();
		const _escaperegexp = requireEscapeRegexp();
		const _removetrailingslash = requireRemoveTrailingSlash();
		const NEXT_QUERY_PARAM_PREFIX = "nxtP";
		const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
		/**
		 * Parses a given parameter from a route to a data structure that can be used
		 * to generate the parametrized route. Examples:
		 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
		 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
		 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
		 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
		 */ function parseParameter(param) {
		    const optional = param.startsWith("[") && param.endsWith("]");
		    if (optional) {
		        param = param.slice(1, -1);
		    }
		    const repeat = param.startsWith("...");
		    if (repeat) {
		        param = param.slice(3);
		    }
		    return {
		        key: param,
		        repeat,
		        optional
		    };
		}
		function getParametrizedRoute(route) {
		    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
		    const groups = {};
		    let groupIndex = 1;
		    return {
		        parameterizedRoute: segments.map((segment)=>{
		            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
		            ;
		            if (markerMatch && paramMatches) {
		                const { key, optional, repeat } = parseParameter(paramMatches[1]);
		                groups[key] = {
		                    pos: groupIndex++,
		                    repeat,
		                    optional
		                };
		                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
		            } else if (paramMatches) {
		                const { key, repeat, optional } = parseParameter(paramMatches[1]);
		                groups[key] = {
		                    pos: groupIndex++,
		                    repeat,
		                    optional
		                };
		                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
		            } else {
		                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
		            }
		        }).join(""),
		        groups
		    };
		}
		function getRouteRegex(normalizedRoute) {
		    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
		    return {
		        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
		        groups: groups
		    };
		}
		/**
		 * Builds a function to generate a minimal routeKey using only a-z and minimal
		 * number of characters.
		 */ function buildGetSafeRouteKey() {
		    let i = 0;
		    return ()=>{
		        let routeKey = "";
		        let j = ++i;
		        while(j > 0){
		            routeKey += String.fromCharCode(97 + (j - 1) % 26);
		            j = Math.floor((j - 1) / 26);
		        }
		        return routeKey;
		    };
		}
		function getSafeKeyFromSegment(param) {
		    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
		    const { key, optional, repeat } = parseParameter(segment);
		    // replace any non-word characters since they can break
		    // the named regex
		    let cleanedKey = key.replace(/\W/g, "");
		    if (keyPrefix) {
		        cleanedKey = "" + keyPrefix + cleanedKey;
		    }
		    let invalidKey = false;
		    // check if the key is still invalid and fallback to using a known
		    // safe key
		    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
		        invalidKey = true;
		    }
		    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
		        invalidKey = true;
		    }
		    if (invalidKey) {
		        cleanedKey = getSafeRouteKey();
		    }
		    if (keyPrefix) {
		        routeKeys[cleanedKey] = "" + keyPrefix + key;
		    } else {
		        routeKeys[cleanedKey] = key;
		    }
		    // if the segment has an interception marker, make sure that's part of the regex pattern
		    // this is to ensure that the route with the interception marker doesn't incorrectly match
		    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
		    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
		    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
		}
		function getNamedParametrizedRoute(route, prefixRouteKeys) {
		    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
		    const getSafeRouteKey = buildGetSafeRouteKey();
		    const routeKeys = {};
		    return {
		        namedParameterizedRoute: segments.map((segment)=>{
		            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
		            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
		            ;
		            if (hasInterceptionMarker && paramMatches) {
		                const [usedMarker] = segment.split(paramMatches[0]);
		                return getSafeKeyFromSegment({
		                    getSafeRouteKey,
		                    interceptionMarker: usedMarker,
		                    segment: paramMatches[1],
		                    routeKeys,
		                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
		                });
		            } else if (paramMatches) {
		                return getSafeKeyFromSegment({
		                    getSafeRouteKey,
		                    segment: paramMatches[1],
		                    routeKeys,
		                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
		                });
		            } else {
		                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
		            }
		        }).join(""),
		        routeKeys
		    };
		}
		function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
		    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
		    return {
		        ...getRouteRegex(normalizedRoute),
		        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
		        routeKeys: result.routeKeys
		    };
		}
		function getNamedMiddlewareRegex(normalizedRoute, options) {
		    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
		    const { catchAll = true } = options;
		    if (parameterizedRoute === "/") {
		        let catchAllRegex = catchAll ? ".*" : "";
		        return {
		            namedRegex: "^/" + catchAllRegex + "$"
		        };
		    }
		    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
		    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
		    return {
		        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
		    };
		}

		
	} (routeRegex));
	return routeRegex;
}

var formatUrl = {};

var hasRequiredFormatUrl;

function requireFormatUrl () {
	if (hasRequiredFormatUrl) return formatUrl;
	hasRequiredFormatUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    formatUrl: function() {
		        return formatUrl;
		    },
		    urlObjectKeys: function() {
		        return urlObjectKeys;
		    },
		    formatWithValidation: function() {
		        return formatWithValidation;
		    }
		});
		const _interop_require_wildcard = _interop_require_wildcard$1;
		const _querystring = /*#__PURE__*/ _interop_require_wildcard._(requireQuerystring());
		const slashedProtocols = /https?|ftp|gopher|file/;
		function formatUrl(urlObj) {
		    let { auth, hostname } = urlObj;
		    let protocol = urlObj.protocol || "";
		    let pathname = urlObj.pathname || "";
		    let hash = urlObj.hash || "";
		    let query = urlObj.query || "";
		    let host = false;
		    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
		    if (urlObj.host) {
		        host = auth + urlObj.host;
		    } else if (hostname) {
		        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
		        if (urlObj.port) {
		            host += ":" + urlObj.port;
		        }
		    }
		    if (query && typeof query === "object") {
		        query = String(_querystring.urlQueryToSearchParams(query));
		    }
		    let search = urlObj.search || query && "?" + query || "";
		    if (protocol && !protocol.endsWith(":")) protocol += ":";
		    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
		        host = "//" + (host || "");
		        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
		    } else if (!host) {
		        host = "";
		    }
		    if (hash && hash[0] !== "#") hash = "#" + hash;
		    if (search && search[0] !== "?") search = "?" + search;
		    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
		    search = search.replace("#", "%23");
		    return "" + protocol + host + pathname + search + hash;
		}
		const urlObjectKeys = [
		    "auth",
		    "hash",
		    "host",
		    "hostname",
		    "href",
		    "path",
		    "pathname",
		    "port",
		    "protocol",
		    "query",
		    "search",
		    "slashes"
		];
		function formatWithValidation(url) {
		    if (browser$1.env.NODE_ENV === "development") {
		        if (url !== null && typeof url === "object") {
		            Object.keys(url).forEach((key)=>{
		                if (!urlObjectKeys.includes(key)) {
		                    console.warn("Unknown key passed via urlObject into url.format: " + key);
		                }
		            });
		        }
		    }
		    return formatUrl(url);
		}

		
	} (formatUrl));
	return formatUrl;
}

var detectDomainLocale$1 = {exports: {}};

var detectDomainLocale = {};

var hasRequiredDetectDomainLocale$1;

function requireDetectDomainLocale$1 () {
	if (hasRequiredDetectDomainLocale$1) return detectDomainLocale;
	hasRequiredDetectDomainLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		function detectDomainLocale(domainItems, hostname, detectedLocale) {
		    if (!domainItems) return;
		    if (detectedLocale) {
		        detectedLocale = detectedLocale.toLowerCase();
		    }
		    for (const item of domainItems){
		        var _item_domain, _item_locales;
		        // remove port if present
		        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
		        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
		            return item;
		        }
		    }
		}

		
	} (detectDomainLocale));
	return detectDomainLocale;
}

var hasRequiredDetectDomainLocale;

function requireDetectDomainLocale () {
	if (hasRequiredDetectDomainLocale) return detectDomainLocale$1.exports;
	hasRequiredDetectDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		const detectDomainLocale = function() {
		    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		        args[_key] = arguments[_key];
		    }
		    if (browser$1.env.__NEXT_I18N_SUPPORT) {
		        return requireDetectDomainLocale$1().detectDomainLocale(...args);
		    }
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (detectDomainLocale$1, detectDomainLocale$1.exports));
	return detectDomainLocale$1.exports;
}

var addLocale$1 = {exports: {}};

var normalizeTrailingSlash = {exports: {}};

var hasRequiredNormalizeTrailingSlash;

function requireNormalizeTrailingSlash () {
	if (hasRequiredNormalizeTrailingSlash) return normalizeTrailingSlash.exports;
	hasRequiredNormalizeTrailingSlash = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizePathTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return normalizePathTrailingSlash;
		    }
		});
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _parsepath = requireParsePath();
		const normalizePathTrailingSlash = (path)=>{
		    if (!path.startsWith("/") || browser$1.env.__NEXT_MANUAL_TRAILING_SLASH) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    if (browser$1.env.__NEXT_TRAILING_SLASH) {
		        if (/\.[^/]+\/?$/.test(pathname)) {
		            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		        } else if (pathname.endsWith("/")) {
		            return "" + pathname + query + hash;
		        } else {
		            return pathname + "/" + query + hash;
		        }
		    }
		    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeTrailingSlash, normalizeTrailingSlash.exports));
	return normalizeTrailingSlash.exports;
}

var addLocale = {};

var addPathPrefix = {};

var hasRequiredAddPathPrefix;

function requireAddPathPrefix () {
	if (hasRequiredAddPathPrefix) return addPathPrefix;
	hasRequiredAddPathPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addPathPrefix", {
		    enumerable: true,
		    get: function() {
		        return addPathPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function addPathPrefix(path, prefix) {
		    if (!path.startsWith("/") || !prefix) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    return "" + prefix + pathname + query + hash;
		}

		
	} (addPathPrefix));
	return addPathPrefix;
}

var hasRequiredAddLocale$1;

function requireAddLocale$1 () {
	if (hasRequiredAddLocale$1) return addLocale;
	hasRequiredAddLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _pathhasprefix = requirePathHasPrefix();
		function addLocale(path, locale, defaultLocale, ignorePrefix) {
		    // If no locale was given or the locale is the default locale, we don't need
		    // to prefix the path.
		    if (!locale || locale === defaultLocale) return path;
		    const lower = path.toLowerCase();
		    // If the path is an API path or the path already has the locale prefix, we
		    // don't need to prefix the path.
		    if (!ignorePrefix) {
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
		    }
		    // Add the locale prefix to the path.
		    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
		}

		
	} (addLocale));
	return addLocale;
}

var hasRequiredAddLocale;

function requireAddLocale () {
	if (hasRequiredAddLocale) return addLocale$1.exports;
	hasRequiredAddLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const addLocale = function(path) {
		    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        args[_key - 1] = arguments[_key];
		    }
		    if (browser$1.env.__NEXT_I18N_SUPPORT) {
		        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(requireAddLocale$1().addLocale(path, ...args));
		    }
		    return path;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addLocale$1, addLocale$1.exports));
	return addLocale$1.exports;
}

var removeLocale = {exports: {}};

var hasRequiredRemoveLocale;

function requireRemoveLocale () {
	if (hasRequiredRemoveLocale) return removeLocale.exports;
	hasRequiredRemoveLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removeLocale", {
		    enumerable: true,
		    get: function() {
		        return removeLocale;
		    }
		});
		const _parsepath = requireParsePath();
		function removeLocale(path, locale) {
		    if (browser$1.env.__NEXT_I18N_SUPPORT) {
		        const { pathname } = (0, _parsepath.parsePath)(path);
		        const pathLower = pathname.toLowerCase();
		        const localeLower = locale == null ? void 0 : locale.toLowerCase();
		        return locale && (pathLower.startsWith("/" + localeLower + "/") || pathLower === "/" + localeLower) ? "" + (pathname.length === locale.length + 1 ? "/" : "") + path.slice(locale.length + 1) : path;
		    }
		    return path;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (removeLocale, removeLocale.exports));
	return removeLocale.exports;
}

var addBasePath = {exports: {}};

var hasRequiredAddBasePath;

function requireAddBasePath () {
	if (hasRequiredAddBasePath) return addBasePath.exports;
	hasRequiredAddBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addBasePath", {
		    enumerable: true,
		    get: function() {
		        return addBasePath;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const basePath = browser$1.env.__NEXT_ROUTER_BASEPATH || "";
		function addBasePath(path, required) {
		    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(browser$1.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addBasePath, addBasePath.exports));
	return addBasePath.exports;
}

var resolveHref = {exports: {}};

var omit = {};

var hasRequiredOmit;

function requireOmit () {
	if (hasRequiredOmit) return omit;
	hasRequiredOmit = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "omit", {
		    enumerable: true,
		    get: function() {
		        return omit;
		    }
		});
		function omit(object, keys) {
		    const omitted = {};
		    Object.keys(object).forEach((key)=>{
		        if (!keys.includes(key)) {
		            omitted[key] = object[key];
		        }
		    });
		    return omitted;
		}

		
	} (omit));
	return omit;
}

var isLocalUrl = {};

var hasRequiredIsLocalUrl;

function requireIsLocalUrl () {
	if (hasRequiredIsLocalUrl) return isLocalUrl;
	hasRequiredIsLocalUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isLocalURL", {
		    enumerable: true,
		    get: function() {
		        return isLocalURL;
		    }
		});
		const _utils = requireUtils();
		const _hasbasepath = requireHasBasePath();
		function isLocalURL(url) {
		    // prevent a hydration mismatch on href for url with anchor refs
		    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
		    try {
		        // absolute urls can be local if they are on the same origin
		        const locationOrigin = (0, _utils.getLocationOrigin)();
		        const resolved = new URL(url, locationOrigin);
		        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
		    } catch (_) {
		        return false;
		    }
		}

		
	} (isLocalUrl));
	return isLocalUrl;
}

var interpolateAs = {};

var hasRequiredInterpolateAs;

function requireInterpolateAs () {
	if (hasRequiredInterpolateAs) return interpolateAs;
	hasRequiredInterpolateAs = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "interpolateAs", {
		    enumerable: true,
		    get: function() {
		        return interpolateAs;
		    }
		});
		const _routematcher = requireRouteMatcher();
		const _routeregex = requireRouteRegex();
		function interpolateAs(route, asPathname, query) {
		    let interpolatedRoute = "";
		    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
		    const dynamicGroups = dynamicRegex.groups;
		    const dynamicMatches = // Try to match the dynamic route against the asPath
		    (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
		    // TODO: should this take priority; also need to change in the router.
		    query;
		    interpolatedRoute = route;
		    const params = Object.keys(dynamicGroups);
		    if (!params.every((param)=>{
		        let value = dynamicMatches[param] || "";
		        const { repeat, optional } = dynamicGroups[param];
		        // support single-level catch-all
		        // TODO: more robust handling for user-error (passing `/`)
		        let replaced = "[" + (repeat ? "..." : "") + param + "]";
		        if (optional) {
		            replaced = (!value ? "/" : "") + "[" + replaced + "]";
		        }
		        if (repeat && !Array.isArray(value)) value = [
		            value
		        ];
		        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
		        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// these values should be fully encoded instead of just
		        // path delimiter escaped since they are being inserted
		        // into the URL and we expect URL encoded segments
		        // when parsing dynamic route params
		        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
		    })) {
		        interpolatedRoute = "" // did not satisfy all requirements
		        ;
		    // n.b. We ignore this error because we handle warning for this case in
		    // development in the `<Link>` component directly.
		    }
		    return {
		        params,
		        result: interpolatedRoute
		    };
		}

		
	} (interpolateAs));
	return interpolateAs;
}

var hasRequiredResolveHref;

function requireResolveHref () {
	if (hasRequiredResolveHref) return resolveHref.exports;
	hasRequiredResolveHref = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "resolveHref", {
		    enumerable: true,
		    get: function() {
		        return resolveHref;
		    }
		});
		const _querystring = requireQuerystring();
		const _formaturl = requireFormatUrl();
		const _omit = requireOmit();
		const _utils = requireUtils();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const _islocalurl = requireIsLocalUrl();
		const _utils1 = requireUtils$1();
		const _interpolateas = requireInterpolateAs();
		function resolveHref(router, href, resolveAs) {
		    // we use a dummy base url for relative urls
		    let base;
		    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
		    // repeated slashes and backslashes in the URL are considered
		    // invalid and will never match a Next.js page/file
		    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
		    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
		    const urlParts = urlAsStringNoProto.split("?", 1);
		    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
		        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
		        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
		        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
		    }
		    // Return because it cannot be routed by the Next.js router
		    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		    try {
		        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
		    } catch (_) {
		        // fallback to / for invalid asPath values e.g. //
		        base = new URL("/", "http://n");
		    }
		    try {
		        const finalUrl = new URL(urlAsString, base);
		        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
		        let interpolatedAs = "";
		        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
		            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
		            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
		            if (result) {
		                interpolatedAs = (0, _formaturl.formatWithValidation)({
		                    pathname: result,
		                    hash: finalUrl.hash,
		                    query: (0, _omit.omit)(query, params)
		                });
		            }
		        }
		        // if the origin didn't change, it means we received a relative href
		        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
		        return resolveAs ? [
		            resolvedHref,
		            interpolatedAs || resolvedHref
		        ] : resolvedHref;
		    } catch (_) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (resolveHref, resolveHref.exports));
	return resolveHref.exports;
}

var isApiRoute = {};

var hasRequiredIsApiRoute;

function requireIsApiRoute () {
	if (hasRequiredIsApiRoute) return isApiRoute;
	hasRequiredIsApiRoute = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isAPIRoute", {
		    enumerable: true,
		    get: function() {
		        return isAPIRoute;
		    }
		});
		function isAPIRoute(value) {
		    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
		}

		
	} (isApiRoute));
	return isApiRoute;
}

var getNextPathnameInfo = {};

var removePathPrefix = {};

var hasRequiredRemovePathPrefix;

function requireRemovePathPrefix () {
	if (hasRequiredRemovePathPrefix) return removePathPrefix;
	hasRequiredRemovePathPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removePathPrefix", {
		    enumerable: true,
		    get: function() {
		        return removePathPrefix;
		    }
		});
		const _pathhasprefix = requirePathHasPrefix();
		function removePathPrefix(path, prefix) {
		    // If the path doesn't start with the prefix we can return it as is. This
		    // protects us from situations where the prefix is a substring of the path
		    // prefix such as:
		    //
		    // For prefix: /blog
		    //
		    //   /blog -> true
		    //   /blog/ -> true
		    //   /blog/1 -> true
		    //   /blogging -> false
		    //   /blogging/ -> false
		    //   /blogging/1 -> false
		    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
		        return path;
		    }
		    // Remove the prefix from the path via slicing.
		    const withoutPrefix = path.slice(prefix.length);
		    // If the path without the prefix starts with a `/` we can return it as is.
		    if (withoutPrefix.startsWith("/")) {
		        return withoutPrefix;
		    }
		    // If the path without the prefix doesn't start with a `/` we need to add it
		    // back to the path to make sure it's a valid path.
		    return "/" + withoutPrefix;
		}

		
	} (removePathPrefix));
	return removePathPrefix;
}

var hasRequiredGetNextPathnameInfo;

function requireGetNextPathnameInfo () {
	if (hasRequiredGetNextPathnameInfo) return getNextPathnameInfo;
	hasRequiredGetNextPathnameInfo = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getNextPathnameInfo", {
		    enumerable: true,
		    get: function() {
		        return getNextPathnameInfo;
		    }
		});
		const _normalizelocalepath = requireNormalizeLocalePath();
		const _removepathprefix = requireRemovePathPrefix();
		const _pathhasprefix = requirePathHasPrefix();
		function getNextPathnameInfo(pathname, options) {
		    var _options_nextConfig;
		    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
		    const info = {
		        pathname,
		        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
		    };
		    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
		        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
		        info.basePath = basePath;
		    }
		    let pathnameNoDataPrefix = info.pathname;
		    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
		        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
		        const buildId = paths[0];
		        info.buildId = buildId;
		        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
		        // update pathname with normalized if enabled although
		        // we use normalized to populate locale info still
		        if (options.parseData === true) {
		            info.pathname = pathnameNoDataPrefix;
		        }
		    }
		    // If provided, use the locale route normalizer to detect the locale instead
		    // of the function below.
		    if (i18n) {
		        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
		        info.locale = result.detectedLocale;
		        var _result_pathname;
		        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
		        if (!result.detectedLocale && info.buildId) {
		            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
		            if (result.detectedLocale) {
		                info.locale = result.detectedLocale;
		            }
		        }
		    }
		    return info;
		}

		
	} (getNextPathnameInfo));
	return getNextPathnameInfo;
}

var formatNextPathnameInfo = {};

var addPathSuffix = {};

var hasRequiredAddPathSuffix;

function requireAddPathSuffix () {
	if (hasRequiredAddPathSuffix) return addPathSuffix;
	hasRequiredAddPathSuffix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addPathSuffix", {
		    enumerable: true,
		    get: function() {
		        return addPathSuffix;
		    }
		});
		const _parsepath = requireParsePath();
		function addPathSuffix(path, suffix) {
		    if (!path.startsWith("/") || !suffix) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    return "" + pathname + suffix + query + hash;
		}

		
	} (addPathSuffix));
	return addPathSuffix;
}

var hasRequiredFormatNextPathnameInfo;

function requireFormatNextPathnameInfo () {
	if (hasRequiredFormatNextPathnameInfo) return formatNextPathnameInfo;
	hasRequiredFormatNextPathnameInfo = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "formatNextPathnameInfo", {
		    enumerable: true,
		    get: function() {
		        return formatNextPathnameInfo;
		    }
		});
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _addpathprefix = requireAddPathPrefix();
		const _addpathsuffix = requireAddPathSuffix();
		const _addlocale = requireAddLocale$1();
		function formatNextPathnameInfo(info) {
		    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
		    if (info.buildId || !info.trailingSlash) {
		        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
		    }
		    if (info.buildId) {
		        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
		    }
		    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
		    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
		}

		
	} (formatNextPathnameInfo));
	return formatNextPathnameInfo;
}

var compareStates = {};

var hasRequiredCompareStates;

function requireCompareStates () {
	if (hasRequiredCompareStates) return compareStates;
	hasRequiredCompareStates = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "compareRouterStates", {
		    enumerable: true,
		    get: function() {
		        return compareRouterStates;
		    }
		});
		function compareRouterStates(a, b) {
		    const stateKeys = Object.keys(a);
		    if (stateKeys.length !== Object.keys(b).length) return false;
		    for(let i = stateKeys.length; i--;){
		        const key = stateKeys[i];
		        if (key === "query") {
		            const queryKeys = Object.keys(a.query);
		            if (queryKeys.length !== Object.keys(b.query).length) {
		                return false;
		            }
		            for(let j = queryKeys.length; j--;){
		                const queryKey = queryKeys[j];
		                if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
		                    return false;
		                }
		            }
		        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
		            return false;
		        }
		    }
		    return true;
		}

		
	} (compareStates));
	return compareStates;
}

var isBot = {};

var hasRequiredIsBot;

function requireIsBot () {
	if (hasRequiredIsBot) return isBot;
	hasRequiredIsBot = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isBot", {
		    enumerable: true,
		    get: function() {
		        return isBot;
		    }
		});
		function isBot(userAgent) {
		    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
		}

		
	} (isBot));
	return isBot;
}

var handleSmoothScroll = {};

/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */

var hasRequiredHandleSmoothScroll;

function requireHandleSmoothScroll () {
	if (hasRequiredHandleSmoothScroll) return handleSmoothScroll;
	hasRequiredHandleSmoothScroll = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "handleSmoothScroll", {
		    enumerable: true,
		    get: function() {
		        return handleSmoothScroll;
		    }
		});
		function handleSmoothScroll(fn, options) {
		    if (options === void 0) options = {};
		    // if only the hash is changed, we don't need to disable smooth scrolling
		    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
		    if (options.onlyHashChange) {
		        fn();
		        return;
		    }
		    const htmlElement = document.documentElement;
		    const existing = htmlElement.style.scrollBehavior;
		    htmlElement.style.scrollBehavior = "auto";
		    if (!options.dontForceLayout) {
		        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
		        // Otherwise it will not pickup the change in scrollBehavior
		        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
		        htmlElement.getClientRects();
		    }
		    fn();
		    htmlElement.style.scrollBehavior = existing;
		}

		
	} (handleSmoothScroll));
	return handleSmoothScroll;
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (browser$1.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (browser$1.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

var bloomFilter = {};

var __dirname$1 = '/Users\BangAndroid\Documents\Eollluga_modules\modules-fe\node_modules\next\dist\compiled\gzip-size';

var gzipSize = {exports: {}};

var empty = {};

var empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: empty
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(empty$1);

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount$1.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount$1;
function listenerCount$1(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return Buffer.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = Buffer.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     };


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
function StringDecoder(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
}

// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable.ReadableState = ReadableState;

var debug = debuglog('stream');
inherits$1(Readable, EventEmitter);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount (emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  EventEmitter.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false);

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = EventEmitter.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

Writable.WritableState = WritableState;
inherits$1(Writable, EventEmitter);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};
function Writable(options) {

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  EventEmitter.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  nextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) nextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
        nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex, Readable);

var keys = Object.keys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

inherits$1(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

inherits$1(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream, EventEmitter);
Stream.Readable = Readable;
Stream.Writable = Writable;
Stream.Duplex = Duplex;
Stream.Transform = Transform;
Stream.PassThrough = PassThrough;

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EventEmitter.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EventEmitter.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

var stream = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Duplex: Duplex,
    PassThrough: PassThrough,
    Readable: Readable,
    Stream: Stream,
    Transform: Transform,
    Writable: Writable,
    default: Stream
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(stream);

var msg = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

function arraySet(dest, src, src_offs, len, dest_offs) {
  if (src.subarray && dest.subarray) {
    dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
    return;
  }
  // Fallback to ordinary array
  for (var i = 0; i < len; i++) {
    dest[dest_offs + i] = src[src_offs + i];
  }
}


var Buf8 = Uint8Array;
var Buf16 = Uint16Array;
var Buf32 = Int32Array;
// Enable/Disable typed arrays use, for testing
//

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED$2 = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY$1 = 0;
var Z_TEXT$1 = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN$2 = 2;

/*============================================================================*/


function zero$1(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
/* The three kinds of block type */

var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS$1 = 256;
/* number of literal bytes 0..255 */

var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES$1 = 30;
/* number of distance codes */

var BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */

var MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK = 256;
/* end of block literal code */

var REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits = /* extra bits for each length code */ [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];

var extra_dbits = /* extra bits for each distance code */ [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];

var extra_blbits = /* extra bits for each bit length code */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];

var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree = static_tree; /* static tree or NULL */
  this.extra_bits = extra_bits; /* extra bits for each code or NULL */
  this.extra_base = extra_base; /* base index for extra_bits */
  this.elems = elems; /* max number of elements in the tree */
  this.max_length = max_length; /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree; /* the dynamic tree */
  this.max_code = 0; /* largest code with non zero frequency */
  this.stat_desc = stat_desc; /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
  //    put_byte(s, (uch)((w) & 0xff));
  //    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2] /*.Code*/ , tree[c * 2 + 1] /*.Len*/ );
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc) {
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
  var tree = desc.dyn_tree;
  var max_code = desc.max_code;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var extra = desc.stat_desc.extra_bits;
  var base = desc.stat_desc.extra_base;
  var max_length = desc.stat_desc.max_length;
  var h; /* heap index */
  var n, m; /* iterate over the tree elements */
  var bits; /* bit length */
  var xbits; /* extra bits */
  var f; /* frequency */
  var overflow = 0; /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1] /*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] /*.Dad*/ * 2 + 1] /*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] /*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) {
      continue;
    } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2] /*.Freq*/ ;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] /*.Len*/ + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--; /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] /*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1] /*.Len*/ ) * tree[m * 2] /*.Freq*/ ;
        tree[m * 2 + 1] /*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count) {
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */

  var next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  var code = 0; /* running code value */
  var bits; /* bit index */
  var n; /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0; n <= max_code; n++) {
    var len = tree[n * 2 + 1] /*.Len*/ ;
    if (len === 0) {
      continue;
    }
    /* Now reverse the bits */
    tree[n * 2] /*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n; /* iterates over tree elements */
  var bits; /* bit counter */
  var length; /* length value */
  var code; /* code value */
  var dist; /* distance index */
  var bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
  /*#ifdef NO_INIT_GLOBAL_POINTERS
    static_l_desc.static_tree = static_ltree;
    static_l_desc.extra_bits = extra_lbits;
    static_d_desc.static_tree = static_dtree;
    static_d_desc.extra_bits = extra_dbits;
    static_bl_desc.extra_bits = extra_blbits;
  #endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] /*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] /*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] /*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] /*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1] /*.Len*/ = 5;
    static_dtree[n * 2] /*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1; n++) {
    s.dyn_ltree[n * 2] /*.Freq*/ = 0;
  }
  for (n = 0; n < D_CODES$1; n++) {
    s.dyn_dtree[n * 2] /*.Freq*/ = 0;
  }
  for (n = 0; n < BL_CODES$1; n++) {
    s.bl_tree[n * 2] /*.Freq*/ = 0;
  }

  s.dyn_ltree[END_BLOCK * 2] /*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s) {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header) {
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */

  bi_windup(s); /* align on byte boundary */

  {
    put_short(s, len);
    put_short(s, ~len);
  }
  //  while (len--) {
  //    put_byte(s, *buf++);
  //  }
  arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2] /*.Freq*/ < tree[_m2] /*.Freq*/ ||
    (tree[_n2] /*.Freq*/ === tree[_m2] /*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1; /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist; /* distance of matched string */
  var lc; /* match length or unmatched char (if dist == 0) */
  var lx = 0; /* running index in l_buf */
  var code; /* the code to send */
  var extra; /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra); /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree); /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra); /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree = desc.dyn_tree;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems = desc.stat_desc.elems;
  var n, m; /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node; /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2] /*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1] /*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2] /*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1 /*int /2*/ ); n >= 1; n--) {
    pqdownheap(s, tree, n);
  }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems; /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1 /*SMALLEST*/ ];
    s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1 /*SMALLEST*/ );
    /***/

    m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2] /*.Freq*/ = tree[n * 2] /*.Freq*/ + tree[m * 2] /*.Freq*/ ;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] /*.Dad*/ = tree[m * 2 + 1] /*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1 /*SMALLEST*/ ] = node++;
    pqdownheap(s, tree, 1 /*SMALLEST*/ );

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n; /* iterates over all tree elements */
  var prevlen = -1; /* last emitted length */
  var curlen; /* length of current code */

  var nextlen = tree[0 * 2 + 1] /*.Len*/ ; /* length of next code */

  var count = 0; /* repeat count of the current code */
  var max_count = 7; /* max repeat count */
  var min_count = 4; /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] /*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2] /*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2] /*.Freq*/ ++;
      }
      s.bl_tree[REP_3_6 * 2] /*.Freq*/ ++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2] /*.Freq*/ ++;

    } else {
      s.bl_tree[REPZ_11_138 * 2] /*.Freq*/ ++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n; /* iterates over all tree elements */
  var prevlen = -1; /* last emitted length */
  var curlen; /* length of current code */

  var nextlen = tree[0 * 2 + 1] /*.Len*/ ; /* length of next code */

  var count = 0; /* repeat count of the current code */
  var max_count = 7; /* max repeat count */
  var min_count = 4; /* min repeat count */

  /* tree[max_code+1].Len = -1; */
  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex; /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] /*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank; /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1] /*.Len*/ , 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2] /*.Freq*/ !== 0)) {
      return Z_BINARY$1;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[10 * 2] /*.Freq*/ !== 0 ||
    s.dyn_ltree[13 * 2] /*.Freq*/ !== 0) {
    return Z_TEXT$1;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
      return Z_TEXT$1;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY$1;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s) {

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */
  copy_block(s, buf, stored_len); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb; /* opt_len and static_len in bytes */
  var max_blindex = 0; /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$2) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$2 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2] = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2] /*.Freq*/ ++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--; /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2] /*.Freq*/ ++;
    s.dyn_dtree[d_code(dist) * 2] /*.Freq*/ ++;
  }

  // (!) This block is disabled in zlib defailts,
  // don't enable it for binary compatibility

  //#ifdef TRUNCATE_BLOCK
  //  /* Try to guess if it is profitable to stop the current block here */
  //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
  //    /* Compute an upper bound for the compressed length */
  //    out_length = s.last_lit*8;
  //    in_length = s.strstart - s.block_start;
  //
  //    for (dcode = 0; dcode < D_CODES; dcode++) {
  //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
  //    }
  //    out_length >>>= 3;
  //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
  //    //       s->last_lit, in_length, out_length,
  //    //       100L - out_length*100L/in_length));
  //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
  //      return true;
  //    }
  //  }
  //#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.


// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH$1 = 0;
var Z_PARTIAL_FLUSH$1 = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH$1 = 3;
var Z_FINISH$2 = 4;
var Z_BLOCK$2 = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK$2 = 0;
var Z_STREAM_END$2 = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR$2 = -2;
var Z_DATA_ERROR$2 = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR$2 = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION$1 = -1;


var Z_FILTERED$1 = 1;
var Z_HUFFMAN_ONLY$1 = 2;
var Z_RLE$1 = 3;
var Z_FIXED$1 = 4;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN$1 = 2;


/* The deflate compression method */
var Z_DEFLATED$2 = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;


var LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS = 256;
/* number of literal bytes 0..255 */
var L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES = 30;
/* number of distance codes */
var BL_CODES = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }

  arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
  //  put_byte(s, (Byte)(b >> 8));
  //  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length; /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match; /* matched string */
  var len; /* length of current match */
  var best_len = s.prev_length; /* best match length so far */
  var nice_match = s.nice_match; /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
    s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1 = _win[scan + best_len - 1];
  var scan_end = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len] !== scan_end ||
      _win[match + best_len - 1] !== scan_end1 ||
      _win[match] !== _win[scan] ||
      _win[++match] !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
      _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
      _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
      _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
      scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
      //#if MIN_MATCH != 3
      //        Call update_hash() MIN_MATCH-3 more times
      //#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
  //  if (s.high_water < s.window_size) {
  //    var curr = s.strstart + s.lookahead;
  //    var init = 0;
  //
  //    if (s.high_water < curr) {
  //      /* Previous high water mark below current data -- zero WIN_INIT
  //       * bytes or up to end of window, whichever is less.
  //       */
  //      init = s.window_size - curr;
  //      if (init > WIN_INIT)
  //        init = WIN_INIT;
  //      zmemzero(s->window + curr, (unsigned)init);
  //      s->high_water = curr + init;
  //    }
  //    else if (s->high_water < (ulg)curr + WIN_INIT) {
  //      /* High water mark at or above current data, but below current data
  //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
  //       * to end of window, whichever is less.
  //       */
  //      init = (ulg)curr + WIN_INIT - s->high_water;
  //      if (init > s->window_size - s->high_water)
  //        init = s->window_size - s->high_water;
  //      zmemzero(s->window + s->high_water, (unsigned)init);
  //      s->high_water += init;
  //    }
  //  }
  //
  //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
  //    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
      //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
      //        s.block_start >= s.w_size)) {
      //        throw  new Error("slide too late");
      //      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
    //    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH$2) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head; /* head of the hash chain */
  var bflush; /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0 /*NIL*/ ;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0 /*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match /*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

        //#if MIN_MATCH != 3
        //                Call UPDATE_HASH() MIN_MATCH-3 more times
        //#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$2) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head; /* head of hash chain */
  var bflush; /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0 /*NIL*/ ;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0 /*NIL*/ && s.prev_length < s.max_lazy_match &&
      s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD) /*MAX_DIST(s)*/ ) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
        (s.strategy === Z_FILTERED$1 || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ ))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$2) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush; /* set if current block must be flushed */
  var prev; /* byte at distance one to match */
  var scan, strend; /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
          prev === _win[++scan] && prev === _win[++scan] &&
          prev === _win[++scan] && prev === _win[++scan] &&
          prev === _win[++scan] && prev === _win[++scan] &&
          scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$2) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush; /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$1) {
          return BS_NEED_MORE;
        }
        break; /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$2) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored), /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast), /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast), /* 2 */
  new Config(4, 6, 32, 32, deflate_fast), /* 3 */

  new Config(4, 4, 16, 16, deflate_slow), /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow), /* 5 */
  new Config(8, 16, 128, 128, deflate_slow), /* 6 */
  new Config(8, 32, 128, 256, deflate_slow), /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow), /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow) /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null; /* pointer back to this zlib stream */
  this.status = 0; /* as the name implies */
  this.pending_buf = null; /* output still pending */
  this.pending_buf_size = 0; /* size of pending_buf */
  this.pending_out = 0; /* next pending byte to output to the stream */
  this.pending = 0; /* nb of bytes in the pending buffer */
  this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null; /* gzip header information to write */
  this.gzindex = 0; /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1; /* value of flush param for previous deflate call */

  this.w_size = 0; /* LZ77 window size (32K by default) */
  this.w_bits = 0; /* log2(w_size)  (8..16) */
  this.w_mask = 0; /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null; /* Heads of the hash chains or NIL. */

  this.ins_h = 0; /* hash index of string to be inserted */
  this.hash_size = 0; /* number of elements in hash table */
  this.hash_bits = 0; /* log2(hash_size) */
  this.hash_mask = 0; /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0; /* length of best match */
  this.prev_match = 0; /* previous match */
  this.match_available = 0; /* set if previous match exists */
  this.strstart = 0; /* start of string to insert */
  this.match_start = 0; /* start of matching string */
  this.lookahead = 0; /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0; /* compression level (1..9) */
  this.strategy = 0; /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

  /* used by c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree = new Buf16(HEAP_SIZE * 2);
  this.dyn_dtree = new Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree = new Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc = null; /* desc. for literal tree */
  this.d_desc = null; /* desc. for distance tree */
  this.bl_desc = null; /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Buf16(2 * L_CODES + 1); /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0; /* number of elements in the heap */
  this.heap_max = 0; /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all
   */

  this.depth = new Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0; /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0; /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0; /* bit length of current block with optimal trees */
  this.static_len = 0; /* bit length of current block with static trees */
  this.matches = 0; /* number of string matches in current block */
  this.insert = 0; /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN$1;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0 // crc32(0, Z_NULL, 0)
    :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH$1;
  _tr_init(s);
  return Z_OK$2;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK$2) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2; /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED$1) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Buf8(s.w_size * 2);
  s.head = new Buf16(s.hash_size);
  s.prev = new Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}


function deflate$1(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK$2 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  s = strm.state;

  if (!strm.output ||
    (!strm.input && strm.avail_in !== 0) ||
    (s.status === FINISH_STATE && flush !== Z_FINISH$2)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$2 : Z_STREAM_ERROR$2);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {
    if (s.wrap === 2) {
      // GZIP header
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
          (s.strategy >= Z_HUFFMAN_ONLY$1 || s.level < 2 ?
            4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      } else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
          (s.gzhead.hcrc ? 2 : 0) +
          (!s.gzhead.extra ? 0 : 4) +
          (!s.gzhead.name ? 0 : 8) +
          (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
          (s.strategy >= Z_HUFFMAN_ONLY$1 || s.level < 2 ?
            4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    } else // DEFLATE header
    {
      var header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY$1 || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

  //#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra /* != Z_NULL*/ ) {
      beg = s.pending; /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    } else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name /* != Z_NULL*/ ) {
      beg = s.pending; /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    } else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment /* != Z_NULL*/ ) {
      beg = s.pending; /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    } else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    } else {
      s.status = BUSY_STATE;
    }
  }
  //#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$2;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$2) {
    return err(strm, Z_BUF_ERROR$2);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$2);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$1 && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY$1) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE$1 ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$2;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH$1) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK$2) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/
          /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$2;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH$2) {
    return Z_OK$2;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END$2;
  }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$2 : Z_STREAM_END$2;
}

function deflateEnd(strm) {
  var status;

  if (!strm /*== Z_NULL*/ || !strm.state /*== Z_NULL*/ ) {
    return Z_STREAM_ERROR$2;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$2;
}

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

// See state defs from inflate.js
var BAD$1 = 30;       /* got a data error -- remain here until reset */
var TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
}

var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
  var bits = opts.bits;
  //here = opts.here; /* table entry for duplication */

  var len = 0; /* a code's length in bits */
  var sym = 0; /* index of code symbols */
  var min = 0,
    max = 0; /* minimum and maximum code lengths */
  var root = 0; /* number of index bits for root table */
  var curr = 0; /* number of index bits for current table */
  var drop = 0; /* code bits to drop for sub-table */
  var left = 0; /* number of prefix codes available */
  var used = 0; /* code entries in table used */
  var huff = 0; /* Huffman code */
  var incr; /* for incrementing code, index */
  var fill; /* index for replicating entries */
  var low; /* low bits for current root entry */
  var mask; /* mask for low root bits */
  var next; /* next available space in table */
  var base = null; /* base value table to use */
  var base_index = 0;
  //  var shoextra;    /* extra bits table to use */
  var end; /* use base and extra for symbol > end */
  var count = new Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) { /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0; /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    } /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1; /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work; /* dummy value--not used */
    end = 19;

  } else if (type === LENS$1) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else { /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0; /* starting code */
  sym = 0; /* starting code symbol */
  len = min; /* starting code length */
  next = table_index; /* current table to fill in */
  curr = root; /* current table index bits */
  drop = 0; /* current bits to drop from code for index */
  low = -1; /* trigger new sub-table when len > root */
  used = 1 << root; /* use root table entries */
  mask = used - 1; /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }
  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    } else {
      here_op = 32 + 64; /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill; /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val | 0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min; /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) | 0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) | 0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
}

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH$1 = 4;
var Z_BLOCK$1 = 5;
var Z_TREES$1 = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK$1 = 0;
var Z_STREAM_END$1 = 1;
var Z_NEED_DICT$1 = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR$1 = -2;
var Z_DATA_ERROR$1 = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR$1 = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED$1 = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var HEAD = 1; /* i: waiting for magic header */
var FLAGS = 2; /* i: waiting for method and flags (gzip) */
var TIME = 3; /* i: waiting for modification time (gzip) */
var OS = 4; /* i: waiting for extra flags and operating system (gzip) */
var EXLEN = 5; /* i: waiting for extra length (gzip) */
var EXTRA = 6; /* i: waiting for extra bytes (gzip) */
var NAME = 7; /* i: waiting for end of file name (gzip) */
var COMMENT = 8; /* i: waiting for end of comment (gzip) */
var HCRC = 9; /* i: waiting for header crc (gzip) */
var DICTID = 10; /* i: waiting for dictionary check value */
var DICT = 11; /* waiting for inflateSetDictionary() call */
var TYPE = 12; /* i: waiting for type bits, including last-flag bit */
var TYPEDO = 13; /* i: same, but skip check to exit inflate on new block */
var STORED = 14; /* i: waiting for stored size (length and complement) */
var COPY_ = 15; /* i/o: same as COPY below, but only first time in */
var COPY = 16; /* i/o: waiting for input or output to copy stored block */
var TABLE = 17; /* i: waiting for dynamic block table lengths */
var LENLENS = 18; /* i: waiting for code length code lengths */
var CODELENS = 19; /* i: waiting for length/lit and distance code lengths */
var LEN_ = 20; /* i: same as LEN below, but only first time in */
var LEN = 21; /* i: waiting for length/lit/eob code */
var LENEXT = 22; /* i: waiting for length extra bits */
var DIST = 23; /* i: waiting for distance code */
var DISTEXT = 24; /* i: waiting for distance extra bits */
var MATCH = 25; /* o: waiting for output space to copy string */
var LIT = 26; /* o: waiting for output space to write literal */
var CHECK = 27; /* i: waiting for 32-bit check value */
var LENGTH = 28; /* i: waiting for 32-bit length (gzip) */
var DONE = 29; /* finished check, done -- remain here until reset */
var BAD = 30; /* got a data error -- remain here until reset */
var MEM = 31; /* got an inflate() memory error -- remain here until reset */
var SYNC = 32; /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;


function zswap32(q) {
  return (((q >>> 24) & 0xff) +
    ((q >>> 8) & 0xff00) +
    ((q & 0xff00) << 8) +
    ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0; /* current inflate mode */
  this.last = false; /* true if processing last block */
  this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false; /* true if dictionary provided */
  this.flags = 0; /* gzip header method and flags (0 if zlib) */
  this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0; /* protected copy of check value */
  this.total = 0; /* protected copy of output count */
  // TODO: may be {}
  this.head = null; /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0; /* log base 2 of requested window size */
  this.wsize = 0; /* window size or zero if not using window */
  this.whave = 0; /* valid bytes in the window */
  this.wnext = 0; /* window write index */
  this.window = null; /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0; /* input bit accumulator */
  this.bits = 0; /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0; /* literal or length of data to copy */
  this.offset = 0; /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0; /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null; /* starting table for length/literal codes */
  this.distcode = null; /* starting table for distance codes */
  this.lenbits = 0; /* index bits for lencode */
  this.distbits = 0; /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0; /* number of code length code lengths */
  this.nlen = 0; /* number of length code lengths */
  this.ndist = 0; /* number of distance code lengths */
  this.have = 0; /* number of code lengths in lens[] */
  this.next = null; /* next available space in codes[] */

  this.lens = new Buf16(320); /* temporary storage for code lengths */
  this.work = new Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null; /* dynamic table for distance codes (JS specific) */
  this.sane = 0; /* if false, allow invalid distance too far */
  this.back = 0; /* bits back of last unprocessed length/lit */
  this.was = 0; /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) { /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null /*Z_NULL*/ ;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null /*Z_NULL*/ ;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null /*Z_NULL*/ ;
  }
  return ret;
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new Buf32(512);
    distfix = new Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }

    inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
      bits: 9
    });

    /* distance table */
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }

    inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
      bits: 5
    });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
}

function inflate$1(strm, flush) {
  var state;
  var input, output; // input/output buffers
  var next; /* next input INDEX */
  var put; /* next output INDEX */
  var have, left; /* available input and output */
  var hold; /* bit buffer */
  var bits; /* bits in bit buffer */
  var _in, _out; /* save starting available input and output */
  var copy; /* number of stored or match bytes to copy */
  var from; /* where to copy match bytes from */
  var from_source;
  var here = 0; /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len; /* length to copy for repeats, bits to drop */
  var ret; /* return code */
  var hbuf = new Buf8(4); /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */ [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];


  if (!strm || !strm.state || !strm.output ||
    (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) {
    state.mode = TYPEDO;
  } /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
    for (;;) {
      switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) { /* gzip header */
          state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0; /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 0xff) /*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f) /*BITS(4)*/ !== Z_DEFLATED$1) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f) /*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        } else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED$1) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        } else if (state.head) {
          state.head.extra = null /*Z_NULL*/ ;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) {
            copy = have;
          }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more conveniend processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) {
            break inf_leave;
          }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) {
            break inf_leave;
          }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/ )) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) {
            break inf_leave;
          }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/ )) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK$1 || flush === Z_TREES$1) {
          break inf_leave;
        }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01) /*BITS(1)*/ ;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03) /*BITS(2)*/ ) {
        case 0:
          /* stored block */
          //Tracev((stderr, "inflate:     stored block%s\n",
          //        state.last ? " (last)" : ""));
          state.mode = STORED;
          break;
        case 1:
          /* fixed block */
          fixedtables(state);
          //Tracev((stderr, "inflate:     fixed codes block%s\n",
          //        state.last ? " (last)" : ""));
          state.mode = LEN_; /* decode codes */
          if (flush === Z_TREES$1) {
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
            break inf_leave;
          }
          break;
        case 2:
          /* dynamic block */
          //Tracev((stderr, "inflate:     dynamic codes block%s\n",
          //        state.last ? " (last)" : ""));
          state.mode = TABLE;
          break;
        case 3:
          strm.msg = 'invalid block type';
          state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES$1) {
          break inf_leave;
        }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) {
            copy = have;
          }
          if (copy > left) {
            copy = left;
          }
          if (copy === 0) {
            break inf_leave;
          }
          //--- zmemcpy(put, next, copy); ---
          arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f) /*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f) /*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f) /*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        //#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
        //#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07); //BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = {
          bits: state.lenbits
        };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)]; /*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          } else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03); //BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            } else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07); //BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            } else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f); //BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) {
          break;
        }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = {
          bits: state.lenbits
        };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = {
          bits: state.distbits
        };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES$1) {
          break inf_leave;
        }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)]; /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) {
            break;
          }
          //--- PULLBYTE() ---//
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
              ((hold & ((1 << (last_bits + last_op)) - 1)) /*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1) /*BITS(state.extra)*/ ;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)]; /*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) {
            break;
          }
          //--- PULLBYTE() ---//
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
              ((hold & ((1 << (last_bits + last_op)) - 1)) /*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1) /*BITS(state.extra)*/ ;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
        //#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) {
          break inf_leave;
        }
        copy = _out - left;
        if (state.offset > copy) { /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
            // (!) This block is disabled in zlib defailts,
            // don't enable it for binary compatibility
            //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
            //          Trace((stderr, "inflate.c too far\n"));
            //          copy -= state.whave;
            //          if (copy > state.length) { copy = state.length; }
            //          if (copy > left) { copy = left; }
            //          left -= copy;
            //          state.length -= copy;
            //          do {
            //            output[put++] = 0;
            //          } while (--copy);
            //          if (state.length === 0) { state.mode = LEN; }
            //          break;
            //#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          } else {
            from = state.wnext - copy;
          }
          if (copy > state.length) {
            copy = state.length;
          }
          from_source = state.window;
        } else { /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) {
          copy = left;
        }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) {
          state.mode = LEN;
        }
        break;
      case LIT:
        if (left === 0) {
          break inf_leave;
        }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            // Use '|' insdead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
      }
    }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
    (state.mode === TYPE ? 128 : 0) +
    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR$1;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/ ) {
    return Z_STREAM_ERROR$1;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
}

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

// import constants from './constants';


// zlib modes
var NONE = 0;
var DEFLATE = 1;
var INFLATE = 2;
var GZIP = 3;
var GUNZIP = 4;
var DEFLATERAW = 5;
var INFLATERAW = 6;
var UNZIP = 7;
var Z_NO_FLUSH=         0,
  Z_PARTIAL_FLUSH=    1,
  Z_SYNC_FLUSH=    2,
  Z_FULL_FLUSH=       3,
  Z_FINISH=       4,
  Z_BLOCK=           5,
  Z_TREES=            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK=               0,
  Z_STREAM_END=       1,
  Z_NEED_DICT=      2,
  Z_ERRNO=       -1,
  Z_STREAM_ERROR=   -2,
  Z_DATA_ERROR=    -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR=    -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION=         0,
  Z_BEST_SPEED=             1,
  Z_BEST_COMPRESSION=       9,
  Z_DEFAULT_COMPRESSION=   -1,


  Z_FILTERED=               1,
  Z_HUFFMAN_ONLY=           2,
  Z_RLE=                    3,
  Z_FIXED=                  4,
  Z_DEFAULT_STRATEGY=       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY=                 0,
  Z_TEXT=                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN=                2,

  /* The deflate compression method */
  Z_DEFLATED=               8;
function Zlib$1(mode) {
  if (mode < DEFLATE || mode > UNZIP)
    throw new TypeError('Bad argument');

  this.mode = mode;
  this.init_done = false;
  this.write_in_progress = false;
  this.pending_close = false;
  this.windowBits = 0;
  this.level = 0;
  this.memLevel = 0;
  this.strategy = 0;
  this.dictionary = null;
}

Zlib$1.prototype.init = function(windowBits, level, memLevel, strategy, dictionary) {
  this.windowBits = windowBits;
  this.level = level;
  this.memLevel = memLevel;
  this.strategy = strategy;
  // dictionary not supported.

  if (this.mode === GZIP || this.mode === GUNZIP)
    this.windowBits += 16;

  if (this.mode === UNZIP)
    this.windowBits += 32;

  if (this.mode === DEFLATERAW || this.mode === INFLATERAW)
    this.windowBits = -this.windowBits;

  this.strm = new ZStream();
  var status;
  switch (this.mode) {
  case DEFLATE:
  case GZIP:
  case DEFLATERAW:
    status = deflateInit2(
      this.strm,
      this.level,
      Z_DEFLATED,
      this.windowBits,
      this.memLevel,
      this.strategy
    );
    break;
  case INFLATE:
  case GUNZIP:
  case INFLATERAW:
  case UNZIP:
    status  = inflateInit2(
      this.strm,
      this.windowBits
    );
    break;
  default:
    throw new Error('Unknown mode ' + this.mode);
  }

  if (status !== Z_OK) {
    this._error(status);
    return;
  }

  this.write_in_progress = false;
  this.init_done = true;
};

Zlib$1.prototype.params = function() {
  throw new Error('deflateParams Not supported');
};

Zlib$1.prototype._writeCheck = function() {
  if (!this.init_done)
    throw new Error('write before init');

  if (this.mode === NONE)
    throw new Error('already finalized');

  if (this.write_in_progress)
    throw new Error('write already in progress');

  if (this.pending_close)
    throw new Error('close is pending');
};

Zlib$1.prototype.write = function(flush, input, in_off, in_len, out, out_off, out_len) {
  this._writeCheck();
  this.write_in_progress = true;

  var self = this;
  browser$1.nextTick(function() {
    self.write_in_progress = false;
    var res = self._write(flush, input, in_off, in_len, out, out_off, out_len);
    self.callback(res[0], res[1]);

    if (self.pending_close)
      self.close();
  });

  return this;
};

// set method for Node buffers, used by pako
function bufferSet(data, offset) {
  for (var i = 0; i < data.length; i++) {
    this[offset + i] = data[i];
  }
}

Zlib$1.prototype.writeSync = function(flush, input, in_off, in_len, out, out_off, out_len) {
  this._writeCheck();
  return this._write(flush, input, in_off, in_len, out, out_off, out_len);
};

Zlib$1.prototype._write = function(flush, input, in_off, in_len, out, out_off, out_len) {
  this.write_in_progress = true;

  if (flush !== Z_NO_FLUSH &&
      flush !== Z_PARTIAL_FLUSH &&
      flush !== Z_SYNC_FLUSH &&
      flush !== Z_FULL_FLUSH &&
      flush !== Z_FINISH &&
      flush !== Z_BLOCK) {
    throw new Error('Invalid flush value');
  }

  if (input == null) {
    input = new Buffer(0);
    in_len = 0;
    in_off = 0;
  }

  if (out._set)
    out.set = out._set;
  else
    out.set = bufferSet;

  var strm = this.strm;
  strm.avail_in = in_len;
  strm.input = input;
  strm.next_in = in_off;
  strm.avail_out = out_len;
  strm.output = out;
  strm.next_out = out_off;
  var status;
  switch (this.mode) {
  case DEFLATE:
  case GZIP:
  case DEFLATERAW:
    status = deflate$1(strm, flush);
    break;
  case UNZIP:
  case INFLATE:
  case GUNZIP:
  case INFLATERAW:
    status = inflate$1(strm, flush);
    break;
  default:
    throw new Error('Unknown mode ' + this.mode);
  }

  if (status !== Z_STREAM_END && status !== Z_OK) {
    this._error(status);
  }

  this.write_in_progress = false;
  return [strm.avail_in, strm.avail_out];
};

Zlib$1.prototype.close = function() {
  if (this.write_in_progress) {
    this.pending_close = true;
    return;
  }

  this.pending_close = false;

  if (this.mode === DEFLATE || this.mode === GZIP || this.mode === DEFLATERAW) {
    deflateEnd(this.strm);
  } else {
    inflateEnd(this.strm);
  }

  this.mode = NONE;
};
var status;
Zlib$1.prototype.reset = function() {
  switch (this.mode) {
  case DEFLATE:
  case DEFLATERAW:
    status = deflateReset(this.strm);
    break;
  case INFLATE:
  case INFLATERAW:
    status = inflateReset(this.strm);
    break;
  }

  if (status !== Z_OK) {
    this._error(status);
  }
};

Zlib$1.prototype._error = function(status) {
  this.onerror(msg[status] + ': ' + this.strm.msg, status);

  this.write_in_progress = false;
  if (this.pending_close)
    this.close();
};

var _binding = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DEFLATE: DEFLATE,
    DEFLATERAW: DEFLATERAW,
    GUNZIP: GUNZIP,
    GZIP: GZIP,
    INFLATE: INFLATE,
    INFLATERAW: INFLATERAW,
    NONE: NONE,
    UNZIP: UNZIP,
    Z_BEST_COMPRESSION: Z_BEST_COMPRESSION,
    Z_BEST_SPEED: Z_BEST_SPEED,
    Z_BINARY: Z_BINARY,
    Z_BLOCK: Z_BLOCK,
    Z_BUF_ERROR: Z_BUF_ERROR,
    Z_DATA_ERROR: Z_DATA_ERROR,
    Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION,
    Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY,
    Z_DEFLATED: Z_DEFLATED,
    Z_ERRNO: Z_ERRNO,
    Z_FILTERED: Z_FILTERED,
    Z_FINISH: Z_FINISH,
    Z_FIXED: Z_FIXED,
    Z_FULL_FLUSH: Z_FULL_FLUSH,
    Z_HUFFMAN_ONLY: Z_HUFFMAN_ONLY,
    Z_NEED_DICT: Z_NEED_DICT,
    Z_NO_COMPRESSION: Z_NO_COMPRESSION,
    Z_NO_FLUSH: Z_NO_FLUSH,
    Z_OK: Z_OK,
    Z_PARTIAL_FLUSH: Z_PARTIAL_FLUSH,
    Z_RLE: Z_RLE,
    Z_STREAM_END: Z_STREAM_END,
    Z_STREAM_ERROR: Z_STREAM_ERROR,
    Z_SYNC_FLUSH: Z_SYNC_FLUSH,
    Z_TEXT: Z_TEXT,
    Z_TREES: Z_TREES,
    Z_UNKNOWN: Z_UNKNOWN,
    Zlib: Zlib$1
});

function assert (a, msg) {
  if (!a) {
    throw new Error(msg);
  }
}
var binding = {};
Object.keys(_binding).forEach(function (key) {
  binding[key] = _binding[key];
});
// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
binding.Z_MIN_WINDOWBITS = 8;
binding.Z_MAX_WINDOWBITS = 15;
binding.Z_DEFAULT_WINDOWBITS = 15;

// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
binding.Z_MIN_CHUNK = 64;
binding.Z_MAX_CHUNK = Infinity;
binding.Z_DEFAULT_CHUNK = (16 * 1024);

binding.Z_MIN_MEMLEVEL = 1;
binding.Z_MAX_MEMLEVEL = 9;
binding.Z_DEFAULT_MEMLEVEL = 8;

binding.Z_MIN_LEVEL = -1;
binding.Z_MAX_LEVEL = 9;
binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;


// translation table for return codes.
var codes = {
  Z_OK: binding.Z_OK,
  Z_STREAM_END: binding.Z_STREAM_END,
  Z_NEED_DICT: binding.Z_NEED_DICT,
  Z_ERRNO: binding.Z_ERRNO,
  Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
  Z_DATA_ERROR: binding.Z_DATA_ERROR,
  Z_MEM_ERROR: binding.Z_MEM_ERROR,
  Z_BUF_ERROR: binding.Z_BUF_ERROR,
  Z_VERSION_ERROR: binding.Z_VERSION_ERROR
};

Object.keys(codes).forEach(function(k) {
  codes[codes[k]] = k;
});

function createDeflate(o) {
  return new Deflate(o);
}

function createInflate(o) {
  return new Inflate(o);
}

function createDeflateRaw(o) {
  return new DeflateRaw(o);
}

function createInflateRaw(o) {
  return new InflateRaw(o);
}

function createGzip(o) {
  return new Gzip(o);
}

function createGunzip(o) {
  return new Gunzip(o);
}

function createUnzip(o) {
  return new Unzip(o);
}


// Convenience methods.
// compress/decompress a string or buffer in one step.
function deflate(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Deflate(opts), buffer, callback);
}

function deflateSync(buffer, opts) {
  return zlibBufferSync(new Deflate(opts), buffer);
}

function gzip(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gzip(opts), buffer, callback);
}

function gzipSync(buffer, opts) {
  return zlibBufferSync(new Gzip(opts), buffer);
}

function deflateRaw(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new DeflateRaw(opts), buffer, callback);
}

function deflateRawSync(buffer, opts) {
  return zlibBufferSync(new DeflateRaw(opts), buffer);
}

function unzip(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Unzip(opts), buffer, callback);
}

function unzipSync(buffer, opts) {
  return zlibBufferSync(new Unzip(opts), buffer);
}

function inflate(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Inflate(opts), buffer, callback);
}

function inflateSync(buffer, opts) {
  return zlibBufferSync(new Inflate(opts), buffer);
}

function gunzip(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gunzip(opts), buffer, callback);
}

function gunzipSync(buffer, opts) {
  return zlibBufferSync(new Gunzip(opts), buffer);
}

function inflateRaw(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new InflateRaw(opts), buffer, callback);
}

function inflateRawSync(buffer, opts) {
  return zlibBufferSync(new InflateRaw(opts), buffer);
}

function zlibBuffer(engine, buffer, callback) {
  var buffers = [];
  var nread = 0;

  engine.on('error', onError);
  engine.on('end', onEnd);

  engine.end(buffer);
  flow();

  function flow() {
    var chunk;
    while (null !== (chunk = engine.read())) {
      buffers.push(chunk);
      nread += chunk.length;
    }
    engine.once('readable', flow);
  }

  function onError(err) {
    engine.removeListener('end', onEnd);
    engine.removeListener('readable', flow);
    callback(err);
  }

  function onEnd() {
    var buf = Buffer.concat(buffers, nread);
    buffers = [];
    callback(null, buf);
    engine.close();
  }
}

function zlibBufferSync(engine, buffer) {
  if (typeof buffer === 'string')
    buffer = new Buffer(buffer);
  if (!Buffer.isBuffer(buffer))
    throw new TypeError('Not a string or buffer');

  var flushFlag = binding.Z_FINISH;

  return engine._processChunk(buffer, flushFlag);
}

// generic zlib
// minimal 2-byte header
function Deflate(opts) {
  if (!(this instanceof Deflate)) return new Deflate(opts);
  Zlib.call(this, opts, binding.DEFLATE);
}

function Inflate(opts) {
  if (!(this instanceof Inflate)) return new Inflate(opts);
  Zlib.call(this, opts, binding.INFLATE);
}



// gzip - bigger header, same deflate compression
function Gzip(opts) {
  if (!(this instanceof Gzip)) return new Gzip(opts);
  Zlib.call(this, opts, binding.GZIP);
}

function Gunzip(opts) {
  if (!(this instanceof Gunzip)) return new Gunzip(opts);
  Zlib.call(this, opts, binding.GUNZIP);
}



// raw - no header
function DeflateRaw(opts) {
  if (!(this instanceof DeflateRaw)) return new DeflateRaw(opts);
  Zlib.call(this, opts, binding.DEFLATERAW);
}

function InflateRaw(opts) {
  if (!(this instanceof InflateRaw)) return new InflateRaw(opts);
  Zlib.call(this, opts, binding.INFLATERAW);
}


// auto-detect header.
function Unzip(opts) {
  if (!(this instanceof Unzip)) return new Unzip(opts);
  Zlib.call(this, opts, binding.UNZIP);
}


// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.

function Zlib(opts, mode) {
  this._opts = opts = opts || {};
  this._chunkSize = opts.chunkSize || binding.Z_DEFAULT_CHUNK;

  Transform.call(this, opts);

  if (opts.flush) {
    if (opts.flush !== binding.Z_NO_FLUSH &&
        opts.flush !== binding.Z_PARTIAL_FLUSH &&
        opts.flush !== binding.Z_SYNC_FLUSH &&
        opts.flush !== binding.Z_FULL_FLUSH &&
        opts.flush !== binding.Z_FINISH &&
        opts.flush !== binding.Z_BLOCK) {
      throw new Error('Invalid flush flag: ' + opts.flush);
    }
  }
  this._flushFlag = opts.flush || binding.Z_NO_FLUSH;

  if (opts.chunkSize) {
    if (opts.chunkSize < binding.Z_MIN_CHUNK ||
        opts.chunkSize > binding.Z_MAX_CHUNK) {
      throw new Error('Invalid chunk size: ' + opts.chunkSize);
    }
  }

  if (opts.windowBits) {
    if (opts.windowBits < binding.Z_MIN_WINDOWBITS ||
        opts.windowBits > binding.Z_MAX_WINDOWBITS) {
      throw new Error('Invalid windowBits: ' + opts.windowBits);
    }
  }

  if (opts.level) {
    if (opts.level < binding.Z_MIN_LEVEL ||
        opts.level > binding.Z_MAX_LEVEL) {
      throw new Error('Invalid compression level: ' + opts.level);
    }
  }

  if (opts.memLevel) {
    if (opts.memLevel < binding.Z_MIN_MEMLEVEL ||
        opts.memLevel > binding.Z_MAX_MEMLEVEL) {
      throw new Error('Invalid memLevel: ' + opts.memLevel);
    }
  }

  if (opts.strategy) {
    if (opts.strategy != binding.Z_FILTERED &&
        opts.strategy != binding.Z_HUFFMAN_ONLY &&
        opts.strategy != binding.Z_RLE &&
        opts.strategy != binding.Z_FIXED &&
        opts.strategy != binding.Z_DEFAULT_STRATEGY) {
      throw new Error('Invalid strategy: ' + opts.strategy);
    }
  }

  if (opts.dictionary) {
    if (!Buffer.isBuffer(opts.dictionary)) {
      throw new Error('Invalid dictionary: it should be a Buffer instance');
    }
  }

  this._binding = new binding.Zlib(mode);

  var self = this;
  this._hadError = false;
  this._binding.onerror = function(message, errno) {
    // there is no way to cleanly recover.
    // continuing only obscures problems.
    self._binding = null;
    self._hadError = true;

    var error = new Error(message);
    error.errno = errno;
    error.code = binding.codes[errno];
    self.emit('error', error);
  };

  var level = binding.Z_DEFAULT_COMPRESSION;
  if (typeof opts.level === 'number') level = opts.level;

  var strategy = binding.Z_DEFAULT_STRATEGY;
  if (typeof opts.strategy === 'number') strategy = opts.strategy;

  this._binding.init(opts.windowBits || binding.Z_DEFAULT_WINDOWBITS,
                     level,
                     opts.memLevel || binding.Z_DEFAULT_MEMLEVEL,
                     strategy,
                     opts.dictionary);

  this._buffer = new Buffer(this._chunkSize);
  this._offset = 0;
  this._closed = false;
  this._level = level;
  this._strategy = strategy;

  this.once('end', this.close);
}

inherits$1(Zlib, Transform);

Zlib.prototype.params = function(level, strategy, callback) {
  if (level < binding.Z_MIN_LEVEL ||
      level > binding.Z_MAX_LEVEL) {
    throw new RangeError('Invalid compression level: ' + level);
  }
  if (strategy != binding.Z_FILTERED &&
      strategy != binding.Z_HUFFMAN_ONLY &&
      strategy != binding.Z_RLE &&
      strategy != binding.Z_FIXED &&
      strategy != binding.Z_DEFAULT_STRATEGY) {
    throw new TypeError('Invalid strategy: ' + strategy);
  }

  if (this._level !== level || this._strategy !== strategy) {
    var self = this;
    this.flush(binding.Z_SYNC_FLUSH, function() {
      self._binding.params(level, strategy);
      if (!self._hadError) {
        self._level = level;
        self._strategy = strategy;
        if (callback) callback();
      }
    });
  } else {
    browser$1.nextTick(callback);
  }
};

Zlib.prototype.reset = function() {
  return this._binding.reset();
};

// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
Zlib.prototype._flush = function(callback) {
  this._transform(new Buffer(0), '', callback);
};

Zlib.prototype.flush = function(kind, callback) {
  var ws = this._writableState;

  if (typeof kind === 'function' || (kind === void 0 && !callback)) {
    callback = kind;
    kind = binding.Z_FULL_FLUSH;
  }

  if (ws.ended) {
    if (callback)
      browser$1.nextTick(callback);
  } else if (ws.ending) {
    if (callback)
      this.once('end', callback);
  } else if (ws.needDrain) {
    var self = this;
    this.once('drain', function() {
      self.flush(callback);
    });
  } else {
    this._flushFlag = kind;
    this.write(new Buffer(0), '', callback);
  }
};

Zlib.prototype.close = function(callback) {
  if (callback)
    browser$1.nextTick(callback);

  if (this._closed)
    return;

  this._closed = true;

  this._binding.close();

  var self = this;
  browser$1.nextTick(function() {
    self.emit('close');
  });
};

Zlib.prototype._transform = function(chunk, encoding, cb) {
  var flushFlag;
  var ws = this._writableState;
  var ending = ws.ending || ws.ended;
  var last = ending && (!chunk || ws.length === chunk.length);

  if (!chunk === null && !Buffer.isBuffer(chunk))
    return cb(new Error('invalid input'));

  // If it's the last chunk, or a final flush, we use the Z_FINISH flush flag.
  // If it's explicitly flushing at some other time, then we use
  // Z_FULL_FLUSH. Otherwise, use Z_NO_FLUSH for maximum compression
  // goodness.
  if (last)
    flushFlag = binding.Z_FINISH;
  else {
    flushFlag = this._flushFlag;
    // once we've flushed the last of the queue, stop flushing and
    // go back to the normal behavior.
    if (chunk.length >= ws.length) {
      this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH;
    }
  }

  this._processChunk(chunk, flushFlag, cb);
};

Zlib.prototype._processChunk = function(chunk, flushFlag, cb) {
  var availInBefore = chunk && chunk.length;
  var availOutBefore = this._chunkSize - this._offset;
  var inOff = 0;

  var self = this;

  var async = typeof cb === 'function';

  if (!async) {
    var buffers = [];
    var nread = 0;

    var error;
    this.on('error', function(er) {
      error = er;
    });

    do {
      var res = this._binding.writeSync(flushFlag,
                                        chunk, // in
                                        inOff, // in_off
                                        availInBefore, // in_len
                                        this._buffer, // out
                                        this._offset, //out_off
                                        availOutBefore); // out_len
    } while (!this._hadError && callback(res[0], res[1]));

    if (this._hadError) {
      throw error;
    }

    var buf = Buffer.concat(buffers, nread);
    this.close();

    return buf;
  }

  var req = this._binding.write(flushFlag,
                                chunk, // in
                                inOff, // in_off
                                availInBefore, // in_len
                                this._buffer, // out
                                this._offset, //out_off
                                availOutBefore); // out_len

  req.buffer = chunk;
  req.callback = callback;

  function callback(availInAfter, availOutAfter) {
    if (self._hadError)
      return;

    var have = availOutBefore - availOutAfter;
    assert(have >= 0, 'have should not go down');

    if (have > 0) {
      var out = self._buffer.slice(self._offset, self._offset + have);
      self._offset += have;
      // serve some output to the consumer.
      if (async) {
        self.push(out);
      } else {
        buffers.push(out);
        nread += out.length;
      }
    }

    // exhausted the output buffer, or used all the input create a new one.
    if (availOutAfter === 0 || self._offset >= self._chunkSize) {
      availOutBefore = self._chunkSize;
      self._offset = 0;
      self._buffer = new Buffer(self._chunkSize);
    }

    if (availOutAfter === 0) {
      // Not actually done.  Need to reprocess.
      // Also, update the availInBefore to the availInAfter value,
      // so that if we have to hit it a third (fourth, etc.) time,
      // it'll have the correct byte counts.
      inOff += (availInBefore - availInAfter);
      availInBefore = availInAfter;

      if (!async)
        return true;

      var newReq = self._binding.write(flushFlag,
                                       chunk,
                                       inOff,
                                       availInBefore,
                                       self._buffer,
                                       self._offset,
                                       self._chunkSize);
      newReq.callback = callback; // this same function
      newReq.buffer = chunk;
      return;
    }

    if (!async)
      return false;

    // finished with the chunk.
    cb();
  }
};

inherits$1(Deflate, Zlib);
inherits$1(Inflate, Zlib);
inherits$1(Gzip, Zlib);
inherits$1(Gunzip, Zlib);
inherits$1(DeflateRaw, Zlib);
inherits$1(InflateRaw, Zlib);
inherits$1(Unzip, Zlib);
var zlib = {
  codes: codes,
  createDeflate: createDeflate,
  createInflate: createInflate,
  createDeflateRaw: createDeflateRaw,
  createInflateRaw: createInflateRaw,
  createGzip: createGzip,
  createGunzip: createGunzip,
  createUnzip: createUnzip,
  deflate: deflate,
  deflateSync: deflateSync,
  gzip: gzip,
  gzipSync: gzipSync,
  deflateRaw: deflateRaw,
  deflateRawSync: deflateRawSync,
  unzip: unzip,
  unzipSync: unzipSync,
  inflate: inflate,
  inflateSync: inflateSync,
  gunzip: gunzip,
  gunzipSync: gunzipSync,
  inflateRaw: inflateRaw,
  inflateRawSync: inflateRawSync,
  Deflate: Deflate,
  Inflate: Inflate,
  Gzip: Gzip,
  Gunzip: Gunzip,
  DeflateRaw: DeflateRaw,
  InflateRaw: InflateRaw,
  Unzip: Unzip,
  Zlib: Zlib
};

var zlib$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Deflate: Deflate,
    DeflateRaw: DeflateRaw,
    Gunzip: Gunzip,
    Gzip: Gzip,
    Inflate: Inflate,
    InflateRaw: InflateRaw,
    Unzip: Unzip,
    Zlib: Zlib,
    codes: codes,
    createDeflate: createDeflate,
    createDeflateRaw: createDeflateRaw,
    createGunzip: createGunzip,
    createGzip: createGzip,
    createInflate: createInflate,
    createInflateRaw: createInflateRaw,
    createUnzip: createUnzip,
    default: zlib,
    deflate: deflate,
    deflateRaw: deflateRaw,
    deflateRawSync: deflateRawSync,
    deflateSync: deflateSync,
    gunzip: gunzip,
    gunzipSync: gunzipSync,
    gzip: gzip,
    gzipSync: gzipSync,
    inflate: inflate,
    inflateRaw: inflateRaw,
    inflateRawSync: inflateRawSync,
    inflateSync: inflateSync,
    unzip: unzip,
    unzipSync: unzipSync
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(zlib$1);

var hasRequiredGzipSize;

function requireGzipSize () {
	if (hasRequiredGzipSize) return gzipSize.exports;
	hasRequiredGzipSize = 1;
	(()=>{var e={154:(e,r,t)=>{var n=t(781);var o=["write","end","destroy"];var i=["resume","pause"];var s=["data","close"];var c=Array.prototype.slice;e.exports=duplex;function forEach(e,r){if(e.forEach){return e.forEach(r)}for(var t=0;t<e.length;t++){r(e[t],t);}}function duplex(e,r){var t=new n;var a=false;forEach(o,proxyWriter);forEach(i,proxyReader);forEach(s,proxyStream);r.on("end",handleEnd);e.on("drain",(function(){t.emit("drain");}));e.on("error",reemit);r.on("error",reemit);t.writable=e.writable;t.readable=r.readable;return t;function proxyWriter(r){t[r]=method;function method(){return e[r].apply(e,arguments)}}function proxyReader(e){t[e]=method;function method(){t.emit(e);var n=r[e];if(n){return n.apply(r,arguments)}r.emit(e);}}function proxyStream(e){r.on(e,reemit);function reemit(){var r=c.call(arguments);r.unshift(e);t.emit.apply(t,r);}}function handleEnd(){if(a){return}a=true;var e=c.call(arguments);e.unshift("end");t.emit.apply(t,e);}function reemit(e){t.emit("error",e);}}},349:(e,r,t)=>{const n=t(147);const o=t(781);const i=t(796);const s=t(154);const c=t(530);const getOptions=e=>Object.assign({level:9},e);e.exports=(e,r)=>{if(!e){return Promise.resolve(0)}return c(i.gzip)(e,getOptions(r)).then((e=>e.length)).catch((e=>0))};e.exports.sync=(e,r)=>i.gzipSync(e,getOptions(r)).length;e.exports.stream=e=>{const r=new o.PassThrough;const t=new o.PassThrough;const n=s(r,t);let c=0;const a=i.createGzip(getOptions(e)).on("data",(e=>{c+=e.length;})).on("error",(()=>{n.gzipSize=0;})).on("end",(()=>{n.gzipSize=c;n.emit("gzip-size",c);t.end();}));r.pipe(a);r.pipe(t,{end:false});return n};e.exports.file=(r,t)=>new Promise(((o,i)=>{const s=n.createReadStream(r);s.on("error",i);const c=s.pipe(e.exports.stream(t));c.on("error",i);c.on("gzip-size",o);}));e.exports.fileSync=(r,t)=>e.exports.sync(n.readFileSync(r),t);},530:e=>{const processFn=(e,r)=>function(...t){const n=r.promiseModule;return new n(((n,o)=>{if(r.multiArgs){t.push(((...e)=>{if(r.errorFirst){if(e[0]){o(e);}else {e.shift();n(e);}}else {n(e);}}));}else if(r.errorFirst){t.push(((e,r)=>{if(e){o(e);}else {n(r);}}));}else {t.push(n);}e.apply(this,t);}))};e.exports=(e,r)=>{r=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:true,promiseModule:Promise},r);const t=typeof e;if(!(e!==null&&(t==="object"||t==="function"))){throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e===null?"null":t}\``)}const filter=e=>{const match=r=>typeof r==="string"?e===r:r.test(e);return r.include?r.include.some(match):!r.exclude.some(match)};let n;if(t==="function"){n=function(...t){return r.excludeMain?e(...t):processFn(e,r).apply(this,t)};}else {n=Object.create(Object.getPrototypeOf(e));}for(const t in e){const o=e[t];n[t]=typeof o==="function"&&filter(t)?processFn(o,r):o;}return n};},147:e=>{e.exports=require$$0;},781:e=>{e.exports=require$$1;},796:e=>{e.exports=require$$2;}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var o=r[t]={exports:{}};var i=true;try{e[t](o,o.exports,__nccwpck_require__);i=false;}finally{if(i)delete r[t];}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname$1+"/";var t=__nccwpck_require__(349);gzipSize.exports=t;})();
	return gzipSize.exports;
}

var hasRequiredBloomFilter;

function requireBloomFilter () {
	if (hasRequiredBloomFilter) return bloomFilter;
	hasRequiredBloomFilter = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "BloomFilter", {
		    enumerable: true,
		    get: function() {
		        return BloomFilter;
		    }
		});
		function murmurhash2(str) {
		    let h = 0;
		    for(let i = 0; i < str.length; i++){
		        const c = str.charCodeAt(i);
		        h = Math.imul(h ^ c, 0x5bd1e995);
		        h ^= h >>> 13;
		        h = Math.imul(h, 0x5bd1e995);
		    }
		    return h >>> 0;
		}
		class BloomFilter {
		    static from(items, errorRate) {
		        if (errorRate === void 0) errorRate = 0.01;
		        const filter = new BloomFilter(items.length, errorRate);
		        for (const item of items){
		            filter.add(item);
		        }
		        return filter;
		    }
		    export() {
		        const data = {
		            numItems: this.numItems,
		            errorRate: this.errorRate,
		            numBits: this.numBits,
		            numHashes: this.numHashes,
		            bitArray: this.bitArray
		        };
		        if (browser$1.env.NEXT_RUNTIME === "nodejs") {
		            if (this.errorRate < 0.01) {
		                const filterData = JSON.stringify(data);
		                const gzipSize = requireGzipSize().sync(filterData);
		                if (gzipSize > 1024) {
		                    console.warn("Creating filter with error rate less than 1% (0.01) can increase the size dramatically proceed with caution. Received error rate " + this.errorRate + " resulted in size " + filterData.length + " bytes, " + gzipSize + " bytes (gzip)");
		                }
		            }
		        }
		        return data;
		    }
		    import(data) {
		        this.numItems = data.numItems;
		        this.errorRate = data.errorRate;
		        this.numBits = data.numBits;
		        this.numHashes = data.numHashes;
		        this.bitArray = data.bitArray;
		    }
		    add(item) {
		        const hashValues = this.getHashValues(item);
		        hashValues.forEach((hash)=>{
		            this.bitArray[hash] = 1;
		        });
		    }
		    contains(item) {
		        const hashValues = this.getHashValues(item);
		        return hashValues.every((hash)=>this.bitArray[hash]);
		    }
		    getHashValues(item) {
		        const hashValues = [];
		        for(let i = 1; i <= this.numHashes; i++){
		            const hash = murmurhash2("" + item + i) % this.numBits;
		            hashValues.push(hash);
		        }
		        return hashValues;
		    }
		    constructor(numItems, errorRate){
		        this.numItems = numItems;
		        this.errorRate = errorRate;
		        this.numBits = Math.ceil(-(numItems * Math.log(errorRate)) / (Math.log(2) * Math.log(2)));
		        this.numHashes = Math.ceil(this.numBits / numItems * Math.log(2));
		        this.bitArray = new Array(this.numBits).fill(0);
		    }
		}

		
	} (bloomFilter));
	return bloomFilter;
}

var hasRequiredRouter$1;

function requireRouter$1 () {
	if (hasRequiredRouter$1) return router$1;
	hasRequiredRouter$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    default: function() {
		        return Router;
		    },
		    matchesMiddleware: function() {
		        return matchesMiddleware;
		    },
		    createKey: function() {
		        return createKey;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _interop_require_wildcard = _interop_require_wildcard$1;
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _routeloader = requireRouteLoader();
		const _script = requireScript();
		const _iserror = /*#__PURE__*/ _interop_require_wildcard._(requireIsError());
		const _denormalizepagepath = requireDenormalizePagePath();
		const _normalizelocalepath = requireNormalizeLocalePath();
		const _mitt = /*#__PURE__*/ _interop_require_default._(requireMitt());
		const _utils = requireUtils();
		const _isdynamic = requireIsDynamic();
		const _parserelativeurl = requireParseRelativeUrl();
		const _resolverewrites = /*#__PURE__*/ _interop_require_default._(requireResolveRewrites());
		const _routematcher = requireRouteMatcher();
		const _routeregex = requireRouteRegex();
		const _formaturl = requireFormatUrl();
		const _detectdomainlocale = requireDetectDomainLocale();
		const _parsepath = requireParsePath();
		const _addlocale = requireAddLocale();
		const _removelocale = requireRemoveLocale();
		const _removebasepath = requireRemoveBasePath();
		const _addbasepath = requireAddBasePath();
		const _hasbasepath = requireHasBasePath();
		const _resolvehref = requireResolveHref();
		const _isapiroute = requireIsApiRoute();
		const _getnextpathnameinfo = requireGetNextPathnameInfo();
		const _formatnextpathnameinfo = requireFormatNextPathnameInfo();
		const _comparestates = requireCompareStates();
		const _islocalurl = requireIsLocalUrl();
		const _isbot = requireIsBot();
		const _omit = requireOmit();
		const _interpolateas = requireInterpolateAs();
		const _handlesmoothscroll = requireHandleSmoothScroll();
		function buildCancellationError() {
		    return Object.assign(new Error("Route Cancelled"), {
		        cancelled: true
		    });
		}
		async function matchesMiddleware(options) {
		    const matchers = await Promise.resolve(options.router.pageLoader.getMiddleware());
		    if (!matchers) return false;
		    const { pathname: asPathname } = (0, _parsepath.parsePath)(options.asPath);
		    // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
		    const cleanedAs = (0, _hasbasepath.hasBasePath)(asPathname) ? (0, _removebasepath.removeBasePath)(asPathname) : asPathname;
		    const asWithBasePathAndLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(cleanedAs, options.locale));
		    // Check only path match on client. Matching "has" should be done on server
		    // where we can access more info such as headers, HttpOnly cookie, etc.
		    return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
		}
		function stripOrigin(url) {
		    const origin = (0, _utils.getLocationOrigin)();
		    return url.startsWith(origin) ? url.substring(origin.length) : url;
		}
		function prepareUrlAs(router, url, as) {
		    // If url and as provided as an object representation,
		    // we'll format them into the string version here.
		    let [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, url, true);
		    const origin = (0, _utils.getLocationOrigin)();
		    const hrefWasAbsolute = resolvedHref.startsWith(origin);
		    const asWasAbsolute = resolvedAs && resolvedAs.startsWith(origin);
		    resolvedHref = stripOrigin(resolvedHref);
		    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
		    const preparedUrl = hrefWasAbsolute ? resolvedHref : (0, _addbasepath.addBasePath)(resolvedHref);
		    const preparedAs = as ? stripOrigin((0, _resolvehref.resolveHref)(router, as)) : resolvedAs || resolvedHref;
		    return {
		        url: preparedUrl,
		        as: asWasAbsolute ? preparedAs : (0, _addbasepath.addBasePath)(preparedAs)
		    };
		}
		function resolveDynamicRoute(pathname, pages) {
		    const cleanPathname = (0, _removetrailingslash.removeTrailingSlash)((0, _denormalizepagepath.denormalizePagePath)(pathname));
		    if (cleanPathname === "/404" || cleanPathname === "/_error") {
		        return pathname;
		    }
		    // handle resolving href for dynamic routes
		    if (!pages.includes(cleanPathname)) {
		        // eslint-disable-next-line array-callback-return
		        pages.some((page)=>{
		            if ((0, _isdynamic.isDynamicRoute)(page) && (0, _routeregex.getRouteRegex)(page).re.test(cleanPathname)) {
		                pathname = page;
		                return true;
		            }
		        });
		    }
		    return (0, _removetrailingslash.removeTrailingSlash)(pathname);
		}
		function getMiddlewareData(source, response, options) {
		    const nextConfig = {
		        basePath: options.router.basePath,
		        i18n: {
		            locales: options.router.locales
		        },
		        trailingSlash: Boolean(browser$1.env.__NEXT_TRAILING_SLASH)
		    };
		    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
		    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
		    const matchedPath = response.headers.get("x-matched-path");
		    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
		        // leverage x-matched-path to detect next.config.js rewrites
		        rewriteTarget = matchedPath;
		    }
		    if (rewriteTarget) {
		        if (rewriteTarget.startsWith("/") || browser$1.env.__NEXT_EXTERNAL_MIDDLEWARE_REWRITE_RESOLVE) {
		            const parsedRewriteTarget = (0, _parserelativeurl.parseRelativeUrl)(rewriteTarget);
		            const pathnameInfo = (0, _getnextpathnameinfo.getNextPathnameInfo)(parsedRewriteTarget.pathname, {
		                nextConfig,
		                parseData: true
		            });
		            let fsPathname = (0, _removetrailingslash.removeTrailingSlash)(pathnameInfo.pathname);
		            return Promise.all([
		                options.router.pageLoader.getPageList(),
		                (0, _routeloader.getClientBuildManifest)()
		            ]).then((param)=>{
		                let [pages, { __rewrites: rewrites }] = param;
		                let as = (0, _addlocale.addLocale)(pathnameInfo.pathname, pathnameInfo.locale);
		                if ((0, _isdynamic.isDynamicRoute)(as) || !rewriteHeader && pages.includes((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(as), options.router.locales).pathname)) {
		                    const parsedSource = (0, _getnextpathnameinfo.getNextPathnameInfo)((0, _parserelativeurl.parseRelativeUrl)(source).pathname, {
		                        nextConfig: browser$1.env.__NEXT_HAS_REWRITES ? undefined : nextConfig,
		                        parseData: true
		                    });
		                    as = (0, _addbasepath.addBasePath)(parsedSource.pathname);
		                    parsedRewriteTarget.pathname = as;
		                }
		                if (browser$1.env.__NEXT_HAS_REWRITES) {
		                    const result = (0, _resolverewrites.default)(as, pages, rewrites, parsedRewriteTarget.query, (path)=>resolveDynamicRoute(path, pages), options.router.locales);
		                    if (result.matchedPage) {
		                        parsedRewriteTarget.pathname = result.parsedAs.pathname;
		                        as = parsedRewriteTarget.pathname;
		                        Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
		                    }
		                } else if (!pages.includes(fsPathname)) {
		                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
		                    if (resolvedPathname !== fsPathname) {
		                        fsPathname = resolvedPathname;
		                    }
		                }
		                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
		                if ((0, _isdynamic.isDynamicRoute)(resolvedHref)) {
		                    const matches = (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(resolvedHref))(as);
		                    Object.assign(parsedRewriteTarget.query, matches || {});
		                }
		                return {
		                    type: "rewrite",
		                    parsedAs: parsedRewriteTarget,
		                    resolvedHref
		                };
		            });
		        }
		        const src = (0, _parsepath.parsePath)(source);
		        const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
		            ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
		                nextConfig,
		                parseData: true
		            }),
		            defaultLocale: options.router.defaultLocale,
		            buildId: ""
		        });
		        return Promise.resolve({
		            type: "redirect-external",
		            destination: "" + pathname + src.query + src.hash
		        });
		    }
		    const redirectTarget = response.headers.get("x-nextjs-redirect");
		    if (redirectTarget) {
		        if (redirectTarget.startsWith("/")) {
		            const src = (0, _parsepath.parsePath)(redirectTarget);
		            const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
		                ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
		                    nextConfig,
		                    parseData: true
		                }),
		                defaultLocale: options.router.defaultLocale,
		                buildId: ""
		            });
		            return Promise.resolve({
		                type: "redirect-internal",
		                newAs: "" + pathname + src.query + src.hash,
		                newUrl: "" + pathname + src.query + src.hash
		            });
		        }
		        return Promise.resolve({
		            type: "redirect-external",
		            destination: redirectTarget
		        });
		    }
		    return Promise.resolve({
		        type: "next"
		    });
		}
		async function withMiddlewareEffects(options) {
		    const matches = await matchesMiddleware(options);
		    if (!matches || !options.fetchData) {
		        return null;
		    }
		    try {
		        const data = await options.fetchData();
		        const effect = await getMiddlewareData(data.dataHref, data.response, options);
		        return {
		            dataHref: data.dataHref,
		            json: data.json,
		            response: data.response,
		            text: data.text,
		            cacheKey: data.cacheKey,
		            effect
		        };
		    } catch (e) {
		        /**
		     * TODO: Revisit this in the future.
		     * For now we will not consider middleware data errors to be fatal.
		     * maybe we should revisit in the future.
		     */ return null;
		    }
		}
		const manualScrollRestoration = browser$1.env.__NEXT_SCROLL_RESTORATION && typeof window !== "undefined" && "scrollRestoration" in window.history && !!function() {
		    try {
		        let v = "__next";
		        // eslint-disable-next-line no-sequences
		        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
		    } catch (n) {}
		}();
		const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
		function fetchRetry(url, attempts, options) {
		    return fetch(url, {
		        // Cookies are required to be present for Next.js' SSG "Preview Mode".
		        // Cookies may also be required for `getServerSideProps`.
		        //
		        // > `fetch` won’t send cookies, unless you set the credentials init
		        // > option.
		        // https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
		        //
		        // > For maximum browser compatibility when it comes to sending &
		        // > receiving cookies, always supply the `credentials: 'same-origin'`
		        // > option instead of relying on the default.
		        // https://github.com/github/fetch#caveats
		        credentials: "same-origin",
		        method: options.method || "GET",
		        headers: Object.assign({}, options.headers, {
		            "x-nextjs-data": "1"
		        })
		    }).then((response)=>{
		        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
		    });
		}
		function tryToParseAsJSON(text) {
		    try {
		        return JSON.parse(text);
		    } catch (error) {
		        return null;
		    }
		}
		function fetchNextData(param) {
		    let { dataHref, inflightCache, isPrefetch, hasMiddleware, isServerRender, parseJSON, persistCache, isBackground, unstable_skipClientCache } = param;
		    const { href: cacheKey } = new URL(dataHref, window.location.href);
		    var _params_method;
		    const getData = (params)=>fetchRetry(dataHref, isServerRender ? 3 : 1, {
		            headers: Object.assign({}, isPrefetch ? {
		                purpose: "prefetch"
		            } : {}, isPrefetch && hasMiddleware ? {
		                "x-middleware-prefetch": "1"
		            } : {}),
		            method: (_params_method = params == null ? void 0 : params.method) != null ? _params_method : "GET"
		        }).then((response)=>{
		            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
		                return {
		                    dataHref,
		                    response,
		                    text: "",
		                    json: {},
		                    cacheKey
		                };
		            }
		            return response.text().then((text)=>{
		                if (!response.ok) {
		                    /**
		             * When the data response is a redirect because of a middleware
		             * we do not consider it an error. The headers must bring the
		             * mapped location.
		             * TODO: Change the status code in the handler.
		             */ if (hasMiddleware && [
		                        301,
		                        302,
		                        307,
		                        308
		                    ].includes(response.status)) {
		                        return {
		                            dataHref,
		                            response,
		                            text,
		                            json: {},
		                            cacheKey
		                        };
		                    }
		                    if (response.status === 404) {
		                        var _tryToParseAsJSON;
		                        if ((_tryToParseAsJSON = tryToParseAsJSON(text)) == null ? void 0 : _tryToParseAsJSON.notFound) {
		                            return {
		                                dataHref,
		                                json: {
		                                    notFound: SSG_DATA_NOT_FOUND
		                                },
		                                response,
		                                text,
		                                cacheKey
		                            };
		                        }
		                    }
		                    const error = new Error("Failed to load static props");
		                    /**
		             * We should only trigger a server-side transition if this was
		             * caused on a client-side transition. Otherwise, we'd get into
		             * an infinite loop.
		             */ if (!isServerRender) {
		                        (0, _routeloader.markAssetError)(error);
		                    }
		                    throw error;
		                }
		                return {
		                    dataHref,
		                    json: parseJSON ? tryToParseAsJSON(text) : null,
		                    response,
		                    text,
		                    cacheKey
		                };
		            });
		        }).then((data)=>{
		            if (!persistCache || browser$1.env.NODE_ENV !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
		                delete inflightCache[cacheKey];
		            }
		            return data;
		        }).catch((err)=>{
		            if (!unstable_skipClientCache) {
		                delete inflightCache[cacheKey];
		            }
		            if (// chrome
		            err.message === "Failed to fetch" || // firefox
		            err.message === "NetworkError when attempting to fetch resource." || // safari
		            err.message === "Load failed") {
		                (0, _routeloader.markAssetError)(err);
		            }
		            throw err;
		        });
		    // when skipping client cache we wait to update
		    // inflight cache until successful data response
		    // this allows racing click event with fetching newer data
		    // without blocking navigation when stale data is available
		    if (unstable_skipClientCache && persistCache) {
		        return getData({}).then((data)=>{
		            inflightCache[cacheKey] = Promise.resolve(data);
		            return data;
		        });
		    }
		    if (inflightCache[cacheKey] !== undefined) {
		        return inflightCache[cacheKey];
		    }
		    return inflightCache[cacheKey] = getData(isBackground ? {
		        method: "HEAD"
		    } : {});
		}
		function createKey() {
		    return Math.random().toString(36).slice(2, 10);
		}
		function handleHardNavigation(param) {
		    let { url, router } = param;
		    // ensure we don't trigger a hard navigation to the same
		    // URL as this can end up with an infinite refresh
		    if (url === (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(router.asPath, router.locale))) {
		        throw new Error("Invariant: attempted to hard navigate to the same URL " + url + " " + location.href);
		    }
		    window.location.href = url;
		}
		const getCancelledHandler = (param)=>{
		    let { route, router } = param;
		    let cancelled = false;
		    const cancel = router.clc = ()=>{
		        cancelled = true;
		    };
		    const handleCancelled = ()=>{
		        if (cancelled) {
		            const error = new Error('Abort fetching component for route: "' + route + '"');
		            error.cancelled = true;
		            throw error;
		        }
		        if (cancel === router.clc) {
		            router.clc = null;
		        }
		    };
		    return handleCancelled;
		};
		class Router {
		    reload() {
		        window.location.reload();
		    }
		    /**
		   * Go back in history
		   */ back() {
		        window.history.back();
		    }
		    /**
		   * Go forward in history
		   */ forward() {
		        window.history.forward();
		    }
		    /**
		   * Performs a `pushState` with arguments
		   * @param url of the route
		   * @param as masks `url` for the browser
		   * @param options object you can define `shallow` and other options
		   */ push(url, as, options) {
		        if (options === void 0) options = {};
		        if (browser$1.env.__NEXT_SCROLL_RESTORATION) {
		            // TODO: remove in the future when we update history before route change
		            // is complete, as the popstate event should handle this capture.
		            if (manualScrollRestoration) {
		                try {
		                    // Snapshot scroll position right before navigating to a new page:
		                    sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
		                        x: self.pageXOffset,
		                        y: self.pageYOffset
		                    }));
		                } catch (e) {}
		            }
		        }
		        ({ url, as } = prepareUrlAs(this, url, as));
		        return this.change("pushState", url, as, options);
		    }
		    /**
		   * Performs a `replaceState` with arguments
		   * @param url of the route
		   * @param as masks `url` for the browser
		   * @param options object you can define `shallow` and other options
		   */ replace(url, as, options) {
		        if (options === void 0) options = {};
		        ({ url, as } = prepareUrlAs(this, url, as));
		        return this.change("replaceState", url, as, options);
		    }
		    async _bfl(as, resolvedAs, locale, skipNavigate) {
		        if (browser$1.env.__NEXT_CLIENT_ROUTER_FILTER_ENABLED) {
		            let matchesBflStatic = false;
		            let matchesBflDynamic = false;
		            for (const curAs of [
		                as,
		                resolvedAs
		            ]){
		                if (curAs) {
		                    const asNoSlash = (0, _removetrailingslash.removeTrailingSlash)(new URL(curAs, "http://n").pathname);
		                    const asNoSlashLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(asNoSlash, locale || this.locale));
		                    if (asNoSlash !== (0, _removetrailingslash.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
		                        var _this__bfl_s, _this__bfl_s1;
		                        matchesBflStatic = matchesBflStatic || !!((_this__bfl_s = this._bfl_s) == null ? void 0 : _this__bfl_s.contains(asNoSlash)) || !!((_this__bfl_s1 = this._bfl_s) == null ? void 0 : _this__bfl_s1.contains(asNoSlashLocale));
		                        for (const normalizedAS of [
		                            asNoSlash,
		                            asNoSlashLocale
		                        ]){
		                            // if any sub-path of as matches a dynamic filter path
		                            // it should be hard navigated
		                            const curAsParts = normalizedAS.split("/");
		                            for(let i = 0; !matchesBflDynamic && i < curAsParts.length + 1; i++){
		                                var _this__bfl_d;
		                                const currentPart = curAsParts.slice(0, i).join("/");
		                                if (currentPart && ((_this__bfl_d = this._bfl_d) == null ? void 0 : _this__bfl_d.contains(currentPart))) {
		                                    matchesBflDynamic = true;
		                                    break;
		                                }
		                            }
		                        }
		                        // if the client router filter is matched then we trigger
		                        // a hard navigation
		                        if (matchesBflStatic || matchesBflDynamic) {
		                            if (skipNavigate) {
		                                return true;
		                            }
		                            handleHardNavigation({
		                                url: (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, locale || this.locale, this.defaultLocale)),
		                                router: this
		                            });
		                            return new Promise(()=>{});
		                        }
		                    }
		                }
		            }
		        }
		        return false;
		    }
		    async change(method, url, as, options, forcedScroll) {
		        var _this_components_pathname;
		        if (!(0, _islocalurl.isLocalURL)(url)) {
		            handleHardNavigation({
		                url,
		                router: this
		            });
		            return false;
		        }
		        // WARNING: `_h` is an internal option for handing Next.js client-side
		        // hydration. Your app should _never_ use this property. It may change at
		        // any time without notice.
		        const isQueryUpdating = options._h === 1;
		        if (!isQueryUpdating && !options.shallow) {
		            await this._bfl(as, undefined, options.locale);
		        }
		        let shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsepath.parsePath)(url).pathname === (0, _parsepath.parsePath)(as).pathname;
		        const nextState = {
		            ...this.state
		        };
		        // for static pages with query params in the URL we delay
		        // marking the router ready until after the query is updated
		        // or a navigation has occurred
		        const readyStateChange = this.isReady !== true;
		        this.isReady = true;
		        const isSsr = this.isSsr;
		        if (!isQueryUpdating) {
		            this.isSsr = false;
		        }
		        // if a route transition is already in progress before
		        // the query updating is triggered ignore query updating
		        if (isQueryUpdating && this.clc) {
		            return false;
		        }
		        const prevLocale = nextState.locale;
		        if (browser$1.env.__NEXT_I18N_SUPPORT) {
		            nextState.locale = options.locale === false ? this.defaultLocale : options.locale || nextState.locale;
		            if (typeof options.locale === "undefined") {
		                options.locale = nextState.locale;
		            }
		            const parsedAs = (0, _parserelativeurl.parseRelativeUrl)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as);
		            const localePathResult = (0, _normalizelocalepath.normalizeLocalePath)(parsedAs.pathname, this.locales);
		            if (localePathResult.detectedLocale) {
		                nextState.locale = localePathResult.detectedLocale;
		                parsedAs.pathname = (0, _addbasepath.addBasePath)(parsedAs.pathname);
		                as = (0, _formaturl.formatWithValidation)(parsedAs);
		                url = (0, _addbasepath.addBasePath)((0, _normalizelocalepath.normalizeLocalePath)((0, _hasbasepath.hasBasePath)(url) ? (0, _removebasepath.removeBasePath)(url) : url, this.locales).pathname);
		            }
		            let didNavigate = false;
		            // we need to wrap this in the env check again since regenerator runtime
		            // moves this on its own due to the return
		            if (browser$1.env.__NEXT_I18N_SUPPORT) {
		                var _this_locales;
		                // if the locale isn't configured hard navigate to show 404 page
		                if (!((_this_locales = this.locales) == null ? void 0 : _this_locales.includes(nextState.locale))) {
		                    parsedAs.pathname = (0, _addlocale.addLocale)(parsedAs.pathname, nextState.locale);
		                    handleHardNavigation({
		                        url: (0, _formaturl.formatWithValidation)(parsedAs),
		                        router: this
		                    });
		                    // this was previously a return but was removed in favor
		                    // of better dead code elimination with regenerator runtime
		                    didNavigate = true;
		                }
		            }
		            const detectedDomain = (0, _detectdomainlocale.detectDomainLocale)(this.domainLocales, undefined, nextState.locale);
		            // we need to wrap this in the env check again since regenerator runtime
		            // moves this on its own due to the return
		            if (browser$1.env.__NEXT_I18N_SUPPORT) {
		                // if we are navigating to a domain locale ensure we redirect to the
		                // correct domain
		                if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
		                    const asNoBasePath = (0, _removebasepath.removeBasePath)(as);
		                    handleHardNavigation({
		                        url: "http" + (detectedDomain.http ? "" : "s") + "://" + detectedDomain.domain + (0, _addbasepath.addBasePath)("" + (nextState.locale === detectedDomain.defaultLocale ? "" : "/" + nextState.locale) + (asNoBasePath === "/" ? "" : asNoBasePath) || "/"),
		                        router: this
		                    });
		                    // this was previously a return but was removed in favor
		                    // of better dead code elimination with regenerator runtime
		                    didNavigate = true;
		                }
		            }
		            if (didNavigate) {
		                return new Promise(()=>{});
		            }
		        }
		        // marking route changes as a navigation start entry
		        if (_utils.ST) {
		            performance.mark("routeChange");
		        }
		        const { shallow = false, scroll = true } = options;
		        const routeProps = {
		            shallow
		        };
		        if (this._inFlightRoute && this.clc) {
		            if (!isSsr) {
		                Router.events.emit("routeChangeError", buildCancellationError(), this._inFlightRoute, routeProps);
		            }
		            this.clc();
		            this.clc = null;
		        }
		        as = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, options.locale, this.defaultLocale));
		        const cleanedAs = (0, _removelocale.removeLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, nextState.locale);
		        this._inFlightRoute = as;
		        const localeChange = prevLocale !== nextState.locale;
		        // If the url change is only related to a hash change
		        // We should not proceed. We should only change the state.
		        if (!isQueryUpdating && this.onlyAHashChange(cleanedAs) && !localeChange) {
		            nextState.asPath = cleanedAs;
		            Router.events.emit("hashChangeStart", as, routeProps);
		            // TODO: do we need the resolved href when only a hash change?
		            this.changeState(method, url, as, {
		                ...options,
		                scroll: false
		            });
		            if (scroll) {
		                this.scrollToHash(cleanedAs);
		            }
		            try {
		                await this.set(nextState, this.components[nextState.route], null);
		            } catch (err) {
		                if ((0, _iserror.default)(err) && err.cancelled) {
		                    Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
		                }
		                throw err;
		            }
		            Router.events.emit("hashChangeComplete", as, routeProps);
		            return true;
		        }
		        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
		        let { pathname, query } = parsed;
		        // if we detected the path as app route during prefetching
		        // trigger hard navigation
		        if ((_this_components_pathname = this.components[pathname]) == null ? void 0 : _this_components_pathname.__appRouter) {
		            handleHardNavigation({
		                url: as,
		                router: this
		            });
		            return new Promise(()=>{});
		        }
		        // The build manifest needs to be loaded before auto-static dynamic pages
		        // get their query parameters to allow ensuring they can be parsed properly
		        // when rewritten to
		        let pages, rewrites;
		        try {
		            [pages, { __rewrites: rewrites }] = await Promise.all([
		                this.pageLoader.getPageList(),
		                (0, _routeloader.getClientBuildManifest)(),
		                this.pageLoader.getMiddleware()
		            ]);
		        } catch (err) {
		            // If we fail to resolve the page list or client-build manifest, we must
		            // do a server-side transition:
		            handleHardNavigation({
		                url: as,
		                router: this
		            });
		            return false;
		        }
		        // If asked to change the current URL we should reload the current page
		        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
		        // We also need to set the method = replaceState always
		        // as this should not go into the history (That's how browsers work)
		        // We should compare the new asPath to the current asPath, not the url
		        if (!this.urlIsNew(cleanedAs) && !localeChange) {
		            method = "replaceState";
		        }
		        // we need to resolve the as value using rewrites for dynamic SSG
		        // pages to allow building the data URL correctly
		        let resolvedAs = as;
		        // url and as should always be prefixed with basePath by this
		        // point by either next/link or router.push/replace so strip the
		        // basePath from the pathname to match the pages dir 1-to-1
		        pathname = pathname ? (0, _removetrailingslash.removeTrailingSlash)((0, _removebasepath.removeBasePath)(pathname)) : pathname;
		        let route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
		        const parsedAsPathname = as.startsWith("/") && (0, _parserelativeurl.parseRelativeUrl)(as).pathname;
		        const isMiddlewareRewrite = !!(parsedAsPathname && route !== parsedAsPathname && (!(0, _isdynamic.isDynamicRoute)(route) || !(0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(route))(parsedAsPathname)));
		        // we don't attempt resolve asPath when we need to execute
		        // middleware as the resolving will occur server-side
		        const isMiddlewareMatch = !options.shallow && await matchesMiddleware({
		            asPath: as,
		            locale: nextState.locale,
		            router: this
		        });
		        if (isQueryUpdating && isMiddlewareMatch) {
		            shouldResolveHref = false;
		        }
		        if (shouldResolveHref && pathname !== "/_error") {
		            options._shouldResolveHref = true;
		            if (browser$1.env.__NEXT_HAS_REWRITES && as.startsWith("/")) {
		                const rewritesResult = (0, _resolverewrites.default)((0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(cleanedAs, nextState.locale), true), pages, rewrites, query, (p)=>resolveDynamicRoute(p, pages), this.locales);
		                if (rewritesResult.externalDest) {
		                    handleHardNavigation({
		                        url: as,
		                        router: this
		                    });
		                    return true;
		                }
		                if (!isMiddlewareMatch) {
		                    resolvedAs = rewritesResult.asPath;
		                }
		                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
		                    // if this directly matches a page we need to update the href to
		                    // allow the correct page chunk to be loaded
		                    pathname = rewritesResult.resolvedHref;
		                    parsed.pathname = (0, _addbasepath.addBasePath)(pathname);
		                    if (!isMiddlewareMatch) {
		                        url = (0, _formaturl.formatWithValidation)(parsed);
		                    }
		                }
		            } else {
		                parsed.pathname = resolveDynamicRoute(pathname, pages);
		                if (parsed.pathname !== pathname) {
		                    pathname = parsed.pathname;
		                    parsed.pathname = (0, _addbasepath.addBasePath)(pathname);
		                    if (!isMiddlewareMatch) {
		                        url = (0, _formaturl.formatWithValidation)(parsed);
		                    }
		                }
		            }
		        }
		        if (!(0, _islocalurl.isLocalURL)(as)) {
		            if (browser$1.env.NODE_ENV !== "production") {
		                throw new Error('Invalid href: "' + url + '" and as: "' + as + '", received relative href and external as' + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");
		            }
		            handleHardNavigation({
		                url: as,
		                router: this
		            });
		            return false;
		        }
		        resolvedAs = (0, _removelocale.removeLocale)((0, _removebasepath.removeBasePath)(resolvedAs), nextState.locale);
		        route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
		        let routeMatch = false;
		        if ((0, _isdynamic.isDynamicRoute)(route)) {
		            const parsedAs = (0, _parserelativeurl.parseRelativeUrl)(resolvedAs);
		            const asPathname = parsedAs.pathname;
		            const routeRegex = (0, _routeregex.getRouteRegex)(route);
		            routeMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(asPathname);
		            const shouldInterpolate = route === asPathname;
		            const interpolatedAs = shouldInterpolate ? (0, _interpolateas.interpolateAs)(route, asPathname, query) : {};
		            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
		                const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param] && !routeRegex.groups[param].optional);
		                if (missingParams.length > 0 && !isMiddlewareMatch) {
		                    if (browser$1.env.NODE_ENV !== "production") {
		                        console.warn("" + (shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`") + " failed to manually provide " + ("the params: " + missingParams.join(", ") + " in the `href`'s `query`"));
		                    }
		                    throw new Error((shouldInterpolate ? "The provided `href` (" + url + ") value is missing query values (" + missingParams.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + asPathname + ") is incompatible with the `href` value (" + route + "). ") + ("Read more: https://nextjs.org/docs/messages/" + (shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as")));
		                }
		            } else if (shouldInterpolate) {
		                as = (0, _formaturl.formatWithValidation)(Object.assign({}, parsedAs, {
		                    pathname: interpolatedAs.result,
		                    query: (0, _omit.omit)(query, interpolatedAs.params)
		                }));
		            } else {
		                // Merge params into `query`, overwriting any specified in search
		                Object.assign(query, routeMatch);
		            }
		        }
		        if (!isQueryUpdating) {
		            Router.events.emit("routeChangeStart", as, routeProps);
		        }
		        const isErrorRoute = this.pathname === "/404" || this.pathname === "/_error";
		        try {
		            var _self___NEXT_DATA___props_pageProps, _self___NEXT_DATA___props, _routeInfo_props;
		            let routeInfo = await this.getRouteInfo({
		                route,
		                pathname,
		                query,
		                as,
		                resolvedAs,
		                routeProps,
		                locale: nextState.locale,
		                isPreview: nextState.isPreview,
		                hasMiddleware: isMiddlewareMatch,
		                unstable_skipClientCache: options.unstable_skipClientCache,
		                isQueryUpdating: isQueryUpdating && !this.isFallback,
		                isMiddlewareRewrite
		            });
		            if (!isQueryUpdating && !options.shallow) {
		                await this._bfl(as, "resolvedAs" in routeInfo ? routeInfo.resolvedAs : undefined, nextState.locale);
		            }
		            if ("route" in routeInfo && isMiddlewareMatch) {
		                pathname = routeInfo.route || route;
		                route = pathname;
		                if (!routeProps.shallow) {
		                    query = Object.assign({}, routeInfo.query || {}, query);
		                }
		                const cleanedParsedPathname = (0, _hasbasepath.hasBasePath)(parsed.pathname) ? (0, _removebasepath.removeBasePath)(parsed.pathname) : parsed.pathname;
		                if (routeMatch && pathname !== cleanedParsedPathname) {
		                    Object.keys(routeMatch).forEach((key)=>{
		                        if (routeMatch && query[key] === routeMatch[key]) {
		                            delete query[key];
		                        }
		                    });
		                }
		                if ((0, _isdynamic.isDynamicRoute)(pathname)) {
		                    const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(new URL(as, location.href).pathname, nextState.locale), true);
		                    let rewriteAs = prefixedAs;
		                    if ((0, _hasbasepath.hasBasePath)(rewriteAs)) {
		                        rewriteAs = (0, _removebasepath.removeBasePath)(rewriteAs);
		                    }
		                    if (browser$1.env.__NEXT_I18N_SUPPORT) {
		                        const localeResult = (0, _normalizelocalepath.normalizeLocalePath)(rewriteAs, this.locales);
		                        nextState.locale = localeResult.detectedLocale || nextState.locale;
		                        rewriteAs = localeResult.pathname;
		                    }
		                    const routeRegex = (0, _routeregex.getRouteRegex)(pathname);
		                    const curRouteMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(new URL(rewriteAs, location.href).pathname);
		                    if (curRouteMatch) {
		                        Object.assign(query, curRouteMatch);
		                    }
		                }
		            }
		            // If the routeInfo brings a redirect we simply apply it.
		            if ("type" in routeInfo) {
		                if (routeInfo.type === "redirect-internal") {
		                    return this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
		                } else {
		                    handleHardNavigation({
		                        url: routeInfo.destination,
		                        router: this
		                    });
		                    return new Promise(()=>{});
		                }
		            }
		            const component = routeInfo.Component;
		            if (component && component.unstable_scriptLoader) {
		                const scripts = [].concat(component.unstable_scriptLoader());
		                scripts.forEach((script)=>{
		                    (0, _script.handleClientScriptLoad)(script.props);
		                });
		            }
		            // handle redirect on client-transition
		            if ((routeInfo.__N_SSG || routeInfo.__N_SSP) && routeInfo.props) {
		                if (routeInfo.props.pageProps && routeInfo.props.pageProps.__N_REDIRECT) {
		                    // Use the destination from redirect without adding locale
		                    options.locale = false;
		                    const destination = routeInfo.props.pageProps.__N_REDIRECT;
		                    // check if destination is internal (resolves to a page) and attempt
		                    // client-navigation if it is falling back to hard navigation if
		                    // it's not
		                    if (destination.startsWith("/") && routeInfo.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
		                        const parsedHref = (0, _parserelativeurl.parseRelativeUrl)(destination);
		                        parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
		                        const { url: newUrl, as: newAs } = prepareUrlAs(this, destination, destination);
		                        return this.change(method, newUrl, newAs, options);
		                    }
		                    handleHardNavigation({
		                        url: destination,
		                        router: this
		                    });
		                    return new Promise(()=>{});
		                }
		                nextState.isPreview = !!routeInfo.props.__N_PREVIEW;
		                // handle SSG data 404
		                if (routeInfo.props.notFound === SSG_DATA_NOT_FOUND) {
		                    let notFoundRoute;
		                    try {
		                        await this.fetchComponent("/404");
		                        notFoundRoute = "/404";
		                    } catch (_) {
		                        notFoundRoute = "/_error";
		                    }
		                    routeInfo = await this.getRouteInfo({
		                        route: notFoundRoute,
		                        pathname: notFoundRoute,
		                        query,
		                        as,
		                        resolvedAs,
		                        routeProps: {
		                            shallow: false
		                        },
		                        locale: nextState.locale,
		                        isPreview: nextState.isPreview,
		                        isNotFound: true
		                    });
		                    if ("type" in routeInfo) {
		                        throw new Error("Unexpected middleware effect on /404");
		                    }
		                }
		            }
		            if (isQueryUpdating && this.pathname === "/_error" && ((_self___NEXT_DATA___props = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps = _self___NEXT_DATA___props.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps.statusCode) === 500 && ((_routeInfo_props = routeInfo.props) == null ? void 0 : _routeInfo_props.pageProps)) {
		                // ensure statusCode is still correct for static 500 page
		                // when updating query information
		                routeInfo.props.pageProps.statusCode = 500;
		            }
		            var _routeInfo_route;
		            // shallow routing is only allowed for same page URL changes.
		            const isValidShallowRoute = options.shallow && nextState.route === ((_routeInfo_route = routeInfo.route) != null ? _routeInfo_route : route);
		            var _options_scroll;
		            const shouldScroll = (_options_scroll = options.scroll) != null ? _options_scroll : !isQueryUpdating && !isValidShallowRoute;
		            const resetScroll = shouldScroll ? {
		                x: 0,
		                y: 0
		            } : null;
		            const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
		            // the new state that the router gonna set
		            const upcomingRouterState = {
		                ...nextState,
		                route,
		                pathname,
		                query,
		                asPath: cleanedAs,
		                isFallback: false
		            };
		            // When the page being rendered is the 404 page, we should only update the
		            // query parameters. Route changes here might add the basePath when it
		            // wasn't originally present. This is also why this block is before the
		            // below `changeState` call which updates the browser's history (changing
		            // the URL).
		            if (isQueryUpdating && isErrorRoute) {
		                var _self___NEXT_DATA___props_pageProps1, _self___NEXT_DATA___props1, _routeInfo_props1;
		                routeInfo = await this.getRouteInfo({
		                    route: this.pathname,
		                    pathname: this.pathname,
		                    query,
		                    as,
		                    resolvedAs,
		                    routeProps: {
		                        shallow: false
		                    },
		                    locale: nextState.locale,
		                    isPreview: nextState.isPreview,
		                    isQueryUpdating: isQueryUpdating && !this.isFallback
		                });
		                if ("type" in routeInfo) {
		                    throw new Error("Unexpected middleware effect on " + this.pathname);
		                }
		                if (this.pathname === "/_error" && ((_self___NEXT_DATA___props1 = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps1 = _self___NEXT_DATA___props1.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps1.statusCode) === 500 && ((_routeInfo_props1 = routeInfo.props) == null ? void 0 : _routeInfo_props1.pageProps)) {
		                    // ensure statusCode is still correct for static 500 page
		                    // when updating query information
		                    routeInfo.props.pageProps.statusCode = 500;
		                }
		                try {
		                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
		                } catch (err) {
		                    if ((0, _iserror.default)(err) && err.cancelled) {
		                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
		                    }
		                    throw err;
		                }
		                return true;
		            }
		            Router.events.emit("beforeHistoryChange", as, routeProps);
		            this.changeState(method, url, as, options);
		            // for query updates we can skip it if the state is unchanged and we don't
		            // need to scroll
		            // https://github.com/vercel/next.js/issues/37139
		            const canSkipUpdating = isQueryUpdating && !upcomingScrollState && !readyStateChange && !localeChange && (0, _comparestates.compareRouterStates)(upcomingRouterState, this.state);
		            if (!canSkipUpdating) {
		                try {
		                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
		                } catch (e) {
		                    if (e.cancelled) routeInfo.error = routeInfo.error || e;
		                    else throw e;
		                }
		                if (routeInfo.error) {
		                    if (!isQueryUpdating) {
		                        Router.events.emit("routeChangeError", routeInfo.error, cleanedAs, routeProps);
		                    }
		                    throw routeInfo.error;
		                }
		                if (browser$1.env.__NEXT_I18N_SUPPORT) {
		                    if (nextState.locale) {
		                        document.documentElement.lang = nextState.locale;
		                    }
		                }
		                if (!isQueryUpdating) {
		                    Router.events.emit("routeChangeComplete", as, routeProps);
		                }
		                // A hash mark # is the optional last part of a URL
		                const hashRegex = /#.+$/;
		                if (shouldScroll && hashRegex.test(as)) {
		                    this.scrollToHash(as);
		                }
		            }
		            return true;
		        } catch (err) {
		            if ((0, _iserror.default)(err) && err.cancelled) {
		                return false;
		            }
		            throw err;
		        }
		    }
		    changeState(method, url, as, options) {
		        if (options === void 0) options = {};
		        if (browser$1.env.NODE_ENV !== "production") {
		            if (typeof window.history === "undefined") {
		                console.error("Warning: window.history is not available.");
		                return;
		            }
		            if (typeof window.history[method] === "undefined") {
		                console.error("Warning: window.history." + method + " is not available");
		                return;
		            }
		        }
		        if (method !== "pushState" || (0, _utils.getURL)() !== as) {
		            this._shallow = options.shallow;
		            window.history[method]({
		                url,
		                as,
		                options,
		                __N: true,
		                key: this._key = method !== "pushState" ? this._key : createKey()
		            }, // Most browsers currently ignores this parameter, although they may use it in the future.
		            // Passing the empty string here should be safe against future changes to the method.
		            // https://developer.mozilla.org/docs/Web/API/History/replaceState
		            "", as);
		        }
		    }
		    async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
		        console.error(err);
		        if (err.cancelled) {
		            // bubble up cancellation errors
		            throw err;
		        }
		        if ((0, _routeloader.isAssetError)(err) || loadErrorFail) {
		            Router.events.emit("routeChangeError", err, as, routeProps);
		            // If we can't load the page it could be one of following reasons
		            //  1. Page doesn't exists
		            //  2. Page does exist in a different zone
		            //  3. Internal error while loading the page
		            // So, doing a hard reload is the proper way to deal with this.
		            handleHardNavigation({
		                url: as,
		                router: this
		            });
		            // Changing the URL doesn't block executing the current code path.
		            // So let's throw a cancellation error stop the routing logic.
		            throw buildCancellationError();
		        }
		        try {
		            let props;
		            const { page: Component, styleSheets } = await this.fetchComponent("/_error");
		            const routeInfo = {
		                props,
		                Component,
		                styleSheets,
		                err,
		                error: err
		            };
		            if (!routeInfo.props) {
		                try {
		                    routeInfo.props = await this.getInitialProps(Component, {
		                        err,
		                        pathname,
		                        query
		                    });
		                } catch (gipErr) {
		                    console.error("Error in error page `getInitialProps`: ", gipErr);
		                    routeInfo.props = {};
		                }
		            }
		            return routeInfo;
		        } catch (routeInfoErr) {
		            return this.handleRouteInfoError((0, _iserror.default)(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
		        }
		    }
		    async getRouteInfo(param) {
		        let { route: requestedRoute, pathname, query, as, resolvedAs, routeProps, locale, hasMiddleware, isPreview, unstable_skipClientCache, isQueryUpdating, isMiddlewareRewrite, isNotFound } = param;
		        /**
		     * This `route` binding can change if there's a rewrite
		     * so we keep a reference to the original requested route
		     * so we can store the cache for it and avoid re-requesting every time
		     * for shallow routing purposes.
		     */ let route = requestedRoute;
		        try {
		            var _data_effect, _data_effect1, _data_effect2, _data_response;
		            const handleCancelled = getCancelledHandler({
		                route,
		                router: this
		            });
		            let existingInfo = this.components[route];
		            if (routeProps.shallow && existingInfo && this.route === route) {
		                return existingInfo;
		            }
		            if (hasMiddleware) {
		                existingInfo = undefined;
		            }
		            let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && browser$1.env.NODE_ENV !== "development" ? existingInfo : undefined;
		            const isBackground = isQueryUpdating;
		            const fetchNextDataParams = {
		                dataHref: this.pageLoader.getDataHref({
		                    href: (0, _formaturl.formatWithValidation)({
		                        pathname,
		                        query
		                    }),
		                    skipInterpolation: true,
		                    asPath: isNotFound ? "/404" : resolvedAs,
		                    locale
		                }),
		                hasMiddleware: true,
		                isServerRender: this.isSsr,
		                parseJSON: true,
		                inflightCache: isBackground ? this.sbc : this.sdc,
		                persistCache: !isPreview,
		                isPrefetch: false,
		                unstable_skipClientCache,
		                isBackground
		            };
		            let data = isQueryUpdating && !isMiddlewareRewrite ? null : await withMiddlewareEffects({
		                fetchData: ()=>fetchNextData(fetchNextDataParams),
		                asPath: isNotFound ? "/404" : resolvedAs,
		                locale: locale,
		                router: this
		            }).catch((err)=>{
		                // we don't hard error during query updating
		                // as it's un-necessary and doesn't need to be fatal
		                // unless it is a fallback route and the props can't
		                // be loaded
		                if (isQueryUpdating) {
		                    return null;
		                }
		                throw err;
		            });
		            // when rendering error routes we don't apply middleware
		            // effects
		            if (data && (pathname === "/_error" || pathname === "/404")) {
		                data.effect = undefined;
		            }
		            if (isQueryUpdating) {
		                if (!data) {
		                    data = {
		                        json: self.__NEXT_DATA__.props
		                    };
		                } else {
		                    data.json = self.__NEXT_DATA__.props;
		                }
		            }
		            handleCancelled();
		            if ((data == null ? void 0 : (_data_effect = data.effect) == null ? void 0 : _data_effect.type) === "redirect-internal" || (data == null ? void 0 : (_data_effect1 = data.effect) == null ? void 0 : _data_effect1.type) === "redirect-external") {
		                return data.effect;
		            }
		            if ((data == null ? void 0 : (_data_effect2 = data.effect) == null ? void 0 : _data_effect2.type) === "rewrite") {
		                const resolvedRoute = (0, _removetrailingslash.removeTrailingSlash)(data.effect.resolvedHref);
		                const pages = await this.pageLoader.getPageList();
		                // during query updating the page must match although during
		                // client-transition a redirect that doesn't match a page
		                // can be returned and this should trigger a hard navigation
		                // which is valid for incremental migration
		                if (!isQueryUpdating || pages.includes(resolvedRoute)) {
		                    route = resolvedRoute;
		                    pathname = data.effect.resolvedHref;
		                    query = {
		                        ...query,
		                        ...data.effect.parsedAs.query
		                    };
		                    resolvedAs = (0, _removebasepath.removeBasePath)((0, _normalizelocalepath.normalizeLocalePath)(data.effect.parsedAs.pathname, this.locales).pathname);
		                    // Check again the cache with the new destination.
		                    existingInfo = this.components[route];
		                    if (routeProps.shallow && existingInfo && this.route === route && !hasMiddleware) {
		                        // If we have a match with the current route due to rewrite,
		                        // we can copy the existing information to the rewritten one.
		                        // Then, we return the information along with the matched route.
		                        return {
		                            ...existingInfo,
		                            route
		                        };
		                    }
		                }
		            }
		            if ((0, _isapiroute.isAPIRoute)(route)) {
		                handleHardNavigation({
		                    url: as,
		                    router: this
		                });
		                return new Promise(()=>{});
		            }
		            const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res)=>({
		                    Component: res.page,
		                    styleSheets: res.styleSheets,
		                    __N_SSG: res.mod.__N_SSG,
		                    __N_SSP: res.mod.__N_SSP
		                }));
		            if (browser$1.env.NODE_ENV !== "production") {
		                const { isValidElementType } = requireReactIs();
		                if (!isValidElementType(routeInfo.Component)) {
		                    throw new Error('The default export is not a React Component in page: "' + pathname + '"');
		                }
		            }
		            const wasBailedPrefetch = data == null ? void 0 : (_data_response = data.response) == null ? void 0 : _data_response.headers.get("x-middleware-skip");
		            const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
		            // For non-SSG prefetches that bailed before sending data
		            // we clear the cache to fetch full response
		            if (wasBailedPrefetch && (data == null ? void 0 : data.dataHref)) {
		                delete this.sdc[data.dataHref];
		            }
		            const { props, cacheKey } = await this._getData(async ()=>{
		                if (shouldFetchData) {
		                    if ((data == null ? void 0 : data.json) && !wasBailedPrefetch) {
		                        return {
		                            cacheKey: data.cacheKey,
		                            props: data.json
		                        };
		                    }
		                    const dataHref = (data == null ? void 0 : data.dataHref) ? data.dataHref : this.pageLoader.getDataHref({
		                        href: (0, _formaturl.formatWithValidation)({
		                            pathname,
		                            query
		                        }),
		                        asPath: resolvedAs,
		                        locale
		                    });
		                    const fetched = await fetchNextData({
		                        dataHref,
		                        isServerRender: this.isSsr,
		                        parseJSON: true,
		                        inflightCache: wasBailedPrefetch ? {} : this.sdc,
		                        persistCache: !isPreview,
		                        isPrefetch: false,
		                        unstable_skipClientCache
		                    });
		                    return {
		                        cacheKey: fetched.cacheKey,
		                        props: fetched.json || {}
		                    };
		                }
		                return {
		                    headers: {},
		                    props: await this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
		                    {
		                        pathname,
		                        query,
		                        asPath: as,
		                        locale,
		                        locales: this.locales,
		                        defaultLocale: this.defaultLocale
		                    })
		                };
		            });
		            // Only bust the data cache for SSP routes although
		            // middleware can skip cache per request with
		            // x-middleware-cache: no-cache as well
		            if (routeInfo.__N_SSP && fetchNextDataParams.dataHref && cacheKey) {
		                delete this.sdc[cacheKey];
		            }
		            // we kick off a HEAD request in the background
		            // when a non-prefetch request is made to signal revalidation
		            if (!this.isPreview && routeInfo.__N_SSG && browser$1.env.NODE_ENV !== "development" && !isQueryUpdating) {
		                fetchNextData(Object.assign({}, fetchNextDataParams, {
		                    isBackground: true,
		                    persistCache: false,
		                    inflightCache: this.sbc
		                })).catch(()=>{});
		            }
		            props.pageProps = Object.assign({}, props.pageProps);
		            routeInfo.props = props;
		            routeInfo.route = route;
		            routeInfo.query = query;
		            routeInfo.resolvedAs = resolvedAs;
		            this.components[route] = routeInfo;
		            return routeInfo;
		        } catch (err) {
		            return this.handleRouteInfoError((0, _iserror.getProperError)(err), pathname, query, as, routeProps);
		        }
		    }
		    set(state, data, resetScroll) {
		        this.state = state;
		        return this.sub(data, this.components["/_app"].Component, resetScroll);
		    }
		    /**
		   * Callback to execute before replacing router state
		   * @param cb callback to be executed
		   */ beforePopState(cb) {
		        this._bps = cb;
		    }
		    onlyAHashChange(as) {
		        if (!this.asPath) return false;
		        const [oldUrlNoHash, oldHash] = this.asPath.split("#", 2);
		        const [newUrlNoHash, newHash] = as.split("#", 2);
		        // Makes sure we scroll to the provided hash if the url/hash are the same
		        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
		            return true;
		        }
		        // If the urls are change, there's more than a hash change
		        if (oldUrlNoHash !== newUrlNoHash) {
		            return false;
		        }
		        // If the hash has changed, then it's a hash only change.
		        // This check is necessary to handle both the enter and
		        // leave hash === '' cases. The identity case falls through
		        // and is treated as a next reload.
		        return oldHash !== newHash;
		    }
		    scrollToHash(as) {
		        const [, hash = ""] = as.split("#", 2);
		        (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
		            // Scroll to top if the hash is just `#` with no value or `#top`
		            // To mirror browsers
		            if (hash === "" || hash === "top") {
		                window.scrollTo(0, 0);
		                return;
		            }
		            // Decode hash to make non-latin anchor works.
		            const rawHash = decodeURIComponent(hash);
		            // First we check if the element by id is found
		            const idEl = document.getElementById(rawHash);
		            if (idEl) {
		                idEl.scrollIntoView();
		                return;
		            }
		            // If there's no element with the id, we check the `name` property
		            // To mirror browsers
		            const nameEl = document.getElementsByName(rawHash)[0];
		            if (nameEl) {
		                nameEl.scrollIntoView();
		            }
		        }, {
		            onlyHashChange: this.onlyAHashChange(as)
		        });
		    }
		    urlIsNew(asPath) {
		        return this.asPath !== asPath;
		    }
		    /**
		   * Prefetch page code, you may wait for the data during page rendering.
		   * This feature only works in production!
		   * @param url the href of prefetched page
		   * @param asPath the as path of the prefetched page
		   */ async prefetch(url, asPath, options) {
		        if (asPath === void 0) asPath = url;
		        if (options === void 0) options = {};
		        // Prefetch is not supported in development mode because it would trigger on-demand-entries
		        if (browser$1.env.NODE_ENV !== "production") {
		            return;
		        }
		        if (typeof window !== "undefined" && (0, _isbot.isBot)(window.navigator.userAgent)) {
		            // No prefetches for bots that render the link since they are typically navigating
		            // links via the equivalent of a hard navigation and hence never utilize these
		            // prefetches.
		            return;
		        }
		        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
		        const urlPathname = parsed.pathname;
		        let { pathname, query } = parsed;
		        const originalPathname = pathname;
		        if (browser$1.env.__NEXT_I18N_SUPPORT) {
		            if (options.locale === false) {
		                pathname = (0, _normalizelocalepath.normalizeLocalePath)(pathname, this.locales).pathname;
		                parsed.pathname = pathname;
		                url = (0, _formaturl.formatWithValidation)(parsed);
		                let parsedAs = (0, _parserelativeurl.parseRelativeUrl)(asPath);
		                const localePathResult = (0, _normalizelocalepath.normalizeLocalePath)(parsedAs.pathname, this.locales);
		                parsedAs.pathname = localePathResult.pathname;
		                options.locale = localePathResult.detectedLocale || this.defaultLocale;
		                asPath = (0, _formaturl.formatWithValidation)(parsedAs);
		            }
		        }
		        const pages = await this.pageLoader.getPageList();
		        let resolvedAs = asPath;
		        const locale = typeof options.locale !== "undefined" ? options.locale || undefined : this.locale;
		        const isMiddlewareMatch = await matchesMiddleware({
		            asPath: asPath,
		            locale: locale,
		            router: this
		        });
		        if (browser$1.env.__NEXT_HAS_REWRITES && asPath.startsWith("/")) {
		            let rewrites;
		            ({ __rewrites: rewrites } = await (0, _routeloader.getClientBuildManifest)());
		            const rewritesResult = (0, _resolverewrites.default)((0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(asPath, this.locale), true), pages, rewrites, parsed.query, (p)=>resolveDynamicRoute(p, pages), this.locales);
		            if (rewritesResult.externalDest) {
		                return;
		            }
		            if (!isMiddlewareMatch) {
		                resolvedAs = (0, _removelocale.removeLocale)((0, _removebasepath.removeBasePath)(rewritesResult.asPath), this.locale);
		            }
		            if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
		                // if this directly matches a page we need to update the href to
		                // allow the correct page chunk to be loaded
		                pathname = rewritesResult.resolvedHref;
		                parsed.pathname = pathname;
		                if (!isMiddlewareMatch) {
		                    url = (0, _formaturl.formatWithValidation)(parsed);
		                }
		            }
		        }
		        parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
		        if ((0, _isdynamic.isDynamicRoute)(parsed.pathname)) {
		            pathname = parsed.pathname;
		            parsed.pathname = pathname;
		            Object.assign(query, (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(parsed.pathname))((0, _parsepath.parsePath)(asPath).pathname) || {});
		            if (!isMiddlewareMatch) {
		                url = (0, _formaturl.formatWithValidation)(parsed);
		            }
		        }
		        const data = browser$1.env.__NEXT_MIDDLEWARE_PREFETCH === "strict" ? null : await withMiddlewareEffects({
		            fetchData: ()=>fetchNextData({
		                    dataHref: this.pageLoader.getDataHref({
		                        href: (0, _formaturl.formatWithValidation)({
		                            pathname: originalPathname,
		                            query
		                        }),
		                        skipInterpolation: true,
		                        asPath: resolvedAs,
		                        locale
		                    }),
		                    hasMiddleware: true,
		                    isServerRender: this.isSsr,
		                    parseJSON: true,
		                    inflightCache: this.sdc,
		                    persistCache: !this.isPreview,
		                    isPrefetch: true
		                }),
		            asPath: asPath,
		            locale: locale,
		            router: this
		        });
		        /**
		     * If there was a rewrite we apply the effects of the rewrite on the
		     * current parameters for the prefetch.
		     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
		            parsed.pathname = data.effect.resolvedHref;
		            pathname = data.effect.resolvedHref;
		            query = {
		                ...query,
		                ...data.effect.parsedAs.query
		            };
		            resolvedAs = data.effect.parsedAs.pathname;
		            url = (0, _formaturl.formatWithValidation)(parsed);
		        }
		        /**
		     * If there is a redirect to an external destination then we don't have
		     * to prefetch content as it will be unused.
		     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
		            return;
		        }
		        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
		        if (await this._bfl(asPath, resolvedAs, options.locale, true)) {
		            this.components[urlPathname] = {
		                __appRouter: true
		            };
		        }
		        await Promise.all([
		            this.pageLoader._isSsg(route).then((isSsg)=>{
		                return isSsg ? fetchNextData({
		                    dataHref: (data == null ? void 0 : data.json) ? data == null ? void 0 : data.dataHref : this.pageLoader.getDataHref({
		                        href: url,
		                        asPath: resolvedAs,
		                        locale: locale
		                    }),
		                    isServerRender: false,
		                    parseJSON: true,
		                    inflightCache: this.sdc,
		                    persistCache: !this.isPreview,
		                    isPrefetch: true,
		                    unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!browser$1.env.__NEXT_OPTIMISTIC_CLIENT_CACHE
		                }).then(()=>false).catch(()=>false) : false;
		            }),
		            this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
		        ]);
		    }
		    async fetchComponent(route) {
		        const handleCancelled = getCancelledHandler({
		            route,
		            router: this
		        });
		        try {
		            const componentResult = await this.pageLoader.loadPage(route);
		            handleCancelled();
		            return componentResult;
		        } catch (err) {
		            handleCancelled();
		            throw err;
		        }
		    }
		    _getData(fn) {
		        let cancelled = false;
		        const cancel = ()=>{
		            cancelled = true;
		        };
		        this.clc = cancel;
		        return fn().then((data)=>{
		            if (cancel === this.clc) {
		                this.clc = null;
		            }
		            if (cancelled) {
		                const err = new Error("Loading initial props cancelled");
		                err.cancelled = true;
		                throw err;
		            }
		            return data;
		        });
		    }
		    _getFlightData(dataHref) {
		        // Do not cache RSC flight response since it's not a static resource
		        return fetchNextData({
		            dataHref,
		            isServerRender: true,
		            parseJSON: false,
		            inflightCache: this.sdc,
		            persistCache: false,
		            isPrefetch: false
		        }).then((param)=>{
		            let { text } = param;
		            return {
		                data: text
		            };
		        });
		    }
		    getInitialProps(Component, ctx) {
		        const { Component: App } = this.components["/_app"];
		        const AppTree = this._wrapApp(App);
		        ctx.AppTree = AppTree;
		        return (0, _utils.loadGetInitialProps)(App, {
		            AppTree,
		            Component,
		            router: this,
		            ctx
		        });
		    }
		    get route() {
		        return this.state.route;
		    }
		    get pathname() {
		        return this.state.pathname;
		    }
		    get query() {
		        return this.state.query;
		    }
		    get asPath() {
		        return this.state.asPath;
		    }
		    get locale() {
		        return this.state.locale;
		    }
		    get isFallback() {
		        return this.state.isFallback;
		    }
		    get isPreview() {
		        return this.state.isPreview;
		    }
		    constructor(pathname, query, as, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview }){
		        // Server Data Cache (full data requests)
		        this.sdc = {};
		        // Server Background Cache (HEAD requests)
		        this.sbc = {};
		        this.isFirstPopStateEvent = true;
		        this._key = createKey();
		        this.onPopState = (e)=>{
		            const { isFirstPopStateEvent } = this;
		            this.isFirstPopStateEvent = false;
		            const state = e.state;
		            if (!state) {
		                // We get state as undefined for two reasons.
		                //  1. With older safari (< 8) and older chrome (< 34)
		                //  2. When the URL changed with #
		                //
		                // In the both cases, we don't need to proceed and change the route.
		                // (as it's already changed)
		                // But we can simply replace the state with the new changes.
		                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
		                // So, doing the following for (1) does no harm.
		                const { pathname, query } = this;
		                this.changeState("replaceState", (0, _formaturl.formatWithValidation)({
		                    pathname: (0, _addbasepath.addBasePath)(pathname),
		                    query
		                }), (0, _utils.getURL)());
		                return;
		            }
		            // __NA is used to identify if the history entry can be handled by the app-router.
		            if (state.__NA) {
		                window.location.reload();
		                return;
		            }
		            if (!state.__N) {
		                return;
		            }
		            // Safari fires popstateevent when reopening the browser.
		            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
		                return;
		            }
		            let forcedScroll;
		            const { url, as, options, key } = state;
		            if (browser$1.env.__NEXT_SCROLL_RESTORATION) {
		                if (manualScrollRestoration) {
		                    if (this._key !== key) {
		                        // Snapshot current scroll position:
		                        try {
		                            sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
		                                x: self.pageXOffset,
		                                y: self.pageYOffset
		                            }));
		                        } catch (e) {}
		                        // Restore old scroll position:
		                        try {
		                            const v = sessionStorage.getItem("__next_scroll_" + key);
		                            forcedScroll = JSON.parse(v);
		                        } catch (e) {
		                            forcedScroll = {
		                                x: 0,
		                                y: 0
		                            };
		                        }
		                    }
		                }
		            }
		            this._key = key;
		            const { pathname } = (0, _parserelativeurl.parseRelativeUrl)(url);
		            // Make sure we don't re-render on initial load,
		            // can be caused by navigating back from an external site
		            if (this.isSsr && as === (0, _addbasepath.addBasePath)(this.asPath) && pathname === (0, _addbasepath.addBasePath)(this.pathname)) {
		                return;
		            }
		            // If the downstream application returns falsy, return.
		            // They will then be responsible for handling the event.
		            if (this._bps && !this._bps(state)) {
		                return;
		            }
		            this.change("replaceState", url, as, Object.assign({}, options, {
		                shallow: options.shallow && this._shallow,
		                locale: options.locale || this.defaultLocale,
		                // @ts-ignore internal value not exposed on types
		                _h: 0
		            }), forcedScroll);
		        };
		        // represents the current component key
		        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
		        // set up the component cache (by route keys)
		        this.components = {};
		        // We should not keep the cache, if there's an error
		        // Otherwise, this cause issues when when going back and
		        // come again to the errored page.
		        if (pathname !== "/_error") {
		            this.components[route] = {
		                Component,
		                initial: true,
		                props: initialProps,
		                err,
		                __N_SSG: initialProps && initialProps.__N_SSG,
		                __N_SSP: initialProps && initialProps.__N_SSP
		            };
		        }
		        this.components["/_app"] = {
		            Component: App,
		            styleSheets: []
		        };
		        if (browser$1.env.__NEXT_CLIENT_ROUTER_FILTER_ENABLED) {
		            const { BloomFilter } = requireBloomFilter();
		            const staticFilterData = browser$1.env.__NEXT_CLIENT_ROUTER_S_FILTER;
		            const dynamicFilterData = browser$1.env.__NEXT_CLIENT_ROUTER_D_FILTER;
		            if (staticFilterData == null ? void 0 : staticFilterData.numHashes) {
		                this._bfl_s = new BloomFilter(staticFilterData.numItems, staticFilterData.errorRate);
		                this._bfl_s.import(staticFilterData);
		            }
		            if (dynamicFilterData == null ? void 0 : dynamicFilterData.numHashes) {
		                this._bfl_d = new BloomFilter(dynamicFilterData.numItems, dynamicFilterData.errorRate);
		                this._bfl_d.import(dynamicFilterData);
		            }
		        }
		        // Backwards compat for Router.router.events
		        // TODO: Should be remove the following major version as it was never documented
		        this.events = Router.events;
		        this.pageLoader = pageLoader;
		        // if auto prerendered and dynamic route wait to update asPath
		        // until after mount to prevent hydration mismatch
		        const autoExportDynamic = (0, _isdynamic.isDynamicRoute)(pathname) && self.__NEXT_DATA__.autoExport;
		        this.basePath = browser$1.env.__NEXT_ROUTER_BASEPATH || "";
		        this.sub = subscription;
		        this.clc = null;
		        this._wrapApp = wrapApp;
		        // make sure to ignore extra popState in safari on navigating
		        // back from external site
		        this.isSsr = true;
		        this.isLocaleDomain = false;
		        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !browser$1.env.__NEXT_HAS_REWRITES);
		        if (browser$1.env.__NEXT_I18N_SUPPORT) {
		            this.locales = locales;
		            this.defaultLocale = defaultLocale;
		            this.domainLocales = domainLocales;
		            this.isLocaleDomain = !!(0, _detectdomainlocale.detectDomainLocale)(domainLocales, self.location.hostname);
		        }
		        this.state = {
		            route,
		            pathname,
		            query,
		            asPath: autoExportDynamic ? pathname : as,
		            isPreview: !!isPreview,
		            locale: browser$1.env.__NEXT_I18N_SUPPORT ? locale : undefined,
		            isFallback
		        };
		        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
		        if (typeof window !== "undefined") {
		            // make sure "as" doesn't start with double slashes or else it can
		            // throw an error as it's considered invalid
		            if (!as.startsWith("//")) {
		                // in order for `e.state` to work on the `onpopstate` event
		                // we have to register the initial route upon initialization
		                const options = {
		                    locale
		                };
		                const asPath = (0, _utils.getURL)();
		                this._initialMatchesMiddlewarePromise = matchesMiddleware({
		                    router: this,
		                    locale,
		                    asPath
		                }).then((matches)=>{
		                    options._shouldResolveHref = as !== pathname;
		                    this.changeState("replaceState", matches ? asPath : (0, _formaturl.formatWithValidation)({
		                        pathname: (0, _addbasepath.addBasePath)(pathname),
		                        query
		                    }), asPath, options);
		                    return matches;
		                });
		            }
		            window.addEventListener("popstate", this.onPopState);
		            // enable custom scroll restoration handling when available
		            // otherwise fallback to browser's default handling
		            if (browser$1.env.__NEXT_SCROLL_RESTORATION) {
		                if (manualScrollRestoration) {
		                    window.history.scrollRestoration = "manual";
		                }
		            }
		        }
		    }
		}
		Router.events = (0, _mitt.default)();

		
	} (router$1));
	return router$1;
}

var withRouter = {exports: {}};

var hasRequiredWithRouter;

function requireWithRouter () {
	if (hasRequiredWithRouter) return withRouter.exports;
	hasRequiredWithRouter = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return withRouter;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const _router = requireRouter();
		function withRouter(ComposedComponent) {
		    function WithRouterWrapper(props) {
		        return /*#__PURE__*/ _react.default.createElement(ComposedComponent, {
		            router: (0, _router.useRouter)(),
		            ...props
		        });
		    }
		    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
		    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
		    if (browser$1.env.NODE_ENV !== "production") {
		        const name = ComposedComponent.displayName || ComposedComponent.name || "Unknown";
		        WithRouterWrapper.displayName = "withRouter(" + name + ")";
		    }
		    return WithRouterWrapper;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (withRouter, withRouter.exports));
	return withRouter.exports;
}

/* global window */

var hasRequiredRouter;

function requireRouter () {
	if (hasRequiredRouter) return router$2.exports;
	hasRequiredRouter = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    Router: function() {
		        return _router.default;
		    },
		    // Export the singletonRouter and this is the public API.
		    default: function() {
		        return _default;
		    },
		    withRouter: function() {
		        return _withrouter.default;
		    },
		    useRouter: function() {
		        return useRouter;
		    },
		    createRouter: function() {
		        return createRouter;
		    },
		    makePublicRouterInstance: function() {
		        return makePublicRouterInstance;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(require$$1$2);
		const _router = /*#__PURE__*/ _interop_require_default._(requireRouter$1());
		const _routercontextsharedruntime = requireRouterContext_sharedRuntime();
		const _iserror = /*#__PURE__*/ _interop_require_default._(requireIsError());
		const _withrouter = /*#__PURE__*/ _interop_require_default._(requireWithRouter());
		const singletonRouter = {
		    router: null,
		    readyCallbacks: [],
		    ready (callback) {
		        if (this.router) return callback();
		        if (typeof window !== "undefined") {
		            this.readyCallbacks.push(callback);
		        }
		    }
		};
		// Create public properties and methods of the router in the singletonRouter
		const urlPropertyFields = [
		    "pathname",
		    "route",
		    "query",
		    "asPath",
		    "components",
		    "isFallback",
		    "basePath",
		    "locale",
		    "locales",
		    "defaultLocale",
		    "isReady",
		    "isPreview",
		    "isLocaleDomain",
		    "domainLocales"
		];
		const routerEvents = [
		    "routeChangeStart",
		    "beforeHistoryChange",
		    "routeChangeComplete",
		    "routeChangeError",
		    "hashChangeStart",
		    "hashChangeComplete"
		];
		const coreMethodFields = [
		    "push",
		    "replace",
		    "reload",
		    "back",
		    "prefetch",
		    "beforePopState"
		];
		// Events is a static property on the router, the router doesn't have to be initialized to use it
		Object.defineProperty(singletonRouter, "events", {
		    get () {
		        return _router.default.events;
		    }
		});
		function getRouter() {
		    if (!singletonRouter.router) {
		        const message = "No router instance found.\n" + 'You should only use "next/router" on the client side of your app.\n';
		        throw new Error(message);
		    }
		    return singletonRouter.router;
		}
		urlPropertyFields.forEach((field)=>{
		    // Here we need to use Object.defineProperty because we need to return
		    // the property assigned to the actual router
		    // The value might get changed as we change routes and this is the
		    // proper way to access it
		    Object.defineProperty(singletonRouter, field, {
		        get () {
		            const router = getRouter();
		            return router[field];
		        }
		    });
		});
		coreMethodFields.forEach((field)=>{
		    singletonRouter[field] = function() {
		        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		            args[_key] = arguments[_key];
		        }
		        const router = getRouter();
		        return router[field](...args);
		    };
		});
		routerEvents.forEach((event)=>{
		    singletonRouter.ready(()=>{
		        _router.default.events.on(event, function() {
		            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		                args[_key] = arguments[_key];
		            }
		            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
		            const _singletonRouter = singletonRouter;
		            if (_singletonRouter[eventField]) {
		                try {
		                    _singletonRouter[eventField](...args);
		                } catch (err) {
		                    console.error("Error when running the Router event: " + eventField);
		                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + "");
		                }
		            }
		        });
		    });
		});
		const _default = singletonRouter;
		function useRouter() {
		    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
		    if (!router) {
		        throw new Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
		    }
		    return router;
		}
		function createRouter() {
		    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		        args[_key] = arguments[_key];
		    }
		    singletonRouter.router = new _router.default(...args);
		    singletonRouter.readyCallbacks.forEach((cb)=>cb());
		    singletonRouter.readyCallbacks = [];
		    return singletonRouter.router;
		}
		function makePublicRouterInstance(router) {
		    const scopedRouter = router;
		    const instance = {};
		    for (const property of urlPropertyFields){
		        if (typeof scopedRouter[property] === "object") {
		            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
		            ;
		            continue;
		        }
		        instance[property] = scopedRouter[property];
		    }
		    // Events is a static property on the router, the router doesn't have to be initialized to use it
		    instance.events = _router.default.events;
		    coreMethodFields.forEach((field)=>{
		        instance[field] = function() {
		            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		                args[_key] = arguments[_key];
		            }
		            return scopedRouter[field](...args);
		        };
		    });
		    return instance;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (router$2, router$2.exports));
	return router$2.exports;
}

var router = requireRouter();

/**
 * TopTitle 컴포넌트는 상단 타이틀을 표시하는 컴포넌트입니다.
 * @param type 타이틀의 타입입니다. back은 뒤로가기, cancel은 취소 버튼을 표시합니다.
 * @param title 타이틀의 내용입니다.
 * @param iconSrc 타이틀 오른쪽에 표시할 아이콘의 경로입니다. 없으면 표시하지 않습니다.
 * @param onClickIcon 타이틀 오른쪽에 표시할 아이콘을 클릭했을 때 실행할 함수입니다.
 * @returns
 */
function TopTitle(_a) {
    var _b = _a.type, type = _b === void 0 ? "back" : _b, title = _a.title, iconSrc = _a.iconSrc, onClickIcon = _a.onClickIcon;
    var router$1 = router.useRouter();
    return (jsxRuntime.jsxs(FlexBox, { className: "w-full h-[60px] shrink-0", children: [jsxRuntime.jsx("div", { className: "w-[32px] shrink-0 cursor-pointer", children: jsxRuntime.jsx(Icon, { src: type === "back"
                        ? "/icon/direction/left.svg"
                        : "/icon/control/close.svg", sz: 32, onClick: router$1.back }) }), jsxRuntime.jsx(FlexBox, { className: "w-full h-full justify-center", children: jsxRuntime.jsx("div", { className: "B4-medium", children: title }) }), jsxRuntime.jsx("div", { className: "w-[32px] shrink-0 cursor-pointer", children: iconSrc && jsxRuntime.jsx(Icon, { src: iconSrc, sz: 32, onClick: onClickIcon }) })] }));
}

/**
 * AdminSettingBanner 컴포넌트는 권한 설정 배너 컴포넌트입니다.
 * @param onClick 배너 클릭 시 실행되는 함수를 입력합니다.
 * @returns {JSX.Element} AdminSettingBanner 컴포넌트를 반환합니다.
 * @example <AdminSettingBanner onClick={() => console.log("권한 설정")} />
 */
function AdminSettingBanner(_a) {
    var onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, className: "w-full", children: jsxRuntime.jsx("div", { className: "w-full h-[60px] pl-4 pr-2.5 py-3 bg-white rounded-lg border border-Gray5", children: jsxRuntime.jsxs(FlexBox, { className: "w-full h-full justify-between", children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "h-full justify-between items-start", children: [jsxRuntime.jsx("div", { className: "B5-medium text-Gray5", children: "\uAD8C\uD55C \uC124\uC815" }), jsxRuntime.jsx("div", { className: "B4-medium text-Gray7", children: "\uAD00\uB9AC\uC790\uB97C \uB4F1\uB85D\uD574 \uD3B8\uB9AC\uD558\uAC8C \uAC00\uAC8C\uB97C \uC6B4\uC601\uD558\uC138\uC694" })] }), jsxRuntime.jsx(Icon, { src: "/icon/direction/right.svg", sz: 24 })] }) }) }));
}

var dayjs_min = {exports: {}};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
} (dayjs_min));

var dayjs_minExports = dayjs_min.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var styleBySize$1 = {
    S: "w-[172px]",
    L: "w-[280px]",
};
var styleByDirection = {
    left: "rounded-r-[12px] pl-4 pr-5",
    right: "rounded-l-[12px] pr-4 pl-5",
};
/**
 * WorkInfoBanner 컴포넌트는 근무시간 배너 컴포넌트입니다.
 * @param direction 배너가 나타나는 위치를 결정합니다. (left | right)
 * @param size 배너의 크기를 결정합니다. (S | L)
 * @param type 배너의 정규, 연장 근무 타입을 결정합니다. (regular | overtime)
 * @param workingMinutes 근무시간을 분 단위로 입력합니다.
 * @returns {JSX.Element} WorkInfoBanner 컴포넌트를 반환합니다.
 * @example <WorkInfoBanner direction="right" size="S" type="overtime" workingMinutes={2200} />
 */
function WorkInfoBanner(_a) {
    var direction = _a.direction, size = _a.size, type = _a.type, _b = _a.workingMinutes, workingMinutes = _b === void 0 ? 0 : _b;
    var hours = Math.floor(workingMinutes / 60);
    var minutes = workingMinutes % 60;
    var currentDate = dayjs().format("MM/DD");
    return (jsxRuntime.jsx("div", { className: "h-[76px] bg-black py-2 ".concat(styleByDirection[direction], " ").concat(styleBySize$1[size]), children: jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full h-full items-start justify-between", children: [jsxRuntime.jsx("span", { className: "B5-medium text-Gray2", children: type === "regular" ? "정규 근무" : "연장 근무" }), jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between", children: [jsxRuntime.jsxs(FlexBox, { className: size === "L" ? "gap-2" : "gap-1", children: [jsxRuntime.jsxs(FlexBox, { className: size === "L" ? "gap-1" : "", children: [jsxRuntime.jsx("span", { className: "H4-bold text-white", children: hours.toString().padStart(3, "0") }), jsxRuntime.jsx("span", { className: "B3-medium text-Gray3 mt-1.5", children: "\uC2DC\uAC04" })] }), jsxRuntime.jsxs(FlexBox, { className: size === "L" ? "gap-1" : "", children: [jsxRuntime.jsx("span", { className: "H4-bold text-white", children: minutes.toString().padStart(2, "0") }), jsxRuntime.jsx("span", { className: "B3-medium text-Gray3 mt-1.5", children: "\uBD84" })] })] }), size === "L" && (jsxRuntime.jsxs("div", { className: "B4-medium text-Gray5 mt-1.5", children: [currentDate, " \uAE30\uC900"] }))] })] }) }));
}

var text$3 = {
    main: "홈",
    feed: "피드",
    reels: "리얼",
    record: "녹화",
    my: "마이",
};
function TabIcon$2(_a) {
    var type = _a.type, selected = _a.selected;
    if (selected)
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/main_black.png", sz: 32 });
            case "feed":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/feed_black.png", sz: 32 });
            case "reels":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/reels_black.png", sz: 32 });
            case "record":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/record_black.png", sz: 32 });
            case "my":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/my_black.png", sz: 32 });
            default:
                return null;
        }
    else
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/main_gray.png", sz: 32 });
            case "feed":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/feed_gray.png", sz: 32 });
            case "reels":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/reels_gray.png", sz: 32 });
            case "record":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/record_gray.png", sz: 32 });
            case "my":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/customer/my_gray.png", sz: 32 });
            default:
                return null;
        }
}
function Status$2(_a) {
    var type = _a.type, selected = _a.selected, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, className: "cursor-pointer", children: jsxRuntime.jsxs(FlexBox, { direction: "col", children: [jsxRuntime.jsx(TabIcon$2, { type: type, selected: selected }), jsxRuntime.jsx("div", { className: "C3 ".concat(selected ? "text-Black" : "text-Gray5"), children: text$3[type] })] }) }));
}
function TabBar() {
    var _a = require$$1$2.useState("main"), selectedTab = _a[0], setSelectedTab = _a[1];
    var selectHandle = function (type) {
        setSelectedTab(type);
    };
    return (jsxRuntime.jsx("div", { className: "w-full sticky bottom-0 pb-8 pt-5 px-4 bg-white border-t", children: jsxRuntime.jsxs(FlexBox, { className: "justify-between gap-2", children: [jsxRuntime.jsx(Status$2, { type: "main", selected: selectedTab === "main", onClick: function () { return selectHandle("main"); } }), jsxRuntime.jsx(Status$2, { type: "feed", selected: selectedTab === "feed", onClick: function () { return selectHandle("feed"); } }), jsxRuntime.jsx(Status$2, { type: "reels", selected: selectedTab === "reels", onClick: function () { return selectHandle("reels"); } }), jsxRuntime.jsx(Status$2, { type: "record", selected: selectedTab === "record", onClick: function () { return selectHandle("record"); } }), jsxRuntime.jsx(Status$2, { type: "my", selected: selectedTab === "my", onClick: function () { return selectHandle("my"); } })] }) }));
}

var text$2 = {
    main: "홈",
    menu: "메뉴관리",
    review: "리뷰관리",
    news: "소식관리",
};
function TabIcon$1(_a) {
    var type = _a.type, selected = _a.selected;
    if (selected)
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/main_black.png", sz: 32 });
            case "menu":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/menu_black.png", sz: 32 });
            case "review":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/review_black.png", sz: 32 });
            case "news":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/news_black.png", sz: 32 });
            default:
                return null;
        }
    else
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/main_gray.png", sz: 32 });
            case "menu":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/menu_gray.png", sz: 32 });
            case "review":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/review_gray.png", sz: 32 });
            case "news":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/ceo/news_gray.png", sz: 32 });
            default:
                return null;
        }
}
function Status$1(_a) {
    var type = _a.type, selected = _a.selected, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, className: "cursor-pointer", children: jsxRuntime.jsxs(FlexBox, { direction: "col", children: [jsxRuntime.jsx(TabIcon$1, { type: type, selected: selected }), jsxRuntime.jsx("div", { className: "C3 ".concat(selected ? "text-Black" : "text-Gray5"), children: text$2[type] })] }) }));
}
function TabBarCeo() {
    var _a = require$$1$2.useState("main"), selectedTab = _a[0], setSelectedTab = _a[1];
    var selectHandle = function (type) {
        setSelectedTab(type);
    };
    return (jsxRuntime.jsx("div", { className: "w-full sticky bottom-0 pb-8 pt-5 px-4 bg-white border-t", children: jsxRuntime.jsxs(FlexBox, { className: "justify-between gap-2", children: [jsxRuntime.jsx(Status$1, { type: "main", selected: selectedTab === "main", onClick: function () { return selectHandle("main"); } }), jsxRuntime.jsx(Status$1, { type: "menu", selected: selectedTab === "menu", onClick: function () { return selectHandle("menu"); } }), jsxRuntime.jsx(Status$1, { type: "review", selected: selectedTab === "review", onClick: function () { return selectHandle("review"); } }), jsxRuntime.jsx(Status$1, { type: "news", selected: selectedTab === "news", onClick: function () { return selectHandle("news"); } })] }) }));
}

var text$1 = {
    main: "홈",
    manage: "직원관리",
    mypage: "마이",
};
function TabIcon(_a) {
    var type = _a.type, selected = _a.selected;
    if (selected)
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/main_black.png", sz: 32 });
            case "manage":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/manage_black.png", sz: 32 });
            case "mypage":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/my_black.png", sz: 32 });
            default:
                return null;
        }
    else
        switch (type) {
            case "main":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/main_gray.png", sz: 32 });
            case "manage":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/manage_gray.png", sz: 32 });
            case "mypage":
                return jsxRuntime.jsx(Icon, { src: "/icon/bars/gage/my_gray.png", sz: 32 });
            default:
                return null;
        }
}
function Status(_a) {
    var type = _a.type, selected = _a.selected, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, className: "w-1/3 cursor-pointer", children: jsxRuntime.jsxs(FlexBox, { direction: "col", children: [jsxRuntime.jsx(TabIcon, { type: type, selected: selected }), jsxRuntime.jsx("div", { className: "C3 ".concat(selected ? "text-Black" : "text-Gray5"), children: text$1[type] })] }) }));
}
function TabBarGage() {
    var router$1 = router.useRouter();
    var path = router$1.pathname.split("/")[1];
    var selectHandle = function (type) {
        router$1.push("/".concat(type));
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "w-full min-h-[100px]" }), jsxRuntime.jsx("div", { className: "w-full h-[100px] fixed bottom-0 pb-8 pt-5 bg-white border-t", children: jsxRuntime.jsx(FlexBox, { className: "justify-between", children: ["main", "manage", "mypage"].map(function (type, index) {
                        return (jsxRuntime.jsx(Status, { type: type, selected: type === path, onClick: function () { return selectHandle(type); } }, index));
                    }) }) })] }));
}

function HomeBar() {
    return (jsxRuntime.jsxs(FlexBox, { className: "mt-2 justify-between w-full px-4", children: [jsxRuntime.jsxs(FlexBox, { children: [jsxRuntime.jsx("div", { className: "B4-medium text-Gray6 max-w-[200px] truncate overflow-ellipsis", children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uB9C8\uD3EC\uAD6C \uC6D4\uB4DC\uCEF5\uBD81\uB85C4" }), jsxRuntime.jsx(Icon, { src: "/icon/direction/down.svg", sz: 20 })] }), jsxRuntime.jsxs(FlexBox, { className: "gap-2", children: [jsxRuntime.jsx(FlexBox, { className: "px-2 py-[2px] bg-black rounded-full", children: jsxRuntime.jsx("div", { className: "C3 text-White", children: "NFC \uC2A4\uCE94" }) }), jsxRuntime.jsx(Icon, { src: "/icon/default/search.svg", sz: 24 })] })] }));
}

let keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  {
    config.init = read;
    config.read = defaultRead;
    config.write = defaultWrite;
  }
  return config;
}
function defaultRead(get) {
  return get(this);
}
function defaultWrite(get, set, arg) {
  return set(
    this,
    typeof arg === "function" ? arg(get(this)) : arg
  );
}

const isSelfAtom = (atom, a) => atom.unstable_is ? atom.unstable_is(a) : a === atom;
const hasInitialValue = (atom) => "init" in atom;
const isActuallyWritableAtom = (atom) => !!atom.write;
const cancelPromiseMap = /* @__PURE__ */ new WeakMap();
const registerCancelPromise = (promise, cancel) => {
  cancelPromiseMap.set(promise, cancel);
  promise.catch(() => {
  }).finally(() => cancelPromiseMap.delete(promise));
};
const cancelPromise = (promise, next) => {
  const cancel = cancelPromiseMap.get(promise);
  if (cancel) {
    cancelPromiseMap.delete(promise);
    cancel(next);
  }
};
const resolvePromise = (promise, value) => {
  promise.status = "fulfilled";
  promise.value = value;
};
const rejectPromise = (promise, e) => {
  promise.status = "rejected";
  promise.reason = e;
};
const isPromiseLike$1 = (x) => typeof (x == null ? void 0 : x.then) === "function";
const isEqualAtomValue = (a, b) => !!a && "v" in a && "v" in b && Object.is(a.v, b.v);
const isEqualAtomError = (a, b) => !!a && "e" in a && "e" in b && Object.is(a.e, b.e);
const hasPromiseAtomValue = (a) => !!a && "v" in a && a.v instanceof Promise;
const isEqualPromiseAtomValue = (a, b) => "v" in a && "v" in b && a.v.orig && a.v.orig === b.v.orig;
const returnAtomValue = (atomState) => {
  if ("e" in atomState) {
    throw atomState.e;
  }
  return atomState.v;
};
const createStore$1 = () => {
  const atomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingStack = [];
  const pendingMap = /* @__PURE__ */ new WeakMap();
  let devListenersRev2;
  let mountedAtoms;
  if ((undefined ? undefined.MODE : void 0) !== "production") {
    devListenersRev2 = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  const getAtomState = (atom) => atomStateMap.get(atom);
  const addPendingDependent = (atom, atomState) => {
    atomState.d.forEach((_, a) => {
      var _a;
      if (!pendingMap.has(a)) {
        const aState = getAtomState(a);
        (_a = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a.add(a);
        pendingMap.set(a, [aState, /* @__PURE__ */ new Set()]);
        if (aState) {
          addPendingDependent(a, aState);
        }
      }
      pendingMap.get(a)[1].add(atom);
    });
  };
  const setAtomState = (atom, atomState) => {
    var _a;
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      Object.freeze(atomState);
    }
    const prevAtomState = getAtomState(atom);
    atomStateMap.set(atom, atomState);
    if (!pendingMap.has(atom)) {
      (_a = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a.add(atom);
      pendingMap.set(atom, [prevAtomState, /* @__PURE__ */ new Set()]);
      addPendingDependent(atom, atomState);
    }
    if (hasPromiseAtomValue(prevAtomState)) {
      const next = "v" in atomState ? atomState.v instanceof Promise ? atomState.v : Promise.resolve(atomState.v) : Promise.reject(atomState.e);
      if (prevAtomState.v !== next) {
        cancelPromise(prevAtomState.v, next);
      }
    }
  };
  const updateDependencies = (atom, nextAtomState, nextDependencies, keepPreviousDependencies) => {
    const dependencies = new Map(
      keepPreviousDependencies ? nextAtomState.d : null
    );
    let changed = false;
    nextDependencies.forEach((aState, a) => {
      if (!aState && isSelfAtom(atom, a)) {
        aState = nextAtomState;
      }
      if (aState) {
        dependencies.set(a, aState);
        if (nextAtomState.d.get(a) !== aState) {
          changed = true;
        }
      } else if ((undefined ? undefined.MODE : void 0) !== "production") {
        console.warn("[Bug] atom state not found");
      }
    });
    if (changed || nextAtomState.d.size !== dependencies.size) {
      nextAtomState.d = dependencies;
    }
  };
  const setAtomValue = (atom, value, nextDependencies, keepPreviousDependencies) => {
    const prevAtomState = getAtomState(atom);
    const nextAtomState = {
      d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
      v: value
    };
    if (nextDependencies) {
      updateDependencies(
        atom,
        nextAtomState,
        nextDependencies,
        keepPreviousDependencies
      );
    }
    if (isEqualAtomValue(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
      return prevAtomState;
    }
    if (hasPromiseAtomValue(prevAtomState) && hasPromiseAtomValue(nextAtomState) && isEqualPromiseAtomValue(prevAtomState, nextAtomState)) {
      if (prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      } else {
        nextAtomState.v = prevAtomState.v;
      }
    }
    setAtomState(atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomValueOrPromise = (atom, valueOrPromise, nextDependencies, abortPromise) => {
    if (isPromiseLike$1(valueOrPromise)) {
      let continuePromise;
      const updatePromiseDependencies = () => {
        const prevAtomState = getAtomState(atom);
        if (!hasPromiseAtomValue(prevAtomState) || prevAtomState.v !== promise) {
          return;
        }
        const nextAtomState = setAtomValue(
          atom,
          promise,
          nextDependencies
        );
        if (mountedMap.has(atom) && prevAtomState.d !== nextAtomState.d) {
          mountDependencies(atom, nextAtomState, prevAtomState.d);
        }
      };
      const promise = new Promise((resolve, reject) => {
        let settled = false;
        valueOrPromise.then(
          (v) => {
            if (!settled) {
              settled = true;
              resolvePromise(promise, v);
              resolve(v);
              updatePromiseDependencies();
            }
          },
          (e) => {
            if (!settled) {
              settled = true;
              rejectPromise(promise, e);
              reject(e);
              updatePromiseDependencies();
            }
          }
        );
        continuePromise = (next) => {
          if (!settled) {
            settled = true;
            next.then(
              (v) => resolvePromise(promise, v),
              (e) => rejectPromise(promise, e)
            );
            resolve(next);
          }
        };
      });
      promise.orig = valueOrPromise;
      promise.status = "pending";
      registerCancelPromise(promise, (next) => {
        if (next) {
          continuePromise(next);
        }
        abortPromise == null ? void 0 : abortPromise();
      });
      return setAtomValue(atom, promise, nextDependencies, true);
    }
    return setAtomValue(atom, valueOrPromise, nextDependencies);
  };
  const setAtomError = (atom, error, nextDependencies) => {
    const prevAtomState = getAtomState(atom);
    const nextAtomState = {
      d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
      e: error
    };
    if (nextDependencies) {
      updateDependencies(atom, nextAtomState, nextDependencies);
    }
    if (isEqualAtomError(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
      return prevAtomState;
    }
    setAtomState(atom, nextAtomState);
    return nextAtomState;
  };
  const readAtomState = (atom, force) => {
    const atomState = getAtomState(atom);
    if (!force && atomState) {
      if (mountedMap.has(atom)) {
        return atomState;
      }
      if (Array.from(atomState.d).every(([a, s]) => {
        if (a === atom) {
          return true;
        }
        const aState = readAtomState(a);
        return aState === s || isEqualAtomValue(aState, s);
      })) {
        return atomState;
      }
    }
    const nextDependencies = /* @__PURE__ */ new Map();
    let isSync = true;
    const getter = (a) => {
      if (isSelfAtom(atom, a)) {
        const aState2 = getAtomState(a);
        if (aState2) {
          nextDependencies.set(a, aState2);
          return returnAtomValue(aState2);
        }
        if (hasInitialValue(a)) {
          nextDependencies.set(a, void 0);
          return a.init;
        }
        throw new Error("no atom init");
      }
      const aState = readAtomState(a);
      nextDependencies.set(a, aState);
      return returnAtomValue(aState);
    };
    let controller;
    let setSelf;
    const options = {
      get signal() {
        if (!controller) {
          controller = new AbortController();
        }
        return controller.signal;
      },
      get setSelf() {
        if ((undefined ? undefined.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
          console.warn("setSelf function cannot be used with read-only atom");
        }
        if (!setSelf && isActuallyWritableAtom(atom)) {
          setSelf = (...args) => {
            if ((undefined ? undefined.MODE : void 0) !== "production" && isSync) {
              console.warn("setSelf function cannot be called in sync");
            }
            if (!isSync) {
              return writeAtom(atom, ...args);
            }
          };
        }
        return setSelf;
      }
    };
    try {
      const valueOrPromise = atom.read(getter, options);
      return setAtomValueOrPromise(
        atom,
        valueOrPromise,
        nextDependencies,
        () => controller == null ? void 0 : controller.abort()
      );
    } catch (error) {
      return setAtomError(atom, error, nextDependencies);
    } finally {
      isSync = false;
    }
  };
  const readAtom = (atom) => returnAtomValue(readAtomState(atom));
  const recomputeDependents = (atom) => {
    const getDependents = (a) => {
      var _a, _b;
      const dependents = new Set((_a = mountedMap.get(a)) == null ? void 0 : _a.t);
      (_b = pendingMap.get(a)) == null ? void 0 : _b[1].forEach((dependent) => {
        dependents.add(dependent);
      });
      return dependents;
    };
    const topsortedAtoms = new Array();
    const markedAtoms = /* @__PURE__ */ new Set();
    const visit = (n) => {
      if (markedAtoms.has(n)) {
        return;
      }
      markedAtoms.add(n);
      for (const m of getDependents(n)) {
        if (n !== m) {
          visit(m);
        }
      }
      topsortedAtoms.push(n);
    };
    visit(atom);
    const changedAtoms = /* @__PURE__ */ new Set([atom]);
    for (let i = topsortedAtoms.length - 1; i >= 0; --i) {
      const a = topsortedAtoms[i];
      const prevAtomState = getAtomState(a);
      if (!prevAtomState) {
        continue;
      }
      let hasChangedDeps = false;
      for (const dep of prevAtomState.d.keys()) {
        if (dep !== a && changedAtoms.has(dep)) {
          hasChangedDeps = true;
          break;
        }
      }
      if (hasChangedDeps) {
        const nextAtomState = readAtomState(a, true);
        if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
          changedAtoms.add(a);
        }
      }
    }
  };
  const writeAtomState = (atom, ...args) => {
    const getter = (a) => returnAtomValue(readAtomState(a));
    const setter = (a, ...args2) => {
      const isSync = pendingStack.length > 0;
      if (!isSync) {
        pendingStack.push(/* @__PURE__ */ new Set([a]));
      }
      let r;
      if (isSelfAtom(atom, a)) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const prevAtomState = getAtomState(a);
        const nextAtomState = setAtomValueOrPromise(a, args2[0]);
        if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
          recomputeDependents(a);
        }
      } else {
        r = writeAtomState(a, ...args2);
      }
      if (!isSync) {
        const flushed = flushPending(pendingStack.pop());
        if ((undefined ? undefined.MODE : void 0) !== "production") {
          devListenersRev2.forEach(
            (l) => l({ type: "async-write", flushed })
          );
        }
      }
      return r;
    };
    const result = atom.write(getter, setter, ...args);
    return result;
  };
  const writeAtom = (atom, ...args) => {
    pendingStack.push(/* @__PURE__ */ new Set([atom]));
    const result = writeAtomState(atom, ...args);
    const flushed = flushPending(pendingStack.pop());
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      devListenersRev2.forEach((l) => l({ type: "write", flushed }));
    }
    return result;
  };
  const mountAtom = (atom, initialDependent, onMountQueue) => {
    var _a;
    const existingMount = mountedMap.get(atom);
    if (existingMount) {
      if (initialDependent) {
        existingMount.t.add(initialDependent);
      }
      return existingMount;
    }
    const queue = onMountQueue || [];
    (_a = getAtomState(atom)) == null ? void 0 : _a.d.forEach((_, a) => {
      if (a !== atom) {
        mountAtom(a, atom, queue);
      }
    });
    readAtomState(atom);
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom, mounted);
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      mountedAtoms.add(atom);
    }
    if (isActuallyWritableAtom(atom) && atom.onMount) {
      const { onMount } = atom;
      queue.push(() => {
        const onUnmount = onMount((...args) => writeAtom(atom, ...args));
        if (onUnmount) {
          mounted.u = onUnmount;
        }
      });
    }
    if (!onMountQueue) {
      queue.forEach((f) => f());
    }
    return mounted;
  };
  const canUnmountAtom = (atom, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom));
  const tryUnmountAtom = (atom, mounted) => {
    if (!canUnmountAtom(atom, mounted)) {
      return;
    }
    const onUnmount = mounted.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom);
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      mountedAtoms.delete(atom);
    }
    const atomState = getAtomState(atom);
    if (atomState) {
      if (hasPromiseAtomValue(atomState)) {
        cancelPromise(atomState.v);
      }
      atomState.d.forEach((_, a) => {
        if (a !== atom) {
          const mountedDep = mountedMap.get(a);
          if (mountedDep) {
            mountedDep.t.delete(atom);
            tryUnmountAtom(a, mountedDep);
          }
        }
      });
    } else if ((undefined ? undefined.MODE : void 0) !== "production") {
      console.warn("[Bug] could not find atom state to unmount", atom);
    }
  };
  const mountDependencies = (atom, atomState, prevDependencies) => {
    const depSet = new Set(atomState.d.keys());
    const maybeUnmountAtomSet = /* @__PURE__ */ new Set();
    prevDependencies == null ? void 0 : prevDependencies.forEach((_, a) => {
      if (depSet.has(a)) {
        depSet.delete(a);
        return;
      }
      maybeUnmountAtomSet.add(a);
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom);
      }
    });
    depSet.forEach((a) => {
      mountAtom(a, atom);
    });
    maybeUnmountAtomSet.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        tryUnmountAtom(a, mounted);
      }
    });
  };
  const flushPending = (pendingAtoms) => {
    let flushed;
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      flushed = /* @__PURE__ */ new Set();
    }
    const pending = [];
    const collectPending = (pendingAtom) => {
      var _a;
      if (!pendingMap.has(pendingAtom)) {
        return;
      }
      const [prevAtomState, dependents] = pendingMap.get(pendingAtom);
      pendingMap.delete(pendingAtom);
      pending.push([pendingAtom, prevAtomState]);
      dependents.forEach(collectPending);
      (_a = getAtomState(pendingAtom)) == null ? void 0 : _a.d.forEach((_, a) => collectPending(a));
    };
    pendingAtoms.forEach(collectPending);
    pending.forEach(([atom, prevAtomState]) => {
      const atomState = getAtomState(atom);
      if (!atomState) {
        if ((undefined ? undefined.MODE : void 0) !== "production") {
          console.warn("[Bug] no atom state to flush");
        }
        return;
      }
      if (atomState !== prevAtomState) {
        const mounted = mountedMap.get(atom);
        if (mounted && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
        if (mounted && !// TODO This seems pretty hacky. Hope to fix it.
        // Maybe we could `mountDependencies` in `setAtomState`?
        (!hasPromiseAtomValue(prevAtomState) && (isEqualAtomValue(prevAtomState, atomState) || isEqualAtomError(prevAtomState, atomState)))) {
          mounted.l.forEach((listener) => listener());
          if ((undefined ? undefined.MODE : void 0) !== "production") {
            flushed.add(atom);
          }
        }
      }
    });
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      return flushed;
    }
  };
  const subscribeAtom = (atom, listener) => {
    const mounted = mountAtom(atom);
    const flushed = flushPending([atom]);
    const listeners = mounted.l;
    listeners.add(listener);
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      devListenersRev2.forEach(
        (l) => l({ type: "sub", flushed })
      );
    }
    return () => {
      listeners.delete(listener);
      tryUnmountAtom(atom, mounted);
      if ((undefined ? undefined.MODE : void 0) !== "production") {
        devListenersRev2.forEach((l) => l({ type: "unsub" }));
      }
    };
  };
  if ((undefined ? undefined.MODE : void 0) !== "production") {
    return {
      get: readAtom,
      set: writeAtom,
      sub: subscribeAtom,
      // store dev methods (these are tentative and subject to change without notice)
      dev_subscribe_store: (l) => {
        devListenersRev2.add(l);
        return () => {
          devListenersRev2.delete(l);
        };
      },
      dev_get_mounted_atoms: () => mountedAtoms.values(),
      dev_get_atom_state: (a) => atomStateMap.get(a),
      dev_get_mounted: (a) => mountedMap.get(a),
      dev_restore_atoms: (values) => {
        pendingStack.push(/* @__PURE__ */ new Set());
        for (const [atom, valueOrPromise] of values) {
          if (hasInitialValue(atom)) {
            setAtomValueOrPromise(atom, valueOrPromise);
            recomputeDependents(atom);
          }
        }
        const flushed = flushPending(pendingStack.pop());
        devListenersRev2.forEach(
          (l) => l({ type: "restore", flushed })
        );
      }
    };
  }
  return {
    get: readAtom,
    set: writeAtom,
    sub: subscribeAtom
  };
};
let defaultStore;
const getDefaultStore$1 = () => {
  if (!defaultStore) {
    defaultStore = createStore$1();
    if ((undefined ? undefined.MODE : void 0) !== "production") {
      globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
      if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
        console.warn(
          "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
        );
      }
    }
  }
  return defaultStore;
};

Symbol(
  (undefined ? undefined.MODE : void 0) !== "production" ? "CONTINUE_PROMISE" : ""
);
const getDefaultStore = getDefaultStore$1;

const StoreContext = require$$1$2.createContext(
  void 0
);
const useStore = (options) => {
  const store = require$$1$2.useContext(StoreContext);
  return store || getDefaultStore();
};

const isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
const use = require$$1$2.use || ((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    promise.status = "pending";
    promise.then(
      (v) => {
        promise.status = "fulfilled";
        promise.value = v;
      },
      (e) => {
        promise.status = "rejected";
        promise.reason = e;
      }
    );
    throw promise;
  }
});
function useAtomValue(atom, options) {
  const store = useStore();
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = require$$1$2.useReducer(
    (prev) => {
      const nextValue = store.get(atom);
      if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
        return prev;
      }
      return [nextValue, store, atom];
    },
    void 0,
    () => [store.get(atom), store, atom]
  );
  let value = valueFromReducer;
  if (storeFromReducer !== store || atomFromReducer !== atom) {
    rerender();
    value = store.get(atom);
  }
  const delay = void 0 ;
  require$$1$2.useEffect(() => {
    const unsub = store.sub(atom, () => {
      rerender();
    });
    rerender();
    return unsub;
  }, [store, atom, delay]);
  require$$1$2.useDebugValue(value);
  return isPromiseLike(value) ? use(value) : value;
}

function useSetAtom(atom, options) {
  const store = useStore();
  const setAtom = require$$1$2.useCallback(
    (...args) => {
      if ((undefined ? undefined.MODE : void 0) !== "production" && !("write" in atom)) {
        throw new Error("not writable atom");
      }
      return store.set(atom, ...args);
    },
    [store, atom]
  );
  return setAtom;
}

function useAtom(atom, options) {
  return [
    useAtomValue(atom),
    // We do wrong type assertion here, which results in throwing an error.
    useSetAtom(atom)
  ];
}

var dialogAtom = atom(null);
dialogAtom.debugLabel = "dialogAtom";
function DialogTemplate(_a) {
    var title = _a.title, discription = _a.discription, type = _a.type, onAction = _a.onAction, onClose = _a.onClose;
    return (jsxRuntime.jsx(FlexBox, { className: "fixed inset-0 z-[100] justify-center bg-Dialog", children: jsxRuntime.jsxs("div", { className: "w-[242px] mx-auto rounded-lg overflow-y-auto bg-white", children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "gap-4 text-Gray4 px-6 py-6", children: [jsxRuntime.jsx("div", { className: "B3-medium", children: title }), jsxRuntime.jsx("div", { className: "B4-medium text-center", children: discription.split("\n").map(function (line, idx) { return (jsxRuntime.jsx("div", { children: line }, idx)); }) })] }), jsxRuntime.jsx(FlexBox, { direction: "col", className: "gap-4 py-3 border-t border-Gray2", children: type === "notice" ? (jsxRuntime.jsx("button", { type: "button", className: "w-full B4-regular text-Gray5", onClick: onClose, children: "\uD655\uC778" })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("button", { type: "button", className: "w-full B4-regular text-Red", onClick: onAction, children: "\uC0AD\uC81C" }), jsxRuntime.jsx("button", { type: "button", className: "w-full B4-regular text-Gray5", onClick: onClose, children: "\uCDE8\uC18C" })] })) })] }) }));
}
function useDialog() {
    var _a = useAtom(dialogAtom), dialog = _a[0], setDialog = _a[1];
    var closeDialog = function () {
        setDialog(null);
    };
    var openDialog = function (props) {
        var onClickAction = function () {
            var _a;
            (_a = props.onAction) === null || _a === void 0 ? void 0 : _a.call(props);
            closeDialog();
        };
        var onClickClose = function () {
            var _a;
            (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
            closeDialog();
        };
        setDialog(jsxRuntime.jsx(DialogTemplate, __assign({}, props, { onAction: onClickAction, onClose: onClickClose })));
    };
    return { dialog: dialog, openDialog: openDialog, closeDialog: closeDialog };
}

function Assist() {
    var openDialog = useDialog().openDialog;
    var onClick = function () {
        // TODO: 직원 호출
        openDialog({
            title: "직원 호출",
            discription: "잠시만 기다려주시면\n직원이 곧 손님에게 갈 겁니다",
            type: "notice",
        });
    };
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, children: jsxRuntime.jsx(FlexBox, { className: "shrink-0 justify-center w-[48px] h-[48px] rounded-lg bg-White border border-2 border-Gray2", children: jsxRuntime.jsxs("div", { className: "w-[26px] h-[32px] leading-[16px] text-center B4-medium text-Gray6", children: ["\uC9C1\uC6D0", jsxRuntime.jsx("br", {}), "\uD638\uCD9C"] }) }) }));
}
function ButtonBar(_a) {
    var button = _a.button, isAssist = _a.isAssist;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "w-full min-h-[100px]" }), jsxRuntime.jsx(FlexBox, { direction: "col", className: "w-full min-h-[100px] fixed bottom-0 pb-10 pt-3 px-4 bg-white border-t", children: jsxRuntime.jsxs(FlexBox, { className: "w-full gap-4", children: [button, isAssist && jsxRuntime.jsx(Assist, {})] }) })] }));
}

function FloatingActionButton(_a) {
    var text = _a.text, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onClick, children: jsxRuntime.jsxs(FlexBox, { className: "w-fit rounded-full bg-Gray7 p-3 gap-2", children: [jsxRuntime.jsx(Icon, { src: "/icon/control/plus.svg" }), jsxRuntime.jsx("span", { className: "B4-regular text-white", children: text })] }) }));
}

var style$4 = {
    google: "bg-White border border-Gray3",
    naver: "bg-[#03C75A]",
    kakao: "bg-[#FEE500]",
};
var textStyle$1 = {
    google: "text-Gray4",
    naver: "text-White",
    kakao: "text-Black",
};
var text = {
    google: "구글로 계속하기",
    naver: "네이버로 계속하기",
    kakao: "카카오 로그인",
};
var src = {
    google: "/icon/login/google.png",
    naver: "/icon/login/naver.png",
    kakao: "/icon/login/kakao.png",
};
function LoginButton(_a) {
    var type = _a.type, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", className: "flex w-full h-[48px] justify-center items-center gap-8 rounded-full ".concat(style$4[type]), onClick: onClick, children: jsxRuntime.jsxs(FlexBox, { className: "".concat(textStyle$1[type]), children: [jsxRuntime.jsx(Icon, { src: src[type], sz: 20, className: "mr-[8px]" }), jsxRuntime.jsx("span", { className: "B3-regular", children: text[type] })] }) }));
}

var style$3 = {
    APPROVED: "bg-Approve text-white",
    DISAPPROVED: "bg-Red text-white",
    DECLINED: "bg-Gray5 text-Gray4",
};
function StateButton(_a) {
    var type = _a.type, onclick = _a.onclick;
    var handleClick = function () {
        onclick && onclick();
    };
    return (jsxRuntime.jsx("button", { type: "button", className: "w-[72px] h-[32px] rounded-lg B5-medium ".concat(style$3[type]), onClick: handleClick, children: type === "APPROVED"
            ? "승인"
            : type === "DISAPPROVED"
                ? "거절하기"
                : "미승인" }));
}

var sizeStyle$1 = {
    full: "w-full",
    L: "w-[328px]",
    M: "w-[160px]",
    S: "w-[120px]",
};
var buttonStyle$1 = {
    filled: {
        active: "bg-black text-white",
        inactive: "bg-Gray3 text-Gray4",
        clicked: "bg-black text-Gray4",
    },
    outline: {
        active: "bg-white border-2 border-Black text-Black",
        inactive: "bg-white border-2 border-Gray2 text-Gray4",
        clicked: "bg-Gray2 border-2 border-Gray5 text-Gray5",
    },
};
function TextButton(_a) {
    var size = _a.size, className = _a.className, text = _a.text, secondaryText = _a.secondaryText, _b = _a.type, type = _b === void 0 ? "filled" : _b, isClicked = _a.isClicked, inactive = _a.inactive, onClick = _a.onClick;
    var clickHandle = function () {
        if (inactive)
            return;
        onClick && onClick();
    };
    return (jsxRuntime.jsx("button", { type: "button", className: "flex justify-center items-center rounded-lg h-[48px] ".concat(sizeStyle$1[size], " ").concat(buttonStyle$1[type][inactive ? "inactive" : isClicked ? "clicked" : "active"], "\n      ").concat(className), onClick: clickHandle, children: jsxRuntime.jsxs("div", { className: "B4-medium", children: [text, secondaryText && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("span", { className: "mx-2", children: "|" }), secondaryText] }))] }) }));
}

function TextFieldButton(_a) {
    var className = _a.className, text = _a.text, inactive = _a.inactive, onClick = _a.onClick;
    var _b = require$$1$2.useState(false), clicked = _b[0], setClicked = _b[1];
    var clickHandle = function () {
        if (inactive)
            return;
        setClicked(true);
        onClick && onClick();
    };
    return (jsxRuntime.jsx("button", { type: "button", className: "shrink-0 flex justify-center items-center rounded h-[40px] w-[120px] ".concat(className, " ").concat(inactive ? "bg-Gray2" : "bg-Black"), onClick: clickHandle, children: jsxRuntime.jsx("div", { className: "B4-medium ".concat(clicked ? "text-Gray4" : inactive ? "text-Gray3" : "text-white"), children: text }) }));
}

var style$2 = {
    full: "w-full",
    L: "w-[328px]",
    M: "w-[164px]",
    S: "w-[120px]",
};
function TextTextButton(_a) {
    var size = _a.size, className = _a.className, text1 = _a.text1, text2 = _a.text2, inactive = _a.inactive, onClick = _a.onClick;
    var _b = require$$1$2.useState(false), clicked = _b[0], setClicked = _b[1];
    var clickHandle = function () {
        if (inactive)
            return;
        setClicked(true);
        onClick && onClick();
    };
    return (jsxRuntime.jsx("button", { type: "button", className: "flex justify-center items-center h-[48px] rounded-lg ".concat(style$2[size], " ").concat(className, " ").concat(inactive ? "bg-Gray2" : "bg-Black"), onClick: clickHandle, disabled: inactive, children: jsxRuntime.jsxs("div", { className: "B4-medium ".concat(clicked ? "text-Gray4" : inactive ? "text-Gray3" : "text-white"), children: [text1, jsxRuntime.jsx("span", { className: "mx-2", children: "|" }), text2] }) }));
}

var dayList = ["일", "월", "화", "수", "목", "금", "토"];
/**
 * Calender 컴포넌트는 달력을 나타내는 컴포넌트입니다.
 * 파라미터를 넣지 않았을 경우 dayjs를 통해 현재 요일과 주를 계산하여 나타냅니다.
 * 파라미터로는 렌더링할 요일과 요일을 클릭했을 때 실행되는 함수를 받습니다.
 * @param day 요일 (월 | 화 | 수 | 목 | 금 | 토 | 일)
 * @param onClick 요일을 클릭했을 때 실행되는 함수 (date: DayType) => void
 * @returns
 * @example <Calender day="월" onClick={() => {}} />
 */
function Calender(_a) {
    var paramDay = _a.day, onClick = _a.onClick;
    var startDate = dayjs().startOf("week");
    var currentDay = paramDay;
    if (currentDay === undefined) {
        currentDay = dayjs();
    }
    return (jsxRuntime.jsx(FlexBox, { className: "w-full justify-between", children: dayList.map(function (day, index) { return (jsxRuntime.jsxs("button", { type: "button", className: "w-full text-center", onClick: function () { return onClick && onClick(startDate.add(index, "days")); }, children: [jsxRuntime.jsx("span", { className: "C2 text-Gray5", children: day }), jsxRuntime.jsx(FlexBox, { direction: "col", className: "mt-2 w-[24px] h-[24px] mx-auto rounded justify-center ".concat(currentDay.format("ddd") === day && "bg-black"), children: jsxRuntime.jsx("div", { className: currentDay.format("ddd") === day
                            ? "B3-medium text-Gray1"
                            : "B3-medium text-Gray6", children: startDate.add(index, "days").format("D") }) })] }, index)); }) }));
}

var buttonStyle = {
    workday: "border-Black bg-Black text-White",
    dayoff: "border-Red bg-Gray1 text-Red",
    inputing: "border-Black bg-Gray1 text-Black",
    inputed: "border-Gray6 bg-Gray6 text-Gray3",
    inactive: "border-Gray1 bg-Gray1 text-Gray4",
};
/**
 * DayChip 컴포넌트는 요일을 나타내는 칩입니다.
 * @param day 요일 (월 | 화 | 수 | 목 | 금 | 토 | 일)
 * @param type 칩의 타입 (workday | dayoff | inputing | inputed | inactive)
 * @param onChipClick 칩을 클릭했을 때 실행할 함수
 * @returns
 * @example <DayChip day="월" type="workday" onChipClick={() => {}} />
 */
function DayChip(_a) {
    var day = _a.day, type = _a.type, onChipClick = _a.onChipClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: onChipClick, children: jsxRuntime.jsx(FlexBox, { className: "justify-center w-[40px] h-[44px] rounded-xl border border-1 ".concat(buttonStyle[type]), children: jsxRuntime.jsx("span", { className: "B3-regular", children: day }) }) }));
}

var styleBySize = {
    S: "px-[8px] py-[4px]",
    M: "px-[8px] py-[4px] gap-[2px]",
    L: "px-[16px] py-[6px] gap-[4px]",
};
var textStyleBySize = {
    S: "B5-regular",
    M: "B5-regular",
    L: "B4-regular",
};
var styleByActive = {
    active: "bg-Black border-Black",
    inactive: "bg-white border-Gray2",
};
var textStyleByActive = {
    active: "text-White",
    inactive: "text-Gray4",
};
var pixelSize = {
    S: 0,
    M: 12,
    L: 16,
};
/**
 * TextChip 컴포넌트는 텍스트를 나타내는 칩입니다.
 * @param size 칩의 크기 (S | M | L)
 * @param text 칩의 텍스트
 * @param src 칩의 왼쪽에 위치할 아이콘의 경로. size가 L 또는 M일 때만 사용됩니다. 없을 경우 아이콘은 표시되지 않습니다.
 * @param className 칩의 클래스
 * @param inactive 칩의 비활성화 여부. true일 경우 흰 배경, 회색 텍스트로 표시됩니다.
 * @param onChipClick 칩을 클릭했을 때 실행할 함수
 * @returns
 * @example <TextChip size="L" src="/icon/sample.svg" text="텍스트" />
 */
function TextChip(_a) {
    var size = _a.size, text = _a.text, src = _a.src, className = _a.className, inactive = _a.inactive, onChipClick = _a.onChipClick;
    var active = inactive ? "inactive" : "active";
    return (jsxRuntime.jsx("button", { type: "button", className: "shrink-0", onClick: onChipClick, children: jsxRuntime.jsxs(FlexBox, { className: "w-fit rounded-full border border-1 ".concat(className, " ").concat(styleBySize[size], " ").concat(styleByActive[active]), children: [(size === "L" || size === "M") && src && (jsxRuntime.jsx(Icon, { src: src, sz: pixelSize[size] })), jsxRuntime.jsx("div", { className: "".concat(textStyleBySize[size], " ").concat(textStyleByActive[active]), children: text })] }) }));
}

function AddOption() {
    var _a = require$$1$2.useState(2), optionCount = _a[0], setOptionCount = _a[1];
    var addOptionCount = function () {
        setOptionCount(optionCount + 1);
    };
    var showOptons = function () {
        var options = Array.from({ length: optionCount }, function (_, index) { return (jsxRuntime.jsxs(FlexBox, { className: "items-center gap-2", children: [jsxRuntime.jsx(Icon, { src: "/icon/control/plus.svg", sz: 24, onClick: addOptionCount }), jsxRuntime.jsx("input", { placeholder: "\uC635\uC158 \uCD94\uAC00", className: "w-full outline-none text-Gray4 B3-regular" })] }, index)); });
        return options;
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "gap-[18px] p-4 w-full", children: [jsxRuntime.jsx("input", { placeholder: "\uC635\uC158 \uC774\uB984 \uC785\uB825", className: "w-full text-Black B1-medium placeholder:text-Black outline-none" }), jsxRuntime.jsx("div", { className: "grid grid-cols-2 w-full gap-y-4", children: showOptons() })] }), jsxRuntime.jsx(Divider, { height: 8 })] }));
}

function CategoryInfo(_a) {
    var title = _a.title, description = _a.description, edit = _a.edit;
    return (jsxRuntime.jsxs(FlexBox, { direction: "row", className: "justify-between items-center w-full", children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "items-start gap-1", children: [jsxRuntime.jsx("div", { className: "B3-medium text-Gray7", children: title }), jsxRuntime.jsx("div", { className: "C2 text-Gray4", children: description })] }), edit && (jsxRuntime.jsx(Icon, { src: "/icon/control/edit.svg", sz: 24, className: "cursor-pointer" }))] }));
}

// type SINGLE = "SINGLE";
// type MULTIPLE = "MULTIPLE";
function MenuInfo(_a) {
    var title = _a.title, options = _a.options, type = _a.type;
    return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full p-4 gap-4", children: [jsxRuntime.jsxs(FlexBox, { direction: "row", className: "justify-between w-full", children: [jsxRuntime.jsx("div", { className: "B1-medium text-Black", children: title }), jsxRuntime.jsx(Icon, { src: "/icon/control/edit.svg", sz: 24 })] }), jsxRuntime.jsx(FlexBox, { direction: "col", className: "items-start gap-5 w-full", children: options.map(function (option, index) { return (jsxRuntime.jsxs("div", { className: "w-full", children: [option.name, " : ", type === "MULTIPLE" && "+", option.price.toLocaleString(), "\uC6D0"] }, index)); }) })] }));
}

function List() {
    var _a = require$$1$2.useState(false), visible = _a[0], setVisible = _a[1];
    var clickHandle = function () {
        setVisible(!visible);
    };
    return (jsxRuntime.jsxs("div", { className: "relative", children: [jsxRuntime.jsxs("div", { className: "flex w-[94px] items-center h-fit px-[8px] py-[4px] box-border gap-[4px] bg-White ", children: [jsxRuntime.jsx("div", { className: "B4-medium text-Gray4 ", children: "\uD3C9\uC810 \uC21C" }), visible ? (jsxRuntime.jsx(Image, { className: "ml-[4px]", src: "/icon/control/directionUnder.svg", alt: "directionUnder", onClick: clickHandle, width: 24, height: 24 })) : (jsxRuntime.jsx(Image, { className: "ml-[4px]", src: "/icon/control/directionTop.svg", onClick: clickHandle, alt: "directionTop", width: 24, height: 24 }))] }), !visible ? (jsxRuntime.jsx("div", { className: "flex flex-col justify-center items-center w-[94px] h-fit px-[11px] py-[8px] box-border bg-White absolute border-t-[1px] border-Gray2", children: jsxRuntime.jsx("div", { className: "B4-regular text-Gray4 ", children: "\uCD5C\uC2E0 \uC21C" }) })) : null] }));
}

function calculateHours(endTime, startTime) {
    var _a = endTime
        .split(":")
        .map(function (num) { return parseInt(num, 10); }), endHour = _a[0], endMinutes = _a[1];
    var _b = startTime
        .split(":")
        .map(function (num) { return parseInt(num, 10); }), startHour = _b[0], startMinutes = _b[1];
    var totalEndMinutes = endHour * 60 + endMinutes;
    var totalStartMinutes = startHour * 60 + startMinutes;
    var totalMinutes = totalEndMinutes - totalStartMinutes;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    var result = "".concat(hours, "\uC2DC\uAC04");
    if (minutes > 0) {
        result += " ".concat(minutes, "\uBD84");
    }
    return result;
}

function WorkDetailCard(_a) {
    var type = _a.type, date = _a.date, startTime = _a.startTime, endTime = _a.endTime;
    var showWorkingTime = function () {
        var start = startTime;
        var end = endTime;
        return "".concat(start, " ~ ").concat(end);
    };
    if (type === "regular")
        return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "self-start rounded-2xl border-2 border-Gray7 p-3 w-[270px] items-start gap-0.5", children: [jsxRuntime.jsx("div", { className: "B5-regular", children: dayjs(date).locale("kr").format("M.DD dddd") }), jsxRuntime.jsxs(FlexBox, { className: "gap-2", children: [jsxRuntime.jsx("span", { className: "B3-medium", children: showWorkingTime() }), jsxRuntime.jsxs("span", { className: "B4-medium", children: ["(", calculateHours(endTime, startTime), ")"] })] })] }));
    return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "self-end rounded-2xl border-2 border-Gray7 p-3 w-[270px] items-start gap-0.5 bg-Black", children: [jsxRuntime.jsx("div", { className: "B5-regular text-Gray1", children: dayjs(date).locale("kr").format("M.DD dddd") }), jsxRuntime.jsxs("div", { className: "B3-medium text-Gray1", children: [showWorkingTime(), jsxRuntime.jsx("span", { className: "B4-medium ml-1", children: "(\uC5F0\uC7A5\uADFC\uBB34)" })] })] }));
}

function FormattedDate(_a) {
    var date = _a.date;
    return jsxRuntime.jsx("span", { children: date.format("YY/MM/DD (ddd)") });
}
function FormattedWorkTime(_a) {
    var totalMinutes = _a.minutes;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return (jsxRuntime.jsxs(FlexBox, { className: "gap-1", children: [jsxRuntime.jsxs(FlexBox, { children: [jsxRuntime.jsx("span", { className: "H5-bold", children: hours.toString().padStart(3, "0") }), jsxRuntime.jsx("span", { className: "B4-medium text-Gray5 mt-1.5", children: "\uC2DC\uAC04" })] }), jsxRuntime.jsxs(FlexBox, { children: [jsxRuntime.jsx("span", { className: "H5-bold", children: minutes.toString().padStart(2, "0") }), jsxRuntime.jsx("span", { className: "B4-medium text-Gray5 mt-1.5", children: "\uBD84" })] })] }));
}
/**
 * WorkInfoBanner 컴포넌트는 근무시간 카드 컴포넌트입니다.
 * @param startDate 근무 시작일을 입력합니다. (Dayjs 객체)
 * @param endDate 근무 종료일을 입력합니다. (Dayjs 객체)
 * @param workingDays 근무일수를 입력합니다.
 * @param workingMinutes 근무시간을 분 단위로 입력합니다.
 * @param overtimeMinutes 연장근무시간을 분 단위로 입력합니다.
 * @param onClick 상세보기 버튼 클릭 시 실행할 함수를 입력합니다.
 * @returns 근무시간 카드 컴포넌트를 반환합니다.
 * @example <WorkInfoCard startDate={dayjs().startOf("week")} endDate={dayjs().endOf("week")} workingDays={3} workingMinutes={190} overtimeMinutes={10} />
 */
function WorkInfoCard(_a) {
    var startDate = _a.startDate, endDate = _a.endDate, _b = _a.workingDays, workingDays = _b === void 0 ? 0 : _b, _c = _a.workingMinutes, workingMinutes = _c === void 0 ? 0 : _c, _d = _a.overtimeMinutes, overtimeMinutes = _d === void 0 ? 0 : _d, onClick = _a.onClick;
    return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full", children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full gap-2 p-4 bg-white rounded-t-xl border-t border-x border-Gray2 items-start", children: [jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full gap-4 items-start", children: [jsxRuntime.jsxs(FlexBox, { className: "gap-1 B5-medium text-Gray4", children: [jsxRuntime.jsx(FormattedDate, { date: startDate }), jsxRuntime.jsx("div", { className: "w-[8px] h-[1px] bg-Gray3 rounded-sm" }), jsxRuntime.jsx(FormattedDate, { date: endDate })] }), jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between", children: [jsxRuntime.jsxs(FlexBox, { className: "gap-1", children: [jsxRuntime.jsx("div", { className: "w-4 h-4 bg-PartTime rounded-full" }), jsxRuntime.jsx("div", { className: "B3-medium text-Gray6", children: "\uC815\uADDC \uADFC\uBB34" })] }), jsxRuntime.jsx(FormattedWorkTime, { minutes: workingMinutes })] }), jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between", children: [jsxRuntime.jsxs(FlexBox, { className: "gap-1", children: [jsxRuntime.jsx("div", { className: "w-4 h-4 bg-white rounded-full border-4 border-PartTime" }), jsxRuntime.jsx("div", { className: "B3-medium text-Gray6", children: "\uC5F0\uC7A5 \uADFC\uBB34" })] }), jsxRuntime.jsx(FormattedWorkTime, { minutes: overtimeMinutes })] })] }), jsxRuntime.jsxs(FlexBox, { className: "B4-medium text-Gray5 gap-2", children: [jsxRuntime.jsxs("span", { children: [workingDays, "\uC77C \uADFC\uBB34"] }), jsxRuntime.jsx("span", { children: "\uC8FC\uD734\uC218\uB2F9 \uC801\uC6A9" })] })] }), jsxRuntime.jsx("button", { type: "button", className: "w-full bg-Gray6 py-3 text-center rounded-b-xl", onClick: onClick, children: jsxRuntime.jsx("span", { className: "B4-medium text-Gray1", children: "\uC0C1\uC138 \uBCF4\uAE30" }) })] }));
}

var style$1 = {
    S: "w-12 h-12",
    M1: "w-14 h-14",
    M2: "w-[72px] h-[72px]",
    L: "w-24 h-24",
};
var textStyle = {
    S: "B1-medium",
    M1: "H5-bold",
    M2: "H4-bold",
    L: "H1",
};
var colorStyle = {
    focus: "from-[#AEAEAE] to-[#7C7C7C]",
    blur: "from-[#D8D8D8] to-[#BEBEBE]",
};
function Profile(_a) {
    var name = _a.name, size = _a.size, _b = _a.focus, focus = _b === void 0 ? true : _b;
    return (jsxRuntime.jsx(FlexBox, { className: "bg-gradient-to-b rounded-full ".concat(focus ? colorStyle.focus : colorStyle.blur, " ").concat(style$1[size], " justify-center"), children: jsxRuntime.jsx("span", { className: "text-white ".concat(textStyle[size]), children: name[0] }) }));
}

var style = {
    black: {
        basic: "bg-[url('/icon/selections/checkBox-black-basic-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-basic-o.svg')]",
        round: "bg-[url('/icon/selections/checkBox-black-round-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-round-o.svg')]",
        square: "bg-[url('/icon/selections/checkBox-black-square-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-square-o.svg')]",
    },
    red: {
        basic: "bg-[url('/icon/selections/checkBox-red-basic-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-basic-o.svg')]",
        round: "bg-[url('/icon/selections/checkBox-red-round-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-round-o.svg')]",
        square: "bg-[url('/icon/selections/checkBox-red-square-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-square-o.svg')]",
    },
};
var sizeStyle = {
    S: "w-[16px] h-[16px]",
    L: "w-[24px] h-[24px]",
};
function Checkbox(_a) {
    var _b = _a.type, type = _b === void 0 ? "basic" : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, _d = _a.size, size = _d === void 0 ? "L" : _d, props = __rest(_a, ["type", "color", "size"]);
    return (jsxRuntime.jsx("input", __assign({}, props, { type: "checkbox", className: "appearance-none bg-cover ".concat(sizeStyle[size], " ").concat(style[color][type]) })));
}

/**
 * Dropdown 컴포넌트는 dropdown 형태의 select 컴포넌트입니다.
 * @param defaultValue 드롭다운의 기본값을 입력합니다.
 * @param options 드롭다운의 옵션을 입력합니다.
 * @param onChange 드롭다운의 옵션을 변경했을 때 실행되는 함수를 입력합니다.
 * @returns 드롭다운 컴포넌트를 반환합니다.
 * @example <Dropdown defaultValue="choose option" options={["option1", "option2"]} onChange={value => console.log(value)} />
 */
function Dropdown(_a) {
    var defaultValue = _a.defaultValue, options = _a.options, onChange = _a.onChange;
    var _b = require$$1$2.useState(defaultValue || ""), selectedValue = _b[0], setSelectedValue = _b[1];
    var _c = require$$1$2.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var ref = require$$1$2.useRef(null);
    var onClickDropdown = function () {
        if (!ref.current)
            return;
        if (isOpen)
            ref.current.style.maxHeight = "0px";
        else
            ref.current.style.maxHeight = "".concat(ref.current.scrollHeight, "px");
        setIsOpen(!isOpen);
    };
    var onClickOption = function (option) { return function () {
        onClickDropdown();
        setSelectedValue(option);
        onChange && onChange(option);
    }; };
    return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full", children: [jsxRuntime.jsx("button", { type: "button", className: "w-full", onClick: onClickDropdown, children: jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between px-4 py-2 rounded border border-Gray2", children: [jsxRuntime.jsx("span", { className: "B4-regular text-Gray4", children: selectedValue }), jsxRuntime.jsx(Icon, { src: "/icon/direction/down.svg", sz: 24, className: "transform transition-transform ".concat(isOpen ? "rotate-180" : "") })] }) }), jsxRuntime.jsx("div", { ref: ref, className: "w-full transition-all bg-Gray5 rounded max-h-0 overflow-hidden", children: jsxRuntime.jsx(FlexBox, { direction: "col", className: "w-full p-1", children: options.map(function (option, index) { return (jsxRuntime.jsx("button", { type: "button", className: "p-3 w-full text-left", onClick: onClickOption(option), children: jsxRuntime.jsx("span", { className: "B4-regular text-Gray2", children: option }) }, index)); }) }) })] }));
}

function Radio(_a) {
    var props = __rest(_a, []);
    return (jsxRuntime.jsx("input", __assign({}, props, { type: "radio", className: "appearance-none rounded-full w-[24px] h-[24px] border border-4 border-Gray2\r\n      checked:border-black hover:border-black" })));
}

var options$1 = ["left", "right"];
function Tab$1(_a) {
    var text = _a.text, currentPage = _a.currentPage, position = _a.position, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: function () { return onClick(position); }, className: "w-1/2 h-full", children: jsxRuntime.jsxs(FlexBox, { direction: "col", className: "relative w-full h-full", children: [jsxRuntime.jsx("div", { className: "B3-medium text-center mt-3.5 ".concat(currentPage === position ? "text-Black" : "text-Gray3"), children: text }), jsxRuntime.jsx("div", { className: "w-full bottom-0 absolute ".concat(currentPage === position
                        ? "h-[2px] bg-Black rounded-tr-[2px]"
                        : "h-[1px] bg-Gray3") })] }) }));
}
function LongTab(_a) {
    var text = _a.text, className = _a.className, _b = _a.initPage, initPage = _b === void 0 ? "left" : _b, pageHandle = _a.pageHandle;
    var _c = require$$1$2.useState(initPage), page = _c[0], setPage = _c[1];
    var onClick = function (_page) {
        setPage(_page);
        pageHandle && pageHandle(_page);
    };
    return (jsxRuntime.jsx(FlexBox, { className: "w-full h-[48px] ".concat(className), children: options$1.map(function (option, index) { return (jsxRuntime.jsx(Tab$1, { text: text[index], currentPage: page, position: option, onClick: onClick }, index)); }) }));
}

var options = ["left", "center", "right"];
function Tab(_a) {
    var text = _a.text, currentPage = _a.currentPage, position = _a.position, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", { type: "button", onClick: function () { return onClick(position); }, className: "w-1/3 h-full", children: jsxRuntime.jsxs(FlexBox, { direction: "col", className: "relative w-full h-full", children: [jsxRuntime.jsx("div", { className: "B4-medium text-center mt-1.5 ".concat(currentPage === position ? "text-Black" : "text-Gray3"), children: text }), jsxRuntime.jsx("div", { className: "w-full bottom-0 absolute ".concat(currentPage === position
                        ? "h-[2px] bg-Black rounded-tr-[2px]"
                        : "h-[1px] bg-Gray3") })] }) }));
}
function ShortTab(_a) {
    var text = _a.text, className = _a.className, pageHandle = _a.pageHandle;
    var _b = require$$1$2.useState("left"), page = _b[0], setPage = _b[1];
    var onClick = function (_page) {
        setPage(_page);
        pageHandle && pageHandle(_page);
    };
    return (jsxRuntime.jsx(FlexBox, { className: "w-full h-[32px] ".concat(className), children: options.map(function (option, index) { return (jsxRuntime.jsx(Tab, { text: text[index], currentPage: page, position: option, onClick: onClick }, index)); }) }));
}

/**
 * SearchField 컴포넌트는 얼루가의 검색 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 검색 필드의 값 (state)
 * @param setValue - 검색 필드의 값 변경 함수 (setState)
 * @param className - 검색 필드의 클래스
 * @param onSearch - 검색 버튼을 눌렀을 때 실행할 함수
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
function SearchField(_a) {
    var value = _a.value, setValue = _a.setValue, className = _a.className, onSearch = _a.onSearch, props = __rest(_a, ["value", "setValue", "className", "onSearch"]);
    var _b = require$$1$2.useState(false), focus = _b[0], setFocus = _b[1];
    var onClickCancel = function () {
        setValue && setValue("");
    };
    var handleChange = function (e) {
        setValue && setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    var handleFocus = function (e) {
        setFocus(true);
        props.onFocus && props.onFocus(e);
    };
    var handleBlur = function (e) {
        setFocus(false);
        props.onBlur && props.onBlur(e);
    };
    return (jsxRuntime.jsxs(FlexBox, { className: "relative w-full", children: [jsxRuntime.jsx("input", __assign({}, props, { className: "w-full h-[40px] leading-[40px] rounded border border-1 border-Gray3 focus:outline-none B4-regular ".concat(!focus ? "text-Gray5 pl-8" : "text-black pl-4 pr-16", " ").concat(className), style: !focus
                    ? {
                        backgroundImage: "url(/icon/textfields/search_gray.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "4px center",
                        backgroundSize: "auto 24px",
                    }
                    : { backgroundImage: "none" }, value: value, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange })), focus && (jsxRuntime.jsxs(FlexBox, { className: "absolute top-0 w-full h-full px-2 justify-end gap-2", children: [jsxRuntime.jsx(Icon, { src: "/icon/textfields/close_black.png", className: "cursor-pointer", onClick: onClickCancel, sz: 20 }), jsxRuntime.jsx(Icon, { src: "/icon/textfields/search_black.png", className: "cursor-pointer", onClick: onSearch, sz: 24 })] }))] }));
}

/*
 * TextAreaField 컴포넌트는 얼루가의 텍스트 에리아 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * 초기 가운데 정렬을 위해 height를 자동으로 조절합니다. (최대 56px, 줄어들지는 않습니다)
 * 40자 이상일 경우 폰트 사이즈가 줄어듭니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param className - 텍스트 필드의 클래스, 없을 경우 B3-regular로 설정됩니다
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
function TextAreaField(_a) {
    var value = _a.value, setValue = _a.setValue, className = _a.className, props = __rest(_a, ["value", "setValue", "className"]);
    var _b = require$$1$2.useState("0px"), height = _b[0], setHeight = _b[1];
    var _c = require$$1$2.useState("B3-medium"), fontSize = _c[0], setFontSize = _c[1];
    var _d = require$$1$2.useState(false), focus = _d[0], setFocus = _d[1];
    var ref = require$$1$2.useRef(null);
    var handleChange = function (e) {
        var _a, _b, _c, _d, _e, _f, _g;
        setValue && setValue(e.target.value);
        props.onChange && props.onChange(e);
        setHeight("".concat(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollHeight) && ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) > 56
            ? 56
            : (_c = ref.current) === null || _c === void 0 ? void 0 : _c.scrollHeight, "px"));
        if (((_e = (_d = ref.current) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.length) && ((_g = (_f = ref.current) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g.length) > 40)
            setFontSize("B4-medium");
        else
            setFontSize("B3-medium");
    };
    var handleFocus = function (e) {
        var _a;
        e.preventDefault();
        setFocus(true);
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleBlur = function (e) {
        setFocus(false);
        props.onBlur && props.onBlur(e);
    };
    return (jsxRuntime.jsx(FlexBox, { direction: "col", className: "w-full justify-center min-h-[56px] border-b-2 ".concat(focus ? "border-Black" : "border-Gray3"), children: jsxRuntime.jsx("button", { type: "button", className: "w-full h-full cursor-text", onClick: handleFocus, children: jsxRuntime.jsx(FlexBox, { className: "w-full", children: jsxRuntime.jsx("textarea", __assign({}, props, { className: "resize-none w-full break-words bg-transparent outline-none ".concat(focus ? "text-Gray4" : "text-Gray3", " ").concat(className || fontSize, " placeholder:text-Gray3"), value: value, onChange: handleChange, onBlur: handleBlur, ref: ref, style: { height: height } })) }) }) }));
}

/**
 * TextCheckField 컴포넌트는 얼루가의 텍스트 체크 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param inactive - 비활성화 상태일 경우 true로 설정합니다.
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
function TextCheckField(_a) {
    var _b, _c;
    var value = _a.value, setValue = _a.setValue, ischecked = _a.ischecked, setIschecked = _a.setIschecked, inactive = _a.inactive, props = __rest(_a, ["value", "setValue", "ischecked", "setIschecked", "inactive"]);
    var _d = require$$1$2.useState("0px"), height = _d[0], setHeight = _d[1];
    var _e = require$$1$2.useState(false), focus = _e[0], setFocus = _e[1];
    var ref = require$$1$2.useRef(null);
    require$$1$2.useEffect(function () {
        var _a, _b, _c;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        setHeight("".concat(((_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) ? (_c = ref.current) === null || _c === void 0 ? void 0 : _c.scrollHeight : "0", "px"));
    }, [focus]);
    var handleFocus = function (e) {
        e.preventDefault();
        setFocus(true);
    };
    var handleBlur = function (e) {
        setFocus(false);
        props.onBlur && props.onBlur(e);
    };
    var handleChange = function (e) {
        var _a, _b;
        setValue && setValue(e.target.value);
        props.onChange && props.onChange(e);
        setHeight("".concat(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollHeight) ? (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollHeight : "0", "px"));
    };
    return (jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between py-3 px-4 bg-Gray1 rounded-lg", children: [jsxRuntime.jsx("button", { type: "button", onClick: handleFocus, className: "h-full w-full flex flex-col justify-center cursor-text", children: focus ? (jsxRuntime.jsx("textarea", __assign({}, props, { ref: ref, className: "".concat(focus ? "visible" : "invisible", " !leading-[22px]\n            B3-medium text-black w-full break-words bg-transparent outline-none overflow-hidden"), value: value, onChange: handleChange, onFocus: function (e) {
                        e.target.selectionStart = e.target.value.length;
                        props.onFocus && props.onFocus(e);
                    }, onBlur: handleBlur, style: { height: height }, placeholder: "" }))) : (jsxRuntime.jsx(FlexBox, { direction: "col", className: "w-full gap-2 items-start", children: (_c = (_b = (value || props.placeholder)) === null || _b === void 0 ? void 0 : _b.split("\n")) === null || _c === void 0 ? void 0 : _c.map(function (line, index) {
                        var _a;
                        if (index === 0)
                            return (jsxRuntime.jsx("div", { className: "B3-medium ".concat(inactive || !value ? "text-Gray5" : "text-black"), children: (_a = (value || props.placeholder)) === null || _a === void 0 ? void 0 : _a.split("\n")[0] }, index));
                        return (jsxRuntime.jsx("div", { className: "B4-regular ".concat(inactive || !value ? "text-Gray4" : "text-Gray5"), children: line }, index));
                    }) })) }), jsxRuntime.jsx(FlexBox, { className: "shrink-0", children: jsxRuntime.jsx(Checkbox, { type: "round", color: "black", size: "L", checked: ischecked, onClick: function () {
                        setIschecked && setIschecked(!ischecked);
                    } }) })] }));
}

/**
 * TextField 컴포넌트는 얼루가의 텍스트 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param label - 텍스트 필드의 레이블
 * @param assistText - 텍스트 필드의 보조 텍스트
 * @param className - 텍스트 필드의 클래스, 없을 경우 B3-regular로 설정됩니다
 * @param isError - 텍스트 필드의 에러 여부, true일 경우 빨간색으로 표시됩니다.
 * @param button - 텍스트 필드의 오른쪽에 위치할 버튼, ReactNode로 받습니다.
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
function TextField(_a) {
    var value = _a.value, setValue = _a.setValue, label = _a.label, assistText = _a.assistText, className = _a.className, isError = _a.isError, button = _a.button, props = __rest(_a, ["value", "setValue", "label", "assistText", "className", "isError", "button"]);
    var _b = require$$1$2.useState(false), focus = _b[0], setFocus = _b[1];
    var onClickCancel = function () {
        setValue && setValue("");
    };
    var handleChange = function (e) {
        setValue && setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    var handleFocus = function (e) {
        setFocus(true);
        props.onFocus && props.onFocus(e);
    };
    var handleBlur = function (e) {
        setFocus(false);
        props.onBlur && props.onBlur(e);
    };
    return (jsxRuntime.jsxs(FlexBox, { direction: "col", className: "w-full gap-1", children: [label && (jsxRuntime.jsx("label", { className: "B4-regular leading-[16px] w-full text-Gray6", htmlFor: props.id, children: label })), jsxRuntime.jsxs(FlexBox, { className: "w-full justify-between h-[56px] border-b-2 ".concat(isError ? "border-Red" : focus ? "border-Black" : "border-Gray3"), children: [jsxRuntime.jsx("input", __assign({}, props, { className: "w-full h-full bg-transparent outline-none ".concat(isError ? "text-Red" : focus ? "text-black" : "text-Gray5", " ").concat(className || "B3-regular", " placeholder:text-Gray3"), value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur })), button, !button && focus && (jsxRuntime.jsx(Icon, { src: "/icon/textfields/close_".concat(isError ? "red" : "black", ".png"), alt: "x", sz: 20, className: "cursor-pointer", onClick: onClickCancel }))] }), assistText && (jsxRuntime.jsx("p", { className: "w-full C2 leading-[16px] ".concat(isError ? "text-Red" : focus ? "text-Gray7" : "text-Gray5"), children: assistText }))] }));
}

/**
 * TimeField 컴포넌트는 얼루가의 시간 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 시간 필드의 값 (state), 4자리의 숫자로 구성된 문자열을 넣어야합니다.
 * @param setValue - 시간 필드의 값 변경 함수 (setState)
 * @param className - 시간 필드의 클래스
 * @returns
 */
function TimeField(_a) {
    var value = _a.value, setValue = _a.setValue; _a.className; var props = __rest(_a, ["value", "setValue", "className"]);
    var _b = require$$1$2.useState(false), focus = _b[0], setFocus = _b[1];
    var ref0 = require$$1$2.useRef(null);
    var ref1 = require$$1$2.useRef(null);
    var ref2 = require$$1$2.useRef(null);
    var ref3 = require$$1$2.useRef(null);
    var inputRefList = [ref0, ref1, ref2, ref3];
    var handleFocus = function (e) {
        var _a;
        e.preventDefault();
        (_a = inputRefList[0].current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleChange = function (e, index) {
        var _a, _b, _c, _d;
        var key = e.key;
        if (key === "Backspace") {
            setValue("".concat(value.slice(0, index), "0").concat(value.slice(index + 1)));
            if (index > 0) {
                (_a = inputRefList[index].current) === null || _a === void 0 ? void 0 : _a.blur();
                (_b = inputRefList[index - 1].current) === null || _b === void 0 ? void 0 : _b.focus();
            }
            return;
        }
        if (Number.isNaN(Number(key))) {
            setValue(value);
            return;
        }
        setValue(value.slice(0, index) + key + value.slice(index + 1));
        if (index < 3) {
            (_c = inputRefList[index].current) === null || _c === void 0 ? void 0 : _c.blur();
            (_d = inputRefList[index + 1].current) === null || _d === void 0 ? void 0 : _d.focus();
        }
    };
    return (jsxRuntime.jsx(FlexBox, { className: "justify-center w-[148px] h-[40px] border border-1 rounded ".concat(props.disabled ? "bg-Gray1" : focus ? "bg-black" : "bg-Gray6", " ").concat(props.disabled ? "text-Gray3" : focus ? "text-white" : "text-Gray3"), children: jsxRuntime.jsx("button", { type: "button", className: "w-full h-full cursor-text", onClick: handleFocus, children: jsxRuntime.jsxs(FlexBox, { className: "justify-center", children: [jsxRuntime.jsx("input", { ref: ref0, value: value[0], className: "outline-none w-[12px] text-center selection:underline bg-transparent", onKeyDown: function (e) { return handleChange(e, 0); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, pattern: "[0-9]*", inputMode: "numeric" }), jsxRuntime.jsx("input", { ref: ref1, value: value[1], className: "outline-none w-[12px] text-center selection:underline bg-transparent", onKeyDown: function (e) { return handleChange(e, 1); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, pattern: "[0-9]*", inputMode: "numeric" }), jsxRuntime.jsx("span", { className: "mx-1", children: ":" }), jsxRuntime.jsx("input", { ref: ref2, value: value[2], className: "outline-none w-[12px] text-center selection:underline bg-transparent", onKeyDown: function (e) { return handleChange(e, 2); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, pattern: "[0-9]*", inputMode: "numeric" }), jsxRuntime.jsx("input", { ref: ref3, value: value[3], className: "outline-none w-[12px] text-center selection:underline bg-transparent", onKeyDown: function (e) { return handleChange(e, 3); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, pattern: "[0-9]*", inputMode: "numeric" })] }) }) }));
}

exports.AddOption = AddOption;
exports.AdminSettingBanner = AdminSettingBanner;
exports.Button = Button;
exports.ButtonBar = ButtonBar;
exports.Calender = Calender;
exports.CategoryInfo = CategoryInfo;
exports.Checkbox = Checkbox;
exports.DayChip = DayChip;
exports.Divider = Divider;
exports.Dropdown = Dropdown;
exports.FlexBox = FlexBox;
exports.FloatingActionButton = FloatingActionButton;
exports.GridBox = GridBox;
exports.HomeBar = HomeBar;
exports.Icon = Icon;
exports.Layout = Layout;
exports.List = List;
exports.LoginButton = LoginButton;
exports.LongTab = LongTab;
exports.MenuInfo = MenuInfo;
exports.Profile = Profile;
exports.Radio = Radio;
exports.SearchField = SearchField;
exports.ShortTab = ShortTab;
exports.Slider = Slider;
exports.StateButton = StateButton;
exports.TabBar = TabBar;
exports.TabBarCeo = TabBarCeo;
exports.TabBarGage = TabBarGage;
exports.TextAreaField = TextAreaField;
exports.TextButton = TextButton;
exports.TextCheckField = TextCheckField;
exports.TextChip = TextChip;
exports.TextField = TextField;
exports.TextFieldButton = TextFieldButton;
exports.TextTextButton = TextTextButton;
exports.TimeField = TimeField;
exports.TopTitle = TopTitle;
exports.WorkDetailCard = WorkDetailCard;
exports.WorkInfoBanner = WorkInfoBanner;
exports.WorkInfoCard = WorkInfoCard;
exports.calculateHours = calculateHours;
exports.useDialog = useDialog;
//# sourceMappingURL=next.config.js.map
