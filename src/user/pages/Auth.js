import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validtors';
import { useForm } from '../../shared/hooks/form-hook';

import './Auth.css';

const Auth = () => {
   const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }
    return <Card className="authentication">
        <h2>Login</h2>
        <hr/>
        <form onSubmit={authSubmitHandler}>
            <Input 
                element="input"
                id="email"
                type="email"
                label="email"
                validators={[VALIDATOR_EMAIL]}
                errorText="Error"
                onInput={inputHandler}
                ></Input>
                 <Input 
                element="input"
                id="password"
                type="password"
                label="password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Error"
                onInput={inputHandler}
                ></Input>
            <Button type="submit"  disabled={!formState.isValid}>Login</Button>
        </form>
    </Card>;
};

export default Auth;
