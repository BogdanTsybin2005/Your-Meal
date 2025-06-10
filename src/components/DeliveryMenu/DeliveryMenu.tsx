import './DeliveryMenu.scss';
import { useState } from 'react';
import DeliveryPicture from '../../assets/delivery-picture.png';
import Button from '../Button/Button';



type DeliveryType = 'Самовывоз' | 'Доставка';

interface IDeliveryRequestStucture {
    name: string;
    phoneNumber: string;
    deliveryType: DeliveryType;
    address: string;
    floor: number | null;
    intercom: number | null;
}

export default function DeliveryMenu(props: {isOpen: boolean; onClose: () => void}) {
    const { isOpen, onClose } = props;

    const [deliveryRequest, setDeliveryRequest] = useState<IDeliveryRequestStucture>({
        name: '',
        phoneNumber: '',
        deliveryType: 'Доставка',
        address: '',
        floor: null,
        intercom: null,
    });

    const handleInputValue = (key: keyof IDeliveryRequestStucture, value: string | number | DeliveryType) => {
        setDeliveryRequest(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const renderInput = (key: keyof IDeliveryRequestStucture, placeholder: string, type: 'text' | 'number' = 'text') => (
        <input
        type={type}
        placeholder={placeholder}
        value={deliveryRequest[key] as string | number}
        onChange={e =>
            handleInputValue(
                key,
                type === 'number' ? Number(e.target.value) : e.target.value
            )
        }
        />
    );

    return (
        <div className={`delivery-menu-block ${isOpen ? '__opened' : '__closed'}`}>
            <div className="delivery-menu-body">
                <div className="delivery-menu-image-block">
                    <img src={DeliveryPicture} alt="delivery picture" />
                </div>
                <div className="delivery-menu-form-block">
                    <button className='delivery-close-menu-button' onClick={onClose}></button>
                    <h2 className="delivery-menu-title">Доставка</h2>
                    <form action="#">
                        {renderInput('name', 'Ваше имя')}
                        {renderInput('phoneNumber', 'Телефон')}

                        <div className="delivery-menu-type-options">
                        {(['Самовывоз', 'Доставка'] as DeliveryType[]).map(option => (
                            <label key={option}>
                            <input
                                type="radio"
                                name="delivery"
                                value={option}
                                checked={deliveryRequest.deliveryType === option}
                                onChange={() => handleInputValue('deliveryType', option)}
                            />
                            {option}
                            </label>
                        ))}
                        </div>

                        {deliveryRequest.deliveryType === 'Доставка' && (
                        <>
                            {renderInput('address', 'Улица, дом, квартира')}
                            <div className='delivery-menu-additional-inputs'>
                            {renderInput('floor', 'Этаж', 'number')}
                            {renderInput('intercom', 'Домофон', 'number')}
                            </div>
                        </>
                        )}

                        <Button className="main-order-button" onClick={() => console.log('click')}>Оформить</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
