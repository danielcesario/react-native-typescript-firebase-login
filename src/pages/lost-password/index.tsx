import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LostPassword: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Lost Password Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LostPassword;
