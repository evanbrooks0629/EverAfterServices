import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Typography, Button } from '@mui/material';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';

const Contact = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const submitForm = () => {
        console.log(name);
        console.log(email);
        console.log(message);

        // send to stacy@everafterservices.com
    }

    return (
    <div>
        <Navbar active="contact" />

        <Grid container xs={12}>
            <Grid item container xs={12} sm={8} md={6} lg={4} direction="column" justifyContent="center" alignItems="center" style={{backgroundColor: '#87b9c6', borderBottomRightRadius: '50px'}}>
                <Typography variant="h4" style={{ fontFamily: 'Montserrat', color: '#292929', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>Get In Touch</Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} style={{ marginTop: '50px' }}>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
            <Grid item container xs={10} direction="row" justifyContent="center" alignItems="center" style={{backgroundColor: '#e9dd84', borderRadius: '50px', marginBottom: '50px'}}>
                <Grid item xs={12} direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929',  marginBottom: '30px', marginTop: '30px', textAlign: 'center', fontWeight: 'bold'}}>Contact Us</Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={10} direction="column" justifyContent="center" alignItems="center" style={{ marginBottom: '30px' }}>
                    <FormLabel style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Name *</FormLabel>
                    <Input 
                        fullWidth
                        placeholder="Full Name"
                        required
                        variant="solid"
                        style={{
                            backgroundColor: '#292929',
                            fontFamily: 'Montserrat', 
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={1} />
                <Grid item xs={10} direction="column" justifyContent="center" alignItems="center" style={{ marginBottom: '30px' }}>
                    <FormLabel style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Email *</FormLabel>
                    <Input 
                        fullWidth
                        placeholder="Email Address"
                        required
                        variant="solid"
                        style={{
                            backgroundColor: '#292929',
                            fontFamily: 'Montserrat', 
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={1} />
                <Grid item xs={10} direction="column" justifyContent="center" alignItems="center" style={{ marginBottom: '30px' }}>
                    <FormLabel style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Message *</FormLabel>
                    <Input 
                        fullWidth
                        rows={3}
                        placeholder="Reason For Contact"
                        required
                        variant="solid"
                        style={{
                            backgroundColor: '#292929',
                            fontFamily: 'Montserrat', 
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={1} />
                <Grid item container xs={10} direction="row" justifyContent="center" alignItems="center">
                    <Button onClick={submitForm} style={{fontFamily: 'Montserrat', width: '200px', backgroundColor: '#87b9c6', color: '#292929', marginBottom: '30px', textTransform: 'none', fontWeight: 'bold', borderRadius: '30px', fontSize: '18px'}}>Submit</Button>
                </Grid>
                <Grid item xs={1} />
                    
            </Grid>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
        </Grid>

        <Footer active="contact" />
    </div>
    );
}

export default Contact;
