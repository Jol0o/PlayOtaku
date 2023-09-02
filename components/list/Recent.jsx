import { Carousel } from "@mantine/carousel";
import { Button, Image, Rating, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Recent({ recent }) {

  return (
    <>
      <Carousel
        height={520}
        slideSize="20%"
        slideGap={10}
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        mt={50}
      >
        {recent.results.map((item) => (
          <Carousel.Slide key={item.id}>
            <Image
              fit="cover"
              src={item.image}
              maw={300}
              height={400}
              mx="auto"
              radius="md"
            />
            <div
              style={{
                maxWidth: "300px",
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

export default Recent;
