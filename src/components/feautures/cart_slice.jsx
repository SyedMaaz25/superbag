import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: [],
  message: null,
  totalPrice: 0,
  quantity: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);

      if (index !== -1) {
        const matchedProduct = state.products[index];
        if (matchedProduct.quantity < matchedProduct.stock) {
          matchedProduct.quantity++;
        } else {
          state.products[index].quantity = matchedProduct.stock;
          state.message = `Only ${matchedProduct.stock} stocks are remaining for ${matchedProduct.name}`;
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        // state.totalPrice = state.products.reduce(
        //   (total, product) => total + product.quantity * product.price,
        //   0
        // );
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const matchedProduct = state.products.find(
        (product) => product.id === id
      );

      if (matchedProduct && matchedProduct.quantity < matchedProduct.stock) {
        matchedProduct.quantity++;

        // Recalculate the totalPrice based on all products
        state.totalPrice = state.products.reduce(
          (total, product) => total + product.quantity * product.price,
          0
        );
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const matchedProduct = state.products.find(
        (product) => product.id === id
      );

      if (matchedProduct && matchedProduct.quantity > 1) {
        matchedProduct.quantity--;

        // Recalculate the totalPrice based on all products
        state.totalPrice = state.products.reduce(
          (total, product) => total + product.quantity * product.price,
          0
        );
      }
    },
    selectedCartProduct: (state, action) => {
      const { id } = action.payload;
      const isSelected = state.selectedProduct.includes(id);

      if (isSelected) {
        // If already selected, unselect it
        state.selectedProduct = state.selectedProduct.filter(
          (productId) => productId !== id
        );
      } else {
        // If not selected, select it
        state.selectedProduct.push(id);
      }
      // Recalculate the totalPrice based on all selected products
      state.totalPrice = state.products.reduce((total, product) => {
        if (state.selectedProduct.includes(product.id)) {
          return total + product.quantity * product.price;
        } else {
          return total;
        }
      }, 0);
    },
    increaseSingleQuantity: (state, action) => {
      state.quantity++;
    },
  },
});

export const {
  addToCart,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  selectedCartProduct,
  increaseSingleQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;