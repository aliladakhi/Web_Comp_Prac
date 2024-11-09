const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      margin: 20px;
      padding: 10px;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 300px;
    }
    .input-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
    }
    input[type="text"] {
      flex-grow: 1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    button {
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #007BFF;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #0056b3;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 10px 0;
    }
    li {
      padding: 8px;
      margin: 5px 0;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #fff;
      font-size: 1rem;
    }
  </style>
  <div>
    <div class="input-container">
      <input type="text" id="input-task" placeholder="Enter a new task">
      <button id="addBtn">Add Task</button>
    </div>
    <ul id="itemlist"></ul>
  </div>
`;

class Todo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    this.inputBox = shadow.querySelector("#input-task");
    this.addBtn = shadow.querySelector("#addBtn");
    this.list = shadow.querySelector("#itemlist");

    this.addBtn.addEventListener("click", this.addTask.bind(this));
  }

  addTask() {
    const taskText = this.inputBox.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      this.list.appendChild(li);
      this.inputBox.value = "";
    }
  }
}

customElements.define("todo-list", Todo);
