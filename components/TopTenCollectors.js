import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Box,
} from '@mui/material';

export default function TopTenCollectors({ topCollectors }) {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <Container className='section'>
      <h2 className='section-title'>Top 10 Collectors</h2>
      <TableContainer component={Paper} className='p-4'>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='bg-[#DADADA]'>
            <TableRow className=''>
              <TableCell className='border-none rounded-l-lg'>Users</TableCell>
              <TableCell className='border-none' align='right'>
                NFTs Collected
              </TableCell>
              <TableCell className='border-none' align='right'>
                Total Spent
              </TableCell>
              <TableCell className='border-none rounded-r-lg' align='right'>
                Platform
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topCollectors?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.owners}
                </TableCell>
                <TableCell align='right'>{row['unique_nfts']}</TableCell>
                <TableCell align='right'>{row['total_spend']}</TableCell>
                <TableCell align='right'>{row.platform}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
