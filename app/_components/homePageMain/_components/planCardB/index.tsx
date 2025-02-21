"use client";
import { FC } from "react";
import clsx from "clsx";

import { CheckBox } from "@components/index";
import { SellClockIcon } from "@public/index";
import { formatCountdownTime } from "@utils/index";

import { PlanCardProps } from "../planCard";
import "../planCard/index.css";
import "./index.css";

interface PlanCardBProps extends PlanCardProps {
  oldPrice: string;
  timerRemainingTime: number;
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
    timerRemainingTime,
  } = props;

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
      {timerRemainingTime >= 0 && (
        <div className="plan-card-B__timer">
          <SellClockIcon />
          <div>Sale ends in</div>
          <div>{formatCountdownTime(timerRemainingTime)}</div>
        </div>
      )}
      <div className="plan-card-B__content">
        <div className="plan-card__title">
          <CheckBox checked={checked} onChange={() => {}} />
          <div>{title}</div>
        </div>
        <div className="plan-card__price">
          {!!oldPrice && timerRemainingTime >= 0 && (
            <div className="plan-card__price-old">${oldPrice}</div>
          )}
          <div className="plan-card__price-new">${newPrice}</div>
          <div className="plan-card__price-notes">{description}</div>
        </div>
      </div>
    </div>
  );
};
