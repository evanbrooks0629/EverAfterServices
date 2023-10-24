import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Typography, Button } from '@mui/material';
import logo from '../assets/images/Ever After services transparent-01 (1).png';
import headshot from '../assets/images/headshot.png';

const Home = () => {
  return (
    <div>
        <Navbar active="home" />
        <Grid container xs={12}>
            
            <Grid item container xs={12} sm={12} md={6} direction="column" justifyContent="center" alignItems="left" style={{backgroundColor: '#87b9c6', borderBottomRightRadius: '50px'}}>
                <Typography variant="h4" sx={{ marginTop: { xs: '50px', sm: '50px', md: '0px', lg: '0px', xl: '0px' } }} style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginRight: '50px', marginBottom: '20px', fontWeight: 'bold' }}>Taking The Stress Out of the Business Side of Death</Typography>
                <Typography variant="h5" style={{ color: '#292929', marginLeft: '50px', marginBottom: '20px', fontFamily: 'Montserrat',  }}>We help you deal with the hardest parts of life.</Typography>
                <Button href="/services" style={{width: '160px', backgroundColor: '#e9dd84', color: '#292929', marginLeft: '50px', marginBottom: '20px', textTransform: 'none', fontWeight: 'bold', borderRadius: '30px', fontFamily: 'Montserrat', }}>Our Services</Button>
            </Grid>

            <Grid item container xs={12} sm={12} md={6} direction="row" justifyContent="center" alignItems="center">
                    <img src={logo} alt="logo" />
            </Grid>

        </Grid>


        <Grid container xs={12} style={{ marginTop: '50px' }}>
            <Grid item container xs={12} direction="row" justifyContent="flex-end" alignItems="center" sx={{ borderTopLeftRadius: { xs: '0px', sm: '0px', md: '0px', lg: '1000px', xl: '1000px' }, borderBottomLeftRadius: { xs: '0px', sm: '0px', md: '0px', lg: '1000px', xl: '1000px' } }} style={{backgroundColor: '#e9dd84',  marginBottom: '50px'}}>
                
                <Grid item container xs={12} sm={6} md={4} lg={3} xl={3} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' } }} alignItems="center">
                    <img src={headshot} alt="headshot" style={{ height: '300px', borderRadius: '1000px', marginTop: '10px', marginLeft: '10px', marginBottom: '10px'}} />
                </Grid>

                <Grid item xs={12} sm={6} md={8} lg={9} xl={9} >
                    <Typography variant="h6" sx={{ marginTop: { xs: '30px', sm: '50px', md: '30px', lg: '30px', xl: '30px' } }} style={{ fontFamily: 'Montserrat', color: '#292929',  marginBottom: '10px', marginLeft: '50px' }}>Along with death comes a lot of unexpected administrative tasks. Let ever After Services take care of these duties with you.</Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '10px' }}>The seemingly never-ending paperwork and phone calls can deprive family members of essential grieving and healing time.</Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '10px' }}>At Ever After Services, we will help you get that time back by supporting you through all of the unforseen and burdensome responsibilities.</Typography>
                    <Button href="/about" sx={{ marginBottom: { xs: '30px', sm: '50px', md: '30px', lg: '30px', xl: '30px' } }} style={{fontFamily: 'Montserrat', width: '160px', backgroundColor: '#87b9c6', color: '#292929', marginLeft: '50px', textTransform: 'none', fontWeight: 'bold', borderRadius: '30px'}}>About Me</Button>
                </Grid>
                
            </Grid>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
        </Grid>

        <Footer active="home" />
    </div>
  );
}

export default Home;
