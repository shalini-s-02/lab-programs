import * as readline from 'readline';

// Define interface for a Resource
interface Resource {
  name: string;
  description: string;
  location: string;
}

class ResourceManager {
  private resources: Resource[];
  private rl: readline.Interface;

  constructor() {
    this.resources = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  // Method to add a new resource
  async addResource(): Promise<void> {
    const name = await this.getUserInput('Enter resource name: ');
    const description = await this.getUserInput('Enter resource description: ');
    const location = await this.getUserInput('Enter resource location: ');

    this.resources.push({ name, description, location });
    console.log('Resource added successfully!');
  }

  // Method to search for resources by name
  async searchByName(): Promise<void> {
    const name = await this.getUserInput('Enter resource name to search: ');
    const searchResults = this.resources.filter(resource => resource.name.toLowerCase().includes(name.toLowerCase()));
    if (searchResults.length > 0) {
      console.log('Search Results:');
      searchResults.forEach(resource => console.log(resource));
    } else {
      console.log('No resources found with that name.');
    }
  }

  // Method to view all resources
  viewAllResources(): void {
    if (this.resources.length > 0) {
      console.log('All Resources:');
      this.resources.forEach(resource => console.log(resource));
    } else {
      console.log('No resources available.');
    }
  }

  // Public method to wrap the askQuestion method
  async getUserInput(query: string): Promise<string> {
    return new Promise(resolve => {
      this.rl.question(query, resolve);
    });
  }

  // Method to close the readline interface
  close(): void {
    this.rl.close();
  }
}

// Example usage
async function main() {
  const resourceManager = new ResourceManager();

  while (true) {
    console.log('\nMenu:');
    console.log('1. Add Resource');
    console.log('2. Search Resource by Name');
    console.log('3. View All Resources');
    console.log('4. Exit');

    const choice = await resourceManager.getUserInput('Enter your choice: ');

    switch (choice) {
      case '1':
        await resourceManager.addResource();
        break;
      case '2':
        await resourceManager.searchByName();
        break;
      case '3':
        resourceManager.viewAllResources();
        break;
      case '4':
        resourceManager.close();
        return;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

main();
