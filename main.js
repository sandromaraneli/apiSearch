let search = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let cardsArea = document.querySelector("section");

let url = "https://api.escuelajs.co/api/v1/products/"


search.addEventListener('click', function() {
    fetch(url)
.then(response=> response.json())
.then(response => renderer(response))
})

// coommit 1


function renderer(list) {

    cardsArea.innerHTML = ""
    list.forEach(item => {
        if (item.price >= inputs[1].value && item.price <= inputs[2].value && item.title.includes(inputs[0].value.toLowerCase())) {
            cardsArea.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${item.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h5 class="card-title">${item.price}</h5>
              <a href="#" class="btn btn-primary">Buy now</a>
            </div>
          </div>
            `
        }
        
    })
}


// OOP Object oriented programming 

// ენკაფსულაცია
// მემკვიდრეობითობა
// პოლიმორფიზმი 
//         აბსტრაქცია

// let num;