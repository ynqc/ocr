import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ImageDetail extends PureComponent {
    constructor(...args) {
        super(...args);
        this.state = {
            image: null
        }
    }
    componentDidMount() {
        this.setState({
            image: this.props.image.base64
        });
    }
    render () {
        const baseImg = `data:image/png;base64,${this.state.image}`;
        return (
            <View style={styles.container}>
                <Image source={{uri: baseImg}} resizeMode="cover" style={{width: 400, height: 400}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
});

export default ImageDetail;