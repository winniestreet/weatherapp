var React= require('react');
//
// var WeatherMessage = (props) =>{
//   var {temp, location} = props;
//
//   return (
//     <div>
//       <p>It is {temp} in {location}</p>
//     </div>
//   );
// }

var WeatherMessage = ({temp, location}) =>{
  //ES6 destructuring syntax where you can access the properties of the props right
  // inside the function
  return (
    <div>
      <h3 className="text-center">It is {temp} in {location}</h3>
    </div>
  );
}


module.exports = WeatherMessage;
