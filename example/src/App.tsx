import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Loader from '@erickcrus/three-dots-loader';

const AppScreen = () => {
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }

  return <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <Text>Press button to test</Text>
    </View>
    <TouchableOpacity style={{
      flex: 0,
      backgroundColor: '#00b9fc',
      paddingVertical: 10,
      width: '82%',
      alignSelf: 'center',
      borderRadius: 10
    }} onPress={onPress}>
      {loading ?
        <Loader size={8} color='#FFF' /> :
        <Text style={{ color: '#FFF' }}>Test</Text>}
    </TouchableOpacity>
  </View>;
}

export default AppScreen;