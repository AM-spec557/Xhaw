// Quote calculator
function calculateQuote() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  let total = 0;

  checkboxes.forEach(cb => {
    total += parseInt(cb.value);
  });

  // Apply discount rules
  let discount = 0;
  if (checkboxes.length === 2) discount = 0.05;
  else if (checkboxes.length === 3) discount = 0.10;
  else if (checkboxes.length > 3) discount = 0.15;

  let finalAmount = total - (total * discount);

  document.getElementById('total').innerText = "Total: R" + finalAmount;
}

// Simple form validation (extra safety)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(event) {
      let inputs = form.querySelectorAll("input[required], textarea[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "1px solid #aaa";
        }
      });

      if (!valid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  }
});

// Simple Calculator
function press(num) {
  document.getElementById("calc-display").value += num;
}

function calculate() {
  try {
    let exp = document.getElementById("calc-display").value;
    document.getElementById("calc-display").value = eval(exp);
  } catch (err) {
    document.getElementById("calc-display").value = "Error";
  }
}

function clearCalc() {
  document.getElementById("calc-display").value = "";
}

function dismissDiscount() {
  const discountBox = document.querySelector('.discount-info');
  if (discountBox) {
    discountBox.style.display = 'none';
  }
}

function dismissDiscount() {
  const box = document.getElementById('discountBox');
  if (box) {
    box.style.display = 'none';
  }
}

// Calculator logic
let calcInput = "";

function appendNumber(num) {
  calcInput += num;
  document.getElementById("calc-display").value = calcInput;
}

function appendOperator(op) {
  calcInput += " " + op + " ";
  document.getElementById("calc-display").value = calcInput;
}

function clearDisplay() {
  calcInput = "";
  document.getElementById("calc-display").value = "";
}

function calculateResult() {
  try {
    const result = eval(calcInput);
    document.getElementById("calc-display").value = result;
    calcInput = result.toString();
  } catch {
    document.getElementById("calc-display").value = "Error";
  }
}

// Discount dismiss
function dismissDiscount() {
  const box = document.getElementById("discountBox");
  if (box) box.style.display = "none";
}

function getQuote() {
  let total = parseFloat(document.getElementById("calc-display").value);

  if (isNaN(total) || total <= 0) {
    alert("Please enter a valid total first.");
    return;
  }

  // Apply discount rules
  let discount = 0;
  if (total >= 3000 && total < 4500) {
    discount = 0.05; // 5% for 2 courses
  } else if (total >= 4500 && total < 6000) {
    discount = 0.10; // 10% for 3 courses
  } else if (total >= 6000) {
    discount = 0.15; // 15% for 4+ courses
  }

  let finalTotal = total - (total * discount);

  alert(
    "Original Total: R" + total.toFixed(2) +
    "\nDiscount: " + (discount * 100) + "%" +
    "\nFinal Total: R" + finalTotal.toFixed(2)
  );
}

function getQuote() {
  let total = parseFloat(document.getElementById("calc-display").value);

  if (isNaN(total) || total <= 0) {
    alert("Please enter a valid total first.");
    return;
  }

  // Apply discount rules
  let discount = 0;
  if (total >= 3000 && total < 4500) {
    discount = 0.05; // 5% for 2 courses
  } else if (total >= 4500 && total < 6000) {
    discount = 0.10; // 10% for 3 courses
  } else if (total >= 6000) {
    discount = 0.15; // 15% for 4+ courses
  }

  let finalTotal = total - (total * discount);

  alert(
    "Original Total: R" + total.toFixed(2) +
    "\nDiscount: " + (discount * 100) + "%" +
    "\nFinal Total: R" + finalTotal.toFixed(2)
  );
}

 