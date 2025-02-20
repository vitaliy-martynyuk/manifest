"use client";
import { FC, useEffect, useState } from "react";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import Cookies from "js-cookie";

import { Button } from "@components/index";
import {
  Plan,
  GB_TIMER_COOKIE,
  PLAN_ON_SALE_TIMER_TIME,
  GB_PLAN_ON_SALE_FEATURE_KEY,
} from "@models/index";
import { SellClockIcon } from "@public/index";
import { formatCountdownTime } from "@utils/index";

import { PlanCard, PlanCardB } from "./_components";
import { plansMock } from "./_mocks";
import "./index.css";

export const HomePageMain: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);
  const enabled = useFeatureIsOn(GB_PLAN_ON_SALE_FEATURE_KEY);
  const [time, setTime] = useState<number>(PLAN_ON_SALE_TIMER_TIME);

  const onGetStarted = () => {
    console.log(`${selectedPlan.id}\n${selectedPlan.name}`);
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

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

    return () => interval && clearInterval(interval);
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
