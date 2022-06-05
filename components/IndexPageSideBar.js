import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export default function IndexPageSideBar({ artist }) {
  return (
    <Grid item xs={3} className='bg-[#EEEFF2] border-l border-[#dadada]'>
      <Container className='section border-b border-[#DADADA] sticky top-0'>
        <h2 className='section-title pt-4'>Artist Breakdown</h2>
        <List>
          <ListItem>
            <Link href='#pop' className='w-full text-black no-underline	'>
              <ListItemButton className='rounded-md flex justify-center'>
                <ListItemText
                  primary='Pop'
                  primaryTypographyProps={{
                    fontSize: 20,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#rAndB' className='w-full text-black no-underline	'>
              <ListItemButton className='rounded-md flex justify-center'>
                <ListItemText
                  primary='R&B'
                  primaryTypographyProps={{
                    fontSize: 20,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#rap' className='w-full text-black no-underline	'>
              <ListItemButton className='rounded-md flex justify-center'>
                <ListItemText
                  primary='Rap'
                  primaryTypographyProps={{
                    fontSize: 20,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#electronic' className='w-full text-black no-underline	'>
              <ListItemButton className='rounded-md flex justify-center'>
                <ListItemText
                  primary='Electronic'
                  primaryTypographyProps={{
                    fontSize: 20,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Container>
    </Grid>
  );
}
