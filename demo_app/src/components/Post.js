import React from 'react';
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
function Post() {
  return (
    <View>
        <View style={styles.Post}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri:
                'https://scontent.fpnh15-1.fna.fbcdn.net/v/t1.0-9/s960x960/62176415_2848243095250542_5990408895976177664_o.jpg?_nc_cat=104&_nc_oc=AQlcjifIRORAZdv7fyFRyfwsWoMXi-B6Ii40GqrlOeaIgAW130ClEBCmRo_FkJ3O8jY&_nc_ht=scontent.fpnh15-1.fna&oh=c8e708a91d42032da36c3ff1df9f6149&oe=5E4BB5AA',
            }}
          />
          <Text style={styles.PostText}>What's on your mind ?</Text>
        </View>
        <Grid style={styles.GirdContainer}>
          <Col>
            <View style={styles.ColView}>
              <Icon type="Feather" name="video" />
              <Text style={{width: Dimensions.get('window').width, padding: 3}}>
                {' '}
                Live
              </Text>
            </View>
          </Col>
          <Col>
            <View style={styles.ColView}>
              <Icon type="FontAwesome" name="photo" />
              <Text style={{width: Dimensions.get('window').width, padding: 3}}>
                {' '}
                Photo
              </Text>
            </View>
          </Col>
          <Col>
            <View style={styles.ColView}>
              <Icon type="EvilIcons" name="location" />
              <Text style={{width: Dimensions.get('window').width, padding: 3}}>
                Check-In
              </Text>
            </View>
          </Col>
        </Grid>
    </View>
  );
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

export default Post;
