import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Route as HomeRoute } from "@/routes/index";
import { Route as ServicesRoute } from "@/routes/services";
import { Route as ProcessusRoute } from "@/routes/processus";
import { Route as TarifsRoute } from "@/routes/tarifs";
import { Route as VitrineRoute } from "@/routes/vitrine";
import { Route as ContactRoute } from "@/routes/contact";
import { Route as MentionsRoute } from "@/routes/mentions-legales";

export type SiteRoute =
  | "home"
  | "services"
  | "processus"
  | "tarifs"
  | "vitrine"
  | "contact"
  | "mentions-legales";

const routes = {
  home: HomeRoute,
  services: ServicesRoute,
  processus: ProcessusRoute,
  tarifs: TarifsRoute,
  vitrine: VitrineRoute,
  contact: ContactRoute,
  "mentions-legales": MentionsRoute,
} as const;

export function AppShell({ route }: { route: SiteRoute }) {
  const Page = routes[route].component;

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Page />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
