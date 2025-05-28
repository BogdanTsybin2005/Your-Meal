import './MainSection.scss';
import { useState, useEffect } from 'react';
import allFoodCategory from '../../data/categories';
import fastFoodData from '../../data/FastFoodData';
import CategoryList from './CategoryList/CategoryList';
import FastFoodList from './FastFoodList/FastFoodList';
import { OrderForDataStructure } from './FastFoodList/FastFoodList';
import OrderList from './OrderList/OrderList';



export default function MainSection() {
    const [selectedCategory, setSelectedCategory] = useState('Бургеры');
    const [orderList, setOrderList] = useState<OrderForDataStructure[]>([]);
    const [filteredData, setFilteredData] = useState(fastFoodData.filter(item => item.category === 'Бургеры'));

    useEffect(() => {
        const newFilteredData = fastFoodData.filter(item => item.category === selectedCategory);
        setFilteredData(newFilteredData);
    }, [selectedCategory]);
    
    return (
        <div className='main-section'>
            <CategoryList 
                data={allFoodCategory} 
                onCategorySelect={setSelectedCategory} 
                selectedCategory={selectedCategory} 
            />
            <div className="main-body-content">
                <OrderList data={orderList} upgradeOrderList={setOrderList} />

                <FastFoodList 
                    data={filteredData} 
                    allOrders={orderList} 
                    upgradeOrderList={(updateFunc) => {
                        setOrderList((prevOrders) => {
                            return updateFunc(prevOrders);;
                        });
                    }}
                />
            </div>
        </div>
    );
}
