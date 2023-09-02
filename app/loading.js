'use client'
import React from 'react'
import { NewtonsCradle } from '@uiball/loaders'
import { Flex } from '@mantine/core'


function loading() {
    return (
        <Flex justify="center" align="center" mih="100vh" bg="dark">
            <NewtonsCradle
                size={40}
                speed={1.4}
                color="gray"
            />
        </Flex>
    )
}

export default loading