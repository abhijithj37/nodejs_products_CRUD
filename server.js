const dotEnv = require("dotenv");
dotEnv.config();
const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(process.env.CONN_STR)
  .then((conn) => {
    console.log("DB Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

   const PORT=process.env.PORT || 5000
  app.listen(PORT,()=>{
    console.log(`Server listening at PORT:${PORT}`);
  })
 