import './Footer.scss';
import Wk from '../../assets/svg/Wk';
import Telegram from '../../assets/svg/Telegram';
import footerImage from '../../assets/Group 7.png';
import PhoneIcon from '../../assets/svg/PhoneIcon';
import { memo } from 'react';



function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='footer-block'>
                    <img src={footerImage} alt="footer image should be here!." />
                    <div className='footer-info'>
                        <p>© YourMeal, 2022</p>
                        <p>Design: Anastasia Ilina</p>
                    </div>
                </div>
                <div className='footer-block'>
                    <div>
                        <h2 className='footer-title'>Номер для заказа</h2>
                        <p className='footer-phone-contacts'>
                            <PhoneIcon/>
                            <span>+7(930)833-38-11</span>
                        </p>
                    </div>
                    <div>
                        <h2 className='footer-title'>Мы в соцсетях</h2>
                        <div className='footer-messengers'>
                            <Wk/>
                            <Telegram/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}



export default memo(Footer);
