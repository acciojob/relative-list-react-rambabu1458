import React from 'react'

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
    </div>
  )
}

export default PageLayout