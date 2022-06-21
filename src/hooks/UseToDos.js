import { useMemo } from 'react';

export const useSortedToDos = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'active') {
      return [...posts].filter((a) => a.complite === false);
    } else if (sort === 'complited') {
      return [...posts].filter((a) => a.complite === true);
    } else {
      return posts;
    }
  }, [sort, posts]);

  return sortedPosts;
};
