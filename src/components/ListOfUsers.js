import React from 'react';
import CardUser from './CardUser'

function ListOfUsers(props) {
    const { users, nameOfAdmin, handleName } = props
    //console.log(props.users)
    return (

        <div style={{ marginTop: '50px' }}>

            <h1>{nameOfAdmin}</h1>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    users.map(el =>
                        <CardUser key={el.id} style={{ marginLeft: 50 }} user={el} handleName={handleName} />
                    )
                }
            </div>
            {/* 
   {users.map(el =>
                <div>

                    <h1 >{el.name}</h1>
                    <h1 >{el.email}</h1>
                </div>

            )}
*/}
        </div>
    )
}
export default ListOfUsers