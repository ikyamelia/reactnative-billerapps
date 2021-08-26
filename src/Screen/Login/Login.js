import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements/dist/buttons/Button';
import FastImage from 'react-native-fast-image';
import {RectangleLogin} from '../../Asset/Image';
import {LogoBiller} from '../../Asset/Image';

export default function Login(props) {
  return (
    <SafeAreaView>
      <View style={styles.bgContainer}>
        <FastImage
          source={RectangleLogin}
          resizeMode="contain"
          style={styles.bgLogin}>
          <FastImage
            source={LogoBiller}
            resizeMode="contain"
            style={styles.bgLogo}
          />
        </FastImage>
        <ScrollView style={styles.loginContainer}>
          <View>
            <Text style={styles.textWelcome}>Welcome Back!</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>Don't have an account? </Text>
            <Text style={styles.signText}>Sign Up</Text>
          </View>
          <View style={styles.LoginProperty}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <Button
            title="Login"
            titleStyle={styles.textStyle}
            buttonStyle={styles.button}
          />
          <Text style={styles.textForgot}>Forgot Password</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: 'white',
    height: heightPercentageToDP(100),
  },
  loginContainer: {
    paddingHorizontal: 16,
  },
  bgLogin: {
    width: widthPercentageToDP(87),
    height: heightPercentageToDP(37),
    alignSelf: 'flex-end',
  },
  bgLogo: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(15),
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  signText: {
    paddingLeft: 2,
    borderBottomWidth: 1,
    color: '#214457',
  },
  LoginProperty: {
    marginVertical: 15,
  },
  input: {
    marginTop: 15,
    color: 'black',
    fontSize: 15,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: 'grey',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4493AC',
    borderRadius: 6,
    marginVertical: 15,
  },
  textForgot: {
    borderBottomWidth: 1,
    color: '#214457',
    marginHorizontal: 133,
  },
});
