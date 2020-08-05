export { default as useDarkMode } from './useDarkMode';
export { default as useEventListener } from './useEventListener';
export { default as usePersistedState } from './usePersistedState';
export { default as useScript } from './useScript';

export const formatIcon = str => str.toUpperCase().replace(/-/g, '_');

export const formatPercent = str => (parseFloat(str) * 100).toFixed(0);

export const formatMbar = str => parseFloat(str) / 33.864;

export const formatDir = deg => {
  const directions = [
    `up`,
    `up-right`,
    `right`,
    `down-right`,
    `down`,
    `down-left`,
    `left`,
    `up-left`,
    `up`,
  ];
  return directions[Math.round((deg % 360) / 45)];
};

export const linearScale = (domain, range) => {
  const d0 = domain[0];
  const r0 = range[0];
  const m = (range[1] - r0) / (domain[1] - d0);

  return Object.assign(
    num => {
      return r0 + (num - d0) * m;
    },
    {
      inverse: () => linearScale(range, domain),
    }
  );
};
