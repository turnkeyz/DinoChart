export function groupBy(arr, property) {
    let obj = arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});

    let result = []

    Object.entries(obj).forEach(val => {
        result.push({
            label: val[0],
            data: val[1]
        })
    })
    return result

  }


  export function formatDate(arr){
    arr = arr.map(row => {
      row.Year = row.Year.split("/").pop();
      return row
    })
    console.log(arr)
    return arr

      //console.log(this.dataset[0][0])
      //var date = ["5/31/2020", "6/1/2021", "6/2/2022"];
      //const result = [...new Set(date.map((s) => s.split("/")[2]))].sort();
      //console.log(result)
}

export function getYearLabels(arr) {
  let years = arr.map(row => row.Year)

  years = new Set(years.sort())

  return Array.from(years)
}

