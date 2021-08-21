import react, { CSSProperties, useState } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { Create } from "./screens/Create";
import { Home } from "./screens/Home";




function App() {

    
    
  return (

    <Router>
      
      <div>
        <nav style={styles.nav}>
          <h2>Links App</h2>
        </nav>



        <div className="container">

          <Home/>

        </div>


      </div>
      
    </Router>

  );
}

interface StylesProps{
  nav:CSSProperties
  btn:CSSProperties
}
const styles:StylesProps = {
  nav:{
    background:'#333',
    padding:10,
    color:'white'
  }, 
  btn:{
      position:'absolute',
      display:'flex',
      width:35,
      height:35,
      background:'#0d6efd',
      color:'white',
      border:'none',
      padding:10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      boxShadow:'0 0 6px gray',
      bottom:25,
      right:25
  }
}


export default App;
