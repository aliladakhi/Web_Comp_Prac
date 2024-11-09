import { html, css, LitElement } from 'lit';

class SimpleModal extends LitElement {
static styles = css`
.overlay {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
}
.modal {
background: white;
padding: 20px;
border-radius: 8px;
width: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
position: relative;
}
.close-button {
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
font-size: 18px;
cursor: pointer;
}
`;

static properties = {
isOpen: { type: Boolean }, 
};

constructor() {
super();
this.isOpen = false; 
}

closeModal() {
this.isOpen = false;
}

render() {
return html`
${this.isOpen
? html`
    <div class="overlay" @click="${this.closeModal}">
        <div class="modal" @click="${e => e.stopPropagation()}">
        <button class="close-button" @click="${this.closeModal}">&times;</button>
        <slot></slot>
        </div>
    </div>
    `
: ''}
`;
}
}

customElements.define('simple-modal', SimpleModal);
