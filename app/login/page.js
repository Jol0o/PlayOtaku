"use client"
import Dark from '@/components/buttons/DarkMode';
import MobileNav from '@/components/buttons/MobileNav';
import { Flex, Image, MediaQuery } from '@mantine/core';
import React from 'react'
import Login from './../../components/auth/LoginPage';

function page() {
  return (
    <>
      <Flex
        mih={50}
        gap="sm"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        maw="1400px"
        m="auto"
        w="100%"
      >
        <Image
          width={170}
          height={50}
          component="a"
          href="/"
          sx={{ mixBlendMode: "difference" }}
          src="https://res.cloudinary.com/dkibnftac/image/upload/v1690206315/image-removebg-preview_7_hgi6vw.png"
          alt="With default placeholder"
          withPlaceholder
        />
        <MobileNav />
      </Flex>
      <Login />
    </>
  )
}

export default page