import { createLayout } from "./layout";
import { renderHome } from "./pages/home";
import { renderAbout } from "./pages/about";
import { renderContact } from "./pages/contact";
import { renderService } from "./pages/products";

export function initRouter(): void {
    window.addEventListener('popstate', renderRoute);

    document.addEventListener('click', e => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href')!;
            history.pushState(null, '', href);
            renderRoute();
        }
    });

    renderRoute();
}
    
    function renderRoute(): void {
    const pathname = window.location.pathname;

    let contentFn: () => HTMLElement;

    switch (pathname) {
        case '/':
            contentFn = renderHome;
            break;
        case '/home':
            contentFn = renderHome;
            break;
        case '/about':
            contentFn = renderAbout;
            break;
        case '/contact': 
            contentFn = renderContact;
            break;
        case '/service':
            contentFn = renderService;
            break;
        default:
            contentFn = () => {
                const div = document.createElement('div');
                div.innerHTML = '<h1>404 - Page Not Found</h1>';
                return div;
            };
            break;
    }
    
    createLayout(contentFn);
}
