import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button
        title="increase"
        titleColor="black"
        backgroundColor="green"
        onPress={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))}
      />
      <Button
        title="decrease"
        titleColor="black"
        backgroundColor="blue"
        onPress={() => setCount((prev) => prev - 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 20,
  },
});
