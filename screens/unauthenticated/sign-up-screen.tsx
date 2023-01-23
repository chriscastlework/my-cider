import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import AuthContent from '../../components/forms/auth-content';
import LoadingOverlay from '../../components/ui/loading-overlay';
import { CreateUserProps, postAuth } from '../../services/auth-service';
import { AuthContext } from '../../stores/auth-context';

interface SignUpScreenProps {}

const SignUpScreen = (props: SignUpScreenProps) => {

    const authContext = useContext(AuthContext);

    const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  async function signUpHandler(data: CreateUserProps) {
    setIsAuthenticating(true);
    try {
      const token = await postAuth(data)
      authContext.setAuthToken(token);
    } catch (error) {
      Alert.alert("Error with sign up", "Please check data and try aga")
      setIsAuthenticating(false);
    }
  }
  
    if(isAuthenticating) {
      <LoadingOverlay />
    }
    return <AuthContent onAuthenticate={signUpHandler} />;
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {}
});
