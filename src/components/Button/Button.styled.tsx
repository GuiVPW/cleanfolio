import styled, { css } from 'styled-components'

export const Button = styled.button.withConfig<{
  buttonType?: 'outline' | 'plain' | 'icon'
}>({
  shouldForwardProp: (prop) => !['buttonType'].includes(prop),
})`
  display: block;
  cursor: pointer;
  padding: 0.8em 1.4em;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: lowercase;
  transition: transform 0.2s ease-in-out;

  ${(props) =>
    props.buttonType === 'outline' &&
    css`
      color: ${props.theme.primary};
      border: 2px solid ${props.theme.primary};
      position: relative;
      overflow: hidden;
      z-index: 1;

      &:hover,
      &:focus {
        color: ${props.theme.background.main};
      }

      &:before {
        content: '';
        position: absolute;
        background-color: ${props.theme.primary};
        right: 100%;
        bottom: 0;
        left: 0;
        top: 0;
        z-index: -1;
        transition: right 0.2s ease-in-out;
      }

      &:hover:before,
      &:focus:before {
        right: 0;
      }
    `}

  ${(props) =>
    props.buttonType === 'plain' &&
    css`
      text-transform: initial;
      background-color: ${props.theme.background.alt};
      box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
      border: 0;

      &:hover {
        transform: translateY(-4px);
      }
    `}

	${(props) =>
    props.buttonType === 'icon' &&
    css`
      padding: 0;
      &:hover,
      &:focus {
        color: ${props.theme.primary};
      }
      &:active {
        transform: translateY(-5px);
      }
    `}
`
