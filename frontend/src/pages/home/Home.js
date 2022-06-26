import React from 'react';
import AddTask from '../../components/AddTask';
import Todo from '../../components/Todo';
import Done from '../../components/Done';
import './home.css';

function Home() {
	return (
		<div className="home-container">
			<AddTask />
			<div className="tasks-container">
				<Todo />
				<Done />
			</div>
		</div>
	);
}

export default Home;
