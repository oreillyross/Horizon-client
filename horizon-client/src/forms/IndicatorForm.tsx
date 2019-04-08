import * as React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const IndicatorForm = ({ indicator }) => {
  return (
    <React.Fragment>
      <h2> Indicator form </h2>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
    </React.Fragment>
  );
};
export { IndicatorForm as default };
