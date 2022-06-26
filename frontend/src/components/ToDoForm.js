import React, { useState } from 'react';
import { TextField, FormControl, Input } from '@mui/material';
function ToDoForm() {
	return (
		<FormControl>
			<div>
				<TextField label="Task to do..." variant="outlined" sx={{ color: '#fff' }} />
				<TextField type="date" />
			</div>
			<TextField select label="Category" />
		</FormControl>
	);
}

export default ToDoForm;
