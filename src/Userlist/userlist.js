import React from 'react';

const User = (props) => {
    return <p>{props.name}</p>;
    };

    const UserList = (props) => {
    return (
        <div>
        {props.users.map((user) => (
            <User key={user} name={user} />
        ))}
        </div>
    );
};

export default UserList;
