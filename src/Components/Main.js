import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render(){
        return (
            <>
           
     <HornedBeasts animalTitle = {'Saiga'}/>
     <HornedBeasts animalDescription= {'The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat'}/>
     <HornedBeasts animalImage = {'http://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg'}/>

     


     <HornedBeasts animalTitle = {'Markhor'}/>
     <HornedBeasts animalDescription= {'Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope'}/>
     <HornedBeasts animalImage= {'http://modernfarmer.com/wp-content/uploads/2014/08/markhor.jpg'}/>


</>
     

     
    
        )
        
    }
}

export default Main;


  
