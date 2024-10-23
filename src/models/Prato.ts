class Prato {
  title: string
  description: string
  image: string
  id: number
  link: string
  price: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    link: string,
    price: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.link = link
    this.price = price
  }
}

export default Prato
