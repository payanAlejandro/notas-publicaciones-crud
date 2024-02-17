import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../misc/colors';

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={10}>
        {title}
      </Text>
      <Text numberOfLines={3}>{desc}</Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    width: width,
    padding: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop:5,
    marginBottom:10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.DARK,
  },
});

export default Note;





