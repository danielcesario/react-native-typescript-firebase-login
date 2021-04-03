import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../../App';
import { useNavigation, useRoute } from '@react-navigation/core';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<ProfileScreenRouteProp>();
  const { userName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Olá {userName}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Contas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Carteiras</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Amigos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Gráficos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Opções</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F2E2',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'yellow',
    width: '100%',
    padding: 16,
  },
  buttonRow: {
    backgroundColor: '#E9F2E2',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 32
  },
  button: {
    backgroundColor: '#52796F',
    height: 150,
    width: 150,
    borderRadius: 8,
    marginRight: 32,
    marginTop: 32,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default Home;
