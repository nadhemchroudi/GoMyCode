import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title_red">Nadhem Chroudi</h1> <br/>
        <div>
        <img height="250px" src="/imageInPublic.jpg" alt="imageInPublic"/> <br/>
        <img height ="250px"src={imageInSrc} alt ='imageInSrc'/>
        </div>
      </div>
      <div>
        <video width="320" height="240" src=""></video>
        <iframe width="320" height="240" src="https://www.youtube.com/embed/EVSMegdj6tY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
