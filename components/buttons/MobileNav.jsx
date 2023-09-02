"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Burger,
  MediaQuery,
  Popover,
  Stack,
  Button,
  Autocomplete,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconLogin,
  IconLogout,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Dark from "./../buttons/DarkMode";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "@mantine/form";

export default function MobileNav({ user, session }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  const router = useRouter();
  const supabase = createClientComponentClient();

  const signout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const form = useForm({
    initialValues: {
      search: "",
    },
  });

  return (
    <MediaQuery largerThan="md" styles={{ display: "none" }}>
      <Popover width={300} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Burger opened={opened} onClick={toggle} aria-label={label} />
        </Popover.Target>
        <Popover.Dropdown>
          <Stack align="center" spacing="sm">
            <Flex w={250}>
              <Autocomplete
                placeholder="Search"
                {...form.getInputProps("search")}
                data={[
                  "Demon Slayer",
                  "Jujutsu Kaisen",
                  "One Piece",
                  "Black Clover",
                ]}
              />
              <Button
                component={Link}
                href={`/search/${form.values.search}`}
                variant="outline"
                color={dark ? "yellow" : "blue"}
              >
                <IconSearch size="20px" />
              </Button>
            </Flex>
            <Dark />
            {session ||
              (user && (
                <Button
                  leftIcon={<IconUser size="1rem" />}
                  variant="outline"
                  color="gray"
                  w={200}
                >
                  Profile
                </Button>
              ))}
            <Button
              leftIcon={<IconSettings size="1rem" />}
              variant="outline"
              color="gray"
              w={200}
            >
              Settings
            </Button>
            {session || user ? (
              <Button
                leftIcon={<IconLogout size="1rem" />}
                variant="outline"
                color="gray"
                w={200}
                onClick={signout}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                href="/login"
                leftIcon={<IconLogin size="1rem" />}
                variant="outline"
                color="gray"
                w={200}
              >
                Login
              </Button>
            )}
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </MediaQuery>
  );
}
