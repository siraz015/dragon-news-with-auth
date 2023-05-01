import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container>
                <h2>Our Terms and Condition</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit temporibus magni culpa recusandae a facilis et saepe, est dicta id eos, reiciendis vero excepturi amet, omnis repellat qui quam.</p>
                <p> Go Back <Link to='/register'>Register</Link> </p>
            </Container>
        </div>
    );
};

export default Terms;