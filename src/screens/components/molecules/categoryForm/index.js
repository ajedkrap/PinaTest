import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import Coin from '_images/coin';
import color from '_theme/colors';

const CategoryForm = ({form, openCategory}) => {
  return (
    <View style={{marginVertical: 12}}>
      <Label contStyle={{marginBottom: 12}} textStyle={{color: color.black}}>
        Pilih Kategori
      </Label>
      <Button
        onPress={openCategory}
        horizontal
        style={{
          minHeight: 48,
          width: '100%',
          borderWidth: 1,
          borderRadius: 8,
        }}
        contentStyle={{
          paddingHorizontal: 16,
          width: '100%',
          alignItems: 'center',
        }}>
        {form['category'] ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Coin height={24} width={24} />
            <Label
              contStyle={{paddingLeft: 10}}
              textStyle={{color: color.black, textTransform: 'capitalize'}}>
              {form['category']['name']}
            </Label>
          </View>
        ) : (
          <Label textStyle={{color: color.grey}}>Pilih Kategori</Label>
        )}
        <Icon
          name={'chevron-down-box-outline'}
          size={24}
          color={color.orange2}
        />
      </Button>
    </View>
  );
};

export default CategoryForm;
