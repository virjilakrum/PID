const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/submit-proof", async (req, res) => {
  const { proof } = req.body;

  // transaction actual details
  const tx = {
    msgs: [
      {
        type: "wasm/MsgExecuteContract",
        value: {
          sender: "<your_wallet_address>",
          // .. add <your_wallet_address> ..
          contract: "<contract_address>",
          // .. add<contract_address> ..
          msg: { register_identity: { proof } },
          funds: [],
        },
      },
    ],
    fee: { amount: [{ denom: "ucosm", amount: "5000" }], gas: "200000" },
    memo: "",
  };

  try {
    const response = await axios.post("<node_url>/txs", tx);
    // .. add <node_url> ..
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
