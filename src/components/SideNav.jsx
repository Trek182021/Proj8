import { Link } from "react-router-dom"

const SideNav = () => {
    return (
        <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/create">Create a Champion!</Link>
            <Link to="/gallery">Champion Gallery</Link>
        </div>
    )
}
export default SideNav