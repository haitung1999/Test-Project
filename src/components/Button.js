import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ onPress, title, titleColor, backgroundColor }) {
  const titleStyle = { color: titleColor };
  const backgroundStyle = { backgroundColor: backgroundColor };
  return (
    <View style={styles.mainButton}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, backgroundStyle]}>
        <Text style={[styles.textButton, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#E6E6FA',
    textAlign: 'center',
    textShadowColor: '#DCDCDC',
    height: 50,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  textButton: {
    fontSize: 22,
    color: '#000000',
  },
});
