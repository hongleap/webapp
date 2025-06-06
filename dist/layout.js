"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = createLayout;
const footer_1 = require("./components/footer");
const header_1 = require("./components/header");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const header = (0, header_1.Header)();
    const content = contentFn();
    const footer = (0, footer_1.Footer)();
    app.append(header, content, footer);
}
