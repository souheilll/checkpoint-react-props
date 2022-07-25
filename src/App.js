import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from "./components/Navvbar";
import ListOfUsers from "./components/ListOfUsers";
import { users, nameOfAdmin } from "./data";



function App() {
  const handleName = (user) => {
    alert(user.name)
  }
  return (
    <div style={{ textAlign: 'center' }} className="App">
      <div>
        <Navvbar />
      </div>
      <ListOfUsers users={users} nameOfAdmin={nameOfAdmin} handleName={handleName} />
    </div>
  );
}
export default App;
