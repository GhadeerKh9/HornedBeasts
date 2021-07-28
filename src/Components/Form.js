import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

class HornsForm extends React.Component {
  handleSubmitting = (event) => {
    event.preventDefault();
    let submittedValue = event.target.selectOptions.value;
    this.props.filteredData(submittedValue);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitting}>
        <FloatingLabel
          controlId="floatingSelect"
          label="Select the Number of Horns"
        >
          <Form.Select aria-label="Floating label select example" name="selectOptions">
            <option value="All">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Wow</option>
          </Form.Select>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default HornsForm;
