import {
  Person as PersonType,
  QueryListPeopleArgs,
  QueryPersonArgs,
  QuerySearchPeopleArgs
} from '../types';

import {
  findMany,
  findOne,
  SearchMany
} from '../packages/swapi';

const hasOne = ['homeworld'];

export class Person {
  public static listPeople = async (
    _: unknown,
    args: QueryListPeopleArgs,
  ): Promise<PersonType[]> =>
    findMany<PersonType>('people', {
      page: args.page || 1,
      hasOne
    });

  public static findOnePerson = async (_: unknown, args: QueryPersonArgs) =>
    findOne<PersonType>('people', {
      id: args.id,
      hasOne
    });

  public static SearchPeople = async (_: unknown, args: QuerySearchPeopleArgs) =>
    SearchMany<PersonType>('people', {
      name: args.name,
      hasOne
    });
}
