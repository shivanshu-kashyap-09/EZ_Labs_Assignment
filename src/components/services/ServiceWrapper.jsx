import React, { useState } from 'react'
import Service from './Service'
import FilmProduction from './FilmProduction'

const ServiceWrapper = () => {
  const [showFilmCard, setShowFilmCard] = useState(false)
  const [showFilmPage, setShowFilmPage] = useState(false)

  const handleLeaveFilmSection = () => {
    setShowFilmPage(false)
    setShowFilmCard(false)
  }

  return (
    <div className="relative">
      {!showFilmCard ? (
        <Service onMouseEnter={() => setShowFilmCard(true)} />
      ) : (
        <FilmProduction
          onMouseLeave={handleLeaveFilmSection}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  )
}

export default ServiceWrapper
