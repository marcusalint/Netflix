import React from 'react';
import {OptForm} from '../components'
import {Feature} from '../components'
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";


export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV Programs and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.input placeholder="Email Address (Click Sign In top right corner to demo)" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer/>
      <FaqsContainer />
      <FooterContainer />
    </>
  )
};