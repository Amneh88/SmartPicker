/*
Main App has Header , Menu ,Applied Filtered components
*/

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilteredItems from "./components/Layout/FilteredItems/FilteredItems";
import Header from "./components/Layout/Header/Header";
import Menu from "./components/Layout/Menu/Menu";
import { data } from "./Data/Data";
import { sliceActions } from './store/index'

const App = () => {

  const dispatch = useDispatch();
  const openID = useSelector(state => state.openedDropDownTitle);
  const allSelectedItems = useSelector(state => state.selectedItemsObj);


  const toggle = (openedDropDownTitle) => {
    if ((openID === openedDropDownTitle)) {
      dispatch(sliceActions.toggleMenue(null));
    }
    else {
      dispatch(sliceActions.toggleMenue(openedDropDownTitle));
    }
  }

  const handleApply = (selectedItems, filterKey) => {
    dispatch(sliceActions.addSelectedItems({ selectedItems: selectedItems, filterKey: filterKey }));
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <Menu
          data={data}
          allSelectedItems={allSelectedItems}
          openID={openID}
          handleApply={handleApply}
          toggle={toggle} />
        <FilteredItems />
      </main>
    </React.Fragment>
  );
}

export default App;
