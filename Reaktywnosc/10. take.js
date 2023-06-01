    const array = [1, 2, 3, 4, 5, 6, 7];

    const sub = from(array)
    .pipe(
      take(3)
    )
    .subscribe(val => {
      console.log(val);
    })