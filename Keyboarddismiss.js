import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }

  handleTouchOutside = () => {
    // Dismiss the keyboard when the user touches outside the input field
    Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleTouchOutside}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            ref={this.textInputRef}
            style={{ borderColor: 'gray', borderWidth: 1, padding: 10, width: 200 }}
            placeholder="Type something..."
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default MyComponent;
