import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Alit d.o.o.</h3>
            <p className="text-sm text-muted-foreground">
              Vaš pouzdan partner za kvalitetne ALU i PVC prozore i vrata.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Zagrebačka ulica 123, Zagreb</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+385 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@alit.hr</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Brzi linkovi</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Početna" },
                { href: "/about", label: "O nama" },
                { href: "/products", label: "Proizvodi" },
                { href: "/contact", label: "Kontakt" }
              ].map((link) => (
                <div key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm hover:text-primary">{link.label}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alit d.o.o. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
