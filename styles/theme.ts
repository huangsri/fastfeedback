import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
  },
  fontWeights: {
    medium: 600,
  },
  styles: {
    global: {
      '#__next': {
        d: 'flex',
        flexDir: 'column',
        minH: '100vh',
      },
      html: {
        minWidth: '360px',
        scrollBehavior: 'smooth',
      },
    },
  },
})

export default theme
