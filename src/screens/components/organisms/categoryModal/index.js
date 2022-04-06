import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '_atoms/label';
import {CATEGORIES} from '_helpers/data';
import CategoryButton from '_molecules/categoryButton';
import color from '_theme/colors';

const CategoryModal = ({
  visible,
  form,
  closeModal,
  onSelectCategory,
  budget,
}) => {
  const [selected, select] = useState(false);

  const onSelecting = cat => {
    onSelectCategory({...cat, budget: budget[cat['id']]});
    select(true);
  };

  const onSelectedCategory = id => {
    if (form['category']) {
      if (form['category']['id'] === id) return true;
    }

    return false;
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
          <Label textStyle={{color: color.black}}>Pilih Kategori</Label>
          <View
            style={{
              marginVertical: 18,
            }}>
            {CATEGORIES.map((val, idx) => (
              <CategoryButton
                key={idx + val['id']}
                selected={onSelectedCategory(val['id'])}
                title={val['name']}
                color={val['color']}
                onPress={() => onSelecting(val)}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;
