import './static/templates/styles.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import CustomNavbar from './Components/NavBar/CustomNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageChains from './Components/ManageChains';
import ManageEmails from './Components/ManageEmails';
import CreateEmail from './Components/CreateEmail';
import CreateChain from './Components/CreateChain';
import EditEmail from './Components/EditEmail';
import HandleLogin from './Components/HandleLoginPanels';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route
						path='/login'
						exact
						render={(props) => <HandleLogin loginPanel {...props} />}
					/>
					<Route
						path='/register'
						exact
						render={(props) => <HandleLogin {...props} />}
					/>
					<Route path='/'>
						<CustomNavbar />
						<Switch>
							<Route path='/' exact component={Dashboard}></Route>
							<Route
								path='/chains/manage'
								exact
								component={ManageChains}></Route>
							<Route path='/email/edit/:id' exact component={EditEmail} />
							<Route
								path='/email/manage'
								exact
								component={ManageEmails}></Route>
							<Route path='/email/add' exact component={CreateEmail}></Route>
							<Route path='/chains/add/:chainId?' exact component={CreateChain}></Route>
              {/* <Route path='/chains/edit/:id' exact component={EditChain}></Route> */}
						</Switch>
						<Footer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
