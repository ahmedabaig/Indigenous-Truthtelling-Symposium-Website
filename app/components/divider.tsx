interface DividerProps {
  color1: string;
  color2?: string;
}

function Divider({color1, color2}: DividerProps) {
  if (color2 == undefined) {
    return <div className="h-4" style={{backgroundColor: color1}}></div>
  }
  return <><div className="h-2" style={{backgroundColor: color1}}></div><div className="h-2" style={{backgroundColor: color2}}></div></>
}

export default Divider;