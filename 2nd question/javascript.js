var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function(){
    if (xhr.status >=200 && xhr.status<300){
        var data = JSON.parse(this.responseText);

     for(i in data){
         console.log(data[i].flag);

     }   
    
    }
};

xhr.send();