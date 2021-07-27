import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeasts from "./HornedBeasts";

import Row from "react-bootstrap/Row";

class Main extends React.Component {
  

  render() {
    return (
      <Row lg={3} className="g-4" align="center">
        {this.props.data.map((item) => {
          return (
            <HornedBeasts
              displaying = {this.props.displayCards}
              showing={this.props.handleShowing}
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
