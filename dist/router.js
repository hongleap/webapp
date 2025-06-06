"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = initRouter;
const layout_1 = require("./layout");
const about_1 = require("./pages/about");
const contact_1 = require("./pages/contact");
const home_1 = require("./pages/home");
const service_1 = require("./pages/service");
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', e => {
        const target = e.target;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
}
renderRoute();
function renderRoute() {
    const pathname = window.location.pathname;
    let contentFn;
    switch (pathname) {
        case '/':
            contentFn = home_1.randerHome;
        case '/about':
            contentFn = about_1.randerAbout;
        case '/contact':
            contentFn = contact_1.randerContact;
        default:
            contentFn = service_1.randerService;
            break;
    }
    (0, layout_1.createLayout)(contentFn);
}
