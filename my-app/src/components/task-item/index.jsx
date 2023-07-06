import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const TaskItem = ({ item, handleModal }) => {
  return (
    <TouchableOpacity style={styles.taskContainer} onPress={() => handleModal(item)}>
      <Text style={styles.task}>{item.value}</Text>
      <Text style={styles.delete}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
