
class RadioComponent extends HTMLElement {
constructor() {
super();
const shadowRoot = this.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `
<style>
input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>
<label><input type="radio" name="group" /> Option 1</label>
<label><input type="radio" name="group" /> Option 2</label>
`;
}
}

customElements.define('radio-component', RadioComponent);
