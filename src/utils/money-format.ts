export const cleanMoneyFormat = (moneyString: string): number => {
  const cleanedString = moneyString.replace(/[^0-9.]/g, '')

  const numberValue = parseFloat(cleanedString)

  if (!isNaN(numberValue)) {
    return numberValue
  } else {
    return NaN
  }
}

export const formatNumber = (n: string): string => {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatCurrency = (input: string, blur?: string): string => {
  if (input === '') {
    return input
  }

  if (input.indexOf('.') >= 0) {
    const decimalPos = input.indexOf('.')

    const leftSide = input.substring(0, decimalPos)
    let rightSide = input.substring(decimalPos)

    const formattedLeft = formatNumber(leftSide)

    rightSide = formatNumber(rightSide)

    if (blur === 'blur') {
      rightSide += '00'
    }

    rightSide = rightSide.substring(0, 2)

    return formattedLeft + '.' + rightSide
  } else {
    return formatNumber(input);
  }
}