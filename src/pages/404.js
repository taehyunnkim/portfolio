import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

NotFoundPage.Layout = Layout

export const Head = () => <Seo title="404 - Not Found" />

export default NotFoundPage
