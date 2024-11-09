import { html, css, LitElement } from './node_modules/lit/index.js';

class Mylit extends LitElement {
  static styles = css`
    p {
      color: blue;
      font-size: 20px;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'Sky is falling';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('my-lit', Mylit);
