import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-2xl">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
