const RestaurantCategory = ({data,showItems,setshowIndex}) => {

    const handleClick = () => {
       setshowIndex();
    };

    return (
    <div>
        {/* Header */}    
        <div className="w-6/12 mx-auto my- bg-gray-50 shadow-lg p-4">    
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span >{data.title}</span>
           </div>
        </div>   

        { /* Accordion Body */}

        { showItems &&  <ItemList items={data.ItemCards} dummy = {dummy}/>}


    </div>
    );
};

export default RestaurantCategory;