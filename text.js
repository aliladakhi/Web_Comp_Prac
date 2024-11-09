
class TextInputComponent extends HTMLElement {
constructor() {
super();
const shadowRoot = this.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `
<style>
input {
    padding: 10px;
    font-size: 14px;
    border: 2px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
}
</style>
<input type="text" placeholder="Text input here" />
`;
}
}

customElements.define('text-input-component', TextInputComponent);
