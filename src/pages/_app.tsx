import { css, Global } from "@emotion/react"
import emotionReset from "emotion-reset"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { getApolloClient } from "../api/getApolloClient"

function App({ Component, pageProps }: AppProps) {
  const client = getApolloClient()

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *,
            *::after,
            *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          html {
            font-size: 62.5%;
          }

          body {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, "Apple Color Emoji", Arial, sans-serif,
              "Segoe UI Emoji", "Segoe UI Symbol";
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            position: relative;
            min-height: 100vh;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default App
