let bagItems 

onload();

function onload() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemsCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemsCountElement.style.visibility = "visible";
    bagItemsCountElement.innerHTML = bagItems.length;
    
  } else {
    // bagItemsCountElement.innerHTML = "0"; // Reset count
    bagItemsCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items_container");

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += ` <div class="item_container"><img class="item-image" src="${item.item_image}" alt="item images">
            <div class="rating">${item.rating.star}⭐ | ${item.rating.noOfReview}</div>
            <div class="company_name">${item.company_name}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
              <span class="current-price">${item.current_price}</span>
              <span class="original-price">${item.original_price}</span>
              <span class="discount">${item.discount}% OFF</span>
              
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  
          </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
