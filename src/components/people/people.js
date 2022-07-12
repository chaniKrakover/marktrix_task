import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './people.css'


const People = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispach = useDispatch();
    const state = useSelector(state => state.user)

    const initName = () => {
        if (searchTerm !== "") {
            if (/^[a-zA-Z]+$/.test(searchTerm) && searchTerm.length <= 12) {
                sendToServer();
            } else {
                alert('You have an error! invalid string')
            }
        }
        else {
            alert("insert string")
        }
    }

    const sendToServer = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`http://localhost:3002/person?name=${searchTerm}`, requestOptions)
            .then(response => response.json())
            .then((response) => {
                setSearchTerm(''); dispach({
                    type: "ADD_SEARCH",
                    payload: { searchString: searchTerm, user: response }
                })
            })
            .catch(error => console.log('error', error.message));
    }

    return (
        <div className='container'>
            {Object.keys(state).map((key) =>
                <div className='sub-container'>
                    <p>Name: {key}</p>
                    <p>Gender: {state[key].res1.gender}</p>
                    <p>Countries{state[key].res2.country.sort((a, b) => a.probability - b.probability)
                        .map(country =>
                            <p>{country.country_id}:{country.probability}</p>
                        )}</p>
                </div>
            )}
            <div className="app">
                <input className='input' type="text" value={searchTerm} placeholder="enter name..." onChange={e => setSearchTerm(e.target.value)} />
                <button className='btn' type='submit' onClick={initName}>Search</button>
            </div>
        </div>
    )
}


{/* <div className='container'>
            {resultSearch && resultSearch.map((item, i) => (
             <div key={i} className='sub-container'>
                 <img className='' src={'/images/'+item.picture}/>
                 <div className='label'>
                     {item.name}, {item.phone_number}, {item.birthday}
                 </div>
                 <p className='description'>
                     {item.address}
                 </p>
                </div>
            ))}
            <div className="app">
              
              <input className='input' type="text" placeholder="jon jou 25 0587694758" onChange={e => setSearchTerm(e.target.value)} />

              <button className='btn' type='submit' onClick={initDetails}>Search</button>
            </div>
        </div> */}
export default People;