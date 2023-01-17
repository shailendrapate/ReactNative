
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';

const Home = ({navigation}) => {

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20,alignSelf:'center',justifyContent:'center'}}>
     <Button  onPress={()=>{navigation.push('ContactUs')}} title={'Contact US'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#219653',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  inputfield: {
    borderRadius: 15,
    padding: 12,
    backgroundColor: '#cfd8dc',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Home;
