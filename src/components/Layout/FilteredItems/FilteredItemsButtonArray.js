/*
FilteredItemsButtonArray component to draw each filter selected item , this component will draw buttons for size selectedItems for example
 */
import FilteredItemButton from "./FilteredItemButton";

const FilteredItemsButtonArray = (props) => {

    const handleCloseClick = (id, PerantKey) => {
        props.handleCloseClick(id, PerantKey);
    }

    return (props.data.map(item => (
        <FilteredItemButton perantKey={props.perantKey} key={item.id} id={item.id} title={item.title} onClick={handleCloseClick} />)))
}

export default FilteredItemsButtonArray;