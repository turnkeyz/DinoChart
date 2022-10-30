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

