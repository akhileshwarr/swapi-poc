import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useParams, useLocation } from 'react-router-dom'

import placeholder from '../../images/placeholder.jpeg'
import favoriteAdd from '../../images/favorite-add.svg'
// import favoriteRem from './images/favorite-rem.svg'

import './index.scss'

const ViewCard = (props) => {
  const { vehicle } = useLocation().query
  return (
    <div className="card cust-card" style={{ width: '18rem' }}>
      <img src={placeholder} className="card-img-top" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <span>Model</span> <b>{`: ${vehicle.model}`} </b>
        <br></br>
        <span> Manufacturer</span> <b>{`: ${vehicle.manufacturer}`} </b>
        <br></br>
        <span> Cost</span> <b>{`: ${vehicle.cost_in_credits}`} </b>
        <br></br>
        <span> passengers</span> <b>{`: ${vehicle.passengers}`} </b>
        <br></br>
        <NavLink
          to={{
            pathname: '/home',
          }}
          className="btn btn-primary view-card"
        >
          Home
        </NavLink>
      </div>
    </div>
  )
}

ViewCard.propTypes = {}

export default ViewCard
