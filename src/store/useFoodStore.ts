import { create } from 'zustand';
import fastFoodData from '../data/FastFoodData';
import { FastFoodDataType } from '../data/FastFoodData';



export type OrderForDataStructure = Omit<FastFoodDataType, 'category'>;

interface FoodState {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    orderList: OrderForDataStructure[];
    updateOrderList: (update: (prev: OrderForDataStructure[]) => OrderForDataStructure[]) => void;
    getFilteredData: () => FastFoodDataType[];
}

const useFoodStore = create<FoodState>((set, get) => ({
    selectedCategory: 'Бургеры',
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    orderList: [],
    updateOrderList: (update) => set((state) => ({ orderList: update(state.orderList) })),
    getFilteredData: () => {
        const { selectedCategory } = get();
        return fastFoodData.filter((item) => item.category === selectedCategory);
    },
}));

export default useFoodStore;
