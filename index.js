import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://leaven-pizza-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const pizzaInDB = ref(database, "Menu");

const menuBlock = document.getElementById("menu-block");

onValue(pizzaInDB, function(snapshot) {

    let itemsArray = Object.entries(snapshot.val())
    
    itemsArray.sort(compareByOrder);

    function compareByOrder(a, b) {
        return a[1].order - b[1].order;
    }
    
    for (let i = 0; i < itemsArray.length; i++) {
        let item = itemsArray[i][1];

        menuBlock.innerHTML += 
        `
        <div class="menu-line-one">
            <h3 class="item-name">${item.name}</h3>
            <h3 class="item-price">£${item.price}</h3>
        </div>
        <p class="item-description">${item.description}</p>
        ${item.code}
        `;

    }


});