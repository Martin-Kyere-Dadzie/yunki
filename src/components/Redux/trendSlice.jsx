// import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const trendSlice = createSlice({
    name: 'topTrends',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showTrend: false
    },
    reducers: {
        addToTrends(state, action) {
            const newItem = action.payload;
            //first check if product already exist
            const existingItem = state.itemList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    oldPrice: newItem.oldPrice,
                    price: newItem.price,
                    quantity: 1,
                    productName: newItem.name,
                    images: newItem.images,
                    name: newItem.name,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    colors: newItem.color,
                    discount: newItem.discount,
                    newProduct: newItem.newProduct,
                    ratings: newItem.ratings,
                });   
                state.totalQuantity++;
            }
        },
        removeFromBag(state, action) {
            const id =action.payload;
            
            const existingItem = state.itemList.find(item => item.id === id);
            if(existingItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id);
                state.totalQuantity --;
            }else{
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        deleteFromBag(state, action) {
            const id = action.payload;

            const existingItem = state.itemList.find(item => item.id === id);
            if(existingItem) {
                state.totalQuantity --;
                existingItem.quantity ;
            }
        }
    }
})

export const trendActions = trendSlice.actions;

export default trendSlice;