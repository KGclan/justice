import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "app/store/types";
import { beersModel, table } from "entities/beers";

import styles from "./styles.module.scss";

export const BeersTable = () => {
  const { beers, beersIsLoading } = useSelector((state: RootState) => state.beers);
  const dispatch = useDispatch();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2B3844",
      color: theme.palette.common.white,
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
      color: "#2B3844",
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFFFF",
    },
    td: {
      border: "none",
    },
    th: {
      border: "none",
    },
  }));

  if (beersIsLoading || !beers) {
    return <div style={{ height: 672, width: "100%", background: "gray" }}></div>;
  }

  return (
    <TableContainer style={{ maxHeight: 672 }}>
      <Table stickyHeader>
        <TableHead>
          <StyledTableRow>
            {
              table.HEADER_TITLES.map((title) => <StyledTableCell key={title} align="center">{title}</StyledTableCell>)
            }
          </StyledTableRow>
          <TableRow style={{ height: 24 }} />
        </TableHead>
        <TableBody>
          {
            beers?.map((beer) => (
              <StyledTableRow key={beer.id}>
                <StyledTableCell align="center">{beer.name}</StyledTableCell>
                <StyledTableCell align="center">{beer.first_brewed}</StyledTableCell>
                <StyledTableCell align="center">{beer.abv}</StyledTableCell>
                <StyledTableCell align="center">{beer.ibu}</StyledTableCell>
                <StyledTableCell align="center">{beer.ebc}</StyledTableCell>
                <StyledTableCell align="center">{beer.srm}</StyledTableCell>
                <StyledTableCell align="center">{beer.ph}</StyledTableCell>
                <StyledTableCell align="center">{beer.attenuation_level}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link
                    className={styles.link}
                    to="/beerStatistics"
                    onClick={() => dispatch(beersModel.actions.setSelectedBeer(beer))}
                  >
                    Open
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};