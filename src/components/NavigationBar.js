import React, { useState, useEffect } from 'react';
import { Button , Card,CardColumns,Modal,Form,Navbar,Nav,NavDropdown,FormControl } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

const NavigationBar = (props) => {
    const handleSearchChange = props.handleSearchChange;
    const handleFilterRatingChanged = props.handleFilterRatingChanged;

    const [newMovie,setNewMovie]=useState({
        title:'',
        description:'',
        posterUrl:'',
        rate:1
    })
    const handleChange =(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    const handleSave =()=>{
        props.handleAddMovie(newMovie)
        setNewMovie({
            title:'',
            description:'',
            posterUrl:'',
            rate:1
        })
        handleClose()
    }
    
    
    const ratingChanged=(value)=>setNewMovie({...newMovie,rate:value}); 

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

   

    return (
        <div>
          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><Link className="ancre" to= "/">Home </Link></Nav.Link>
    </Nav>
    <div style={{paddingRight:"40px"}}>
  <StarRatingComponent 
	      onStarClick={(nextValue, prevValue, name)=>handleFilterRatingChanged(nextValue)}
        name="SearchRating"
        emptyStarColor={'#ddd'}

        />    
</div> 
    <Form inline>
    <FormControl type="text" placeholder="Search" onChange={(e)=>handleSearchChange(e.target.value)} className="mr-sm-2" />
      
    </Form>
    <Button variant="outline-info"onClick={handleShow} >Add Movie</Button>
  </Navbar>
  
            {/* <Navbar bg="dark" variant="dark">
    
        <Form inline style={{paddingLeft:"20px"}}>
            <FormControl type="text" placeholder="Search" onChange={(e)=>handleSearchChange(e.target.value)} className="mr-sm-2" />
        </Form>  

<div className="mx-auto navbar-nav" >

  <Button  variant="primary" onClick={handleShow} >Add Movie</Button> 
</div> 

  </Navbar> */}
  
			<Modal show={show} onHide={handleClose} animation={false}>


			<Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

		<Form >

  <Form.Group >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="title" value={newMovie.title}  onChange={handleChange} />
  </Form.Group>

  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" name="description" value={newMovie.description}  onChange={handleChange}/> 
  </Form.Group>

  <Form.Group >
    <Form.Label>Poster URL</Form.Label>
    <Form.Control type="text" name="posterUrl" value={newMovie.posterUrl}  onChange={handleChange} />
  </Form.Group>

  <Form.Group >
    <Form.Label>Rating: </Form.Label>

	  {/* <StarRatingComponent 
            onStarClick={(nextValue, prevValue, name)=>ratingChanged(nextValue)}
            name="Rating"
            starColor={'#f00'}
            emptyStarColor={'#ddd'}
        />  */}

  </Form.Group>
  </Form>  

		</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>

		</Modal>
      
        </div>
    )
}

export default NavigationBar
