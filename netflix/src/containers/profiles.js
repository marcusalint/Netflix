import React from 'react';
import {Header } from  '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({user, setProfile}) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profile.Title>Who's watching</Profile.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} alt='user photo' />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}