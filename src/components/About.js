import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Typography } from '@mui/material';
import headshot from '../assets/images/headshot.png';

const About = () => {
  return (
    <div>
        <Navbar active="about" />
        
        <Grid container xs={12}>
            <Grid item container xs={12} sm={8} md={6} lg={4} direction="column" justifyContent="center" alignItems="center" style={{backgroundColor: '#87b9c6', borderBottomRightRadius: '50px'}}>
                <Typography variant="h4" style={{ fontFamily: 'Montserrat', color: '#292929', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>About Me</Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} style={{ marginTop: '50px' }}>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
            <Grid item container xs={11} direction="row" justifyContent="flex-end" alignItems="center" style={{backgroundColor: '#e9dd84', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', marginBottom: '50px'}}>
                <Grid item container xs={12} sm={12} md={12} lg={4} xl={4} justifyContent="center" alignItems="center">
                    <img src={headshot} alt="headshot" style={{ height: '300px', borderRadius: '1000px', marginTop: '40px', marginRight: '10px', marginBottom: '10px', border: '10px solid #87b9c6'}} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929',  marginBottom: '10px', marginTop: '30px', marginLeft: '50px' }}>Hi, I am Stacey; I was once exactly where you are now. My husband passed away in 2019 after a short battle with cancer.  I was left with my 5 and 6 year old children, a full time job, a dog, a house and a mountain of staggering paperwork. Getting through that time was one of the hardest things that I have ever had to do. I suddenly found myself thrown into the role of a solo, full time working parent.</Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '10px' }}>My husband was an army veteran and after serving our country for over 25 years, he was diagnosed with an incurable cancer. He lost his very short but courageous battle and I was devastated. Looking back, I have no idea how I survived and got through day to day life. My co-parent, bug catcher, handy man and biggest supporter was no longer by my side. </Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '10px' }}>Since my husband’s death, I have grown and learned how resilient I actually am; however over the years, I have felt the desire to assist others who find themselves in this position. This is how Ever After Services was created.</Typography>
                    <Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '30px' }}>Having personally experienced the pain and challenges of loss, I understand how overwhelming it can be to navigate through the emotions and practicalities that follow. I am here to help you combat these tasks. I understand the importance of addressing the practical aspects of loss. My goal is to alleviate some of the burdens and complexities that can arise during this difficult time, allowing you to focus on your healing process.</Typography>
                </Grid>
                
            </Grid>
        </Grid>

        <Footer active="about" />
    </div>
  );
}

export default About;
