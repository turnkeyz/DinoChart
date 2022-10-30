//var barrelTotal =+ 1;
/*const states = [ "Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", 
"District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", 
"Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", 
"Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", 
"Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", 
"South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", 
"West Virginia", "Wyoming"];*/
//const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//var year = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
//var barrels = [];

//const dateDetails = []

export const chartOneData = {
    type:"line",
    data: {
        datasets: [{
            data: [{"Year":"2000","State":"texas","Barrels":"25"},
            {"Year":"2001","State":"texas","Barrels":"35"},
            {"Year":"2002","State":"texas","Barrels":"52"}]
        }]
    },
    options: {
        parsing: {
            xAxisKey: 'Year',
            yAxisKey: 'Barrels'
        }
    }
    
}
export default chartOneData;
