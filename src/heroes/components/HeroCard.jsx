import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const HeroCard = ({ id, name, image, firstAppearance, alterEgos, fullName }) => {
const navigate = useNavigate()

const onNavigate =()=>{
    navigate(`/hero/${id}`);
}


    return (
        <div className='col animate__animated animate__fadeIn'>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {alterEgos}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {firstAppearance}
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onNavigate}>
        More info...
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};
