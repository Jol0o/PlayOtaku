"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const googleAuth = async () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const facebookAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  };

  return (
    <Container
      bg="dark.7"
      p={0}
      fluid="true"
      size="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        minHeight: "90vh",
      }}
    >
      <Flex
        pl={{ base: "20%", sm: "30%", md: "35%", lg: "10%" }}
        mih={400}
        direction="column"
        justify="center"
        align="start"
      >
        <Text
          color="gray.5"
          fz={{ base: "40px", sm: "50px", md: "60px", lg: "70px" }}
          fw="bold"
        >
          Welcome Back.!
        </Text>
        <Flex>
          <Button variant="outline" color="dark.2" size="md">
            Skip the lag ?
          </Button>
        </Flex>
      </Flex>
      <Flex
        mih="90vh"
        align="center"
        style={{
          background: "#FFF6E0",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 10px )",
          webkitBackdropFilter: "blur( 10px )",
        }}
        justify="center"
        p="md"
        direction="column"
        w={{ base: "100%", lg: "50%" }}
        gap="sm"
      >
        <Flex
          w={{ base: "280px", lg: "350px" }}
          direction="column"
          align="start"
        >
          <Title color="dark.5">{isLogin ? "Login" : "Signup"}</Title>
          <Text color="gray.6" fz="sm" fw="bold">
            {isLogin
              ? " Glad you're back .!"
              : "Just some ditails to get you in.!"}
          </Text>
        </Flex>
        <input
          name="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            color: "#2C2E33",
            border: "1px solid #373A40",
            padding: "10px 20px",
            backgroundColor: "transparent",
            borderRadius: "4px",
            outline: "none",
            minWidth: "280px",
            width: "100%",
            maxWidth: "350px",
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            color: "#2C2E33",
            border: "1px solid #373A40",
            padding: "10px 20px",
            backgroundColor: "transparent",
            borderRadius: "4px",
            outline: "none",
            minWidth: "280px",
            width: "100%",
            maxWidth: "350px",
          }}
          value={password}
        />
        <Stack spacing={0} align="center" w="100%">
          <button
            onClick={isLogin ? handleSignIn : handleSignUp}
            style={{
              color: "#F8F9FA",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to right, #6B03D7, #D91E57)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              outline: "none",
              minWidth: "280px",
              width: "100%",
              maxWidth: "350px",
              cursor: "pointer",
              marginBottom: "0",
            }}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <Text
            fw="bold"
            fz="sm"
            mt={0}
            color="dark.4"
            sx={{ cursor: "pointer" }}
          >
            Forget password
          </Text>
        </Stack>
        <Stack mb={30}>
          <Button
            w={{ base: "280px", sm: "320px", md: "350px" }}
            rightIcon={<IconBrandGoogle />}
            variant="light"
            color="dark.4"
            onClick={googleAuth}
          >
            Login with Google
          </Button>
          <Button
            w={{ base: "280px", sm: "320px", md: "350px" }}
            rightIcon={<IconBrandFacebook />}
            variant="light"
            color="dark.4"
            onClick={facebookAuth}
          >
            Login with Facebook
          </Button>
        </Stack>
        <Button
          onClick={() => setIsLogin(!isLogin)}
          fw="bold"
          fz="sm"
          variant="subtle"
          color="dark.4"
        >
          {isLogin
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </Button>
        <Flex  gap="md" wrap="wrap" justify="center">
          <Text color="dark.4" fw="bold" fz="xs">
            Terms & Conditions
          </Text>
          <Text color="dark.4" fw="bold" fz="xs">
            Support
          </Text>
          <Text color="dark.4" fw="bold" fz="xs">
            Customer Care
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
