const chkTemplate=document.createElement("template")
chkTemplate.innerHTML=`
<style>
input[type="checkbox"] {
width: 20px;
height: 20px;
margin-right: 10px;
}
</style>
<label><input type="checkbox" /> Check me</label>
`
class CheckboxComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(chkTemplate.content.cloneNode(true))
    }
}

customElements.define('checkbox-component', CheckboxComponent);
