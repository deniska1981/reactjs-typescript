import React, {useState} from 'react'

type Props = {}

export const GrbVjezba = (props: Props) => {
    const [polje, setPolje] = useState({a1:false,a2:true});
  return (
    <div>
        <div onClick={()=>setPolje({...polje,a1:!polje.a1})}>{polje.a1 ? "bilo": "crveno"}</div>
        <div onClick={()=>setPolje({...polje,a2:!polje.a2})}>{polje.a2 ? "bilo": "crveno"}</div>
    </div>
  )
}