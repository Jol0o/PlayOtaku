'use client'
import React from 'react'
import { NewtonsCradle } from '@uiball/loaders'
import { Flex } from '@mantine/core'


function loading() {
    return (
        <Flex style={{ display: "flex", alignItems: "center", justifyContent: 'center', minHeight: '100vh', background: "#040D12" }}>
            <NewtonsCradle
                size={40}
                speed={1.4}
                color="gray"
            />
        </Flex>
    )
}

export default loading