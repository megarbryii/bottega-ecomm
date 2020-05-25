import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    SET_FILTERED_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductWithQuery(fields) {
    return({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(id) {
    return ({
        type: SET_FILTERED_PRODUCTS_WITH_CATEGORY_ID,
        payload: id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
                {
                    id: 0,
                    title: 'All'
                },
                {
                    id: 1,
                    title: 'JavaScript'
                },
                {
                    id: 2,
                    title: 'UI/UX'
                },
                {
                    id: 3,
                    title: 'Linux'
                },
                {
                    id: 4,
                    title: 'UML'
                },
                {
                    id: 5,
                    title: 'Python'
                },
                {
                    id: 6,
                    title: 'Ruby'
                }
            ] 
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                id: 0,
                title: 'JavaScript in the Browser',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                id: 1,
                title: 'Graph Database',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                id: 2,
                title: 'Fullstack Development',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                id: 3,
                title: 'JavaScript Development',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                id: 4,
                title: 'User Interface Design',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                id: 5,
                title: 'User Experience Design',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                id: 6,
                title: 'Advanced Object Oriented Programming',
                description: 'This is a high quality sticker made for those programmers who are on the go, whether for you laptop, your laptop bag, or any other surface of your choice.',
                price: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}