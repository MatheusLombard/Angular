interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const {song, audioVolume:volume, details} = audioPlayer
const {author} = details


// console.log(`Song: ${audioPlayer.song}`) //without the destructuring
// console.log(`Song: ${song}`) //with the destructuring
// console.log(`Volume: ${volume}`) //with the destructuring
// console.log(`Autor: ${audioPlayer.details.author}`)//without the destructuring
// console.log(`Autor: ${author}`)//with the destructuring


const dbz: string[] = ['Goku', 'Vegeta'] //'Trunks']
// const trunks = dbz[2] || 'no exist'
const [, , p3 = 'not found'] = dbz

console.log(`Personaje 3: ${p3}`)

export {}