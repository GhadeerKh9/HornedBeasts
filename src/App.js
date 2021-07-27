import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Main from "./Components/Main";
import Data from "./Components/assets/data.json";
import SelectedBeasts from './Components/SelectedBeasts'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main data={Data} handleShowing = {this.handleShow}/>;
        <Footer />
        <SelectedBeasts hiding = {this.handleClose} modalShow = {this.state.show}/>
      </>
    );
  }
}
export default App;
