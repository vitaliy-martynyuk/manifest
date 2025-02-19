"use client";
import { FC, useState } from "react";

import { Button } from "@components/button";

import { PlanCard } from "./_components";
import { plansMock } from "./_mocks";
import "./index.css";

export const HomePageMain: FC = () => {
  const [checked, setChecked] = useState<string>("");

  return (
    <main className="main">
      <section className="main__plans">
        {plansMock.map((product) => (
          <PlanCard
            key={product.id}
            className="main__plans-item"
            title={product.name}
            oldPrice={product.trial_amount}
            newPrice={product.price}
            afterTrialPrice={product.trial_period}
            regularity="month"
            checked={checked === product.id}
            setChecked={() => setChecked(product.id)}
            note={product.note}
            isBestPrice={product.isBestPrice}
          />
        ))}
      </section>
      <Button title="Get Started" size="L" />
    </main>
  );
};
