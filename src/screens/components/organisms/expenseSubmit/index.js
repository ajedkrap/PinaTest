import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import color from '_theme/colors';

const ExpenseSubmit = ({form, budget, formValid, route, navigation: nav}) => {
  return (
    <View
      style={{minHeight: 60, justifyContent: 'flex-end', paddingVertical: 8}}>
      {form['category'] && (
        <View style={{marginBottom: 8}}>
          <Label
            contStyle={{paddingBottom: 8}}
            textStyle={{color: color.black, textTransform: 'capitalize'}}>
            {'Sisa Budget ' + form['category']['name']}
          </Label>
          <View
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: 28,
              borderRadius: 8,
              backgroundColor: color.grey,
            }}>
            <View
              style={{
                height: '100%',
                width: `${
                  ((Number(budget[form.category.id]) -
                    Number(form.amount.unmasked)) /
                    Number(budget[form.category.id])) *
                  100
                }%`,
                backgroundColor: form['category']['color'],
              }}
            />
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Label textStyle={{color: color.white}}>
                {Number(budget[form['category']['id']]) -
                  Number(form['amount']['unmasked']) +
                  ' / ' +
                  budget[form['category']['id']]}
              </Label>
            </View>
          </View>
        </View>
      )}

      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 2,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button
          center
          style={{
            minWidth: '15%',
            backgroundColor: color.disabled,
            borderRadius: 8,
            overflow: 'hidden',
          }}>
          <Icon name={'camera'} size={18} color={color.grey} />
        </Button>
        <Button
          ripple
          onPress={() => nav.navigate('detail', {form})}
          disabled={!formValid}
          center
          style={{
            flexGrow: 1,
            marginLeft: 8,
            backgroundColor: formValid ? color.orange1 : color.disabled,
            borderRadius: 8,
            overflow: 'hidden',
          }}>
          <Label textStyle={{color: formValid ? color.black : color.grey}}>
            Tambah
          </Label>
        </Button>
      </View>
    </View>
  );
};

export default ExpenseSubmit;
