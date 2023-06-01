
    interval(500)
    .pipe(
      takeUntil(timer(2000))
    )
    .subscribe((val) => console.log('Timer 1', val))
