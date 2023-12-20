import { useContext } from "react";
import logininimage from "../../assets/signup.gif"
import google from "../../assets/icon/google.svg"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/";
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    
  
    const onSubmit = async (data) => {
      console.log(data)
     
  
      createUser(data.email, data.password)
        .then(result => {
          console.log(result.user)
          toast.success('User Created successfully');
          updateUserProfile(data.name)
            .then((() => {
              navigate(from, { replace: true })
              reset()
            }))
        })
        .catch(error => {
          toast.error(error.message)
  
        })
    }
  
    const handleGoogleSignIn = () => {
      googleSignIn()
        .then(result => {
          toast.success('User Created successfully');
          navigate(from, { replace: true })
        })
        .catch(error => {
          toast.error(error.message)
        })
    }


    return (
        <div className="w-[100vw] py-[5vh] lg:h-[100vh]">

            <div style={{ boxShadow: "3px 3px 33px 3px #1C3988" }} className="max-w-screen-2xl lg:h-[90vh] mx-auto flex flex-col lg:flex-row-reverse justify-around items-center">

                {/* image  */}
                <div>
                    <img src={logininimage} alt="" />

                </div>


                {/* form  */}
                <div className="md:w-[28rem]">
                    <h1 className="text-black text-center text-[2.5rem] font-semibold">Sign Up</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <p className="text-[#444] mt-5 text-xl font-semibold">Name</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Your name" {...register("name", { required: true })} />

                        {errors.name && <span>This field is required</span>}

                        <p className="text-[#444] mt-5 text-xl font-semibold">Email</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" {...register("email", { required: true })} />

                        <p className="text-[#444]  text-xl mt-4 font-semibold">Password</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

                        {errors.password?.type === 'minLength' && <span>Password must be 6 character</span>}



                        <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#1C3988] text-white text-xl font-bold" type="submit" id="" value="Sign Up" />

                        <p className="text-[#1C3988] mt-5 text-center text-xl font-medium">Already have an account? <Link to='/login'><span className="font-bold">Log in</span></Link></p>

                        <p className="text-[#444] mt-5 text-xl font-medium text-center">Or sign in with</p>

                        <div className="flex items-center justify-center gap-14 mt-5">

                            <div onClick={handleGoogleSignIn} className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-[#1C3988] rounded-[50%] ">
                                <img src={google} alt="" />
                            </div>

                        </div>
                    </form>


                </div>


            </div>

        </div>
    );
};

export default SignUp;