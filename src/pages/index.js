import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Index = ({ data }) => {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}

Index.Layout = Layout

export const Head = () => <Seo title="Home" />

export default Index