import React, { useEffect, useState } from "react";

export default function Password() {
  const [capital, setCapital] = useState(true);
  const [small, setSmall] = useState(true);
  const [digit, setDigit] = useState(true);
  const [special, setSpecial] = useState(true);
  const [similar, setSimilar] = useState(true);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState(12345678);
  const changeLength = (event) => {
    setLength(event.target.value);
  };

  const changeCapital = (event) => {
    setCapital(!capital);
  };
  const changeSmall = (event) => {
    setSmall(!small);
  };
  const changeSpecial = (event) => {
    setSpecial(!special);
  };
  const changeDigit = (event) => {
    setDigit(!digit);
  };
  const changeSimilar = (event) => {
    setSimilar(!similar);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const generatePassword = () => {
    let char = "";
    let pass = "";
    if (capital) {
      char += "ABCDEFGHJKMNPQRSTUVWXYZ";
    }
    if (small) {
      char += "abcdefghjkmnpqrstuvwxyz";
    }
    if (digit) {
      char += "123456789";
    }
    if (special) {
      char += "!@#$%^&*()_+";
    }
    if (similar) {
      char += "0OlI";
    }
    for (let i = 0; i <= length; i++) {
      let random_index = Math.floor(Math.random() * char.length);
      pass = pass + char[random_index];
    }
    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, special, digit, small, similar]);

  return (
    <>
      <h1 className="my-5 text-center">Generate Random Password</h1>
      <div className="box">
        <div className="row">
          <div className="col-9">
            <h2>{password}</h2>
          </div>
          <div className="col-3">
            <button className="float-right btn btn-success ">
              Copy Password
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <label>Length ({length})</label>
            <input
              type="range"
              min={6}
              max={32}
              className="w-100"
              value={length}
              onChange={changeLength}
            />
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col">
            <input
              type="checkbox"
              checked={capital}
              id="capital"
              onChange={changeCapital}
            />
            <label for="capital">[A-Z]</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              checked={small}
              id="small"
              onChange={changeSmall}
            />
            <label for="small">[a-z]</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              checked={digit}
              id="digit"
              onChange={changeDigit}
            />
            <label for="digit">[0-9]</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              checked={special}
              id="special"
              onChange={changeSpecial}
            />
            <label for="special">[@#$%^]</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              checked={similar}
              id="similar"
              onChange={changeSimilar}
            />
            <label for="similar">[IL,O0]</label>
          </div>
        </div>
      </div>
    </>
  );
}
