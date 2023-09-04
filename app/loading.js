'use client'
import React from 'react'
import { NewtonsCradle } from '@uiball/loaders'
import { Flex } from '@mantine/core'
import { useRouter } from 'next/navigation'


function loading() {
    const router = useRouter()
    const refresh = () => {
        router.refresh()
    }
    return (
        <Flex style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', minHeight: '100vh', background: "#040D12" }}>
            <NewtonsCradle
                size={80}
                speed={1.4}
                color="gray"
            />
            <button onClick={refresh} style={{ background: "none", fontSize: "15px", fontWeight: "bold", textTransform: "uppercase", color: "gray", border: "none" }}>Refresh</button>
        </Flex>
    )
}

export default loading