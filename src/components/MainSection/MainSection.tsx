import './MainSection.scss';
import allFoodCategory from '../../data/categories';
import fastFoodData from '../../data/FastFoodData';
import CategoryList from './CategoryList/CategoryList';
import FastFoodList from './FastFoodList/FastFoodList';
import { useState } from 'react';

export default function MainSection() {
    const [selectedCategory, setSelectedCategory] = useState('Бургеры');

    const filteredData = selectedCategory === 'Бургеры'
        ? fastFoodData.filter(item => item.category === 'Бургеры')
        : fastFoodData.filter(item => item.category === selectedCategory);

    return (
        <div className='main-section'>
            <CategoryList 
                data={allFoodCategory} 
                onCategorySelect={setSelectedCategory} 
                selectedCategory={selectedCategory} 
            />

            <div className="main-body-content">
                <aside className='main-food-basket'>
                    <div className="main-food-basket-bloc">
                        <h2 className="main-food-basket-title">Корзина</h2>
                        <span className="main-food-basket-counter">4</span>
                    </div>
                </aside>
                <FastFoodList data={filteredData} />
            </div>

        </div>
    );
}
