/*
This file is for Redux , I used createSlice method from redux toolkit lib , This method
Allow us to write code and manipulate state in mutable way , this method will handle the state manipulation it self.

I used redux to store active selected filte (size , color ,...)
and store selectedItems Object in this format of the same Data shared:

 {
    size: [
        {
            id: "2x3",
            title: "2' X 3'",
        },
        {
            id: "3x5",
            title: "3' X 5'",
        }],
        color:[
        ....
        ],....



*/
import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'

const initialState = { openedDropDownTitle: null, selectedItemsObj: null }

const selectedSilce = createSlice({
    name: "selectedSilce",
    initialState,
    reducers: {
        //Handle Active filter like size, color ,,,
        toggleMenue(state, action) {

            state.openedDropDownTitle = action.payload

        },
        //Add selected Items that selected and then click apply
        addSelectedItems(state, action) {
            const key = action.payload.filterKey;
            const selectedValues = action.payload.selectedItems

            let updatedObjects = { ...state.selectedItemsObj }
            var isKeyPresent = Object.keys(updatedObjects).some(value => value == key)

            //if key exist , we need to add selected items to the exist ones

            //if key not exist, we need to add more selected item to array

            if (!isKeyPresent) {
                const item = {};
                updatedObjects[key] = selectedValues


            } else {

                const existSelectedItemsInKey = updatedObjects[key];
                //exclude duplicate
                const ids = new Set(existSelectedItemsInKey.map(item => item.id));
                const mergedSelectedItems = [...existSelectedItemsInKey, ...selectedValues.filter(item => !ids.has(item.id))];

                updatedObjects[key] = mergedSelectedItems

            }
            state.selectedItemsObj = updatedObjects;
            //close dropDown
            state.openedDropDownTitle = null;

        },
        //handle x icon in applied filtered Items
        removeFilteredItem(state, action) {
            const key = action.payload.filterKey;
            let updatedObjects = { ...state.selectedItemsObj }
            let arrayToRemoveFrom = updatedObjects[key];
            const filteredArray = arrayToRemoveFrom.filter(item => item.id != action.payload.id);
            updatedObjects[key] = filteredArray;
            state.selectedItemsObj = updatedObjects;
        },
        //clearAll applied filter items
        clearSelectedList(state, action) {
            const updatedObjects = null;
            state.selectedItemsObj = updatedObjects;
        }
    }

})

export const sliceActions = selectedSilce.actions;

const store = createStore(selectedSilce.reducer);

export default store;





// const reducer = (state = initialSatet, action) => {
//     switch (action.type) {
//         case 'OPENDROPDOWN':
//             return {
//                 openedDropDownId: action.id,
//                 selectedItemsObj: state.selectedItemsObj
//             }

//         case 'ADDSELECTEDITEMS':
//             //remove duplicate if exist then concat 
//             // const oldSelectedItem = state.selectedItems.filter(item => !action.payload.selectedItems.some(newItem => newItem.id === item.id));
//             // console.log(action.payload.filterKey)

//             const key = action.payload.filterKey;
//             const value = action.payload.selectedItems

//             let updatedObjects = { ...state.selectedItemsObj }
//             console.log("updatedObjects");
//             console.log(updatedObjects);
//             var isKeyPresent = Object.keys(updatedObjects).some(value => value == key)
//             console.log("exist" + isKeyPresent);

//             //if key exist , we need to add selected items to the exist ones

//             //if key not exist, we need to add more selected item to array
//             if (!isKeyPresent) {
//                 const item = {};
//                 item[key] = value
//                 console.log(item)
//                 return {
//                     openedDropDownId: null,
//                     selectedItemsObj: { ...state.selectedItemsObj, item }
//                 }

//             } else {
//                 console.log("updatedObjects");
//                 console.log(updatedObjects);
//                 const selectedList = updatedObjects[key];
//                 const updatedSelectedList = selectedList.concat(value);
//                 updatedObjects[key] = updatedSelectedList;
//                 console.log("updatedObjects");
//                 console.log(updatedObjects);
//                 return {
//                     openedDropDownId: null,
//                     selectedItemsObj: updatedObjects
//                 }

//             }






//         // case 'RemoveSELECTEDITEMS':
//         //     const updatedList = state.selectedItems.filter(item => !action.payload.removedItems.includes(item.id));
//         //     console.log(action.payload.filterKey)
//         //     return {
//         //         openedDropDownId: state.openedDropDownId,
//         //         selectedItems: updatedList
//         //     }

//         // case 'RemoveFilteredITEM':


//         //     console.log("rem " + action.payload.removedItemId)
//         //     const newList = state.selectedItems.filter(item => item.id != action.payload.removedItemId);

//         //     return {
//         //         openedDropDownId: state.openedDropDownId,
//         //         selectedItems: newList
//         //     }

//     }
//     return state;
// }

