class PackageManager {
  constructor() {
    this.packages = new Map()
    this.installed = new Set()
  }

  addPackage(name, dependencies) {
    this.packages.set(name, dependencies)
  }

  installPackage(name) {
    // If the package is already installed, return early
    if (this.installed.has(name)) {
      console.log(`${name} is already installed`)
      return
    }

    // If the package doesn't exist, throw an error
    if (!this.packages.has(name)) {
      throw new Error(`Package ${name} not found`)
    }

    // Install all dependencies of the package recursively
    const dependencies = this.packages.get(name)
    dependencies.forEach((dependency) => this.installPackage(dependency))

    // Add the package to the list of installed packages
    this.installed.add(name)
    console.log(`Installed ${name}`)
  }

  listInstalledPackages() {
    console.log(`Installed packages: ${[...this.installed].join(', ')}`)
  }
}

// Example usage
const packageManager = new PackageManager()

// Add packages with dependencies
packageManager.addPackage('A', ['B', 'C'])
packageManager.addPackage('B', ['C', 'D'])
packageManager.addPackage('C', [])
packageManager.addPackage('D', [])

// Install a package and its dependencies
packageManager.installPackage('A');
packageManager.installPackage('D');
packageManager.installPackage('B');
packageManager.installPackage('C');

// List installed packages
packageManager.listInstalledPackages()
