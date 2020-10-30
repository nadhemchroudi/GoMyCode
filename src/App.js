import './App.css';
import ProfilePhoto from './Components/Profil/ProfilPhoto';
import FullName from './Components/Profil/FullName';
import Adress from './Components/Profil/Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
