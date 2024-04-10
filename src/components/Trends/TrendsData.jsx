// import React from 'react'
import rolledOats from '../../public/images/Oats-PNG-HD.png';
import brownLeatherBag from '../../public/images/6265151552d56e4117c09280_2.png'

import blackAndWhiteSneaker2 from '../../public/images/black_and_white2.png'
import blackAndWhiteSneaker1 from '../../public/images/black_and_white1.png'
import blackAndWhiteSneaker3 from '../../public/images/black-and-white-sneaker-back.png';
import blackAndWhiteSneaker4 from '../../public/images/black_and_white4.png';
import ladiesRedBag from '../../public/images/ladies-red-bag.png';
import jeanJacket from '../../public/images/Jean-Jacket-PNG-Isolated-Photos.png'
import leatherTraveller from '../../public/images/leather-traveller.png'

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
        oldPrice: 100,
        newPrice: 80,
        id: 1,
        ratings: 2,
        discount: '-20%',
        newItem: 1
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
        oldPrice: 200,
        newPrice: 150,
        id: 2,
        ratings: 3,
        discount: '-05%',
        newItem: 0
    },
    {
        images:[
            {
                image:  jeanJacket,
                image1: jeanJacket,
                image2: jeanJacket,            
                image3: jeanJacket,
            }
        ],
        imageOnclick:[
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
            {imageDisplay: jeanJacket},
        ],
        name: 'men jeans jacket',
        ProductType: 'apparel',
        title: 'men jean jacket for occasions',
        // colors: 0,
        // oldPrice: 320,
        newPrice: 450,
        id: 3,
        ratings: 4,
        discount: 0,
        newItem: 1
    },
    {
        images:[
            {
                image:  ladiesRedBag,
                image1: ladiesRedBag,
                image2: ladiesRedBag,            
                image3: ladiesRedBag,
            }
        ],
        imageOnclick:[
            {imageDisplay: ladiesRedBag},
            {imageDisplay: ladiesRedBag},
            {imageDisplay: ladiesRedBag},
            {imageDisplay: ladiesRedBag},
        ],
        name: 'ladies hand bag',
        ProductType: 'apparel',
        title: 'red ladies bag for occasions and offices',
        // colors: 0,
        // oldPrice: 320,
        newPrice: 300,
        id: 3,
        ratings: 4.5,
        discount: 0,
        newItem: 0
    },
    {
        images:[
            {
                image:  leatherTraveller,
                image1: leatherTraveller,
                image2: leatherTraveller,            
                image3: leatherTraveller,
            }
        ],
        imageOnclick:[
            {imageDisplay: leatherTraveller},
            {imageDisplay: leatherTraveller},
            {imageDisplay: leatherTraveller},
            {imageDisplay: leatherTraveller},
        ],
        name: 'ladies hand bag',
        ProductType: 'apparel',
        title: 'red ladies bag for occasions and offices',
        // colors: 0,
        // oldPrice: 320,
        newPrice: 300,
        id: 3,
        ratings: 3,
        discount: 0,
        newItem: 1
    }

];