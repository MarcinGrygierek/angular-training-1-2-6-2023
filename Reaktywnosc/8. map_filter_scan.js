import { map, filter, from, scan } from 'rxjs';

    const array = [1, 2, 3, 4, 5, 6, 7];
    const onlyEven = array.filter(el => el % 2 === 0);
    const squares = array.map(el => el ** 2);
    const sum = array.reduce((acc, curr) => acc + curr);
    console.log(onlyEven, squares, sum);

    from(array)
    .pipe(
      filter(val => val % 2 === 0)
    )
    .subscribe(val => console.log(val))

    from(array)
    .pipe(
      map(val => val ** 2)
    )
    .subscribe(val => console.log(val))

    from(array)
    .pipe(
      scan((acc, curr) => acc + curr)
    )
    .subscribe(val => console.log('Sum', val))
