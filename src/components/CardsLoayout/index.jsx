import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const CardsLoayout = (props) => {
  const { children } = props
  return <div className="card-layout">{children}</div>
}

CardsLoayout.propTypes = {
  children: PropTypes.arrayOf(
    // when isLoading is false, we return null
    PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  ).isRequired,
}

export default CardsLoayout
