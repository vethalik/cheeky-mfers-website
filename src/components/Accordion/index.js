import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from "@mui/material";

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: 'white',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: 'white'
}))

const CustomAccordion = ({ data = [] }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {data.map(([name, description], index) => (
        <Accordion key={index} expanded={expanded === name} onChange={handleChange(name)}>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {name}
            </Typography>
          </StyledAccordionSummary>
          <AccordionDetails>
            <Typography>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default CustomAccordion