import React from 'react';
import Cards from './Cards';
function Header(props){
    let title="Toourism Service";
    return(
       <div>
           <h1>{title}</h1>
           <Cards/>       
           </div>
    )
}
export default Header;