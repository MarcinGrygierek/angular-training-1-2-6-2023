import { Observable } from 'rxjs';

const obs = new Observable(observer => {
  let counter = 0;
  const interval = setInterval(() => {
    observer.next(counter++);
  }, 1000)

  return {
    unsubscribe() {
      console.log('Clearing');
      clearInterval(interval);
    }
  }
})

const sub1 = obs.subscribe({
  next(value) {
    console.log('Success', value)
  },
  error(error) {
    console.log('Error', error);
  }
})

setTimeout(() => {
  sub1.unsubscribe()
}, 10000)

setTimeout(() => {
  const sub2 = obs.subscribe({
    next(value) {
      console.log('Success 2', value)
    },
    error(error) {
      console.log('Error 2', error);
    }
  })

  setTimeout(() => {
    sub2.unsubscribe()
  }, 1000)
}, 5000)


