import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Typography } from '@mui/material';

const FAQs = () => {

  const questionsAndAnswers = [
    {
        question: "When should I work with Ever After Services?",
        answer: "In most cases, we start helping families a few weeks after a loved one passes away, but we are available to speak to you either right away or even years later. When families need it, we want to be there to offer solutions, clarity, and direction."
    },
    {
        question: "How is this different than working with an estate attorney, accountant or financial planner?",
        answer: "We fill in the gaps to keep executors organized and carry out important chores on their behalf. We do not provide legal or financial advice. However, when necessary, we will work with these professionals as part of your team."
    },
    {
        question: "In what states is Ever After Services available?",
        answer: "Regardless of where you are located, our helping hand package is offered virtually or by telephone. Our concierge/proxy service is available in S. Florida and Baltimore Metro area."
    },
    {
        question: "What needs to be done after a loved one dies?",
        answer: "Every person and family will experience a unique set of circumstances. Every after-loss engagement we take on is treated as a unique project, and we'll create a plan just for you to keep you on track as you settle your loved one's business."
    },
    {
        question: "Does Ever After Services become the executor of the estate?",
        answer: "Ever After Services offers assistance to the executor, but does not assume responsibility for it."
    }
  ];

  return (
    <div>
        <Navbar active="faqs" />

        <Grid container xs={12}>
            <Grid item container xs={12} sm={11} md={8} lg={6} xl={4} direction="column" justifyContent="center" alignItems="center" style={{backgroundColor: '#87b9c6', borderBottomRightRadius: '50px'}}>
                <Typography variant="h4" style={{ fontFamily: 'Montserrat', color: '#292929', marginBottom: '20px', marginTop: '20px', fontWeight: 'bold' }}>Frequently Asked Questions</Typography>
            </Grid>
        </Grid>

        <Grid container xs={12} style={{ marginTop: '50px' }}>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
            <Grid item container xs={10} direction="row" justifyContent="flex-start" alignItems="center" style={{backgroundColor: '#e9dd84', borderRadius: '50px', marginBottom: '50px'}}>
                {questionsAndAnswers.map((elem) => (
                    [<Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929',  marginBottom: '10px', marginTop: '30px', marginLeft: '50px', marginRight: '50px', fontWeight: 'bold' }}>{elem.question}</Typography>
                    ,<Typography variant="h6" style={{ fontFamily: 'Montserrat', color: '#292929', marginLeft: '50px', marginBottom: '30px', marginRight: '50px' }}>{elem.answer}</Typography>]
                ))}
                    
            </Grid>
            <Grid item container xs={1} direction="column" justifyContent="center" alignItems="left" >
            </Grid>
        </Grid>

        <Footer active="faqs" />
    </div>
  );
}

export default FAQs;
