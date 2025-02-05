import React from "react";
import './FastFoodList.scss';


type FastFoodListType = {
    id: number;
    image: string;
    price: number;
    title: string;
    weight: number;
    category: string;
};

type FastFoodListProp = {
    data: FastFoodListType[];
};

const FastFoodList: React.FC<FastFoodListProp> = ({data}) => {
    return (
        <div>
            <h2 className="main-base-category-title">{data[0].category}</h2>
            <div className="main-fastfood-list">
                {data.map((item) => {
                    return (
                        <div key={item.id} className='main-fastfood-card'>
                            <div className="main-fastfood-image">
                                <img src={item.image} alt="img"/>
                            </div>
                            <div className="main-fastfood-text-info">
                                <div>
                                    <h2 className="main-fastfood-price">{item.price}₽</h2>
                                    <p className="main-fastfood-title">{item.title}</p>
                                </div>
                                <div>
                                    <p className="main-fast-food-weight">{item.weight}г</p>
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
