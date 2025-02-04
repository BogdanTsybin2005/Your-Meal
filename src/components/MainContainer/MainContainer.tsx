import './MainContainer.scss';
import burgerImage from '../../assets/pic.png'


export default function MainContainer() {
    return (
        <div className="main-body">
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
