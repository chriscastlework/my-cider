import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../ui/button';
import InputControl from '../ui/input-control';

interface Props {
    isLogin: any;
    onSubmit: any;
    credentialsInvalid: any;
  }

const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }: Props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
  
    const {
      email: emailIsInvalid,
      confirmEmail: emailsDontMatch,
      password: passwordIsInvalid,
      confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType: any, enteredValue: any) {
        switch (inputType) {
          case 'email':
            setEnteredEmail(enteredValue);
            break;
          case 'confirmEmail':
            setEnteredConfirmEmail(enteredValue);
            break;
          case 'password':
            setEnteredPassword(enteredValue);
            break;
          case 'confirmPassword':
            setEnteredConfirmPassword(enteredValue);
            break;
        }
      }

      function submitHandler() {
        onSubmit({
          email: enteredEmail,
          confirmEmail: enteredConfirmEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
        });
      }
    
  return (
    <View style={styles.form}>
    <View>
      <InputControl
        label="Email Address"
        onUpdateValue={updateInputValueHandler.bind(null, 'email')}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <InputControl
          label="Confirm Email Address"
          onUpdateValue={updateInputValueHandler.bind(null, 'confirmEmail')}
          value={enteredConfirmEmail}
          keyboardType="email-address"
          isInvalid={emailsDontMatch}
        />
      )}
      <InputControl
        label="Password"
        onUpdateValue={updateInputValueHandler.bind(null, 'password')}
        secure={true}
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      {!isLogin && (
        <InputControl
          label="Confirm Password"
          onUpdateValue={updateInputValueHandler.bind(null, 'confirmPassword')}
          secure
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
      </View>
    </View>
  </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
    buttons: {
      marginTop: 12,
    },
    form:{
  
    }
  });
