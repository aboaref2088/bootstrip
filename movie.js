const apikey = 'api_key=5809c72514b4c51c22ff022244df1f00'; 
const baseurl = 'https://api.themoviedb.org/3';
const imgurl = 'http://image.tmdb.org/t/p/original/';

let currentIndex = 0;
let movies = [];

function getPopularMovies() {
    const url = `${baseurl}/movie/popular?${apikey}&page=55`; // جلب الأفلام الشعبية
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            // اختيار 100 فيلم (إذا كانت البيانات تحتوي على أكثر من 100)
            movies = data.results.slice(0, 200); // تأكد من أنك تكتفي بـ 100 فيلم فقط
            return movies;
        });
}

function displayMovies() {
    const backgroundImage = document.getElementById("backgroundImage");
    const movieTitle = document.getElementById("movieTitle");
    const thumbnailContainer = document.getElementById("thumbnailContainer");

    // إضافة جميع الأفلام إلى شريط السلايدات
    movies.forEach(movie => {
        const thumbnailDiv = document.createElement("div");
        thumbnailDiv.classList.add("thumbnail");
        thumbnailDiv.innerHTML = `
            <p>${movie.original_title ? movie.original_title : movie.name}</p>
            <img src="${imgurl + movie.backdrop_path}" alt="${movie.title}">        `;
        thumbnailContainer.appendChild(thumbnailDiv);
    });

    // تحديث الخلفية والعنوان للمرة الأولى
    updateBackgroundAndTitle();

    // تغيير الخلفية والعنوان كل 2 ثواني
    setInterval(() => {
        currentIndex = (currentIndex + 1) % movies.length; // تحديث الفهرس
        updateBackgroundAndTitle();
    }, 2000);
}

function updateBackgroundAndTitle() {
    const backgroundImage = document.getElementById("backgroundImage");
    const movieTitle = document.getElementById("movieTitle");

    // تأكد من أن الفهرس داخل النطاق الصحيح
    if (movies.length > 0) {
        backgroundImage.style.backgroundImage = `url(${imgurl + movies[currentIndex].backdrop_path})`;
        movieTitle.textContent = movies[currentIndex].original_title ? movies[currentIndex].original_title : movies[currentIndex].name;
    }
}

// الحصول على الأفلام الشعبية وعرضها
getPopularMovies().then(displayMovies);





// تشغيل اغنية 

// عمل سليدات
// async function fetchMovies(page) {
//     const response = await fetch(`${baseurl}/movie/popular?${apikey}&page=${page}`);
//     return await response.json();
// }

// async function createSlider() {
//     for (let i = 1; i <= 10; i++) {
//         const movies = await fetchMovies(i);
//         const sliderDiv = document.createElement('div');
//         sliderDiv.classList.add('slider');
        
//         const title = document.createElement('h1');
//         title.innerText = `Movies - Page ${i}`;
//         sliderDiv.appendChild(title);
        
//         movies.results.forEach(movie => {
//             const movieDiv = document.createElement('div');
//             movieDiv.classList.add('movie');
//             movieDiv.innerHTML = `
//                 <img src="${imgurl}${movie.poster_path}" alt="${movie.title}">
//                 <p>${movie.title}</p>
//             `;
//             sliderDiv.appendChild(movieDiv);
//         });
        
//         document.getElementById('tthumbnailContainer').appendChild(sliderDiv);
//     }
// }

// createSlider();
// for (let i = 0; i < 4; i++) {
    
//     create
// createSlider();
// }
// انيميشن
window.onload = function() {
    const brand = document.querySelector('.navbar-brand');
    brand.classList.add('animate__fadeIn');
};
// تشغيل اغنية
// let btn = document.getElementById('ali');
// let audio =  document.getElementById('audio');

// btn.addEventListener( 'click' ,function() {
//     document.body.style.background='black';
// });
// btn.addEventListener( 'click' ,function() {
//     btn.style.background='blue';
// });
// btn.addEventListener( 'click' ,function() {
//     btn.style.color='white';
//     audio.play(); // تشغيل الأغنية


// });
