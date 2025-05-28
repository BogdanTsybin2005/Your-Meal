import burger from '../assets/burger.webp';
import appetizers from '../assets/appetizers.webp';
import hotdog from '../assets/hotdog.avif';
import combo from '../assets/combo.webp';
import shawarma from '../assets/shawarma.jpg'
import Pizza from '../assets/pizza.avif';
import wok from '../assets/wok.jpg';
import desserts from '../assets/desserts.jpg';
import sauces from '../assets/sauces.jpg';



type FastFoodDataType = {
    id: number;
    image: string;
    price: number;
    title: string;
    weight: number;
    category: 'Бургеры' | 
        'Закуски' | 'Хот-доги' | 
        'Комбо' | 'Шаурма' | 
        'Пицца' | 'Вок' | 
        'Десерты' | 'Соусы';
    quantity: number;
}





const fastFoodData: FastFoodDataType[] = [
    { id: 1, image: burger, price: 689, title: 'Мясная бомба', weight: 520, category: 'Бургеры', quantity: 0 },
    { id: 2, image: burger, price: 499, title: 'Классический бургер', weight: 450, category: 'Бургеры', quantity: 0 },
    { id: 3, image: burger, price: 729, title: 'Острый бургер', weight: 500, category: 'Бургеры', quantity: 0 },
    { id: 4, image: burger, price: 799, title: 'Двойной чизбургер', weight: 550, category: 'Бургеры', quantity: 0 },
    { id: 5, image: burger, price: 679, title: 'Бургер с грибами', weight: 480, category: 'Бургеры', quantity: 0 },
    { id: 6, image: burger, price: 739, title: 'Бекон бургер', weight: 520, category: 'Бургеры', quantity: 0 },
    { id: 7, image: burger, price: 619, title: 'Вегетарианский бургер', weight: 450, category: 'Бургеры', quantity: 0 },
    { id: 8, image: burger, price: 599, title: 'Чикен бургер', weight: 430, category: 'Бургеры', quantity: 0 },
    { id: 9, image: burger, price: 649, title: 'Фиш бургер', weight: 440, category: 'Бургеры', quantity: 0 },
    { id: 10, image: appetizers, price: 199, title: 'Картофель фри', weight: 150, category: 'Закуски', quantity: 0 },
    { id: 11, image: appetizers, price: 249, title: 'Луковые кольца', weight: 180, category: 'Закуски', quantity: 0 },
    { id: 12, image: appetizers, price: 229, title: 'Наггетсы куриные', weight: 200, category: 'Закуски', quantity: 0 },
    { id: 13, image: appetizers, price: 279, title: 'Сырные палочки', weight: 200, category: 'Закуски', quantity: 0 },
    { id: 14, image: appetizers, price: 189, title: 'Кола 0.5 л', weight: 500, category: 'Закуски', quantity: 0 },
    { id: 15, image: appetizers, price: 189, title: 'Фанта 0.5 л', weight: 500, category: 'Закуски', quantity: 0 },
    { id: 16, image: appetizers, price: 229, title: 'Спрайт 0.5 л', weight: 500, category: 'Закуски', quantity: 0 },
    { id: 17, image: appetizers, price: 189, title: 'Апельсиновый сок', weight: 500, category: 'Закуски', quantity: 0 },
    { id: 18, image: hotdog, price: 299, title: 'Классический хот-дог', weight: 300, category: 'Хот-доги', quantity: 0 },
    { id: 19, image: hotdog, price: 349, title: 'Хот-дог с сыром', weight: 320, category: 'Хот-доги', quantity: 0 },
    { id: 20, image: hotdog, price: 379, title: 'Хот-дог с беконом', weight: 350, category: 'Хот-доги', quantity: 0 },
    { id: 21, image: hotdog, price: 329, title: 'Хот-дог с карамелизированным луком', weight: 340, category: 'Хот-доги', quantity: 0 },
    { id: 22, image: hotdog, price: 399, title: 'Хот-дог с чили', weight: 360, category: 'Хот-доги', quantity: 0 },
    { id: 23, image: combo, price: 799, title: 'Комбо: бургер + фри', weight: 670, category: 'Комбо', quantity: 0 },
    { id: 24, image: combo, price: 899, title: 'Комбо: пицца + кола', weight: 850, category: 'Комбо', quantity: 0 },
    { id: 25, image: combo, price: 749, title: 'Комбо: хот-дог + фри', weight: 620, category: 'Комбо', quantity: 0 },
    { id: 26, image: combo, price: 799, title: 'Комбо: шаурма + напиток', weight: 700, category: 'Комбо', quantity: 0 },
    { id: 27, image: combo, price: 749, title: 'Комбо: бургер + напиток', weight: 650, category: 'Комбо', quantity: 0 },
    { id: 28, image: shawarma, price: 399, title: 'Шаурма классическая', weight: 480, category: 'Шаурма', quantity: 0 },
    { id: 29, image: shawarma, price: 449, title: 'Шаурма по-кавказски', weight: 500, category: 'Шаурма', quantity: 0 },
    { id: 30, image: shawarma, price: 479, title: 'Шаурма XXL', weight: 600, category: 'Шаурма', quantity: 0 },
    { id: 31, image: shawarma, price: 359, title: 'Шаурма с сыром', weight: 450, category: 'Шаурма', quantity: 0 },
    { id: 32, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма', quantity: 0 },
    { id: 33, image: Pizza, price: 699, title: 'Пицца Пепперони', weight: 600, category: 'Пицца', quantity: 0 },
    { id: 34, image: Pizza, price: 649, title: 'Пицца Маргарита', weight: 580, category: 'Пицца', quantity: 0 },
    { id: 35, image: Pizza, price: 749, title: 'Пицца Четыре сыра', weight: 620, category: 'Пицца', quantity: 0 },
    { id: 36, image: Pizza, price: 799, title: 'Пицца с ветчиной и грибами', weight: 640, category: 'Пицца', quantity: 0 },
    { id: 37, image: Pizza, price: 399, title: 'Мини пицца', weight: 300, category: 'Пицца', quantity: 0 },
    { id: 38, image: wok, price: 499, title: 'Вок с курицей', weight: 400, category: 'Вок', quantity: 0 },
    { id: 39, image: wok, price: 449, title: 'Вок с овощами', weight: 380, category: 'Вок', quantity: 0 },
    { id: 40, image: wok, price: 529, title: 'Вок с говядиной', weight: 420, category: 'Вок', quantity: 0 },
    { id: 41, image: wok, price: 519, title: 'Вок с креветками', weight: 430, category: 'Вок', quantity: 0 },
    { id: 42, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок', quantity: 0 },
    { id: 43, image: desserts, price: 299, title: 'Тирамису', weight: 150, category: 'Десерты', quantity: 0 },
    { id: 44, image: desserts, price: 329, title: 'Чизкейк', weight: 170, category: 'Десерты', quantity: 0 },
    { id: 45, image: desserts, price: 349, title: 'Брауни', weight: 180, category: 'Десерты', quantity: 0 },
    { id: 46, image: desserts, price: 269, title: 'Мини чизкейк', weight: 120, category: 'Десерты', quantity: 0 },
    { id: 47, image: desserts, price: 329, title: 'Клубничный молочный коктейль', weight: 300, category: 'Десерты', quantity: 0 },
    { id: 48, image: desserts, price: 199, title: 'Молочный коктейль', weight: 300, category: 'Десерты', quantity: 0 },
    { id: 49, image: desserts, price: 359, title: 'Пудинг с карамелью', weight: 200, category: 'Десерты', quantity: 0 },
    { id: 50, image: desserts, price: 389, title: 'Фруктовый салат', weight: 250, category: 'Десерты', quantity: 0 },
    { id: 51, image: desserts, price: 349, title: 'Маффин с черникой', weight: 160, category: 'Десерты', quantity: 0 },
    { id: 52, image: desserts, price: 379, title: 'Шоколадный мусс', weight: 180, category: 'Десерты', quantity: 0},
    { id: 53, image: desserts, price: 309, title: 'Яблочный пирог', weight: 220, category: 'Десерты', quantity: 0 },
    { id: 54, image: desserts, price: 279, title: 'Блинчики с творогом', weight: 200, category: 'Десерты', quantity: 0 },
    { id: 55, image: desserts, price: 329, title: 'Мороженое ванильное', weight: 180, category: 'Десерты', quantity: 0 },
    { id: 56, image: desserts, price: 369, title: 'Мороженое с шоколадом', weight: 200, category: 'Десерты', quantity: 0 },
    { id: 57, image: desserts, price: 309, title: 'Яблочный пирог', weight: 220, category: 'Десерты', quantity: 0 },
    { id: 58, image: sauces, price: 49, title: 'Кетчуп', weight: 50, category: 'Соусы', quantity: 0 },
    { id: 59, image: sauces, price: 49, title: 'Горчица', weight: 50, category: 'Соусы', quantity: 0 },
    { id: 60, image: sauces, price: 59, title: 'Чесночный соус', weight: 60, category: 'Соусы', quantity: 0 },
    { id: 61, image: sauces, price: 69, title: 'Барбекю', weight: 70, category: 'Соусы', quantity: 0 },
    { id: 62, image: sauces, price: 59, title: 'Сырный соус', weight: 65, category: 'Соусы', quantity: 0 },
    { id: 63, image: sauces, price: 79, title: 'Тар-тар', weight: 80, category: 'Соусы', quantity: 0 },
    { id: 64, image: sauces, price: 69, title: 'Соус чили', weight: 55, category: 'Соусы', quantity: 0 },
    { id: 65, image: sauces, price: 89, title: 'Песто', weight: 75, category: 'Соусы', quantity: 0 },
    { id: 66, image: sauces, price: 59, title: 'Сметанный соус', weight: 60, category: 'Соусы', quantity: 0 },
    { id: 67, image: sauces, price: 49, title: 'Майонез', weight: 50, category: 'Соусы', quantity: 0 },
    { id: 68, image: sauces, price: 59, title: 'Сметанный соус', weight: 60, category: 'Соусы', quantity: 0 },
    { id: 69, image: Pizza, price: 699, title: 'Пицца Пепперони', weight: 600, category: 'Пицца', quantity: 0 },
    { id: 70, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок', quantity: 0 },
    { id: 71, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок', quantity: 0 },
    { id: 72, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок', quantity: 0 },
    { id: 73, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок', quantity: 0 },
    { id: 74, image: combo, price: 749, title: 'Комбо: бургер + напиток', weight: 650, category: 'Комбо', quantity: 0 },
    { id: 75, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма', quantity: 0 },
    { id: 76, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма', quantity: 0 },
    { id: 77, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма', quantity: 0 },
    { id: 78, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма', quantity: 0 },
    { id: 79, image: hotdog, price: 299, title: 'Классический хот-дог', weight: 300, category: 'Хот-доги', quantity: 0 },
    { id: 80, image: sauces, price: 59, title: 'Сметанный соус', weight: 60, category: 'Соусы', quantity: 0 },
    { id: 81, image: appetizers, price: 189, title: 'Апельсиновый сок', weight: 500, category: 'Закуски', quantity: 0 },
];

export default fastFoodData;
