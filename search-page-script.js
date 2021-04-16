const searchButtonFun = () => {
  const divRow = document.querySelector(".albums");
  divRow.innerHTML = ""
  const searchInput = document.getElementById("search-input").value
  console.log('searchInput:', searchInput)
  console.log(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`);
  const myfetch = fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`)
    .then((res) => res.json())
    .then((data) => loadAlbums(data.data))
    .catch((error) => alert(error));
}

const loadAlbums = (albums) => {
  const divRow = document.querySelector(".albums");
  albums.forEach((element) => {
    divRow.innerHTML += `
        
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card mb-4">
          <a href="${location.origin}/HomePage.html?id=${element.album.id}" class="text-center">
            <img
              src="${element.album.cover}"
              alt="${element.album.id}"
            />
            </a>
            <div class="card-body">
              <p class="card-text text-center">
              ${element.album.title}
              </p>
              <p class="card-text text-center card-artist"><a href="${location.origin}/artist.html?id=${element.artist.id}">${element.artist.name}</a></p>
            </div>
          </div>
        </div>
        
      `;
  });
}

window.onload = () => {
  // console.log('albums:', albums)
  // console.log('location:', location)
  // console.log(`${location.origin}${location.pathname}`)
  console.log(`${location.origin}`)
  // console.log('location.href:', location.href)
  document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchButtonFun()
    }
  });
}


// const loadSongs = (songs) => {
//     console.log('songs:', songs)
//     const divRow = document.querySelector(".songs");
//     songs.forEach((element) => {
//         divRow.innerHTML += `
//         <div class="song row mb-5">
//           <img src="${element.album.cover}" class="song-image mr-3 img-fluid ml-2" alt="..." />
//         <div class="song-title col-8 text-left">
//         ${element.album.title}
//           <div class="song-artists"><a href="">${element.artist.name}</a></div>
//         </div>
//         <div class="song-length col-1">${element.duration}:00</div>
//       </div>
//         `;
//     });
// }
