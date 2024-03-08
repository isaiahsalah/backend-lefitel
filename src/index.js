import app from "./app.js";

import dotenv from "dotenv";
import { sequelize } from "./database/sequelize.js";

dotenv.config();
const port = process.env.PORT || 3000;

async function main() {
  await sequelize.sync({ force: false });
  console.log("--> Conexión establecida con PostgreSQL <--");

  app.listen(port, () => {
    console.log(
      "--> Servidor y socket en funcionamiento en el puerto: " + port + " <--"
    );
  });
}

main();
