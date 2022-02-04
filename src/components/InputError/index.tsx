import errors from '../../utils/errors.json';

import './styles.scss';

interface InputErrorProps {
  type: string;
  field: string;
}

export function InputError({ type, field }: InputErrorProps) {
  // @ts-expect-error
  return <span className="field-error">{errors[field][type]}</span>;
}
