import styled, { css } from 'styled-components'

export const Link = styled.a.withConfig<{ type?: 'normal' | 'nav' | 'icon' }>({
  shouldForwardProp: (prop) => !['type'].includes(prop),
})`
  padding: 0 0 0.3em 0;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  &::before {
    content: '';
    display: inline;
    width: 0%;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    background-color: ${(props) => props.theme.primary};
    transition: width 0.2s ease-in;
  }

  &:hover::before,
  &:focus::before {
    width: 100%;
  }

  ${(props) =>
    props.type === 'normal' && { color: props.theme.foreground.main }}
  ${(props) =>
    props.type === 'nav' &&
    css`
      color: ${props.theme.foreground.main};
      text-transform: lowercase;
      font-weight: 500;
    `}
	${(props) => props.type === 'icon' && { color: props.theme.primary }}
`
