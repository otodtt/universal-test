const pages = [
    {
        id: 0,
        name: 'въведение',
        link: 'introduction',
        subPage: null
    },
    {
        id: 1,
        name: 'зърненожитни',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Житни',
                link: 'grains/cereals'
            },
            {
                id: 1,
                subName: 'Царевица',
                link: 'grains/maize'
            },
            {
                id: 2,
                subName: 'Ориз',
                link: 'grains/rice'
            }
        ],
    },
    {
        id: 2,
        name: 'бобови',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Фасул',
                link: 'beans/bean'
            },
            {
                id: 1,
                subName: 'Бакла',
                link: 'beans/faba-bean'
            },
            {
                id: 2,
                subName: 'Грах',
                link: 'beans/pea'
            },
            {
                id: 3,
                subName: 'Соя',
                link: 'beans/soybean'
            }
        ],
    },
    /** Няма я таблицата за фъстъци. Ако се намери ще я сложа */
    {
        id: 3,
        name: 'технически култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Слънчоглед',
                link: 'technical/sunflower'
            },
            {
                id: 1,
                subName: 'Рапица',
                link: 'technical/oilseed-rape'
            },
            {
                id: 2,
                subName: 'Цвекло',
                link: 'technical/beet'
            },
            {
                id: 3,
                subName: 'Хмел',
                link: 'technical/hop'
            },
            {
                id: 4,
                subName: 'Памук',
                link: 'technical/cotton'
            },
        ],
    },
    {
        id: 4,
        name: 'зеленчуци',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Картофи',
                link: 'vegetables/potato'
            },
            {
                id: 1,
                subName: 'Домати, патладжан, пипер',
                link: 'vegetables/solanaceous-fruits'
            },
            {
                id: 2,
                subName: 'Тиквови култури',
                link: 'vegetables/cucurbits'
            },
            {
                id: 3,
                subName: 'Зелеви култури',
                link: 'vegetables/brassica'
            },
            {
                id: 4,
                subName: 'Листни зеленчуци',
                link: 'vegetables/leaf-vegetables'
            },
            {
                id: 5,
                subName: 'Други Зелеви',
                link: 'vegetables/other-brassica'
            },
            {
                id: 6,
                subName: 'Коренови и стъблени',
                link: 'vegetables/root-and-stem'
            },
            {
                id: 7,
                subName: 'Лукови култури',
                link: 'vegetables/bulb-vegetables'
            }
        ],
    },
    {
        id: 5,
        name: 'овощни култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Семкови овощни видове',
                link: 'fruids/pome-fruit'
            },
            {
                id: 1,
                subName: 'Костилкови овощни видове',
                link: 'fruids/stone-fruit'
            }
        ],
    },
    {
        id: 6,
        name: 'ягодоплодни',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Ягода',
                link: 'strawberry/fragaria'
            },
            {
                id: 1,
                subName: 'Касис',
                link: 'strawberry/currants'
            }
        ],
    },
    {
        id: 7,
        name: 'лоза',
        link: 'grapevine',
        subPage: null
    },
    {
        id: 8,
        name: 'цитруси',
        link: 'citrus',
        subPage: null
    },
    {
        id: 9,
        name: 'плевели',
        link: 'weed-species',
        subPage: null
    },
];

export default pages;
