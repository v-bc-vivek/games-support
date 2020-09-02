import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default class CategoryScreen extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
      setText: this.setText,
      onPressSubmit: this.onPressSubmit
    };
  }
  onPressSubmit = (gameId, topicId, emailId) => {
    console.log(gameId, topicId)
    if(gameId && topicId && emailId) {
      fetch('http://localhost:3000/api/games/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gameId: gameId,
          topicId: topicId,
          email: emailId
        })
      }).then((json) => {
        this.props.navigation.navigate('Games List');
      });
    }
    
  }
  setText = (txt) => { 
    this.setState({emailId: txt});
  }
  componentDidMount() {

  }
    
  render() {
    const { route } = this.props; 
    const {gameId} = route.params;
    const {topicId} = route.params;
    const {emailId, setText, onPressSubmit} = this.state;
    
    return (
      <View style={{ flex: 1, padding: 24 }}>
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
            placeholder="Type here your Email"
            onChangeText={emailId => setText(emailId)}
            defaultValue={emailId}
        />
       <Button
        onPress={() => onPressSubmit(gameId, topicId, emailId)}
        title="Submit"
        color="#841584"
        accessibilityLabel=""
        />
      </View>
    );
  }
};

