import { html, css, LitElement } from './node_modules/lit/index.js';

const commonColors = [
  "Black", "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Silver", "Gray", "Gold"
];

class Counter extends LitElement {
  static styles = css`
    p {
      font-size: 18px;
      color: green;
    }
    button {
      padding: 5px 10px;
      font-size: 16px;
      cursor: pointer;
    }
  `;
  
  static properties = {
    count: { type: Number },
    btnColor: { type: String }
  };

  constructor() {
    super();
    this.count = 0; 
    this.btnColor = "blue"; 
  }
  changeColor() {
    const rndNum = Math.floor(Math.random() * commonColors.length);
    this.btnColor = commonColors[rndNum];
  }
  increment() {
    this.count += 1;
    this.changeColor();
  }
  decrement() {
    this.count -= 1;
    this.changeColor();
  }

  render() {
    return html`
      <button @click="${this.decrement}" style="background-color: ${this.btnColor};">Decrement</button>
      <p>Current count: ${this.count}</p>
      <button @click="${this.increment}" style="background-color: ${this.btnColor};">Increment</button>
    `;
  }
}

customElements.define('counter-ele', Counter);
