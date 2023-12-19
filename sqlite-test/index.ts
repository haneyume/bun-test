import { Database } from 'bun:sqlite';

const db = new Database(':memory:');

const query = db.query("select 'Hello world' as message;");

const result = query.get();

console.log(result);
