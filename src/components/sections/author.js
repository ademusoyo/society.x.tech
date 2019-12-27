import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { Section, Container } from "../global"

const Author = () => {
  const data = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: { eq: "me" }, name: { eq: "soyo9" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
return (
  <Section id="author">
  <StyledContainer>
    <Subtitle>The Author</Subtitle>
    <Grid>
      <Item>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
      </Item>
      <Item>
        <Text>
        Ademusoyo is a software engineer, designer, public speaker, and community builder based in NYC. 
        Through her academic studies 
        as well as personal travel experiences she has been able to try and understand how changes 
        in technology have really shaped how we look at society. 
        </Text>
        <Text>
         As an engineer, she recognizes that sometimes societal impact can be an afterthought when building new products 
         and it is her hope that with this newsletter it’ll inspire other engineers and technologists to make socially 
         conscious decisions.
        </Text>
        <Text>
        Her goal of starting this newsletter is to foster new thoughts and conversation in hopes to encourage
         thoughtfulness when creating new products 
        within the technology ecosystem.

        <br /> <br /> 
         
         You can learn more about her <StyledLink href="https://www.ademusoyo.com/" target="_blank" rel="noreferrer noopener">here.</StyledLink>
        </Text>
      </Item>
    </Grid>
  </StyledContainer>
</Section>
  )
}

export default Author

const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`


const Subtitle = styled.h5`
  font-size: 30px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 0px auto;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
    text-align: left;
    font-size: 20px;
    color: ${props => props.theme.color.black.regular}
`
const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.accent};
  padding-bottom: 1px;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.accent};
  }
`