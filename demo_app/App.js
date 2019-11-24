import React, {Component} from 'react';
import {Container, Header, Content, Footer, Body} from 'native-base';
import {ScrollView, SafeAreaView} from 'react-native';
import Head from './src/components/Head';
import Foot from './src/components/Foot';
import Post from './src/components/Post';
import Contents from './src/components/Contents';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
         

     <ScrollView>
          <Header>
            <Head />
          </Header>
      <Content>
        <Post></Post>
      </Content>
     
<Contents/> 
</ScrollView>        

        <Footer>
          <Foot></Foot>
        </Footer>
      </SafeAreaView>
    );
  }
}
