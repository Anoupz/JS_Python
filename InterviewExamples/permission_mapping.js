const permissionMappedRoles = new Map([
  [
    'weather_viewer',
    {
      permissions: [
        'SELECT from TABLE temperatures',
        'SELECT from TABLE metrics',
      ],
      associatedRoles: new Set(['markets_viewer']),
    },
  ],
  [
    'markets_viewer',
    {
      permissions: ['SELECT from TABLE financial_markets'],
      associatedRoles: new Set(['temperature_viewer']),
    },
  ],
  [
    'temperature_viewer',
    {
      permissions: ['SELECT from TABLE metrics'],
      associatedRoles: new Set([]),
    },
  ],
])

const user_info = new Map([
  ['alice', new Set(['weather_viewer'])],
  ['bob', new Set(['markets_viewer'])],
  ['john', new Set(['some_random_role'])],
])

const hasPermission = (
  user,
  permission
) => {
  // from the permisson string get all the roles users need to have.

  // check if the user has that specific permission

  // Sol2
  // From the user passed get the roles and get all the permissons they would have access to
  // Check if the permisson matched the result set
  const userRoles = user_info.get(user) ?? []

  const result = getPermittedRoles(new Set(), userRoles)

  return result.has(permission)
}

function getPermittedRoles(permittedResources, roles) {
  for (let role of roles) {
    const { permissions, associatedRoles } = permissionMappedRoles.get(role)
    permittedResources.add(...Array.from(permissions))
    getPermittedRoles(permittedResources, associatedRoles)
  }

  return permittedResources
}

console.log(hasPermission('alice', 'SELECT from TABLE financial_markets')) // true
console.log(hasPermission('bob', 'SELECT from TABLE financial_markets')) // true
console.log(hasPermission('bob', 'SELECT from TABLE temperatures')) // false
// console.log(hasPermission("john", "SELECT from TABLE financial_markets"))

console.log(hasPermission('alice', 'SELECT from TABLE metrics')) // true
