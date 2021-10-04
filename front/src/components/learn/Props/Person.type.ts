export type PersonProps = {
  name: {
    first: string
    last: string
  }
}

// OR

export type Name = {
  first: string
  last: string
}

export type PersonPropsSecond = {
  name: Name
}