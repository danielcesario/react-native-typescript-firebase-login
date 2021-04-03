import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import User from '../../model/User';
import { create } from '../../services/AuthService';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import firebase from 'firebase';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleRegister = () => {
    const formErrors = validateForm();
    if (formErrors.length === 0) {
      const user: User = { name, email, password };
      create(user).then((userData) => {
        const param = {
          userName: userData.user?.displayName,
          userId: userData.user?.uid,
        };
        navigation.navigate('Home', param);
      });
    } else {
      alert(formErrors.join(', '));
    }
  };

  const validateForm = () => {
    const errors: string[] = [
      ...name === '' ? ['Nome é obrigatório'] : [],
      ...name.length <= 3  ? ['Nome inválido'] : [],
      ...email === '' ? ['E-mail é obrigatório'] : [],
      ...email.length <= 3  ? ['E-mail inválido'] : [],
      ...password === '' ? ['Senha é obrigatória'] : [],
      ...password.length < 6  ? ['Senha menor do que 6 caracteres'] : [],
      ...confirmPassword === '' ? ['Confirmação de senha é obrigatória'] : [],
      ...confirmPassword.length < 6  ? ['Confirmação de senha menor do que 6 caracteres'] : [],
      ...password !== confirmPassword  ? ['Confirmação de senha diferente da Senha'] : [],
    ];
    return errors;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder={'Digite seu nome'} onChangeText={(text) => setName(text)} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder={'Digite seu e-mail'} onChangeText={(text) => setEmail(text)} />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry placeholder={'Digite sua senha'} onChangeText={(text) => setPassword(text)} />

      <Text style={styles.label}>Confirmação de Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder={'Confirme sua senha'}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.buttonContainer} onPressOut={() => handleRegister()}>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
