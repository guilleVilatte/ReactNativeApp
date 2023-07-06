import { useState } from 'react';
import { View, Button, SafeAreaView, Text, FlatList, Modal } from 'react-native';

import { InputTask, TaskItem } from './components';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, setBorderColor] = useState('#424D9E');

  const handleFocus = () => {
    setBorderColor('#424D9E');
  };

  const handleBlur = () => {
    setBorderColor('#C5C9E7');
  };

  const handleTask = (event) => {
    setTask(event);
  };

  const handleNewTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);
    setTask('');
  };

  const handleModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const handleRenderItem = ({ item }) => <TaskItem item={item} handleModal={handleModal} />;

  const handleDeleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTask.id));
    setIsVisible(false);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setSelectedTask(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          task={task}
          borderColor={borderColor}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          handleTask={handleTask}
          handleNewTask={handleNewTask}
        />
        <FlatList
          style={styles.taskListContainer}
          data={tasks}
          renderItem={handleRenderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task detail</Text>
          <View style={styles.modalBody}>
            <Text>Are you sure to delete {selectedTask?.value}?</Text>
          </View>
          <View style={styles.modalButtons}>
            <Button title="Cancel" color="#424D9E" onPress={handleCloseModal} />
            <Button title="Delete" color="red" onPress={handleDeleteTask} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
