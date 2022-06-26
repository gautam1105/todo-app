import React from 'react';
import { Paper, Typography } from '@mui/material';

function Done() {
	return (
		<div style={{ width: '100%', margin: '8px' }}>
			<Paper sx={{ display: 'flex', justifyContent: 'center', background: '#90361E', color: '#fff' }}>
				<Typography fontWeight={700}>Done</Typography>
			</Paper>
		</div>
	);
}

export default Done;
