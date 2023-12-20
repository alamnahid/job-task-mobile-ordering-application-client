import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddMobile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['mobile'],
        mutationFn: (addingData) => {
            return axios.post('https://job-task-mobile-ordering-application-server.vercel.app/addmobile', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                title: "New Mobile Add Successfully",
                text: "The mobile is show in everywhere",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/')
                    reset();
                }
            });
        }

    })

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            mutate({
                modelname: data.modelname,
                brandname: data.brandname,
                price: data.price,
                type: data.type,
                processor: data.processor,
                storage: data.storage,
                battery: data.battery,
                display: data.display,
                camera: data.camera,
                image: res.data.data.display_url,
                description: data.description,
                sellCount: 0
            })
        }


    }
    return (
        <div className=" mt-20 mb-20">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-black text-center text-[2.5rem] font-semibold">Add New Mobile</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* mobile name  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Model name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="modelname" id="" placeholder="Enter Model name" {...register("modelname", { required: true })} />
                    {errors.modelname && <span>This field is required</span>}

                    {/* Brand name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Choose the Brand</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("brandname", { required: true })}>
                        <option value="">Select Mobile Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Redmi">Redmi</option>
                        <option value="Realme">Realme</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Symphony">Symphony</option>
                        <option value="Itel">Itel</option>
                        <option value="HTC">HTC</option>
                        <option value="Sony">Sony</option>
                        <option value="Pixel">Pixel</option>
                        <option value="Motorolla">Motorolla</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Lenovo">Lenovo</option>

                    </select>

                    {/* Price input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Mobile Price</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="price" id="" placeholder="Enter Mobile Price" {...register("price", { required: true })} />

                    {/* type name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Enter the Type</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("type", { required: true })}>
                        <option value="">Select Mobile Type</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Flip Phones">Flip Phones</option>
                        <option value="Others">Others</option>
                    </select>


                    {/* processor name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Select the Processor</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("processor", { required: true })}>
                        <option value="">Select Mobile Processor</option>
                        <option value="Snapdragon 888">Snapdragon 888</option>
                        <option value="Apple A15 Bionic">Apple A15 Bionic</option>
                        <option value="Exynos 2100">Exynos 2100</option>
                        <option value="MediaTek Dimensity 1200">MediaTek Dimensity 1200</option>
                        <option value="Kirin 9000">Kirin 9000</option>
                        <option value="Snapdragon 870">Snapdragon 870</option>
                        <option value="Apple A14 Bionic">Apple A14 Bionic</option>
                        <option value="Snapdragon 765G">Snapdragon 765G</option>
                        <option value="MediaTek Helio G95">MediaTek Helio G95</option>
                        <option value="Exynos 990">Exynos 990</option>
                        <option value="Others">Others</option>

                    </select>


                    {/* storage input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Select the Storage</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("storage", { required: true })}>
                        <option value="">Select Mobile Storage</option>
                        <option value="4/64">4GB RAM / 64GB ROM</option>
                        <option value="6/128">6GB RAM / 128GB ROM</option>
                        <option value="8/256">8GB RAM / 256GB ROM</option>
                        <option value="12/512">12GB RAM / 512GB ROM</option>
                        <option value="16/1TB">16GB RAM / 1TB ROM</option>
                        <option value="6/64">6GB RAM / 64GB ROM</option>
                        <option value="8/128">8GB RAM / 128GB ROM</option>
                        <option value="12/256">12GB RAM / 256GB ROM</option>
                        <option value="16/512">16GB RAM / 512GB ROM</option>
                        <option value="24/1TB">24GB RAM / 1TB ROM</option>

                    </select>


                    {/* battery size input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Select the Battery</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("battery", { required: true })}>
                        <option value="">Select Mobile Battery</option>
                        <option value="3000mAh">3000mAh</option>
                        <option value="4000mAh">4000mAh</option>
                        <option value="5000mAh">5000mAh</option>
                        <option value="6000mAh">6000mAh</option>
                        <option value="7000mAh">7000mAh</option>
                        <option value="4500mAh">4500mAh</option>
                        <option value="5500mAh">5500mAh</option>
                        <option value="6500mAh">6500mAh</option>
                        <option value="7500mAh">7500mAh</option>
                        <option value="8000mAh">8000mAh</option>
                    </select>


                    {/* display size input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Select the Display</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("display", { required: true })}>
                        <option value="">Select Mobile Display</option>
                        <option value="5.5-inch HD">5.5-inch HD</option>
                        <option value="6.0-inch Full HD">6.0-inch Full HD</option>
                        <option value="6.4-inch AMOLED">6.4-inch AMOLED</option>
                        <option value="6.7-inch Quad HD">6.7-inch Quad HD</option>
                        <option value="6.2-inch IPS LCD">6.2-inch IPS LCD</option>
                        <option value="5.8-inch Super Retina XDR">5.8-inch Super Retina XDR</option>
                        <option value="6.5-inch OLED">6.5-inch OLED</option>
                        <option value="6.1-inch Dynamic AMOLED">6.1-inch Dynamic AMOLED</option>
                        <option value="6.3-inch QHD+">6.3-inch QHD+</option>
                        <option value="5.9-inch Edge-to-Edge">5.9-inch Edge-to-Edge</option>

                    </select>

                    {/* camera input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Select the Camera</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("camera", { required: true })}>
                        <option value="">Select Mobile Camera</option>
                        <option value="12MP + 8MP Dual Rear">12MP + 8MP Dual Rear</option>
                        <option value="48MP + 5MP Dual Rear">48MP + 5MP Dual Rear</option>
                        <option value="64MP + 12MP + 5MP Triple Rear">64MP + 12MP + 5MP Triple Rear</option>
                        <option value="108MP + 20MP + 8MP Triple Rear">108MP + 20MP + 8MP Triple Rear</option>
                        <option value="16MP Front, 64MP + 12MP + 5MP Rear">16MP Front, 64MP + 12MP + 5MP Rear</option>
                        <option value="20MP Front, 48MP + 5MP Rear">20MP Front, 48MP + 5MP Rear</option>
                        <option value="32MP + 8MP Dual Front, 64MP + 12MP + 5MP Triple Rear">32MP + 8MP Dual Front, 64MP + 12MP + 5MP Triple Rear</option>
                        <option value="12MP + TOF 3D Rear">12MP + TOF 3D Rear</option>
                        <option value="24MP Front, 108MP + 20MP + 8MP Triple Rear">24MP Front, 108MP + 20MP + 8MP Triple Rear</option>
                        <option value="10MP Front, 48MP + 12MP + 5MP Triple Rear">10MP Front, 48MP + 12MP + 5MP Triple Rear</option>


                    </select>


                    {/* Description input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                    <input className="w-full mt-2 h-[6.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Enter full Description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

                    {/* Image input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Image</p>

                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-xs mt-5" />
                    {errors.image && <span>This field is required</span>}

                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#1C3988] text-white text-xl font-bold" type="submit" id="" value="Add Mobile" />

                </form>


            </div>


        </div>
    );
};

export default AddMobile;