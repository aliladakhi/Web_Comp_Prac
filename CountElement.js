const template1 = document.createElement("template");
template1.innerHTML = `
  <style>
    .counter-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    button {
      width: 30px;
      height: 30px;
      font-size: 20px;
      font-weight: bold;
      border: 2px solid #007BFF;
      border-radius: 5px;
      background-color: #f0f0f0;
      color: #007BFF;
      cursor: pointer;
      transition: all 0.2s;
    }
    button:hover {
      background-color: #007BFF;
      color: white;
    }
    #count {
      font-size: 1.5rem;
      font-weight: bold;
      min-width: 40px;
      text-align: center;
      color: #333;
    }
  </style>
  <div class="counter-container">
    <button id="decrement">-</button>
    <span id="count">0</span>
    <button id="increment">+</button>
  </div>
`;



class CountElement extends HTMLElement{
 
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"})
        shadow.append(template1.content.cloneNode(true))
        this.countEle=shadow.querySelector("#count")
        this.incrementEle=shadow.querySelector("#increment")
        this.decrementEle=shadow.querySelector("#decrement")
        console.log("constructor")
    }

    
    connectedCallback(){
        this.count=parseInt(this.initialVal) || 0;
        this.countEle.innerText=0;
        console.log("connected");
        this.incrementEle.addEventListener("click",this.increment.bind(this))
        this.decrementEle.addEventListener("click",this.decrement.bind(this))
    }

    increment() {
        this.count += this.steps;
        this.updateCountDisplay();
    }

    decrement() {
        this.count -= this.steps;
        this.updateCountDisplay();
    }
    updateCountDisplay() {
        this.countEle.innerText = this.count;
    }

    static get observedAttributes() {
        return ["steps", "initialVal"];
    }
    static get observedAttributes(){
        return ["steps","initialVal"]
    }


    get initialVal(){
        return this.getAttribute("initialVal")
    }
    set initialVal(value){
        if(value){
            this.setAttribute("initialVal",value)
        }
        else{
            this.removeAttribute("initialVal")
        }
    }

    get steps() {
        return parseInt(this.getAttribute("steps")) || 1;
    }
    set steps(value){
        if(value){
            this.setAttribute("steps",value)
        }
        else{
            this.removeAttribute("steps")
        }
    }



    attributeChangedCallback(name,oldval,newval){
        console.log(`${name}  olfval:${oldval}  newval:${newval}`)
    }
    diconnectedCallback(){
        console.log("clean")
    }
}

customElements.define("count-element",CountElement);