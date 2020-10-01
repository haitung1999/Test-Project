import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../../components/Button';

const data = [
  {
    title: 'GREEN',
    titleColor: 'white',
    backgroundColor: 'green',
  },
  {
    title: 'BLUE',
    titleColor: 'white',
    backgroundColor: 'blue',
  },
  {
    title: 'BROWN',
    titleColor: 'white',
    backgroundColor: 'brown',
  },
  {
    title: 'YELLOW',
    titleColor: 'black',
    backgroundColor: 'yellow',
  },
  {
    title: 'RED',
    titleColor: 'white',
    backgroundColor: 'red',
  },
  {
    title: 'BLACK',
    titleColor: 'white',
    backgroundColor: 'black',
  },
];

export default function BackgroundChangeScreen() {
  const [background, setBackground] = useState('white');
  const backgroundStyle = { backgroundColor: background };

  return (
    <View style={[styles.container, backgroundStyle]}>
      {data.map((item) => {
        return (
          <Button
            title={item.title}
            titleColor={item.titleColor}
            backgroundColor={item.backgroundColor}
            onPress={() => setBackground(item.backgroundColor)}
            key={item.title}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
});
