import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

import Main from './Components/Main';




class App extends React.Component {
  render() {
    return(
      <>
      <Header/>
      <Main/>;
      
      <Footer/>
     
      </>
    )
  }
}
export default App;

