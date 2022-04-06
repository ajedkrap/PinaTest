import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Modal from 'react-native-modal';

import Label from '_atoms/label';
import Button from '_atoms/button';
import SourceButton from '_molecules/sourceButton';
import Bank from '_images/bank';
import Wallet from '_images/wallet';
import Card from '_images/card';
import color from '_theme/colors';

const SOURCES = [
  {id: 'cas', name: 'Cash', icon: <Wallet height={16} width={16} />},
  {id: 'ban', name: 'Bank', icon: <Bank height={16} width={16} />},
  {id: 'ewa', name: 'E-Wallet', icon: <Wallet height={16} width={16} />},
  {id: 'cre', name: 'Credit Card', icon: <Card height={16} width={16} />},
];

const SourceModal = ({visible, form, closeModal, onSelectSource}) => {
  const [selected, select] = useState(false);

  const onSelecting = source => {
    onSelectSource(source);
    select(true);
  };

  useEffect(() => {
    if (selected) {
      closeModal();
      select(false);
    }
  }, [selected]);

  return (
    <Modal
      style={{margin: 0}}
      isVisible={visible}
      backdropTransitionOutTiming={0}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            minHeight: '50%',
            paddingHorizontal: 14,
            paddingTop: 12,
            width: '100%',
            backgroundColor: color.white,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            justifyContent: 'flex-start',
          }}>
          <Label textStyle={{color: color.black}}>
            Pilih Sumber Penghasilan
          </Label>
          <View
            style={{
              marginVertical: 18,
            }}>
            {SOURCES.map((val, idx) => (
              <SourceButton
                key={idx + val['id']}
                id={val['id']}
                title={val['name']}
                icon={val['icon']}
                onSelect={val => onSelecting(val)}
                form={form}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SourceModal;
