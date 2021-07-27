import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeasts from "./HornedBeasts";
import data from "./assets/data.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  // DatafromJson = () => {
  //   this.setState({
  //     inputData: data
  //   });
  // };

  

  render() {
    return (
      <Row lg={3} className="g-4" align="center">
        {data.map((item) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
            />
          );
        })}
      </Row>
    );
  }
}
export default Main;
