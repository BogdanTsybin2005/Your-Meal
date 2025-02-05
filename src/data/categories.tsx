import Burger from "../assets/svg/Burger";
import Appetizers from "../assets/svg/Appetizers";
import HotDog from "../assets/svg/HotDog";
import Combo from "../assets/svg/Combo";
import Shawarma from "../assets/svg/Shawarma";
import Pizza from "../assets/svg/Pizza";
import Wok from "../assets/svg/Wok";
import Desserts from "../assets/svg/Desserts";
import Ketchup from "../assets/svg/Ketchup";


type FoodCategoryType = {
    id: number, 
    title: string, 
    image: React.FC
}

const allFoodCategory: FoodCategoryType[] = [
    {
        id: 1,
        title: 'Бургеры',
        image: Burger
    },
    {
        id: 2,
        title: 'Закуски',
        image: Appetizers
    },
    {
        id: 3,
        title: 'Хот-доги',
        image: HotDog
    },
    {
        id: 4,
        title: 'Комбо',
        image: Combo
    },
    {
        id: 5,
        title: 'Шаурма',
        image: Shawarma
    },
    {
        id: 6,
        title: 'Пицца',
        image: Pizza
    },
    {
        id: 7,
        title: 'Вок',
        image: Wok
    },
    {
        id: 8,
        title: 'Десерты',
        image: Desserts
    },
    {
        id: 9,
        title: 'Соусы',
        image: Ketchup
    },
]


export default allFoodCategory;
