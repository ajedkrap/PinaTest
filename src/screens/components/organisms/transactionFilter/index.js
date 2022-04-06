import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Sort from '_images/sort';
import Filter from '_images/filter';
import color from '_theme/colors';

const TransactionFilter = ({padding}) => {
  return (
    <View
      style={{
        height: 64,
        paddingHorizontal: padding ? 16 : 4,
        paddingVertical: 8,
        flexDirection: 'row',
        marginVertical: 8,
      }}>
      <View
        style={{
          flexGrow: 1,
          borderColor: color.disabled,
          paddingHorizontal: 12,
          borderWidth: 1,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Label textStyle={{color: color.disabled}}>Search</Label>
        <Icon name={'magnify'} size={20} color={color.black} />
      </View>
      <View
        style={{
          height: '100%',
          aspectRatio: 1,
          borderWidth: 1,
          borderColor: color.disabled,
          borderRadius: 8,
          marginLeft: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Sort height={20} width={20} />
      </View>
      <View
        style={{
          height: '100%',
          aspectRatio: 1,
          borderWidth: 1,
          borderColor: color.disabled,
          borderRadius: 8,
          marginLeft: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Filter height={20} width={20} />
      </View>
    </View>
  );
};

export default TransactionFilter;
