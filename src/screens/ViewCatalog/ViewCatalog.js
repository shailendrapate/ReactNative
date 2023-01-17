import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDetails} from '../../redux/actions';
const ViewCatalog = ({navigation}) => {
    const {userdetails} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    //using action and getting data
    const fetchCatalogList = () =>
      dispatch(getUserDetails());
   
    useEffect(() => {
        fetchCatalogList()
        console.log('userdetails',userdetails.results)
    }, []);
  
    return (
       
      <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
        <Text style={{fontSize: 22}}>Catalog List</Text>
        <View style={{flex: 1, marginTop: 12, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
             </View>
          <FlatList
            data={userdetails?.results}
            style={{flex: 1, width: '100%'}}
            keyExtractor={item => item.name.toString()}
            renderItem={({item}) => {
              return (
                <View style={styles.inputfield}>
                  <View
                    style={{
                      marginVertical: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 20}}>{item.name}</Text>
                   
                  </View>
                
                  <View style={{width: '100%', justifyContent: 'space-around'}}>
                    <TouchableOpacity
                      >
                      <Text>View</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
       
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
  

export default ViewCatalog;
