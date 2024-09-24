import { useState } from "react";

export default function Multiplication() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [product, setProduct] = useState(0);

  const Multiply = () => {
    setProduct(parseInt(number1) * parseInt(number2));
  };
  const changeEvent1 = (event) => {
    setNumber1(event.target.value);
  };
  const changeEvent2 = (event) => {
    setNumber2(event.target.value);
  };
  return (
    <>
      <div className="Multiplying">
        <label>Enter first number:</label>
        <input
          type="text"
          value={number1}
          onChange={changeEvent1}
          className="first-field"
        />
      </div>
      <div className="Multiplying">
        <label>Enter second number:</label>
        <input
          type="text"
          value={number2}
          onChange={changeEvent2}
          className="first-field"
        />
      </div>
      <span onClick={Multiply} className="btn btn-primary">
        Multiply
      </span>
      <p>The required product is {product}.</p>
    </>
  );
}
