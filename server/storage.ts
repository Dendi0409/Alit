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

    // Seed initial products with real images
    const sampleProducts: InsertProduct[] = [
      {
        name: "Premium ALU Prozor",
        description: "Visokokvalitetni aluminijski prozor s termo prekidom",
        type: "ALU",
        features: ["Termo izolacija", "Zvučna izolacija", "Sigurnosne značajke"],
        imageUrl: "/WhatsApp Image 2025-03-06 at 17.01.56 (1).jpeg"
      },
      {
        name: "ALU Klizna Vrata",
        description: "Moderna klizna vrata s elegantnim dizajnom",
        type: "ALU",
        features: ["Glatko klizanje", "Moderan dizajn", "Sigurnosno staklo"],
        imageUrl: "/WhatsApp Image 2025-03-06 at 17.01.56 (2).jpeg"
      },
      {
        name: "PVC Ulazna Vrata",
        description: "Energetski učinkovita PVC ulazna vrata",
        type: "PVC",
        features: ["Energetska učinkovitost", "Nisko održavanje", "Otpornost na vremenske uvjete"],
        imageUrl: "/WhatsApp Image 2025-03-06 at 17.01.57 (2).jpeg"
      },
      {
        name: "PVC Prozor",
        description: "Klasični PVC prozor za stambene prostore",
        type: "PVC",
        features: ["Izolacija", "Jednostavno održavanje", "Povoljna cijena"],
        imageUrl: "/WhatsApp Image 2025-03-06 at 17.01.58 (1).jpeg"
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