import React from 'react';
import {Text, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Label from '_atoms/label';
import Button from '_atoms/button';
import CategoryForm from '_molecules/categoryForm';
import MerchantForm from '_molecules/merchantForm';
import SourceForm from '_molecules/sourceForm';
import AmountForm from '_molecules/amountForm';
import DateForm from '_molecules/dateForm';
import NoteForm from '_molecules/noteForm';
import DOMPET from '_images/dompet.png';

const ExpenseForm = ({form, setForm, openCategory, openSource, onChange}) => {
  return (
    <KeyboardAwareScrollView
      style={{flexGrow: 1}}
      contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{height: 76, aspectRatio: 1, marginBottom: 8, marginTop: 16}}>
        <Image
          style={{flex: 1, height: null, width: null}}
          resizeMode="cover"
          source={DOMPET}
        />
      </View>
      <CategoryForm form={form} openCategory={openCategory} />
      <MerchantForm form={form} onChange={text => onChange(text, 'merchant')} />
      <SourceForm form={form} openSource={openSource} />
      <AmountForm form={form} onChange={text => onChange(text, 'amount')} />
      <DateForm form={form} onChange={onChange} />
      <NoteForm form={form} onChange={onChange} />
    </KeyboardAwareScrollView>
  );
};

export default ExpenseForm;
