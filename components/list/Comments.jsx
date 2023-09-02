"use client";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Input,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import { useStore } from "./../../zustand/store";
import CommentForm from "./../form/CommentForm";

async function Comments({ session, id }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [comments, setComments] = useState([]);

  const { anime } = useStore((state) => state);

  const fetchComments = async () => {
    const { data } = await supabase.from("comments").select();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <Box mt={{ base: 50, md: anime ? 50 : 160 }}>
        <Divider my="sm" />
        <Title>Comments</Title>
        <CommentForm id={id} session={session} />
        <Container size="xl" mt={30}>
          {comments
            .filter((item) => item.anime_name === id)
            .map((item) => (
              <Flex key={item.id} mb="md" gap="md" align="center" maw={800}>
                <Avatar size="lg" radius="xl" />
                <Flex direction="column">
                  <Text fz="lg" fw="bold" lineClamp={2} tt="capitalize">
                    {item.comment}
                  </Text>
                  <Text fz="sm" fw="bold">
                    {item.created_at.split("T")[0]}
                  </Text>
                </Flex>
              </Flex>
            ))}
        </Container>
      </Box>
    </>
  );
}

export default Comments;
