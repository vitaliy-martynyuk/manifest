import { FC } from "react";

import "./index.css";

export const HomePageFooter: FC = () => {
  return (
    <footer className="footer">
      <div>Automatic renewal of $29.99 per month.</div>
      <div>
        You may cancel by{" "}
        <span className="footer__mail">support@justdone.ai</span>. Our goal is
        customer satisfaction
      </div>
    </footer>
  );
};
