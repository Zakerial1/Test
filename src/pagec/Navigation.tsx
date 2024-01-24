import { Link, Outlet, useNavigate } from "react-router-dom";
import './Navigation_componentc.css'
function Navigation() {
    const navigate = useNavigate();
    return (
        <div>
            <footer className="footer">
            <h1 className="Name_site"> Киновселенная </h1>
            <nav>
                <Link to="/">
                    <button className="but_navigation">Товар</button>
                </Link>
                <Link to="/pagec">
                    <button className="but_navigation">Фильми</button>
                </Link>
                <Link to="/pagec2">
                    <button className="but_navigation">Анимесериес </button>
                </Link>
                {/* <Link to="/info"> */}
                    {/* <button onClick={()=>{

                         navigate("/info")
                    }}>О компании</button> */}
                {/* </Link> */}
            </nav>
            </footer>
            <Outlet />
        </div>
    );
}
export default Navigation;