import './Header.scss';
import headerLogo from '../../assets/logo.png';
import { memo } from 'react';



function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="header logo should be right here!." />
        </header>
    )
}

export default memo(Header);