const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

// My actual test wallet address [Baturalp]
const walletAddress = "wasm1hqeh6htnyx3xyguy4zzewr3sya3hdacjg0s66l";

// My actual test  contract address [lib.rs -target]
const contractAddress = "cosmos1xxlq5m6er6e0hw5pfq4uv7j2dr7xn4py5v4vv5";

// My actual node URL
const nodeUrl = "http://localhost:26657";

app.use(bodyParser.json());

app.post("/submit-proof", async (req, res) => {
  const { proof } = req.body;

  const tx = {
    msgs: [
      {
        type: "wasm/MsgExecuteContract",
        value: {
          sender: walletAddress,
          contract: contractAddress,
          msg: { register_identity: { proof } },
          funds: [],
        },
      },
    ],
    fee: { amount: [{ denom: "ucosm", amount: "5000" }], gas: "200000" },
    memo: "",
  };

  try {
    const response = await axios.post(`${nodeUrl}/txs`, tx);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
