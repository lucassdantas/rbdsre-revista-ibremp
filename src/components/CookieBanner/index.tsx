"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-white border border-gray-200 shadow-lg rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4"
         style={{ borderColor: "var(--color-ibremp-yellow)" }}>
      <p className="text-sm text-gray-800">
        Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/politica-de-privacidade" className="underline text-[color:var(--color-ibremp-blue)] font-medium">Política de Privacidade</Link>.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-[color:var(--color-ibremp-blue)] hover:bg-[color:var(--color-ibremp-yellow)] text-white hover:text-black font-semibold py-2 px-4 rounded transition"
      >
        Aceitar
      </button>
    </div>
  );
}
