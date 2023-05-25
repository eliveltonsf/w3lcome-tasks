import express from "express";
import routes from "./app/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import cors from "cors";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());

app.use(routes);

export default app;
