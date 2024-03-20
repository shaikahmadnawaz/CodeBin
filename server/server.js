import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "25mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "25mb",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CodeBin API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
