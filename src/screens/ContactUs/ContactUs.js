import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Modal
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import ErrorView from '../../components/ErrorView';
import Validator, { validate } from 'email-validator';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const ContactUs = ({navigation}) => {

  const [date, setDate] = useState(null)
  const [datePicker, setDatePicker] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [maximumDate, setMaximumDate] = useState(new Date(Date.now()));
  const [modelShow, setModelShow] = useState(false)
  const dateChange = async (e, value) => {
    setDate(value);
  }
  
  const showDatePicker=async()=>{
    setDatePicker(true );
  };

  const handleSubmit = async () => {
    if (name == null || name == "" || name.length<=0) {
      ErrorView.toast('Please enter your name!','center')
    } else if (email == null || email == "" || email.length<=0) {
      ErrorView.toast('Please enter your email address!','center')
    }else if (!Validator.validate(email)) {
      ErrorView.toast('Please enter valid email address!','center')
    }
    else if (date == null || date == "" || date.length<=0) {
      ErrorView.toast('Please select your DOB!','center')
    } else {
     
      setModelShow(true)
    }
  }

  return (
   <>
      <Button title={'Back'} onPress={() => {navigation.goBack() }}  style={{backgroundColor:'#00000000',alignSelf:'flex-start'}} ></Button>
    <View style={styles.wrapper}>
      
       <Modal visible={modelShow} transparent>
    <View style={styles.modalWapper}>
      <View style={styles.condiotionView}>
      <Text style={[styles.modelSubHeadingText,{alignSelf:'center',marginTop:15,fontSize:18,fontWeight:'600',color:'#000'}]}>
          Contact Details
              </Text>
            <View style={styles.modelSubHeadingView}>
          
          <Text style={styles.modelSubHeadingText}>
           Name:{name}
              </Text>
              <Text style={styles.modelSubHeadingText}>
           Email:{email}
              </Text>
              <Text style={styles.modelSubHeadingText}>
           DOB:{date!=null&& moment(date).format('DD-MM-YYYY')}
          </Text>
        </View>
        <Button
            title={'Close'}
            style={styles.modelButtonView}
            onPress={() => {
                setModelShow(false)
            }}
        />
          
      </View>
    </View>
  </Modal>
      <TextField
        placeholderTextColor={'gray'}
        accessibilityLabel={'Name'}
        testID={"txtInputFullName"}
        returnKeyLabel="done"
        returnKeyType="done"
        maxLength={50}
        onSubmitEditing={()=>Keyboard.dismiss()}
        placeholder={'Enter your name'}
        value={name}
        onChangeText={(text) =>
          setName(text )
        }
        status={name.length < 1 ||name.length >= 6
          ? '#0079a6'
          : 'red'}
        />
      <TextField
        accessibilityLabel={'Email'}
        placeholderTextColor={'gray'}
        testID={"txtInputEmail"}
        keyboardType="email-address"
        returnKeyLabel="done"
        onSubmitEditing={()=>Keyboard.dismiss()}
        returnKeyType="done"
        maxLength={100}
        value={email}
        onChangeText={(text) =>
              setEmail(text )
        }
        placeholder={'Enter your email'}
        status={ email.length < 1 || Validator.validate(email)
            ? '#0079a6'
            : 'red'}
      />
           
    <View>
      <Text  style={[styles.label,{fontSize:16,color:'gray',fontWeight:600}]}>
       Date of birth
      </Text>
      <TouchableOpacity
        onPress={() => { showDatePicker() }}
        style={[
          styles.inputfield,{
            borderColor:'#0079a6',paddingVertical: 20,padding:10},
        ]}>
          <Text  >{date == null ? "Date of birth" : moment(date).format('DD-MM-YYYY')}</Text>
      </TouchableOpacity>
      </View>
      {datePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          maximumDate={maximumDate}
          value={date==null?new Date(Date.now()):date}
          mode={'date'}
          onChange={(event, value) => {setDatePicker(false );  dateChange(event, value)}}
          negativeButton={{label: 'Cancel', textColor: 'red'}}
        />
      )}
      <Button style={styles.button} textStyle={styles.buttonText} onPress={()=>{handleSubmit()}} title={'Submit'}/>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  button :{
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 15,
    marginTop:20,
    backgroundColor: '#20a8d8',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  inputfield: {
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000000',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#0079a6',
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalWapper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
},
condiotionView: {
    backgroundColor: "#fff",
borderRadius: 15,
marginHorizontal: 16,
width: '90%',
paddingHorizontal: 16,
paddingBottom: 20,
},
  modelHeadingView: {
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  modelHeadingText: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    alignSelf: "center",
    color: "#000",
  },
  modelSubHeadingView: {
    marginTop: 16,
    paddingVertical: 16,
    alignSelf: "flex-start",
  },
  modelSubHeadingText: {
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
    alignSelf: "flex-start",
    color: "#656565",
  },
  modelButtonView: {

    backgroundColor: 'gray',
    marginTop: 16,
    paddingVertical: 16,
    alignSelf: "center",
    width: '80%',
    borderRadius: 50,
  },
  modelButtonText: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    alignSelf: "center",
    color: "#fff",
  },
  modelCancelButtonView: {
    borderColor: '#000',
    borderWidth: 1.5,
    marginTop: 16,
    paddingVertical: 16,
    alignSelf: "center",
    backgroundColor: "transparent",
    width:'80%',
    borderRadius: 50,
  },
  modelCancelButtonText: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    alignSelf: "center",
    color: '#fff',
  },

});

export default ContactUs;