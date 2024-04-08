// import React from 'react'
import rolledOats from '../../public/images/Oats-PNG-HD.png';
import brownLeatherBag from '../../public/images/6265151552d56e4117c09280_2.png'

import blackAndWhiteSneaker2 from '../../public/images/black_and_white2.png'
import blackAndWhiteSneaker1 from '../../public/images/black_and_white1.png'
import blackAndWhiteSneaker3 from '../../public/images/black-and-white-sneaker-back.png';
import blackAndWhiteSneaker4 from '../../public/images/black_and_white4.png';



// const Rating = ({ratings}) => {
//     const heartRating = Array.from({length: 5}, (elem, index) => {
//         let number = index + 0.5;
//         debugger;
//         return(
//             <span key={index}>
//                 {ratings >= index + 1 ? (<img alt='' src={heartFill} className='heart-fill'></img>): 
//                 ratings >= number ? (<img alt='' src={heartHalf} className='heart-half'></img>): 
//                 (<img alt='' src={heartOutline} className='heart-outline'></img>) }
//             </span>
//         )
//     })
//   return (
//     <div>Rating</div>
//   )
// }
// const wishCounter = useSelector(state => state.wish.totalQuantity);


export const trendsData = [
    {
        images:[
            {
                image:  rolledOats,
                image1: rolledOats,
                image2: rolledOats,            
                image3: rolledOats,
            }
        ],
        imageOnclick:[
            {imageDisplay: blackAndWhiteSneaker1},
            {imageDisplay: blackAndWhiteSneaker2},
            {imageDisplay: blackAndWhiteSneaker3},
            {imageDisplay: blackAndWhiteSneaker4},
        ],
        name: 'rolled oat',
        ProductType: 'food',
        title: 'rolled oats granola',
        // colors: 0,
        oldPrice: 80,
        newPrice: 100,
        id: 1,
        ratings: 2.5,
        discount: '-20%',
        priceTag: 0
    },
    {
        images:[
            {
                image:  brownLeatherBag,
                image1: brownLeatherBag,
                image2: brownLeatherBag,            
                image3: brownLeatherBag,
            }
        ],
        imageOnclick:[
            {imageDisplay: brownLeatherBag},
            {imageDisplay: brownLeatherBag},
            {imageDisplay: brownLeatherBag},
            {imageDisplay: brownLeatherBag},
        ],
        name: 'brown bag',
        ProductType: 'apparel',
        title: 'brown leather back pack',
        // colors: 0,
        oldPrice: 150,
        newPrice: 200,
        id: 2,
        ratings: 4,
        discount: '-05%',
        priceTag: 0
    }

];