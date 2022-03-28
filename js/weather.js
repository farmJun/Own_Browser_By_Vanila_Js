

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a282c6cf6dc1d00bf47ec68b1dacbaea&units=metric`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText =data.weather[0].main;
    }
    );
}

function onGeoError(){
    alert("Can't find yoy. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);




