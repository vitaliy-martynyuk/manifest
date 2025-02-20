"use client";
import { FC, useEffect, useState } from "react";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import Cookies from "js-cookie";

import { Button } from "@components/index";
import { Plan, GB_TIMER_COOKIE } from "@models/index";
import { SellClockIcon } from "@public/index";
import { formatCountdownTime } from "@utils/index";

import { PlanCard, PlanCardB } from "./_components";
import { plansMock } from "./_mocks";
import "./index.css";

export const HomePageMain: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);
  const enabled = useFeatureIsOn("dev-plan-timer");

  const onGetStarted = () => {
    console.log(`${selectedPlan.id}\n${selectedPlan.name}`);
  };

  const [time, setTime] = useState<number>(5 * 1000);

  useEffect(() => {
    const cookieTime = Cookies.get(GB_TIMER_COOKIE);
    if (cookieTime !== undefined) {
      setTime(parseInt(cookieTime));
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1000;
        if (newTime >= -1000) {
          Cookies.set(GB_TIMER_COOKIE, newTime.toString());
        }

        if (prev <= 0) {
          clearInterval(interval);
          return prev;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const convertPrice = (price: number) => (price / 100).toFixed(2);

  return (
    <main className="main">
      {enabled && time >= 0 && (
        <div className="main-B__timer">
          <SellClockIcon />
          <div>Sale ends in</div>
          <div>{formatCountdownTime(time)}</div>
        </div>
      )}
      <section className="main__plans">
        {plansMock.map((product) =>
          enabled ? (
            <PlanCardB
              key={product.id}
              className="main__plans-item"
              title={product.name}
              oldPrice={convertPrice(product.oldPrice)}
              newPrice={convertPrice(product.newPrice)}
              checked={selectedPlan?.id === product.id}
              setChecked={() => setSelectedPlan(product)}
              note={product.note}
              isBestPrice={product.isBestPrice}
              description={product.description}
            />
          ) : (
            <PlanCard
              key={product.id}
              className="main__plans-item"
              title={product.name}
              newPrice={convertPrice(product.newPrice)}
              checked={selectedPlan?.id === product.id}
              setChecked={() => setSelectedPlan(product)}
              note={product.note}
              isBestPrice={product.isBestPrice}
              description={product.description}
            />
          )
        )}
      </section>
      <Button title="Get Started" size="L" onClick={onGetStarted} />
    </main>
  );
};
