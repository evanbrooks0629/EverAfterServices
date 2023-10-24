import { Grid, Typography, Link } from '@mui/material';

const Footer = (props) => {
    return (
        <Grid container xs={12} style={{ backgroundColor: '#292929', paddingBottom: '10px', paddingTop: '10px' }}>
            <Grid item container xs={3} sm={3} md={3} lg={4} xl={4} direction="column">
                <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#87b9c6',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Pages</Typography>
                <Link href="/" style={{textTransform: 'none', textAlign: 'left', marginBottom: '10px', marginTop: '10px'}}>
                    <Typography variant="h7" style={{ fontFamily: 'Montserrat', textAlign: 'left', color: '#fffcf1', marginLeft: '50px', textDecoration: props.active === "home" ? 'underline' : 'none' }}>Home</Typography>
                </Link>
                <Link href="/about" style={{textTransform: 'none', textAlign: 'left', width: '200px', marginBottom: '10px', marginTop: '10px', }}>
                    <Typography variant="h7" style={{ fontFamily: 'Montserrat', textAlign: 'left', color: '#fffcf1', marginLeft: '50px', textDecoration: props.active === "about" ? 'underline' : 'none' }}>About</Typography>
                </Link>
                <Link href="/services" style={{textTransform: 'none', textAlign: 'left', marginBottom: '10px', marginTop: '10px', }}>
                    <Typography variant="h7" style={{ fontFamily: 'Montserrat', textAlign: 'left', color: '#fffcf1', marginLeft: '50px', textDecoration: props.active === "services" ? 'underline' : 'none' }}>Services</Typography>
                </Link>
                <Link href="/faqs" style={{textTransform: 'none', textAlign: 'left', marginBottom: '10px', marginTop: '10px', }}>
                    <Typography variant="h7" style={{ fontFamily: 'Montserrat', textAlign: 'left', color: '#fffcf1', marginLeft: '50px', textDecoration: props.active === "faqs" ? 'underline' : 'none' }}>FAQs</Typography>
                </Link>
                <Link href="/contact" style={{textTransform: 'none', textAlign: 'left', marginBottom: '10px', marginTop: '10px', }}>
                    <Typography variant="h7" style={{ fontFamily: 'Montserrat', textAlign: 'left', color: '#fffcf1', marginLeft: '50px', textDecoration: props.active === "contact" ? 'underline' : 'none' }}>Contact</Typography>
                </Link>
            </Grid>
            <Grid item container xs={3} sm={3} md={3} lg={4} xl={4} direction="column">
                <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#87b9c6',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Services</Typography>
                <Typography variant="h7" style={{ fontFamily: 'Montserrat', color: '#fffcf1',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Service 1</Typography>
                <Typography variant="h7" style={{ fontFamily: 'Montserrat', color: '#fffcf1',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Service 2</Typography>
                <Typography variant="h7" style={{ fontFamily: 'Montserrat', color: '#fffcf1',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Service 3</Typography>
            </Grid>
            <Grid item container xs={6} sm={6} md={6} lg={4} xl={4} direction="column">
                <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#87b9c6',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Contact</Typography>
                <Typography variant="h7" style={{ fontFamily: 'Montserrat', color: '#fffcf1',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Email: stacey@everafterservices.com</Typography>
                <Typography variant="h7" style={{ fontFamily: 'Montserrat', color: '#fffcf1',  marginBottom: '10px', marginTop: '10px', marginLeft: '50px', }}>Phone: (973) - 906 - 2192</Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;