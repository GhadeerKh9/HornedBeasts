import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import HornedBeasts from './Components/HornedBeasts';


class App extends React.Component {
  render() {
    return(
      <>
      <Header/>;
      <Main/>;
      <Footer/>;
      <HornedBeasts/>
      </>
    )
  }
}
export default App;
