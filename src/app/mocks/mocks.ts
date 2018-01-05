import {Connection} from '../models/connection';

export const CONNECTIONS: Connection[] = [
  {id: 1, name: 'Postgres on Test', host: 'localhost', port: 27017, database: 'users', username: 'admin', password: 'admin'},
  {id: 1, name: 'Postgres on DEV', host: '10.156.23.36', port: 27017, database: 'users', username: 'admin', password: 'admin'}
];
