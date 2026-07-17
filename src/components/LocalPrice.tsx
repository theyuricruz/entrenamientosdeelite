import { useEffect, useState } from "react";

const FULL_USD = 29;
const DISCOUNT_USD = 15;

type LocalData = {
  html: string;
};

export function LocalPrice() {
  const [data, setData] = useState<LocalData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipwhois.app/json/")
      .then((r) => r.json())
      .then((d: {
        currency_rates?: number;
        currency_symbol?: string;
        currency_code?: string;
        country_flag?: string;
        country?: string;
      }) => {
        if (cancelled) return;
        if (!d?.currency_rates || !d?.currency_symbol || !d?.currency_code) {
          setData(null);
          return;
        }
        const fmt = new Intl.NumberFormat("en-US");
        const precioLocal = fmt.format(Math.round(d.currency_rates * FULL_USD));
        const descuentoLocal = fmt.format(Math.round(d.currency_rates * DISCOUNT_USD));
        setData({
          html:
            `<del style="font-size:20px;font-weight:200;">${d.currency_symbol}${precioLocal} ${d.currency_code}</del><br>` +
            (d.country_flag ? `<img src="${d.country_flag}" width="40" style="display:inline-block;vertical-align:middle;margin-right:6px;"> ` : "") +
            `${d.currency_symbol}${descuentoLocal} ${d.currency_code}` +
            `<br><span style="font-size:10px;font-weight:900;">Precio de Oferta para ${d.country ?? ""} — solo por hoy</span>`,
        });
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto mt-8 max-w-md text-center">
      <div
        style={{
          fontSize: 12,
          fontWeight: 900,
          color: "#000",
          textAlign: "center",
        }}
        className="rounded-t-xl bg-star px-4 py-2"
      >
        PRECIO APROXIMADO EN TU PAÍS
      </div>
      <div
        className="rounded-b-xl bg-white px-4 py-4 shadow-lg"
        style={{
          fontSize: 40,
          textAlign: "center",
          color: "#32C511",
          lineHeight: "28px",
          fontWeight: 900,
        }}
      >
        {data ? (
          <span dangerouslySetInnerHTML={{ __html: data.html }} />
        ) : (
          <>
            <del style={{ fontSize: 20, fontWeight: 200 }}>$29.00 USD</del>
            <br />
            $15.00 USD
            <br />
            <span style={{ fontSize: 14, fontWeight: 200 }}>
              OFERTA DISPONIBLE HASTA HOY
            </span>
          </>
        )}
      </div>
    </div>
  );
}
