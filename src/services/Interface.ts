type Name = {
  title: string
  first: string
  last: string
}

type Location = {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: {
    latitude: number
    longitude: number
  }
  timezone: {
    offset: number
    description: string
  }
}

type Login = {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

type Id = {
  name: string
  value: null
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}

type Registered = {
  date: string
  age: number
}

type Dob = {
  date: string
  age: number
}

type Info = {
  seed: string
  results: number
  page: number
  version: number
}

export interface User {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export interface RandomUserResponse {
  results: User[]
  info: Info
}
