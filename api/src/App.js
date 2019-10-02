import React,{Component} from 'react';
import './App.css';
import Title from './Title';
import From from './From';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
 state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
 }
 geather = async(e)=>{
  const API_KEY="3082951424b2f505f5b0c936f10134eb";
  e.preventDefault();
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data= await api_call.json();
console.log(data);
if(city && country){
this.setState({
   temperature:data.main.temp,
   city:data.name,
   country:data.sys.country,
   humidity:data.main.humidity,
   description:data.weather[0].description,
   error:" "
});

}
else
{ 
  this.setState({
   temperature:undefined,
   city:undefined,
   country:undefined,
   humidity:undefined,
   description:undefined,
   error:"Please Enter the Value"
});
 }
}
render(){
  return (
    <div>
     <div className="wrapper">
     <div className="main">
     <div className="container">
     <div className="row">
     <div className="col-xs-5 title-container">
     <Title />
     </div >
     <div className="col-xs-7 form-container">
      <From geather={this.geather} />
     <Weather 
     temperature={this.state.temperature}
     city={this.state.city}
     country={this.state.country}
     humidity={this.state.humidity}
     description={this.state.description}
     />
     </div>
     </div>
     </div>
     </div>
     </div>
    </div>
  );
}
}
export default App;

