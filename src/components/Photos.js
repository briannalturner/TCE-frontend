import React from 'react'
import career2 from '../pictures/career2.JPG'
import brush_sidewalk from '../pictures/brush_sidewalk.JPG'
import Lightbox from 'react-image-lightbox';
import curved_sidewalk from '../pictures/curved_sidewalk.JPG'
import parking from '../pictures/parking.JPG'
import pool from '../pictures/pool.JPG'
import porch from '../pictures/porch.JPG'
import street from '../pictures/street.JPG'
import walkway from '../pictures/walkway.JPG'
import excavating from '../pictures/excavating.JPG'

const images = [
    'http://localhost:3000/static/media/career2.c163616f.JPG',
    'http://localhost:3000/static/media/brush_sidewalk.fe94a2b3.JPG',
    'http://localhost:3000/static/media/curved_sidewalk.0af55566.JPG',
    'http://localhost:3000/static/media/parking.536dbc86.JPG',
    'http://localhost:3000/static/media/pool.f5c86884.JPG',
    'http://localhost:3000/static/media/porch.dbaccbd2.JPG',
    'http://localhost:3000/static/media/excavating.76922218.JPG',
    'http://localhost:3000/static/media/walkway.7402992c.JPG',
    'http://localhost:3000/static/media/street.2eac350b.JPG',
];

class Photos extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className='my-3'>
                <h1 className='text-middle mt-4'>Photos</h1>
                <p className='lead'>Click on an image to view in fullscreen.</p>
                <div className='row'>
                    <div className='col'>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:0 })} alt='' className='border mb-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={parking} onClick={() => this.setState({ isOpen: true, photoIndex:3 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={excavating} onClick={() => this.setState({ isOpen: true, photoIndex:6 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={brush_sidewalk} onClick={() => this.setState({ isOpen: true, photoIndex:1 })} alt='' className='border mb-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={porch} onClick={() => this.setState({ isOpen: true, photoIndex:4 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={walkway} onClick={() => this.setState({ isOpen: true, photoIndex:7 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={curved_sidewalk} onClick={() => this.setState({ isOpen: true, photoIndex:2 })} alt='' className='border mb-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={pool} onClick={() => this.setState({ isOpen: true, photoIndex:5 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                        <img src={street} onClick={() => this.setState({ isOpen: true, photoIndex:8 })} alt='' className='border my-3 rounded img-preview clickable img-fluid img-thumbnail' style={{height: '300px', objectFit:'cover'}}/>
                    </div>
                </div>
                {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
            </div>
        )
    }
}

export default Photos;