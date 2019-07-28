import  React from 'react';
const Admin = ({children}:any) => {
    return <div>
        管理员管理
        {children || "Welcome to your Inbox"}
    </div>
}
export default Admin;