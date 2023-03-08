const cityForm = document.querySelector("#weatherForm");
const getWeatherConditions = async(city) => {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");
        let city = document.createElement("h2");
        let cityNode = document.createTextNode(data.name);
        city.appendChild(cityNode);

        div.setAttribute("id", "conditions");
        let country = document.createElement("h1");
        let countryNode = document.createTextNode(data.sys.country);
        country.appendChild(countryNode);

        let temp = document.createElement("div");
        let tempNode = document.createTextNode("temperature |\t"+data.main.temp + " °C ");
        temp.appendChild(tempNode);

        let desc = document.createElement("div");
        let descNode = document.createTextNode("description | \t   "+data.weather[0].description);
        desc.appendChild(descNode);

        let rise = document.createElement("div");
        let riseNode = document.createTextNode("sunrise | \t   "+data.sys.sunrise);
        rise.appendChild(riseNode)

        let sset = document.createElement("div");
        let ssetNode = document.createTextNode("sunset | \t  "+data.sys.sunset);
        sset.appendChild(ssetNode);

        let time = document.createElement("div");
        let timeNode = document.createTextNode("Time Zone | \t  "+data.timezone);
        time.appendChild(timeNode);

        div.appendChild(city);
        div.appendChild(country);
        div.appendChild(temp);
        div.appendChild(desc);
        div.appendChild(rise);
        div.appendChild(sset);
        div.appendChild(timeNode);
        document.querySelector("main").appendChild(div);
    }).catch(err => console.log(err))

}


document.addEventListener("DOMContentLoaded", (e) => {
    cityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#city").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector("main").removeChild(conditionsDiv);
            }
            getWeatherConditions(document.getElementById("city").value);
        }else{
            console.log("You must provide a city");
        }
    })
})