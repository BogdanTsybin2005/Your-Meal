import './OrderList.scss';
import React, { useState, memo } from 'react';
import Button from "../../Button/Button";
import DeliveryIcon from '../../../assets/delivery-icon.png'




type FoodForOrder = {
    id: number;
    image: string;
    title: string;
    price: number;
    weight: number;
    quantity: number;
};

type DataOrderType = {
    data: FoodForOrder[];
    upgradeOrderList: (callback: (prevOrders: FoodForOrder[]) => FoodForOrder[]) => void;
};

const OrderList: React.FC<DataOrderType> = memo(({ data, upgradeOrderList }) => {
    const [isOrderListHidden, setIsOrderListHidden] = useState(false);
    const totalAmount = data.map(item => item.quantity).reduce((start, item) => start + item, 0)
    
    

    return (
        <>
            <aside className={`main-food-basket ${data.length === 0 ? 'border-bottom-radius' : ''}`}>
                <div className="main-food-basket-block" onClick={() => setIsOrderListHidden(!isOrderListHidden)}>
                    <h2 className="main-food-basket-title">Корзина</h2>
                    <span className="main-food-basket-counter">{totalAmount}</span>
                </div>
                {data.length > 0 && <div className="main-food-basket-decorative-line" />}
                {data.length === 0 ? (
                    <p className="main-text-empty">{'Тут пока пусто :('}</p>
                ) : (
                    <div className={`main-food-basket-list ${data.length > 0 ? '__hidden' : '__shown'}`}>
                        {data.map((item) => (
                            <div key={item.id} className="main-food-basket-item">
                                <div className="main-food-basket-info">
                                    <div className="main-food-basket-image">
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                {item.title.length >= 15 ? `${item.title.substring(0, 10)}...` : item.title}
                                            </span>
                                            <span>{item.weight}г</span>
                                        </div>
                                        <span>{item.price}₽</span>
                                    </div>
                                </div>
                                <div className="main-food-basket-counter">
                                    <button
                                        onClick={() => {
                                            upgradeOrderList((prevOrders) => {
                                                return prevOrders.map(order =>
                                                    order.id === item.id
                                                        ? { ...order, quantity: order.quantity - 1 }
                                                        : order
                                                )
                                                .filter(order => order.quantity > 0);
                                            });
                                        }}
                                    >–</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => {
                                            upgradeOrderList((prevOrders) => {
                                                return prevOrders.map(order =>
                                                    order.id === item.id
                                                        ? { ...order, quantity: order.quantity + 1 }
                                                        : order
                                                );
                                            });
                                        }}>+</button>
                                </div>
                            </div>
                        ))}
                        <div className="main-food-list-order-info">
                            {data.length > 0 && <div className="main-food-basket-decorative-line" />}
                            <div className="main-food-list-total-price-block">
                                <h2 className="main-food-list-total-price-title">Итого</h2>
                                <p className="main-food-list-total-price">
                                    {data.reduce((total, item) => total + item.price * item.quantity, 0)}₽
                                </p>
                            </div>
                            <Button className={'main-order-button'} onClick={() => console.log('click')}>
                                Оформить заказ
                            </Button>
                            <div className="main-food-list-delivery-block">
                                <img src={DeliveryIcon} alt="delivery icon" width={24} height={24}/>
                                <p>Бесплатная доставка</p>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
});

export default OrderList;
