import cars from '../../public/images/cars.png';
import homeDecor from '../../public/images/pngaaa.com-2902406.png';
import beauty from '../../public/images/pngaaa.com-6889630.png';
import health from '../../public/images/cocpine curls cream and oil.png';
import perfume from '../../public/images/625fe2a3794231633801c0e8_610cfb8bacbdd50a08b37b63_2.png';
import toys from '../../public/images/toys.png';
import gardens from '../../public/images/pngaaa.com-224713.png';
import babies from '../../public/images/pngaaa.com-1833049.png';

const productType = [
    {
        "name": "Auto and Tires",
        "route": "/auto",
        "to": "/Auto",
        "url": cars,
    },
    {
        "name": 'Home',
        "route": "/home",
        "to": "/Home",
        'url': homeDecor,
    },
    {
        "name": "Toys",
        "route": "/toys",
        "to": "/Toys",
        "url": toys
    },
    {
        "name": "Beauty",
        "route": "/beauty",
        "to": "/Beauty",
        "url": beauty,
    },
    {
        "name": "Patio and Gardens",
        "route": "/patio",
        "to": "/Pation",
        "url": gardens
    },
    {
        "name": "Babies",
        "route": "/babies",
        "to": "/Babies",
        "url": babies
    },
    {
        "name": "Health and Wellness",
        "route": "/health",
        "to": "/Health",
        "url": health,
    },
    {
        "name": "Fashion",
        "route": "/fashion",
        "to": "/Fashion",
        "url": perfume,
    }
];

export default productType;