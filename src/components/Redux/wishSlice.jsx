import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const wishSlice = createSlice({
    name: 'wishListed',
    initialState: {
        wishlist: [],
        totalQuantity: 0,
        showWish: false
    },
    reducers: {
        addToWish : (state, action) => {
            const newItem = action.payload;

            const existingItem = state.wishlist.find((item) => item.id === newItem.id);
            console.log(existingItem);
            

            if (existingItem) {
                prompt('product already exist in your wishlist')
            } else {
                state.wishlist.push({
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
                })
                state.totalQuantity++;
            }
        },
        setShowWish : (state) => {
            state.showWish = true;
        }
    }
})

export const wishActions = wishSlice.actions;
export default wishSlice;