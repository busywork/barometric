export const formatIcon = str => {
  return str.toUpperCase().replace(/-/g, '_');
};

export const formatPercent = str => {
  return (parseFloat(str) * 100).toFixed(0);
};

export const formatMbar = str => {
  return parseFloat(str) / 33.864;
};

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