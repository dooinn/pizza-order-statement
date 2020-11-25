

var price = 0;

var pizzaSelect = document.querySelectorAll(".pizzaSelect");
var pizzaSize = document.querySelectorAll(".pizzaSize");
var sideMenu = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");




for (i = 0; i < pizzaSelect.length; i++) {
    pizzaSelect[i].onclick = function () {
        if (this.checked == true) {
            price += parseInt(this.value);
        }
        else {
            price -= parseInt(this.value);
        }
        total.value = price;
    }
}

for (i = 0; i < pizzaSize.length; i++) {
    pizzaSize[i].onclick = function () {
        if (this.checked == true) {
            price += parseInt(this.value);
        }
        else {
            price -= parseInt(this.value);
        }
        total.value = price;
    }
}





for (i = 0; i < sideMenu.length; i++) {
    sideMenu[i].onclick = function () {
        if (this.checked == true) {
            price += parseInt(this.value);
        }
        else {
            price -= parseInt(this.value);
        }
        total.value = price;
    }
}

