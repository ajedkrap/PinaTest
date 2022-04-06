import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import 'moment/locale/id';

import Label from '_atoms/label';
import Button from '_atoms/button';
import TextInput from '_atoms/textInput';

import color from '_theme/colors';

const DateForm = ({form}) => {
  return (
    <View style={{marginVertical: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Label textStyle={{color: color.black}}>Tanggal</Label>
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
          justifyContent: 'space-between',
        }}>
        <Label textStyle={{color: form['date'] ? color.black : color.grey}}>
          {moment(form['date'], 'DD-MM-YYYY').format('DD MMMM YYYY') ||
            '01 Januari 1990'}
        </Label>
        <Icon name={'calendar-month'} size={20} color={color.orange2} />
      </View>
    </View>
  );
};

export default DateForm;
