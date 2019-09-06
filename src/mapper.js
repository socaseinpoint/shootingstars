export default function mapper(value, smin, smax, dmin, dmax) {
  return ((value - smin) / (smax - smin)) * (dmax - dmin) + dmin;
}
