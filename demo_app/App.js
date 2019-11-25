import React, {Component} from 'react';
import {Container, Header, Content, Footer} from 'native-base';
import {ScrollView, SafeAreaView, View, Text} from 'react-native';
import Head from './src/components/Head';
import Foot from './src/components/Foot';
import Post from './src/components/Post';
import Contents from './src/components/Contents';
import Test from './src/Test';
import Story from './src/components/Story';
export default class App extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Header>
            <Head />
          </Header>
          <Post></Post>
          <Story></Story>
          <Contents />
        </ScrollView>
        <Content />
        <Footer>
          <Foot></Foot>
        </Footer>
      </Container>
    );
  }
}
