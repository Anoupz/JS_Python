/**
 * A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.

For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.
 */

function subdomainVisits(cpdomains) {
  if (!cpdomains || cpdomains.length === 0) {
    return []
  }

  let domainMap = new Map()
  const result = []
  for (let value of cpdomains) {
    const [countStr, domain] = value.split(' ')
    const count = parseInt(countStr)

    const domainArr = domain.split('.')
    const len = domainArr.length

    for (let i = len - 1; i >= 0; i--) {
      const curr = domainArr.slice(i).join('.')
      domainMap.set(
        curr,
        domainMap.get(curr) ? domainMap.get(curr) + count : count
      )
    }
  }

  for (let [domain, count] of domainMap) {
    result.push(`${count} ${domain}`)
  }

  return result
}

console.log(subdomainVisits(['9001 discuss.leetcode.com']))
console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ])
)
