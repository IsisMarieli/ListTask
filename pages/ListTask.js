import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListTask({ route }) {
  const apelido = route?.params?.userApelido || 'Usuário';

  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  function addToTask() {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setListTask([...listTask, newTask]);
      setTask('');
      return;
    }

    setModalVisible(true);
    return;
  }

  function toggleDone(index) {
    const updatedTasks = [...listTask];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setListTask(updatedTasks);
  }

  function removeTask(index) {
    setListTask(listTask.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Olá {apelido}, monte sua ListTask!</Text>

        <View style={styles.contentHeader}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#fff"
            value={task}
            onChangeText={setTask}
          />

          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Atenção!</Text>
                <Text style={styles.modalText}>
                  Por favor, insira uma task!
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.modalButton]}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Entendi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={addToTask} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listTask}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text
                style={[
                  styles.textCardList,
                  item.completed && styles.textCompleted,
                ]}>
                {item.text}
              </Text>
              <View style={styles.iconCardList}>
                <TouchableOpacity onPress={() => toggleDone(index)}>
                  <MaterialIcons name="done" size={24} color="#9E78CF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeTask(index)}>
                  <MaterialIcons name="delete" size={24} color="#9E78CF" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#0D0714',
    elevation: 5,
  },
  title: {
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    padding: 20,
    gap: 25,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9E78CF',
    color: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#9E78CF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  card: {
    padding: 10,
    backgroundColor: '#15101C',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    elevation: 5,
    marginBottom: 10,
  },
  textCardList: {
    color: '#9E78CF',
    flex: 1,
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  iconCardList: {
    flexDirection: 'row',
    gap: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1D1825',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  modalButton: {
    marginTop: 15,
  },
});
