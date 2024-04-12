import { Quote } from '../components/Quote'
import Auth from '../components/Auth'

export const Signup = () => {
    return (
        <div className=' grid md:grid-cols-2'>
            <Auth></Auth>
            <Quote></Quote>
        </div>
    )
}
