import createError from 'http-errors';
import express, {Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from './routes';
import db from './models/mysql';

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

(async ()=>{
  try{
    await db.init();
  }
  catch(e: any){
    console.log(e.message)
  }
  
})();

app.use('/api/common', router.commonRouter);
app.use('/api/private', router.privateRouter);
app.use('/api/expert', router.expertRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction)=> {
    next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction)=> {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).json({message: err.message || 'not found'});
});

export default app;