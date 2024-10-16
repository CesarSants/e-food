class Restaurante {
  category: string
  title: string
  description: string
  image: string
  rate: string
  infos: string[]
  id: number
  link: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rate: string,
    link: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rate = rate
    this.link = link
  }
}

export default Restaurante
