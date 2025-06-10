import './MainContainer.scss';
import burgerImage from '../../assets/pic.png';
import { useState, memo } from 'react';
import DeliveryMenu from '../DeliveryMenu/DeliveryMenu';




function MainContainer() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="main-body">
            {isMenuOpen && (
                <DeliveryMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            )}
            <div className="main-elipse"></div>
            <div className="main-container">
                <img src={burgerImage} alt="img" />
                <div className="main-delivery-content">
                    <h1>
                        <span>Только самые</span>
                        <span>сочные бургеры!</span>
                    </h1>
                    <p className="main-delivery-text">Бесплатная доставка от 599₽</p>
                </div>
            </div>
        </div>
    )
}



export default memo(MainContainer);

