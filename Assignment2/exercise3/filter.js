function filterCategory(filterSelection, filterBy, filterButton){
    // filter selection is category
    // filter by is thing to match
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
        // changed the class of the fliter buttons, show different content
        for(let listItem of itemsToFilter){
            
            if(listItem.dataset[filterBy] === filterSelection){
                listItem.style.display = "flex"
            }else{
                listItem.style.display = "none"
            }
        }
    // set variables
    let filterSelectors = Array.from(document.getElementsByClassName("FilterSelector"));
    // through classlist to add and remove class attribute on every buttons
        for(let selector of filterSelectors){

            selector.classList.remove("ActiveCategory"); // class name
        }
            filterButton.classList.add("ActiveCategory");
}

        



