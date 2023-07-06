import { View, TextInput, Button } from 'react-native';

import { styles } from './styles';

const InputTask = ({ task, borderColor, handleFocus, handleBlur, handleNewTask, handleTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="New task"
        placeholderTextColor="#C5C9E7"
        autoCorrect={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleTask}
        value={task}
      />
      <Button title="Create" color="#424D9E" onPress={handleNewTask} disabled={!task.length} />
    </View>
  );
};

export default InputTask;
