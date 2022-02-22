import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './CreateModal.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const CreateModal = ({ setShowCreateModal }) => {
    const { createPost } = useContext(GlobalContext);

    const [currentCity, setCurrentCity] = useState(null);

    const [formInfo, setFormInfo] = useState({
        title: '',
        body: '',
        city: null,
        'love-react': true
    });

    const [clickSelect, setClickSelect] = useState({});
    const onSelectClick = (e) => {
        const currentSelectEl = e.currentTarget.dataset.name;

        setClickSelect(prev => {
            return {
                ...prev,
                [currentSelectEl]: !prev[currentSelectEl]
            }
        })
    }

    const onInputChange = (e) => {
        const currentInput = e.target.name;
        const currentValue = e.target.value;

        setFormInfo(prev => ({
            ...prev,
            [currentInput]: currentValue
        }))
    }

    const onCheckboxChange = (e) => {
        console.log(e.target.checked);

        setFormInfo(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.checked
            }
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        createPost(formInfo);
        setShowCreateModal(false);
    }

    useEffect(() => {
        setFormInfo(prev => {
            return {
                ...prev,
                city: currentCity
            }
        })
    }, [currentCity]);

    return (
        <div className='container-fluid' id='create-modal'>
            <form className='create-form' onSubmit={onFormSubmit}>
                <h2>Create Post</h2>
                <label className="input-set">
                    <span>Title</span>
                    <input
                        type="text"
                        name='title'
                        value={formInfo.title}
                        onChange={onInputChange}
                        required
                    />
                </label>

                <label className="input-set">
                    <span>Description</span>
                    <input
                        type="text"
                        name='body'
                        value={formInfo.body}
                        onChange={onInputChange}
                        required
                    />
                </label>

                <div className="custom-select-wrapper">
                    <p>City</p>
                    <div className="inner-select-wrapper" data-name="city-select"
                        onClick={onSelectClick}>
                        <div className="wisible-wrapper">
                            <span>{currentCity ? currentCity : '💦'}</span>
                            <FontAwesomeIcon
                                className='icon'
                                icon={faChevronDown}
                                style={{
                                    transform: clickSelect['city-select'] ? 'rotate(180deg)' : ''
                                }} />
                        </div>

                        {clickSelect['city-select'] && <Selections
                            currentCity={currentCity}
                            setCurrentCity={setCurrentCity}
                        />}
                    </div>
                </div>

                <div className="switch-wrapper">
                    <span>Love React :)</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="love-react"
                            onChange={onCheckboxChange}
                            checked={formInfo['love-react']}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>


                <div className="bttns-wrapper mt-4">
                    <button type='button' className="btn bttn-custom bttn-cancel" onClick={() => setShowCreateModal(false)}>Cancel</button>
                    <button type='submit' className="btn bttn-custom bttn-send">Send</button>
                </div>
            </form>
        </div>
    )
}

const Selections = ({ currentCity, setCurrentCity }) => {
    const cityList = ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Pleven'];
    // const newSelection = cityList.filter(el => el !== currentSelection);

    const onCurrentCityClick = (cityName) => {
        setCurrentCity(cityName);
    }

    return <ul className="ul-city-list ul-hidden">
        <li>💦</li>
        {cityList.map((el, i) => {
            return <li className="li-city" key={i} onClick={() => onCurrentCityClick(el)}>{el}</li>
        })}
    </ul>
}

export default CreateModal;