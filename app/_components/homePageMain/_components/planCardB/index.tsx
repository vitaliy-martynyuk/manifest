"use client";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import Cookies from "js-cookie";

import { CheckBox } from "@components/index";
import { SellClockIcon } from "@public/index";
import { formatCountdownTime } from "@utils/index";
import { GB_TIMER_COOKIE } from "@models/index";

import { PlanCardProps } from "../planCard";
import "../planCard/index.css";
import "./index.css";

export const PlanCardB: FC<PlanCardProps> = (props) => {
  const {
    className,
    title,
    oldPrice,
    newPrice,
    regularity,
    afterTrialPrice,
    checked,
    setChecked,
    note,
    isBestPrice,
  } = props;

  const [time, setTime] = useState<number>(10 * 1000);

  useEffect(() => {
    const cookieTime = Cookies.get(GB_TIMER_COOKIE);
    if (cookieTime !== undefined) {
      setTime(parseInt(cookieTime));
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev < 0) {
          clearInterval(interval);
          return prev;
        }

        const newTime = prev - 1000;
        Cookies.set(GB_TIMER_COOKIE, newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(className, "plan-card", "plan-card-B", {
        "plan-card--active": checked,
      })}
      onClick={() => setChecked()}
    >
      {note && <div className="plan-card__note">{note}</div>}
      {isBestPrice && (
        <div className="plan-card__bestPriceLabel">🚀Best value</div>
      )}
      {time >= 0 && (
        <div className="plan-card-B__timer">
          <SellClockIcon />
          <div>Sale ends in</div>
          <div>{formatCountdownTime(time)}</div>
        </div>
      )}
      <div className="plan-card-B__content">
        <div className="plan-card__title">
          <CheckBox checked={checked} onChange={() => {}} />
          <div>{title}</div>
        </div>
        <div className="plan-card__price">
          {!!oldPrice && (
            <div className="plan-card__price-old">${oldPrice}</div>
          )}
          <div className="plan-card__price-new">${newPrice}</div>
          <div className="plan-card__price-notes">
            {regularity === "month"
              ? "Per month"
              : `Then $${afterTrialPrice} per month`}
          </div>
        </div>
      </div>
    </div>
  );
};
