import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { author, _id, title, image_url, details, rating } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={author?.img} alt="" />
                <div className='flex-grow-1 ms-3'>
                    <h4 className='mb-0'>{author.name}</h4>
                    <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="bottom" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={3.5}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                        fullSymbol={<FaStar></FaStar>}
                    />
                </div>
                <div>
                    <FaEye></FaEye> {rating.number}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;