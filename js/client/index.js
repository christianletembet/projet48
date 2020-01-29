const article = art => {
    document.querySelector('#art').innerHTML = 
    `
    <div class="row" style="margin: 0.5em">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-author">${art.idPage}</h6>
                    <p class="card-text">${art.content}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

const id = window.location.search.replace('?id=', '')

fetch(`http://localhost:3000/reader/${id}`)
    .then(r => r.json())
    .then(data => {
        article(data)
    })

