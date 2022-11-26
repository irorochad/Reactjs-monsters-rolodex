// import { Component } from "react";
import { useState, useEffect } from "react";

// import logo from "./logo.svg";
import SearchBox from "./components/search-box/search-box.componenets";
import CardList from "./components/card-list/card-list.components";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonster] = useState([]);

  // console.log({ searchField });

  const onchangeBtn = (event) => {
    const searchFieldSting = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldSting);
  };

  const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
        });

    
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  return (
    
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onchangeBtn}
        placeholder="Search monsters"
        className="seach-input"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// A Class base component.
// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("ComponentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   render() {
//     console.log("render");
//     const onchangeBtn = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();

//       this.setState(() => {
//         return { searchField };
//       });
//     };

//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onchangeBtn}
//           placeholder="Search monsters"
//           className="seach-input"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
