import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Colors } from '../../constants/global-styles';
import { CreateUserProps } from '../../services/auth-service';
import FlatButton from '../ui/falt-button';
import AuthForm from './auth-form';

export interface Props {
    isLogin?: boolean;
    onAuthenticate: (data: CreateUserProps) => void;
  }

const AuthContent = ({ isLogin, onAuthenticate }: Props) => {
    const navigation  = useNavigation();

    const [credentialsInvalid, setCredentialsInvalid] = useState({
      email: false,
      password: false,
      confirmEmail: false,
      confirmPassword: false,
    });
   
    function switchAuthModeHandler() {
      if(isLogin) {
          // @ts-ignore
        navigation.navigate('SignUp', null)
      } else {
          // @ts-ignore
        navigation.navigate('Login', null)
      }
    }
  
    function submitHandler(credentials: any) {
      let { email, confirmEmail, password, confirmPassword } = credentials;
  
      email = email.trim();
      password = password.trim();
  
      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 6;
      const emailsAreEqual = email === confirmEmail;
      const passwordsAreEqual = password === confirmPassword;
  
      if (
        !emailIsValid ||
        !passwordIsValid ||
        (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
      ) {
        Alert.alert('Invalid input', 'Please check your entered credentials.');
        setCredentialsInvalid({
          email: !emailIsValid,
          confirmEmail: !emailIsValid || !emailsAreEqual,
          password: !passwordIsValid,
          confirmPassword: !passwordIsValid || !passwordsAreEqual,
        });
        return;
      }
  
      const mode = isLogin ? "signInWithPassword" : "signUp" ;
      onAuthenticate({ email, password, returnSecureToken: true, mode: mode });
    }
  
    return (
      <View style={styles.authContent}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? 'Create a new user' : 'Log in instead'}
          </FlatButton>
        </View>
      </View>
    );
};

export default AuthContent;

const styles = StyleSheet.create({
    authContent: {
      marginTop: 64,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      backgroundColor: Colors.primary800,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.35,
      shadowRadius: 4,
    },
    buttons: {
      marginTop: 8,
    },
  });