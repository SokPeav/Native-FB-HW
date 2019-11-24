import React from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
function Foot() {
  return (
    <Container>
      <Footer>
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
          <Button active vertical>
            <Icon active name="md-menu" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default Foot;
