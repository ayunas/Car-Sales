const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export function reducer(state=initialState,action) {
    switch(action.type) {
        case "BUY":
            console.log('buy in reducer', action);
            const newState = {...state};
            newState.store = newState.store.filter(feature => feature.id !== action.payload.id )
            newState.car.features = [...state.car.features, action.payload];
            newState.additionalPrice += action.payload.price;
            return newState;

        case "REMOVE":
            console.log('remove in reducer', action);
            const removedState = {...state};
            removedState.store = [...state.store, action.payload];
            removedState.car.features = removedState.car.features.filter(feature => feature.id !== action.payload.id);
            removedState.additionalPrice -= action.payload.price;
            return removedState;
        default: 
            console.log('action and state in reducer: ', action,state);
            return state;
    }
}

