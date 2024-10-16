import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${(Props) =>
    Props.size === 'small' ? `${cores.pinkChoque}` : 'transparent'};
  color: ${cores.pink};
  font-size: ${(Props) => (Props.size === 'small' ? '12px' : '18px')};
  font-weight: bold;
  padding: ${(Props) => (Props.size === 'small' ? '4px 6px' : '0')};
  display: ${(Props) => (Props.size === 'small' ? 'inline-block' : '')};
  vertical-align: middle;
  text-align: ${(Props) => (Props.size === 'small' ? 'right' : 'right')};
  margin-right: ${(Props) => (Props.size === 'small' ? '0px' : '0px')};
  margin-left: ${(Props) => (Props.size === 'small' ? '8px' : '')};
  float: ${(Props) => (Props.size === 'small' ? '' : 'right')};
  align-items: center;
  justify-content: center;
  line-height: 21px;

  img {
    width: 21px;
    height: 20px;
    margin-left: 8px;
  }
`
