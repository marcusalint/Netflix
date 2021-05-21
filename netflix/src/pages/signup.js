import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName == "" || emailAddress == "" || password == "";

  return(


    <p>Hello from the signup</p>
  )
}