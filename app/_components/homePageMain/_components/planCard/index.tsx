import { FC } from "react";
import clsx from "clsx";

import { CheckBox } from "@components/index";
import { Plan } from "@models/index";

import "./index.css";

export interface PlanCardProps {
  className: string;
  title: Plan["name"];
  newPrice: string;
  checked: boolean;
  setChecked: () => void;
  note?: Plan["note"];
  isBestPrice: Plan["isBestPrice"];
  description: Plan["description"];
}

export const PlanCard: FC<PlanCardProps> = (props) => {
  const {
    className,
    title,
    newPrice,
    checked,
    setChecked,
    note,
    isBestPrice,
    description,
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
        <CheckBox checked={checked} />
        <div>{title}</div>
      </div>
      <div className="plan-card__price">
        <div className="plan-card__price-new">${newPrice}</div>
        <div className="plan-card__price-notes">{description}</div>
      </div>
    </div>
  );
};
