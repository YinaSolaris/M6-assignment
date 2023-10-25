window.addEventListener("load", () => {
    let employeeForm = document.getElementById("empForm");
    employeeForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        let getValue = (id) => document.getElementById(id).value
        // Display values in the console
        console.log("ID:", getValue('id'));
        console.log("Name:", getValue('name'));
        console.log("Extension:", getValue('ext'));
        console.log("Email:", getValue('email'));
        console.log("Department:", getValue('department'));
    });
});
