const apikey = 'api_key=5809c72514b4c51c22ff022244df1f00';
const baseurl = 'https://api.themoviedb.org/3';
const imgurl = 'http://image.tmdb.org/t/p/original/';

async function fetchMovies(page) {
    const response = await fetch(`${baseurl}/movie/popular?${apikey}&page=${page}`);
    return await response.json();
}

async function createSlider() {
    for (let i = 1; i <= 2; i++) {
        const movies = await fetchMovies(i);
        const sliderDiv = document.createElement('div');
        sliderDiv.classList.add('slider');
        
        const title = document.createElement('h1');
        title.innerText = `Movies - Page ${i}`;
        sliderDiv.appendChild(title);
        
        movies.results.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <img src="${imgurl}${movie.poster_path}" alt="${movie.title}">
                <p>${movie.title}</p>
            `;
            sliderDiv.appendChild(movieDiv);
        });
        
        document.getElementById('tthumbnailContainer').appendChild(sliderDiv);
    }
}

createSlider();

// تعلم اضافة عناصر
// let contanier =document.createElement('div');
// let head =  document.createElement('h1');
// let img =  document.createElement('img');
// let content = document.createTextNode ('hello world');
// head.appendChild(content);
// img.src='/2.png';
// console.log(content);
// contanier.appendChild(head);
// contanier.appendChild(img );
// document.body.appendChild(contanier);
let container = document.createElement('div'); // تصحيح اسم المتغير من "contanier" إلى "container"
let head = document.createElement('h1');
let img = document.createElement('img');
let content = document.createTextNode('hello world');

head.appendChild(content);
img.src = '/2.png';
img.style.width="200px";
console.log(content);
container.appendChild(head); // استخدام "container" بدلاً من "contanier"
container.appendChild(img);
document.body.appendChild(container);
container.style.background='#666';
container.style.padding = '10px' 
container.style.textAlign = 'center';
container.style.width='300px';
container.style.color='white';

