export const activeLinkStyle = ({ isActive }) => {
    return {
        borderBottom: isActive ? '1px solid #ff5500': 'none',
        color: isActive ? '#ff5500' : '#575757',
        // fontFamily: isActive ? 'poppinsBold' : 'poppinsMedium'
    }
}