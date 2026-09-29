"use client";

import { useEffect, useState } from "react";

// La página es estática: el año del build se corrige en cliente al hidratar.
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span>{year}</span>;
}
