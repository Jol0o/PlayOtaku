"use client";
import { AppShell,  Header } from "@mantine/core";
import React from "react";
import StreamPage from "../list/StreamPage";
import FooterComponent from "./Footer";
import Navbar from "./Navbar";

function EpisodePage({ data, title, session }) {
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
      <StreamPage data={data} title={title} session={session} />
      <FooterComponent />
    </AppShell>
  );
}

export default EpisodePage;
