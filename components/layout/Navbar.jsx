"use client";
import {
  Autocomplete,
  Button,
  Flex,
  Image,
  MediaQuery,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import React from "react";
import Dark from "./../buttons/DarkMode";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import MobileNav from "./../buttons/MobileNav";
import LoginNav from "./../auth/LoginNav";

function Navbar({ user, session }) {
  const form = useForm({
    initialValues: {
      search: "",
    },
  });

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Flex
      mih={50}
      gap="sm"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
      maw="1500px"
      m="auto"
    >
      <Image
        width={170}
        height={50}
        component="a"
        href="/"
        sx={{ mixBlendMode: "difference" }}
        src="https://res.cloudinary.com/dkibnftac/image/upload/v1690206315/image-removebg-preview_7_hgi6vw.png"
        alt="With default placeholder"
        withPlaceholder
      />
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Flex justify="center" align="center" gap="sm">
          <div style={{ display: "flex", gap: "5px" }}>
            <Autocomplete
              placeholder="Search"
              {...form.getInputProps("search")}
              data={[
                "Demon Slayer",
                "Jujutsu Kaisen",
                "One Piece",
                "Black Clover",
              ]}
            />
            <Button
              component={Link}
              href={`/search/${form.values.search}`}
              variant="outline"
              color={dark ? "yellow" : "blue"}
            >
              <IconSearch size="20px" />
            </Button>
          </div>
          <Dark />
          <LoginNav user={user} session={session} />
        </Flex>
      </MediaQuery>
      <MobileNav user={user} session={session} />
    </Flex>
  );
}

export default Navbar;
