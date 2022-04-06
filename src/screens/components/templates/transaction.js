import React from 'react';
import {Text, View} from 'react-native';

import {MUTATIONS} from '_helpers/data';
import DefaultHeader from '_organisms/defaultHeader';
import TransactionFilter from '_organisms/transactionFilter';
import TransactionList from '_organisms/transactionList';

const Transaction = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 16}}>
        <DefaultHeader
          title={'Pilih Transaksi'}
          back={() => props.navigation.goBack()}
        />
        <TransactionFilter />
      </View>
      <TransactionList data={MUTATIONS} {...props} />
    </View>
  );
};

export default Transaction;
