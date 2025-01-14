import './style.scss';
import globeIcon from './globe.svg'
import Link from "../link/Link.jsx";
import Account from "../account/Account.jsx";
function UserMenu() {
    return (
        <>
            <div className="user-menu">
                <div className="user-menu__home">
                    <Link text="Airbnb your home"/>
                </div>
                <div className="user-menu__local">
                    <Link icon={globeIcon}/>
                </div>
                <div className="user-menu__user">
                    <Account/>
                </div>
            </div>
        </>
    )
}

export default UserMenu