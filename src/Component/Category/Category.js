import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import FastImage from 'react-native-fast-image';

const Category = ({image, callback}) => {
  return (
    <View>
      <FastImage
        source={image}
        resizeMode="contain"
        style={styles.bgElectric}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  bgElectric: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(18),
    marginHorizontal: 6,
  },
});
