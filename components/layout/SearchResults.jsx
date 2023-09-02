"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

function SearchResults({ data }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Flex
      wrap="wrap"
      gap="sm"
      maw="1600px"
      sx={{ margin: "auto" }}
      justify={{ base: "center", lg: "start" }}
    >
      {data ? (
        data.results.map((item) => (
          <Flex
            direction="column"
            justify="space-between"
            key={item.id}
            w="300px"
            mah="500px"
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            bg={dark ? "dark.7" : "gray.3"}
          >
            <Image
              radius="sm"
              fit="fill"
              height={270}
              src={item.image}
              alt="Norway"
            />

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{item.title}</Text>
              {item.releaseDate && (
                <Badge color="pink" variant="light">
                  {item.releaseDate}
                </Badge>
              )}
            </Group>

            <Button
              component={Link}
              href={`/anime/${item.id}`}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Watch Now
            </Button>
          </Flex>
        ))
      ) : (
        <Text>No Result</Text>
      )}
    </Flex>
  );
}

export default SearchResults;
