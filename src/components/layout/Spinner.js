import React, { Fragment } from 'react'
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '50px', margin: 'auto',marginTop: '100px', display: 'block' }} />
    </Fragment>

export default Spinner