export const useFirstLetterHook = () => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return { capitalizeFirstLetter }
}
