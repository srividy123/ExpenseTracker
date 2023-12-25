document.addEventListener('DOMContentLoaded', function() {
    const addExpenseButton = document.getElementById('addExpense');
    const expenseList = document.getElementById('expenseList');
    const editFormContainer = document.getElementById('editFormContainer');

    addExpenseButton.addEventListener('click', function() {
        const expenseValue = document.getElementById('expense').value;
        const descriptionValue = document.getElementById('description').value;
        const categoryValue = document.getElementById('category').value;

        // Create a new list item
        const listItem = document.createElement('li');

        // Create span elements for displaying information
        const expenseInfo = document.createElement('span');
        expenseInfo.textContent = `Expense: ${expenseValue}, Description: ${descriptionValue}, Category: ${categoryValue}`;

        // Create delete and edit buttons
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Expense';
        deleteButton.addEventListener('click', function() {
            // Remove the list item when the delete button is clicked
            expenseList.removeChild(listItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Expense';
        editButton.addEventListener('click', function() {
            // Display the edit form with existing values
            displayEditForm(expenseValue, descriptionValue, categoryValue, listItem);
        });

        // Append elements to the list item
        listItem.appendChild(expenseInfo);
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        // Append the new list item to the expense list
        expenseList.appendChild(listItem);

        // Clear input fields after adding expense
        document.getElementById('expense').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
    });

    function displayEditForm(expense, description, category, listItem) {
        // Create an edit form
        const editForm = document.createElement('form');
        editForm.innerHTML = `
            <label>Edit Expense</label><input id="editExpense" type="number" value="${expense}"/>
            <label>Edit Description</label><input id="editDescription" type="text" value="${description}"/>
            <label>Edit Category</label><input id="editCategory" type="search" value="${category}"/>
            <button type="button" id="updateExpense">Update Expense</button>
        `;

        // Handle update button click
        const updateButton = editForm.querySelector('#updateExpense');
        updateButton.addEventListener('click', function() {
            const updatedExpense = document.getElementById('editExpense').value;
            const updatedDescription = document.getElementById('editDescription').value;
            const updatedCategory = document.getElementById('editCategory').value;

            // Update the list item with the edited values
            listItem.querySelector('span').textContent = `Expense: ${updatedExpense}, Description: ${updatedDescription}, Category: ${updatedCategory}`;

            // Remove the edit form
            editFormContainer.innerHTML = '';
        });

        // Append the edit form to the container
        editFormContainer.innerHTML = '';
        editFormContainer.appendChild(editForm);
    }
});
