import app from "./app";
import packageJson from "../package.json";

require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(
    `[SERVER] > Server running on port ${process.env.PORT}. Version: ${packageJson.version}`
  );
});
