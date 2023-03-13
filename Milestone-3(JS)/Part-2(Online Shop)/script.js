alert("Bismillah");
let numberOdProduct = document.querySelector('#spans');
let addCartButton = document.querySelector('.addButton');
let cartTable = document.querySelector('.tables');
let clickedButton = document.querySelectorAll(".addButton");
//console.log(clickedButton.length);
for (let i = 0; i < clickedButton.length; i++) {
    clickedButton[i].addEventListener("click", updates);
}
var total_Item = 0;
var Total_Price = 0;

function updates(ev) {
    //console.log("Event kaz kortache");
    var x = ev.target.parentElement;
    //var pd = x.childern[1];
    var productName = x.firstElementChild.nextElementSibling.innerText;
    var price = x.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    //console.log(productName);

    let cartTable = document.querySelector('.tables');
    let NumOfRow = cartTable.rows.length;
    var newRow = cartTable.insertRow(NumOfRow);
    //console.log(NumOfRow);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerText = productName;
    cell2.innerText = price;
    total_Item += 1;
    var priceInt = "";
    for (let i = 1; i < price.length; i++) {
        //console.log(price[i]);
        priceInt += price[i];
    }
    //console.log(priceInt);
    Total_Price += parseFloat(priceInt);
    //console.log(total_Item);
    //console.log(Total_Price);
    numberOdProduct.innerText = total_Item;
    let totalPriceTable = document.querySelectorAll('.tables');
    let tell = document.querySelector('#tot').value;
    document.querySelector('#tot').innerText = total_Item;
    document.querySelector('#tot_p').innerText = Total_Price.toPrecision(5);

}
var reButton = document.querySelectorAll(".rsButton");
//console.log(reButton[0].innerText);
reButton[0].addEventListener("click", () => {
    //console.log("ksjhdfjkhsd");
    let cartTable = document.querySelector('.tables');
    let NumOfRow = cartTable.rows.length;
    for (let i = 1; i < NumOfRow; i++) {
        cartTable.deleteRow(1);
    }
    document.querySelector('#tot').innerText = 0;
    document.querySelector('#tot_p').innerText = 0;
})
reButton[1].addEventListener("click", () => { alert("Are Sure For Cheakout Now?") });