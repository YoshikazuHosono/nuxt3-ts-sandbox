import { IncomingMessage, ServerResponse } from 'http';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const data = await $fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);

  return {
    someData: data,
  };
};
