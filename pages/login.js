import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import IconGithub from 'react-icons/lib/fa/github-square';
import IconLinkedin from 'react-icons/lib/fa/linkedin-square';

import { Button } from '../utils/base.styles';
import { LayoutNoFooter } from '../components/common/layout';

const Container = styled(Flex)`
  margin-top: 4rem;
  padding-bottom: 2rem;
  background: #fff;
  text-align: center;
  & .header {
    background-color: #fee140;
    background-image: linear-gradient(270deg, #fee140 0%, #fa709a 100%);
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    color: #fff;
  }
`;

const SocialButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  background: ${props => {
    switch (props.social) {
      case 'github':
        return '#444444';
      case 'linkedin':
        return '#105FA2';
      default:
        return '#fff';
    }
  }};
  &:hover {
    background: ${props => {
      switch (props.social) {
        case 'github':
          return '#2B2B2B';
        case 'linkedin':
          return '#004689';
        default:
          return '#fff';
      }
    }};
  }
  & .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  & .name {
    text-align: center;
  }
`;

export default class Login extends React.Component {
  render() {
    return (
      <LayoutNoFooter>
        <Container column={true} width={[1, 0.6]} m={'0 auto'}>
          <div className="header">
            <h2>Welcome</h2>
          </div>
          <div>
            <h4>Sign in or create an account with</h4>
          </div>
          <Flex m={'0 auto'} width={[1, 0.5, 0.4]} column={true} align={'center'} justify={'center'}>
            <SocialButton fluid inverted social={'github'} medium>
              <Flex>
                <Box align="center">
                  <IconGithub className="icon" />
                </Box>
                <Box flex={'1 1 auto'} className="name">
                  Github
                </Box>
              </Flex>
            </SocialButton>
            <SocialButton fluid inverted social={'linkedin'} medium>
              <Flex>
                <Box>
                  <IconLinkedin className="icon" />
                </Box>
                <Box flex={'1 1 auto'} className="name">
                  Linkedin
                </Box>
              </Flex>
            </SocialButton>
          </Flex>
        </Container>
      </LayoutNoFooter>
    );
  }
}

