const capitals = word => word.split('').map((c,i) => c.toUpperCase() === c ? i : null).filter(c => c !== null);