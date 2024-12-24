import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const wishSlice = createSlice({
    name: 'wishListed',
    initialState: {
        wishlist: [],
        numOfWish: 0,
        showWish: false
    },
    reducers: {
        addToWish : (state, action) => {
            const newWish = action.payload;

            const existingWish = state.wishlist.find((item) => item.id === newWish.id);
            console.log(existingWish);
            

            if (existingWish) {
                // const errMessage = 'Product already exist in your wishlist';
                // return errMessage;
                prompt('product already exist in your wishlist');
            } else {
                state.wishlist.push({
                    id: newWish.id,
                    oldPrice: newWish.oldPrice,
                    price: newWish.price,
                    quantity: 1,
                    productName: newWish.name,
                    images: newWish.images,
                    name: newWish.name,
                    totalPrice: newWish.price,
                    title: newWish.title,
                    colors: newWish.color,
                    discount: newWish.discount,
                    newProduct: newWish.newProduct,
                    ratings: newWish.ratings,
                })
                state.numOfWish++;
            }
        },
        deleteFromWish : (state, action) => {
            const id = action.payload;

            state.wishlist = state.wishlist.filter(item => item.id !== id);
            state.numOfWish --;
        },
        // setShowWish : (state) => {
        //     state.showWish = true;
        // }
    }
})

export const wishActions = wishSlice.actions;
export default wishSlice; 