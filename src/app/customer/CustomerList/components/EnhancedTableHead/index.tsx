import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { HeadCell, EnhancedTableProps } from "./types";
import { Data } from "../../types";

const headCells: readonly HeadCell[] = [
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "cpf",
    numeric: false,
    disablePadding: false,
    label: "CPF",
  },
  {
    id: "birthDate",
    numeric: false,
    disablePadding: false,
    label: "Data de nascimento",
  },
  {
    id: "rg",
    numeric: false,
    disablePadding: false,
    label: "RG",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "Endereço",
  },
  {
    id: "treatmentStartDate",
    numeric: false,
    disablePadding: false,
    label: "Ínicio tratamento",
  },
];

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}