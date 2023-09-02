"use client";
import { BackgroundImage, Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import AnimeList from "../list/AnimeList";
import Top from "./../list/Top";
import Recent from "./../list/Recent";

function Content({ data, recent }) {
  const textStyle = {
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // You can adjust the values for x, y, blur, and color to control the shadow appearance
  };
  return (
    <>
      <Flex mih="70vh" gap="md" maw="1300px" m="auto" pt={30} wrap="wrap">
        <BackgroundImage
          bgp="center"
          bgr="no-repeat"
          maw={{ base: "100%", lg: "900px" }}
          src={data.results[0].image}
          radius="sm"
        >
          <Flex
            justify="center"
            align="start"
            mih="70vh"
            p="md"
            direction="column"
            gap="md"
          >
            <Text
              fz={{ base: "25px", sm: "30px", md: "40px", lg: "50px" }}
              sx={textStyle}
            >
              {data.results[0].title}
            </Text>
            {data.results[0].description && (
              <Text maw={600} color="white" lineClamp={3} size="sm">
                {data.results[0].description}
              </Text>
            )}
            <Button
              component={Link}
              href={`/anime/${data.results[0].id}`}
              gradient={{ from: "#6B03D7", to: "#D91E57" }}
              variant="gradient"
              size="md"
            >
              View Episodes
            </Button>
          </Flex>
        </BackgroundImage>
        <AnimeList data={data} />
      </Flex>
      <Recent recent={recent} />
      <Top data={data} />
    </>
  );
}

export default Content;
