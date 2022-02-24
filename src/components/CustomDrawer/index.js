import React from 'react';
import { Header, Title } from './styles';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Header>
        <Title>Olá, seja bem vindo(a)</Title>
      </Header>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export { CustomDrawer };