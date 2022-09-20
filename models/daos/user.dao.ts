import {util} from '../../commons'

const signUp = async(user:{username: string, password: string})=> {
    const sql = `
    insert into users
    set users.username = "${user.username}",
    users.password = "${user.password}"
    `
    const result = await util.dbUtil.querySingle(sql);

    if((<{id: number}>result).id){

        return true
    };

    return false
};

const existUserName = async(username: string )=> {
    const sql = `
    select username
    from users
    where username = "${username}"
    `
    const result = await util.dbUtil.querySingle(sql);
    if((<{username: string}>result).username){

        return true
    };

    return false
};

export default {
    signUp,
    existUserName,
}