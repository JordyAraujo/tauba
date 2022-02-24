import React from 'react';
import { Image } from 'react-native';
import { Button, ImageContainer, TextButton } from './styles';

export function SignInSocialButton({ title, icon, ...rest }) {
  return (
    <>
      <Button {...rest}>
        <ImageContainer>
          <Image source={icon} style={{ width: 30, height: 30 }} />
        </ImageContainer>
        <TextButton>{title}</TextButton>
      </Button>
    </>
  );
}
