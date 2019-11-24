import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Text,
  Left,
  Right,
} from 'native-base';
function Head() {
  return (
    <Container style={styles.Container}>
      <Header>
        <Left>
          <Text style={styles.Logo}>Facebook </Text>
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
    </Container>
  );
}
const styles = {
  Container: {
    flex: 1,
  },
  GirdContainer: {
    padding:5,
    flex:1,
    paddingLeft: 30,
    justifyContent: 'center',
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
};
export default Head;
