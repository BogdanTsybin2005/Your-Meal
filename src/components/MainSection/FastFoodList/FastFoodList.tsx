import React from "react";
import Button from "../../Button/Button";
import './FastFoodList.scss';



type FastFoodListType = {
    id: number;
    image: string;
    price: number;
    title: string;
    weight: number;
    category: string;
    quantity: number;
};

export type OrderForDataStructure = {
    id: number;
    image: string;
    title: string;
    price: number;
    weight: number;
    quantity: number;
}

type FastFoodListProps = {
    data: FastFoodListType[];
    allOrders: OrderForDataStructure[];
    upgradeOrderList: (callback: (prevOrders: OrderForDataStructure[]) => OrderForDataStructure[]) => void;
};


const FastFoodList: React.FC<FastFoodListProps> = ({data, upgradeOrderList}) => {
    return (
        <div>
            {data.length > 0 && <h2 className="main-base-category-title">{data[0].category}</h2>}
            <div className="main-fastfood-list">
                {data.map((item) => {
                    return (
                        <div key={item.id} className='main-fastfood-card'>
                            <div className="main-fastfood-image">
                                <img src={item.image} alt="img"/>
                            </div>
                            <div className="main-fastfood-text-info">
                                <div>
                                    <h2 className="main-fastfood-price">{item.price} сом</h2>
                                    <p className="main-fastfood-title">{item.title}</p>
                                </div>
                                <div>
                                    <p className="main-fast-food-weight">{item.weight}г</p>
                                    <Button 
                                        className={'main-card-button'} 
                                        onClick={() => {
                                            upgradeOrderList((prevOrders) => {
                                                return prevOrders.map(order =>
                                                    order.id === item.id
                                                    ? { ...order, quantity: order.quantity + 1 }
                                                    : order
                                                ).concat(prevOrders.some(order => order.id === item.id) ? [] : [{ 
                                                    id: item.id, 
                                                    image: item.image, 
                                                    title: item.title, 
                                                    price: item.price, 
                                                    weight: item.weight, 
                                                    quantity: 1 
                                                }]);
                                                });
                                          }}
                                    >Добавить</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FastFoodList;
