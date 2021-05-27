const persons = JSON.parse(localStorage.getItem('persons'));
export default persons || []

export const setPersonsToStorage = persons => localStorage.setItem('persons',JSON.stringify(persons))