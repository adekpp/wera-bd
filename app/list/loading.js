import Spinner from '../components/Spinner'

export default function Loading() {
  return (
    <div className='grid flex-1 items-start mt-32'>
      <div className="mt-6 font-sans inline-flex space-x-2"><Spinner color={'black'} size={'24'}/> <p>Ładuję</p></div>
    </div>
    
  )
}