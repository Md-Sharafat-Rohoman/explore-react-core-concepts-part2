export default function Friend({friend}){
    // console.log(friend)
    const{name, email} = friend;
    return (
        <div style={{border:'4px solid green', borderRadius:'20px',margin:'10px'}}> 
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}