window.onload = () => {
	fetch('https://striveschool-api.herokuapp.com/api/deezer/album/75621062', {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			loadCoverImage(data);
			loadTitle(data);
			loadArtistName(data);
			loadTracks(data);
			totalTracks(data);
		})
		.catch((err) => console.log(err));
};

const loadCoverImage = (data) => {
	const img = document.getElementById('img-album-n');
	img.src = data.cover_xl;
	const footerImage = document.querySelector('.currentalbumart');
	footerImage.src = data.cover;
};
const loadTitle = (data) => {
	const title = document.querySelector('.album-n .container h4');
	title.innerHTML = data.title;
};
const loadArtistName = (data) => {
	const artist = document.querySelector('.album-n .container p');
	artist.innerHTML = data.artist.name;

	const trackArtists = document.querySelectorAll(' ul li:nth-child(even)');

	trackArtists.forEach((elem) => (elem.innerHTML = data.artist.name));
};
const loadTracks = (data) => {
	const parent = document.querySelector('.fa-ul');
	const titles = data.tracks.data
		.map(
			(track) => `	<li>
    <span class="fa-li"><i class="fas fa-music"></i></span>${track.title}
</li><li>${data.artist.name}</li>`
		)
		.join('');
	//console.log(titles);
	parent.innerHTML = titles;
};
const totalTracks = (data) => {
	const total = document.querySelector('.totalTracks');
	total.innerHTML = data.tracks.data.length + ' Songs';
};
