const createBurgerBtn = document.getElementById("submit-btn");

if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
     e.preventDefault();
     
     
     const newBurger = {
         burger_name: document.getElementById('add-burger').value.trim()
     };

     fetch('/api/burgers', {
         method: 'POST',
         headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
         },

         body: JSON.stringify(newBurger),
     }).then(() => {
         document.getElementById('add-burger').value = '';

         console.log("Added Your Burger!");
         location.reload();
     });
    });
};