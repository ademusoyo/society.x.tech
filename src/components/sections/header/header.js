import React,  { Component } from "react"
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Subtitle,
  HeaderForm,
  HeaderInput,
  HeaderButton,
  FormSubtitle,
  FormSubtitleLink,
  Text,
  StyledImage
} from "./style"

import { Container } from "../../global"
import p1 from '../../../images/me/green-skew.png';
import addToMailchimp from 'gatsby-plugin-mailchimp'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({email: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) 
    .then(data => {
      this.setState({showSubscribe: true, data})
    })
  
  }


  render() {
    return (
      <HeaderWrapper id="top">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <Subtitle></Subtitle>
              <h1>
              Let's examine the world
                <br />
                together with tech.
              </h1>
              <h2>
              Society x Tech is a monthly newsletter examining the societal implications of technology trends through a hand-picked curation of articles, podcasts, books and interviews.
              </h2>
              <HeaderForm onSubmit={this.handleSubmit}>
                <HeaderInput  onChange={this.handleChange} placeholder="Your email" />
                <HeaderButton>Subscribe</HeaderButton>
              </HeaderForm>
              {
                this.state.data && this.state.data.result === 'success' &&
                <FormSubtitle>
                  Check your inbox! You should be recieving a confirmation. 
                </FormSubtitle>
              }
                            {
                this.state.data && this.state.data.result === 'error' &&
                <FormSubtitle>
                 There was an issue with you trying to subscribe. Try and subscribe directly <FormSubtitleLink href="https://mailchi.mp/02da2a5b2d98/societyxtech" target="_blank" rel="noreferrer noopener">here.</FormSubtitleLink>
                </FormSubtitle>
              }
            </HeaderTextGroup>
            <Text>
              <StyledImage className="img-fluid" src={p1} />
              <br />
            </Text>
          </Flex>
        </Container>
      </HeaderWrapper>
    )

  }
}

export default Header
