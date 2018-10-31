var nierPrint = { productID: 1, name: "NIER AUTOTAMA - 2B PRINT", price: 5, qty: 1, subtotal: 5 };
var anneBadge = { productID: 2, name: "SELL MY FRIENS SERIES - ANNEJOY BADGE", price: 4, qty: 1, subtotal: 4 };
var anneKC = { productID: 3, name: "SELL MY FRIENS SERIES - ANNEJOY KEYCHAIN", price: 6, qty: 1, subtotal: 6 };
var claireBadge = { productID: 4, name: "SELL MY FRIENS SERIES - DECLAIRE BADGE", price: 4, qty: 1, subtotal: 4 };
var claireKC = { productID: 5, name: "SELL MY FRIENS SERIES - DECLAIRE KEYCHAIN", price: 6, qty: 1, subtotal: 6 };
var customBadge = { productID: 6, name: "CUSTOM BADGE", price: 6, qty: 1, subtotal: 6 };
var friskBadge = { productID: 7, name: "UNDERTALE - FRISK BADGE", price: 4, qty: 1, subtotal: 4 };
var hikari = { productID: 8, name: "HIKARI - ORIGINAL CHARACTER PRINT", price: 7, qty: 1, subtotal: 7 };
var jasBadge = { productID: 9, name: "SELL MY FRIENS SERIES - JAVAJASJAVA BADGE", price: 4, qty: 1, subtotal: 4 };
var jasKC = { productID: 10, name: "SELL MY FRIENS SERIES - JAVAJASJAVA KEYCHAIN", price: 6, qty: 1, subtotal: 6 };
var jewel = { productID: 11, name: "HOUSEKI NO KUNI- JEWEL GIRLS", price: 20, qty: 1, subtotal: 20 };
var kaguraBadge = { productID: 12, name: "GINTAMA - KAGURA BADGE", price: 4, qty: 1, subtotal: 4 };
var kaguraKC = { productID: 13, name: "GINTAMA - KAGURA KEYCHAIN", price: 6, qty: 1, subtotal: 6 };
var rin = { productID: 14, name: "SHELTER - RIN PRINT", price: 7, qty: 1, subtotal: 7 };
var sairai = { productID: 15, name: "DEEMO - SAIRAI PRINT", price: 7, qty: 1, subtotal: 7 };
var sairaiBadge = { productID: 16, name: "DEEMO - SAIRAI BADGE", price: 4, qty: 1, subtotal: 4 };
var scarletmoon = { productID: 17, name: "ORIGINAL CHRACTER - SCARLET MOON PRINT", price: 7, qty: 1, subtotal: 7 };
var undertale = { productID: 18, name: "UNDERTALE - FRISK PRINT", price: 7, qty: 1, subtotal: 7 };
var vicBadge = { productID: 19, name: "SELL MY FRIENS SERIES - HYPERVIC BADGE", price: 4, qty: 1, subtotal: 4 };
var vicKC = { productID: 20, name: "SELL MY FRIENS SERIES - HYPERVIC KEYCHAIN", price: 6, qty: 1, subtotal: 6 };
var victuri = { productID: 21, name: "YURI ON ICE - VICTOR X YURI PRINT", price: 7, qty: 1, subtotal: 7 };
var zine = { productID: 22, name: "THE GIRL OF DAWN - ZINE", price: 15, qty: 1, subtotal: 15 };
var tablelist;
var products = [nierPrint, anneBadge, anneKC, claireBadge, claireKC, customBadge, friskBadge, hikari, jasBadge, jasKC, jewel, kaguraBadge,
    kaguraKC, rin, sairai, sairaiBadge, scarletmoon, undertale, vicBadge, vicKC, victuri, zine];

function addtocart(n) {

    if (cart == null || cart.length == 0 || cart == undefined) {
        var cart = [];
        for (i = 0; i < products.length; i++) {
            if (i + 1 == n) {
                cart.push(products[i]);
            }
        }
    } else {
        var cartvalue = localStorage.getItem('cartitems');
        var cart = JSON.parse(cartvalue);
        for (i = 0; i < products.length; i++) {
            if (i + 1 == n) {
                cart.push(products[i]);
            }


        }
    }

    window.localStorage.setItem('cartitems', JSON.stringify(cart));
}

function loadcart() {
    var cartvalue = window.localStorage.getItem('cartitems');
    var cart = JSON.parse(cartvalue);
    tablelist = document.getElementById('productTable');
    if (cart == null || cart.length == 0) {

    } else {
        for (i = 1; i <= cart.length; i++) {
            if (cart.length == 1) {
                var row = tablelist.insertRow(1);
                var number = row.insertCell(0);
                var productName = row.insertCell(1);
                var productPrice = row.insertCell(2);
                var productQty = row.insertCell(3);
                var subTotal = row.insertCell(4);
                var remove = row.insertCell(5);

                number.innerHTML = i;
                productName.innerHTML = cart[i - 1].name;
                productPrice.innerHTML = "$" + cart[i - 1].price;
                productQty.innerHTML = "<input type='number' id='Qty1' value='" + cart[i - 1].qty + "' min='1' max='10' onchange='updateCart(" + i + ")' >";
                subTotal.innerHTML = "$" + cart[i - 1].subtotal;
                remove.innerHTML = "<input type='button' id='Remove' value='Delete' onclick='removeProduct(" + i + ")'>";
            } else {
                if (cart[i - 1] != null) {
                    var row = tablelist.insertRow(i);
                    var number = row.insertCell(0);
                    var productName = row.insertCell(1);
                    var productPrice = row.insertCell(2);
                    var productQty = row.insertCell(3);
                    var subTotal = row.insertCell(4);
                    var remove = row.insertCell(5);
                    number.innerHTML = i;
                    productName.innerHTML = cart[i - 1].name;
                    productPrice.innerHTML = "$" + cart[i - 1].price;
                    productQty.innerHTML = "<input type='number' id='Qty" + i + "' value='" + cart[i - 1].qty + "' min='1' max='10' onchange='updateCart(" + i + ")' >";
                    subTotal.innerHTML = "$" + cart[i - 1].subtotal;
                    remove.innerHTML = "<input type='button' id='Remove' value='Delete' onclick='removeProduct(" + i + ")'>";
                }
            }


        }
    }
    calculateTotal();
}

function removeProduct(x) {
    var rowNo = document.getElementsByTagName('tr');
    var cartvalue = localStorage.getItem('cartitems');
    var cart = JSON.parse(cartvalue);
    for (i = 1; i <= rowNo.length; i++) {
        if (x == parseInt(rowNo[i].cells[0].innerHTML)) {
            tablelist.deleteRow(rowNo[i].rowIndex);
            if (cart.length == 1) {
                cart = [];
            } else {

                cart = cart.splice(i, 1);

            }
        }
    }
    window.localStorage.setItem('cartitems', JSON.stringify(cart));
    calculateTotal();
}


function updateCart(x) {
    var rowNo = document.getElementsByTagName('tr');
    var cartvalue = localStorage.getItem('cartitems');
    var cart = JSON.parse(cartvalue);
    for (i = 1; i <= cart.length; i++) {
        if (x == rowNo[i].rowIndex) {
            var n = parseInt(document.getElementById('Qty' + i).value);
            var newPrice = parseInt(cart[i - 1].price) * n;
            rowNo[i].cells[4].innerHTML = "$" + newPrice + "";
            cart[i - 1].qty = n;
            cart[i - 1].subtotal = newPrice;
        }
    }
    // window.localStorage.removeItem('items');
    window.localStorage.setItem('cartitems', JSON.stringify(cart));
    calculateTotal();
}


function calculateTotal() {
    var cartvalue = localStorage.getItem('cartitems');
    var cart = JSON.parse(cartvalue);
    var total = 0;
    var result = cart.map(a => a.subtotal);
    for (i = 0; i < cart.length; i++) {
        total += result[i];
    }
    document.getElementById("totalprice").innerHTML = "Total: $" + total;
}

function deletecart() {
    window.localStorage.removeItem('cartitems');
    window.localStorage.clear();
}