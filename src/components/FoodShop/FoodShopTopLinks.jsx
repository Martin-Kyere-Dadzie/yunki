import imageOne from '../../public/images/istockphoto-700076882-2048x2048.jpg';
import imageTwo from '../../public/images/istockphoto-1412723737-2048x2048.webp';
import imageThree from '../../public/images/istockphoto-1470885442-2048x2048 - Copy.jpg';
import imageFour from '../../public/images/istockphoto-1470885442-2048x2048 - Copy.jpg';

const foodShopTopLinks = [
    {
        "name": "Auto and Tires",
        "route": "/auto",
        "to": "/Auto",
        "url": imageOne,
    },
    {
        "name": 'Home',
        "route": "/home",
        "to": "/Home",
        'url': imageTwo,
    },
    {
        "name": "Toys",
        "route": "/toys",
        "to": "/Toys",
        "url": imageThree
    },
    {
        "name": "Beauty",
        "route": "/beauty",
        "to": "/Beauty",
        "url": imageFour,
    }

];

export default foodShopTopLinks;