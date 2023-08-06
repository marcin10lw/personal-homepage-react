import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './index.module.scss';

const ProjectPlaceholder = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#333333">
      <div className={styles.placeholder}>
        <Skeleton style={{ aspectRatio: '27 / 20' }} />
        <Skeleton height={28} width={'80%'} />
        <Skeleton height={24} width={'65%'} />
        <div className={styles.links}>
          <Skeleton height={24} width={'55%'} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProjectPlaceholder;
