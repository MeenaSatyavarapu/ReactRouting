
import { NavLink } from 'react-router-dom';
const Navbar = () =>{
    const navLinkStyle = ({isActive})=>{
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    
    return (
        
        <nav>
          <NavLink style = {navLinkStyle} to="/"> Home </NavLink>
          <NavLink style = {navLinkStyle} to="/Products"> Products </NavLink>
          <NavLink style = {navLinkStyle} to="/About"> About </NavLink>
        </nav>
        
)}
export default Navbar