import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id: 1,
        title: 'Populate Space Numbers',
        start: new Date('3/1/2019'),
        end: new Date('5/1/2019'),
        tags: ['space_numbering', 'gis', 'floorplans'],
        description: 'Add space numbers to all room polygons'
      },
      {
        id: 2,
        title: 'Convert All Mapbooks to MXD',
        start: new Date('3/1/2019'),
        end: new Date('5/1/2019'),
        tags: ['gis', 'floorplans', 'maps'],
        description: 'Need to convert all mapbooks to use the MXD format'
      }
    ];
    return {tasks};
  }
}