import React, { useState } from 'react';
import { Button, Typography, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import { Add } from '@mui/icons-material';
import ToDoForm from './ToDoForm';
function AddTask() {
	const [open, setOpen] = useState(false);

	function handleOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}
	return (
		<div>
			<Button
				sx={{
					margin: '16px',
					background: '#B36729',
					'&: hover': {
						background: '#3B2112'
					}
				}}
				variant="contained"
				startIcon={<Add />}
				onClick={handleOpen}
			>
				<Typography fontWeight={700}>TO DO</Typography>
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle sx={{ background: '#E9AA7D' }}>
					<Typography sx={{ color: '#ffffff', fontWeight: 700 }}>Add your Task</Typography>
				</DialogTitle>
				<DialogContent sx={{ background: '#E9AA7D' }}>
					<ToDoForm />
				</DialogContent>
				<DialogActions sx={{ background: '#E9AA7D', display: 'flex' }}>
					<Button
						fullWidth
						sx={{
							background: '#3B2112',
							'&:hover': {
								background: '#ffffff',
								border: '1px solid #3B2112',
								color: '#000'
							}
						}}
						variant="contained"
						onClick={handleClose}
					>
						Exit
					</Button>
					<Button
						sx={{
							background: '#3B2112',
							'&:hover': {
								background: '#ffffff',
								border: '1px solid #3B2112',
								color: '#000'
							}
						}}
						fullWidth
						variant="contained"
						onClick={handleClose}
					>
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddTask;
