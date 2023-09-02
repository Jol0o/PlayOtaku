"use client";
import { Avatar, Box, Button, Popover, Stack } from "@mantine/core";
import Link from "next/link";
import { IconLogout, IconSettings, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function LoginNav({ user, session }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {user || session ? (
        <Popover width={300} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Avatar
              src={
                (user && user.user_metadata?.avatar_url) ||
                (session && session.user_metadata?.avatar_url) ||
                "https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg"
              }
              alt="it's me"
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Stack align="center" spacing="sm">
              <Button
                leftIcon={<IconUser size="1rem" />}
                variant="outline"
                color="gray"
                w={200}
              >
                Profile
              </Button>
              <Button
                leftIcon={<IconSettings size="1rem" />}
                variant="outline"
                color="gray"
                w={200}
              >
                Settings
              </Button>
              <Button
                leftIcon={<IconLogout size="1rem" />}
                variant="outline"
                color="gray"
                w={200}
                onClick={signout}
              >
                Logout
              </Button>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
}

export default LoginNav;
