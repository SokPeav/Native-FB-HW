import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
    ScrollView,
    Image,
  } from 'react-native';
  import {Avatar} from 'react-native-elements';
import {Container, Content, Text, Icon} from 'native-base';
import {users} from './Data';
import {Col, Grid} from 'react-native-easy-grid';
function Story() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {users.map((u, index) => {
          return (
            <View style={{backgroundColor: '#eee', padding: 5}}>
              <ImageBackground
                key={index}
                source={{uri: u.avatar}}
                style={{
                  height: 150,
                  width: 130,
                  borderRadius: 10,
                  overflow: 'hidden',
                  backgroundColor: '#f0f8ff',
                }}>
                <View style={{padding: 10}}>
                  {index == 0 ? (
                    <Icon type="MaterialIcons" name={u.Icon} />
                  ) : (
                    <Image
                      source={{uri: u.avatar}}
                      style={{width: 30, height: 30, borderRadius: 30}}
                    />
                  )}
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontSize: 15,
                      padding: 10,
                    }}>
                    {u.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    GirdContainer: {
      padding: 5,
      paddingLeft: 30,
    },
    ColView: {
      flexDirection: 'row',
    },
    Logo: {
      fontSize: 24,
      color: 'blue',
      fontWeight: 'bold',
      fontFamily: 'Time-new-roman',
    },
    Post: {
      flexDirection: 'row',
      padding: 10,
    },
    PostText: {
      padding: 10,
    },
  });
export default Story
