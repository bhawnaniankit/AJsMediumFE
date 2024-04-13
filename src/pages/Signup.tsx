import { Quote } from '../components/Quote'
import Auth from '../components/Auth'

export const Signup = () => {
    return (
        <div className=' flex flex-col-reverse md:grid md:grid-cols-2 gap-4'>
            <Auth></Auth>
            <Quote></Quote>
        </div>
    )
}
