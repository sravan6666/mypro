import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Card } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { addpropert, logout } from '../actions/userActions'
import logo from '../assets/feature.png';

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' position="fixed" expand='lg' collapseOnSelect style={{padding: '0.1rem'}}>
        <Container>
          <LinkContainer to='/' style={{display:'grid'}}>
            <Navbar.Brand ><Card.Img src={logo} variant='My Pro' width={100}/><span style={{textTransform:'none', marginLeft:'-30px'}}>Capture My Property</span></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {userInfo&&<Route render={({ history }) => <SearchBox history={history} />} />}
            <Nav className='ml-auto'>
              {userInfo ? (
                <NavDropdown title={userInfo.username} id='username'>
                  <LinkContainer to='/mylistings'>
                    <NavDropdown.Item>My Listings</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/changePwd'>
                    <NavDropdown.Item>Change Password</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
