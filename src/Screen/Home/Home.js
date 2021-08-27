import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import FastImage from 'react-native-fast-image';

import {PurpleSquare} from '../../Asset/Image';
import {LogoBiller} from '../../Asset/Image';
import {NotifLogo} from '../../Asset/Image';
import {Electric} from '../../Asset/Image';
import {Mobile} from '../../Asset/Image';
import {Internet} from '../../Asset/Image';
import {Landline} from '../../Asset/Image';
import {BPJS} from '../../Asset/Image';
import {PDAM} from '../../Asset/Image';
import {NoSubs} from '../../Asset/Image';

import {Category} from '../../Component/Component';

export default function Home(props) {
  const listCategory = [Electric, Mobile, Internet, Landline, BPJS, PDAM];
  return (
    <SafeAreaView>
      <ScrollView>
        <FastImage
          source={PurpleSquare}
          resizeMode="contain"
          style={styles.purplesquare}>
          <View style={styles.logoHeader}>
            <FastImage
              source={LogoBiller}
              resizeMode="contain"
              style={styles.bgLogo}
            />
            <FastImage
              source={NotifLogo}
              resizeMode="contain"
              style={styles.bgNotif}
            />
          </View>
          <View style={styles.containerCategory}>
            {listCategory.slice(0, 3).map((value, index) => {
              return <Category image={value} key={index} />;
            })}
          </View>
          <View style={styles.containerCategory}>
            {listCategory.slice(3, listCategory.length).map((value, index) => {
              return <Category image={value} key={index} />;
            })}
          </View>
        </FastImage>
        <Text style={styles.textSubs}>Active Subscription</Text>
        <FastImage
          source={NoSubs}
          resizeMode="contain"
          style={styles.bgNoSubs}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  purplesquare: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(63.5),
  },
  logoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bgLogo: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(10),
    marginHorizontal: 15,
    // marginBottom: 20,
  },
  bgNotif: {
    width: widthPercentageToDP(5),
    height: heightPercentageToDP(5),
    marginVertical: 17,
    marginRight: 20,
  },
  containerCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgElectric: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(18),
    marginHorizontal: 6,
  },
  bgLandline: {
    width: widthPercentageToDP(30),
    height: heightPercentageToDP(18),
    marginHorizontal: 9,
  },
  bgBPJS: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(18),
    marginHorizontal: 12,
  },
  bgPDAM: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(18),
    marginHorizontal: 23,
  },
  textSubs: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  bgNoSubs: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(50),
    marginTop: 5,
  },
});
