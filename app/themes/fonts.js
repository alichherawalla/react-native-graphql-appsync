import { css } from 'styled-components'

// sizes
const regular = () => css`
  font-size: 17px;
`
const small = () => css`
  font-size: 14px;
`

const medium = () => css`
  font-size: 15px;
`

const xsmall = () => css`
  font-size: 12px;
`
const big = () => css`
  font-size: 20px;
`
const large = () => css`
  font-size: 24px;
`

// weights
const light = () => css`
  font-weight: light;
`
const bold = () => css`
  font-weight: bold;
`

const normal = () => css`
  font-weight: normal;
`

// styles
const heading = () => css`
  ${large()};
  ${bold()}
`

const subheading = () => css`
  ${big()};
  ${bold()}
`

const standard = () => css`
  ${regular()};
  ${normal()}
`

const subText = () => css`
  ${small()};
  ${normal()}
`

export default {
  size: {
    xsmall,
    regular,
    medium,
    small,
    big,
    large
  },
  style: {
    heading,
    subheading,
    standard,
    subText
  },
  weights: {
    light,
    bold,
    normal
  }
}
