const template=document.createElement("template");
template.innerHTML=`
<style>
label{
display:block;
}
p{  
    display:inline;
    color:red;
}
    span{
        color:green;
    }
</style>
<label>
    <input type="checkbox">
<p><slot></slot></p>
        <span><slot name="desp"></slot>
        </span>
</label>
`
class TodoItem extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"})
        shadow.append(template.content.cloneNode(true));
    }
}


customElements.define("todo-item",TodoItem)