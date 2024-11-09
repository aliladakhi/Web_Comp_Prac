import { html, css, LitElement } from 'lit';

class LoginStatus extends LitElement {
  static styles = css`
    .message {
      font-size: 18px;
      margin: 10px 0;
      color: navy;
    }
    button {
      padding: 8px 12px;
      font-size: 16px;
      color: white;
      background-color: navy;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: darkblue;
    }
  `;

  static properties = {
    isLoggedIn: { type: Boolean },
    msgType:{type:String}
  };

  constructor() {
    super();
    this.isLoggedIn = false; 
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  render() {
    return html`
      <div class="message">
        ${this.isLoggedIn ? html`<p>Welcome back, User!</p>` : html`<p>Please log in.</p>`}
      </div>
      <button @click="${this.toggleLogin}">
        ${this.isLoggedIn ? 'Logout' : 'Login'}
      </button>
    `;
  }
}

customElements.define('login-status', LoginStatus);
