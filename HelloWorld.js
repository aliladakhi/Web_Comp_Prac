class HelloWorld extends HTMLElement{
    constructor(){
        super();

    }
    connectedCallback(){
        this.innerHTML=`<p>Hello world</p>
                        <h3>${this.getAttribute("my-name")}</h3>`
    }
}

customElements.define("hello-world",HelloWorld)