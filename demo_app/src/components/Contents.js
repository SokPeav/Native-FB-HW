import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {CL} from './ContentsList';
import {Container, Left, Right, Icon, Content} from 'native-base';

function Contents() {
  return (
    <Container>
      <Content>   
          <View >
        {CL.map((u, index) =>
  {
          return (
            console.log(u),
            <Content>
              
              <View style={styles.Post}>
                <Avatar
                  rounded
                  index={index}
                  size="medium"
                  source={{
                    uri: u.avatar,
                  }}
                />
                <Left>
                  <View style={styles.PostText}>
                    <Text style={{fontWeight: 'bold'}}>{u.name}</Text>

                    <Text style={styles.MiniText}>3 hours</Text>
                  </View>
                </Left>
                <Right>
                  <Icon type="Ionicons" name="ios-more" />
                </Right>
              </View>
              <View>
                <Text>{u.title}</Text>
                <Image
                  source={{uri: u.avatar}}
                  style={{
                    width: Dimensions.get('window').width,
                    height: 200,
                  }}
                />
              </View>
              </Content>
          );
        })}
      </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  Post: {
    flexDirection: 'row',
    padding: 10,
  },
  PostText: {
    paddingLeft: 10,
  },
  MiniText: {
    color: '#808080',
  },
});
export default Contents;
