import { Badge } from 'reactstrap'

type Props = {
    name: string,
    
}

const MyBadge = (props: Props) => {
  return (
    <Badge className="text-black " pill>{props.name}</Badge>

  )
}

export default MyBadge