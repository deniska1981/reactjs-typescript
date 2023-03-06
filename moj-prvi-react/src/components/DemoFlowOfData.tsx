import React, {useState} from 'react'

import Dijete from './Dijete'

type Props = {}

const DemoFlowOfData = (props: Props) => {
    const [brojac, setBrojac] = useState(0)

  return (
    <div style={{backgroundColor:"yellow"}}>
        <h1>Bok ljudi, ja sam roditelj.</h1>
        <h2>Imam dijete koje broji za mene!</h2>
        <Dijete brojac={brojac} setBrojac={setBrojac}/>
        <h2>Eto vidite kako dobro broji.</h2>
    </div>
  )
}

export default DemoFlowOfData