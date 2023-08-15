import React, { FC } from "react"
import Head from "next/head"
import { Box } from "@mui/material"
import { Navbar, Sidebar } from "../ui"

interface Props {
    children: React.ReactNode,
    title?: string
}

export const Layout = ({title='OpenJira', children}: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title> { title } </title>
        </Head>

        {/* navbar */}
        <Navbar/>

        {/* Sidebar */}
        <Sidebar/>

        {/* child components */}
        <Box sx={{ padding: '10px 20px' }} >
            { children }
        </Box>
    </Box>
  )
}
