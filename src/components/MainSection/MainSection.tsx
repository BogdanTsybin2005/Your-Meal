import './MainSection.scss';
import { useMemo } from 'react';
import allFoodCategory from '../../data/categories';
import fastFoodData from '../../data/FastFoodData';
import CategoryList from './CategoryList/CategoryList';
import FastFoodList from './FastFoodList/FastFoodList';
import OrderList from './OrderList/OrderList';
import useFoodStore from '../../store/useFoodStore';



export default function MainSection() {
    const {
        selectedCategory,
        setSelectedCategory,
        orderList,
        updateOrderList,
    } = useFoodStore();

    const filteredData = useMemo(
        () => fastFoodData.filter((item) => item.category === selectedCategory),
        [selectedCategory]
    );
    
    return (
        <div className="main-section">
            <CategoryList
                data={allFoodCategory}
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
            />
            <div className="main-body-content">
                <OrderList data={orderList} upgradeOrderList={updateOrderList} />

                <FastFoodList
                    data={filteredData}
                    allOrders={orderList}
                    upgradeOrderList={updateOrderList}
                />
            </div>
        </div>
    );
}
