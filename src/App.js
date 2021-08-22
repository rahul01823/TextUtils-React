import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route
// } from "react-router-dom"

function App() {

	const [mode,setMode] = useState('light');
	const [alert,setAlert] = useState(null);
	const showAlert = (message,type)=>{
		setAlert({
			msg : message,
			type : type
		})
		setTimeout(()=>{
			setAlert(null);
		},1500);
	}

	

	const toggleMode = ()=>{
		if( mode === 'light'){
			setMode ('dark');
			document.body.style.backgroundColor ='#4c408e';
			showAlert("Dark mode has been enabled",'success');
			document.title = "TextUtils-Dark";
			// setInterval(() =>{
			// 	document.title='Install TextUtils Now';
			// }, 2000);
			
			// setInterval(() =>{
			// 	document.title='TextUtils Is amazing';
			// }, 1500);

		}
		else{
			setMode ( 'light');
			document.body.style.backgroundColor ='white';
			showAlert("Light mode has been enabled",'success');
			document.title = "TextUtils-light";
		}
	}
	return (
	<>
		{/* <Router> */}
		<Navbar title = "TextUtils" toggleMode={toggleMode} mode = {mode}/>
		<Alert alert = {alert}/>
		<div className="container my-3">
		{/* <Switch>
			<Route exact path="/about">
			<About />
			</Route>
		<Route exact path="/">*/}
		<TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode = {mode}/>
	{/*	</Route>
			</Route>
		</Switch> */}
		
	
		</div>
		{/* </Router> */}

	</>
	);        
}

export default App;		
