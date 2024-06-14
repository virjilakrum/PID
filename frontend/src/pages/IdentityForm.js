import React, { useState } from "react";

const IdentityForm = () => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [proof, setProof] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //.. zk proof part ..
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        ID Number:
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Proof:
        <input
          type="text"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IdentityForm;
