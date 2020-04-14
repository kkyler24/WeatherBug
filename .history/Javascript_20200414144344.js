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

        let list2 = $('<ul>')

        let li1 = $('<li>').text(response.city.name)
        list2.append(li1)
        let li2 = $('<li>').text('Temp: 87deg')
        list2.append(li2)

        $('.weather').append(list2)



        //$('.weather').append(list)
    }) 
})











