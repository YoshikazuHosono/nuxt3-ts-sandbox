import { IncomingMessage, ServerResponse } from 'http';

// Proxy {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
export interface User {
  userId?: string;
  id?: number;
  title?: string;
  completed?: boolean;
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const data = await $fetch<User>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  return data;
};
