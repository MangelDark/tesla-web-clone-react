import React from 'react'
import styled from 'styled-components';
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          leftButton = "Customer Order"
          rightButton="Existing Invetary"
          backgroundImg="/model-s.jpg"
        />
          <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          leftButton = "Customer Order"
          rightButton="Existing Invetary"
          backgroundImg="/model-3.jpg"
        />
          <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          leftButton = "Customer Order"
          rightButton="Existing Invetary"
          backgroundImg="/model-x.jpg"
        />
          <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          leftButton = "Order now"
          rightButton="Learn more"
          backgroundImg="/solar-panel.jpg"
        />
          <Section
          title="Solar Roof"
          description="Solar Roof"
          leftButton = "Order now"
          rightButton="Learn more"
          backgroundImg="/solar-roof.jpg"
        />
          <Section
          title="Accessories"
          description=""
          leftButton = "Show now"       
          backgroundImg="/accessories.jpg"
        />
        
      
      
    </Container>
  )
}

export default Home


const Container = styled.div`
    height: 100vh;
    text-align: center;
`