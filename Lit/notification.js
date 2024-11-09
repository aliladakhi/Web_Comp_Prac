import { html, css, LitElement } from 'lit';

class NotificationAlert extends LitElement {
  static styles = css`
    .alert {
      padding: 10px 15px;
      margin: 10px 0;
      border-radius: 5px;
      font-size: 16px;
      color: white;
    }

    .success {
      background-color: green;
    }

    .error {
      background-color: red;
    }

    .info {
      background-color: blue;
    }

    button {
      background: none;
      border: none;
      font-size: 16px;
      font-weight: bold;
      color: white;
      margin-left: 10px;
      cursor: pointer;
    }
  `;

  static properties = {
    type: { type: String }, 
    isVisible: { type: Boolean }, 
  };

  constructor() {
    super();
    this.type = 'info';
    this.isVisible = true; 
  }

  dismiss() {
    this.isVisible = false;
  }

  render() {
    const alertClass = {
      success: 'success',
      error: 'error',
      info: 'info',
    }[this.type] || 'info';

    return html`
      ${this.isVisible
        ? html`
            <div class="alert ${alertClass}">
              ${this.type === 'success'
                ? 'Operation Successful!'
                : this.type === 'error'
                ? 'An error occurred!'
                : 'Information message.'}
              <button @click="${this.dismiss}">&times;</button>
            </div>
          `
        : ''}
    `;
  }
}

customElements.define('notification-alert', NotificationAlert);
