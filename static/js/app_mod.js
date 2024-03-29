// import the data from data.js
const tableData = data; 

// reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out existing data
    tbody.html("");

    // loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append('tr');

        //loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter the data using that date
    if (date) {
        // apply 'filter' to the table data to only keep the rows where the 'datetime'value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data. If no data was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
