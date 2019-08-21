import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log('removeFeature triggered');
    props.dispatch({type: "REMOVE", payload: item})
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('buy item triggered in buyItem');
    props.dispatch({type: "BUY", payload: item})
  };

  return (
    <div className="boxes">
      <div className="box">
        <h1>Hello this is vincent's deployment</h1>
        <Header car={props.car} />
        <AddedFeatures car={props.car} remove={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buy={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  
  const {car, store, additionalPrice} = state;
  return {
    car : car,
    store : store,
    additionalPrice : additionalPrice
  }
}

export default connect(mapStateToProps)(App);
