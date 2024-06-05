function Age({edad}) {
  return (
    <div>
      {edad>18? <p>Your age is {edad}</p>: <p>You are very young!</p>}
    </div>
  )
}

export default Age