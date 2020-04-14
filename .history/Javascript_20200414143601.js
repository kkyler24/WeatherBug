// Button listen to submit when you enter city for search
$("button").on("click", function(){
    // grab what the user typed in search bar by using val = value of 
let inputV = $("input").val();
// make a GET request.
$.ajax ({
    url:'https://api.openweathermap.org/data/2.5/forecast?q='+ inputV +'&appid=35d41c69f299226c76713fa860faca87',
    method:"GET"})
    // this line gets the data then saves it as a response then console logs the response.
    .then(function(response){
       console.log(response);
        let list =$( `
        <ul>
                        <li>${response.city.name}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
        
        `)

        $('.weather').append(list)
    }) 
})











