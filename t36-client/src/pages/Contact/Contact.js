import React, { useState } from 'react';
import {ContactContainer, MainTitle, GridContainer, ElementTitle, Info, FormContainer, ContactForm} from './Styles';
import {TextField, Button} from '@material-ui/core';
import { Post } from '../../services/HttpService';
import {alertSuccess, alertError, alertInfo} from '../../elements/Alert';
import {useHistory} from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        if(e.target.id === 'name'){
            setName(e.target.value);
        } if(e.target.id === 'email'){
            setEmail(e.target.value)
        } if(e.target.id === 'text'){
            setText(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === '' || email === '' || text === ''){
            alertInfo({title: 'Please!', text: 'All fields are required'})
        } else{
            const data = {
                name: name,
                email: email,
                message: text
            }

            try {
                Post("/contacts", data) 
                .then(res => {
                    if(res){
                        alertSuccess({title: 'Great!', text: 'We will be in touch with you'});
                        history.push('/');
                    } else{
                        alertError({title: 'Oops!', text: 'Please try again'});
                    }
                })
            } catch (error) {
                alertError({title: 'Oops!', text: 'Please try again'});
            }
            setName('');
            setEmail('');
            setText('');
        }
    }

    return (
        <ContactContainer>
            <MainTitle>Contact with us</MainTitle>

            <GridContainer>
                <div>
                    <ElementTitle>Title</ElementTitle>
                    <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus officiis deserunt esse, totam id voluptates eaque quia possimus saepe labore. Sed eius ex ducimus inventore molestiae molestias quod blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam, laboriosam repellendus quam quas, obcaecati non pariatur autem veniam odit, beatae perferendis saepe quisquam cumque suscipit eligendi laudantium ex velit!</Info>
                </div>

                <FormContainer>
                    <ElementTitle>Form</ElementTitle>
                    <ContactForm onSubmit={handleSubmit}>
                        <TextField type="name" id="name" value={name} onChange={handleChange} placeholder="Jhon Doe" variant="outlined" size="small"/>
                        <TextField type="email" id="email" value={email} onChange={handleChange} placeholder="email@example.com" variant="outlined" size="small"/>
                        <TextField type="messagge" id="text" value={text} onChange={handleChange} placeholder="Text here" variant="outlined" multiline rows={4}/>
                        <Button type="submit" variant="contained" color="primary" size="medium">send</Button>
                    </ContactForm>
                </FormContainer>
            </GridContainer>
        </ContactContainer>
    );
}
 
export default Contact;