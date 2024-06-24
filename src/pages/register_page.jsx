import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img src="/img/icon.png" alt="icon" className="w-24 mx-auto mb-20"/>
                <form>
                    <label className="block font-Inter font-medium mt-10" for="username">Username</label>
                    <input type="text" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="John Doe" name="username" id="username"/>

                    <label className="block font-Inter font-medium mt-5" for="email">Email Address</label>
                    <input type="email" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="example@gmail.com" name="email" id="email"/>

                    <label className="block font-Inter font-medium mt-5" for="phoneNumber">Phone Number</label>
                    <input type="text" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="+1 234 5678" name="phoneNumber" id="phoneNumber"/>

                    <label className="block font-Inter font-medium mt-5" for="password">Password</label>
                    <input type="password" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="***********" name="password" id="password"/>
                    
                    <div>
                        <button className="w-96 h-12 bg-blue-600 text-white font-Inter font-medium rounded-lg mt-8">Register</button>
                        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;