const inputTemplate=document.createElement("template");
inputTemplate.innerHTML=`
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
    <input type="text" placeholder="Enter text" />
`

class InputComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(inputTemplate.content.cloneNode(true))
    }
}

customElements.define('input-component', InputComponent);
