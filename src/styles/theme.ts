export const theme = {
  background: {
    main: '#FCFCFC',
    alt: '#FFF',
  },
  foreground: {
    main: '#555',
    alt: '#444',
  },
  primary: '#2978B5',
  shadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
}

export type Theme = typeof theme

export const darkTheme: Theme = {
  ...theme,
  background: {
    main: '#23283E',
    alt: '#2A2F4C',
  },
  foreground: {
    main: '#BDBDDD',
    alt: '#CDCDFF',
  },
  primary: '#90A0D9',
  shadow: 'rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px',
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
