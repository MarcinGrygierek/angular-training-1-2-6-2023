import { timer, interval } from 'rxjs';

timer(1000).subscribe(val => console.log(val));
timer(2000, 100).subscribe(val => console.log(val));
interval(100).subscribe(val => console.log(val));