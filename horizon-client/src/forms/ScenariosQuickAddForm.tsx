import * as React from "react";
import { Input } from "reactstrap";

const ScenariosQuickAddForm = ({ doMutate }) => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <Input
        value={value}
        type="text"
        name="name"
        id="name"
        placeholder="give your scenario a title"
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => doMutate(e)}
      />
    </div>
  );
};

export default ScenariosQuickAddForm;
