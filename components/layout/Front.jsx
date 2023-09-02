"use client";
import React from "react";
import { AppShell, Button, Group, Header } from "@mantine/core";
import Navbar from "./Navbar";
import FooterComponent from "./Footer";
import Content from "./Content";

function Front({ data, user, recent }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} p="xs">
          {<Navbar user={user} />}
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
      <Content data={data} recent={recent} />
      <FooterComponent />
    </AppShell>
  );
}

export default Front;
