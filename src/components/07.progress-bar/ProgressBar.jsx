import {useState} from 'react'
import {TiTick} from 'react-icons/ti'

const ProgressBar = () => {
  const [count, setCount] = useState(1)

  const handlePrevious = () => {
    setCount(count - 1)
  }

  const handleNext = () => {
    setCount(count + 1)
  }

  console.log(count)
  return (
    <>
      <div className='container'>
        <div className={`${count > 1 ? 'circle-completed' : 'circle'}`}>
          {count > 1 ? <TiTick /> : 1}
        </div>
        <div className={`${count > 1 ? 'line-completed' : 'line'}`}></div>
        <div className={`${count > 2 ? 'circle-completed' : 'circle'}`}>
          {count > 2 ? <TiTick /> : 2}
        </div>
        <div className={`${count > 2 ? 'line-completed' : 'line'}`}></div>
        <div className={`${count > 3 ? 'circle-completed' : 'circle'}`}>
          {count > 3 ? <TiTick /> : 3}
        </div>
        <div className={`${count > 3 ? 'line-completed' : 'line'}`}></div>
        <div className={`${count > 4 ? 'circle-completed' : 'circle'}`}>
          {count > 4 ? <TiTick /> : 4}
        </div>
      </div>
      <div className='button-container'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default ProgressBar
