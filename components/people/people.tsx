import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './people.css'


const People = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    // const [resultGender, setResultGender] = useState<{ name: string; gender: string }[]>([])
    // const [resultCountry, setResultCountry] = useState<{ name: string, country: object }[]>([])
    // // const [resultSearch, setResultSearch] = useState<[{name:string,gender:string},{name:string,country:[]}][]>([]);

    const urlOne = `https://api.genderize.io/?name=${searchTerm}`;
    const urlTwo = `https://api.nationalize.io/?name=${searchTerm}`;

    // const initName = () => {
    //     if (searchTerm !== "") {
    //         if (/^[a-zA-Z]+$/.test(searchTerm) && searchTerm.length <= 12) {
    //             sendToServer();
    //         } else {
    //             alert('You have an error! invalid string');//change 
    //         }
    //     }
    //     else {
    //         alert("insert string")//change it
    //     }
    // }

    const sendToServer = () => {
        Promise.all([
            fetch(urlOne).then(res => res.json()),
            fetch(urlTwo).then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            // dispatch({ type: 'SET_USERS_DETAILES', payload: { ...userDetailes,urlOneData, urlTwoData } });
            setResultGender(urlOneData);
            setResultCountry(urlTwoData);
            console.log(resultGender);
         }).catch(error => console.log('no data', error.message))// to check it 
    }

    return (
        <div>
            {/* {resultGender.map((user, i) => (
                <div key={i} className='sub-container'>
                    <div className='label'>
                        {user.name}
                    </div>
                </div>
            ))} */}
            <div>
                <input type="text" placeholder="enter name..." onChange={e => setSearchTerm(e.target.value)} />
                <button type='submit' onClick={initName}>Search</button>
            </div>
        </div>
    )
}



export default People;

// {
//     Promise.all([
//         fetch(urlOne).then(res => res.json()),
//         fetch(urlTwo).then(res => res.json())
//     ]).then(([urlOneData, urlTwoData]) => {
//         // dispatch({ type: 'SET_USERS_DETAILES', payload: { ...userDetailes,urlOneData, urlTwoData } });
//         setResultGender(urlOneData);
//         setResultCountry(urlTwoData);
//         console.log(resultGender);
//      }).catch(error => console.log('no data', error.message))// to check it 
// }
