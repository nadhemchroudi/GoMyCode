import { render } from '@testing-library/react';
import React from 'react'
import PropTypes from 'prop-types'

const profile = (props) => {
    const handleName = () => {
        alert(props.fullName);
    }
      return (
         <>
         <h1 onClick={handleName}>This is {props.fullName}</h1>
         <h1>I am a {props.profession}</h1>
         <h1>And that's my bio</h1>
         <img src={props.bio}/>
         </>);  
    };
profile.defaultProps = { 
    fullName : 'unknown',
    profession : 'nothing',
}
profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string
}
export default profile;