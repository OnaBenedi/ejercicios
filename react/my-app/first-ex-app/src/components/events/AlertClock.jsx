
function AlertClock() {
  function showTime (){
    const currentTime = new Date().toLocaleTimeString()
    alert(currentTime)
  }

  return (
    <div>
        <button onClick={showTime}>Click to see current time</button>
    </div>
  )
}

export default AlertClock