class Prato {
  title: string
  description: string
  image: string
  id: number
  link: string

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    link: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.link = link
  }
}

export default Prato
