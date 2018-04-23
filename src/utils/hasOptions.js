import { compose, values, filter, identity, prop, gte, __ } from 'ramda';
import { MIN_OPTIONS } from '../constants';

const hasOptions = compose(
  gte(__, MIN_OPTIONS),
  prop('length'),
  filter(identity),
  values
);

export default hasOptions;
