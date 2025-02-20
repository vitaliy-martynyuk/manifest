"use client";
import { withGrowtbook } from "@helpers/index";

import { HomePageFooter, HomePageHeader, HomePageMain } from "./_components";

export default function Page() {
  return withGrowtbook(() => (
    <>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </>
  ));
}
