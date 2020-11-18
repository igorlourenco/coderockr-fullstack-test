import { theme as chakraTheme } from '@chakra-ui/core'

const fonts = {
  ...chakraTheme.fonts,
  heading: `'Rubik', sans-serif`,
  body: `'Rubik', sans-serif`,
  mono: `'Menlo', monospace`
}

const fontWeights = {
  ...chakraTheme.fontWeights,
  regular: 400,
  medium: 500,
  bold: 700
}

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
  },
  fonts,
  fontWeights
}

export default theme
