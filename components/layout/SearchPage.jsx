"use client";
import { AppShell, Header } from "@mantine/core";
import React from "react";
import FooterComponent from "./Footer";
import SearchResults from "./SearchResults";
import Navbar from "./Navbar";

function SearchPage({ data }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} p="xs">
          {<Navbar />}
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
      <SearchResults data={data} />
      <FooterComponent />
    </AppShell>
  );
}

export default SearchPage;
