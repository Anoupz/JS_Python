/**
 * Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
 */

function canAttendMeetings(intervals: number[][]): boolean {
  // sort by start time
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i++) {
    const m1End = intervals[i][1]
    const m2Start = intervals[i + 1][0]

    if (m1End > m2Start) {
      return false
    }
  }

  return true
}
