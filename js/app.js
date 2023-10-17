
const searchbtn= document.getElementById("searchbtn");

const fetchWeather  = async (recvuserData) => {
    const weatherData= await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${recvuserData}&appid=8dd5d8dbedf8cc015073642042e8d9ba`
    );
    const result=await weatherData.json();
    console.log(result.name);
}
const getdata = () =>{
    const userData = document.getElementById("searchbtn").value;
    document.getElementById("searchbtn").value="";
    fetchWeather(userData);
 }
searchbtn.addEventListener("click", getdata);

