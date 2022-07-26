import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from "./components/Navvbar";
import ListOfUsers from "./components/ListOfUsers";
import { users, nameOfAdmin } from "./data";
import cit from './images/cit.png';
import lg from './images/lg.png';
import li from './images/li.png';



function App() {
  const handleName = (user) => {
    alert(user.name)
  }


  return (
    <div style={{ textAlign: 'center' }} className="App">
      <div>
        <Navvbar />
      </div>
      <ListOfUsers users={users} nameOfAdmin={nameOfAdmin} handleName={handleName} >
        <img style={{ marginTop: 50, paddingLeft: 20, width: 150 }} src={cit} alt='sponsor-1' />
        <img style={{ marginTop: 50, paddingLeft: 20, width: 150 }} src={lg} alt='sponsor-2' />
        <img style={{ marginTop: 50, paddingLeft: 20, width: 150 }} src={li} alt='sponsor-3' />
      </ListOfUsers>
    </div>


  );
}
export default App;
