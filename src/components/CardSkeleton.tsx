import 'react-loading-skeleton/dist/skeleton.css'
import '../App.css'

import Skeleton from 'react-loading-skeleton'
function CardSkeleton() {
  const Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <>
      {Array.map((item, index) => (
        <div className="card-skeleton" key={index}>
          <div className="thumb">
            <Skeleton height={160} />
          </div>
          <div className="details">
            <div className="name">
              <Skeleton height={'100%'} />
            </div>
          </div>
          <div className="price">
            <div className="truePrice">
              <Skeleton />
            </div>
            <div className="button">
              <Skeleton />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardSkeleton
