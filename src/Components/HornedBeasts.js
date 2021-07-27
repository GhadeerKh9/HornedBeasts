import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    };
  }

  incrementOfFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  };

  render() {
    return (
      <Col>
        <Card onClick={this.incrementOfFavorite} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Description : {this.props.description}</Card.Text>

            <Button variant="primary"> 💛 : {this.state.favorite}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
