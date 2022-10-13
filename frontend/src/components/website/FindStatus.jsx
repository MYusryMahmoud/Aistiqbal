import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FindStatus = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Typography sx={{ width: '50%', color: 'white', fontWeight: '600' }} variant='h2'>
                يمكنك الأن متابعة حالة العقار الخاص بك لحظة بلحظة .. كما يمكنك إرسال التعليقات والملاحظات إلينا في اي وقت ..
            </Typography>
            <Card sx={{ width: '50%' }} variant="outlined">
                <CardMedia
                    component="img"
                    height="250"
                    image={process.env.PUBLIC_URL + 'assets/6.jpg'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        أكتشف حالة عقارك الان
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="رقم العقار" variant="outlined" />
                        <TextField id="outlined-basic" label="رقم الهوية" variant="outlined" />
                        <Button variant="contained">عرض</Button>
                    </Box>
                </CardContent>
            </Card>
        </Stack >
    )
}

export default FindStatus
