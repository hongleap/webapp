import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function createLayout(contentFn: () => HTMLElement): void {
    const app = document.getElementById('app')!;
  app.innerHTML = ''; // clear previous content

  const header = Header();
  const content = contentFn();
  const footer = Footer();

  app.append(header, content, footer);
}