import { fonts } from 'app/themes'

export const getRandomKey = () =>
  Math.random()
    .toString(36)
    .substr(2, 3)
export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

export const rnFontSizeAdapter = type => ({
  fontSize: parseInt(
    fonts.size[type]()[0]
      .replace('font-size: ', '')
      .replace('px;', '')
      .trim(),
    10
  )
})

export const rnFontWeightAdapter = type => ({
  fontSize: parseInt(
    fonts.weights[type]()[0]
      .replace('font-weight: ', '')
      .trim(),
    10
  )
})

export const NEW_EMPLOYEE = {
  employee: {
    address: [{}],
    skills: [{}]
  }
}

export const SIGNUP_CONFIG = {
  header: 'Sign up to buildops',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'User name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
}
