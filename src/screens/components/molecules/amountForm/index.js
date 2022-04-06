import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import TextInput from '_atoms/textInput';

import color from '_theme/colors';

const AmountForm = ({form, onChange}) => {
  return (
    <View style={{marginVertical: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Label textStyle={{color: color.black}}>Jumlah Pengeluaran</Label>
      </View>
      <View
        style={{
          minHeight: 48,
          width: '100%',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name={'minus-box-outline'} size={20} color={color.disabled} />
        <TextInput
          value={form['amount']['masked']}
          onChangeText={onChange}
          style={{flexGrow: 1, paddingVertical: 8, color: color.black}}
          align={'center'}
          keyboard={'decimal-pad'}
          placeholder={'IDR 0'}
          placeholderColor={color.grey}
        />
        <Icon name={'plus-box-outline'} size={20} color={color.disabled} />
        <Icon />
      </View>
    </View>
  );
};

export default AmountForm;
