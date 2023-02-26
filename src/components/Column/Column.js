import styles from './Column.module.scss';

const Column = props =>{
  return( 
      <article>
        <h2 className={styles.title} title={props.title}>
          <span className={styles.icon + ' fa fa-' + props.icon} />
          {props.title}
        </h2>
      </article>
  );
};

export default Column;