function initialize() {

    var firstName="Anar";
    var lastName="Djafarov";
    var articles = "";

    for (i=0; i < (firstName.length*lastName.length); i++) {
        articles += "<article></article>";
    }

    document.getElementById("main3").innerHTML = articles;
    nameArticle = document.getElementsByTagName("article")[0];

    nameArticle.onmouseover = function() {
        nameArticle.style.backgroundColor = "#52626f";
        nameArticle.style.color = "#ffffff";
        nameArticle.innerHTML = firstName[0];
    }

    nameArticle.onmouseout = function() {
        nameArticle.style.backgroundColor = "#ffffff";
    }

    document.getElementById("dark").onclick = function() {
        for (i=0; i < (firstName.length*lastName.length); i++) {
            if(i == 0) {
                nameArticle.style.color = "#52626f";
            }
            document.getElementsByTagName("article")[i].style.background = "#52626f";
        }
    }

    document.getElementById("light").onclick = function() {
        for (i=0; i < (firstName.length*lastName.length); i++) {
            document.getElementsByTagName("article")[i].style.background = "#ffffff";
        }
    }
}