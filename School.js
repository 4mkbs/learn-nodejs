const EventEmmiter=require('events');
class School extends EventEmmiter{
    start_period(){
        console.log('class is started');

        setTimeout(()=>{
                this.emit('belling',{
                name:'sakib',
                age:22,
                degree:'Bsc'
            })
        },100);
    }
}
module.exports=School;