"use client";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import Cookies from "js-cookie";

import { CheckBox } from "@components/index";
import { SellClockIcon } from "@public/index";
import { formatCountdownTime } from "@utils/index";
import { GB_TIMER_COOKIE, Plan } from "@models/index";

import { PlanCardProps } from "../planCard";
import "../planCard/index.css";
import "./index.css";

interface PlanCardBProps extends PlanCardProps {
  oldPrice: string;
}

export const PlanCardB: FC<PlanCardBProps> = (props) => {
  const {
    className,
    title,
    oldPrice,
    newPrice,
    checked,
    setChecked,
    note,
    isBestPrice,
    description,
  } = props;

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
          <div className="plan-card__price-notes">{description}</div>
        </div>
      </div>
    </div>
  );
};
