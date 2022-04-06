import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import TextInput from '_atoms/textInput';
import color from '_theme/colors';

const NoteForm = ({form}) => {
  return (
    <View style={{marginVertical: 12}}>
      <View style={{marginBottom: 12}}>
        <Label textStyle={{color: color.black}}>Keterangan</Label>
      </View>
      <View
        horizontal
        style={{
          minHeight: 48,
          width: '100%',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 16,
        }}>
        <TextInput
          value={form['note']}
          style={{color: color.black}}
          placeholderColor={color.grey}
          placeholder={'Masukkan Keterangan'}
        />
      </View>
    </View>
  );
};

export default NoteForm;
