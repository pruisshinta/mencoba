class AppBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.calling();
    }
   
    calling() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: flex-start;
            justify-content: left;
            background-color: #FFB000;
          }
          h1 {
            padding: 10px 16px;
            margin: 0;
            color: white;
          }
        </style>
        
        <h1>AppMeals</h1>
      `;
    }
  }
   
  customElements.define('app-bar', AppBar);