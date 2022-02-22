import styled from 'styled-components'
import Build from './Builld'
import pic from '../../src/ccomponents/img/1.png'
import pic2 from '../../src/ccomponents/img/2.png'

const Homescreen = () =>{
    return(
        < Wrapper>
        <Build avatar={pic} title="Parents" desc="Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.
Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, immersive game-like courses, and then advance to learning real-world Python and JavaScript.
Select the option that’s best for your child!" btnname="LEARN MORE"/> 
        <Build btnname="LEARN MORE" direc= "row-reverse" avatar={pic2} title="Educators" desc="Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!
Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!
Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources."/>
        </Wrapper>
    )

}
export default Homescreen;
const Wrapper = styled.div`
width: 100%;
`
