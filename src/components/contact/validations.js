export const validateEmail = input => !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.trim()) ? 'Bitte gib eine gültige Email ein.' : null
export const validateName = input => input.trim().length < 2 ? 'Der Name muss min. 2 Zeichen lang sein.' : null

export const validateCompany = input => {
  const stringToValidate = input.trim()
  return !!stringToValidate && stringToValidate.length < 2 ? 'Der Unternehmensname muss min. 2 Zeichen lang sein.' : null
}