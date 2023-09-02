"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { Button, Image, Rating, Text, Title } from "@mantine/core";
import Link from "next/link";

function Top({ data }) {
  return (
    <>
      <Carousel
        withIndicators
        height={520}
        slideSize="22.333333%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        mt={50}
      >
        {data.results.map((item) => (
          <Carousel.Slide key={item.id}>
            <Image
              fit="cover"
              src={item.image}
              maw={400}
              height={400}
              mx="auto"
              radius="md"
            />
            <div
              style={{
                maxWidth: "350px",
                margin: "auto",
              }}
            >
              <Text lineClamp={1} fw="bold" fz="xl">
                {item.title}
              </Text>
              <Rating mb="xs" defaultValue={5} />
              <Button
                gradient={{ from: "#6B03D7", to: "#D91E57" }}
                variant="gradient"
                component={Link}
                href={`/anime/${item.id}`}
              >
                View Episodes
              </Button>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default Top;
