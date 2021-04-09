import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from './components/Card/index.jsx'
import CardLayout from './components/CardsLoayout/index.jsx'

import {
  fetchVehicles,
  selectVehicles,
  selectIsLoading,
  selectApiError,
} from './store/slices/swapi'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem('favList') || '[]')
  )

  const vehicles = useSelector(selectVehicles)
  const isLoading = useSelector(selectIsLoading)
  const apiError = useSelector(selectApiError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchVehicles())
  }, [])
  const onSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const onAddFavClick = (value) => {
    localStorage.setItem('favList', JSON.stringify([...favList, value]))
    setFavList([...favList, value])
  }

  const onRemFavClick = (value) => {
    const favListCp = [...favList]
    var index = favListCp.indexOf(value)
    if (index !== -1) {
      favListCp.splice(index, 1)
    }
    localStorage.setItem('favList', JSON.stringify(favListCp))
    setFavList(favListCp)
  }
  return (
    <div className="container">
      {!!vehicles && (
        <>
          <div className="mb-3">
            <input
              className="form-control"
              id="searchQuery"
              placeholder="Enter Model Name or vehicle name"
              onChange={onSearchChange}
              value={searchQuery}
            />
          </div>
          <CardLayout>
            {' '}
            {vehicles.results.map((vehicle, ind) => {
              return (
                <Card
                  key={ind}
                  vehicle={vehicle}
                  searchQuery={searchQuery}
                  onAddFavClick={onAddFavClick}
                  onRemFavClick={onRemFavClick}
                  favList={favList}
                />
              )
            })}
          </CardLayout>
        </>
      )}
      {isLoading && '..loading'}
      {apiError && '..apiError'}
    </div>
  )
}

export default App
