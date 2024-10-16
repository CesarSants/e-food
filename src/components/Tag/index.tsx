import { TagContainer } from './styles'
import { ReactNode } from 'react'

export type Props = {
  size?: 'small' | 'transparent'
  // children: JSX.Element
  children: ReactNode
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
