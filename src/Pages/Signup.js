import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { talrop } from "../Components/AxiosConfig";
import { UserContext } from "../App";

export default function Signup() {
    const [firstname, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    const {userdata, updateUserData} = useContext(UserContext);
    
    let navigate = useNavigate();

    let handlesubmit = (e) =>{
        e.preventDefault();
        talrop
            .post('/auth/register/',{password,email,firstname})
            .then(function(response){
                console.log(response)
                setMessage(response.data.message)
                let data = response.data.data;
                let status_code = response.data.StatusCode;
                if(status_code === 6000){
                    localStorage.setItem("user_data", JSON.stringify(data));
                    updateUserData({type: "LOGIN", payload: data})
                    navigate('/')
                }
            })
            .catch(function(err){
                console.log(err)
            })
        setEmail("")
        setFirstName("")
        setMessage("")
        setPassword("")
    }

    return (
        <Container>
            <LeftContainer>
                <HeaderContainer>
                    <Logo
                        src={require('../Images/logo.svg').default}
                        alt="Image"
                    />
                </HeaderContainer>
                <MainHeading>Travel to the best beautiful place</MainHeading>
            </LeftContainer>
            <RightContainer>
                <LoginContainer>
                    <LoginHeading>Register into Account,{password}, {email}, {firstname}</LoginHeading>
                    <LoginInfo>
                        Create an account to acccess all the features
                    </LoginInfo>
                    <Form onSubmit={handlesubmit}>
                        <InputContainer>
                            <TextInput value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Name" />
                        </InputContainer>
                        <InputContainer>
                            <TextInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        </InputContainer>
                        <InputContainer>
                            <TextInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </InputContainer>
                        <LoginButton to="/auth/login/">Login Now</LoginButton>
                        {message && <ErrorMessage>{message}</ErrorMessage>}
                        <ButtonContainer>
                            <SubmitButton>Create an Account</SubmitButton>
                        </ButtonContainer>
                    </Form>
                </LoginContainer>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 15px;
`;
const LeftContainer = styled.div`
    width: 55%;
    padding: 40px 70px 70px;
`;
const HeaderContainer = styled.div``;
const Logo = styled.img``;
const MainHeading = styled.h1`
    font-size: 80px;
    color: #090e5e;
    margin-top: 300px;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    background: #efefef;
    width: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 20px;
    padding: 0 70px 70px;
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #046bf6;
    font-size: 20px;
`;
const SubmitButton = styled.button`
    background: #046bf6;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;
