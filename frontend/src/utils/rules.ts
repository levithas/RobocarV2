export const rules = {
  mustBeNumber(value: number) {
    if(!isNaN(value)) {
      return true;
    }
    else
    {
      return "Value must be a number!"
    }
  },

  biggerThan1000(value: number) {
    if (value < 1000) {
      return "Value too small!"
    }
    else {
      return true;
    }
  }
}
