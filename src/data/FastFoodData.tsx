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
}





const fastFoodData: FastFoodDataType[] = [
    { id: 1, image: burger, price: 689, title: 'Мясная бомба', weight: 520, category: 'Бургеры' },
    { id: 2, image: burger, price: 499, title: 'Классический бургер', weight: 450, category: 'Бургеры' },
    { id: 3, image: burger, price: 729, title: 'Острый бургер', weight: 500, category: 'Бургеры' },
    { id: 4, image: burger, price: 799, title: 'Двойной чизбургер', weight: 550, category: 'Бургеры' },
    { id: 5, image: burger, price: 679, title: 'Бургер с грибами', weight: 480, category: 'Бургеры' },
    { id: 6, image: burger, price: 739, title: 'Бекон бургер', weight: 520, category: 'Бургеры' },
    { id: 7, image: burger, price: 619, title: 'Вегетарианский бургер', weight: 450, category: 'Бургеры' },
    { id: 8, image: burger, price: 599, title: 'Чикен бургер', weight: 430, category: 'Бургеры' },
    { id: 9, image: burger, price: 649, title: 'Фиш бургер', weight: 440, category: 'Бургеры' },
    { id: 10, image: appetizers, price: 199, title: 'Картофель фри', weight: 150, category: 'Закуски' },
    { id: 11, image: appetizers, price: 249, title: 'Луковые кольца', weight: 180, category: 'Закуски' },
    { id: 12, image: appetizers, price: 229, title: 'Наггетсы куриные', weight: 200, category: 'Закуски' },
    { id: 13, image: appetizers, price: 279, title: 'Сырные палочки', weight: 200, category: 'Закуски' },
    { id: 14, image: appetizers, price: 189, title: 'Кола 0.5 л', weight: 500, category: 'Закуски' },
    { id: 15, image: appetizers, price: 189, title: 'Фанта 0.5 л', weight: 500, category: 'Закуски' },
    { id: 16, image: appetizers, price: 229, title: 'Спрайт 0.5 л', weight: 500, category: 'Закуски' },
    { id: 17, image: appetizers, price: 189, title: 'Апельсиновый сок', weight: 500, category: 'Закуски' },
    { id: 18, image: hotdog, price: 299, title: 'Классический хот-дог', weight: 300, category: 'Хот-доги' },
    { id: 19, image: hotdog, price: 349, title: 'Хот-дог с сыром', weight: 320, category: 'Хот-доги' },
    { id: 20, image: hotdog, price: 379, title: 'Хот-дог с беконом', weight: 350, category: 'Хот-доги' },
    { id: 21, image: hotdog, price: 329, title: 'Хот-дог с карамелизированным луком', weight: 340, category: 'Хот-доги' },
    { id: 22, image: hotdog, price: 399, title: 'Хот-дог с чили', weight: 360, category: 'Хот-доги' },
    { id: 23, image: combo, price: 799, title: 'Комбо: бургер + фри', weight: 670, category: 'Комбо' },
    { id: 24, image: combo, price: 899, title: 'Комбо: пицца + кола', weight: 850, category: 'Комбо' },
    { id: 25, image: combo, price: 749, title: 'Комбо: хот-дог + фри', weight: 620, category: 'Комбо' },
    { id: 26, image: combo, price: 799, title: 'Комбо: шаурма + напиток', weight: 700, category: 'Комбо' },
    { id: 27, image: combo, price: 749, title: 'Комбо: бургер + напиток', weight: 650, category: 'Комбо' },
    { id: 28, image: shawarma, price: 399, title: 'Шаурма классическая', weight: 480, category: 'Шаурма' },
    { id: 29, image: shawarma, price: 449, title: 'Шаурма по-кавказски', weight: 500, category: 'Шаурма' },
    { id: 30, image: shawarma, price: 479, title: 'Шаурма XXL', weight: 600, category: 'Шаурма' },
    { id: 31, image: shawarma, price: 359, title: 'Шаурма с сыром', weight: 450, category: 'Шаурма' },
    { id: 32, image: shawarma, price: 389, title: 'Шаурма с грибами', weight: 470, category: 'Шаурма' },
    { id: 33, image: Pizza, price: 699, title: 'Пицца Пепперони', weight: 600, category: 'Пицца' },
    { id: 34, image: Pizza, price: 649, title: 'Пицца Маргарита', weight: 580, category: 'Пицца' },
    { id: 35, image: Pizza, price: 749, title: 'Пицца Четыре сыра', weight: 620, category: 'Пицца' },
    { id: 36, image: Pizza, price: 799, title: 'Пицца с ветчиной и грибами', weight: 640, category: 'Пицца' },
    { id: 37, image: Pizza, price: 399, title: 'Мини пицца', weight: 300, category: 'Пицца' },
    { id: 38, image: wok, price: 499, title: 'Вок с курицей', weight: 400, category: 'Вок' },
    { id: 39, image: wok, price: 449, title: 'Вок с овощами', weight: 380, category: 'Вок' },
    { id: 40, image: wok, price: 529, title: 'Вок с говядиной', weight: 420, category: 'Вок' },
    { id: 41, image: wok, price: 519, title: 'Вок с креветками', weight: 430, category: 'Вок' },
    { id: 42, image: wok, price: 479, title: 'Вок с тофу', weight: 390, category: 'Вок' },
    { id: 43, image: desserts, price: 299, title: 'Тирамису', weight: 150, category: 'Десерты' },
    { id: 44, image: desserts, price: 329, title: 'Чизкейк', weight: 170, category: 'Десерты' },
    { id: 45, image: desserts, price: 349, title: 'Брауни', weight: 180, category: 'Десерты' },
    { id: 46, image: desserts, price: 269, title: 'Мини чизкейк', weight: 120, category: 'Десерты' },
    { id: 47, image: desserts, price: 329, title: 'Клубничный молочный коктейль', weight: 300, category: 'Десерты' },
    { id: 48, image: desserts, price: 199, title: 'Молочный коктейль', weight: 300, category: 'Десерты' },
    { id: 49, image: desserts, price: 359, title: 'Пудинг с карамелью', weight: 200, category: 'Десерты' },
    { id: 50, image: desserts, price: 389, title: 'Фруктовый салат', weight: 250, category: 'Десерты' },
    { id: 51, image: desserts, price: 349, title: 'Маффин с черникой', weight: 160, category: 'Десерты' },
    { id: 52, image: desserts, price: 379, title: 'Шоколадный мусс', weight: 180, category: 'Десерты' },
    { id: 53, image: desserts, price: 309, title: 'Яблочный пирог', weight: 220, category: 'Десерты' },
    { id: 54, image: desserts, price: 279, title: 'Блинчики с творогом', weight: 200, category: 'Десерты' },
    { id: 55, image: desserts, price: 329, title: 'Мороженое ванильное', weight: 180, category: 'Десерты' },
    { id: 56, image: desserts, price: 369, title: 'Мороженое с шоколадом', weight: 200, category: 'Десерты' },
    { id: 57, image: desserts, price: 339, title: 'Торт Наполеон', weight: 250, category: 'Десерты' },
    { id: 58, image: desserts, price: 319, title: 'Панакота', weight: 190, category: 'Десерты' },
    { id: 59, image: desserts, price: 349, title: 'Эклеры', weight: 180, category: 'Десерты' },
    { id: 60, image: desserts, price: 399, title: 'Торт Прага', weight: 270, category: 'Десерты' },
    { id: 61, image: desserts, price: 419, title: 'Торт Медовик', weight: 260, category: 'Десерты' },
    { id: 62, image: desserts, price: 289, title: 'Маффин с шоколадом', weight: 150, category: 'Десерты' },
    { id: 63, image: desserts, price: 359, title: 'Кекс с изюмом', weight: 170, category: 'Десерты' },
    { id: 64, image: desserts, price: 399, title: 'Карамельный торт', weight: 240, category: 'Десерты' },
    { id: 65, image: desserts, price: 319, title: 'Мусс из манго', weight: 180, category: 'Десерты' },
    { id: 66, image: desserts, price: 289, title: 'Фруктовый йогурт', weight: 200, category: 'Десерты' },
    { id: 67, image: desserts, price: 349, title: 'Кокосовый пудинг', weight: 210, category: 'Десерты' },
    { id: 68, image: desserts, price: 379, title: 'Торт Черный лес', weight: 280, category: 'Десерты' },
    { id: 69, image: desserts, price: 299, title: 'Крем-брюле', weight: 160, category: 'Десерты' },
    { id: 70, image: desserts, price: 329, title: 'Лимонный тарт', weight: 170, category: 'Десерты' },
    { id: 71, image: desserts, price: 289, title: 'Йогуртовый десерт', weight: 150, category: 'Десерты' },
    { id: 72, image: desserts, price: 399, title: 'Торт Зебра', weight: 260, category: 'Десерты' },
    { id: 73, image: desserts, price: 349, title: 'Клубничный тарт', weight: 200, category: 'Десерты' },
    { id: 74, image: desserts, price: 369, title: 'Кекс с бананом', weight: 180, category: 'Десерты' },
    { id: 75, image: desserts, price: 409, title: 'Шоколадный кекс', weight: 190, category: 'Десерты' },
    { id: 76, image: desserts, price: 289, title: 'Вишневый пирог', weight: 210, category: 'Десерты' },
    { id: 77, image: desserts, price: 319, title: 'Персиковый тарт', weight: 200, category: 'Десерты' },
    { id: 78, image: desserts, price: 349, title: 'Апельсиновый пирог', weight: 230, category: 'Десерты' },
    { id: 79, image: desserts, price: 379, title: 'Миндальный кекс', weight: 220, category: 'Десерты' },
    { id: 80, image: desserts, price: 399, title: 'Торт Муравейник', weight: 240, category: 'Десерты' },
    { id: 81, image: sauces, price: 49, title: 'Кетчуп', weight: 50, category: 'Соусы' },
    { id: 82, image: sauces, price: 49, title: 'Горчица', weight: 50, category: 'Соусы' },
    { id: 83, image: sauces, price: 59, title: 'Чесночный соус', weight: 60, category: 'Соусы' },
    { id: 84, image: sauces, price: 69, title: 'Барбекю', weight: 70, category: 'Соусы' },
    { id: 85, image: sauces, price: 59, title: 'Сырный соус', weight: 65, category: 'Соусы' },
    { id: 86, image: sauces, price: 79, title: 'Тар-тар', weight: 80, category: 'Соусы' },
    { id: 87, image: sauces, price: 69, title: 'Соус чили', weight: 55, category: 'Соусы' },
    { id: 88, image: sauces, price: 89, title: 'Песто', weight: 75, category: 'Соусы' },
    { id: 89, image: sauces, price: 59, title: 'Сметанный соус', weight: 60, category: 'Соусы' },
    { id: 90, image: sauces, price: 49, title: 'Майонез', weight: 50, category: 'Соусы' },
    { id: 91, image: sauces, price: 59, title: 'Сметанный соус', weight: 60, category: 'Соусы' },
];

export default fastFoodData;
