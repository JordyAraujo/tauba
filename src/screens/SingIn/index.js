import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image } from 'react-native';
import Logo from '../../assets/logo.png';
import LogoGmail from '../../assets/gmail.png';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { SingInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await SingInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel conectar à conta Google');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Image source={Logo} width={22} />
          <Title>Informações atualizadas dos seus dados</Title>
        </TitleWrapper>

        <SignInTitle>Faça login com a sua conta</SignInTitle>
      </Header>

      <Footer>
        {isLoading ? (
          <ActivityIndicator color="white" style={{ marginTop: 20 }} size="large" />
        ) : (
          <FooterWrapper>
            <SignInSocialButton
              title="Entre com o Gmail"
              icon={LogoGmail}
              onPress={handleSignInWithGoogle}
            />
          </FooterWrapper>
        )}
      </Footer>
    </Container>
  );
}
