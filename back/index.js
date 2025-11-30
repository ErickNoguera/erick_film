require("dotenv").config();
const { PORT } = process.env;
const dbConnect = require("./src/config/dbConnect");

const app = require("./src/server");

dbConnect()
.then(() => {
  app.listen(PORT, function () {
    console.log(`Servidor levantado en el puerto ${PORT}`);
  });
})
.catch((err) => console.log(err));