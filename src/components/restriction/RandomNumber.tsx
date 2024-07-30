type RandomNumberType = {
  value: number;
};

type Positive = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type Negative = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = Positive | Negative | Zero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      value: {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
