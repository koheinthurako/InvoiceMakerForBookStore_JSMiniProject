const items = document.getElementById('items');
const inputForm = document.getElementById('inputForm');
const quantity = document.getElementById('quantity');
const rows = document.getElementById('rows');
const total = document.getElementById('total');


function calTotalCost() {
    let costs = document.querySelectorAll(".cost");
    total.innerText = [...costs].reduce((pv, cv) => pv + Number(cv.innerText) , 0)
}

function delItem(event) {
    if(confirm("Are you sure to delete this book?")) {
        event.target.parentElement.parentElement.remove();
        calTotalCost();
    }
}

products.forEach(function(product) {
    let newOption = new Option(product.name, product.id);
    items.append(newOption);
});


inputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let currentItem = products.find(product => product.id == items.value);
    let cost = currentItem.price * quantity.valueAsNumber;
    let tr = document.createElement("tr");
    tr.innerHTML = `
                <td>
                    ${currentItem.name}
                    <span class="text-danger small delBtn" onclick="delItem(event)">Delete</span>
                </td>
                <td class="text-end pe-0">${currentItem.price}</td>
                <td class="text-end pe-0">${quantity.value}</td>
                <td class="text-end pe-0 cost">${cost}</td>
                `;cost
    rows.append(tr);
    calTotalCost();
    inputForm.reset();
})

