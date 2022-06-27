import { Person } from './Person';
import { Planet } from './Planet';

export const resolvers = {
  Person: {
    homeworld: Planet.getPersonPlanet,
  },
  Query: {
    listPeople: Person.listPeople,
    person: Person.findOnePerson,
    listPlanets: Planet.listPlanets,
    planet: Planet.findOnePlanet,
    SearchPeople: Person.SearchPeople
  },
};
