import React from 'react';
import { Paper, Typography } from '@mui/material';

function Todo() {
	return (
		<div style={{ width: '100%', margin: '8px' }}>
			<Paper sx={{ display: 'flex', justifyContent: 'center', background: '#90361E', color: '#fff' }}>
				<Typography fontWeight={700}>To Do</Typography>
			</Paper>
		</div>
	);
}

export default Todo;
