import axios from 'axios';
import React from 'react';
import { useState } from 'react'
import './style.scss'


export const Form: React.FC = () => {

    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [workplace, setWorkplace] = useState<string>('');
    const [checkedLanguage, setChecketLanguage] = useState<string>('');
    const [newInput, setNewInput] = useState<string>('');
    const [newInputValue, setNewInputValue] = useState<string>('');

    const submit = (event: any) => {
        event.preventDefault();
        clearIput()
        axios({
            method: 'post',
            url: 'https://botpashatesting.inboost.ai/api/MyClients/AddNewClient',
            headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDA0NDkwIiwiUm9sZUlkIjoiNCIsIlBvcnRhbElkIjoiMTAyNDI0Iiwicm9sZSI6IlBvcnRhbEFkbWluIiwibmJmIjoxNjYyMDExNzcwLCJleHAiOjE2Nzc2NTAxNzAsImlhdCI6MTY2MjAxMTc3MH0.xRegVe8mVkCf8JzD5xp6g7DDHDqtwX5tK550CZTFuhk' },
            data: {
                "userPhoneNumber": userPhoneNumber,
                "userName": userName,
                "lastName": lastName,
                "email": email,
                "workplace": workplace,
                "lang": checkedLanguage,
                "profession": newInputValue,
                "idRole": "de9b62b2-1ba9-4393-b191-efb19e05b22e"
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const groupRef = React.createRef<HTMLDivElement>();
    const addInputRef = React.createRef<HTMLDivElement>();
    const addNewInputRef = React.createRef<HTMLLabelElement>();

    const dropGR = (event: any) => {
        event.stopPropagation();
        setWorkplace(event.target.id)
        if (groupRef.current !== null) {
            groupRef.current.textContent = event.target.textContent;
            setToggleGroup(!toggleGroup);
        }
    };
    const dropIN = (event: any) => {
        event.stopPropagation();
        setNewInput(event.target.id)
        if (addInputRef.current !== null && addNewInputRef.current !== null) {
            addInputRef.current.textContent = event.target.textContent;
            addNewInputRef.current.textContent = event.target.textContent;
            setToggleNewInput(!toggleNewInput);
        };
    }
    const clearIput = () => {
        setUserPhoneNumber('')
        setUserName('')
        setLastName('')
        setEmail('')
        setWorkplace('')
        setChecketLanguage('')
        setNewInput('')
        setNewInputValue('')
        if (groupRef.current !== null) {
            groupRef.current.textContent = '?????????????? ??????????';
        }
        if (addInputRef.current !== null && addNewInputRef.current !== null) {
            addInputRef.current.textContent = '?????????????? ????????';
            addNewInputRef.current.textContent = '???????????????? ????????';
        };
        setToggleLanguage(false)
        setToggleNewInput(false)
        setToggleGroup(false)
    }

    const [toggleLanguage, setToggleLanguage] = useState(false);
    const toggleLAN = () => {
        setToggleLanguage(!toggleLanguage);
    };

    const [toggleNewInput, setToggleNewInput] = useState(false);
    const toggleNINP = () => {
        setToggleNewInput(!toggleNewInput);
    };

    const [toggleGroup, setToggleGroup] = useState(false);
    const toggleGR = () => {
        setToggleGroup(!toggleGroup);
    };

    const inputName = (event: any) => {
        setUserName(event.target.value.trim())
    }
    const inputLastname = (event: any) => {
        setLastName(event.target.value.trim())
    }
    const inputUserPhoneNumber = (event: any) => {
        setUserPhoneNumber(event.target.value.trim())
    }
    const inputEmail = (event: any) => {
        setEmail(event.target.value.trim())
    }
    const inputNewInputValue = (event: any) => {
        setNewInputValue(event.target.value.trim())
    }

    return (
        <div>
            <form onSubmit={submit} >
                <div className="elementsForm">

                    <div className="blocks">
                        <label htmlFor="name" className="labalToForms">????'??</label>
                        <input type="text" id='name' name='name' className="forminput" placeholder='????????????'
                            value={userName}
                            onChange={inputName} />
                    </div>

                    <div className="blocks">
                        <label htmlFor="lastname" className="labalToForms">????????????????</label>
                        <input type="text" id='lastname' name='lastname' className="forminput" placeholder='??????????????????????'
                            value={lastName}
                            onChange={inputLastname}
                        />
                    </div>

                    <div className="blocks">
                        <label htmlFor="phonenumber" className="labalToForms">?????????? ????????????????</label>
                        <input type="text" id='phonenumber' name='phonenumber' className="forminput" placeholder='1(999) 999-9999'
                            value={userPhoneNumber}
                            onChange={inputUserPhoneNumber}
                        />
                    </div>

                    <div className="blocks">
                        <label htmlFor="email" className="labalToForms">Email</label>
                        <input type="text" id='email' name='email' className="forminput" placeholder='example.com'
                            value={email}
                            onChange={inputEmail}
                        />
                    </div>

                    <div className="blocks">
                        <div className="labalToForms">?????????? ????????????????????????</div>
                        <div className="customSelect">
                            <div className="dropdown" onClick={toggleGR}>
                                <div className="dropdown__title" ref={groupRef} >?????????????? ??????????</div>
                                <div className={toggleGroup ? "dropdown__icon--close" : "dropdown__icon--open"}></div>
                            </div>
                            <ul className={toggleGroup ? "customSelectItems--show" : "customSelectItems"}>
                                <li className="customSelectItems__item"
                                    id={''}
                                    onClick={dropGR}
                                >?????????????? ??????????</li>
                                <li className="customSelectItems__item"
                                    id={'group1'}
                                    onClick={dropGR}
                                >?????????? 1</li>
                            </ul>
                        </div>
                    </div>

                    <div className="blocks">
                        <div className="labalToForms">????????</div>
                        <div className="customSelect">
                            <div className="dropdown" onClick={toggleLAN}>
                                <div className="dropdown__title">?????????????? ????????</div>
                                <div className={toggleLanguage ? "dropdown__icon--close" : "dropdown__icon--open"}></div>
                            </div>
                            <ul className={toggleLanguage ? "customSelectItems--show" : "customSelectItems"}>
                                <li className="customSelectItems__item" >
                                    <input type="radio" id='EN' className='radio'
                                        checked={checkedLanguage === 'EN'}
                                        onClick={() => { setTimeout(toggleLAN, 200); }}
                                        onChange={() => {
                                            setChecketLanguage('EN');
                                            setTimeout(toggleLAN, 200);
                                        }}
                                    />
                                    <label htmlFor="EN" className='labelRadio'>????????????????????</label>
                                </li>
                                <li className="customSelectItems__item" >
                                    <input type="radio" id='UA' className='radio'
                                        checked={checkedLanguage === 'UA'}
                                        onClick={() => { setTimeout(toggleLAN, 200); }}
                                        onChange={() => {
                                            setChecketLanguage('UA')
                                            setTimeout(toggleLAN, 200);
                                        }}
                                    />
                                    <label htmlFor="UA" className='labelRadio'>??????????????????</label>
                                </li>
                                <li className="customSelectItems__item" >
                                    <input type="radio" id='DE' className='radio'
                                        checked={checkedLanguage === 'DE'}
                                        onClick={() => { setTimeout(toggleLAN, 200); }}
                                        onChange={() => {
                                            setChecketLanguage('DE');
                                            setTimeout(toggleLAN, 200);
                                        }}
                                    />
                                    <label htmlFor="DE" className='labelRadio'>????????????????</label>
                                </li>
                                <li className="customSelectItems__item" >
                                    <input type="radio" id='FR' className='radio'
                                        onClick={() => { setTimeout(toggleLAN, 200); }}
                                        checked={checkedLanguage === 'FR'}
                                        onChange={() => {
                                            setChecketLanguage('FR');
                                            setTimeout(toggleLAN, 200);
                                        }}
                                    />
                                    <label htmlFor="FR" className='labelRadio'>????????????????????</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="blocks">
                        <div className="labalToForms">???????????? ???????? ????????</div>
                        <div className="customSelect">
                            <div className="dropdown" onClick={toggleNINP}>
                                <div className="dropdown__title" ref={addInputRef}>?????????????? ????????</div>
                                <div className={toggleNewInput ? "dropdown__icon--close" : "dropdown__icon--open"}></div>
                            </div>
                            <ul className={toggleNewInput ? "customSelectItems--show" : "customSelectItems"}>
                                <li className="customSelectItems__item" onClick={dropIN} id="">?????????????? ????????</li>
                                <li className="customSelectItems__item" onClick={dropIN} id="placeOfWork">?????????? ????????????</li>
                                <li className="customSelectItems__item" onClick={dropIN} id="job">????????????????</li>
                                <li className="customSelectItems__item" onClick={dropIN} id="age">??????</li>
                                <li className="customSelectItems__item" onClick={dropIN} id="birthdate">???????? ????????????????????</li>
                            </ul>
                        </div>
                    </div>

                    <div className="blocks">
                        <label htmlFor="lastname" className="labalToForms" ref={addNewInputRef}>???????????????? ????????</label>
                        <input type="text" id='lastname' name='lastname' className="forminput" placeholder='?????????????? ????????????????'
                            value={newInputValue}
                            onChange={inputNewInputValue}
                        />
                    </div>

                    <div className="foterForm">
                        <button className='foterForm__buttonAddInput'>???????????? ????????</button>
                        <button type='submit' className='foterForm__buttonSubmit'>???????????? ??????????????????????</button>
                    </div>

                </div>


            </form>
        </div>

    );
};

