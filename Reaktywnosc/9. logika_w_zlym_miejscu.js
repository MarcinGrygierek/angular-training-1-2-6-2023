    const array = [1, 2, 3, 4, 5, 6, 7];

    from(array)
    .subscribe(val => {
      if(val % 2 === 0) {
        console.log(val)
      }
    })

