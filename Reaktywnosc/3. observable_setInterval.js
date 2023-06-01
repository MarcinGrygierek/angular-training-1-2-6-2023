import { Observable } from 'rxjs';

const obs = new Observable(observer => {
  let counter = 0;
  setInterval(() => {
    observer.next(counter++);
  }, 1000)
})

obs.subscribe({
  next(value) {
    console.log('Success', value)
  },
  error(error) {
    console.log('Error', error);
  }
})