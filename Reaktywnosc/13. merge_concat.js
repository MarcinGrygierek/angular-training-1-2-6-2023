import { merge, concat, interval, take, map } from 'rxjs';

const interval1 = interval(100).pipe(take(10), map(val => `First ${val}`));
const interval2 = interval(150).pipe(take(10), map(val => `Second ${val}`));

merge(interval1, interval2).subscribe(result => console.log(result))
concat(interval1, interval2).subscribe(result => console.log(result))
