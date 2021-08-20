
import './App.css';
import Header  from './components/Header';
import Navigation from './components/Navigation';
import Tiles  from './components/Tiles';
import Movies from './components/Movies';


function App() {
  
  return (
    <div className="App">
    <Tiles/> 
     <Header/>
     {/* component can be reused by copying in next line and change the values of props */}
     {/* <Card fname="Ruchita" lname="Ganni"/> */}
     
     {/* <Navigation/> */}

     <Movies/>
    </div>
  )
}

export default App;
