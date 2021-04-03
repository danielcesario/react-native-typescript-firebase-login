import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { login } from '../../services/AuthService';
import { useNavigation } from '@react-navigation/core';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const doLogin = () => {
    login(email, password)
      .then((user) => {
        const param = {
          userName: user.user?.displayName,
          userId: user.user?.uid,
        };

        navigation.navigate('Home', param);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  type Screens = 'Register' | 'LostPassword' | 'Home' | 'Login'

  const goTo = (target: Screens) => {
    navigation.navigate(target);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder={'Digite seu e-mail'} onChangeText={(text) => setEmail(text)} />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry placeholder={'Digite sua senha'} onChangeText={(text) => setPassword(text)} />

      <TouchableOpacity style={styles.buttonContainer} onPressOut={() => doLogin()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => goTo('Register')}>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => goTo('LostPassword')}>
        <Text style={styles.buttonText}>Esqueci Minha Senha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
