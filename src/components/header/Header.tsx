import './Header.scss';
import headerLogo from '../../assets/logo.png';


export default function Header() {
    return <header className="header">
                <img src={headerLogo} alt="header logo should be right here!." />
            </header>
}
