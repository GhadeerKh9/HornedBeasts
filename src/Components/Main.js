import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render(){
        return (
            <>
           
     <HornedBeasts animalTitle = 'Saiga' animalDescription= 'The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat' animalImage = 'http://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg'/>

     


     <HornedBeasts animalTitle = 'Markhor' animalDescription= 'Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope'animalImage= 'http://modernfarmer.com/wp-content/uploads/2014/08/markhor.jpg'/>


</>
     

     
    
        )
        
    }
}

export default Main;




  

// in App.js 

// import React from "react"
// import parent from './parent'
// class App extends React.component {
//     render(){
//         return(
//             <>
//             <h1>State and Props</h1>
//             </>
//         )
//     }
// }

// will create another component called parent
// components ===>> <paren t

// in parent
// import React from 'react'
// import Catchild from './catchild'
// import Catimage from './assests/cat'

// class Parent extends React.Component {
//     render(){
//         returnStatement(
//             <>
//             <p>I am in parent</p>
//             <catChild catname="Frankie" imgURL = {CatIMg from import} />
            
//             </>
//         )
//     }
// }

// create catchild component 


// in it
// import reac from "react"
// import { COMPLETIONSTATEMENT_TYPES } from "@babel/types"

// class Catchild extends React.Component {
//     render (){
//         return (
//             <img src={this.props.imgURL} alt={this.props.catName} title="same" />

//             <h3>name</h3>
//         )
//     }
// }



// assessts inside components, but we should first import the image 
// above in parent

// put the name inside curly braces 