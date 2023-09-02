"use client";
import { Card, Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Episodes({ data }) {
  return (
    <Flex
      gap="md"
      mt={50}
      align="center"
      maw="1400px"
      justify={{ base: "center", md: "start" }}
      sx={{ margin: "auto" }}
      wrap="wrap"
    >
      {data.episodes.map((item) => (
        <Card
          component={Link}
          href={`/${item.id}`}
          ml="md"
          shadow="sm"
          mt="lg"
          padding="xl"
          w={{ base: "300px" }}
          mah="300px"
          key={item.number}
        >
          <Card.Section>
            <Image
              src={data.image}
              height={160}
              alt="No way!"
              withPlaceholder
            />
          </Card.Section>
          <Text
            sx={{ borderTop: "3px solid #EF2255" }}
            weight={500}
            size="lg"
            mt="md"
          >
            Episode {item.number}
          </Text>
        </Card>
      ))}
    </Flex>
  );
}

export default Episodes;
