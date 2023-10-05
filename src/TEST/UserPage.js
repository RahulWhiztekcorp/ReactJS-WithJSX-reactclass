import React from 'react'
import { Link,Outlet,useLocation,useParams} from 'react-router-dom'

const UserPage = () => {
    let {id,name} = useParams();
    let qureylocation = useLocation();
    const queryParams = new URLSearchParams(qureylocation.search);

    let category = queryParams.get('category');
    let posts = queryParams.get('posts');
    console.log(qureylocation);
    return (
        <div style={{ background: 'lightgreen', color: 'black', padding: '20px' }}>
            <h1>USER component</h1>
            <h4>User Id : {id}</h4>
            <h4>User Name : {name}</h4>
            <h4>Category : {category}</h4>
            <h4>Posts : {posts}</h4>
            <button><Link to='orders' style={{ textDecoration: 'none' }}>Orders</Link></button>
            <button><Link to='profile' style={{ textDecoration: 'none' }}>Profile</Link></button>
            <Outlet />
        </div>)
}

export default UserPage;