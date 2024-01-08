'use client'

export default function MyAPIButton() {
  return <button onClick={async () => {
    const res = await fetch("/api/message");
    const myMessage =  await res.json();
    console.log(myMessage.message)
  }}>
    Console Log Get API Message
  </button>
}