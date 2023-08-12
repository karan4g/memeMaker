
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Header(){

 return (
    <Box sx={{ flexGrow: 1,textAlign:"center" }}>
    <Grid container  spacing={0}>
      <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>
        Meme Maker
        </Typography>
    </Grid>
    </Grid>
    </Box>
 )
        

}

