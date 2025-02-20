import { FC } from "react";
import clsx from "clsx";

import { CheckBox } from "@components/index";
import { Product } from "@models/common";

import "./index.css";

export interface PlanCardProps {
  className: string;
  title: Product["name"];
  oldPrice?: Product["trial_amount"];
  afterTrialPrice?: Product["trial_period"];
  newPrice: Product["price"];
  regularity: Product["regularity"];
  checked: boolean;
  setChecked: () => void;
  note?: Product["note"];
  isBestPrice: Product["isBestPrice"];
}

export const PlanCard: FC<PlanCardProps> = (props) => {
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

  return (
    <div
      className={clsx(className, "plan-card", { "plan-card--active": checked })}
      onClick={() => setChecked()}
    >
      {note && <div className="plan-card__note">{note}</div>}
      {isBestPrice && (
        <div className="plan-card__bestPriceLabel">🚀Best value</div>
      )}
      <div className="plan-card__title">
        <CheckBox checked={checked} onChange={() => {}} />
        <div>{title}</div>
      </div>
      <div className="plan-card__price">
        {!!oldPrice && <div className="plan-card__price-old">${oldPrice}</div>}
        <div className="plan-card__price-new">${newPrice}</div>
        <div className="plan-card__price-notes">
          {regularity === "month"
            ? "Per month"
            : `Then $${afterTrialPrice} per month`}
        </div>
      </div>
    </div>
  );
};
