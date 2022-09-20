import { RowDataPacket, OkPacket } from 'mysql2/promise';

import db from '../models/mysql';

const querySingle = async(queryData: string): Promise<object> =>{
    const [rows, feilds] = await db.pool.query(queryData);
    console.log('========query result========')
    console.log((<RowDataPacket[]>rows)[0] || (<OkPacket>rows).insertId? (<RowDataPacket[]>rows)[0]:rows);
    if((<RowDataPacket[]>rows)[0]){
        
        return {...(<RowDataPacket[]>rows)[0]};
    };
    if((<OkPacket>rows).insertId > 0){
        return {id: (<OkPacket>rows).insertId};
    }
    return {};
};

const queryArray = async(queryData: string): Promise<RowDataPacket[]>=>{
    const [rows, feilds] = await db.pool.query<RowDataPacket[]>(queryData);
    console.log('========query result========')
    console.log(rows)
    if(rows[0]){

        return [...rows];
    }
    
    return [];
};

const getConnection = async()=>{
    return await db.pool.getConnection();
};

export default {
    queryArray,
    querySingle,
    getConnection,
};