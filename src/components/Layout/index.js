import React from 'react'
import css from '@styled-system/css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../../theme'
import { Box } from '../Box'

// TODO: fix font plugin
import './index.css'

const CSSReset = createGlobalStyle(
  css({
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: 'background.50',
      color: 'foreground.50',
      fontFamily: 'body',
      fontSize: 'xl',
    },
    '*': {
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily: 'body',
    },
  }),
)

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box
        py={5}
        mx="auto"
        maxWidth="lg"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        {children}
      </Box>
    </ThemeProvider>
  )
}
