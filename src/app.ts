import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import authMiddleware from "./middlewares/authMiddleware";

dotenv.config();

const app = express();
const port = process.env.PORT || "3000";

/* Auth */
app.use("/auth", authRoutes);
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
