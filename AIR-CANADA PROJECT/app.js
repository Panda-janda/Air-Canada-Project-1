
//code for next, reset, and previous section of Air Canada

const reviews = [
    {
      id: 1,
      name: 'Mr.Panda',
      job: 'Pilot',
      img: 'Panda.jpg',
      text: "Panda thinks that Air Canada is a great company and they treat their employees very well. He enjoys his job as a flight attendant as he gets to travel with the passengers",
    },
    {
      id: 2,
      name: 'Turtwig',
      job: 'flight attendant',
      img: 'turtwig.png',
      text: 'Turtwig has always been a hard worker, and loves his familiy here at Air Canada! He recommends that everyone comes and checks it out!',
    },
    {
      id: 3,
      name: 'Todo',
      job: 'Security',
      img: 'todo.jpg',
      text: 'Todo, the security, has always loved his here at Air Canada. He has always felt welcomed and tries to do the same for others.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.btn-prev');
  const nextBtn = document.querySelector('.btn-next');

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


  //
  let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("Third")) {
      count--;
    } else if (styles.contains("First")) {
      count++;}
      else if  (styles.contains("Second")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 
  //function to randomize hex colors for background of webpage

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Nom = document.getElementById("Fourth");
const color = document.querySelector(".color");

Nom.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//toggle for dropdown
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});

//code to toggle nav bar with Airplane icon 

function toggle() {
  var x = document.getElementById("nav-bar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
