import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatUI from '../../conversations/components/ChatUI';
import { IConversation } from '../../conversations/types';
import LoginScreen from '../../login/components/LoginScreen';
import MyProfile from '../../profile/components/MyProfile';
import { HomeScreen } from './HomeScreen';

interface AppContentProps {
  conversations: IConversation[];
}

class AppContent extends React.Component<AppContentProps> {
  render(){
    return (
      <Switch>
        <Route path='/conversation/:conversationId' component={() => <ChatUI conversations={this.props.conversations} /> } />
        <Route path='/profile' component={MyProfile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    )
  }
}

export default AppContent;