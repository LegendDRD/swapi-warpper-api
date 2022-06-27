import {
  findMany,
  findOne
} from '../packages/swapi';
import {
  QueryPlanetArgs,
  QueryListPlanetsArgs,
  Planet as PlanetType,
  Person as PersonType
} from '../types';

export class Planet {
  public static listPlanets = (
    _: unknown,
    args: QueryListPlanetsArgs,
  ): Promise<PlanetType[]> =>
    findMany<PlanetType>('planets', {
      page: args.page || 1
    });

  public static findOnePlanet = (
    _: unknown,
    args: QueryPlanetArgs,
  ): Promise<PlanetType> =>
    findOne<PlanetType>('planets', {
      id: args.id
    });

  public static getPersonPlanet = async (
    person: PersonType,
  ): Promise<PlanetType | null> => {
    if (!person.homeworld_id) {
      return null;
    }

    return await findOne<PlanetType>('planets', {
      id: person.homeworld_id
    });
  };
}
