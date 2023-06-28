import {
  View, TextInput, Button, SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#424D9E')

  const handleFocus = () => {
    setBorderColor('#424D9E')
  }

  const handleBlur = () => {
    setBorderColor('#C5C9E7')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, {borderColor: borderColor}]}
            placeholder='New task'
            placeholderTextColor='#C5C9E7'
            autoCorrect={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button title='Create' color='#424D9E'/>
        </View>
      </View>
    </SafeAreaView>
  );
}
