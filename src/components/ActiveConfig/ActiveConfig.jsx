export const activeLinkStyle = ({ isActive }) => {
    return {
        borderBottom: isActive ? '1px solid #3F94A6': 'none',
        color: isActive ? '#3F94A6' : '#575757',
        // fontFamily: isActive ? 'poppinsBold' : 'poppinsMedium'
    }
}