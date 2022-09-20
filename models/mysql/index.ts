import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import fs from 'fs';

import env from '../../configs';

const pool: Pool = createPool(env.MYSQL_CONFIG);

const init = async(): Promise<void>=>{
  const table: string = fs.readFileSync('./table.sql').toString() as string;
  const conn: PoolConnection = await pool.getConnection() as PoolConnection;
  await conn.query(table);
  console.log('==========DB TABLE CREATE==========');
  console.log(table);
};
            
export default {
  pool,
  init,
}