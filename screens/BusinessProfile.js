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
    });
  }, []);

  return (
    <View>
      <View>
        <Text>{address}</Text>
        <Text>{city}</Text>
        <Text>{country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusinessProfile;
