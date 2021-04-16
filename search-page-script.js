const searchButtonFun = () => {
    const searchInput = document.getElementById("search-input").value
    console.log('searchInput:', searchInput)
    console.log(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`);
    const myfetch = fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`)
    .then((res) => res.json())
    .then((data) => loadAlbums(data.data))
    .catch((error) => alert(error));
}

const loadAlbums = (albums) => {
    console.log('albums:', albums)
    const divRow = document.querySelector(".albums");
    albums.forEach((element) => {
        divRow.innerHTML += `
        <div class="song row mb-5">
          <img src="${element.album.cover}" class="song-image mr-3 img-fluid ml-2" alt="..." />
        <div class="song-title col-8 text-left">
        ${element.album.title}
          <div class="song-artists"><a href="">${element.artist.name}</a></div>
        </div>
        <div class="song-length col-1">${element.duration}:00</div>
      </div>
        `;
    });
}


// if ("URLSearchParams" in window) {
//     //   "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen&q=eminem"
//     const url = new URL(
//         "https://striveschool-api.herokuapp.com/api/deezer/search"
//     );
//     // console.log("url.searchParams:", url.searchParams);

//     // const params = new URLSearchParams("");
//     // console.log("params:", params);
//     // console.log("url.search:", url.search);

//     let inputSearch = "queen hello";
//     const searchParams = new URLSearchParams("");
//     searchParams.set("q", inputSearch);
//     // for (values of searchParams) {
//     //   console.log("value:", values);
//     // }
//     console.log(`${url.href}?${inputSearch}`);
//     // window.history.replaceState(`${url.href}?${searchParams}`);
//     // window.history.replaceState({}, "", `${url.href}?${searchParams}`);
//     const aTag = document.createElement("a")
//     aTag.href = `${url.href}?${searchParams}`
//     aTag.innerText = "link"
//     // console.log('aTag:', aTag)
//     // console.log(document.querySelector('body'))
//     document.querySelector('body').appendChild(aTag)
// } else {
//     window.alert("Browser doesn't support URLSearchParams");
// }
