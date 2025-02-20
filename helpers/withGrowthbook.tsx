"use client";
import { FC, useEffect, useMemo } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import Cookies from "js-cookie";
import { v1 } from "uuid";

import { GB_UUID_COOKIE } from "@models/index";

export const withGrowtbook = (ChildComponent: FC) => {
  const gb = useMemo(
    () =>
      new GrowthBook({
        apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
        clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
        enableDevMode: true,
        trackingCallback: (experiment, result) => {
          console.log(experiment.name, result.value);
        },
      }),
    []
  );

  useEffect(() => {
    gb.init({
      streaming: true,
    });

    let uuid = Cookies.get(GB_UUID_COOKIE);
    if (!uuid) {
      uuid = v1();
      Cookies.set(GB_UUID_COOKIE, uuid);
    }
    gb.setAttributes({
      id: uuid,
    });
  }, [gb]);

  return (
    <GrowthBookProvider growthbook={gb}>
      <ChildComponent />
    </GrowthBookProvider>
  );
};
