import { ReactNode } from "react"


type Props = {
  children: ReactNode,
  name: string
}
const GodsElement = ({children, name}: Props) =>{
  if(name === "heading-2"){
    return(
      <h2>
        {children}
      </h2>
    )
  }
  else if(name === "heading-3"){
    return(
      <h3>
        {children}
      </h3>
    )
  }
  else if(name === "blockquote"){
    return(
      <i>
        {children}
      </i>
    )
  }
  else if(name === "embedded-entry-block"){
    return(
      <></>
    )
  }
  else if(name === "paragraph"){
    return(
      <p>
        {children}
      </p>
    )
  }
  else if(name === "text"){
    return(
      <span>
        {children}
      </span>
    )
  }
  return(
    <>
      element does not exist
    </>
  )
}
export default GodsElement