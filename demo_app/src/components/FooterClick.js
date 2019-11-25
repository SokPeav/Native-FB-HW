import React from 'react';
import {Container, Header, Button, Icon, Left, Right} from 'native-base';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import {BL} from './BottomList';
class FooterClick extends React.Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#d2d2d2',
          height: 0.5,
        }}
      />
    );
  };
  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Left>
            <Text style={styles.Logo}>Menu </Text>
          </Left>
          <Right>
            <Button>
              <Icon name="search" />
            </Button>
            <Button>
              <Icon type="FontAwesome5" name="facebook-messenger" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={BL}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={item => item.index}
              renderItem={({item}) => (
                <View style={styles.ItemContainer}>
                  <Avatar
                    rounded
                    size="medium"
                    source={{
                      uri: item.avatar,
                    }}
                  />
                  <View style={styles.PostText}>
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                    <Text style={styles.MiniText}>{item.message}</Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = {
  Container: {
    flex: 1,
  },
  Logo: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    fontFamily: 'Time-new-roman',
  },
  PostText: {
    padding: 10,
  },
  ItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  item: {
    alignItems: 'center',
    fontSize: 15,
  },
};
export default FooterClick;
