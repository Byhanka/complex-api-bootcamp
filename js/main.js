const btn = document.querySelector('#search')

function mangaSearch(){
    let search = document.querySelector('input').value
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${search}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let anime = data[1].anime
            document.querySelector('#animeTitle').innerText = data[1].anime
            document.querySelector('#character').innerText = data[1].character
            document.querySelector('#quote').innerText = data[1].quote

            const url2 = `https://nekos.best/api/v2/search?query=${anime}&type=2&format=pat&amount=2`
            

            fetch(url2)
            
            .then(res => res.json())
            .then(animeData =>{
                console.log(animeData)
                document.querySelector('img').src = animeData.results[0].url
            })
         })
        .catch(err => {
            console.log(`error ${err}`)
            alert('Quote not found')
    });
}
btn.addEventListener('click', mangaSearch)