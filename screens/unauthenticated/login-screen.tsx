import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import AuthContent from '../../components/forms/auth-content';
import LoadingOverlay from '../../components/ui/loading-overlay';
import { CreateUserProps, postAuth } from '../../services/auth-service';
import { AuthContext } from '../../stores/auth-context';

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authContext = useContext(AuthContext);
  
    async function logInHandler(data: CreateUserProps) {
      setIsAuthenticating(true);
      
      try {
        const token = await postAuth(data);
        authContext.setAuthToken(token);
        setIsAuthenticating(false);
      } catch (error) {
        Alert.alert('Authentication Failed', "Please check you credentials and try again!");
        setIsAuthenticating(false);
      }
    }
  
    if(isAuthenticating) {
      return <LoadingOverlay />;
    }
    
    return <AuthContent isLogin={true}  onAuthenticate={logInHandler}  />;
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {}
});
