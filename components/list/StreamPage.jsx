"use client";
import {
  Box,
  Flex,
  Image,
  Rating,
  Text,
  Title,
  Container,
  useMantineColorScheme,
  Stack,
  Button,
  Divider,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useStore } from "./../../zustand/store";
import Comments from "./Comments";

const scrollbarStyle = {
  "&::-webkit-scrollbar": {
    width: "6px", // Adjust the width of the scrollbar
    height: "6px", // Adjust the height of the scrollbar
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "3px", // Smooth edges with border radius
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
};

function StreamPage({ data, title, session }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { anime } = useStore((state) => state);

  return (
    <>
      <Container size="xl">
        <Flex
          mah="75vh"
          direction={{ base: "column", sm: "row" }}
          gap="md"
          justify="center"
        >
          <Stack sx={{ width: "100%", overflow: "hidden", height: "100%" }}>
            <iframe
              src={data.headers.Referer}
              width="100%"
              height="100%"
              style={{
                backgroundColor: "transparent",
                aspectRatio: "16/9.2",
                width: "100%",
                overflow: "hidden",
                objectFit: "cover",
                padding: "10px",
                border: "none",
              }}
            />

            <Flex justify="space-between" wrap="wrap" align="center">
              <Title tt="capitalize" order={2}>
                {title ? title.replace(/-/g, " ") : " "}
              </Title>
              <Flex gap={3} wrap="wrap">
                {data.sources.map((item) => (
                  <Button
                    size="xs"
                    variant={dark ? "light" : "outline"}
                    component="a"
                    href={item.url}
                  >
                    {item.quality}
                  </Button>
                ))}
              </Flex>
            </Flex>
          </Stack>

          {anime != null && (
            <Flex
              direction="column"
              sx={{
                overflowY: "scroll",
                ...scrollbarStyle, // Include the scrollbarStyle object here
              }}
              mah={{ base: "170px", sm: "70vh" }}
              gap="md"
              align="start"
              w={{ base: "100%", sm: "300px" }}
            >
              {anime.episodes.map((item) => (
                <Flex
                  component={Link}
                  href={`/${item.id}`}
                  gap="md"
                  key={item.id}
                  td="none"
                  p="sm"
                  sx={{ borderRadius: "10px" }}
                  bg={dark ? "dark.7" : "light.2"}
                >
                  <Image
                    radius="md"
                    width={80}
                    height={100}
                    fit="fill"
                    src={anime.image}
                    alt="With default placeholder"
                    withPlaceholder
                  />
                  <Flex direction="column" justify="space-evenly">
                    <Title order={6} color={dark ? "white" : "dark"}>
                      {anime.title}
                    </Title>
                    <Text color={dark ? "white" : "dark"} fz="xs" fw="bold">
                      Episode {item.number}
                    </Text>
                    <Rating defaultValue={5} />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Container>
      <Container size="xl">
        <Comments session={session} id={title} />
      </Container>
    </>
  );
}

export default StreamPage;
