export const activeLinkStyle = ({ isActive }) => {
    return {
        borderBottom: isActive ? '1px solid #ffffffa8': 'none',
        color: isActive ? '#ffffffa8' : '#575757',
        // fontFamily: isActive ? 'poppinsBold' : 'poppinsMedium'
    }
}