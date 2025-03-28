export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || 'Choose Life & Peace'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'King of kings'

export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 15

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(', ')
  : ['PayPal', 'Stripe', 'Cash on delivery']
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'

export const signInDefaultValues = {
  email: '',
  password: '',
}

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const shippingAddressDefaultValues = {
  fullName: '',
  streetAddress: '',
  city: '',
  postalCode: '',
  country: '',
}

export const productDefaultValues = {
  name: '',
  slug: '',
  category: '',
  images: [],
  brand: '',
  description: '',
  price: '0',
  stock: 0,
  rating: '0',
  numReviews: 0,
  isFeatured: false,
}

export const reviewFormDefaultValues = {
  title: '',
  comment: '',
  rating: 0,
}

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(', ')
  : ['admin', 'user']
