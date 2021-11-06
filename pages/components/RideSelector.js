import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../../data/carList'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0)
  console.log(pickupCoordinates, dropoffCoordinates)

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ',
        }),
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.routes[0].duration / 100)
        setRideDuration(data.routes[0].duration / 100)
      })
  }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      {/* 🔥 FAbio */}
      {/* 🚀 Sam */}
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>${(rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
