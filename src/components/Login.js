import styled from "styled-components"; //eslint-disable-next-line

const Login =(props) =>{
    return(
          <Container>
                <Content>   
                  <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt="img1"/>
                    <Signup>Get All Here</Signup>
                    <Description>Get premier access to new Marvel series for an 
                    additional fee with Disney+ subscription
                    .The price will rise by $2 very soon.
                    </Description>
                  </CTA> 
                  <CTA>
                      <CTALogoOne src='/images/cta-logo-two.png' alt="img2"/>
                  </CTA> 
                    <BgImage/>
                </Content>
          </Container> 
        )
}

const Container=styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;
 
const Content=styled.div `
    margin-bottom:100vw;
    width:100%;
    postion:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding: 80px 40px;
    height:100%;

`;

const BgImage=styled.div`
    height:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image : url("/images/login-background.jpg");
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index: -1;
`;

const CTA=styled.div `  
    margin-bottom:2vw;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    transition-timing-function:ease-out;
    transition: opacity 0.2s;
    width:100%;
`;

const CTALogoOne=styled.img `
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`;

const Signup=styled.a `
    font-weight:bold;
    color:#f9f9f9;
    background-color:#0063e5;
    margin: 12px auto 15px;
    width:100%;
    letter-spacing:1.5 px;
    padding:16px 0;
    border: 1px solid transparent;
    border-radius:4px;

    &:hover{
        background-color:#0438ee;
    }
`;

const Description=styled.h2 `
    color: hsla(0 0 95.3% 1);
    font-size:15px;
    line-height:1.5em;
    letter-spacing:1.5px;
`;


export default Login;