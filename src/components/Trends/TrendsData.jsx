// import React from 'react'
import rolledOats from '../../public/images/pngaaa.com-6964235.png';
import woofers from '../../public/images/pngaaa.com-2902482.png'
import DogBottleFood from '../../public/images/bottle-food.jpg';
import blackAndWhiteSneaker2 from '../../public/images/black_and_white2.png'
import blackAndWhiteSneaker1 from '../../public/images/black_and_white1.png'
import blackAndWhiteSneaker3 from '../../public/images/black-and-white-sneaker-back.png';
import blackAndWhiteSneaker4 from '../../public/images/black_and_white4.png';
import ladiesRedBag from '../../public/images/ladies-red-bag.png';
import jeanJacket from '../../public/images/Jean-Jacket-PNG-Isolated-Photos.png'
import leatherTraveller from '../../public/images/leather-traveller.png'
import leatherTravellerOne from '../../public/images/leather-traveller1.png'
import petLeash from '../../public/images/pet leash.png';

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
        productType: 'food',
        name: 'rolled oat',
        title: 'rolled oats granola',
        // colors: 0,
        oldPrice: 'Ghs100',
        price: 80,
        id: 1,
        ratings: 5,
        discount: '-02%',
        newProduct: 1,
    },
    {
        images:[
            {
                image:  woofers,
                image1: woofers,
                image2: woofers,            
                image3: woofers,
            }
        ],
        imageOnclick:[
            {imageDisplay: woofers},
            {imageDisplay: woofers},
            {imageDisplay: woofers},
            {imageDisplay: woofers},
        ],
        name: 'brown bag',
        productType: 'apparel',
        title: 'woofer sets for interiors',
        // colors: 0,
        oldPrice: 'Ghs200',
        price: 150,
        id: 2,
        ratings: 3,
        discount: '-05%',
        newProduct: 0
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
        productType: 'apparel',
        title: 'men jean jacket for occasions',
        // colors: 0,
        // oldPrice: 320,
        price: 450,
        id: 3,
        ratings: 4,
        discount: 0,
        newProduct: 1
    },
    {
        images:[
            {
                image:  DogBottleFood,
                image1: DogBottleFood,
                image2: DogBottleFood,            
                image3: DogBottleFood,
            }
        ],
        imageOnclick:[
            {imageDisplay: DogBottleFood},
            {imageDisplay: DogBottleFood},
            {imageDisplay: DogBottleFood},
            {imageDisplay: DogBottleFood},
        ],
        name: 'dog bottle food',
        productType: 'pets',
        title: 'dogs bottle food stuffed with vegetable oil',
        // colors: 0,
        // oldPrice: 320,
        price: 450,
        id: 4,
        ratings: 4,
        discount: 0,
        newProduct: 1
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
        productType: 'apparel',
        title: 'red ladies bag for occasions and offices',
        // colors: 0,
        // oldPrice: 320,
        price: 300,
        id: 5,
        ratings: 4.5,
        discount: 0,
        newItem: 0
    },
    {
        images:[
            {
                image:  leatherTraveller,
                image1: leatherTravellerOne,
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
        productType: 'apparel',
        title: 'red ladies bag for occasions and offices',
        // colors: 0,
        // oldPrice: 320,
        price: 300,
        id: 6,
        ratings: 3,
        discount: 0,
        newItem: 1
    },
    {
        images:[
            {
                image:  petLeash,
                image1: petLeash,
                image2: petLeash,            
                image3: petLeash,
            }
        ],
        imageOnclick:[
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
            {imageDisplay: petLeash},
        ],
        name: 'Leash',
        productType: 'pets',
        title: 'pet leash for pets safety and hiking',
        // colors: 0,
        // oldPrice: 320,
        price: 300,
        id: 7,
        ratings: 3.5,
        discount: 0,
        newItem: 0
    }

];