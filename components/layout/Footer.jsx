import React from "react";
import {
  ActionIcon,
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  Image,
  MediaQuery,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function FooterComponent() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "50vh",
        position: "relative",
        overflow: "hidden",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3%",
      }}
    >
      <Image
        mx="auto"
        radius="md"
        src="https://res.cloudinary.com/dkibnftac/image/upload/v1692102717/4232792_dxpnoy.jpg"
        alt="Random image"
        sx={{
          position: "absolute",
          width: "100%",
          maxHeight: "50vh",
          opacity: ".4",
        }}
      />

      <Flex
        sx={{ zIndex: "20", height: "100%" }}
        w={1300}
        gap={10}
        justify="center"
        align="center"
        wrap="wrap"
      >
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <div
            style={{
              border: "1px solid #ADB5BD",
              borderRadius: "5px",
              padding: "20px",
            }}
          >
            <Title mb={100} order={2}>
              Before you go,
              <br />
              check out these links
            </Title>
            <Flex gap="lg">
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  fontSize: "13px",
                }}
              >
                <Title order={4}>Company</Title>
                <li>Our Story</li>
                <li>Support</li>
                <li>Press</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  fontSize: "13px",
                }}
              >
                <Title order={4}>Legal</Title>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Community Rules</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  fontSize: "13px",
                }}
              >
                <Title order={4}>Job board</Title>
                <li>Join the collective</li>
                <li>Hire a 10x Designer</li>
              </ul>
            </Flex>
          </div>
        </MediaQuery>
        <Stack>
          <div
            style={{
              border: "1px solid #ADB5BD",
              borderRadius: "5px",
              padding: "20px",
              maxWidth: "250px",
              width: "100%",
              maxHeight: "200px",
            }}
          >
            <Title color={dark ? "" : "dark.5"} mb={30}>
              Let's work <br />
              together
            </Title>
            <Text>
              Need a web page ? <br />
              Contact me here
            </Text>
          </div>
          <Flex gap="sm">
            <ActionIcon
              sx={{
                border: "1px solid #ADB5BD",
                borderRadius: "5px",
                padding: "5px",
                width: "30%",
                height: "70px",
              }}
            >
              <IconBrandFacebook size="2.125rem" />
            </ActionIcon>
            <ActionIcon
              sx={{
                border: "1px solid #ADB5BD",
                borderRadius: "5px",
                padding: "5px",
                width: "30%",
                height: "70px",
              }}
            >
              <IconBrandLinkedin size="2.125rem" />
            </ActionIcon>
            <ActionIcon
              sx={{
                border: "1px solid #ADB5BD",
                borderRadius: "5px",
                padding: "5px",
                width: "30%",
                height: "70px",
              }}
            >
              <IconBrandGithub size="2.125rem" />
            </ActionIcon>
          </Flex>
        </Stack>
      </Flex>
    </div>
  );
}

export default FooterComponent;
