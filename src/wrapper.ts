export const wrap = (input: string, col: number): string => {
  if (input.length <= col){
    return input;
  }

  let space = (input.substring(0, col).lastIndexOf(" "));
  if (space !== -1){
    return (input.substring(0, space) + "\n" + wrap(input.substring(space + 1), col));
  } else{
    return (input.substring(0, col) + "\n" + wrap(input.substring(col), col));
  }
}
