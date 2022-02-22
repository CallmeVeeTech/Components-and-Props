import styled from 'styled-components'


const Build = ({avatar, title, desc, direc, btnname})=>{
    return(
        <Container>
            <Wrapper direc={direc}>
                <ImageHold src={avatar}/>
                <ContentHold>
                    <h1>{title}</h1>
                    <p>
                    {desc}
                    </p>
                    <Btn>{btnname}</Btn>
                </ContentHold>
            </Wrapper>
        </Container>
    )
}
export default Build;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color:#ebfcff;

`
const Wrapper = styled.div`
margin-top: 100px;
display: flex;
flex-direction: ${({ direc }) => direc};
`
const ImageHold = styled.img`
width: 700px;
margin: 50px;
`
const ContentHold = styled.div`
margin: 50px;

h1{
    font-size: 40px;
    font-weight: bold;
}

p{
    width: 800px;
    font-size: 30px;
}
`
const Btn = styled.button`
height: 60px;
width: 200px;
background-color: #ff8d1a;
color: white;
outline: none;
border: none;
font-size: 25px;
font-weight: bold;
border-radius: 5px;
`
