//var barrelTotal =+ 1;
/*const states = [ "Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", 
"District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", 
"Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", 
"Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", 
"Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", 
"South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", 
"West Virginia", "Wyoming"];*/
//const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//const year = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
//var barrels = [10,202,555,44,33,21,21,66,22,88,99];

//const dateDetails = []

export const chartOneData = {
    type:"line",
    data: {
        datasets:[{
            label: 'Monthly Barrels',
            data: [
                {"Year":"2000","State":"texas","Barrels":"25"},
                {"Year":"2001","State":"texas","Barrels":"35"},
                {"Year":"2002","State":"texas","Barrels":"52"}
                /*
                {
                    id: 'Feb', monthly:
                    {
                        2008: {barrels: 77},
                        //2009: {barrels: 22},
                        //2010: {barrels: 55},
                    },
                },
                { 
                    id: 'Mar', monthly:
                    {
                        2008: {barrels: 66},
                        //2009: {barrels: 33},
                        //2010: {barrels: 111},
                    }
                },
                {
                    id: 'Apr', monthly:
                    {
                        2008: {barrels: 77},
                        //2009: {barrels: 22},
                        //2010: {barrels: 55},
                    },
                },
                { 
                    id: 'Jun', monthly:
                    {
                        2008: {barrels: 66},
                        //2009: {barrels: 33},
                        //2010: {barrels: 111},
                    }
                },
                {
                    id: 'Jul', monthly:
                    {
                        2008: {barrels: 77},
                        //2009: {barrels: 22},
                        //2010: {barrels: 55},
                    },
                },
                { 
                    id: 'Aug', monthly:
                    {
                        2008: {barrels: 66},
                        //2009: {barrels: 33},
                        //2010: {barrels: 111},
                    }
                },
                {
                    id: 'Sep', monthly:
                    {
                        2008: {barrels: 77},
                        //2009: {barrels: 22},
                        //2010: {barrels: 55},
                    },
                },
                { 
                    id: 'Oct', monthly:
                    {
                        2008: {barrels: 66},
                        //2009: {barrels: 33},
                        //2010: {barrels: 111},
                    }
                },
                {
                    id: 'Nov', monthly:
                    {
                        2008: {barrels: 77},
                        //2009: {barrels: 22},
                        //2010: {barrels: 55},
                    },
                },
                { 
                    id: 'Dec', monthly:
                    {
                        2008: {barrels: 66},
                        //2009: {barrels: 33},
                        //2010: {barrels: 111},
                    }
                }*/
            ],
            backgroundColor:"rgba(255,72,255,.5)",
            borderColor:"#36495",
            borderWidth:3
        }
            
            /*
            {
                /*label:"Barrels",
                data:["0","10","50","100","250","500","750","1000","1250","1500","2000"],
                backgroundColor:"rgba(255,72,255,.5)",
                borderColor:"#36495",
                borderWidth:3 */
             /*   label: "Barrels",
                data:[{
                    state: '2008', barrels:{

                    }
                }],
                backgroundColor:"rgba(255,72,255,.5)",
                borderColor:"#36495",
                borderWidth:3
            }
            */
        ]
    },
    options:
    {
        parsing:{
            xAxisKey: 'Year',
            yAxisKey: 'Barrels'
        },
        scales:{
            y: {
                beginAtZero: true
            }
        }
    }
}
export default chartOneData;
