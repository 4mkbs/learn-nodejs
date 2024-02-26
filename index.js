console.log('core module\n');
const { log } = require('console');
//path module
// const path = require('path');
// const mypath='C:/Users/Sakib/learn-nodejs/index.js'
// console.log(path.basename(mypath));
// console.log(path.dirname(mypath));
// console.log(path.extname(mypath));
// console.log(path.parse(mypath));


//os module
const os=require('os');
// log(os.platform());
// log(os.homedir());
// log(os.hostname());
// log(os.freemem());
// log(os.arch());
// log(os.constants);
// log(os.cpus());
// log(os.networkInterfaces());
// log(os.endianness());
// log(os.loadavg());
// log(os.uptime());
// log(os.machine());
// log(os.release());
// log(os.userInfo());
// log(os.version());



//fs module

const fs=require('fs'); 

// fs.writeFileSync('test.txt','Hello mkbs');//syncronous
// fs.appendFileSync('test.txt','\ni am a programmer\nokay');
// const data = fs.readFileSync('test.txt');
// log(data.toString());

// fs.writeFile('hi.log','Okay this is asyncronous',err=>{
//     // log(err);
// });
// // fs.appendFile('hi.log','\nthis is additional');
// fs.readFile('hi.log',(err,data)=>{
//     console.log(data.toString());
// });

/*//start
//emmiter event in single file 
const EventEmmiter=require('events');
const emitter = new EventEmmiter();

//register a listener for belling event
emitter.on('belling',({name,age,degree})=>{
    log(`class is over. now we need to go ${name} is ${age} year old. ${degree}`);
});

//raise an event
setTimeout(()=>{
    emitter.emit('belling',{
        name:'sakib',
        age:22,
        degree:'Bsc'
    })
},100);
*/


//emitter inport from other file

const School=require('./School');
const school = new School();

school.on('belling',({name,age,degree})=>{
    console.log(`class is over. now we need to go ${name} is ${age} year old. ${degree}`);
});
school.start_period();