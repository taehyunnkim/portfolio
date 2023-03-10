/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const React = require("react")

export function onRenderBody ({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: `en` })
}

export function wrapPageElement({ element, props }) {
  const Layout = element.Layout || React.Fragment
  
  return <Layout {...props}>{element}</Layout>
}