var env = process.env.NODE_ENV || 'development';
//console.log('env******',env);
process.env.PORT = 3000;
if(env ==='development'){
    process.env.MONGODB_URI = 'mongodb://pavitar:vicsach@ds217310.mlab.com:17310/notes-todo-api';
} else if(env ==='test'){
    process.env.MONGODB_URI = 'mongodb://pavitar:vicsachtest@ds143608.mlab.com:43608/notes-todo-api-test';    
}