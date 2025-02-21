"use client";
import { withGrowtbook } from "@helpers/index";

import { HomePageFooter, HomePageHeader, HomePageMain } from "./_components";

export default function Page() {
  const App = withGrowtbook(() => (
    <>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </>
  ));

  return <App />;
}
