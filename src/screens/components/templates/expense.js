import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import moment from 'moment';
import 'moment/locale/id';

import {currencyMask} from '_helpers/currencyMask';
import ExpenseForm from '_organisms/expenseForm';
import DefaultHeader from '_organisms/defaultHeader';
import ExpenseTabs from '_organisms/expenseTabs';
import ExpenseSubmit from '_organisms/expenseSubmit';
import CategoryModal from '_organisms/categoryModal';
import SourceModal from '_organisms/sourceModal';

const initialForm = {
  category: null,
  merchant: '',
  source: null,
  amount: {masked: '', unmasked: ''},
  date: null,
  note: '',
};

const budget = {
  ent: 5000000,
  edu: 10000000,
  sho: 1000000,
  prc: 1000000,
  hnf: 8000000,
  fnd: 4000000,
  inv: 10000000,
  aut: 30000000,
  oth: 800000,
  udc: 0,
};

const Expense = props => {
  const [form, setForm] = useState(initialForm);
  const [categoryModal, setCategoryModal] = useState(false);
  const [sourceModal, setSourceModal] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const onHandleForm = (value, key) => {
    let newValue;
    switch (key) {
      case 'amount':
        newValue = {
          masked: value && value !== '' ? currencyMask(value) : '',
          unmasked: value && value !== '' ? value.split('.').join('') : '',
        };
        break;
      default:
        newValue = value && value !== '' ? value : '';
        break;
    }
    setForm(state => ({
      ...state,
      [key]: newValue,
    }));
  };

  useEffect(() => {
    if (props.route.params['fromTrans']) {
      setForm(state => ({...state, ...props.route.params['fromTrans']}));
    }
  }, [props.route.params['fromTrans']]);

  useEffect(() => {
    if (
      form.category !== null &&
      form.merchant !== '' &&
      form.source !== null &&
      form.amount['masked'] !== '' &&
      form.amount['unmasked'] !== '' &&
      form.date !== null &&
      form.note !== ''
    ) {
      setFormValid(true);
    } else setFormValid(false);
  }, [form]);

  return (
    <View style={{flex: 1, paddingHorizontal: 15, backgroundColor: 'white'}}>
      <View>
        <DefaultHeader title={'Buat Transaksi'} />
        <ExpenseTabs />
      </View>
      <ExpenseForm
        form={form}
        openCategory={() => setCategoryModal(true)}
        openSource={() => setSourceModal(true)}
        onChange={onHandleForm}
        {...props}
      />
      <ExpenseSubmit
        formValid={formValid}
        form={form}
        budget={budget}
        {...props}
      />
      <CategoryModal
        visible={categoryModal}
        form={form}
        budget={budget}
        closeModal={() => setCategoryModal(false)}
        onSelectCategory={category => setForm(state => ({...state, category}))}
      />
      <SourceModal
        visible={sourceModal}
        form={form}
        closeModal={() => setSourceModal(false)}
        onSelectSource={source =>
          props.navigation.navigate('transaction', {source, form})
        }
      />
    </View>
  );
};

export default Expense;
