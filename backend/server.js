import React, { useState } from "react";
import axios from "axios";
import snarkjs from "snarkjs";

const IdentityForm = () => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const proof = await generateProof(name, idNumber);

    try {
      const response = await axios.post("http://localhost:3000/submit-proof", {
        proof,
      });
      console.log("Proof submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting proof:", error);
    }
  };

  const generateProof = async (name, idNumber) => {
    const input = { name, idNumber };
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      input,
      "identity.wasm",
      "identity.zkey",
    );
    return proof;
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default IdentityForm;
