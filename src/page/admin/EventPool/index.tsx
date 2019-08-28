
interface PoolProp {
    [propName: string]:Array<any>;
}
/**
 * 发布-订阅模式
 */
class EventPool {
    pool:PoolProp;
    constructor(){
        this.pool = {};
    }
    subscribe(type:string,fn:any){
        const { pool } = this;
        if(pool[type]){
            pool[type].push(fn);

        }else{
            pool[type] = [];
            pool[type].push(fn);
        }
    }
    public(type:string,...args:any[]){
        const { pool } = this;
        if(pool[type]){
            pool[type].forEach((itemFn)=> {
                itemFn(...args);
            });

        }else{
            console.log("该类型事件未被任何对象订阅");
        }

    }

}
/**
 * 观察者模式
 */
class Subject {
    sub:any;
constructor(){
    this.sub =[];
}
addObserver(ob:any){
    this.sub.push(ob);
}
notify(){
    this.sub.forEach((item:any)=>{
        item.update();

    })
}
}
class Observer {
    index:number;
    constructor(index:number){
        this.index = index;
    }
    update(){
        console.log("观察者模式",this.index,"更新数据");
    }
}
export { EventPool,Subject,Observer }
