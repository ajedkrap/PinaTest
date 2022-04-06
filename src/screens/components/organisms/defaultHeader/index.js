import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import color from '_theme/colors';

const DefaultHeader = ({title, back = () => {}}, setting = false) => {
  return (
    <View
      style={{
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name={'chevron-left'}
          color={color.black}
          size={24}
          onPress={back}
        />
      </View>
      <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
        <Label textStyle={{color: color.black, fontSize: 18}}>{title}</Label>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {setting && <Label textStyle={{color: color.orange2}}>Atur</Label>}
      </View>
    </View>
  );
};

export default DefaultHeader;
