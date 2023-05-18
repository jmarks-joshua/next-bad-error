/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  const getData = () => 'Test'

  const formAction = async () => {
      'use server'
      const name = getData()
  }
  
  return <form action={formAction}>
    <button type='submit' >Submit</button>
  </form>
}
