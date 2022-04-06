import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import Bank from '_images/bank';
import Wallet from '_images/wallet';
import Card from '_images/card';
import color from '_theme/colors';

const getSourceIcon = key => {
  switch (key) {
    case 'ban':
      return <Bank height={16} width={16} />;
    case 'cre':
      return <Card height={16} width={16} />;
    default:
      return <Wallet height={16} width={16} />;
  }
};

const getSourceName = key => {
  switch (key) {
    case 'ban':
      return 'Bank';
    case 'cre':
      return 'Credit Card';
    case 'ewa':
      return 'E-Wallet';
    case 'cas':
      return 'Cash';
  }
};

const SourceForm = ({form, openSource}) => {
  return (
    <View style={{marginVertical: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Label textStyle={{color: color.black}}>Sumber Pengeluaran</Label>
        <Label
          textStyle={{color: form['source'] ? color.orange2 : color.disabled}}>
          Ganti Transaksi
        </Label>
      </View>
      <Button
        onPress={openSource}
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
        <View>
          {form['source'] ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24,
                  aspectRatio: 1,
                  borderRadius: 24 / 2,
                  backgroundColor: color.orange1,
                  marginRight: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {getSourceIcon(form['source']['source_type'])}
              </View>
              <Label
                textStyle={{textTransform: 'capitalize', color: color.black}}>
                {getSourceName(form['source']['source_type']) + ' - '}
                <Text style={{textTransform: 'uppercase'}}>
                  {form['source']['name']}
                </Text>
                {' ' + form['source']['account']}
              </Label>
            </View>
          ) : (
            <Label textStyle={{color: color.grey}}>
              Pilih Sumber Pengeluaran
            </Label>
          )}
        </View>
        <Icon
          name={'chevron-down-box-outline'}
          size={24}
          color={color.orange2}
        />
      </Button>
    </View>
  );
};

export default SourceForm;
