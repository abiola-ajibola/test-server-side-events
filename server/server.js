import express from "express";
import cors from "cors";
import { addFact, eventsHandler } from "./server-utils.js";

const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let facts = [],
  clients = [];

app.get("/events", (req, res) => {
  eventsHandler(req, res)({ clients, facts });
  console.log("Event registered");
});

app.post("/fact", (req, res) => {
  console.log("FACT");
  addFact(req, res)({ clients, facts });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
