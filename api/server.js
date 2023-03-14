
import express from "express";
import cors from "cors";

import { getAsset }  from "./getAssets.js";

const PORT = process.env.PORT || 3001;

var app = express();

app.use(cors());

app.get("/assets", (req, res) => {
  getAsset()
    .then((result) => res.json({result}))
    .catch((error) => res.json(error));
});
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});