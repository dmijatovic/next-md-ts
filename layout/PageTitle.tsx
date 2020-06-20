
export type TPageTitle = React.FC<{title:string}>

/**
 * Use it as page title. It is h2 text.
*/
const PageTitle:TPageTitle=({title="Default title"})=>{
  return (
    <h2>{title}</h2>
  )
}

export default PageTitle