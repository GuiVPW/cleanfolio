import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		background-color: inherit;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		box-shadow: none;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	h1,
	h2,
	h3,
	h4 {
		line-height: 1.2;
		color: ${(props) => props.theme.foreground.alt};
	}

	h1 {
		font-size: 4rem;

		@media only screen and (max-width: 900px) {
			font-size: 2.6rem;
		}
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h4 {
		font-size: 1.3rem;
	}

	ul {
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`
