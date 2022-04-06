import React from 'react';
import {View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import color from '_theme/colors';

import BCA from '_images/bca.png';
import BNI from '_images/bni.png';

const BankSource = [
  {id: 'bca', name: 'BCA', icon: BCA, account: '3484', color: '#005bAA'},
  {id: 'bni', name: 'BNI', icon: BNI, account: '2656', color: '#00555c'},
];

const SourceButton = ({id: source_type, title, form, icon, onSelect}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: color.disabled,
        paddingHorizontal: 12,
      }}>
      <View
        style={{
          minHeight: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
            {icon}
          </View>
          <Label textStyle={{textTransform: 'capitalize', color: color.black}}>
            {title}
          </Label>
        </View>
      </View>
      <View>
        <View>
          {title === 'Bank' &&
            BankSource.map((val, idx) => (
              <Button
                ripple
                key={idx + val['id']}
                onPress={() => onSelect({...val, source_type})}
                style={{
                  minHeight: 54,
                  justifyContent: 'center',
                }}
                contStyle={{
                  flexDirection: 'row',
                  paddingHorizontal: 12,
                }}>
                <View
                  style={{
                    marginLeft: 32,
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 24,
                      aspectRatio: 1,
                      borderRadius: 24 / 2,
                      backgroundColor: val['color'],
                      marginRight: 20,
                    }}>
                    <Image
                      style={{
                        height: null,
                        width: null,
                        flex: 1,
                        transform: [{scale: 2}],
                      }}
                      resizeMode="center"
                      source={val['icon']}
                    />
                  </View>
                  <Label
                    textStyle={{
                      textTransform: 'uppercase',
                      color: color.black,
                    }}>
                    {val['name'] + ' ' + val['account']}
                  </Label>
                </View>
                {form['source'] ? (
                  form['source']['account'] === val['account'] ? (
                    <Icon
                      name={'check-circle-outline'}
                      size={20}
                      color="green"
                    />
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </Button>
            ))}
        </View>
      </View>
    </View>
  );
};

export default SourceButton;
