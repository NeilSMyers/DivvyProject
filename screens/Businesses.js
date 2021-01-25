import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
  flatList: {
    backgroundColor: 'black',
  },
});

export default Businesses;
