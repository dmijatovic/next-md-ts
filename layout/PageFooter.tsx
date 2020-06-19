import style from './PageFooter.module.css'

export interface iFooterData{
  titleLeft?: string,
  titleRight?: string
}

export default ({titleLeft="Title left", titleRight="Title right"}:iFooterData)=>{
  return(
    <footer className={style.footer}>
      <h3>{titleLeft}</h3>
      <h3>{titleRight}</h3>
    </footer>
  )
}