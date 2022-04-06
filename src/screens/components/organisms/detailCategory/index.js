import React from 'react';
import {Text, View} from 'react-native';

import Label from '_atoms/label';
import {hS} from '_theme/metrics';
import color from '_theme/colors';
import {currencyMask} from '_helpers/currencyMask';

const DetailCategory = ({route, navigation: nav}) => {
  const {form} = route.params;

  return (
    <View
      style={{
        minHeight: hS * (29 / 100),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          borderRadius: 12,
          width: '90%',
          overflow: 'hidden',
          elevation: 8,
        }}>
        <View
          style={{
            minHeight: 46,
            backgroundColor: form['category']['color'],
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Label
            textStyle={{
              color: color.white,
              textTransform: 'capitalize',
              fontSize: 18,
            }}>
            {form['category']['name']}
          </Label>
        </View>
        <View
          style={{
            minHeight: 156,
            backgroundColor: color.white,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{marginBottom: 12}}>
            <Label textStyle={{fontSize: 12, color: color.grey}}>
              Budget yang di alokasikan
            </Label>
            <Label textStyle={{fontSize: 24, color: color.black}}>
              {'IDR ' + currencyMask(String(form['category']['budget']))}
            </Label>
          </View>
          <View>
            <Label textStyle={{fontSize: 12, color: color.grey}}>
              Budget yang terpakai
            </Label>
            <Label textStyle={{fontSize: 24, color: color.green}}>
              {'IDR ' + currencyMask(String(form['amount']['unmasked']))}
            </Label>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailCategory;
