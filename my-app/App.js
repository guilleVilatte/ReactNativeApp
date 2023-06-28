import {
  View, TextInput, Button, SafeAreaView,
} from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='New task' />
          <Button title='Create' color='#424D9E'/>
        </View>
      </View>
    </SafeAreaView>
  );
}
