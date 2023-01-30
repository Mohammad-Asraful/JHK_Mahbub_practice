const loadNews = () => {
   const API_KEY = `0fc75f614b1241f28b97ed8f0e207b50`
   const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-23&sortBy=publishedAt&apiKey=${API_KEY}`

   fetch(url)
      .then(res => res.json())
      .then(data => loadData(data.articles))
}
loadNews()

const loadData = (datas) => {
   // console.log(datas)
   const news = document.getElementById('news')


   datas.forEach(data => {
      console.log(data)
      const div = document.createElement('div')
      div.classList.add('card')

      div.innerHTML = `
      <div class="row g-0">
      <div class="col-md-4">
        <img src="${data?.urlToImage}" class="img-fluid rounded-start w-100 h-100" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <a class="text-decoration-none fs-3 text-black font-bold" href="${data?.source?.name}">${data?.source?.name}</a>
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">
          ${data?.description?.slice(0, 120)}
          </p>
          <p class="card-text">
            <small class="text-muted">${data?.content?.slice(0, 120)}</small>
          </p>
        </div>
      </div>
    </div>
      `
      div.style.marginTop = '20px'

      news.appendChild(div)
   });

}

