import React from 'react';

const UserInput = (props) =>(
    <div>
        <input type="text" value={props.value} onChange={props.onChange}/>
    </div>

)

export default UserInput;