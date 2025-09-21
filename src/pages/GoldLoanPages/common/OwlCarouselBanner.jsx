import React from 'react'

const OwlCarouselBanner = () => {
  return (
    <div className="my-6">
      <div className="owl-carousel owl-theme dark:text-white">
        <div className="bg-blue-200 p-8 rounded-md dark:bg-gray-700">🚀 Featured Product 1</div>
        <div className="bg-green-200 p-8 rounded-md dark:bg-gray-700">🔥 Hot Deal 2</div>
        <div className="bg-red-200 p-8 rounded-md dark:bg-gray-700">⭐ New Arrival 3</div>
      </div>
    </div>
  )
}

export default OwlCarouselBanner;