
import './App.css';
import Header  from './components/Header';
import Tiles  from './components/Tiles';


function App() {
  
  return (
    <div className="App">
    <Tiles/>
    <Header/>
     {/* component can be reused by copying in next line and change the values of props */}
     {/* <Card fname="Ruchita" lname="Ganni"/> */}
     
     
    </div>
  )
}

export default App;
