import { FC, HTMLAttributes } from "react";

export const CheckIcon: FC<HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 11"
      fill="none"
      {...props}
    >
      <path
        d="M12.2331 1.48509L5.50492 8.21325L2.7891 5.4783L2.78848 5.47768C2.58013 5.26933 2.32361 5.16001 2.03115 5.16001C1.73868 5.16001 1.48217 5.26933 1.27382 5.47768C1.06722 5.68427 0.954857 5.93776 0.946079 6.22744C0.937135 6.52257 1.04329 6.78218 1.25345 6.99234L4.75715 10.496C4.96384 10.7027 5.21637 10.8137 5.5043 10.8137C5.79222 10.8137 6.04475 10.7027 6.25144 10.496L9.99959 6.7479L13.7477 2.99975C13.9561 2.7914 14.0654 2.53488 14.0654 2.24242C14.0654 1.94996 13.9561 1.69344 13.7477 1.48509C13.5394 1.27674 13.2829 1.16742 12.9904 1.16742C12.6979 1.16742 12.4414 1.27674 12.2331 1.48509Z"
        fill="currentColor"
      />
    </svg>
  );
};
