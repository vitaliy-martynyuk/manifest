import { FC } from "react";
import { CheckIcon } from "@public/icons";

import "./index.css";
import clsx from "clsx";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
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
