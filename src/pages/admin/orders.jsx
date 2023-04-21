import { supabase } from "@/lib/supabaseClient";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

export default function orders({ orders }) {
  return (
    <Box
      sx={{
        padding: "40px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total Money</TableCell>
              <TableCell align="right">Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const date = new Date(order.createdat);
              return (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box>
                      <Image
                        src={order.checkoutorders.products.thumbnail}
                        width={50}
                        height={50}
                        alt="alt img"
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">{order.username}</TableCell>
                  <TableCell align="left">{order.email}</TableCell>
                  <TableCell align="left">{order.phone}</TableCell>
                  <TableCell align="left">{order.address}</TableCell>
                  <TableCell align="right">
                    {order.checkoutorders.products.name}
                  </TableCell>
                  <TableCell align="right">
                    {order.checkoutorders.size}
                  </TableCell>
                  <TableCell align="right">
                    {order.checkoutorders.quantity}
                  </TableCell>
                  <TableCell align="right">{order.totalmoney}</TableCell>
                  <TableCell align="right">{date.toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { data } = await supabase
    .from("orders")
    .select(`*, checkoutorders(products(name, thumbnail), size, quantity)`);
  return {
    props: { orders: data },
  };
}
