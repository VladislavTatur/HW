import {ChangeEvent} from 'react'

type InputPropsType = {
  currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: (title: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // НУЖНО ДОПИСАТЬ
    const currentText = event.currentTarget.value
    props.setCurrentText(currentText)
  }

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
  )
}
