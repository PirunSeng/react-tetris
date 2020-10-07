import { useState, useEffect, useCallback } from 'react'

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const linePoints = [40, 100, 300, 1200]

  // try remove useCallback and see it's infinite loop
  const calcScore = useCallback(() => {
    console.log("====== RUNNING.............")
    // check if we have score
    console.log("----------- rowsCleared: ", rowsCleared)
    if (rowsCleared > 0) {
      // how original Tetris scroe is calculated
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
      setRows(prev => prev + rowsCleared)
    }
  }, [level, linePoints, rowsCleared])

  useEffect(() => {
    calcScore()
  }, [calcScore, rowsCleared, score])

  return [score, setScore, rows, setRows, level, setLevel]

}