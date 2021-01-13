document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');

      const createBurgerBtn = document.getElementById("submit-btn");

      createBurgerBtn.addEventListener("click", (e) => {
         e.preventDefault();
         console.log("loading");
         
         
         const newBurger = {
             burger_name: document.getElementById('add-burger').value.trim(),
            //  devoured: document.getElementById('devoured').checked,
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
    }
});

// const createBurgerBtn = document.getElementById("submit-btn");





// if (createBurgerBtn) {
//     createBurgerBtn.addEventListener("click", (e) => {
//     //  e.preventDefault();
//      console.log("loading");
     
     
//      const newBurger = {
//          burger_name: document.getElementById('add-burger').value.trim(),
//         //  devoured: document.getElementById('devoured').checked,
//      };

//     //  fetch('/api/burgers', {
//     //      method: 'POST',
//     //      headers: {
//     //          Accept: 'application/json',
//     //          'Content-Type': 'application/json',
//     //      },

//     //      body: JSON.stringify(newBurger),
//     //  }).then(() => {
//     //      document.getElementById('add-burger').value = '';

//     //      console.log("Added Your Burger!");
//     //      location.reload();
//     //  });
//     });
// };