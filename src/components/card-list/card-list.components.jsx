import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div key={monster.id} className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set2`}
              alt="Monster Image"
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
