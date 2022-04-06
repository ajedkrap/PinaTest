import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import Button from '_atoms/button';
import color from '_theme/colors';

const CategoryButton = ({
  selected = false,
  onPress,
  title,
  color: categoryColor,
}) => {
  return (
    <Button
      onPress={onPress}
      ripple
      style={{
        borderBottomWidth: 1,
        borderBottomColor: color.disabled,
        height: 50,
      }}
      contentStyle={{
        flexDirection: 'row',
        paddingHorizontal: 12,
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
            height: 20,
            aspectRatio: 1,
            borderRadius: 20 / 2,
            backgroundColor: categoryColor,
            marginRight: 20,
          }}
        />
        <Label textStyle={{textTransform: 'capitalize', color: color.black}}>
          {title}
        </Label>
      </View>
      {selected && (
        <Icon name={'check-circle-outline'} size={20} color="green" />
      )}
    </Button>
  );
};

export default CategoryButton;
