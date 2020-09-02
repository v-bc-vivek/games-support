
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games/gameslist')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
    
  render() {
    const { navigation } = this.props; 
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });
    const Item = ({ item, onPress, style }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#ededed" : "#fff";
  
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Category List', {
            'gameId': item.id
          })}
          style={{ backgroundColor }}
        />
      );
    };
    const { data, isLoading, selectedId } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        )}
      </View>
    );
  }
};

