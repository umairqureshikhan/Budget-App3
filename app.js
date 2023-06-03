document.getElementById("budgetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const budgetInput = document.getElementById("budgetInput");
    const budget = parseInt(budgetInput.value);
    
    if (!isNaN(budget)) {
      remainingBudget = budget;
      
      const remainingBudgetElement = document.getElementById("remainingBudget");
      remainingBudgetElement.innerText = "Remaining Budget: $" + remainingBudget;
      
      budgetInput.value = "";
    }
  });
  
  document.getElementById("expenseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const descriptionInput = document.getElementById("descriptionInput");
    const amountInput = document.getElementById("amountInput");
    const dateInput = document.getElementById("dateInput");
    
    const description = descriptionInput.value;
    const amount = parseInt(amountInput.value);
    const date = dateInput.value;
    
    if (!isNaN(amount) && description && date) {
      if (amount <= remainingBudget) {
        remainingBudget -= amount;
        
        const remainingBudgetElement = document.getElementById("remainingBudget");
        remainingBudgetElement.innerText = "Remaining Budget: $" + remainingBudget;
        
        const table = document.getElementById("expenseTableBody");
        const row = table.insertRow();
        const descriptionCell = row.insertCell();
        const amountCell = row.insertCell();
        const dateCell = row.insertCell();
        
        descriptionCell.innerText = description;
        amountCell.innerText = amount;
        dateCell.innerText = date;
        
        descriptionInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
      } else {
        alert("Not enough budget!");
      }
    }
  });
  