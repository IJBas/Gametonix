// JavaScript source code 
var request = new XMLHttpRequest();
request.open('GET', "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);for (count in parsedData) {

        var gamename = parsedData[count].title;
        var gameratingcount = parsedData[count].steamRatingCount;
        var gamesale = parsedData[count].salePrice;
        var gamenormal = parsedData[count].normalPrice;
        var gameimage = parsedData[count].thumb;

        var gamename= "Name of the game: " + gamename;
        var gameratingcount = "Rating of the game: " + gameratingcount;
        var gamesale  = "On Sale price: $" + gamesale ;
        var gamenormal = "Normal price: $" + gamenormal;
    
        var gametitle = document.createElement('li');
        var gameratingc = document.createElement('li');
        var gamesaleprice = document.createElement('li');
        var gamenormalprice= document.createElement('li');
        var gameimages = document.createElement('img');
    
        gametitle.innerHTML = gamename;
        gameratingc.innerHTML = gameratingcount;
        gamesaleprice.innerHTML = gamesale ;
        gamenormalprice.innerHTML = gamenormal;
        gameimages.innerHTML = gameimage;
    
        gameimages.setAttribute('src', gameimage);
        document.body.appendChild(gametitle);
        document.body.appendChild(gameratingc);
        document.body.appendChild(gamesaleprice);
        document.body.appendChild(gamenormalprice);
        document.body.appendChild(gameimages);
     }
    
     console.log(parsedData);
     console.log(cpe);
     
     }
request.send();