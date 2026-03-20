import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initial state with an empty array of items
  },
  reducers: {
    // Adds a plant to the cart or increments quantity if it exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Removes an item from the cart based on the name passed in the payload
    removeItem: (state, action) => {
      // action.payload should be the string 'name' of the plant
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Updates the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporting the action creators for use in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer as default for store.js
export default CartSlice.reducer;