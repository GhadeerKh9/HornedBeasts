import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HornsForm from "./Components/Form";

import Main from "./Components/Main";
import Data from "./Components/assets/data.json";
import SelectedBeasts from "./Components/SelectedBeasts";

import {Row, Col, Container} from "react-bootstrap/";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: null,
      image_url: null,
      description: null,
      dataNew: Data,
    };
  }

  display = (name, url, desc) => {
    this.setState({
      title: name,
      image_url: url,
      description: desc,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  filteredData = (submittedValue) => {
    let newdataArr = Data.filter((item) => {
      if (item.horns === Number(submittedValue)) {
        return item;
      } else if (submittedValue === "All") {
        return item;
      }
    });
    this.setState({
      dataNew: newdataArr,
    });
  };

  render() {
    return (
      <Container align="center">
        <Row>
          <Col>
            <Header />
            <HornsForm
              className="hornsClass"
              filteredData={this.filteredData}
            />
          </Col>
        </Row>
        <Row>
          <Main
            data={this.state.dataNew}
            handleShowing={this.handleShow}
            displayCards={this.display}
          />
        </Row>
        <Row>
        <Footer />
        <SelectedBeasts
          hiding={this.handleClose}
          modalShow={this.state.show}
          imageData={this.state.image_url}
          titleData={this.state.title}
          descriptionData={this.state.description}
        />
        </Row>
      </Container>
    );
  }
}
export default App;
