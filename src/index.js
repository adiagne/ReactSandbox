import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Adama" },
      { id: 2, nom: "Samba" },
      { id: 3, nom: "Tidjane" }
    ]
  };

  handleClick() {
    alert("Hello world !");
  }
  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1> {title}</h1>
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un peu de texte" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
