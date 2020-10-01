import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {TODOLIST} from '../data/data';

const clickEventListener = (item) => {
  if (item.completed == 1) {
    return Alert.alert('You done this work');
  } else {
    return Alert.alert('You have not completed this work');
  }
};

const getCompletedIcon = (item) => {
  if (item.completed == 1) {
    return 'https://img.icons8.com/flat_round/64/000000/checkmark.png';
  } else {
    return 'https://img.icons8.com/flat_round/64/000000/delete-sign.png';
  }
};

const getDescriptionStyle = (item) => {
  if (item.completed == 1) {
    return {
      texDecorationLine: 'line-through',
      fontStye: 'italic',
      color: '#808080',
    };
  }
};

export default function ToDoListScreen() {
  // const toDoList = (item) => {
  //     return (
  //         <TouchableOpacity style={[styles.card, { borderColor: item.color }]} onPress={() => { clickEventListener(item) }}>
  //             <Image style={styles.image} source={{ uri: getCompletedIcon(item) }} />
  //             <View style={styles.cardContent}>
  //                 <Text style={[styles.description, getDescriptionStyle(item)]}>{item.description}</Text>
  //                 <Text style={styles.date}>{item.date}</Text>
  //             </View>
  //         </TouchableOpacity>
  //     );
  // }
  // return (
  //     <View style={styles.container}>
  //         <FlatList
  //             style={styles.tasks}
  //             data={TODOLIST}
  //             keyExtractor={(item) => {
  //                 return item.id;
  //             }}
  //             renderItem={toDoList}
  //         />
  //     </View>
  // );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.tasks}
        columnWrapperStyle={styles.listContainer}
        data={TODOLIST}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[styles.card, {borderColor: item.color}]}
              onPress={() => {
                clickEventListener(item);
              }}>
              <Image
                style={styles.image}
                source={{uri: getCompletedIcon(item)}}
              />
              <View style={styles.cardContent}>
                <Text style={[styles.description, getDescriptionStyle(item)]}>
                  {item.description}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#eeeeee',
  },
  tasks: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 25,
    height: 25,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderLeftWidth: 6,
  },

  description: {
    fontSize: 18,
    flex: 1,
    color: '#008080',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: '#696969',
    marginTop: 5,
  },
});
