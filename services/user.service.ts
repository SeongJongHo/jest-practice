import dao from '../models/daos'

const signUp = async(userDto: {username: string, password: string})=>{
    const exist: boolean = await dao.user.existUserName(userDto.username);

    if(exist) throw new Error('user exist');

    const result: boolean = await dao.user.signUp(userDto);

    if(result){
        return {
            message: 'success',
            status: 201
        };
    }
    else{
        throw new Error('not success')
    };
};

export default {
    signUp,
}