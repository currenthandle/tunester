import { Card, Container, Grid } from '@mui/material';
import Item from './DataItem';
export default function Followers({ twitter }) {
  const width = 3;
  const parseFollowers = (followers) => {
    if (followers > 1000000) {
      return `${(followers / 1000000).toFixed(1)}M`;
    } else if (followers > 1000) {
      return `${(followers / 1000).toFixed(1)}K`;
    }
    return followers;
  };
  console.log('twitter', twitter?.follower_count);
  return (
    <Container className='section'>
      <h2 className='section-title'>Followers</h2>
      <Grid container spacing={2}>
        <Item title='Instagram' data={'50k'} width={width} />
        <Item
          title='Twitter'
          data={parseFollowers(twitter.followers)}
          width={width}
        />
        <Item title='TikTok' data={'50k'} width={width} />
        <Item title='Youtube' data={'50k'} width={width} />
      </Grid>
    </Container>
  );
}
