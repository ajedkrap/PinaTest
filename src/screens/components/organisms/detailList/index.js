import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import moment from 'moment';
import 'moment/locale/id';

import Label from '_atoms/label';
import {currencyMask} from '_helpers/currencyMask';
import TransactionFilter from '_organisms/transactionFilter';
import color from '_theme/colors';
import {hS} from '_theme/metrics';

const DetailList = ({route, navigation: nav}) => {
  const {form} = route.params;
  return (
    <View
      style={{
        height: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: color.white,
      }}>
      <TransactionFilter padding />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            minHeight: 56,
            flexDirection: 'row',
            paddingHorizontal: 16,
            backgroundColor: color.neutral,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Label>
            {moment(form['date'], 'DD-MM-YYYY').format('DD MMMM YYYY')}
          </Label>
          <Label textStyle={{color: color.orange}}>
            {'IDR ' + currencyMask(form['amount']['unmasked'])}
          </Label>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: color.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: hS * (6 / 100),
            paddingHorizontal: 16,
            marginVertical: 8,
          }}>
          <View style={{maxWidth: '50%'}}>
            <Label textStyle={{color: color.black, paddingBottom: 2}}>
              {form['merchant']}
            </Label>
            <Label textStyle={{color: color.grey, fontSize: 12}}>
              {form['source']['name'] + ' - ' + form['source']['account']}
            </Label>
          </View>
          <View>
            <Label textStyle={{color: color.orange}}>
              {currencyMask(String(form['amount']['unmasked']))}
            </Label>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailList;
