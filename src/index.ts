import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (_req, res) => {
  res.send(`Server running`);
});

app.get("/hello", (_req, res) => {
  res.send("Hello World!!!");
});

app.post("/create", (req, res) => {
  const { user } = req.body();
  res.send({ user });
});

app.listen(PORT, () => {
  console.info(`\n😈😈😈Server listening on port ${PORT}👿👿👿\n`);
});
