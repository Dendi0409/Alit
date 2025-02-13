import { type Product, type InsertProduct, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductsByType(type: string): Promise<Product[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private messages: Map<number, ContactMessage>;
  private currentProductId: number;
  private currentMessageId: number;

  constructor() {
    this.products = new Map();
    this.messages = new Map();
    this.currentProductId = 1;
    this.currentMessageId = 1;

    // Seed initial products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Premium ALU Window",
        description: "High-quality aluminum window with thermal break",
        type: "ALU",
        features: ["Thermal insulation", "Sound reduction", "Security features"],
        imageUrl: "https://images.unsplash.com/photo-1532186773960-85649e5cb70b"
      },
      {
        name: "Classic PVC Door",
        description: "Energy-efficient PVC entrance door",
        type: "PVC",
        features: ["Energy efficient", "Low maintenance", "Weather resistant"],
        imageUrl: "https://images.unsplash.com/photo-1601272238032-2da9c97188bc"
      }
    ];

    sampleProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByType(type: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.type === type);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
