const inputbox = document.getElementById('input')
const cardcontainer = document.getElementById('card-container')




async function getmovies(){
    if(inputbox.value === ""){
        alert('please provide text')

    } else {
       const response = await fetch(`http://www.omdbapi.com/?s=${inputbox.value}&apikey=5d2162b9`)
         const movies  = await response.json()
          const movielist = movies.Search;
          console.log(movielist);
          movielist.forEach(movie => {
            const div = document.createElement('div')
            const image = document.createElement('img')
            const name = document.createElement('h3')
            const year = document.createElement('h4')
            div.classList.add('card')
            image.classList.add('card-img')


            image.src = movie.Poster;
            name.innerText = movie.Title
            year.innerText = movie.Year
            

            div.appendChild(image);
            div.appendChild(name)
            div.appendChild(year)
            cardcontainer.appendChild(div)
          })
     
}
inputbox.value = "";
}