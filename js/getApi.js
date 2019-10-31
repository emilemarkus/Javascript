//quote,author,photo
var myHeaders = new Headers();

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
async function getQuote() {
    let templateToQuote = "";
    // we wait the call of the fetch    
    try {
        const result = await fetch("https://thatsthespir.it/api", myInit);
        let theData = result.json()
            .then(function(data) {

                templateToQuote = `<blockquote id="quote">${data.quote}</blockquote>`;
                if (data.photo !== "") {
                    templateToQuote += '<div id="imgContainer"> </div>';
                }
                templateToQuote += `<p id="author">${data.author}</p>`;
                document.getElementById("citaBlock").innerHTML = templateToQuote;
                if (data.photo !== "") {
                    let newImg = document.getElementById("imgContainer");
                    newImg.style.backgroundImage = "url(\"" + data.photo + "\")";
                }

            }).catch(function(error) {
                console.error(`Erreur dans la reception des donnée: Erreur:${error}`);
            })
    } catch (error) {
        console.error(`Erreur dans l'adresse de l'API : Erreur:${error}`);
    }

}
getQuote();