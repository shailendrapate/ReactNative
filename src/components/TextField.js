import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View,Text,Keyboard } from 'react-native';
import { spacing } from './../utils';

const styles = StyleSheet.create({
  container: {
   
    paddingTop: 0,
   
  },
  input: {
    paddingHorizontal: 5,
   
  },
  inputfield: {
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000000',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#0079a6',
  },
  label: {
    color: 'gray',
    fontSize: 16,
    color: 'gray',
    fontWeight: 600
  },
});

export default function TextField({accessibilityLabel, onBlur, onFocus, placeholder,status, value, ...rest }) {
  
  const handleFocus = () => {
    if (!value) {
     value
    }

    onFocus?.();
  };

  const handleBlur = () => {
    if (!value) {
      value
    }

    onBlur?.();
  };

  



  return (
    <View style={styles.container}>
      <Text  style={[styles.label]}>
        {accessibilityLabel}
      </Text>
      <View
              style={[
                styles.inputfield,
                {
                  borderColor:
                  status
                },
              ]}>
      <TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={styles.input}
        value={value}
      placeholder={placeholder}
        {...rest}
        />
        </View>
    </View>
  );
}

TextField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};
