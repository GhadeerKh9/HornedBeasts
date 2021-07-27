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
      title: null,
        image_url: null,
        description: null,

    };
  }

  display = (name, url, desc) => {
    this.setState({
      title: name,
      image_url:  url,
      description: desc,
    })
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
        <Main data={Data} handleShowing = {this.handleShow} displayCards = {this.display}/>;
        <Footer />
        <SelectedBeasts hiding = {this.handleClose} modalShow = {this.state.show} imageData = {this.state.image_url} titleData = {this.state.title} descriptionData = {this.state.description}/>
      </>
    );
  }
}
export default App;
