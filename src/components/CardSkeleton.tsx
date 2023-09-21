import 'react-loading-skeleton/dist/skeleton.css'
import '../App.css'
type CardsLength = {
  cards: number
}

import Skeleton from 'react-loading-skeleton'
function CardSkeleton({ cards }: CardsLength) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="card-skeleton" key={index}>
        <div className="thumb">
          <Skeleton height={160} />
        </div>
        <div className="details">
          <div className="name">
            <Skeleton height={'100%'} />
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
      </div>
    ))
}

export default CardSkeleton
