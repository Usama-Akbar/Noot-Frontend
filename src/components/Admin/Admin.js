import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment/moment";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "../../styles/Admin.css";
export default function BasicTable() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  async function GetProducts() {
    const response = await fetch("https://acad-ecommerce.noot.ae/products/my", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE",
      },
    });
    const data = await response.json();
    console.log(data.results);
    setdata(data.results);
  }

  useEffect(() => {
    GetProducts();
  }, [null]);
  function createData(name, description, date) {
    return { name, description, date };
  }

  const rows =
    data.length > 0
      ? data.map((d, i) =>
          createData(
            d.name[0].text,
            d.description[0].text,
            moment(d.created_at).format("DD/MM/YYYY")
          )
        )
      : [createData("", "No Data", "")];

  return (
    <>
      <div className="table-div mt-3">
        <div className="admin-heading">
          <h5>Products</h5>
          <Button
            onClick={() => navigate("/add/product")}
            className="add-product-btn"
            variant="success"
          >
            + Product
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-heading">Name</TableCell>
                <TableCell className="table-heading" align="right">
                  Description
                </TableCell>
                <TableCell className="table-heading" align="right">
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
