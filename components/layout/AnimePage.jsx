"use client";

import { AppShell,  Header } from "@mantine/core";
import React, { useEffect } from "react";
import AnimaContent from "./AnimaContent";
import FooterComponent from "./Footer";
import Navbar from "./Navbar";
import { useStore } from "./../../zustand/store";

function AnimePage({ data, session }) {
  const { updateAnime } = useStore();

  const update = () => {
    updateAnime(data);
  };

  useEffect(() => {
    update();
  }, [data]);

  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} p="xs">
          {<Navbar session={session} />}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
      })}
    >
      <AnimaContent data={data} />
      <FooterComponent />
    </AppShell>
  );
}

export default AnimePage;
