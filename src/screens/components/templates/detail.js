import React from 'react';
import {Text, View} from 'react-native';

import DefaultHeader from '_organisms/defaultHeader';
import DetailCategory from '_organisms/detailCategory';
import DetailList from '_organisms/detailList';
import color from '_theme/colors';

const Detail = props => {
  return (
    <View style={{backgroundColor: color.disabled}}>
      <DefaultHeader
        title={'Detail Kategori'}
        back={() => props.navigation.goBack()}
        setting
      />
      <DetailCategory {...props} />
      <DetailList {...props} />
    </View>
  );
};

export default Detail;
