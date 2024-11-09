class ExtendedUL extends HTMLUListElement {
constructor() {
super();
const shadow = this.attachShadow({ mode: 'open' });
const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  .arrow {
    cursor: pointer;
    margin-right: 10px;
  }
  .heading {
    font-size: 1.2em;
    display: flex;
    align-items: center;
  }

  .heading span {
    margin-left: 5px;
  }
  .list {
    display: none;
  }

  .list.open {
    display: block;
  }
</style>

<div class="heading">
  <span class="arrow">▲</span>
  <slot name="heading"></slot>
</div>
<ul class="list">
  <slot></slot>
</ul>
`;
shadow.appendChild(template.content.cloneNode(true));
this.arrowElement = shadow.querySelector('.arrow');
this.listElement = shadow.querySelector('.list');
this.arrowElement.addEventListener('click', () => this.toggleListVisibility());
}
toggleListVisibility() {
if (this.listElement.classList.contains('open')) {
this.listElement.classList.remove('open');
this.arrowElement.textContent = '▲';
} else {
this.listElement.classList.add('open');
this.arrowElement.textContent = '▼'; 
}
}
}
customElements.define('extended-ul', ExtendedUL, { extends: 'ul' });
