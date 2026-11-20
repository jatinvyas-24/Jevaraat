const express = require("express");
const cors = require("cors");
require("./config/db");

const { seedDefaultAdmin } = require("./controllers/authController");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 2000;

const allowedOrigins = [
  "https://jevaraat-user.onrender.com",
  ...(process.env.CORS_ORIGINS || "").split(","),
]
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ["GET", "HEAD", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use("/uploads", express.static("uploads"));

/*seedDefaultAdmin();*/

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
