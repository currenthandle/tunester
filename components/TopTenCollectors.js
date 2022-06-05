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
export default function TopTenCollectors() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Container className='section'>
      <h2 className='section-title'>Top 10 Collectors</h2>
      <TableContainer component={Paper} className='p-4'>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='bg-[#DADADA]'>
            <TableRow className=''>
              <TableCell className='border-none rounded-l-lg'>
                Dessert (100g serving)
              </TableCell>
              <TableCell className='border-none' align='right'>
                Calories
              </TableCell>
              <TableCell className='border-none' align='right'>
                Fat
              </TableCell>
              <TableCell className='border-none' align='right'>
                Carbs
              </TableCell>
              <TableCell className='border-none' align='right'>
                Protein
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
