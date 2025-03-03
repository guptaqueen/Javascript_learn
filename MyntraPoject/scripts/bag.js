
let bagItemObjects;
onload();

function onload(){
  loadBagItemsObjects();
  displayBayItems();
}

function loadBagItemsObjects(){
  console.log(bagItems);
  bagItems.map(itemId =>{
    for(let i=0; i<items; i++){
      if(itemId ==items[i].id){
        return item[i];
      }
    }
  });
  console.log(bagItemObjects);
}


function displayBayItems(){
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItems => {
    innerHTML +=generateItemHTML(bagItems);
  });
   containerElement.innerHTML = innerHTML;
}

function generateItemHTML(item){
  return  `
   <div class="bag-item-container">
            <div class="item-left-part">
              <div class="bag-item-img"><img src="../${item. item_image}" /></div>
              <div class="item-right-part">
                <div class="company">${item.company_name}</div>
                <div class="item-name"${item.item_name}</div>
                <div class="price-container">
                  <span class="current-price">${item.current_price}</span>
                  <span class="original-price">${item.original_price}</span>
                  <span class="discount-percentage">(${item.discount}% OFF)</span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">${item.return_period}</span>return avilable
                </div>
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">${item.delivery_date}</span>
                </div>
              </div>
              <div class="remove-from-cart">X</div>
            </div>
          `;
}