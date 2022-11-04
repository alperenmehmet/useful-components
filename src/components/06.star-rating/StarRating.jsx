import {FaStar} from 'react-icons/fa'
import {useState} from 'react'

const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState({
    totalStars: 5,
    selectedStar: 0,
  })
  return (
    <div>
      {Array.from({length: totalStars}, (v, i) => (
        <FaStar key={i} selected={selectedStar > i} />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </div>
  )
}

export default StarRating
