import React, { useContext, useReducer } from 'react';

export const CartItemType = {
  id: '',
  name: '',
  price: 0,
  image: '',
  quantity: 0
};

export const CartState = {};

export const CartAction = {
  type: 'add' | 'remove',
  item: CartItemType,
  quantity: number
};

const defaultState = {};

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(() => {});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

function cartReducers(state, { item, type, quantity = 1 }) {
  const existingCartItem = state[item.id];

  switch (type) {
    case 'add':
      if (existingCartItem) {
        const quantity = existingCartItem.quantity + quantity;
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity
          }
        };
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity
        }
      };
    case 'remove':
      if (!existingCartItem) {
        return state;
      }

      const newQuantity = existingCartItem.quantity - 1;
      if (newQuantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity: newQuantity
          }
        };
      }

      const newCartItems = { ...state };
      delete newCartItems[item.id];
      return newCartItems;
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}

const getCartSubTotal = (sum, item) => {
  sum += item.price * item.quantity;
  return sum;
};
const getCartCount = (sum, item) => sum + item.quantity;

export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal
  };
};

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product, quantity) =>
    dispatch({
      type: 'add',
      item: product,
      quantity
    });

  const removeFromCart = product =>
    dispatch({
      type: 'remove',
      item: product
    });

  return {
    addToCart,
    removeFromCart,
  }
}
export default CartProvider
