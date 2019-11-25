import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {CL} from './ContentsList';
import {BL} from './BottomList';
import {Container, Left, Right, Icon, Content, ListItem} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';

class Contents extends React.Component {
  render() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
          {CL.map((u, index) => {
            return (
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
                    <Icon
                      type="Ionicons"
                      name="ios-more"
                      raised
                      onPress={() => {
                        this.RBSheet.open();
                      }}
                    />
                    <RBSheet
                      ref={ref => {
                        this.RBSheet = ref;
                      }}
                      height={300}
                      duration={250}>
                      <View style={styles.container}>
                        <FlatList
                          data={BL}
                          ItemSeparatorComponent={this.renderSeparator}
                          keyExtractor={item => item.index}
                          renderItem={({item}) => (
                            <View>
                              <Text style={styles.item}>{item.name}</Text>
                            </View>
                          )}
                          ItemSeparatorComponent={this.renderSeparator}
                        />
                      </View>
                    </RBSheet>
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
        </ScrollView>
    );
  }
}
const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#000',
      }}
    />
  );
};

const styles = StyleSheet.create({
  Post: {
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  PostText: {
    paddingLeft: 10,
  },
  MiniText: {
    color: '#808080',
  },
});
export default Contents;
