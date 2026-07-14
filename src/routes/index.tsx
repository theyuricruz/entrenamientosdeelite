import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Zap,
  Trophy,
  Users,
  Printer,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  Flame,
  Gift,
  Layers,
  Award,
  MonitorSmartphone,
  BookOpen,
  X,
  Check,
  Mail,
} from "lucide-react";


import { Reveal } from "@/components/Reveal";
import { Countdown } from "@/components/Countdown";
import { Carousel } from "@/components/Carousel";
import { Faq } from "@/components/Faq";
import { CHECKOUT_URL, SUPPORT_EMAIL, BRAND_NAME } from "@/lib/config";

import heroImg from "@/assets/hero-training.jpg";
import productMockup from "@/assets/product-mockup.png.asset.json";

import preview1 from "@/assets/preview-1.png.asset.json";
import preview2 from "@/assets/preview-2.png.asset.json";
import preview3 from "@/assets/preview-3.png.asset.json";
import preview4 from "@/assets/preview-4.png.asset.json";
import preview5 from "@/assets/preview-5.png.asset.json";
import bonus1 from "@/assets/bonus-1.jpg";
import bonus2 from "@/assets/bonus-2.jpg";
import bonus3 from "@/assets/bonus-3.jpg";
import t1Asset from "@/assets/coach-1.png.asset.json";
import t2Asset from "@/assets/coach-2.png.asset.json";
import t3Asset from "@/assets/coach-3.png.asset.json";
import mariaAsset from "@/assets/testimonial-maria.png.asset.json";
const t1 = t1Asset.url;
const t2 = t2Asset.url;
const t3 = t3Asset.url;
const mariaImg = mariaAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const receives = [
  {
    icon: BookOpen,
    title: "Material Completo",
    desc: "500 sesiones completas organizadas con objetivos claros, tiempos definidos y metodologías validadas.",
    bullets: [
      "Ejercicios progresivos y estructurados",
      "Acceso digital desde celular, tablet o computadora",
      "Listo para imprimir y aplicar",
    ],
  },
  {
    icon: Sparkles,
    title: "Ejercicios Progresivos",
    desc: "De lo básico a lo avanzado, para que tus jugadores evolucionen constantemente con cada sesión.",
    bullets: [
      "Planificaciones paso a paso",
      "Diferentes niveles de dificultad",
      "Resultados medibles",
    ],
  },
  {
    icon: Users,
    title: "Para Todos los Equipos",
    desc: "Actividades adaptables para categorías infantiles, juveniles y adultas. Ideal para entrenadores y academias.",
    bullets: [
      "Diferentes edades y niveles",
      "Academias y escuelas deportivas",
      "Selecciones y equipos amateur",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Ahorra horas de planificación",
    desc: "Deja de perder tiempo buscando ejercicios sueltos en internet.",
  },
  {
    icon: BookOpen,
    title: "Nunca vuelvas a improvisar",
    desc: "Llega a cada entrenamiento con un plan claro y profesional.",
  },
  {
    icon: Trophy,
    title: "Entrena como un profesional",
    desc: "Metodología usada por clubes y academias serias.",
  },
  {
    icon: Zap,
    title: "Mejora el rendimiento",
    desc: "Progresión pensada para elevar el nivel de tus jugadores.",
  },
  {
    icon: Sparkles,
    title: "Fácil de aplicar",
    desc: "Diagramas claros, tiempos, materiales y objetivos definidos.",
  },
  {
    icon: Layers,
    title: "Organizado paso a paso",
    desc: "Por bloques, categorías y objetivos de sesión.",
  },
  {
    icon: Users,
    title: "Para todas las edades",
    desc: "Adaptable a formativas, juveniles y adultos.",
  },
  {
    icon: MonitorSmartphone,
    title: "Acceso desde cualquier lugar",
    desc: "Móvil, tablet o computadora. Cuando y donde quieras.",
  },
];

const bonuses = [
  {
    n: "01",
    title: "100 Ejercicios de Calentamiento",
    desc: "Rutinas dinámicas para activar al equipo en minutos.",
    value: "US$29",
    img: bonus1,
  },
  {
    n: "02",
    title: "50 Juegos para Mejorar la Posesión",
    desc: "Situaciones reducidas listas para dominar el balón.",
    value: "US$29",
    img: bonus2,
  },
  {
    n: "03",
    title: "Guía Completa de Planificación Semanal",
    desc: "Modelo semanal profesional para estructurar cada microciclo.",
    value: "US$39",
    img: bonus3,
  },
];

const testimonials = [
  {
    name: "Carlos Medina",
    city: "Buenos Aires, Argentina",
    role: "Entrenador de fútbol formativo",
    img: t1,
    quote:
      "En dos semanas cambió por completo mi forma de planificar. Los jugadores llegan más motivados y notan la diferencia en cada sesión.",
  },
  {
    name: "María Fernanda López",
    city: "Ciudad de México, México",
    role: "Profesora de Educación Física",
    img: mariaImg,
    quote:
      "El material está impecable. Lo aplico con niños y adolescentes. Ahorro horas de preparación y tengo variedad para no repetir nunca.",
  },
  {
    name: "Diego Ramírez",
    city: "Medellín, Colombia",
    role: "Director de escuela de fútbol",
    img: t3,
    quote:
      "Lo mejor que compré este año. Todos mis entrenadores usan las sesiones. Se ve profesional, organizado y funciona en todas las categorías.",
  },
];

const faqs = [
  {
    q: "¿Cómo recibiré el material?",
    a: "Después de tu compra recibirás un correo con tu acceso inmediato. Podrás descargar las sesiones y comenzar a aplicarlas ese mismo día.",
  },
  {
    q: "¿Necesito experiencia previa para usarlo?",
    a: "No. El material está explicado paso a paso, con diagramas, tiempos y objetivos claros. Cualquier entrenador o profesor puede aplicarlo.",
  },
  {
    q: "¿Sirve para niños y adultos?",
    a: "Sí. Las sesiones están organizadas por niveles y categorías, así que se adaptan a formativas, juveniles, amateurs y adultos.",
  },
  {
    q: "¿Cómo funciona el acceso?",
    a: "Es un pago único. Obtienes acceso permanente desde cualquier dispositivo, sin mensualidades ni cargos ocultos.",
  },
  {
    q: "¿Cómo funciona la garantía?",
    a: "Tienes 7 días de garantía incondicional. Si por cualquier motivo no estás satisfecho, escríbenos y te devolvemos el 100% de tu dinero.",
  },
];

const galleryImages = [
  { src: preview1.url, alt: "Ejercicio 1 — Pase y movilidad en espacio reducido" },
  { src: preview2.url, alt: "Ejercicio 7 — Circuito integral en media cancha" },
  { src: preview3.url, alt: "Ejercicio 49 — Finalización con vallas en área" },
  { src: preview4.url, alt: "Ejercicio 35 — Juego por zonas 15x25m" },
  { src: preview5.url, alt: "Ejercicio 13 — Trabajo 1v1 en área de penalti" },
];

const scrollToOffer = () => {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="pitch-bg relative overflow-hidden text-white">
        <div className="hero-pattern pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-10 bg-gradient-to-r from-destructive via-destructive to-destructive/90 py-3 text-center shadow-lg shadow-destructive/20">
          <p className="mx-auto flex max-w-4xl items-center justify-center gap-2 px-4 text-sm font-bold uppercase tracking-[0.15em] text-destructive-foreground sm:text-base">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-white" />
            Descuento Exclusivo solo hoy, martes 14 de julio
          </p>
        </div>
        <div className="container-x relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="inline-flex w-fit items-center gap-2 border-l-2 border-primary bg-primary/10 px-3 py-1.5">
                <Flame className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Recurso premium para entrenadores
                </span>
              </div>

              <h1 className="mt-6 font-[family-name:var(--font-display-condensed)] text-5xl font-extrabold italic uppercase leading-[0.9] tracking-tighter text-white sm:text-6xl lg:text-7xl">
                500 Sesiones de{" "}
                <span className="text-primary">Entrenamiento de Fútbol</span> listas para aplicar
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
                La biblioteca digital que usan entrenadores, escuelas y clubes para planificar
                sesiones profesionales en minutos, no en horas.
              </p>
              <p className="mt-4 max-w-xl text-sm text-white/70">
                Técnica, táctica, físico, coordinación, velocidad, posesión y mucho más — todo
                organizado, listo para imprimir y con acceso inmediato.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-shine"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    QUIERO ACCEDER AHORA
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Garantía incondicional de 7 días
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src={t1}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-secondary object-cover"
                    />
                    <img
                      src={t2}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-secondary object-cover"
                    />
                    <img
                      src={t3}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-secondary object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-white/90">+3.500 entrenadores</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-star text-star" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-white/90">4.9/5</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 scale-75 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative w-full">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/40 shadow-2xl">
                    <img
                      src={productMockup.url}
                      alt="Mockup del producto 500 Sesiones de Entrenamiento de Fútbol en caja, tablet, móvil y libros"
                      width={1600}
                      height={900}
                      className="aspect-[16/9] w-full object-contain"
                    />
                  </div>
                  <div className="absolute -right-4 top-1/2 -z-10 hidden h-48 w-24 -translate-y-1/2 rotate-12 rounded-2xl border border-primary/30 sm:block" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUÉ RECIBIRÁS */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Contenido del programa
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-secondary sm:text-4xl lg:text-5xl">
                ¿Qué recibirás al acceder hoy?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Todo lo que necesitas para planificar entrenamientos profesionales, sin improvisar y
                sin perder tiempo.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {receives.map((r, i) => (
              <Reveal key={r.title} delay={i * 40}>
                <div className="card-pro group flex h-full flex-col p-5">
                  <div className="icon-pro h-11 w-11">
                    <r.icon className="h-5.5 w-5.5" strokeWidth={2.25} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-secondary">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  <div className="my-4 h-px w-full bg-border" />
                  <ul className="space-y-2.5">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13px] text-secondary/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                Por qué elegirlo
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-secondary sm:text-4xl lg:text-5xl">
                Diseñado para transformar tu forma de entrenar
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ocho razones por las que miles de entrenadores en toda Latinoamérica ya confían en
                este material.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="card-pro h-full p-6">
                  <div className="flex items-start justify-between">
                    <div className="icon-pro h-12 w-12">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-4xl font-black leading-none text-primary/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-secondary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BONOS */}
      <section className="bg-secondary py-20 text-white sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                <Gift className="h-3.5 w-3.5" />
                Bonos exclusivos
              </span>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">
                Además, recibirás estos <span className="text-accent">3 BONOS GRATIS</span>
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Complementos premium diseñados para llevar tus entrenamientos al siguiente nivel.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bonuses.map((b, i) => (
              <Reveal key={b.n} delay={i * 100}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur transition hover:border-primary/50 hover:-translate-y-1">
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                    BONO {b.n.replace("0", "")}
                  </div>
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={b.img}
                      alt={b.title}
                      width={1024}
                      height={576}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white/95">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{b.desc}</p>
                  <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-4 text-sm">
                    <span className="text-white/60">Valor:</span>
                    <span className="font-bold text-destructive line-through">{b.value}</span>
                    <span className="ml-auto rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                      HOY GRATIS
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-white/80">
              Valor total de los bonos:{" "}
              <span className="font-bold text-white line-through">US$97</span> —{" "}
              <span className="font-bold text-accent">Hoy, incluidos gratis.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-gradient-to-b from-surface to-background py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-destructive">
                <Flame className="h-3.5 w-3.5" />
                Oferta especial por tiempo limitado
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-secondary sm:text-4xl lg:text-5xl">
                Elige el plan ideal para ti
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Miles de entrenadores ya eligieron el <strong>Plan Completo</strong>. Es el que más
                valor entrega — y hoy con el mejor precio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-card p-6 shadow-lg">
              <p className="text-center text-sm font-semibold text-muted-foreground">
                ⏰ Esta oferta especial termina en:
              </p>
              <div className="mt-4">
                <Countdown minutes={15} />
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Plan Básico */}
            <Reveal delay={100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1115] p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
                      Entrada
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-black uppercase italic text-white sm:text-3xl">
                      Plan Básico
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-destructive line-through">
                      US$ 10
                    </div>
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-xs text-white/40">US$</span>
                      <span className="font-display text-4xl font-black text-white">5</span>
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-white/40">
                      / pago único
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-sm text-white/50">
                  250 Sesiones de Entrenamiento
                </p>

                <div className="my-6 h-px w-full bg-white/10" />

                <ul className="space-y-4 text-sm">
                  {[
                    { label: "250 Sesiones de Entrenamiento", included: true },
                    { label: "Acceso Inmediato y de Por Vida", included: true },
                    { label: "Garantía de 7 días", included: true },
                    { label: "100 Ejercicios de Velocidad (BONUS)", included: false },
                    { label: "50 Ejercicios Físicos con Balón (BONUS)", included: false },
                    { label: "30 Plantillas Editables (BONUS)", included: false },
                  ].map((it) => (
                    <li key={it.label} className="flex items-center gap-3">
                      {it.included ? (
                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-destructive" strokeWidth={3} />
                      )}
                      <span
                        className={
                          it.included
                            ? "text-white/90"
                            : "text-destructive line-through decoration-destructive/60"
                        }
                      >
                        {it.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pay.hotmart.com/P106725196J?off=sxxoexja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_-10px_rgba(255,255,255,0.12)] transition-all hover:bg-white/20 hover:shadow-[0_12px_32px_-10px_rgba(255,255,255,0.18)] active:scale-[0.98]"
                  style={{ marginTop: "2rem" }}
                >
                  Quiero el Plan Básico
                </a>
              </div>
            </Reveal>

            {/* Plan Completo */}
            <Reveal delay={200}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-primary bg-[#0f1115] p-8 shadow-[0_0_60px_-15px_oklch(0.72_0.19_145_/_0.35)]">
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                  <span className="inline-flex items-center gap-1.5">
                    <Flame className="h-3 w-3" /> Más vendido
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pr-24">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                      Profesional
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-black uppercase italic text-white sm:text-3xl">
                      Plan Completo
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-sm text-white/60">
                  500 Sesiones + 3 Bonos exclusivos
                </p>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-destructive line-through">US$27</span>
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary">
                        Ahorra US$12
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-xs text-white/50">US$</span>
                      <span className="font-display text-6xl font-black leading-none text-primary">
                        15
                      </span>
                      <span className="ml-1 text-xs uppercase tracking-wider text-white/50">
                        / pago único
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                <ul className="space-y-4 text-sm">
                  {[
                    "500 Sesiones de Entrenamiento Completas",
                    "Acceso Inmediato y de Por Vida",
                    "Garantía de 7 días",
                    "100 Ejercicios de Velocidad (BONUS)",
                    "50 Ejercicios Físicos con Balón (BONUS)",
                    "30 Plantillas Editables (BONUS)",
                  ].map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      <span className="text-white/95">{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pay.hotmart.com/P106725196J?off=oaqkjknx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-black uppercase tracking-widest text-black shadow-[0_10px_30px_-10px_oklch(0.72_0.19_145_/_0.7)] transition-all hover:brightness-110 active:scale-[0.98]"
                  style={{ marginTop: "2rem" }}
                >
                  Quiero el Plan Completo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-white/50">
                  Compra 100% segura - Garantía de 7 días
                </p>
              </div>
            </Reveal>
          </div>



          {/* Comparativa */}
          <Reveal>
            <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-3 border-b border-border bg-surface">
                <div className="p-4 text-sm font-bold text-secondary sm:p-5">Característica</div>
                <div className="p-4 text-center text-sm font-bold text-secondary sm:p-5">
                  Plan Básico
                </div>
                <div className="bg-primary/5 p-4 text-center text-sm font-bold text-primary sm:p-5">
                  Plan Completo
                </div>
              </div>
              {[
                ["250 sesiones", true, false],
                ["500 sesiones", false, true],
                ["Bonos exclusivos", false, true],
                ["Actualizaciones", false, true],
                ["Garantía", true, true],
                ["Acceso inmediato", true, true],
                ["Pago único", true, true],
              ].map(([label, a, b], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 items-center ${
                    i % 2 === 0 ? "bg-background" : "bg-surface/50"
                  }`}
                >
                  <div className="p-4 text-sm text-secondary sm:p-5">{label as string}</div>
                  <div className="grid place-items-center p-4 sm:p-5">
                    {a ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="grid place-items-center bg-primary/5 p-4 sm:p-5">
                    {b ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center text-sm text-secondary sm:text-base">
              Por solo <strong className="text-primary">US$10 adicionales</strong> obtienes{" "}
              <strong>el doble de contenido</strong> y{" "}
              <strong>los 3 bonos exclusivos valorados en US$97.</strong> Es la elección
              inteligente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Vista previa
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-secondary sm:text-4xl lg:text-5xl">
                Así luce el material por dentro
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sesiones diagramadas con claridad, objetivos, tiempos y materiales — pensadas para
                que apliques sin complicaciones.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-4xl">
              <Carousel images={galleryImages} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                Prueba social
              </span>
              <h2 className="mt-4 font-display text-3xl font-black text-secondary sm:text-4xl lg:text-5xl">
                Lo que dicen nuestros alumnos
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="card-elevated relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-accent" />
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-1 text-star">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-star" />
                      ))}
                    </div>
                    <svg
                      className="h-8 w-8 text-primary/10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-secondary/90">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="relative">
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        width={600}
                        height={600}
                        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/10 ring-offset-2 ring-offset-card"
                      />
                      <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground shadow-sm">
                        <Check className="h-3 w-3" />
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-display font-bold text-secondary">{t.name}</div>
                      <div className="truncate text-xs font-medium text-muted-foreground">{t.role}</div>
                      <div className="truncate text-xs text-muted-foreground/80">{t.city}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-secondary/50 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-primary blur-xl opacity-20" />
                  <div className="relative grid h-40 w-40 place-items-center rounded-full border-4 border-primary bg-secondary shadow-[0_0_30px_oklch(0.65_0.19_145_/_0.3)]">
                    <div className="text-center">
                      <div className="font-display text-5xl font-black leading-none text-white">
                        7
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Días
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 grid h-10 w-10 place-items-center rounded-full bg-primary text-white shadow-lg">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" /> Riesgo cero
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    Garantía <span className="text-primary">incondicional</span>{" "}
                    <span className="whitespace-nowrap">de 7 días</span>
                  </h2>
                  <p className="mt-4 text-white/75">
                    Prueba el material durante 7 días completos. Aplica las sesiones, revisa los
                    bonos y decide con tranquilidad.
                  </p>
                  <p className="mt-3 text-white/75">
                    Si no te encanta, escríbenos y te devolvemos el{" "}
                    <strong className="text-white">100% de tu dinero</strong>. Sin preguntas, sin
                    trámites, sin complicaciones.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Centro de ayuda
              </span>
              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                Preguntas frecuentes
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl">
              <Faq items={faqs} variant="dark" />
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-14 max-w-2xl text-center">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">
                QUIERO ACCEDER AHORA
                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="mt-4 text-sm text-white/60">
                Acceso inmediato · Pago único · Garantía de 7 días
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-secondary py-10 text-white/70">
        <div className="container-x text-center">
          <div className="flex items-center justify-center gap-2 font-display text-lg font-black text-white">
            <Award className="h-5 w-5 text-primary" />
            {BRAND_NAME}
          </div>
          <p className="mt-3 text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}.
          </p>
          <p className="text-sm">Todos los derechos reservados.</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {SUPPORT_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
