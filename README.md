# E-commerce App with Redux Toolkit

This project is a sample e-commerce application built with React and Redux Toolkit. It demonstrates how to use Redux Toolkit for state management in a more complex application, including features like a shopping cart.

## About Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies Redux development by providing utilities to handle common use cases like store setup, creating reducers, and managing immutable updates.

## Core Concepts Used

-   **`configureStore`**: Sets up the Redux store with sensible defaults.
-   **`createSlice`**: Generates a slice of the Redux state with corresponding action creators and reducers.
-   **`Provider`**: Makes the Redux store available to the React component tree.
-   **`useSelector`**: Allows components to read data from the Redux store.
-   **`useDispatch`**: Allows components to dispatch actions to the Redux store.

## Project Structure

Here are the key files in this project related to Redux:

```
src/
├── redux/
│   ├── slices/
│   │   └── cartSlice.js  # Redux slice for the shopping cart
│   └── store.js          # Redux store configuration
├── pages/
│   ├── Products.jsx      # Page displaying products, allows adding to cart
│   └── Cart.jsx          # Page displaying the shopping cart
└── components/
    └── Pruduct.jsx       # Component for a single product (likely where 'add to cart' is dispatched from)
```

## How It Works

### 1. The Cart Slice (`src/redux/slices/cartSlice.js`)

This slice manages all state related to the shopping cart. It defines the initial state and reducers to handle adding items, removing items, and updating quantities.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exist = state.cartItems.find((i) => i.id === item.id);
            if (exist) {
                exist.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item && item.quantity === 1) {
                state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
```

### 2. The Redux Store (`src/redux/store.js`)

The store is configured to use the `cartSlice` reducer for the `cart` state.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});
```

### 3. Using Redux in Components

Components can interact with the Redux store using hooks from `react-redux`.

-   A **product component** would use `useDispatch` to send a product to the cart.

    ```jsx
    import { useDispatch } from 'react-redux';
    import { addToCart } from '../redux/slices/cartSlice';

    function Product({ product }) {
        const dispatch = useDispatch();

        const handleAddToCart = () => {
            dispatch(addToCart(product));
        };

        return (
            <div>
                {/* Product details */}
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        );
    }
    ```

-   The **cart page** would use `useSelector` to get the list of items in the cart and `useDispatch` to modify them.

    ```jsx
    import { useSelector, useDispatch } from 'react-redux';
    import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';

    function Cart() {
        const dispatch = useDispatch();
        const { cartItems } = useSelector(state => state.cart);

        // ... component logic to display cartItems and dispatch actions
    }
    ```

## Running the Project

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

This will start the application. You can open the Redux DevTools browser extension to see the state changes as you add items to the cart, remove them, or change their quantities.
