import  React from 'react';
import {EventPool,Subject,Observer} from './EventPool';
const validateProperty = () => {
    const obj:any = {name:23,age:45};
   
        const newProxy = new Proxy(obj,{
            get(target,key,value){
            return '';
            },
            set(target,key,value,proxy){
                console.log(target);

                if(key === 'my'){
                   // throw new Error('该key 为保留字段不可以设置！');
                }
                return Reflect.set(target,key,value,proxy); 

            }
        });
    return newProxy;
}

const Admin = ({children}:any) => {
    const data = validateProperty();
    console.log(data.my = 23);
    const eventPool = new EventPool();
    const subject = new Subject();
    const ob1 = new Observer(1);
    const ob2 = new Observer(2);
    const ob12 = new Observer(12);
    subject.addObserver(ob1);
    subject.addObserver(ob2);
    subject.addObserver(ob12);
    subject.notify();
    eventPool.subscribe('add',(a:number,b:number)=> {
        console.log("发布订阅",a+b);
    });
    eventPool.subscribe('add',(a:number,b:number)=> {
        console.log("发布订阅",a-b);
    });
    eventPool.public('add',5,4);
    return <div>
        管理员管理
        {children || "Welcome to your Inbox"}
    </div>
}
export default Admin;