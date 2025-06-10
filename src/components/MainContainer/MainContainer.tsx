import './MainContainer.scss';
import burgerImage from '../../assets/pic.png';
import { memo } from 'react';
import DeliveryMenu from '../DeliveryMenu/DeliveryMenu';
import useDeliveryMenuStore from '../../store/useDeliveryMenuStore';




function MainContainer() {
    const isDeliveryMenuOpened = useDeliveryMenuStore(state => state.isMenuOpened);
    const closeMenu = useDeliveryMenuStore(state => state.closeMenu);

    return (
        <div className="main-body">
            {isDeliveryMenuOpened && (
                <DeliveryMenu isOpen={isDeliveryMenuOpened} onClose={() => closeMenu()} />
            )}
            <div className="main-elipse"></div>
            <div className="main-container">
                <img src={burgerImage} alt="img" />
                <div className="main-delivery-content">
                    <h1>
                        <span>Только самые</span>
                        <span>сочные бургеры!</span>
                    </h1>
                    <p className="main-delivery-text">Бесплатная доставка от 599 сом</p>
                </div>
            </div>
        </div>
    )
}



export default memo(MainContainer);

