import React from 'react';

const todonested=[{
    fullName:"Ainal Haque",
    age: 41,
    phones : [
        {
            home:"657567",
            office:"4642466234"
        }
    ]

},
{
    fullName:"Karim",
    age: 32,
    phones : [
        {
            home:"657567852",
            office:"12062466234"
        }
    ]

},
{
    fullName:"Jaman",
    age: 26,
    phones : [
        {
            home:"555139203",
            office:"09787345"
        }
    ]

}];
const NestedList=()=>{
    return <div>
        <h1>Nested List</h1>
         {todonested.map((newlist,index) => (
            
            <article key={index}>
                <h3>FullName: {newlist.fullName}</h3>
                <p>Age: {newlist.age}</p>
                {
                    newlist.phones.map((phone,index)=><div key={index}>
                        <p>Home:{phone.home}</p>
                        <p>Office{phone.office}</p>
                    </div>)
                }
            </article>
         ))};
    </div>
}

export default NestedList