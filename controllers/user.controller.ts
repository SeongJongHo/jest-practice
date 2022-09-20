import { Request, Response } from "express"
import service from '../services'

const signUp = async(req: Request, res: Response) =>{
    try{
        const userDto: {
            username: string,
            password: string
        } = {...req.body};
    
        const result :{
            message: string,
            status: number,
        } = await service.user.signUp(userDto);
    
        return res.status(result.status).json(result);
    }
    catch (err: any){
        return res.status(err.status || 500).json({message: err.message || 'server error'});
    }
};

export default {
    signUp,
}