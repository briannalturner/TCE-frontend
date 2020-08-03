import React from 'react'
import career2 from '../pictures/career2.JPG'
import Lightbox from 'react-image-lightbox';

const images = [
    'https://images.unsplash.com/photo-1560155069-ad79768f2666?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1553549216-903af0603b16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
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

        // return (
        //     <div>
        //       <button type="button" onClick={() => this.setState({ isOpen: true })}>
        //         Open Lightbox
        //       </button>
       
        //       {isOpen && (
        //         <Lightbox
        //           mainSrc={images[photoIndex]}
        //           nextSrc={images[(photoIndex + 1) % images.length]}
        //           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        //           onCloseRequest={() => this.setState({ isOpen: false })}
        //           onMovePrevRequest={() =>
        //             this.setState({
        //               photoIndex: (photoIndex + images.length - 1) % images.length,
        //             })
        //           }
        //           onMoveNextRequest={() =>
        //             this.setState({
        //               photoIndex: (photoIndex + 1) % images.length,
        //             })
        //           }
        //         />
        //       )}
        //     </div>
        //   );

        return (
            <div className='my-3'>
                <h1 className='text-middle mt-4'>Photos</h1>
                <div className='row'>
                    <div className='col'>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:0 })} alt='' className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:3 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:6 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:1 })} alt='' className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:4 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:7 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:2 })} alt='' className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:5 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} onClick={() => this.setState({ isOpen: true, photoIndex:8 })} alt='' className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
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