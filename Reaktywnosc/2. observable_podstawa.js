import { Observable } from 'rxjs'; 

const obs = new Observable(observer => {
  observer.next(1000);
  observer.error(1000);
})

obs.subscribe({
  next(value) {
    console.log('Success', value)
  }, 
  error(error) {
    console.log('Error', error);
  }
})