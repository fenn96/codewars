const descendingOrder = n => Number(n.toString().split('').map(d => Number(d)).sort((a, b) => b - a).join(''));