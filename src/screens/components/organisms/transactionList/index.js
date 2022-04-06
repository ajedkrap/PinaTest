import React from 'react';
import {Text, View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import 'moment/locale/id';

import Label from '_atoms/label';
import Button from '_atoms/button';
import {currencyMask} from '_helpers/currencyMask';
import color from '_theme/colors';
import {hS} from '_theme/metrics';

const TransactionList = ({data, route, navigation: nav}) => {
  const {source, form} = route.params;

  const onSelectSource = newForm => {
    nav.navigate('expense', {fromTrans: newForm});
  };

  const Transaction = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            height: hS * (6 / 100),
            backgroundColor: color.neutral,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Label textStyle={{color: color.black}}>
            {moment(item['date'], 'DD-MM-YYYY').format('DD MMMM YYYY')}
          </Label>
          <Label textStyle={{color: color.orange}}>
            {currencyMask(
              String(
                item.mutation.map(val => val.amount).reduce((a, b) => a + b),
              ),
            )}
          </Label>
        </View>
        {item.mutation.map((val, idx) => (
          <Button
            onPress={() =>
              onSelectSource({
                ...form,
                date: item.date,
                note: val['note'],
                source: {...source, trans_id: val['id']},
                amount: {
                  unmasked: String(val['amount']),
                  masked: currencyMask(String(val['amount'])),
                },
              })
            }
            key={idx + val['id']}
            style={{
              height: hS * (8 / 100),
              paddingHorizontal: 16,
              marginVertical: 8,
            }}
            contentStyle={{
              width: '100%',
              backgroundColor: color.white,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{maxWidth: '50%'}}>
              <Label textStyle={{color: color.black, paddingBottom: 2}}>
                {val['note']}
              </Label>
              <Label textStyle={{color: color.grey, fontSize: 12}}>
                {source['name'] + ' ' + source['account']}
              </Label>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Label textStyle={{color: color.orange}}>
                {currencyMask(String(val['amount']))}
              </Label>
              {form['source'] ? (
                val['id'] === form['source']['trans_id'] ? (
                  <Icon
                    name={'check-circle-outline'}
                    size={20}
                    style={{paddingLeft: 8}}
                    color="green"
                  />
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </View>
          </Button>
        ))}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={(val, idx) => val['id']}
        renderItem={props => <Transaction {...props} />}
      />
    </View>
  );
};

export default TransactionList;
