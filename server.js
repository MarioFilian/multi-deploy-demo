const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// La variable de entorno PLATFORM la definiremos en cada despliegue
const platform = process.env.PLATFORM || "Local";

app.get("/api", (req, res) => {
  res.json({ platform, timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Service running on port ${port} [${platform}]`);
});
