import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FireIcon from '@mui/icons-material/LocalFireDepartment';

export default function GroupCard(group) {
   return (
      <Card sx={{ maxWidth: 345, backgroundColor: '#474c55'}}>
         <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <FireIcon />
            <CardContent>
               <Typography gutterBottom variant='h5' component='div'>
                  {group.group.group_name}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}
