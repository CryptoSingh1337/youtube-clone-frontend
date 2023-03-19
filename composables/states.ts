export const useFile = () => {
  const videoFile = useState<File[]>('file', () => [])
  const setFile = (payload: File) => {
    videoFile.value = [payload] as File[]
  }

  const clearFile = () => {
    videoFile.value.splice(0, 1)
  }
  return {
    videoFile,
    setFile,
    clearFile
  }
}

export const useSubscribeState = () => {
  const subscribeState = useState<boolean>('subscribeState', () => false)
  const toggleSubscribeState = () => {
    subscribeState.value = !subscribeState.value
  }
  return {
    subscribeState,
    toggleSubscribeState
  }
}
