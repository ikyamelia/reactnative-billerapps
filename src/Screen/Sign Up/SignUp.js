import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements/dist/buttons/Button';
import FastImage from 'react-native-fast-image';
import {RectangleLogin} from '../../Asset/Image';
import {LogoBiller} from '../../Asset/Image';
import {Background} from '../../Asset/Image';
import {Login} from '../Screen';

export default function SignUp(props) {
  const gotoLogin = () => {
    props.navigation.navigate(Login);
  };
  return (
    <KeyboardAvoidingView>
      <FastImage
        style={styles.bgContainer}
        resizeMode="stretch"
        source={Background}>
        <ScrollView>
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
          <View style={styles.loginContainer}>
            <View>
              <Text style={styles.textWelcome}>Getting Started</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => gotoLogin()}>
                <Text style={styles.signText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.LoginProperty}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  placeholderTextColor="gray"
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  placeholderTextColor="gray"
                />
              </View>
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
              title="Sign Up"
              titleStyle={styles.textStyle}
              buttonStyle={styles.button}
            />
          </View>
        </ScrollView>
      </FastImage>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: 'white',
    // height: heightPercentageToDP(100),
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
    paddingVertical: 5,
    borderColor: '#999999',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4493AC',
    borderRadius: 6,
    marginVertical: 15,
    marginBottom: 50,
  },
  textForgot: {
    borderBottomWidth: 1,
    color: '#214457',
    marginHorizontal: 133,
  },
});
