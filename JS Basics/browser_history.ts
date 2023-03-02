/**
 * Create a browser history with 3 functions visit, back, forward
 */

class BrowserHistory {
  private history
  private currentIndex

  constructor(homePage: string) {
    this.history = [homePage]
    this.currentIndex = 0
  }

  visit(url: string) {
    this.history.length = this.currentIndex + 1
    this.history.push(url)
    this.currentIndex++
  }

  back(steps: number) {
    const newIndex = Math.max(this.currentIndex - steps, 0)
    this.currentIndex = newIndex
    return this.history[newIndex]
  }

  forward(steps: number) {
    const newIndex = Math.min(
      this.currentIndex + steps,
      this.history.length - 1
    )
    this.currentIndex = newIndex
    return this.history[newIndex]
  }
}
