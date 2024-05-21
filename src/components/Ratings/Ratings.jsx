import React from 'react'
import starFill from '../../public/icons/star-fill.svg';
import starHalve from '../../public/icons/star-outline-half.svg';
import starOutline from '../../public/icons/star-outline.svg';
import { trendsData } from '../Trends/TrendsData';
// import { useDispatch } from 'react-redux';
// import { trendActions } from '../Redux/trendSlice';

const Ratings = ({ratings}) => {

    // const dispatch = useDispatch();
    // const addToTrends = () => {
    //     dispatch(trendActions.addToTrends({
    //         ratings,
    //     }))
    // }

    const productRates = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;
    
    return(
        <span key={index}>
            {
                ratings >= index + 1 ? (<img alt='img' src={starFill} className='star-fill'></img>):
                ratings >= number ? (<img alt='img' src={starHalve} className='star-halve'></img>):
                (<img alt='img' src={starOutline} className='start-outline'></img>)
            }
        </span>
    )
})
  return (
    <div>{productRates}</div>
  )
}

export default Ratings