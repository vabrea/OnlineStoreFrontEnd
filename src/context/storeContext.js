import React from 'react';

let store = React.createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
});

export default store;