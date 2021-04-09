import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import placeholder from '../../images/placeholder.jpeg'
import favoriteAdd from '../../images/favorite-add.svg'
import favoriteRem from '../../images/favorite-rem.svg'

import './index.scss'

const Card = (props) => {
  const { vehicle, searchQuery, onAddFavClick, onRemFavClick, favList } = props
  if (
    searchQuery &&
    !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
  ) {
    return null
  }

  const isFav = favList.indexOf(vehicle.name) !== -1
  return (
    <div className="card cust-card" style={{ width: '18rem' }}>
      <img
        src={isFav ? favoriteRem : favoriteAdd}
        className="favorite-SVG"
        alt="favoriteAdd"
        onClick={() =>
          isFav ? onRemFavClick(vehicle.name) : onAddFavClick(vehicle.name)
        }
      />
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
            pathname: '/viewCard',
            query: { vehicle: vehicle },
          }}
          className="btn btn-primary view-card"
          // query={{ vehicle: 'JSON.stringify(vehicle)' }}
        >
          {/* <a href="#" > */}
          View Vehicle
          {/* </a> */}
        </NavLink>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card
