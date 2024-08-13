interface PriceFormatOptions {
  bigNumber?: boolean;
  full?: boolean;
  decimalPlaces?: number;
  smallDecimalPlaces?: number;
  smallLongDecimalPlaces?: number;
}

export function formatPriceUtil(
  value: number,
  {
    bigNumber = false,
    full = false,
    decimalPlaces = 2,
    smallDecimalPlaces = 5,
    smallLongDecimalPlaces = 4,
  }: PriceFormatOptions = {},
) {
  if (isNaN(value)) return "";

  if (bigNumber) {
    return formatBigNumber(value);
  }
  if (value < 1 && value > -1) {
    return formatLowNumber(
      value,
      full,
      smallDecimalPlaces,
      smallLongDecimalPlaces,
    );
  }

  //1보다 큰 숫자는 소수점 아래 2자리까지만 표시
  let localValue = toFixedWithoutRounding(value, decimalPlaces);

  const parts = localValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (!full && parts[0].length > 12) {
    return formatBigNumber(value);
  }

  if (!full && parts[0].length > 8) {
    return parts[0];
  }

  return parts.join(".");
}

export function formatBigNumber(num: number) {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + "T";
  }
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  }
  return num.toLocaleString();
}

export function formatBigNumberTwoTwo(num: number) {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + "T";
  }
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  }

  return formatPriceUtil(num);
}

function formatLowNumber(
  value: number,
  full = false,
  smallDecimalPlaces: number,
  smallLongDecimalPlaces: number,
) {
  if (value === 0) {
    return "0";
  }

  // 소수점 아래 값이 6자리 이하라면 그대로 반환
  if (value >= 0.0001 || value <= -0.0001) {
    return toFixedWithoutRounding(value, smallDecimalPlaces);
  }

  const tempType = convertWithoutE(value).split(".")[0];
  const tempValue = convertWithoutE(value).split(".")[1];

  // 소수점 아래 0 값을 모두 표현한 4자리 숫자 반환
  if (full) {
    for (let i = 0; i < tempValue?.length; i++) {
      if (tempValue[i] !== "0") {
        if (tempType === "0") {
          return `0.${tempValue.slice(0, i + smallLongDecimalPlaces)}`;
        }
        if (tempType === "-0") {
          return `-0.${tempValue.slice(0, i + smallLongDecimalPlaces)}`;
        }
      }
    }
  } else {
    // 소수점 아래에서 0이 아닌 첫 번째 숫자 직전까지의 숫자들을 반환
    for (let i = 0; i < tempValue?.length; i++) {
      if (tempValue[i] !== "0") {
        if (tempType === "0") {
          return `0.0...${tempValue.slice(i, i + smallLongDecimalPlaces)}`;
        }
        if (tempType === "-0") {
          return `-0.0...${tempValue.slice(i, i + smallLongDecimalPlaces)}`;
        }
      }
    }
  }

  // 모든 값이 0이면 다음과 같이 반환
  return `0`;
}

export function toFixedWithoutRounding(num: number, precision: number) {
  if (num > 0) {
    const multiplier = Math.pow(10, precision);
    return (Math.floor(num * multiplier) / multiplier).toFixed(precision);
  } else {
    return num.toFixed(precision);
  }
}

export function convertWithoutE(num: number) {
  const sign = Math.sign(num) === -1 ? "-" : "";
  const str = String(Math.abs(num));

  if (!str.includes("e")) {
    return str;
  }

  let [base, exponent] = str.split("e");
  let [whole, decimal] = base.split(".");
  const e = Number(exponent);

  if (e > 0) {
    return sign + whole + (decimal || "").padEnd(e, "0");
  } else {
    const adjustedExponent = Math.abs(e) - 1;
    return sign + "0." + "0".repeat(adjustedExponent) + whole + (decimal || "");
  }
}
