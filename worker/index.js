const keys = require('./keys')
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
})

console.log("Starting redis worker")

const sub = redisClient.duplicate();

function fib(index){
    if(index < 2) return 1;
    return fib(index -1) + fib(index - 2);

}

sub.on('message', (channel, message)=>{
    console.log(message, "received message " )
    if(parseInt(message) < 31){
        redisClient.hset('values', message, fib(parseInt(message )));
    }else{
        redisClient.hset('values', message, "Value too large to calculate!")
    }
});

sub.subscribe('insert')