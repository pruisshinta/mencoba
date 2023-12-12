class Search extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.calling();
    }

    set clickEvent(click) {
        this._clickEvent = click;
        this.calling();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchInput").value;
    }

    calling() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            padding-left: 15%;
            padding-right: 15%;
          }
           
          .search-box > input {
            flex: 65%;
            margin-right: 5px;
            padding: 16px;
            border: 0;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
            border-radius: 3px;
          }
           
          .search-box > input:focus {
            outline: 1px solid #FFB000;

          }
           
          .search-box > input::placeholder {
            font-weight: normal;
          }
           
          .search-box > button {
            flex: 20%;
            cursor: pointer;
            padding: 16px;
            background-color: #FFB000;
            color: white;
            border: 0;
            text-transform: uppercase;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
            border-radius: 2px;
          }

          .search-box > button:hover {
            font-weight: bold;
            background-color: #EE9322;
          }

          img {
            margin: 0;
            padding: 0;
            width: 25rem;
          }
           
          @media screen and (max-width: 550px) {
            .search-box {
              flex-direction: row;
              position: static;
            }
           
            .search-box > input {
              width: 90%;
              margin: 0;
            }
           
            .search-box > button {
              justify-content: center;
              text-align: center;
              align-items: center;
              width: 30%;
              margin-left: 0;
            }
          }
        </style>
         
        <img src="https://i.imgur.com/Otoiabm.png" alt="Logo">
        <div id="search-box" class="search-box">
            <input type="text" id="searchInput" placeholder="Type a meal name here..">
            <button id="searchButton">Search</button>
        </div>
        `;

    this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-bar', Search);