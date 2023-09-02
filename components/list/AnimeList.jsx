"use client";
import {
  Flex,
  Image,
  Title,
  Text,
  Rating,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";

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

export default function AnimeList({ data }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Flex
      direction="column"
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        ...scrollbarStyle, // Include the scrollbarStyle object here
      }}
      mah={{ base: "170px", xl: "70vh" }}
      gap="md"
      align="start"
      w={{ base: "100%", lg: "300px" }}
    >
      {data.results.map((item) => (
        <Flex
          component={Link}
          href={`/anime/${item.id}`}
          gap="md"
          key={item.id}
          td="none"
          bg={dark ? "dark.7" : "gray.2"}
          w={{ base: "100%" }}
          p="sm"
          sx={{ borderRadius: "10px" }}
        >
          <Image
            radius="md"
            dth={50}
            height={70}
            fit="fill"
            width={50}
            src={item.image}
            alt="With default placeholder"
            withPlaceholder
          />
          <Flex direction="column">
            <Title color={dark ? "white" : "dark"} order={6}>
              {item.title}
            </Title>

            <Rating defaultValue={5} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
