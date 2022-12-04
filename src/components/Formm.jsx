import { useState } from "react";
import "./Form.css";
import Button from "react-bootstrap/Button";

const Formm = (props) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.setCity(location);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter location here"
        />
        <Button className="btn" variant="warning" type="submit">
          Go
        </Button>
      </form>
    </div>
  );
};

export default Formm;
