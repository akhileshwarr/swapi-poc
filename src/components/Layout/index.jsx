import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <h1 className="sw-page-header">Star Wars Visual Guide</h1>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(
    // when isLoading is false, we return null
    PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  ).isRequired,
}

export default Layout
