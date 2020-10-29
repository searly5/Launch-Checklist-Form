// Write your JavaScript code here!
window.addEventListener("load", function() {
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {

      let destChoice = document.getElementById("missionTarget")
      let index = Math.floor(Math.random() *10);
      while (index > json.length){
         index =  Math.floor(Math.random() *10);
      }

      if (destChoice) {

         let choice =  `<h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${json[index].name}</li>
                            <li>Diameter: ${json[index].diameter}</li>
                            <li>Star: ${json[index].star}</li>
                            <li>Distance from Earth: ${json[index].distance}</li>
                            <li>Number of Moons: ${json[index].moons}</li>
                        </ol>
                        <img src="${json[0].image}">`
              destChoice.innerHTML = choice;

      }
   });

});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.getElementById("pilotName").value;
      let copilotNameInput = document.getElementById("copilotName").value;
      let fuelLevelInput = document.getElementById("fuelLevel").value;
      let cargoMassInput = document.getElementById("cargoMass").value;
   
   
      if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!")
      }
      if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
           alert("Please enter a valid number.");
      }

      if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput)) {
         alert("Please enter a valid name.");
      }


      //add code to update faultyItems list with Name of Pilot & CoPilot
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput} is ready.`;
      document.getElementById("copilotStatus").innerHTML = `Co Pilot ${copilotNameInput} is ready.`;
      
      
      let liFuelStatus = document.getElementById("fuelStatus");
      let h2LaunchStatus = document.getElementById("launchStatus");
      let liCargo = document.getElementById("cargoStatus");
      let display = document.getElementById("faultyItems");

      if (fuelLevelInput > 10000 && cargoMassInput < 10000) {
         h2LaunchStatus.innerHTML = "Shuttle is ready for launch!";
         h2LaunchStatus.style.color = "green";
         console.log(h2LaunchStatus);
      }
      else if (fuelLevelInput < 10000) {
         display.style.visibility = "visible";
         h2LaunchStatus.innerHTML = "Shuttle not ready for launch!";
         h2LaunchStatus.style.color = "red";
         liFuelStatus.innerHTML= "Fuel level is too low to launch!";
      }
       if(cargoMassInput > 10000) {
         display.style.visibility = "visible";
         h2LaunchStatus.innerHTML = "Shuttle not ready for launch!";
         h2LaunchStatus.style.color = "red";
         liCargo.innerHTML = "Cargo too heavy for launch!";
      }
   

     
   });
      
});