import { FC } from "react";
import clsx from "clsx";

import { CheckIcon } from "@public/index";

import "./index.css";

interface CheckBoxProps {
  checked: boolean;
  onChange?: (_c: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <label className="checkBox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkBox__input"
      />
      <div
        className={clsx("checkBox__visual", {
          "checkBox__visual--checked": checked,
        })}
      >
        {checked && <CheckIcon />}
      </div>
    </label>
  );
};
