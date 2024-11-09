const btnTemplate=document.createElement("template");
btnTemplate.innerHTML=`
<style>
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #45a049;
}
</style>
<button><slot></slot></button>
`

class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(btnTemplate.content.cloneNode(true))
    }
}

customElements.define('button-component', ButtonComponent);
