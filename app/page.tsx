"use client";
import { useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { GB_UUID_COOKIE } from "@helpers/index";

import { HomePageFooter, HomePageHeader, HomePageMain } from "./_components";

export default function Page() {
  const gb = useMemo(
    () =>
      new GrowthBook({
        apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
        clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
      }),
    []
  );

  useEffect(() => {
    gb.init({
      streaming: true,
    });

    let uuid = Cookies.get(GB_UUID_COOKIE);
    if (!uuid) {
      uuid = Math.random().toString(36).substring(2);
      Cookies.set(GB_UUID_COOKIE, uuid);
    }
    gb.setAttributes({
      id: uuid,
    });
  }, [gb]);

  return (
    <GrowthBookProvider growthbook={gb}>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </GrowthBookProvider>
  );
}
