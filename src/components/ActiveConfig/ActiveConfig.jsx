export const activeLinkStyle = ({ isActive }) => {
    return {
        borderBottom: isActive ? '1px solid #ffffffa8': 'none',
        color: isActive ? '#ffffffa8' : '#ffffff',
        // fontFamily: isActive ? 'poppinsBold' : 'poppinsMedium'
    }
}