function updateTimer(isoDate, timerInfo) {
  const date = new Date(isoDate)

  const timeTillDate = date - Date.now()
  const seconds = Math.Floor(timeTillDate / 1000)
  const minutes = Math.Floor(seconds / 60)
  const hours = Math.Floor(minutes / 60)
  
}
