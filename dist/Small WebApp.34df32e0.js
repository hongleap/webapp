// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _router = require("./router");
document.addEventListener('DOMContentLoaded', ()=>{
    (0, _router.initRouter)();
});

},{"./router":"4wVP1"}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _layout = require("./layout");
var _home = require("./pages/home");
var _about = require("./pages/about");
var _contact = require("./pages/contact");
var _products = require("./pages/products");
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', (e)=>{
        const target = e.target;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const pathname = window.location.pathname;
    let contentFn;
    switch(pathname){
        case '/':
            contentFn = (0, _home.renderHome);
            break;
        case '/home':
            contentFn = (0, _home.renderHome);
            break;
        case '/about':
            contentFn = (0, _about.renderAbout);
            break;
        case '/contact':
            contentFn = (0, _contact.renderContact);
            break;
        case '/service':
            contentFn = (0, _products.renderService);
            break;
        default:
            contentFn = ()=>{
                const div = document.createElement('div');
                div.innerHTML = '<h1>404 - Page Not Found</h1>';
                return div;
            };
            break;
    }
    (0, _layout.createLayout)(contentFn);
}

},{"./layout":"aUJjy","./pages/about":"d8csY","./pages/contact":"a0XsK","./pages/home":"l0Soh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./pages/products":"kgp9M"}],"aUJjy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLayout", ()=>createLayout);
var _footer = require("./components/footer");
var _header = require("./components/header");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // clear previous content
    const header = (0, _header.Header)();
    const content = contentFn();
    const footer = (0, _footer.Footer)();
    app.append(header, content, footer);
}

},{"./components/footer":"ddP1f","./components/header":"lAi08","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ddP1f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
function Footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 mt-8 lg:py-8">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tailwind</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xa9 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite\u{2122}</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                    <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                    <span class="sr-only">Discord community</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Twitter page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">GitHub account</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Dribbble account</span>
                </a>
            </div>
        </div>
        </div>
    </footer>`;
    return footer;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lAi08":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
function Header() {
    const header = document.createElement('header');
    header.className = 'bg-blue-900 text-white';
    header.innerHTML = `
<div class="m-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tailwind</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        
        <!-- Dark Mode Toggle Button -->
        <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5">
          <svg id="theme-toggle-dark-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z"/>
          </svg>
          <svg id="theme-toggle-light-icon" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.222 4.222a1 1 0 111.415 1.415L4.636 6.636a1 1 0 01-1.415-1.415l1-1zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.222 5.778a1 1 0 011.415 0l1 1a1 1 0 01-1.415 1.415l-1-1a1 1 0 010-1.415zM10 17a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm5.778-2.222a1 1 0 010 1.415l-1 1a1 1 0 01-1.415-1.415l1-1a1 1 0 011.415 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.222-5.778a1 1 0 010 1.415l-1 1a1 1 0 01-1.415-1.415l1-1a1 1 0 011.415 0z"/>
          </svg>
        </button>

        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/home" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>  
          <li>
            <a href="/service" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</a>
          </li> 
          <li>
            <a href="/about" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>   
          <li>
            <a href="/contact" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div> 
    </div>
  </nav>
</div>

<!-- Dark Mode Script -->
<script>
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  // On page load
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    darkIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    lightIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', () => {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
</script>
    `;
    return header;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d8csY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAbout", ()=>renderAbout);
function renderAbout() {
    const div = document.createElement('div');
    div.innerHTML = `
        <main class="">
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center text-sm">
          <a href="/" class="text-gray-500 hover:text-gray-800">Home</a>
          <span class="mx-2 text-gray-500">/</span>
          <span class="text-gray-800">About</span>
        </div>
      </div>

      <!-- Our Story Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 pr-8" data-aos="fade-down-right">
            <h1 class="text-4xl font-bold mb-6">Our Story</h1>
            <p class="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p class="text-gray-700">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0" data-aos="fade-up-left">
            <img
              src="https://cdn.dribbble.com/userupload/13121192/file/original-debc92111eefa2b479ff782039c60f1e.jpg?resize=400x0"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stat Card 1 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black  p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100  rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">10.5k</h3>
            <p>Sellers active our site</p>
          </div>
          <!-- Stat Card 2 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black  p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100  rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">33k</h3>
            <p>Monthly Productduct Sale</p>
          </div>
          <!-- Stat Card 3 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">45.5k</h3>
            <p>Customer active in our site</p>
          </div>
          <!-- Stat Card 4 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />                                                                              
            </div>
            <h3 class="text-3xl font-bold">25k</h3>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Tom Cruise</h3>
            <p class="text-gray-600 mb-3">Founder & Chairman</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://dy7glz37jgl0b.cloudfront.net/advice/images/39732cb0715c2a3b547785ccb83407e1-man-smiles-at-computer-hands-clasped_l.jpeg"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Emma Watson</h3>
            <p class="text-gray-600 mb-3">Managing Director</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://cdn.prod.website-files.com/64c90c3b6f011629401599b1/652d09aa1adab2cd93fde418_rodzaje-person-zakupowych.webp"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Will Smith</h3>
            <p class="text-gray-600 mb-3">Product Designer</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      <!-- Services Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Service 1 -->
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-down-left"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              Free and Fast Delivery
            </h3>
            <p class="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          <!-- Service 2 -->
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-down-right"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              24/7 Customer Service
            </h3>
            <p class="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          <!-- Service 3 -->
          <div class="bg-white rounded-lg shadow-md p-6 text-center" data-aos="fade-up-left">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              Money Back Guarantee
            </h3>
            <p class="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </main>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0XsK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContact", ()=>renderContact);
function renderContact() {
    const div = document.createElement('div');
    div.innerHTML = `
    <main class="">
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center text-sm">
          <a href="/" class="text-gray-500 hover:text-gray-800">Home</a>
          <span class="mx-2 text-gray-500">/</span>
          <a href="./contact.html" class="text-gray-800">Contact</a>
        </div>
      </div>

      <!-- Contact Section -->
      <section class="container mx-auto px-6 py-10">
        <div
          class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
        >
          <!-- Contact Info Card -->
          <div class="md:w-1/3 bg-white p-8 rounded-lg shadow-md" data-aos="fade-down-right">
            <!-- Call To Us -->
            <div class="mb-10">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-secondary2 rounded-full flex items-center justify-center mr-4"
                >
                  <i class="fas fa-phone text-white"></i>
                </div>
                <h3 class="text-xl font-bold">Call To Us</h3>
              </div>
              <p class="text-gray-600 mb-3">
                We are available 24/7, 7 days a week.
              </p>
              <p class="text-gray-600 mb-3">Phone: +8801611112222</p>
              <div class="border-t border-gray-200 my-6"></div>
            </div>

            <!-- Write To US -->
            <div>
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-secondary2 rounded-full flex items-center justify-center mr-4"
                >
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <h3 class="text-xl font-bold">Write To US</h3>
              </div>
              <p class="text-gray-600 mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p class="text-gray-600 mb-2">Emails: customer@exclusive.com</p>
              <p class="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div
            class="md:w-2/3 bg-white p-8 rounded-lg shadow-md border border-blue-100"
            data-aos="fade-up-left"
          >
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                ></textarea>
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="bg-secondary2 text-white px-8 py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0Soh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
function renderHome() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class=" w-full py-9 px-8">
      <div class="mx-auto flex  flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-[1440px] bg-no-repeat ">
        <div class="w-[660px]  flex-col justify-center items-start gap-20 inline-flex">
          <div class="self-stretch  flex-col justify-start items-start gap-5 flex">
            <h1 class="self-stretch">
              <span class="  text-5xl font-bold font-['Roboto']">Redefining Motion:</span><span class="text-blue-600 text-5xl font-bold font-['Roboto']"> The Future of Fashion</span>
            </h1>
            <p class="self-stretch  text-xl font-normal font-['Roboto']">
            Experience unparalleled comfort and
            innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.
            </p>
          </div>
          <div class="justify-start items-center gap-5 inline-flex">
            <div class="justify-start items-center gap-2.5 flex">
              <div data-svg-wrapper="true" class="relative"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
                    fill="white"></path>
                </svg></div>
            </div>
            <button class="px-8 py-4 bg-blue-600 rounded-[10px] justify-center items-center gap-2.5 flex text-white text-sm font-semibold font-['Roboto']">Shop Now</button>
          </div>
        </div><img class="w-full max-w-[600px]" src="https://queue-it.com/media/ppcp1twv/product-drop.jpg" alt="">
      </div>
    </section>

  <!-- Features Section -->
  <section id="features" class="py-16 bg-blue-50">
    <div class="container mx-auto px-4 text-center">
      <h3 class="text-3xl font-bold text-blue-800 mb-10">Why Choose Us</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow border border-blue-100">
          <h4 class="text-xl font-semibold mb-2 text-blue-700">Fast & Lightweight</h4>
          <p>Optimized performance using Tailwind and TypeScript.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border border-blue-100">
          <h4 class="text-xl font-semibold mb-2 text-blue-700">Easy Integration</h4>
          <p>Seamlessly integrate with APIs and modern frameworks.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border border-blue-100">
          <h4 class="text-xl font-semibold mb-2 text-blue-700">Responsive Design</h4>
          <p>Fully responsive layout that works on any device.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h3 class="text-3xl font-bold text-blue-800 mb-6">About MyModernSite</h3>
      <p class="text-lg">MyModernSite is a front-end project built using HTML, CSS, TypeScript, and Tailwind CSS. It's designed to help developers create beautiful, functional web apps with modern features like API integration, dynamic routing, dark mode, and more.</p>
    </div>
  </section>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kgp9M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderService", ()=>renderService);
function renderService() {
    const div = document.createElement('div');
    async function fetchProducts() {
        try {
            const api = await fetch('https://dummyjson.com/products');
            if (!api.ok) throw new Error(`HTTP error status! : ${api.status}`);
            const data = await api.json();
            return data.products;
        } catch (error) {
            console.error('Error fetching products: ', error);
            return [];
        }
    }
    function renderCards(products) {
        div.innerHTML = '';
        const grid = document.createElement('div');
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] m-auto";
        products.forEach((product)=>{
            const card = document.createElement('div');
            const imageUrl = product.images?.[0] || 'https://via.placeholder.com/300x200';
            card.innerHTML = `
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" src="${product.images}" alt="product image" />
        </a>
        <div class="px-5 pb-5">
        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h1>
        <a href="#">
        
        <p class="text-xl py-4 font-semibold tracking-tight text-gray-900 dark:text-white">${product.description.slice(0, 50)}...</p>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
        </div>
        </div>
      `;
            card.addEventListener('click', ()=>{
                showProductDetail(product);
            });
            grid.appendChild(card);
        });
        div.appendChild(grid);
    }
    // Create modal container once (outside renderCards)
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden";
    modal.innerHTML = `
    <div class="bg-white rounded-lg w-[90%] m-auto relative p-6">
      <button id="close-modal" class="absolute top-4 right-4 text-lg font-bold text-gray-700 hover:text-red-500">&times;</button>
      <div id="modal-content"></div>
    </div>
  `;
    document.body.appendChild(modal);
    const modalContent = modal.querySelector('#modal-content');
    const closeModalBtn = modal.querySelector('#close-modal');
    function showProductDetail(product) {
        modalContent.innerHTML = `
      <div class="max-w-7xl mx-auto lg:px-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="${product.images?.[0] || ''}" alt="${product.title}" class="w-full h-auto rounded-lg" />
        </div>
        <div class="text-lg grid gap-2 p-6">
          <h1 class="font-bold text-3xl mb-2 text-blue-600">${product.title}</h1>
          <p class="mb-4">${product.description}</p>
          <p class="font-bold text-3xl mb-4 text-blue-600">Price: $${product.price}</p>
          <button class="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700">Buy Now</button>
          <div class="">
            <div class="mb-4">
            <p class="font-medium mb-1">Size:</p>
            <div class="flex gap-2">
             <button class="border px-3 py-1 rounded hover:bg-gray-100">
               XS
              </button>
              <button class="border px-3 py-1 rounded hover:bg-gray-100">
              S
              </button>
              <button
              class="border px-3 py-1 rounded bg-secondary2 text-text"
            >
               M
            </button>
            <button class="border px-3 py-1 rounded hover:bg-gray-100">
            L
            </button>
            <button class="border px-3 py-1 rounded hover:bg-gray-100">
             XL
            </button>
            </div>
            </div>

            <!-- Quantity + Buy -->
                <div class="flex items-center gap-4 mb-4">
                  <input
                    type="number"
                    value="2"
                    min="1"
                    class="w-16 border rounded p-1 text-center"
                  />
                  <button
                    class="bg-secondary2 text-white px-6 py-2 rounded hover:bg-hover-button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
        </div>
      </div>
      
    `;
        modal.classList.remove('hidden');
    }
    closeModalBtn.addEventListener('click', ()=>{
        modal.classList.add('hidden');
    });
    modal.addEventListener('click', (e)=>{
        if (e.target === modal) modal.classList.add('hidden');
    });
    (async ()=>{
        try {
            const products = await fetchProducts();
            renderCards(products);
        } catch (error) {
            console.error("Error:", error);
        }
    })();
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequireb93c", {})

//# sourceMappingURL=Small WebApp.34df32e0.js.map
