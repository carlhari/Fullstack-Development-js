import React from 'react'

function Navigation(props) {
  return (
    <div className="navigation">
        <div className="title">System</div>
        <div className="btns">
            <a href="#" onClick={props.handleShow}>{!props.showApp ? 'Login': 'Register'}</a>
        </div>
    </div>
  )
}

export default Navigation