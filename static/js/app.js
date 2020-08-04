// from data.js
var tableData = data;

// Select the filter button using class
var button = d3.select("#filter-btn");

// Select the form
var selectForm = d3.select(".form-group");

// Create event handlers 
button.on("click", runFilter);
selectForm.on("submit",runFilter);

// Get the table body
var tbody = d3.select("tbody");

//Load table data when page loads

printData(data);



function runFilter()
{
               
    // Select the input text box using the id
    var inputdatefield = d3.select("#datetime");
    console.log(inputdatefield);
    var inputDate = inputdatefield.property("value");

    var inputcityfield = d3.select("#city");
    console.log(inputcityfield);
    var inputCity = inputcityfield.property("value").toLowerCase();

    var inputstatefield = d3.select("#state");
    console.log(inputstatefield);
    var inputState = inputstatefield.property("value").toLowerCase();

    var inputcountryfield = d3.select("#country");
    console.log(inputcountryfield);
    var inputCountry = inputcountryfield.property("value").toLowerCase();

    var inputshapefield = d3.select("#shape");
    console.log(inputshapefield);
    var inputShape = inputshapefield.property("value").toLowerCase();

    var filteredData = tableData;

    if(inputDate !="")
    {
        tbody.html("");
        filteredData = filteredData.filter(jsondata => jsondata.datetime === inputDate );
        printData(filteredData);  
    }
  
    if(inputCity !="")
    {
        tbody.html("");
        filteredData = filteredData.filter(jsondata => jsondata.city === inputCity );
        printData(filteredData); 
    }

    if(inputState !="")
    {
        tbody.html("");
        filteredData = filteredData.filter(jsondata => jsondata.state === inputState );
        printData(filteredData);  
    }

    if(inputCountry !="")
    {
        tbody.html("");
        filteredData = filteredData.filter(jsondata => jsondata.country === inputCountry );
        printData(filteredData);     
    }

    if(inputShape !="")
    {
        tbody.html("");
        filteredData = filteredData.filter(jsondata => jsondata.shape === inputShape );
        printData(filteredData);
    }

}

    
function printData(inputArray) 
{
    inputArray.forEach(function(ufodata) {
        console.log(ufodata);
        var row = tbody.append("tr");
            
        Object.entries(ufodata).forEach(function([key,value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        } );
    
    });

}





        

    
    
            
        
                        
        