export const ADD_COPY = 'ADD_COPY'
export const REMOVE_COPY = 'REMOVE_COPY'

export function addCopy() {
  return {
    type: ADD_COPY
  }
}

export function removeCopy() {
  return {
    type: REMOVE_COPY
	}
}
