import { useState, useEffect, ChangeEvent } from "react";

import SearchBox from "./components/search-box/search-box.componenets";
import CardList from "./components/card-list/card-list.components";
import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  id: number;
  name: string;
  email: string;
  username: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonster] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonster(users);
    };
    fetchUsers();
  }, []);

  const onchangeBtn = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldSting = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldSting);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

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
