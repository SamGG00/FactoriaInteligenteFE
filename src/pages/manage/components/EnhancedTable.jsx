import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Typography,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from "@mui/material/CircularProgress";
import ConfirmDialog from "./ConfirmDialog";

const headCells = [
  { id: "nombre_del_articulo", numeric: false, disablePadding: false, label: "Nombre del articulo" },
  { id: "autor", numeric: false, disablePadding: false, label: "Autor" },
  { id: "publicado", numeric: false, disablePadding: false, label: "Publicado" },
  { id: "fecha_publicado", numeric: false, disablePadding: false, label: "Fecha de publicación" },
  { id: "fecha_actualizado", numeric: false, disablePadding: false, label: "Fecha de actualización" },
  { id: "edit", numeric: false, disablePadding: false, label: "Acciones" },

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ textAlign: "center", fontWeight:"600" }}
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

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable({ rows,deleteArticle }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("documento");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [codSelec, setCodSelec] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false); 
  const [selectedId, setSelectedId] = React.useState(null); 
  const [selectedArticle, setSelectedArticle] = React.useState(null);
/*   const handleEdit = () => {
    console.log("Editando: ", codSelec);
  };
 */


  const handleOpenDialog = (id,name) => {
    console.log("Open dialog")
    setSelectedId(id);
    setSelectedArticle(name);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedId(null);
  };

  const handleConfirmDelete = async () => {
    console.log("Eliminando artículo:", selectedId);
    await deleteArticle(selectedId);
    handleCloseDialog();
  };

  
  const handleDelete=(id_seleccionado)=>{
    console.log("Eliminando: ",id_seleccionado);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    if (selected[0] === id) {
      // Si el ID ya está seleccionado, se deselecciona al hacer clic de nuevo
      setSelected([]);
      setCodSelec(null);
    } else {
      // Si es un nuevo ID, se selecciona y reemplaza cualquier selección previa
      setCodSelec(id);
      setSelected([id]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 5 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id_articulo);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id_articulo)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id_articulo}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell align="center" component="th">
                      {row.titulo}
                    </TableCell>
                    <TableCell align="center" component="th">
                      {row.primer_nombre} {row.primer_apellido}
                    </TableCell>
                    <TableCell align="center">
                      {row.publicado==1? "Sí":"No"}
                    </TableCell>
                    <TableCell align="center">
                      {row.fecha_actualizado? row.fecha_actualizado.replace("T05:00:00.000Z", ""): "Sin actualizaciones"}
                    </TableCell>
                    <TableCell align="center">
                      {row.fecha_publicado? row.fecha_publicado.replace("T05:00:00.000Z", ""):""}
                    </TableCell>
                    <TableCell align="center">
                    <Tooltip title="Eliminar articulo" placement="top">
                    <IconButton aria-label="delete"   onClick={() => handleOpenDialog(row.id_articulo,row.titulo)}>
                      <DeleteIcon  sx={{ color: "#c93401" }} />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar articulo" placement="top">
                    <IconButton aria-label="delete">
                      <EditIcon  sx={{ color: "#076633" }} />
                    </IconButton>
                    </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
          <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> 
      </Paper>
      <ConfirmDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        title="¿Seguro deseas eliminar este artículo?"
        message={`El artículo "${selectedArticle}" será eliminado. Esta acción no se puede deshacer.`}
      />
    </Box>
  );
}

EnhancedTable.propTypes = {
  rows: PropTypes.array.isRequired,
};
