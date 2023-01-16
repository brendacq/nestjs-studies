import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'brenda',
      username: 'brendacq',
      password: 'pass123',
    },
    {
      id: 2,
      name: 'celi',
      username: 'gatinha123',
      password: 'soulinda',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
