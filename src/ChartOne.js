export const chartOneData = {
    type:"line",
    data: {
        labels:[1,2,3,4],
        datasets:[
            {
                label:"Years",
                data:[1,2,3,4],
                backgroundColor:"rgba(54,72,93,.5)",
                borderColor:"#36495",
                borderWidth:3
            },
            {
                label:"Types",
                data:["oil","petroleum","natural gas","helium"],
                backgroundColor:"rgba(255,72,255,.5)",
                borderColor:"#36495",
                borderWidth:3
            }
        ]
    },
    options:
    {

    }
}

export default chartOneData;