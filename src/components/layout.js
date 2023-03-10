/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import "../styles/style.scss"


const Layout = ({ children }) => {
  return (    
    <div>
      <div id="layout" className="layout">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
