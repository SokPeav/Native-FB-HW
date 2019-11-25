import React from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  View,
} from 'native-base';
import FooterClick from './FooterClick';
import {Alert,ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
class Foot extends React.Component {
  render() {
    return (
      <FooterTab>
        <Button vertical>
          <Icon name="home" />
        </Button>
        <Button badge vertical>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Icon type="Foundation" name="play-video" />
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="user-circle-o" />
        </Button>
        <Button badge vertical>
          <Badge>
            <Text>99+</Text>
          </Badge>
          <Icon type="SimpleLineIcons" name="game-controller" />
        </Button>

        <Button vertical>
          <Icon type="EvilIcons" name="bell" />
        </Button>
        <Button active vertical onPress={() => this.RBSheet.open()}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            animationType="slide"
            height={10000}
            duration={250}>
              <ScrollView>
            <FooterClick />
            </ScrollView>
          </RBSheet>
          <Icon active name="md-menu" />
        </Button>
      </FooterTab>
    );
  }
}

export default Foot;
