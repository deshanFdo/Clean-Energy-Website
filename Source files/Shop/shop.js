function hideProducts() {
    var selectProduct = document.getElementById('filter');
    var selectedValue = selectProduct.value;

    if (selectedValue == "2") {
        document.getElementById('solar_panel').style.display = 'block';
        document.getElementById('solar_power_controller').style.display = 'block';
        document.getElementById('solar_power_inverter').style.display = 'block';
        document.getElementById('solar_power_meter').style.display = 'block';
        document.getElementById('wind_turbine').style.display = 'none';
        document.getElementById('wind_controller').style.display = 'none';
        document.getElementById('wind_inverter').style.display = 'none';
        document.getElementById('bulb').style.display = 'none';
        document.getElementById('refrigerator').style.display = 'none';
        document.getElementById('washing_machine').style.display = 'none';
        document.getElementById('battery').style.display = 'none';
        document.getElementById('backup').style.display = 'none';

    } else if (selectedValue == "3") {
        document.getElementById('solar_panel').style.display = 'none';
        document.getElementById('solar_power_controller').style.display = 'none';
        document.getElementById('solar_power_inverter').style.display = 'none';
        document.getElementById('solar_power_meter').style.display = 'none';
        document.getElementById('wind_turbine').style.display = 'block';
        document.getElementById('wind_controller').style.display = 'block';
        document.getElementById('wind_inverter').style.display = 'block';
        document.getElementById('bulb').style.display = 'none';
        document.getElementById('refrigerator').style.display = 'none';
        document.getElementById('washing_machine').style.display = 'none';
        document.getElementById('battery').style.display = 'none';
        document.getElementById('backup').style.display = 'none';

    } else if (selectedValue == "4") {
        document.getElementById('solar_panel').style.display = 'none';
        document.getElementById('solar_power_controller').style.display = 'none';
        document.getElementById('solar_power_inverter').style.display = 'none';
        document.getElementById('solar_power_meter').style.display = 'none';
        document.getElementById('wind_turbine').style.display = 'none';
        document.getElementById('wind_controller').style.display = 'none';
        document.getElementById('wind_inverter').style.display = 'none';
        document.getElementById('bulb').style.display = 'block';
        document.getElementById('refrigerator').style.display = 'block';
        document.getElementById('washing_machine').style.display = 'block';
        document.getElementById('battery').style.display = 'none';
        document.getElementById('backup').style.display = 'none';

    }else if (selectedValue == "5") {
        document.getElementById('solar_panel').style.display = 'none';
        document.getElementById('solar_power_controller').style.display = 'none';
        document.getElementById('solar_power_inverter').style.display = 'none';
        document.getElementById('solar_power_meter').style.display = 'none';
        document.getElementById('wind_turbine').style.display = 'none';
        document.getElementById('wind_controller').style.display = 'none';
        document.getElementById('wind_inverter').style.display = 'none';
        document.getElementById('bulb').style.display = 'none';
        document.getElementById('refrigerator').style.display = 'none';
        document.getElementById('washing_machine').style.display = 'none';
        document.getElementById('battery').style.display = 'block';
        document.getElementById('backup').style.display = 'block';
    }else {
        document.getElementById('solar_panel').style.display = 'block';
        document.getElementById('solar_power_controller').style.display = 'block';
        document.getElementById('solar_power_inverter').style.display = 'block';
        document.getElementById('solar_power_meter').style.display = 'block';
        document.getElementById('wind_turbine').style.display = 'block';
        document.getElementById('wind_controller').style.display = 'block';
        document.getElementById('wind_inverter').style.display = 'block';
        document.getElementById('bulb').style.display = 'block';
        document.getElementById('refrigerator').style.display = 'block';
        document.getElementById('washing_machine').style.display = 'block';
        document.getElementById('battery').style.display = 'block';
        document.getElementById('backup').style.display = 'block';
    }

}

let cart = null;

function addToCart(product_ID) {
    let product = document.getElementById(product_ID);
    let name = product.querySelector('h3').getAttribute('data-name') || "";
    let price = parseFloat(product.querySelector('p').getAttribute('data-price')) || 0;
    let quantity = parseFloat(product.querySelector('#quantity_' + product_ID).value) || 0;
    let total = price * quantity;
    cart = document.querySelector('.cart-items');
    let cart_item = document.createElement('div');
    cart_item.textContent = name + ' x ' + quantity + ' - $' + total.toFixed(2);
    cart.appendChild(cart_item);
    let lineBreak = document.createElement('hr');
    cart.appendChild(lineBreak);
    let total_price = document.querySelector('.total');
    let currentTotal = parseFloat(total_price.textContent) || 0;
    let newTotal = currentTotal + total;
    total_price.textContent = newTotal.toFixed(2);

    let orderSummary = document.getElementById('order_details');
    orderSummary.innerHTML = generateOrderSummary();
}

function clearCart() {
    location.reload();
}

function checkout() {
    if (cart === null || cart.children.length === 0) {
        alert("Basket is empty");
    } else {
        var container = document.querySelector('.container');
        container.style.display = 'none';

        var additionalContent = document.getElementById('customer_details');
        additionalContent.style.display = 'block';

    }
}

document.getElementById("save").onclick = function() {
    var forms = document.querySelectorAll("#form form");
    var isValid = true;

    forms.forEach(function(form) {
        var inputs = form.querySelectorAll("input");
        inputs.forEach(function(input) {
            var inputValue = input.value.trim();
            var inputType = input.getAttribute("type");

            if (inputValue === "" && inputType !== "submit" && inputType !== "button") {
                input.classList.add("error");
                isValid = false;
            } else if (inputType === "email" && !validateEmail(inputValue)) {
                input.classList.add("error");
                isValid = false;
            } else if (inputType === "tel" && !validatePhone(inputValue)) {
                input.classList.add("error");
                isValid = false;
            } else if (inputType === "number" && !validateNumber(inputValue)) {
                input.classList.add("error");
                isValid = false;
            } else if (inputType === "text" && input.id === "expiry_date" && !validateExpiryDate(inputValue)) {
                input.classList.add("error");
                isValid = false;
            } else {
                input.classList.remove("error");
            }
        });
    });

    if (!isValid) {
        alert("Please fill in all required fields correctly.");
    }else if(isValid){
        alert("Order placed successfully");
        location.reload();
    }
};

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    var regex = /^\d{10}$/;
    return regex.test(phone);
}

function validateNumber(number) {
    return !isNaN(number);
}

function validateExpiryDate(date) {
    var regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(date)) return false;

    var parts = date.split("/");
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);
    if (month < 1 || month > 12) return false;

    var currentYear = new Date().getFullYear() % 100;
    if (year < currentYear || year > currentYear + 10) return false;

    return true;
}

function generateOrderSummary() {
    let cartItems = document.querySelector('.cart-items').innerHTML;
    let totalPrice = document.querySelector('.total').textContent;

    return "<h2>Order Summary</h2>" + cartItems + "<p>Total: $" + totalPrice + "</p>";
}

function finishOrder() {
    alert("Order placed successfully!");
    location.reload();
}

document.getElementById('basket-mobile').addEventListener('click', function() {
    var img = document.querySelector('#basket-mobile img');
    var cart = document.querySelector('.cart');

    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }

    if (img.src.endsWith('cart.png')) {
        img.src = 'close.png';
    } else {
        img.src = 'cart.png';
    }
});

const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    
});

