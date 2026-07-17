import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "500 Sesiones de Entrenamiento de Fútbol | Acceso Inmediato" },
      {
        name: "description",
        content:
          "Biblioteca digital con 500 sesiones de entrenamiento de fútbol listas para aplicar. Técnica, táctica, físico y más. Acceso inmediato con garantía de 7 días.",
      },
      { property: "og:title", content: "500 Sesiones de Entrenamiento de Fútbol | Acceso Inmediato" },
      {
        property: "og:description",
        content:
          "Biblioteca digital con 500 sesiones de entrenamiento de fútbol listas para aplicar. Técnica, táctica, físico y más. Acceso inmediato con garantía de 7 días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "500 Sesiones de Entrenamiento de Fútbol | Acceso Inmediato" },
      { name: "twitter:description", content: "Biblioteca digital con 500 sesiones de entrenamiento de fútbol listas para aplicar. Técnica, táctica, físico y más. Acceso inmediato con garantía de 7 días." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9ab7c9f5-9788-440b-9a53-33beb34fec3e/id-preview-b0bf559b--1c325a84-7ce2-4bd4-8d80-e5028af612f5.lovable.app-1784036858189.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9ab7c9f5-9788-440b-9a53-33beb34fec3e/id-preview-b0bf559b--1c325a84-7ce2-4bd4-8d80-e5028af612f5.lovable.app-1784036858189.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Barlow+Condensed:ital,wght@1,700;1,800&display=swap",
      },
    ],
    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1568708958121755');fbq('track','PageView');`,
      },
      {
        src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
        "data-utmify-prevent-subids": "",
        async: true,
        defer: true,
      },
      {
        children: `window.pixelId = "6a56c2b742638a718dbd6bba"; var a = document.createElement("script"); a.setAttribute("async", ""); a.setAttribute("defer", ""); a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js"); document.head.appendChild(a);`,
      },
      {
        children: `fetch("https://ipwhois.app/json/").then(function(r){return r.json();}).then(function(d){var s=d.currency_symbol;var c=d.currency_code;var tx=d.currency_rates;var fmt=new Intl.NumberFormat("en-US");var basico=document.getElementById("preco-basico");var basicoAntigo=document.getElementById("preco-basico-antigo");var completo=document.getElementById("preco-completo");var completoAntigo=document.getElementById("preco-completo-antigo");if(basico)basico.innerText=s+fmt.format((tx*5).toFixed(0))+" "+c;if(basicoAntigo)basicoAntigo.innerText=s+fmt.format((tx*12).toFixed(0))+" "+c;if(completo)completo.innerText=s+fmt.format((tx*15).toFixed(0))+" "+c;if(completoAntigo)completoAntigo.innerText=s+fmt.format((tx*35).toFixed(0))+" "+c;}).catch(function(){});`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
