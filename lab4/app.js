class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind(this)
            );
    }

    gotLocation(result){
        this.lat= result.coords.latitude;
        this.lng= result.coords.longitude;
        this.getWeather();
    }

    getWeather(){    
       let url= `https://api.weatherapi.com/v1/forecast.json?key=ec3799858a6942a080d92923210304&q=${this.lat},${this.lng}`;
       fetch(url).then(response => {
           return response.json();
       }).then(data => {
           document.querySelector("#weather").innerHTML= "Today, it's " + data.current.temp_c + " degrees and " + data.current.condition.text;

            if (data.current.temp_c < 18){
                let url= `http://www.boredapi.com/api/activity?type=relaxation`;
            
                fetch(url).then(response => {
                    console.log(response);
                    return response.json();
                }).then(data => {
                    document.querySelector("#activity").innerHTML= "That's the perfect moment to... " + data.activity;
                    document.querySelector("#ad").style.backgroundImage="url('koud.jpg')";
                    console.log(data);
                }).catch(err => {
                    console.log(err);
                })

            } else {
                let socialurl= `http://www.boredapi.com/api/activity?type=social`;

                fetch(socialurl).then(response => {
                    console.log(response);
                    return response.json();
                }).then(data => {
                   document.querySelector("#activity").innerHTML= "That's the perfect moment to... " + data.activity;
                   document.querySelector("ad").style.backgroundImage="url('zonnig.jpg')";
                   console.log(data);
                }).catch(err => {
                    console.log(err);
                });
            }

       }).catch(err => {
           console.log(err);
       });
    }

    errorLocation(err){
        console.log(err);
    }

}

let app= new App();
