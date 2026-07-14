// Configuración del negocio. Reemplaza estos valores con los de tu producto real.

/** URL de checkout del producto (Hotmart, Stripe, PayPal, etc.) */
export const CHECKOUT_URL = "https://pay.hotmart.com/XXXXXXX";

/** Correo de soporte al cliente */
export const SUPPORT_EMAIL = "soporte@entrenamientodeelite.online";

/** Nombre de la marca */
export const BRAND_NAME = "Entrenamiento de Élite";

/** Abre el checkout en una nueva pestaña */
export function openCheckout() {
  if (typeof window !== "undefined") {
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  }
}
