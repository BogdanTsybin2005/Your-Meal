import React, { memo, useMemo } from 'react';
import './CategoryList.scss';


type CategoryItem = {
    id: number;
    title: string;
    image: React.FC; 
};


type CategoryListProps = {
    data: CategoryItem[];
    onCategorySelect: (category: string) => void;
    selectedCategory: string;
};

const CategoryList: React.FC<CategoryListProps> = ({ data, onCategorySelect, selectedCategory }) => {
    const list = useMemo(() => data, [data]);

    return (
        <ul className="main-categories-list">
            {list.map((item) => {
                const CategoryIcon = item.image;
                return (
                    <li key={item.id}>
                        <button
                            className={`main-category-button ${selectedCategory === item.title ? '__active' : ''}`}
                            onClick={() => onCategorySelect(item.title)}>
                            <span>{item.title}</span>
                            <CategoryIcon />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default memo(CategoryList);
