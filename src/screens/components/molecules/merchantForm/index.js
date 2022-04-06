import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import TextInput from '_atoms/textInput';

import color from '_theme/colors';

const MerchantForm = ({form, onChange}) => {
  return (
    <View style={{marginVertical: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Label textStyle={{color: color.black}}>Merchant</Label>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'line-scan'}
            style={{paddingRight: 8}}
            color={color.disabled}
          />
          <Label textStyle={{color: color.disabled}}>Scan receipt</Label>
        </View>
      </View>

      <View
        style={{
          minHeight: 48,
          width: '100%',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 12,
        }}>
        <TextInput
          value={form['merchant']}
          onChangeText={onChange}
          placeholder={'Ketik Merchant'}
          placeholderColor={color.grey}
          style={{color: color.black}}
        />
      </View>
    </View>
  );
};

export default MerchantForm;
