function btn(){
    var getInp = document.getElementById('inp')
        fetch(`https://api.github.com/users/${getInp.value}`)
        .then(function(data) {
            return data.json()
            
        })
    
        .then(function(data){
            var sho= document.getElementById('show')
            sho.innerHTML += `
            <div class=" m-3 card d-flex" style="width: 18rem;">
      <img class="card-img-top" src=${data.avatar_url} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.bio ? data.bio : ' Bio data are not Available '} </div>
     
      <div class="card-body">
        
        <a  target = '_blank' href=${data.html_url} class="card-link">Go to Profile</a>
      </div>
    </div>`
    getInp.value = ''
     
        })
        .catch(function(err) {
            console.log(err)
        })
    }