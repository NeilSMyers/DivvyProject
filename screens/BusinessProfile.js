import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

const BusinessProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {address, city, country} = route.params?.location;

  React.useEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
      headerBackTitleVisible: false,
      headerTintColor: 'black',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{address}</Text>
      <Text style={styles.text}>{city}</Text>
      <Text style={styles.text}>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default BusinessProfile;
