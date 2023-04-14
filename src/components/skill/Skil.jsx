import React from 'react'
import "./Skil.css"
import { Card } from 'antd';
import html from "../../Assets/html.png"
const { Meta } = Card;

function Skil() {
  return (
    <div className='skildiv'>
        <div className='skildiv2'><h1>Skills</h1></div>
       <div className="r1">
       <Card
    hoverable
    style={{
      width: 240,
      height:300,
      
      
    }}
    cover={<img className='img1' alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" />}
  >
    <Meta className='head1' title="HTML" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={html} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

  
       </div>
       <div className="r2">
       <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

       </div>

    </div>
  )
}

export default Skil;