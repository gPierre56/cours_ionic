let content = document.getElementById('contenu');

let listeArticles = [];
fetch('https://devfest-nantes-2018-api.cleverapps.io/blog').then(function (reponse) {
    return reponse.json();
}).then(function (data) {
    data.forEach((element) => {
        listeArticles.push(element);
        console.log(listeArticles);
    })
}).then(function () {
    listeArticles.forEach((element) => {
        content.innerHTML = content.innerHTML.concat(
            `<ion-card>
             <img src = "https://devfest2018.gdgnantes.com${element.image}"/>
             <ion-card-header>
             <ion-card-title >${element.title}</ion-card-title>
             </ion-card-header>
             <ion-card-content>${element.brief}</ion-card-content>
            </ion-card>`
        )
    });
});




