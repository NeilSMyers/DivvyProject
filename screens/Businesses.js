import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import data from '../data.json';

const BusinessItem = ({name, location, revenue}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('BusinessProfile', {name, location, revenue})
      }>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const Businesses = () => {
  return (
    <FlatList
      renderItem={({item}) => <BusinessItem {...item} />}
      data={data}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Businesses;
