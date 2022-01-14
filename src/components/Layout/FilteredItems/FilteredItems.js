import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliceActions } from '../../../store/index'
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './FilteredItems.module.css';
import FilteredItemsButtonArray from './FilteredItemsButtonArray';

const FilteredItems = (props) => {
    const dispatch = useDispatch();
    const allSelectedItems = useSelector(state => state.selectedItemsObj);


    const handleCloseClick = (id, filterKey) => {
        dispatch(sliceActions.removeFilteredItem({ id: id, filterKey: filterKey }));
    }

    const onClear = () => {
        dispatch(sliceActions.clearSelectedList());
    }

    let filtered = null;

    if (allSelectedItems !== null && allSelectedItems !== undefined) {
        filtered = <Card >
            {Object.keys(allSelectedItems).map((key) => {
                {
                    return <FilteredItemsButtonArray  // call draw for each selectedItems for every filter for size alone , for color alone ...
                        key={key}
                        handleCloseClick={handleCloseClick}
                        perantKey={key}
                        data={allSelectedItems[key]} />
                }
            })}
            <Button onClick={onClear}>Clear All</Button>
        </Card>
    }

    return (<React.Fragment>
        { filtered}
    </React.Fragment>);

}

export default FilteredItems;