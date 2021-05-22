// Playlist

const Playlist = function () {
    this.currentSong = 0;
    this.songs = [];
};

Playlist.prototype.add = function (song) {
    if (this.songs.indexOf(song) === -1) {
        this.songs.push(song);
    } else {
        console.log('Song already exists in playlist.');
    }
};

Playlist.prototype.play = function () {
    this.songs[this.currentSong].isPlaying = true;
    console.log(`"${this.songs[this.currentSong].title}" started to play.`);
};

Playlist.prototype.stop = function () {
    this.songs[this.currentSong].isPlaying = false;
    console.log(`"${this.songs[this.currentSong].title}" stopped.`);
};

Playlist.prototype.next = function () {
    this.stop();
    this.currentSong = this.currentSong < this.songs.length - 1 ? this.currentSong + 1 : 0;
    this.play();
};

const Song = function (title, artist) {
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;
};

const playlist = new Playlist();
const heyJude = new Song('Hey Jude', 'The Beatles');
const jaded = new Song('Jaded', 'Aerosmith');
const someoneLikeYou = new Song('Someone like you', 'Adele');
const inThisShirt = new Song('In this shirt', 'The Irrepressible');

playlist.add(heyJude);
playlist.add(jaded);
playlist.add(someoneLikeYou);
playlist.add(inThisShirt);

playlist.play(); // "Hey Jude" started to play.
playlist.next(); // "Hey Jude" stopped. "Jaded" started to play.
playlist.next(); // "Jaded" stopped. "Someone like you" started to play.
playlist.next(); // "Someone like you" stopped. "In this shirt" started to play.
playlist.stop(); // "In this shirt" stopped.
playlist.play(); // "In this shirt" started to play.
console.log(playlist);
