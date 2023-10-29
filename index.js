import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://leaven-pizza-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const pizzaInDB = ref(database, "Menu");

const testBlock = document.getElementById("test-block");

onValue(pizzaInDB.child('Menu/1'), function(snapshot) {

    let item = snapshot.val();

    testBlock.innerHTML = 
        `
        <div class="menu-line-one">
            <h3 class="item-name">${item.name}</h3>
            <h3 class="item-price">£X</h3>
        </div>
        <p class="item-description">TESTING</p>
        `

});