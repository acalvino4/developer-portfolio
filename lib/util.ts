// import { RefObject } from 'react';

export const modOpacity = (color: string, alpha: number): string => {
  const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[.\d+]*)*\)/g.exec(color) || [0, 0, 0, 0];
  const newAlpha = alpha > 1 ? (alpha / 100) : alpha;
  const newColor = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${newAlpha})`;
  return newColor;
};

export const closeNav = (id: string) => () => {
  const toggler = document.getElementById(id);
  if (toggler && !toggler.classList.contains('collapsed')) {
    toggler.click();
  }
};

// copied from https://medium.com/ghostcoder/debounce-vs-throttle-vs-queue-execution-bcde259768
// export function throttleQueue(func: { (arg0: any): void; }, waitTime: number) {
//   const funcQueue: any[] = [];
//   let isWaiting: boolean;

//   function executeFunc(params: any) {
//     isWaiting = true;
//     func(params);
//     // eslint-disable-next-line no-use-before-define
//     setTimeout(play, waitTime);
//   }

//   function play() {
//     isWaiting = false;
//     if (funcQueue.length) {
//       const params = funcQueue.shift();
//       executeFunc(params);
//     }
//   }

//   return function ret(params: any) {
//     if (isWaiting) {
//       funcQueue.push(params);
//     } else {
//       executeFunc(params);
//     }
//   };
// }

// export const setRefAsLoaded = throttleQueue((ref: RefObject<HTMLElement>) => {
//   ref?.current?.classList.add('loaded');
// }, 250);

export const setThisAsLoaded = (el: HTMLImageElement) => {
  if (el) {
    if (el.complete) {
      // settimeout ensures that img exists at least for an instant as unloaded so that it can fade it
      setTimeout(() => el.classList.add('loaded'), 50);
    }
    // eslint-disable-next-line no-param-reassign
    el.onload = () => { el.classList.add('loaded'); };
  }
};

export const searchFilter = (project: any, terms: string) => {
  const projectConcat = (project.id + project.type + project.heading + project.subHeading + project.synopsis + project.technologies + project.keywords).toLowerCase();
  const allTermsFound = !terms.split(' ').some((term) => !projectConcat.includes(term));
  return allTermsFound;
};
