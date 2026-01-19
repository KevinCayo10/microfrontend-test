import express, { Request, Response } from "express";
import cors from "cors";

// Interface para la respuesta JSON
interface CustomManifest {
  remoteEntry: string;
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
}

interface ApiResponse {
  [key: string]: CustomManifest;
}

const app = express();
const port: number = 3001;

// Configurar CORS
app.use(
  cors({
    origin: "*", // Permite cualquier origen
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  })
);

// Configurar ruta GET con TypeScript
app.get("/manifest", (req: Request, res: Response<ApiResponse>) => {
  const responseData: ApiResponse = {
    // "codeA": {
    //   remoteEntry: "http://localhost:4201/remoteEntry.js",
    //   exposedModule: "./TestModule",
    //   displayName: "Modulo testing",
    //   routePath: "remote",
    //   ngModuleName: "TestModule",
    // },
    "menus": {
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      exposedModule: "./MenusModule",
      displayName: "Módulo de Menús",
      routePath: "menus",
      ngModuleName: "MenusModule",
    },
  };
  res.json(responseData);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor TS corriendo en http://localhost:${port}`);
});
