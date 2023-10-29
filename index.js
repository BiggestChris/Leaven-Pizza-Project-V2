import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://leaven-pizza-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const pizzaInDB = ref(database, "Menu");

const testBlock = document.getElementById("test-block");

onValue(pizzaInDB, function(snapshot) {

    let itemsArray = Object.entries(snapshot.val())
    console.log(itemsArray[0][1])
    
    for (let i = 0; i < itemsArray.length; i++) {
        let item = itemsArray[i][1];

        testBlock.innerHTML += 
        `
        <div class="menu-line-one">
            <h3 class="item-name">${item.name}</h3>
            <h3 class="item-price">£${item.price}</h3>
        </div>
        <p class="item-description">${item.description}</p>
        ${item.code}
        `;

    }

    /* let item1 = itemsArray[0][1];

    testBlock.innerHTML += 
        `
        <div class="menu-line-one">
            <h3 class="item-name">${item1.name}</h3>
            <h3 class="item-price">£${item1.price}</h3>
        </div>
        <p class="item-description">${item1.description}</p>
        ${item1.code}
        `

    let item2 = itemsArray[1][1];

    testBlock.innerHTML += 
        `
        <div class="menu-line-one">
            <h3 class="item-name">${item2.name}</h3>
            <h3 class="item-price">£${item2.price}</h3>
        </div>
        <p class="item-description">${item2.description}</p>
        ${item2.code}
        `
    */

});