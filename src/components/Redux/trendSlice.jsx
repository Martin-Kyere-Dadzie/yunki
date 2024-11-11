// import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import Ratings from '../Ratings/Ratings';

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
                existingItem.totalPrice += existingItem.newPrice;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    oldPrice: newItem.oldPrice,
                    newPrice: newItem.newPrice,
                    quantity: 1,
                    totalPrice: newItem.newPrice,
                    productName: newItem.name,
                    images: newItem.images,
                    name: newItem.name,
                    // image1: newItem.image1,
                    title: newItem.title,
                    colors: newItem.color,
                    discount: newItem.discount,
                    newProduct: newItem.newProduct,
                    ratings: newItem.ratings,
                    // priceTag: newItem.priceTag,
                });   
                state.totalQuantity++;
            }
        }
    }
})

export const trendActions = trendSlice.actions;

export default trendSlice;