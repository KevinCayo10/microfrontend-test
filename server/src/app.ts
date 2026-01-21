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
  }),
);

// Configurar ruta GET con TypeScript
app.get("/manifest", async (req: Request, res: Response): Promise<void> => {
  try {
    const backendUrl = process.env.BACKEND_URL || "http://localhost:3000/menu";
    const resp = await fetch(backendUrl);

    if (!resp.ok) {
      res.status(502).json({});
      return;
    }

    const json = await resp.json();
    const menus = Array.isArray(json?.data) ? json.data : [];

    const manifest: ApiResponse = {
      remote: {
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        exposedModule: "./MenusModule",
        displayName: "Menús",
        routePath: "menus",
        ngModuleName: "MenusModule",
      },
    };

    // for (const m of menus) {
    //   const key = m.routePath || m.displayName || `menu_${m.id}`;
    //   manifest[key] = {
    //     remoteEntry: m.remoteEntry,
    //     exposedModule: m.exposedModule,
    //     displayName: m.displayName,
    //     routePath: m.routePath,
    //     ngModuleName: m.ngModuleName,
    //   };
    // }

    res.json(manifest);
    return;
  } catch (error) {
    console.error("Error building manifest:", error);
    res.status(500).json({});
    return;
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor TS corriendo en http://localhost:${port}`);
});
