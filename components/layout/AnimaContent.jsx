import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Image,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import React from "react";
import Episodes from "./../list/Episodes";

function AnimaContent({ data }) {
  return (
    <>
      <Flex
        maw="1400px"
        wrap="wrap"
        justify="space-between"
        sx={{ margin: "auto" }}
      >
        <Box w={{ base: "100%", xl: "50%" }}>
          <Flex align="center" gap="lg" wrap="wrap">
            <Title>{data.title}</Title>
            <Badge color="gray" size="lg" radius="sm">
              {data.totalEpisodes} Episodes
            </Badge>
            <Badge color="gray" size="lg" fz="sm" radius="sm">
              Subtitled
            </Badge>
          </Flex>
          <Flex gap="md" mt="md" align="center">
            <Rating defaultValue={2} size="sm" />
            <Text fw="bold">Date {data.releaseDate}</Text>
          </Flex>
          <Text lineClamp={3}>{data.description}</Text>
          <Flex gap="md" mt="md">
            <Button>Watch Now</Button>
            <Button leftIcon={<IconShare />}>Share</Button>
          </Flex>
        </Box>
        <Card ml="md" shadow="sm" mt="md" padding="xl" mah="300px">
          <Card.Section>
            <Image src={data.image} height={250} alt="No way!" />
          </Card.Section>
          <Text weight={500} size="lg" mt="md">
            {data.title}
          </Text>
        </Card>
      </Flex>

      <Episodes data={data} />
    </>
  );
}

export default AnimaContent;
