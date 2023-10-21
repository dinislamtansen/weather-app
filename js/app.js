
const searchbtn= document.getElementById("searchbtn");
 
const cityName=document.getElementById("cityname").innerText;


const fetchWeather  = async (recvuserData) => {
    const weatherData= await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${recvuserData}&appid=8dd5d8dbedf8cc015073642042e8d9ba`
    );
    const result=await weatherData.json();
    console.log(result);

  const temperature= (result.main.temp-273.5).toFixed(2);
  document.getElementById("tempR").innerText=temperature;
}
const getdata = () =>{
    const userData = document.getElementById("inputBtn").value;
        document.getElementById("inputBtn").value="";
        document.getElementById("cityname").innerText= userData;
        fetchWeather(userData);
 }
searchbtn.addEventListener("click", getdata);

