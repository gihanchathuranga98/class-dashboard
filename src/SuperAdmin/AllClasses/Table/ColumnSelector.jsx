import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const PositionedMenu = ({values, setValues, allColumns}) => {

    const NewAllColumns = React.useMemo(() => allColumns, [])
    
    console.log(allColumns[0])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    ;
    console.log('handleChanges()');
    console.log(event.target.id);
    if (true){
        console.log('value.lenght < 1');
        console.log(values);
        if (values.includes(event.target.id)){
            var vals = values.filter(val => val !== event.target.id)
            ;
            console.log(vals)
            setValues(vals)
        }else {
            var newValues = [...values];
            newValues.push(event.target.id)
            setValues(newValues)
        }
    }else{
        var vals = values.push(event.target.value)
        setValues(vals)
    }
  }

    const isIncluded = (val) => {
        console.log('value ' + val)
        console.log(values);
        if(values.includes(val)){
            return true
        }
        return false
    }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='primary'
        variant='contained'
        endIcon={<ArrowDropDownCircleOutlinedIcon/>}
      >
        Columns
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{width: '3000px'}}
      >
      {
        NewAllColumns.map( column => (
            <div key={column.id} style={{padding: 10}}>
                <input type="checkbox" {...column.getToggleHiddenProps()} className='column-check'/>{column.Header}
            </div>
        ))
      }
        {/* <MenuItem value={0} selected={isIncluded(0)} onClick={handleChange}>Institute Nama</MenuItem>
        <MenuItem value={1} selected={isIncluded(1)} onClick={handleChange}>Owner Name</MenuItem>
        <MenuItem value={2} selected={isIncluded(2)} onClick={handleChange}>Contact No.</MenuItem>
        <MenuItem value={3} selected={isIncluded(3)} onClick={handleChange}>Payment Type</MenuItem>
        <MenuItem value={4} selected={isIncluded(4)} onClick={handleChange}>Payment Date</MenuItem>
        <MenuItem value={5} selected={isIncluded(5)} onClick={handleChange}>Payment</MenuItem> */}
      </Menu>
    </div>
  );
}

export default PositionedMenu;