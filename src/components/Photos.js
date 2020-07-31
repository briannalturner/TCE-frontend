import React from 'react'
import career2 from '../pictures/career2.JPG'

class Photos extends React.Component {

    render() {
        return (
            <div className='my-3'>
                <h1 className='text-middle mt-4'>Photos</h1>
                <div className='row'>
                    <div className='col'>
                        <img src={career2} className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={career2} className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                    </div>
                    <div className='col'>
                        <img src={career2} className='border mb-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                        <img src={career2} className='border my-3 rounded clickable' style={{maxHeight: 'inherit', width:'inherit', objectFit:'cover'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photos;