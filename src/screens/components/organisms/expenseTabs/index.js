import React from 'react';
import {Text, View} from 'react-native';

import Label from '_atoms/label';
import color from '_theme/colors';

const ExpenseTabs = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Label
        contStyle={{
          height: 36,
          width: '48%',
          backgroundColor: color.orange,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        textStyle={{color: color.white}}>
        Pengeluaran
      </Label>
      <Label
        contStyle={{
          height: 36,
          width: '48%',
          backgroundColor: color.disabled,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        textStyle={{color: color.black}}>
        Pemasukan
      </Label>
    </View>
  );
};

export default ExpenseTabs;
