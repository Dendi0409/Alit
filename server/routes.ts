import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.get("/api/products", async (_req, res) => {
    const products = await storage.getAllProducts();
    res.json(products);
  });

  app.get("/api/products/:type", async (req, res) => {
    const type = req.params.type.toUpperCase();
    if (type !== "ALU" && type !== "PVC") {
      return res.status(400).json({ message: "Invalid product type" });
    }
    const products = await storage.getProductsByType(type);
    res.json(products);
  });

  app.post("/api/contact", async (req, res) => {
    const result = insertContactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid contact form data" });
    }
    
    const message = await storage.createContactMessage(result.data);
    res.status(201).json(message);
  });

  const httpServer = createServer(app);
  return httpServer;
}
