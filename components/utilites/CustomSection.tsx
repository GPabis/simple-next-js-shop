import classes from './CustomSection.module.scss';
import { FC } from 'react';

const CustomSection:FC<{title:string, id?:string}> = (props) => {
  return <section id={props.id} className={classes.section}>
      <h1 className={classes.section__title}>{props.title}</h1>
      {props.children}
  </section>
}

export default CustomSection;