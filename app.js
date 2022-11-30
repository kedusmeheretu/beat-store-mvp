// let size = songs.size;
// if (songs.id % 2 == 0){
//   size = 'medium'
// } else {
//   size = 'small'
// }
const songs = [
  {
    id: 1,
    title: "saint",
    mood: "uplifting",
    price: 29.99,
    img: "./images/saint.jpeg",
    desc: `this is saint by saiint`,
    size: 'small',
  },
  {
    id: 2,
    title: "open",
    mood: "mellow",
    price: 29.99,
    img: "./images/open.jpeg",
    desc: `this is open by saiint`,
    size: 'medium'
  },
  {
    id: 3,
    title: "found",
    mood: "uplifting",
    price: 29.99,
    img: "./images/found.jpeg",
    desc: `this is found by saiint`,
    size: 'medium'
  },
  {
    id: 4,
    title: "trip",
    mood: "uplifting",
    price: 29.99,
    img: "./images/trip.jpeg",
    desc: `this is beam by saiint`,
    size: 'large'
  },
  {
    id: 5,
    title: "oasis",
    mood: "uplifting",
    price: 29.99,
    img: "./images/oasis.jpeg",
    desc: `this is oasis by saiint`,
    size: 'small'
  },
  {
    id: 6,
    title: "echoes of light",
    mood: "uplifting",
    price: 29.99,
    img: "./images/echoes-of-light.jpeg",
    desc: `this is echoes of light`,
    size: 'medium',
  },
  {
    id: 7,
    title: "rockets",
    mood: "hype",
    price: 29.99,
    img: "./images/rockets.jpeg",
    desc: `this is rockets by saiint`,
    size: 'medium'
  },
  {
    id: 8,
    title: "steppin",
    mood: "hype",
    price: 29.99,
    img: "./images/steppin.jpeg",
    desc: `this is steppin by saiint`,
    size: 'small'
  },
  {
    id: 9,
    title: "zoom",
    mood: "uplifting",
    price: 29.99,
    img: "./images/zoom.jpeg",
    desc: `this is beam by saiint`,
    size: 'large'
  },
  {
    id: 10,
    title: "visions",
    mood: "mellow",
    price: 29.99,
    img: "./images/visions.jpeg",
    desc: `this is golden hour by saiint`,
    size: 'small'
  },
]


  


// get parent element
const pinContainer = document.querySelector(".pin-container");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displaySongItems(songs);
  displayMoodButtons();
});

// filter items // e = event object


function displaySongItems(songItems) {
  let displaySongs = songItems.map(function (item) {
    // console.log(item);

    return `
    
    <div class="card card-${item.size} mb-1" >
    <a href="#" class="">
    <img src=${item.img} class="pin-img" alt=${item.title}>
    <p>${item.title}</p>
    </a>  
    </div>
    
    `;
    
  });
  displaySongs = displaySongs.join("");
  // console.log(displayMenu);

  pinContainer.innerHTML = displaySongs;
}

function displayMoodButtons(){
  const moods = songs.reduce(
    function(values, item){
      if(!values.includes(item.mood)){
        values.push(item.mood)
      }
      return values;
    }, 
    ["all"]
  );

  console.log(moods)

  const moodBtns = moods
  .map( function (mood) {
    return `<button class="filter-btn btn py-1 ${mood}" type="button" data-id="${mood}">${mood}</button>`
  })
  .join("")
  

  btnContainer.innerHTML = moodBtns
  const filterBtns = document.querySelectorAll('.filter-btn')

  filterBtns.forEach(function (btn){
    btn.addEventListener('click', function(e){ 
      const mood = e.currentTarget.dataset.id
      const songMoods = songs.filter(function(songItem){
        if (songItem.mood === mood){
          return songItem;
        }
      });
  
      if(mood === "all"){
        displaySongItems(songs)
      } else {
        displaySongItems(songMoods)
      }
        
      console.log(songMoods)
    })
  })
}



