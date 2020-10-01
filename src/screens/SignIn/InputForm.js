import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputForm({ phone, onChangeText }) {
  return (
    <View>
      <Text style={styles.inputPhoneTitle}>Nhập Số điện thoại</Text>
      <Text style={styles.textInput}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
        value={phone}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType='phone-pad'
        maxLength={12}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputPhoneTitle: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 40
  },
  textInput: {
    marginHorizontal: 16,
    marginTop: 16
  },
});