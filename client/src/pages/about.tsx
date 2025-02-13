import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">O nama</h1>
          
          <div className="prose max-w-none">
            <p>
              Alit d.o.o. je osnovana 2000. godine s ciljem pružanja vrhunskih rješenja 
              u području ALU i PVC stolarije. Kroz godine predanog rada izgradili smo 
              reputaciju pouzdanog partnera koji stavlja kvalitetu i zadovoljstvo 
              kupaca na prvo mjesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Misija</h3>
                <p className="text-muted-foreground">
                  Pružiti našim klijentima najbolja rješenja za njihove potrebe kroz 
                  vrhunske proizvode i profesionalnu uslugu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Vizija</h3>
                <p className="text-muted-foreground">
                  Postati vodeći izbor u Hrvatskoj za ALU i PVC stolariju, 
                  prepoznati po kvaliteti i inovativnosti.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Alit tim"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <h2>Zašto odabrati nas?</h2>
            <ul>
              <li>20+ godina iskustva u industriji</li>
              <li>Vrhunska kvaliteta materijala i izrade</li>
              <li>Profesionalna ugradnja</li>
              <li>Garancija na proizvode i usluge</li>
              <li>Konkurentne cijene</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
