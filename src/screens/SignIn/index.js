import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import InputForm from './InputForm';
import Button from '../../components/Button';
import { isPhoneValid, formatVietnamesePhone, removeSpaces } from '../../utils/utils';

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  // useEffect(() => {
  //   Alert.alert(
  //     'Welcome',
  //     'Chào mừng bạn đến với khóa học lập trình React Native'
  //   );
  // }, []);

  useEffect(() => {
    setIsValid(isPhoneValid(phone));
  }, [phone]);

  const onPress = useCallback(() => {
    if (!isPhoneValid(phone)) {
      Alert.alert('', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      return;
    }
    if (removeSpaces(phone) !== '0981756769') {
      Alert.alert('', 'Số điện thoại không tồn tại trên hệ thống');
      return;
    }
    // const message = isPhoneValid(phone)
    //   ? 'Số điện thoại đúng định dạng'
    //   : 'Số điện thoại không đúng định dạng. Vui lòng nhập lại';
    // Alert.alert('', message);
    navigation.navigate('Change Background');
  }, [navigation, phone])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.screenTitle}>Đăng nhập</Text>
        <View style={styles.divider1} /> */}
        <InputForm
          phone={phone}
          onChangeText={(text) => setPhone(formatVietnamesePhone(text))}
        />
        <View style={styles.divider2} />
        {!isValid ? (
          <Text style={styles.inlineMessage}>Số điện thoại không đúng</Text>
        ) : null}
        <View style={styles.fakeView} />
        <Button
          onPress={onPress}
          title="Tiếp tục"
          titleColor="white"
          backgroundColor="blue"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 16,
  },
  divider1: {
    width: '100%',
    height: 2.5,
    backgroundColor: '#C8C8C8',
  },
  divider2: {
    width: '100%',
    height: 1,
    backgroundColor: '#C8C8C8',
    marginHorizontal: 16
  },
  inlineMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
    marginHorizontal: 16,
  },
});
