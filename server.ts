import http from 'http';

import env from './configs'
import app from './app'

const port = env.PORT || '3000' as string

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log(`========= server start port => ${port} =========`)