'use client'
import { Button, Flex, Image, Title } from '@mantine/core'
import Link from 'next/link'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body><Flex justify="center" align="center" mih="100vh" direction="column" bg="dark">
                <Title tt="uppercase" color="white">Something went wrong!</Title>
                <Image
                    fit="cover"
                    src="https://res.cloudinary.com/dkibnftac/image/upload/v1691150956/media-removebg-preview_wo1z1n.png"
                    maw={1000}
                    height={500}
                    mx="auto"
                    radius="md"
                />
                <Flex gap="md">
                    <Button component={Link} href="/" size="lg">Go Home</Button>
                </Flex>
            </Flex>
            </body>
        </html>
    )
}