import  React from 'react';
const AdminAdd = ({match}:any) => {
    const {params:{id}} = match;
    console.log(match);
    return <div>
        管理员新增{id}
    </div>
}
export default AdminAdd;