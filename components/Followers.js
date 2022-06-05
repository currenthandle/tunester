import { Card, Container, Grid } from '@mui/material';
import { parseFollowers } from '../utils';
import Item from './DataItem';
export default function Followers({ twitter }) {
  const width = 4;

  return (
    <Container className='section'>
      <h2 className='section-title'>Followers</h2>
      <Grid container spacing={2}>
        <Item title='Instagram' data={'50k'} width={width} />
        <Item
          title='Twitter'
          data={parseFollowers(twitter?.followers)}
          width={width}
        />
        <Item title='TikTok' data={'50k'} width={width} />
        {/*}
        <Item title='Youtube' data={'50k'} width={width} />
        {*/}
      </Grid>
    </Container>
  );
}
