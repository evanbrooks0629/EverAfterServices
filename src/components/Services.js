import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Typography, Button } from '@mui/material';

/**
 * 
 * 
Concierge: $700 base fee then $150/hr
- detailed plan of action with time line
-work directly with Ever After Services to complete tasks for you
- phone calls throughout length of service to update you of progress

Guidance: $150 base fee then $150/hr
-detailed plan of action with time line
- support ot help you complete tasks
 */

const Services = () => {
  return (
    <div>
        <Navbar active="services" />
        
        <Grid container xs={12}>
            <Grid item container xs={12} sm={8} md={6} lg={4} direction="column" justifyContent="center" alignItems="center" style={{backgroundColor: '#87b9c6', borderBottomRightRadius: '50px'}}>
                <Typography variant="h4" style={{ fontFamily: 'Montserrat', color: '#292929', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>Our Services</Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} style={{marginBottom: '50px'}}>
            <Grid item container xs={1} />
        
            <Grid container xs={10} style={{ marginTop: '50px' }}>

                <Grid item container xs={12} sm={12} md={12} lg={5} xl={5} sx={{ marginBottom: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' } }} style={{ backgroundColor: '#292929', borderRadius: '40px', }} direction="row" flexDirection="flex-start" alignItems="center">
                    <Grid item xs={12} style={{ backgroundColor: '#292929', borderRadius: '20px'}}>
                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center">
                            
                            <Grid item xs={12} direction="row" flexDirection="center" alignItems="center" style={{ marginBottom: '20px' }}>
                                <Typography variant="h5" style={{ fontFamily: 'Montserrat', color: '#ffffff', marginBottom: '20px', marginTop: '40px', fontWeight: 'bold', textAlign: 'center' }}>CONCIERGE</Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} style={{ width: '100%', backgroundColor: '#87b9c6', borderTopLeftRadius: '90% 20%', borderTopRightRadius: '90% 20%', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px'}}>

                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ marginTop: '70px', marginLeft: '30px', marginRight: '30px' }}>
                            
                            <Grid item xs={12} direction="row" flexDirection="center" alignItems="center" style={{ marginBottom: '10px', marginTop: '20px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#292929',  textAlign: 'center', paddingRight: '20px', }}>Detailed plan of action with time line</Typography><br />
                            </Grid>
                            <Grid item xs={12} direction="row" flexDirection="flex-start" alignItems="center" style={{ marginBottom: '10px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#292929',  textAlign: 'center', paddingRight: '20px',  }}>Work directly with Ever After Services to complete tasks for you</Typography><br />
                            </Grid>
                            <Grid item xs={12} direction="row" flexDirection="flex-start" alignItems="center" style={{ marginBottom: '30px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#292929',  textAlign: 'center', paddingRight: '20px',  }}>Phone calls throughout length of service to update you of progress</Typography><br />
                            </Grid>
                            
                        </Grid>

                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ }}>
                            
                            <Button style={{fontFamily: 'Montserrat', width: '200px', backgroundColor: '#292929', color: '#87b9c6', marginBottom: '30px', textTransform: 'none', fontWeight: 'bold', borderRadius: '30px', fontSize: '18px'}}>Contact Us</Button>
                            
                        </Grid>
                    </Grid>
                    
                </Grid>

                <Grid item container xs={0} sm={0} md={0} lg={2} xl={2} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }} />
                
                <Grid item container xs={12} sm={12} md={12} lg={5} xl={5} sx={{ marginBottom: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' } }} style={{ backgroundColor: '#292929', borderRadius: '40px', height: '300px', marginBottom: '250px'}} direction="row" flexDirection="flex-start" alignItems="center">
                    <Grid item xs={12} style={{ backgroundColor: '#292929', borderRadius: '20px'}}>
                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center">
                            
                            <Grid item xs={12} direction="row" flexDirection="center" alignItems="center" style={{ marginBottom: '20px' }}>
                                <Typography variant="h5" style={{ fontFamily: 'Montserrat', color: '#ffffff', marginBottom: '20px', marginTop: '40px', fontWeight: 'bold', textAlign: 'center' }}>GUIDANCE</Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} style={{ width: '100%', backgroundColor: '#87b9c6', borderTopLeftRadius: '90% 20%', borderTopRightRadius: '90% 20%', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px'}}>

                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ marginTop: '70px', marginLeft: '30px', marginRight: '30px' }}>
                            
                            <Grid item xs={12} direction="row" flexDirection="center" alignItems="center" style={{ marginBottom: '10px', marginTop: '20px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#292929',  textAlign: 'center', paddingRight: '20px', }}>Detailed plan of action with time line</Typography><br />
                            </Grid>
                            <Grid item xs={12} direction="row" flexDirection="flex-start" alignItems="center" style={{ marginBottom: '20px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#292929',  textAlign: 'center', paddingRight: '20px',  }}>Support to help you complete tasks</Typography><br />
                            </Grid>
                            <Grid item xs={12} direction="row" flexDirection="flex-start" alignItems="center" style={{ marginBottom: '30px' }}>
                                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#87b9c6',  textAlign: 'center', paddingRight: '20px',  }}>-----------------------------------------------------------------</Typography><br />
                            </Grid>
                            
                        </Grid>

                        <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center" style={{ }}>
                            
                            <Button style={{fontFamily: 'Montserrat', width: '200px', backgroundColor: '#292929', color: '#87b9c6', marginBottom: '30px', textTransform: 'none', fontWeight: 'bold', borderRadius: '30px', fontSize: '18px'}}>Contact Us</Button>
                            
                        </Grid>
                    </Grid>
                    
                </Grid>

            </Grid>

            <Grid item container xs={1} />
        </Grid>

        <Footer active="services" />
    </div>
  );
}

export default Services;
